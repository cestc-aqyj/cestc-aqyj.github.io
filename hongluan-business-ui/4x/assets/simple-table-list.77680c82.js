var X=Object.defineProperty;var T=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var S=(o,t,e)=>t in o?X(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,R=(o,t)=>{for(var e in t||(t={}))H.call(t,e)&&S(o,e,t[e]);if(T)for(var e of T(t))Q.call(t,e)&&S(o,e,t[e]);return o};import{U as v,L as W,W as O,Q as i,a1 as _,X as I,a9 as G,a2 as J,aR as K,aX as x}from"./vue.64e975b8.js";import{H as M}from"./hongluan-icons.0c35ed0d.js";import{_ as Y}from"./index.24fb7b1e.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const Z={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:o,createVNode:t,withCtx:e,resolveDynamicComponent:k,openBlock:C,createBlock:D,createCommentVNode:B,createTextVNode:h,toDisplayString:A}=x,V=h("\u81EA\u5B9A\u4E49 "),N=h(A("")),P=h("\u4FEE\u6539");function j(u,n){const g=o("hb-data-filter"),d=o("two-table"),l=o("hl-icon"),p=o("hl-button"),c=o("hl-radio"),m=o("two-chart-pie"),w=o("hl-group"),b=o("hl-checkbox"),f=o("hb-simple-table-list");return C(),D(f,{cols:u.cols,"table-data":u.tableData,pagination:u.pagination,searchbar:u.searchbar,toolbar:u.toolbar,"table-props":u.tableProps,onRowClick:u.rowClicked,onSearchbarChange:u.searchbarChanged},{"toolbar-extra-before":e(()=>[t(g,{items:u.searchItems},null,8,["items"])]),"toolbar-extra-after":e(()=>[t(w,{merge:"",indent:""},{default:e(()=>[t(c,{modelValue:u.radio,"onUpdate:modelValue":n[0]||(n[0]=a=>u.radio=a),label:"1",custom:""},{default:e(()=>[t(p,{effect:"light",type:"primary",equal:""},{icon:e(()=>[t(l,null,{default:e(()=>[t(d)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(c,{modelValue:u.radio,"onUpdate:modelValue":n[1]||(n[1]=a=>u.radio=a),label:"2",custom:""},{default:e(()=>[t(p,{effect:"light",type:"primary",equal:""},{icon:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"toolbar-action-icon":e(({item:a})=>[a.icon?(C(),D(l,{key:0},{default:e(()=>[(C(),D(k(a.icon)))]),_:2},1024)):B("",!0)]),customCheckbox:e(()=>[t(b),V]),firstCol:e(()=>[t(b,{modelValue:u.selectedAll,"onUpdate:modelValue":n[2]||(n[2]=a=>u.selectedAll=a),indeterminate:u.isIndeterminate,"show-label":!1,onChange:u.selectAll},null,8,["modelValue","indeterminate","onChange"])]),tableIndex:e(({row:a})=>[t(b,{modelValue:u.selectedRows,"onUpdate:modelValue":n[3]||(n[3]=r=>u.selectedRows=r),label:a.id,"show-label":!1,onChange:r=>u.selectRow(a.id)},{default:e(()=>[N]),_:2},1032,["modelValue","label","onChange"])]),handle:e(()=>[t(p,{type:"link"},{default:e(()=>[P]),_:1})]),_:1},8,["cols","table-data","pagination","searchbar","toolbar","table-props","onRowClick","onSearchbarChange"])}const{defineComponent:U}=x,{ref:s,reactive:E}=x,{TwoTable:z,TwoChartPie:$}=M;return R({render:j},U({setup(u,{expose:n}){n();const g=s("1"),d=s(!1),l=s([]),p=s(d),c=s(!1),m=s([{id:1,name:"\u5DE5\u7A0B\u5E081",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08"},{id:2,name:"\u5DE5\u7A0B\u5E082",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u5DE5\u7A0B\u5E083",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"},{id:4,name:"\u5DE5\u7A0B\u5E084",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"},{id:5,name:"\u5DE5\u7A0B\u5E085",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),w=s([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des",width:"150px"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",fixed:"right"}]),b=E({size:"sm",striped:!0}),f=E({show:!0,pageSize:20,total:100,currentPage:1}),a=E({show:!0,searcher:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6"},selector:{colCount:"xl:count-2 lg:count-2 md:count-1",items:[{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop2",options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{span:"col-span-2",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{span:"col-span-2",type:"slot",slotName:"customCheckbox",value:""}]}}),r=E({showSelectionText:!0,selectionCount:0,action:{show:!1,showCount:2,actions:[{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!0,show:!0},{label:"\u6279\u91CF\u8F6C\u79FB",icon:"TwoFolderIn",noFill:!0,show:!0},{label:"\u6279\u91CF\u5BA1\u5B9A",icon:"TwoExamine"},{label:"\u6279\u91CF\u4FEE\u6539",icon:"TwoEdit"},{label:"\u6279\u91CF\u901A\u8FC7",icon:"TwoCircleCheck"}]}}),y={radio:g,selectedAll:d,selectedRows:l,show:p,isIndeterminate:c,tableData:m,cols:w,tableProps:b,pagination:f,searchbar:a,toolbar:r,searchItems:[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]}],selectAll:()=>{d.value?(l.value.splice(0,l.value.length),l.value.push(...m.value.map(F=>F.id)),r.showSelectionText=!0,r.action.show=!0,r.selectionCount=l.value.length,c.value=!1):(l.value.splice(0,l.value.length),r.showSelectionText=!0,r.action.show=!1,r.selectionCount=0)},selectRow:()=>{d.value=l.value.length===m.value.length,r.showSelectionText=!0,r.action.show=l.value.length>0,r.selectionCount=l.value.length,l.value.length>0&&d.value==!1?c.value=!0:c.value=!1},rowClicked:(F,q,L)=>{console.log("rowClicked",F,q,L)},searchbarChanged:(...F)=>{console.log("searchbarChanged",...F)},ref:s,reactive:E,TwoTable:z,TwoChartPie:$};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}))}()}},ee=i("h1",null,"SimpleTableList \u8868\u683C",-1),te=i("p",null,"\u96C6\u6210\u5206\u9875\u4EE5\u53CA\u5DE5\u5177\u680F\u7684\u7B80\u5355\u8868\u683C\u7EC4\u4EF6\u3002",-1),ue=i("h2",{id:"ji-chu-yong-fa"},[i("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),J(" \u57FA\u7840\u7528\u6CD5")],-1),oe=i("pre",null,[i("code",{class:"html"},` <template>
  <hb-simple-table-list
    :cols="cols"
    :table-data="tableData"
    :pagination="pagination"
    :searchbar="searchbar"
    :toolbar="toolbar"
    :table-props="tableProps"
    @row-click="rowClicked"
    @searchbar-change="searchbarChanged"
  >
    <template #toolbar-extra-before>
      <hb-data-filter :items="searchItems" />
    </template>
    <template #toolbar-extra-after>
      <hl-group merge indent>
        <hl-radio v-model="radio" label="1" custom>
          <hl-button effect="light" type="primary" equal>
            <template #icon>
              <hl-icon><two-table /></hl-icon>
            </template>
          </hl-button>
        </hl-radio>
        <hl-radio v-model="radio" label="2" custom>
          <hl-button effect="light" type="primary" equal>
            <template #icon>
              <hl-icon><two-chart-pie /></hl-icon>
            </template>
          </hl-button>
        </hl-radio>
      </hl-group>
    </template>
    <template #toolbar-action-icon="{ item }">
      <hl-icon v-if="item.icon">
        <component :is="item.icon" />
      </hl-icon>
    </template>
    <template #customCheckbox>
      <hl-checkbox />\u81EA\u5B9A\u4E49
    </template>

    <template #firstCol>
      <hl-checkbox v-model="selectedAll" :indeterminate="isIndeterminate" :show-label="false" @change="selectAll" />
    </template>
    <template #tableIndex="{ row }">
      <hl-checkbox v-model="selectedRows" :label="row.id" :show-label="false" @change="selectRow(row.id)">{{ '' }}</hl-checkbox>
    </template>
    <template #handle>
      <hl-button type="link">\u4FEE\u6539</hl-button>
    </template>
  </hb-simple-table-list>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { TwoTable, TwoChartPie } from '@hongluan-ui/icons'

const radio = ref('1')
const selectedAll = ref(false)
const selectedRows = ref([])
const show = ref(selectedAll)
const isIndeterminate = ref(false)
const tableData = ref([
  { id: 1, name: '\u5DE5\u7A0B\u5E081', sex: '\u5973', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08' },
  { id: 2, name: '\u5DE5\u7A0B\u5E082', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08' },
  { id: 3, name: '\u5DE5\u7A0B\u5E083', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08' },
  { id: 4, name: '\u5DE5\u7A0B\u5E084', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08' },
  { id: 5, name: '\u5DE5\u7A0B\u5E085', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08' },
])
const cols = ref([
  { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol' },
  { title: '\u7528\u6237\u540D', prop: 'name' },
  { title: '\u6027\u522B', prop: 'sex' },
  { title: '\u5355\u4F4D', prop: 'org' },
  { title: '\u7B80\u4ECB', prop: 'des', width: '150px' },
  { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center', fixed: 'right' },
])
const tableProps = reactive({
  size: 'sm',
  striped: true,
})

const pagination = reactive({
  show: true,
  pageSize: 20,
  total: 100,
  currentPage: 1,
})
const searchbar = reactive({
  show: true,
  searcher: {
    placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6',
  },
  selector: {
    colCount: 'xl:count-2 lg:count-2 md:count-1',
    items: [
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
        span: 'col-span-2',
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
        span: 'col-span-2',
        type: 'slot',
        slotName: 'customCheckbox',
        value: '',
      },
    ],
  },
})
const toolbar = reactive({
  showSelectionText: true,
  selectionCount: 0,
  action: {
    show: false,
    showCount: 2,
    actions: [
      { label: '\u5220\u9664\u6240\u6709', icon: 'TwoDel', noFill: true, show: true },
      { label: '\u6279\u91CF\u8F6C\u79FB', icon: 'TwoFolderIn', noFill: true, show: true },
      { label: '\u6279\u91CF\u5BA1\u5B9A', icon: 'TwoExamine' },
      { label: '\u6279\u91CF\u4FEE\u6539', icon: 'TwoEdit' },
      { label: '\u6279\u91CF\u901A\u8FC7', icon: 'TwoCircleCheck' },
    ],
  },
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
]

const selectAll = () => {
  if (selectedAll.value) {
    selectedRows.value.splice(0, selectedRows.value.length)
    selectedRows.value.push(...tableData.value.map(d => d.id))
    toolbar.showSelectionText = true
    toolbar.action.show = true
    toolbar.selectionCount = selectedRows.value.length
    isIndeterminate.value = false

  } else {
    selectedRows.value.splice(0, selectedRows.value.length)
    toolbar.showSelectionText = true
    toolbar.action.show = false
    toolbar.selectionCount = 0
  }
}
const selectRow = () => {
  selectedAll.value = selectedRows.value.length === tableData.value.length
  toolbar.showSelectionText = true
  toolbar.action.show = selectedRows.value.length > 0
  toolbar.selectionCount = selectedRows.value.length

  if (selectedRows.value.length > 0 && selectedAll.value == false) {
    isIndeterminate.value = true
  } else {
    isIndeterminate.value = false
  }

}
const rowClicked = (row, rowIndex, event) => {
  console.log('rowClicked', row, rowIndex, event)
}
const searchbarChanged = (...args) => {
  console.log('searchbarChanged', ...args)
}
<\/script>
`)],-1),le=K('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>table-props</td><td>\u7ED1\u5B9A\u5230\u5185\u90E8SimpleTable\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u53C2\u8003SimpleTable\u7EC4\u4EF6</td><td>object</td><td>--</td><td>--</td></tr><tr><td>scrollbar-props</td><td>\u7ED1\u5B9A\u5230\u5185\u90E8Scrollbar\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u53C2\u8003Scrollbar\u7EC4\u4EF6</td><td>object</td><td>--</td><td>--</td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u63D0\u793A</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>cols</td><td>\u5217\u5B9A\u4E49,\u53C2\u89C1simple-table\u7EC4\u4EF6\u4E2Dcol\u7684\u5B9A\u4E49</td><td>array</td><td>--</td><td>--</td></tr><tr><td>table-data</td><td>\u8868\u683C\u6570\u636E</td><td>array</td><td>--</td><td>[]</td></tr><tr><td>pagination</td><td>\u5206\u9875\u6570\u636E</td><td>object</td><td>--</td><td>{total: 0, pageSize: 10, currentPage: 1}</td></tr><tr><td>searchbar</td><td>\u641C\u7D22\u680F\u53C2\u6570\uFF0C\u53C2\u89C1\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6</td><td>object</td><td>--</td><td>{ searcher: { placeholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6&#39; } }</td></tr><tr><td>toolbar</td><td>\u5DE5\u5177\u680F\u53C2\u6570\uFF0Caction\u5C5E\u6027\u53C2\u89C1\u8868\u683C\u5DE5\u5177\u680F\u7EC4\u4EF6</td><td>object { showSelectionText: boolean, selectionCount: number, action: object, showColConfig: boolean }</td><td>--</td><td>{showColConfig: true}</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u63CF\u8FF0</td></tr><tr><td>searchbar</td><td>\u81EA\u5B9A\u4E49 searchbar</td></tr><tr><td>searchbar-prefix</td><td>\u81EA\u5B9A\u4E49 searchbar \u524D\u7F6E\u63D2\u69FD</td></tr><tr><td>searchbar-suffix</td><td>\u81EA\u5B9A\u4E49 searchbar \u540E\u7F6E\u63D2\u69FD</td></tr><tr><td>toolbar</td><td>\u81EA\u5B9A\u4E49toolbar</td></tr><tr><td>toolbar-extra-after</td><td>\u81EA\u5B9A\u4E49toolbar\u989D\u5916\u64CD\u4F5C\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar</td></tr><tr><td>toolbar-extra-before</td><td>\u81EA\u5B9A\u4E49toolbar\u989D\u5916\u64CD\u4F5C\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar</td></tr><tr><td>toolbar-action-icon</td><td>\u81EA\u5B9A\u4E49toolbar action icon\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar\uFF0C\u53C2\u6570\u4E3A { item }</td></tr><tr><td>pagination</td><td>\u81EA\u5B9A\u4E49pagination</td></tr><tr><td>empty</td><td>\u81EA\u5B9A\u4E49\u7A7A\u6570\u636E\u663E\u793A</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u4E0Esimple-table\u4E8B\u4EF6\u4E00\u81F4</td><td></td></tr><tr><td>cell-click</td><td>\u4E0Esimple-table\u4E8B\u4EF6\u4E00\u81F4</td><td></td></tr><tr><td>searchbar-change</td><td>\u641C\u7D22\u6761\u4EF6\u6539\u53D8\u4E8B\u4EF6</td><td>urlParams, mapParams, originalParams\uFF0C\u53C2\u89C1\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6</td></tr><tr><td>current-change</td><td>\u9875\u6570\u6539\u53D8\u4E8B\u4EF6</td><td>currentPage</td></tr><tr><td>size-change</td><td>\u9875\u6570\u53D1\u751F\u53D8\u66F4\u4E8B\u4EF6</td><td>size</td></tr></tbody></table>',6);function ae(o,t,e,k,C,D){const B=v("hb-demo0"),h=v("demo-block"),A=v("right-nav");return W(),O(G,null,[i("section",null,[ee,te,ue,_(h,{fs:""},{source:I(()=>[_(B)]),highlight:I(()=>[oe]),_:1}),le]),_(A)],64)}var Ce=Y(Z,[["render",ae]]);export{Ce as default};
