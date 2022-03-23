var T=Object.defineProperty;var S=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var w=(s,e,t)=>e in s?T(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,k=(s,e)=>{for(var t in e||(e={}))z.call(e,t)&&w(s,t,e[t]);if(S)for(var t of S(e))q.call(e,t)&&w(s,t,e[t]);return s};var a=(s,e,t)=>(w(s,typeof e!="symbol"?e+"":e,t),t);import{c as I,u as G,a as H,F as u,r as $,b as C,w as F,H as L,o as l,d as c,e as K,f as M,g as W,h as Y,i as Q,j as p,t as U,k as m,l as h,m as j,n as N,p as E,q as X,s as Z,v as ee,x as te,y as se,z as B,A,R as ne,B as ie,C as oe}from"./vendor.0ecfa0cb.js";const re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};re();const ae="modulepreload",D={},le="./",ce=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${le}${o}`,o in D)return;D[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":ae,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((b,_)=>{r.addEventListener("load",b),r.addEventListener("error",_)})})).then(()=>e())},f=(s,e,t)=>(e=e?`@${e}`:"",`https://unpkg.com/${s}${e}${t}`),ue=(s,e,t)=>(e=e?`@${e}`:"",`https://cdn.jsdelivr.net/npm/${s}${e}${t}`),pe=(s,e,t)=>t,de=s=>{const e=f("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=f("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},P=({vue:s,hongluanUI:e,hongluanBusinessUI:t}={})=>Object.fromEntries(Object.entries({vue:{pkg:"@vue/runtime-dom",version:s,path:"/dist/runtime-dom.esm-browser.js",source:"jsdelivr"},"@vue/shared":{version:s,path:"/dist/shared.esm-bundler.js",source:"jsdelivr"},"hongluan-ui/":{pkg:"hongluan-ui",version:e,path:"/",source:"jsdelivr"},"hongluan-ui":{version:e,path:"/dist/index.full.mjs",source:"jsdelivr"},"hongluan-business-ui/":{pkg:"hongluan-business-ui",version:t,path:"/",source:"jsdelivr"},"hongluan-business-ui":{version:t,path:"/dist/index.full.mjs",source:"jsdelivr"},"@hongluan-ui/icons":{path:"/dist/index.mjs",source:"unpkg"}}).map(([n,i])=>{var r;return[n,(i.source?i.source==="unpkg"?f:ue:pe)((r=i.pkg)!=null?r:n,i.version,i.path)]})),x=s=>G(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,me=()=>{let s=x("vue");return I(()=>s.value.filter(e=>H(e,"3.2.0",">=")))},he=()=>{let s=x("hongluan-ui");return I(()=>s.value.filter(e=>H(e,"1.5.0",">=")))},fe=()=>{let s=x("hongluan-business-ui");return I(()=>s.value.filter(e=>H(e,"3.2.0",">=")))};function ge(s){return btoa(unescape(encodeURIComponent(s)))}function ve(s){return decodeURIComponent(escape(atob(s)))}const V="PlaygroundMain.vue",g="App.vue",v="hongluan-ui.js",be=`
<script setup>
import App from './App.vue'
import { setupHongluanUI } from './${v}'
setupHongluanUI()
<\/script>

<template>
  <App />
</template>`.trim(),_e=`
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
    linkHl.href = '${f("hongluan-ui",s,"/dist/index.css")}'
    linkHl.onload = resolve
    head.appendChild(linkHl)
  })
  
  const pHb = new Promise((resolve) => {
    const linkHb = document.createElement('link')
    linkHb.rel = 'stylesheet'
    linkHb.href = '${f("hongluan-business-ui",s,"/dist/index.css")}'
    linkHb.onload = resolve
    head.appendChild(linkHb)
  })
  return Promise.all([pHl, pHb])
}
`,R=!0;class we{constructor({serializedState:e="",versions:t={vue:"latest",hongluanUI:"latest",hongluanBusinessUI:"latest"}}){a(this,"state");a(this,"compiler");a(this,"options");a(this,"versions");a(this,"initialShowOutput",!1);a(this,"initialOutputMode","preview");a(this,"pendingCompiler",null);let o={};if(e){const n=JSON.parse(ve(e));for(const i of Object.keys(n))o[i]=new u(i,n[i])}else o[g]=new u(g,_e);o[V]=new u(V,be,R),this.state=$({mainFile:V,files:o,activeFile:o[g],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}async init(){await this.setVueVersion(this.versions.vue),this.state.files[v]=new u(v,ye("latest").trim(),R);for(const e of Object.values(this.state.files))C(this,e);F(()=>C(this,this.state.activeFile))}setActive(e){this.state.files[e].hidden||(this.state.activeFile=this.state.files[e])}addFile(e){const t=typeof e=="string"?new u(e):e;this.state.files[t.filename]=t,this.setActive(t.filename)}deleteFile(e){if(e===v){L.warning("You cannot remove it, because Hongluan UI requires it.");return}confirm(`Are you sure you want to delete ${e}?`)&&(this.state.activeFile.filename===e&&this.setActive(g),delete this.state.files[e])}simplifyImportMaps(){const e=this.getImportMap(),t=Object.keys(P({}));return e.imports=Object.fromEntries(Object.entries(e.imports).filter(([o])=>!t.includes(o))),JSON.stringify(e)}serialize(){const e=JSON.stringify(Object.fromEntries(Object.entries(this.getFiles()).map(([t,o])=>{if(t==="import-map.json")try{const n=this.simplifyImportMaps();return[t,n]}catch{}return[t,o]})));return`#${ge(e)}`}getFiles(){const e={};for(const t of Object.values(this.state.files))t.hidden||(e[t.filename]=t.code);return e}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new u("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}addDeps(){const e=this.getImportMap();e.imports=k(k({},e.imports),P({vue:this.versions.vue,hongluanUI:this.versions.hongluanUI,hongluanBusinessUI:this.versions.hongluanBusinessUI})),this.setImportMap(e)}async setVersion(e,t){switch(e){case"hongluanUI":await this.setHongluanUIVersion(t);break;case"hongluanBusinessUI":await this.setHongluanBusinessUIVersion(t);break;case"vue":await this.setVueVersion(t);break}}async setHongluanUIVersion(e){this.versions.hongluanUI=e,this.addDeps()}async setHongluanBusinessUIVersion(e){this.versions.hongluanBusinessUI=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:o}=de(e);this.pendingCompiler=ce(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=o,this.versions.vue=e,this.addDeps(),console.info(`[@vue/repl] Now using Vue version: ${e}`)}}var ke="./assets/logo.c79b58f2.svg",Ie=(s,e)=>{const t=s.__vccOpts||s;for(const[o,n]of e)t[o]=n;return t};const He={},Ue={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},je=K('<g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),xe=[je];function Ve(s,e){return l(),c("svg",Ue,xe)}var Oe=Ie(He,[["render",Ve]]);const Se=p("img",{alt:"logo",src:ke},null,-1),$e=p("span",null,"Hongluan Playground",-1),Ce={class:"mr-1"},Fe=M({props:{store:null},setup(s){const e="1.0.5",t=$({hongluanUI:{text:"Hongluan UI",published:he(),active:s.store.versions.hongluanUI},hongluanBusinessUI:{text:"Hongluan Business UI",published:fe(),active:s.store.versions.hongluanBusinessUI},vue:{text:"Vue",published:me(),active:s.store.versions.vue}});async function o(i,r){t[i].active="loading...",await s.store.setVersion(i,r),t[i].active=r}async function n(){await navigator.clipboard.writeText(location.href),L.success("Sharable URL has been copied to clipboard.")}return(i,r)=>{const b=W,_=Y,J=Q;return l(),c("nav",null,[p("h5",null,[Se,$e,p("small",null," ("+U(m(e))+")",1)]),h(J,{class:"links",gap:"var(--md)"},{default:j(()=>[(l(!0),c(N,null,E(m(t),(y,O)=>(l(),c("div",{key:O,class:"flex items-center"},[p("span",Ce,U(y.text)+":",1),h(_,{"model-value":y.active,size:"sm",style:{width:"150px"},"onUpdate:modelValue":d=>o(O,d)},{default:j(()=>[(l(!0),c(N,null,E(y.published,d=>(l(),X(b,{key:d,value:d},{default:j(()=>[Z(U(d),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["model-value","onUpdate:modelValue"])]))),128)),p("button",{class:"share",onClick:n},[h(Oe)])]),_:1})])}}});const Le={key:0,class:"antialiased"},Me={key:1,class:"loading","loading-text":"Loading..."},Ne=M({setup(s){const e=ee(!0),t={script:{reactivityTransform:!0}},o=new we({serializedState:location.hash.slice(1)});return o.init().then(()=>e.value=!1),te(),F(()=>history.replaceState({},"",o.serialize())),window.addEventListener("message",n=>{typeof n.data=="string"&&n.data==="loading-finished"&&NProgress.done()},!1),NProgress.start(),(n,i)=>{const r=se;return e.value?ie((l(),c("div",Me,null,512)),[[r,!0]]):(l(),c("div",Le,[h(Fe,{store:m(o)},null,8,["store"]),h(m(ne),{ref:"repl",store:m(o),"show-compile-output":"","auto-resize":"","sfc-options":t,"clear-console":!1,onKeydown:[i[0]||(i[0]=B(A(()=>{},["ctrl","prevent"]),["s"])),i[1]||(i[1]=B(A(()=>{},["meta","prevent"]),["s"]))]},null,8,["store"])]))}}});window.VUE_DEVTOOLS_CONFIG={defaultSelectedAppId:"repl"};NProgress.configure({showSpinner:!1});oe(Ne).mount("#app");
