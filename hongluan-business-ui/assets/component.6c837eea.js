import{_ as e,n as o,e as t}from"./index.eba9ea37.js";import{C as r}from"./hongluan-business.9ccb0d80.js";import{W as n,o as s,c as a,a as l,x as c,i,v as h,s as d,Y as m}from"./vue.3db4454d.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.e873a753.js";const p={class:"doc-wrap fixed-sidebar fixed-header full-header"},u={class:"doc-main"},f={class:"doc-sidebar"},v={class:"doc-page-content"};var b=e({data(){return{lang:this.$route.meta.lang,navsData:o,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},watch:{"$route.path"(){}},created(){t.$on("nav-fade",(e=>{this.navFaded=e}))},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".scrollbar-wrap"),this.throttledScrollHandler=r(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),document.body.classList.add("is-component"),this.addContentObserver()},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler),this.observer.disconnect()},methods:{addContentObserver(){this.observer=new MutationObserver(((e,o)=>{for(const t of e)"childList"===t.type&&(this.renderAnchorHref(),this.goAnchor())})),this.observer.observe(document.querySelector(".doc-page-content"),{childList:!0})},renderAnchorHref(){if(/changelog/g.test(location.href))return;const e=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),o=location.href.split("#").splice(0,2).join("#");[].slice.call(e).forEach((e=>{const t=e.getAttribute("href");0===t.indexOf("#")&&(e.href=o+t)}))},goAnchor(){if(location.href.match(/#/g).length>1){const e=location.href.match(/#[^#]+$/g);if(!e)return;const o=document.querySelector(e[0]);if(!o)return;setTimeout((()=>{this.componentScrollBox.scrollTop=o.offsetTop}),50)}},handleScroll(){const e=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>e&&(this.showHeader=this.scrollTop>e),0===e&&(this.showHeader=!0),this.navFaded||t.$emit("fade-nav"),this.scrollTop=e}}},[["render",function(e,o,t,r,b,g){const S=n("main-header"),x=n("side-nav"),B=n("hl-scrollbar"),w=n("router-view");return s(),a(m,null,["play"!==b.lang?(s(),l(S,{key:0})):c("",!0),i("div",p,[i("main",u,[i("aside",f,[h(B,{ref:"componentScrollBar"},{default:d((()=>[h(x,{data:b.navsData[b.lang],base:`/${b.lang}/component`},null,8,["data","base"])])),_:1},512)]),i("div",v,[h(w)])])])],64)}]]);export{b as default};
