import{p as g,R as b,F as i,L as f,C as y,P as d,X as t,Q as e,S as x,M as n,W as $,a2 as z,a4 as k,V as w,o as I}from"./vue.651ae949.js";import{_ as v}from"./index.8fb14b93.js";import{M as j}from"./hongluan-icons.071444ab.js";import"./hongluan.44f21e2d.js";import"./highlight.687c59a9.js";const M=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}])}}});function N(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"150"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(a,{prop:"address","show-overflow-tooltip":"",label:"\u5730\u5740"})]),_:1},8,["data"])}var R=v(M,[["render",N]]),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const O=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}])}}});function E(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,border:""},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])}var H=v(O,[["render",E]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const L=g({components:{TwoMore:j},setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),handleEdit:(u,r)=>{console.log(u,r)},handleDelete:(u,r)=>{console.log(u,r)}}}}),V={style:{"margin-left":"10px"}},B={class:"name-wrapper"},K=n("\u7F16\u8F91"),W=n("\u5220\u9664");function P(l,o,c,u,r,p){const a=i("two-more"),s=i("hl-icon"),m=i("hl-table-column"),_=i("hl-tag"),h=i("hl-popover"),C=i("hl-button"),S=i("hl-table");return f(),y(S,{data:l.tableData,style:{width:"100%"}},{default:d(()=>[t(m,{label:"\u65E5\u671F",width:"180"},{default:d(D=>[t(s,null,{default:d(()=>[t(a)]),_:1}),e("span",V,x(D.row.date),1)]),_:1}),t(m,{label:"\u59D3\u540D",width:"180"},{default:d(D=>[t(h,{effect:"light",trigger:"hover",placement:"top"},{default:d(()=>[e("p",null,"\u59D3\u540D: "+x(D.row.name),1),e("p",null,"\u4F4F\u5740: "+x(D.row.address),1)]),reference:d(()=>[e("div",B,[t(_,{size:"sm"},{default:d(()=>[n(x(D.row.name),1)]),_:2},1024)])]),_:2},1024)]),_:1}),t(m,{label:"\u64CD\u4F5C"},{default:d(D=>[t(C,{size:"sm",onClick:T=>l.handleEdit(D.$index,D.row)},{default:d(()=>[K]),_:2},1032,["onClick"]),t(C,{size:"sm",type:"danger",onClick:T=>l.handleDelete(D.$index,D.row)},{default:d(()=>[W]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}var Q=v(L,[["render",P]]),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const U=g({setup(){const l=b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),o=b("");return{tableData:l,search:o,handleEdit:(r,p)=>{console.log(r,p)},handleDelete:(r,p)=>{console.log(r,p)}}}}),q=n("Edit"),G=n("Delete");function J(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-input"),m=i("hl-button"),_=i("hl-table");return f(),y(_,{data:l.tableData.filter(h=>!l.search||h.name.toLowerCase().includes(l.search.toLowerCase())),style:{width:"100%"}},{default:d(()=>[t(a,{label:"Date",prop:"date"}),t(a,{label:"Name",prop:"name"}),t(a,{align:"items-right"},{header:d(()=>[t(s,{modelValue:l.search,"onUpdate:modelValue":o[0]||(o[0]=h=>l.search=h),size:"sm",placeholder:"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22"},null,8,["modelValue"])]),default:d(h=>[t(m,{size:"sm",onClick:C=>l.handleEdit(h.$index,h.row)},{default:d(()=>[q]),_:2},1032,["onClick"]),t(m,{size:"sm",type:"danger",onClick:C=>l.handleDelete(h.$index,h.row)},{default:d(()=>[G]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}var Y=v(U,[["render",J]]),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const ee=g({setup(){return{tableData:b([{id:"12987122",name:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",category:"\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF",desc:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF",shop:"\u738B\u5C0F\u864E\u592B\u59BB\u5E97",shopId:"10333"},{id:"12987123",name:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",category:"\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF",desc:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF",shop:"\u738B\u5C0F\u864E\u592B\u59BB\u5E97",shopId:"10333"},{id:"12987125",name:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",category:"\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF",desc:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF",shop:"\u738B\u5C0F\u864E\u592B\u59BB\u5E97",shopId:"10333"},{id:"12987126",name:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",category:"\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF",desc:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF",shop:"\u738B\u5C0F\u864E\u592B\u59BB\u5E97",shopId:"10333"}])}}});function te(l,o,c,u,r,p){const a=i("hl-form-item"),s=i("hl-form"),m=i("hl-table-column"),_=i("hl-table");return f(),y(_,{data:l.tableData,style:{width:"100%"}},{default:d(()=>[t(m,{type:"expand"},{default:d(h=>[t(s,{"label-position":"left",inline:"","label-suffix":"\uFF1A","item-gap":"var(--md)",class:"demo-table-expand"},{default:d(()=>[t(a,{label:"\u5546\u54C1\u540D\u79F0"},{default:d(()=>[e("span",null,x(h.row.name),1)]),_:2},1024),t(a,{label:"\u6240\u5C5E\u5E97\u94FA"},{default:d(()=>[e("span",null,x(h.row.shop),1)]),_:2},1024),t(a,{label:"\u5546\u54C1 ID"},{default:d(()=>[e("span",null,x(h.row.id),1)]),_:2},1024),t(a,{label:"\u5E97\u94FA ID"},{default:d(()=>[e("span",null,x(h.row.shopId),1)]),_:2},1024),t(a,{label:"\u5546\u54C1\u5206\u7C7B"},{default:d(()=>[e("span",null,x(h.row.category),1)]),_:2},1024),t(a,{label:"\u5E97\u94FA\u5730\u5740"},{default:d(()=>[e("span",null,x(h.row.address),1)]),_:2},1024),t(a,{label:"\u5546\u54C1\u63CF\u8FF0"},{default:d(()=>[e("span",null,x(h.row.desc),1)]),_:2},1024)]),_:2},1024)]),_:1}),t(m,{label:"\u5546\u54C1 ID",prop:"id"}),t(m,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"}),t(m,{label:"\u63CF\u8FF0",prop:"desc"})]),_:1},8,["data"])}var ne=v(ee,[["render",te]]),ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne});const le=g({setup(){const l=b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",tag:"\u5BB6"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",tag:"\u516C\u53F8"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04",tag:"\u5BB6"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04",tag:"\u516C\u53F8"}]),o=b(null);return{tableData:l,filterTable:o,resetDateFilter:()=>{o.value.clearFilter("date")},clearFilter:()=>{o.value.clearFilter()},formatter:s=>s.address,filterTag:(s,m)=>m.tag===s,filterHandler:(s,m,_)=>{const h=_.property;return m[h]===s}}}}),de=n("\u6E05\u9664\u65E5\u671F\u8FC7\u6EE4\u5668"),oe=n("\u6E05\u9664\u6240\u6709\u8FC7\u6EE4\u5668");function re(l,o,c,u,r,p){const a=i("hl-button"),s=i("hl-table-column"),m=i("hl-tag"),_=i("hl-table");return f(),$(z,null,[t(a,{class:"m-r-md",onClick:l.resetDateFilter},{default:d(()=>[de]),_:1},8,["onClick"]),t(a,{onClick:l.clearFilter},{default:d(()=>[oe]),_:1},8,["onClick"]),t(_,{ref:"filterTable","row-key":"date",data:l.tableData,style:{width:"100%"}},{default:d(()=>[t(s,{prop:"date",label:"\u65E5\u671F",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":l.filterHandler},null,8,["filter-method"]),t(s,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(s,{prop:"address",label:"\u5730\u5740",formatter:l.formatter},null,8,["formatter"]),t(s,{prop:"tag",label:"\u6807\u7B7E",width:"100",filters:[{text:"\u5BB6",value:"\u5BB6"},{text:"\u516C\u53F8",value:"\u516C\u53F8"}],"filter-method":l.filterTag,"filter-placement":"bottom-end"},{default:d(h=>[t(m,{type:h.row.tag==="\u5BB6"?"primary":"success",size:"sm","disable-transitions":""},{default:d(()=>[n(x(h.row.tag),1)]),_:2},1032,["type"])]),_:1},8,["filter-method"])]),_:1},8,["data"])],64)}var se=v(le,[["render",re]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se});const ce=g({setup(){return{tableData:b([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-08",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-06",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-07",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333}])}}});function pe(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,style:{width:"100%"},height:"250"},{default:d(()=>[t(a,{fixed:"",prop:"date",label:"\u65E5\u671F",width:"150"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(a,{prop:"province",label:"\u7701\u4EFD",width:"120"}),t(a,{prop:"city",label:"\u5E02\u533A",width:"320"}),t(a,{prop:"address",label:"\u5730\u5740",width:"600"}),t(a,{prop:"zip",label:"\u90AE\u7F16",width:"120"})]),_:1},8,["data"])}var ue=v(ce,[["render",pe]]),me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const he=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",zip:200333},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04",zip:200333},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04",zip:200333}]),handleClick:c=>{console.log(c)}}}}),be=n("\u67E5\u770B"),_e=n("\u7F16\u8F91");function fe(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-button"),m=i("hl-table");return f(),y(m,{data:l.tableData,border:"",style:{width:"100%"}},{default:d(()=>[t(a,{fixed:"",prop:"date",label:"\u65E5\u671F",width:"120"}),t(a,{prop:"name",label:"\u59D3\u540D"}),t(a,{prop:"province",label:"\u7701\u4EFD"}),t(a,{prop:"city",label:"\u5E02\u533A"}),t(a,{prop:"address",label:"\u5730\u5740",width:"600"}),t(a,{prop:"zip",label:"\u90AE\u7F16"}),t(a,{fixed:"right",label:"\u64CD\u4F5C",width:"160"},{default:d(_=>[t(s,{size:"sm",onClick:h=>l.handleClick(_.row)},{default:d(()=>[be]),_:2},1032,["onClick"]),t(s,{size:"sm"},{default:d(()=>[_e]),_:1})]),_:1})]),_:1},8,["data"])}var we=v(he,[["render",fe]]),ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we});const ve=g({setup(){return{tableData:b([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-08",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-06",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-07",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}])}}});function ye(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,height:"250",border:""},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])}var xe=v(ve,[["render",ye]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const $e=g({setup(){const l=b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),o=b(null),c=b(null);return{tableData:l,currentRow:o,singleTable:c,setCurrent:p=>{c.value.setCurrentRow(p)},handleCurrentChange:p=>{o.value=p}}}}),Ce={style:{"margin-top":"20px"}},ze=n("\u9009\u4E2D\u7B2C\u4E8C\u884C"),Se=n("\u53D6\u6D88\u9009\u62E9");function Te(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table"),m=i("hl-button");return f(),$(z,null,[t(s,{ref:"singleTable",data:l.tableData,"highlight-current-row":"",style:{width:"100%"},onCurrentChange:l.handleCurrentChange},{default:d(()=>[t(a,{type:"index",width:"50"}),t(a,{property:"date",label:"\u65E5\u671F",width:"120"}),t(a,{property:"name",label:"\u59D3\u540D",width:"120"}),t(a,{property:"address",label:"\u5730\u5740"})]),_:1},8,["data","onCurrentChange"]),e("div",Ce,[t(m,{onClick:o[0]||(o[0]=_=>l.setCurrent(l.tableData[1]))},{default:d(()=>[ze]),_:1}),t(m,{onClick:o[1]||(o[1]=_=>l.setCurrent())},{default:d(()=>[Se]),_:1})])],64)}var ke=v($e,[["render",Te]]),Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke});const je=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333,tag:"\u5BB6"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",zip:200333,tag:"\u516C\u53F8"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04",zip:200333,tag:"\u5BB6"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04",zip:200333,tag:"\u516C\u53F8"}]),indexMethod:c=>c*2}}});function Me(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,style:{width:"100%"}},{default:d(()=>[t(a,{type:"index",index:l.indexMethod},null,8,["index"]),t(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])}var Ne=v(je,[["render",Me]]),Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ne});const Fe=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}])}}});function Oe(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,list:""},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"150"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(a,{prop:"address","show-overflow-tooltip":"",label:"\u5730\u5740"})]),_:1},8,["data"])}var Ee=v(Fe,[["render",Oe]]),He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee});const Ae=g({setup(){return{tableData:b([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-08",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-06",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-07",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333}]),deleteRow:(c,u)=>{u.splice(c,1)}}}}),Le=n(" \u79FB\u9664 ");function Ve(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-button"),m=i("hl-table");return f(),y(m,{data:l.tableData,style:{width:"100%"},"max-height":"250"},{default:d(()=>[t(a,{fixed:"",prop:"date",label:"\u65E5\u671F",width:"150"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(a,{prop:"province",label:"\u7701\u4EFD",width:"120"}),t(a,{prop:"city",label:"\u5E02\u533A",width:"120"}),t(a,{prop:"address",label:"\u5730\u5740",width:"600"}),t(a,{prop:"zip",label:"\u90AE\u7F16",width:"120"}),t(a,{fixed:"right",label:"\u64CD\u4F5C",width:"120"},{default:d(_=>[t(s,{type:"link",size:"sm",onClick:k(h=>l.deleteRow(_.$index,l.tableData),["prevent"])},{default:d(()=>[Le]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])}var Be=v(Ae,[["render",Ve]]),Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Be});const We=g({setup(){return{tableData:b([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",province:"\u4E0A\u6D77",city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",zip:200333}])}}});function Pe(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,style:{width:"100%"}},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"150"}),t(a,{label:"\u914D\u9001\u4FE1\u606F"},{default:d(()=>[t(a,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(a,{label:"\u5730\u5740"},{default:d(()=>[t(a,{prop:"province",label:"\u7701\u4EFD",width:"120"}),t(a,{prop:"city",label:"\u5E02\u533A",width:"120"}),t(a,{prop:"address",label:"\u5730\u5740","show-overflow-tooltip":""}),t(a,{prop:"zip",label:"\u90AE\u7F16",width:"120"})]),_:1})]),_:1})]),_:1},8,["data"])}var Qe=v(We,[["render",Pe]]),Xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const Ue=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),tableRowClassName:({rowIndex:c})=>c===1?"warning-row":c===3?"success-row":""}}});function qe(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,style:{width:"100%"},"row-class-name":l.tableRowClassName},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data","row-class-name"])}var Ge=v(Ue,[["render",qe]]),Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ge});const Ye=g({setup(){const l=b([{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-08",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-06",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-07",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"}]),o=b([]),c=b(null);return{tableData:l,multipleSelection:o,multipleTable:c,toggleSelection:p=>{p?p.forEach(a=>{c.value.toggleRowSelection(a)}):c.value.clearSelection()},handleSelectionChange:p=>{o.value=p}}}}),Ze={style:{"margin-top":"20px"}},et=n("\u5207\u6362\u7B2C\u4E8C\u3001\u7B2C\u4E09\u884C\u7684\u9009\u4E2D\u72B6\u6001"),tt=n("\u53D6\u6D88\u9009\u62E9");function nt(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table"),m=i("hl-button");return f(),$(z,null,[t(s,{ref:"multipleTable",data:l.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:l.handleSelectionChange},{default:d(()=>[t(a,{type:"selection",width:"55"}),t(a,{label:"\u65E5\u671F",width:"120"},{default:d(_=>[n(x(_.row.date),1)]),_:1}),t(a,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(a,{prop:"address",label:"\u5730\u5740","show-overflow-tooltip":""})]),_:1},8,["data","onSelectionChange"]),e("div",Ze,[t(m,{onClick:o[0]||(o[0]=_=>l.toggleSelection([l.tableData[1],l.tableData[2]]))},{default:d(()=>[et]),_:1}),t(m,{onClick:o[1]||(o[1]=_=>l.toggleSelection())},{default:d(()=>[tt]),_:1})])],64)}var at=v(Ye,[["render",nt]]),lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:at});const dt=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),formatter:c=>c.address}}});function ot(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,style:{width:"100%"},"default-sort":{prop:"date",order:"descending"}},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",sortable:"",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",sortable:"",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740",formatter:l.formatter},null,8,["formatter"])]),_:1},8,["data"])}var rt=v(dt,[["render",ot]]),st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rt});const it=g({setup(){return{tableData:b([{id:"12987122",name:"\u738B\u5C0F\u864E",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"\u738B\u5C0F\u864E",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"\u738B\u5C0F\u864E",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"\u738B\u5C0F\u864E",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"\u738B\u5C0F\u864E",amount1:"539",amount2:"4.1",amount3:15}]),arraySpanMethod:({rowIndex:u,columnIndex:r})=>{if(u%2===0){if(r===0)return[1,2];if(r===1)return[0,0]}},objectSpanMethod:({rowIndex:u,columnIndex:r})=>{if(r===0)return u%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}}});function ct(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),$("div",null,[t(s,{data:l.tableData,"span-method":l.arraySpanMethod,border:"",style:{width:"100%"}},{default:d(()=>[t(a,{prop:"id",label:"ID",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D"}),t(a,{prop:"amount1",sortable:"",label:"\u6570\u503C 1"}),t(a,{prop:"amount2",sortable:"",label:"\u6570\u503C 2"}),t(a,{prop:"amount3",sortable:"",label:"\u6570\u503C 3"})]),_:1},8,["data","span-method"]),t(s,{data:l.tableData,"span-method":l.objectSpanMethod,border:"",style:{width:"100%","margin-top":"20px"}},{default:d(()=>[t(a,{prop:"id",label:"ID",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D"}),t(a,{prop:"amount1",label:"\u6570\u503C 1\uFF08\u5143\uFF09"}),t(a,{prop:"amount2",label:"\u6570\u503C 2\uFF08\u5143\uFF09"}),t(a,{prop:"amount3",label:"\u6570\u503C 3\uFF08\u5143\uFF09"})]),_:1},8,["data","span-method"])])}var pt=v(it,[["render",ct]]),ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const mt=g({setup(){return{tableData:b([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}])}}});function ht(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),y(s,{data:l.tableData,stripe:""},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"])}var bt=v(mt,[["render",ht]]),_t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const ft=g({setup(){return{tableData:b([{id:"12987122",name:"\u738B\u5C0F\u864E",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"\u738B\u5C0F\u864E",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"\u738B\u5C0F\u864E",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"\u738B\u5C0F\u864E",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"\u738B\u5C0F\u864E",amount1:"539",amount2:"4.1",amount3:15}]),getSummaries:c=>{const{columns:u,data:r}=c,p=[];return u.forEach((a,s)=>{if(s===0){p[s]="\u603B\u4EF7";return}const m=r.map(_=>Number(_[a.property]));m.every(_=>isNaN(_))?p[s]="N/A":(p[s]=m.reduce((_,h)=>{const C=Number(h);return isNaN(C)?_:_+h},0),p[s]+=" \u5143")}),p}}}}),wt=e("br",null,null,-1);function gt(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),$(z,null,[t(s,{data:l.tableData,border:"","show-summary":"",style:{width:"100%"}},{default:d(()=>[t(a,{prop:"id",label:"ID",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D"}),t(a,{prop:"amount1",sortable:"",label:"\u6570\u503C 1"}),t(a,{prop:"amount2",sortable:"",label:"\u6570\u503C 2"}),t(a,{prop:"amount3",sortable:"",label:"\u6570\u503C 3"})]),_:1},8,["data"]),wt,t(s,{data:l.tableData,border:"",height:"200","summary-method":l.getSummaries,"show-summary":"",style:{width:"100%","margin-top":"20px"}},{default:d(()=>[t(a,{prop:"id",label:"ID",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D"}),t(a,{prop:"amount1",label:"\u6570\u503C 1\uFF08\u5143\uFF09"}),t(a,{prop:"amount2",label:"\u6570\u503C 2\uFF08\u5143\uFF09"}),t(a,{prop:"amount3",label:"\u6570\u503C 3\uFF08\u5143\uFF09"})]),_:1},8,["data","summary-method"])],64)}var vt=v(ft,[["render",gt]]),yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt});const xt=g({setup(){const l=b([{id:1,date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{id:2,date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{id:3,date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04",children:[{id:31,date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{id:32,date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"}]},{id:4,date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]),o=b([{id:1,date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{id:2,date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{id:3,date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04",hasChildren:!0},{id:4,date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]);return{tableData:l,tableData1:o,load:(u,r,p)=>{setTimeout(()=>{p([{id:31,date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{id:32,date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"}])},5e3)}}}});function Dt(l,o,c,u,r,p){const a=i("hl-table-column"),s=i("hl-table");return f(),$(z,null,[t(s,{data:l.tableData,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",sortable:"",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",sortable:"",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data"]),t(s,{class:"m-t-lg",data:l.tableData1,"row-key":"id",border:"",lazy:"",load:l.load,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:d(()=>[t(a,{prop:"date",label:"\u65E5\u671F",width:"180"}),t(a,{prop:"name",label:"\u59D3\u540D",width:"180"}),t(a,{prop:"address",label:"\u5730\u5740"})]),_:1},8,["data","load"])],64)}var $t=v(xt,[["render",Dt]]),Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$t});const zt=e("h1",null,"Table \u8868\u683C",-1),St=e("p",null,"\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002",-1),Tt=e("div",null,[e("p",null,[n("\u5F53 Table \u7EC4\u4EF6\u4E2D\u6CE8\u5165"),e("code",null,"data"),n("\u5BF9\u8C61\u6570\u7EC4\u540E\uFF0C\u5728 TableColumn \u7EC4\u4EF6\u4E2D\u7528"),e("code",null,"prop"),n("\u5C5E\u6027\u6765\u5BF9\u5E94\u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u5373\u53EF\u586B\u5165\u6570\u636E\uFF0C\u7528"),e("code",null,"label"),n("\u5C5E\u6027\u6765\u5B9A\u4E49\u8868\u683C\u7684\u5217\u540D\u3002\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"width"),n("\u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u5BBD\u3002")])],-1),kt=e("p",null,"table/basic",-1),It=e("h2",{id:"dai-ban-ma-wen-biao-ge"},[e("a",{class:"header-anchor",href:"#dai-ban-ma-wen-biao-ge"}),n(" \u5E26\u6591\u9A6C\u7EB9\u8868\u683C")],-1),jt=e("p",null,[e("code",null,"stripe"),n("\u5C5E\u6027\u53EF\u4EE5\u521B\u5EFA\u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C\uFF0C\u4EE5\u4FBF\u6613\u533A\u5206\u51FA\u4E0D\u540C\u884C\u7684\u6570\u636E\u3002")],-1),Mt=e("div",null,[e("p",null,[n("stripe \u8FD8\u63A5\u6536 "),e("code",null,"even"),n(" \u6216\u8005 "),e("code",null,"odd"),n(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6761\u7EB9\u663E\u793A\u7684\u987A\u5E8F\u3002\u9ED8\u8BA4\u4E3A "),e("code",null,"odd"),n(" \u5947\u6570")])],-1),Nt=e("p",null,"table/stripe",-1),Rt=e("h2",{id:"dai-bian-kuang-biao-ge"},[e("a",{class:"header-anchor",href:"#dai-bian-kuang-biao-ge"}),n(" \u5E26\u8FB9\u6846\u8868\u683C")],-1),Ft=e("p",null,[n("\u4F7F\u7528"),e("code",null,"border"),n("\u5C5E\u6027\u5373\u53EF\u5C06\u8868\u683C\u8BBE\u7F6E\u4E3A\u5E26\u8FB9\u6846\u7684\u6837\u5F0F")],-1),Ot=e("p",null,"table/border",-1),Et=e("h2",{id:"lie-biao-shi-biao-ge"},[e("a",{class:"header-anchor",href:"#lie-biao-shi-biao-ge"}),n(" \u5217\u8868\u5F0F\u8868\u683C")],-1),Ht=e("p",null,"\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002",-1),At=e("div",null,[e("p",null,[n("\u5F53 Table \u7EC4\u4EF6\u4E2D\u6CE8\u5165"),e("code",null,"data"),n("\u5BF9\u8C61\u6570\u7EC4\u540E\uFF0C\u5728 TableColumn \u7EC4\u4EF6\u4E2D\u7528"),e("code",null,"prop"),n("\u5C5E\u6027\u6765\u5BF9\u5E94\u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u5373\u53EF\u586B\u5165\u6570\u636E\uFF0C\u7528"),e("code",null,"label"),n("\u5C5E\u6027\u6765\u5B9A\u4E49\u8868\u683C\u7684\u5217\u540D\u3002\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"width"),n("\u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u5BBD\u3002")])],-1),Lt=e("p",null,"table/list",-1),Vt=e("h2",{id:"biao-ge-zhuang-tai"},[e("a",{class:"header-anchor",href:"#biao-ge-zhuang-tai"}),n(" \u8868\u683C\u72B6\u6001")],-1),Bt=e("p",null,"\u53EF\u5C06\u8868\u683C\u5185\u5BB9\u9AD8\u4EAE\u663E\u793A\uFF0C\u65B9\u4FBF\u533A\u5206\u300C\u6210\u529F\u3001\u4FE1\u606F\u3001\u8B66\u544A\u3001\u5371\u9669\u300D\u7B49\u5185\u5BB9\u3002",-1),Kt=e("div",null,[e("p",null,[n("\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A Table \u7EC4\u4EF6\u7684 "),e("code",null,"row-class-name"),n(" \u5C5E\u6027\u6765\u4E3A Table \u4E2D\u7684\u67D0\u4E00\u884C\u6DFB\u52A0 class\uFF0C\u8868\u660E\u8BE5\u884C\u5904\u4E8E\u67D0\u79CD\u72B6\u6001\u3002")])],-1),Wt=e("p",null,"table/row-class",-1),Pt=e("h2",{id:"gu-ding-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-biao-tou"}),n(" \u56FA\u5B9A\u8868\u5934")],-1),Qt=e("p",null,[n("\u53EA\u8981\u5728 Table \u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u4E86"),e("code",null,"height"),n("\u5C5E\u6027\uFF0C\u5373\u53EF\u5B9E\u73B0\u56FA\u5B9A\u8868\u5934\u7684\u8868\u683C\u3002")],-1),Xt=e("p",null,"table/fixed-header",-1),Ut=e("h2",{id:"gu-ding-lie"},[e("a",{class:"header-anchor",href:"#gu-ding-lie"}),n(" \u56FA\u5B9A\u5217")],-1),qt=e("p",null,[n("\u56FA\u5B9A\u5217\u9700\u8981\u4F7F\u7528"),e("code",null,"fixed"),n("\u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 Boolean \u503C\u6216\u8005"),e("code",null,"left"),n(),e("code",null,"right"),n("\uFF0C\u8868\u793A\u5DE6\u8FB9\u56FA\u5B9A\u8FD8\u662F\u53F3\u8FB9\u56FA\u5B9A\u3002")],-1),Gt=e("p",null,"table/fixed-column",-1),Jt=e("h2",{id:"gu-ding-lie-he-biao-tou"},[e("a",{class:"header-anchor",href:"#gu-ding-lie-he-biao-tou"}),n(" \u56FA\u5B9A\u5217\u548C\u8868\u5934")],-1),Yt=e("p",null,"\u56FA\u5B9A\u5217\u548C\u8868\u5934\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u5C06\u4E0A\u8FF0\u4E24\u4E2A\u5C5E\u6027\u5206\u522B\u8BBE\u7F6E\u597D\u5373\u53EF\u3002",-1),Zt=e("p",null,"table/fixed-all",-1),en=e("h2",{id:"liu-ti-gao-du"},[e("a",{class:"header-anchor",href:"#liu-ti-gao-du"}),n(" \u6D41\u4F53\u9AD8\u5EA6")],-1),tn=e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E"),e("code",null,"max-height"),n("\u5C5E\u6027\u4E3A Table \u6307\u5B9A\u6700\u5927\u9AD8\u5EA6\u3002\u6B64\u65F6\u82E5\u8868\u683C\u6240\u9700\u7684\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u6EDA\u52A8\u6761\u3002")],-1),nn=e("p",null,"table/max-height",-1),an=e("h2",{id:"duo-ji-biao-tou"},[e("a",{class:"header-anchor",href:"#duo-ji-biao-tou"}),n(" \u591A\u7EA7\u8868\u5934")],-1),ln=e("p",null,"\u53EA\u9700\u8981\u5728 TableColumn \u91CC\u9762\u5D4C\u5957 TableColumn\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0\u591A\u7EA7\u8868\u5934\u3002",-1),dn=e("p",null,"table/multi-header",-1),on=e("h2",{id:"dan-xuan"},[e("a",{class:"header-anchor",href:"#dan-xuan"}),n(" \u5355\u9009")],-1),rn=e("p",null,[n("Table \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u5355\u9009\u7684\u652F\u6301\uFF0C\u53EA\u9700\u8981\u914D\u7F6E"),e("code",null,"highlight-current-row"),n("\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5355\u9009\u3002")],-1),sn=e("div",null,[e("p",null,[n("\u7531"),e("code",null,"current-change"),n("\u4E8B\u4EF6\u6765\u7BA1\u7406\u9009\u4E2D\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5B83\u4F1A\u4F20\u5165"),e("code",null,"currentRow"),n("\uFF0C"),e("code",null,"oldCurrentRow"),n("\u3002\u5982\u679C\u9700\u8981\u663E\u793A\u7D22\u5F15\uFF0C\u53EF\u4EE5\u589E\u52A0\u4E00\u5217TableColumn\uFF0C\u8BBE\u7F6E"),e("code",null,"type"),n("\u5C5E\u6027\u4E3A"),e("code",null,"index"),n("\u5373\u53EF\u663E\u793A\u4ECE 1 \u5F00\u59CB\u7684\u7D22\u5F15\u53F7\u3002")])],-1),cn=e("p",null,"table/highlight-current",-1),pn=e("h2",{id:"duo-xuan"},[e("a",{class:"header-anchor",href:"#duo-xuan"}),n(" \u591A\u9009")],-1),un=e("p",null,[n("\u6DFB\u52A0\u4E00\u4E2ATableColumn\uFF0C\u8BBE"),e("code",null,"type"),n("\u5C5E\u6027\u4E3A"),e("code",null,"selection"),n("\u5373\u53EF\u5B9E\u73B0\u591A\u9009\u3002")],-1),mn=e("div",null,[e("p",null,[n("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u82E5\u5185\u5BB9\u8FC7\u591A\u4F1A\u6298\u884C\u663E\u793A\uFF0C\u82E5\u9700\u8981\u5355\u884C\u663E\u793A\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"show-overflow-tooltip"),n("\u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"boolean"),n("\uFF0C\u4E3A"),e("code",null,"true"),n("\u65F6\u591A\u4F59\u7684\u5185\u5BB9\u4F1A\u5728 hover \u65F6\u4EE5 tooltip \u7684\u5F62\u5F0F\u663E\u793A\u51FA\u6765\u3002")])],-1),hn=e("p",null,"table/selection",-1),bn=e("h2",{id:"pai-xu"},[e("a",{class:"header-anchor",href:"#pai-xu"}),n(" \u6392\u5E8F")],-1),_n=e("p",null,[n("\u5728\u5217\u4E2D\u8BBE\u7F6E"),e("code",null,"sortable"),n("\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u4EE5\u8BE5\u5217\u4E3A\u57FA\u51C6\u7684\u6392\u5E8F")],-1),fn=e("div",null,[e("p",null,[n("\u901A\u8FC7 Table \u7684"),e("code",null,"default-sort"),n("\u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u548C\u6392\u5E8F\u987A\u5E8F\u3002\u53EF\u4EE5\u4F7F\u7528"),e("code",null,"sort-method"),n("\u6216\u8005"),e("code",null,"sort-by"),n("\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u6392\u5E8F\u89C4\u5219\u3002\u5982\u679C\u9700\u8981\u540E\u7AEF\u6392\u5E8F\uFF0C\u9700\u5C06"),e("code",null,"sortable"),n("\u8BBE\u7F6E\u4E3A"),e("code",null,"custom"),n("\uFF0C\u540C\u65F6\u5728 Table \u4E0A\u76D1\u542C"),e("code",null,"sort-change"),n("\u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u6392\u5E8F\u7684\u5B57\u6BB5\u540D\u548C\u6392\u5E8F\u987A\u5E8F\uFF0C\u4ECE\u800C\u5411\u63A5\u53E3\u8BF7\u6C42\u6392\u5E8F\u540E\u7684\u8868\u683C\u6570\u636E\u3002\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u4F7F\u7528\u4E86"),e("code",null,"formatter"),n("\u5C5E\u6027\uFF0C\u5B83\u7528\u4E8E\u683C\u5F0F\u5316\u6307\u5B9A\u5217\u7684\u503C\uFF0C\u63A5\u53D7\u4E00\u4E2A"),e("code",null,"Function"),n("\uFF0C\u4F1A\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A"),e("code",null,"row"),n("\u548C"),e("code",null,"column"),n("\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u8FDB\u884C\u5904\u7406\u3002")])],-1),wn=e("p",null,"table/sortable",-1),gn=e("h2",{id:"shai-xuan"},[e("a",{class:"header-anchor",href:"#shai-xuan"}),n(" \u7B5B\u9009")],-1),vn=e("p",null,[n("\u5728\u5217\u4E2D\u8BBE\u7F6E"),e("code",null,"filters"),n(),e("code",null,"filter-method"),n("\u5C5E\u6027\u5373\u53EF\u5F00\u542F\u8BE5\u5217\u7684\u7B5B\u9009\u3002")],-1),yn=e("div",null,[e("p",null,[e("code",null,"filters"),n(" \u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C"),e("code",null,"filter-method"),n("\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u7528\u4E8E\u51B3\u5B9A\u67D0\u4E9B\u6570\u636E\u662F\u5426\u663E\u793A\uFF0C\u4F1A\u4F20\u5165\u4E09\u4E2A\u53C2\u6570\uFF1A"),e("code",null,"value"),n(", "),e("code",null,"row"),n(" \u548C "),e("code",null,"column"),n("\u3002")])],-1),xn=e("p",null,"table/filters",-1),Dn=e("h2",{id:"zi-ding-yi-lie-mo-ban"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-lie-mo-ban"}),n(" \u81EA\u5B9A\u4E49\u5217\u6A21\u677F")],-1),$n=e("p",null,"\u81EA\u5B9A\u4E49\u5217\u7684\u663E\u793A\u5185\u5BB9\uFF0C\u53EF\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\u3002",-1),Cn=e("div",null,[e("p",null,[n("\u901A\u8FC7 "),e("code",null,"slot"),n(" \u53EF\u4EE5\u83B7\u53D6\u5230 row, column, $index \u548C store\uFF08table \u5185\u90E8\u7684\u72B6\u6001\u7BA1\u7406\uFF09\u7684\u6570\u636E\uFF0C\u7528\u6CD5\u53C2\u8003 demo\u3002")])],-1),zn=e("p",null,"table/column-slot",-1),Sn=e("h2",{id:"zhan-kai-xing"},[e("a",{class:"header-anchor",href:"#zhan-kai-xing"}),n(" \u5C55\u5F00\u884C")],-1),Tn=e("p",null,[n('\u901A\u8FC7\u8BBE\u7F6E type="expand" \u548C '),e("code",null,"slot"),n(" \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\uFF0C")],-1),kn=e("div",null,[e("p",null,[n("TableColumn \u7684\u6A21\u677F\u4F1A\u88AB\u6E32\u67D3\u6210\u4E3A\u5C55\u5F00\u884C\u7684\u5185\u5BB9\uFF0C\u5C55\u5F00\u884C\u53EF\u8BBF\u95EE\u7684\u5C5E\u6027\u4E0E\u4F7F\u7528\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u65F6\u7684 "),e("code",null,"slot"),n(" \u76F8\u540C\u3002")])],-1),In=e("p",null,"table/expand",-1),jn=e("h2",{id:"shu-xing-shu-ju-yu-lan-jia-zai"},[e("a",{class:"header-anchor",href:"#shu-xing-shu-ju-yu-lan-jia-zai"}),n(" \u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D")],-1),Mn=e("p",null,[n("\u8868\u683C\u7EC4\u4EF6\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u663E\u793A\u3002\u5F53 row \u4E2D\u5305\u542B "),e("code",null,"children"),n(" \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002")],-1),Nn=e("div",null,[e("p",null,[n("\u6E32\u67D3\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6307\u5B9A "),e("code",null,"row-key"),n("\u3002\u652F\u6301\u5B50\u8282\u70B9\u6570\u636E\u5F02\u6B65\u52A0\u8F7D\u3002\u8BBE\u7F6E Table \u7684 "),e("code",null,"lazy"),n(" \u5C5E\u6027\u4E3A true \u4E0E\u52A0\u8F7D\u51FD\u6570 "),e("code",null,"load"),n(" \u3002\u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684 "),e("code",null,"hasChildren"),n(" \u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002"),e("code",null,"children"),n(" \u4E0E "),e("code",null,"hasChildren"),n(" \u90FD\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"tree-props"),n(" \u914D\u7F6E\u3002")])],-1),Rn=e("p",null,"table/tree",-1),Fn=e("h2",{id:"zi-ding-yi-biao-tou"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-biao-tou"}),n(" \u81EA\u5B9A\u4E49\u8868\u5934")],-1),On=e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),e("a",{href:"https://v3.vuejs.org/guide/component-slots.html"},"slot"),n(" \u6765\u81EA\u5B9A\u4E49\u8868\u5934\u3002")],-1),En=e("p",null,"table/custom-header",-1),Hn=e("h2",{id:"biao-wei-he-ji-xing"},[e("a",{class:"header-anchor",href:"#biao-wei-he-ji-xing"}),n(" \u8868\u5C3E\u5408\u8BA1\u884C")],-1),An=e("p",null,"\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u8868\u5C3E\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002",-1),Ln=e("div",null,[e("p",null,[n("\u5C06"),e("code",null,"show-summary"),n("\u8BBE\u7F6E\u4E3A"),e("code",null,"true"),n("\u5C31\u4F1A\u5728\u8868\u683C\u5C3E\u90E8\u5C55\u793A\u5408\u8BA1\u884C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u4E8E\u5408\u8BA1\u884C\uFF0C\u7B2C\u4E00\u5217\u4E0D\u8FDB\u884C\u6570\u636E\u6C42\u5408\u64CD\u4F5C\uFF0C\u800C\u662F\u663E\u793A\u300C\u5408\u8BA1\u300D\u4E8C\u5B57\uFF08\u53EF\u901A\u8FC7"),e("code",null,"sum-text"),n("\u914D\u7F6E\uFF09\uFF0C\u5176\u4F59\u5217\u4F1A\u5C06\u672C\u5217\u6240\u6709\u6570\u503C\u8FDB\u884C\u6C42\u5408\u64CD\u4F5C\uFF0C\u5E76\u663E\u793A\u51FA\u6765\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u7684\u5408\u8BA1\u903B\u8F91\u3002\u4F7F\u7528"),e("code",null,"summary-method"),n("\u5E76\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u7684\u5404\u9879\u5C31\u4F1A\u663E\u793A\u5728\u5408\u8BA1\u884C\u7684\u5404\u5217\u4E2D\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\u672C\u4F8B\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u8868\u683C\u3002")])],-1),Vn=e("p",null,"table/summary",-1),Bn=e("h2",{id:"he-bing-xing-huo-lie"},[e("a",{class:"header-anchor",href:"#he-bing-xing-huo-lie"}),n(" \u5408\u5E76\u884C\u6216\u5217")],-1),Kn=e("p",null,"\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002",-1),Wn=e("div",null,[e("p",null,[n("\u901A\u8FC7\u7ED9"),e("code",null,"table"),n("\u4F20\u5165"),e("code",null,"span-method"),n("\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C"),e("code",null,"row"),n("\u3001\u5F53\u524D\u5217"),e("code",null,"column"),n("\u3001\u5F53\u524D\u884C\u53F7"),e("code",null,"rowIndex"),n("\u3001\u5F53\u524D\u5217\u53F7"),e("code",null,"columnIndex"),n("\u56DB\u4E2A\u5C5E\u6027\u3002\u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868"),e("code",null,"rowspan"),n("\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868"),e("code",null,"colspan"),n("\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A"),e("code",null,"rowspan"),n("\u548C"),e("code",null,"colspan"),n("\u7684\u5BF9\u8C61\u3002")])],-1),Pn=e("p",null,"table/span-method",-1),Qn=e("h2",{id:"zi-ding-yi-suo-yin"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-suo-yin"}),n(" \u81EA\u5B9A\u4E49\u7D22\u5F15")],-1),Xn=e("p",null,[n("\u81EA\u5B9A\u4E49 "),e("code",null,"type=index"),n(" \u5217\u7684\u884C\u53F7\u3002")],-1),Un=e("div",null,[e("p",null,[n("\u901A\u8FC7\u7ED9 "),e("code",null,"type=index"),n(" \u7684\u5217\u4F20\u5165 "),e("code",null,"index"),n(" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7D22\u5F15\u3002\u8BE5\u5C5E\u6027\u4F20\u5165\u6570\u5B57\u65F6\uFF0C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u7684\u8D77\u59CB\u503C\u3002\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u63D0\u4F9B\u5F53\u524D\u884C\u7684\u884C\u53F7\uFF08\u4ECE "),e("code",null,"0"),n(" \u5F00\u59CB\uFF09\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u5C55\u793A\u3002")])],-1),qn=e("p",null,"table/indexable",-1),Gn=I('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>data</td><td>\u663E\u793A\u7684\u6570\u636E</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>height</td><td>Table \u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u81EA\u52A8\u9AD8\u5EA6\u3002\u5982\u679C height \u4E3A number \u7C7B\u578B\uFF0C\u5355\u4F4D px\uFF1B\u5982\u679C height \u4E3A string \u7C7B\u578B\uFF0C\u5219\u8FD9\u4E2A\u9AD8\u5EA6\u4F1A\u8BBE\u7F6E\u4E3A Table \u7684 style.height \u7684\u503C\uFF0CTable \u7684\u9AD8\u5EA6\u4F1A\u53D7\u63A7\u4E8E\u5916\u90E8\u6837\u5F0F\u3002</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>Table \u7684\u6700\u5927\u9AD8\u5EA6\u3002\u5408\u6CD5\u7684\u503C\u4E3A\u6570\u5B57\u6216\u8005\u5355\u4F4D\u4E3A px \u7684\u9AD8\u5EA6\u3002</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>stripe</td><td>\u8868\u683C\u6761\u7EB9\u6548\u679C</td><td>boolean / string</td><td>true / false / odd / even</td><td>false</td></tr><tr><td>border</td><td>\u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>fit</td><td>\u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-header</td><td>\u662F\u5426\u663E\u793A\u8868\u5934</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>highlight-current-row</td><td>\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>current-row-key</td><td>\u5F53\u524D\u884C\u7684 key\uFF0C\u53EA\u5199\u5C5E\u6027</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>row-class-name</td><td>\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, rowIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>row-style</td><td>\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({row, rowIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-class-name</td><td>\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, column, rowIndex, columnIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>cell-style</td><td>\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>Function({row, column, rowIndex, columnIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-row-class-name</td><td>\u8868\u5934\u884C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, rowIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-row-style</td><td>\u8868\u5934\u884C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u884C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({row, rowIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-cell-class-name</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 className \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u4E2A\u56FA\u5B9A\u7684 className\u3002</td><td>function({row, column, rowIndex, columnIndex}) / string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>header-cell-style</td><td>\u8868\u5934\u5355\u5143\u683C\u7684 style \u7684\u56DE\u8C03\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u56FA\u5B9A\u7684 Object \u4E3A\u6240\u6709\u8868\u5934\u5355\u5143\u683C\u8BBE\u7F6E\u4E00\u6837\u7684 Style\u3002</td><td>function({row, column, rowIndex, columnIndex}) / object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>row-key</td><td>\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 Table \u7684\u6E32\u67D3\uFF1B\u5728\u4F7F\u7528 reserve-selection \u529F\u80FD\u4E0E\u663E\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684\u3002\u7C7B\u578B\u4E3A string \u65F6\uFF0C\u652F\u6301\u591A\u5C42\u8BBF\u95EE\uFF1A<code>user.info.id</code>\uFF0C\u4F46\u4E0D\u652F\u6301 <code>user.info[0].id</code>\uFF0C\u6B64\u79CD\u60C5\u51B5\u8BF7\u4F7F\u7528 <code>function</code>\u3002</td><td>function(row)/string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>empty-text</td><td>\u7A7A\u6570\u636E\u65F6\u663E\u793A\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>#empty</code> \u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u6682\u65E0\u6570\u636E</td></tr><tr><td>default-expand-all</td><td>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u884C\uFF0C\u5F53 Table \u5305\u542B\u5C55\u5F00\u884C\u5B58\u5728\u6216\u8005\u4E3A\u6811\u5F62\u8868\u683C\u65F6\u6709\u6548</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>expand-row-keys</td><td>\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5C5E\u6027\u8BBE\u7F6E Table \u76EE\u524D\u7684\u5C55\u5F00\u884C\uFF0C\u9700\u8981\u8BBE\u7F6E row-key \u5C5E\u6027\u624D\u80FD\u4F7F\u7528\uFF0C\u8BE5\u5C5E\u6027\u4E3A\u5C55\u5F00\u884C\u7684 keys \u6570\u7EC4\u3002</td><td>array</td><td>\u2014</td><td></td></tr><tr><td>default-sort</td><td>\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u7684 prop \u548C\u987A\u5E8F\u3002\u5B83\u7684<code>prop</code>\u5C5E\u6027\u6307\u5B9A\u9ED8\u8BA4\u7684\u6392\u5E8F\u7684\u5217\uFF0C<code>order</code>\u6307\u5B9A\u9ED8\u8BA4\u6392\u5E8F\u7684\u987A\u5E8F</td><td>object</td><td><code>order</code>: ascending, descending</td><td>\u5982\u679C\u53EA\u6307\u5B9A\u4E86<code>prop</code>, \u6CA1\u6709\u6307\u5B9A<code>order</code>, \u5219\u9ED8\u8BA4\u987A\u5E8F\u662F ascending</td></tr><tr><td>tooltip-effect</td><td>tooltip <code>effect</code> \u5C5E\u6027</td><td>string</td><td>dark/light</td><td></td></tr><tr><td>show-summary</td><td>\u662F\u5426\u5728\u8868\u5C3E\u663E\u793A\u5408\u8BA1\u884C</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>sum-text</td><td>\u5408\u8BA1\u884C\u7B2C\u4E00\u5217\u7684\u6587\u672C</td><td>btring</td><td>\u2014</td><td>\u5408\u8BA1</td></tr><tr><td>summary-method</td><td>\u81EA\u5B9A\u4E49\u7684\u5408\u8BA1\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ columns, data })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>span-method</td><td>\u5408\u5E76\u884C\u6216\u5217\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td>function({ row, column, rowIndex, columnIndex })</td><td>\u2014</td><td>\u2014</td></tr><tr><td>select-on-indeterminate</td><td>\u5728\u591A\u9009\u8868\u683C\u4E2D\uFF0C\u5F53\u4EC5\u6709\u90E8\u5206\u884C\u88AB\u9009\u4E2D\u65F6\uFF0C\u70B9\u51FB\u8868\u5934\u7684\u591A\u9009\u6846\u65F6\u7684\u884C\u4E3A\u3002\u82E5\u4E3A true\uFF0C\u5219\u9009\u4E2D\u6240\u6709\u884C\uFF1B\u82E5\u4E3A false\uFF0C\u5219\u53D6\u6D88\u9009\u62E9\u6240\u6709\u884C</td><td>Boolean</td><td>\u2014</td><td>true</td></tr><tr><td>indent</td><td>\u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6811\u8282\u70B9\u7684\u7F29\u8FDB</td><td>number</td><td>\u2014</td><td>16</td></tr><tr><td>lazy</td><td>\u662F\u5426\u61D2\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>load</td><td>\u52A0\u8F7D\u5B50\u8282\u70B9\u6570\u636E\u7684\u51FD\u6570\uFF0Clazy \u4E3A true \u65F6\u751F\u6548\uFF0C\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5305\u542B\u4E86\u8282\u70B9\u7684\u5C42\u7EA7\u4FE1\u606F</td><td>Function(row, treeNode, resolve)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>tree-props</td><td>\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u7684\u914D\u7F6E\u9009\u9879</td><td>object</td><td>\u2014</td><td>{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u6570\u636E\u884C\u7684 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>selection, row</td></tr><tr><td>select-all</td><td>\u5F53\u7528\u6237\u624B\u52A8\u52FE\u9009\u5168\u9009 Checkbox \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>selection</td></tr><tr><td>selection-change</td><td>\u5F53\u9009\u62E9\u9879\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>selection</td></tr><tr><td>cell-mouse-enter</td><td>\u5F53\u5355\u5143\u683C hover \u8FDB\u5165\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-mouse-leave</td><td>\u5F53\u5355\u5143\u683C hover \u9000\u51FA\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-click</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-dblclick</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u53CC\u51FB\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>cell-contextmenu</td><td>\u5F53\u67D0\u4E2A\u5355\u5143\u683C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, cell, event</td></tr><tr><td>row-click</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>row-contextmenu</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>row-dblclick</td><td>\u5F53\u67D0\u4E00\u884C\u88AB\u53CC\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>row, column, event</td></tr><tr><td>header-click</td><td>\u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u70B9\u51FB\u65F6\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>column, event</td></tr><tr><td>header-contextmenu</td><td>\u5F53\u67D0\u4E00\u5217\u7684\u8868\u5934\u88AB\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>column, event</td></tr><tr><td>sort-change</td><td>\u5F53\u8868\u683C\u7684\u6392\u5E8F\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>{ column, prop, order }</td></tr><tr><td>filter-change</td><td>\u5F53\u8868\u683C\u7684\u7B5B\u9009\u6761\u4EF6\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u53C2\u6570\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 key \u662F column \u7684 columnKey\uFF0C\u5BF9\u5E94\u7684 value \u4E3A\u7528\u6237\u9009\u62E9\u7684\u7B5B\u9009\u6761\u4EF6\u7684\u6570\u7EC4\u3002</td><td>filters</td></tr><tr><td>current-change</td><td>\u5F53\u8868\u683C\u7684\u5F53\u524D\u884C\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u5982\u679C\u8981\u9AD8\u4EAE\u5F53\u524D\u884C\uFF0C\u8BF7\u6253\u5F00\u8868\u683C\u7684 highlight-current-row \u5C5E\u6027</td><td>currentRow, oldCurrentRow</td></tr><tr><td>header-dragend</td><td>\u5F53\u62D6\u52A8\u8868\u5934\u6539\u53D8\u4E86\u5217\u7684\u5BBD\u5EA6\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6</td><td>newWidth, oldWidth, column, event</td></tr><tr><td>expand-change</td><td>\u5F53\u7528\u6237\u5BF9\u67D0\u4E00\u884C\u5C55\u5F00\u6216\u8005\u5173\u95ED\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF08\u5C55\u5F00\u884C\u65F6\uFF0C\u56DE\u8C03\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A expandedRows\uFF1B\u6811\u5F62\u8868\u683C\u65F6\u7B2C\u4E8C\u53C2\u6570\u4E3A expanded\uFF09</td><td>row, (expandedRows | expanded)</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u6E05\u7A7A\u7528\u6237\u7684\u9009\u62E9</td><td>\u2014</td></tr><tr><td>toggleRowSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u9009\u4E2D\u4E0E\u5426\uFF08selected \u4E3A true \u5219\u9009\u4E2D\uFF09</td><td>row, selected</td></tr><tr><td>toggleAllSelection</td><td>\u7528\u4E8E\u591A\u9009\u8868\u683C\uFF0C\u5207\u6362\u5168\u9009\u548C\u5168\u4E0D\u9009</td><td>-</td></tr><tr><td>toggleRowExpansion</td><td>\u7528\u4E8E\u53EF\u5C55\u5F00\u8868\u683C\u4E0E\u6811\u5F62\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u5C55\u5F00\u72B6\u6001\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u5C55\u5F00\u4E0E\u5426\uFF08expanded \u4E3A true \u5219\u5C55\u5F00\uFF09</td><td>row, expanded</td></tr><tr><td>setCurrentRow</td><td>\u7528\u4E8E\u5355\u9009\u8868\u683C\uFF0C\u8BBE\u5B9A\u67D0\u4E00\u884C\u4E3A\u9009\u4E2D\u884C\uFF0C\u5982\u679C\u8C03\u7528\u65F6\u4E0D\u52A0\u53C2\u6570\uFF0C\u5219\u4F1A\u53D6\u6D88\u76EE\u524D\u9AD8\u4EAE\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002</td><td>row</td></tr><tr><td>clearSort</td><td>\u7528\u4E8E\u6E05\u7A7A\u6392\u5E8F\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u6392\u5E8F\u7684\u72B6\u6001</td><td>\u2014</td></tr><tr><td>clearFilter</td><td>\u4E0D\u4F20\u5165\u53C2\u6570\u65F6\u7528\u4E8E\u6E05\u7A7A\u6240\u6709\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u6570\u636E\u4F1A\u6062\u590D\u6210\u672A\u8FC7\u6EE4\u7684\u72B6\u6001\uFF0C\u4E5F\u53EF\u4F20\u5165\u7531 columnKey \u7EC4\u6210\u7684\u6570\u7EC4\u4EE5\u6E05\u9664\u6307\u5B9A\u5217\u7684\u8FC7\u6EE4\u6761\u4EF6</td><td>columnKey</td></tr><tr><td>doLayout</td><td>\u5BF9 Table \u8FDB\u884C\u91CD\u65B0\u5E03\u5C40\u3002\u5F53 Table \u6216\u5176\u4E0A\u7EA7\u5143\u7D20\u7531\u9690\u85CF\u5207\u6362\u4E3A\u663E\u793A\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u8C03\u7528\u6B64\u65B9\u6CD5</td><td>\u2014</td></tr><tr><td>sort</td><td>\u624B\u52A8\u5BF9 Table \u8FDB\u884C\u6392\u5E8F\u3002\u53C2\u6570<code>prop</code>\u5C5E\u6027\u6307\u5B9A\u6392\u5E8F\u5217\uFF0C<code>order</code>\u6307\u5B9A\u6392\u5E8F\u987A\u5E8F\u3002</td><td>prop: string, order: string</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>append</td><td>\u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002\u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002</td></tr></tbody></table><h2 id="table-column-attributes"><a class="header-anchor" href="#table-column-attributes"></a> Table Column Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u5BF9\u5E94\u5217\u7684\u7C7B\u578B\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 <code>selection</code> \u5219\u663E\u793A\u591A\u9009\u6846\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 <code>index</code> \u5219\u663E\u793A\u8BE5\u884C\u7684\u7D22\u5F15\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B\u5982\u679C\u8BBE\u7F6E\u4E86 <code>expand</code> \u5219\u663E\u793A\u4E3A\u4E00\u4E2A\u53EF\u5C55\u5F00\u7684\u6309\u94AE</td><td>string</td><td>selection/index/expand</td><td>\u2014</td></tr><tr><td>index</td><td>\u5982\u679C\u8BBE\u7F6E\u4E86 <code>type=index</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012 <code>index</code> \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u7D22\u5F15</td><td>number, Function(index)</td><td>-</td><td>-</td></tr><tr><td>column-key</td><td>column \u7684 key\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 filter-change \u4E8B\u4EF6\uFF0C\u5219\u9700\u8981\u6B64\u5C5E\u6027\u6807\u8BC6\u662F\u54EA\u4E2A column \u7684\u7B5B\u9009\u6761\u4EF6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u663E\u793A\u7684\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prop</td><td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 property \u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>width</td><td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>min-width</td><td>\u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u4E0E width \u7684\u533A\u522B\u662F width \u662F\u56FA\u5B9A\u7684\uFF0Cmin-width \u4F1A\u628A\u5269\u4F59\u5BBD\u5EA6\u6309\u6BD4\u4F8B\u5206\u914D\u7ED9\u8BBE\u7F6E\u4E86 min-width \u7684\u5217</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>fixed</td><td>\u5217\u662F\u5426\u56FA\u5B9A\u5728\u5DE6\u4FA7\u6216\u8005\u53F3\u4FA7\uFF0Ctrue \u8868\u793A\u56FA\u5B9A\u5728\u5DE6\u4FA7</td><td>string / boolean</td><td>true, left, right</td><td>\u2014</td></tr><tr><td>sortable</td><td>\u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u6392\u5E8F\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A &#39;custom&#39;\uFF0C\u5219\u4EE3\u8868\u7528\u6237\u5E0C\u671B\u8FDC\u7A0B\u6392\u5E8F\uFF0C\u9700\u8981\u76D1\u542C Table \u7684 sort-change \u4E8B\u4EF6</td><td>boolean / string</td><td>true, false, &#39;custom&#39;</td><td>false</td></tr><tr><td>sort-method</td><td>\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u7684\u65F6\u5019\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53 sortable \u8BBE\u7F6E\u4E3A true \u7684\u65F6\u5019\u6709\u6548\uFF0C\u9700\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\uFF0C\u548C Array.sort \u8868\u73B0\u4E00\u81F4</td><td>function(a, b)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sort-by</td><td>\u6307\u5B9A\u6570\u636E\u6309\u7167\u54EA\u4E2A\u5C5E\u6027\u8FDB\u884C\u6392\u5E8F\uFF0C\u4EC5\u5F53 sortable \u8BBE\u7F6E\u4E3A true \u4E14\u6CA1\u6709\u8BBE\u7F6E sort-method \u7684\u65F6\u5019\u6709\u6548\u3002\u5982\u679C sort-by \u4E3A\u6570\u7EC4\uFF0C\u5219\u5148\u6309\u7167\u7B2C 1 \u4E2A\u5C5E\u6027\u6392\u5E8F\uFF0C\u5982\u679C\u7B2C 1 \u4E2A\u76F8\u7B49\uFF0C\u518D\u6309\u7167\u7B2C 2 \u4E2A\u6392\u5E8F\uFF0C\u4EE5\u6B64\u7C7B\u63A8</td><td>string / array / function(row, index)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sort-orders</td><td>\u6570\u636E\u5728\u6392\u5E8F\u65F6\u6240\u4F7F\u7528\u6392\u5E8F\u7B56\u7565\u7684\u8F6E\u8F6C\u987A\u5E8F\uFF0C\u4EC5\u5F53 sortable \u4E3A true \u65F6\u6709\u6548\u3002\u9700\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u968F\u7740\u7528\u6237\u70B9\u51FB\u8868\u5934\uFF0C\u8BE5\u5217\u4F9D\u6B21\u6309\u7167\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F</td><td>array</td><td>\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u9700\u4E3A\u4EE5\u4E0B\u4E09\u8005\u4E4B\u4E00\uFF1A<code>ascending</code> \u8868\u793A\u5347\u5E8F\uFF0C<code>descending</code> \u8868\u793A\u964D\u5E8F\uFF0C<code>null</code> \u8868\u793A\u8FD8\u539F\u4E3A\u539F\u59CB\u987A\u5E8F</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>\u5BF9\u5E94\u5217\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u62D6\u52A8\u6539\u53D8\u5BBD\u5EA6\uFF08\u9700\u8981\u5728 hl-table \u4E0A\u8BBE\u7F6E border \u5C5E\u6027\u4E3A\u771F\uFF09</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>formatter</td><td>\u7528\u6765\u683C\u5F0F\u5316\u5185\u5BB9</td><td>function(row, column, cellValue, index)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-overflow-tooltip</td><td>\u5F53\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u663E\u793A tooltip</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>left</td></tr><tr><td>header-align</td><td>\u8868\u5934\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u8BE5\u9879\uFF0C\u5219\u4F7F\u7528\u8868\u683C\u7684\u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td>left/center/right</td><td>\u2014</td></tr><tr><td>class-name</td><td>\u5217\u7684 className</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label-class-name</td><td>\u5F53\u524D\u5217\u6807\u9898\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>selectable</td><td>\u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Function\uFF0CFunction \u7684\u8FD4\u56DE\u503C\u7528\u6765\u51B3\u5B9A\u8FD9\u4E00\u884C\u7684 CheckBox \u662F\u5426\u53EF\u4EE5\u52FE\u9009</td><td>Function(row, index)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>reserve-selection</td><td>\u4EC5\u5BF9 type=selection \u7684\u5217\u6709\u6548\uFF0C\u7C7B\u578B\u4E3A Boolean\uFF0C\u4E3A true \u5219\u4F1A\u5728\u6570\u636E\u66F4\u65B0\u4E4B\u540E\u4FDD\u7559\u4E4B\u524D\u9009\u4E2D\u7684\u6570\u636E\uFF08\u9700\u6307\u5B9A <code>row-key</code>\uFF09</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>filters</td><td>\u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\uFF0C\u6570\u7EC4\u683C\u5F0F\uFF0C\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u9700\u8981\u6709 text \u548C value \u5C5E\u6027\u3002</td><td>array[{ text, value }]</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filter-placement</td><td>\u8FC7\u6EE4\u5F39\u51FA\u6846\u7684\u5B9A\u4F4D</td><td>string</td><td>\u4E0E Tooltip \u7684 <code>placement</code> \u5C5E\u6027\u76F8\u540C</td><td>\u2014</td></tr><tr><td>filter-multiple</td><td>\u6570\u636E\u8FC7\u6EE4\u7684\u9009\u9879\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>filter-method</td><td>\u6570\u636E\u8FC7\u6EE4\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u5982\u679C\u662F\u591A\u9009\u7684\u7B5B\u9009\u9879\uFF0C\u5BF9\u6BCF\u4E00\u6761\u6570\u636E\u4F1A\u6267\u884C\u591A\u6B21\uFF0C\u4EFB\u610F\u4E00\u6B21\u8FD4\u56DE true \u5C31\u4F1A\u663E\u793A\u3002</td><td>function(value, row, column)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>filtered-value</td><td>\u9009\u4E2D\u7684\u6570\u636E\u8FC7\u6EE4\u9879\uFF0C\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5934\u8FC7\u6EE4\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u53EF\u80FD\u4F1A\u9700\u8981\u6B64\u5C5E\u6027\u3002</td><td>array</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="table-column-slots"><a class="header-anchor" href="#table-column-slots"></a> Table Column Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5217\u7684\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { row, column, $index }</td></tr><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u8868\u5934\u7684\u5185\u5BB9. \u53C2\u6570\u4E3A { column, $index }</td></tr></tbody></table>',12),na={setup(l){const o={"../../../examples/table/basic.vue":F,"../../../examples/table/border.vue":A,"../../../examples/table/column-slot.vue":X,"../../../examples/table/custom-header.vue":Z,"../../../examples/table/expand.vue":ae,"../../../examples/table/filters.vue":ie,"../../../examples/table/fixed-all.vue":me,"../../../examples/table/fixed-column.vue":ge,"../../../examples/table/fixed-header.vue":De,"../../../examples/table/highlight-current.vue":Ie,"../../../examples/table/indexable.vue":Re,"../../../examples/table/list.vue":He,"../../../examples/table/max-height.vue":Ke,"../../../examples/table/multi-header.vue":Xe,"../../../examples/table/row-class.vue":Je,"../../../examples/table/selection.vue":lt,"../../../examples/table/sortable.vue":st,"../../../examples/table/span-method.vue":ut,"../../../examples/table/stripe.vue":_t,"../../../examples/table/summary.vue":yt,"../../../examples/table/tree.vue":Ct};return(c,u)=>{const r=i("demo-block"),p=i("right-nav");return f(),$(z,null,[e("section",null,[zt,St,t(r,{fs:"",demos:w(o),"path-name":"table/basic","source-code":`<template>
  <hl-table :data="tableData">
    <hl-table-column prop="date" label="\u65E5\u671F" width="150" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
    <hl-table-column prop="address" show-overflow-tooltip label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])

    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[Tt,kt]),_:1},8,["demos"]),It,jt,t(r,{fs:"",demos:w(o),"path-name":"table/stripe","source-code":`<template>
  <hl-table :data="tableData" stripe>
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])
    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[Mt,Nt]),_:1},8,["demos"]),Rt,Ft,t(r,{fs:"",demos:w(o),"path-name":"table/border","source-code":`<template>
  <hl-table :data="tableData" border>
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])
    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[Ot]),_:1},8,["demos"]),Et,Ht,t(r,{fs:"",demos:w(o),"path-name":"table/list","source-code":`<template>
  <hl-table :data="tableData" list>
    <hl-table-column prop="date" label="\u65E5\u671F" width="150" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
    <hl-table-column prop="address" show-overflow-tooltip label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])

    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[At,Lt]),_:1},8,["demos"]),Vt,Bt,t(r,{fs:"",demos:w(o),"path-name":"table/row-class","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])

    const tableRowClassName = ({ rowIndex }) => {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
    return {
      tableData,
      tableRowClassName,
    }
  },
})
<\/script>

<style>
  .hl-table .warning-row {
    background: oldlace;
  }

  .hl-table .success-row {
    background: #f0f9eb;
  }
</style>`},{default:d(()=>[Kt,Wt]),_:1},8,["demos"]),Pt,Qt,t(r,{fs:"",demos:w(o),"path-name":"table/fixed-header","source-code":`<template>
  <hl-table :data="tableData" height="250" border>
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-08',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-06',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-07',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
    ])
    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[Xt]),_:1},8,["demos"]),Ut,qt,t(r,{fs:"",demos:w(o),"path-name":"table/fixed-column","source-code":`<template>
  <hl-table :data="tableData" border style="width: 100%">
    <hl-table-column fixed prop="date" label="\u65E5\u671F" width="120" />
    <hl-table-column prop="name" label="\u59D3\u540D" />
    <hl-table-column prop="province" label="\u7701\u4EFD" />
    <hl-table-column prop="city" label="\u5E02\u533A" />
    <hl-table-column prop="address" label="\u5730\u5740" width="600" />
    <hl-table-column prop="zip" label="\u90AE\u7F16" />
    <hl-table-column fixed="right" label="\u64CD\u4F5C" width="160">
      <template #default="scope">
        <hl-button size="sm" @click="handleClick(scope.row)">\u67E5\u770B</hl-button>
        <hl-button size="sm">\u7F16\u8F91</hl-button>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
        zip: 200333,
      },
    ])

    const handleClick = row => {
      console.log(row)
    }
    return {
      tableData,
      handleClick,
    }
  },
})
<\/script>
`},{default:d(()=>[Gt]),_:1},8,["demos"]),Jt,Yt,t(r,{fs:"",demos:w(o),"path-name":"table/fixed-all","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" height="250">
    <hl-table-column fixed prop="date" label="\u65E5\u671F" width="150" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
    <hl-table-column prop="province" label="\u7701\u4EFD" width="120" />
    <hl-table-column prop="city" label="\u5E02\u533A" width="320" />
    <hl-table-column prop="address" label="\u5730\u5740" width="600" />
    <hl-table-column prop="zip" label="\u90AE\u7F16" width="120" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-08',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-06',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-07',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
    ])
    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[Zt]),_:1},8,["demos"]),en,tn,t(r,{fs:"",demos:w(o),"path-name":"table/max-height","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" max-height="250">
    <hl-table-column fixed prop="date" label="\u65E5\u671F" width="150" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
    <hl-table-column prop="province" label="\u7701\u4EFD" width="120" />
    <hl-table-column prop="city" label="\u5E02\u533A" width="120" />
    <hl-table-column prop="address" label="\u5730\u5740" width="600" />
    <hl-table-column prop="zip" label="\u90AE\u7F16" width="120" />
    <hl-table-column fixed="right" label="\u64CD\u4F5C" width="120">
      <template #default="scope">
        <hl-button type="link" size="sm" @click.prevent="deleteRow(scope.$index, tableData)">
          \u79FB\u9664
        </hl-button>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-08',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-06',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-07',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
    ])
    const deleteRow = (index, rows) => {
      rows.splice(index, 1)
    }
    return {
      tableData,
      deleteRow,
    }
  },
})
<\/script>
`},{default:d(()=>[nn]),_:1},8,["demos"]),an,ln,t(r,{fs:"",demos:w(o),"path-name":"table/multi-header","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column prop="date" label="\u65E5\u671F" width="150" />
    <hl-table-column label="\u914D\u9001\u4FE1\u606F">
      <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
      <hl-table-column label="\u5730\u5740">
        <hl-table-column prop="province" label="\u7701\u4EFD" width="120" />
        <hl-table-column prop="city" label="\u5E02\u533A" width="120" />
        <hl-table-column prop="address" label="\u5730\u5740" show-overflow-tooltip />
        <hl-table-column prop="zip" label="\u90AE\u7F16" width="120" />
      </hl-table-column>
    </hl-table-column>
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
      },
    ])
    return {
      tableData,
    }
  },
})
<\/script>
`},{default:d(()=>[dn]),_:1},8,["demos"]),on,rn,t(r,{fs:"",demos:w(o),"path-name":"table/highlight-current","source-code":`<template>
  <hl-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%" @current-change="handleCurrentChange">
    <hl-table-column type="index" width="50" />
    <hl-table-column property="date" label="\u65E5\u671F" width="120" />
    <hl-table-column property="name" label="\u59D3\u540D" width="120" />
    <hl-table-column property="address" label="\u5730\u5740" />
  </hl-table>
  <div style="margin-top: 20px">
    <hl-button @click="setCurrent(tableData[1])">\u9009\u4E2D\u7B2C\u4E8C\u884C</hl-button>
    <hl-button @click="setCurrent()">\u53D6\u6D88\u9009\u62E9</hl-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])
    const currentRow = ref(null)
    const singleTable = ref(null)

    const setCurrent = row => {
      singleTable.value.setCurrentRow(row)
    }
    const handleCurrentChange = val => {
      currentRow.value = val
    }

    return {
      tableData,
      currentRow,
      singleTable,
      setCurrent,
      handleCurrentChange,
    }
  },
})
<\/script>
`},{default:d(()=>[sn,cn]),_:1},8,["demos"]),pn,un,t(r,{fs:"",demos:w(o),"path-name":"table/selection","source-code":`<template>
  <hl-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <hl-table-column type="selection" width="55" />
    <hl-table-column label="\u65E5\u671F" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </hl-table-column>
    <hl-table-column prop="name" label="\u59D3\u540D" width="120" />
    <hl-table-column prop="address" label="\u5730\u5740" show-overflow-tooltip />
  </hl-table>
  <div style="margin-top: 20px">
    <hl-button @click="toggleSelection([tableData[1], tableData[2]])">\u5207\u6362\u7B2C\u4E8C\u3001\u7B2C\u4E09\u884C\u7684\u9009\u4E2D\u72B6\u6001</hl-button>
    <hl-button @click="toggleSelection()">\u53D6\u6D88\u9009\u62E9</hl-button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-08',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-06',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-07',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
    ])
    const multipleSelection = ref([])
    const multipleTable = ref(null)

    const toggleSelection = rows => {
      if (rows) {
        rows.forEach(row => {
          multipleTable.value.toggleRowSelection(row)
        })
      } else {
        multipleTable.value.clearSelection()
      }
    }
    const handleSelectionChange = val => {
      multipleSelection.value = val
    }

    return {
      tableData,
      multipleSelection,
      multipleTable,
      toggleSelection,
      handleSelectionChange,
    }
  },
})
<\/script>
`},{default:d(()=>[mn,hn]),_:1},8,["demos"]),bn,_n,t(r,{fs:"",demos:w(o),"path-name":"table/sortable","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
    <hl-table-column prop="date" label="\u65E5\u671F" sortable width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" sortable width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" :formatter="formatter" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])

    const formatter = row => {
      return row.address
    }

    return {
      tableData,
      formatter,
    }
  },
})
<\/script>
`},{default:d(()=>[fn,wn]),_:1},8,["demos"]),gn,vn,t(r,{fs:"",demos:w(o),"path-name":"table/filters","source-code":`<template>
  <hl-button class="m-r-md" @click="resetDateFilter">\u6E05\u9664\u65E5\u671F\u8FC7\u6EE4\u5668</hl-button>
  <hl-button @click="clearFilter">\u6E05\u9664\u6240\u6709\u8FC7\u6EE4\u5668</hl-button>
  <hl-table ref="filterTable" row-key="date" :data="tableData" style="width: 100%">
    <hl-table-column
      prop="date"
      label="\u65E5\u671F"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" :formatter="formatter" />
    <hl-table-column
      prop="tag"
      label="\u6807\u7B7E"
      width="100"
      :filters="[{ text: '\u5BB6', value: '\u5BB6' }, { text: '\u516C\u53F8', value: '\u516C\u53F8' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <hl-tag :type="scope.row.tag === '\u5BB6' ? 'primary' : 'success'" size="sm" disable-transitions>{{ scope.row.tag }}</hl-tag>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        tag: '\u5BB6',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
        tag: '\u516C\u53F8',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
        tag: '\u5BB6',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
        tag: '\u516C\u53F8',
      },
    ])
    const filterTable = ref(null)

    const resetDateFilter = () => {
      filterTable.value.clearFilter('date')
    }
    const clearFilter = () => {
      filterTable.value.clearFilter()
    }
    const formatter = row => {
      return row.address
    }
    const filterTag = (value, row) => {
      return row.tag === value
    }
    const filterHandler = (value, row, column) => {
      const property = column['property']
      return row[property] === value
    }

    return {
      tableData,
      filterTable,
      resetDateFilter,
      clearFilter,
      formatter,
      filterTag,
      filterHandler,
    }
  },
})
<\/script>
`},{default:d(()=>[yn,xn]),_:1},8,["demos"]),Dn,$n,t(r,{fs:"",demos:w(o),"path-name":"table/column-slot","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column label="\u65E5\u671F" width="180">
      <template #default="scope">
        <hl-icon><two-more /></hl-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </hl-table-column>
    <hl-table-column label="\u59D3\u540D" width="180">
      <template #default="scope">
        <hl-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>\u59D3\u540D: {{ scope.row.name }}</p>
            <p>\u4F4F\u5740: {{ scope.row.address }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <hl-tag size="sm">{{ scope.row.name }}</hl-tag>
            </div>
          </template>
        </hl-popover>
      </template>
    </hl-table-column>
    <hl-table-column label="\u64CD\u4F5C">
      <template #default="scope">
        <hl-button size="sm" @click="handleEdit(scope.$index, scope.row)">\u7F16\u8F91</hl-button>
        <hl-button size="sm" type="danger" @click="handleDelete(scope.$index, scope.row)">\u5220\u9664</hl-button>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { TwoMore } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoMore },
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])

    const handleEdit = (index, row) => {
      console.log(index, row)
    }
    const handleDelete = (index, row) => {
      console.log(index, row)
    }
    return {
      tableData,
      handleEdit,
      handleDelete,
    }
  },
})
<\/script>
`},{default:d(()=>[Cn,zn]),_:1},8,["demos"]),Sn,Tn,t(r,{fs:"",demos:w(o),"path-name":"table/expand","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column type="expand">
      <template #default="props">
        <hl-form label-position="left" inline label-suffix="\uFF1A" item-gap="var(--md)" class="demo-table-expand">
          <hl-form-item label="\u5546\u54C1\u540D\u79F0">
            <span>{{ props.row.name }}</span>
          </hl-form-item>
          <hl-form-item label="\u6240\u5C5E\u5E97\u94FA">
            <span>{{ props.row.shop }}</span>
          </hl-form-item>
          <hl-form-item label="\u5546\u54C1 ID">
            <span>{{ props.row.id }}</span>
          </hl-form-item>
          <hl-form-item label="\u5E97\u94FA ID">
            <span>{{ props.row.shopId }}</span>
          </hl-form-item>
          <hl-form-item label="\u5546\u54C1\u5206\u7C7B">
            <span>{{ props.row.category }}</span>
          </hl-form-item>
          <hl-form-item label="\u5E97\u94FA\u5730\u5740">
            <span>{{ props.row.address }}</span>
          </hl-form-item>
          <hl-form-item label="\u5546\u54C1\u63CF\u8FF0">
            <span>{{ props.row.desc }}</span>
          </hl-form-item>
        </hl-form>
      </template>
    </hl-table-column>
    <hl-table-column label="\u5546\u54C1 ID" prop="id" />
    <hl-table-column label="\u5546\u54C1\u540D\u79F0" prop="name" />
    <hl-table-column label="\u63CF\u8FF0" prop="desc" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: '12987122',
        name: '\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4',
        category: '\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF',
        desc: '\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF',
        shop: '\u738B\u5C0F\u864E\u592B\u59BB\u5E97',
        shopId: '10333',
      },
      {
        id: '12987123',
        name: '\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4',
        category: '\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF',
        desc: '\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF',
        shop: '\u738B\u5C0F\u864E\u592B\u59BB\u5E97',
        shopId: '10333',
      },
      {
        id: '12987125',
        name: '\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4',
        category: '\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF',
        desc: '\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF',
        shop: '\u738B\u5C0F\u864E\u592B\u59BB\u5E97',
        shopId: '10333',
      },
      {
        id: '12987126',
        name: '\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4',
        category: '\u6C5F\u6D59\u5C0F\u5403\u3001\u5C0F\u5403\u96F6\u98DF',
        desc: '\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF',
        shop: '\u738B\u5C0F\u864E\u592B\u59BB\u5E97',
        shopId: '10333',
      },
    ])

    return {
      tableData,
    }
  },
})
<\/script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .hl-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
`},{default:d(()=>[kn,In]),_:1},8,["demos"]),jn,Mn,t(r,{fs:"",demos:w(o),"path-name":"table/tree","source-code":`<template>
  <hl-table :data="tableData" row-key="id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <hl-table-column prop="date" label="\u65E5\u671F" sortable width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" sortable width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>

  <hl-table
    class="m-t-lg"
    :data="tableData1"
    row-key="id"
    border
    lazy
    :load="load"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
  >
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: 1,
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        id: 3,
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
        children: [
          {
            id: 31,
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
          },
        ],
      },
      {
        id: 4,
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])
    const tableData1 = ref([
      {
        id: 1,
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        id: 3,
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
        hasChildren: true,
      },
      {
        id: 4,
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])

    const load = (tree, treeNode, resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
          },
        ])
      }, 5000)
    }

    return {
      tableData,
      tableData1,
      load,
    }
  },
})
<\/script>
`},{default:d(()=>[Nn,Rn]),_:1},8,["demos"]),Fn,On,t(r,{fs:"",demos:w(o),"path-name":"table/custom-header","source-code":`<template>
  <hl-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <hl-table-column label="Date" prop="date" />
    <hl-table-column label="Name" prop="name" />
    <hl-table-column align="items-right">
      <template #header>
        <hl-input v-model="search" size="sm" placeholder="\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22" />
      </template>
      <template #default="scope">
        <hl-button size="sm" @click="handleEdit(scope.$index, scope.row)">Edit</hl-button>
        <hl-button size="sm" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</hl-button>
      </template>
    </hl-table-column>
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
      },
    ])
    const search = ref('')

    const handleEdit = (index, row) => {
      console.log(index, row)
    }
    const handleDelete = (index, row) => {
      console.log(index, row)
    }

    return {
      tableData,
      search,
      handleEdit,
      handleDelete,
    }
  },
})
<\/script>
`},{default:d(()=>[En]),_:1},8,["demos"]),Hn,An,t(r,{fs:"",demos:w(o),"path-name":"table/summary","source-code":`<template>
  <hl-table :data="tableData" border show-summary style="width: 100%">
    <hl-table-column prop="id" label="ID" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" />
    <hl-table-column prop="amount1" sortable label="\u6570\u503C 1" />
    <hl-table-column prop="amount2" sortable label="\u6570\u503C 2" />
    <hl-table-column prop="amount3" sortable label="\u6570\u503C 3" />
  </hl-table>
  <br>
  <hl-table
    :data="tableData"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px"
  >
    <hl-table-column prop="id" label="ID" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" />
    <hl-table-column prop="amount1" label="\u6570\u503C 1\uFF08\u5143\uFF09" />
    <hl-table-column prop="amount2" label="\u6570\u503C 2\uFF08\u5143\uFF09" />
    <hl-table-column prop="amount3" label="\u6570\u503C 3\uFF08\u5143\uFF09" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: '12987122',
        name: '\u738B\u5C0F\u864E',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
      },
      {
        id: '12987123',
        name: '\u738B\u5C0F\u864E',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      },
      {
        id: '12987124',
        name: '\u738B\u5C0F\u864E',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      },
      {
        id: '12987125',
        name: '\u738B\u5C0F\u864E',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      },
      {
        id: '12987126',
        name: '\u738B\u5C0F\u864E',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      },
    ])

    const getSummaries = param => {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '\u603B\u4EF7'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' \u5143'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }

    return {
      tableData,
      getSummaries,
    }
  },
})
<\/script>
`},{default:d(()=>[Ln,Vn]),_:1},8,["demos"]),Bn,Kn,t(r,{fs:"",demos:w(o),"path-name":"table/span-method","source-code":`<template>
  <div>
    <hl-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
      <hl-table-column prop="id" label="ID" width="180" />
      <hl-table-column prop="name" label="\u59D3\u540D" />
      <hl-table-column prop="amount1" sortable label="\u6570\u503C 1" />
      <hl-table-column prop="amount2" sortable label="\u6570\u503C 2" />
      <hl-table-column prop="amount3" sortable label="\u6570\u503C 3" />
    </hl-table>

    <hl-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <hl-table-column prop="id" label="ID" width="180" />
      <hl-table-column prop="name" label="\u59D3\u540D" />
      <hl-table-column prop="amount1" label="\u6570\u503C 1\uFF08\u5143\uFF09" />
      <hl-table-column prop="amount2" label="\u6570\u503C 2\uFF08\u5143\uFF09" />
      <hl-table-column prop="amount3" label="\u6570\u503C 3\uFF08\u5143\uFF09" />
    </hl-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        id: '12987122',
        name: '\u738B\u5C0F\u864E',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
      },
      {
        id: '12987123',
        name: '\u738B\u5C0F\u864E',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
      },
      {
        id: '12987124',
        name: '\u738B\u5C0F\u864E',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
      },
      {
        id: '12987125',
        name: '\u738B\u5C0F\u864E',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
      },
      {
        id: '12987126',
        name: '\u738B\u5C0F\u864E',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
      },
    ])

    const arraySpanMethod = ({ rowIndex, columnIndex }) => {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    }

    const objectSpanMethod = ({ rowIndex, columnIndex }) => {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
      }
    }

    return {
      tableData,
      arraySpanMethod,
      objectSpanMethod,
    }
  },
})
<\/script>
`},{default:d(()=>[Wn,Pn]),_:1},8,["demos"]),Qn,Xn,t(r,{fs:"",demos:w(o),"path-name":"table/indexable","source-code":`<template>
  <hl-table :data="tableData" style="width: 100%">
    <hl-table-column type="index" :index="indexMethod" />
    <hl-table-column prop="date" label="\u65E5\u671F" width="180" />
    <hl-table-column prop="name" label="\u59D3\u540D" width="180" />
    <hl-table-column prop="address" label="\u5730\u5740" />
  </hl-table>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: '2016-05-02',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
        zip: 200333,
        tag: '\u5BB6',
      },
      {
        date: '2016-05-04',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
        zip: 200333,
        tag: '\u516C\u53F8',
      },
      {
        date: '2016-05-01',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
        zip: 200333,
        tag: '\u5BB6',
      },
      {
        date: '2016-05-03',
        name: '\u738B\u5C0F\u864E',
        province: '\u4E0A\u6D77',
        city: '\u666E\u9640\u533A',
        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
        zip: 200333,
        tag: '\u516C\u53F8',
      },
    ])

    const indexMethod = index => {
      return index * 2
    }

    return {
      tableData,
      indexMethod,
    }
  },
})
<\/script>
`},{default:d(()=>[Un,qn]),_:1},8,["demos"]),Gn]),t(p)],64)}}};export{na as default};
