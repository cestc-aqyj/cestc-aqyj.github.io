var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,n,l)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,a=(t,a)=>{for(var o in a||(a={}))n.call(a,o)&&d(t,o,a[o]);if(e)for(var o of e(a))l.call(a,o)&&d(t,o,a[o]);return t};import{H as o,o as r,C as u,D as c,v as h,P as s,at as i,_ as f,as as p}from"./vue.69b6befa.js";import{_ as m}from"./index.f86c4400.js";import"./hongluan.17b69477.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.f9afdbe4.js";const g={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=i;const{defineComponent:l,ref:d}=i,o=l({setup:()=>({data:d((t=>{const e=[];for(let n=1;n<=15;n++)e.push({key:n,label:`备选项 ${n}`,disabled:n%4==0});return e})()),value:d([1,4])})});return a({render:function(l,d){const a=t("hl-transfer");return e(),n(a,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),data:l.data},null,8,["modelValue","data"])}},o)}(),"hl-demo1":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=i;const{defineComponent:l,ref:d}=i,o=l({setup:()=>({data:d((t=>{const e=[];for(let n=1;n<=15;n++)e.push({key:n,label:`备选项 ${n}`,disabled:n%4==0});return e})()),value:d([1,4]),confirm:confirm})});return a({render:function(l,d){const a=t("hl-transfer");return e(),n(a,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),"left-default-checked":[1,4],titles:["Source","Target"],data:l.data,"show-buttons":!1,format:{noChecked:"${total}",hasChecked:"${total}"}},null,8,["modelValue","data"])}},o)}(),"hl-demo2":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=i;const{defineComponent:l,ref:d}=i,o=l({setup:()=>({data:d((t=>{const e=[],n=["shanghai","beijing","guangzhou","shenzhen","nanjing","xian","chengdu"];return["上海","北京","广州","深圳","南京","西安","成都"].forEach(((t,l)=>{e.push({label:t,key:l,spell:n[l]})})),e})()),value:d([]),filterMethod:(t,e)=>e.spell.indexOf(t)>-1})});return a({render:function(l,d){const a=t("hl-transfer");return e(),n(a,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),filterable:"","filter-method":l.filterMethod,"filter-placeholder":"请输入城市拼音",data:l.data},null,8,["modelValue","filter-method","data"])}},o)}(),"hl-demo3":function(){const{createElementVNode:t,createTextVNode:e,resolveComponent:n,withCtx:l,createVNode:d,toDisplayString:o,openBlock:r,createBlock:u}=i,c=t("p",null," 使用 render-content 自定义数据项 ",-1),h=e("操作"),s=e("操作"),f=t("p",{class:"m-t-lg"}," 使用 scoped-slot 自定义数据项 ",-1),p=t("span",null,"姓名",-1),m=t("div",{style:{display:"none"}},null,-1);const{defineComponent:g,ref:b}=i,k=g({setup(){const t=b((t=>{const e=[];for(let n=1;n<=15;n++)e.push({key:n,label:`备选项 ${n}`,disabled:n%4==0});return e})()),e=b([1]),n=b([1]),l=b(null);return{data:t,leftValue:e,rightValue:n,transferRef:l,renderFunc:(t,e)=>t("span",null,e.key," - ",e.label),addToRight:()=>{l.value.addToRight()},addToLeft:()=>{l.value.addToLeft()},handleChange:(t,e,n)=>{console.log(t,e,n)}}}});return a({render:function(e,a){const i=n("hl-button"),g=n("hl-transfer"),b=n("hl-col"),k=n("hl-thumb"),v=n("two-folder-in"),y=n("hl-icon"),C=n("hl-group"),V=n("two-delete"),x=n("hl-row");return r(),u(x,null,{default:l((()=>[c,d(b,{span:"col-md-24"},{default:l((()=>[d(g,{block:"",modelValue:e.leftValue,"onUpdate:modelValue":a[0]||(a[0]=t=>e.leftValue=t),filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":e.renderFunc,titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.data,onChange:e.handleChange},{"left-footer":l((()=>[d(i,null,{default:l((()=>[h])),_:1})])),"right-footer":l((()=>[d(i,null,{default:l((()=>[s])),_:1})])),_:1},8,["modelValue","render-content","data","onChange"])])),_:1}),f,d(b,{span:"col-md-24"},{default:l((()=>[d(g,{block:"",modelValue:e.rightValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.rightValue=t),ref:"transferRef",filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.data,onChange:e.handleChange},{default:l((({option:e})=>[d(k,{round:"",type:"primary",size:"xs"},{default:l((()=>[p])),_:1}),t("span",null,o(e.key)+" - "+o(e.label),1)])),"left-footer":l((()=>[d(C,{full:"",align:"left"},{default:l((()=>[d(i,{equal:"","no-fill":"",onClick:e.addToRight},{icon:l((()=>[d(y,null,{default:l((()=>[d(v)])),_:1})])),_:1},8,["onClick"])])),_:1})])),"right-footer":l((()=>[d(i,{type:"danger",equal:"","no-fill":"",onClick:e.addToLeft},{icon:l((()=>[d(y,null,{default:l((()=>[d(V)])),_:1})])),_:1},8,["onClick"])])),buttons:l((()=>[m])),_:1},8,["modelValue","data","onChange"])])),_:1})])),_:1})}},k)}(),"hl-demo4":function(){const{resolveComponent:t,openBlock:e,createBlock:n}=i;const{defineComponent:l,ref:d}=i,o=l({setup:()=>({data:d((t=>{const e=[];for(let n=1;n<=15;n++)e.push({value:n,desc:`备选项 ${n}`,disabled:n%4==0});return e})()),value:d([])})});return a({render:function(l,d){const a=t("hl-transfer");return e(),n(a,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),props:{key:"value",label:"desc"},data:l.data},null,8,["modelValue","data"])}},o)}()}},b={class:"doc-main-content"},k={class:"doc-content"},v=c("h1",null,"Transfer 穿梭框",-1),y=c("h2",{id:"ji-chu-yong-fa"},[c("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),f(" 基础用法")],-1),C=c("div",null,[c("p",null,[f("Transfer 的数据通过 "),c("code",null,"data"),f(" 属性传入。数据需要是一个对象数组，每个对象有以下属性："),c("code",null,"key"),f(" 为数据的唯一性标识，"),c("code",null,"label"),f(" 为显示文本，"),c("code",null,"disabled"),f(" 表示该项数据是否禁止转移。目标列表中的数据项会同步到绑定至 "),c("code",null,"v-model"),f(" 的变量，值为数据项的 "),c("code",null,"key"),f(" 所组成的数组。当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 "),c("code",null,"v-model"),f(" 绑定的变量赋予一个初始值。")])],-1),V=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-transfer v-model="value" :data="data" />\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const generateData = _ => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      const data = ref(generateData())\n      const value = ref([1, 4])\n\n      return {\n        data,\n        value,\n      }\n    },\n  })\n<\/script>\n')],-1),x=c("h2",{id:"qie-huan-dan-xuan-mo-shi"},[c("a",{class:"header-anchor",href:"#qie-huan-dan-xuan-mo-shi"}),f(" 切换单选模式")],-1),$=c("div",null,[c("p",null,[f("当"),c("code",null,"show-buttons"),f("设置为 false 时，左右侧面板会变成单击选择模式并且左右侧默认选中项不再有效。")])],-1),T=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-transfer\n    v-model="value"\n    :left-default-checked="[1,4]"\n    :titles="[\'Source\', \'Target\']"\n    :data="data"\n    :show-buttons="false"\n    :format="{\n        noChecked: \'${total}\',\n        hasChecked: \'${total}\'\n      }"\n  />\n</template>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const generateData = _ => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      const data = ref(generateData())\n      const value = ref([1, 4])\n\n      return {\n        data,\n        value,\n        confirm,\n      }\n    },\n  })\n<\/script>\n')],-1),_=c("h2",{id:"ke-sou-suo"},[c("a",{class:"header-anchor",href:"#ke-sou-suo"}),f(" 可搜索")],-1),j=c("p",null,"在数据很多的情况下，可以对数据进行搜索和过滤。",-1),w=c("div",null,[c("p",null,[f("设置 "),c("code",null,"filterable"),f(" 为 "),c("code",null,"true"),f(" 即可开启搜索模式。默认情况下，若数据项的 "),c("code",null,"label"),f(" 属性包含搜索关键字，则会在搜索结果中显示。你也可以使用 "),c("code",null,"filter-method"),f(" 定义自己的搜索逻辑。"),c("code",null,"filter-method"),f(" 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。若方法返回 "),c("code",null,"true"),f("，则会在搜索结果中显示对应的数据项。")])],-1),R=c("pre",null,[c("code",{class:"html"},"<template>\n  <hl-transfer v-model=\"value\" filterable :filter-method=\"filterMethod\" filter-placeholder=\"请输入城市拼音\" :data=\"data\" />\n</template>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      const generateData = _ => {\n        const data = []\n        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']\n        const spell = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']\n        cities.forEach((city, index) => {\n          data.push({\n            label: city,\n            key: index,\n            spell: spell[index],\n          })\n        })\n        return data\n      }\n      const data = ref(generateData())\n      const value = ref([])\n      const filterMethod = (query, item) => {\n        return item.spell.indexOf(query) > -1\n      }\n\n      return {\n        data,\n        value,\n        filterMethod,\n      }\n    },\n  })\n<\/script>\n")],-1),D=c("h2",{id:"ke-zi-ding-yi"},[c("a",{class:"header-anchor",href:"#ke-zi-ding-yi"}),f(" 可自定义")],-1),B=c("p",null,"可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。",-1),S=c("div",null,[c("p",null,[f("可以使用 "),c("code",null,"titles"),f("、"),c("code",null,"button-texts"),f("、"),c("code",null,"render-content"),f(" 和 "),c("code",null,"format"),f(" 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。数据项的渲染还可以使用 "),c("code",null,"scoped-slot"),f(" 进行自定义。对于列表底部的内容区，提供了两个具名 slot："),c("code",null,"left-footer"),f(" 和 "),c("code",null,"right-footer"),f("。此外，如果希望某些数据项在初始化时就被勾选，可以使用 "),c("code",null,"left-default-checked"),f(" 和 "),c("code",null,"right-default-checked"),f(" 属性。最后，本例还展示了 "),c("code",null,"change"),f(" 事件的用法。注意：由于 jsfiddle 不支持 JSX 语法，所以使用 "),c("code",null,"render-content"),f(" 自定义数据项的例子在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。")])],-1),q=c("pre",null,[c("code",{class:"html"},'<template>\n  <hl-row>\n    <p>\n      使用 render-content 自定义数据项\n    </p>\n    <hl-col span="col-md-24">\n      <hl-transfer\n        block\n        v-model="leftValue"\n        filterable\n        :left-default-checked="[2, 3]"\n        :right-default-checked="[1]"\n        :render-content="renderFunc"\n        :titles="[\'Source\', \'Target\']"\n        :button-texts="[\'到左边\', \'到右边\']"\n        :format="{\n          noChecked: \'${total}\',\n          hasChecked: \'${checked}/${total}\'\n        }"\n        :data="data"\n        @change="handleChange"\n      >\n        <template #left-footer>\n          <hl-button>操作</hl-button>\n        </template>\n        <template #right-footer>\n          <hl-button>操作</hl-button>\n        </template>\n      </hl-transfer>\n    </hl-col>\n    <p class="m-t-lg">\n      使用 scoped-slot 自定义数据项\n    </p>\n    <hl-col span="col-md-24">\n      <hl-transfer\n        block\n        v-model="rightValue"\n        ref="transferRef"\n        filterable\n        :left-default-checked="[2, 3]"\n        :right-default-checked="[1]"\n        :titles="[\'Source\', \'Target\']"\n        :format="{\n          noChecked: \'${total}\',\n          hasChecked: \'${checked}/${total}\'\n        }"\n        :data="data"\n        @change="handleChange"\n      >\n        <template #default="{option}">\n          <hl-thumb round type="primary" size="xs">\n            <span>姓名</span>\n          </hl-thumb>\n          <span>{{ option.key }} - {{ option.label }}</span>\n        </template>\n        <template #left-footer>\n          <hl-group full align="left">\n            <hl-button equal no-fill @click="addToRight">\n              <template #icon>\n                <hl-icon><two-folder-in /></hl-icon>\n              </template>\n            </hl-button>\n          </hl-group>\n        </template>\n        <template #right-footer>\n          <hl-button type="danger" equal no-fill @click="addToLeft">\n            <template #icon>\n              <hl-icon><two-delete /></hl-icon>\n            </template>\n          </hl-button>\n        </template>\n        <template #buttons>\n          <div style="display: none"></div>\n        </template>\n      </hl-transfer>\n    </hl-col>\n  </hl-row>\n</template>\n\n<style>\n  .transfer-footer {\n    margin-left: 20px;\n    padding: 6px 5px;\n  }\n</style>\n\n<script>\n  import { defineComponent, ref } from \'vue\'\n  export default defineComponent({\n    setup() {\n      const generateData = _ => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            key: i,\n            label: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      const data = ref(generateData())\n      const leftValue = ref([1])\n      const rightValue = ref([1])\n      const transferRef = ref(null)\n\n      const renderFunc = (h, option) => {\n        return h(\'span\', null, option.key, \' - \', option.label)\n      }\n      const addToRight = () => {\n        transferRef.value.addToRight()\n      }\n      const addToLeft = () => {\n        transferRef.value.addToLeft()\n      }\n      const handleChange = (value, direction, movedKeys) => {\n        console.log(value, direction, movedKeys)\n      }\n\n      return {\n        data,\n        leftValue,\n        rightValue,\n        transferRef,\n        renderFunc,\n        addToRight,\n        addToLeft,\n        handleChange,\n      }\n    },\n  })\n<\/script>\n')],-1),z=c("h3",{id:"shu-ju-xiang-shu-xing-bie-ming"},[c("a",{class:"header-anchor",href:"#shu-ju-xiang-shu-xing-bie-ming"}),f(" 数据项属性别名")],-1),L=c("p",null,[f("默认情况下，Transfer 仅能识别数据项中的 "),c("code",null,"key"),f("、"),c("code",null,"label"),f(" 和 "),c("code",null,"disabled"),f(" 字段。如果你的数据的字段名不同，可以使用 "),c("code",null,"props"),f(" 属性为它们设置别名。")],-1),O=c("div",null,[c("p",null,[f("本例中的数据源没有 "),c("code",null,"key"),f(" 和 "),c("code",null,"label"),f(" 字段，在功能上与它们相同的字段名为 "),c("code",null,"value"),f(" 和 "),c("code",null,"desc"),f("。因此可以使用"),c("code",null,"props"),f(" 属性为 "),c("code",null,"key"),f(" 和 "),c("code",null,"label"),f(" 设置别名。")])],-1),M=c("pre",null,[c("code",{class:"html"},"<template>\n  <hl-transfer\n    v-model=\"value\"\n    :props=\"{\n      key: 'value',\n      label: 'desc'\n    }\"\n    :data=\"data\"\n  />\n</template>\n\n<script>\n  import { defineComponent, ref } from 'vue'\n  export default defineComponent({\n    setup() {\n      const generateData = _ => {\n        const data = []\n        for (let i = 1; i <= 15; i++) {\n          data.push({\n            value: i,\n            desc: `备选项 ${i}`,\n            disabled: i % 4 === 0,\n          })\n        }\n        return data\n      }\n      const data = ref(generateData())\n      const value = ref([])\n\n      return {\n        data,\n        value,\n      }\n    },\n  })\n<\/script>\n")],-1),U=p('<h3 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>data</td><td>Transfer 的数据源</td><td>array[{ key, label, disabled }]</td><td>—</td><td>[ ]</td></tr><tr><td>filterable</td><td>是否可搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-placeholder</td><td>搜索框占位符</td><td>string</td><td>—</td><td>请输入搜索内容</td></tr><tr><td>filter-method</td><td>自定义搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>confirm-method</td><td>单选模式下，移动全部时的确认方法，参数为 left/right，返回值是 Promise</td><td>function</td><td>—</td><td>—</td></tr><tr><td>target-order</td><td>右侧列表元素的排序策略：若为 <code>original</code>，则保持与数据源相同的顺序；若为 <code>push</code>，则新加入的元素排在最后；若为 <code>unshift</code>，则新加入的元素排在最前</td><td>string</td><td>original / push / unshift</td><td>original</td></tr><tr><td>titles</td><td>自定义列表标题</td><td>array</td><td>—</td><td>[&#39;列表 1&#39;, &#39;列表 2&#39;]</td></tr><tr><td>button-texts</td><td>自定义按钮文案</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>render-content</td><td>自定义数据项渲染函数</td><td>function(h, option)</td><td>—</td><td>—</td></tr><tr><td>format</td><td>列表顶部勾选状态文案</td><td>object{noChecked, hasChecked}</td><td>—</td><td>{ noChecked: &#39;${checked}/${total}&#39;, hasChecked: &#39;${checked}/${total}&#39; }</td></tr><tr><td>props</td><td>数据源的字段别名</td><td>object{key, label, disabled}</td><td>—</td><td>—</td></tr><tr><td>left-default-checked</td><td>初始状态下左侧列表的已勾选项的 key 数组</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>right-default-checked</td><td>初始状态下右侧列表的已勾选项的 key 数组</td><td>array</td><td>—</td><td>[ ]</td></tr><tr><td>show-buttons</td><td>是否显示中间操作按钮</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>自定义数据项的内容，参数为 { option }</td></tr><tr><td>left-footer</td><td>左侧列表底部的内容</td></tr><tr><td>right-footer</td><td>右侧列表底部的内容</td></tr><tr><td>buttons</td><td>自定义中间操作按钮区域</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clearQuery</td><td>清空某个面板的搜索关键词</td><td>&#39;left&#39; / &#39;right&#39;，指定需要清空的面板</td></tr><tr><td>addToLeft</td><td>把右侧选中选项添加到左侧</td><td>-</td></tr><tr><td>addToRight</td><td>把左侧选中选项添加到右侧</td><td>-</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events"></a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>右侧列表元素变化时触发</td><td>当前值、数据移动的方向（&#39;left&#39; / &#39;right&#39;）、发生移动的数据 key 数组</td></tr><tr><td>left-check-change</td><td>左侧列表元素被用户选中 / 取消选中时触发</td><td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td></tr><tr><td>right-check-change</td><td>右侧列表元素被用户选中 / 取消选中时触发</td><td>当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组</td></tr></tbody></table>',8);var E=m(g,[["render",function(t,e,n,l,d,a){const i=o("hl-demo0"),f=o("demo-block"),p=o("hl-demo1"),m=o("hl-demo2"),g=o("hl-demo3"),E=o("hl-demo4"),F=o("right-nav");return r(),u("section",b,[c("div",k,[v,y,h(f,null,{source:s((()=>[h(i)])),highlight:s((()=>[V])),default:s((()=>[C])),_:1}),x,h(f,null,{source:s((()=>[h(p)])),highlight:s((()=>[T])),default:s((()=>[$])),_:1}),_,j,h(f,null,{source:s((()=>[h(m)])),highlight:s((()=>[R])),default:s((()=>[w])),_:1}),D,B,h(f,null,{source:s((()=>[h(g)])),highlight:s((()=>[q])),default:s((()=>[S])),_:1}),z,L,h(f,null,{source:s((()=>[h(E)])),highlight:s((()=>[M])),default:s((()=>[O])),_:1}),U]),h(F)])}]]);export{E as default};