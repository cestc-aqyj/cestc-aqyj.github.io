import{p as a}from"./page.cac0d9e1.js";import{W as n,o as s,c as e,v as t,s as i}from"./vue.ddaf237d.js";import{_ as o}from"./index.19addb43.js";import"./hongluan-business.f987da2d.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.b6c88e45.js";const r={class:"page-container page-guide"};var d=o({data(){return{lang:this.$route.meta.lang}},computed:{langConfig(){return a.filter((a=>a.lang===this.lang))[0].pages.guide},navsData(){return[{path:"/design",name:this.langConfig[1]},{path:"/nav",name:this.langConfig[2]}]}}},[["render",function(a,o,d,l,g,u){const m=n("side-nav"),p=n("el-col"),c=n("router-view"),f=n("el-row");return s(),e("div",r,[t(f,null,{default:i((()=>[t(p,{xs:24,sm:5},{default:i((()=>[t(m,{data:u.navsData,base:`/${g.lang}/guide`},null,8,["data","base"])])),_:1}),t(p,{xs:24,sm:19},{default:i((()=>[t(c,{class:"content"})])),_:1})])),_:1})])}]]);export{d as default};
