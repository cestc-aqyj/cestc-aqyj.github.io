var A=Object.defineProperty;var C=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var D=(d,u,e)=>u in d?A(d,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[u]=e,F=(d,u)=>{for(var e in u||(u={}))m.call(u,e)&&D(d,e,u[e]);if(C)for(var e of C(u))_.call(u,e)&&D(d,e,u[e]);return d};import{P as s,L as v,W as y,Q as t,Y as h,S as c,a8 as k,aZ as f,a0 as B,aT as g}from"./vue.b4e50f24.js";import{_ as P}from"./index.ed80d6f8.js";import"./hongluan-business.d081513c.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.3bc038e0.js";const N={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:d,openBlock:u,createBlock:e}=f;function E(l,a){const n=d("hb-tree-transfer");return u(),e(n,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=p=>l.value=p),filterable:l.filterable,"tree-props":l.treeProps},null,8,["modelValue","filterable","tree-props"])}const{defineComponent:b,ref:r,reactive:o}=f,i=b({setup(){const l=(a,n)=>a?n.label.indexOf(a)!==-1:!0;return{value:r(["2"]),clearable:r(!0),disabled:r(!1),filterable:r(!0),treeProps:o({nodeKey:"id",checkStrictly:!0,showCheckbox:!1,filterNodeMethod:l,data:[{label:"\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",id:"1",childrens:[{label:"\u4E4C\u9C81\u6728\u9F50\u5E02",id:"2",childrens:[{label:"\u8FBE\u5742\u57CE\u533A",id:"7",childrens:[]},{label:"\u5934\u5C6F\u6CB3\u533A",id:"8",childrens:[]},{label:"\u4E4C\u9C81\u6728\u9F50\u53BF",id:"9",childrens:[{label:"\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547",id:"8-1",childrens:[]},{label:"\u6D4B\u8BD5\u4E61\u95472",id:"8-2",childrens:[]},{label:"\u6D4B\u8BD5\u4E61\u95473",id:"8-3",childrens:[]}]}]},{label:"\u514B\u62C9\u739B\u4F9D\u5E02",id:"3",disabled:!0,childrens:[{label:"\u514B\u62C9\u739B\u4F9D\u533A",id:"10",disabled:!0,childrens:[]},{label:"\u767D\u78B1\u6EE9\u533A",id:"11",disabled:!0,childrens:[]},{label:"\u72EC\u5C71\u5B50\u533A",id:"12",disabled:!0,childrens:[]}]},{label:"\u5410\u9C81\u756A\u5730\u533A",id:"4",childrens:[]},{label:"\u54C8\u5BC6\u5730\u533A",id:"5",childrens:[]},{label:"\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",id:"6",childrens:[]}]}],props:{children:"childrens",label:"label"}})}}});return F({render:E},i)}()}},x=t("h1",null,"TreeTransfer \u6811\u5F62\u7A7F\u68AD\u6846",-1),T=t("p",null,"\u53EF\u4EE5\u5BF9\u6811\u5F62\u7ED3\u6784\u8FDB\u884C\u9009\u62E9\u3002",-1),M=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),B(" \u57FA\u7840\u7528\u6CD5")],-1),S=t("div",null,[t("p",null,[B("\u8FC7\u6EE4\u51FD\u6570\u5DE6\u53F3\u4FA7\u540C\u65F6\u4F7F\u7528"),t("code",null,"treeProps"),B("\u91CC\u9762\u5B9A\u4E49\u7684"),t("code",null,"filterNodeMethod")])],-1),V=t("pre",null,[t("code",{class:"html"},` <template>
  <hb-tree-transfer
    v-model="value"
    :filterable="filterable"
    :tree-props="treeProps"
  />
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    const filterNode = (value, data) => {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
    return {
      value: ref(['2']),
      clearable: ref(true),
      disabled: ref(false),
      filterable: ref(true),
      treeProps: reactive({
        nodeKey: 'id',
        checkStrictly: true,
        showCheckbox: false,
        filterNodeMethod: filterNode,
        data: [
          {
            label: '\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A',
            id: '1',
            childrens: [
              {
                label: '\u4E4C\u9C81\u6728\u9F50\u5E02',
                id: '2',
                childrens: [
                  { label: '\u8FBE\u5742\u57CE\u533A', id: '7', childrens: [] },
                  { label: '\u5934\u5C6F\u6CB3\u533A', id: '8', childrens: [] },
                  {
                    label: '\u4E4C\u9C81\u6728\u9F50\u53BF',
                    id: '9',
                    childrens: [
                      {
                        label:
                          '\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547\u6D4B\u8BD5\u4E61\u9547',
                        id: '8-1',
                        childrens: [],
                      },
                      { label: '\u6D4B\u8BD5\u4E61\u95472', id: '8-2', childrens: [] },
                      { label: '\u6D4B\u8BD5\u4E61\u95473', id: '8-3', childrens: [] },
                    ],
                  },
                ],
              },
              {
                label: '\u514B\u62C9\u739B\u4F9D\u5E02',
                id: '3',
                disabled: true,
                childrens: [
                  {
                    label: '\u514B\u62C9\u739B\u4F9D\u533A',
                    id: '10',
                    disabled: true,
                    childrens: [],
                  },
                  {
                    label: '\u767D\u78B1\u6EE9\u533A',
                    id: '11',
                    disabled: true,
                    childrens: [],
                  },
                  {
                    label: '\u72EC\u5C71\u5B50\u533A',
                    id: '12',
                    disabled: true,
                    childrens: [],
                  },
                ],
              },
              { label: '\u5410\u9C81\u756A\u5730\u533A', id: '4', childrens: [] },
              { label: '\u54C8\u5BC6\u5730\u533A', id: '5', childrens: [] },
              { label: '\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE', id: '6', childrens: [] },
            ],
          },
        ],
        props: {
          children: 'childrens',
          label: 'label',
        },
      }),
    }
  },
})
<\/script>
`)],-1),$=g('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tree-props</td><td>\u5DE6\u4FA7\u6811\u5C5E\u6027\uFF0C\u53C2\u89C1 Tree \u7EC4\u4EF6\uFF0CnodeKey\u9ED8\u8BA4\u8BBE\u7F6E\u4E3Aid</td><td>object</td><td>-</td><td>-</td></tr><tr><td>titles</td><td>\u81EA\u5B9A\u4E49\u5217\u8868\u6807</td><td>array</td><td>-</td><td>[&#39;\u5217\u8868 1&#39;, &#39;\u5217\u8868 2&#39;]</td></tr><tr><td>filter-placeholder</td><td>\u641C\u7D22\u6846\u5360\u4F4D</td><td>string</td><td>\u2014</td><td>\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9</td></tr><tr><td>render-content</td><td>\u81EA\u5B9A\u4E49\u6570\u636E\u9879\u6E32\u67D3\u51FD\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\uFF1Ah \u51FD\u6570\uFF1B\u6811\u8282\u70B9\u6570\u636E\uFF1Bleft/right \u6807\u8BC6\u3002\u540C\u65F6\u9002\u7528\u4E24\u4FA7</td><td>function(h, data, mark)</td><td>\u2014</td><td>-</td></tr><tr><td>filterable</td><td>\u662F\u5426\u53EF\u641C</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left-footer</td><td>\u5DE6\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr><tr><td>right-footer</td><td>\u53F3\u4FA7\u5217\u8868\u5E95\u90E8\u7684\u5185\u5BB9</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearQuery</td><td>\u6E05\u7A7A\u67D0\u4E2A\u9762\u677F\u7684\u641C\u7D22\u5173\u952E\u8BCD</td><td>&#39;left&#39; / &#39;right&#39;\uFF0C\u6307\u5B9A\u9700\u8981\u6E05\u7A7A\u7684\u9762\u677F</td></tr></tbody></table>',6);function j(d,u,e,E,b,r){const o=s("hb-demo0"),i=s("demo-block"),l=s("right-nav");return v(),y(k,null,[t("section",null,[x,T,M,h(i,{fs:""},{source:c(()=>[h(o)]),highlight:c(()=>[V]),default:c(()=>[S]),_:1}),$]),h(l)],64)}var U=P(N,[["render",j]]);export{U as default};
