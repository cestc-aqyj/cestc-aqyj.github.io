var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l;import{W as o,o as r,c as d,i as s,v as c,s as i,aL as h,F as p,aK as b}from"./vue.9504bfd9.js";import{_ as u}from"./index.8737dac5.js";import"./hongluan-business.af260d91.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.c9e82cbe.js";const m={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:e,createVNode:o,withCtx:r,resolveDynamicComponent:d,openBlock:s,createBlock:c,createCommentVNode:i,toDisplayString:p,createTextVNode:b}=h,u=b(p("")),m=b("修改");const{defineComponent:g,ref:w,reactive:v}=h;return((e,o)=>{for(var r in o||(o={}))n.call(o,r)&&a(e,r,o[r]);if(t)for(var r of t(o))l.call(o,r)&&a(e,r,o[r]);return e})({render:function(t,n){const l=e("hb-data-filter"),a=e("two-table"),h=e("hl-icon"),p=e("hl-button"),b=e("hl-radio"),g=e("two-chart-pie"),w=e("hl-group"),v=e("hl-checkbox"),f=e("hb-simple-table-list");return s(),c(f,{cols:t.cols,"table-data":t.tableData,pagination:t.pagination,searchbar:t.searchbar,toolbar:t.toolbar,"table-props":t.tableProps,onRowClick:t.rowClicked,onSearchbarChange:t.searchbarChanged},{"toolbar-extra-before":r((()=>[o(l,{items:t.searchItems},null,8,["items"])])),"toolbar-extra-after":r((()=>[o(w,{merge:"",indent:""},{default:r((()=>[o(b,{modelValue:t.radio,"onUpdate:modelValue":n[0]||(n[0]=e=>t.radio=e),label:"1",custom:""},{default:r((()=>[o(p,{effect:"light",type:"primary",equal:""},{icon:r((()=>[o(h,null,{default:r((()=>[o(a)])),_:1})])),_:1})])),_:1},8,["modelValue"]),o(b,{modelValue:t.radio,"onUpdate:modelValue":n[1]||(n[1]=e=>t.radio=e),label:"2",custom:""},{default:r((()=>[o(p,{effect:"light",type:"primary",equal:""},{icon:r((()=>[o(h,null,{default:r((()=>[o(g)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),"toolbar-action-icon":r((({item:e})=>[e.icon?(s(),c(h,{key:0},{default:r((()=>[(s(),c(d(e.icon)))])),_:2},1024)):i("",!0)])),firstCol:r((({col:e})=>[o(v,{modelValue:t.selectedAll,"onUpdate:modelValue":n[2]||(n[2]=e=>t.selectedAll=e),indeterminate:t.isIndeterminate,"show-label":!1,onChange:t.selectAll},null,8,["modelValue","indeterminate","onChange"])])),tableIndex:r((({row:e})=>[o(v,{modelValue:t.selectedRows,"onUpdate:modelValue":n[3]||(n[3]=e=>t.selectedRows=e),label:e.id,"show-label":!1,onChange:n=>t.selectRow(e.id)},{default:r((()=>[u])),_:2},1032,["modelValue","label","onChange"])])),handle:r((({row:e})=>[o(p,{type:"link"},{default:r((()=>[m])),_:1})])),_:1},8,["cols","table-data","pagination","searchbar","toolbar","table-props","onRowClick","onSearchbarChange"])}},g({setup(){const e=w("1"),t=w(!1),n=w([]),l=w(t),a=w(!1),o=w([{id:1,name:"分辨率",sex:"女",org:"中国系统",des:"来自UED的设计师"},{id:2,name:"建军节",sex:"男",org:"中国系统",des:"经验丰富的前端工程师"},{id:3,name:"胃肠炎",sex:"男",org:"中国系统",des:"90后交互设计师"}]),r=w([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol"},{title:"用户名",prop:"name"},{title:"性别",prop:"sex"},{title:"单位",prop:"org"},{title:"简介",prop:"des"},{title:"操作",slotName:"handle",align:"center"}]),d=v({size:"sm",striped:!0}),s=v({show:!0,pageSize:20,total:100,currentPage:1}),c=v({show:!0,searcher:{placeholder:"请输入搜索条件"},selector:{colCount:"count-xl-2 count-lg-2 count-md-1",items:[{placeholder:"下拉测试",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"已驳回3",code:"3"},{name:"已审定4",code:"4"}]},{placeholder:"下拉测试",value:"4",name:"prop2",options:[{label:"已驳回3",value:"3"},{label:"已审定4",value:"4"}]},{span:"grid-col-span-2",type:"timepicker",name:"prop5",value:[],"is-range":!0,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"}]}}),i=v({showSelectionText:!0,selectionCount:0,action:{show:!1,showCount:2,actions:[{label:"删除所有",icon:"TwoDel",noFill:!0,show:!0},{label:"批量转移",icon:"TwoFolderIn",noFill:!0,show:!0},{label:"批量审定",icon:"TwoExamine"},{label:"批量修改",icon:"TwoEdit"},{label:"批量通过",icon:"TwoCircleCheck"}]}});return{searchbar:c,searchItems:[{type:"select",label:"测试1",placeholder:"下拉测试",value:"4",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"已驳回3",code:"3"},{name:"已审定4",code:"4"}]},{type:"input",label:"测试2",placeholder:"sss测试",value:"ccc",name:"prop2"}],toolbar:i,pagination:s,selectedAll:t,selectedRows:n,tableData:o,cols:r,selectAll:()=>{t.value?(n.value.splice(0,n.value.length),n.value.push(...o.value.map((e=>e.id))),i.showSelectionText=!0,i.action.show=!0,i.selectionCount=n.value.length,a.value=!1):(n.value.splice(0,n.value.length),i.showSelectionText=!0,i.action.show=!1,i.selectionCount=0)},selectRow:()=>{t.value=n.value.length===o.value.length,i.showSelectionText=!0,i.action.show=n.value.length>0,i.selectionCount=n.value.length,n.value.length>0&&0==t.value?a.value=!0:a.value=!1},rowClicked:(e,t,n)=>{console.log("rowClicked",e,t,n)},searchbarChanged:(...e)=>{console.log("searchbarChanged",...e)},show:l,isIndeterminate:a,radio:e,tableProps:d}}}))}()}},g={class:"doc-main-content"},w={class:"doc-content"},v=s("h1",null,"SimpleTableList 表格",-1),f=s("p",null,"集成分页以及工具栏的简单表格组件。",-1),C=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),p(" 基础用法")],-1),x=s("pre",null,[s("code",{class:"html"}," <template>\n  <hb-simple-table-list\n    :cols=\"cols\"\n    :table-data=\"tableData\"\n    :pagination=\"pagination\"\n    :searchbar=\"searchbar\"\n    :toolbar=\"toolbar\"\n    :table-props=\"tableProps\"\n    @row-click=\"rowClicked\"\n    @searchbar-change=\"searchbarChanged\"\n  >\n    <template #toolbar-extra-before>\n      <hb-data-filter :items=\"searchItems\" />\n    </template>\n    <template #toolbar-extra-after>\n      <hl-group merge indent>\n        <hl-radio v-model=\"radio\" label=\"1\" custom>\n          <hl-button effect=\"light\" type=\"primary\" equal>\n            <template #icon>\n              <hl-icon><two-table /></hl-icon>\n            </template>\n          </hl-button>\n        </hl-radio>\n        <hl-radio v-model=\"radio\" label=\"2\" custom>\n          <hl-button effect=\"light\" type=\"primary\" equal>\n            <template #icon>\n              <hl-icon><two-chart-pie /></hl-icon>\n            </template>\n          </hl-button>\n        </hl-radio>\n      </hl-group>\n    </template>\n    <template #toolbar-action-icon=\"{ item }\">\n      <hl-icon v-if=\"item.icon\">\n        <component :is=\"item.icon\" />\n      </hl-icon>\n    </template>\n\n    <template #firstCol=\"{ col }\">\n      <hl-checkbox v-model=\"selectedAll\" :indeterminate=\"isIndeterminate\" :show-label=\"false\" @change=\"selectAll\" />\n    </template>\n    <template #tableIndex=\"{ row }\">\n      <hl-checkbox v-model=\"selectedRows\" :label=\"row.id\" :show-label=\"false\" @change=\"selectRow(row.id)\">{{ '' }}</hl-checkbox>\n    </template>\n    <template #handle=\"{ row }\">\n      <hl-button type=\"link\">修改</hl-button>\n    </template>\n  </hb-simple-table-list>\n</template>\n\n<script>\nimport { defineComponent, ref, reactive } from 'vue'\nexport default defineComponent({\n  setup() {\n    const radio = ref('1')\n    const selectedAll = ref(false)\n    const selectedRows = ref([])\n    const show = ref(selectedAll)\n    const isIndeterminate = ref(false)\n    const tableData = ref([\n      { id: 1, name: '分辨率', sex: '女', org: '中国系统', des: '来自UED的设计师' },\n      { id: 2, name: '建军节', sex: '男', org: '中国系统', des: '经验丰富的前端工程师' },\n      { id: 3, name: '胃肠炎', sex: '男', org: '中国系统', des: '90后交互设计师' },\n    ])\n    const cols = ref([\n      { title: '#', slotName: 'tableIndex', headerSlotName: 'firstCol' },\n      { title: '用户名', prop: 'name' },\n      { title: '性别', prop: 'sex' },\n      { title: '单位', prop: 'org' },\n      { title: '简介', prop: 'des' },\n      { title: '操作', slotName: 'handle', align: 'center' },\n    ])\n    const tableProps = reactive({\n      size: 'sm',\n      striped: true,\n    })\n\n    const pagination = reactive({\n      show: true,\n      pageSize: 20,\n      total: 100,\n      currentPage: 1,\n    })\n    const searchbar = reactive({\n      show: true,\n      searcher: {\n        placeholder: '请输入搜索条件',\n      },\n      selector: {\n        colCount: 'count-xl-2 count-lg-2 count-md-1',\n        items: [\n          {\n            placeholder: '下拉测试',\n            value: '4',\n            name: 'prop1',\n            prop: {\n              label: 'name',\n              value: 'code',\n            },\n            options: [\n              { name: '已驳回3', code: '3' },\n              { name: '已审定4', code: '4' },\n            ],\n          },\n          {\n            placeholder: '下拉测试',\n            value: '4',\n            name: 'prop2',\n            options: [\n              { label: '已驳回3', value: '3' },\n              { label: '已审定4', value: '4' },\n            ],\n          },\n          {\n            span: 'grid-col-span-2',\n            type: 'timepicker',\n            name: 'prop5',\n            value: [],\n            'is-range': true,\n            'range-separator': '至',\n            'start-placeholder': '开始时间',\n            'end-placeholder': '结束时间',\n            'placeholder': '选择时间范围',\n          },\n        ],\n      },\n    })\n    const toolbar = reactive({\n      showSelectionText: true,\n      selectionCount: 0,\n      action: {\n        show: false,\n        showCount: 2,\n        actions: [\n          { label: '删除所有', icon: 'TwoDel', noFill: true, show: true },\n          { label: '批量转移', icon: 'TwoFolderIn', noFill: true, show: true },\n          { label: '批量审定', icon: 'TwoExamine' },\n          { label: '批量修改', icon: 'TwoEdit' },\n          { label: '批量通过', icon: 'TwoCircleCheck' },\n        ],\n      },\n    })\n    const searchItems = [\n      {\n        type: 'select',\n        label: '测试1',\n        placeholder: '下拉测试',\n        value: '4',\n        name: 'prop1',\n        prop: {\n          label: 'name',\n          value: 'code',\n        },\n        options: [\n          { name: '已驳回3', code: '3' },\n          { name: '已审定4', code: '4' },\n        ],\n      },\n      {\n        type: 'input',\n        label: '测试2',\n        placeholder: 'sss测试',\n        value: 'ccc',\n        name: 'prop2',\n      },\n    ]\n\n    const selectAll = () => {\n      if (selectedAll.value) {\n        selectedRows.value.splice(0, selectedRows.value.length)\n        selectedRows.value.push(...tableData.value.map(d => d.id))\n        toolbar.showSelectionText = true\n        toolbar.action.show = true\n        toolbar.selectionCount = selectedRows.value.length\n        isIndeterminate.value = false\n\n      } else {\n        selectedRows.value.splice(0, selectedRows.value.length)\n        toolbar.showSelectionText = true\n        toolbar.action.show = false\n        toolbar.selectionCount = 0\n      }\n    }\n    const selectRow = () => {\n      selectedAll.value = selectedRows.value.length === tableData.value.length\n      toolbar.showSelectionText = true\n      toolbar.action.show = selectedRows.value.length > 0\n      toolbar.selectionCount = selectedRows.value.length\n\n      if (selectedRows.value.length > 0 && selectedAll.value == false) {\n        isIndeterminate.value = true\n      } else {\n        isIndeterminate.value = false\n      }\n\n    }\n    const rowClicked = (row, rowIndex, event) => {\n      console.log('rowClicked', row, rowIndex, event)\n    }\n    const searchbarChanged = (...args) => {\n      console.log('searchbarChanged', ...args)\n    }\n\n    return {\n      searchbar,\n      searchItems,\n      toolbar,\n      pagination,\n      selectedAll,\n      selectedRows,\n      tableData,\n      cols,\n      selectAll,\n      selectRow,\n      rowClicked,\n      searchbarChanged,\n      show,\n      isIndeterminate,\n      radio,\n      tableProps,\n    }\n  },\n})\n<\/script>\n")],-1),y=b('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>table-props</td><td>绑定到内部SimpleTable组件的属性，可选值参考SimpleTable组件</td><td>object</td><td>--</td><td>--</td></tr><tr><td>loading</td><td>是否显示加载提示</td><td>boolean</td><td>--</td><td>false</td></tr><tr><td>cols</td><td>列定义,参见simple-table组件中col的定义</td><td>array</td><td>--</td><td>--</td></tr><tr><td>table-data</td><td>表格数据</td><td>array</td><td>--</td><td>[]</td></tr><tr><td>pagination</td><td>分页数据</td><td>object</td><td>--</td><td>{total: 0, pageSize: 10, currentPage: 1}</td></tr><tr><td>searchbar</td><td>搜索栏参数，参见表格搜索栏组件</td><td>object</td><td>--</td><td>{ searcher: { placeholder: &#39;请输入搜索条件&#39; } }</td></tr><tr><td>toolbar</td><td>工具栏参数，action属性参见表格工具栏组件</td><td>object { showSelectionText: boolean, selectionCount: number, action: object, showColConfig: boolean }</td><td>--</td><td>{showColConfig: true}</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>描述</td></tr><tr><td>searchbar</td><td>自定义 searchbar</td></tr><tr><td>toolbar</td><td>自定义toolbar</td></tr><tr><td>toolbar-extra-after</td><td>自定义toolbar额外操作的部分，优先级低于toolbar</td></tr><tr><td>toolbar-extra-before</td><td>自定义toolbar额外操作的部分，优先级低于toolbar</td></tr><tr><td>toolbar-action-icon</td><td>自定义toolbar action icon的部分，优先级低于toolbar，参数为 { item }</td></tr><tr><td>pagination</td><td>自定义pagination</td></tr><tr><td>empty</td><td>自定义空数据显示</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>row-click</td><td>与simple-table事件一致</td><td></td></tr><tr><td>cell-click</td><td>与simple-table事件一致</td><td></td></tr><tr><td>searchbar-change</td><td>搜索条件改变事件</td><td>urlParams, mapParams, originalParams，参见表格搜索栏组件</td></tr><tr><td>current-change</td><td>页数改变事件</td><td>currentPage</td></tr><tr><td>size-change</td><td>页数发生变更事件</td><td>size</td></tr></tbody></table>',6);var k=u(m,[["render",function(e,t,n,l,a,h){const p=o("hb-demo0"),b=o("demo-block"),u=o("right-nav");return r(),d("section",g,[s("div",w,[v,f,C,c(b,{fs:""},{source:i((()=>[c(p)])),highlight:i((()=>[x])),_:1}),y]),c(u)])}]]);export{k as default};
