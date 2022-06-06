import{p as k,R as y,F as f,L as g,C as N,V as p,W as T,X as b,a2 as C,P as D,Q as e,y as $,S as w,M as m,o as j}from"./vue.651ae949.js";const A=k({setup(v){const i=(t,r)=>`${t}-${r}`,h=(t,r,s,o=1,d="node")=>{let n=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*r),a=i(d,++n);return{id:a,label:a,children:c?h(t,r,c,o+1,a):void 0}})},u=h(4,30,40),l=y({value:"id",label:"label",children:"children"});return(t,r)=>{const s=f("hl-tree-v2");return g(),N(s,{data:p(u),props:l.value,height:208},null,8,["data","props"])}}});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const S=k({setup(v){const i=(d,n)=>`${d}-${n}`,h=(d,n,c,a=1,x="node")=>{let M=0;return new Array(c).fill(a).map(()=>{const K=a===d?0:Math.round(Math.random()*n),_=i(x,++M);return{id:_,label:_,children:K?h(d,n,K,a+1,_):void 0}})},u=h(4,30,40),l=[],t=[];for(let d=0;d<u.length;++d){const n=u[d].children;if(n){t.push(u[d].id),l.push(n[0].id);break}}const r=y({value:"id",label:"label",children:"children"}),s=l,o=t;return(d,n)=>{const c=f("hl-tree-v2");return g(),N(c,{data:p(u),height:208,props:r.value,"show-checkbox":"","default-checked-keys":p(s),"default-expanded-keys":p(o)},null,8,["data","props","default-checked-keys","default-expanded-keys"])}}});var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const P=k({setup(v){const i=(t,r)=>`${t}-${r}`,h=(t,r,s,o=1,d="node")=>{let n=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*r),a=i(d,++n);return{id:a,label:a,disabled:Math.random()>.6,children:c?h(t,r,c,o+1,a):void 0}})},u=h(4,30,40),l=y({value:"id",label:"label",children:"children",disabled:"disabled"});return(t,r)=>{const s=f("hl-tree-v2");return g(),N(s,{data:p(u),props:l.value,"show-checkbox":"",height:208},null,8,["data","props"])}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const V=k({setup(v){const i=(d,n)=>`${d}-${n}`,h=(d,n,c,a=1,x="node")=>{let M=0;return new Array(c).fill(a).map(()=>{const K=a===d?0:Math.round(Math.random()*n),_=i(x,++M);return{id:_,label:_,children:K?h(d,n,K,a+1,_):void 0}})},u=y(null),l=h(4,30,5),t=y(""),r=y({value:"id",label:"label",children:"children"}),s=d=>{const n=u.value;n==null||n.filter(d)},o=(d,n)=>n.label.indexOf(d)!==-1;return(d,n)=>{const c=f("hl-input"),a=f("hl-tree-v2");return g(),T(C,null,[b(c,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=x=>t.value=x),placeholder:"Please enter keyword",block:"",onInput:s},null,8,["modelValue"]),b(a,{ref_key:"treeRef",ref:u,data:p(l),props:r.value,"filter-method":o,height:208},null,8,["data","props"])],64)}}});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const R=k({setup(v){const i=(t,r)=>`${t}-${r}`,h=(t,r,s,o=1,d="node")=>{let n=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*r),a=i(d,++n);return{id:a,label:a,children:c?h(t,r,c,o+1,a):void 0}})},u=h(4,30,40),l=y({value:"id",label:"label",children:"children"});return(t,r)=>{const s=f("hl-tree-v2");return g(),N(s,{data:p(u),props:l.value,"show-checkbox":"",height:208},null,8,["data","props"])}}});var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const L=k({setup(v){const i=(t,r)=>`${t}-${r}`,h=(t,r,s,o=1,d="node")=>{let n=0;return new Array(s).fill(o).map(()=>{const c=o===t?0:Math.round(Math.random()*r),a=i(d,++n);return{id:a,label:a,children:c?h(t,r,c,o+1,a):void 0}})},u=h(4,30,40),l=y({value:"id",label:"label",children:"children"});return(t,r)=>{const s=f("hl-tree-v2");return g(),N(s,{data:p(u),props:l.value,height:208},{default:D(({node:o})=>[e("span",{class:$(["prefix text-primary",{"is-leaf":o.isLeaf}])},"TreeV2\xA0\xA0",2),e("span",null,w(o.label),1)]),_:1},8,["data","props"])}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const H=e("h1",null,"Tree V2 \u865A\u62DF\u6811",-1),W=e("p",null,"\u4E0D\u8BBA\u4F60\u7684\u6570\u636E\u91CF\u591A\u5927\uFF0C\u865A\u62DF\u6811\u90FD\u80FD\u6BEB\u65E0\u538B\u529B\u5730\u5904\u7406\u3002",-1),X=e("h2",{id:"ji-chu-yong-fa"},[e("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),m(" \u57FA\u7840\u7528\u6CD5")],-1),I=e("p",null,"\u57FA\u7840\u7684\u6811\u5F62\u7ED3\u6784\u5C55\u793A",-1),U=e("h2",{id:"ke-xuan-ze-de-xu-ni-shu"},[e("a",{class:"header-anchor",href:"#ke-xuan-ze-de-xu-ni-shu"}),m(" \u53EF\u9009\u62E9\u7684\u865A\u62DF\u6811")],-1),B=e("p",null,"\u9002\u7528\u4E8E\u9700\u8981\u9009\u62E9\u5C42\u7EA7\u65F6\u4F7F\u7528\u3002",-1),G=e("h2",{id:"jin-yong-fu-xuan-kuang"},[e("a",{class:"header-anchor",href:"#jin-yong-fu-xuan-kuang"}),m(" \u7981\u7528\u590D\u9009\u6846")],-1),J=e("p",null,"\u8282\u70B9\u7684\u590D\u9009\u6846\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u7981\u7528\u3002",-1),Y=e("div",null,[e("p",null,[m("\u5728\u793A\u4F8B\u4E2D\uFF0C\u5C5E\u6027\u5728 "),e("code",null,"defaultProps"),m(" \u4E2D\u58F0\u660E\u4E86 "),e("code",null,"disabled"),m("\uFF0C\u4E00\u4E9B\u8282\u70B9\u88AB\u8BBE\u7F6E\u4E3A "),e("code",null,"disable\uFF1Atrue"),m("\u3002 \u76F8\u5E94\u7684\u590D\u9009\u6846\u5DF2\u7981\u7528\uFF0C\u4E0D\u80FD\u70B9\u51FB\u3002")])],-1),Z=e("h2",{id:"mo-ren-kuo-zhan-he-mo-ren-jian-cha"},[e("a",{class:"header-anchor",href:"#mo-ren-kuo-zhan-he-mo-ren-jian-cha"}),m(" \u9ED8\u8BA4\u6269\u5C55\u548C\u9ED8\u8BA4\u68C0\u67E5")],-1),ee=e("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u9636\u6BB5\u88AB\u8BBE\u7F6E\u4E3A\u5C55\u5F00\u6216\u9009\u4E2D\u3002",-1),te=e("div",null,[e("p",null,[m("\u5206\u522B\u901A\u8FC7 "),e("code",null,"default-expanded-keys"),m(" \u548C "),e("code",null,"default-checked-keys"),m(" \u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002")])],-1),ne=e("h2",{id:"zi-ding-yi-jie-dian-nei-rong"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-jie-dian-nei-rong"}),m(" \u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9")],-1),de=e("p",null,"\u8282\u70B9\u7684\u5185\u5BB9\u652F\u6301\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728\u8282\u70B9\u533A\u6DFB\u52A0\u6309\u94AE\u6216\u56FE\u6807\u7B49\u5185\u5BB9",-1),re=e("h2",{id:"jie-dian-guo-lu"},[e("a",{class:"header-anchor",href:"#jie-dian-guo-lu"}),m(" \u8282\u70B9\u8FC7\u6EE4")],-1),ae=e("p",null,"\u6811\u8282\u70B9\u53EF\u4EE5\u8FC7\u6EE4",-1),oe=e("div",null,[e("p",null,"\u5728\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u8FC7\u6EE4\u65F6\uFF0C\u8C03\u7528 Tree \u5B9E\u4F8B\u7684filter\u65B9\u6CD5\uFF0C \u53C2\u6570\u4E3A\u5173\u952E\u5B57\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6B64\u65F6\u9700\u8981\u8BBE\u7F6Efilter-method\uFF0C\u503C\u4E3A\u8FC7\u6EE4\u51FD\u6570\u3002")],-1),le=j('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>\u5C55\u793A\u6570\u636E data</td><td>array</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u5185\u5BB9\u4E3A\u7A7A\u7684\u65F6\u5019\u5C55\u793A\u7684\u6587\u672C</td><td>string</td><td>\u2014</td></tr><tr><td>props</td><td>\u914D\u7F6E\u9009\u9879\uFF0C\u5177\u4F53\u770B\u4E0B\u8868</td><td>object</td><td>\u2014</td></tr><tr><td>highlight-current</td><td>\u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9\uFF0C \u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5982\u679C\u4E3A false\uFF0C\u5219\u53EA\u6709\u70B9\u7BAD\u5934\u56FE\u6807\u7684\u65F6\u5019\u624D\u4F1A\u5C55\u5F00\u6216\u8005\u6536\u7F29\u8282\u70B9</td><td>boolean</td><td>true</td></tr><tr><td>check-on-click-node</td><td>\u662F\u5426\u5728\u70B9\u51FB\u8282\u70B9\u7684\u65F6\u5019\u9009\u4E2D\u8282\u70B9\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u5373\u53EA\u6709\u5728\u70B9\u51FB\u590D\u9009\u6846\u65F6\u624D\u4F1A\u9009\u4E2D\u8282\u70B9</td><td>boolean</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>show-checkbox</td><td>\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u62E9</td><td>boolean</td><td>false</td></tr><tr><td>check-strictly</td><td>\u5728\u663E\u793A\u590D\u9009\u6846\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u5426\u4E25\u683C\u7684\u9075\u5FAA\u7236\u5B50\u4E0D\u4E92\u76F8\u5173\u8054\u7684\u505A\u6CD5\uFF0C\u9ED8\u8BA4\u4E3A false</td><td>boolean</td><td>false</td></tr><tr><td>default-checked-keys</td><td>\u9ED8\u8BA4\u52FE\u9009\u7684\u8282\u70B9\u7684 key \u7684\u6570\u7EC4</td><td>array</td><td>\u2014</td></tr><tr><td>current-node-key</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u8282\u70B9</td><td>string, number</td><td>\u2014</td></tr><tr><td>filter-method</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u65F6\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE true \u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u53EF\u4EE5\u663E\u793A\uFF0C\u8FD4\u56DE false \u5219\u8868\u793A\u8FD9\u4E2A\u8282\u70B9\u4F1A\u88AB\u9690\u85CF</td><td>Function(value, data)</td><td>\u2014</td></tr><tr><td>indent</td><td>\u76F8\u90BB\u7EA7\u8282\u70B9\u95F4\u7684\u6C34\u5E73\u7F29\u8FDB\uFF0C\u5355\u4F4D\u4E3A\u50CF\u7D20</td><td>number</td><td>16</td></tr><tr><td>item-size</td><td>\u8282\u70B9\u9AD8\u5EA6</td><td>number</td><td>40</td></tr></tbody></table><h2 id="props"><a class="header-anchor" href="#props"></a> Props</h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>\u6BCF\u4E2A\u6811\u8282\u70B9\u7528\u6765\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u7684\u5C5E\u6027\uFF0C\u5728\u6574\u68F5\u6811\u4E2D\u5E94\u8BE5\u662F\u552F\u4E00\u7684</td><td>string, number</td><td>id</td></tr><tr><td>label</td><td>\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>label</td></tr><tr><td>children</td><td>\u6307\u5B9A\u5B50\u6811\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>children</td></tr><tr><td>disabled</td><td>\u6307\u5B9A\u8282\u70B9\u9009\u62E9\u6846\u662F\u5426\u7981\u7528\u4E3A\u8282\u70B9\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C</td><td>string</td><td>disabled</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><p><code>Tree</code> has the following method, which returns the currently selected array of nodes.</p><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>filter</td><td>\u5BF9\u6811\u8282\u70B9\u8FDB\u884C\u7B5B\u9009\u64CD\u4F5C</td><td>(query: string)</td></tr><tr><td>getCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373show-checkbox\u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>getCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u88AB\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>(leafOnly: boolean)</td></tr><tr><td>setCheckedKeys</td><td>\u901A\u8FC7 keys \u8BBE\u7F6E\u76EE\u524D\u52FE\u9009\u7684\u8282\u70B9</td><td>(keys: TreeKey[])</td></tr><tr><td>setChecked</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u52FE\u9009\u72B6\u6001</td><td>(key: TreeKey, checked: boolean)</td></tr><tr><td>getHalfCheckedNodes</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>\u82E5\u8282\u70B9\u53EF\u88AB\u9009\u62E9\uFF08\u5373 show-checkbox \u4E3A true\uFF09\uFF0C\u5219\u8FD4\u56DE\u76EE\u524D\u534A\u9009\u4E2D\u7684\u8282\u70B9\u7684 key \u6240\u7EC4\u6210\u7684\u6570\u7EC4</td><td>-</td></tr><tr><td>getCurrentKey</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 key\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>getCurrentNode</td><td>\u83B7\u53D6\u5F53\u524D\u88AB\u9009\u4E2D\u8282\u70B9\u7684 data\uFF0C\u82E5\u6CA1\u6709\u8282\u70B9\u88AB\u9009\u4E2D\u5219\u8FD4\u56DE undefined</td><td>\u2014</td></tr><tr><td>setCurrentKey</td><td>\u901A\u8FC7 key \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u9009\u4E2D\u72B6\u6001</td><td>(key: TreeKey)</td></tr><tr><td>setData</td><td>\u5F53\u6570\u636E\u91CF\u975E\u5E38\u5E9E\u5927\u7684\u65F6\u5019\uFF0C\u4F7F\u7528reactive\u6570\u636E\u5C06\u5BFC\u81F4\u6027\u80FD\u975E\u5E38\u4F4E\u4E0B\uFF0C\u6240\u4EE5\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u80FD\u591F\u89C4\u907F\u8FD9\u79CD\u60C5\u51B5\u7684\u65B9\u6CD5</td><td>(data: TreeData)</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>node-click</td><td>\u5F53\u8282\u70B9\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, node: TreeNode, e: MouseEvent)</td></tr><tr><td>node-contextmenu</td><td>\u5F53\u8282\u70B9\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>(e: Event, data: TreeNodeData, node: TreeNode)</td></tr><tr><td>check-change</td><td>\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>(data: TreeNodeData, checked: boolean)</td></tr><tr><td>check</td><td>\u5F53\u590D\u9009\u6846\u88AB\u70B9\u51FB\u7684\u65F6\u5019\u89E6\u53D1</td><td>(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})</td></tr><tr><td>current-change</td><td>\u5F53\u524D\u9009\u4E2D\u8282\u70B9\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-expand</td><td>\u8282\u70B9\u88AB\u5C55\u5F00\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr><tr><td>node-collapse</td><td>\u8282\u70B9\u88AB\u6536\u8D77\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>(data: TreeNodeData, node: TreeNode)</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9. \u53C2\u6570\u4E3A\uFF1A { node: TreeNode, data: TreeNodeData }</td></tr></tbody></table>',11),ce={setup(v){const i={"../../../examples/tree-v2/basic.vue":z,"../../../examples/tree-v2/default.vue":O,"../../../examples/tree-v2/disabled.vue":q,"../../../examples/tree-v2/filter.vue":E,"../../../examples/tree-v2/selectable.vue":Q,"../../../examples/tree-v2/slot.vue":F};return(h,u)=>{const l=f("demo-block"),t=f("right-nav");return g(),T(C,null,[e("section",null,[H,W,X,I,b(l,{fs:"",demos:p(i),"path-name":"tree-v2/basic","source-code":`<template>
  <hl-tree-v2 :data="data" :props="props" :height="208" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})

<\/script>
`},null,8,["demos"]),U,B,b(l,{fs:"",demos:p(i),"path-name":"tree-v2/selectable","source-code":`<template>
  <hl-tree-v2
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})

<\/script>
`},null,8,["demos"]),G,J,b(l,{fs:"",demos:p(i),"path-name":"tree-v2/disabled","source-code":`<template>
  <hl-tree-v2
    :data="data"
    :props="props"
    show-checkbox
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      disabled: Math.random() > 0.6,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
  disabled: 'disabled',
})

<\/script>
`},{default:D(()=>[Y]),_:1},8,["demos"]),Z,ee,b(l,{fs:"",demos:p(i),"path-name":"tree-v2/default","source-code":`<template>
  <hl-tree-v2
    :data="data"
    :height="208"
    :props="props"
    show-checkbox
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const checkedKeys = []
const expanedKeys = []
for (let i = 0; i < data.length; ++i) {
  const children = data[i].children
  if (children) {
    expanedKeys.push(data[i].id)
    checkedKeys.push(children[0].id)
    break
  }
}

const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})
const defaultCheckedKeys = checkedKeys
const defaultExpandedKeys = expanedKeys

<\/script>
`},{default:D(()=>[te]),_:1},8,["demos"]),ne,de,b(l,{fs:"",demos:p(i),"path-name":"tree-v2/slot","source-code":`<template>
  <hl-tree-v2 :data="data" :props="props" :height="208">
    <template #default="{ node }">
      <span
        class="prefix text-primary"
        :class="{ 'is-leaf': node.isLeaf }"
      >TreeV2&nbsp;&nbsp;</span>
      <span>{{ node.label }}</span>
    </template>
  </hl-tree-v2>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const data = createData(4, 30, 40)
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})

<\/script>

`},null,8,["demos"]),re,ae,b(l,{fs:"",demos:p(i),"path-name":"tree-v2/filter","source-code":`<template>
  <hl-input
    v-model="query"
    placeholder="Please enter keyword"
    block
    @input="onQueryChanged"
  />
  <hl-tree-v2
    ref="treeRef"
    :data="data"
    :props="props"
    :filter-method="filterMethod"
    :height="208"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const getKey = (prefix, id) => {
  return \`\${prefix}-\${id}\`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node',
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}

const treeRef = ref(null)
const data = createData(4, 30, 5)
const query = ref('')
const props = ref({
  value: 'id',
  label: 'label',
  children: 'children',
})
const onQueryChanged = (query: string) => {
  const tree = treeRef.value
  tree?.filter(query)
}
const filterMethod = (query, node) => {
  return node.label.indexOf(query) !== -1
}
<\/script>
`},{default:D(()=>[oe]),_:1},8,["demos"]),le]),b(t)],64)}}};export{ce as default};
