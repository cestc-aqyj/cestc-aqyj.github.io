var q=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var y=(o,t,e)=>t in o?q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,T=(o,t)=>{for(var e in t||(t={}))L.call(t,e)&&y(o,e,t[e]);if(x)for(var e of x(t))Q.call(t,e)&&y(o,e,t[e]);return o};import{P as v,L as W,W as X,Q as i,Y as _,S as R,a8 as Y,aZ as S,a0 as Z,aT as G}from"./vue.b4e50f24.js";import{_ as H}from"./index.ed80d6f8.js";import"./hongluan-business.d081513c.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.3bc038e0.js";const J={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:o,createVNode:t,withCtx:e,resolveDynamicComponent:k,openBlock:m,createBlock:E,createCommentVNode:D,createTextVNode:h,toDisplayString:B}=S,I=h("\u81EA\u5B9A\u4E49 "),V=h(B("")),N=h("\u4FEE\u6539");function P(u,l){const a=o("hb-data-filter"),A=o("two-table"),s=o("hl-icon"),c=o("hl-button"),F=o("hl-radio"),g=o("two-chart-pie"),w=o("hl-group"),p=o("hl-checkbox"),r=o("hb-simple-table-list");return m(),E(r,{cols:u.cols,"table-data":u.tableData,pagination:u.pagination,searchbar:u.searchbar,toolbar:u.toolbar,"table-props":u.tableProps,onRowClick:u.rowClicked,onSearchbarChange:u.searchbarChanged},{"toolbar-extra-before":e(()=>[t(a,{items:u.searchItems},null,8,["items"])]),"toolbar-extra-after":e(()=>[t(w,{merge:"",indent:""},{default:e(()=>[t(F,{modelValue:u.radio,"onUpdate:modelValue":l[0]||(l[0]=n=>u.radio=n),label:"1",custom:""},{default:e(()=>[t(c,{effect:"light",type:"primary",equal:""},{icon:e(()=>[t(s,null,{default:e(()=>[t(A)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(F,{modelValue:u.radio,"onUpdate:modelValue":l[1]||(l[1]=n=>u.radio=n),label:"2",custom:""},{default:e(()=>[t(c,{effect:"light",type:"primary",equal:""},{icon:e(()=>[t(s,null,{default:e(()=>[t(g)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"toolbar-action-icon":e(({item:n})=>[n.icon?(m(),E(s,{key:0},{default:e(()=>[(m(),E(k(n.icon)))]),_:2},1024)):D("",!0)]),customCheckbox:e(()=>[t(p),I]),firstCol:e(()=>[t(p,{modelValue:u.selectedAll,"onUpdate:modelValue":l[2]||(l[2]=n=>u.selectedAll=n),indeterminate:u.isIndeterminate,"show-label":!1,onChange:u.selectAll},null,8,["modelValue","indeterminate","onChange"])]),tableIndex:e(({row:n})=>[t(p,{modelValue:u.selectedRows,"onUpdate:modelValue":l[3]||(l[3]=f=>u.selectedRows=f),label:n.id,"show-label":!1,onChange:f=>u.selectRow(n.id)},{default:e(()=>[V]),_:2},1032,["modelValue","label","onChange"])]),handle:e(()=>[t(c,{type:"link"},{default:e(()=>[N]),_:1})]),_:1},8,["cols","table-data","pagination","searchbar","toolbar","table-props","onRowClick","onSearchbarChange"])}const{defineComponent:j,ref:d,reactive:C}=S,z=j({setup(){const u=d("1"),l=d(!1),a=d([]),A=d(l),s=d(!1),c=d([{id:1,name:"\u5206\u8FA8\u7387",sex:"\u5973",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08"},{id:2,name:"\u5EFA\u519B\u8282",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08"},{id:3,name:"\u80C3\u80A0\u708E",sex:"\u7537",org:"\u4E2D\u56FD\u7CFB\u7EDF",des:"90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08"}]),F=d([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol"},{title:"\u7528\u6237\u540D",prop:"name"},{title:"\u6027\u522B",prop:"sex"},{title:"\u5355\u4F4D",prop:"org"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center"}]),g=C({size:"sm",striped:!0}),w=C({show:!0,pageSize:20,total:100,currentPage:1}),p=C({show:!0,searcher:{placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6"},selector:{colCount:"xl:count-2 lg:count-2 md:count-1",items:[{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]},{placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop2",options:[{label:"\u5DF2\u9A73\u56DE3",value:"3"},{label:"\u5DF2\u5BA1\u5B9A4",value:"4"}]},{span:"col-span-2",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",placeholder:"\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},{span:"col-span-2",type:"slot",slotName:"customCheckbox",value:""}]}}),r=C({showSelectionText:!0,selectionCount:0,action:{show:!1,showCount:2,actions:[{label:"\u5220\u9664\u6240\u6709",icon:"TwoDel",noFill:!0,show:!0},{label:"\u6279\u91CF\u8F6C\u79FB",icon:"TwoFolderIn",noFill:!0,show:!0},{label:"\u6279\u91CF\u5BA1\u5B9A",icon:"TwoExamine"},{label:"\u6279\u91CF\u4FEE\u6539",icon:"TwoEdit"},{label:"\u6279\u91CF\u901A\u8FC7",icon:"TwoCircleCheck"}]}});return{searchbar:p,searchItems:[{type:"select",label:"\u6D4B\u8BD51",placeholder:"\u4E0B\u62C9\u6D4B\u8BD5",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5DF2\u9A73\u56DE3",code:"3"},{name:"\u5DF2\u5BA1\u5B9A4",code:"4"}]}],toolbar:r,pagination:w,selectedAll:l,selectedRows:a,tableData:c,cols:F,selectAll:()=>{l.value?(a.value.splice(0,a.value.length),a.value.push(...c.value.map(b=>b.id)),r.showSelectionText=!0,r.action.show=!0,r.selectionCount=a.value.length,s.value=!1):(a.value.splice(0,a.value.length),r.showSelectionText=!0,r.action.show=!1,r.selectionCount=0)},selectRow:()=>{l.value=a.value.length===c.value.length,r.showSelectionText=!0,r.action.show=a.value.length>0,r.selectionCount=a.value.length,a.value.length>0&&l.value==!1?s.value=!0:s.value=!1},rowClicked:(b,U,$)=>{console.log("rowClicked",b,U,$)},searchbarChanged:(...b)=>{console.log("searchbarChanged",...b)},show:A,isIndeterminate:s,radio:u,tableProps:g}}});return T({render:P},z)}()}},K=i("h1",null,"SimpleTableList \u8868\u683C",-1),M=i("p",null,"\u96C6\u6210\u5206\u9875\u4EE5\u53CA\u5DE5\u5177\u680F\u7684\u7B80\u5355\u8868\u683C\u7EC4\u4EF6\u3002",-1),O=i("h2",{id:"ji-chu-yong-fa"},[i("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),Z(" \u57FA\u7840\u7528\u6CD5")],-1),ee=i("pre",null,[i("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    const radio = ref('1')
    const selectedAll = ref(false)
    const selectedRows = ref([])
    const show = ref(selectedAll)
    const isIndeterminate = ref(false)
    const tableData = ref([
      { id: 1, name: '\u5206\u8FA8\u7387', sex: '\u5973', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u6765\u81EAUED\u7684\u8BBE\u8BA1\u5E08' },
      { id: 2, name: '\u5EFA\u519B\u8282', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '\u7ECF\u9A8C\u4E30\u5BCC\u7684\u524D\u7AEF\u5DE5\u7A0B\u5E08' },
      { id: 3, name: '\u80C3\u80A0\u708E', sex: '\u7537', org: '\u4E2D\u56FD\u7CFB\u7EDF', des: '90\u540E\u4EA4\u4E92\u8BBE\u8BA1\u5E08' },
    ])
    const cols = ref([
      { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol' },
      { title: '\u7528\u6237\u540D', prop: 'name' },
      { title: '\u6027\u522B', prop: 'sex' },
      { title: '\u5355\u4F4D', prop: 'org' },
      { title: '\u7B80\u4ECB', prop: 'des' },
      { title: '\u64CD\u4F5C', slotName: 'handle', align: 'center' },
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

    return {
      searchbar,
      searchItems,
      toolbar,
      pagination,
      selectedAll,
      selectedRows,
      tableData,
      cols,
      selectAll,
      selectRow,
      rowClicked,
      searchbarChanged,
      show,
      isIndeterminate,
      radio,
      tableProps,
    }
  },
})
<\/script>
`)],-1),te=G('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>table-props</td><td>\u7ED1\u5B9A\u5230\u5185\u90E8SimpleTable\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u53EF\u9009\u503C\u53C2\u8003SimpleTable\u7EC4\u4EF6</td><td>object</td><td>--</td><td>--</td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u52A0\u8F7D\u63D0\u793A</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>cols</td><td>\u5217\u5B9A\u4E49,\u53C2\u89C1simple-table\u7EC4\u4EF6\u4E2Dcol\u7684\u5B9A\u4E49</td><td>array</td><td>--</td><td>--</td></tr><tr><td>table-data</td><td>\u8868\u683C\u6570\u636E</td><td>array</td><td>--</td><td>[]</td></tr><tr><td>pagination</td><td>\u5206\u9875\u6570\u636E</td><td>object</td><td>--</td><td>{total: 0, pageSize: 10, currentPage: 1}</td></tr><tr><td>searchbar</td><td>\u641C\u7D22\u680F\u53C2\u6570\uFF0C\u53C2\u89C1\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6</td><td>object</td><td>--</td><td>{ searcher: { placeholder: &#39;\u8BF7\u8F93\u5165\u641C\u7D22\u6761\u4EF6&#39; } }</td></tr><tr><td>toolbar</td><td>\u5DE5\u5177\u680F\u53C2\u6570\uFF0Caction\u5C5E\u6027\u53C2\u89C1\u8868\u683C\u5DE5\u5177\u680F\u7EC4\u4EF6</td><td>object { showSelectionText: boolean, selectionCount: number, action: object, showColConfig: boolean }</td><td>--</td><td>{showColConfig: true}</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u63CF\u8FF0</td></tr><tr><td>searchbar</td><td>\u81EA\u5B9A\u4E49 searchbar</td></tr><tr><td>searchbar-prefix</td><td>\u81EA\u5B9A\u4E49 searchbar \u524D\u7F6E\u63D2\u69FD</td></tr><tr><td>searchbar-suffix</td><td>\u81EA\u5B9A\u4E49 searchbar \u540E\u7F6E\u63D2\u69FD</td></tr><tr><td>toolbar</td><td>\u81EA\u5B9A\u4E49toolbar</td></tr><tr><td>toolbar-extra-after</td><td>\u81EA\u5B9A\u4E49toolbar\u989D\u5916\u64CD\u4F5C\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar</td></tr><tr><td>toolbar-extra-before</td><td>\u81EA\u5B9A\u4E49toolbar\u989D\u5916\u64CD\u4F5C\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar</td></tr><tr><td>toolbar-action-icon</td><td>\u81EA\u5B9A\u4E49toolbar action icon\u7684\u90E8\u5206\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8Etoolbar\uFF0C\u53C2\u6570\u4E3A { item }</td></tr><tr><td>pagination</td><td>\u81EA\u5B9A\u4E49pagination</td></tr><tr><td>empty</td><td>\u81EA\u5B9A\u4E49\u7A7A\u6570\u636E\u663E\u793A</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>row-click</td><td>\u4E0Esimple-table\u4E8B\u4EF6\u4E00\u81F4</td><td></td></tr><tr><td>cell-click</td><td>\u4E0Esimple-table\u4E8B\u4EF6\u4E00\u81F4</td><td></td></tr><tr><td>searchbar-change</td><td>\u641C\u7D22\u6761\u4EF6\u6539\u53D8\u4E8B\u4EF6</td><td>urlParams, mapParams, originalParams\uFF0C\u53C2\u89C1\u8868\u683C\u641C\u7D22\u680F\u7EC4\u4EF6</td></tr><tr><td>current-change</td><td>\u9875\u6570\u6539\u53D8\u4E8B\u4EF6</td><td>currentPage</td></tr><tr><td>size-change</td><td>\u9875\u6570\u53D1\u751F\u53D8\u66F4\u4E8B\u4EF6</td><td>size</td></tr></tbody></table>',6);function ue(o,t,e,k,m,E){const D=v("hb-demo0"),h=v("demo-block"),B=v("right-nav");return W(),X(Y,null,[i("section",null,[K,M,O,_(h,{fs:""},{source:R(()=>[_(D)]),highlight:R(()=>[ee]),_:1}),te]),_(B)],64)}var he=H(J,[["render",ue]]);export{he as default};
