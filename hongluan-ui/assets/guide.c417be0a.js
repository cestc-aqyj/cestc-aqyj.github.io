import{p as g}from"./page.cac0d9e1.js";import{E as e,o as _,c as p,Q as a,H as n}from"./vue.59100cc3.js";import{_ as d}from"./index.8b46b8dd.js";import"./hongluan.9c38f5fe.js";import"./highlight.e2508551.js";import"./hongluan-icons.a5a253be.js";const u={data(){return{lang:this.$route.meta.lang}},computed:{langConfig(){return g.filter(t=>t.lang===this.lang)[0].pages.guide},navsData(){return[{path:"/design",name:this.langConfig[1]},{path:"/nav",name:this.langConfig[2]}]}}},m={class:"page-container page-guide"};function f(t,h,v,j,o,r){const c=e("side-nav"),s=e("el-col"),i=e("router-view"),l=e("el-row");return _(),p("div",m,[a(l,null,{default:n(()=>[a(s,{xs:24,sm:5},{default:n(()=>[a(c,{data:r.navsData,base:`/${o.lang}/guide`},null,8,["data","base"])]),_:1}),a(s,{xs:24,sm:19},{default:n(()=>[a(i,{class:"content"})]),_:1})]),_:1})])}var E=d(u,[["render",f]]);export{E as default};
