import{C as S,D as g}from"./hongluan.bb564fd4.js";import{_ as x,n as B}from"./index.1be8ef67.js";import{Y as o,L as i,z as h,a0 as s,a as $,a2 as r}from"./vue.a2bb788b.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.da8bad7b.js";const t=S();t.$off=t.off;t.$on=t.on;t.$emit=t.emit;const y={data(){return{lang:this.$route.meta.lang,navsData:B,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},watch:{"$route.path"(){}},created(){t.$on("nav-fade",e=>{this.navFaded=e})},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".scrollbar-wrap"),this.throttledScrollHandler=g(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),document.body.classList.add("is-component"),this.addContentObserver()},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler),this.observer.disconnect()},methods:{addContentObserver(){this.observer=new MutationObserver((e,n)=>{for(const l of e)l.type==="childList"&&(this.renderAnchorHref(),this.goAnchor())}),this.observer.observe(document.querySelector(".doc-content"),{childList:!0})},renderAnchorHref(){if(/changelog/g.test(location.href))return;const e=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),n=location.href.split("#").splice(0,2).join("#");[].slice.call(e).forEach(l=>{const c=l.getAttribute("href");c.indexOf("#")===0&&(l.href=n+c)})},goAnchor(){if(location.href.match(/#/g).length>1){const e=location.href.match(/#[^#]+$/g);if(!e)return;const n=document.querySelector(e[0]);if(!n)return;setTimeout(()=>{this.componentScrollBox.scrollTop=n.offsetTop},50)}},handleScroll(){const e=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>e&&(this.showHeader=this.scrollTop>e),e===0&&(this.showHeader=!0),this.navFaded||t.$emit("fade-nav"),this.scrollTop=e}}};function T(e,n,l,c,a,w){const d=o("main-header"),m=o("side-nav"),u=o("hl-scrollbar"),f=o("hl-aside"),p=o("router-view"),_=o("hl-main"),b=o("hl-container"),v=o("hl-layout");return i(),h(v,{boxed:!0,"fixed-aside":!0,"fixed-header":!0,"fixed-sub-header":!1,"full-header":!0,"full-sub-header":!1},{default:s(()=>[a.lang!=="play"?(i(),h(d,{key:0})):$("",!0),r(b,null,{default:s(()=>[r(f,null,{default:s(()=>[r(u,{ref:"componentScrollBar"},{default:s(()=>[r(m,{data:a.navsData[a.lang],base:`/${a.lang}`},null,8,["data","base"])]),_:1},512)]),_:1}),r(_,{class:"doc-content"},{default:s(()=>[r(p)]),_:1})]),_:1})]),_:1})}var E=x(y,[["render",T]]);export{E as default};
