import{x as S,y as g}from"./hongluan.9c38f5fe.js";import{_ as x,n as y}from"./index.8b46b8dd.js";import{E as e,o as i,k as h,H as s,x as B,Q as r}from"./vue.59100cc3.js";import"./highlight.e2508551.js";import"./hongluan-icons.a5a253be.js";const t=S();t.$off=t.off;t.$on=t.on;t.$emit=t.emit;const $={data(){return{lang:this.$route.meta.lang,navsData:y,scrollTop:0,showHeader:!0,componentScrollBar:null,componentScrollBoxElement:null}},computed:{showBackToTop(){return!this.$route.path.match(/backtop/)}},watch:{"$route.path"(){}},created(){t.$on("nav-fade",o=>{this.navFaded=o})},mounted(){this.componentScrollBar=this.$refs.componentScrollBar,this.componentScrollBox=this.componentScrollBar.$el.querySelector(".scrollbar-wrap"),this.throttledScrollHandler=g(300,this.handleScroll),this.componentScrollBox.addEventListener("scroll",this.throttledScrollHandler),document.body.classList.add("is-component"),this.addContentObserver()},unmounted(){document.body.classList.remove("is-component")},beforeUnmount(){this.componentScrollBox.removeEventListener("scroll",this.throttledScrollHandler),this.observer.disconnect()},methods:{addContentObserver(){this.observer=new MutationObserver((o,n)=>{for(const l of o)l.type==="childList"&&(this.renderAnchorHref(),this.goAnchor())}),this.observer.observe(document.querySelector(".doc-content"),{childList:!0})},renderAnchorHref(){if(/changelog/g.test(location.href))return;const o=document.querySelectorAll("h2 a,h3 a,h4 a,h5 a"),n=location.href.split("#").splice(0,2).join("#");[].slice.call(o).forEach(l=>{const a=l.getAttribute("href");a.indexOf("#")===0&&(l.href=n+a)})},goAnchor(){if(location.href.match(/#/g).length>1){const o=location.href.match(/#[^#]+$/g);if(!o)return;const n=document.querySelector(o[0]);if(!n)return;setTimeout(()=>{this.componentScrollBox.scrollTop=n.offsetTop},50)}},handleScroll(){const o=this.componentScrollBox.scrollTop;this.showHeader!==this.scrollTop>o&&(this.showHeader=this.scrollTop>o),o===0&&(this.showHeader=!0),this.navFaded||t.$emit("fade-nav"),this.scrollTop=o}}};function T(o,n,l,a,c,w){const d=e("main-header"),m=e("side-nav"),u=e("hl-scrollbar"),f=e("hl-aside"),p=e("router-view"),_=e("hl-main"),b=e("hl-container"),v=e("hl-layout");return i(),h(v,{boxed:!0,"fixed-aside":!0,"fixed-header":!0,"fixed-sub-header":!1,"full-header":!0,"full-sub-header":!1},{default:s(()=>[c.lang!=="play"?(i(),h(d,{key:0})):B("",!0),r(b,null,{default:s(()=>[r(f,null,{default:s(()=>[r(u,{ref:"componentScrollBar"},{default:s(()=>[r(m,{data:c.navsData[c.lang],base:`/${c.lang}/component`},null,8,["data","base"])]),_:1},512)]),_:1}),r(_,{class:"doc-content"},{default:s(()=>[r(p)]),_:1})]),_:1})]),_:1})}var k=x($,[["render",T]]);export{k as default};