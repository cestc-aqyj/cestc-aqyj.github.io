import{p as g}from"./page.cac0d9e1.js";import{Y as e,L as _,W as d,a2 as a,a0 as n}from"./vue.a2bb788b.js";import{_ as p}from"./index.1be8ef67.js";import"./hongluan.bb564fd4.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.da8bad7b.js";const u={data(){return{lang:this.$route.meta.lang}},computed:{langConfig(){return g.filter(t=>t.lang===this.lang)[0].pages.guide},navsData(){return[{path:"/design",name:this.langConfig[1]},{path:"/nav",name:this.langConfig[2]}]}}},m={class:"page-container page-guide"};function f(t,h,b,v,o,r){const i=e("side-nav"),s=e("el-col"),c=e("router-view"),l=e("el-row");return _(),d("div",m,[a(l,null,{default:n(()=>[a(s,{xs:24,sm:5},{default:n(()=>[a(i,{data:r.navsData,base:`/${o.lang}/guide`},null,8,["data","base"])]),_:1}),a(s,{xs:24,sm:19},{default:n(()=>[a(c,{class:"content"})]),_:1})]),_:1})])}var D=p(u,[["render",f]]);export{D as default};