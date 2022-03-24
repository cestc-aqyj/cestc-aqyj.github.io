var J=Object.defineProperty;var F=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var U=(s,e,t)=>e in s?J(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,V=(s,e)=>{for(var t in e||(e={}))W.call(e,t)&&U(s,t,e[t]);if(F)for(var t of F(e))z.call(e,t)&&U(s,t,e[t]);return s};var u=(s,e,t)=>(U(s,typeof e!="symbol"?e+"":e,t),t);import{c as O,u as q,a as x,F as h,r as D,b as N,w as A,H as S,o as p,d,e as G,f as M,g as Q,h as Y,i as X,j as f,t as E,k as b,l as y,m as L,n as P,p as B,q as Z,s as ee,v as te,x as se,y as ne,R as ie,z as oe,A as re}from"./vendor.f1cf90c7.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};ae();const le="modulepreload",R={},ce="./",I=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${ce}${i}`,i in R)return;R[i]=!0;const n=i.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":le,n||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),n)return new Promise((r,m)=>{a.addEventListener("load",r),a.addEventListener("error",m)})})).then(()=>e())},w=(s,e,t)=>(e=e?`@${e}`:"",`https://unpkg.com/${s}${e}${t}`),ue=(s,e,t)=>(e=e?`@${e}`:"",`https://cdn.jsdelivr.net/npm/${s}${e}${t}`),pe=(s,e,t)=>t,de=s=>{const e=w("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=w("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},T=({vue:s,hongluanUI:e,hongluanBusinessUI:t}={})=>Object.fromEntries(Object.entries({vue:{pkg:"@vue/runtime-dom",version:s,path:"/dist/runtime-dom.esm-browser.js",source:"jsdelivr"},"@vue/shared":{version:s,path:"/dist/shared.esm-bundler.js",source:"jsdelivr"},"hongluan-ui/":{pkg:"hongluan-ui",version:e,path:"/",source:"jsdelivr"},"hongluan-ui":{version:e,path:"/dist/index.full.mjs",source:"jsdelivr"},"hongluan-business-ui/":{pkg:"hongluan-business-ui",version:t,path:"/",source:"jsdelivr"},"hongluan-business-ui":{version:t,path:"/dist/index.full.mjs",source:"jsdelivr"},"@hongluan-ui/icons":{path:"/dist/index.mjs",source:"unpkg"}}).map(([n,o])=>{var a;return[n,(o.source?o.source==="unpkg"?w:ue:pe)((a=o.pkg)!=null?a:n,o.version,o.path)]})),$=s=>q(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,me=()=>{let s=$("vue");return O(()=>s.value.filter(e=>x(e,"3.2.0",">=")))},he=()=>{let s=$("hongluan-ui");return O(()=>s.value.filter(e=>x(e,"1.5.0",">=")))},fe=()=>{let s=$("hongluan-business-ui");return O(()=>s.value.filter(e=>x(e,"3.2.0",">=")))};function ge(s){return btoa(unescape(encodeURIComponent(s)))}function ve(s){return decodeURIComponent(escape(atob(s)))}const C="PlaygroundMain.vue",j="App.vue",H="hongluan-ui.js",_e=`
<script setup>
import App from './App.vue'
import { setupHongluanUI } from './${H}'
setupHongluanUI()
<\/script>

<template>
  <App />
</template>`.trim(),be=`
<template>
  <!-- Hongluan UI icons -->
  <hl-icon><FillUser /></hl-icon>

  <h1>{{ msg }}</h1>
  <hl-input v-model="msg" class="m-b-md"/>
  <br><br>
  <hb-avatar-list :data="list"></hb-avatar-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FillUser } from '@hongluan-ui/icons'

const msg = ref('Hello World!')
const list = ref([
  {
    url: 'https://iknow-pic.cdn.bcebos.com/b64543a98226cffcdd85b189bb014a90f603ea5a',
  },
  {
    url: 'https://iknow-pic.cdn.bcebos.com/a8773912b31bb05135ebbd13347adab44aede03a',
    title: '\u5934\u50CF\u4E8C'
  },
  {
    url: 'https://iknow-pic.cdn.bcebos.com/b7fd5266d01609240aedac20d60735fae7cd34c4',
    title: '\u5934\u50CF\u4E09'
  },
  {
    url: 'https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ecfa036a36249759ee3c6ddbc1',
    title: '\u5934\u50CF\u56DB'
  },
])
<\/script>
`.trim(),ye=s=>`
import { getCurrentInstance } from 'vue'
import HongluanUI from 'hongluan-ui'
import HongluanBusinessUI from 'hongluan-business-ui'

let installed = false
await loadStyle()

export function setupHongluanUI() {
  if(installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(HongluanUI)
  instance.appContext.app.use(HongluanBusinessUI)

  parent.postMessage('loading-finished')
  installed = true
}

export async function loadStyle() {
  const head = document.getElementsByTagName('head')[0]
  const pHl = new Promise((resolve) => {
    const linkHl = document.createElement('link')
    linkHl.rel = 'stylesheet'
    linkHl.href = '${w("hongluan-ui",s,"/dist/index.css")}'
    linkHl.onload = resolve
    head.appendChild(linkHl)
  })
  
  const pHb = new Promise((resolve) => {
    const linkHb = document.createElement('link')
    linkHb.rel = 'stylesheet'
    linkHb.href = '${w("hongluan-business-ui",s,"/dist/index.css")}'
    linkHb.onload = resolve
    head.appendChild(linkHb)
  })
  return Promise.all([pHl, pHb])
}
`,K=!0;class Ie{constructor({serializedState:e="",versions:t={vue:"latest",hongluanUI:"latest",hongluanBusinessUI:"latest"}}){u(this,"state");u(this,"compiler");u(this,"options");u(this,"versions");u(this,"initialShowOutput",!1);u(this,"initialOutputMode","preview");u(this,"pendingCompiler",null);let i={};if(e){const n=JSON.parse(ve(e));for(const o of Object.keys(n))i[o]=new h(o,n[o])}else i[j]=new h(j,be);i[C]=new h(C,_e,K),this.state=D({mainFile:C,files:i,activeFile:i[j],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}async init(){await this.setVueVersion(this.versions.vue),this.state.files[H]=new h(H,ye("latest").trim(),K);for(const e of Object.values(this.state.files))N(this,e);A(()=>N(this,this.state.activeFile))}setActive(e){this.state.files[e].hidden||(this.state.activeFile=this.state.files[e])}addFile(e){const t=typeof e=="string"?new h(e):e;this.state.files[t.filename]=t,this.setActive(t.filename)}deleteFile(e){if(e===H){S.warning("You cannot remove it, because Hongluan UI requires it.");return}confirm(`Are you sure you want to delete ${e}?`)&&(this.state.activeFile.filename===e&&this.setActive(j),delete this.state.files[e])}simplifyImportMaps(){const e=this.getImportMap(),t=Object.keys(T({}));return e.imports=Object.fromEntries(Object.entries(e.imports).filter(([i])=>!t.includes(i))),JSON.stringify(e)}serialize(){const e=JSON.stringify(Object.fromEntries(Object.entries(this.getFiles()).map(([t,i])=>{if(t==="import-map.json")try{const n=this.simplifyImportMaps();return[t,n]}catch{}return[t,i]})));return`#${ge(e)}`}getFiles(){const e={};for(const t of Object.values(this.state.files))t.hidden||(e[t.filename]=t.code);return e}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new h("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}addDeps(){const e=this.getImportMap();e.imports=V(V({},e.imports),T({vue:this.versions.vue,hongluanUI:this.versions.hongluanUI,hongluanBusinessUI:this.versions.hongluanBusinessUI})),this.setImportMap(e)}async setVersion(e,t){switch(e){case"hongluanUI":await this.setHongluanUIVersion(t);break;case"hongluanBusinessUI":await this.setHongluanBusinessUIVersion(t);break;case"vue":await this.setVueVersion(t);break}}async setHongluanUIVersion(e){this.versions.hongluanUI=e,this.addDeps()}async setHongluanBusinessUIVersion(e){this.versions.hongluanBusinessUI=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:i}=de(e);this.pendingCompiler=I(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=i,this.versions.vue=e,this.addDeps(),console.info(`[@vue/repl] Now using Vue version: ${e}`)}}var we="./assets/logo.c79b58f2.svg",ke=(s,e)=>{const t=s.__vccOpts||s;for(const[i,n]of e)t[i]=n;return t};const je={},He={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},Ue=G('<g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),Ve=[Ue];function Oe(s,e){return p(),d("svg",He,Ve)}var xe=ke(je,[["render",Oe]]);const Se=f("img",{alt:"logo",src:we},null,-1),Ee=f("span",null,"Hongluan Playground",-1),Le={class:"mr-1"},$e=M({props:{store:null},setup(s){const e="1.0.6",t=D({hongluanUI:{text:"Hongluan UI",published:he(),active:s.store.versions.hongluanUI},hongluanBusinessUI:{text:"Hongluan Business UI",published:fe(),active:s.store.versions.hongluanBusinessUI},vue:{text:"Vue",published:me(),active:s.store.versions.vue}});async function i(o,a){t[o].active="loading...",await s.store.setVersion(o,a),t[o].active=a}async function n(){await navigator.clipboard.writeText(location.href),S.success("Sharable URL has been copied to clipboard.")}return(o,a)=>{const r=Q,m=Y,g=X;return p(),d("nav",null,[f("h5",null,[Se,Ee,f("small",null," ("+E(b(e))+")",1)]),y(g,{class:"links",gap:"var(--md)"},{default:L(()=>[(p(!0),d(P,null,B(b(t),(v,k)=>(p(),d("div",{key:k,class:"flex items-center"},[f("span",Le,E(v.text)+":",1),y(m,{"model-value":v.active,size:"sm",style:{width:"150px"},"onUpdate:modelValue":c=>i(k,c)},{default:L(()=>[(p(!0),d(P,null,B(v.published,c=>(p(),Z(r,{key:c,value:c},{default:L(()=>[ee(E(c),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["model-value","onUpdate:modelValue"])]))),128)),f("button",{class:"share",onClick:n},[y(xe)])]),_:1})])}}});const Ce={key:0,class:"antialiased"},Fe={key:1,class:"loading","loading-text":"Loading..."},De=M({setup(s){const e=te(!0),t={script:{reactivityTransform:!0}},i=new Ie({serializedState:location.hash.slice(1)});i.init().then(()=>e.value=!1);const n=r=>{if((r.ctrlKey||r.metaKey)&&r.code==="KeyS"){r.preventDefault();return}if((r.altKey||r.ctrlKey)&&r.shiftKey&&r.code==="KeyF"){r.preventDefault(),a();return}};let o=!1;const a=async()=>{let r;o||({close:r}=S.info("Loading Prettier..."));const[m,g,v,k]=await Promise.all([I(()=>import("./standalone.63a608c8.js").then(function(l){return l.s}),["assets/standalone.63a608c8.js","assets/vendor.f1cf90c7.js"]).then(l=>l.format),I(()=>import("./parser-html.e39ab97c.js").then(function(l){return l.p}),["assets/parser-html.e39ab97c.js","assets/vendor.f1cf90c7.js"]).then(l=>l.default),I(()=>import("./parser-typescript.6250c18d.js").then(function(l){return l.p}),["assets/parser-typescript.6250c18d.js","assets/vendor.f1cf90c7.js"]).then(l=>l.default),I(()=>import("./parser-babel.3b3d912e.js").then(function(l){return l.p}),["assets/parser-babel.3b3d912e.js","assets/vendor.f1cf90c7.js"]).then(l=>l.default)]);o=!0,r==null||r();const c=i.state.activeFile;let _;if(c.filename.endsWith(".vue"))_="vue";else if(c.filename.endsWith(".js"))_="babel";else if(c.filename.endsWith(".ts"))_="typescript";else if(c.filename.endsWith(".json"))_="json";else return;c.code=m(c.code,{parser:_,plugins:[g,v,k],semi:!1,singleQuote:!0})};return se(),A(()=>history.replaceState({},"",i.serialize())),window.addEventListener("message",r=>{typeof r.data=="string"&&r.data==="loading-finished"&&NProgress.done()},!1),NProgress.start(),(r,m)=>{const g=ne;return e.value?oe((p(),d("div",Fe,null,512)),[[g,!0]]):(p(),d("div",Ce,[y($e,{store:b(i)},null,8,["store"]),y(b(ie),{ref:"repl",store:b(i),"show-compile-output":"","auto-resize":"","sfc-options":t,"clear-console":!1,onKeydown:n},null,8,["store"])]))}}});window.VUE_DEVTOOLS_CONFIG={defaultSelectedAppId:"repl"};NProgress.configure({showSpinner:!1});re(De).mount("#app");
