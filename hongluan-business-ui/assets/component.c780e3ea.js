import{_ as o,n as e,e as t}from"./index.c59879b2.js";import{z as r}from"./hongluan-business.74ca0624.js";import{W as n,o as s,c as a,g as l,F as c,i,v as h,s as d,Y as m}from"./vue.b9c48aee.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.24045f27.js";const p={class:"doc-wrap fixed-sidebar fixed-header full-header"},u={class:"doc-main"},f={class:"doc-sidebar"},v={class:"doc-page-content"};var b=o({data(){return{lang:this.$route.meta.lang,navsData:e,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},watch:{"$route.path"(){}},created(){t.$on("nav-fade",(o=>{this.navFaded=o}))},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".scrollbar-wrap"),this.throttledScrollHandler=r(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),document.body.classList.add("is-component"),this.addContentObserver()},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler),this.observer.disconnect()},methods:{addContentObserver(){this.observer=new MutationObserver(((o,e)=>{for(const t of o)"childList"===t.type&&(this.renderAnchorHref(),this.goAnchor())})),this.observer.observe(document.querySelector(".doc-page-content"),{childList:!0})},renderAnchorHref(){if(/changelog/g.test(location.href))return;const o=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),e=location.href.split("#").splice(0,2).join("#");[].slice.call(o).forEach((o=>{const t=o.getAttribute("href");0===t.indexOf("#")&&(o.href=e+t)}))},goAnchor(){if(location.href.match(/#/g).length>1){const o=location.href.match(/#[^#]+$/g);if(!o)return;const e=document.querySelector(o[0]);if(!e)return;setTimeout((()=>{this.componentScrollBox.scrollTop=e.offsetTop}),50)}},handleScroll(){const o=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>o&&(this.showHeader=this.scrollTop>o),0===o&&(this.showHeader=!0),this.navFaded||t.$emit("fade-nav"),this.scrollTop=o}}},[["render",function(o,e,t,r,b,g){const S=n("main-header"),B=n("side-nav"),x=n("hl-scrollbar"),w=n("router-view");return s(),a(m,null,["play"!==b.lang?(s(),l(S,{key:0})):c("",!0),i("div",p,[i("main",u,[i("aside",f,[h(x,{ref:"componentScrollBar"},{default:d((()=>[h(B,{data:b.navsData[b.lang],base:`/${b.lang}/component`},null,8,["data","base"])])),_:1},512)]),i("div",v,[h(w)])])])],64)}]]);export{b as default};