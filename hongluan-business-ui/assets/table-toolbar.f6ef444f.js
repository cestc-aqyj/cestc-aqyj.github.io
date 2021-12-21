var t=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,l=(o,n,e)=>n in o?t(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;import{W as i,o as c,c as a,g as s,v as d,s as h,Y as r,aL as u,_ as b,aK as f}from"./vue.3fc01528.js";import{_ as C}from"./index.0d173d5d.js";import"./hongluan-business.f987da2d.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.0bcdf856.js";const m={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:t,createVNode:i,withCtx:c,resolveDynamicComponent:a,openBlock:s,createBlock:d,createCommentVNode:h,createTextVNode:r,createElementVNode:b,Fragment:f,createElementBlock:C}=u,m=r("显示选中区域"),w=r("隐藏选中区域"),g=b("br",null,null,-1),p=r("显示操作区"),A=r("隐藏操作区"),k=r("隐藏删除操作"),x=r("显示删除操作"),y=r("显示3个操作"),v=b("br",null,null,-1),_=r("隐藏表格列配置"),j=r("添加列");const{defineComponent:S,ref:D,reactive:M}=u;return((t,i)=>{for(var c in i||(i={}))n.call(i,c)&&l(t,c,i[c]);if(o)for(var c of o(i))e.call(i,c)&&l(t,c,i[c]);return t})({render:function(o,n){const e=t("two-inbox"),l=t("hl-icon"),r=t("two-world"),u=t("two-airplay"),b=t("hl-group"),S=t("hb-table-toolbar"),D=t("hl-button");return s(),C(f,null,[i(S,{selection:o.selection,action:o.action,extra:o.extra,onAction:o.onAction,onColChange:o.onColChange},{"extra-after":c((()=>[i(b,{merge:""},{default:c((()=>[i(l,{size:"xs",fill:""},{default:c((()=>[i(e)])),_:1}),i(l,{size:"xs",fill:""},{default:c((()=>[i(r)])),_:1}),i(l,{size:"xs",fill:""},{default:c((()=>[i(u)])),_:1})])),_:1})])),"action-icon":c((({item:t})=>[t.icon?(s(),d(l,{key:0},{default:c((()=>[(s(),d(a("Two"+t.icon)))])),_:2},1024)):h("",!0)])),_:1},8,["selection","action","extra","onAction","onColChange"]),i(b,{class:"m-t-md",indent:"var(--md)"},{default:c((()=>[i(D,{onClick:o.showSelection},{default:c((()=>[m])),_:1},8,["onClick"]),i(D,{onClick:o.hideSelection},{default:c((()=>[w])),_:1},8,["onClick"])])),_:1}),g,i(b,{class:"m-t-md",indent:"var(--md)"},{default:c((()=>[i(D,{onClick:o.showAction},{default:c((()=>[p])),_:1},8,["onClick"]),i(D,{onClick:o.hideAction},{default:c((()=>[A])),_:1},8,["onClick"]),i(D,{onClick:o.hideDelAction},{default:c((()=>[k])),_:1},8,["onClick"]),i(D,{onClick:o.showDelAction},{default:c((()=>[x])),_:1},8,["onClick"]),i(D,{onClick:o.show3Actions},{default:c((()=>[y])),_:1},8,["onClick"])])),_:1}),v,i(b,{class:"m-t-md",indent:"var(--md)"},{default:c((()=>[i(D,{onClick:o.hideColConfigAction},{default:c((()=>[_])),_:1},8,["onClick"]),i(D,{onClick:o.addColAction},{default:c((()=>[j])),_:1},8,["onClick"])])),_:1})],64)}},S({setup(){const t=M({show:!1,count:0,total:100}),o=M({show:!0,showCount:2,actions:[{label:"删除所有",type:"danger",show:!0},{label:"批量转移",icon:"Airplay"},{label:"批量审定",icon:"Star"},{label:"批量修改"},{label:"批量通过"},{label:"其他"}]}),n=M({showColConfig:!0,colConfig:{cols:[{label:"序号"},{label:"默认colType"},{label:"link类型"},{label:"slot类型"}]}});return{selection:t,action:o,extra:n,showSelection:()=>{t.count=Math.floor(100*Math.random()),t.show=!0},hideSelection:()=>{t.show=!1,t.count="--"},onAction:t=>{console.log("on action",t)},showAction:()=>{o.show=!0},hideAction:()=>{o.show=!1},hideDelAction:()=>{o.actions[0].show=!1},showDelAction:()=>{o.actions[0].show=!0},show3Actions:()=>{o.showCount=3},addColAction:()=>{n.colConfig.cols.push({label:"添加"+Math.floor(100*Math.random())})},hideColConfigAction:()=>{n.showColConfig=!1},onColChange:()=>{console.log(n.colConfig.cols)}}}}))}()}},w=s("h1",null,"TableToolbar 表格工具栏",-1),g=s("p",null,"表格工具栏组件。包括三个区域：选中信息区，操作区，以及额外区。",-1),p=s("h2",{id:"ji-chu-yong-fa"},[s("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),b(" 基础用法")],-1),A=s("div",null,[s("p",null,[s("code",null,"action"),b("参数里面显示出来的选项渲染为Button，折叠区域渲染为DropdownItem，所以对应的Button和DropdownItem属性都可以使用。针对列的配置会自动存储于本地。")])],-1),k=s("pre",null,[s("code",{class:"html"},' <template>\n  <hb-table-toolbar\n    :selection="selection"\n    :action="action"\n    :extra="extra"\n    @action="onAction"\n    @col-change="onColChange"\n  >\n    <template #extra-after>\n      <hl-group merge>\n        <hl-icon size="xs" fill><two-inbox /></hl-icon>\n        <hl-icon size="xs" fill><two-world /></hl-icon>\n        <hl-icon size="xs" fill><two-airplay /></hl-icon>\n      </hl-group>\n    </template>\n    <template #action-icon="{ item }">\n      <hl-icon v-if="item.icon">\n        <component :is="\'Two\' + item.icon" />\n      </hl-icon>\n    </template>\n  </hb-table-toolbar>\n  <hl-group class="m-t-md" indent="var(--md)">\n    <hl-button @click="showSelection">显示选中区域</hl-button>\n    <hl-button @click="hideSelection">隐藏选中区域</hl-button>\n  </hl-group>\n  <br>\n  <hl-group class="m-t-md" indent="var(--md)">\n    <hl-button @click="showAction">显示操作区</hl-button>\n    <hl-button @click="hideAction">隐藏操作区</hl-button>\n    <hl-button @click="hideDelAction">隐藏删除操作</hl-button>\n    <hl-button @click="showDelAction">显示删除操作</hl-button>\n    <hl-button @click="show3Actions">显示3个操作</hl-button>\n  </hl-group>\n  <br>\n  <hl-group class="m-t-md" indent="var(--md)">\n    <hl-button @click="hideColConfigAction">隐藏表格列配置</hl-button>\n    <hl-button @click="addColAction">添加列</hl-button>\n  </hl-group>\n</template>\n\n<script>\nimport { defineComponent, ref, reactive } from \'vue\'\nexport default defineComponent({\n  setup() {\n    const selection = reactive({\n      show: false,\n      count: 0,\n      total: 100,\n    })\n    const action = reactive({\n      show: true,\n      showCount: 2,\n      actions: [\n        { label: \'删除所有\', type: \'danger\', show: true },\n        { label: \'批量转移\', icon: \'Airplay\' },\n        { label: \'批量审定\', icon: \'Star\' },\n        { label: \'批量修改\' },\n        { label: \'批量通过\' },\n        { label: \'其他\' },\n      ],\n    })\n    const extra = reactive({\n      showColConfig: true,\n      colConfig: {\n        cols: [\n          { label: \'序号\' },\n          { label: \'默认colType\' },\n          { label: \'link类型\' },\n          { label: \'slot类型\' },\n        ],\n      },\n    })\n\n    const onAction = item => {\n      console.log(\'on action\', item)\n    }\n\n    const showSelection = () => {\n      selection.count = Math.floor(Math.random() * 100)\n      selection.show = true\n    }\n    const hideSelection = () => {\n      selection.show = false\n      selection.count = \'--\'\n    }\n    const showAction = () => {\n      action.show = true\n    }\n    const hideAction = () => {\n      action.show = false\n    }\n    const hideDelAction = () => {\n      action.actions[0].show = false\n    }\n    const showDelAction = () => {\n      action.actions[0].show = true\n    }\n    const show3Actions = () => {\n      action.showCount = 3\n    }\n    const hideColConfigAction = () => {\n      extra.showColConfig = false\n    }\n    const addColAction = () => {\n      extra.colConfig.cols.push({ label: \'添加\' + Math.floor(Math.random() * 100) })\n    }\n    const onColChange = () => {\n      console.log(extra.colConfig.cols)\n    }\n    return {\n      selection,\n      action,\n      extra,\n      showSelection,\n      hideSelection,\n      onAction,\n      showAction,\n      hideAction,\n      hideDelAction,\n      showDelAction,\n      show3Actions,\n      addColAction,\n      hideColConfigAction,\n      onColChange,\n    }\n  },\n})\n<\/script>\n')],-1),x=f('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>selection</td><td>选中信息</td><td>object {show: boolean; count: string / number, total: string / number}</td><td></td><td>{ show: false, count: &#39;--&#39;, total: &#39;--&#39; }</td></tr><tr><td>action</td><td>操作信息</td><td>object { show: boolean; showCount: number; actions: array&lt;{label: string; show: boolean}&gt; }</td><td></td><td>{ show: true, showCount: 1, actions: [] }</td></tr><tr><td>extra</td><td>右侧额外区域信息</td><td>object {showColConfig: boolean; colConfig: object}</td><td></td><td>{showColConfig: true, colConfig: {}}</td></tr></tbody></table><h2 id="extra.colconfig-attributes"><a class="header-anchor" href="#extra.colconfig-attributes"></a> extra.colConfig Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>storeKey</td><td>存储在LocalStorage中的key，一般不需要设置</td><td>string</td><td></td><td>location.pathname + location.hash</td></tr><tr><td>version</td><td>存储的数据版本号，一般不需要设置。如果确实需要放弃自动保存，每次可传入随机字符串</td><td>string</td><td></td><td>v1</td></tr><tr><td>cols</td><td>列信息，当进行列选择时，会自动写入$show$属性，请不要手工修改此属性。请确认label值不重复</td><td>object {label: string}</td><td>--</td><td>--</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>selection</td><td>选中信息区域</td></tr><tr><td>extra-after</td><td>右侧额外信息区域，在colConfig按钮之后</td></tr><tr><td>extra-before</td><td>右侧额外信息区域，在colConfig按钮之前</td></tr><tr><td>action-icon</td><td>自定义action图标</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>action</td><td>点击action触发的事件</td><td>传入的action对象</td></tr><tr><td>col-change</td><td>选择列触发的事件</td><td>--</td></tr></tbody></table>',8);var y=C(m,[["render",function(t,o,n,e,l,u){const b=i("hb-demo0"),f=i("demo-block"),C=i("right-nav");return c(),a(r,null,[s("section",null,[w,g,p,d(f,{fs:""},{source:h((()=>[d(b)])),highlight:h((()=>[k])),default:h((()=>[A])),_:1}),x]),d(C)],64)}]]);export{y as default};
