var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var I=(s,e,t)=>e in s?T(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,k=(s,e)=>{for(var t in e||(e={}))J.call(e,t)&&I(s,t,e[t]);if(x)for(var t of x(e))z.call(e,t)&&I(s,t,e[t]);return s};var c=(s,e,t)=>(I(s,typeof e!="symbol"?e+"":e,t),t);import{c as w,u as q,a as H,F as l,r as S,w as V,b as F,H as B,o as a,d as u,e as K,f as C,g as W,h as G,i as Y,j as p,t as E,k as m,l as f,m as U,n as $,p as D,q as Z,s as Q,v as X,x as ee,y as te,z as L,A as N,R as se,B as ne,C as ie}from"./vendor.11eceff4.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};oe();const re="modulepreload",M={},ae="./",le=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${ae}${i}`,i in M)return;M[i]=!0;const n=i.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":re,n||(r.as="script",r.crossOrigin=""),r.href=i,document.head.appendChild(r),n)return new Promise((b,_)=>{r.addEventListener("load",b),r.addEventListener("error",_)})})).then(()=>e())},g=(s,e,t)=>(e=e?`@${e}`:"",`https://unpkg.com/${s}${e}${t}`),ue=(s,e,t)=>(e=e?`@${e}`:"",`https://cdn.jsdelivr.net/npm/${s}${e}${t}`),ce=s=>{const e=g("@vue/compiler-sfc",s,"/dist/compiler-sfc.esm-browser.js"),t=g("@vue/runtime-dom",s,"/dist/runtime-dom.esm-browser.js");return{compilerSfc:e,runtimeDom:t}},A=({vue:s,hongluanUI:e,hongluanBusinessUI:t}={})=>Object.fromEntries(Object.entries({vue:{pkg:"@vue/runtime-dom",version:s,path:"/dist/runtime-dom.esm-browser.js",source:"jsdelivr"},"@vue/shared":{version:s,path:"/dist/shared.esm-bundler.js",source:"jsdelivr"},"hongluan-ui":{version:e,path:"/dist/index.full.mjs",source:"jsdelivr"},"hongluan-business-ui":{version:t,path:"/dist/index.full.mjs",source:"jsdelivr"},"@hongluan-ui/icons":{path:"/dist/es/index.mjs",source:"unpkg"}}).map(([n,o])=>{var r;return[n,(o.source==="unpkg"?g:ue)((r=o.pkg)!=null?r:n,o.version,o.path)]})),j=s=>q(`https://data.jsdelivr.com/v1/package/npm/${s}`,{initialData:[],afterFetch:e=>(e.data=e.data.versions,e)}).json().data,pe=()=>{let s=j("vue");return w(()=>s.value.filter(e=>H(e,"3.2.0",">=")))},de=()=>{let s=j("hongluan-ui");return w(()=>s.value.filter(e=>H(e,"1.5.0",">=")))},he=()=>{let s=j("hongluan-business-ui");return w(()=>s.value.filter(e=>H(e,"3.2.0",">=")))};function me(s){return btoa(unescape(encodeURIComponent(s)))}function fe(s){return decodeURIComponent(escape(atob(s)))}const d="App.vue",v="hongluan-ui.js",R=`
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
import { setupHongluanUI } from './${v}';
import { FillUser } from '@hongluan-ui/icons'

// setup for hongluan ui, don't remove.
setupHongluanUI();

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
`.trim(),ge=s=>`
// \u26D4\uFE0F \u26D4\uFE0F \u26D4\uFE0F
// DO NOT MODIFY THIS FILE! THIS FILE WILL BE RESTORED WHEN SHARING.
// \u4E0D\u8981\u4FEE\u6539\u6B64\u6587\u4EF6\uFF01\u8BE5\u6587\u4EF6\u5728\u5171\u4EAB\u65F6\u88AB\u8FD8\u539F\u3002
// \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u5909\u66F4\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u5171\u6709\u6642\u306B\u5FA9\u5143\u3055\u308C\u307E\u3059\u3002
// NE MODIFIEZ PAS CE FICHIER !

import { getCurrentInstance } from 'vue'
import HongluanUI from 'hongluan-ui'
import HongluanBusinessUI from 'hongluan-business-ui'

await loadStyle()

export function setupHongluanUI() {
  const instance = getCurrentInstance()
  instance.appContext.app.use(HongluanUI)
  instance.appContext.app.use(HongluanBusinessUI)

  parent.postMessage('loading-finished')
}

export async function loadStyle() {
  const head = document.getElementsByTagName('head')[0]
  const pHl = new Promise((resolve) => {
    const linkHl = document.createElement('link')
    linkHl.rel = 'stylesheet'
    linkHl.href = '${g("hongluan-ui",s,"/dist/index.css")}'
    linkHl.onload = resolve
    head.appendChild(linkHl)
  })
  
  const pHb = new Promise((resolve) => {
    const linkHb = document.createElement('link')
    linkHb.rel = 'stylesheet'
    linkHb.href = '${g("hongluan-business-ui",s,"/dist/index.css")}'
    linkHb.onload = resolve
    head.appendChild(linkHb)
  })
  return Promise.all([pHl, pHb])
}
`;class ve{constructor({serializedState:e="",versions:t={vue:"latest",hongluanUI:"latest",hongluanBusinessUI:"latest"}}){c(this,"state");c(this,"compiler");c(this,"options");c(this,"versions");c(this,"pendingCompiler",null);let i={};if(e){const o=JSON.parse(fe(e));for(const r of Object.keys(o))i[r]=new l(r,o[r])}else i={[d]:new l(d,R)};let n=d;i[n]||(n=Object.keys(i)[0]),this.state=S({mainFile:n,files:i,activeFile:i[n],errors:[],vueRuntimeURL:""}),this.versions=t,this.initImportMap()}async init(){await this.setVueVersion(this.versions.vue),this.state.files[v]=new l(v,ge("latest").trim(),!0),V(()=>F(this,this.state.activeFile));for(const e of Object.keys(this.state.files))e!==d&&F(this,this.state.files[e])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){this.state.files[e]=new l(e),this.setActive(e)}deleteFile(e){if(e===v){B.warning("You cannot remove it, because Hongluan UI requires it.");return}confirm(`Are you sure you want to delete ${e}?`)&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}simplifyImportMaps(){const e=this.getImportMap(),t=A({}),i=Object.keys(t);return e.imports=Object.fromEntries(Object.entries(e.imports).filter(([n])=>!i.includes(n))),JSON.stringify(e)}serialize(){const e=JSON.stringify(Object.fromEntries(Object.entries(this.getFiles()).filter(([t])=>t!==v).map(([t,i])=>{if(t==="import-map.json")try{const n=this.simplifyImportMaps();return[t,n]}catch{}return[t,i]})));return`#${me(e)}`}getFiles(){const e={};for(const t of Object.keys(this.state.files))e[t]=this.state.files[t].code;return e}async setFiles(e,t=d){const i={};t===d&&!e[t]&&(i[t]=new l(t,R));for(const[n,o]of Object.entries(e))i[n]=new l(n,o);for(const n of Object.values(i))await F(this,n);this.state.mainFile=t,this.state.files=i,this.initImportMap(),this.setActive(t)}initImportMap(){this.state.files["import-map.json"]||(this.state.files["import-map.json"]=new l("import-map.json",JSON.stringify({imports:{}},null,2)))}getImportMap(){try{return JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}setImportMap(e){this.state.files["import-map.json"].code=JSON.stringify(e,null,2)}addDeps(){const e=this.getImportMap();e.imports=k(k({},e.imports),A({vue:this.versions.vue,hongluanUI:this.versions.hongluanUI,hongluanBusinessUI:this.versions.hongluanBusinessUI})),this.setImportMap(e)}async setVersion(e,t){switch(e){case"hongluanUI":await this.setHongluanUIVersion(t);break;case"hongluanBusinessUI":await this.setHongluanBusinessUIVersion(t);break;case"vue":await this.setVueVersion(t);break}}async setHongluanUIVersion(e){this.versions.hongluanUI=e,this.addDeps()}async setHongluanBusinessUIVersion(e){this.versions.hongluanBusinessUI=e,this.addDeps()}async setVueVersion(e){const{compilerSfc:t,runtimeDom:i}=ce(e);this.pendingCompiler=le(()=>import(t),[]),this.compiler=await this.pendingCompiler,this.pendingCompiler=null,this.state.vueRuntimeURL=i,this.versions.vue=e,this.addDeps(),console.info(`[@vue/repl] Now using Vue version: ${e}`)}}var be="./assets/logo.c79b58f2.svg",_e=(s,e)=>{const t=s.__vccOpts||s;for(const[i,n]of e)t[i]=n;return t};const ye={},Ie={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},ke=K('<g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),we=[ke];function He(s,e){return a(),u("svg",Ie,we)}var Fe=_e(ye,[["render",He]]);const Ee=p("img",{alt:"logo",src:be},null,-1),Ue=p("span",null,"Hongluan Playground",-1),je={class:"mr-1"},Oe=C({props:{store:null},setup(s){const e="1.0.2",t=S({hongluanUI:{text:"Hongluan UI",published:de(),active:s.store.versions.hongluanUI},hongluanBusinessUI:{text:"Hongluan Business UI",published:he(),active:s.store.versions.hongluanBusinessUI},vue:{text:"Vue",published:pe(),active:s.store.versions.vue}});async function i(o,r){t[o].active="loading...",await s.store.setVersion(o,r),t[o].active=r}async function n(){await navigator.clipboard.writeText(location.href),B.success("Sharable URL has been copied to clipboard.")}return(o,r)=>{const b=W,_=G,P=Y;return a(),u("nav",null,[p("h5",null,[Ee,Ue,p("small",null," ("+E(m(e))+")",1)]),f(P,{class:"links",gap:"var(--md)"},{default:U(()=>[(a(!0),u($,null,D(m(t),(y,O)=>(a(),u("div",{key:O,class:"flex items-center"},[p("span",je,E(y.text)+":",1),f(_,{"model-value":y.active,size:"sm",style:{width:"150px"},"onUpdate:modelValue":h=>i(O,h)},{default:U(()=>[(a(!0),u($,null,D(y.published,h=>(a(),Z(b,{key:h,value:h},{default:U(()=>[Q(E(h),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["model-value","onUpdate:modelValue"])]))),128)),p("button",{class:"share",onClick:n},[f(Fe)])]),_:1})])}}});const xe={key:0,class:"antialiased"},Se={key:1,class:"loading","loading-text":"Loading..."},Ve=C({setup(s){const e=X(!0),t={script:{reactivityTransform:!0}},i=new ve({serializedState:location.hash.slice(1)});return i.init().then(()=>e.value=!1),ee(),V(()=>history.replaceState({},"",i.serialize())),window.addEventListener("message",n=>{typeof n.data=="string"&&n.data==="loading-finished"&&NProgress.done()},!1),NProgress.start(),(n,o)=>{const r=te;return e.value?ne((a(),u("div",Se,null,512)),[[r,!0]]):(a(),u("div",xe,[f(Oe,{store:m(i)},null,8,["store"]),f(m(se),{ref:"repl",store:m(i),"show-compile-output":"","auto-resize":"","sfc-options":t,"clear-console":!1,onKeydown:[o[0]||(o[0]=L(N(()=>{},["ctrl","prevent"]),["s"])),o[1]||(o[1]=L(N(()=>{},["meta","prevent"]),["s"]))]},null,8,["store"])]))}}});NProgress.configure({showSpinner:!1});ie(Ve).mount("#app");
