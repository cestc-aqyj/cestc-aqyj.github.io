import{p as a}from"./page.cac0d9e1.js";import{H as e,o as n,C as t,v as s,P as i}from"./vue.69b6befa.js";import{_ as o}from"./index.f86c4400.js";import"./hongluan.17b69477.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.f9afdbe4.js";const r={class:"page-container page-guide"};var l=o({data(){return{lang:this.$route.meta.lang}},computed:{langConfig(){return a.filter((a=>a.lang===this.lang))[0].pages.guide},navsData(){return[{path:"/design",name:this.langConfig[1]},{path:"/nav",name:this.langConfig[2]}]}}},[["render",function(a,o,l,g,u,d){const f=e("side-nav"),m=e("el-col"),p=e("router-view"),c=e("el-row");return n(),t("div",r,[s(c,null,{default:i((()=>[s(m,{xs:24,sm:5},{default:i((()=>[s(f,{data:d.navsData,base:`/${u.lang}/guide`},null,8,["data","base"])])),_:1}),s(m,{xs:24,sm:19},{default:i((()=>[s(p,{class:"content"})])),_:1})])),_:1})])}]]);export{l as default};