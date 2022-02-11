var e=Object.defineProperty,t=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,d,l)=>d in t?e(t,d,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[d]=l;import{W as r,o as a,c as i,g as o,v as s,s as h,Y as c,aM as b,q as f,S as u}from"./vue.b4f20c31.js";import{_ as p}from"./index.1d552eaf.js";import"./hongluan-business.8ae6e7e8.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.9dddef68.js";const m={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:e,openBlock:r,createBlock:a}=b;const{defineComponent:i,ref:o,reactive:s}=b;return((e,r)=>{for(var a in r||(r={}))d.call(r,a)&&n(e,a,r[a]);if(t)for(var a of t(r))l.call(r,a)&&n(e,a,r[a]);return e})({render:function(t,d){const l=e("hb-tree-transfer");return r(),a(l,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value=e),filterable:t.filterable,"tree-props":t.treeProps},null,8,["modelValue","filterable","tree-props"])}},i({setup:()=>({value:o(["2"]),clearable:o(!0),disabled:o(!1),filterable:o(!0),treeProps:s({nodeKey:"id",checkStrictly:!0,showCheckbox:!1,filterNodeMethod:(e,t)=>!e||-1!==t.label.indexOf(e),data:[{label:"新疆维吾尔自治区",id:"1",childrens:[{label:"乌鲁木齐市",id:"2",childrens:[{label:"达坂城区",id:"7",childrens:[]},{label:"头屯河区",id:"8",childrens:[]},{label:"乌鲁木齐县",id:"9",childrens:[{label:"测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇",id:"8-1",childrens:[]},{label:"测试乡镇2",id:"8-2",childrens:[]},{label:"测试乡镇3",id:"8-3",childrens:[]}]}]},{label:"克拉玛依市",id:"3",disabled:!0,childrens:[{label:"克拉玛依区",id:"10",disabled:!0,childrens:[]},{label:"白碱滩区",id:"11",disabled:!0,childrens:[]},{label:"独山子区",id:"12",disabled:!0,childrens:[]}]},{label:"吐鲁番地区",id:"4",childrens:[]},{label:"哈密地区",id:"5",childrens:[]},{label:"昌吉回族自治州",id:"6",childrens:[]}]}],props:{children:"childrens",label:"label"}})})}))}()}},v=o("h1",null,"TreeTransfer 树形穿梭框",-1),y=o("p",null,"可以对树形结构进行选择。",-1),g=o("h2",{id:"ji-chu-yong-fa"},[o("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),f(" 基础用法")],-1),j=o("div",null,[o("p",null,[f("过滤函数左右侧同时使用"),o("code",null,"treeProps"),f("里面定义的"),o("code",null,"filterNodeMethod")])],-1),k=o("pre",null,[o("code",{class:"html"}," <template>\n  <hb-tree-transfer\n    v-model=\"value\"\n    :filterable=\"filterable\"\n    :tree-props=\"treeProps\"\n  />\n</template>\n\n<script>\nimport { defineComponent, ref, reactive } from 'vue'\nexport default defineComponent({\n  setup() {\n    const filterNode = (value, data) => {\n      if (!value) return true\n      return data.label.indexOf(value) !== -1\n    }\n    return {\n      value: ref(['2']),\n      clearable: ref(true),\n      disabled: ref(false),\n      filterable: ref(true),\n      treeProps: reactive({\n        nodeKey: 'id',\n        checkStrictly: true,\n        showCheckbox: false,\n        filterNodeMethod: filterNode,\n        data: [\n          {\n            label: '新疆维吾尔自治区',\n            id: '1',\n            childrens: [\n              {\n                label: '乌鲁木齐市',\n                id: '2',\n                childrens: [\n                  { label: '达坂城区', id: '7', childrens: [] },\n                  { label: '头屯河区', id: '8', childrens: [] },\n                  {\n                    label: '乌鲁木齐县',\n                    id: '9',\n                    childrens: [\n                      {\n                        label:\n                          '测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇',\n                        id: '8-1',\n                        childrens: [],\n                      },\n                      { label: '测试乡镇2', id: '8-2', childrens: [] },\n                      { label: '测试乡镇3', id: '8-3', childrens: [] },\n                    ],\n                  },\n                ],\n              },\n              {\n                label: '克拉玛依市',\n                id: '3',\n                disabled: true,\n                childrens: [\n                  {\n                    label: '克拉玛依区',\n                    id: '10',\n                    disabled: true,\n                    childrens: [],\n                  },\n                  {\n                    label: '白碱滩区',\n                    id: '11',\n                    disabled: true,\n                    childrens: [],\n                  },\n                  {\n                    label: '独山子区',\n                    id: '12',\n                    disabled: true,\n                    childrens: [],\n                  },\n                ],\n              },\n              { label: '吐鲁番地区', id: '4', childrens: [] },\n              { label: '哈密地区', id: '5', childrens: [] },\n              { label: '昌吉回族自治州', id: '6', childrens: [] },\n            ],\n          },\n        ],\n        props: {\n          children: 'childrens',\n          label: 'label',\n        },\n      }),\n    }\n  },\n})\n<\/script>\n")],-1),O=u('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>左侧树属性，参见 Tree 组件，nodeKey默认设置为id</td><td>object</td><td>-</td><td>-</td></tr><tr><td>titles</td><td>自定义列表标</td><td>array</td><td>-</td><td>[&#39;列表 1&#39;, &#39;列表 2&#39;]</td></tr><tr><td>filter-placeholder</td><td>搜索框占位</td><td>string</td><td>—</td><td>请输入搜索内容</td></tr><tr><td>render-content</td><td>自定义数据项渲染函，参数分别为：h 函数；树节点数据；left/right 标识。同时适用两侧</td><td>function(h, data, mark)</td><td>—</td><td>-</td></tr><tr><td>filterable</td><td>是否可搜</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>left-footer</td><td>左侧列表底部的内容</td></tr><tr><td>right-footer</td><td>右侧列表底部的内容</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clearQuery</td><td>清空某个面板的搜索关键词</td><td>&#39;left&#39; / &#39;right&#39;，指定需要清空的面板</td></tr></tbody></table>',6);var P=p(m,[["render",function(e,t,d,l,n,b){const f=r("hb-demo0"),u=r("demo-block"),p=r("right-nav");return a(),i(c,null,[o("section",null,[v,y,g,s(u,{fs:""},{source:h((()=>[s(f)])),highlight:h((()=>[k])),default:h((()=>[j])),_:1}),O]),s(p)],64)}]]);export{P as default};
