var X=Object.defineProperty;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var I=(o,u,e)=>u in o?X(o,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[u]=e,V=(o,u)=>{for(var e in u||(u={}))L.call(u,e)&&I(o,e,u[e]);if(w)for(var e of w(u))Q.call(u,e)&&I(o,e,u[e]);return o};import{U as _,L as W,W as G,Q as t,a1 as D,X as i,a9 as M,aX as f,a2 as n,aR as q}from"./vue.64e975b8.js";import{_ as z}from"./index.ac2db5b0.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.0c35ed0d.js";const H={name:"component-doc",components:{"hb-demo0":function(){const{createElementVNode:o,createTextVNode:u,resolveComponent:e,withCtx:l,createVNode:r,Fragment:b,openBlock:m,createElementBlock:d}=f,F=o("span",{class:"m-r-md"},"\u81EA\u5B9A\u4E49Slot\uFF1A",-1),E=u("\u5907\u9009\u9879"),g=u("\u5907\u9009\u9879"),v=u("\u672A\u52A0\u7C97"),C=u("\u8FC7\u6EE4\u6761\u4EF6\u6539\u6210\u4E09\u5217"),A=u("\u8FC7\u6EE4\u6761\u4EF6\u6539\u6210\u4E00\u884C"),k=u("\u8FC7\u6EE4\u6761\u4EF6\u8FD8\u539F"),x=u("\u91CD\u7F6E\u503C");function y(a,c){const B=e("hl-checkbox"),s=e("hb-table-searchbar"),h=e("hl-button"),R=e("hl-group");return m(),d(b,null,[r(s,{ref:"searchbarRef",searcher:a.searcher,selector:a.selector,padding:"var(--sm)",gap:"var(--md)",fill:!1,onChange:a.searchChanged},{checkbox:l(()=>[F,r(B,{modelValue:a.checked1,"onUpdate:modelValue":c[0]||(c[0]=p=>a.checked1=p),label:1,bold:""},{default:l(()=>[E]),_:1},8,["modelValue"]),r(B,{modelValue:a.checked1,"onUpdate:modelValue":c[1]||(c[1]=p=>a.checked1=p),label:2,bold:""},{default:l(()=>[g]),_:1},8,["modelValue"]),r(B,{modelValue:a.checked1,"onUpdate:modelValue":c[2]||(c[2]=p=>a.checked1=p),label:0},{default:l(()=>[v]),_:1},8,["modelValue"])]),_:1},8,["searcher","selector","onChange"]),r(R,{class:"m-t-md",indent:"var(--md)"},{default:l(()=>[r(h,{onClick:a.changeCol},{default:l(()=>[C]),_:1},8,["onClick"]),r(h,{onClick:a.changeRow},{default:l(()=>[A]),_:1},8,["onClick"]),r(h,{onClick:a.resetCol},{default:l(()=>[k]),_:1},8,["onClick"]),r(h,{onClick:a.resetVal},{default:l(()=>[x]),_:1},8,["onClick"])]),_:1})],64)}const{defineComponent:j,ref:P,reactive:N}=f,T=j({setup(){const a=P(),c=[{placeholder:"Input\u6D4B\u8BD5",value:"",name:"prop1",type:"input",fill:!0},{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop2",options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:["4"],name:"prop3",multiple:!0,"collapse-tags":!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{type:"date",name:"prop4",value:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},{span:"xl:col-span-2",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{span:"xl:col-span-2",type:"daterange",name:"prop6",value:[],placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},{span:"xl:col-span-2",type:"slot",slotName:"checkbox",value:""}],B=N({placeholder:"\u8F93\u5165\u641C\u7D22\u6761\u4EF6"}),s=N({colCount:"xl:count-2",items:c}),h=P(!1);return{searchbarRef:a,searcher:B,selector:s,checked1:h,searchChanged:(S,U,$)=>{console.log(S,U,$)},changeCol:()=>{s.colCount="xl:count-3 lg:count-3 md:count-3",s.items[5]&&(s.items[5].span="col-span-3")},changeRow:()=>{s.items=[{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop2",options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:["4"],name:"prop3",multiple:!0,"collapse-tags":!0,options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]}]},resetCol:()=>{s.colCount="xl:count-2 lg:count-2 md:count-2",s.items=c},resetVal:()=>{a.value.resetFields()}}}});return V({render:y},T)}(),"hb-demo1":function(){const{createTextVNode:o,resolveComponent:u,withCtx:e,createVNode:l,openBlock:r,createBlock:b}=f,m=o(" \u9AD8\u7EA7\u641C\u7D22 "),d=o("\u641C\u7D22");function F(C,A){const k=u("hb-data-filter"),x=u("hl-button"),y=u("hb-table-searchbar");return r(),b(y,{searcher:C.searcher,padding:"var(--sm)",gap:"var(--md)",fill:!1},{prefix:e(()=>[l(k,{items:C.searchItems,gap:"var(--sm)",class:"static"},{default:e(()=>[m]),_:1},8,["items"])]),suffix:e(()=>[l(x,{type:"primary",class:"static"},{default:e(()=>[d]),_:1})]),_:1},8,["searcher"])}const{defineComponent:E,reactive:g}=f,v=E({setup(){return{searcher:g({placeholder:"\u8F93\u5165\u641C\u7D22\u6761\u4EF6"}),searchItems:[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{type:"input",label:"\u6D4B\u8BD52",placeholder:"sss\u6D4B\u8BD5",value:"ccc",name:"prop2"}]}}});return V({render:F},v)}()}},J=t("h1",null,"TableToolbar \u8868\u683C\u641C\u7D22\u680F",-1),K=t("p",null,"\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6\u3002\u5305\u62EC\u4E24\u4E2A\u533A\u57DF\uFF1A\u8F93\u5165\u67E5\u8BE2\u533A\uFF1B\u4EE5\u53CA\u8FC7\u6EE4\u67E5\u8BE2\u533A\uFF0C\u652F\u6301\u54CD\u5E94\u5F0F\u8BBE\u7F6E\u3002",-1),O=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),n(" \u57FA\u7840\u7528\u6CD5")],-1),Y=t("div",null,[t("p",null,[t("em",null,[t("strong",null,[n("\u7531\u4E8E\u5BF9\u6027\u80FD\u7684\u8003\u8651\uFF0C\u7EC4\u4EF6\u4EC5\u5BF9"),t("code",null,"items"),n("\u4E2D\u9879\u76EE\u7684\u589E\u51CF\u53D8\u5316\u8FDB\u884C\u54CD\u5E94")])])])],-1),Z=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-table-searchbar
    ref="searchbarRef"
    :searcher="searcher"
    :selector="selector"
    padding="var(--sm)"
    gap="var(--md)"
    :fill="false"
    @change="searchChanged"
  >
    <template #checkbox>
      <span class="m-r-md">\u81EA\u5B9A\u4E49Slot\uFF1A</span>
      <hl-checkbox v-model="checked1" :label="1" bold>\u5907\u9009\u9879</hl-checkbox>
      <hl-checkbox v-model="checked1" :label="2" bold>\u5907\u9009\u9879</hl-checkbox>
      <hl-checkbox v-model="checked1" :label="0">\u672A\u52A0\u7C97</hl-checkbox>
    </template>
  </hb-table-searchbar>
  <hl-group class="m-t-md" indent="var(--md)">
    <hl-button @click="changeCol">\u8FC7\u6EE4\u6761\u4EF6\u6539\u6210\u4E09\u5217</hl-button>
    <hl-button @click="changeRow">\u8FC7\u6EE4\u6761\u4EF6\u6539\u6210\u4E00\u884C</hl-button>
    <hl-button @click="resetCol">\u8FC7\u6EE4\u6761\u4EF6\u8FD8\u539F</hl-button>
    <hl-button @click="resetVal">\u91CD\u7F6E\u503C</hl-button>
  </hl-group>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    const searchbarRef = ref()
    const originItems = [
      {
        placeholder: 'Input\u6D4B\u8BD5',
        value: '',
        name: 'prop1',
        type: 'input',
        fill: true,
      },
      {
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
        placeholder: '\u4E0B\u62C9\u6D4B\u8BD5',
        value: '4',
        name: 'prop2',
        options: [
          { label: '\u5DF2\u9A73\u56DE3', value: '3' },
          { label: '\u5DF2\u5BA1\u5B9A4', value: '4' },
        ],
      },
      {
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
        type: 'date',
        name: 'prop4',
        value: '',
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
      },
      {
        span: 'xl:col-span-2',
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
        span: 'xl:col-span-2',
        type: 'daterange',
        name: 'prop6',
        value: [],
        placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
      },
      {
        span: 'xl:col-span-2',
        type: 'slot',
        slotName: 'checkbox',
        value: '',
      },
    ]
    const searcher = reactive({
      placeholder: '\u8F93\u5165\u641C\u7D22\u6761\u4EF6',
    })
    const selector = reactive({
      colCount: 'xl:count-2',
      items: originItems,
    })
    const checked1 = ref(false)

    const searchChanged = (urlParams, mapParams, originalParams) => {
      console.log(urlParams, mapParams, originalParams)
    }

    const changeCol = () => {
      selector.colCount = 'xl:count-3 lg:count-3 md:count-3'
      if (selector.items[5]) {
        selector.items[5].span = 'col-span-3'
      }
    }

    const changeRow = () => {
      selector.items = [
        {
          placeholder: '\u4E0B\u62C9\u6D4B\u8BD5',
          value: '4',
          name: 'prop2',
          options: [
            { label: '\u5DF2\u9A73\u56DE3', value: '3' },
            { label: '\u5DF2\u5BA1\u5B9A4', value: '4' },
          ],
        },
        {
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
      ]
    }

    const resetCol = () => {
      selector.colCount = 'xl:count-2 lg:count-2 md:count-2'
      selector.items = originItems
    }

    const resetVal = () => {
      searchbarRef.value.resetFields()
    }

    return {
      searchbarRef,
      searcher,
      selector,
      checked1,
      searchChanged,
      changeCol,
      changeRow,
      resetCol,
      resetVal,
    }
  },
})
<\/script>
`)],-1),uu=t("h2",{id:"cha-cao"},[t("a",{class:"header-anchor",href:"#cha-cao"}),n(" \u63D2\u69FD")],-1),eu=t("div",null,[t("p",null,[n("\u641C\u7D22\u6846\u524D\u540E\u5206\u522B\u8BBE\u7F6E\u6709 "),t("code",null,"prefix"),n(" \u4E0E "),t("code",null,"suffix"),n(" \u63D2\u69FD")])],-1),tu=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-table-searchbar
    :searcher="searcher"
    padding="var(--sm)"
    gap="var(--md)"
    :fill="false"
  >
    <template #prefix>
      <hb-data-filter :items="searchItems" gap="var(--sm)" class="static">
        <template #default>
          \u9AD8\u7EA7\u641C\u7D22
        </template>
      </hb-data-filter>
    </template>
    <template #suffix>
      <hl-button type="primary" class="static">\u641C\u7D22</hl-button>
    </template>
  </hb-table-searchbar>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {

    const searcher = reactive({
      placeholder: '\u8F93\u5165\u641C\u7D22\u6761\u4EF6',
    })

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
    ]

    return {
      searcher,
      searchItems,
    }
  },
})
<\/script>
`)],-1),au=q('<div class="doc-tip"><p><code>colCount</code>\u548C<code>span</code>\u53EF\u8BBE\u7F6E\u7684\u5C5E\u6027\u503C\uFF0C\u8BF7\u53C2\u8003Grid\u6587\u6863\u3002\u5F53span\u8BBE\u7F6E\u7684\u5217\u6570\u5927\u4E8EcolCount\u8BBE\u7F6E\u7684\u5217\u6570\u65F6\uFF0C\u5C06\u4F1A\u81EA\u52A8\u6491\u5230span\u8BBE\u7F6E\u7684\u5217\u6570\u3002<code>change</code>\u4E8B\u4EF6\u53C2\u6570\u5206\u522B\u4E3A\uFF1A<code>urlParams</code>\uFF0C\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u4F1A\u81EA\u52A8\u5728time/date range\u7C7B\u578B\u7684name\u7ED3\u5C3E\u6DFB\u52A0Start/End\uFF0C\u5982\u679Csearcher\u7684name\u5C5E\u6027\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5C06\u4F1A\u81EA\u52A8\u4F7F\u7528search\u4F5C\u4E3A\u53C2\u6570\u540D\uFF1B<code>mapParams</code>\uFF0Cobject\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u540C\u6837\u4F1A\u5904\u7406time/date range\u7C7B\u578B\uFF1B<code>originalParams</code>\uFF0Cobject\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u539F\u59CB\u7684\u6570\u636E\u3002</p></div><h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>padding</td><td>\u586B\u5145</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u95F4\u8DDD</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>searcher</td><td>\u641C\u7D22\u6846\u914D\u7F6E</td><td>object {show: boolean, name: string}</td><td>--</td><td>{show: true, name: search&#39;}</td></tr><tr><td>selector</td><td>\u53F3\u4FA7\u8FC7\u6EE4\u6761\u4EF6\u8BBE\u7F6E</td><td>object {colCount: string, items: array}</td><td>--</td><td>{colCount: &#39;xl:count-3 lg:count-2 md:count-1&#39;, items:[]}</td></tr></tbody></table><h2 id="selector.items-attributes"><a class="header-anchor" href="#selector.items-attributes"></a> selector.items Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>span</td><td>\u5217\u8DE8\u5EA6</td><td>string</td><td>\u2014</td><td>-</td></tr><tr><td>type</td><td>\u8FC7\u6EE4\u6846\u7C7B\u578B</td><td>string</td><td>input / select / slot / timepicker / DatePicker\u652F\u6301\u7684\u6240\u6709\u7C7B\u578B</td><td>select</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u503C</td><td>--</td><td>--</td><td>--</td></tr><tr><td>name</td><td>\u8868\u5355\u7684\u540D\u79F0</td><td>string</td><td>--</td><td>--</td></tr><tr><td>prop</td><td>\u914D\u7F6Eselect\u4E0B\u62C9\u9879</td><td>object {label: string, value: string}</td><td>--</td><td>{ label: &#39;label&#39;, value: &#39;value&#39;}</td></tr><tr><td>options</td><td>select\u4E0B\u62C9\u9879</td><td>array</td><td>--</td><td>[]</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>prefix</td><td>\u524D\u7F6E\u63D2\u69FD</td></tr><tr><td>suffix</td><td>\u540E\u7F6E\u63D2\u69FD</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>resetFields</td><td>\u91CD\u7F6E\u641C\u7D22\u5B57\u6BB5\u4E3A\u521D\u59CB\u503C</td><td>names: string[]\u3002\u6307\u5B9A\u8981\u91CD\u7F6E\u7684\u5B57\u6BB5\uFF0C\u5305\u542B&#39;searcher&#39;\u4F1A\u91CD\u7F6E\u53F3\u4FA7\u641C\u7D22\u6846\uFF0C\u4E0D\u4F20\u91CD\u7F6E\u6240\u6709\u5B57\u6BB5\u3002\u540C\u65F6\u89E6\u53D1change\u4E8B\u4EF6</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u641C\u7D22\u6846\u6216\u8005\u8FC7\u6EE4\u6846\u6709\u6539\u53D8\u65F6\u89E6\u53D1</td><td>urlParams:string, mapParams: object, originalParams: object</td></tr></tbody></table>',11);function ou(o,u,e,l,r,b){const m=_("hb-demo0"),d=_("demo-block"),F=_("hb-demo1"),E=_("right-nav");return W(),G(M,null,[t("section",null,[J,K,O,D(d,{fs:""},{source:i(()=>[D(m)]),highlight:i(()=>[Z]),default:i(()=>[Y]),_:1}),uu,D(d,{fs:""},{source:i(()=>[D(F)]),highlight:i(()=>[tu]),default:i(()=>[eu]),_:1}),au]),D(E)],64)}var mu=z(H,[["render",ou]]);export{mu as default};
