import{_ as e,n as o,e as t}from"./index.da01531f.js";import{B as r}from"./hongluan-business.f987da2d.js";import{W as n,o as l,b as a,s,x as c,v as h}from"./vue.6b0aa35b.js";import"./highlight.5ad4a187.js";import"./hongluan-icons.22da276b.js";var i=e({data(){return{lang:this.$route.meta.lang,navsData:o,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},watch:{"$route.path"(){}},created(){t.$on("nav-fade",(e=>{this.navFaded=e}))},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".scrollbar-wrap"),this.throttledScrollHandler=r(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),document.body.classList.add("is-component"),this.addContentObserver()},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler),this.observer.disconnect()},methods:{addContentObserver(){this.observer=new MutationObserver(((e,o)=>{for(const t of e)"childList"===t.type&&(this.renderAnchorHref(),this.goAnchor())})),this.observer.observe(document.querySelector(".doc-content"),{childList:!0})},renderAnchorHref(){if(/changelog/g.test(location.href))return;const e=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),o=location.href.split("#").splice(0,2).join("#");[].slice.call(e).forEach((e=>{const t=e.getAttribute("href");0===t.indexOf("#")&&(e.href=o+t)}))},goAnchor(){if(location.href.match(/#/g).length>1){const e=location.href.match(/#[^#]+$/g);if(!e)return;const o=document.querySelector(e[0]);if(!o)return;setTimeout((()=>{this.componentScrollBox.scrollTop=o.offsetTop}),50)}},handleScroll(){const e=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>e&&(this.showHeader=this.scrollTop>e),0===e&&(this.showHeader=!0),this.navFaded||t.$emit("fade-nav"),this.scrollTop=e}}},[["render",function(e,o,t,r,i,d){const u=n("main-header"),m=n("side-nav"),f=n("hl-scrollbar"),p=n("hl-aside"),v=n("router-view"),b=n("hl-main"),S=n("hl-container"),g=n("hl-layout");return l(),a(g,{"fixed-aside":!0,"fixed-header":!0,"full-header":!0},{default:s((()=>["play"!==i.lang?(l(),a(u,{key:0})):c("",!0),h(S,null,{default:s((()=>[h(p,null,{default:s((()=>[h(f,{ref:"componentScrollBar"},{default:s((()=>[h(m,{data:i.navsData[i.lang],base:`/${i.lang}/component`},null,8,["data","base"])])),_:1},512)])),_:1}),h(b,{class:"doc-content"},{default:s((()=>[h(v)])),_:1})])),_:1})])),_:1})}]]);export{i as default};
