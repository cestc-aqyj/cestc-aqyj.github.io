import{p as a}from"./page.cac0d9e1.js";import{W as n,o as s,c as e,v as t,s as i}from"./vue.3fc01528.js";import{_ as o}from"./index.0d173d5d.js";import"./hongluan-business.f987da2d.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.0bcdf856.js";const r={class:"page-container page-guide"};var l=o({data(){return{lang:this.$route.meta.lang}},computed:{langConfig(){return a.filter((a=>a.lang===this.lang))[0].pages.guide},navsData(){return[{path:"/design",name:this.langConfig[1]},{path:"/nav",name:this.langConfig[2]}]}}},[["render",function(a,o,l,d,g,u){const c=n("side-nav"),f=n("el-col"),m=n("router-view"),p=n("el-row");return s(),e("div",r,[t(p,null,{default:i((()=>[t(f,{xs:24,sm:5},{default:i((()=>[t(c,{data:u.navsData,base:`/${g.lang}/guide`},null,8,["data","base"])])),_:1}),t(f,{xs:24,sm:19},{default:i((()=>[t(m,{class:"content"})])),_:1})])),_:1})])}]]);export{l as default};
