import{p as g}from"./page.cac0d9e1.js";import{H as e,o as _,C as d,v as a,M as n}from"./vue.450bc1d0.js";import{_ as p}from"./index.fedb9125.js";import"./hongluan.5b0660e6.js";import"./highlight.e2508551.js";import"./hongluan-icons.7d79c200.js";const u={data(){return{lang:this.$route.meta.lang}},computed:{langConfig(){return g.filter(t=>t.lang===this.lang)[0].pages.guide},navsData(){return[{path:"/design",name:this.langConfig[1]},{path:"/nav",name:this.langConfig[2]}]}}},m={class:"page-container page-guide"};function f(t,h,v,j,o,r){const i=e("side-nav"),s=e("el-col"),c=e("router-view"),l=e("el-row");return _(),d("div",m,[a(l,null,{default:n(()=>[a(s,{xs:24,sm:5},{default:n(()=>[a(i,{data:r.navsData,base:`/${o.lang}/guide`},null,8,["data","base"])]),_:1}),a(s,{xs:24,sm:19},{default:n(()=>[a(c,{class:"content"})]),_:1})]),_:1})])}var H=p(u,[["render",f]]);export{H as default};
