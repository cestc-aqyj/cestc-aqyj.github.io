var Xe=Object.defineProperty,Ze=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var Cn=Object.getOwnPropertySymbols;var Xn=Object.prototype.hasOwnProperty,Zn=Object.prototype.propertyIsEnumerable;var qn=(n,e,r)=>e in n?Xe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,fn=(n,e)=>{for(var r in e||(e={}))Xn.call(e,r)&&qn(n,r,e[r]);if(Cn)for(var r of Cn(e))Zn.call(e,r)&&qn(n,r,e[r]);return n},Wn=(n,e)=>Ze(n,We(e));var an=(n,e)=>{var r={};for(var t in n)Xn.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&Cn)for(var t of Cn(n))e.indexOf(t)<0&&Zn.call(n,t)&&(r[t]=n[t]);return r};import{z as Ge,p as Ke,H as hn,b as le,c as gn,e as Qe,u as Fn,g as xn,h as Je,i as nt,j as et,k as tt,l as rt,m as Sn,n as de,o as ce,q as he,r as se,s as tn,S as Dn,t as jn,v as it,w as pe,x as me,y as ot,A as ge,B as at,D as lt,E as dt,F as xe,T as ct,P as Hn,G as be,I as rn,J as ht,K as fe,L as Mn,M as st,N as pt,O as mt,Q as gt,R as xt,U as bt,V as ft,W as ut,X as wt,Y as vt,Z as ue,_ as we,$ as kt,a0 as yt,a1 as Ft,a2 as ve,a3 as ke,a4 as ye,a5 as zt,a6 as _t,a7 as Ct,a8 as Et,a9 as jt,aa as Bt}from"./hongluan-business.a5572174.js";import{a4 as g,Q as h,a1 as y,a5 as l,S as b,a7 as v,U as O,H as V,R as B,B as L,E as nn,W as z,al as M,X as sn,o as D,n as C,P as H,Z as J,aB as kn,ac as P,a3 as S,p as $n,T as Vn,a8 as R,aP as St,aT as Dt,aO as In,x as Fe,ai as vn,v as Z,a6 as K,ad as Q,j as bn,y as Yn,A as $t,aj as Gn,an as pn,ao as mn,a2 as ze,c as At,K as _e,J as En,aU as Lt,aN as Tt,aV as It,aW as Rt}from"./vue.7ea6d5da.js";import{l as Nn}from"./highlight.aba4bc0a.js";import{H as Kn}from"./hongluan-icons.daeaf28e.js";const Ot=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};Ot();var cn=(n=>(n.CN="zh-CN",n))(cn||{});function Nt(n){const e=n.match(/<(script)>([\s\S]+)<\/\1>/);return e&&e[2]?e[2].trim():""}function Pt(n){const e=n.match(/<(style)\s*>([\s\S]+)<\/\1>/);return e&&e[2]?e[2].trim():""}function Ht(n){return n=n.trim(),n&&n.replace(/<(script|style)[\s\S]+<\/\1>/g,"").trim()}function Mt(n,e={},r=!1){const t=document.createElement("link");t.rel="stylesheet",t.href="data:text/css;charset=UTF-8,"+encodeURIComponent(n),t.disabled=r,Object.entries(e).forEach(([i,a])=>{t.setAttribute(i,a)}),document.getElementsByTagName("head")[0].appendChild(t)}function Vt(n){return btoa(unescape(encodeURIComponent(n)))}var Yt=`@charset "UTF-8";
:root {
  --primary: 64, 169, 255;
  --success: 80, 205, 137;
  --danger: 241, 65, 108;
  --warning: 255, 199, 0;
  --info: 114, 57, 234;
  --original-Bg-Body: 255, 255, 255;
  --original-Bg-Content: 255, 255, 255;
  --original-Bg-Light: 246, 249, 251;
  --original-Bg-Popup: 255, 255, 255;
  --original-Bg-Element: 255, 255, 255;
  --original-Bg-Hover: 246, 249, 251;
  --original-Bg-Active: 246, 249, 251;
  --original-Bg-Title: 255, 255, 255;
  --original-Bg-Mask: 0, 0, 0;
  --pageFontColor: #5E6278;
  --pageFontColor-Secondary: #A1A5B7;
  --pageFontColor-Light: #B5B5C3;
  --pageFontColor-Lightest: #E4E6EF;
  --pageFontColor-Title: #3F4254;
  --pageFontColor-Link: #009EF7;
  --pageFontColor-Hover: #009EF7;
  --pageFontColor-Inverse: #FFFFFF;
  --xxs: 4px;
  --xs: 8px;
  --sm: 12px;
  --md: 16px;
  --lg: 24px;
  --xl: 32px;
  --xxl: 40px;
  --radius-sm: 3px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --pageFontSize-Sm: 12px;
  --pageFontSize-Md: 14px;
  --pageFontSize-Lg: 16px;
  --pageFontSize-Xl: 18px;
  --pageFontFamily: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
:checked .fade-enter-checked,
.is-checked .fade-enter-checked,
.is-active .fade-enter-active,
.fade-enter-hover:hover,
.fade-enter-active {
  animation: fadeIn 0.3s forwards;
}
:checked .fade-leave-checked,
.is-checked .fade-leave-checked,
.is-active .fade-leave-active,
.fade-leave-hover:hover,
.fade-leave-active {
  animation: fadeOut 0.3s forwards;
}
:checked .fall-enter-checked,
.is-checked .fall-enter-checked,
.is-active .fall-enter-active,
.fall-enter-hover:hover,
.fall-enter-active {
  animation: fallIn 0.4s forwards;
}
:checked .fall-leave-checked,
.is-checked .fall-leave-checked,
.is-active .fall-leave-active,
.fall-leave-hover:hover,
.fall-leave-active {
  animation: fallOut 0.4s forwards;
}
:checked .bounce-enter-checked,
.is-checked .bounce-enter-checked,
.is-active .bounce-enter-active,
.bounce-enter-hover:hover,
.bounce-enter-active {
  animation: bounceIn 0.3s forwards;
}
:checked .bounce-leave-checked,
.is-checked .bounce-leave-checked,
.is-active .bounce-leave-active,
.bounce-leave-hover:hover,
.bounce-leave-active {
  animation: fallOut 0.3s forwards;
}
:checked .scale-enter-checked,
.is-checked .scale-enter-checked,
.is-active .scale-enter-active,
.scale-enter-hover:hover,
.scale-enter-active {
  animation: scaleIn 0.3s forwards;
}
:checked .scale-leave-checked,
.is-checked .scale-leave-checked,
.is-active .scale-leave-active,
.scale-leave-hover:hover,
.scale-leave-active {
  animation: scaleOut 0.3s forwards;
}
:checked .roadster-enter-checked,
.is-checked .roadster-enter-checked,
.is-active .roadster-enter-active,
.roadster-enter-hover:hover,
.roadster-enter-active {
  transition-delay: 0.25s;
  animation: roadsterIn 0.5s forwards ease-out;
}
:checked .roadster-leave-checked,
.is-checked .roadster-leave-checked,
.is-active .roadster-leave-active,
.roadster-leave-hover:hover,
.roadster-leave-active {
  transition-delay: 0.25s;
  animation: roadsterOut 0.5s forwards ease-out;
}
:checked .slideTop-enter-checked,
.is-checked .slideTop-enter-checked,
.is-active .slideTop-enter-active,
.slideTop-enter-hover:hover,
.slideTop-enter-active {
  animation: slideTopIn 0.3s forwards;
}
:checked .slideTop-leave-checked,
.is-checked .slideTop-leave-checked,
.is-active .slideTop-leave-active,
.slideTop-leave-hover:hover,
.slideTop-leave-active {
  animation: slideTopOut 0.3s forwards;
}
:checked .slideDown-enter-checked,
.is-checked .slideDown-enter-checked,
.is-active .slideDown-enter-active,
.slideDown-enter-hover:hover,
.slideDown-enter-active {
  animation: slideDownIn 0.3s forwards;
}
:checked .slideDown-leave-checked,
.is-checked .slideDown-leave-checked,
.is-active .slideDown-leave-active,
.slideDown-leave-hover:hover,
.slideDown-leave-active {
  animation: slideDownOut 0.3s forwards;
}
:checked .slideLeft-enter-checked,
.is-checked .slideLeft-enter-checked,
.is-active .slideLeft-enter-active,
.slideLeft-enter-hover:hover,
.slideLeft-enter-active {
  animation: slideLeftIn 0.3s forwards;
}
:checked .slideLeft-leave-checked,
.is-checked .slideLeft-leave-checked,
.is-active .slideLeft-leave-active,
.slideLeft-leave-hover:hover,
.slideLeft-leave-active {
  animation: slideLeftOut 0.3s forwards;
}
:checked .slideRight-enter-checked,
.is-checked .slideRight-enter-checked,
.is-active .slideRight-enter-active,
.slideRight-enter-hover:hover,
.slideRight-enter-active {
  animation: slideRightIn 0.3s forwards;
}
:checked .slideRight-leave-checked,
.is-checked .slideRight-leave-checked,
.is-active .slideRight-leave-active,
.slideRight-leave-hover:hover,
.slideRight-leave-active {
  animation: slideRightOut 0.3s forwards;
}
:checked .slideLeftSide-enter-checked,
.is-checked .slideLeftSide-enter-checked,
.is-active .slideLeftSide-enter-active,
.slideLeftSide-enter-hover:hover,
.slideLeftSide-enter-active {
  animation: slideLeftSideIn 0.4s forwards;
}
:checked .slideLeftSide-leave-checked,
.is-checked .slideLeftSide-leave-checked,
.is-active .slideLeftSide-leave-active,
.slideLeftSide-leave-hover:hover,
.slideLeftSide-leave-active {
  animation: slideLeftSideOut 0.4s forwards;
}
:checked .slideRightSide-enter-checked,
.is-checked .slideRightSide-enter-checked,
.is-active .slideRightSide-enter-active,
.slideRightSide-enter-hover:hover,
.slideRightSide-enter-active {
  animation: slideRightSideIn 0.4s forwards;
}
:checked .slideRightSide-leave-checked,
.is-checked .slideRightSide-leave-checked,
.is-active .slideRightSide-leave-active,
.slideRightSide-leave-hover:hover,
.slideRightSide-leave-active {
  animation: slideRightSideOut 0.4s forwards;
}
:checked .slideTopSide-enter-checked,
.is-checked .slideTopSide-enter-checked,
.is-active .slideTopSide-enter-active,
.slideTopSide-enter-hover:hover,
.slideTopSide-enter-active {
  animation: slideTopSideIn 0.4s forwards;
}
:checked .slideTopSide-leave-checked,
.is-checked .slideTopSide-leave-checked,
.is-active .slideTopSide-leave-active,
.slideTopSide-leave-hover:hover,
.slideTopSide-leave-active {
  animation: slideTopSideOut 0.4s forwards;
}
:checked .slideBottomSide-enter-checked,
.is-checked .slideBottomSide-enter-checked,
.is-active .slideBottomSide-enter-active,
.slideBottomSide-enter-hover:hover,
.slideBottomSide-enter-active {
  animation: slideBottomSideIn 0.4s forwards;
}
:checked .slideBottomSide-leave-checked,
.is-checked .slideBottomSide-leave-checked,
.is-active .slideBottomSide-leave-active,
.slideBottomSide-leave-hover:hover,
.slideBottomSide-leave-active {
  animation: slideBottomSideOut 0.4s forwards;
}
:checked .jelly-enter-checked,
.is-checked .jelly-enter-checked,
.is-active .jelly-enter-active,
.jelly-enter-hover:hover,
.jelly-enter-active {
  animation-timing-function: linear;
  animation: jellyIn 1s forwards;
}
:checked .jelly-leave-checked,
.is-checked .jelly-leave-checked,
.is-active .jelly-leave-active,
.jelly-leave-hover:hover,
.jelly-leave-active {
  animation-timing-function: linear;
  animation: jellyOut 1s forwards;
}
:checked .spring-enter-checked,
.is-checked .spring-enter-checked,
.is-active .spring-enter-active,
.spring-enter-hover:hover,
.spring-enter-active {
  animation-timing-function: linear;
  animation: springIn 0.4s forwards;
}
:checked .spring-leave-checked,
.is-checked .spring-leave-checked,
.is-active .spring-leave-active,
.spring-leave-hover:hover,
.spring-leave-active {
  animation-timing-function: linear;
  animation: springOut 0.4s forwards;
}
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.collapse-transition-leave-active,
.collapse-transition-enter-active {
  transition: 0.3s max-height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.horizontal-collapse-transition {
  transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
}
.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.zoom-in-top-enter-active[data-popper-placement^=top],
.zoom-in-top-leave-active[data-popper-placement^=top] {
  transform-origin: center bottom;
}
.zoom-in-top-enter-from,
.zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter-from, .list-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
.dropdown-enter-active {
  animation: dropdownUp 0.3s ease 1;
}
.dropdown-leave-active {
  animation: dropdownDown 0.3s ease 1;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fallIn {
  0% {
    opacity: 0;
    transform: scale3d(1.1, 1.1, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
@keyframes fallOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.9, 0.9, 1);
  }
}
@keyframes bounceIn {
  0% {
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
  }
  45% {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
  }
}
@keyframes scaleOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
@keyframes roadsterIn {
  0% {
    opacity: 0;
    transform: translate3d(calc(-100vw - 50%), 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(100px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes roadsterOut {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-100px, 0, 0) scale3d(1.1, 1.1, 1);
  }
  100% {
    opacity: 0;
    transform: translate3d(calc(100vw + 50%), 0, 0);
  }
}
@keyframes slideLeftSideIn {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideLeftSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}
@keyframes slideRightSideIn {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideRightSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
@keyframes slideTopSideIn {
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideTopSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
}
@keyframes slideBottomSideIn {
  0% {
    transform: translate(0, -100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideBottomSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -100%);
  }
}
@keyframes slideTopIn {
  0% {
    opacity: 0;
    transform: translate(0, 50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideTopOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 50px);
  }
}
@keyframes slideDownIn {
  0% {
    opacity: 0;
    transform: translate(0, -50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideDownOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -50px);
  }
}
@keyframes slideLeftIn {
  0% {
    opacity: 0;
    transform: translate(50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideLeftOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(50px, 0);
  }
}
@keyframes slideRightIn {
  0% {
    opacity: 0;
    transform: translate(-50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideRightOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50px, 0);
  }
}
@keyframes jellyIn {
  0% {
    opacity: 0;
    transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8% {
    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  16% {
    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24% {
    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  32% {
    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  40% {
    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  48% {
    opacity: 1;
    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  56% {
    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  64% {
    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  72% {
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  80% {
    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  88% {
    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
@keyframes jellyOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes springIn {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  25% {
    opacity: 1;
    transform: translate(0, -10%);
  }
  50% {
    opacity: 1;
    transform: translate(0%, 10%);
  }
  75% {
    opacity: 1;
    transform: translate(0, -5%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes springOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes dropdownUp {
  from {
    opacity: 0;
    transform: translate(0, -10px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes dropdownDown {
  from {
    opacity: 1;
    transform: translate(0, 0);
  }
  to {
    opacity: 0;
    transform: translate(0, -10px);
  }
}
body {
  margin: 0;
  color: #5E6278;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5714285714;
  background-color: #FFFFFF;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  min-height: 100%;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: none;
}
a {
  color: #009EF7;
  text-decoration: none;
}
a:hover {
  color: #009EF7;
}
abbr[data-original-title],
abbr[title] {
  cursor: help;
  border-bottom: 1px dotted #EFF2F5;
}
figure {
  margin: 0 0 12px;
}
mark {
  padding: 1px 5px 2px;
  border-radius: 2px;
  background-color: #40a9ff;
  color: #FFFFFF;
}
pre {
  margin-top: 0;
  margin-bottom: 1em;
  font-family: inherit;
}
pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}
pre {
  display: block;
  margin-top: 0;
  margin-bottom: 16px;
  overflow: auto;
}
pre code {
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
}
code {
  font-style: 13px;
  white-space: pre-wrap;
}
a > code {
  color: inherit;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
kbd {
  padding: 3px 4px;
  color: #FFFFFF;
  background-color: #000;
  border-radius: 2px;
}
kbd kbd {
  padding: 0;
  font-weight: 400;
}
em {
  font-style: normal;
}
blockquote {
  padding: 12px 24px;
  margin: 0 0 24px;
  font-size: 14px;
  border-left: 5px solid #EFF2F5;
}
address {
  margin-bottom: 12px;
  font-style: normal;
  line-height: inherit;
}
img,
svg {
  vertical-align: middle;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}
button,
select {
  text-transform: none;
}
[role=button] {
  cursor: pointer;
}
select {
  word-wrap: normal;
}
[list]::-webkit-calendar-picker-indicator {
  display: none;
}
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
textarea {
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: inherit;
}
legend + * {
  clear: left;
}
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}
::-webkit-inner-spin-button {
  height: auto;
}
[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-color-swatch-wrapper {
  padding: 0;
}
::file-selector-button {
  font: inherit;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
iframe {
  border: 0;
}
summary {
  display: list-item;
  cursor: pointer;
}
progress {
  vertical-align: baseline;
}
[hidden] {
  display: none !important;
}
::selection {
  color: #fff;
  background: #b3d4fc;
  text-shadow: none;
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #f3f9ff inset !important;
  -webkit-text-fill-color: #40a9ff !important;
  background-color: transparent;
  background-image: none;
  border-color: #40a9ff;
}
::-webkit-input-placeholder {
  color: #B5B5C3;
}
::-moz-placeholder {
  color: #B5B5C3;
}
body.no-scroll {
  overflow: hidden;
}
p {
  margin-top: 0;
  margin-bottom: 0;
}
p:not(:only-of-type) {
  margin-bottom: 1em;
}
p.indent {
  text-indent: 2em;
}
p.justify {
  word-wrap: break-word;
  text-align: justify;
}
p:last-child, p:only-child {
  margin-bottom: 0;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #3F4254;
  font-weight: 500;
}
h1,
.h1 {
  font-size: 30px;
  line-height: 1.1333333333;
}
h2,
.h2 {
  font-size: 24px;
  line-height: 1.3333333333;
}
h3,
.h3 {
  font-size: 20px;
  line-height: 1.4;
}
h4,
.h4 {
  font-size: 18px;
  line-height: 1.4444444444;
}
h5,
.h5 {
  font-size: 16px;
  line-height: 1.5;
}
h6,
.h6 {
  font-size: 14px;
  line-height: 1.5714285714;
}
hr {
  border: none;
  border-bottom: 1px solid #EFF2F5;
  margin: 16px 0;
}
hr.dotted {
  border-bottom-style: dotted;
}
hr.dashed {
  border-bottom-style: dashed;
}
dl > dd,
dl > dt {
  padding: 0;
  margin: 0;
}
dl.list {
  display: inline-block;
  margin: 0 24px;
}
dl.list > dt {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.8;
}
dl.list > dd {
  line-height: 1.5;
}
dl.list.center > dd,
dl.list.center > dt {
  text-align: center;
}
dl.attr > dt {
  font-weight: 700;
  display: inline;
}
dl.attr > dd {
  display: inline;
  padding: 4px 8px;
}
ol.list li,
ul.list li {
  line-height: 1.5;
}
ol.list li ol,
ol.list li ul,
ul.list li ol,
ul.list li ul {
  margin: 8px 0;
}
.price {
  font-family: arial, sans-serif;
}
.price:before {
  content: "";
  font-family: arial, sans-serif;
}
.price.yuan:before {
  content: "\xA5";
}
.price.dollar:before {
  content: "$";
}
.price.euro:before {
  content: "\u20AC";
}
.cursor-auto {
  cursor: auto;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-help {
  cursor: help;
}
.cursor-grab {
  cursor: grab;
}
.cursor-wait {
  cursor: wait;
}
.cursor-text {
  cursor: text;
}
.cursor-move {
  cursor: move;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.transition-none {
  transition-property: none;
}
.transition-all {
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.scroll-box {
  display: table;
  border-spacing: 0;
  position: relative;
  width: 100%;
  height: 100%;
}
.scroll-box .scroll-cell {
  display: table-row;
  height: 100%;
}
.scroll-box .scroll-cell .scroll-body {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.noscroll {
  overflow: hidden !important;
}
.scrollable {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}
.box-shadow-none {
  box-shadow: none;
}
.box-shadow-level1 {
  box-shadow: 0 5px 12px 0 rgba(109, 131, 168, 0.05), 0 0 50px 0 rgba(193, 205, 225, 0.1);
}
.box-shadow-level2 {
  box-shadow: 0 0 30px 0 rgba(109, 131, 168, 0.15);
}
.box-shadow-level3 {
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
}
.radius-none {
  border-radius: 0;
}
.radius-t-none {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.radius-b-none {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.radius-l-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.radius-r-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.radius-tl-none {
  border-top-left-radius: 0;
}
.radius-tr-none {
  border-top-right-radius: 0;
}
.radius-bl-none {
  border-bottom-left-radius: 0;
}
.radius-br-none {
  border-bottom-right-radius: 0;
}
.radius-sm {
  border-radius: 3px;
}
.radius-t-sm {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.radius-b-sm {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.radius-l-sm {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.radius-r-sm {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.radius-tl-sm {
  border-top-left-radius: 3px;
}
.radius-tr-sm {
  border-top-right-radius: 3px;
}
.radius-bl-sm {
  border-bottom-left-radius: 3px;
}
.radius-br-sm {
  border-bottom-right-radius: 3px;
}
.radius-md {
  border-radius: 4px;
}
.radius-t-md {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.radius-b-md {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.radius-l-md {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.radius-r-md {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.radius-tl-md {
  border-top-left-radius: 4px;
}
.radius-tr-md {
  border-top-right-radius: 4px;
}
.radius-bl-md {
  border-bottom-left-radius: 4px;
}
.radius-br-md {
  border-bottom-right-radius: 4px;
}
.radius-lg {
  border-radius: 6px;
}
.radius-t-lg {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.radius-b-lg {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.radius-l-lg {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.radius-r-lg {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.radius-tl-lg {
  border-top-left-radius: 6px;
}
.radius-tr-lg {
  border-top-right-radius: 6px;
}
.radius-bl-lg {
  border-bottom-left-radius: 6px;
}
.radius-br-lg {
  border-bottom-right-radius: 6px;
}
.radius-xl {
  border-radius: 8px;
}
.radius-t-xl {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.radius-b-xl {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.radius-l-xl {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.radius-r-xl {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.radius-tl-xl {
  border-top-left-radius: 8px;
}
.radius-tr-xl {
  border-top-right-radius: 8px;
}
.radius-bl-xl {
  border-bottom-left-radius: 8px;
}
.radius-br-xl {
  border-bottom-right-radius: 8px;
}
.radius-round {
  border-radius: 100px;
}
.radius-t-round {
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}
.radius-b-round {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
}
.radius-l-round {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.radius-r-round {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
.radius-tl-round {
  border-top-left-radius: 100px;
}
.radius-tr-round {
  border-top-right-radius: 100px;
}
.radius-bl-round {
  border-bottom-left-radius: 100px;
}
.radius-br-round {
  border-bottom-right-radius: 100px;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.ellipsis.fo {
  position: relative;
}
.ellipsis.fo:after {
  content: "\u3000";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  min-height: 1.4em;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0%, white 80%);
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.font-thin {
  font-weight: 100 !important;
}
.font-extralight {
  font-weight: 200 !important;
}
.font-light {
  font-weight: 300 !important;
}
.font-normal {
  font-weight: 400 !important;
}
.font-medium {
  font-weight: 500 !important;
}
.font-semibold {
  font-weight: 600 !important;
}
.font-bold {
  font-weight: 500 !important;
}
.font-extrabold {
  font-weight: 800 !important;
}
.font-black {
  font-weight: 900 !important;
}
.font-sm {
  font-size: 12px !important;
  line-height: 1.6666666667 !important;
}
.font-md {
  font-size: 14px !important;
  line-height: 1.5714285714 !important;
}
.font-lg {
  font-size: 16px !important;
  line-height: 1.5 !important;
}
.font-xl {
  font-size: 18px !important;
  line-height: 1.4444444444 !important;
}
.border-none {
  border: none !important;
}
.border {
  --border-width: 1px;
  border: var(--border-width) solid #EFF2F5 !important;
}
.border.dashed {
  border-style: dashed !important;
}
.border.dotted {
  border-style: dotted !important;
}
.border-top {
  --border-top-width: 1px;
  border-top: var(--border-top-width) solid #EFF2F5 !important;
}
.border-top.dashed {
  border-top-style: dashed !important;
}
.border-top.dotted {
  border-top-style: dotted !important;
}
.border-right {
  --border-right-width: 1px;
  border-right: var(--border-right-width) solid #EFF2F5 !important;
}
.border-right.dashed {
  border-right-style: dashed !important;
}
.border-right.dotted {
  border-right-style: dotted !important;
}
.border-bottom {
  --border-bottom-width: 1px;
  border-bottom: var(--border-bottom-width) solid #EFF2F5 !important;
}
.border-bottom.dashed {
  border-bottom-style: dashed !important;
}
.border-bottom.dotted {
  border-bottom-style: dotted !important;
}
.border-left {
  --border-left-width: 1px;
  border-left: var(--border-left-width) solid #EFF2F5 !important;
}
.border-left.dashed {
  border-left-style: dashed !important;
}
.border-left.dotted {
  border-left-style: dotted !important;
}
.display-block {
  display: block;
}
.display-inline-block {
  display: inline-block;
}
.display-inline {
  display: inline;
}
.display-flex {
  display: flex;
}
.display-inline-flex {
  display: inline-flex;
}
.display-table {
  display: table;
}
.display-inline-table {
  display: inline-table;
}
.display-table-caption {
  display: table-caption;
}
.display-table-cell {
  display: table-cell;
}
.display-table-column {
  display: table-column;
}
.display-table-column-group {
  display: table-column-group;
}
.display-table-footer-group {
  display: table-footer-group;
}
.display-table-header-group {
  display: table-header-group;
}
.display-table-row-group {
  display: table-row-group;
}
.display-table-row {
  display: table-row;
}
.display-flow-root {
  display: flow-root;
}
.display-grid {
  display: grid;
}
.display-inline-grid {
  display: inline-grid;
}
.display-contents {
  display: contents;
}
.display-list-item {
  display: list-item;
}
.display-none {
  display: none;
}
.static {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}
.no-grow {
  flex-grow: 0 !important;
}
.no-shrink {
  flex-shrink: 0 !important;
}
.flex-row {
  flex-direction: row !important;
}
.flex-col {
  flex-direction: column !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.self-grow {
  flex-grow: 1 !important;
}
.self-shrink {
  flex-shrink: 1 !important;
}
.self-no-grow {
  flex-grow: 0 !important;
}
.self-no-shrink {
  flex-shrink: 0 !important;
}
.self-static {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}
.self-full {
  flex-grow: 1 !important;
  flex-shrink: 1 !important;
  flex-basis: auto !important;
}
.self-no-full {
  flex: none !important;
}
.self-auto {
  align-self: auto !important;
}
.self-top {
  align-self: flex-start !important;
}
.self-middle {
  align-self: center !important;
}
.self-bottom {
  align-self: flex-end !important;
}
.self-stretch {
  align-self: stretch !important;
}
.self-baseline {
  align-self: baseline !important;
}
.item-top {
  align-items: flex-start !important;
}
.item-middle {
  align-items: center !important;
}
.item-bottom {
  align-items: flex-end !important;
}
.item-left {
  justify-content: flex-start !important;
}
.item-center {
  justify-content: center !important;
}
.item-right {
  justify-content: flex-end !important;
}
.item-baseline {
  align-items: baseline !important;
}
.item-stretch {
  align-items: stretch !important;
}
.item-between {
  justify-content: space-between !important;
}
.item-around {
  justify-content: space-around !important;
}
.item-evenly {
  justify-content: space-evenly !important;
}
.content-top {
  align-content: flex-start !important;
}
.content-middle {
  align-content: center !important;
}
.content-bottom {
  align-content: flex-end !important;
}
.content-between {
  align-content: space-between !important;
}
.content-stretch {
  align-content: stretch !important;
}
.content-around {
  align-content: space-around !important;
}
@media (min-width: 0) {
  .flex-row- {
    flex-direction: row !important;
  }

  .flex-col- {
    flex-direction: column !important;
  }

  .flex-wrap- {
    flex-wrap: wrap !important;
  }

  .flex-nowrap- {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse- {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow- {
    flex-grow: 1 !important;
  }

  .self-shrink- {
    flex-shrink: 1 !important;
  }

  .self-no-grow- {
    flex-grow: 0 !important;
  }

  .self-no-shrink- {
    flex-shrink: 0 !important;
  }

  .self-static- {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full- {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full- {
    flex: none !important;
  }

  .self-auto- {
    align-self: auto !important;
  }

  .self-top- {
    align-self: flex-start !important;
  }

  .self-middle- {
    align-self: center !important;
  }

  .self-bottom- {
    align-self: flex-end !important;
  }

  .self-stretch- {
    align-self: stretch !important;
  }

  .self-baseline- {
    align-self: baseline !important;
  }

  .item-top- {
    align-items: flex-start !important;
  }

  .item-middle- {
    align-items: center !important;
  }

  .item-bottom- {
    align-items: flex-end !important;
  }

  .item-left- {
    justify-content: flex-start !important;
  }

  .item-center- {
    justify-content: center !important;
  }

  .item-right- {
    justify-content: flex-end !important;
  }

  .item-baseline- {
    align-items: baseline !important;
  }

  .item-stretch- {
    align-items: stretch !important;
  }

  .item-between- {
    justify-content: space-between !important;
  }

  .item-around- {
    justify-content: space-around !important;
  }

  .item-evenly- {
    justify-content: space-evenly !important;
  }

  .content-top- {
    align-content: flex-start !important;
  }

  .content-middle- {
    align-content: center !important;
  }

  .content-bottom- {
    align-content: flex-end !important;
  }

  .content-between- {
    align-content: space-between !important;
  }

  .content-stretch- {
    align-content: stretch !important;
  }

  .content-around- {
    align-content: space-around !important;
  }
}
@media (min-width: 640px) {
  .flex-row-sm {
    flex-direction: row !important;
  }

  .flex-col-sm {
    flex-direction: column !important;
  }

  .flex-wrap-sm {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-sm {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-sm {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-sm {
    flex-grow: 1 !important;
  }

  .self-shrink-sm {
    flex-shrink: 1 !important;
  }

  .self-no-grow-sm {
    flex-grow: 0 !important;
  }

  .self-no-shrink-sm {
    flex-shrink: 0 !important;
  }

  .self-static-sm {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-sm {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-sm {
    flex: none !important;
  }

  .self-auto-sm {
    align-self: auto !important;
  }

  .self-top-sm {
    align-self: flex-start !important;
  }

  .self-middle-sm {
    align-self: center !important;
  }

  .self-bottom-sm {
    align-self: flex-end !important;
  }

  .self-stretch-sm {
    align-self: stretch !important;
  }

  .self-baseline-sm {
    align-self: baseline !important;
  }

  .item-top-sm {
    align-items: flex-start !important;
  }

  .item-middle-sm {
    align-items: center !important;
  }

  .item-bottom-sm {
    align-items: flex-end !important;
  }

  .item-left-sm {
    justify-content: flex-start !important;
  }

  .item-center-sm {
    justify-content: center !important;
  }

  .item-right-sm {
    justify-content: flex-end !important;
  }

  .item-baseline-sm {
    align-items: baseline !important;
  }

  .item-stretch-sm {
    align-items: stretch !important;
  }

  .item-between-sm {
    justify-content: space-between !important;
  }

  .item-around-sm {
    justify-content: space-around !important;
  }

  .item-evenly-sm {
    justify-content: space-evenly !important;
  }

  .content-top-sm {
    align-content: flex-start !important;
  }

  .content-middle-sm {
    align-content: center !important;
  }

  .content-bottom-sm {
    align-content: flex-end !important;
  }

  .content-between-sm {
    align-content: space-between !important;
  }

  .content-stretch-sm {
    align-content: stretch !important;
  }

  .content-around-sm {
    align-content: space-around !important;
  }
}
@media (min-width: 768px) {
  .flex-row-md {
    flex-direction: row !important;
  }

  .flex-col-md {
    flex-direction: column !important;
  }

  .flex-wrap-md {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-md {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-md {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-md {
    flex-grow: 1 !important;
  }

  .self-shrink-md {
    flex-shrink: 1 !important;
  }

  .self-no-grow-md {
    flex-grow: 0 !important;
  }

  .self-no-shrink-md {
    flex-shrink: 0 !important;
  }

  .self-static-md {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-md {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-md {
    flex: none !important;
  }

  .self-auto-md {
    align-self: auto !important;
  }

  .self-top-md {
    align-self: flex-start !important;
  }

  .self-middle-md {
    align-self: center !important;
  }

  .self-bottom-md {
    align-self: flex-end !important;
  }

  .self-stretch-md {
    align-self: stretch !important;
  }

  .self-baseline-md {
    align-self: baseline !important;
  }

  .item-top-md {
    align-items: flex-start !important;
  }

  .item-middle-md {
    align-items: center !important;
  }

  .item-bottom-md {
    align-items: flex-end !important;
  }

  .item-left-md {
    justify-content: flex-start !important;
  }

  .item-center-md {
    justify-content: center !important;
  }

  .item-right-md {
    justify-content: flex-end !important;
  }

  .item-baseline-md {
    align-items: baseline !important;
  }

  .item-stretch-md {
    align-items: stretch !important;
  }

  .item-between-md {
    justify-content: space-between !important;
  }

  .item-around-md {
    justify-content: space-around !important;
  }

  .item-evenly-md {
    justify-content: space-evenly !important;
  }

  .content-top-md {
    align-content: flex-start !important;
  }

  .content-middle-md {
    align-content: center !important;
  }

  .content-bottom-md {
    align-content: flex-end !important;
  }

  .content-between-md {
    align-content: space-between !important;
  }

  .content-stretch-md {
    align-content: stretch !important;
  }

  .content-around-md {
    align-content: space-around !important;
  }
}
@media (min-width: 1024px) {
  .flex-row-lg {
    flex-direction: row !important;
  }

  .flex-col-lg {
    flex-direction: column !important;
  }

  .flex-wrap-lg {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-lg {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-lg {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-lg {
    flex-grow: 1 !important;
  }

  .self-shrink-lg {
    flex-shrink: 1 !important;
  }

  .self-no-grow-lg {
    flex-grow: 0 !important;
  }

  .self-no-shrink-lg {
    flex-shrink: 0 !important;
  }

  .self-static-lg {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-lg {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-lg {
    flex: none !important;
  }

  .self-auto-lg {
    align-self: auto !important;
  }

  .self-top-lg {
    align-self: flex-start !important;
  }

  .self-middle-lg {
    align-self: center !important;
  }

  .self-bottom-lg {
    align-self: flex-end !important;
  }

  .self-stretch-lg {
    align-self: stretch !important;
  }

  .self-baseline-lg {
    align-self: baseline !important;
  }

  .item-top-lg {
    align-items: flex-start !important;
  }

  .item-middle-lg {
    align-items: center !important;
  }

  .item-bottom-lg {
    align-items: flex-end !important;
  }

  .item-left-lg {
    justify-content: flex-start !important;
  }

  .item-center-lg {
    justify-content: center !important;
  }

  .item-right-lg {
    justify-content: flex-end !important;
  }

  .item-baseline-lg {
    align-items: baseline !important;
  }

  .item-stretch-lg {
    align-items: stretch !important;
  }

  .item-between-lg {
    justify-content: space-between !important;
  }

  .item-around-lg {
    justify-content: space-around !important;
  }

  .item-evenly-lg {
    justify-content: space-evenly !important;
  }

  .content-top-lg {
    align-content: flex-start !important;
  }

  .content-middle-lg {
    align-content: center !important;
  }

  .content-bottom-lg {
    align-content: flex-end !important;
  }

  .content-between-lg {
    align-content: space-between !important;
  }

  .content-stretch-lg {
    align-content: stretch !important;
  }

  .content-around-lg {
    align-content: space-around !important;
  }
}
@media (min-width: 1280px) {
  .flex-row-xl {
    flex-direction: row !important;
  }

  .flex-col-xl {
    flex-direction: column !important;
  }

  .flex-wrap-xl {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-xl {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-xl {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-xl {
    flex-grow: 1 !important;
  }

  .self-shrink-xl {
    flex-shrink: 1 !important;
  }

  .self-no-grow-xl {
    flex-grow: 0 !important;
  }

  .self-no-shrink-xl {
    flex-shrink: 0 !important;
  }

  .self-static-xl {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-xl {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-xl {
    flex: none !important;
  }

  .self-auto-xl {
    align-self: auto !important;
  }

  .self-top-xl {
    align-self: flex-start !important;
  }

  .self-middle-xl {
    align-self: center !important;
  }

  .self-bottom-xl {
    align-self: flex-end !important;
  }

  .self-stretch-xl {
    align-self: stretch !important;
  }

  .self-baseline-xl {
    align-self: baseline !important;
  }

  .item-top-xl {
    align-items: flex-start !important;
  }

  .item-middle-xl {
    align-items: center !important;
  }

  .item-bottom-xl {
    align-items: flex-end !important;
  }

  .item-left-xl {
    justify-content: flex-start !important;
  }

  .item-center-xl {
    justify-content: center !important;
  }

  .item-right-xl {
    justify-content: flex-end !important;
  }

  .item-baseline-xl {
    align-items: baseline !important;
  }

  .item-stretch-xl {
    align-items: stretch !important;
  }

  .item-between-xl {
    justify-content: space-between !important;
  }

  .item-around-xl {
    justify-content: space-around !important;
  }

  .item-evenly-xl {
    justify-content: space-evenly !important;
  }

  .content-top-xl {
    align-content: flex-start !important;
  }

  .content-middle-xl {
    align-content: center !important;
  }

  .content-bottom-xl {
    align-content: flex-end !important;
  }

  .content-between-xl {
    align-content: space-between !important;
  }

  .content-stretch-xl {
    align-content: stretch !important;
  }

  .content-around-xl {
    align-content: space-around !important;
  }
}
@media (min-width: 1536px) {
  .flex-row-xxl {
    flex-direction: row !important;
  }

  .flex-col-xxl {
    flex-direction: column !important;
  }

  .flex-wrap-xxl {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-xxl {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-xxl {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-xxl {
    flex-grow: 1 !important;
  }

  .self-shrink-xxl {
    flex-shrink: 1 !important;
  }

  .self-no-grow-xxl {
    flex-grow: 0 !important;
  }

  .self-no-shrink-xxl {
    flex-shrink: 0 !important;
  }

  .self-static-xxl {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-xxl {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-xxl {
    flex: none !important;
  }

  .self-auto-xxl {
    align-self: auto !important;
  }

  .self-top-xxl {
    align-self: flex-start !important;
  }

  .self-middle-xxl {
    align-self: center !important;
  }

  .self-bottom-xxl {
    align-self: flex-end !important;
  }

  .self-stretch-xxl {
    align-self: stretch !important;
  }

  .self-baseline-xxl {
    align-self: baseline !important;
  }

  .item-top-xxl {
    align-items: flex-start !important;
  }

  .item-middle-xxl {
    align-items: center !important;
  }

  .item-bottom-xxl {
    align-items: flex-end !important;
  }

  .item-left-xxl {
    justify-content: flex-start !important;
  }

  .item-center-xxl {
    justify-content: center !important;
  }

  .item-right-xxl {
    justify-content: flex-end !important;
  }

  .item-baseline-xxl {
    align-items: baseline !important;
  }

  .item-stretch-xxl {
    align-items: stretch !important;
  }

  .item-between-xxl {
    justify-content: space-between !important;
  }

  .item-around-xxl {
    justify-content: space-around !important;
  }

  .item-evenly-xxl {
    justify-content: space-evenly !important;
  }

  .content-top-xxl {
    align-content: flex-start !important;
  }

  .content-middle-xxl {
    align-content: center !important;
  }

  .content-bottom-xxl {
    align-content: flex-end !important;
  }

  .content-between-xxl {
    align-content: space-between !important;
  }

  .content-stretch-xxl {
    align-content: stretch !important;
  }

  .content-around-xxl {
    align-content: space-around !important;
  }
}
.order-first {
  order: -9999 !important;
}
.order-last {
  order: 9999 !important;
}
.order-none {
  order: 0 !important;
}
.order-1 {
  order: 1 !important;
}
.order-2 {
  order: 2 !important;
}
.order-3 {
  order: 3 !important;
}
.order-4 {
  order: 4 !important;
}
.order-5 {
  order: 5 !important;
}
.order-6 {
  order: 6 !important;
}
.order-7 {
  order: 7 !important;
}
.order-8 {
  order: 8 !important;
}
.order-9 {
  order: 9 !important;
}
.order-10 {
  order: 10 !important;
}
.order-11 {
  order: 11 !important;
}
.order-12 {
  order: 12 !important;
}
.order-13 {
  order: 13 !important;
}
.order-14 {
  order: 14 !important;
}
.order-15 {
  order: 15 !important;
}
.order-16 {
  order: 16 !important;
}
.order-17 {
  order: 17 !important;
}
.order-18 {
  order: 18 !important;
}
.order-19 {
  order: 19 !important;
}
.order-20 {
  order: 20 !important;
}
.order-21 {
  order: 21 !important;
}
.order-22 {
  order: 22 !important;
}
.order-23 {
  order: 23 !important;
}
.order-24 {
  order: 24 !important;
}
@media (min-width: 0) {
  .order-1- {
    order: 1 !important;
  }

  .order-2- {
    order: 2 !important;
  }

  .order-3- {
    order: 3 !important;
  }

  .order-4- {
    order: 4 !important;
  }

  .order-5- {
    order: 5 !important;
  }

  .order-6- {
    order: 6 !important;
  }

  .order-7- {
    order: 7 !important;
  }

  .order-8- {
    order: 8 !important;
  }

  .order-9- {
    order: 9 !important;
  }

  .order-10- {
    order: 10 !important;
  }

  .order-11- {
    order: 11 !important;
  }

  .order-12- {
    order: 12 !important;
  }

  .order-13- {
    order: 13 !important;
  }

  .order-14- {
    order: 14 !important;
  }

  .order-15- {
    order: 15 !important;
  }

  .order-16- {
    order: 16 !important;
  }

  .order-17- {
    order: 17 !important;
  }

  .order-18- {
    order: 18 !important;
  }

  .order-19- {
    order: 19 !important;
  }

  .order-20- {
    order: 20 !important;
  }

  .order-21- {
    order: 21 !important;
  }

  .order-22- {
    order: 22 !important;
  }

  .order-23- {
    order: 23 !important;
  }

  .order-24- {
    order: 24 !important;
  }
}
@media (min-width: 640px) {
  .order-1-sm {
    order: 1 !important;
  }

  .order-2-sm {
    order: 2 !important;
  }

  .order-3-sm {
    order: 3 !important;
  }

  .order-4-sm {
    order: 4 !important;
  }

  .order-5-sm {
    order: 5 !important;
  }

  .order-6-sm {
    order: 6 !important;
  }

  .order-7-sm {
    order: 7 !important;
  }

  .order-8-sm {
    order: 8 !important;
  }

  .order-9-sm {
    order: 9 !important;
  }

  .order-10-sm {
    order: 10 !important;
  }

  .order-11-sm {
    order: 11 !important;
  }

  .order-12-sm {
    order: 12 !important;
  }

  .order-13-sm {
    order: 13 !important;
  }

  .order-14-sm {
    order: 14 !important;
  }

  .order-15-sm {
    order: 15 !important;
  }

  .order-16-sm {
    order: 16 !important;
  }

  .order-17-sm {
    order: 17 !important;
  }

  .order-18-sm {
    order: 18 !important;
  }

  .order-19-sm {
    order: 19 !important;
  }

  .order-20-sm {
    order: 20 !important;
  }

  .order-21-sm {
    order: 21 !important;
  }

  .order-22-sm {
    order: 22 !important;
  }

  .order-23-sm {
    order: 23 !important;
  }

  .order-24-sm {
    order: 24 !important;
  }
}
@media (min-width: 768px) {
  .order-1-md {
    order: 1 !important;
  }

  .order-2-md {
    order: 2 !important;
  }

  .order-3-md {
    order: 3 !important;
  }

  .order-4-md {
    order: 4 !important;
  }

  .order-5-md {
    order: 5 !important;
  }

  .order-6-md {
    order: 6 !important;
  }

  .order-7-md {
    order: 7 !important;
  }

  .order-8-md {
    order: 8 !important;
  }

  .order-9-md {
    order: 9 !important;
  }

  .order-10-md {
    order: 10 !important;
  }

  .order-11-md {
    order: 11 !important;
  }

  .order-12-md {
    order: 12 !important;
  }

  .order-13-md {
    order: 13 !important;
  }

  .order-14-md {
    order: 14 !important;
  }

  .order-15-md {
    order: 15 !important;
  }

  .order-16-md {
    order: 16 !important;
  }

  .order-17-md {
    order: 17 !important;
  }

  .order-18-md {
    order: 18 !important;
  }

  .order-19-md {
    order: 19 !important;
  }

  .order-20-md {
    order: 20 !important;
  }

  .order-21-md {
    order: 21 !important;
  }

  .order-22-md {
    order: 22 !important;
  }

  .order-23-md {
    order: 23 !important;
  }

  .order-24-md {
    order: 24 !important;
  }
}
@media (min-width: 1024px) {
  .order-1-lg {
    order: 1 !important;
  }

  .order-2-lg {
    order: 2 !important;
  }

  .order-3-lg {
    order: 3 !important;
  }

  .order-4-lg {
    order: 4 !important;
  }

  .order-5-lg {
    order: 5 !important;
  }

  .order-6-lg {
    order: 6 !important;
  }

  .order-7-lg {
    order: 7 !important;
  }

  .order-8-lg {
    order: 8 !important;
  }

  .order-9-lg {
    order: 9 !important;
  }

  .order-10-lg {
    order: 10 !important;
  }

  .order-11-lg {
    order: 11 !important;
  }

  .order-12-lg {
    order: 12 !important;
  }

  .order-13-lg {
    order: 13 !important;
  }

  .order-14-lg {
    order: 14 !important;
  }

  .order-15-lg {
    order: 15 !important;
  }

  .order-16-lg {
    order: 16 !important;
  }

  .order-17-lg {
    order: 17 !important;
  }

  .order-18-lg {
    order: 18 !important;
  }

  .order-19-lg {
    order: 19 !important;
  }

  .order-20-lg {
    order: 20 !important;
  }

  .order-21-lg {
    order: 21 !important;
  }

  .order-22-lg {
    order: 22 !important;
  }

  .order-23-lg {
    order: 23 !important;
  }

  .order-24-lg {
    order: 24 !important;
  }
}
@media (min-width: 1280px) {
  .order-1-xl {
    order: 1 !important;
  }

  .order-2-xl {
    order: 2 !important;
  }

  .order-3-xl {
    order: 3 !important;
  }

  .order-4-xl {
    order: 4 !important;
  }

  .order-5-xl {
    order: 5 !important;
  }

  .order-6-xl {
    order: 6 !important;
  }

  .order-7-xl {
    order: 7 !important;
  }

  .order-8-xl {
    order: 8 !important;
  }

  .order-9-xl {
    order: 9 !important;
  }

  .order-10-xl {
    order: 10 !important;
  }

  .order-11-xl {
    order: 11 !important;
  }

  .order-12-xl {
    order: 12 !important;
  }

  .order-13-xl {
    order: 13 !important;
  }

  .order-14-xl {
    order: 14 !important;
  }

  .order-15-xl {
    order: 15 !important;
  }

  .order-16-xl {
    order: 16 !important;
  }

  .order-17-xl {
    order: 17 !important;
  }

  .order-18-xl {
    order: 18 !important;
  }

  .order-19-xl {
    order: 19 !important;
  }

  .order-20-xl {
    order: 20 !important;
  }

  .order-21-xl {
    order: 21 !important;
  }

  .order-22-xl {
    order: 22 !important;
  }

  .order-23-xl {
    order: 23 !important;
  }

  .order-24-xl {
    order: 24 !important;
  }
}
@media (min-width: 1536px) {
  .order-1-xxl {
    order: 1 !important;
  }

  .order-2-xxl {
    order: 2 !important;
  }

  .order-3-xxl {
    order: 3 !important;
  }

  .order-4-xxl {
    order: 4 !important;
  }

  .order-5-xxl {
    order: 5 !important;
  }

  .order-6-xxl {
    order: 6 !important;
  }

  .order-7-xxl {
    order: 7 !important;
  }

  .order-8-xxl {
    order: 8 !important;
  }

  .order-9-xxl {
    order: 9 !important;
  }

  .order-10-xxl {
    order: 10 !important;
  }

  .order-11-xxl {
    order: 11 !important;
  }

  .order-12-xxl {
    order: 12 !important;
  }

  .order-13-xxl {
    order: 13 !important;
  }

  .order-14-xxl {
    order: 14 !important;
  }

  .order-15-xxl {
    order: 15 !important;
  }

  .order-16-xxl {
    order: 16 !important;
  }

  .order-17-xxl {
    order: 17 !important;
  }

  .order-18-xxl {
    order: 18 !important;
  }

  .order-19-xxl {
    order: 19 !important;
  }

  .order-20-xxl {
    order: 20 !important;
  }

  .order-21-xxl {
    order: 21 !important;
  }

  .order-22-xxl {
    order: 22 !important;
  }

  .order-23-xxl {
    order: 23 !important;
  }

  .order-24-xxl {
    order: 24 !important;
  }
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
.w-inherit {
  width: inherit;
}
.h-inherit {
  height: inherit;
}
.w-auto {
  width: auto;
}
.h-auto {
  height: auto;
}
.vw-full {
  width: 100vw;
}
.vh-full {
  height: 100vh;
}
.w-5 {
  width: 5%;
}
.w-min-5 {
  min-width: 5%;
}
.w-max-5 {
  max-width: 5%;
}
.h-5 {
  height: 5%;
}
.h-min-5 {
  min-height: 5%;
}
.h-max-5 {
  max-height: 5%;
}
.vw-5 {
  width: 5vw;
}
.vw-min-5 {
  min-width: 5vw;
}
.vw-max-5 {
  max-width: 5vw;
}
.vh-5 {
  height: 5vh;
}
.vh-min-5 {
  min-height: 5vh;
}
.vh-max-5 {
  max-height: 5vh;
}
.w-10 {
  width: 10%;
}
.w-min-10 {
  min-width: 10%;
}
.w-max-10 {
  max-width: 10%;
}
.h-10 {
  height: 10%;
}
.h-min-10 {
  min-height: 10%;
}
.h-max-10 {
  max-height: 10%;
}
.vw-10 {
  width: 10vw;
}
.vw-min-10 {
  min-width: 10vw;
}
.vw-max-10 {
  max-width: 10vw;
}
.vh-10 {
  height: 10vh;
}
.vh-min-10 {
  min-height: 10vh;
}
.vh-max-10 {
  max-height: 10vh;
}
.w-15 {
  width: 15%;
}
.w-min-15 {
  min-width: 15%;
}
.w-max-15 {
  max-width: 15%;
}
.h-15 {
  height: 15%;
}
.h-min-15 {
  min-height: 15%;
}
.h-max-15 {
  max-height: 15%;
}
.vw-15 {
  width: 15vw;
}
.vw-min-15 {
  min-width: 15vw;
}
.vw-max-15 {
  max-width: 15vw;
}
.vh-15 {
  height: 15vh;
}
.vh-min-15 {
  min-height: 15vh;
}
.vh-max-15 {
  max-height: 15vh;
}
.w-20 {
  width: 20%;
}
.w-min-20 {
  min-width: 20%;
}
.w-max-20 {
  max-width: 20%;
}
.h-20 {
  height: 20%;
}
.h-min-20 {
  min-height: 20%;
}
.h-max-20 {
  max-height: 20%;
}
.vw-20 {
  width: 20vw;
}
.vw-min-20 {
  min-width: 20vw;
}
.vw-max-20 {
  max-width: 20vw;
}
.vh-20 {
  height: 20vh;
}
.vh-min-20 {
  min-height: 20vh;
}
.vh-max-20 {
  max-height: 20vh;
}
.w-25 {
  width: 25%;
}
.w-min-25 {
  min-width: 25%;
}
.w-max-25 {
  max-width: 25%;
}
.h-25 {
  height: 25%;
}
.h-min-25 {
  min-height: 25%;
}
.h-max-25 {
  max-height: 25%;
}
.vw-25 {
  width: 25vw;
}
.vw-min-25 {
  min-width: 25vw;
}
.vw-max-25 {
  max-width: 25vw;
}
.vh-25 {
  height: 25vh;
}
.vh-min-25 {
  min-height: 25vh;
}
.vh-max-25 {
  max-height: 25vh;
}
.w-30 {
  width: 30%;
}
.w-min-30 {
  min-width: 30%;
}
.w-max-30 {
  max-width: 30%;
}
.h-30 {
  height: 30%;
}
.h-min-30 {
  min-height: 30%;
}
.h-max-30 {
  max-height: 30%;
}
.vw-30 {
  width: 30vw;
}
.vw-min-30 {
  min-width: 30vw;
}
.vw-max-30 {
  max-width: 30vw;
}
.vh-30 {
  height: 30vh;
}
.vh-min-30 {
  min-height: 30vh;
}
.vh-max-30 {
  max-height: 30vh;
}
.w-35 {
  width: 35%;
}
.w-min-35 {
  min-width: 35%;
}
.w-max-35 {
  max-width: 35%;
}
.h-35 {
  height: 35%;
}
.h-min-35 {
  min-height: 35%;
}
.h-max-35 {
  max-height: 35%;
}
.vw-35 {
  width: 35vw;
}
.vw-min-35 {
  min-width: 35vw;
}
.vw-max-35 {
  max-width: 35vw;
}
.vh-35 {
  height: 35vh;
}
.vh-min-35 {
  min-height: 35vh;
}
.vh-max-35 {
  max-height: 35vh;
}
.w-40 {
  width: 40%;
}
.w-min-40 {
  min-width: 40%;
}
.w-max-40 {
  max-width: 40%;
}
.h-40 {
  height: 40%;
}
.h-min-40 {
  min-height: 40%;
}
.h-max-40 {
  max-height: 40%;
}
.vw-40 {
  width: 40vw;
}
.vw-min-40 {
  min-width: 40vw;
}
.vw-max-40 {
  max-width: 40vw;
}
.vh-40 {
  height: 40vh;
}
.vh-min-40 {
  min-height: 40vh;
}
.vh-max-40 {
  max-height: 40vh;
}
.w-45 {
  width: 45%;
}
.w-min-45 {
  min-width: 45%;
}
.w-max-45 {
  max-width: 45%;
}
.h-45 {
  height: 45%;
}
.h-min-45 {
  min-height: 45%;
}
.h-max-45 {
  max-height: 45%;
}
.vw-45 {
  width: 45vw;
}
.vw-min-45 {
  min-width: 45vw;
}
.vw-max-45 {
  max-width: 45vw;
}
.vh-45 {
  height: 45vh;
}
.vh-min-45 {
  min-height: 45vh;
}
.vh-max-45 {
  max-height: 45vh;
}
.w-50 {
  width: 50%;
}
.w-min-50 {
  min-width: 50%;
}
.w-max-50 {
  max-width: 50%;
}
.h-50 {
  height: 50%;
}
.h-min-50 {
  min-height: 50%;
}
.h-max-50 {
  max-height: 50%;
}
.vw-50 {
  width: 50vw;
}
.vw-min-50 {
  min-width: 50vw;
}
.vw-max-50 {
  max-width: 50vw;
}
.vh-50 {
  height: 50vh;
}
.vh-min-50 {
  min-height: 50vh;
}
.vh-max-50 {
  max-height: 50vh;
}
.w-55 {
  width: 55%;
}
.w-min-55 {
  min-width: 55%;
}
.w-max-55 {
  max-width: 55%;
}
.h-55 {
  height: 55%;
}
.h-min-55 {
  min-height: 55%;
}
.h-max-55 {
  max-height: 55%;
}
.vw-55 {
  width: 55vw;
}
.vw-min-55 {
  min-width: 55vw;
}
.vw-max-55 {
  max-width: 55vw;
}
.vh-55 {
  height: 55vh;
}
.vh-min-55 {
  min-height: 55vh;
}
.vh-max-55 {
  max-height: 55vh;
}
.w-60 {
  width: 60%;
}
.w-min-60 {
  min-width: 60%;
}
.w-max-60 {
  max-width: 60%;
}
.h-60 {
  height: 60%;
}
.h-min-60 {
  min-height: 60%;
}
.h-max-60 {
  max-height: 60%;
}
.vw-60 {
  width: 60vw;
}
.vw-min-60 {
  min-width: 60vw;
}
.vw-max-60 {
  max-width: 60vw;
}
.vh-60 {
  height: 60vh;
}
.vh-min-60 {
  min-height: 60vh;
}
.vh-max-60 {
  max-height: 60vh;
}
.w-65 {
  width: 65%;
}
.w-min-65 {
  min-width: 65%;
}
.w-max-65 {
  max-width: 65%;
}
.h-65 {
  height: 65%;
}
.h-min-65 {
  min-height: 65%;
}
.h-max-65 {
  max-height: 65%;
}
.vw-65 {
  width: 65vw;
}
.vw-min-65 {
  min-width: 65vw;
}
.vw-max-65 {
  max-width: 65vw;
}
.vh-65 {
  height: 65vh;
}
.vh-min-65 {
  min-height: 65vh;
}
.vh-max-65 {
  max-height: 65vh;
}
.w-70 {
  width: 70%;
}
.w-min-70 {
  min-width: 70%;
}
.w-max-70 {
  max-width: 70%;
}
.h-70 {
  height: 70%;
}
.h-min-70 {
  min-height: 70%;
}
.h-max-70 {
  max-height: 70%;
}
.vw-70 {
  width: 70vw;
}
.vw-min-70 {
  min-width: 70vw;
}
.vw-max-70 {
  max-width: 70vw;
}
.vh-70 {
  height: 70vh;
}
.vh-min-70 {
  min-height: 70vh;
}
.vh-max-70 {
  max-height: 70vh;
}
.w-75 {
  width: 75%;
}
.w-min-75 {
  min-width: 75%;
}
.w-max-75 {
  max-width: 75%;
}
.h-75 {
  height: 75%;
}
.h-min-75 {
  min-height: 75%;
}
.h-max-75 {
  max-height: 75%;
}
.vw-75 {
  width: 75vw;
}
.vw-min-75 {
  min-width: 75vw;
}
.vw-max-75 {
  max-width: 75vw;
}
.vh-75 {
  height: 75vh;
}
.vh-min-75 {
  min-height: 75vh;
}
.vh-max-75 {
  max-height: 75vh;
}
.w-80 {
  width: 80%;
}
.w-min-80 {
  min-width: 80%;
}
.w-max-80 {
  max-width: 80%;
}
.h-80 {
  height: 80%;
}
.h-min-80 {
  min-height: 80%;
}
.h-max-80 {
  max-height: 80%;
}
.vw-80 {
  width: 80vw;
}
.vw-min-80 {
  min-width: 80vw;
}
.vw-max-80 {
  max-width: 80vw;
}
.vh-80 {
  height: 80vh;
}
.vh-min-80 {
  min-height: 80vh;
}
.vh-max-80 {
  max-height: 80vh;
}
.w-85 {
  width: 85%;
}
.w-min-85 {
  min-width: 85%;
}
.w-max-85 {
  max-width: 85%;
}
.h-85 {
  height: 85%;
}
.h-min-85 {
  min-height: 85%;
}
.h-max-85 {
  max-height: 85%;
}
.vw-85 {
  width: 85vw;
}
.vw-min-85 {
  min-width: 85vw;
}
.vw-max-85 {
  max-width: 85vw;
}
.vh-85 {
  height: 85vh;
}
.vh-min-85 {
  min-height: 85vh;
}
.vh-max-85 {
  max-height: 85vh;
}
.w-90 {
  width: 90%;
}
.w-min-90 {
  min-width: 90%;
}
.w-max-90 {
  max-width: 90%;
}
.h-90 {
  height: 90%;
}
.h-min-90 {
  min-height: 90%;
}
.h-max-90 {
  max-height: 90%;
}
.vw-90 {
  width: 90vw;
}
.vw-min-90 {
  min-width: 90vw;
}
.vw-max-90 {
  max-width: 90vw;
}
.vh-90 {
  height: 90vh;
}
.vh-min-90 {
  min-height: 90vh;
}
.vh-max-90 {
  max-height: 90vh;
}
.w-95 {
  width: 95%;
}
.w-min-95 {
  min-width: 95%;
}
.w-max-95 {
  max-width: 95%;
}
.h-95 {
  height: 95%;
}
.h-min-95 {
  min-height: 95%;
}
.h-max-95 {
  max-height: 95%;
}
.vw-95 {
  width: 95vw;
}
.vw-min-95 {
  min-width: 95vw;
}
.vw-max-95 {
  max-width: 95vw;
}
.vh-95 {
  height: 95vh;
}
.vh-min-95 {
  min-height: 95vh;
}
.vh-max-95 {
  max-height: 95vh;
}
.w-100 {
  width: 100%;
}
.w-min-100 {
  min-width: 100%;
}
.w-max-100 {
  max-width: 100%;
}
.h-100 {
  height: 100%;
}
.h-min-100 {
  min-height: 100%;
}
.h-max-100 {
  max-height: 100%;
}
.vw-100 {
  width: 100vw;
}
.vw-min-100 {
  min-width: 100vw;
}
.vw-max-100 {
  max-width: 100vw;
}
.vh-100 {
  height: 100vh;
}
.vh-min-100 {
  min-height: 100vh;
}
.vh-max-100 {
  max-height: 100vh;
}
.p-none {
  padding: 0px !important;
}
.p-xxs {
  padding: 4px !important;
}
.p-xs {
  padding: 8px !important;
}
.p-sm {
  padding: 12px !important;
}
.p-md {
  padding: 16px !important;
}
.p-lg {
  padding: 24px !important;
}
.p-xl {
  padding: 32px !important;
}
.p-xxl {
  padding: 40px !important;
}
.m-none {
  margin: 0px !important;
}
.m-xxs {
  margin: 4px !important;
}
.m-xs {
  margin: 8px !important;
}
.m-sm {
  margin: 12px !important;
}
.m-md {
  margin: 16px !important;
}
.m-lg {
  margin: 24px !important;
}
.m-xl {
  margin: 32px !important;
}
.m-xxl {
  margin: 40px !important;
}
.w-none {
  width: 0px !important;
}
.w-xxs {
  width: 40px !important;
}
.w-xs {
  width: 80px !important;
}
.w-sm {
  width: 120px !important;
}
.w-md {
  width: 160px !important;
}
.w-lg {
  width: 240px !important;
}
.w-xl {
  width: 320px !important;
}
.w-xxl {
  width: 400px !important;
}
.w-min-none {
  min-width: 0px !important;
}
.w-min-xxs {
  min-width: 40px !important;
}
.w-min-xs {
  min-width: 80px !important;
}
.w-min-sm {
  min-width: 120px !important;
}
.w-min-md {
  min-width: 160px !important;
}
.w-min-lg {
  min-width: 240px !important;
}
.w-min-xl {
  min-width: 320px !important;
}
.w-min-xxl {
  min-width: 400px !important;
}
.w-max-none {
  max-width: 0px !important;
}
.w-max-xxs {
  max-width: 40px !important;
}
.w-max-xs {
  max-width: 80px !important;
}
.w-max-sm {
  max-width: 120px !important;
}
.w-max-md {
  max-width: 160px !important;
}
.w-max-lg {
  max-width: 240px !important;
}
.w-max-xl {
  max-width: 320px !important;
}
.w-max-xxl {
  max-width: 400px !important;
}
.h-none {
  height: 0px !important;
}
.h-xxs {
  height: 40px !important;
}
.h-xs {
  height: 80px !important;
}
.h-sm {
  height: 120px !important;
}
.h-md {
  height: 160px !important;
}
.h-lg {
  height: 240px !important;
}
.h-xl {
  height: 320px !important;
}
.h-xxl {
  height: 400px !important;
}
.h-max-none {
  max-height: 0px !important;
}
.h-max-xxs {
  max-height: 40px !important;
}
.h-max-xs {
  max-height: 80px !important;
}
.h-max-sm {
  max-height: 120px !important;
}
.h-max-md {
  max-height: 160px !important;
}
.h-max-lg {
  max-height: 240px !important;
}
.h-max-xl {
  max-height: 320px !important;
}
.h-max-xxl {
  max-height: 400px !important;
}
.h-min-none {
  min-height: 0px !important;
}
.h-min-xxs {
  min-height: 40px !important;
}
.h-min-xs {
  min-height: 80px !important;
}
.h-min-sm {
  min-height: 120px !important;
}
.h-min-md {
  min-height: 160px !important;
}
.h-min-lg {
  min-height: 240px !important;
}
.h-min-xl {
  min-height: 320px !important;
}
.h-min-xxl {
  min-height: 400px !important;
}
.h-max-none {
  max-height: 0px !important;
}
.h-max-xxs {
  max-height: 40px !important;
}
.h-max-xs {
  max-height: 80px !important;
}
.h-max-sm {
  max-height: 120px !important;
}
.h-max-md {
  max-height: 160px !important;
}
.h-max-lg {
  max-height: 240px !important;
}
.h-max-xl {
  max-height: 320px !important;
}
.h-max-xxl {
  max-height: 400px !important;
}
.m-l-none {
  margin-left: 0px !important;
}
.m-l-xxs {
  margin-left: 4px !important;
}
.m-l-xs {
  margin-left: 8px !important;
}
.m-l-sm {
  margin-left: 12px !important;
}
.m-l-md {
  margin-left: 16px !important;
}
.m-l-lg {
  margin-left: 24px !important;
}
.m-l-xl {
  margin-left: 32px !important;
}
.m-l-xxl {
  margin-left: 40px !important;
}
.m-r-none {
  margin-right: 0px !important;
}
.m-r-xxs {
  margin-right: 4px !important;
}
.m-r-xs {
  margin-right: 8px !important;
}
.m-r-sm {
  margin-right: 12px !important;
}
.m-r-md {
  margin-right: 16px !important;
}
.m-r-lg {
  margin-right: 24px !important;
}
.m-r-xl {
  margin-right: 32px !important;
}
.m-r-xxl {
  margin-right: 40px !important;
}
.m-t-none {
  margin-top: 0px !important;
}
.m-t-xxs {
  margin-top: 4px !important;
}
.m-t-xs {
  margin-top: 8px !important;
}
.m-t-sm {
  margin-top: 12px !important;
}
.m-t-md {
  margin-top: 16px !important;
}
.m-t-lg {
  margin-top: 24px !important;
}
.m-t-xl {
  margin-top: 32px !important;
}
.m-t-xxl {
  margin-top: 40px !important;
}
.m-b-none {
  margin-bottom: 0px !important;
}
.m-b-xxs {
  margin-bottom: 4px !important;
}
.m-b-xs {
  margin-bottom: 8px !important;
}
.m-b-sm {
  margin-bottom: 12px !important;
}
.m-b-md {
  margin-bottom: 16px !important;
}
.m-b-lg {
  margin-bottom: 24px !important;
}
.m-b-xl {
  margin-bottom: 32px !important;
}
.m-b-xxl {
  margin-bottom: 40px !important;
}
.p-l-none {
  padding-left: 0px !important;
}
.p-l-xxs {
  padding-left: 4px !important;
}
.p-l-xs {
  padding-left: 8px !important;
}
.p-l-sm {
  padding-left: 12px !important;
}
.p-l-md {
  padding-left: 16px !important;
}
.p-l-lg {
  padding-left: 24px !important;
}
.p-l-xl {
  padding-left: 32px !important;
}
.p-l-xxl {
  padding-left: 40px !important;
}
.p-r-none {
  padding-right: 0px !important;
}
.p-r-xxs {
  padding-right: 4px !important;
}
.p-r-xs {
  padding-right: 8px !important;
}
.p-r-sm {
  padding-right: 12px !important;
}
.p-r-md {
  padding-right: 16px !important;
}
.p-r-lg {
  padding-right: 24px !important;
}
.p-r-xl {
  padding-right: 32px !important;
}
.p-r-xxl {
  padding-right: 40px !important;
}
.p-t-none {
  padding-top: 0px !important;
}
.p-t-xxs {
  padding-top: 4px !important;
}
.p-t-xs {
  padding-top: 8px !important;
}
.p-t-sm {
  padding-top: 12px !important;
}
.p-t-md {
  padding-top: 16px !important;
}
.p-t-lg {
  padding-top: 24px !important;
}
.p-t-xl {
  padding-top: 32px !important;
}
.p-t-xxl {
  padding-top: 40px !important;
}
.p-b-none {
  padding-bottom: 0px !important;
}
.p-b-xxs {
  padding-bottom: 4px !important;
}
.p-b-xs {
  padding-bottom: 8px !important;
}
.p-b-sm {
  padding-bottom: 12px !important;
}
.p-b-md {
  padding-bottom: 16px !important;
}
.p-b-lg {
  padding-bottom: 24px !important;
}
.p-b-xl {
  padding-bottom: 32px !important;
}
.p-b-xxl {
  padding-bottom: 40px !important;
}
.gap-none {
  gap: 0px !important;
}
.gap-xxs {
  gap: 4px !important;
}
.gap-xs {
  gap: 8px !important;
}
.gap-sm {
  gap: 12px !important;
}
.gap-md {
  gap: 16px !important;
}
.gap-lg {
  gap: 24px !important;
}
.gap-xl {
  gap: 32px !important;
}
.gap-xxl {
  gap: 40px !important;
}
@media (min-width: 0) {
  .w-full- {
    width: 100%;
  }

  .h-full- {
    height: 100%;
  }

  .w-inherit- {
    width: inherit;
  }

  .h-inherit- {
    height: inherit;
  }

  .w-auto- {
    width: auto;
  }

  .h-auto- {
    height: auto;
  }

  .vw-full- {
    width: 100vw;
  }

  .vh-full- {
    height: 100vh;
  }

  .w-5- {
    width: 5%;
  }

  .w-min-5- {
    min-width: 5%;
  }

  .w-max-5- {
    max-width: 5%;
  }

  .h-5- {
    height: 5%;
  }

  .h-min-5- {
    min-height: 5%;
  }

  .h-max-5- {
    max-height: 5%;
  }

  .vw-5- {
    width: 5vw;
  }

  .vw-min-5- {
    min-width: 5vw;
  }

  .vw-max-5- {
    max-width: 5vw;
  }

  .vh-5- {
    height: 5vh;
  }

  .vh-min-5- {
    min-height: 5vh;
  }

  .vh-max-5- {
    max-height: 5vh;
  }

  .w-10- {
    width: 10%;
  }

  .w-min-10- {
    min-width: 10%;
  }

  .w-max-10- {
    max-width: 10%;
  }

  .h-10- {
    height: 10%;
  }

  .h-min-10- {
    min-height: 10%;
  }

  .h-max-10- {
    max-height: 10%;
  }

  .vw-10- {
    width: 10vw;
  }

  .vw-min-10- {
    min-width: 10vw;
  }

  .vw-max-10- {
    max-width: 10vw;
  }

  .vh-10- {
    height: 10vh;
  }

  .vh-min-10- {
    min-height: 10vh;
  }

  .vh-max-10- {
    max-height: 10vh;
  }

  .w-15- {
    width: 15%;
  }

  .w-min-15- {
    min-width: 15%;
  }

  .w-max-15- {
    max-width: 15%;
  }

  .h-15- {
    height: 15%;
  }

  .h-min-15- {
    min-height: 15%;
  }

  .h-max-15- {
    max-height: 15%;
  }

  .vw-15- {
    width: 15vw;
  }

  .vw-min-15- {
    min-width: 15vw;
  }

  .vw-max-15- {
    max-width: 15vw;
  }

  .vh-15- {
    height: 15vh;
  }

  .vh-min-15- {
    min-height: 15vh;
  }

  .vh-max-15- {
    max-height: 15vh;
  }

  .w-20- {
    width: 20%;
  }

  .w-min-20- {
    min-width: 20%;
  }

  .w-max-20- {
    max-width: 20%;
  }

  .h-20- {
    height: 20%;
  }

  .h-min-20- {
    min-height: 20%;
  }

  .h-max-20- {
    max-height: 20%;
  }

  .vw-20- {
    width: 20vw;
  }

  .vw-min-20- {
    min-width: 20vw;
  }

  .vw-max-20- {
    max-width: 20vw;
  }

  .vh-20- {
    height: 20vh;
  }

  .vh-min-20- {
    min-height: 20vh;
  }

  .vh-max-20- {
    max-height: 20vh;
  }

  .w-25- {
    width: 25%;
  }

  .w-min-25- {
    min-width: 25%;
  }

  .w-max-25- {
    max-width: 25%;
  }

  .h-25- {
    height: 25%;
  }

  .h-min-25- {
    min-height: 25%;
  }

  .h-max-25- {
    max-height: 25%;
  }

  .vw-25- {
    width: 25vw;
  }

  .vw-min-25- {
    min-width: 25vw;
  }

  .vw-max-25- {
    max-width: 25vw;
  }

  .vh-25- {
    height: 25vh;
  }

  .vh-min-25- {
    min-height: 25vh;
  }

  .vh-max-25- {
    max-height: 25vh;
  }

  .w-30- {
    width: 30%;
  }

  .w-min-30- {
    min-width: 30%;
  }

  .w-max-30- {
    max-width: 30%;
  }

  .h-30- {
    height: 30%;
  }

  .h-min-30- {
    min-height: 30%;
  }

  .h-max-30- {
    max-height: 30%;
  }

  .vw-30- {
    width: 30vw;
  }

  .vw-min-30- {
    min-width: 30vw;
  }

  .vw-max-30- {
    max-width: 30vw;
  }

  .vh-30- {
    height: 30vh;
  }

  .vh-min-30- {
    min-height: 30vh;
  }

  .vh-max-30- {
    max-height: 30vh;
  }

  .w-35- {
    width: 35%;
  }

  .w-min-35- {
    min-width: 35%;
  }

  .w-max-35- {
    max-width: 35%;
  }

  .h-35- {
    height: 35%;
  }

  .h-min-35- {
    min-height: 35%;
  }

  .h-max-35- {
    max-height: 35%;
  }

  .vw-35- {
    width: 35vw;
  }

  .vw-min-35- {
    min-width: 35vw;
  }

  .vw-max-35- {
    max-width: 35vw;
  }

  .vh-35- {
    height: 35vh;
  }

  .vh-min-35- {
    min-height: 35vh;
  }

  .vh-max-35- {
    max-height: 35vh;
  }

  .w-40- {
    width: 40%;
  }

  .w-min-40- {
    min-width: 40%;
  }

  .w-max-40- {
    max-width: 40%;
  }

  .h-40- {
    height: 40%;
  }

  .h-min-40- {
    min-height: 40%;
  }

  .h-max-40- {
    max-height: 40%;
  }

  .vw-40- {
    width: 40vw;
  }

  .vw-min-40- {
    min-width: 40vw;
  }

  .vw-max-40- {
    max-width: 40vw;
  }

  .vh-40- {
    height: 40vh;
  }

  .vh-min-40- {
    min-height: 40vh;
  }

  .vh-max-40- {
    max-height: 40vh;
  }

  .w-45- {
    width: 45%;
  }

  .w-min-45- {
    min-width: 45%;
  }

  .w-max-45- {
    max-width: 45%;
  }

  .h-45- {
    height: 45%;
  }

  .h-min-45- {
    min-height: 45%;
  }

  .h-max-45- {
    max-height: 45%;
  }

  .vw-45- {
    width: 45vw;
  }

  .vw-min-45- {
    min-width: 45vw;
  }

  .vw-max-45- {
    max-width: 45vw;
  }

  .vh-45- {
    height: 45vh;
  }

  .vh-min-45- {
    min-height: 45vh;
  }

  .vh-max-45- {
    max-height: 45vh;
  }

  .w-50- {
    width: 50%;
  }

  .w-min-50- {
    min-width: 50%;
  }

  .w-max-50- {
    max-width: 50%;
  }

  .h-50- {
    height: 50%;
  }

  .h-min-50- {
    min-height: 50%;
  }

  .h-max-50- {
    max-height: 50%;
  }

  .vw-50- {
    width: 50vw;
  }

  .vw-min-50- {
    min-width: 50vw;
  }

  .vw-max-50- {
    max-width: 50vw;
  }

  .vh-50- {
    height: 50vh;
  }

  .vh-min-50- {
    min-height: 50vh;
  }

  .vh-max-50- {
    max-height: 50vh;
  }

  .w-55- {
    width: 55%;
  }

  .w-min-55- {
    min-width: 55%;
  }

  .w-max-55- {
    max-width: 55%;
  }

  .h-55- {
    height: 55%;
  }

  .h-min-55- {
    min-height: 55%;
  }

  .h-max-55- {
    max-height: 55%;
  }

  .vw-55- {
    width: 55vw;
  }

  .vw-min-55- {
    min-width: 55vw;
  }

  .vw-max-55- {
    max-width: 55vw;
  }

  .vh-55- {
    height: 55vh;
  }

  .vh-min-55- {
    min-height: 55vh;
  }

  .vh-max-55- {
    max-height: 55vh;
  }

  .w-60- {
    width: 60%;
  }

  .w-min-60- {
    min-width: 60%;
  }

  .w-max-60- {
    max-width: 60%;
  }

  .h-60- {
    height: 60%;
  }

  .h-min-60- {
    min-height: 60%;
  }

  .h-max-60- {
    max-height: 60%;
  }

  .vw-60- {
    width: 60vw;
  }

  .vw-min-60- {
    min-width: 60vw;
  }

  .vw-max-60- {
    max-width: 60vw;
  }

  .vh-60- {
    height: 60vh;
  }

  .vh-min-60- {
    min-height: 60vh;
  }

  .vh-max-60- {
    max-height: 60vh;
  }

  .w-65- {
    width: 65%;
  }

  .w-min-65- {
    min-width: 65%;
  }

  .w-max-65- {
    max-width: 65%;
  }

  .h-65- {
    height: 65%;
  }

  .h-min-65- {
    min-height: 65%;
  }

  .h-max-65- {
    max-height: 65%;
  }

  .vw-65- {
    width: 65vw;
  }

  .vw-min-65- {
    min-width: 65vw;
  }

  .vw-max-65- {
    max-width: 65vw;
  }

  .vh-65- {
    height: 65vh;
  }

  .vh-min-65- {
    min-height: 65vh;
  }

  .vh-max-65- {
    max-height: 65vh;
  }

  .w-70- {
    width: 70%;
  }

  .w-min-70- {
    min-width: 70%;
  }

  .w-max-70- {
    max-width: 70%;
  }

  .h-70- {
    height: 70%;
  }

  .h-min-70- {
    min-height: 70%;
  }

  .h-max-70- {
    max-height: 70%;
  }

  .vw-70- {
    width: 70vw;
  }

  .vw-min-70- {
    min-width: 70vw;
  }

  .vw-max-70- {
    max-width: 70vw;
  }

  .vh-70- {
    height: 70vh;
  }

  .vh-min-70- {
    min-height: 70vh;
  }

  .vh-max-70- {
    max-height: 70vh;
  }

  .w-75- {
    width: 75%;
  }

  .w-min-75- {
    min-width: 75%;
  }

  .w-max-75- {
    max-width: 75%;
  }

  .h-75- {
    height: 75%;
  }

  .h-min-75- {
    min-height: 75%;
  }

  .h-max-75- {
    max-height: 75%;
  }

  .vw-75- {
    width: 75vw;
  }

  .vw-min-75- {
    min-width: 75vw;
  }

  .vw-max-75- {
    max-width: 75vw;
  }

  .vh-75- {
    height: 75vh;
  }

  .vh-min-75- {
    min-height: 75vh;
  }

  .vh-max-75- {
    max-height: 75vh;
  }

  .w-80- {
    width: 80%;
  }

  .w-min-80- {
    min-width: 80%;
  }

  .w-max-80- {
    max-width: 80%;
  }

  .h-80- {
    height: 80%;
  }

  .h-min-80- {
    min-height: 80%;
  }

  .h-max-80- {
    max-height: 80%;
  }

  .vw-80- {
    width: 80vw;
  }

  .vw-min-80- {
    min-width: 80vw;
  }

  .vw-max-80- {
    max-width: 80vw;
  }

  .vh-80- {
    height: 80vh;
  }

  .vh-min-80- {
    min-height: 80vh;
  }

  .vh-max-80- {
    max-height: 80vh;
  }

  .w-85- {
    width: 85%;
  }

  .w-min-85- {
    min-width: 85%;
  }

  .w-max-85- {
    max-width: 85%;
  }

  .h-85- {
    height: 85%;
  }

  .h-min-85- {
    min-height: 85%;
  }

  .h-max-85- {
    max-height: 85%;
  }

  .vw-85- {
    width: 85vw;
  }

  .vw-min-85- {
    min-width: 85vw;
  }

  .vw-max-85- {
    max-width: 85vw;
  }

  .vh-85- {
    height: 85vh;
  }

  .vh-min-85- {
    min-height: 85vh;
  }

  .vh-max-85- {
    max-height: 85vh;
  }

  .w-90- {
    width: 90%;
  }

  .w-min-90- {
    min-width: 90%;
  }

  .w-max-90- {
    max-width: 90%;
  }

  .h-90- {
    height: 90%;
  }

  .h-min-90- {
    min-height: 90%;
  }

  .h-max-90- {
    max-height: 90%;
  }

  .vw-90- {
    width: 90vw;
  }

  .vw-min-90- {
    min-width: 90vw;
  }

  .vw-max-90- {
    max-width: 90vw;
  }

  .vh-90- {
    height: 90vh;
  }

  .vh-min-90- {
    min-height: 90vh;
  }

  .vh-max-90- {
    max-height: 90vh;
  }

  .w-95- {
    width: 95%;
  }

  .w-min-95- {
    min-width: 95%;
  }

  .w-max-95- {
    max-width: 95%;
  }

  .h-95- {
    height: 95%;
  }

  .h-min-95- {
    min-height: 95%;
  }

  .h-max-95- {
    max-height: 95%;
  }

  .vw-95- {
    width: 95vw;
  }

  .vw-min-95- {
    min-width: 95vw;
  }

  .vw-max-95- {
    max-width: 95vw;
  }

  .vh-95- {
    height: 95vh;
  }

  .vh-min-95- {
    min-height: 95vh;
  }

  .vh-max-95- {
    max-height: 95vh;
  }

  .w-100- {
    width: 100%;
  }

  .w-min-100- {
    min-width: 100%;
  }

  .w-max-100- {
    max-width: 100%;
  }

  .h-100- {
    height: 100%;
  }

  .h-min-100- {
    min-height: 100%;
  }

  .h-max-100- {
    max-height: 100%;
  }

  .vw-100- {
    width: 100vw;
  }

  .vw-min-100- {
    min-width: 100vw;
  }

  .vw-max-100- {
    max-width: 100vw;
  }

  .vh-100- {
    height: 100vh;
  }

  .vh-min-100- {
    min-height: 100vh;
  }

  .vh-max-100- {
    max-height: 100vh;
  }

  .p-none- {
    padding: 0px !important;
  }

  .p-xxs- {
    padding: 4px !important;
  }

  .p-xs- {
    padding: 8px !important;
  }

  .p-sm- {
    padding: 12px !important;
  }

  .p-md- {
    padding: 16px !important;
  }

  .p-lg- {
    padding: 24px !important;
  }

  .p-xl- {
    padding: 32px !important;
  }

  .p-xxl- {
    padding: 40px !important;
  }

  .m-none- {
    margin: 0px !important;
  }

  .m-xxs- {
    margin: 4px !important;
  }

  .m-xs- {
    margin: 8px !important;
  }

  .m-sm- {
    margin: 12px !important;
  }

  .m-md- {
    margin: 16px !important;
  }

  .m-lg- {
    margin: 24px !important;
  }

  .m-xl- {
    margin: 32px !important;
  }

  .m-xxl- {
    margin: 40px !important;
  }

  .w-none- {
    width: 0px !important;
  }

  .w-xxs- {
    width: 40px !important;
  }

  .w-xs- {
    width: 80px !important;
  }

  .w-sm- {
    width: 120px !important;
  }

  .w-md- {
    width: 160px !important;
  }

  .w-lg- {
    width: 240px !important;
  }

  .w-xl- {
    width: 320px !important;
  }

  .w-xxl- {
    width: 400px !important;
  }

  .w-min-none- {
    min-width: 0px !important;
  }

  .w-min-xxs- {
    min-width: 40px !important;
  }

  .w-min-xs- {
    min-width: 80px !important;
  }

  .w-min-sm- {
    min-width: 120px !important;
  }

  .w-min-md- {
    min-width: 160px !important;
  }

  .w-min-lg- {
    min-width: 240px !important;
  }

  .w-min-xl- {
    min-width: 320px !important;
  }

  .w-min-xxl- {
    min-width: 400px !important;
  }

  .w-max-none- {
    max-width: 0px !important;
  }

  .w-max-xxs- {
    max-width: 40px !important;
  }

  .w-max-xs- {
    max-width: 80px !important;
  }

  .w-max-sm- {
    max-width: 120px !important;
  }

  .w-max-md- {
    max-width: 160px !important;
  }

  .w-max-lg- {
    max-width: 240px !important;
  }

  .w-max-xl- {
    max-width: 320px !important;
  }

  .w-max-xxl- {
    max-width: 400px !important;
  }

  .h-none- {
    height: 0px !important;
  }

  .h-xxs- {
    height: 40px !important;
  }

  .h-xs- {
    height: 80px !important;
  }

  .h-sm- {
    height: 120px !important;
  }

  .h-md- {
    height: 160px !important;
  }

  .h-lg- {
    height: 240px !important;
  }

  .h-xl- {
    height: 320px !important;
  }

  .h-xxl- {
    height: 400px !important;
  }

  .h-max-none- {
    max-height: 0px !important;
  }

  .h-max-xxs- {
    max-height: 40px !important;
  }

  .h-max-xs- {
    max-height: 80px !important;
  }

  .h-max-sm- {
    max-height: 120px !important;
  }

  .h-max-md- {
    max-height: 160px !important;
  }

  .h-max-lg- {
    max-height: 240px !important;
  }

  .h-max-xl- {
    max-height: 320px !important;
  }

  .h-max-xxl- {
    max-height: 400px !important;
  }

  .h-min-none- {
    min-height: 0px !important;
  }

  .h-min-xxs- {
    min-height: 40px !important;
  }

  .h-min-xs- {
    min-height: 80px !important;
  }

  .h-min-sm- {
    min-height: 120px !important;
  }

  .h-min-md- {
    min-height: 160px !important;
  }

  .h-min-lg- {
    min-height: 240px !important;
  }

  .h-min-xl- {
    min-height: 320px !important;
  }

  .h-min-xxl- {
    min-height: 400px !important;
  }

  .h-max-none- {
    max-height: 0px !important;
  }

  .h-max-xxs- {
    max-height: 40px !important;
  }

  .h-max-xs- {
    max-height: 80px !important;
  }

  .h-max-sm- {
    max-height: 120px !important;
  }

  .h-max-md- {
    max-height: 160px !important;
  }

  .h-max-lg- {
    max-height: 240px !important;
  }

  .h-max-xl- {
    max-height: 320px !important;
  }

  .h-max-xxl- {
    max-height: 400px !important;
  }

  .m-l-none- {
    margin-left: 0px !important;
  }

  .m-l-xxs- {
    margin-left: 4px !important;
  }

  .m-l-xs- {
    margin-left: 8px !important;
  }

  .m-l-sm- {
    margin-left: 12px !important;
  }

  .m-l-md- {
    margin-left: 16px !important;
  }

  .m-l-lg- {
    margin-left: 24px !important;
  }

  .m-l-xl- {
    margin-left: 32px !important;
  }

  .m-l-xxl- {
    margin-left: 40px !important;
  }

  .m-r-none- {
    margin-right: 0px !important;
  }

  .m-r-xxs- {
    margin-right: 4px !important;
  }

  .m-r-xs- {
    margin-right: 8px !important;
  }

  .m-r-sm- {
    margin-right: 12px !important;
  }

  .m-r-md- {
    margin-right: 16px !important;
  }

  .m-r-lg- {
    margin-right: 24px !important;
  }

  .m-r-xl- {
    margin-right: 32px !important;
  }

  .m-r-xxl- {
    margin-right: 40px !important;
  }

  .m-t-none- {
    margin-top: 0px !important;
  }

  .m-t-xxs- {
    margin-top: 4px !important;
  }

  .m-t-xs- {
    margin-top: 8px !important;
  }

  .m-t-sm- {
    margin-top: 12px !important;
  }

  .m-t-md- {
    margin-top: 16px !important;
  }

  .m-t-lg- {
    margin-top: 24px !important;
  }

  .m-t-xl- {
    margin-top: 32px !important;
  }

  .m-t-xxl- {
    margin-top: 40px !important;
  }

  .m-b-none- {
    margin-bottom: 0px !important;
  }

  .m-b-xxs- {
    margin-bottom: 4px !important;
  }

  .m-b-xs- {
    margin-bottom: 8px !important;
  }

  .m-b-sm- {
    margin-bottom: 12px !important;
  }

  .m-b-md- {
    margin-bottom: 16px !important;
  }

  .m-b-lg- {
    margin-bottom: 24px !important;
  }

  .m-b-xl- {
    margin-bottom: 32px !important;
  }

  .m-b-xxl- {
    margin-bottom: 40px !important;
  }

  .p-l-none- {
    padding-left: 0px !important;
  }

  .p-l-xxs- {
    padding-left: 4px !important;
  }

  .p-l-xs- {
    padding-left: 8px !important;
  }

  .p-l-sm- {
    padding-left: 12px !important;
  }

  .p-l-md- {
    padding-left: 16px !important;
  }

  .p-l-lg- {
    padding-left: 24px !important;
  }

  .p-l-xl- {
    padding-left: 32px !important;
  }

  .p-l-xxl- {
    padding-left: 40px !important;
  }

  .p-r-none- {
    padding-right: 0px !important;
  }

  .p-r-xxs- {
    padding-right: 4px !important;
  }

  .p-r-xs- {
    padding-right: 8px !important;
  }

  .p-r-sm- {
    padding-right: 12px !important;
  }

  .p-r-md- {
    padding-right: 16px !important;
  }

  .p-r-lg- {
    padding-right: 24px !important;
  }

  .p-r-xl- {
    padding-right: 32px !important;
  }

  .p-r-xxl- {
    padding-right: 40px !important;
  }

  .p-t-none- {
    padding-top: 0px !important;
  }

  .p-t-xxs- {
    padding-top: 4px !important;
  }

  .p-t-xs- {
    padding-top: 8px !important;
  }

  .p-t-sm- {
    padding-top: 12px !important;
  }

  .p-t-md- {
    padding-top: 16px !important;
  }

  .p-t-lg- {
    padding-top: 24px !important;
  }

  .p-t-xl- {
    padding-top: 32px !important;
  }

  .p-t-xxl- {
    padding-top: 40px !important;
  }

  .p-b-none- {
    padding-bottom: 0px !important;
  }

  .p-b-xxs- {
    padding-bottom: 4px !important;
  }

  .p-b-xs- {
    padding-bottom: 8px !important;
  }

  .p-b-sm- {
    padding-bottom: 12px !important;
  }

  .p-b-md- {
    padding-bottom: 16px !important;
  }

  .p-b-lg- {
    padding-bottom: 24px !important;
  }

  .p-b-xl- {
    padding-bottom: 32px !important;
  }

  .p-b-xxl- {
    padding-bottom: 40px !important;
  }

  .gap-none- {
    gap: 0px !important;
  }

  .gap-xxs- {
    gap: 4px !important;
  }

  .gap-xs- {
    gap: 8px !important;
  }

  .gap-sm- {
    gap: 12px !important;
  }

  .gap-md- {
    gap: 16px !important;
  }

  .gap-lg- {
    gap: 24px !important;
  }

  .gap-xl- {
    gap: 32px !important;
  }

  .gap-xxl- {
    gap: 40px !important;
  }
}
@media (min-width: 640px) {
  .w-full-sm {
    width: 100%;
  }

  .h-full-sm {
    height: 100%;
  }

  .w-inherit-sm {
    width: inherit;
  }

  .h-inherit-sm {
    height: inherit;
  }

  .w-auto-sm {
    width: auto;
  }

  .h-auto-sm {
    height: auto;
  }

  .vw-full-sm {
    width: 100vw;
  }

  .vh-full-sm {
    height: 100vh;
  }

  .w-5-sm {
    width: 5%;
  }

  .w-min-5-sm {
    min-width: 5%;
  }

  .w-max-5-sm {
    max-width: 5%;
  }

  .h-5-sm {
    height: 5%;
  }

  .h-min-5-sm {
    min-height: 5%;
  }

  .h-max-5-sm {
    max-height: 5%;
  }

  .vw-5-sm {
    width: 5vw;
  }

  .vw-min-5-sm {
    min-width: 5vw;
  }

  .vw-max-5-sm {
    max-width: 5vw;
  }

  .vh-5-sm {
    height: 5vh;
  }

  .vh-min-5-sm {
    min-height: 5vh;
  }

  .vh-max-5-sm {
    max-height: 5vh;
  }

  .w-10-sm {
    width: 10%;
  }

  .w-min-10-sm {
    min-width: 10%;
  }

  .w-max-10-sm {
    max-width: 10%;
  }

  .h-10-sm {
    height: 10%;
  }

  .h-min-10-sm {
    min-height: 10%;
  }

  .h-max-10-sm {
    max-height: 10%;
  }

  .vw-10-sm {
    width: 10vw;
  }

  .vw-min-10-sm {
    min-width: 10vw;
  }

  .vw-max-10-sm {
    max-width: 10vw;
  }

  .vh-10-sm {
    height: 10vh;
  }

  .vh-min-10-sm {
    min-height: 10vh;
  }

  .vh-max-10-sm {
    max-height: 10vh;
  }

  .w-15-sm {
    width: 15%;
  }

  .w-min-15-sm {
    min-width: 15%;
  }

  .w-max-15-sm {
    max-width: 15%;
  }

  .h-15-sm {
    height: 15%;
  }

  .h-min-15-sm {
    min-height: 15%;
  }

  .h-max-15-sm {
    max-height: 15%;
  }

  .vw-15-sm {
    width: 15vw;
  }

  .vw-min-15-sm {
    min-width: 15vw;
  }

  .vw-max-15-sm {
    max-width: 15vw;
  }

  .vh-15-sm {
    height: 15vh;
  }

  .vh-min-15-sm {
    min-height: 15vh;
  }

  .vh-max-15-sm {
    max-height: 15vh;
  }

  .w-20-sm {
    width: 20%;
  }

  .w-min-20-sm {
    min-width: 20%;
  }

  .w-max-20-sm {
    max-width: 20%;
  }

  .h-20-sm {
    height: 20%;
  }

  .h-min-20-sm {
    min-height: 20%;
  }

  .h-max-20-sm {
    max-height: 20%;
  }

  .vw-20-sm {
    width: 20vw;
  }

  .vw-min-20-sm {
    min-width: 20vw;
  }

  .vw-max-20-sm {
    max-width: 20vw;
  }

  .vh-20-sm {
    height: 20vh;
  }

  .vh-min-20-sm {
    min-height: 20vh;
  }

  .vh-max-20-sm {
    max-height: 20vh;
  }

  .w-25-sm {
    width: 25%;
  }

  .w-min-25-sm {
    min-width: 25%;
  }

  .w-max-25-sm {
    max-width: 25%;
  }

  .h-25-sm {
    height: 25%;
  }

  .h-min-25-sm {
    min-height: 25%;
  }

  .h-max-25-sm {
    max-height: 25%;
  }

  .vw-25-sm {
    width: 25vw;
  }

  .vw-min-25-sm {
    min-width: 25vw;
  }

  .vw-max-25-sm {
    max-width: 25vw;
  }

  .vh-25-sm {
    height: 25vh;
  }

  .vh-min-25-sm {
    min-height: 25vh;
  }

  .vh-max-25-sm {
    max-height: 25vh;
  }

  .w-30-sm {
    width: 30%;
  }

  .w-min-30-sm {
    min-width: 30%;
  }

  .w-max-30-sm {
    max-width: 30%;
  }

  .h-30-sm {
    height: 30%;
  }

  .h-min-30-sm {
    min-height: 30%;
  }

  .h-max-30-sm {
    max-height: 30%;
  }

  .vw-30-sm {
    width: 30vw;
  }

  .vw-min-30-sm {
    min-width: 30vw;
  }

  .vw-max-30-sm {
    max-width: 30vw;
  }

  .vh-30-sm {
    height: 30vh;
  }

  .vh-min-30-sm {
    min-height: 30vh;
  }

  .vh-max-30-sm {
    max-height: 30vh;
  }

  .w-35-sm {
    width: 35%;
  }

  .w-min-35-sm {
    min-width: 35%;
  }

  .w-max-35-sm {
    max-width: 35%;
  }

  .h-35-sm {
    height: 35%;
  }

  .h-min-35-sm {
    min-height: 35%;
  }

  .h-max-35-sm {
    max-height: 35%;
  }

  .vw-35-sm {
    width: 35vw;
  }

  .vw-min-35-sm {
    min-width: 35vw;
  }

  .vw-max-35-sm {
    max-width: 35vw;
  }

  .vh-35-sm {
    height: 35vh;
  }

  .vh-min-35-sm {
    min-height: 35vh;
  }

  .vh-max-35-sm {
    max-height: 35vh;
  }

  .w-40-sm {
    width: 40%;
  }

  .w-min-40-sm {
    min-width: 40%;
  }

  .w-max-40-sm {
    max-width: 40%;
  }

  .h-40-sm {
    height: 40%;
  }

  .h-min-40-sm {
    min-height: 40%;
  }

  .h-max-40-sm {
    max-height: 40%;
  }

  .vw-40-sm {
    width: 40vw;
  }

  .vw-min-40-sm {
    min-width: 40vw;
  }

  .vw-max-40-sm {
    max-width: 40vw;
  }

  .vh-40-sm {
    height: 40vh;
  }

  .vh-min-40-sm {
    min-height: 40vh;
  }

  .vh-max-40-sm {
    max-height: 40vh;
  }

  .w-45-sm {
    width: 45%;
  }

  .w-min-45-sm {
    min-width: 45%;
  }

  .w-max-45-sm {
    max-width: 45%;
  }

  .h-45-sm {
    height: 45%;
  }

  .h-min-45-sm {
    min-height: 45%;
  }

  .h-max-45-sm {
    max-height: 45%;
  }

  .vw-45-sm {
    width: 45vw;
  }

  .vw-min-45-sm {
    min-width: 45vw;
  }

  .vw-max-45-sm {
    max-width: 45vw;
  }

  .vh-45-sm {
    height: 45vh;
  }

  .vh-min-45-sm {
    min-height: 45vh;
  }

  .vh-max-45-sm {
    max-height: 45vh;
  }

  .w-50-sm {
    width: 50%;
  }

  .w-min-50-sm {
    min-width: 50%;
  }

  .w-max-50-sm {
    max-width: 50%;
  }

  .h-50-sm {
    height: 50%;
  }

  .h-min-50-sm {
    min-height: 50%;
  }

  .h-max-50-sm {
    max-height: 50%;
  }

  .vw-50-sm {
    width: 50vw;
  }

  .vw-min-50-sm {
    min-width: 50vw;
  }

  .vw-max-50-sm {
    max-width: 50vw;
  }

  .vh-50-sm {
    height: 50vh;
  }

  .vh-min-50-sm {
    min-height: 50vh;
  }

  .vh-max-50-sm {
    max-height: 50vh;
  }

  .w-55-sm {
    width: 55%;
  }

  .w-min-55-sm {
    min-width: 55%;
  }

  .w-max-55-sm {
    max-width: 55%;
  }

  .h-55-sm {
    height: 55%;
  }

  .h-min-55-sm {
    min-height: 55%;
  }

  .h-max-55-sm {
    max-height: 55%;
  }

  .vw-55-sm {
    width: 55vw;
  }

  .vw-min-55-sm {
    min-width: 55vw;
  }

  .vw-max-55-sm {
    max-width: 55vw;
  }

  .vh-55-sm {
    height: 55vh;
  }

  .vh-min-55-sm {
    min-height: 55vh;
  }

  .vh-max-55-sm {
    max-height: 55vh;
  }

  .w-60-sm {
    width: 60%;
  }

  .w-min-60-sm {
    min-width: 60%;
  }

  .w-max-60-sm {
    max-width: 60%;
  }

  .h-60-sm {
    height: 60%;
  }

  .h-min-60-sm {
    min-height: 60%;
  }

  .h-max-60-sm {
    max-height: 60%;
  }

  .vw-60-sm {
    width: 60vw;
  }

  .vw-min-60-sm {
    min-width: 60vw;
  }

  .vw-max-60-sm {
    max-width: 60vw;
  }

  .vh-60-sm {
    height: 60vh;
  }

  .vh-min-60-sm {
    min-height: 60vh;
  }

  .vh-max-60-sm {
    max-height: 60vh;
  }

  .w-65-sm {
    width: 65%;
  }

  .w-min-65-sm {
    min-width: 65%;
  }

  .w-max-65-sm {
    max-width: 65%;
  }

  .h-65-sm {
    height: 65%;
  }

  .h-min-65-sm {
    min-height: 65%;
  }

  .h-max-65-sm {
    max-height: 65%;
  }

  .vw-65-sm {
    width: 65vw;
  }

  .vw-min-65-sm {
    min-width: 65vw;
  }

  .vw-max-65-sm {
    max-width: 65vw;
  }

  .vh-65-sm {
    height: 65vh;
  }

  .vh-min-65-sm {
    min-height: 65vh;
  }

  .vh-max-65-sm {
    max-height: 65vh;
  }

  .w-70-sm {
    width: 70%;
  }

  .w-min-70-sm {
    min-width: 70%;
  }

  .w-max-70-sm {
    max-width: 70%;
  }

  .h-70-sm {
    height: 70%;
  }

  .h-min-70-sm {
    min-height: 70%;
  }

  .h-max-70-sm {
    max-height: 70%;
  }

  .vw-70-sm {
    width: 70vw;
  }

  .vw-min-70-sm {
    min-width: 70vw;
  }

  .vw-max-70-sm {
    max-width: 70vw;
  }

  .vh-70-sm {
    height: 70vh;
  }

  .vh-min-70-sm {
    min-height: 70vh;
  }

  .vh-max-70-sm {
    max-height: 70vh;
  }

  .w-75-sm {
    width: 75%;
  }

  .w-min-75-sm {
    min-width: 75%;
  }

  .w-max-75-sm {
    max-width: 75%;
  }

  .h-75-sm {
    height: 75%;
  }

  .h-min-75-sm {
    min-height: 75%;
  }

  .h-max-75-sm {
    max-height: 75%;
  }

  .vw-75-sm {
    width: 75vw;
  }

  .vw-min-75-sm {
    min-width: 75vw;
  }

  .vw-max-75-sm {
    max-width: 75vw;
  }

  .vh-75-sm {
    height: 75vh;
  }

  .vh-min-75-sm {
    min-height: 75vh;
  }

  .vh-max-75-sm {
    max-height: 75vh;
  }

  .w-80-sm {
    width: 80%;
  }

  .w-min-80-sm {
    min-width: 80%;
  }

  .w-max-80-sm {
    max-width: 80%;
  }

  .h-80-sm {
    height: 80%;
  }

  .h-min-80-sm {
    min-height: 80%;
  }

  .h-max-80-sm {
    max-height: 80%;
  }

  .vw-80-sm {
    width: 80vw;
  }

  .vw-min-80-sm {
    min-width: 80vw;
  }

  .vw-max-80-sm {
    max-width: 80vw;
  }

  .vh-80-sm {
    height: 80vh;
  }

  .vh-min-80-sm {
    min-height: 80vh;
  }

  .vh-max-80-sm {
    max-height: 80vh;
  }

  .w-85-sm {
    width: 85%;
  }

  .w-min-85-sm {
    min-width: 85%;
  }

  .w-max-85-sm {
    max-width: 85%;
  }

  .h-85-sm {
    height: 85%;
  }

  .h-min-85-sm {
    min-height: 85%;
  }

  .h-max-85-sm {
    max-height: 85%;
  }

  .vw-85-sm {
    width: 85vw;
  }

  .vw-min-85-sm {
    min-width: 85vw;
  }

  .vw-max-85-sm {
    max-width: 85vw;
  }

  .vh-85-sm {
    height: 85vh;
  }

  .vh-min-85-sm {
    min-height: 85vh;
  }

  .vh-max-85-sm {
    max-height: 85vh;
  }

  .w-90-sm {
    width: 90%;
  }

  .w-min-90-sm {
    min-width: 90%;
  }

  .w-max-90-sm {
    max-width: 90%;
  }

  .h-90-sm {
    height: 90%;
  }

  .h-min-90-sm {
    min-height: 90%;
  }

  .h-max-90-sm {
    max-height: 90%;
  }

  .vw-90-sm {
    width: 90vw;
  }

  .vw-min-90-sm {
    min-width: 90vw;
  }

  .vw-max-90-sm {
    max-width: 90vw;
  }

  .vh-90-sm {
    height: 90vh;
  }

  .vh-min-90-sm {
    min-height: 90vh;
  }

  .vh-max-90-sm {
    max-height: 90vh;
  }

  .w-95-sm {
    width: 95%;
  }

  .w-min-95-sm {
    min-width: 95%;
  }

  .w-max-95-sm {
    max-width: 95%;
  }

  .h-95-sm {
    height: 95%;
  }

  .h-min-95-sm {
    min-height: 95%;
  }

  .h-max-95-sm {
    max-height: 95%;
  }

  .vw-95-sm {
    width: 95vw;
  }

  .vw-min-95-sm {
    min-width: 95vw;
  }

  .vw-max-95-sm {
    max-width: 95vw;
  }

  .vh-95-sm {
    height: 95vh;
  }

  .vh-min-95-sm {
    min-height: 95vh;
  }

  .vh-max-95-sm {
    max-height: 95vh;
  }

  .w-100-sm {
    width: 100%;
  }

  .w-min-100-sm {
    min-width: 100%;
  }

  .w-max-100-sm {
    max-width: 100%;
  }

  .h-100-sm {
    height: 100%;
  }

  .h-min-100-sm {
    min-height: 100%;
  }

  .h-max-100-sm {
    max-height: 100%;
  }

  .vw-100-sm {
    width: 100vw;
  }

  .vw-min-100-sm {
    min-width: 100vw;
  }

  .vw-max-100-sm {
    max-width: 100vw;
  }

  .vh-100-sm {
    height: 100vh;
  }

  .vh-min-100-sm {
    min-height: 100vh;
  }

  .vh-max-100-sm {
    max-height: 100vh;
  }

  .p-none-sm {
    padding: 0px !important;
  }

  .p-xxs-sm {
    padding: 4px !important;
  }

  .p-xs-sm {
    padding: 8px !important;
  }

  .p-sm-sm {
    padding: 12px !important;
  }

  .p-md-sm {
    padding: 16px !important;
  }

  .p-lg-sm {
    padding: 24px !important;
  }

  .p-xl-sm {
    padding: 32px !important;
  }

  .p-xxl-sm {
    padding: 40px !important;
  }

  .m-none-sm {
    margin: 0px !important;
  }

  .m-xxs-sm {
    margin: 4px !important;
  }

  .m-xs-sm {
    margin: 8px !important;
  }

  .m-sm-sm {
    margin: 12px !important;
  }

  .m-md-sm {
    margin: 16px !important;
  }

  .m-lg-sm {
    margin: 24px !important;
  }

  .m-xl-sm {
    margin: 32px !important;
  }

  .m-xxl-sm {
    margin: 40px !important;
  }

  .w-none-sm {
    width: 0px !important;
  }

  .w-xxs-sm {
    width: 40px !important;
  }

  .w-xs-sm {
    width: 80px !important;
  }

  .w-sm-sm {
    width: 120px !important;
  }

  .w-md-sm {
    width: 160px !important;
  }

  .w-lg-sm {
    width: 240px !important;
  }

  .w-xl-sm {
    width: 320px !important;
  }

  .w-xxl-sm {
    width: 400px !important;
  }

  .w-min-none-sm {
    min-width: 0px !important;
  }

  .w-min-xxs-sm {
    min-width: 40px !important;
  }

  .w-min-xs-sm {
    min-width: 80px !important;
  }

  .w-min-sm-sm {
    min-width: 120px !important;
  }

  .w-min-md-sm {
    min-width: 160px !important;
  }

  .w-min-lg-sm {
    min-width: 240px !important;
  }

  .w-min-xl-sm {
    min-width: 320px !important;
  }

  .w-min-xxl-sm {
    min-width: 400px !important;
  }

  .w-max-none-sm {
    max-width: 0px !important;
  }

  .w-max-xxs-sm {
    max-width: 40px !important;
  }

  .w-max-xs-sm {
    max-width: 80px !important;
  }

  .w-max-sm-sm {
    max-width: 120px !important;
  }

  .w-max-md-sm {
    max-width: 160px !important;
  }

  .w-max-lg-sm {
    max-width: 240px !important;
  }

  .w-max-xl-sm {
    max-width: 320px !important;
  }

  .w-max-xxl-sm {
    max-width: 400px !important;
  }

  .h-none-sm {
    height: 0px !important;
  }

  .h-xxs-sm {
    height: 40px !important;
  }

  .h-xs-sm {
    height: 80px !important;
  }

  .h-sm-sm {
    height: 120px !important;
  }

  .h-md-sm {
    height: 160px !important;
  }

  .h-lg-sm {
    height: 240px !important;
  }

  .h-xl-sm {
    height: 320px !important;
  }

  .h-xxl-sm {
    height: 400px !important;
  }

  .h-max-none-sm {
    max-height: 0px !important;
  }

  .h-max-xxs-sm {
    max-height: 40px !important;
  }

  .h-max-xs-sm {
    max-height: 80px !important;
  }

  .h-max-sm-sm {
    max-height: 120px !important;
  }

  .h-max-md-sm {
    max-height: 160px !important;
  }

  .h-max-lg-sm {
    max-height: 240px !important;
  }

  .h-max-xl-sm {
    max-height: 320px !important;
  }

  .h-max-xxl-sm {
    max-height: 400px !important;
  }

  .h-min-none-sm {
    min-height: 0px !important;
  }

  .h-min-xxs-sm {
    min-height: 40px !important;
  }

  .h-min-xs-sm {
    min-height: 80px !important;
  }

  .h-min-sm-sm {
    min-height: 120px !important;
  }

  .h-min-md-sm {
    min-height: 160px !important;
  }

  .h-min-lg-sm {
    min-height: 240px !important;
  }

  .h-min-xl-sm {
    min-height: 320px !important;
  }

  .h-min-xxl-sm {
    min-height: 400px !important;
  }

  .h-max-none-sm {
    max-height: 0px !important;
  }

  .h-max-xxs-sm {
    max-height: 40px !important;
  }

  .h-max-xs-sm {
    max-height: 80px !important;
  }

  .h-max-sm-sm {
    max-height: 120px !important;
  }

  .h-max-md-sm {
    max-height: 160px !important;
  }

  .h-max-lg-sm {
    max-height: 240px !important;
  }

  .h-max-xl-sm {
    max-height: 320px !important;
  }

  .h-max-xxl-sm {
    max-height: 400px !important;
  }

  .m-l-none-sm {
    margin-left: 0px !important;
  }

  .m-l-xxs-sm {
    margin-left: 4px !important;
  }

  .m-l-xs-sm {
    margin-left: 8px !important;
  }

  .m-l-sm-sm {
    margin-left: 12px !important;
  }

  .m-l-md-sm {
    margin-left: 16px !important;
  }

  .m-l-lg-sm {
    margin-left: 24px !important;
  }

  .m-l-xl-sm {
    margin-left: 32px !important;
  }

  .m-l-xxl-sm {
    margin-left: 40px !important;
  }

  .m-r-none-sm {
    margin-right: 0px !important;
  }

  .m-r-xxs-sm {
    margin-right: 4px !important;
  }

  .m-r-xs-sm {
    margin-right: 8px !important;
  }

  .m-r-sm-sm {
    margin-right: 12px !important;
  }

  .m-r-md-sm {
    margin-right: 16px !important;
  }

  .m-r-lg-sm {
    margin-right: 24px !important;
  }

  .m-r-xl-sm {
    margin-right: 32px !important;
  }

  .m-r-xxl-sm {
    margin-right: 40px !important;
  }

  .m-t-none-sm {
    margin-top: 0px !important;
  }

  .m-t-xxs-sm {
    margin-top: 4px !important;
  }

  .m-t-xs-sm {
    margin-top: 8px !important;
  }

  .m-t-sm-sm {
    margin-top: 12px !important;
  }

  .m-t-md-sm {
    margin-top: 16px !important;
  }

  .m-t-lg-sm {
    margin-top: 24px !important;
  }

  .m-t-xl-sm {
    margin-top: 32px !important;
  }

  .m-t-xxl-sm {
    margin-top: 40px !important;
  }

  .m-b-none-sm {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-sm {
    margin-bottom: 4px !important;
  }

  .m-b-xs-sm {
    margin-bottom: 8px !important;
  }

  .m-b-sm-sm {
    margin-bottom: 12px !important;
  }

  .m-b-md-sm {
    margin-bottom: 16px !important;
  }

  .m-b-lg-sm {
    margin-bottom: 24px !important;
  }

  .m-b-xl-sm {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-sm {
    margin-bottom: 40px !important;
  }

  .p-l-none-sm {
    padding-left: 0px !important;
  }

  .p-l-xxs-sm {
    padding-left: 4px !important;
  }

  .p-l-xs-sm {
    padding-left: 8px !important;
  }

  .p-l-sm-sm {
    padding-left: 12px !important;
  }

  .p-l-md-sm {
    padding-left: 16px !important;
  }

  .p-l-lg-sm {
    padding-left: 24px !important;
  }

  .p-l-xl-sm {
    padding-left: 32px !important;
  }

  .p-l-xxl-sm {
    padding-left: 40px !important;
  }

  .p-r-none-sm {
    padding-right: 0px !important;
  }

  .p-r-xxs-sm {
    padding-right: 4px !important;
  }

  .p-r-xs-sm {
    padding-right: 8px !important;
  }

  .p-r-sm-sm {
    padding-right: 12px !important;
  }

  .p-r-md-sm {
    padding-right: 16px !important;
  }

  .p-r-lg-sm {
    padding-right: 24px !important;
  }

  .p-r-xl-sm {
    padding-right: 32px !important;
  }

  .p-r-xxl-sm {
    padding-right: 40px !important;
  }

  .p-t-none-sm {
    padding-top: 0px !important;
  }

  .p-t-xxs-sm {
    padding-top: 4px !important;
  }

  .p-t-xs-sm {
    padding-top: 8px !important;
  }

  .p-t-sm-sm {
    padding-top: 12px !important;
  }

  .p-t-md-sm {
    padding-top: 16px !important;
  }

  .p-t-lg-sm {
    padding-top: 24px !important;
  }

  .p-t-xl-sm {
    padding-top: 32px !important;
  }

  .p-t-xxl-sm {
    padding-top: 40px !important;
  }

  .p-b-none-sm {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-sm {
    padding-bottom: 4px !important;
  }

  .p-b-xs-sm {
    padding-bottom: 8px !important;
  }

  .p-b-sm-sm {
    padding-bottom: 12px !important;
  }

  .p-b-md-sm {
    padding-bottom: 16px !important;
  }

  .p-b-lg-sm {
    padding-bottom: 24px !important;
  }

  .p-b-xl-sm {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-sm {
    padding-bottom: 40px !important;
  }

  .gap-none-sm {
    gap: 0px !important;
  }

  .gap-xxs-sm {
    gap: 4px !important;
  }

  .gap-xs-sm {
    gap: 8px !important;
  }

  .gap-sm-sm {
    gap: 12px !important;
  }

  .gap-md-sm {
    gap: 16px !important;
  }

  .gap-lg-sm {
    gap: 24px !important;
  }

  .gap-xl-sm {
    gap: 32px !important;
  }

  .gap-xxl-sm {
    gap: 40px !important;
  }
}
@media (min-width: 768px) {
  .w-full-md {
    width: 100%;
  }

  .h-full-md {
    height: 100%;
  }

  .w-inherit-md {
    width: inherit;
  }

  .h-inherit-md {
    height: inherit;
  }

  .w-auto-md {
    width: auto;
  }

  .h-auto-md {
    height: auto;
  }

  .vw-full-md {
    width: 100vw;
  }

  .vh-full-md {
    height: 100vh;
  }

  .w-5-md {
    width: 5%;
  }

  .w-min-5-md {
    min-width: 5%;
  }

  .w-max-5-md {
    max-width: 5%;
  }

  .h-5-md {
    height: 5%;
  }

  .h-min-5-md {
    min-height: 5%;
  }

  .h-max-5-md {
    max-height: 5%;
  }

  .vw-5-md {
    width: 5vw;
  }

  .vw-min-5-md {
    min-width: 5vw;
  }

  .vw-max-5-md {
    max-width: 5vw;
  }

  .vh-5-md {
    height: 5vh;
  }

  .vh-min-5-md {
    min-height: 5vh;
  }

  .vh-max-5-md {
    max-height: 5vh;
  }

  .w-10-md {
    width: 10%;
  }

  .w-min-10-md {
    min-width: 10%;
  }

  .w-max-10-md {
    max-width: 10%;
  }

  .h-10-md {
    height: 10%;
  }

  .h-min-10-md {
    min-height: 10%;
  }

  .h-max-10-md {
    max-height: 10%;
  }

  .vw-10-md {
    width: 10vw;
  }

  .vw-min-10-md {
    min-width: 10vw;
  }

  .vw-max-10-md {
    max-width: 10vw;
  }

  .vh-10-md {
    height: 10vh;
  }

  .vh-min-10-md {
    min-height: 10vh;
  }

  .vh-max-10-md {
    max-height: 10vh;
  }

  .w-15-md {
    width: 15%;
  }

  .w-min-15-md {
    min-width: 15%;
  }

  .w-max-15-md {
    max-width: 15%;
  }

  .h-15-md {
    height: 15%;
  }

  .h-min-15-md {
    min-height: 15%;
  }

  .h-max-15-md {
    max-height: 15%;
  }

  .vw-15-md {
    width: 15vw;
  }

  .vw-min-15-md {
    min-width: 15vw;
  }

  .vw-max-15-md {
    max-width: 15vw;
  }

  .vh-15-md {
    height: 15vh;
  }

  .vh-min-15-md {
    min-height: 15vh;
  }

  .vh-max-15-md {
    max-height: 15vh;
  }

  .w-20-md {
    width: 20%;
  }

  .w-min-20-md {
    min-width: 20%;
  }

  .w-max-20-md {
    max-width: 20%;
  }

  .h-20-md {
    height: 20%;
  }

  .h-min-20-md {
    min-height: 20%;
  }

  .h-max-20-md {
    max-height: 20%;
  }

  .vw-20-md {
    width: 20vw;
  }

  .vw-min-20-md {
    min-width: 20vw;
  }

  .vw-max-20-md {
    max-width: 20vw;
  }

  .vh-20-md {
    height: 20vh;
  }

  .vh-min-20-md {
    min-height: 20vh;
  }

  .vh-max-20-md {
    max-height: 20vh;
  }

  .w-25-md {
    width: 25%;
  }

  .w-min-25-md {
    min-width: 25%;
  }

  .w-max-25-md {
    max-width: 25%;
  }

  .h-25-md {
    height: 25%;
  }

  .h-min-25-md {
    min-height: 25%;
  }

  .h-max-25-md {
    max-height: 25%;
  }

  .vw-25-md {
    width: 25vw;
  }

  .vw-min-25-md {
    min-width: 25vw;
  }

  .vw-max-25-md {
    max-width: 25vw;
  }

  .vh-25-md {
    height: 25vh;
  }

  .vh-min-25-md {
    min-height: 25vh;
  }

  .vh-max-25-md {
    max-height: 25vh;
  }

  .w-30-md {
    width: 30%;
  }

  .w-min-30-md {
    min-width: 30%;
  }

  .w-max-30-md {
    max-width: 30%;
  }

  .h-30-md {
    height: 30%;
  }

  .h-min-30-md {
    min-height: 30%;
  }

  .h-max-30-md {
    max-height: 30%;
  }

  .vw-30-md {
    width: 30vw;
  }

  .vw-min-30-md {
    min-width: 30vw;
  }

  .vw-max-30-md {
    max-width: 30vw;
  }

  .vh-30-md {
    height: 30vh;
  }

  .vh-min-30-md {
    min-height: 30vh;
  }

  .vh-max-30-md {
    max-height: 30vh;
  }

  .w-35-md {
    width: 35%;
  }

  .w-min-35-md {
    min-width: 35%;
  }

  .w-max-35-md {
    max-width: 35%;
  }

  .h-35-md {
    height: 35%;
  }

  .h-min-35-md {
    min-height: 35%;
  }

  .h-max-35-md {
    max-height: 35%;
  }

  .vw-35-md {
    width: 35vw;
  }

  .vw-min-35-md {
    min-width: 35vw;
  }

  .vw-max-35-md {
    max-width: 35vw;
  }

  .vh-35-md {
    height: 35vh;
  }

  .vh-min-35-md {
    min-height: 35vh;
  }

  .vh-max-35-md {
    max-height: 35vh;
  }

  .w-40-md {
    width: 40%;
  }

  .w-min-40-md {
    min-width: 40%;
  }

  .w-max-40-md {
    max-width: 40%;
  }

  .h-40-md {
    height: 40%;
  }

  .h-min-40-md {
    min-height: 40%;
  }

  .h-max-40-md {
    max-height: 40%;
  }

  .vw-40-md {
    width: 40vw;
  }

  .vw-min-40-md {
    min-width: 40vw;
  }

  .vw-max-40-md {
    max-width: 40vw;
  }

  .vh-40-md {
    height: 40vh;
  }

  .vh-min-40-md {
    min-height: 40vh;
  }

  .vh-max-40-md {
    max-height: 40vh;
  }

  .w-45-md {
    width: 45%;
  }

  .w-min-45-md {
    min-width: 45%;
  }

  .w-max-45-md {
    max-width: 45%;
  }

  .h-45-md {
    height: 45%;
  }

  .h-min-45-md {
    min-height: 45%;
  }

  .h-max-45-md {
    max-height: 45%;
  }

  .vw-45-md {
    width: 45vw;
  }

  .vw-min-45-md {
    min-width: 45vw;
  }

  .vw-max-45-md {
    max-width: 45vw;
  }

  .vh-45-md {
    height: 45vh;
  }

  .vh-min-45-md {
    min-height: 45vh;
  }

  .vh-max-45-md {
    max-height: 45vh;
  }

  .w-50-md {
    width: 50%;
  }

  .w-min-50-md {
    min-width: 50%;
  }

  .w-max-50-md {
    max-width: 50%;
  }

  .h-50-md {
    height: 50%;
  }

  .h-min-50-md {
    min-height: 50%;
  }

  .h-max-50-md {
    max-height: 50%;
  }

  .vw-50-md {
    width: 50vw;
  }

  .vw-min-50-md {
    min-width: 50vw;
  }

  .vw-max-50-md {
    max-width: 50vw;
  }

  .vh-50-md {
    height: 50vh;
  }

  .vh-min-50-md {
    min-height: 50vh;
  }

  .vh-max-50-md {
    max-height: 50vh;
  }

  .w-55-md {
    width: 55%;
  }

  .w-min-55-md {
    min-width: 55%;
  }

  .w-max-55-md {
    max-width: 55%;
  }

  .h-55-md {
    height: 55%;
  }

  .h-min-55-md {
    min-height: 55%;
  }

  .h-max-55-md {
    max-height: 55%;
  }

  .vw-55-md {
    width: 55vw;
  }

  .vw-min-55-md {
    min-width: 55vw;
  }

  .vw-max-55-md {
    max-width: 55vw;
  }

  .vh-55-md {
    height: 55vh;
  }

  .vh-min-55-md {
    min-height: 55vh;
  }

  .vh-max-55-md {
    max-height: 55vh;
  }

  .w-60-md {
    width: 60%;
  }

  .w-min-60-md {
    min-width: 60%;
  }

  .w-max-60-md {
    max-width: 60%;
  }

  .h-60-md {
    height: 60%;
  }

  .h-min-60-md {
    min-height: 60%;
  }

  .h-max-60-md {
    max-height: 60%;
  }

  .vw-60-md {
    width: 60vw;
  }

  .vw-min-60-md {
    min-width: 60vw;
  }

  .vw-max-60-md {
    max-width: 60vw;
  }

  .vh-60-md {
    height: 60vh;
  }

  .vh-min-60-md {
    min-height: 60vh;
  }

  .vh-max-60-md {
    max-height: 60vh;
  }

  .w-65-md {
    width: 65%;
  }

  .w-min-65-md {
    min-width: 65%;
  }

  .w-max-65-md {
    max-width: 65%;
  }

  .h-65-md {
    height: 65%;
  }

  .h-min-65-md {
    min-height: 65%;
  }

  .h-max-65-md {
    max-height: 65%;
  }

  .vw-65-md {
    width: 65vw;
  }

  .vw-min-65-md {
    min-width: 65vw;
  }

  .vw-max-65-md {
    max-width: 65vw;
  }

  .vh-65-md {
    height: 65vh;
  }

  .vh-min-65-md {
    min-height: 65vh;
  }

  .vh-max-65-md {
    max-height: 65vh;
  }

  .w-70-md {
    width: 70%;
  }

  .w-min-70-md {
    min-width: 70%;
  }

  .w-max-70-md {
    max-width: 70%;
  }

  .h-70-md {
    height: 70%;
  }

  .h-min-70-md {
    min-height: 70%;
  }

  .h-max-70-md {
    max-height: 70%;
  }

  .vw-70-md {
    width: 70vw;
  }

  .vw-min-70-md {
    min-width: 70vw;
  }

  .vw-max-70-md {
    max-width: 70vw;
  }

  .vh-70-md {
    height: 70vh;
  }

  .vh-min-70-md {
    min-height: 70vh;
  }

  .vh-max-70-md {
    max-height: 70vh;
  }

  .w-75-md {
    width: 75%;
  }

  .w-min-75-md {
    min-width: 75%;
  }

  .w-max-75-md {
    max-width: 75%;
  }

  .h-75-md {
    height: 75%;
  }

  .h-min-75-md {
    min-height: 75%;
  }

  .h-max-75-md {
    max-height: 75%;
  }

  .vw-75-md {
    width: 75vw;
  }

  .vw-min-75-md {
    min-width: 75vw;
  }

  .vw-max-75-md {
    max-width: 75vw;
  }

  .vh-75-md {
    height: 75vh;
  }

  .vh-min-75-md {
    min-height: 75vh;
  }

  .vh-max-75-md {
    max-height: 75vh;
  }

  .w-80-md {
    width: 80%;
  }

  .w-min-80-md {
    min-width: 80%;
  }

  .w-max-80-md {
    max-width: 80%;
  }

  .h-80-md {
    height: 80%;
  }

  .h-min-80-md {
    min-height: 80%;
  }

  .h-max-80-md {
    max-height: 80%;
  }

  .vw-80-md {
    width: 80vw;
  }

  .vw-min-80-md {
    min-width: 80vw;
  }

  .vw-max-80-md {
    max-width: 80vw;
  }

  .vh-80-md {
    height: 80vh;
  }

  .vh-min-80-md {
    min-height: 80vh;
  }

  .vh-max-80-md {
    max-height: 80vh;
  }

  .w-85-md {
    width: 85%;
  }

  .w-min-85-md {
    min-width: 85%;
  }

  .w-max-85-md {
    max-width: 85%;
  }

  .h-85-md {
    height: 85%;
  }

  .h-min-85-md {
    min-height: 85%;
  }

  .h-max-85-md {
    max-height: 85%;
  }

  .vw-85-md {
    width: 85vw;
  }

  .vw-min-85-md {
    min-width: 85vw;
  }

  .vw-max-85-md {
    max-width: 85vw;
  }

  .vh-85-md {
    height: 85vh;
  }

  .vh-min-85-md {
    min-height: 85vh;
  }

  .vh-max-85-md {
    max-height: 85vh;
  }

  .w-90-md {
    width: 90%;
  }

  .w-min-90-md {
    min-width: 90%;
  }

  .w-max-90-md {
    max-width: 90%;
  }

  .h-90-md {
    height: 90%;
  }

  .h-min-90-md {
    min-height: 90%;
  }

  .h-max-90-md {
    max-height: 90%;
  }

  .vw-90-md {
    width: 90vw;
  }

  .vw-min-90-md {
    min-width: 90vw;
  }

  .vw-max-90-md {
    max-width: 90vw;
  }

  .vh-90-md {
    height: 90vh;
  }

  .vh-min-90-md {
    min-height: 90vh;
  }

  .vh-max-90-md {
    max-height: 90vh;
  }

  .w-95-md {
    width: 95%;
  }

  .w-min-95-md {
    min-width: 95%;
  }

  .w-max-95-md {
    max-width: 95%;
  }

  .h-95-md {
    height: 95%;
  }

  .h-min-95-md {
    min-height: 95%;
  }

  .h-max-95-md {
    max-height: 95%;
  }

  .vw-95-md {
    width: 95vw;
  }

  .vw-min-95-md {
    min-width: 95vw;
  }

  .vw-max-95-md {
    max-width: 95vw;
  }

  .vh-95-md {
    height: 95vh;
  }

  .vh-min-95-md {
    min-height: 95vh;
  }

  .vh-max-95-md {
    max-height: 95vh;
  }

  .w-100-md {
    width: 100%;
  }

  .w-min-100-md {
    min-width: 100%;
  }

  .w-max-100-md {
    max-width: 100%;
  }

  .h-100-md {
    height: 100%;
  }

  .h-min-100-md {
    min-height: 100%;
  }

  .h-max-100-md {
    max-height: 100%;
  }

  .vw-100-md {
    width: 100vw;
  }

  .vw-min-100-md {
    min-width: 100vw;
  }

  .vw-max-100-md {
    max-width: 100vw;
  }

  .vh-100-md {
    height: 100vh;
  }

  .vh-min-100-md {
    min-height: 100vh;
  }

  .vh-max-100-md {
    max-height: 100vh;
  }

  .p-none-md {
    padding: 0px !important;
  }

  .p-xxs-md {
    padding: 4px !important;
  }

  .p-xs-md {
    padding: 8px !important;
  }

  .p-sm-md {
    padding: 12px !important;
  }

  .p-md-md {
    padding: 16px !important;
  }

  .p-lg-md {
    padding: 24px !important;
  }

  .p-xl-md {
    padding: 32px !important;
  }

  .p-xxl-md {
    padding: 40px !important;
  }

  .m-none-md {
    margin: 0px !important;
  }

  .m-xxs-md {
    margin: 4px !important;
  }

  .m-xs-md {
    margin: 8px !important;
  }

  .m-sm-md {
    margin: 12px !important;
  }

  .m-md-md {
    margin: 16px !important;
  }

  .m-lg-md {
    margin: 24px !important;
  }

  .m-xl-md {
    margin: 32px !important;
  }

  .m-xxl-md {
    margin: 40px !important;
  }

  .w-none-md {
    width: 0px !important;
  }

  .w-xxs-md {
    width: 40px !important;
  }

  .w-xs-md {
    width: 80px !important;
  }

  .w-sm-md {
    width: 120px !important;
  }

  .w-md-md {
    width: 160px !important;
  }

  .w-lg-md {
    width: 240px !important;
  }

  .w-xl-md {
    width: 320px !important;
  }

  .w-xxl-md {
    width: 400px !important;
  }

  .w-min-none-md {
    min-width: 0px !important;
  }

  .w-min-xxs-md {
    min-width: 40px !important;
  }

  .w-min-xs-md {
    min-width: 80px !important;
  }

  .w-min-sm-md {
    min-width: 120px !important;
  }

  .w-min-md-md {
    min-width: 160px !important;
  }

  .w-min-lg-md {
    min-width: 240px !important;
  }

  .w-min-xl-md {
    min-width: 320px !important;
  }

  .w-min-xxl-md {
    min-width: 400px !important;
  }

  .w-max-none-md {
    max-width: 0px !important;
  }

  .w-max-xxs-md {
    max-width: 40px !important;
  }

  .w-max-xs-md {
    max-width: 80px !important;
  }

  .w-max-sm-md {
    max-width: 120px !important;
  }

  .w-max-md-md {
    max-width: 160px !important;
  }

  .w-max-lg-md {
    max-width: 240px !important;
  }

  .w-max-xl-md {
    max-width: 320px !important;
  }

  .w-max-xxl-md {
    max-width: 400px !important;
  }

  .h-none-md {
    height: 0px !important;
  }

  .h-xxs-md {
    height: 40px !important;
  }

  .h-xs-md {
    height: 80px !important;
  }

  .h-sm-md {
    height: 120px !important;
  }

  .h-md-md {
    height: 160px !important;
  }

  .h-lg-md {
    height: 240px !important;
  }

  .h-xl-md {
    height: 320px !important;
  }

  .h-xxl-md {
    height: 400px !important;
  }

  .h-max-none-md {
    max-height: 0px !important;
  }

  .h-max-xxs-md {
    max-height: 40px !important;
  }

  .h-max-xs-md {
    max-height: 80px !important;
  }

  .h-max-sm-md {
    max-height: 120px !important;
  }

  .h-max-md-md {
    max-height: 160px !important;
  }

  .h-max-lg-md {
    max-height: 240px !important;
  }

  .h-max-xl-md {
    max-height: 320px !important;
  }

  .h-max-xxl-md {
    max-height: 400px !important;
  }

  .h-min-none-md {
    min-height: 0px !important;
  }

  .h-min-xxs-md {
    min-height: 40px !important;
  }

  .h-min-xs-md {
    min-height: 80px !important;
  }

  .h-min-sm-md {
    min-height: 120px !important;
  }

  .h-min-md-md {
    min-height: 160px !important;
  }

  .h-min-lg-md {
    min-height: 240px !important;
  }

  .h-min-xl-md {
    min-height: 320px !important;
  }

  .h-min-xxl-md {
    min-height: 400px !important;
  }

  .h-max-none-md {
    max-height: 0px !important;
  }

  .h-max-xxs-md {
    max-height: 40px !important;
  }

  .h-max-xs-md {
    max-height: 80px !important;
  }

  .h-max-sm-md {
    max-height: 120px !important;
  }

  .h-max-md-md {
    max-height: 160px !important;
  }

  .h-max-lg-md {
    max-height: 240px !important;
  }

  .h-max-xl-md {
    max-height: 320px !important;
  }

  .h-max-xxl-md {
    max-height: 400px !important;
  }

  .m-l-none-md {
    margin-left: 0px !important;
  }

  .m-l-xxs-md {
    margin-left: 4px !important;
  }

  .m-l-xs-md {
    margin-left: 8px !important;
  }

  .m-l-sm-md {
    margin-left: 12px !important;
  }

  .m-l-md-md {
    margin-left: 16px !important;
  }

  .m-l-lg-md {
    margin-left: 24px !important;
  }

  .m-l-xl-md {
    margin-left: 32px !important;
  }

  .m-l-xxl-md {
    margin-left: 40px !important;
  }

  .m-r-none-md {
    margin-right: 0px !important;
  }

  .m-r-xxs-md {
    margin-right: 4px !important;
  }

  .m-r-xs-md {
    margin-right: 8px !important;
  }

  .m-r-sm-md {
    margin-right: 12px !important;
  }

  .m-r-md-md {
    margin-right: 16px !important;
  }

  .m-r-lg-md {
    margin-right: 24px !important;
  }

  .m-r-xl-md {
    margin-right: 32px !important;
  }

  .m-r-xxl-md {
    margin-right: 40px !important;
  }

  .m-t-none-md {
    margin-top: 0px !important;
  }

  .m-t-xxs-md {
    margin-top: 4px !important;
  }

  .m-t-xs-md {
    margin-top: 8px !important;
  }

  .m-t-sm-md {
    margin-top: 12px !important;
  }

  .m-t-md-md {
    margin-top: 16px !important;
  }

  .m-t-lg-md {
    margin-top: 24px !important;
  }

  .m-t-xl-md {
    margin-top: 32px !important;
  }

  .m-t-xxl-md {
    margin-top: 40px !important;
  }

  .m-b-none-md {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-md {
    margin-bottom: 4px !important;
  }

  .m-b-xs-md {
    margin-bottom: 8px !important;
  }

  .m-b-sm-md {
    margin-bottom: 12px !important;
  }

  .m-b-md-md {
    margin-bottom: 16px !important;
  }

  .m-b-lg-md {
    margin-bottom: 24px !important;
  }

  .m-b-xl-md {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-md {
    margin-bottom: 40px !important;
  }

  .p-l-none-md {
    padding-left: 0px !important;
  }

  .p-l-xxs-md {
    padding-left: 4px !important;
  }

  .p-l-xs-md {
    padding-left: 8px !important;
  }

  .p-l-sm-md {
    padding-left: 12px !important;
  }

  .p-l-md-md {
    padding-left: 16px !important;
  }

  .p-l-lg-md {
    padding-left: 24px !important;
  }

  .p-l-xl-md {
    padding-left: 32px !important;
  }

  .p-l-xxl-md {
    padding-left: 40px !important;
  }

  .p-r-none-md {
    padding-right: 0px !important;
  }

  .p-r-xxs-md {
    padding-right: 4px !important;
  }

  .p-r-xs-md {
    padding-right: 8px !important;
  }

  .p-r-sm-md {
    padding-right: 12px !important;
  }

  .p-r-md-md {
    padding-right: 16px !important;
  }

  .p-r-lg-md {
    padding-right: 24px !important;
  }

  .p-r-xl-md {
    padding-right: 32px !important;
  }

  .p-r-xxl-md {
    padding-right: 40px !important;
  }

  .p-t-none-md {
    padding-top: 0px !important;
  }

  .p-t-xxs-md {
    padding-top: 4px !important;
  }

  .p-t-xs-md {
    padding-top: 8px !important;
  }

  .p-t-sm-md {
    padding-top: 12px !important;
  }

  .p-t-md-md {
    padding-top: 16px !important;
  }

  .p-t-lg-md {
    padding-top: 24px !important;
  }

  .p-t-xl-md {
    padding-top: 32px !important;
  }

  .p-t-xxl-md {
    padding-top: 40px !important;
  }

  .p-b-none-md {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-md {
    padding-bottom: 4px !important;
  }

  .p-b-xs-md {
    padding-bottom: 8px !important;
  }

  .p-b-sm-md {
    padding-bottom: 12px !important;
  }

  .p-b-md-md {
    padding-bottom: 16px !important;
  }

  .p-b-lg-md {
    padding-bottom: 24px !important;
  }

  .p-b-xl-md {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-md {
    padding-bottom: 40px !important;
  }

  .gap-none-md {
    gap: 0px !important;
  }

  .gap-xxs-md {
    gap: 4px !important;
  }

  .gap-xs-md {
    gap: 8px !important;
  }

  .gap-sm-md {
    gap: 12px !important;
  }

  .gap-md-md {
    gap: 16px !important;
  }

  .gap-lg-md {
    gap: 24px !important;
  }

  .gap-xl-md {
    gap: 32px !important;
  }

  .gap-xxl-md {
    gap: 40px !important;
  }
}
@media (min-width: 1024px) {
  .w-full-lg {
    width: 100%;
  }

  .h-full-lg {
    height: 100%;
  }

  .w-inherit-lg {
    width: inherit;
  }

  .h-inherit-lg {
    height: inherit;
  }

  .w-auto-lg {
    width: auto;
  }

  .h-auto-lg {
    height: auto;
  }

  .vw-full-lg {
    width: 100vw;
  }

  .vh-full-lg {
    height: 100vh;
  }

  .w-5-lg {
    width: 5%;
  }

  .w-min-5-lg {
    min-width: 5%;
  }

  .w-max-5-lg {
    max-width: 5%;
  }

  .h-5-lg {
    height: 5%;
  }

  .h-min-5-lg {
    min-height: 5%;
  }

  .h-max-5-lg {
    max-height: 5%;
  }

  .vw-5-lg {
    width: 5vw;
  }

  .vw-min-5-lg {
    min-width: 5vw;
  }

  .vw-max-5-lg {
    max-width: 5vw;
  }

  .vh-5-lg {
    height: 5vh;
  }

  .vh-min-5-lg {
    min-height: 5vh;
  }

  .vh-max-5-lg {
    max-height: 5vh;
  }

  .w-10-lg {
    width: 10%;
  }

  .w-min-10-lg {
    min-width: 10%;
  }

  .w-max-10-lg {
    max-width: 10%;
  }

  .h-10-lg {
    height: 10%;
  }

  .h-min-10-lg {
    min-height: 10%;
  }

  .h-max-10-lg {
    max-height: 10%;
  }

  .vw-10-lg {
    width: 10vw;
  }

  .vw-min-10-lg {
    min-width: 10vw;
  }

  .vw-max-10-lg {
    max-width: 10vw;
  }

  .vh-10-lg {
    height: 10vh;
  }

  .vh-min-10-lg {
    min-height: 10vh;
  }

  .vh-max-10-lg {
    max-height: 10vh;
  }

  .w-15-lg {
    width: 15%;
  }

  .w-min-15-lg {
    min-width: 15%;
  }

  .w-max-15-lg {
    max-width: 15%;
  }

  .h-15-lg {
    height: 15%;
  }

  .h-min-15-lg {
    min-height: 15%;
  }

  .h-max-15-lg {
    max-height: 15%;
  }

  .vw-15-lg {
    width: 15vw;
  }

  .vw-min-15-lg {
    min-width: 15vw;
  }

  .vw-max-15-lg {
    max-width: 15vw;
  }

  .vh-15-lg {
    height: 15vh;
  }

  .vh-min-15-lg {
    min-height: 15vh;
  }

  .vh-max-15-lg {
    max-height: 15vh;
  }

  .w-20-lg {
    width: 20%;
  }

  .w-min-20-lg {
    min-width: 20%;
  }

  .w-max-20-lg {
    max-width: 20%;
  }

  .h-20-lg {
    height: 20%;
  }

  .h-min-20-lg {
    min-height: 20%;
  }

  .h-max-20-lg {
    max-height: 20%;
  }

  .vw-20-lg {
    width: 20vw;
  }

  .vw-min-20-lg {
    min-width: 20vw;
  }

  .vw-max-20-lg {
    max-width: 20vw;
  }

  .vh-20-lg {
    height: 20vh;
  }

  .vh-min-20-lg {
    min-height: 20vh;
  }

  .vh-max-20-lg {
    max-height: 20vh;
  }

  .w-25-lg {
    width: 25%;
  }

  .w-min-25-lg {
    min-width: 25%;
  }

  .w-max-25-lg {
    max-width: 25%;
  }

  .h-25-lg {
    height: 25%;
  }

  .h-min-25-lg {
    min-height: 25%;
  }

  .h-max-25-lg {
    max-height: 25%;
  }

  .vw-25-lg {
    width: 25vw;
  }

  .vw-min-25-lg {
    min-width: 25vw;
  }

  .vw-max-25-lg {
    max-width: 25vw;
  }

  .vh-25-lg {
    height: 25vh;
  }

  .vh-min-25-lg {
    min-height: 25vh;
  }

  .vh-max-25-lg {
    max-height: 25vh;
  }

  .w-30-lg {
    width: 30%;
  }

  .w-min-30-lg {
    min-width: 30%;
  }

  .w-max-30-lg {
    max-width: 30%;
  }

  .h-30-lg {
    height: 30%;
  }

  .h-min-30-lg {
    min-height: 30%;
  }

  .h-max-30-lg {
    max-height: 30%;
  }

  .vw-30-lg {
    width: 30vw;
  }

  .vw-min-30-lg {
    min-width: 30vw;
  }

  .vw-max-30-lg {
    max-width: 30vw;
  }

  .vh-30-lg {
    height: 30vh;
  }

  .vh-min-30-lg {
    min-height: 30vh;
  }

  .vh-max-30-lg {
    max-height: 30vh;
  }

  .w-35-lg {
    width: 35%;
  }

  .w-min-35-lg {
    min-width: 35%;
  }

  .w-max-35-lg {
    max-width: 35%;
  }

  .h-35-lg {
    height: 35%;
  }

  .h-min-35-lg {
    min-height: 35%;
  }

  .h-max-35-lg {
    max-height: 35%;
  }

  .vw-35-lg {
    width: 35vw;
  }

  .vw-min-35-lg {
    min-width: 35vw;
  }

  .vw-max-35-lg {
    max-width: 35vw;
  }

  .vh-35-lg {
    height: 35vh;
  }

  .vh-min-35-lg {
    min-height: 35vh;
  }

  .vh-max-35-lg {
    max-height: 35vh;
  }

  .w-40-lg {
    width: 40%;
  }

  .w-min-40-lg {
    min-width: 40%;
  }

  .w-max-40-lg {
    max-width: 40%;
  }

  .h-40-lg {
    height: 40%;
  }

  .h-min-40-lg {
    min-height: 40%;
  }

  .h-max-40-lg {
    max-height: 40%;
  }

  .vw-40-lg {
    width: 40vw;
  }

  .vw-min-40-lg {
    min-width: 40vw;
  }

  .vw-max-40-lg {
    max-width: 40vw;
  }

  .vh-40-lg {
    height: 40vh;
  }

  .vh-min-40-lg {
    min-height: 40vh;
  }

  .vh-max-40-lg {
    max-height: 40vh;
  }

  .w-45-lg {
    width: 45%;
  }

  .w-min-45-lg {
    min-width: 45%;
  }

  .w-max-45-lg {
    max-width: 45%;
  }

  .h-45-lg {
    height: 45%;
  }

  .h-min-45-lg {
    min-height: 45%;
  }

  .h-max-45-lg {
    max-height: 45%;
  }

  .vw-45-lg {
    width: 45vw;
  }

  .vw-min-45-lg {
    min-width: 45vw;
  }

  .vw-max-45-lg {
    max-width: 45vw;
  }

  .vh-45-lg {
    height: 45vh;
  }

  .vh-min-45-lg {
    min-height: 45vh;
  }

  .vh-max-45-lg {
    max-height: 45vh;
  }

  .w-50-lg {
    width: 50%;
  }

  .w-min-50-lg {
    min-width: 50%;
  }

  .w-max-50-lg {
    max-width: 50%;
  }

  .h-50-lg {
    height: 50%;
  }

  .h-min-50-lg {
    min-height: 50%;
  }

  .h-max-50-lg {
    max-height: 50%;
  }

  .vw-50-lg {
    width: 50vw;
  }

  .vw-min-50-lg {
    min-width: 50vw;
  }

  .vw-max-50-lg {
    max-width: 50vw;
  }

  .vh-50-lg {
    height: 50vh;
  }

  .vh-min-50-lg {
    min-height: 50vh;
  }

  .vh-max-50-lg {
    max-height: 50vh;
  }

  .w-55-lg {
    width: 55%;
  }

  .w-min-55-lg {
    min-width: 55%;
  }

  .w-max-55-lg {
    max-width: 55%;
  }

  .h-55-lg {
    height: 55%;
  }

  .h-min-55-lg {
    min-height: 55%;
  }

  .h-max-55-lg {
    max-height: 55%;
  }

  .vw-55-lg {
    width: 55vw;
  }

  .vw-min-55-lg {
    min-width: 55vw;
  }

  .vw-max-55-lg {
    max-width: 55vw;
  }

  .vh-55-lg {
    height: 55vh;
  }

  .vh-min-55-lg {
    min-height: 55vh;
  }

  .vh-max-55-lg {
    max-height: 55vh;
  }

  .w-60-lg {
    width: 60%;
  }

  .w-min-60-lg {
    min-width: 60%;
  }

  .w-max-60-lg {
    max-width: 60%;
  }

  .h-60-lg {
    height: 60%;
  }

  .h-min-60-lg {
    min-height: 60%;
  }

  .h-max-60-lg {
    max-height: 60%;
  }

  .vw-60-lg {
    width: 60vw;
  }

  .vw-min-60-lg {
    min-width: 60vw;
  }

  .vw-max-60-lg {
    max-width: 60vw;
  }

  .vh-60-lg {
    height: 60vh;
  }

  .vh-min-60-lg {
    min-height: 60vh;
  }

  .vh-max-60-lg {
    max-height: 60vh;
  }

  .w-65-lg {
    width: 65%;
  }

  .w-min-65-lg {
    min-width: 65%;
  }

  .w-max-65-lg {
    max-width: 65%;
  }

  .h-65-lg {
    height: 65%;
  }

  .h-min-65-lg {
    min-height: 65%;
  }

  .h-max-65-lg {
    max-height: 65%;
  }

  .vw-65-lg {
    width: 65vw;
  }

  .vw-min-65-lg {
    min-width: 65vw;
  }

  .vw-max-65-lg {
    max-width: 65vw;
  }

  .vh-65-lg {
    height: 65vh;
  }

  .vh-min-65-lg {
    min-height: 65vh;
  }

  .vh-max-65-lg {
    max-height: 65vh;
  }

  .w-70-lg {
    width: 70%;
  }

  .w-min-70-lg {
    min-width: 70%;
  }

  .w-max-70-lg {
    max-width: 70%;
  }

  .h-70-lg {
    height: 70%;
  }

  .h-min-70-lg {
    min-height: 70%;
  }

  .h-max-70-lg {
    max-height: 70%;
  }

  .vw-70-lg {
    width: 70vw;
  }

  .vw-min-70-lg {
    min-width: 70vw;
  }

  .vw-max-70-lg {
    max-width: 70vw;
  }

  .vh-70-lg {
    height: 70vh;
  }

  .vh-min-70-lg {
    min-height: 70vh;
  }

  .vh-max-70-lg {
    max-height: 70vh;
  }

  .w-75-lg {
    width: 75%;
  }

  .w-min-75-lg {
    min-width: 75%;
  }

  .w-max-75-lg {
    max-width: 75%;
  }

  .h-75-lg {
    height: 75%;
  }

  .h-min-75-lg {
    min-height: 75%;
  }

  .h-max-75-lg {
    max-height: 75%;
  }

  .vw-75-lg {
    width: 75vw;
  }

  .vw-min-75-lg {
    min-width: 75vw;
  }

  .vw-max-75-lg {
    max-width: 75vw;
  }

  .vh-75-lg {
    height: 75vh;
  }

  .vh-min-75-lg {
    min-height: 75vh;
  }

  .vh-max-75-lg {
    max-height: 75vh;
  }

  .w-80-lg {
    width: 80%;
  }

  .w-min-80-lg {
    min-width: 80%;
  }

  .w-max-80-lg {
    max-width: 80%;
  }

  .h-80-lg {
    height: 80%;
  }

  .h-min-80-lg {
    min-height: 80%;
  }

  .h-max-80-lg {
    max-height: 80%;
  }

  .vw-80-lg {
    width: 80vw;
  }

  .vw-min-80-lg {
    min-width: 80vw;
  }

  .vw-max-80-lg {
    max-width: 80vw;
  }

  .vh-80-lg {
    height: 80vh;
  }

  .vh-min-80-lg {
    min-height: 80vh;
  }

  .vh-max-80-lg {
    max-height: 80vh;
  }

  .w-85-lg {
    width: 85%;
  }

  .w-min-85-lg {
    min-width: 85%;
  }

  .w-max-85-lg {
    max-width: 85%;
  }

  .h-85-lg {
    height: 85%;
  }

  .h-min-85-lg {
    min-height: 85%;
  }

  .h-max-85-lg {
    max-height: 85%;
  }

  .vw-85-lg {
    width: 85vw;
  }

  .vw-min-85-lg {
    min-width: 85vw;
  }

  .vw-max-85-lg {
    max-width: 85vw;
  }

  .vh-85-lg {
    height: 85vh;
  }

  .vh-min-85-lg {
    min-height: 85vh;
  }

  .vh-max-85-lg {
    max-height: 85vh;
  }

  .w-90-lg {
    width: 90%;
  }

  .w-min-90-lg {
    min-width: 90%;
  }

  .w-max-90-lg {
    max-width: 90%;
  }

  .h-90-lg {
    height: 90%;
  }

  .h-min-90-lg {
    min-height: 90%;
  }

  .h-max-90-lg {
    max-height: 90%;
  }

  .vw-90-lg {
    width: 90vw;
  }

  .vw-min-90-lg {
    min-width: 90vw;
  }

  .vw-max-90-lg {
    max-width: 90vw;
  }

  .vh-90-lg {
    height: 90vh;
  }

  .vh-min-90-lg {
    min-height: 90vh;
  }

  .vh-max-90-lg {
    max-height: 90vh;
  }

  .w-95-lg {
    width: 95%;
  }

  .w-min-95-lg {
    min-width: 95%;
  }

  .w-max-95-lg {
    max-width: 95%;
  }

  .h-95-lg {
    height: 95%;
  }

  .h-min-95-lg {
    min-height: 95%;
  }

  .h-max-95-lg {
    max-height: 95%;
  }

  .vw-95-lg {
    width: 95vw;
  }

  .vw-min-95-lg {
    min-width: 95vw;
  }

  .vw-max-95-lg {
    max-width: 95vw;
  }

  .vh-95-lg {
    height: 95vh;
  }

  .vh-min-95-lg {
    min-height: 95vh;
  }

  .vh-max-95-lg {
    max-height: 95vh;
  }

  .w-100-lg {
    width: 100%;
  }

  .w-min-100-lg {
    min-width: 100%;
  }

  .w-max-100-lg {
    max-width: 100%;
  }

  .h-100-lg {
    height: 100%;
  }

  .h-min-100-lg {
    min-height: 100%;
  }

  .h-max-100-lg {
    max-height: 100%;
  }

  .vw-100-lg {
    width: 100vw;
  }

  .vw-min-100-lg {
    min-width: 100vw;
  }

  .vw-max-100-lg {
    max-width: 100vw;
  }

  .vh-100-lg {
    height: 100vh;
  }

  .vh-min-100-lg {
    min-height: 100vh;
  }

  .vh-max-100-lg {
    max-height: 100vh;
  }

  .p-none-lg {
    padding: 0px !important;
  }

  .p-xxs-lg {
    padding: 4px !important;
  }

  .p-xs-lg {
    padding: 8px !important;
  }

  .p-sm-lg {
    padding: 12px !important;
  }

  .p-md-lg {
    padding: 16px !important;
  }

  .p-lg-lg {
    padding: 24px !important;
  }

  .p-xl-lg {
    padding: 32px !important;
  }

  .p-xxl-lg {
    padding: 40px !important;
  }

  .m-none-lg {
    margin: 0px !important;
  }

  .m-xxs-lg {
    margin: 4px !important;
  }

  .m-xs-lg {
    margin: 8px !important;
  }

  .m-sm-lg {
    margin: 12px !important;
  }

  .m-md-lg {
    margin: 16px !important;
  }

  .m-lg-lg {
    margin: 24px !important;
  }

  .m-xl-lg {
    margin: 32px !important;
  }

  .m-xxl-lg {
    margin: 40px !important;
  }

  .w-none-lg {
    width: 0px !important;
  }

  .w-xxs-lg {
    width: 40px !important;
  }

  .w-xs-lg {
    width: 80px !important;
  }

  .w-sm-lg {
    width: 120px !important;
  }

  .w-md-lg {
    width: 160px !important;
  }

  .w-lg-lg {
    width: 240px !important;
  }

  .w-xl-lg {
    width: 320px !important;
  }

  .w-xxl-lg {
    width: 400px !important;
  }

  .w-min-none-lg {
    min-width: 0px !important;
  }

  .w-min-xxs-lg {
    min-width: 40px !important;
  }

  .w-min-xs-lg {
    min-width: 80px !important;
  }

  .w-min-sm-lg {
    min-width: 120px !important;
  }

  .w-min-md-lg {
    min-width: 160px !important;
  }

  .w-min-lg-lg {
    min-width: 240px !important;
  }

  .w-min-xl-lg {
    min-width: 320px !important;
  }

  .w-min-xxl-lg {
    min-width: 400px !important;
  }

  .w-max-none-lg {
    max-width: 0px !important;
  }

  .w-max-xxs-lg {
    max-width: 40px !important;
  }

  .w-max-xs-lg {
    max-width: 80px !important;
  }

  .w-max-sm-lg {
    max-width: 120px !important;
  }

  .w-max-md-lg {
    max-width: 160px !important;
  }

  .w-max-lg-lg {
    max-width: 240px !important;
  }

  .w-max-xl-lg {
    max-width: 320px !important;
  }

  .w-max-xxl-lg {
    max-width: 400px !important;
  }

  .h-none-lg {
    height: 0px !important;
  }

  .h-xxs-lg {
    height: 40px !important;
  }

  .h-xs-lg {
    height: 80px !important;
  }

  .h-sm-lg {
    height: 120px !important;
  }

  .h-md-lg {
    height: 160px !important;
  }

  .h-lg-lg {
    height: 240px !important;
  }

  .h-xl-lg {
    height: 320px !important;
  }

  .h-xxl-lg {
    height: 400px !important;
  }

  .h-max-none-lg {
    max-height: 0px !important;
  }

  .h-max-xxs-lg {
    max-height: 40px !important;
  }

  .h-max-xs-lg {
    max-height: 80px !important;
  }

  .h-max-sm-lg {
    max-height: 120px !important;
  }

  .h-max-md-lg {
    max-height: 160px !important;
  }

  .h-max-lg-lg {
    max-height: 240px !important;
  }

  .h-max-xl-lg {
    max-height: 320px !important;
  }

  .h-max-xxl-lg {
    max-height: 400px !important;
  }

  .h-min-none-lg {
    min-height: 0px !important;
  }

  .h-min-xxs-lg {
    min-height: 40px !important;
  }

  .h-min-xs-lg {
    min-height: 80px !important;
  }

  .h-min-sm-lg {
    min-height: 120px !important;
  }

  .h-min-md-lg {
    min-height: 160px !important;
  }

  .h-min-lg-lg {
    min-height: 240px !important;
  }

  .h-min-xl-lg {
    min-height: 320px !important;
  }

  .h-min-xxl-lg {
    min-height: 400px !important;
  }

  .h-max-none-lg {
    max-height: 0px !important;
  }

  .h-max-xxs-lg {
    max-height: 40px !important;
  }

  .h-max-xs-lg {
    max-height: 80px !important;
  }

  .h-max-sm-lg {
    max-height: 120px !important;
  }

  .h-max-md-lg {
    max-height: 160px !important;
  }

  .h-max-lg-lg {
    max-height: 240px !important;
  }

  .h-max-xl-lg {
    max-height: 320px !important;
  }

  .h-max-xxl-lg {
    max-height: 400px !important;
  }

  .m-l-none-lg {
    margin-left: 0px !important;
  }

  .m-l-xxs-lg {
    margin-left: 4px !important;
  }

  .m-l-xs-lg {
    margin-left: 8px !important;
  }

  .m-l-sm-lg {
    margin-left: 12px !important;
  }

  .m-l-md-lg {
    margin-left: 16px !important;
  }

  .m-l-lg-lg {
    margin-left: 24px !important;
  }

  .m-l-xl-lg {
    margin-left: 32px !important;
  }

  .m-l-xxl-lg {
    margin-left: 40px !important;
  }

  .m-r-none-lg {
    margin-right: 0px !important;
  }

  .m-r-xxs-lg {
    margin-right: 4px !important;
  }

  .m-r-xs-lg {
    margin-right: 8px !important;
  }

  .m-r-sm-lg {
    margin-right: 12px !important;
  }

  .m-r-md-lg {
    margin-right: 16px !important;
  }

  .m-r-lg-lg {
    margin-right: 24px !important;
  }

  .m-r-xl-lg {
    margin-right: 32px !important;
  }

  .m-r-xxl-lg {
    margin-right: 40px !important;
  }

  .m-t-none-lg {
    margin-top: 0px !important;
  }

  .m-t-xxs-lg {
    margin-top: 4px !important;
  }

  .m-t-xs-lg {
    margin-top: 8px !important;
  }

  .m-t-sm-lg {
    margin-top: 12px !important;
  }

  .m-t-md-lg {
    margin-top: 16px !important;
  }

  .m-t-lg-lg {
    margin-top: 24px !important;
  }

  .m-t-xl-lg {
    margin-top: 32px !important;
  }

  .m-t-xxl-lg {
    margin-top: 40px !important;
  }

  .m-b-none-lg {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-lg {
    margin-bottom: 4px !important;
  }

  .m-b-xs-lg {
    margin-bottom: 8px !important;
  }

  .m-b-sm-lg {
    margin-bottom: 12px !important;
  }

  .m-b-md-lg {
    margin-bottom: 16px !important;
  }

  .m-b-lg-lg {
    margin-bottom: 24px !important;
  }

  .m-b-xl-lg {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-lg {
    margin-bottom: 40px !important;
  }

  .p-l-none-lg {
    padding-left: 0px !important;
  }

  .p-l-xxs-lg {
    padding-left: 4px !important;
  }

  .p-l-xs-lg {
    padding-left: 8px !important;
  }

  .p-l-sm-lg {
    padding-left: 12px !important;
  }

  .p-l-md-lg {
    padding-left: 16px !important;
  }

  .p-l-lg-lg {
    padding-left: 24px !important;
  }

  .p-l-xl-lg {
    padding-left: 32px !important;
  }

  .p-l-xxl-lg {
    padding-left: 40px !important;
  }

  .p-r-none-lg {
    padding-right: 0px !important;
  }

  .p-r-xxs-lg {
    padding-right: 4px !important;
  }

  .p-r-xs-lg {
    padding-right: 8px !important;
  }

  .p-r-sm-lg {
    padding-right: 12px !important;
  }

  .p-r-md-lg {
    padding-right: 16px !important;
  }

  .p-r-lg-lg {
    padding-right: 24px !important;
  }

  .p-r-xl-lg {
    padding-right: 32px !important;
  }

  .p-r-xxl-lg {
    padding-right: 40px !important;
  }

  .p-t-none-lg {
    padding-top: 0px !important;
  }

  .p-t-xxs-lg {
    padding-top: 4px !important;
  }

  .p-t-xs-lg {
    padding-top: 8px !important;
  }

  .p-t-sm-lg {
    padding-top: 12px !important;
  }

  .p-t-md-lg {
    padding-top: 16px !important;
  }

  .p-t-lg-lg {
    padding-top: 24px !important;
  }

  .p-t-xl-lg {
    padding-top: 32px !important;
  }

  .p-t-xxl-lg {
    padding-top: 40px !important;
  }

  .p-b-none-lg {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-lg {
    padding-bottom: 4px !important;
  }

  .p-b-xs-lg {
    padding-bottom: 8px !important;
  }

  .p-b-sm-lg {
    padding-bottom: 12px !important;
  }

  .p-b-md-lg {
    padding-bottom: 16px !important;
  }

  .p-b-lg-lg {
    padding-bottom: 24px !important;
  }

  .p-b-xl-lg {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-lg {
    padding-bottom: 40px !important;
  }

  .gap-none-lg {
    gap: 0px !important;
  }

  .gap-xxs-lg {
    gap: 4px !important;
  }

  .gap-xs-lg {
    gap: 8px !important;
  }

  .gap-sm-lg {
    gap: 12px !important;
  }

  .gap-md-lg {
    gap: 16px !important;
  }

  .gap-lg-lg {
    gap: 24px !important;
  }

  .gap-xl-lg {
    gap: 32px !important;
  }

  .gap-xxl-lg {
    gap: 40px !important;
  }
}
@media (min-width: 1280px) {
  .w-full-xl {
    width: 100%;
  }

  .h-full-xl {
    height: 100%;
  }

  .w-inherit-xl {
    width: inherit;
  }

  .h-inherit-xl {
    height: inherit;
  }

  .w-auto-xl {
    width: auto;
  }

  .h-auto-xl {
    height: auto;
  }

  .vw-full-xl {
    width: 100vw;
  }

  .vh-full-xl {
    height: 100vh;
  }

  .w-5-xl {
    width: 5%;
  }

  .w-min-5-xl {
    min-width: 5%;
  }

  .w-max-5-xl {
    max-width: 5%;
  }

  .h-5-xl {
    height: 5%;
  }

  .h-min-5-xl {
    min-height: 5%;
  }

  .h-max-5-xl {
    max-height: 5%;
  }

  .vw-5-xl {
    width: 5vw;
  }

  .vw-min-5-xl {
    min-width: 5vw;
  }

  .vw-max-5-xl {
    max-width: 5vw;
  }

  .vh-5-xl {
    height: 5vh;
  }

  .vh-min-5-xl {
    min-height: 5vh;
  }

  .vh-max-5-xl {
    max-height: 5vh;
  }

  .w-10-xl {
    width: 10%;
  }

  .w-min-10-xl {
    min-width: 10%;
  }

  .w-max-10-xl {
    max-width: 10%;
  }

  .h-10-xl {
    height: 10%;
  }

  .h-min-10-xl {
    min-height: 10%;
  }

  .h-max-10-xl {
    max-height: 10%;
  }

  .vw-10-xl {
    width: 10vw;
  }

  .vw-min-10-xl {
    min-width: 10vw;
  }

  .vw-max-10-xl {
    max-width: 10vw;
  }

  .vh-10-xl {
    height: 10vh;
  }

  .vh-min-10-xl {
    min-height: 10vh;
  }

  .vh-max-10-xl {
    max-height: 10vh;
  }

  .w-15-xl {
    width: 15%;
  }

  .w-min-15-xl {
    min-width: 15%;
  }

  .w-max-15-xl {
    max-width: 15%;
  }

  .h-15-xl {
    height: 15%;
  }

  .h-min-15-xl {
    min-height: 15%;
  }

  .h-max-15-xl {
    max-height: 15%;
  }

  .vw-15-xl {
    width: 15vw;
  }

  .vw-min-15-xl {
    min-width: 15vw;
  }

  .vw-max-15-xl {
    max-width: 15vw;
  }

  .vh-15-xl {
    height: 15vh;
  }

  .vh-min-15-xl {
    min-height: 15vh;
  }

  .vh-max-15-xl {
    max-height: 15vh;
  }

  .w-20-xl {
    width: 20%;
  }

  .w-min-20-xl {
    min-width: 20%;
  }

  .w-max-20-xl {
    max-width: 20%;
  }

  .h-20-xl {
    height: 20%;
  }

  .h-min-20-xl {
    min-height: 20%;
  }

  .h-max-20-xl {
    max-height: 20%;
  }

  .vw-20-xl {
    width: 20vw;
  }

  .vw-min-20-xl {
    min-width: 20vw;
  }

  .vw-max-20-xl {
    max-width: 20vw;
  }

  .vh-20-xl {
    height: 20vh;
  }

  .vh-min-20-xl {
    min-height: 20vh;
  }

  .vh-max-20-xl {
    max-height: 20vh;
  }

  .w-25-xl {
    width: 25%;
  }

  .w-min-25-xl {
    min-width: 25%;
  }

  .w-max-25-xl {
    max-width: 25%;
  }

  .h-25-xl {
    height: 25%;
  }

  .h-min-25-xl {
    min-height: 25%;
  }

  .h-max-25-xl {
    max-height: 25%;
  }

  .vw-25-xl {
    width: 25vw;
  }

  .vw-min-25-xl {
    min-width: 25vw;
  }

  .vw-max-25-xl {
    max-width: 25vw;
  }

  .vh-25-xl {
    height: 25vh;
  }

  .vh-min-25-xl {
    min-height: 25vh;
  }

  .vh-max-25-xl {
    max-height: 25vh;
  }

  .w-30-xl {
    width: 30%;
  }

  .w-min-30-xl {
    min-width: 30%;
  }

  .w-max-30-xl {
    max-width: 30%;
  }

  .h-30-xl {
    height: 30%;
  }

  .h-min-30-xl {
    min-height: 30%;
  }

  .h-max-30-xl {
    max-height: 30%;
  }

  .vw-30-xl {
    width: 30vw;
  }

  .vw-min-30-xl {
    min-width: 30vw;
  }

  .vw-max-30-xl {
    max-width: 30vw;
  }

  .vh-30-xl {
    height: 30vh;
  }

  .vh-min-30-xl {
    min-height: 30vh;
  }

  .vh-max-30-xl {
    max-height: 30vh;
  }

  .w-35-xl {
    width: 35%;
  }

  .w-min-35-xl {
    min-width: 35%;
  }

  .w-max-35-xl {
    max-width: 35%;
  }

  .h-35-xl {
    height: 35%;
  }

  .h-min-35-xl {
    min-height: 35%;
  }

  .h-max-35-xl {
    max-height: 35%;
  }

  .vw-35-xl {
    width: 35vw;
  }

  .vw-min-35-xl {
    min-width: 35vw;
  }

  .vw-max-35-xl {
    max-width: 35vw;
  }

  .vh-35-xl {
    height: 35vh;
  }

  .vh-min-35-xl {
    min-height: 35vh;
  }

  .vh-max-35-xl {
    max-height: 35vh;
  }

  .w-40-xl {
    width: 40%;
  }

  .w-min-40-xl {
    min-width: 40%;
  }

  .w-max-40-xl {
    max-width: 40%;
  }

  .h-40-xl {
    height: 40%;
  }

  .h-min-40-xl {
    min-height: 40%;
  }

  .h-max-40-xl {
    max-height: 40%;
  }

  .vw-40-xl {
    width: 40vw;
  }

  .vw-min-40-xl {
    min-width: 40vw;
  }

  .vw-max-40-xl {
    max-width: 40vw;
  }

  .vh-40-xl {
    height: 40vh;
  }

  .vh-min-40-xl {
    min-height: 40vh;
  }

  .vh-max-40-xl {
    max-height: 40vh;
  }

  .w-45-xl {
    width: 45%;
  }

  .w-min-45-xl {
    min-width: 45%;
  }

  .w-max-45-xl {
    max-width: 45%;
  }

  .h-45-xl {
    height: 45%;
  }

  .h-min-45-xl {
    min-height: 45%;
  }

  .h-max-45-xl {
    max-height: 45%;
  }

  .vw-45-xl {
    width: 45vw;
  }

  .vw-min-45-xl {
    min-width: 45vw;
  }

  .vw-max-45-xl {
    max-width: 45vw;
  }

  .vh-45-xl {
    height: 45vh;
  }

  .vh-min-45-xl {
    min-height: 45vh;
  }

  .vh-max-45-xl {
    max-height: 45vh;
  }

  .w-50-xl {
    width: 50%;
  }

  .w-min-50-xl {
    min-width: 50%;
  }

  .w-max-50-xl {
    max-width: 50%;
  }

  .h-50-xl {
    height: 50%;
  }

  .h-min-50-xl {
    min-height: 50%;
  }

  .h-max-50-xl {
    max-height: 50%;
  }

  .vw-50-xl {
    width: 50vw;
  }

  .vw-min-50-xl {
    min-width: 50vw;
  }

  .vw-max-50-xl {
    max-width: 50vw;
  }

  .vh-50-xl {
    height: 50vh;
  }

  .vh-min-50-xl {
    min-height: 50vh;
  }

  .vh-max-50-xl {
    max-height: 50vh;
  }

  .w-55-xl {
    width: 55%;
  }

  .w-min-55-xl {
    min-width: 55%;
  }

  .w-max-55-xl {
    max-width: 55%;
  }

  .h-55-xl {
    height: 55%;
  }

  .h-min-55-xl {
    min-height: 55%;
  }

  .h-max-55-xl {
    max-height: 55%;
  }

  .vw-55-xl {
    width: 55vw;
  }

  .vw-min-55-xl {
    min-width: 55vw;
  }

  .vw-max-55-xl {
    max-width: 55vw;
  }

  .vh-55-xl {
    height: 55vh;
  }

  .vh-min-55-xl {
    min-height: 55vh;
  }

  .vh-max-55-xl {
    max-height: 55vh;
  }

  .w-60-xl {
    width: 60%;
  }

  .w-min-60-xl {
    min-width: 60%;
  }

  .w-max-60-xl {
    max-width: 60%;
  }

  .h-60-xl {
    height: 60%;
  }

  .h-min-60-xl {
    min-height: 60%;
  }

  .h-max-60-xl {
    max-height: 60%;
  }

  .vw-60-xl {
    width: 60vw;
  }

  .vw-min-60-xl {
    min-width: 60vw;
  }

  .vw-max-60-xl {
    max-width: 60vw;
  }

  .vh-60-xl {
    height: 60vh;
  }

  .vh-min-60-xl {
    min-height: 60vh;
  }

  .vh-max-60-xl {
    max-height: 60vh;
  }

  .w-65-xl {
    width: 65%;
  }

  .w-min-65-xl {
    min-width: 65%;
  }

  .w-max-65-xl {
    max-width: 65%;
  }

  .h-65-xl {
    height: 65%;
  }

  .h-min-65-xl {
    min-height: 65%;
  }

  .h-max-65-xl {
    max-height: 65%;
  }

  .vw-65-xl {
    width: 65vw;
  }

  .vw-min-65-xl {
    min-width: 65vw;
  }

  .vw-max-65-xl {
    max-width: 65vw;
  }

  .vh-65-xl {
    height: 65vh;
  }

  .vh-min-65-xl {
    min-height: 65vh;
  }

  .vh-max-65-xl {
    max-height: 65vh;
  }

  .w-70-xl {
    width: 70%;
  }

  .w-min-70-xl {
    min-width: 70%;
  }

  .w-max-70-xl {
    max-width: 70%;
  }

  .h-70-xl {
    height: 70%;
  }

  .h-min-70-xl {
    min-height: 70%;
  }

  .h-max-70-xl {
    max-height: 70%;
  }

  .vw-70-xl {
    width: 70vw;
  }

  .vw-min-70-xl {
    min-width: 70vw;
  }

  .vw-max-70-xl {
    max-width: 70vw;
  }

  .vh-70-xl {
    height: 70vh;
  }

  .vh-min-70-xl {
    min-height: 70vh;
  }

  .vh-max-70-xl {
    max-height: 70vh;
  }

  .w-75-xl {
    width: 75%;
  }

  .w-min-75-xl {
    min-width: 75%;
  }

  .w-max-75-xl {
    max-width: 75%;
  }

  .h-75-xl {
    height: 75%;
  }

  .h-min-75-xl {
    min-height: 75%;
  }

  .h-max-75-xl {
    max-height: 75%;
  }

  .vw-75-xl {
    width: 75vw;
  }

  .vw-min-75-xl {
    min-width: 75vw;
  }

  .vw-max-75-xl {
    max-width: 75vw;
  }

  .vh-75-xl {
    height: 75vh;
  }

  .vh-min-75-xl {
    min-height: 75vh;
  }

  .vh-max-75-xl {
    max-height: 75vh;
  }

  .w-80-xl {
    width: 80%;
  }

  .w-min-80-xl {
    min-width: 80%;
  }

  .w-max-80-xl {
    max-width: 80%;
  }

  .h-80-xl {
    height: 80%;
  }

  .h-min-80-xl {
    min-height: 80%;
  }

  .h-max-80-xl {
    max-height: 80%;
  }

  .vw-80-xl {
    width: 80vw;
  }

  .vw-min-80-xl {
    min-width: 80vw;
  }

  .vw-max-80-xl {
    max-width: 80vw;
  }

  .vh-80-xl {
    height: 80vh;
  }

  .vh-min-80-xl {
    min-height: 80vh;
  }

  .vh-max-80-xl {
    max-height: 80vh;
  }

  .w-85-xl {
    width: 85%;
  }

  .w-min-85-xl {
    min-width: 85%;
  }

  .w-max-85-xl {
    max-width: 85%;
  }

  .h-85-xl {
    height: 85%;
  }

  .h-min-85-xl {
    min-height: 85%;
  }

  .h-max-85-xl {
    max-height: 85%;
  }

  .vw-85-xl {
    width: 85vw;
  }

  .vw-min-85-xl {
    min-width: 85vw;
  }

  .vw-max-85-xl {
    max-width: 85vw;
  }

  .vh-85-xl {
    height: 85vh;
  }

  .vh-min-85-xl {
    min-height: 85vh;
  }

  .vh-max-85-xl {
    max-height: 85vh;
  }

  .w-90-xl {
    width: 90%;
  }

  .w-min-90-xl {
    min-width: 90%;
  }

  .w-max-90-xl {
    max-width: 90%;
  }

  .h-90-xl {
    height: 90%;
  }

  .h-min-90-xl {
    min-height: 90%;
  }

  .h-max-90-xl {
    max-height: 90%;
  }

  .vw-90-xl {
    width: 90vw;
  }

  .vw-min-90-xl {
    min-width: 90vw;
  }

  .vw-max-90-xl {
    max-width: 90vw;
  }

  .vh-90-xl {
    height: 90vh;
  }

  .vh-min-90-xl {
    min-height: 90vh;
  }

  .vh-max-90-xl {
    max-height: 90vh;
  }

  .w-95-xl {
    width: 95%;
  }

  .w-min-95-xl {
    min-width: 95%;
  }

  .w-max-95-xl {
    max-width: 95%;
  }

  .h-95-xl {
    height: 95%;
  }

  .h-min-95-xl {
    min-height: 95%;
  }

  .h-max-95-xl {
    max-height: 95%;
  }

  .vw-95-xl {
    width: 95vw;
  }

  .vw-min-95-xl {
    min-width: 95vw;
  }

  .vw-max-95-xl {
    max-width: 95vw;
  }

  .vh-95-xl {
    height: 95vh;
  }

  .vh-min-95-xl {
    min-height: 95vh;
  }

  .vh-max-95-xl {
    max-height: 95vh;
  }

  .w-100-xl {
    width: 100%;
  }

  .w-min-100-xl {
    min-width: 100%;
  }

  .w-max-100-xl {
    max-width: 100%;
  }

  .h-100-xl {
    height: 100%;
  }

  .h-min-100-xl {
    min-height: 100%;
  }

  .h-max-100-xl {
    max-height: 100%;
  }

  .vw-100-xl {
    width: 100vw;
  }

  .vw-min-100-xl {
    min-width: 100vw;
  }

  .vw-max-100-xl {
    max-width: 100vw;
  }

  .vh-100-xl {
    height: 100vh;
  }

  .vh-min-100-xl {
    min-height: 100vh;
  }

  .vh-max-100-xl {
    max-height: 100vh;
  }

  .p-none-xl {
    padding: 0px !important;
  }

  .p-xxs-xl {
    padding: 4px !important;
  }

  .p-xs-xl {
    padding: 8px !important;
  }

  .p-sm-xl {
    padding: 12px !important;
  }

  .p-md-xl {
    padding: 16px !important;
  }

  .p-lg-xl {
    padding: 24px !important;
  }

  .p-xl-xl {
    padding: 32px !important;
  }

  .p-xxl-xl {
    padding: 40px !important;
  }

  .m-none-xl {
    margin: 0px !important;
  }

  .m-xxs-xl {
    margin: 4px !important;
  }

  .m-xs-xl {
    margin: 8px !important;
  }

  .m-sm-xl {
    margin: 12px !important;
  }

  .m-md-xl {
    margin: 16px !important;
  }

  .m-lg-xl {
    margin: 24px !important;
  }

  .m-xl-xl {
    margin: 32px !important;
  }

  .m-xxl-xl {
    margin: 40px !important;
  }

  .w-none-xl {
    width: 0px !important;
  }

  .w-xxs-xl {
    width: 40px !important;
  }

  .w-xs-xl {
    width: 80px !important;
  }

  .w-sm-xl {
    width: 120px !important;
  }

  .w-md-xl {
    width: 160px !important;
  }

  .w-lg-xl {
    width: 240px !important;
  }

  .w-xl-xl {
    width: 320px !important;
  }

  .w-xxl-xl {
    width: 400px !important;
  }

  .w-min-none-xl {
    min-width: 0px !important;
  }

  .w-min-xxs-xl {
    min-width: 40px !important;
  }

  .w-min-xs-xl {
    min-width: 80px !important;
  }

  .w-min-sm-xl {
    min-width: 120px !important;
  }

  .w-min-md-xl {
    min-width: 160px !important;
  }

  .w-min-lg-xl {
    min-width: 240px !important;
  }

  .w-min-xl-xl {
    min-width: 320px !important;
  }

  .w-min-xxl-xl {
    min-width: 400px !important;
  }

  .w-max-none-xl {
    max-width: 0px !important;
  }

  .w-max-xxs-xl {
    max-width: 40px !important;
  }

  .w-max-xs-xl {
    max-width: 80px !important;
  }

  .w-max-sm-xl {
    max-width: 120px !important;
  }

  .w-max-md-xl {
    max-width: 160px !important;
  }

  .w-max-lg-xl {
    max-width: 240px !important;
  }

  .w-max-xl-xl {
    max-width: 320px !important;
  }

  .w-max-xxl-xl {
    max-width: 400px !important;
  }

  .h-none-xl {
    height: 0px !important;
  }

  .h-xxs-xl {
    height: 40px !important;
  }

  .h-xs-xl {
    height: 80px !important;
  }

  .h-sm-xl {
    height: 120px !important;
  }

  .h-md-xl {
    height: 160px !important;
  }

  .h-lg-xl {
    height: 240px !important;
  }

  .h-xl-xl {
    height: 320px !important;
  }

  .h-xxl-xl {
    height: 400px !important;
  }

  .h-max-none-xl {
    max-height: 0px !important;
  }

  .h-max-xxs-xl {
    max-height: 40px !important;
  }

  .h-max-xs-xl {
    max-height: 80px !important;
  }

  .h-max-sm-xl {
    max-height: 120px !important;
  }

  .h-max-md-xl {
    max-height: 160px !important;
  }

  .h-max-lg-xl {
    max-height: 240px !important;
  }

  .h-max-xl-xl {
    max-height: 320px !important;
  }

  .h-max-xxl-xl {
    max-height: 400px !important;
  }

  .h-min-none-xl {
    min-height: 0px !important;
  }

  .h-min-xxs-xl {
    min-height: 40px !important;
  }

  .h-min-xs-xl {
    min-height: 80px !important;
  }

  .h-min-sm-xl {
    min-height: 120px !important;
  }

  .h-min-md-xl {
    min-height: 160px !important;
  }

  .h-min-lg-xl {
    min-height: 240px !important;
  }

  .h-min-xl-xl {
    min-height: 320px !important;
  }

  .h-min-xxl-xl {
    min-height: 400px !important;
  }

  .h-max-none-xl {
    max-height: 0px !important;
  }

  .h-max-xxs-xl {
    max-height: 40px !important;
  }

  .h-max-xs-xl {
    max-height: 80px !important;
  }

  .h-max-sm-xl {
    max-height: 120px !important;
  }

  .h-max-md-xl {
    max-height: 160px !important;
  }

  .h-max-lg-xl {
    max-height: 240px !important;
  }

  .h-max-xl-xl {
    max-height: 320px !important;
  }

  .h-max-xxl-xl {
    max-height: 400px !important;
  }

  .m-l-none-xl {
    margin-left: 0px !important;
  }

  .m-l-xxs-xl {
    margin-left: 4px !important;
  }

  .m-l-xs-xl {
    margin-left: 8px !important;
  }

  .m-l-sm-xl {
    margin-left: 12px !important;
  }

  .m-l-md-xl {
    margin-left: 16px !important;
  }

  .m-l-lg-xl {
    margin-left: 24px !important;
  }

  .m-l-xl-xl {
    margin-left: 32px !important;
  }

  .m-l-xxl-xl {
    margin-left: 40px !important;
  }

  .m-r-none-xl {
    margin-right: 0px !important;
  }

  .m-r-xxs-xl {
    margin-right: 4px !important;
  }

  .m-r-xs-xl {
    margin-right: 8px !important;
  }

  .m-r-sm-xl {
    margin-right: 12px !important;
  }

  .m-r-md-xl {
    margin-right: 16px !important;
  }

  .m-r-lg-xl {
    margin-right: 24px !important;
  }

  .m-r-xl-xl {
    margin-right: 32px !important;
  }

  .m-r-xxl-xl {
    margin-right: 40px !important;
  }

  .m-t-none-xl {
    margin-top: 0px !important;
  }

  .m-t-xxs-xl {
    margin-top: 4px !important;
  }

  .m-t-xs-xl {
    margin-top: 8px !important;
  }

  .m-t-sm-xl {
    margin-top: 12px !important;
  }

  .m-t-md-xl {
    margin-top: 16px !important;
  }

  .m-t-lg-xl {
    margin-top: 24px !important;
  }

  .m-t-xl-xl {
    margin-top: 32px !important;
  }

  .m-t-xxl-xl {
    margin-top: 40px !important;
  }

  .m-b-none-xl {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-xl {
    margin-bottom: 4px !important;
  }

  .m-b-xs-xl {
    margin-bottom: 8px !important;
  }

  .m-b-sm-xl {
    margin-bottom: 12px !important;
  }

  .m-b-md-xl {
    margin-bottom: 16px !important;
  }

  .m-b-lg-xl {
    margin-bottom: 24px !important;
  }

  .m-b-xl-xl {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-xl {
    margin-bottom: 40px !important;
  }

  .p-l-none-xl {
    padding-left: 0px !important;
  }

  .p-l-xxs-xl {
    padding-left: 4px !important;
  }

  .p-l-xs-xl {
    padding-left: 8px !important;
  }

  .p-l-sm-xl {
    padding-left: 12px !important;
  }

  .p-l-md-xl {
    padding-left: 16px !important;
  }

  .p-l-lg-xl {
    padding-left: 24px !important;
  }

  .p-l-xl-xl {
    padding-left: 32px !important;
  }

  .p-l-xxl-xl {
    padding-left: 40px !important;
  }

  .p-r-none-xl {
    padding-right: 0px !important;
  }

  .p-r-xxs-xl {
    padding-right: 4px !important;
  }

  .p-r-xs-xl {
    padding-right: 8px !important;
  }

  .p-r-sm-xl {
    padding-right: 12px !important;
  }

  .p-r-md-xl {
    padding-right: 16px !important;
  }

  .p-r-lg-xl {
    padding-right: 24px !important;
  }

  .p-r-xl-xl {
    padding-right: 32px !important;
  }

  .p-r-xxl-xl {
    padding-right: 40px !important;
  }

  .p-t-none-xl {
    padding-top: 0px !important;
  }

  .p-t-xxs-xl {
    padding-top: 4px !important;
  }

  .p-t-xs-xl {
    padding-top: 8px !important;
  }

  .p-t-sm-xl {
    padding-top: 12px !important;
  }

  .p-t-md-xl {
    padding-top: 16px !important;
  }

  .p-t-lg-xl {
    padding-top: 24px !important;
  }

  .p-t-xl-xl {
    padding-top: 32px !important;
  }

  .p-t-xxl-xl {
    padding-top: 40px !important;
  }

  .p-b-none-xl {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-xl {
    padding-bottom: 4px !important;
  }

  .p-b-xs-xl {
    padding-bottom: 8px !important;
  }

  .p-b-sm-xl {
    padding-bottom: 12px !important;
  }

  .p-b-md-xl {
    padding-bottom: 16px !important;
  }

  .p-b-lg-xl {
    padding-bottom: 24px !important;
  }

  .p-b-xl-xl {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-xl {
    padding-bottom: 40px !important;
  }

  .gap-none-xl {
    gap: 0px !important;
  }

  .gap-xxs-xl {
    gap: 4px !important;
  }

  .gap-xs-xl {
    gap: 8px !important;
  }

  .gap-sm-xl {
    gap: 12px !important;
  }

  .gap-md-xl {
    gap: 16px !important;
  }

  .gap-lg-xl {
    gap: 24px !important;
  }

  .gap-xl-xl {
    gap: 32px !important;
  }

  .gap-xxl-xl {
    gap: 40px !important;
  }
}
@media (min-width: 1536px) {
  .w-full-xxl {
    width: 100%;
  }

  .h-full-xxl {
    height: 100%;
  }

  .w-inherit-xxl {
    width: inherit;
  }

  .h-inherit-xxl {
    height: inherit;
  }

  .w-auto-xxl {
    width: auto;
  }

  .h-auto-xxl {
    height: auto;
  }

  .vw-full-xxl {
    width: 100vw;
  }

  .vh-full-xxl {
    height: 100vh;
  }

  .w-5-xxl {
    width: 5%;
  }

  .w-min-5-xxl {
    min-width: 5%;
  }

  .w-max-5-xxl {
    max-width: 5%;
  }

  .h-5-xxl {
    height: 5%;
  }

  .h-min-5-xxl {
    min-height: 5%;
  }

  .h-max-5-xxl {
    max-height: 5%;
  }

  .vw-5-xxl {
    width: 5vw;
  }

  .vw-min-5-xxl {
    min-width: 5vw;
  }

  .vw-max-5-xxl {
    max-width: 5vw;
  }

  .vh-5-xxl {
    height: 5vh;
  }

  .vh-min-5-xxl {
    min-height: 5vh;
  }

  .vh-max-5-xxl {
    max-height: 5vh;
  }

  .w-10-xxl {
    width: 10%;
  }

  .w-min-10-xxl {
    min-width: 10%;
  }

  .w-max-10-xxl {
    max-width: 10%;
  }

  .h-10-xxl {
    height: 10%;
  }

  .h-min-10-xxl {
    min-height: 10%;
  }

  .h-max-10-xxl {
    max-height: 10%;
  }

  .vw-10-xxl {
    width: 10vw;
  }

  .vw-min-10-xxl {
    min-width: 10vw;
  }

  .vw-max-10-xxl {
    max-width: 10vw;
  }

  .vh-10-xxl {
    height: 10vh;
  }

  .vh-min-10-xxl {
    min-height: 10vh;
  }

  .vh-max-10-xxl {
    max-height: 10vh;
  }

  .w-15-xxl {
    width: 15%;
  }

  .w-min-15-xxl {
    min-width: 15%;
  }

  .w-max-15-xxl {
    max-width: 15%;
  }

  .h-15-xxl {
    height: 15%;
  }

  .h-min-15-xxl {
    min-height: 15%;
  }

  .h-max-15-xxl {
    max-height: 15%;
  }

  .vw-15-xxl {
    width: 15vw;
  }

  .vw-min-15-xxl {
    min-width: 15vw;
  }

  .vw-max-15-xxl {
    max-width: 15vw;
  }

  .vh-15-xxl {
    height: 15vh;
  }

  .vh-min-15-xxl {
    min-height: 15vh;
  }

  .vh-max-15-xxl {
    max-height: 15vh;
  }

  .w-20-xxl {
    width: 20%;
  }

  .w-min-20-xxl {
    min-width: 20%;
  }

  .w-max-20-xxl {
    max-width: 20%;
  }

  .h-20-xxl {
    height: 20%;
  }

  .h-min-20-xxl {
    min-height: 20%;
  }

  .h-max-20-xxl {
    max-height: 20%;
  }

  .vw-20-xxl {
    width: 20vw;
  }

  .vw-min-20-xxl {
    min-width: 20vw;
  }

  .vw-max-20-xxl {
    max-width: 20vw;
  }

  .vh-20-xxl {
    height: 20vh;
  }

  .vh-min-20-xxl {
    min-height: 20vh;
  }

  .vh-max-20-xxl {
    max-height: 20vh;
  }

  .w-25-xxl {
    width: 25%;
  }

  .w-min-25-xxl {
    min-width: 25%;
  }

  .w-max-25-xxl {
    max-width: 25%;
  }

  .h-25-xxl {
    height: 25%;
  }

  .h-min-25-xxl {
    min-height: 25%;
  }

  .h-max-25-xxl {
    max-height: 25%;
  }

  .vw-25-xxl {
    width: 25vw;
  }

  .vw-min-25-xxl {
    min-width: 25vw;
  }

  .vw-max-25-xxl {
    max-width: 25vw;
  }

  .vh-25-xxl {
    height: 25vh;
  }

  .vh-min-25-xxl {
    min-height: 25vh;
  }

  .vh-max-25-xxl {
    max-height: 25vh;
  }

  .w-30-xxl {
    width: 30%;
  }

  .w-min-30-xxl {
    min-width: 30%;
  }

  .w-max-30-xxl {
    max-width: 30%;
  }

  .h-30-xxl {
    height: 30%;
  }

  .h-min-30-xxl {
    min-height: 30%;
  }

  .h-max-30-xxl {
    max-height: 30%;
  }

  .vw-30-xxl {
    width: 30vw;
  }

  .vw-min-30-xxl {
    min-width: 30vw;
  }

  .vw-max-30-xxl {
    max-width: 30vw;
  }

  .vh-30-xxl {
    height: 30vh;
  }

  .vh-min-30-xxl {
    min-height: 30vh;
  }

  .vh-max-30-xxl {
    max-height: 30vh;
  }

  .w-35-xxl {
    width: 35%;
  }

  .w-min-35-xxl {
    min-width: 35%;
  }

  .w-max-35-xxl {
    max-width: 35%;
  }

  .h-35-xxl {
    height: 35%;
  }

  .h-min-35-xxl {
    min-height: 35%;
  }

  .h-max-35-xxl {
    max-height: 35%;
  }

  .vw-35-xxl {
    width: 35vw;
  }

  .vw-min-35-xxl {
    min-width: 35vw;
  }

  .vw-max-35-xxl {
    max-width: 35vw;
  }

  .vh-35-xxl {
    height: 35vh;
  }

  .vh-min-35-xxl {
    min-height: 35vh;
  }

  .vh-max-35-xxl {
    max-height: 35vh;
  }

  .w-40-xxl {
    width: 40%;
  }

  .w-min-40-xxl {
    min-width: 40%;
  }

  .w-max-40-xxl {
    max-width: 40%;
  }

  .h-40-xxl {
    height: 40%;
  }

  .h-min-40-xxl {
    min-height: 40%;
  }

  .h-max-40-xxl {
    max-height: 40%;
  }

  .vw-40-xxl {
    width: 40vw;
  }

  .vw-min-40-xxl {
    min-width: 40vw;
  }

  .vw-max-40-xxl {
    max-width: 40vw;
  }

  .vh-40-xxl {
    height: 40vh;
  }

  .vh-min-40-xxl {
    min-height: 40vh;
  }

  .vh-max-40-xxl {
    max-height: 40vh;
  }

  .w-45-xxl {
    width: 45%;
  }

  .w-min-45-xxl {
    min-width: 45%;
  }

  .w-max-45-xxl {
    max-width: 45%;
  }

  .h-45-xxl {
    height: 45%;
  }

  .h-min-45-xxl {
    min-height: 45%;
  }

  .h-max-45-xxl {
    max-height: 45%;
  }

  .vw-45-xxl {
    width: 45vw;
  }

  .vw-min-45-xxl {
    min-width: 45vw;
  }

  .vw-max-45-xxl {
    max-width: 45vw;
  }

  .vh-45-xxl {
    height: 45vh;
  }

  .vh-min-45-xxl {
    min-height: 45vh;
  }

  .vh-max-45-xxl {
    max-height: 45vh;
  }

  .w-50-xxl {
    width: 50%;
  }

  .w-min-50-xxl {
    min-width: 50%;
  }

  .w-max-50-xxl {
    max-width: 50%;
  }

  .h-50-xxl {
    height: 50%;
  }

  .h-min-50-xxl {
    min-height: 50%;
  }

  .h-max-50-xxl {
    max-height: 50%;
  }

  .vw-50-xxl {
    width: 50vw;
  }

  .vw-min-50-xxl {
    min-width: 50vw;
  }

  .vw-max-50-xxl {
    max-width: 50vw;
  }

  .vh-50-xxl {
    height: 50vh;
  }

  .vh-min-50-xxl {
    min-height: 50vh;
  }

  .vh-max-50-xxl {
    max-height: 50vh;
  }

  .w-55-xxl {
    width: 55%;
  }

  .w-min-55-xxl {
    min-width: 55%;
  }

  .w-max-55-xxl {
    max-width: 55%;
  }

  .h-55-xxl {
    height: 55%;
  }

  .h-min-55-xxl {
    min-height: 55%;
  }

  .h-max-55-xxl {
    max-height: 55%;
  }

  .vw-55-xxl {
    width: 55vw;
  }

  .vw-min-55-xxl {
    min-width: 55vw;
  }

  .vw-max-55-xxl {
    max-width: 55vw;
  }

  .vh-55-xxl {
    height: 55vh;
  }

  .vh-min-55-xxl {
    min-height: 55vh;
  }

  .vh-max-55-xxl {
    max-height: 55vh;
  }

  .w-60-xxl {
    width: 60%;
  }

  .w-min-60-xxl {
    min-width: 60%;
  }

  .w-max-60-xxl {
    max-width: 60%;
  }

  .h-60-xxl {
    height: 60%;
  }

  .h-min-60-xxl {
    min-height: 60%;
  }

  .h-max-60-xxl {
    max-height: 60%;
  }

  .vw-60-xxl {
    width: 60vw;
  }

  .vw-min-60-xxl {
    min-width: 60vw;
  }

  .vw-max-60-xxl {
    max-width: 60vw;
  }

  .vh-60-xxl {
    height: 60vh;
  }

  .vh-min-60-xxl {
    min-height: 60vh;
  }

  .vh-max-60-xxl {
    max-height: 60vh;
  }

  .w-65-xxl {
    width: 65%;
  }

  .w-min-65-xxl {
    min-width: 65%;
  }

  .w-max-65-xxl {
    max-width: 65%;
  }

  .h-65-xxl {
    height: 65%;
  }

  .h-min-65-xxl {
    min-height: 65%;
  }

  .h-max-65-xxl {
    max-height: 65%;
  }

  .vw-65-xxl {
    width: 65vw;
  }

  .vw-min-65-xxl {
    min-width: 65vw;
  }

  .vw-max-65-xxl {
    max-width: 65vw;
  }

  .vh-65-xxl {
    height: 65vh;
  }

  .vh-min-65-xxl {
    min-height: 65vh;
  }

  .vh-max-65-xxl {
    max-height: 65vh;
  }

  .w-70-xxl {
    width: 70%;
  }

  .w-min-70-xxl {
    min-width: 70%;
  }

  .w-max-70-xxl {
    max-width: 70%;
  }

  .h-70-xxl {
    height: 70%;
  }

  .h-min-70-xxl {
    min-height: 70%;
  }

  .h-max-70-xxl {
    max-height: 70%;
  }

  .vw-70-xxl {
    width: 70vw;
  }

  .vw-min-70-xxl {
    min-width: 70vw;
  }

  .vw-max-70-xxl {
    max-width: 70vw;
  }

  .vh-70-xxl {
    height: 70vh;
  }

  .vh-min-70-xxl {
    min-height: 70vh;
  }

  .vh-max-70-xxl {
    max-height: 70vh;
  }

  .w-75-xxl {
    width: 75%;
  }

  .w-min-75-xxl {
    min-width: 75%;
  }

  .w-max-75-xxl {
    max-width: 75%;
  }

  .h-75-xxl {
    height: 75%;
  }

  .h-min-75-xxl {
    min-height: 75%;
  }

  .h-max-75-xxl {
    max-height: 75%;
  }

  .vw-75-xxl {
    width: 75vw;
  }

  .vw-min-75-xxl {
    min-width: 75vw;
  }

  .vw-max-75-xxl {
    max-width: 75vw;
  }

  .vh-75-xxl {
    height: 75vh;
  }

  .vh-min-75-xxl {
    min-height: 75vh;
  }

  .vh-max-75-xxl {
    max-height: 75vh;
  }

  .w-80-xxl {
    width: 80%;
  }

  .w-min-80-xxl {
    min-width: 80%;
  }

  .w-max-80-xxl {
    max-width: 80%;
  }

  .h-80-xxl {
    height: 80%;
  }

  .h-min-80-xxl {
    min-height: 80%;
  }

  .h-max-80-xxl {
    max-height: 80%;
  }

  .vw-80-xxl {
    width: 80vw;
  }

  .vw-min-80-xxl {
    min-width: 80vw;
  }

  .vw-max-80-xxl {
    max-width: 80vw;
  }

  .vh-80-xxl {
    height: 80vh;
  }

  .vh-min-80-xxl {
    min-height: 80vh;
  }

  .vh-max-80-xxl {
    max-height: 80vh;
  }

  .w-85-xxl {
    width: 85%;
  }

  .w-min-85-xxl {
    min-width: 85%;
  }

  .w-max-85-xxl {
    max-width: 85%;
  }

  .h-85-xxl {
    height: 85%;
  }

  .h-min-85-xxl {
    min-height: 85%;
  }

  .h-max-85-xxl {
    max-height: 85%;
  }

  .vw-85-xxl {
    width: 85vw;
  }

  .vw-min-85-xxl {
    min-width: 85vw;
  }

  .vw-max-85-xxl {
    max-width: 85vw;
  }

  .vh-85-xxl {
    height: 85vh;
  }

  .vh-min-85-xxl {
    min-height: 85vh;
  }

  .vh-max-85-xxl {
    max-height: 85vh;
  }

  .w-90-xxl {
    width: 90%;
  }

  .w-min-90-xxl {
    min-width: 90%;
  }

  .w-max-90-xxl {
    max-width: 90%;
  }

  .h-90-xxl {
    height: 90%;
  }

  .h-min-90-xxl {
    min-height: 90%;
  }

  .h-max-90-xxl {
    max-height: 90%;
  }

  .vw-90-xxl {
    width: 90vw;
  }

  .vw-min-90-xxl {
    min-width: 90vw;
  }

  .vw-max-90-xxl {
    max-width: 90vw;
  }

  .vh-90-xxl {
    height: 90vh;
  }

  .vh-min-90-xxl {
    min-height: 90vh;
  }

  .vh-max-90-xxl {
    max-height: 90vh;
  }

  .w-95-xxl {
    width: 95%;
  }

  .w-min-95-xxl {
    min-width: 95%;
  }

  .w-max-95-xxl {
    max-width: 95%;
  }

  .h-95-xxl {
    height: 95%;
  }

  .h-min-95-xxl {
    min-height: 95%;
  }

  .h-max-95-xxl {
    max-height: 95%;
  }

  .vw-95-xxl {
    width: 95vw;
  }

  .vw-min-95-xxl {
    min-width: 95vw;
  }

  .vw-max-95-xxl {
    max-width: 95vw;
  }

  .vh-95-xxl {
    height: 95vh;
  }

  .vh-min-95-xxl {
    min-height: 95vh;
  }

  .vh-max-95-xxl {
    max-height: 95vh;
  }

  .w-100-xxl {
    width: 100%;
  }

  .w-min-100-xxl {
    min-width: 100%;
  }

  .w-max-100-xxl {
    max-width: 100%;
  }

  .h-100-xxl {
    height: 100%;
  }

  .h-min-100-xxl {
    min-height: 100%;
  }

  .h-max-100-xxl {
    max-height: 100%;
  }

  .vw-100-xxl {
    width: 100vw;
  }

  .vw-min-100-xxl {
    min-width: 100vw;
  }

  .vw-max-100-xxl {
    max-width: 100vw;
  }

  .vh-100-xxl {
    height: 100vh;
  }

  .vh-min-100-xxl {
    min-height: 100vh;
  }

  .vh-max-100-xxl {
    max-height: 100vh;
  }

  .p-none-xxl {
    padding: 0px !important;
  }

  .p-xxs-xxl {
    padding: 4px !important;
  }

  .p-xs-xxl {
    padding: 8px !important;
  }

  .p-sm-xxl {
    padding: 12px !important;
  }

  .p-md-xxl {
    padding: 16px !important;
  }

  .p-lg-xxl {
    padding: 24px !important;
  }

  .p-xl-xxl {
    padding: 32px !important;
  }

  .p-xxl-xxl {
    padding: 40px !important;
  }

  .m-none-xxl {
    margin: 0px !important;
  }

  .m-xxs-xxl {
    margin: 4px !important;
  }

  .m-xs-xxl {
    margin: 8px !important;
  }

  .m-sm-xxl {
    margin: 12px !important;
  }

  .m-md-xxl {
    margin: 16px !important;
  }

  .m-lg-xxl {
    margin: 24px !important;
  }

  .m-xl-xxl {
    margin: 32px !important;
  }

  .m-xxl-xxl {
    margin: 40px !important;
  }

  .w-none-xxl {
    width: 0px !important;
  }

  .w-xxs-xxl {
    width: 40px !important;
  }

  .w-xs-xxl {
    width: 80px !important;
  }

  .w-sm-xxl {
    width: 120px !important;
  }

  .w-md-xxl {
    width: 160px !important;
  }

  .w-lg-xxl {
    width: 240px !important;
  }

  .w-xl-xxl {
    width: 320px !important;
  }

  .w-xxl-xxl {
    width: 400px !important;
  }

  .w-min-none-xxl {
    min-width: 0px !important;
  }

  .w-min-xxs-xxl {
    min-width: 40px !important;
  }

  .w-min-xs-xxl {
    min-width: 80px !important;
  }

  .w-min-sm-xxl {
    min-width: 120px !important;
  }

  .w-min-md-xxl {
    min-width: 160px !important;
  }

  .w-min-lg-xxl {
    min-width: 240px !important;
  }

  .w-min-xl-xxl {
    min-width: 320px !important;
  }

  .w-min-xxl-xxl {
    min-width: 400px !important;
  }

  .w-max-none-xxl {
    max-width: 0px !important;
  }

  .w-max-xxs-xxl {
    max-width: 40px !important;
  }

  .w-max-xs-xxl {
    max-width: 80px !important;
  }

  .w-max-sm-xxl {
    max-width: 120px !important;
  }

  .w-max-md-xxl {
    max-width: 160px !important;
  }

  .w-max-lg-xxl {
    max-width: 240px !important;
  }

  .w-max-xl-xxl {
    max-width: 320px !important;
  }

  .w-max-xxl-xxl {
    max-width: 400px !important;
  }

  .h-none-xxl {
    height: 0px !important;
  }

  .h-xxs-xxl {
    height: 40px !important;
  }

  .h-xs-xxl {
    height: 80px !important;
  }

  .h-sm-xxl {
    height: 120px !important;
  }

  .h-md-xxl {
    height: 160px !important;
  }

  .h-lg-xxl {
    height: 240px !important;
  }

  .h-xl-xxl {
    height: 320px !important;
  }

  .h-xxl-xxl {
    height: 400px !important;
  }

  .h-max-none-xxl {
    max-height: 0px !important;
  }

  .h-max-xxs-xxl {
    max-height: 40px !important;
  }

  .h-max-xs-xxl {
    max-height: 80px !important;
  }

  .h-max-sm-xxl {
    max-height: 120px !important;
  }

  .h-max-md-xxl {
    max-height: 160px !important;
  }

  .h-max-lg-xxl {
    max-height: 240px !important;
  }

  .h-max-xl-xxl {
    max-height: 320px !important;
  }

  .h-max-xxl-xxl {
    max-height: 400px !important;
  }

  .h-min-none-xxl {
    min-height: 0px !important;
  }

  .h-min-xxs-xxl {
    min-height: 40px !important;
  }

  .h-min-xs-xxl {
    min-height: 80px !important;
  }

  .h-min-sm-xxl {
    min-height: 120px !important;
  }

  .h-min-md-xxl {
    min-height: 160px !important;
  }

  .h-min-lg-xxl {
    min-height: 240px !important;
  }

  .h-min-xl-xxl {
    min-height: 320px !important;
  }

  .h-min-xxl-xxl {
    min-height: 400px !important;
  }

  .h-max-none-xxl {
    max-height: 0px !important;
  }

  .h-max-xxs-xxl {
    max-height: 40px !important;
  }

  .h-max-xs-xxl {
    max-height: 80px !important;
  }

  .h-max-sm-xxl {
    max-height: 120px !important;
  }

  .h-max-md-xxl {
    max-height: 160px !important;
  }

  .h-max-lg-xxl {
    max-height: 240px !important;
  }

  .h-max-xl-xxl {
    max-height: 320px !important;
  }

  .h-max-xxl-xxl {
    max-height: 400px !important;
  }

  .m-l-none-xxl {
    margin-left: 0px !important;
  }

  .m-l-xxs-xxl {
    margin-left: 4px !important;
  }

  .m-l-xs-xxl {
    margin-left: 8px !important;
  }

  .m-l-sm-xxl {
    margin-left: 12px !important;
  }

  .m-l-md-xxl {
    margin-left: 16px !important;
  }

  .m-l-lg-xxl {
    margin-left: 24px !important;
  }

  .m-l-xl-xxl {
    margin-left: 32px !important;
  }

  .m-l-xxl-xxl {
    margin-left: 40px !important;
  }

  .m-r-none-xxl {
    margin-right: 0px !important;
  }

  .m-r-xxs-xxl {
    margin-right: 4px !important;
  }

  .m-r-xs-xxl {
    margin-right: 8px !important;
  }

  .m-r-sm-xxl {
    margin-right: 12px !important;
  }

  .m-r-md-xxl {
    margin-right: 16px !important;
  }

  .m-r-lg-xxl {
    margin-right: 24px !important;
  }

  .m-r-xl-xxl {
    margin-right: 32px !important;
  }

  .m-r-xxl-xxl {
    margin-right: 40px !important;
  }

  .m-t-none-xxl {
    margin-top: 0px !important;
  }

  .m-t-xxs-xxl {
    margin-top: 4px !important;
  }

  .m-t-xs-xxl {
    margin-top: 8px !important;
  }

  .m-t-sm-xxl {
    margin-top: 12px !important;
  }

  .m-t-md-xxl {
    margin-top: 16px !important;
  }

  .m-t-lg-xxl {
    margin-top: 24px !important;
  }

  .m-t-xl-xxl {
    margin-top: 32px !important;
  }

  .m-t-xxl-xxl {
    margin-top: 40px !important;
  }

  .m-b-none-xxl {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-xxl {
    margin-bottom: 4px !important;
  }

  .m-b-xs-xxl {
    margin-bottom: 8px !important;
  }

  .m-b-sm-xxl {
    margin-bottom: 12px !important;
  }

  .m-b-md-xxl {
    margin-bottom: 16px !important;
  }

  .m-b-lg-xxl {
    margin-bottom: 24px !important;
  }

  .m-b-xl-xxl {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-xxl {
    margin-bottom: 40px !important;
  }

  .p-l-none-xxl {
    padding-left: 0px !important;
  }

  .p-l-xxs-xxl {
    padding-left: 4px !important;
  }

  .p-l-xs-xxl {
    padding-left: 8px !important;
  }

  .p-l-sm-xxl {
    padding-left: 12px !important;
  }

  .p-l-md-xxl {
    padding-left: 16px !important;
  }

  .p-l-lg-xxl {
    padding-left: 24px !important;
  }

  .p-l-xl-xxl {
    padding-left: 32px !important;
  }

  .p-l-xxl-xxl {
    padding-left: 40px !important;
  }

  .p-r-none-xxl {
    padding-right: 0px !important;
  }

  .p-r-xxs-xxl {
    padding-right: 4px !important;
  }

  .p-r-xs-xxl {
    padding-right: 8px !important;
  }

  .p-r-sm-xxl {
    padding-right: 12px !important;
  }

  .p-r-md-xxl {
    padding-right: 16px !important;
  }

  .p-r-lg-xxl {
    padding-right: 24px !important;
  }

  .p-r-xl-xxl {
    padding-right: 32px !important;
  }

  .p-r-xxl-xxl {
    padding-right: 40px !important;
  }

  .p-t-none-xxl {
    padding-top: 0px !important;
  }

  .p-t-xxs-xxl {
    padding-top: 4px !important;
  }

  .p-t-xs-xxl {
    padding-top: 8px !important;
  }

  .p-t-sm-xxl {
    padding-top: 12px !important;
  }

  .p-t-md-xxl {
    padding-top: 16px !important;
  }

  .p-t-lg-xxl {
    padding-top: 24px !important;
  }

  .p-t-xl-xxl {
    padding-top: 32px !important;
  }

  .p-t-xxl-xxl {
    padding-top: 40px !important;
  }

  .p-b-none-xxl {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-xxl {
    padding-bottom: 4px !important;
  }

  .p-b-xs-xxl {
    padding-bottom: 8px !important;
  }

  .p-b-sm-xxl {
    padding-bottom: 12px !important;
  }

  .p-b-md-xxl {
    padding-bottom: 16px !important;
  }

  .p-b-lg-xxl {
    padding-bottom: 24px !important;
  }

  .p-b-xl-xxl {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-xxl {
    padding-bottom: 40px !important;
  }

  .gap-none-xxl {
    gap: 0px !important;
  }

  .gap-xxs-xxl {
    gap: 4px !important;
  }

  .gap-xs-xxl {
    gap: 8px !important;
  }

  .gap-sm-xxl {
    gap: 12px !important;
  }

  .gap-md-xxl {
    gap: 16px !important;
  }

  .gap-lg-xxl {
    gap: 24px !important;
  }

  .gap-xl-xxl {
    gap: 32px !important;
  }

  .gap-xxl-xxl {
    gap: 40px !important;
  }
}
:checked .bg-transparent-checked,
.is-checked .bg-transparent-checked,
.is-active .bg-transparent-active,
.bg-transparent-active:active,
.bg-transparent-hover:hover,
.bg-transparent {
  background-color: transparent !important;
}
:checked .bg-white-checked,
.is-checked .bg-white-checked,
.is-active .bg-white-active,
.bg-white-active:active,
.bg-white-hover:hover,
.bg-white {
  background-color: #FFFFFF !important;
}
:checked .bg-body-checked,
.is-checked .bg-body-checked,
.is-active .bg-body-active,
.bg-body-active:active,
.bg-body-hover:hover,
.bg-body {
  background-color: #FFFFFF !important;
}
:checked .bg-content-checked,
.is-checked .bg-content-checked,
.is-active .bg-content-active,
.bg-content-active:active,
.bg-content-hover:hover,
.bg-content {
  background-color: #FFFFFF !important;
}
:checked .bg-light-checked,
.is-checked .bg-light-checked,
.is-active .bg-light-active,
.bg-light-active:active,
.bg-light-hover:hover,
.bg-light {
  background-color: #F6F9FB !important;
}
:checked .bg-popup-checked,
.is-checked .bg-popup-checked,
.is-active .bg-popup-active,
.bg-popup-active:active,
.bg-popup-hover:hover,
.bg-popup {
  background-color: #FFFFFF !important;
}
:checked .bg-element-checked,
.is-checked .bg-element-checked,
.is-active .bg-element-active,
.bg-element-active:active,
.bg-element-hover:hover,
.bg-element {
  background-color: #FFFFFF !important;
}
:checked .bg-hover-checked,
.is-checked .bg-hover-checked,
.is-active .bg-hover-active,
.bg-hover-active:active,
.bg-hover-hover:hover,
.bg-hover {
  background-color: #F6F9FB !important;
}
:checked .bg-active-checked,
.is-checked .bg-active-checked,
.is-active .bg-active-active,
.bg-active-active:active,
.bg-active-hover:hover,
.bg-active {
  background-color: #F6F9FB !important;
}
:checked .bg-title-checked,
.is-checked .bg-title-checked,
.is-active .bg-title-active,
.bg-title-active:active,
.bg-title-hover:hover,
.bg-title {
  background-color: #FFFFFF !important;
}
:checked .bg-mask-checked,
.is-checked .bg-mask-checked,
.is-active .bg-mask-active,
.bg-mask-active:active,
.bg-mask-hover:hover,
.bg-mask {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
:checked .text-regular-checked,
.is-checked .text-regular-checked,
.is-active .text-regular-active,
.text-regular-active:active,
.text-regular-hover:hover,
.text-regular {
  color: #5E6278 !important;
}
:checked .text-secondary-checked,
.is-checked .text-secondary-checked,
.is-active .text-secondary-active,
.text-secondary-active:active,
.text-secondary-hover:hover,
.text-secondary {
  color: #A1A5B7 !important;
}
:checked .text-light-checked,
.is-checked .text-light-checked,
.is-active .text-light-active,
.text-light-active:active,
.text-light-hover:hover,
.text-light {
  color: #B5B5C3 !important;
}
:checked .text-lightest-checked,
.is-checked .text-lightest-checked,
.is-active .text-lightest-active,
.text-lightest-active:active,
.text-lightest-hover:hover,
.text-lightest {
  color: #E4E6EF !important;
}
:checked .text-title-checked,
.is-checked .text-title-checked,
.is-active .text-title-active,
.text-title-active:active,
.text-title-hover:hover,
.text-title {
  color: #3F4254 !important;
}
:checked .text-link-checked,
.is-checked .text-link-checked,
.is-active .text-link-active,
.text-link-active:active,
.text-link-hover:hover,
.text-link {
  color: #009EF7 !important;
}
:checked .text-hover-checked,
.is-checked .text-hover-checked,
.is-active .text-hover-active,
.text-hover-active:active,
.text-hover-hover:hover,
.text-hover {
  color: #009EF7 !important;
}
:checked .text-inverse-checked,
.is-checked .text-inverse-checked,
.is-active .text-inverse-active,
.text-inverse-active:active,
.text-inverse-hover:hover,
.text-inverse {
  color: #FFFFFF !important;
}
:checked .text-inherit-checked,
.is-checked .text-inherit-checked,
.is-active .text-inherit-active,
.text-inherit-active:active,
.text-inherit-hover:hover,
.text-inherit {
  color: inherit !important;
}
:checked .text-current-checked,
.is-checked .text-current-checked,
.is-active .text-current-active,
.text-current-active:active,
.text-current-hover:hover,
.text-current {
  color: currentColor !important;
}
:checked .border-transparent-checked,
.is-checked .border-transparent-checked,
.is-active .border-transparent-active,
.border-transparent-active:active,
.border-transparent-hover:hover,
.border-transparent {
  border-color: transparent !important;
}
:checked .border-regular-checked,
.is-checked .border-regular-checked,
.is-active .border-regular-active,
.border-regular-active:active,
.border-regular-hover:hover,
.border-regular {
  border-color: #EFF2F5 !important;
}
:checked .border-light-checked,
.is-checked .border-light-checked,
.is-active .border-light-active,
.border-light-active:active,
.border-light-hover:hover,
.border-light {
  border-color: #E8EBF8 !important;
}
:checked .border-dark-checked,
.is-checked .border-dark-checked,
.is-active .border-dark-active,
.border-dark-active:active,
.border-dark-hover:hover,
.border-dark {
  border-color: #E4E6EF !important;
}
:checked .text-primary-checked,
.is-checked .text-primary-checked,
.is-active .text-primary-active,
.text-primary-active:active,
.text-primary-hover:hover,
.text-primary {
  color: #40a9ff !important;
}
:checked .bg-primary-checked,
.is-checked .bg-primary-checked,
.is-active .bg-primary-active,
.bg-primary-active:active,
.bg-primary-hover:hover,
.bg-primary {
  background-color: #40a9ff !important;
}
:checked .bg-primary-checked.light-1,
.is-checked .bg-primary-checked.light-1,
.is-active .bg-primary-active.light-1,
.bg-primary-active:active.light-1,
.bg-primary-hover:hover.light-1,
.bg-primary.light-1 {
  background-color: #66baff !important;
}
:checked .bg-primary-checked.light-2,
.is-checked .bg-primary-checked.light-2,
.is-active .bg-primary-active.light-2,
.bg-primary-active:active.light-2,
.bg-primary-hover:hover.light-2,
.bg-primary.light-2 {
  background-color: #8ccbff !important;
}
:checked .bg-primary-checked.light-3,
.is-checked .bg-primary-checked.light-3,
.is-active .bg-primary-active.light-3,
.bg-primary-active:active.light-3,
.bg-primary-hover:hover.light-3,
.bg-primary.light-3 {
  background-color: #b3ddff !important;
}
:checked .bg-primary-checked.light-4,
.is-checked .bg-primary-checked.light-4,
.is-active .bg-primary-active.light-4,
.bg-primary-active:active.light-4,
.bg-primary-hover:hover.light-4,
.bg-primary.light-4 {
  background-color: #d9eeff !important;
}
:checked .bg-primary-checked.light-5,
.is-checked .bg-primary-checked.light-5,
.is-active .bg-primary-active.light-5,
.bg-primary-active:active.light-5,
.bg-primary-hover:hover.light-5,
.bg-primary.light-5 {
  background-color: #f4faff !important;
}
:checked .bg-primary-checked.dark-1,
.is-checked .bg-primary-checked.dark-1,
.is-active .bg-primary-active.dark-1,
.bg-primary-active:active.dark-1,
.bg-primary-hover:hover.dark-1,
.bg-primary.dark-1 {
  background-color: #1395ff !important;
}
:checked .bg-primary-checked.dark-2,
.is-checked .bg-primary-checked.dark-2,
.is-active .bg-primary-active.dark-2,
.bg-primary-active:active.dark-2,
.bg-primary-hover:hover.dark-2,
.bg-primary.dark-2 {
  background-color: #007ee6 !important;
}
:checked .bg-primary-checked.dark-3,
.is-checked .bg-primary-checked.dark-3,
.is-active .bg-primary-active.dark-3,
.bg-primary-active:active.dark-3,
.bg-primary-hover:hover.dark-3,
.bg-primary.dark-3 {
  background-color: #0066b9 !important;
}
:checked .bg-primary-checked.dark-4,
.is-checked .bg-primary-checked.dark-4,
.is-active .bg-primary-active.dark-4,
.bg-primary-active:active.dark-4,
.bg-primary-hover:hover.dark-4,
.bg-primary.dark-4 {
  background-color: #004d8c !important;
}
:checked .bg-primary-checked.dark-5,
.is-checked .bg-primary-checked.dark-5,
.is-active .bg-primary-active.dark-5,
.bg-primary-active:active.dark-5,
.bg-primary-hover:hover.dark-5,
.bg-primary.dark-5 {
  background-color: #003560 !important;
}
:checked .bg-primary-checked.opacity-1,
.is-checked .bg-primary-checked.opacity-1,
.is-active .bg-primary-active.opacity-1,
.bg-primary-active:active.opacity-1,
.bg-primary-hover:hover.opacity-1,
.bg-primary.opacity-1 {
  background-color: rgba(64, 169, 255, 0.08) !important;
}
:checked .bg-primary-checked.opacity-2,
.is-checked .bg-primary-checked.opacity-2,
.is-active .bg-primary-active.opacity-2,
.bg-primary-active:active.opacity-2,
.bg-primary-hover:hover.opacity-2,
.bg-primary.opacity-2 {
  background-color: rgba(64, 169, 255, 0.16) !important;
}
:checked .bg-primary-checked.opacity-3,
.is-checked .bg-primary-checked.opacity-3,
.is-active .bg-primary-active.opacity-3,
.bg-primary-active:active.opacity-3,
.bg-primary-hover:hover.opacity-3,
.bg-primary.opacity-3 {
  background-color: rgba(64, 169, 255, 0.24) !important;
}
:checked .bg-primary-checked.opacity-4,
.is-checked .bg-primary-checked.opacity-4,
.is-active .bg-primary-active.opacity-4,
.bg-primary-active:active.opacity-4,
.bg-primary-hover:hover.opacity-4,
.bg-primary.opacity-4 {
  background-color: rgba(64, 169, 255, 0.32) !important;
}
:checked .bg-primary-checked.opacity-5,
.is-checked .bg-primary-checked.opacity-5,
.is-active .bg-primary-active.opacity-5,
.bg-primary-active:active.opacity-5,
.bg-primary-hover:hover.opacity-5,
.bg-primary.opacity-5 {
  background-color: rgba(64, 169, 255, 0.4) !important;
}
:checked .bg-primary-checked.opacity-6,
.is-checked .bg-primary-checked.opacity-6,
.is-active .bg-primary-active.opacity-6,
.bg-primary-active:active.opacity-6,
.bg-primary-hover:hover.opacity-6,
.bg-primary.opacity-6 {
  background-color: rgba(64, 169, 255, 0.48) !important;
}
:checked .bg-primary-checked.opacity-7,
.is-checked .bg-primary-checked.opacity-7,
.is-active .bg-primary-active.opacity-7,
.bg-primary-active:active.opacity-7,
.bg-primary-hover:hover.opacity-7,
.bg-primary.opacity-7 {
  background-color: rgba(64, 169, 255, 0.56) !important;
}
:checked .bg-primary-checked.opacity-8,
.is-checked .bg-primary-checked.opacity-8,
.is-active .bg-primary-active.opacity-8,
.bg-primary-active:active.opacity-8,
.bg-primary-hover:hover.opacity-8,
.bg-primary.opacity-8 {
  background-color: rgba(64, 169, 255, 0.64) !important;
}
:checked .bg-primary-checked.opacity-9,
.is-checked .bg-primary-checked.opacity-9,
.is-active .bg-primary-active.opacity-9,
.bg-primary-active:active.opacity-9,
.bg-primary-hover:hover.opacity-9,
.bg-primary.opacity-9 {
  background-color: rgba(64, 169, 255, 0.72) !important;
}
:checked .border-primary-checked,
.is-checked .border-primary-checked,
.is-active .border-primary-active,
.border-primary-active:active,
.border-primary-hover:hover,
.border-primary {
  border-color: #40a9ff !important;
}
:checked .border-primary-checked.border-light-1,
.is-checked .border-primary-checked.border-light-1,
.is-active .border-primary-active.border-light-1,
.border-primary-active:active.border-light-1,
.border-primary-hover:hover.border-light-1,
.border-primary.border-light-1 {
  border-color: #66baff !important;
}
:checked .border-primary-checked.border-light-2,
.is-checked .border-primary-checked.border-light-2,
.is-active .border-primary-active.border-light-2,
.border-primary-active:active.border-light-2,
.border-primary-hover:hover.border-light-2,
.border-primary.border-light-2 {
  border-color: #8ccbff !important;
}
:checked .border-primary-checked.border-light-3,
.is-checked .border-primary-checked.border-light-3,
.is-active .border-primary-active.border-light-3,
.border-primary-active:active.border-light-3,
.border-primary-hover:hover.border-light-3,
.border-primary.border-light-3 {
  border-color: #b3ddff !important;
}
:checked .border-primary-checked.border-light-4,
.is-checked .border-primary-checked.border-light-4,
.is-active .border-primary-active.border-light-4,
.border-primary-active:active.border-light-4,
.border-primary-hover:hover.border-light-4,
.border-primary.border-light-4 {
  border-color: #d9eeff !important;
}
:checked .border-primary-checked.border-light-5,
.is-checked .border-primary-checked.border-light-5,
.is-active .border-primary-active.border-light-5,
.border-primary-active:active.border-light-5,
.border-primary-hover:hover.border-light-5,
.border-primary.border-light-5 {
  border-color: #f4faff !important;
}
:checked .border-primary-checked.border-dark-1,
.is-checked .border-primary-checked.border-dark-1,
.is-active .border-primary-active.border-dark-1,
.border-primary-active:active.border-dark-1,
.border-primary-hover:hover.border-dark-1,
.border-primary.border-dark-1 {
  border-color: #1395ff !important;
}
:checked .border-primary-checked.border-dark-2,
.is-checked .border-primary-checked.border-dark-2,
.is-active .border-primary-active.border-dark-2,
.border-primary-active:active.border-dark-2,
.border-primary-hover:hover.border-dark-2,
.border-primary.border-dark-2 {
  border-color: #007ee6 !important;
}
:checked .border-primary-checked.border-dark-3,
.is-checked .border-primary-checked.border-dark-3,
.is-active .border-primary-active.border-dark-3,
.border-primary-active:active.border-dark-3,
.border-primary-hover:hover.border-dark-3,
.border-primary.border-dark-3 {
  border-color: #0066b9 !important;
}
:checked .border-primary-checked.border-dark-4,
.is-checked .border-primary-checked.border-dark-4,
.is-active .border-primary-active.border-dark-4,
.border-primary-active:active.border-dark-4,
.border-primary-hover:hover.border-dark-4,
.border-primary.border-dark-4 {
  border-color: #004d8c !important;
}
:checked .border-primary-checked.border-dark-5,
.is-checked .border-primary-checked.border-dark-5,
.is-active .border-primary-active.border-dark-5,
.border-primary-active:active.border-dark-5,
.border-primary-hover:hover.border-dark-5,
.border-primary.border-dark-5 {
  border-color: #003560 !important;
}
:checked .border-primary-checked.border-opacity-1,
.is-checked .border-primary-checked.border-opacity-1,
.is-active .border-primary-active.border-opacity-1,
.border-primary-active:active.border-opacity-1,
.border-primary-hover:hover.border-opacity-1,
.border-primary.border-opacity-1 {
  border-color: rgba(64, 169, 255, 0.08) !important;
}
:checked .border-primary-checked.border-opacity-2,
.is-checked .border-primary-checked.border-opacity-2,
.is-active .border-primary-active.border-opacity-2,
.border-primary-active:active.border-opacity-2,
.border-primary-hover:hover.border-opacity-2,
.border-primary.border-opacity-2 {
  border-color: rgba(64, 169, 255, 0.16) !important;
}
:checked .border-primary-checked.border-opacity-3,
.is-checked .border-primary-checked.border-opacity-3,
.is-active .border-primary-active.border-opacity-3,
.border-primary-active:active.border-opacity-3,
.border-primary-hover:hover.border-opacity-3,
.border-primary.border-opacity-3 {
  border-color: rgba(64, 169, 255, 0.24) !important;
}
:checked .border-primary-checked.border-opacity-4,
.is-checked .border-primary-checked.border-opacity-4,
.is-active .border-primary-active.border-opacity-4,
.border-primary-active:active.border-opacity-4,
.border-primary-hover:hover.border-opacity-4,
.border-primary.border-opacity-4 {
  border-color: rgba(64, 169, 255, 0.32) !important;
}
:checked .border-primary-checked.border-opacity-5,
.is-checked .border-primary-checked.border-opacity-5,
.is-active .border-primary-active.border-opacity-5,
.border-primary-active:active.border-opacity-5,
.border-primary-hover:hover.border-opacity-5,
.border-primary.border-opacity-5 {
  border-color: rgba(64, 169, 255, 0.4) !important;
}
:checked .border-primary-checked.border-opacity-6,
.is-checked .border-primary-checked.border-opacity-6,
.is-active .border-primary-active.border-opacity-6,
.border-primary-active:active.border-opacity-6,
.border-primary-hover:hover.border-opacity-6,
.border-primary.border-opacity-6 {
  border-color: rgba(64, 169, 255, 0.48) !important;
}
:checked .border-primary-checked.border-opacity-7,
.is-checked .border-primary-checked.border-opacity-7,
.is-active .border-primary-active.border-opacity-7,
.border-primary-active:active.border-opacity-7,
.border-primary-hover:hover.border-opacity-7,
.border-primary.border-opacity-7 {
  border-color: rgba(64, 169, 255, 0.56) !important;
}
:checked .border-primary-checked.border-opacity-8,
.is-checked .border-primary-checked.border-opacity-8,
.is-active .border-primary-active.border-opacity-8,
.border-primary-active:active.border-opacity-8,
.border-primary-hover:hover.border-opacity-8,
.border-primary.border-opacity-8 {
  border-color: rgba(64, 169, 255, 0.64) !important;
}
:checked .border-primary-checked.border-opacity-9,
.is-checked .border-primary-checked.border-opacity-9,
.is-active .border-primary-active.border-opacity-9,
.border-primary-active:active.border-opacity-9,
.border-primary-hover:hover.border-opacity-9,
.border-primary.border-opacity-9 {
  border-color: rgba(64, 169, 255, 0.72) !important;
}
:checked .text-success-checked,
.is-checked .text-success-checked,
.is-active .text-success-active,
.text-success-active:active,
.text-success-hover:hover,
.text-success {
  color: #50cd89 !important;
}
:checked .bg-success-checked,
.is-checked .bg-success-checked,
.is-active .bg-success-active,
.bg-success-active:active,
.bg-success-hover:hover,
.bg-success {
  background-color: #50cd89 !important;
}
:checked .bg-success-checked.light-1,
.is-checked .bg-success-checked.light-1,
.is-active .bg-success-active.light-1,
.bg-success-active:active.light-1,
.bg-success-hover:hover.light-1,
.bg-success.light-1 {
  background-color: #73d7a1 !important;
}
:checked .bg-success-checked.light-2,
.is-checked .bg-success-checked.light-2,
.is-active .bg-success-active.light-2,
.bg-success-active:active.light-2,
.bg-success-hover:hover.light-2,
.bg-success.light-2 {
  background-color: #96e1b8 !important;
}
:checked .bg-success-checked.light-3,
.is-checked .bg-success-checked.light-3,
.is-active .bg-success-active.light-3,
.bg-success-active:active.light-3,
.bg-success-hover:hover.light-3,
.bg-success.light-3 {
  background-color: #b9ebd0 !important;
}
:checked .bg-success-checked.light-4,
.is-checked .bg-success-checked.light-4,
.is-active .bg-success-active.light-4,
.bg-success-active:active.light-4,
.bg-success-hover:hover.light-4,
.bg-success.light-4 {
  background-color: #dcf5e7 !important;
}
:checked .bg-success-checked.light-5,
.is-checked .bg-success-checked.light-5,
.is-active .bg-success-active.light-5,
.bg-success-active:active.light-5,
.bg-success-hover:hover.light-5,
.bg-success.light-5 {
  background-color: #f5fcf8 !important;
}
:checked .bg-success-checked.dark-1,
.is-checked .bg-success-checked.dark-1,
.is-active .bg-success-active.dark-1,
.bg-success-active:active.dark-1,
.bg-success-hover:hover.dark-1,
.bg-success.dark-1 {
  background-color: #36bf75 !important;
}
:checked .bg-success-checked.dark-2,
.is-checked .bg-success-checked.dark-2,
.is-active .bg-success-active.dark-2,
.bg-success-active:active.dark-2,
.bg-success-hover:hover.dark-2,
.bg-success.dark-2 {
  background-color: #2ea062 !important;
}
:checked .bg-success-checked.dark-3,
.is-checked .bg-success-checked.dark-3,
.is-active .bg-success-active.dark-3,
.bg-success-active:active.dark-3,
.bg-success-hover:hover.dark-3,
.bg-success.dark-3 {
  background-color: #25814f !important;
}
:checked .bg-success-checked.dark-4,
.is-checked .bg-success-checked.dark-4,
.is-active .bg-success-active.dark-4,
.bg-success-active:active.dark-4,
.bg-success-hover:hover.dark-4,
.bg-success.dark-4 {
  background-color: #1c623c !important;
}
:checked .bg-success-checked.dark-5,
.is-checked .bg-success-checked.dark-5,
.is-active .bg-success-active.dark-5,
.bg-success-active:active.dark-5,
.bg-success-hover:hover.dark-5,
.bg-success.dark-5 {
  background-color: #134329 !important;
}
:checked .bg-success-checked.opacity-1,
.is-checked .bg-success-checked.opacity-1,
.is-active .bg-success-active.opacity-1,
.bg-success-active:active.opacity-1,
.bg-success-hover:hover.opacity-1,
.bg-success.opacity-1 {
  background-color: rgba(80, 205, 137, 0.08) !important;
}
:checked .bg-success-checked.opacity-2,
.is-checked .bg-success-checked.opacity-2,
.is-active .bg-success-active.opacity-2,
.bg-success-active:active.opacity-2,
.bg-success-hover:hover.opacity-2,
.bg-success.opacity-2 {
  background-color: rgba(80, 205, 137, 0.16) !important;
}
:checked .bg-success-checked.opacity-3,
.is-checked .bg-success-checked.opacity-3,
.is-active .bg-success-active.opacity-3,
.bg-success-active:active.opacity-3,
.bg-success-hover:hover.opacity-3,
.bg-success.opacity-3 {
  background-color: rgba(80, 205, 137, 0.24) !important;
}
:checked .bg-success-checked.opacity-4,
.is-checked .bg-success-checked.opacity-4,
.is-active .bg-success-active.opacity-4,
.bg-success-active:active.opacity-4,
.bg-success-hover:hover.opacity-4,
.bg-success.opacity-4 {
  background-color: rgba(80, 205, 137, 0.32) !important;
}
:checked .bg-success-checked.opacity-5,
.is-checked .bg-success-checked.opacity-5,
.is-active .bg-success-active.opacity-5,
.bg-success-active:active.opacity-5,
.bg-success-hover:hover.opacity-5,
.bg-success.opacity-5 {
  background-color: rgba(80, 205, 137, 0.4) !important;
}
:checked .bg-success-checked.opacity-6,
.is-checked .bg-success-checked.opacity-6,
.is-active .bg-success-active.opacity-6,
.bg-success-active:active.opacity-6,
.bg-success-hover:hover.opacity-6,
.bg-success.opacity-6 {
  background-color: rgba(80, 205, 137, 0.48) !important;
}
:checked .bg-success-checked.opacity-7,
.is-checked .bg-success-checked.opacity-7,
.is-active .bg-success-active.opacity-7,
.bg-success-active:active.opacity-7,
.bg-success-hover:hover.opacity-7,
.bg-success.opacity-7 {
  background-color: rgba(80, 205, 137, 0.56) !important;
}
:checked .bg-success-checked.opacity-8,
.is-checked .bg-success-checked.opacity-8,
.is-active .bg-success-active.opacity-8,
.bg-success-active:active.opacity-8,
.bg-success-hover:hover.opacity-8,
.bg-success.opacity-8 {
  background-color: rgba(80, 205, 137, 0.64) !important;
}
:checked .bg-success-checked.opacity-9,
.is-checked .bg-success-checked.opacity-9,
.is-active .bg-success-active.opacity-9,
.bg-success-active:active.opacity-9,
.bg-success-hover:hover.opacity-9,
.bg-success.opacity-9 {
  background-color: rgba(80, 205, 137, 0.72) !important;
}
:checked .border-success-checked,
.is-checked .border-success-checked,
.is-active .border-success-active,
.border-success-active:active,
.border-success-hover:hover,
.border-success {
  border-color: #50cd89 !important;
}
:checked .border-success-checked.border-light-1,
.is-checked .border-success-checked.border-light-1,
.is-active .border-success-active.border-light-1,
.border-success-active:active.border-light-1,
.border-success-hover:hover.border-light-1,
.border-success.border-light-1 {
  border-color: #73d7a1 !important;
}
:checked .border-success-checked.border-light-2,
.is-checked .border-success-checked.border-light-2,
.is-active .border-success-active.border-light-2,
.border-success-active:active.border-light-2,
.border-success-hover:hover.border-light-2,
.border-success.border-light-2 {
  border-color: #96e1b8 !important;
}
:checked .border-success-checked.border-light-3,
.is-checked .border-success-checked.border-light-3,
.is-active .border-success-active.border-light-3,
.border-success-active:active.border-light-3,
.border-success-hover:hover.border-light-3,
.border-success.border-light-3 {
  border-color: #b9ebd0 !important;
}
:checked .border-success-checked.border-light-4,
.is-checked .border-success-checked.border-light-4,
.is-active .border-success-active.border-light-4,
.border-success-active:active.border-light-4,
.border-success-hover:hover.border-light-4,
.border-success.border-light-4 {
  border-color: #dcf5e7 !important;
}
:checked .border-success-checked.border-light-5,
.is-checked .border-success-checked.border-light-5,
.is-active .border-success-active.border-light-5,
.border-success-active:active.border-light-5,
.border-success-hover:hover.border-light-5,
.border-success.border-light-5 {
  border-color: #f5fcf8 !important;
}
:checked .border-success-checked.border-dark-1,
.is-checked .border-success-checked.border-dark-1,
.is-active .border-success-active.border-dark-1,
.border-success-active:active.border-dark-1,
.border-success-hover:hover.border-dark-1,
.border-success.border-dark-1 {
  border-color: #36bf75 !important;
}
:checked .border-success-checked.border-dark-2,
.is-checked .border-success-checked.border-dark-2,
.is-active .border-success-active.border-dark-2,
.border-success-active:active.border-dark-2,
.border-success-hover:hover.border-dark-2,
.border-success.border-dark-2 {
  border-color: #2ea062 !important;
}
:checked .border-success-checked.border-dark-3,
.is-checked .border-success-checked.border-dark-3,
.is-active .border-success-active.border-dark-3,
.border-success-active:active.border-dark-3,
.border-success-hover:hover.border-dark-3,
.border-success.border-dark-3 {
  border-color: #25814f !important;
}
:checked .border-success-checked.border-dark-4,
.is-checked .border-success-checked.border-dark-4,
.is-active .border-success-active.border-dark-4,
.border-success-active:active.border-dark-4,
.border-success-hover:hover.border-dark-4,
.border-success.border-dark-4 {
  border-color: #1c623c !important;
}
:checked .border-success-checked.border-dark-5,
.is-checked .border-success-checked.border-dark-5,
.is-active .border-success-active.border-dark-5,
.border-success-active:active.border-dark-5,
.border-success-hover:hover.border-dark-5,
.border-success.border-dark-5 {
  border-color: #134329 !important;
}
:checked .border-success-checked.border-opacity-1,
.is-checked .border-success-checked.border-opacity-1,
.is-active .border-success-active.border-opacity-1,
.border-success-active:active.border-opacity-1,
.border-success-hover:hover.border-opacity-1,
.border-success.border-opacity-1 {
  border-color: rgba(80, 205, 137, 0.08) !important;
}
:checked .border-success-checked.border-opacity-2,
.is-checked .border-success-checked.border-opacity-2,
.is-active .border-success-active.border-opacity-2,
.border-success-active:active.border-opacity-2,
.border-success-hover:hover.border-opacity-2,
.border-success.border-opacity-2 {
  border-color: rgba(80, 205, 137, 0.16) !important;
}
:checked .border-success-checked.border-opacity-3,
.is-checked .border-success-checked.border-opacity-3,
.is-active .border-success-active.border-opacity-3,
.border-success-active:active.border-opacity-3,
.border-success-hover:hover.border-opacity-3,
.border-success.border-opacity-3 {
  border-color: rgba(80, 205, 137, 0.24) !important;
}
:checked .border-success-checked.border-opacity-4,
.is-checked .border-success-checked.border-opacity-4,
.is-active .border-success-active.border-opacity-4,
.border-success-active:active.border-opacity-4,
.border-success-hover:hover.border-opacity-4,
.border-success.border-opacity-4 {
  border-color: rgba(80, 205, 137, 0.32) !important;
}
:checked .border-success-checked.border-opacity-5,
.is-checked .border-success-checked.border-opacity-5,
.is-active .border-success-active.border-opacity-5,
.border-success-active:active.border-opacity-5,
.border-success-hover:hover.border-opacity-5,
.border-success.border-opacity-5 {
  border-color: rgba(80, 205, 137, 0.4) !important;
}
:checked .border-success-checked.border-opacity-6,
.is-checked .border-success-checked.border-opacity-6,
.is-active .border-success-active.border-opacity-6,
.border-success-active:active.border-opacity-6,
.border-success-hover:hover.border-opacity-6,
.border-success.border-opacity-6 {
  border-color: rgba(80, 205, 137, 0.48) !important;
}
:checked .border-success-checked.border-opacity-7,
.is-checked .border-success-checked.border-opacity-7,
.is-active .border-success-active.border-opacity-7,
.border-success-active:active.border-opacity-7,
.border-success-hover:hover.border-opacity-7,
.border-success.border-opacity-7 {
  border-color: rgba(80, 205, 137, 0.56) !important;
}
:checked .border-success-checked.border-opacity-8,
.is-checked .border-success-checked.border-opacity-8,
.is-active .border-success-active.border-opacity-8,
.border-success-active:active.border-opacity-8,
.border-success-hover:hover.border-opacity-8,
.border-success.border-opacity-8 {
  border-color: rgba(80, 205, 137, 0.64) !important;
}
:checked .border-success-checked.border-opacity-9,
.is-checked .border-success-checked.border-opacity-9,
.is-active .border-success-active.border-opacity-9,
.border-success-active:active.border-opacity-9,
.border-success-hover:hover.border-opacity-9,
.border-success.border-opacity-9 {
  border-color: rgba(80, 205, 137, 0.72) !important;
}
:checked .text-danger-checked,
.is-checked .text-danger-checked,
.is-active .text-danger-active,
.text-danger-active:active,
.text-danger-hover:hover,
.text-danger {
  color: #f1416c !important;
}
:checked .bg-danger-checked,
.is-checked .bg-danger-checked,
.is-active .bg-danger-active,
.bg-danger-active:active,
.bg-danger-hover:hover,
.bg-danger {
  background-color: #f1416c !important;
}
:checked .bg-danger-checked.light-1,
.is-checked .bg-danger-checked.light-1,
.is-active .bg-danger-active.light-1,
.bg-danger-active:active.light-1,
.bg-danger-hover:hover.light-1,
.bg-danger.light-1 {
  background-color: #f46789 !important;
}
:checked .bg-danger-checked.light-2,
.is-checked .bg-danger-checked.light-2,
.is-active .bg-danger-active.light-2,
.bg-danger-active:active.light-2,
.bg-danger-hover:hover.light-2,
.bg-danger.light-2 {
  background-color: #f78da7 !important;
}
:checked .bg-danger-checked.light-3,
.is-checked .bg-danger-checked.light-3,
.is-active .bg-danger-active.light-3,
.bg-danger-active:active.light-3,
.bg-danger-hover:hover.light-3,
.bg-danger.light-3 {
  background-color: #f9b3c4 !important;
}
:checked .bg-danger-checked.light-4,
.is-checked .bg-danger-checked.light-4,
.is-active .bg-danger-active.light-4,
.bg-danger-active:active.light-4,
.bg-danger-hover:hover.light-4,
.bg-danger.light-4 {
  background-color: #fcd9e2 !important;
}
:checked .bg-danger-checked.light-5,
.is-checked .bg-danger-checked.light-5,
.is-active .bg-danger-active.light-5,
.bg-danger-active:active.light-5,
.bg-danger-hover:hover.light-5,
.bg-danger.light-5 {
  background-color: #fef4f6 !important;
}
:checked .bg-danger-checked.dark-1,
.is-checked .bg-danger-checked.dark-1,
.is-active .bg-danger-active.dark-1,
.bg-danger-active:active.dark-1,
.bg-danger-hover:hover.dark-1,
.bg-danger.dark-1 {
  background-color: #ee194d !important;
}
:checked .bg-danger-checked.dark-2,
.is-checked .bg-danger-checked.dark-2,
.is-active .bg-danger-active.dark-2,
.bg-danger-active:active.dark-2,
.bg-danger-hover:hover.dark-2,
.bg-danger.dark-2 {
  background-color: #cd0f3e !important;
}
:checked .bg-danger-checked.dark-3,
.is-checked .bg-danger-checked.dark-3,
.is-active .bg-danger-active.dark-3,
.bg-danger-active:active.dark-3,
.bg-danger-hover:hover.dark-3,
.bg-danger.dark-3 {
  background-color: #a50c32 !important;
}
:checked .bg-danger-checked.dark-4,
.is-checked .bg-danger-checked.dark-4,
.is-active .bg-danger-active.dark-4,
.bg-danger-active:active.dark-4,
.bg-danger-hover:hover.dark-4,
.bg-danger.dark-4 {
  background-color: #7d0926 !important;
}
:checked .bg-danger-checked.dark-5,
.is-checked .bg-danger-checked.dark-5,
.is-active .bg-danger-active.dark-5,
.bg-danger-active:active.dark-5,
.bg-danger-hover:hover.dark-5,
.bg-danger.dark-5 {
  background-color: #56061a !important;
}
:checked .bg-danger-checked.opacity-1,
.is-checked .bg-danger-checked.opacity-1,
.is-active .bg-danger-active.opacity-1,
.bg-danger-active:active.opacity-1,
.bg-danger-hover:hover.opacity-1,
.bg-danger.opacity-1 {
  background-color: rgba(241, 65, 108, 0.08) !important;
}
:checked .bg-danger-checked.opacity-2,
.is-checked .bg-danger-checked.opacity-2,
.is-active .bg-danger-active.opacity-2,
.bg-danger-active:active.opacity-2,
.bg-danger-hover:hover.opacity-2,
.bg-danger.opacity-2 {
  background-color: rgba(241, 65, 108, 0.16) !important;
}
:checked .bg-danger-checked.opacity-3,
.is-checked .bg-danger-checked.opacity-3,
.is-active .bg-danger-active.opacity-3,
.bg-danger-active:active.opacity-3,
.bg-danger-hover:hover.opacity-3,
.bg-danger.opacity-3 {
  background-color: rgba(241, 65, 108, 0.24) !important;
}
:checked .bg-danger-checked.opacity-4,
.is-checked .bg-danger-checked.opacity-4,
.is-active .bg-danger-active.opacity-4,
.bg-danger-active:active.opacity-4,
.bg-danger-hover:hover.opacity-4,
.bg-danger.opacity-4 {
  background-color: rgba(241, 65, 108, 0.32) !important;
}
:checked .bg-danger-checked.opacity-5,
.is-checked .bg-danger-checked.opacity-5,
.is-active .bg-danger-active.opacity-5,
.bg-danger-active:active.opacity-5,
.bg-danger-hover:hover.opacity-5,
.bg-danger.opacity-5 {
  background-color: rgba(241, 65, 108, 0.4) !important;
}
:checked .bg-danger-checked.opacity-6,
.is-checked .bg-danger-checked.opacity-6,
.is-active .bg-danger-active.opacity-6,
.bg-danger-active:active.opacity-6,
.bg-danger-hover:hover.opacity-6,
.bg-danger.opacity-6 {
  background-color: rgba(241, 65, 108, 0.48) !important;
}
:checked .bg-danger-checked.opacity-7,
.is-checked .bg-danger-checked.opacity-7,
.is-active .bg-danger-active.opacity-7,
.bg-danger-active:active.opacity-7,
.bg-danger-hover:hover.opacity-7,
.bg-danger.opacity-7 {
  background-color: rgba(241, 65, 108, 0.56) !important;
}
:checked .bg-danger-checked.opacity-8,
.is-checked .bg-danger-checked.opacity-8,
.is-active .bg-danger-active.opacity-8,
.bg-danger-active:active.opacity-8,
.bg-danger-hover:hover.opacity-8,
.bg-danger.opacity-8 {
  background-color: rgba(241, 65, 108, 0.64) !important;
}
:checked .bg-danger-checked.opacity-9,
.is-checked .bg-danger-checked.opacity-9,
.is-active .bg-danger-active.opacity-9,
.bg-danger-active:active.opacity-9,
.bg-danger-hover:hover.opacity-9,
.bg-danger.opacity-9 {
  background-color: rgba(241, 65, 108, 0.72) !important;
}
:checked .border-danger-checked,
.is-checked .border-danger-checked,
.is-active .border-danger-active,
.border-danger-active:active,
.border-danger-hover:hover,
.border-danger {
  border-color: #f1416c !important;
}
:checked .border-danger-checked.border-light-1,
.is-checked .border-danger-checked.border-light-1,
.is-active .border-danger-active.border-light-1,
.border-danger-active:active.border-light-1,
.border-danger-hover:hover.border-light-1,
.border-danger.border-light-1 {
  border-color: #f46789 !important;
}
:checked .border-danger-checked.border-light-2,
.is-checked .border-danger-checked.border-light-2,
.is-active .border-danger-active.border-light-2,
.border-danger-active:active.border-light-2,
.border-danger-hover:hover.border-light-2,
.border-danger.border-light-2 {
  border-color: #f78da7 !important;
}
:checked .border-danger-checked.border-light-3,
.is-checked .border-danger-checked.border-light-3,
.is-active .border-danger-active.border-light-3,
.border-danger-active:active.border-light-3,
.border-danger-hover:hover.border-light-3,
.border-danger.border-light-3 {
  border-color: #f9b3c4 !important;
}
:checked .border-danger-checked.border-light-4,
.is-checked .border-danger-checked.border-light-4,
.is-active .border-danger-active.border-light-4,
.border-danger-active:active.border-light-4,
.border-danger-hover:hover.border-light-4,
.border-danger.border-light-4 {
  border-color: #fcd9e2 !important;
}
:checked .border-danger-checked.border-light-5,
.is-checked .border-danger-checked.border-light-5,
.is-active .border-danger-active.border-light-5,
.border-danger-active:active.border-light-5,
.border-danger-hover:hover.border-light-5,
.border-danger.border-light-5 {
  border-color: #fef4f6 !important;
}
:checked .border-danger-checked.border-dark-1,
.is-checked .border-danger-checked.border-dark-1,
.is-active .border-danger-active.border-dark-1,
.border-danger-active:active.border-dark-1,
.border-danger-hover:hover.border-dark-1,
.border-danger.border-dark-1 {
  border-color: #ee194d !important;
}
:checked .border-danger-checked.border-dark-2,
.is-checked .border-danger-checked.border-dark-2,
.is-active .border-danger-active.border-dark-2,
.border-danger-active:active.border-dark-2,
.border-danger-hover:hover.border-dark-2,
.border-danger.border-dark-2 {
  border-color: #cd0f3e !important;
}
:checked .border-danger-checked.border-dark-3,
.is-checked .border-danger-checked.border-dark-3,
.is-active .border-danger-active.border-dark-3,
.border-danger-active:active.border-dark-3,
.border-danger-hover:hover.border-dark-3,
.border-danger.border-dark-3 {
  border-color: #a50c32 !important;
}
:checked .border-danger-checked.border-dark-4,
.is-checked .border-danger-checked.border-dark-4,
.is-active .border-danger-active.border-dark-4,
.border-danger-active:active.border-dark-4,
.border-danger-hover:hover.border-dark-4,
.border-danger.border-dark-4 {
  border-color: #7d0926 !important;
}
:checked .border-danger-checked.border-dark-5,
.is-checked .border-danger-checked.border-dark-5,
.is-active .border-danger-active.border-dark-5,
.border-danger-active:active.border-dark-5,
.border-danger-hover:hover.border-dark-5,
.border-danger.border-dark-5 {
  border-color: #56061a !important;
}
:checked .border-danger-checked.border-opacity-1,
.is-checked .border-danger-checked.border-opacity-1,
.is-active .border-danger-active.border-opacity-1,
.border-danger-active:active.border-opacity-1,
.border-danger-hover:hover.border-opacity-1,
.border-danger.border-opacity-1 {
  border-color: rgba(241, 65, 108, 0.08) !important;
}
:checked .border-danger-checked.border-opacity-2,
.is-checked .border-danger-checked.border-opacity-2,
.is-active .border-danger-active.border-opacity-2,
.border-danger-active:active.border-opacity-2,
.border-danger-hover:hover.border-opacity-2,
.border-danger.border-opacity-2 {
  border-color: rgba(241, 65, 108, 0.16) !important;
}
:checked .border-danger-checked.border-opacity-3,
.is-checked .border-danger-checked.border-opacity-3,
.is-active .border-danger-active.border-opacity-3,
.border-danger-active:active.border-opacity-3,
.border-danger-hover:hover.border-opacity-3,
.border-danger.border-opacity-3 {
  border-color: rgba(241, 65, 108, 0.24) !important;
}
:checked .border-danger-checked.border-opacity-4,
.is-checked .border-danger-checked.border-opacity-4,
.is-active .border-danger-active.border-opacity-4,
.border-danger-active:active.border-opacity-4,
.border-danger-hover:hover.border-opacity-4,
.border-danger.border-opacity-4 {
  border-color: rgba(241, 65, 108, 0.32) !important;
}
:checked .border-danger-checked.border-opacity-5,
.is-checked .border-danger-checked.border-opacity-5,
.is-active .border-danger-active.border-opacity-5,
.border-danger-active:active.border-opacity-5,
.border-danger-hover:hover.border-opacity-5,
.border-danger.border-opacity-5 {
  border-color: rgba(241, 65, 108, 0.4) !important;
}
:checked .border-danger-checked.border-opacity-6,
.is-checked .border-danger-checked.border-opacity-6,
.is-active .border-danger-active.border-opacity-6,
.border-danger-active:active.border-opacity-6,
.border-danger-hover:hover.border-opacity-6,
.border-danger.border-opacity-6 {
  border-color: rgba(241, 65, 108, 0.48) !important;
}
:checked .border-danger-checked.border-opacity-7,
.is-checked .border-danger-checked.border-opacity-7,
.is-active .border-danger-active.border-opacity-7,
.border-danger-active:active.border-opacity-7,
.border-danger-hover:hover.border-opacity-7,
.border-danger.border-opacity-7 {
  border-color: rgba(241, 65, 108, 0.56) !important;
}
:checked .border-danger-checked.border-opacity-8,
.is-checked .border-danger-checked.border-opacity-8,
.is-active .border-danger-active.border-opacity-8,
.border-danger-active:active.border-opacity-8,
.border-danger-hover:hover.border-opacity-8,
.border-danger.border-opacity-8 {
  border-color: rgba(241, 65, 108, 0.64) !important;
}
:checked .border-danger-checked.border-opacity-9,
.is-checked .border-danger-checked.border-opacity-9,
.is-active .border-danger-active.border-opacity-9,
.border-danger-active:active.border-opacity-9,
.border-danger-hover:hover.border-opacity-9,
.border-danger.border-opacity-9 {
  border-color: rgba(241, 65, 108, 0.72) !important;
}
:checked .text-warning-checked,
.is-checked .text-warning-checked,
.is-active .text-warning-active,
.text-warning-active:active,
.text-warning-hover:hover,
.text-warning {
  color: #ffc700 !important;
}
:checked .bg-warning-checked,
.is-checked .bg-warning-checked,
.is-active .bg-warning-active,
.bg-warning-active:active,
.bg-warning-hover:hover,
.bg-warning {
  background-color: #ffc700 !important;
}
:checked .bg-warning-checked.light-1,
.is-checked .bg-warning-checked.light-1,
.is-active .bg-warning-active.light-1,
.bg-warning-active:active.light-1,
.bg-warning-hover:hover.light-1,
.bg-warning.light-1 {
  background-color: #ffd233 !important;
}
:checked .bg-warning-checked.light-2,
.is-checked .bg-warning-checked.light-2,
.is-active .bg-warning-active.light-2,
.bg-warning-active:active.light-2,
.bg-warning-hover:hover.light-2,
.bg-warning.light-2 {
  background-color: #ffdd66 !important;
}
:checked .bg-warning-checked.light-3,
.is-checked .bg-warning-checked.light-3,
.is-active .bg-warning-active.light-3,
.bg-warning-active:active.light-3,
.bg-warning-hover:hover.light-3,
.bg-warning.light-3 {
  background-color: #ffe999 !important;
}
:checked .bg-warning-checked.light-4,
.is-checked .bg-warning-checked.light-4,
.is-active .bg-warning-active.light-4,
.bg-warning-active:active.light-4,
.bg-warning-hover:hover.light-4,
.bg-warning.light-4 {
  background-color: #fff4cc !important;
}
:checked .bg-warning-checked.light-5,
.is-checked .bg-warning-checked.light-5,
.is-active .bg-warning-active.light-5,
.bg-warning-active:active.light-5,
.bg-warning-hover:hover.light-5,
.bg-warning.light-5 {
  background-color: #fffcf0 !important;
}
:checked .bg-warning-checked.dark-1,
.is-checked .bg-warning-checked.dark-1,
.is-active .bg-warning-active.dark-1,
.bg-warning-active:active.dark-1,
.bg-warning-hover:hover.dark-1,
.bg-warning.dark-1 {
  background-color: #dbab00 !important;
}
:checked .bg-warning-checked.dark-2,
.is-checked .bg-warning-checked.dark-2,
.is-active .bg-warning-active.dark-2,
.bg-warning-active:active.dark-2,
.bg-warning-hover:hover.dark-2,
.bg-warning.dark-2 {
  background-color: #b88f00 !important;
}
:checked .bg-warning-checked.dark-3,
.is-checked .bg-warning-checked.dark-3,
.is-active .bg-warning-active.dark-3,
.bg-warning-active:active.dark-3,
.bg-warning-hover:hover.dark-3,
.bg-warning.dark-3 {
  background-color: #947300 !important;
}
:checked .bg-warning-checked.dark-4,
.is-checked .bg-warning-checked.dark-4,
.is-active .bg-warning-active.dark-4,
.bg-warning-active:active.dark-4,
.bg-warning-hover:hover.dark-4,
.bg-warning.dark-4 {
  background-color: #705800 !important;
}
:checked .bg-warning-checked.dark-5,
.is-checked .bg-warning-checked.dark-5,
.is-active .bg-warning-active.dark-5,
.bg-warning-active:active.dark-5,
.bg-warning-hover:hover.dark-5,
.bg-warning.dark-5 {
  background-color: #4d3c00 !important;
}
:checked .bg-warning-checked.opacity-1,
.is-checked .bg-warning-checked.opacity-1,
.is-active .bg-warning-active.opacity-1,
.bg-warning-active:active.opacity-1,
.bg-warning-hover:hover.opacity-1,
.bg-warning.opacity-1 {
  background-color: rgba(255, 199, 0, 0.08) !important;
}
:checked .bg-warning-checked.opacity-2,
.is-checked .bg-warning-checked.opacity-2,
.is-active .bg-warning-active.opacity-2,
.bg-warning-active:active.opacity-2,
.bg-warning-hover:hover.opacity-2,
.bg-warning.opacity-2 {
  background-color: rgba(255, 199, 0, 0.16) !important;
}
:checked .bg-warning-checked.opacity-3,
.is-checked .bg-warning-checked.opacity-3,
.is-active .bg-warning-active.opacity-3,
.bg-warning-active:active.opacity-3,
.bg-warning-hover:hover.opacity-3,
.bg-warning.opacity-3 {
  background-color: rgba(255, 199, 0, 0.24) !important;
}
:checked .bg-warning-checked.opacity-4,
.is-checked .bg-warning-checked.opacity-4,
.is-active .bg-warning-active.opacity-4,
.bg-warning-active:active.opacity-4,
.bg-warning-hover:hover.opacity-4,
.bg-warning.opacity-4 {
  background-color: rgba(255, 199, 0, 0.32) !important;
}
:checked .bg-warning-checked.opacity-5,
.is-checked .bg-warning-checked.opacity-5,
.is-active .bg-warning-active.opacity-5,
.bg-warning-active:active.opacity-5,
.bg-warning-hover:hover.opacity-5,
.bg-warning.opacity-5 {
  background-color: rgba(255, 199, 0, 0.4) !important;
}
:checked .bg-warning-checked.opacity-6,
.is-checked .bg-warning-checked.opacity-6,
.is-active .bg-warning-active.opacity-6,
.bg-warning-active:active.opacity-6,
.bg-warning-hover:hover.opacity-6,
.bg-warning.opacity-6 {
  background-color: rgba(255, 199, 0, 0.48) !important;
}
:checked .bg-warning-checked.opacity-7,
.is-checked .bg-warning-checked.opacity-7,
.is-active .bg-warning-active.opacity-7,
.bg-warning-active:active.opacity-7,
.bg-warning-hover:hover.opacity-7,
.bg-warning.opacity-7 {
  background-color: rgba(255, 199, 0, 0.56) !important;
}
:checked .bg-warning-checked.opacity-8,
.is-checked .bg-warning-checked.opacity-8,
.is-active .bg-warning-active.opacity-8,
.bg-warning-active:active.opacity-8,
.bg-warning-hover:hover.opacity-8,
.bg-warning.opacity-8 {
  background-color: rgba(255, 199, 0, 0.64) !important;
}
:checked .bg-warning-checked.opacity-9,
.is-checked .bg-warning-checked.opacity-9,
.is-active .bg-warning-active.opacity-9,
.bg-warning-active:active.opacity-9,
.bg-warning-hover:hover.opacity-9,
.bg-warning.opacity-9 {
  background-color: rgba(255, 199, 0, 0.72) !important;
}
:checked .border-warning-checked,
.is-checked .border-warning-checked,
.is-active .border-warning-active,
.border-warning-active:active,
.border-warning-hover:hover,
.border-warning {
  border-color: #ffc700 !important;
}
:checked .border-warning-checked.border-light-1,
.is-checked .border-warning-checked.border-light-1,
.is-active .border-warning-active.border-light-1,
.border-warning-active:active.border-light-1,
.border-warning-hover:hover.border-light-1,
.border-warning.border-light-1 {
  border-color: #ffd233 !important;
}
:checked .border-warning-checked.border-light-2,
.is-checked .border-warning-checked.border-light-2,
.is-active .border-warning-active.border-light-2,
.border-warning-active:active.border-light-2,
.border-warning-hover:hover.border-light-2,
.border-warning.border-light-2 {
  border-color: #ffdd66 !important;
}
:checked .border-warning-checked.border-light-3,
.is-checked .border-warning-checked.border-light-3,
.is-active .border-warning-active.border-light-3,
.border-warning-active:active.border-light-3,
.border-warning-hover:hover.border-light-3,
.border-warning.border-light-3 {
  border-color: #ffe999 !important;
}
:checked .border-warning-checked.border-light-4,
.is-checked .border-warning-checked.border-light-4,
.is-active .border-warning-active.border-light-4,
.border-warning-active:active.border-light-4,
.border-warning-hover:hover.border-light-4,
.border-warning.border-light-4 {
  border-color: #fff4cc !important;
}
:checked .border-warning-checked.border-light-5,
.is-checked .border-warning-checked.border-light-5,
.is-active .border-warning-active.border-light-5,
.border-warning-active:active.border-light-5,
.border-warning-hover:hover.border-light-5,
.border-warning.border-light-5 {
  border-color: #fffcf0 !important;
}
:checked .border-warning-checked.border-dark-1,
.is-checked .border-warning-checked.border-dark-1,
.is-active .border-warning-active.border-dark-1,
.border-warning-active:active.border-dark-1,
.border-warning-hover:hover.border-dark-1,
.border-warning.border-dark-1 {
  border-color: #dbab00 !important;
}
:checked .border-warning-checked.border-dark-2,
.is-checked .border-warning-checked.border-dark-2,
.is-active .border-warning-active.border-dark-2,
.border-warning-active:active.border-dark-2,
.border-warning-hover:hover.border-dark-2,
.border-warning.border-dark-2 {
  border-color: #b88f00 !important;
}
:checked .border-warning-checked.border-dark-3,
.is-checked .border-warning-checked.border-dark-3,
.is-active .border-warning-active.border-dark-3,
.border-warning-active:active.border-dark-3,
.border-warning-hover:hover.border-dark-3,
.border-warning.border-dark-3 {
  border-color: #947300 !important;
}
:checked .border-warning-checked.border-dark-4,
.is-checked .border-warning-checked.border-dark-4,
.is-active .border-warning-active.border-dark-4,
.border-warning-active:active.border-dark-4,
.border-warning-hover:hover.border-dark-4,
.border-warning.border-dark-4 {
  border-color: #705800 !important;
}
:checked .border-warning-checked.border-dark-5,
.is-checked .border-warning-checked.border-dark-5,
.is-active .border-warning-active.border-dark-5,
.border-warning-active:active.border-dark-5,
.border-warning-hover:hover.border-dark-5,
.border-warning.border-dark-5 {
  border-color: #4d3c00 !important;
}
:checked .border-warning-checked.border-opacity-1,
.is-checked .border-warning-checked.border-opacity-1,
.is-active .border-warning-active.border-opacity-1,
.border-warning-active:active.border-opacity-1,
.border-warning-hover:hover.border-opacity-1,
.border-warning.border-opacity-1 {
  border-color: rgba(255, 199, 0, 0.08) !important;
}
:checked .border-warning-checked.border-opacity-2,
.is-checked .border-warning-checked.border-opacity-2,
.is-active .border-warning-active.border-opacity-2,
.border-warning-active:active.border-opacity-2,
.border-warning-hover:hover.border-opacity-2,
.border-warning.border-opacity-2 {
  border-color: rgba(255, 199, 0, 0.16) !important;
}
:checked .border-warning-checked.border-opacity-3,
.is-checked .border-warning-checked.border-opacity-3,
.is-active .border-warning-active.border-opacity-3,
.border-warning-active:active.border-opacity-3,
.border-warning-hover:hover.border-opacity-3,
.border-warning.border-opacity-3 {
  border-color: rgba(255, 199, 0, 0.24) !important;
}
:checked .border-warning-checked.border-opacity-4,
.is-checked .border-warning-checked.border-opacity-4,
.is-active .border-warning-active.border-opacity-4,
.border-warning-active:active.border-opacity-4,
.border-warning-hover:hover.border-opacity-4,
.border-warning.border-opacity-4 {
  border-color: rgba(255, 199, 0, 0.32) !important;
}
:checked .border-warning-checked.border-opacity-5,
.is-checked .border-warning-checked.border-opacity-5,
.is-active .border-warning-active.border-opacity-5,
.border-warning-active:active.border-opacity-5,
.border-warning-hover:hover.border-opacity-5,
.border-warning.border-opacity-5 {
  border-color: rgba(255, 199, 0, 0.4) !important;
}
:checked .border-warning-checked.border-opacity-6,
.is-checked .border-warning-checked.border-opacity-6,
.is-active .border-warning-active.border-opacity-6,
.border-warning-active:active.border-opacity-6,
.border-warning-hover:hover.border-opacity-6,
.border-warning.border-opacity-6 {
  border-color: rgba(255, 199, 0, 0.48) !important;
}
:checked .border-warning-checked.border-opacity-7,
.is-checked .border-warning-checked.border-opacity-7,
.is-active .border-warning-active.border-opacity-7,
.border-warning-active:active.border-opacity-7,
.border-warning-hover:hover.border-opacity-7,
.border-warning.border-opacity-7 {
  border-color: rgba(255, 199, 0, 0.56) !important;
}
:checked .border-warning-checked.border-opacity-8,
.is-checked .border-warning-checked.border-opacity-8,
.is-active .border-warning-active.border-opacity-8,
.border-warning-active:active.border-opacity-8,
.border-warning-hover:hover.border-opacity-8,
.border-warning.border-opacity-8 {
  border-color: rgba(255, 199, 0, 0.64) !important;
}
:checked .border-warning-checked.border-opacity-9,
.is-checked .border-warning-checked.border-opacity-9,
.is-active .border-warning-active.border-opacity-9,
.border-warning-active:active.border-opacity-9,
.border-warning-hover:hover.border-opacity-9,
.border-warning.border-opacity-9 {
  border-color: rgba(255, 199, 0, 0.72) !important;
}
:checked .text-info-checked,
.is-checked .text-info-checked,
.is-active .text-info-active,
.text-info-active:active,
.text-info-hover:hover,
.text-info {
  color: #7239ea !important;
}
:checked .bg-info-checked,
.is-checked .bg-info-checked,
.is-active .bg-info-active,
.bg-info-active:active,
.bg-info-hover:hover,
.bg-info {
  background-color: #7239ea !important;
}
:checked .bg-info-checked.light-1,
.is-checked .bg-info-checked.light-1,
.is-active .bg-info-active.light-1,
.bg-info-active:active.light-1,
.bg-info-hover:hover.light-1,
.bg-info.light-1 {
  background-color: #8e61ee !important;
}
:checked .bg-info-checked.light-2,
.is-checked .bg-info-checked.light-2,
.is-active .bg-info-active.light-2,
.bg-info-active:active.light-2,
.bg-info-hover:hover.light-2,
.bg-info.light-2 {
  background-color: #aa88f2 !important;
}
:checked .bg-info-checked.light-3,
.is-checked .bg-info-checked.light-3,
.is-active .bg-info-active.light-3,
.bg-info-active:active.light-3,
.bg-info-hover:hover.light-3,
.bg-info.light-3 {
  background-color: #c7b0f7 !important;
}
:checked .bg-info-checked.light-4,
.is-checked .bg-info-checked.light-4,
.is-active .bg-info-active.light-4,
.bg-info-active:active.light-4,
.bg-info-hover:hover.light-4,
.bg-info.light-4 {
  background-color: #e3d7fb !important;
}
:checked .bg-info-checked.light-5,
.is-checked .bg-info-checked.light-5,
.is-active .bg-info-active.light-5,
.bg-info-active:active.light-5,
.bg-info-hover:hover.light-5,
.bg-info.light-5 {
  background-color: #f7f3fe !important;
}
:checked .bg-info-checked.dark-1,
.is-checked .bg-info-checked.dark-1,
.is-active .bg-info-active.dark-1,
.bg-info-active:active.dark-1,
.bg-info-hover:hover.dark-1,
.bg-info.dark-1 {
  background-color: #5918e2 !important;
}
:checked .bg-info-checked.dark-2,
.is-checked .bg-info-checked.dark-2,
.is-active .bg-info-active.dark-2,
.bg-info-active:active.dark-2,
.bg-info-hover:hover.dark-2,
.bg-info.dark-2 {
  background-color: #4b14bd !important;
}
:checked .bg-info-checked.dark-3,
.is-checked .bg-info-checked.dark-3,
.is-active .bg-info-active.dark-3,
.bg-info-active:active.dark-3,
.bg-info-hover:hover.dark-3,
.bg-info.dark-3 {
  background-color: #3c1099 !important;
}
:checked .bg-info-checked.dark-4,
.is-checked .bg-info-checked.dark-4,
.is-active .bg-info-active.dark-4,
.bg-info-active:active.dark-4,
.bg-info-hover:hover.dark-4,
.bg-info.dark-4 {
  background-color: #2e0c74 !important;
}
:checked .bg-info-checked.dark-5,
.is-checked .bg-info-checked.dark-5,
.is-active .bg-info-active.dark-5,
.bg-info-active:active.dark-5,
.bg-info-hover:hover.dark-5,
.bg-info.dark-5 {
  background-color: #1f084f !important;
}
:checked .bg-info-checked.opacity-1,
.is-checked .bg-info-checked.opacity-1,
.is-active .bg-info-active.opacity-1,
.bg-info-active:active.opacity-1,
.bg-info-hover:hover.opacity-1,
.bg-info.opacity-1 {
  background-color: rgba(114, 57, 234, 0.08) !important;
}
:checked .bg-info-checked.opacity-2,
.is-checked .bg-info-checked.opacity-2,
.is-active .bg-info-active.opacity-2,
.bg-info-active:active.opacity-2,
.bg-info-hover:hover.opacity-2,
.bg-info.opacity-2 {
  background-color: rgba(114, 57, 234, 0.16) !important;
}
:checked .bg-info-checked.opacity-3,
.is-checked .bg-info-checked.opacity-3,
.is-active .bg-info-active.opacity-3,
.bg-info-active:active.opacity-3,
.bg-info-hover:hover.opacity-3,
.bg-info.opacity-3 {
  background-color: rgba(114, 57, 234, 0.24) !important;
}
:checked .bg-info-checked.opacity-4,
.is-checked .bg-info-checked.opacity-4,
.is-active .bg-info-active.opacity-4,
.bg-info-active:active.opacity-4,
.bg-info-hover:hover.opacity-4,
.bg-info.opacity-4 {
  background-color: rgba(114, 57, 234, 0.32) !important;
}
:checked .bg-info-checked.opacity-5,
.is-checked .bg-info-checked.opacity-5,
.is-active .bg-info-active.opacity-5,
.bg-info-active:active.opacity-5,
.bg-info-hover:hover.opacity-5,
.bg-info.opacity-5 {
  background-color: rgba(114, 57, 234, 0.4) !important;
}
:checked .bg-info-checked.opacity-6,
.is-checked .bg-info-checked.opacity-6,
.is-active .bg-info-active.opacity-6,
.bg-info-active:active.opacity-6,
.bg-info-hover:hover.opacity-6,
.bg-info.opacity-6 {
  background-color: rgba(114, 57, 234, 0.48) !important;
}
:checked .bg-info-checked.opacity-7,
.is-checked .bg-info-checked.opacity-7,
.is-active .bg-info-active.opacity-7,
.bg-info-active:active.opacity-7,
.bg-info-hover:hover.opacity-7,
.bg-info.opacity-7 {
  background-color: rgba(114, 57, 234, 0.56) !important;
}
:checked .bg-info-checked.opacity-8,
.is-checked .bg-info-checked.opacity-8,
.is-active .bg-info-active.opacity-8,
.bg-info-active:active.opacity-8,
.bg-info-hover:hover.opacity-8,
.bg-info.opacity-8 {
  background-color: rgba(114, 57, 234, 0.64) !important;
}
:checked .bg-info-checked.opacity-9,
.is-checked .bg-info-checked.opacity-9,
.is-active .bg-info-active.opacity-9,
.bg-info-active:active.opacity-9,
.bg-info-hover:hover.opacity-9,
.bg-info.opacity-9 {
  background-color: rgba(114, 57, 234, 0.72) !important;
}
:checked .border-info-checked,
.is-checked .border-info-checked,
.is-active .border-info-active,
.border-info-active:active,
.border-info-hover:hover,
.border-info {
  border-color: #7239ea !important;
}
:checked .border-info-checked.border-light-1,
.is-checked .border-info-checked.border-light-1,
.is-active .border-info-active.border-light-1,
.border-info-active:active.border-light-1,
.border-info-hover:hover.border-light-1,
.border-info.border-light-1 {
  border-color: #8e61ee !important;
}
:checked .border-info-checked.border-light-2,
.is-checked .border-info-checked.border-light-2,
.is-active .border-info-active.border-light-2,
.border-info-active:active.border-light-2,
.border-info-hover:hover.border-light-2,
.border-info.border-light-2 {
  border-color: #aa88f2 !important;
}
:checked .border-info-checked.border-light-3,
.is-checked .border-info-checked.border-light-3,
.is-active .border-info-active.border-light-3,
.border-info-active:active.border-light-3,
.border-info-hover:hover.border-light-3,
.border-info.border-light-3 {
  border-color: #c7b0f7 !important;
}
:checked .border-info-checked.border-light-4,
.is-checked .border-info-checked.border-light-4,
.is-active .border-info-active.border-light-4,
.border-info-active:active.border-light-4,
.border-info-hover:hover.border-light-4,
.border-info.border-light-4 {
  border-color: #e3d7fb !important;
}
:checked .border-info-checked.border-light-5,
.is-checked .border-info-checked.border-light-5,
.is-active .border-info-active.border-light-5,
.border-info-active:active.border-light-5,
.border-info-hover:hover.border-light-5,
.border-info.border-light-5 {
  border-color: #f7f3fe !important;
}
:checked .border-info-checked.border-dark-1,
.is-checked .border-info-checked.border-dark-1,
.is-active .border-info-active.border-dark-1,
.border-info-active:active.border-dark-1,
.border-info-hover:hover.border-dark-1,
.border-info.border-dark-1 {
  border-color: #5918e2 !important;
}
:checked .border-info-checked.border-dark-2,
.is-checked .border-info-checked.border-dark-2,
.is-active .border-info-active.border-dark-2,
.border-info-active:active.border-dark-2,
.border-info-hover:hover.border-dark-2,
.border-info.border-dark-2 {
  border-color: #4b14bd !important;
}
:checked .border-info-checked.border-dark-3,
.is-checked .border-info-checked.border-dark-3,
.is-active .border-info-active.border-dark-3,
.border-info-active:active.border-dark-3,
.border-info-hover:hover.border-dark-3,
.border-info.border-dark-3 {
  border-color: #3c1099 !important;
}
:checked .border-info-checked.border-dark-4,
.is-checked .border-info-checked.border-dark-4,
.is-active .border-info-active.border-dark-4,
.border-info-active:active.border-dark-4,
.border-info-hover:hover.border-dark-4,
.border-info.border-dark-4 {
  border-color: #2e0c74 !important;
}
:checked .border-info-checked.border-dark-5,
.is-checked .border-info-checked.border-dark-5,
.is-active .border-info-active.border-dark-5,
.border-info-active:active.border-dark-5,
.border-info-hover:hover.border-dark-5,
.border-info.border-dark-5 {
  border-color: #1f084f !important;
}
:checked .border-info-checked.border-opacity-1,
.is-checked .border-info-checked.border-opacity-1,
.is-active .border-info-active.border-opacity-1,
.border-info-active:active.border-opacity-1,
.border-info-hover:hover.border-opacity-1,
.border-info.border-opacity-1 {
  border-color: rgba(114, 57, 234, 0.08) !important;
}
:checked .border-info-checked.border-opacity-2,
.is-checked .border-info-checked.border-opacity-2,
.is-active .border-info-active.border-opacity-2,
.border-info-active:active.border-opacity-2,
.border-info-hover:hover.border-opacity-2,
.border-info.border-opacity-2 {
  border-color: rgba(114, 57, 234, 0.16) !important;
}
:checked .border-info-checked.border-opacity-3,
.is-checked .border-info-checked.border-opacity-3,
.is-active .border-info-active.border-opacity-3,
.border-info-active:active.border-opacity-3,
.border-info-hover:hover.border-opacity-3,
.border-info.border-opacity-3 {
  border-color: rgba(114, 57, 234, 0.24) !important;
}
:checked .border-info-checked.border-opacity-4,
.is-checked .border-info-checked.border-opacity-4,
.is-active .border-info-active.border-opacity-4,
.border-info-active:active.border-opacity-4,
.border-info-hover:hover.border-opacity-4,
.border-info.border-opacity-4 {
  border-color: rgba(114, 57, 234, 0.32) !important;
}
:checked .border-info-checked.border-opacity-5,
.is-checked .border-info-checked.border-opacity-5,
.is-active .border-info-active.border-opacity-5,
.border-info-active:active.border-opacity-5,
.border-info-hover:hover.border-opacity-5,
.border-info.border-opacity-5 {
  border-color: rgba(114, 57, 234, 0.4) !important;
}
:checked .border-info-checked.border-opacity-6,
.is-checked .border-info-checked.border-opacity-6,
.is-active .border-info-active.border-opacity-6,
.border-info-active:active.border-opacity-6,
.border-info-hover:hover.border-opacity-6,
.border-info.border-opacity-6 {
  border-color: rgba(114, 57, 234, 0.48) !important;
}
:checked .border-info-checked.border-opacity-7,
.is-checked .border-info-checked.border-opacity-7,
.is-active .border-info-active.border-opacity-7,
.border-info-active:active.border-opacity-7,
.border-info-hover:hover.border-opacity-7,
.border-info.border-opacity-7 {
  border-color: rgba(114, 57, 234, 0.56) !important;
}
:checked .border-info-checked.border-opacity-8,
.is-checked .border-info-checked.border-opacity-8,
.is-active .border-info-active.border-opacity-8,
.border-info-active:active.border-opacity-8,
.border-info-hover:hover.border-opacity-8,
.border-info.border-opacity-8 {
  border-color: rgba(114, 57, 234, 0.64) !important;
}
:checked .border-info-checked.border-opacity-9,
.is-checked .border-info-checked.border-opacity-9,
.is-active .border-info-active.border-opacity-9,
.border-info-active:active.border-opacity-9,
.border-info-hover:hover.border-opacity-9,
.border-info.border-opacity-9 {
  border-color: rgba(114, 57, 234, 0.72) !important;
}
.hl-anchor {
  position: relative;
  overflow: auto;
}
.hl-anchor .slider-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 2px;
  height: 24px;
  background-color: #40a9ff;
  transition: top 0.3s ease;
  margin-top: 2px;
}
.hl-anchor .anchor-list {
  position: relative;
}
.hl-anchor .anchor-list::before {
  position: absolute;
  content: "";
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #EFF2F5;
}
.hl-anchor .anchor-sublist {
  margin-top: 4px;
}
.hl-anchor.slider-less .slider-bar {
  display: none;
}
.hl-anchor.slider-less .anchor-list::before {
  display: none;
}
.hl-anchor.right .slider-bar {
  left: auto;
  right: 0;
}
.hl-anchor.right .anchor-list::before {
  left: auto;
  right: 0;
}
.hl-anchor.right .hl-anchor-link .hl-anchor-link {
  margin-left: unset;
  margin-right: 1em;
}
.hl-anchor.right .hl-anchor-link a {
  justify-content: flex-end;
}
.hl-anchor .hl-anchor-link .hl-anchor-link {
  margin-left: 1em;
}
.hl-anchor .hl-anchor-link a {
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 28px;
  padding: 8px 16px;
  color: #5E6278;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-anchor .hl-anchor-link a:hover {
  font-weight: 400;
  color: #5E6278;
  background-color: transparent;
}
.hl-anchor .hl-anchor-link.is-active > a {
  font-weight: 500;
  color: #009EF7;
  background-color: transparent;
}
.hl-icon {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-style: normal;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
}
.hl-icon.disabled {
  color: #B5B5C3;
}
.hl-icon .icon-system {
  --stroke-width: 1.5;
  --fill-opacity: 0.15;
}
.hl-icon .icon-system g {
  fill-opacity: var(--fill-opacity);
  stroke-width: var(--stroke-width);
  stroke-linecap: round;
  stroke-linejoin: round;
  fill-rule: evenodd;
  fill: currentColor;
}
.hl-icon svg {
  width: 100%;
  height: 100%;
  display: block;
  color: currentColor;
}
.hl-icon.fill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #F6F9FB;
}
.hl-icon.fill.radius {
  border-radius: 6px;
}
.hl-icon.fill.round {
  border-radius: 100px;
}
.hl-icon.fill svg {
  width: 20px;
  height: 20px;
}
.hl-icon.transition:hover path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: dash 2s ease-out forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.hl-group {
  --group-gap-x: 0;
  --group-gap-y: 0;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  vertical-align: middle;
  column-gap: var(--group-gap-x);
  row-gap: var(--group-gap-y);
}
.hl-group.full {
  display: flex;
  width: 100%;
}
.hl-group.full > .group-item,
.hl-group.full > .hl-group {
  flex-grow: 1;
  height: auto;
}
.hl-group.full-x {
  display: flex;
  width: 100%;
}
.hl-group.full-x > .group-item,
.hl-group.full-x > .hl-group {
  flex-grow: 1;
}
.hl-group.full-y {
  display: inline-flex;
}
.hl-group.full-y > .group-item,
.hl-group.full-y > .hl-group {
  flex-grow: 1;
  height: auto;
}
.hl-group.block {
  display: flex;
}
.hl-group.wrap {
  flex-wrap: wrap;
}
.hl-group.wrap.full > .group-item,
.hl-group.wrap.full > .hl-group {
  flex-basis: 0;
  max-width: 100%;
}
.hl-group.around {
  justify-content: space-around;
}
.hl-group.evenly {
  justify-content: space-evenly;
}
.hl-group.between {
  justify-content: space-between;
}
.hl-group.horizontal {
  flex-direction: row;
}
.hl-group.horizontal.indent {
  --indent: -1px;
}
.hl-group.horizontal.indent > .hl-group:not(:only-child):not(:first-child),
.hl-group.horizontal.indent > .group-item:not(:only-child):not(:first-child) {
  margin-left: var(--indent);
}
.hl-group.horizontal.merge > .hl-group:not(:first-child):not(:last-child) .group-item .hl-input,
.hl-group.horizontal.merge > .group-item:not(:first-child):not(:last-child) .hl-input,
.hl-group.horizontal.merge > .hl-group:not(:first-child):not(:last-child) > .group-item,
.hl-group.horizontal.merge > .group-item:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:last-child .group-item:first-child {
  border-bottom-left-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:first-child .group-item:first-child {
  border-bottom-right-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:first-child > .hl-group:not(:only-child):last-child .hl-group.vertical:last-child .group-item:first-child > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:first-child {
  border-top-left-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:first-child {
  border-top-right-radius: 0;
}
.hl-group.horizontal.top {
  align-items: flex-start;
}
.hl-group.horizontal.middle {
  align-items: center;
}
.hl-group.horizontal.bottom {
  align-items: flex-end;
}
.hl-group.horizontal.left {
  justify-content: flex-start;
}
.hl-group.horizontal.center {
  justify-content: center;
}
.hl-group.horizontal.right {
  justify-content: flex-end;
}
.hl-group.vertical {
  flex-direction: column;
}
.hl-group.vertical.indent {
  --indent: -1px;
}
.hl-group.vertical.indent > .hl-group:not(:only-child):not(:first-child),
.hl-group.vertical.indent > .group-item:not(:only-child):not(:first-child) {
  margin-top: var(--indent);
}
.hl-group.vertical.full-x {
  display: flex;
  width: 100%;
}
.hl-group.vertical.full-x > .group-item,
.hl-group.vertical.full-x > .hl-group {
  flex-grow: 0;
}
.hl-group.vertical.merge > .hl-group:not(:first-child):not(:last-child) .group-item,
.hl-group.vertical.merge > .group-item:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:first-child .group-item:first-child {
  border-bottom-left-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:last-child {
  border-bottom-right-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:first-child {
  border-top-left-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:last-child .group-item:last-child {
  border-top-right-radius: 0;
}
.hl-group.vertical.top {
  justify-content: flex-start;
}
.hl-group.vertical.middle {
  justify-content: center;
}
.hl-group.vertical.bottom {
  justify-content: flex-end;
}
.hl-group.vertical.left {
  align-items: flex-start;
}
.hl-group.vertical.center {
  align-items: center;
}
.hl-group.vertical.right {
  align-items: flex-end;
}
.hl-button {
  --button-font-color: #7E8299;
  --button-font-color-hover: #FFFFFF;
  --button-font-color-active: #FFFFFF;
  --button-bg-color: #f5f8fa;
  --button-bg-color-hover: #40a9ff;
  --button-bg-color-active: #4176D6;
  --button-border-color: #f5f8fa;
  --button-border-color-hover: #40a9ff;
  --button-border-color-active: #4176D6;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--button-font-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5714285714;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  height: 36px;
  padding: 6px 12px;
  border: 1px solid var(--button-border-color);
  border-radius: 4px;
  background-color: var(--button-bg-color);
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.hl-button:focus:not(:focus-visible) {
  outline: 0;
}
.hl-button.is-hover, .hl-button.is-focus, .hl-button:focus, .hl-button:hover {
  color: var(--button-font-color-hover);
  border-color: var(--button-border-color-hover);
  background-color: var(--button-bg-color-hover);
}
.hl-button:focus, .hl-button.is-focus {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-radio.is-checked .hl-button, .hl-checkbox.is-checked .hl-button {
  color: var(--button-font-color-hover);
  border-color: var(--button-border-color-hover);
  background-color: var(--button-bg-color-hover);
}
.hl-button:disabled, .hl-button.is-disabled {
  color: #B5B5C3;
  background-color: #F6F9FB;
  border-color: #E8EBF8;
  pointer-events: none;
}
.hl-button.is-active, .hl-button:active {
  color: var(--button-font-color-active);
  border-color: var(--button-border-color-active);
  background-color: var(--button-bg-color-active);
}
.hl-button.is-loading {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.outline {
  color: #7E8299;
  background-color: transparent;
  background-image: none;
}
.hl-button.outline.dashed {
  border-style: dashed;
}
.hl-button.link {
  color: #009EF7;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.link:focus, .hl-button.link:hover {
  color: #009EF7;
}
.hl-button.no-padding {
  height: unset;
  padding: 0;
}
.hl-button:focus {
  z-index: 1;
}
.hl-button:hover, .hl-button.is-active, .hl-button:active {
  z-index: 1;
}
.hl-button input[type=file],
.hl-button input[type=checkbox],
.hl-button input[type=radio] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.hl-button.light {
  border-color: transparent;
  background-color: #f5f8fa;
}
.hl-button.light.is-hover, .hl-button.light.is-focus, .hl-button.light:focus, .hl-button.light:hover {
  color: #FFFFFF;
  background-color: #40a9ff;
}
.hl-button.light.is-active, .hl-button.light:active {
  color: #FFFFFF;
  background-color: #4176D6;
}
.hl-button.no-fill {
  border-color: transparent;
  background-color: transparent;
}
.hl-button.no-fill.is-hover, .hl-button.no-fill.is-focus, .hl-button.no-fill:focus, .hl-button.no-fill:hover {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-color: transparent;
}
.hl-button.no-fill.is-active, .hl-button.no-fill:active {
  background-color: #4176D6;
}
.hl-button span {
  align-items: center;
}
.hl-button .hl-spinner,
.hl-button .hl-icon {
  display: flex;
  flex-grow: unset;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: currentColor;
}
.hl-button .hl-spinner:not(:only-child),
.hl-button .hl-icon:not(:only-child) {
  margin-right: 8px;
}
.hl-button.icon-left {
  justify-content: space-between;
}
.hl-button.icon-left .hl-icon {
  order: -1;
  flex-shrink: 0;
}
.hl-button.icon-right {
  justify-content: space-between;
}
.hl-button.icon-right .hl-icon {
  order: 1;
  flex-shrink: 0;
  margin-right: 0;
  margin-left: 8px;
}
.hl-button.rational span {
  flex-basis: 0;
  flex-grow: 1;
}
.hl-button.block {
  width: 100%;
  display: flex;
}
.hl-button.round {
  border-radius: 100px;
}
.hl-button.equal {
  padding-left: 0;
  padding-right: 0;
  min-width: 36px;
  max-width: 36px;
  width: 36px;
  height: 36px;
  justify-content: center;
}
.hl-button.equal .hl-icon {
  margin: 0;
}
span.hl-button {
  cursor: default;
  pointer-events: none;
}
span.hl-button.is-active {
  background-color: white;
  cursor: default;
  border-color: #f5f8fa;
}
.hl-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  color: #5E6278;
  background-color: #FFFFFF;
  font-size: 14px;
  line-height: 1.5714285714;
  border-radius: 4px;
  height: 36px;
  min-height: 36px;
  border: 1px solid #E4E6EF;
  transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
}
.hl-input .input-inner {
  outline: 0;
  -webkit-appearance: none;
  line-height: inherit;
  padding: 6px 12px;
  font-size: inherit;
  font-weight: inherit;
  text-align: inherit;
  border: none;
  width: 100%;
  color: currentColor;
  background-color: transparent;
  outline: 0;
}
.hl-input .input-inner:disabled {
  cursor: not-allowed;
}
.hl-input[role=textarea] {
  height: auto;
}
.hl-input[role=textarea] textarea {
  outline: 0;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 14px;
  line-height: 1.5714285714;
  padding: 6px 12px;
  background-color: transparent;
}
.hl-input.is-tags {
  height: auto;
}
.hl-input.is-tags .input-inner {
  display: none;
}
.hl-input:hover {
  z-index: 2;
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.is-focus, .hl-input.is-active {
  z-index: 2;
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-input.is-focus .input-affixe, .hl-input.is-active .input-affixe {
  color: #40a9ff;
}
.hl-input.is-focus .input-affixe .hl-icon, .hl-input.is-active .input-affixe .hl-icon {
  color: currentColor;
}
.hl-input.is-focus {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-input.is-disabled, .hl-input.is-disabled.is-active, .hl-input.is-disabled.is-focus {
  user-select: none;
  color: #B5B5C3 !important;
  background-color: #F6F9FB !important;
  border-color: #E8EBF8 !important;
  box-shadow: none !important;
  cursor: not-allowed;
}
.hl-input.block {
  width: 100%;
}
.hl-input.round {
  border-radius: 100px;
}
.hl-input.fill {
  background-color: #F3F6F9;
  border-color: transparent;
}
.hl-input.fill.is-focus, .hl-input.fill.is-active {
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-input.thin {
  border: none !important;
  background-color: unset !important;
  height: unset !important;
  min-height: unset !important;
}
.hl-input.thin .input-inner {
  padding: 0 !important;
}
.hl-input .input-affixe {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  flex-shrink: 0;
  flex-grow: unset;
  color: #5E6278;
  transition: color 0.3s ease;
}
.hl-input .input-affixe a {
  display: flex;
  color: #A1A5B7;
  transition: color 0.3s ease;
}
.hl-input .input-affixe a:hover {
  color: #009EF7;
}
.hl-input .input-affixe.prefix {
  order: -1;
  margin-left: 12px;
}
.hl-input .input-affixe.suffix {
  order: 1;
  margin-right: 12px;
}
.hl-input .input-affixe .hl-spinner,
.hl-input .input-affixe .hl-icon {
  display: flex;
  width: 16px;
  height: 16px;
  color: #5E6278;
}
.hl-input .input-close {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 15px;
  color: #5E6278;
  transition: color 0.3s ease;
}
.hl-input .input-close:hover {
  color: #009EF7;
}
.hl-input .input-visible {
  cursor: pointer;
}
.hl-input .input-count {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 3;
  font-size: 12px;
  line-height: 1;
  padding: 10px;
  color: #B5B5C3;
}
.hl-input .input-tags {
  display: flex;
  width: 100%;
  padding: 6px;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
  flex-grow: 1;
}
.hl-input .input-tags > input,
.hl-input .input-tags .hl-tag {
  padding: 0 6px;
  height: 22px;
  line-height: 1;
}
.hl-input .input-tags > input {
  display: inline-block;
  width: 100px;
  border: none;
  background-color: transparent;
  outline: 0;
}
.hl-input .input-tags .tag-close {
  cursor: pointer;
}
.hl-input-number.is-disabled .hl-button,
.hl-input-number.is-disabled .hl-input {
  border-color: #E8EBF8;
}
.hl-input-number .hl-input {
  width: 100%;
  border: 1px solid #E4E6EF;
}
.hl-input-number .hl-input input {
  text-align: center;
  -moz-appearance: textfield;
}
.hl-input-number .hl-input input::-webkit-inner-spin-button, .hl-input-number .hl-input input::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.hl-input-number .hl-button {
  padding: 0;
  border: 1px solid #E4E6EF;
  min-width: 36px;
}
.hl-input-number .hl-button:hover {
  border-color: #40a9ff;
}
.hl-input-number .hl-button:active {
  border-color: #4176D6;
}
.hl-input-number .hl-button .hl-icon {
  height: 60%;
}
.hl-input-number.btn-vertical .hl-input {
  text-align: left;
  margin: 0;
}
.hl-input-number.btn-vertical .btn-group {
  height: 36px;
}
.hl-input-number.btn-vertical .btn-group .hl-button {
  padding: 0;
  width: 36px;
  height: 50%;
  flex-grow: 1;
}
.hl-input-number.btn-inner .hl-input {
  padding-left: 36px;
  padding-right: 36px;
}
.hl-input-number.btn-inner .hl-button {
  position: absolute;
  top: 6px;
  z-index: 3;
  border-radius: 6px;
  min-width: 24px;
  width: 24px;
  height: 24px;
}
.hl-input-number.btn-inner .hl-button.round {
  border-radius: 100px;
}
.hl-input-number.btn-inner .hl-button.decrease {
  left: 6px;
}
.hl-input-number.btn-inner .hl-button.increase {
  right: 6px;
}
.hl-radio {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  text-align: left;
  vertical-align: middle;
  cursor: pointer;
  line-height: 18px;
}
.hl-radio .radio-input {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  opacity: 0;
  outline: 0;
  width: 0;
  height: 0;
}
.hl-radio .radio-inner {
  position: relative;
  display: block;
  float: left;
  width: 18px;
  height: 18px;
  font-style: normal;
  background-color: #FFFFFF;
  border: 1px solid #E4E6EF;
  border-radius: 100%;
  flex-shrink: 0;
  flex-grow: unset;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  transition: background-color 0.2s ease, border 0.2s ease;
}
.hl-radio .radio-inner:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 100%;
  background-color: transparent;
  border: transparent;
  transform: scale(0.5);
  transition: background-color 0.2s ease;
}
.hl-radio .radio-label {
  padding: 0 8px;
}
.hl-radio .hl-button {
  pointer-events: none;
}
.hl-radio:hover .radio-inner {
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-radio.is-checked {
  z-index: 1;
}
.hl-radio.is-checked .radio-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
  animation-name: bounceIn;
  transition: box-shadow 0.3s ease;
}
.hl-radio.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.is-focus {
  z-index: 1;
}
.hl-radio.is-focus .radio-inner {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-radio.is-disabled {
  cursor: not-allowed;
}
.hl-radio.is-disabled .radio-inner {
  border-color: #E8EBF8 !important;
  background-color: #F6F9FB !important;
}
.hl-radio.is-disabled .radio-label {
  color: #B5B5C3 !important;
}
.hl-radio.is-disabled.is-checked .radio-inner:after {
  background-color: #B5B5C3;
}
.hl-radio.bold .radio-inner {
  border-width: 2px;
}
.hl-radio.fill .radio-inner {
  background-color: #E4E6EF;
}
.hl-radio.fill.is-checked .radio-inner {
  background-color: #40a9ff;
}
.hl-radio-group {
  position: relative;
}
.hl-radio-group .hl-checkbox {
  display: flex;
}
.hl-checkbox {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  text-align: left;
  vertical-align: middle;
  cursor: pointer;
}
.hl-checkbox .checkbox-input {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  opacity: 0;
  outline: 0;
  width: 0;
  height: 0;
}
.hl-checkbox .checkbox-inner {
  position: relative;
  display: flex;
  width: 18px;
  height: 18px;
  background-color: #FFFFFF;
  border: 1px solid #E4E6EF;
  flex-shrink: 0;
  flex-grow: unset;
  overflow: hidden;
  border-radius: 3px;
  transition: all 0.2s ease;
}
.hl-checkbox .checkbox-inner .icon-checked,
.hl-checkbox .checkbox-inner .icon-indeterminate {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  transition: all 0.2s;
}
.hl-checkbox .checkbox-label {
  padding: 0 8px;
  line-height: 18px;
}
.hl-checkbox .hl-button {
  pointer-events: none;
}
.hl-checkbox:hover .checkbox-inner {
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-checkbox.is-checked .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.is-checked .checkbox-inner .icon-checked {
  color: #fff;
  visibility: visible;
  opacity: 1;
  animation-name: checkBounceIn;
}
.hl-checkbox.is-focus .checkbox-inner {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-checkbox.is-disabled {
  cursor: not-allowed;
}
.hl-checkbox.is-disabled .checkbox-inner {
  border-color: #E8EBF8 !important;
  background-color: #F6F9FB !important;
}
.hl-checkbox.is-disabled .checkbox-inner .icon-checked,
.hl-checkbox.is-disabled .checkbox-inner .icon-indeterminate {
  color: inherit;
}
.hl-checkbox.is-disabled .checkbox-label {
  color: #B5B5C3 !important;
}
.hl-checkbox.is-disabled.is-indeterminate .checkbox-inner .icon-checked,
.hl-checkbox.is-disabled.is-indeterminate .checkbox-inner .icon-indeterminate, .hl-checkbox.is-disabled.is-checked .checkbox-inner .icon-checked,
.hl-checkbox.is-disabled.is-checked .checkbox-inner .icon-indeterminate {
  color: #B5B5C3 !important;
}
.hl-checkbox.is-indeterminate .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.is-indeterminate .checkbox-inner .icon-indeterminate {
  color: #fff;
  opacity: 1;
  visibility: visible;
}
.hl-checkbox.bold .checkbox-inner {
  border-width: 2px;
  line-height: 15px;
}
.hl-checkbox.round .checkbox-inner {
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: #E4E6EF;
  border-radius: 50%;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}
.hl-checkbox.round .checkbox-inner .icon-checked,
.hl-checkbox.round .checkbox-inner .icon-indeterminate {
  opacity: 0;
  visibility: hidden;
}
.hl-checkbox.round .checkbox-inner:after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 12px;
  font-style: normal;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  content: "";
  border-radius: 50%;
  transform: scale(0.5);
  background-color: transparent;
  animation-name: unset;
}
.hl-checkbox.round:hover .checkbox-inner {
  border-color: transparent !important;
}
.hl-checkbox.round.is-checked .checkbox-inner {
  background-color: #40a9ff;
  animation-name: bounceIn;
}
.hl-checkbox.round.is-checked .checkbox-inner:after {
  transform: scale(0.5);
  background-color: #fff;
}
.hl-checkbox.fill .checkbox-inner {
  background-color: #E4E6EF;
  border-color: #E4E6EF;
}
.hl-checkbox.fill.is-checked .checkbox-inner {
  background-color: #40a9ff;
  border-color: #40a9ff;
}
@keyframes checkBounceIn {
  0% {
    transform: scale(0.6);
  }
  45% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.hl-checkbox-group {
  position: relative;
}
.hl-checkbox-group .hl-checkbox {
  display: flex;
}
.hl-switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  --switch-width: 44px;
}
.hl-switch:active input + em:before {
  right: 30%;
}
.hl-switch:active input:checked + em:before {
  right: 0;
  left: 30%;
}
.hl-switch input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.hl-switch input:checked + em {
  border-color: #f5f8fa;
  background-color: #f5f8fa;
}
.hl-switch input:checked + em:before {
  left: calc(var(--switch-width) - 22px);
  right: 0;
}
.hl-switch input:checked + em + .hl-icon, .hl-switch input:checked + em + .hl-spinner, .hl-switch input:checked + em + i {
  left: calc(var(--switch-width) - 22px);
  right: 0;
  color: #009EF7;
}
.hl-switch input:disabled + em {
  border-color: #E8EBF8;
  background-color: #F6F9FB;
}
.hl-switch input:disabled + em::before {
  box-shadow: none;
}
.hl-switch em {
  position: relative;
  display: block;
  pointer-events: none;
  width: var(--switch-width);
  height: 22px;
  border: 2px solid #E4E6EF;
  border-radius: 100px;
  background-color: #E4E6EF;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.hl-switch em:before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  right: calc(var(--switch-width) - 22px);
  height: 18px;
  border-radius: 100px;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px;
}
.hl-switch .hl-icon,
.hl-switch .hl-spinner,
.hl-switch i {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-style: normal;
  left: 0;
  top: 0;
  width: 22px;
  height: 22px;
  z-index: 1;
  color: #5E6278;
  transition: all 0.3s ease;
}
.hl-switch .hl-icon svg,
.hl-switch .hl-spinner svg,
.hl-switch i svg {
  width: 11px;
  height: 11px;
}
.hl-input-select {
  position: relative;
  display: inline-flex;
}
.hl-input-select.block {
  width: 100%;
}
.hl-input-select .select-caret {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, 40%) rotate(0deg);
  transition: all 0.3s ease;
}
.hl-input-select .select-caret.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0) rotate(0deg);
}
.hl-input-select .select-caret.visible.is-open {
  transform: translate(0, 0) rotate(180deg);
}
.hl-input-select .select-close {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, -40%);
  transition: all 0.3s ease;
}
.hl-input-select .select-close.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-input-select .select-caret.hl-icon,
.hl-input-select .select-close.hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-input-select .icon-close {
  cursor: pointer;
}
.hl-input-select .hl-input {
  display: flex;
  width: 100%;
  height: auto !important;
}
.hl-select-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-select-popper .select-dropdown {
  padding: 12px 0;
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.hl-select-popper .select-dropdown-empty {
  padding: 12px;
  margin: 0;
  text-align: center;
  color: #A1A5B7;
}
.hl-select-popper .select-dropdown-wrap {
  max-height: 300px;
}
.hl-select-popper .select-dropdown-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.hl-select-popper .select-dropdown-list li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 24px;
  min-height: 36px;
  font-size: 14px;
  color: #5E6278;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-select-popper .select-dropdown-list li > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hl-select-popper .select-dropdown-list li .hl-icon {
  color: #5E6278;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.hl-select-popper .select-dropdown-list li:focus, .hl-select-popper .select-dropdown-list li.hover, .hl-select-popper .select-dropdown-list li:hover {
  color: #009EF7;
  background-color: #F6F9FB;
}
.hl-select-popper .select-dropdown-list li:focus .hl-icon, .hl-select-popper .select-dropdown-list li.hover .hl-icon, .hl-select-popper .select-dropdown-list li:hover .hl-icon {
  color: #009EF7;
}
.hl-select-popper .select-dropdown-list li.menu-divider {
  height: 1px;
  min-height: 1px;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
  border-top: 1px solid #EFF2F5;
  pointer-events: none;
}
.hl-select-popper .select-dropdown-list li.is-selected {
  padding-right: 38px;
  background-color: #F6F9FB;
  font-size: 14px;
}
.hl-select-popper .select-dropdown-list li.is-selected .hl-icon {
  color: #009EF7;
  position: absolute;
  margin: 0;
  right: 12px;
}
.hl-select-popper .select-dropdown-list li.is-disabled {
  color: #B5B5C3;
  cursor: not-allowed;
}
.hl-select-popper .select-dropdown-list li.is-disabled:hover {
  background-color: unset;
}
.hl-select-popper .select-dropdown-list li.hl-option-group {
  padding: 0;
  flex-direction: column;
  height: auto;
}
.hl-select-popper .select-dropdown-list li.hl-option-group:hover {
  background-color: transparent;
}
.hl-select-popper .select-dropdown-list li.hl-option-group strong {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 12px;
  color: #B5B5C3;
  height: 36px;
  font-weight: 400;
}
.hl-select-popper .select-dropdown-list li.hl-option-group ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.el-select-dropdown {
  z-index: calc(var(--el-index-top) + 1);
  border-radius: var(--el-border-radius-base);
  box-sizing: border-box;
}
.el-select-dropdown .el-scrollbar.is-empty .el-select-dropdown__list {
  padding: 0;
}
.el-select-dropdown__option-item:hover:not(.hover) {
  background-color: transparent;
}
.el-select-dropdown__empty {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: var(--el-select-font-size);
}
.el-select-dropdown__wrap {
  max-height: 274px;
}
.el-select-dropdown__list {
  list-style: none;
  margin: 6px 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}
.el-select-dropdown__option-item {
  font-size: var(--el-select-font-size);
  padding: 0 32px 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--el-text-color-regular);
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
}
.el-select-dropdown__option-item.is-disabled {
  color: var(--el-text-color-placeholder);
  cursor: not-allowed;
}
.el-select-dropdown__option-item.is-disabled:hover {
  background-color: var(--el-color-white);
}
.el-select-dropdown__option-item.is-selected {
  background-color: var(--el-background-color-base);
  font-weight: 700;
}
.el-select-dropdown__option-item.is-selected:not(.is-multiple) {
  color: var(--el-color-primary);
}
.el-select-dropdown__option-item.hover {
  background-color: var(--el-background-color-base) !important;
}
.el-select-dropdown__option-item:hover {
  background-color: var(--el-background-color-base);
}
.el-select-dropdown.is-multiple .el-select-dropdown__option-item.is-selected {
  color: var(--el-color-primary);
  background-color: var(--el-color-white);
  font-weight: 700;
}
.el-select-dropdown.is-multiple .el-select-dropdown__option-item.is-selected::after {
  position: absolute;
  right: 20px;
  top: 0;
  font-family: element-icons;
  content: "\\e6da";
  font-size: 12px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-select-group {
  margin: 0;
  padding: 0;
}
.el-select-group__wrap {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
.el-select-group__wrap:not(:last-of-type) {
  padding-bottom: 24px;
}
.el-select-group__wrap:not(:last-of-type)::after {
  content: "";
  position: absolute;
  display: block;
  left: 20px;
  right: 20px;
  bottom: 12px;
  height: 1px;
  background: var(--el-border-color-light);
}
.el-select-group__split-dash {
  position: absolute;
  left: 20px;
  right: 20px;
  height: 1px;
  background: var(--el-border-color-light);
}
.el-select-group__title {
  padding-left: 20px;
  font-size: 12px;
  color: var(--el-color-info);
  line-height: 30px;
}
.el-select-group .el-select-dropdown__item {
  padding-left: 20px;
}
.el-select-v2 {
  --el-select-border-color-hover: var(--el-border-color-hover);
  --el-select-disabled-border: var(--el-disabled-border-base);
  --el-select-font-size: var(--el-font-size-base);
  --el-select-close-hover-color: var(--el-text-color-secondary);
  --el-select-input-color: var(--el-text-color-placeholder);
  --el-select-multiple-input-color: var(--el-text-color-regular);
  --el-select-input-focus-border-color: var(--el-color-primary);
  --el-select-input-font-size: 14px ;
}
.el-select-v2 {
  display: inline-block;
  position: relative;
  font-size: var(--el-font-size-base, 14px);
}
.el-select-v2__wrapper {
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 30px 5px 0;
  border: 1px solid var(--el-border-color-base);
  border-radius: var(--el-border-radius-base);
  transition: border-color var(--el-transition-duration-fast) var(--el-ease-in-out-bezier-function);
}
.el-select-v2__wrapper:hover {
  border-color: var(--el-text-color-placeholder);
}
.el-select-v2__wrapper.is-filterable {
  cursor: text;
}
.el-select-v2__wrapper.is-focused {
  border-color: var(--el-color-primary);
}
.el-select-v2__wrapper.is-hovering:not(.is-focused) {
  border-color: var(--el-text-color-placeholder);
}
.el-select-v2__wrapper.is-disabled {
  cursor: not-allowed;
  background-color: var(--el-background-color-base);
  color: var(--el-text-color-placeholder);
  border-color: var(--el-select-disabled-border);
}
.el-select-v2__wrapper.is-disabled:hover {
  border-color: var(--el-select-disabled-border);
}
.el-select-v2__wrapper.is-disabled.is-focus {
  border-color: var(--el-input-focus-border-color);
}
.el-select-v2__wrapper.is-disabled .is-transparent {
  opacity: 1;
  -webkit-user-select: none;
  user-select: none;
}
.el-select-v2__wrapper .el-select-v2__input-wrapper {
  box-sizing: border-box;
  position: relative;
  -webkit-margin-start: 15px;
  margin-inline-start: 15px;
  max-width: 100%;
  overflow: hidden;
}
.el-select-v2__wrapper,
.el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 40px;
}
.el-select-v2__wrapper .el-select-v2__input-wrapper input {
  line-height: 28px;
  height: 28px;
  min-width: 4px;
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  appearance: none;
  background: 0 0;
  border: none;
  margin: 0;
  outline: 0;
  padding: 0;
}
.el-select-v2 .el-select-v2__tags-text {
  text-overflow: ellipsis;
  display: inline-block;
  overflow-x: hidden;
  vertical-align: bottom;
}
.el-select-v2__empty {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.el-select-v2__popper.el-popper[role=tooltip] {
  background: var(--el-color-white);
  border: 1px solid var(--el-border-color-light);
  box-shadow: var(--el-box-shadow-light);
}
.el-select-v2__popper.el-popper[role=tooltip] .el-popper__arrow::before {
  border: 1px solid var(--el-border-color-light);
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=top] .el-popper__arrow::before {
  border-top-color: transparent;
  border-left-color: transparent;
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=bottom] .el-popper__arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=left] .el-popper__arrow::before {
  border-left-color: transparent;
  border-bottom-color: transparent;
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=right] .el-popper__arrow::before {
  border-right-color: transparent;
  border-top-color: transparent;
}
.el-select-v2--medium .el-select-v2__wrapper {
  padding: 3px 30px 3px 0;
}
.el-select-v2--medium .el-select-v2__wrapper,
.el-select-v2--medium .el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 36px;
}
.el-select-v2--medium .el-select-v2__caret {
  line-height: 36px;
}
.el-select-v2--medium .el-select-v2__suffix {
  height: 36px;
}
.el-select-v2--small .el-select-v2__wrapper {
  padding: 3px 30px 3px 0;
  line-height: 32px;
}
.el-select-v2--small .el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 24px;
}
.el-select-v2--small .el-select-v2__wrapper .el-select-v2__input-wrapper input {
  line-height: 24px;
  height: 24px;
}
.el-select-v2--small .el-select-v2__caret {
  line-height: 32px;
}
.el-select-v2--small .el-select-v2__suffix {
  height: 32px;
}
.el-select-v2--mini .el-select-v2__wrapper {
  padding: 1px 30px 1px 0;
  line-height: 28px;
}
.el-select-v2--mini .el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 24px;
}
.el-select-v2--mini .el-select-v2__wrapper .el-select-v2__input-wrapper input {
  line-height: 24px;
  height: 24px;
}
.el-select-v2--mini .el-select-v2__caret {
  line-height: 28px;
}
.el-select-v2--mini .el-select-v2__suffix {
  height: 28px;
}
.el-select-v2 .el-select-v2__selection > span {
  display: inline-block;
}
.el-select-v2:hover .el-select-v2__combobox-input {
  border-color: var(--el-select-border-color-hover);
}
.el-select-v2 .el-select__selection-text {
  text-overflow: ellipsis;
  display: inline-block;
  overflow-x: hidden;
  vertical-align: bottom;
}
.el-select-v2 .el-select-v2__combobox-input {
  padding-right: 35px;
  display: block;
}
.el-select-v2 .el-select-v2__combobox-input:focus {
  border-color: var(--el-select-input-focus-border-color);
}
.el-select-v2__input {
  border: none;
  outline: 0;
  padding: 0;
  margin-left: 15px;
  color: var(--el-select-multiple-input-color);
  font-size: var(--el-select-font-size);
  -webkit-appearance: none;
  appearance: none;
  height: 28px;
}
.el-select-v2__input.is-mini {
  height: 14px;
}
.el-select-v2__close {
  cursor: pointer;
  position: absolute;
  top: 8px;
  z-index: var(--el-index-top);
  right: 25px;
  color: var(--el-select-input-color);
  line-height: 18px;
  font-size: var(--el-select-input-font-size);
}
.el-select-v2__close:hover {
  color: var(--el-select-close-hover-color);
}
.el-select-v2__suffix {
  position: absolute;
  right: 5px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
}
.el-select-v2__caret {
  color: var(--el-select-input-color);
  font-size: var(--el-select-input-font-size);
  transition: transform var(--el-transition-duration);
  transform: rotateZ(180deg);
  cursor: pointer;
}
.el-select-v2__caret.is-reverse {
  transform: rotateZ(0);
}
.el-select-v2__caret.is-show-close {
  font-size: var(--el-select-font-size);
  text-align: center;
  transform: rotateZ(180deg);
  border-radius: var(--el-border-radius-circle);
  color: var(--el-select-input-color);
  transition: var(--el-transition-color);
}
.el-select-v2__caret.is-show-close:hover {
  color: --el-select-close-hover-color;
}
.el-select-v2__selection {
  white-space: normal;
  z-index: var(--el-index-normal);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.el-select-v2__wrapper {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: var(--el-border-radius-base);
  position: relative;
  transition: all var(--el-transition-duration) var(--el-ease-in-out-bezier-function);
}
.el-select-v2__input-calculator {
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  white-space: pre;
  z-index: 999;
}
.el-select-v2__selected-item {
  line-height: inherit;
  height: inherit;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
}
.el-select-v2__placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-margin-start: 15px;
  margin-inline-start: 15px;
  width: calc(100% - 52px);
  color: var(--el-input-font-color, var(--el-text-color-regular));
  font-size: inherit;
}
.el-select-v2__placeholder.is-transparent {
  color: var(--el-text-color-placeholder);
}
.el-select-v2 .el-select-v2__selection .el-tag {
  box-sizing: border-box;
  border-color: transparent;
  margin: 2px 0 2px 6px;
  background-color: #f0f2f5;
}
.el-select-v2 .el-select-v2__selection .el-tag .el-icon-close {
  background-color: var(--el-text-color-placeholder);
  right: -7px;
  color: var(--el-color-white);
}
.el-select-v2 .el-select-v2__selection .el-tag .el-icon-close:hover {
  background-color: var(--el-text-color-secondary);
}
.el-select-v2 .el-select-v2__selection .el-tag .el-icon-close::before {
  display: block;
  transform: translate(0, 0.5px);
}
.hl-selector {
  position: relative;
  display: inline-block;
}
.hl-selector.block {
  width: 100%;
}
.hl-selector .select-caret {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, 40%) rotate(0deg);
  transition: all 0.3s ease;
}
.hl-selector .select-caret.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0) rotate(0deg);
}
.hl-selector .select-caret.visible.is-open {
  transform: translate(0, 0) rotate(180deg);
}
.hl-selector .select-close {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, -40%);
  transition: all 0.3s ease;
}
.hl-selector .select-close.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-selector .select-caret.hl-icon,
.hl-selector .select-close.hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-selector .hl-input {
  width: 100%;
  height: auto !important;
}
.hl-selector .selector-tags {
  width: 100%;
}
.hl-selector .selector-tags > span {
  display: inline-block;
}
.hl-selector .selector-tags .hl-tag {
  padding: 0 6px;
  height: auto;
  margin: 2px 4px 2px 0;
}
.hl-selector .selector-tags > input {
  display: inline-block;
  width: auto;
  padding: 0 4px;
  border: none;
  background-color: transparent;
  outline: 0;
}
.hl-selector .selector-tags .tag-close {
  cursor: pointer;
}
.hl-selector .selector-tags + input {
  z-index: -1;
}
.hl-selector-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-selector-popper .selector-dropdown {
  padding: 0;
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.hl-selector-popper .selector-dropdown-empty {
  padding: 12px 0;
  margin: 0;
  text-align: center;
  color: #A1A5B7;
}
.hl-form {
  --form-gap: 24px;
  display: flex;
  flex-direction: column;
  row-gap: var(--form-gap);
}
.hl-form.inline {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: var(--form-gap);
}
.hl-form.inline .form-label {
  min-width: auto;
  width: auto;
}
.hl-form.inline .form-content {
  min-width: auto;
  width: auto;
}
.hl-form.inline.info-float .form-content-info {
  top: 0;
  right: 0;
  transform: translate(0, -100%);
}
.hl-form.inline.info-float .form-content-info:before {
  top: auto;
  bottom: 0;
  left: auto;
  right: 14px;
  transform: translate(0, 100%);
  border-right-color: transparent !important;
  border-top-color: #EFF2F5;
}
.hl-form.full {
  display: block;
  width: 100%;
}
.hl-form.full .form-content {
  display: block;
  width: 100%;
}
.hl-form.full .form-content .hl-input {
  width: 100%;
}
.hl-form.info-float .form-content-info {
  top: 50%;
  right: 0;
  z-index: 10;
  padding: 4px 12px;
  color: #fff;
  border-radius: 4px;
  background-color: #FFFFFF;
  transform: translate(100%, -50%);
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.hl-form.info-float .form-content-info:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  border: 5px solid transparent;
  border-right-color: transparent;
  transform: translate(-100%, -50%);
}
.hl-form .hl-form-item {
  display: flex;
}
.hl-form .hl-form-item.is-required:not(.is-no-asterisk) .form-label label::before {
  content: "*";
}
.hl-form .hl-form-item .static {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: unset;
}
.hl-form .form-label {
  display: inline-flex;
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-form .form-label label {
  position: relative;
  display: block;
  font-size: 14px;
  padding: 6px 0;
  line-height: 1.5714285714;
}
.hl-form .form-label label::before {
  position: absolute;
  content: "";
  font-family: sans-serif;
  color: #f1416c;
  transform: translate(-100%, 0);
  margin-left: -4px;
}
.hl-form .form-label.top {
  align-self: flex-start;
}
.hl-form .form-label.middle {
  align-self: center;
}
.hl-form .form-label.bottom {
  align-self: flex-end;
}
.hl-form .form-label.left {
  justify-content: flex-start;
  text-align: left;
}
.hl-form .form-label.center {
  justify-content: center;
  text-align: center;
}
.hl-form .form-label.right {
  justify-content: flex-end;
  text-align: right;
}
@media (max-width: 640px) {
  .hl-form .form-label.top-sm {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-sm {
    align-self: center;
  }
  .hl-form .form-label.bottom-sm {
    align-self: flex-end;
  }
  .hl-form .form-label.left-sm {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-sm {
    justify-content: center;
  }
  .hl-form .form-label.right-sm {
    justify-content: flex-end;
  }
}
@media (max-width: 768px) {
  .hl-form .form-label.top-md {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-md {
    align-self: center;
  }
  .hl-form .form-label.bottom-md {
    align-self: flex-end;
  }
  .hl-form .form-label.left-md {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-md {
    justify-content: center;
  }
  .hl-form .form-label.right-md {
    justify-content: flex-end;
  }
}
@media (max-width: 1024px) {
  .hl-form .form-label.top-lg {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-lg {
    align-self: center;
  }
  .hl-form .form-label.bottom-lg {
    align-self: flex-end;
  }
  .hl-form .form-label.left-lg {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-lg {
    justify-content: center;
  }
  .hl-form .form-label.right-lg {
    justify-content: flex-end;
  }
}
@media (max-width: 1280px) {
  .hl-form .form-label.top-xl {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-xl {
    align-self: center;
  }
  .hl-form .form-label.bottom-xl {
    align-self: flex-end;
  }
  .hl-form .form-label.left-xl {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-xl {
    justify-content: center;
  }
  .hl-form .form-label.right-xl {
    justify-content: flex-end;
  }
}
@media (max-width: 1536px) {
  .hl-form .form-label.top-xxl {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-xxl {
    align-self: center;
  }
  .hl-form .form-label.bottom-xxl {
    align-self: flex-end;
  }
  .hl-form .form-label.left-xxl {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-xxl {
    justify-content: center;
  }
  .hl-form .form-label.right-xxl {
    justify-content: flex-end;
  }
}
.hl-form .form-content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.hl-form .form-content-info {
  position: absolute;
  font-size: 12px;
  line-height: 1.6666666667;
  z-index: 1000;
  display: block;
  width: 100%;
  transform: translate(0, 100%);
  bottom: 0;
}
.hl-badge {
  display: inline-block;
  min-width: 12px;
  padding: 3px 6px;
  font-size: 12px;
  line-height: 1;
  color: #5E6278;
  text-align: center;
  white-space: nowrap;
  background-color: #FFFFFF;
  border-radius: 3px;
  border: 1px solid #FFFFFF;
  font-style: normal;
}
.hl-badge.lt {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.lb {
  top: unset;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.rt {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.rb {
  top: unset;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.dot {
  width: 8px;
  height: 8px;
  min-width: auto;
  max-width: auto;
  padding: 0;
  border-radius: 100% !important;
  line-height: 1;
}
.hl-badge.outline {
  color: #FFFFFF;
  background-color: transparent !important;
  border-color: #FFFFFF;
}
.hl-badge.round {
  border-radius: 100px;
}
.hl-simple-table {
  --table-gap: 0;
  --table-gap-x: var(--table-gap);
  --table-gap-y: var(--table-gap);
  --table-padding: 12px;
  --table-cell-padding: 12px;
  --table-highlight-color: #f4faff;
  --tree-indent: 1em;
  width: 100%;
  padding: 0;
  margin: 0;
  caption-side: bottom;
  border-collapse: collapse;
  text-align: left;
  border-spacing: var(--table-gap-x) var(--table-gap-y);
}
.hl-simple-table > thead {
  color: #3F4254;
}
.hl-simple-table > thead > tr > th {
  height: 48px;
  white-space: nowrap;
  font-weight: 500;
  background-color: #FFFFFF;
}
.hl-simple-table > thead > tr > th .cell {
  position: relative;
  display: flex;
  align-items: center;
}
.hl-simple-table > thead > tr > th .caret-wrapper {
  display: flex;
  align-items: center;
  height: 18px;
  width: 24px;
  margin-left: 8px;
  cursor: pointer;
  position: relative;
}
.hl-simple-table > thead > tr > th .caret-wrapper.ascending .sort-caret.ascending {
  border-bottom-color: #40a9ff;
}
.hl-simple-table > thead > tr > th .caret-wrapper.descending .sort-caret.descending {
  border-top-color: #40a9ff;
}
.hl-simple-table > thead > tr > th .caret-wrapper .sort-caret {
  width: 0;
  height: 0;
  border: 4px solid transparent;
  position: absolute;
}
.hl-simple-table > thead > tr > th .caret-wrapper .sort-caret.ascending {
  border-bottom-color: #EFF2F5;
  top: 0;
}
.hl-simple-table > thead > tr > th .caret-wrapper .sort-caret.descending {
  border-top-color: #EFF2F5;
  bottom: 0;
}
.hl-simple-table > thead > tr > th .table-filter-trigger {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 4px;
  align-items: center;
  cursor: pointer;
  color: #5E6278;
  transition: all 0.3s ease;
}
.hl-simple-table > thead > tr > th .table-filter-trigger .hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-simple-table > thead > tr > th .table-filter-trigger:hover {
  color: #40a9ff;
}
.hl-simple-table > tbody > tr.empty-content, .hl-simple-table > tbody > tr.more-content {
  text-align: center;
}
.hl-simple-table > tbody > tr.emp td {
  position: relative;
}
.hl-simple-table > tbody > tr.emp em {
  position: absolute;
  top: 1px;
  right: 1px;
  height: 100%;
  color: #fff;
}
.hl-simple-table > tbody > tr.current-row {
  background-color: var(--table-highlight-color);
}
.hl-simple-table th,
.hl-simple-table td {
  height: 48px;
  padding: var(--table-cell-padding);
  border-bottom: 1px solid #EFF2F5;
  background-color: transparent;
  word-break: break-all;
}
.hl-simple-table th.first-column-index,
.hl-simple-table td.first-column-index {
  padding-left: calc(var(--table-cell-padding) + var(--tree-indent) * var(--tree-level, 0));
}
.hl-simple-table th:first-child,
.hl-simple-table td:first-child {
  padding-left: var(--table-padding);
}
.hl-simple-table th:first-child.first-column-index,
.hl-simple-table td:first-child.first-column-index {
  padding-left: calc(var(--table-padding) + var(--tree-indent) * var(--tree-level, 0));
}
.hl-simple-table th:last-child,
.hl-simple-table td:last-child {
  padding-right: var(--table-padding);
}
.hl-simple-table th.center,
.hl-simple-table td.center {
  text-align: center;
}
.hl-simple-table th.right,
.hl-simple-table td.right {
  text-align: right;
}
.hl-simple-table th.show-tooltip .cell,
.hl-simple-table td.show-tooltip .cell {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.hl-simple-table th .cell,
.hl-simple-table td .cell {
  display: flex;
  align-items: center;
}
.hl-simple-table th .expand-icon,
.hl-simple-table th .placeholder-icon,
.hl-simple-table td .expand-icon,
.hl-simple-table td .placeholder-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #5E6278;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  transition: all 0.2s ease;
}
.hl-simple-table th .expand-icon .hl-icon,
.hl-simple-table th .placeholder-icon .hl-icon,
.hl-simple-table td .expand-icon .hl-icon,
.hl-simple-table td .placeholder-icon .hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-simple-table th.expanded .cell .expand-icon, .hl-simple-table th.tree-expanded .cell .expand-icon,
.hl-simple-table td.expanded .cell .expand-icon,
.hl-simple-table td.tree-expanded .cell .expand-icon {
  transform: rotate(90deg);
}
.hl-simple-table > thead > tr > th:first-child,
.hl-simple-table > thead > tr > td:first-child,
.hl-simple-table > tbody > tr > th:first-child,
.hl-simple-table > tbody > tr > td:first-child,
.hl-simple-table > tfoot > tr > th:first-child,
.hl-simple-table > tfoot > tr > td:first-child {
  border-left: 0;
}
.hl-simple-table > thead > tr > th:last-child,
.hl-simple-table > thead > tr > td:last-child,
.hl-simple-table > tbody > tr > th:last-child,
.hl-simple-table > tbody > tr > td:last-child,
.hl-simple-table > tfoot > tr > th:last-child,
.hl-simple-table > tfoot > tr > td:last-child {
  border-right: 0;
}
.hl-simple-table.auto-height > thead > tr > th {
  height: auto;
}
.hl-simple-table.auto-height th,
.hl-simple-table.auto-height td {
  height: auto;
}
.hl-simple-table.borderless {
  border: none;
}
.hl-simple-table.borderless th,
.hl-simple-table.borderless td {
  border: none;
}
.hl-simple-table.border-y {
  border: 1px solid #EFF2F5;
}
.hl-simple-table.border-y th,
.hl-simple-table.border-y td {
  border-right: 1px solid #EFF2F5;
  border-bottom: none;
}
.hl-simple-table.border-x {
  border: none;
}
.hl-simple-table.border-x th,
.hl-simple-table.border-x td {
  border-right: none;
  border-bottom: 1px solid #EFF2F5;
}
.hl-simple-table.bordered {
  border: 1px solid #EFF2F5;
}
.hl-simple-table.bordered th,
.hl-simple-table.bordered td {
  border-right: 1px solid #EFF2F5;
  border-bottom: 1px solid #EFF2F5;
}
.hl-simple-table.border-outline th,
.hl-simple-table.border-outline td {
  border-right: none;
  border-bottom: none;
}
.hl-simple-table.borderless-last > tbody > tr:last-child td {
  border-bottom: none;
}
.hl-simple-table.striped-even > tbody > tr:nth-child(even) td {
  background-color: #F6F9FB;
}
.hl-simple-table.striped-odd > tbody > tr:nth-child(odd) td {
  background-color: #F6F9FB;
}
.hl-simple-table.hover > tbody > tr:focus, .hl-simple-table.hover > tbody > tr:hover {
  background-color: #F6F9FB;
}
.hl-simple-table.hover > tbody > tr:focus td, .hl-simple-table.hover > tbody > tr:hover td {
  background: transparent;
}
.hl-simple-table.list {
  border-collapse: separate;
  border: none;
}
.hl-simple-table.list > thead tr,
.hl-simple-table.list > tfoot tr,
.hl-simple-table.list > tbody tr {
  border: 0;
}
.hl-simple-table.list > thead tr th,
.hl-simple-table.list > thead tr td,
.hl-simple-table.list > tfoot tr th,
.hl-simple-table.list > tfoot tr td,
.hl-simple-table.list > tbody tr th,
.hl-simple-table.list > tbody tr td {
  border: 0;
  background-color: transparent;
}
.hl-simple-table.list > thead tr th:first-child,
.hl-simple-table.list > thead tr td:first-child,
.hl-simple-table.list > tfoot tr th:first-child,
.hl-simple-table.list > tfoot tr td:first-child,
.hl-simple-table.list > tbody tr th:first-child,
.hl-simple-table.list > tbody tr td:first-child {
  border-left: 0;
  border-radius: 6px 0 0 6px;
}
.hl-simple-table.list > thead tr th:last-child,
.hl-simple-table.list > thead tr td:last-child,
.hl-simple-table.list > tfoot tr th:last-child,
.hl-simple-table.list > tfoot tr td:last-child,
.hl-simple-table.list > tbody tr th:last-child,
.hl-simple-table.list > tbody tr td:last-child {
  border-left: 0;
  border-radius: 0 6px 6px 0;
}
.hl-simple-table.list > tbody tr {
  background-color: #FFFFFF;
}
.hl-simple-table.list > thead tr,
.hl-simple-table.list > tfoot tr {
  background-color: #FFFFFF;
}
.hl-simple-table .fixed-left {
  position: sticky;
  left: var(--table-fixed-distance, 0);
  z-index: 10;
  background-color: #FFFFFF;
}
.hl-simple-table .fixed-left.show-shadow::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: -1px;
  width: 30px;
  transform: translate(100%, 0);
  box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.1);
}
.hl-simple-table .fixed-right {
  position: sticky;
  right: var(--table-fixed-distance, 0);
  z-index: 10;
  background-color: #FFFFFF;
}
.hl-simple-table .fixed-right.show-shadow::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: -1px;
  width: 30px;
  transform: translate(-100%, 0);
  box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.1);
}
.hl-simple-table .fixed-top {
  position: sticky;
  top: 0;
  z-index: 11;
}
.hl-simple-table .fixed-top::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #EFF2F5;
}
.hl-simple-table .fixed-top tr th {
  border: none;
}
.hl-simple-table .fixed-top th,
.hl-simple-table .fixed-top td {
  background-color: #FFFFFF;
}
.hl-simple-table .fixed-top.fixed-left {
  z-index: 12;
}
.hl-simple-table .fixed-top.fixed-right {
  z-index: 12;
}
.hl-simple-table .fixed-bottom {
  position: sticky;
  top: 0;
  z-index: 11;
}
.hl-simple-table .fixed-bottom th,
.hl-simple-table .fixed-bottom td {
  background-color: #FFFFFF;
}
.hl-simple-table.is-scrolling-none .fixed-left.show-shadow::before,
.hl-simple-table.is-scrolling-none .fixed-right.show-shadow::before {
  box-shadow: none;
}
.hl-simple-table.is-scrolling-left .fixed-left.show-shadow::before {
  box-shadow: none;
}
.hl-simple-table.is-scrolling-right .fixed-right.show-shadow::before {
  box-shadow: none;
}
.hl-simple-table tr th.fixed-right, .hl-simple-table tr th.fixed-left {
  background-color: #FFFFFF;
}
.table-scroll {
  overflow: auto;
}
.hl-panel {
  --panel-radius: 6px;
  --panel-header-height: 72px;
  --panel-padding: 24px;
  --panel-body-padding: var(--panel-padding);
  --panel-footer-padding: var(--panel-padding);
  --panel-fullscreen-top: 0;
  --panel-fullscreen-bottom: 0;
  --panel-fullscreen-left: 0;
  --panel-fullscreen-right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: var(--panel-radius);
  border: 1px solid #EFF2F5;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
}
.hl-panel:after {
  display: block;
  content: "";
  clear: both;
}
.hl-panel .panel-header {
  display: flex;
  align-items: center;
  height: var(--panel-header-height);
  padding: 0 var(--panel-padding);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  flex-shrink: 0;
  flex-grow: 0;
  border-top-right-radius: calc(var(--panel-radius) - 1px);
  border-top-left-radius: calc(var(--panel-radius) - 1px);
  border-bottom: 1px solid #EFF2F5;
}
.hl-panel .panel-header:only-child {
  border: none;
  border-bottom-right-radius: calc(var(--panel-radius) - 1px);
  border-bottom-left-radius: calc(var(--panel-radius) - 1px);
}
.hl-panel .panel-header.bottom {
  border-bottom-right-radius: calc(var(--panel-radius) - 1px);
  border-bottom-left-radius: calc(var(--panel-radius) - 1px);
  border-bottom: none;
  border-top: 1px solid #EFF2F5;
}
.hl-panel .panel-header .panel-title {
  font-size: 18px;
  color: #5E6278;
  flex-grow: 1;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.hl-panel .panel-header .panel-header-right {
  display: flex;
  align-items: center;
  flex-grow: unset;
  flex-shrink: 0;
}
.hl-panel .panel-header .panel-header-right .panel-close {
  width: 20px;
  height: 20px;
  color: #5E6278;
  font-size: 20px;
  padding: 2px;
  margin-left: 16px;
  margin-right: -4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: unset;
  border: none;
  background-color: transparent;
  transition: color 0.3s ease;
}
.hl-panel .panel-header .panel-header-right .panel-close .hl-icon {
  width: 100%;
  height: 100%;
}
.hl-panel .panel-header .panel-header-right .panel-close:hover {
  color: #5E6278;
}
.hl-panel .panel-header .panel-header-left {
  display: flex;
  align-items: center;
  flex-grow: unset;
  flex-shrink: 0;
  margin-right: 12px;
}
.hl-panel .panel-body {
  padding: var(--panel-body-padding);
}
.hl-panel .panel-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #EFF2F5;
  padding-left: var(--panel-padding);
  padding-right: var(--panel-padding);
  padding-top: var(--panel-footer-padding);
  padding-bottom: var(--panel-footer-padding);
  flex-shrink: 0;
  flex-grow: 0;
  border-bottom-right-radius: calc(var(--panel-radius) - 1px);
  border-bottom-left-radius: calc(var(--panel-radius) - 1px);
}
.hl-panel.float-header .panel-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.hl-panel.borderless {
  border: none;
}
.hl-panel.borderless > .panel-header {
  border-bottom: none;
}
.hl-panel.borderless > .panel-header + .panel-body {
  padding-top: 0;
}
.hl-panel.borderless > .panel-footer {
  padding-top: 0;
  border-top: none;
}
.hl-panel.outlineless {
  border: none;
}
.hl-panel.no-shadow {
  box-shadow: none;
}
.hl-panel.no-bg {
  background: none;
}
.hl-panel.fullscreen {
  position: fixed;
  top: var(--panel-fullscreen-top) !important;
  left: var(--panel-fullscreen-left) !important;
  right: var(--panel-fullscreen-right) !important;
  bottom: var(--panel-fullscreen-bottom) !important;
  width: auto !important;
  height: auto !important;
  z-index: 10000;
  border-radius: 0;
}
.hl-panel.fullscreen > .panel-title {
  border-radius: 0;
}
.hl-panel.fullscreen > .panel-body {
  flex-grow: 1;
  height: auto;
  overflow: auto;
}
.hl-panel.collapsed:not(.fullscreen) > .panel-body {
  display: none;
}
.hl-panel.collapsed:not(.fullscreen) > .panel-footer {
  display: none;
}
.hl-panel.inner-scroll {
  display: table;
  border-spacing: 0;
  width: 100%;
}
.hl-panel.inner-scroll .panel-body {
  display: table-row;
  height: 100%;
  padding: unset;
}
.hl-panel.inner-scroll .panel-body .hl-scrollbar {
  overflow: auto;
}
.hl-panel.inner-scroll .panel-body .hl-scrollbar .scrollbar-wrap {
  padding: var(--panel-body-padding);
}
.hl-row {
  --row-gap-x: 0;
  --row-gap-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--row-gap-x) * -0.5);
  margin-right: calc(var(--row-gap-x) * -0.5);
  row-gap: var(--row-gap-y);
}
.hl-row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: calc(var(--row-gap-x) * 0.5);
  padding-right: calc(var(--row-gap-x) * 0.5);
}
.hl-row > .col {
  flex-basis: 0;
  flex-grow: 1;
  width: auto;
}
.hl-row.top {
  align-items: flex-start;
}
.hl-row.middle {
  align-items: center;
}
.hl-row.bottom {
  align-items: flex-end;
}
.hl-row.left {
  justify-content: flex-start;
}
.hl-row.center {
  justify-content: center;
}
.hl-row.right {
  justify-content: flex-end;
}
.hl-row.around {
  justify-content: space-around;
}
.hl-row.between {
  justify-content: space-between;
}
.hl-row.flow {
  display: block;
  margin-left: 0;
  margin-right: 0;
  column-gap: var(--row-gap-x);
  row-gap: var(--row-gap-y);
}
.hl-row.flow > .col,
.hl-row.flow > [class^=col-] {
  padding: 0;
  page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: var(--row-gap-x);
}
.hl-row.grid {
  display: grid;
  margin-left: 0;
  margin-right: 0;
  column-gap: var(--row-gap-x);
  row-gap: var(--row-gap-y);
}
.hl-row.grid > .col,
.hl-row.grid > [class^=col-] {
  padding: 0;
}
.hl-row.grid-direction-vertical {
  grid-auto-flow: row;
}
.hl-row.grid-direction-horizontal {
  grid-auto-flow: column;
}
.hl-pagination {
  --pagination-gap: 16px;
  --pagination-pager-gap: 4px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  gap: var(--pagination-gap);
  line-height: 1;
}
.hl-pagination.block {
  display: flex;
}
.hl-pagination.full {
  width: 100%;
}
.hl-pagination.left {
  display: flex;
  justify-content: flex-start;
}
.hl-pagination.center {
  display: flex;
  justify-content: center;
}
.hl-pagination.right {
  display: flex;
  justify-content: flex-end;
}
.hl-pagination.around {
  display: flex;
  justify-content: space-around;
}
.hl-pagination.between {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .hl-pagination.responsive {
    justify-content: space-between;
  }
  .hl-pagination.responsive li:not(:first-child):not(:last-child):not(.active) {
    display: none;
  }
  .hl-pagination.responsive li.select {
    display: block;
  }
}
.hl-pagination ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  font-size: 0;
  flex-wrap: wrap;
  -webkit-text-size-adjust: none;
  list-style-type: none;
  flex-shrink: 0;
  flex-grow: unset;
  gap: var(--pagination-pager-gap);
}
.hl-pagination ul li {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  font-size: 14px;
  color: #5E6278;
  background-color: #F6F9FB;
  border-radius: 4px;
  border: 1px solid #F6F9FB;
  cursor: pointer;
  vertical-align: middle;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.hl-pagination ul li.is-active, .hl-pagination ul li:hover {
  z-index: 1;
}
.hl-pagination ul li:hover {
  color: #5E6278;
  border-color: #f4faff;
  background-color: #f4faff;
}
.hl-pagination ul li.is-active {
  color: #FFFFFF;
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-pagination ul li.is-active a {
  color: inherit;
}
.hl-pagination ul li.pagination-phase-next, .hl-pagination ul li.pagination-phase-prev {
  border: 0;
}
.hl-pagination ul li.pagination-phase-next .hl-icon, .hl-pagination ul li.pagination-phase-prev .hl-icon {
  width: 14px;
  height: 14px;
  pointer-events: none;
}
.hl-pagination ul li.pagination-phase-next:hover .icon-more {
  opacity: 0;
  visibility: hidden;
  transform: translate(100%, 0);
}
.hl-pagination ul li.pagination-phase-next:hover .icon-next {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-pagination ul li.pagination-phase-prev:hover .icon-more {
  opacity: 0;
  visibility: hidden;
  transform: translate(-100%, 0);
}
.hl-pagination ul li.pagination-phase-prev:hover .icon-prev {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-pagination ul li .icon-more {
  position: absolute;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease;
}
.hl-pagination ul li .icon-next,
.hl-pagination ul li .icon-prev {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}
.hl-pagination ul li .icon-next {
  transform: translate(-100%, 0);
}
.hl-pagination ul li .icon-prev {
  transform: translate(100%, 0);
}
.hl-pagination ul li.is-disabled {
  color: #B5B5C3 !important;
  border-color: #E8EBF8 !important;
  background-color: #F6F9FB !important;
  cursor: not-allowed;
}
.hl-pagination ul li.select {
  display: none;
}
.hl-pagination .hl-button {
  height: 36px;
  min-width: 36px;
}
.hl-pagination .hl-button.pagination-prev {
  padding: 0;
}
.hl-pagination .hl-button.pagination-next {
  padding: 0;
}
.hl-pagination .pagination-total {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-pagination .pagination-control {
  flex-shrink: 0;
  flex-grow: unset;
  width: 110px;
}
.hl-pagination .pagination-control .hl-input-select {
  width: 100%;
}
.hl-pagination .pagination-control .hl-input-select .hl-input {
  height: 36px;
}
.hl-pagination .pagination-goto {
  align-items: center;
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-pagination .pagination-goto .hl-input {
  width: 40px;
  margin: 0 8px;
}
.hl-pagination .pagination-goto .hl-input input {
  padding: 0 4px;
  text-align: center;
}
.hl-pagination .pagination-goto .hl-input input[type=number] {
  -moz-appearance: textfield;
}
.hl-pagination .pagination-goto .hl-input input[type=number]::-webkit-outer-spin-button, .hl-pagination .pagination-goto .hl-input input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.hl-pagination .pagination-box {
  margin: 0 8px;
}
.hl-pagination.line .hl-button:disabled {
  color: #B5B5C3 !important;
  border-color: none;
  background-color: transparent;
  cursor: not-allowed;
}
.hl-pagination.line .hl-button:active, .hl-pagination.line .hl-button:focus, .hl-pagination.line .hl-button:hover {
  background-color: inherit;
}
.hl-pagination.line ul li {
  border-radius: 0;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  margin-right: 0;
}
.hl-pagination.line ul li:hover {
  color: #5E6278;
}
.hl-pagination.line ul li.is-active {
  color: #40a9ff;
  background-color: inherit;
  border-color: #40a9ff;
}
.hl-pagination.line ul li.is-disabled {
  border-color: transparent !important;
}
.hl-pagination.line ul li.is-disabled:hover {
  border-color: transparent !important;
}
.hl-pagination.line .hl-button {
  border: none;
}
.hl-pagination.line .hl-input-select .hl-input {
  border: none;
}
.hl-dialog {
  position: fixed;
}
.hl-dialog .hl-panel {
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 12px 0 rgba(109, 131, 168, 0.05), 0 0 50px 0 rgba(193, 205, 225, 0.1);
}
.hl-dialog .hl-panel .panel-header {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-dialog .hl-panel .panel-body {
  max-height: 100%;
}
.hl-dialog .hl-panel .panel-footer {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-dialog.at-center {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow: auto;
}
.hl-dialog.at-center .hl-panel {
  position: relative;
  margin: 40px auto;
}
.hl-dialog.at-left {
  left: 0;
  top: 0;
  bottom: 0;
}
.hl-dialog.at-left .hl-panel[role=drawer] {
  border-radius: 0;
  height: 100%;
}
.hl-dialog.at-left .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-left .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-right {
  right: 0;
  top: 0;
  bottom: 0;
}
.hl-dialog.at-right .hl-panel[role=drawer] {
  border-radius: 0;
  height: 100%;
}
.hl-dialog.at-right .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-right .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-top {
  top: 0;
  left: 0;
  right: 0;
}
.hl-dialog.at-top .hl-panel[role=drawer] {
  border-radius: 0;
  width: 100% !important;
}
.hl-dialog.at-top .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-top .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-bottom {
  bottom: 0;
  left: 0;
  right: 0;
}
.hl-dialog.at-bottom .hl-panel[role=drawer] {
  border-radius: 0;
  width: 100% !important;
}
.hl-dialog.at-bottom .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-bottom .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-fullscreen {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.hl-dialog.at-fullscreen .hl-panel {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: auto !important;
  height: auto !important;
  transform: translate(0) !important;
}
.hl-dialog.at-fullscreen .hl-panel[role=drawer] {
  border-radius: 0;
}
.hl-dialog.at-fullscreen .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-fullscreen .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-message-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hl-message-box .hl-panel {
  min-width: 360px;
  box-shadow: 0 5px 12px 0 rgba(109, 131, 168, 0.05), 0 0 50px 0 rgba(193, 205, 225, 0.1);
}
.hl-message-box .hl-panel .panel-body {
  text-align: center;
}
.hl-message-box .hl-panel .panel-footer .hl-button {
  min-width: 80px;
  margin-right: 16px;
}
.hl-message-box .hl-panel .panel-footer .hl-button:last-child, .hl-message-box .hl-panel .panel-footer .hl-button:only-child {
  margin-right: 0;
}
.hl-thumb {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  flex-grow: 0;
}
.hl-thumb img {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: unset;
}
.hl-thumb > span {
  white-space: nowrap;
  line-height: 1;
  font-size: 16px;
  color: #FFFFFF;
}
.hl-thumb.full {
  width: 100%;
  height: 100%;
  display: flex;
}
.hl-thumb.full img {
  object-fit: unset;
}
.hl-thumb.radius {
  border-radius: 6px;
}
.hl-thumb.radius img {
  border-radius: inherit;
}
.hl-thumb.round {
  border-radius: 50%;
}
.hl-thumb.round img {
  border-radius: inherit;
}
.hl-thumb.bordered {
  box-sizing: content-box;
  border: 2px solid #FFFFFF;
}
.hl-thumb.bordered:hover {
  z-index: 1;
}
.hl-thumb .fill {
  object-fit: fill;
}
.hl-thumb .contain {
  object-fit: contain;
}
.hl-thumb .cover {
  object-fit: cover;
}
.hl-thumb .scale-down {
  object-fit: scale-down;
}
.hl-thumb .thumb-inner {
  vertical-align: top;
}
.hl-thumb .thumb-inner-center {
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
}
.hl-thumb .thumb-error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #A1A5B7;
}
.hl-thumb .thumb-preview {
  cursor: pointer;
}
.hl-image-viewer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.hl-image-viewer .image-viewer-btn {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  opacity: 0.8;
  cursor: pointer;
  user-select: none;
}
.hl-image-viewer .image-viewer-btn.close {
  top: 40px;
  right: 40px;
}
.hl-image-viewer .image-viewer-btn.close, .hl-image-viewer .image-viewer-btn.next, .hl-image-viewer .image-viewer-btn.prev {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #fff;
  background-color: rgba(33, 36, 53, 0.8);
}
.hl-image-viewer .image-viewer-btn.prev {
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
}
.hl-image-viewer .image-viewer-btn.next {
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  text-indent: 2px;
}
.hl-image-viewer .image-viewer-canvas {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hl-image-viewer .image-viewer-canvas img {
  display: unset;
  max-width: unset;
  width: unset;
  height: unset;
  object-fit: unset;
}
.hl-image-viewer .image-viewer-tools {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  border-radius: 12px;
  left: 50%;
  bottom: 32px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transform: translateX(-50%);
  background-color: rgba(33, 36, 53, 0.8);
  width: 300px;
}
.hl-image-viewer .image-viewer-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(33, 36, 53, 0.8);
}
.viewer-fade-enter-active {
  animation: viewer-fade-in 0.3s;
}
.viewer-fade-leave-active {
  animation: viewer-fade-out 0.3s;
}
@keyframes viewer-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes viewer-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
.hl-progress-title .progress-number {
  position: absolute;
  right: 0;
}
.hl-progress {
  position: relative;
  display: flex;
  width: 100%;
  --progress-gap: 8px;
  --progress-bar-color: #40a9ff;
  --progress-track-color: #EFF2F5;
}
.hl-progress.left .progress-wrap {
  justify-content: flex-start;
}
.hl-progress.center .progress-wrap {
  justify-content: center;
}
.hl-progress.right .progress-wrap {
  justify-content: flex-end;
}
.hl-progress.block {
  display: flex;
}
.hl-progress .progress-wrap {
  display: flex;
  width: 100%;
  background-color: var(--progress-track-color);
  border-radius: 4px;
  font-size: 12px;
  line-height: 1;
}
.hl-progress .progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0%;
  height: var(--progress-height, 16px);
  font-size: inherit;
  line-height: inherit;
  color: #FFFFFF;
  text-align: center;
  background-color: var(--progress-bar-color);
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
  white-space: nowrap;
  transition: width 0.6s ease, background-color 0.6s ease;
}
.hl-progress .progress-bar:only-child {
  border-radius: 4px;
}
.hl-progress .progress-bar:not(:only-child):first-child {
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.hl-progress .progress-bar:not(:only-child):last-child {
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.hl-progress .progress-bar .progress-label {
  line-height: 1;
}
.hl-progress .progress-bar.striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.hl-progress .progress-bar.striped.is-active {
  animation: progress-bar-stripes 2s linear infinite;
}
.hl-progress .progress-bar.indicating.is-active {
  position: relative;
  animation: none;
}
.hl-progress .progress-bar.indicating.is-active:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  background-color: #fff;
  border-radius: inherit;
  opacity: 0;
  animation: progress-active 3s ease 0s infinite;
}
.hl-progress .progress-bar.disabled {
  background-color: #B5B5C3;
}
.hl-progress.round .progress-wrap {
  border-radius: 100px;
}
.hl-progress.round .progress-wrap .progress-bar:only-child {
  border-radius: 100px;
}
.hl-progress.round .progress-wrap .progress-bar:not(:only-child):first-child {
  border-radius: 100px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.hl-progress.round .progress-wrap .progress-bar:not(:only-child):last-child {
  border-radius: 100px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.hl-progress.line {
  flex-direction: column;
  gap: var(--progress-gap);
}
.hl-progress.line .progress-wrap {
  font-size: 12px;
}
.hl-progress.line .progress-bar {
  height: var(--progress-height, 4px);
}
.hl-progress.line .progress-content {
  display: flex;
  justify-content: space-between;
}
.hl-progress.line .progress-percentage,
.hl-progress.line .progress-label {
  display: flex;
  align-items: center;
  color: #5E6278;
  font-size: 12px;
}
.hl-progress.line .progress-label {
  display: flex;
}
.hl-progress.line.change-places .progress-percentage {
  order: 100;
}
.hl-progress.dashboard, .hl-progress.circle {
  display: inline-flex;
  width: 128px;
  height: 128px;
}
.hl-progress.dashboard .progress-content, .hl-progress.circle .progress-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: currentColor;
}
.hl-progress.dashboard .progress-content .progress-label, .hl-progress.circle .progress-content .progress-label {
  display: flex;
}
.hl-progress.dashboard .progress-content .progress-percentage, .hl-progress.circle .progress-content .progress-percentage {
  display: flex;
  font-size: 18px;
}
.hl-progress.dashboard .progress-circle, .hl-progress.circle .progress-circle {
  width: 100%;
  height: 100%;
}
.hl-progress.dashboard .progress-circle svg, .hl-progress.circle .progress-circle svg {
  width: 100%;
  height: 100%;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-track, .hl-progress.circle .progress-circle svg .progress-circle-track {
  stroke: var(--progress-track-color);
  stroke-width: var(--progress-height, 8px);
}
.hl-progress.dashboard .progress-circle svg .progress-circle-path, .hl-progress.circle .progress-circle svg .progress-circle-path {
  stroke: var(--progress-bar-color);
  stroke-width: var(--progress-height, 8px);
}
.hl-progress.no-label {
  margin-top: 0;
}
.hl-progress.no-label .progress-percentage,
.hl-progress.no-label .progress-label,
.hl-progress.no-label .progress-content .progress-percentage,
.hl-progress.no-label .progress-content .progress-label {
  display: none;
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-active {
  0% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
.hl-dropdown {
  display: inline-block;
  position: relative;
}
.hl-dropdown .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 8px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.hl-dropdown-popper {
  position: absolute;
  min-width: 100px;
  z-index: 2000;
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.hl-dropdown-popper .hl-dropdown-menu {
  margin: 0;
  padding: 12px 0;
  list-style-type: none;
}
.hl-dropdown-popper .hl-dropdown-menu li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #5E6278;
  font-size: 14px;
  padding: 4px 24px;
  min-height: 36px;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-dropdown-popper .hl-dropdown-menu li > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hl-dropdown-popper .hl-dropdown-menu li .hl-icon {
  color: #5E6278;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.hl-dropdown-popper .hl-dropdown-menu li.hover, .hl-dropdown-popper .hl-dropdown-menu li:hover {
  color: #009EF7;
  background-color: #F6F9FB;
}
.hl-dropdown-popper .hl-dropdown-menu li.hover .hl-icon, .hl-dropdown-popper .hl-dropdown-menu li:hover .hl-icon {
  color: #009EF7;
}
.hl-dropdown-popper .hl-dropdown-menu li.menu-divider {
  height: 1px;
  min-height: 1px;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
  border-top: 1px solid #EFF2F5;
  pointer-events: none;
}
.hl-dropdown-popper .hl-dropdown-menu li.is-selected {
  padding-right: 48px;
  color: #009EF7;
}
.hl-dropdown-popper .hl-dropdown-menu li.is-selected::before {
  content: "\\e6ad";
  position: absolute;
  right: 16px;
  font-family: system-icon;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hl-dropdown-popper .hl-dropdown-menu li.is-disabled {
  color: #B5B5C3;
  cursor: not-allowed;
}
.hl-scrollbar {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.hl-scrollbar:active .scrollbar-bar, .hl-scrollbar:focus .scrollbar-bar, .hl-scrollbar:hover .scrollbar-bar {
  opacity: 1;
}
.hl-scrollbar .scrollbar-wrap {
  overflow: auto;
  height: 100%;
}
.hl-scrollbar .scrollbar-wrap-hidden {
  scrollbar-width: none;
}
.hl-scrollbar .scrollbar-wrap-hidden::-webkit-scrollbar {
  display: none;
}
.hl-scrollbar .scrollbar-bar {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1000;
  border-radius: 100px;
  background-color: none;
  transition: all 0.4s ease;
}
.hl-scrollbar .scrollbar-bar.is-vertical {
  width: 4px;
  top: 0;
}
.hl-scrollbar .scrollbar-bar.is-vertical div {
  width: 100%;
}
.hl-scrollbar .scrollbar-bar.is-horizontal {
  height: 4px;
  left: 0;
}
.hl-scrollbar .scrollbar-bar.is-horizontal div {
  height: 100%;
}
.hl-scrollbar .scrollbar-bar .scrollbar-thumb {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.4s background-color;
}
.hl-scrollbar .scrollbar-bar .scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.hl-scrollbar .scrollbar-bar .scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.5);
}
.hl-loading-parent--relative {
  position: relative !important;
}
.loading-parent-hidden {
  overflow: hidden !important;
}
.hl-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s ease;
}
.hl-loading-mask.is-fullscreen {
  position: fixed;
}
.hl-loading-mask.is-fullscreen .loading-spinner {
  margin-top: -25px;
}
.hl-loading-mask.is-fullscreen .loading-spinner .circular {
  height: 50px;
  width: 50px;
}
.hl-loading-mask .loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
.hl-loading-mask .loading-spinner .loading-text {
  color: #409EFF;
  margin: 3px 0;
  font-size: 14px;
}
.hl-loading-mask .loading-spinner .circular {
  height: 42px;
  width: 42px;
  -webkit-animation: loading-rotate-anim 2s linear infinite;
  animation: loading-rotate-anim 2s linear infinite;
}
.hl-loading-mask .loading-spinner .path {
  -webkit-animation: loading-dash-anim 1.5s ease-in-out infinite;
  animation: loading-dash-anim 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409EFF;
  stroke-linecap: round;
}
.hl-loading-mask .loading-spinner i {
  color: #409EFF;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
@-webkit-keyframes loading-rotate-anim {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading-rotate-anim {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loading-dash-anim {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes loading-dash-anim {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
.hl-spinner {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  vertical-align: middle;
  --spinner-width: 24px;
  --spinner-height: 24px;
  --spinner-duration: 2s;
  --spinner-color: $pageFontColor;
  width: var(--spinner-width);
  height: var(--spinner-height);
  color: var(--spinner-color);
}
.hl-spinner.around-right .spinner-wrap {
  animation: spinner-rotate var(--spinner-duration) linear infinite;
}
.hl-spinner.around-left .spinner-wrap {
  animation: spinner-rotate var(--spinner-duration) linear infinite;
  animation-direction: reverse;
}
.hl-spinner.none .spinner-wrap {
  animation: unset;
}
.hl-spinner.is-finish {
  animation: unset;
}
.hl-spinner.is-finish .spinner-wrap {
  animation: spinner-rotate 2s linear infinite;
  visibility: hidden;
  opacity: 0;
}
.hl-spinner.is-finish .show-result {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.hl-spinner .spinner-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  text-align: center;
  transition: 0.3s;
}
.hl-spinner .spinner-wrap .hl-icon {
  width: 100%;
  height: 100%;
}
.hl-spinner .show-result {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 100%;
  visibility: hidden;
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.6s, visibility 0.6s;
}
.hl-spinner svg {
  width: 100%;
  height: 100%;
  display: block;
}
.hl-spinner .tail circle {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 90 120;
  stroke-dashoffset: 0;
  stroke-width: 4px;
  stroke-linecap: round;
  animation: icon-loading-dash 1.5s ease-in-out infinite;
}
@keyframes icon-loading-dash {
  0% {
    stroke-dasharray: 1 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes spinner-rotate {
  to {
    transform: rotate(1turn);
  }
}
.hl-popover {
  position: absolute;
  width: auto;
  z-index: 2000;
  padding: 16px;
  background-color: #FFFFFF;
  box-shadow: 0 0 30px 0 rgba(109, 131, 168, 0.15);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
  word-break: break-all;
}
.hl-popover.no-style {
  padding: unset;
  background-color: unset;
  box-shadow: unset;
  border-radius: unset;
  border: unset;
}
.hl-popover.tooltip {
  font-size: 12px;
  padding: 4px 12px;
}
.hl-popover.dark {
  background-color: #212435;
  color: #FFFFFF;
  border: none;
}
.hl-popover.dark .popper-arrow::before {
  border-color: #212435;
  background-color: #212435;
}
.hl-popover .popover-title {
  color: currentColor;
  margin-bottom: 4px;
}
.hl-popover p {
  margin-bottom: 0;
}
.hl-popover .popper-arrow {
  width: 10px;
  height: 10px;
  z-index: 1;
}
.hl-popover .popper-arrow::before {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: -1;
  content: " ";
  transform: rotate(45deg);
  background: #FFFFFF;
  box-sizing: border-box;
  border: 1px solid #EFF2F5;
  right: 0;
}
.hl-popover[data-popper-placement^=top] .popper-arrow {
  bottom: -5px;
}
.hl-popover[data-popper-placement^=top] .popper-arrow::before {
  border-top-color: transparent;
  border-left-color: transparent;
}
.hl-popover[data-popper-placement^=bottom] .popper-arrow {
  top: -5px;
}
.hl-popover[data-popper-placement^=bottom] .popper-arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.hl-popover[data-popper-placement^=right] .popper-arrow {
  left: -5px;
}
.hl-popover[data-popper-placement^=right] .popper-arrow::before {
  border-top-color: transparent;
  border-right-color: transparent;
}
.hl-popover[data-popper-placement^=left] .popper-arrow {
  right: -5px;
}
.hl-popover[data-popper-placement^=left] .popper-arrow::before {
  border-top-color: transparent;
  border-right-color: transparent;
}
.hl-autocomplete {
  position: relative;
  display: inline-block;
}
.hl-autocomplete.block {
  display: block;
  width: 100%;
}
.hl-autocomplete.block .hl-input {
  width: 100%;
}
.hl-autocomplete-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-autocomplete-popper .autocomplete-dropdown {
  padding: 12px 0;
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: #5E6278;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li:hover {
  background-color: transparent !important;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li .hl-icon {
  width: 24px;
  height: 24px;
}
.hl-autocomplete-popper .autocomplete-dropdown-wrap {
  max-height: 300px;
}
.hl-autocomplete-popper .autocomplete-dropdown-list {
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 24px;
  min-height: 36px;
  color: #5E6278;
  font-size: 14px;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li .hl-spinner {
  color: #5E6278;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li .hl-icon {
  color: #5E6278;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li:focus, .hl-autocomplete-popper .autocomplete-dropdown-list li.hover, .hl-autocomplete-popper .autocomplete-dropdown-list li:hover {
  color: #009EF7;
  background-color: #F6F9FB;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li:focus .hl-icon, .hl-autocomplete-popper .autocomplete-dropdown-list li.hover .hl-icon, .hl-autocomplete-popper .autocomplete-dropdown-list li:hover .hl-icon {
  color: #009EF7;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li.is-disabled {
  color: #B5B5C3;
  cursor: not-allowed;
}
.hl-tag {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 2px 12px;
  font-size: 14px;
  color: #5E6278;
  border-radius: 4px;
  background-color: #ebf2f6;
  border: 1px solid #EFF2F5;
  white-space: nowrap;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hl-tag:only-child {
  margin: 0;
}
.hl-tag.is-focus {
  box-shadow: 0 0 0 1px #c8dae7;
}
.hl-tag.outline {
  background-color: transparent;
  background-image: none;
  border-color: #EFF2F5;
}
.hl-tag.round {
  border-radius: 100px;
}
.hl-tag span {
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.hl-tag .tag-close {
  display: flex;
  margin-left: 4px;
  cursor: pointer;
  width: 14px;
  height: 14px;
  flex-grow: 0;
  flex-shrink: 0;
  opacity: 0.6;
  margin-right: -3px;
}
.hl-tag .tag-close:hover {
  opacity: 1;
}
.hl-date-input .range-input {
  display: flex;
  align-items: center;
  width: 100%;
}
.hl-date-input .range-input input {
  width: 100%;
  border: none;
  text-align: center;
  flex-grow: 1;
  background-color: transparent;
  color: currentColor;
  font-size: inherit;
}
.hl-date-input .range-input .range-separator {
  font-family: sans-serif;
  display: block;
  padding: 0 8px;
  flex-grow: 1;
}
.hl-date-input .range-input .hl-icon.close {
  cursor: pointer;
}
.hl-date-input .range-input .hl-icon.close:hover {
  color: #009EF7;
}
.hl-date-input.date.thin input, .hl-date-input.time.thin input {
  padding: 6px 12px !important;
}
.hl-date-picker {
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.hl-date-picker .picker-wrapper {
  position: relative;
  display: flex;
}
.hl-date-picker .picker-sidebar {
  border-right: 1px solid #EFF2F5;
  padding: 24px;
}
.hl-date-picker .picker-sidebar .hl-button {
  width: 100%;
  display: flex;
}
.hl-date-picker .picker-body {
  padding: 24px;
}
.hl-date-picker .picker-body .picker-time-header {
  margin-bottom: 16px;
}
.hl-date-picker .picker-body .picker-time-header .group-item {
  width: 0px;
}
.hl-date-picker .picker-body .picker-time-header .hl-input {
  display: flex;
}
.hl-date-picker .picker-body .picker-time-header .hl-input {
  text-align: center;
}
.hl-date-picker .picker-body .picker-time-header .hl-time-picker {
  position: absolute;
  z-index: 1;
}
.hl-date-picker .picker-body .picker-body-header-wrapper {
  display: flex;
}
.hl-date-picker .picker-body .picker-body-header-wrapper .range-separator {
  padding: 0 8px;
  border: none;
  background-color: transparent;
}
.hl-date-picker .picker-body .picker-body-header-wrapper .range-separator::before {
  font-family: sans-serif;
  content: "-";
  color: currentColor;
}
.hl-date-picker .picker-body .picker-body-header {
  margin-bottom: 16px;
}
.hl-date-picker .picker-body .picker-body-header .group-item.static {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 56px;
}
.hl-date-picker .picker-body .picker-body-header .group-item.static:last-child {
  justify-content: flex-end;
}
.hl-date-picker .picker-body .picker-body-header .hl-button {
  padding: 0 4px;
  height: 28px;
  border: none;
  background: none;
  box-shadow: none;
  color: #5E6278;
  font-size: 14px;
}
.hl-date-picker .picker-body .picker-body-header .hl-button:hover {
  color: #40a9ff;
}
.hl-date-picker .picker-body .picker-body-header .hl-button:disabled, .hl-date-picker .picker-body .picker-body-header .hl-button.is-disabled {
  cursor: not-allowed;
  background-color: transparent;
  color: #B5B5C3;
}
.hl-date-picker .picker-body .picker-body-header .header-label {
  padding: 0;
  display: flex;
  justify-content: center;
}
.hl-date-picker .picker-body .picker-body-header .header-label .hl-button {
  background-color: transparent;
}
.hl-date-picker .picker-body .picker-body-header .header-label .hl-button:focus, .hl-date-picker .picker-body .picker-body-header .header-label .hl-button:hover {
  color: #40a9ff;
}
.hl-date-picker .picker-body .picker-body-content.is-left {
  float: left;
  margin-right: 24px;
}
.hl-date-picker .picker-body .picker-body-content.is-right {
  float: right;
}
.hl-date-picker .picker-body .picker-body-content .picker-table {
  table-layout: fixed;
  font-size: 13px;
  user-select: none;
  border-spacing: 0;
  border-collapse: collapse;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td {
  color: #5E6278;
  border-radius: 0;
  background-color: #F6F9FB;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td.today, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td.today {
  color: #5E6278;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td:first-child, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td:last-child, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td.start-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td.end-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.month-table tbody td, .hl-date-picker .picker-body .picker-body-content .picker-table.year-table tbody td {
  height: 56px;
  width: 56px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody th,
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td {
  position: relative;
  width: 32px;
  height: 32px;
  padding: 0;
  text-align: center;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td {
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td:hover {
  color: #40a9ff;
  background-color: #F6F9FB;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  height: 100%;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.today {
  background-color: #f4faff;
  color: #40a9ff;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.today::before {
  content: "";
  position: absolute;
  bottom: 4px;
  right: 4px;
  display: block;
  border-style: solid;
  border-width: 4px;
  border-color: #40a9ff;
  border-left-color: transparent;
  border-top-color: transparent;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.prev-month, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.next-month {
  color: #B5B5C3;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.prev-month:hover, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.next-month:hover {
  color: #B5B5C3;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range {
  border-radius: 0;
  background-color: #F6F9FB;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.today {
  color: #5E6278;
  background-color: #F6F9FB;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.today::before {
  border-color: transparent #40a9ff #40a9ff transparent;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.start-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.end-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.selected, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.current {
  background-color: #40a9ff;
  color: #FFFFFF !important;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.selected:hover, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.current:hover {
  color: #FFFFFF;
  background-color: rgba(64, 169, 255, 0.8);
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td:disabled, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.disabled {
  cursor: not-allowed;
  background-color: transparent;
  color: #B5B5C3;
}
.hl-date-picker .picker-footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #EFF2F5;
}
.hl-date-picker .picker-footer .hl-button:last-child {
  margin-left: 12px;
}
.hl-time-picker {
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.hl-time-picker .picker-header {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.hl-time-picker .picker-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 12px;
}
.hl-time-picker .picker-cell.is-left {
  float: left;
  margin-right: 24px;
}
.hl-time-picker .picker-cell.is-right {
  float: right;
}
.hl-time-picker .picker-content {
  position: relative;
  width: 200px;
}
.hl-time-picker .picker-content::before {
  content: "";
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  height: 32px;
  z-index: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  background-color: #F6F9FB;
}
.hl-time-picker .picker-content .time-spinner {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.hl-time-picker .picker-content .spinner-wrapper {
  max-height: 160px;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
  position: relative;
  flex-grow: 1;
  border-right: 1px solid #EFF2F5;
}
.hl-time-picker .picker-content .spinner-wrapper:last-child {
  border: none;
}
.hl-time-picker .picker-content .spinner-wrapper.is-arrow .spinner-list {
  transform: translateY(-32px);
}
.hl-time-picker .picker-content .spinner-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.hl-time-picker .picker-content .spinner-list::before {
  content: "";
  display: block;
  width: 100%;
  height: 64px;
}
.hl-time-picker .picker-content .spinner-list::after {
  content: "";
  display: block;
  width: 100%;
  height: 64px;
}
.hl-time-picker .picker-content .spinner-list .spinner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  color: #5E6278;
}
.hl-time-picker .picker-content .spinner-list .disabled {
  color: #B5B5C3;
}
.hl-time-picker .picker-content .spinner-arrow {
  position: absolute;
  width: 100%;
  height: 32px;
  border: none;
  z-index: 1;
}
.hl-time-picker .picker-content .spinner-arrow:active, .hl-time-picker .picker-content .spinner-arrow:focus {
  background-color: transparent;
}
.hl-time-picker .picker-content .spinner-arrow.up {
  top: 0;
  bottom: auto;
}
.hl-time-picker .picker-content .spinner-arrow.down {
  bottom: 0;
  top: auto;
}
.hl-time-picker .picker-footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #EFF2F5;
}
.hl-time-picker .picker-footer .hl-button:last-child {
  margin-left: 12px;
}
.hl-datepicker-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-tree {
  --tree-gap: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.hl-tree.is-dragging .tree-node-content {
  cursor: move;
}
.hl-tree.is-dragging .tree-node-content * {
  pointer-events: none;
}
.hl-tree.is-dragging.is-drop-not-allow .tree-node-content {
  cursor: not-allowed;
}
.hl-tree.highlight-current .tree-node.is-current > .tree-node-content {
  background-color: #F6F9FB;
}
.tree-empty-block {
  position: relative;
  min-height: 80px;
  text-align: center;
  width: 100%;
  height: 100%;
}
.tree-empty-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #A1A5B7;
  font-size: 14px;
}
.tree-drop-indicator {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #40a9ff;
}
.tree-drop-indicator::before {
  content: "";
  position: absolute;
  left: -10px;
  top: -4px;
  width: 10px;
  height: 10px;
  border: 2px solid #40a9ff;
  border-radius: 100px;
}
.tree-node {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: 100%;
  outline: 0;
}
.tree-node.is-drop-inner > .tree-node-content {
  position: relative;
}
.tree-node.is-drop-inner > .tree-node-content .tree-node-label::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: 4px;
  border: 1px dashed #40a9ff;
  background-color: rgba(64, 169, 255, 0.08);
}
.tree-node .tree-node-children {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.tree-node .tree-node-children .tree-node .tree-node-content {
  color: #5E6278;
  background-color: #FFFFFF;
}
.tree-node .tree-node-children .tree-node .tree-node-content:hover {
  color: #5E6278;
  background-color: #F6F9FB;
}
.tree-node.is-expanded > .tree-node-children {
  display: block;
}
.tree-node-content {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  color: #5E6278;
  background-color: #FFFFFF;
  margin-bottom: var(--tree-gap);
  transition: background-color 0.15s ease;
}
.tree-node-content:hover {
  color: #5E6278;
  background-color: #F6F9FB;
}
.tree-node-content > label.hl-checkbox {
  margin-right: 8px;
}
.tree-node-content .tree-node-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #5E6278;
  font-size: 14px;
  padding: 7px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  flex-grow: unset;
  transform: rotate(0);
  transition: all 0.3s ease;
}
.tree-node-content .tree-node-arrow .hl-icon {
  width: 14px;
  height: 14px;
}
.tree-node-content .tree-node-arrow.expanded {
  transform: rotate(90deg);
}
.tree-node-content .tree-node-arrow.is-leaf {
  color: transparent;
  cursor: default;
}
.tree-node-content .tree-node-icon {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  margin: 0 12px 0 4px;
}
.tree-node-content .tree-node-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.tree-node-content .tree-node-loading-icon {
  margin-right: 8px;
  width: 18px;
  height: 18px;
}
.tree-node-content .tree-node-label {
  font-size: 14px;
}
.hl-alert {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 6px;
  background-color: #FFFFFF;
  border: 1px solid #EFF2F5;
  color: #5E6278;
  font-size: 14px;
  transition: opacity 0.3s ease;
}
.hl-alert.dashed {
  border-width: 1px;
  border-style: dashed;
}
.hl-alert.has-description {
  align-items: flex-start;
  padding: 16px;
}
.hl-alert.has-description .alert-content {
  width: 100%;
}
.hl-alert.has-description .alert-content .title {
  font-weight: 500;
  margin-bottom: 4px;
}
.hl-alert .alert-icon {
  color: currentColor;
  margin-right: 12px;
  flex-shrink: 0;
  flex-grow: unset;
  width: 20px;
  height: 20px;
}
.hl-alert .alert-content {
  width: 100%;
}
.hl-alert .alert-content .title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.hl-alert .alert-customed {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-alert .alert-close {
  width: 18px;
  height: 18px;
  padding: 2px;
  margin-left: 16px;
  margin-right: -4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: unset;
}
.alert-fade-enter,
.alert-fade-leave-active {
  opacity: 0;
}
.hl-carousel {
  position: relative;
}
.hl-carousel .carousel-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.hl-carousel .carousel-container .carousel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.hl-carousel .carousel-container .carousel-arrow.hover {
  background-color: rgba(31, 45, 61, 0.23);
}
.hl-carousel .carousel-container .carousel-arrow .hl-icon {
  width: 14px;
  height: 14px;
}
.hl-carousel .carousel-container .carousel-arrow.left {
  left: 16px;
}
.hl-carousel .carousel-container .carousel-arrow.right {
  right: 16px;
}
.hl-carousel .carousel-indicators {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.hl-carousel .carousel-indicators .carousel-indicator {
  background-color: transparent;
  cursor: pointer;
}
.hl-carousel .carousel-indicators .carousel-indicator.hover button {
  opacity: 0.72;
}
.hl-carousel .carousel-indicators .carousel-indicator.is-active button {
  opacity: 1;
}
.hl-carousel .carousel-indicators .carousel-indicator .carousel-dot {
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  height: 8px;
  width: 8px;
  border: none;
  opacity: 0.72;
}
.hl-carousel .carousel-indicators .carousel-indicator .carousel-button {
  display: block;
  opacity: 0.48;
  width: 20px;
  height: 2px;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-carousel .carousel-indicators .carousel-indicator-horizontal {
  display: inline-block;
  padding: 12px 4px;
}
.hl-carousel .carousel-indicators .carousel-indicator-vertical {
  padding: 4px 12px;
}
.hl-carousel .carousel-indicators .carousel-indicator-vertical .carousel-button {
  width: 2px;
  height: 15px;
}
.hl-carousel .carousel-indicators-horizontal {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.hl-carousel .carousel-indicators-vertical {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hl-carousel .carousel-indicators-outside {
  bottom: 26px;
  text-align: center;
  position: static;
  transform: none;
}
.hl-carousel .carousel-indicators-outside button {
  background-color: #c0c4cc;
  opacity: 0.24;
}
.hl-carousel .carousel-indicators-outside .carousel-indicator.hover button {
  opacity: 0.64;
}
.hl-carousel .carousel-indicators-labels {
  left: 0;
  right: 0;
  transform: none;
  text-align: center;
}
.hl-carousel .carousel-indicators-labels .carousel-indicator {
  padding: 6px 4px;
}
.hl-carousel .carousel-indicators-labels .carousel-button {
  height: auto;
  width: auto;
  padding: 2px 18px;
  font-size: 12px;
}
.carousel-horizontal {
  overflow-x: hidden;
}
.carousel-vertical {
  overflow-y: hidden;
}
.carousel-arrow-left-enter,
.carousel-arrow-left-leave-active {
  transform: translateY(-50%) translateX(-10px);
  opacity: 0;
}
.carousel-arrow-right-enter,
.carousel-arrow-right-leave-active {
  transform: translateY(-50%) translateX(10px);
  opacity: 0;
}
.hl-carousel-item {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}
.hl-carousel-item.is-active {
  z-index: 2;
}
.hl-carousel-item.is-animating {
  -webkit-transition: -webkit-transform 0.4s ease-in-out;
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
}
.hl-carousel-item,
.carousel-mask {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
}
.carousel-mask {
  width: 100%;
  background-color: #fff;
  opacity: 0.24;
  transition: all 0.3s 0.2s;
}
.carousel-item-card {
  width: 50%;
  transition: all 0.4s ease-in-out;
}
.carousel-item-card.is-in-stage {
  cursor: pointer;
  z-index: 1;
}
.carousel-item-card.is-active {
  z-index: 2;
}
.carousel-item-card.is-in-stage.is-hover .carousel-mask,
.carousel-item-card.is-in-stage:hover .carousel-mask {
  opacity: 0.12;
}
.hl-message {
  position: fixed;
  left: 50%;
  top: 24px;
  transform: translateX(-50%);
  min-width: 400px;
  color: #5E6278;
  border: 1px solid #EFF2F5;
  background-color: #FFFFFF;
  box-shadow: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.hl-message .panel-header {
  background-color: transparent;
  padding: 12px 16px;
  height: auto;
  border-radius: 0;
}
.hl-message .panel-header .panel-header-left .hl-icon {
  width: 20px;
  height: 20px;
  color: currentColor;
}
.hl-message .panel-header .panel-title {
  font-size: 14px;
  display: block;
  color: inherit;
}
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.hl-notification {
  position: fixed;
  width: 330px;
  background-color: #FFFFFF;
  border: 1px solid #EFF2F5;
  transition: opacity 0.4s ease, transform 0.4s ease, left 0.4s ease, right 0.4s ease, top 0.4s ease, bottom 0.4s ease;
  box-shadow: 0 0 30px 0 rgba(109, 131, 168, 0.15);
  z-index: 4000;
  border-radius: 6px;
}
.hl-notification.hl-panel {
  box-shadow: 0 5px 12px 0 rgba(109, 131, 168, 0.05), 0 0 50px 0 rgba(193, 205, 225, 0.1);
}
.hl-notification.hl-panel .panel-header {
  height: 48px;
  padding: 0 24px;
}
.hl-notification.hl-panel .panel-header .panel-title {
  font-size: 16px;
  font-weight: 500;
}
.hl-notification.at-top-right {
  right: 16px;
}
.hl-notification.at-top-left {
  left: 16px;
}
.hl-notification.at-bottom-left {
  left: 16px;
}
.hl-notification.at-bottom-right {
  right: 16px;
}
.notification-fade-enter-from,
.notification-fade-leave-to {
  opacity: 0;
}
.notification-fade-enter-from.at-top-left,
.notification-fade-leave-to.at-top-left {
  left: 0;
  transform: translateX(-100%);
}
.notification-fade-enter-from.at-top-right,
.notification-fade-leave-to.at-top-right {
  right: 0;
  transform: translateX(100%);
}
.notification-fade-enter-from.at-bottom-left,
.notification-fade-leave-to.at-bottom-left {
  left: 0;
  transform: translateX(-100%);
}
.notification-fade-enter-from.at-bottom-right,
.notification-fade-leave-to.at-bottom-right {
  right: 0;
  transform: translateX(100%);
}
.hl-tabs {
  --tabs-nav-height: 40px;
  --tabs-pane-height: auto;
  --tabs-nav-padding: 16px;
}
.hl-tabs .tabs-header {
  position: relative;
}
.hl-tabs .tabs-header::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #EFF2F5;
  z-index: 1;
}
.hl-tabs .is-scrollable {
  padding: 0 24px;
}
.hl-tabs .tabs-wrap {
  position: relative;
  overflow: hidden;
  height: inherit;
}
.hl-tabs .tabs-wrap .next,
.hl-tabs .tabs-wrap .prev {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  padding: 0 4px;
  color: #5E6278;
  height: var(--tabs-nav-height);
}
.hl-tabs .tabs-wrap .next .hl-icon,
.hl-tabs .tabs-wrap .prev .hl-icon {
  width: 14px;
  height: size 14px;
}
.hl-tabs .tabs-wrap .prev {
  left: 0;
}
.hl-tabs .tabs-wrap .next {
  right: 0;
}
.hl-tabs .tabs-scroll {
  overflow: hidden;
}
.hl-tabs .tabs-nav {
  white-space: nowrap;
  position: relative;
  transition: transform 0.3s ease;
  float: left;
  z-index: 2;
  height: inherit;
}
.hl-tabs .tabs-active-bar {
  position: absolute;
  background-color: #40a9ff;
  z-index: 3;
  transition: all 0.2s ease;
}
.hl-tabs .tabs-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--tabs-nav-padding);
  padding-right: var(--tabs-nav-padding);
  height: var(--tabs-nav-height);
  color: #5E6278;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #EFF2F5;
  background-color: #FFFFFF;
  vertical-align: middle;
  cursor: pointer;
}
.hl-tabs .tabs-item.is-active {
  color: #009EF7;
}
.hl-tabs .tabs-item:hover {
  color: #009EF7;
}
.hl-tabs .tabs-item .tab-close {
  display: flex;
  padding: 4px;
  margin-left: 4px;
  margin-right: -4px;
  font-size: 14px;
  color: #A1A5B7;
  opacity: 0.6;
  cursor: pointer;
}
.hl-tabs .tabs-item .tab-close .hl-icon {
  width: 100%;
  height: 100%;
}
.hl-tabs .tabs-item .tab-close:hover {
  opacity: 1;
}
.hl-tabs .tab-new {
  float: right;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: var(--tabs-nav-height);
  color: #5E6278;
  border: 1px solid #EFF2F5;
  border-radius: 4px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
}
.hl-tabs .tab-new .hl-icon {
  width: 14px;
  height: 14px;
}
.hl-tabs.tabs-line .tabs-item {
  border: none;
  background-color: transparent;
}
.hl-tabs.tabs-button .tabs-item {
  color: #5E6278;
  border-color: #FFFFFF;
  border-radius: 4px;
  background-color: #FFFFFF;
}
.hl-tabs.tabs-button .tabs-item:hover {
  color: #009EF7;
  border-color: #FFFFFF;
  background-color: #FFFFFF;
}
.hl-tabs.tabs-button .tabs-item.is-active {
  color: #FFFFFF;
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-tabs.tabs-button .tabs-header::after {
  background-color: transparent;
}
.hl-tabs.tabs-button .tabs-active-bar {
  background-color: transparent;
}
.hl-tabs.tabs-top .tabs-header::after {
  bottom: 0;
}
.hl-tabs.tabs-top .tabs-item {
  margin-right: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-top .tabs-item:first-child {
  border-top-left-radius: 4px;
}
.hl-tabs.tabs-top .tabs-item:last-child {
  border-top-right-radius: 4px;
}
.hl-tabs.tabs-top .tabs-item:last-child {
  margin-right: 0;
}
.hl-tabs.tabs-top .tabs-item.is-active {
  border-bottom-color: #FFFFFF;
}
.hl-tabs.tabs-top .tabs-active-bar {
  bottom: 0;
  left: 0;
  height: 2px;
}
.hl-tabs.tabs-top.tabs-line .tabs-item {
  margin-right: var(--tabs-nav-gap);
  border: none;
}
.hl-tabs.tabs-top.tabs-line .tabs-item:nth-child(2) {
  padding-left: 0;
}
.hl-tabs.tabs-top.tabs-line .tabs-item:last-child {
  padding-right: 0;
}
.hl-tabs.tabs-top.tabs-button .tabs-item {
  margin-right: var(--tabs-nav-gap, 0);
}
.hl-tabs.tabs-top.tabs-button .tabs-item.is-active {
  border-color: #40a9ff;
}
.hl-tabs.tabs-bottom .tabs-header::after {
  top: 0;
}
.hl-tabs.tabs-bottom .tabs-item {
  margin-right: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-bottom .tabs-item:first-child {
  border-bottom-left-radius: 4px;
}
.hl-tabs.tabs-bottom .tabs-item:last-child {
  border-bottom-right-radius: 4px;
}
.hl-tabs.tabs-bottom .tabs-item:last-child {
  margin-right: 0;
}
.hl-tabs.tabs-bottom .tabs-item.is-active {
  border-top-color: #FFFFFF;
}
.hl-tabs.tabs-bottom .tabs-active-bar {
  top: 0;
  bottom: auto;
  left: 0;
  height: 2px;
}
.hl-tabs.tabs-bottom.tabs-line .tabs-item {
  margin-right: var(--tabs-nav-gap);
  border: none;
}
.hl-tabs.tabs-bottom.tabs-line .tabs-item:nth-child(2) {
  padding-left: 0;
}
.hl-tabs.tabs-bottom.tabs-line .tabs-item:last-child {
  padding-right: 0;
}
.hl-tabs.tabs-bottom.tabs-button .tabs-item {
  margin-right: var(--tabs-nav-gap, 0);
}
.hl-tabs.tabs-bottom.tabs-button .tabs-item.is-active {
  border-color: #40a9ff;
}
.hl-tabs.tabs-right .tabs-header {
  float: right;
}
.hl-tabs.tabs-right .tabs-header::after {
  left: 0;
  bottom: 0;
  width: 1px;
  height: 100%;
}
.hl-tabs.tabs-right .is-scrollable {
  padding: 24px 0;
}
.hl-tabs.tabs-right .tabs-active-bar {
  top: 0;
  left: 0;
  width: 2px;
}
.hl-tabs.tabs-right .tabs-item {
  display: flex;
  border: 1px solid #EFF2F5;
  margin-bottom: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-right .tabs-item:first-child {
  border-top-right-radius: 4px;
}
.hl-tabs.tabs-right .tabs-item:last-child {
  border-bottom-right-radius: 4px;
}
.hl-tabs.tabs-right .tabs-item:last-child {
  margin-bottom: 0;
}
.hl-tabs.tabs-right .tabs-item.is-active {
  border-left-color: #FFFFFF;
}
.hl-tabs.tabs-right.tabs-line .tabs-item {
  padding-right: 0;
  margin-bottom: var(--tabs-nav-gap);
  border: none;
}
.hl-tabs.tabs-right.tabs-button .tabs-item {
  border-color: #FFFFFF;
}
.hl-tabs.tabs-left .tabs-header {
  float: left;
}
.hl-tabs.tabs-left .tabs-header::after {
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
}
.hl-tabs.tabs-left .is-scrollable {
  padding: 24px 0;
}
.hl-tabs.tabs-left .tabs-active-bar {
  top: 0;
  right: 0;
  width: 2px;
}
.hl-tabs.tabs-left .tabs-item {
  display: flex;
  border: 1px solid #EFF2F5;
  margin-bottom: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-left .tabs-item:first-child {
  border-top-left-radius: 4px;
}
.hl-tabs.tabs-left .tabs-item:last-child {
  border-bottom-left-radius: 4px;
}
.hl-tabs.tabs-left .tabs-item:last-child {
  margin-bottom: 0;
}
.hl-tabs.tabs-left .tabs-item.is-active {
  border-right-color: #FFFFFF;
}
.hl-tabs.tabs-left.tabs-line .tabs-item {
  padding-left: 0;
  margin-bottom: var(--tabs-nav-gap, -1px);
  border: none;
}
.hl-tabs.tabs-left.tabs-button .tabs-item {
  border-color: #FFFFFF;
}
.hl-tabs .tabs-content {
  height: var(--tabs-pane-height);
}
.hl-tabs.no-pane .tabs-content {
  display: none;
}
.hl-table {
  position: relative;
  overflow: hidden;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  width: 100%;
  max-width: 100%;
  caption-side: bottom;
  border-collapse: collapse;
  --table-padding: 12px;
  --table-td-padding: 12px;
}
.hl-table::before {
  content: "";
  position: absolute;
  background-color: #EFF2F5;
  z-index: 1;
}
.hl-table thead {
  font-weight: 500;
  color: #3F4254;
}
.hl-table thead.is-group th {
  background-color: #FFFFFF;
}
.hl-table td,
.hl-table th {
  position: relative;
  height: 48px;
  line-height: 1.5714285714;
  padding: var(--table-td-padding);
  text-align: left;
}
.hl-table td:first-child,
.hl-table th:first-child {
  padding-left: var(--table-padding);
}
.hl-table td:last-child,
.hl-table th:last-child {
  padding-right: var(--table-padding);
}
.hl-table td.is-center,
.hl-table th.is-center {
  text-align: center;
}
.hl-table td.is-right,
.hl-table th.is-right {
  text-align: right;
}
.hl-table td.gutter,
.hl-table th.gutter {
  width: 16px;
  border-right-width: 0;
  border-bottom-width: 0;
  padding: 0;
}
.hl-table td.is-hidden > *,
.hl-table th.is-hidden > * {
  visibility: hidden;
}
.hl-table td.is-leaf,
.hl-table th.is-leaf {
  border-bottom: 1px solid #EFF2F5;
}
.hl-table tr input[type=checkbox] {
  margin: 0;
}
.hl-table th {
  overflow: hidden;
  user-select: none;
  background-color: #FFFFFF;
}
.hl-table th:hover .table-filter-trigger {
  opacity: 1;
  visibility: visible;
}
.hl-table th:hover .table-filter-trigger:hover {
  color: #5E6278;
}
.hl-table th.is-sortable {
  cursor: pointer;
}
.hl-table th.highlight {
  color: #40a9ff;
}
.hl-table th.required > div::before {
  display: inline-block;
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f1416c;
  margin-right: 4px;
  vertical-align: middle;
}
.hl-table th .table-filter-trigger {
  color: #B5B5C3;
}
.hl-table td {
  border-bottom: 1px solid #EFF2F5;
  background-color: transparent;
}
.hl-table td.gutter {
  width: 0;
}
.hl-table .caret-wrapper {
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 14px;
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  overflow: initial;
  position: relative;
}
.hl-table .sort-caret {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
}
.hl-table .sort-caret.ascending {
  border-bottom-color: #EFF2F5;
  top: -4px;
}
.hl-table .sort-caret.descending {
  border-top-color: #EFF2F5;
  bottom: -4px;
}
.hl-table .ascending .sort-caret.ascending {
  border-bottom-color: #40a9ff;
}
.hl-table .descending .sort-caret.descending {
  border-top-color: #40a9ff;
}
.hl-table .hidden-columns {
  visibility: hidden;
  position: absolute;
  z-index: -1;
}
.hl-table .fit {
  border-right: 0;
  border-bottom: 0;
}
.hl-table .fit td.gutter,
.hl-table .fit th.gutter {
  border-right-width: 1px;
}
.hl-table .table-hidden {
  visibility: hidden;
}
.hl-table .bordered,
.hl-table .table-group {
  border: 1px solid #EFF2F5;
}
.hl-table .bordered::after,
.hl-table .table-group::after {
  content: "";
  position: absolute;
  background-color: #EFF2F5;
  z-index: 1;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
}
.hl-table.bordered {
  border: 1px solid #EFF2F5;
  border-right: none;
  border-bottom: none;
}
.hl-table.bordered th,
.hl-table.bordered td {
  border-right: 1px solid #EFF2F5;
}
.hl-table.bordered th {
  border-bottom: 1px solid #EFF2F5;
}
.hl-table.bordered th.gutter:last-of-type {
  border-bottom: 1px solid #EFF2F5;
  border-bottom-width: 1px;
}
.hl-table.bordered .table-fixed-right {
  border-left: 1px solid #EFF2F5;
}
.hl-table.border-y {
  border: 1px solid #EFF2F5;
}
.hl-table.border-y th,
.hl-table.border-y td {
  border-bottom: none;
  border-right: 1px solid #EFF2F5;
}
.hl-table.borderless {
  border: none;
}
.hl-table.borderless th,
.hl-table.borderless td {
  border: none;
}
.hl-table.striped-even .table-body tr:nth-child(even) {
  background-color: #F6F9FB;
}
.hl-table.striped-even .table-body.current-row td {
  background-color: #F6F9FB;
}
.hl-table.striped-odd .table-body tr:nth-child(odd) {
  background-color: #F6F9FB;
}
.hl-table.striped-odd .table-body.current-row td {
  background-color: #F6F9FB;
}
.hl-table.hover .table-body tr:hover > td {
  background-color: #F6F9FB;
}
.hl-table .cell {
  display: flex;
  align-items: center;
}
.hl-table .cell.show-tooltip {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.hl-table .hl-checkbox {
  display: flex;
}
.hl-table .table-body,
.hl-table .table-footer,
.hl-table .table-header {
  table-layout: fixed;
  border-collapse: separate;
}
.hl-table .table-body-wrapper,
.hl-table .table-footer-wrapper,
.hl-table .table-header-wrapper {
  width: 100%;
}
.hl-table .table-append-wrapper {
  overflow: hidden;
}
.hl-table .table-footer-wrapper {
  margin-top: -1px;
}
.hl-table .table-footer-wrapper td {
  border-top: 1px solid #EFF2F5;
}
.hl-table .table-body-wrapper {
  overflow: hidden;
  position: relative;
}
.hl-table .table-body-wrapper.is-scrolling-none ~ .table-fixed, .hl-table .table-body-wrapper.is-scrolling-left ~ .table-fixed {
  box-shadow: none;
}
.hl-table .table-body-wrapper.is-scrolling-none ~ .table-fixed-right, .hl-table .table-body-wrapper.is-scrolling-right ~ .table-fixed-right {
  box-shadow: none;
  border-left: none;
}
.hl-table .table-footer-wrapper,
.hl-table .table-header-wrapper {
  overflow: hidden;
}
.hl-table .table-footer-wrapper tbody td,
.hl-table .table-header-wrapper tbody td {
  background-color: #FFFFFF;
}
.hl-table .table-fixed-body-wrapper {
  position: absolute;
  left: 0;
  top: 48px;
  overflow: hidden;
  z-index: 3;
}
.hl-table .table-fixed-body-wrapper td {
  background-color: #FFFFFF;
}
.hl-table .table-empty-block {
  min-height: 60px;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
}
.hl-table .table-empty-text {
  line-height: 60px;
  width: 100%;
  color: #A1A5B7;
}
.hl-table .table-body tr.current-row > td {
  background-color: #F6F9FB;
}
.hl-table .table-body tr.hover-row > td {
  background-color: #F6F9FB;
}
.hl-table .table-body tr.hover-row.current-row > td {
  background-color: #F6F9FB;
}
.hl-table .table-expand-column .cell {
  padding: 0;
  text-align: center;
}
.hl-table .table-expand-icon {
  position: relative;
  cursor: pointer;
  color: #A1A5B7;
  font-size: 14px;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hl-table .table-expand-icon.table-expand-icon-expanded {
  transform: rotate(90deg);
}
.hl-table .table-expand-icon i {
  width: 14px;
  height: 14px;
}
.hl-table .table-expand-icon .hl-spinner {
  width: 100%;
  height: 100%;
}
.hl-table [class*=table-row-level] .table-expand-icon {
  margin-right: 8px;
}
.hl-table .table-placeholder {
  display: inline-block;
  width: 28px;
}
.hl-table.table-scrollable-x .table-body-wrapper {
  overflow-x: auto;
}
.hl-table.table-scrollable-y .table-body-wrapper {
  overflow-y: auto;
}
.hl-table .table-body-wrapper .table-border.is-scrolling-left ~ .table-fixed {
  border-right: 1px solid #EFF2F5;
}
.hl-table .table-fixed,
.hl-table .table-fixed-right {
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  box-shadow: 0 5px 12px 0 rgba(109, 131, 168, 0.05), 0 0 50px 0 rgba(193, 205, 225, 0.1);
}
.hl-table .table-fixed-right-patch {
  position: absolute;
  top: 1px;
  right: 0;
  background-color: transparent;
  border-bottom: 1px solid #EFF2F5;
}
.hl-table .table-fixed-right {
  top: 0;
  left: auto;
  right: 0;
}
.hl-table .table-fixed-right .table-fixed-body-wrapper,
.hl-table .table-fixed-right .table-fixed-footer-wrapper,
.hl-table .table-fixed-right .table-fixed-header-wrapper {
  left: auto;
  right: 0;
}
.hl-table .table-fixed-header-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
}
.hl-table .table-fixed-footer-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
}
.hl-table .table-fixed-footer-wrapper tbody td {
  border-top: 1px solid #EFF2F5;
  background-color: #EFF2F5;
}
.hl-table .table-column-resize-proxy {
  position: absolute;
  left: 200px;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px solid #EFF2F5;
  z-index: 10;
}
.hl-table .table-fluid-height .table-fixed,
.hl-table .table-fluid-height .table-fixed-right {
  bottom: 0;
  overflow: hidden;
}
.hl-table .table-filter-trigger {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-table .table-filter-trigger .hl-icon {
  width: 14px;
  height: 14px;
}
.popover-table-filter {
  padding: 16px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border-radius: 4px;
  border: 1px solid #EFF2F5;
}
.popover-table-filter .table-filter-content .hl-checkbox-group {
  display: flex;
  flex-flow: column;
}
.popover-table-filter .table-filter-content .hl-checkbox-group .hl-checkbox {
  margin-bottom: 8px;
}
.popover-table-filter .table-filter-bottom {
  margin-top: 8px;
}
.popover-table-filter .table-filter-bottom .hl-button:first-child {
  margin-right: 12px;
}
.hl-cascader {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.hl-cascader.block {
  display: block;
  width: 100%;
}
.hl-cascader .hl-input {
  width: 100%;
  height: auto;
}
.hl-cascader .cascader-tags {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 40px 0 6px;
  text-align: left;
}
.hl-cascader .cascader-tags .hl-tag {
  max-width: 100%;
  padding: 0 6px;
  height: auto;
  margin: 2px 4px 2px 0;
}
.hl-cascader .cascader-tags .hl-tag > span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  hyphens: auto;
}
.hl-cascader-popper div.selector-dropdown {
  padding: 0;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  border: none;
}
.hl-cascader-suggestion-panel {
  display: flex;
  background-color: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #EFF2F5;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
}
.hl-cascader-suggestion-panel .cascader-suggestion-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 12px 0;
  max-height: 200px;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item,
.hl-cascader-suggestion-panel .cascader-suggestion-list li {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  hyphens: auto;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item:focus, .hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item.hover, .hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item:hover,
.hl-cascader-suggestion-panel .cascader-suggestion-list li:focus,
.hl-cascader-suggestion-panel .cascader-suggestion-list li.hover,
.hl-cascader-suggestion-panel .cascader-suggestion-list li:hover {
  background-color: #F6F9FB;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item.is-active,
.hl-cascader-suggestion-panel .cascader-suggestion-list li.is-active {
  color: #009EF7;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item span,
.hl-cascader-suggestion-panel .cascader-suggestion-list li span {
  padding-right: 16px;
}
.hl-cascader-panel {
  display: inline-flex;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  border: 1px solid #EFF2F5;
}
.hl-cascader-panel .cascader-menu {
  min-width: 180px;
  border-left: 1px solid #EFF2F5;
}
.hl-cascader-panel .cascader-menu:first-child {
  border-left: none;
}
.hl-cascader-panel .cascader-menu .cascader-menu-wrap {
  height: 204px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 12px 0;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list.is-empty {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #B5B5C3;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item,
.hl-cascader-panel .cascader-menu .cascader-menu-list li {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 24px;
  padding-right: 38px;
  height: 36px;
  font-size: 14px;
  color: #5E6278;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  hyphens: auto;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .hl-spinner,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .hl-spinner {
  width: 16px;
  height: 16px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item:focus, .hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.hover, .hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item:hover,
.hl-cascader-panel .cascader-menu .cascader-menu-list li:focus,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.hover,
.hl-cascader-panel .cascader-menu .cascader-menu-list li:hover {
  color: #009EF7;
  background-color: #F6F9FB;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.in-active-path,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.in-active-path {
  color: #009EF7;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.is-active,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.is-active {
  color: #009EF7;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.is-disabled,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.is-disabled {
  color: #B5B5C3;
  cursor: not-allowed;
  pointer-events: none;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-label,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-label {
  padding-right: 16px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-prefix,
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-postfix,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-prefix,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-postfix {
  position: absolute;
  right: 16px;
  margin: 0;
  color: currentColor;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-postfix,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-postfix {
  width: 14px;
  height: 14px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-prefi,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-prefi {
  width: 16px;
  height: 16px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .hl-checkbox,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .hl-checkbox {
  margin-right: 8px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .hl-checkbox .radio-label,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .hl-checkbox .radio-label {
  padding: 0;
}
.hl-cascader-panel .cascader-menu .cascader-menu-hover-zone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.hl-backtop {
  position: fixed;
  background-color: #FFF;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #40a9ff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
.hl-backtop:hover {
  background-color: #F6F9FB;
}
.hl-overlay {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.hl-menu {
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  font-size: 14px;
  background-color: #242939;
}
.hl-menu:after {
  display: block;
  content: "";
  clear: both;
}
.hl-menu .hl-menu-item {
  position: relative;
  list-style: none;
  margin: 0;
  cursor: pointer;
  color: #989eb3;
  transition: all 0.3s ease;
}
.hl-menu .hl-menu-item .hl-menu {
  font-size: 14px;
}
.hl-menu .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(4em + 4px);
}
.hl-menu .hl-menu-item .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(5em + 4px);
}
.hl-menu .hl-menu-item .hl-menu-item .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(6em + 4px);
}
.hl-menu .hl-menu-item .hl-menu-item .hl-menu-item .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(7em + 4px);
}
.hl-menu .hl-menu-item.hl-sub-menu.is-opened {
  background-color: #1e2230;
}
.hl-menu .hl-menu-item.hl-sub-menu.is-opened .menu-inline {
  background-color: transparent;
}
.hl-menu .hl-menu-item .item-content {
  display: flex;
  align-items: center;
  padding: 12px 2em;
  height: 46px;
  transition: all 0.3s ease;
}
.hl-menu .hl-menu-item .item-content:hover {
  color: #FFFFFF;
  background-color: #1f2433;
}
.hl-menu .hl-menu-item .item-content:hover .hl-icon {
  color: currentColor;
}
.hl-menu .hl-menu-item .item-content span {
  width: 100%;
}
.hl-menu .hl-menu-item .item-content .menu-arrow {
  position: absolute;
  right: 6px;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  margin-left: 8px;
  transition: all 0.3s ease;
  color: #989eb3;
}
.hl-menu .hl-menu-item a {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
.hl-menu .hl-menu-item .hl-icon {
  display: block;
  width: 18px;
  height: 18px;
  color: #4B5575;
  flex-shrink: 0;
  flex-grow: unset;
  margin-right: 1em;
  transition: all 0.3s ease;
}
.hl-menu .hl-menu-item.is-active:not(.is-opened) {
  color: #FFFFFF;
}
.hl-menu .hl-menu-item.is-active:not(.is-opened) .item-content {
  background-color: #1f2433;
}
.hl-menu .hl-menu-item.is-active:not(.is-opened) .item-content .hl-icon {
  color: currentColor;
}
.hl-menu .hl-menu-item.is-opened > .item-content .menu-arrow {
  transform: rotate(90deg);
}
.hl-menu .hl-menu-item.is-disabled {
  cursor: not-allowed;
  color: rgba(152, 158, 179, 0.5);
}
.hl-menu .hl-menu-item.is-disabled > .item-content:hover {
  color: inherit;
  background-color: inherit;
}
.hl-menu .hl-menu-item.hide-menu-arrow .menu-arrow {
  display: none;
}
.hl-menu .hl-menu-item-group ul {
  list-style: none;
  padding: 0;
}
.hl-menu .hl-menu-item-group .group-title {
  color: #444e6c;
  font-size: 12px;
  padding: 12px 2em;
  text-indent: 4px;
}
.hl-menu.horizontal .hl-menu-item {
  display: flex;
  align-items: center;
  float: left;
  height: 80px;
  margin: 0;
  color: #989eb3;
}
.hl-menu.horizontal .hl-menu-item .item-content {
  height: inherit;
}
.hl-menu.horizontal .hl-menu-item .item-content:hover {
  background-color: transparent;
}
.hl-menu.horizontal .hl-menu-item .item-content .menu-arrow {
  position: unset;
  right: unset;
  transform: rotate(90deg);
}
.hl-menu.horizontal .hl-menu-item.is-disabled {
  color: #B5B5C3;
}
.hl-menu.horizontal .hl-menu-item.is-active:not(.is-opened) .item-content {
  background-color: transparent;
}
.hl-menu.collapse {
  width: 80px;
}
.hl-menu.collapse .hl-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hl-menu.collapse .hl-menu-item .item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  padding: 0;
}
.hl-menu.collapse .hl-menu-item .item-content span {
  display: none;
}
.hl-menu.collapse .hl-menu-item .hl-icon {
  margin: 0;
}
.hl-menu.collapse .hl-menu-item .menu-arrow {
  display: none;
}
.hl-menu.collapse .hl-menu-item-group .group-title {
  display: none;
}
.hl-menu.menu-dropdown {
  min-width: 200px;
  padding: 12px 0;
  background-color: #242939;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
}
.hl-menu.menu-dropdown .hl-menu-item:hover {
  background-color: #1f2433;
}
.hl-menu.menu-dropdown .hl-menu-item .item-content {
  padding: 6px 2em;
  height: 46px;
}
.hl-menu.menu-dropdown .hl-menu-item.is-opened > .item-content .menu-arrow {
  transform: rotate(90deg);
}
.hl-menu.menu-dropdown .hl-menu-item.is-active:not(.is-opened) .item-content {
  color: #FFFFFF;
}
.hl-menu-popover {
  border: 0;
  border-radius: 0;
  color: #989eb3;
  background-color: #242939;
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
}
.hl-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 14px;
  color: #A1A5B7;
}
.hl-breadcrumb .hl-breadcrumb-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
}
.hl-breadcrumb .hl-breadcrumb-item a {
  color: inherit;
}
.hl-breadcrumb .hl-breadcrumb-item:hover {
  color: #009EF7;
}
.hl-breadcrumb .hl-breadcrumb-item:first-child .breadcrumb-separator {
  display: none;
}
.hl-breadcrumb .hl-breadcrumb-item .breadcrumb-separator {
  color: #B5B5C3;
  margin: 0 8px;
}
.hl-breadcrumb .hl-breadcrumb-item .breadcrumb-separator .hl-icon {
  display: flex;
}
.hl-upload {
  --upload-item-gap: 8px;
}
.hl-upload .upload-input {
  display: none;
}
.hl-upload iframe {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0;
}
.hl-upload .handle-text {
  display: inline-flex;
  vertical-align: middle;
  font-size: 14px;
  transition: all 0.3s ease;
}
.hl-upload .handle-card {
  display: inline-flex;
  background-color: #FFFFFF;
  border: 1px dashed #EFF2F5;
  border-radius: 4px;
  width: 128px;
  height: 128px;
  cursor: pointer;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.hl-upload .handle-card:hover, .hl-upload .handle-card:focus {
  color: #009EF7;
  border-color: #40a9ff;
  background-color: #F6F9FB;
}
.hl-upload .upload-list {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 12px;
}
.hl-upload .upload-list .item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 16px;
  padding: 12px 16px;
  color: #5E6278;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #EFF2F5;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
  overflow: hidden;
}
.hl-upload .upload-list .item:not(:last-child) {
  margin-bottom: var(--upload-item-gap);
}
.hl-upload .upload-list .item .file-icon {
  flex-shrink: 0;
  flex-grow: unset;
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
.hl-upload .upload-list .item .item-content {
  flex-grow: 1;
  width: 100%;
  margin-right: 12px;
}
.hl-upload .upload-list .item .item-name {
  font-size: 14px;
  color: #5E6278;
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.hl-upload .upload-list .item .item-status {
  position: relative;
  display: flex;
  height: 24px;
  min-width: 24px;
  align-items: center;
  justify-content: center;
}
.hl-upload .upload-list .item .item-status .icon-status,
.hl-upload .upload-list .item .item-status .icon-close {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;
}
.hl-upload .upload-list .item .item-status .icon-close {
  transform: translate(0, 50%);
}
.hl-upload .upload-list .item .item-status .icon-status {
  transform: translate(0, 0);
}
.hl-upload .upload-list .item .item-status .icon-loading {
  color: #40a9ff;
  min-width: 24px;
  height: 24px;
  padding: 4px;
}
.hl-upload .upload-list .item .hl-progress-title .progress-number {
  color: #40a9ff;
  transform: translate(0, -100%);
}
.hl-upload .upload-list.list-picture .item.is-success .item-status .icon-loading, .hl-upload .upload-list.list-text .item.is-success .item-status .icon-loading {
  display: none;
}
.hl-upload .upload-list.list-picture .item.is-success .item-status .icon-status, .hl-upload .upload-list.list-text .item.is-success .item-status .icon-status {
  visibility: visible;
  opacity: 1;
}
.hl-upload .upload-list.list-picture .item.is-success .item-status .icon-close, .hl-upload .upload-list.list-text .item.is-success .item-status .icon-close {
  visibility: hidden;
  opacity: 0;
}
.hl-upload .upload-list.list-picture .item.is-success:hover, .hl-upload .upload-list.list-text .item.is-success:hover {
  background-color: #F6F9FB;
  border-color: #EFF2F5;
}
.hl-upload .upload-list.list-picture .item.is-success:hover .item-status .icon-status, .hl-upload .upload-list.list-text .item.is-success:hover .item-status .icon-status {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, -50%);
}
.hl-upload .upload-list.list-picture .item.is-success:hover .item-status .icon-close, .hl-upload .upload-list.list-text .item.is-success:hover .item-status .icon-close {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-upload .upload-list.list-picture .item .hl-progress, .hl-upload .upload-list.list-text .item .hl-progress {
  margin-top: 4px;
  --progress-height: 4px;
}
.hl-upload .upload-list.list-picture .item .hl-progress .progress-content, .hl-upload .upload-list.list-text .item .hl-progress .progress-content {
  position: absolute;
  width: 100%;
  top: -4px;
  right: 0;
  transform: translate(0, -100%);
}
.hl-upload .upload-list.list-card {
  margin: 0;
  display: inline;
}
.hl-upload .upload-list.list-card .item {
  display: flex;
  float: left;
  width: 128px;
  height: 128px;
  padding: 0;
  border-color: transparent;
  margin-right: var(--upload-item-gap);
  margin-bottom: var(--upload-item-gap);
}
.hl-upload .upload-list.list-card .item div {
  width: 100%;
  height: 100%;
}
.hl-upload .upload-list.list-card .item .hl-icon {
  display: none;
}
.hl-upload .upload-list.list-card .item .item-content {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  background-color: rgba(0, 0, 0, 0.3);
}
.hl-upload .upload-list.list-card .item .item-content .item-name {
  display: none;
}
.hl-upload .upload-list.list-card .item .item-status {
  display: none;
}
.hl-upload .upload-list.list-card .item .hl-progress .progress-circle .progress-circle-path {
  stroke: #fff;
}
.hl-upload .upload-list.list-card .item .hl-progress .progress-circle .progress-circle-track {
  stroke: rgba(255, 255, 255, 0.3);
}
.hl-upload .upload-list.list-card .item .hl-progress .progress-content .progress-percentage {
  color: #FFFFFF;
  font-size: 12px;
}
.hl-upload .upload-list.list-card .item .item-thumb {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hl-upload .upload-list.list-card .item .item-actions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: default;
  color: #FFFFFF;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
}
.hl-upload .upload-list.list-card .item .item-actions span {
  display: none;
  cursor: pointer;
  text-align: center;
}
.hl-upload .upload-list.list-card .item .item-actions .hl-icon {
  display: block;
  width: 21px;
  height: 21px;
  max-width: 24px;
  max-height: 24px;
}
.hl-upload .upload-list.list-card .item.is-success .item-actions:hover {
  opacity: 1;
}
.hl-upload .upload-list.list-card .item.is-success .item-actions:hover span {
  display: inline-block;
}
.hl-upload .upload-list.list-card .item.is-ready .item-actions:hover {
  opacity: 1;
}
.hl-upload .upload-list.list-card .item.is-ready .item-actions:hover span {
  display: inline-block;
}
.hl-upload .upload-list.list-picture .item .item-thumb {
  border-radius: 4px;
  flex-shrink: 0;
  flex-grow: unset;
  width: 48px;
  height: 48px;
  margin-right: 12px;
}
.hl-upload .upload-list.list-picture .item .hl-icon {
  display: none;
}
.hl-upload .upload-dragger {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  width: 360px;
  height: 180px;
  border: 1px dashed #EFF2F5;
  background-color: #FFFFFF;
  transition: all 0.3s ease;
}
.hl-upload .upload-dragger .hl-icon {
  width: 40px;
  height: 40px;
}
.hl-upload .upload-dragger:hover {
  border-color: #40a9ff;
  background-color: #F6F9FB;
}
.hl-upload .upload-dragger.is-dragover {
  border-color: #40a9ff;
  background-color: #F6F9FB;
}
.hl-calendar .calendar-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #EFF2F5;
}
.hl-calendar .calendar-header .calendar-title {
  color: #3F4254;
  align-self: center;
}
.hl-calendar .calendar-body {
  padding: 12px 16px;
}
.hl-calendar .calendar-body .calendar-table {
  table-layout: fixed;
  width: 100%;
  font-size: 14px;
}
.hl-calendar .calendar-body .calendar-table thead th {
  padding: 16px 0;
  color: #3F4254;
  font-weight: 400;
}
.hl-calendar .calendar-body .calendar-table:not(.is-range) td.next, .hl-calendar .calendar-body .calendar-table:not(.is-range) td.prev {
  color: #B5B5C3;
}
.hl-calendar .calendar-body .calendar-table td {
  border-bottom: 1px solid #EFF2F5;
  border-right: 1px solid #EFF2F5;
  vertical-align: top;
  transition: background-color 0.3s ease;
}
.hl-calendar .calendar-body .calendar-table td.is-selected {
  background-color: #F6F9FB;
}
.hl-calendar .calendar-body .calendar-table td.is-today {
  color: #40a9ff;
}
.hl-calendar .calendar-body .calendar-table tr:first-child td {
  border-top: 1px solid #EFF2F5;
}
.hl-calendar .calendar-body .calendar-table tr td:first-child {
  border-left: 1px solid #EFF2F5;
}
.hl-calendar .calendar-body .calendar-table tr.calendar-table-row-hide-border td {
  border-top: none;
}
.hl-calendar .calendar-body .calendar-table .calendar-day {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 12px;
  height: 80px;
}
.hl-calendar .calendar-body .calendar-table .calendar-day:hover {
  cursor: pointer;
  background-color: #F6F9FB;
}
.hl-transfer {
  --transfer-gap: 16px;
  --transfer-list-gap: 4px;
  --transfer-item-gap: 8px;
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  gap: var(--transfer-gap);
}
.hl-transfer.block {
  display: flex;
}
.hl-transfer.no-buttons .transfer-panel .panel-list .hl-checkbox:hover {
  background-color: #F6F9FB;
}
.hl-transfer.no-buttons .transfer-panel .panel-list .hl-checkbox.is-disabled:hover {
  background-color: unset;
}
.hl-transfer .transfer-panel {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  border-radius: 4px;
  border: 1px solid #EFF2F5;
  background-color: #FFFFFF;
  min-width: 260px;
  width: 260px;
  height: 400px;
}
.hl-transfer .transfer-panel .panel-header {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #EFF2F5;
  background-color: #F6F9FB;
}
.hl-transfer .transfer-panel .panel-header .count {
  color: #A1A5B7;
}
.hl-transfer .transfer-panel .panel-body {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: hidden;
}
.hl-transfer .transfer-panel .panel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
  border-radius: 0 0 4px 4px;
  border-top: 1px solid #EFF2F5;
  height: 48px;
  background-color: #F6F9FB;
}
.hl-transfer .transfer-panel .panel-filter {
  padding: 16px;
}
.hl-transfer .transfer-panel .panel-filter .hl-input .input-close {
  display: none;
}
.hl-transfer .transfer-panel .panel-filter .hl-input .input-close.show-close {
  display: block;
}
.hl-transfer .transfer-panel .panel-list {
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  flex-wrap: nowrap;
  gap: var(--transfer-list-gap);
}
.hl-transfer .transfer-panel .panel-list.has-filterable {
  padding-top: 0;
}
.hl-transfer .transfer-panel .panel-list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;
  gap: var(--transfer-item-gap);
  transition: all 0.3s ease;
}
.hl-transfer .transfer-panel .panel-list .item.is-checked {
  background-color: #F6F9FB;
}
.hl-transfer .transfer-panel .panel-list .item.is-disabled {
  color: #B5B5C3;
}
.hl-transfer .transfer-panel .panel-list .item .checkbox-label {
  padding: 0;
  flex-grow: 1;
}
.hl-transfer .transfer-panel .panel-list .item .checkbox-label .close {
  display: none;
}
.hl-transfer .transfer-panel .panel-list .item .checkbox-inner {
  flex-grow: 0;
}
.hl-transfer .transfer-panel .panel-list .item .hl-icon,
.hl-transfer .transfer-panel .panel-list .item .hl-thumb {
  margin-right: 8px;
}
.hl-transfer .transfer-panel .panel-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px 0;
  color: #A1A5B7;
}
.hl-transfer .transfer-buttons {
  display: flex;
  align-items: center;
}
.hl-affix .fixed {
  position: fixed;
}
.hl-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.hl-timeline.block {
  display: flex;
  width: 100%;
}
.hl-timeline.alternate .hl-timeline-item:nth-child(odd) .item-left {
  order: 3;
  text-align: left;
}
.hl-timeline.alternate .hl-timeline-item:nth-child(odd) .item-center {
  order: 2;
}
.hl-timeline.alternate .hl-timeline-item:nth-child(odd) .item-right {
  order: 1;
  text-align: right;
}
.hl-timeline.has-icon .hl-timeline-item .item-center .dot-wrap {
  width: 40px;
}
.hl-timeline .hl-timeline-item {
  position: relative;
  display: flex;
  --timeline-item-gap: 16px;
  column-gap: var(--timeline-item-gap);
}
.hl-timeline .hl-timeline-item.is-active .item-center .icon-dot, .hl-timeline .hl-timeline-item:hover .item-center .icon-dot {
  background-color: var(--timeline-icon-color, #40a9ff);
}
.hl-timeline .hl-timeline-item.is-active .item-center .icon-dot::before, .hl-timeline .hl-timeline-item:hover .item-center .icon-dot::before {
  opacity: 1;
  transform: scale(1.8);
}
.hl-timeline .hl-timeline-item.left .item-left {
  order: 3;
  text-align: left;
}
.hl-timeline .hl-timeline-item.left .item-center {
  order: 2;
}
.hl-timeline .hl-timeline-item.left .item-right {
  order: 1;
  text-align: right;
}
.hl-timeline .hl-timeline-item.right .item-left {
  order: 1;
}
.hl-timeline .hl-timeline-item.right .item-center {
  order: 2;
}
.hl-timeline .hl-timeline-item.right .item-right {
  order: 3;
}
.hl-timeline .hl-timeline-item:last-child .item-center::before {
  display: none;
}
.hl-timeline .hl-timeline-item:last-child .item-right {
  margin-bottom: unset;
}
.hl-timeline .hl-timeline-item .item-left {
  width: 100%;
  flex-grow: 1;
  text-align: right;
}
.hl-timeline .hl-timeline-item .item-center {
  position: relative;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: auto;
  justify-content: center;
  align-items: flex-start;
}
.hl-timeline .hl-timeline-item .item-center .dot-wrap {
  display: flex;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.hl-timeline .hl-timeline-item .item-center::before {
  content: "";
  position: absolute;
  top: 14px;
  left: 50%;
  border-right: 2px solid #E4E6EF;
  height: 100%;
  transform: translate(-50%, 0);
}
.hl-timeline .hl-timeline-item .item-center .icon-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--timeline-icon-color, #E4E6EF);
  border-radius: 100px;
  transition: all 0.3s ease;
}
.hl-timeline .hl-timeline-item .item-center .icon-dot::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 1px solid var(--timeline-icon-color, #40a9ff);
  background-color: #FFFFFF;
  opacity: 0;
  transition: all 0.3s ease;
}
.hl-timeline .hl-timeline-item .item-center .hl-icon {
  position: relative;
}
.hl-timeline .hl-timeline-item .item-center .hl-icon::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 2px solid var(--timeline-icon-color, #E4E6EF);
  background-color: #FFFFFF;
  opacity: 0;
  transition: all 0.3s ease;
}
.hl-timeline .hl-timeline-item .item-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}
.hl-timeline .hl-timeline-item .item-title {
  font-size: 14px;
  color: #5E6278;
  line-height: 24px;
}
.hl-timeline .hl-timeline-item .item-time {
  font-size: 12px;
  color: #A1A5B7;
  line-height: 24px;
}
.hl-slider .slider-wrap {
  width: 100%;
  height: 4px;
  margin: 16px 0;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  background-color: #F6F9FB;
}
.hl-slider .slider-wrap.disabled {
  cursor: default;
}
.hl-slider .slider-wrap.disabled .slider-bar {
  background-color: #F6F9FB;
}
.hl-slider .slider-wrap.disabled .slider-handle-wrap.dragging, .hl-slider .slider-wrap.disabled .slider-handle-wrap.hover, .hl-slider .slider-wrap.disabled .slider-handle-wrap:hover {
  cursor: not-allowed;
}
.hl-slider .slider-wrap.disabled .slider-handle.dragging, .hl-slider .slider-wrap.disabled .slider-handle.hover, .hl-slider .slider-wrap.disabled .slider-handle:hover {
  cursor: not-allowed;
}
.hl-slider .slider-bar {
  position: absolute;
  height: 4px;
  background-color: #40a9ff;
  border-radius: 100px;
}
.hl-slider .slider-handle-wrap {
  display: flex;
  position: absolute;
  z-index: 1;
  padding: 3.3333333333px;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  outline: none;
}
.hl-slider .slider-handle-wrap:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.hl-slider .slider-handle-wrap.dragging {
  cursor: grabbing;
}
.hl-slider .slider-handle-wrap:hover, .hl-slider .slider-handle-wrap.hover {
  cursor: grab;
}
.hl-slider .slider-handle {
  display: flex;
  width: 10px;
  height: 10px;
  border: 2px solid #40a9ff;
  background-color: #40a9ff;
  border-radius: 100px;
  transition: all 0.3s ease;
  user-select: none;
}
.hl-slider .slider-handle.dragging {
  cursor: grabbing;
  box-shadow: 0 0 0 8px rgba(64, 169, 255, 0.2) !important;
}
.hl-slider .slider-handle.hover, .hl-slider .slider-handle:hover {
  cursor: grab;
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.2);
}
.hl-slider .slider-stop {
  position: absolute;
  height: 4px;
  width: 4px;
  border-radius: 100px;
  background-color: #40a9ff;
  transform: translateX(-50%);
}
.hl-slider .slider-marks {
  top: 0;
  left: 12px;
  width: 18px;
  height: 100%;
}
.hl-slider .slider-marks-text {
  position: absolute;
  transform: translateX(-50%);
  color: #A1A5B7;
  margin-top: 24px;
}
.hl-slider.is-vertical.is-vertical {
  position: relative;
}
.hl-slider.is-vertical.is-vertical .slider-wrap {
  width: 4px;
  height: 100%;
  margin: 0 16px;
}
.hl-slider.is-vertical.is-vertical .slider-bar {
  width: 4px;
  height: auto;
  border-radius: 100px;
}
.hl-slider.is-vertical.is-vertical .slider-handle-wrap {
  top: auto;
  left: 50%;
  transform: translate(-50%, 50%);
}
.hl-slider.is-vertical.is-vertical .slider-stop {
  transform: translateY(50%);
}
.hl-slider.is-vertical.is-vertical .slider-marks-text {
  margin-top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
.hl-collapse {
  display: flex;
  flex-direction: column;
  --collapse-gap: 8px;
  --collapse-padding: 16px;
  --collapse-content-padding: 16px;
  gap: var(--collapse-gap);
}
.hl-collapse .upload-input {
  display: none;
}
.hl-collapse iframe {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0;
}
.hl-collapse.arrow-left .hl-collapse-item .item-header {
  justify-content: start;
}
.hl-collapse.arrow-left .hl-collapse-item .item-header .item-arrow {
  order: -1;
  margin-right: 12px;
}
.hl-collapse-item.is-disabled {
  pointer-events: none;
}
.hl-collapse-item.is-disabled .item-header {
  color: #B5B5C3;
  background-color: #F6F9FB;
  border-color: #EFF2F5;
  cursor: not-allowed;
}
.hl-collapse-item.is-disabled .item-header .item-arrow {
  color: currentColor;
}
.hl-collapse-item.is-disabled .item-content {
  background-color: #FFFFFF;
}
.hl-collapse-item.is-active {
  border-bottom-color: transparent;
}
.hl-collapse-item.is-active .item-header {
  border-radius: 4px 4px 0 0;
  color: #3F4254;
  background-color: #F6F9FB;
  border-color: #EFF2F5;
}
.hl-collapse-item.is-active .item-header:hover {
  color: #3F4254;
  background-color: #F6F9FB;
  border-color: #EFF2F5;
}
.hl-collapse-item.is-active .item-header .item-arrow {
  transform: rotate(180deg);
}
.hl-collapse-item.is-active .item-content {
  background-color: #FFFFFF;
}
.hl-collapse-item .item-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 var(--collapse-padding);
  font-size: 16px;
  height: 44px;
  color: #5E6278;
  background-color: #F6F9FB;
  border: 1px solid #EFF2F5;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease;
}
.hl-collapse-item .item-header:hover {
  color: #3F4254;
  background-color: #F6F9FB;
  border-color: #EFF2F5;
}
.hl-collapse-item .item-header .item-arrow {
  cursor: pointer;
  transform: rotate(0deg);
  transition: all 0.3s ease;
  width: 16px;
  height: 16px;
  color: #5E6278;
}
.hl-collapse-item .item-header .item-arrow,
.hl-collapse-item .item-header .hl-icon {
  flex-grow: 0;
  flex-shrink: 0;
}
.hl-collapse-item .item-header.focusing:focus:not(.is-disable), .hl-collapse-item .item-header.focusing:focus:not(:hover) {
  color: #3F4254;
}
.hl-collapse-item .item-wrap {
  will-change: height;
  overflow: hidden;
}
.hl-collapse-item .item-content {
  padding: var(--collapse-content-padding);
  border-radius: 0 0 4px 4px;
  background-color: #FFFFFF;
  border: 1px solid #EFF2F5;
  border-top: none;
}
.hl-layout {
  min-height: 100%;
}
.hl-layout.fixed-header .hl-header {
  position: sticky;
  top: 0;
}
.hl-layout.fixed-sub-header .hl-sub-header {
  position: sticky;
  top: 64px;
}
.hl-layout.fixed-sub-header:not(.fixed-header) .hl-sub-header {
  top: 0;
}
.hl-layout.fixed-footer .hl-footer {
  position: sticky;
  bottom: 0;
}
.hl-layout.fixed-aside:not(.boxed) {
  padding-left: 280px;
}
@media (max-width: 768px) {
  .hl-layout.fixed-aside:not(.boxed) {
    padding: 0;
  }
}
.hl-layout.fixed-aside:not(.boxed) .hl-aside {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2000;
}
.hl-layout.fixed-aside:not(.boxed).fixed-header.full-header {
  padding-top: 64px;
}
.hl-layout.fixed-aside:not(.boxed).fixed-header.full-header .hl-header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2000;
}
.hl-layout.fixed-aside:not(.boxed).fixed-header.full-header .hl-aside {
  top: 64px;
  z-index: 1999;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header {
  padding-top: 118px;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header .hl-sub-header {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1999;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header .hl-aside {
  top: 118px;
  z-index: 1998;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header:not(.fixed-header) {
  padding-top: 0;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header:not(.fixed-header) .hl-sub-header {
  position: sticky;
  top: 0;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header:not(.fixed-header) .hl-aside {
  top: 0;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header:not(.full-header) {
  padding-top: 0;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header:not(.full-header) .hl-sub-header {
  position: sticky;
  top: 64px;
}
.hl-layout.fixed-aside:not(.boxed).fixed-sub-header.full-sub-header:not(.full-header) .hl-aside {
  top: 0;
}
.hl-layout.fixed-aside:not(.boxed).fixed-footer.full-footer {
  padding-bottom: 50px;
}
.hl-layout.fixed-aside:not(.boxed).fixed-footer.full-footer .hl-footer {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1999;
}
.hl-layout.fixed-aside:not(.boxed).fixed-footer.full-footer .hl-aside {
  bottom: 50px;
}
@media (min-width: 1440px) {
  .hl-layout.boxed {
    margin: 0 auto;
    width: 1440px;
  }
}
.hl-layout.boxed.fixed-aside .hl-aside {
  position: sticky;
  top: 0;
  height: 100vh;
}
@media (max-width: 768px) {
  .hl-layout.boxed.fixed-aside .hl-aside {
    position: absolute;
  }
}
.hl-layout.boxed.fixed-aside.fixed-header .hl-aside {
  top: 64px;
  height: calc(100vh - 64px);
}
.hl-layout.boxed.fixed-aside.fixed-sub-header .hl-aside {
  top: 54px;
  height: calc(100vh - 54px);
}
.hl-layout.boxed.fixed-aside.fixed-footer .hl-footer {
  z-index: 1998;
}
.hl-layout.boxed.fixed-aside.fixed-footer .hl-aside {
  height: calc(100vh - 50px);
}
.hl-layout.boxed.fixed-aside.fixed-footer.fixed-header .hl-aside {
  height: calc(100vh - 114px);
}
.hl-layout.boxed.fixed-aside.fixed-footer.fixed-header.fixed-sub-header .hl-aside {
  top: 118px;
  height: calc(100vh - 168px);
}
.hl-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  background-color: #FFFFFF;
  z-index: 1999;
}
.hl-header .header-left {
  flex-grow: 1;
  padding: 0 0;
}
.hl-header .header-right {
  display: flex;
  align-items: center;
}
.hl-sub-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 54px;
  background-color: #FFFFFF;
  padding: 0 0;
  border-top: 1px solid #EFF2F5;
  box-shadow: 0 20px 20px 0 rgba(82, 63, 105, 0.06);
  z-index: 1998;
}
.hl-aside {
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  background-color: #fff;
  z-index: 1997;
}
@media (max-width: 768px) {
  .hl-aside {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translate(-100%, 0);
  }
}
.hl-footer {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #FFFFFF;
  border-top: 1px solid #EFF2F5;
  z-index: 1997;
}
.hl-container {
  display: flex;
  flex: 1;
  flex-basis: auto;
  flex-direction: row;
  width: 100%;
}
.hl-main {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  min-height: calc(100vh - 168px);
  background-color: #fff;
}
.hl-steps {
  display: flex;
  --step-icon-wrap-size: 44px;
  --step-gap: 0rem;
  --step-item-padding: 40px;
  gap: var(--step-gap);
}
.hl-steps.vertical {
  flex-flow: column;
}
.hl-step {
  position: relative;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 0;
}
.hl-step:last-of-type {
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 0;
}
.hl-step:last-of-type .step-line {
  display: none;
}
.hl-step:last-of-type .step-main {
  padding-right: 0;
}
.hl-step.is-wait .step-head .step-icon.is-icon {
  background-color: #F6F9FB;
}
.hl-step.is-error .step-head .step-line::before {
  border-top-style: dashed;
}
.hl-step.is-success .step-head .step-line::before, .hl-step.is-finish .step-head .step-line::before {
  border-top-style: dashed;
}
.hl-step.is-horizontal .step-line {
  left: calc(var(--step-icon-wrap-size) + var(--step-gap));
}
.hl-step.is-horizontal .step-line::before {
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  border-top: 1px dashed #EFF2F5;
}
.hl-step.is-vertical {
  display: flex;
}
.hl-step.is-vertical .step-head {
  flex-grow: 0;
}
.hl-step.is-vertical .step-main {
  margin-top: 8px;
  padding-left: 16px;
  flex-grow: 1;
}
.hl-step.is-vertical .step-title {
  padding-bottom: 4px;
}
.hl-step.is-vertical .step-line {
  top: calc(var(--step-icon-wrap-size) + var(--step-gap));
}
.hl-step.is-vertical .step-line::before {
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  border-right: 1px dashed #EFF2F5;
}
.hl-step.is-center:last-of-type {
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 0;
}
.hl-step.is-center .step-head,
.hl-step.is-center .step-main {
  padding: 0 16px;
  text-align: center;
  justify-content: center;
}
.hl-step .step-head {
  position: relative;
  display: flex;
  justify-content: flex-start;
}
.hl-step .step-icon {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--step-icon-wrap-size);
  height: var(--step-icon-wrap-size);
  font-size: 16px;
  background-color: #F6F9FB;
  border-radius: 100px;
  line-height: 1;
  transition: all 0.3s ease;
  flex-grow: 0;
  flex-shrink: 0;
}
.hl-step .step-icon.round {
  border-radius: 100px;
}
.hl-step .step-icon .hl-icon {
  font-style: 20px;
  width: 20px;
  height: 20px;
  color: currentColor;
}
.hl-step .step-icon .icon-inner {
  display: flex;
  user-select: none;
  font-weight: 500;
  color: inherit;
}
.hl-step .step-icon .icon-inner::after {
  font-family: system-icon;
  color: currentColor;
  font-style: normal;
  line-height: 1;
}
.hl-step .step-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.hl-step .step-line::before {
  content: "";
  position: absolute;
}
.hl-step .step-main {
  text-align: left;
  margin-top: 12px;
  padding-right: 24px;
  padding-bottom: var(--step-item-padding);
}
.hl-step .step-title {
  font-size: 14px;
  font-weight: 600;
}
.hl-step .step-description {
  font-size: 14px;
  color: #A1A5B7;
}
.hl-card {
  --card-padding: 24px;
}
.hl-card.float-header .panel-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.hl-card.float-header.borderless .panel-body {
  padding: var(--card-padding);
}
.hl-card.center-body .panel-body {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.hl-card.full-thumb.borderless .panel-body {
  padding: 0;
}
.hl-card.full-thumb .card-thumb + .card-content {
  margin-top: 0;
}
.hl-card.full-thumb .card-content {
  padding: var(--card-padding);
}
.hl-card.full-thumb .card-content .card-title {
  font-size: 18px;
  font-weight: 500;
}
.hl-card.full-thumb .card-content .card-title + .card-description {
  padding-top: 8px;
}
.hl-card.full-thumb .card-content .card-description {
  color: #A1A5B7;
}
.hl-card.full-thumb .card-content .card-tools {
  padding-top: 16px;
}
.hl-card .card-thumb {
  border-radius: var(--panel-radius) var(--panel-radius) 0 0;
  overflow: hidden;
}
.hl-card .card-thumb + .card-content {
  margin-top: var(--card-padding);
}
.hl-card .card-content .card-title {
  font-size: 18px;
  font-weight: 500;
}
.hl-card .card-content .card-title + .card-description {
  padding-top: 8px;
}
.hl-card .card-content .card-description {
  color: #A1A5B7;
}
.hl-card .card-content .card-tools {
  padding-top: 16px;
}
.hl-list {
  position: relative;
  display: flex;
  --list-gap: 0;
  --list-item-gap: var(--sm);
  --list-item-height: 44px;
  gap: var(--list-gap);
}
.hl-list .hl-list-item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 4px 16px;
  height: var(--list-item-height);
  border-radius: 4px;
  column-gap: var(--list-item-gap);
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-list .hl-list-item .item-prefix,
.hl-list .hl-list-item .item-suffix {
  display: flex;
}
.hl-list .hl-list-item .item-content {
  flex-grow: 1;
}
.hl-list.hover .hl-list-item {
  cursor: pointer;
}
.hl-list.hover .hl-list-item.active, .hl-list.hover .hl-list-item:focus, .hl-list.hover .hl-list-item:hover {
  color: #40a9ff;
  background-color: #F6F9FB;
}
.hl-list.bordered .hl-list-item {
  border: 1px solid #EFF2F5;
}
.hl-list.bordered .hl-list-item:last-child {
  margin-bottom: 0;
}
.hl-list.bordered.radius .item:first-child {
  border-radius: 4px 4px 0 0;
}
.hl-list.bordered.radius .item:last-child {
  border-radius: 0 0 4px 4px;
}
.hl-list.border-x .hl-list-item {
  border-bottom: 1px solid #EFF2F5;
}
.hl-list.border-x .hl-list-item:last-child {
  margin-bottom: 0;
}
.hl-vl-wrapper {
  position: relative;
}
.hl-vl-wrapper:hover .hl-virtual-scrollbar,
.hl-vl-wrapper .always-on .hl-virtual-scrollbar {
  opacity: 1;
}
.hl-vg-wrapper {
  position: relative;
}
.hl-virtual-scrollbar {
  opacity: 0;
  transition: opacity 340ms ease-out;
}
.hl-virtual-scrollbar .scrollbar-thumb {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.4s background-color;
}
.hl-virtual-scrollbar .scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.hl-virtual-scrollbar .scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.5);
}
.hl-anchor {
  position: relative;
  overflow: auto;
}
.hl-anchor .slider-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 2px;
  height: 24px;
  background-color: #40a9ff;
  transition: top 0.3s ease;
  margin-top: 2px;
}
.hl-anchor .anchor-list {
  position: relative;
}
.hl-anchor .anchor-list::before {
  position: absolute;
  content: "";
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #EFF2F5;
}
.hl-anchor .anchor-sublist {
  margin-top: 4px;
}
.hl-anchor.slider-less .slider-bar {
  display: none;
}
.hl-anchor.slider-less .anchor-list::before {
  display: none;
}
.hl-anchor.right .slider-bar {
  left: auto;
  right: 0;
}
.hl-anchor.right .anchor-list::before {
  left: auto;
  right: 0;
}
.hl-anchor.right .hl-anchor-link .hl-anchor-link {
  margin-left: unset;
  margin-right: 1em;
}
.hl-anchor.right .hl-anchor-link a {
  justify-content: flex-end;
}
.hl-anchor .hl-anchor-link .hl-anchor-link {
  margin-left: 1em;
}
.hl-anchor .hl-anchor-link a {
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 28px;
  padding: 8px 16px;
  color: #5E6278;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-anchor .hl-anchor-link a:hover {
  font-weight: 400;
  color: #5E6278;
  background-color: transparent;
}
.hl-anchor .hl-anchor-link.is-active > a {
  font-weight: 500;
  color: #009EF7;
  background-color: transparent;
}
.hl-skeleton {
  --skeleton-color: #E8EBF8;
  --skeleton-to-color: #EFF2F5;
  --skeleton-circle-size: 40px;
  width: 100%;
}
.hl-skeleton .first-line {
  height: 16px;
  margin-top: 16px;
  background: var(--skeleton-color);
}
.hl-skeleton .paragraph {
  height: 16px;
  margin-top: 16px;
  background: var(--skeleton-color);
}
.hl-skeleton.is-animated .hl-skeleton-item {
  background: linear-gradient(90deg, var(--skeleton-color) 25%, var(--skeleton-to-color) 37%, var(--skeleton-color) 63%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
}
.hl-skeleton-item {
  background: var(--skeleton-color);
  display: inline-block;
  height: 16px;
  border-radius: var(--border-radius-base);
  width: 100%;
}
.hl-skeleton-item.circle {
  border-radius: 50%;
  width: var(--skeleton-circle-size);
  height: var(--skeleton-circle-size);
  line-height: var(--skeleton-circle-size);
}
.hl-skeleton-item.button {
  height: 40px;
  width: 64px;
  border-radius: 4px;
}
.hl-skeleton-item.p {
  width: 100%;
}
.hl-skeleton-item.p.is-last {
  width: 61%;
}
.hl-skeleton-item.p.is-first {
  width: 33%;
}
.hl-skeleton-item.text {
  width: 100%;
  height: 12px;
}
.hl-skeleton-item.caption {
  height: 12px;
}
.hl-skeleton-item.h1 {
  height: 30px;
}
.hl-skeleton-item.h3 {
  height: 20px;
}
.hl-skeleton-item.h5 {
  height: 16px;
}
.hl-skeleton-item.image {
  width: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
}
.hl-skeleton-item.image svg {
  fill: #A1A5B7;
  width: 22%;
  height: 22%;
}
@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.hl-virtual-table .table-body:not(.no-data) {
  display: block;
}
.hl-virtual-table .table-body:not(.no-data) .expand-row td {
  display: block;
}
.hl-virtual-table .table-body:not(.no-data) .expand-row .expand-icon,
.hl-virtual-table .table-body:not(.no-data) .expand-row .placeholder-icon {
  transition: none !important;
}
.hl-virtual-table .table-body:not(.no-data) .loading-row td {
  display: block;
}
i.primary {
  color: #40a9ff;
  --icon-start-color: #fff;
}
i.primary.fill {
  color: #FFFFFF;
  background-color: #40a9ff;
}
i.primary.fill.light {
  color: #40a9ff;
  background-color: #f4faff;
}
i.info {
  color: #7239ea;
  --icon-start-color: #fff;
}
i.info.fill {
  color: #FFFFFF;
  background-color: #7239ea;
}
i.info.fill.light {
  color: #7239ea;
  background-color: #f7f3fe;
}
i.success {
  color: #50cd89;
  --icon-start-color: #fff;
}
i.success.fill {
  color: #FFFFFF;
  background-color: #50cd89;
}
i.success.fill.light {
  color: #50cd89;
  background-color: #f5fcf8;
}
i.warning {
  color: #ffc700;
  --icon-start-color: #fff;
}
i.warning.fill {
  color: #FFFFFF;
  background-color: #ffc700;
}
i.warning.fill.light {
  color: #ffc700;
  background-color: #fffcf0;
}
i.danger {
  color: #f1416c;
  --icon-start-color: #fff;
}
i.danger.fill {
  color: #FFFFFF;
  background-color: #f1416c;
}
i.danger.fill.light {
  color: #f1416c;
  background-color: #fef4f6;
}
i.xxxs {
  font-size: 12px;
}
i.xxxs.hl-icon {
  width: 12px;
  height: 12px;
}
i.xxxs.hl-icon.fill {
  width: 24px;
  height: 24px;
}
i.xxxs.hl-icon.fill.radius {
  border-radius: 3px;
}
i.xxxs.hl-icon.fill svg {
  width: 12px;
  height: 12px;
}
i.xxs {
  font-size: 14px;
}
i.xxs.hl-icon {
  width: 14px;
  height: 14px;
}
i.xxs.hl-icon.fill {
  width: 28px;
  height: 28px;
}
i.xxs.hl-icon.fill.radius {
  border-radius: 3px;
}
i.xxs.hl-icon.fill svg {
  width: 14px;
  height: 14px;
}
i.xs {
  font-size: 16px;
}
i.xs.hl-icon {
  width: 16px;
  height: 16px;
}
i.xs.hl-icon.fill {
  width: 32px;
  height: 32px;
}
i.xs.hl-icon.fill.radius {
  border-radius: 3px;
}
i.xs.hl-icon.fill svg {
  width: 16px;
  height: 16px;
}
i.sm {
  font-size: 18px;
}
i.sm.hl-icon {
  width: 18px;
  height: 18px;
}
i.sm.hl-icon.fill {
  width: 36px;
  height: 36px;
}
i.sm.hl-icon.fill.radius {
  border-radius: 4px;
}
i.sm.hl-icon.fill svg {
  width: 18px;
  height: 18px;
}
i.md {
  font-size: 20px;
}
i.md.hl-icon {
  width: 20px;
  height: 20px;
}
i.md.hl-icon.fill {
  width: 40px;
  height: 40px;
}
i.md.hl-icon.fill.radius {
  border-radius: 4px;
}
i.md.hl-icon.fill svg {
  width: 20px;
  height: 20px;
}
i.lg {
  font-size: 24px;
}
i.lg.hl-icon {
  width: 24px;
  height: 24px;
}
i.lg.hl-icon.fill {
  width: 48px;
  height: 48px;
}
i.lg.hl-icon.fill.radius {
  border-radius: 6px;
}
i.lg.hl-icon.fill svg {
  width: 24px;
  height: 24px;
}
i.xl {
  font-size: 28px;
}
i.xl.hl-icon {
  width: 28px;
  height: 28px;
}
i.xl.hl-icon.fill {
  width: 56px;
  height: 56px;
}
i.xl.hl-icon.fill.radius {
  border-radius: 6px;
}
i.xl.hl-icon.fill svg {
  width: 28px;
  height: 28px;
}
i.xxl {
  font-size: 32px;
}
i.xxl.hl-icon {
  width: 32px;
  height: 32px;
}
i.xxl.hl-icon.fill {
  width: 64px;
  height: 64px;
}
i.xxl.hl-icon.fill.radius {
  border-radius: 8px;
}
i.xxl.hl-icon.fill svg {
  width: 32px;
  height: 32px;
}
i.xxxl {
  font-size: 36px;
}
i.xxxl.hl-icon {
  width: 36px;
  height: 36px;
}
i.xxxl.hl-icon.fill {
  width: 72px;
  height: 72px;
}
i.xxxl.hl-icon.fill.radius {
  border-radius: 8px;
}
i.xxxl.hl-icon.fill svg {
  width: 36px;
  height: 36px;
}
.hl-button.primary {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-color: #40a9ff;
}
.hl-button.primary:focus, .hl-button.primary.is-focus {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-button.primary:disabled, .hl-button.primary.is-disabled {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.primary.outline {
  color: #40a9ff;
  background-color: transparent;
  border-color: #40a9ff;
}
.hl-button.primary.outline.light {
  background-color: transparent;
  border-color: #40a9ff;
}
.hl-button.primary.outline.light.is-hover, .hl-button.primary.outline.light.is-focus, .hl-button.primary.outline.light:focus, .hl-button.primary.outline.light:hover {
  color: #66baff;
  background-color: #f4faff;
  border-color: #66baff;
}
.hl-button.primary.outline.light.is-active, .hl-button.primary.outline.light:active {
  color: #1395ff;
  background-color: #f4faff;
  border-color: #1395ff;
}
.hl-button.primary.light {
  color: #40a9ff;
  background-color: #f4faff;
  border-color: #f4faff;
}
.hl-button.primary.no-fill {
  color: #40a9ff;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.primary.no-fill.is-hover, .hl-button.primary.no-fill.is-focus, .hl-button.primary.no-fill:focus, .hl-button.primary.no-fill:hover {
  border-color: transparent;
}
.hl-button.primary.no-fill.light:focus, .hl-button.primary.no-fill.light:hover {
  color: #40a9ff;
  background-color: #f4faff;
  border-color: transparent;
}
.hl-button.primary.no-fill.light.is-active, .hl-button.primary.no-fill.light:active {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-color: transparent;
}
.hl-button.primary.is-hover, .hl-button.primary.is-focus, .hl-button.primary:focus, .hl-button.primary:hover {
  color: #FFFFFF;
  background-color: #66baff;
  border-color: #66baff;
}
.hl-button.primary.is-active, .hl-button.primary:active {
  color: #FFFFFF;
  background-color: #1395ff;
  border-color: #1395ff;
}
.hl-radio.is-checked .hl-button.primary, .hl-checkbox.is-checked .hl-button.primary {
  color: #FFFFFF;
  background-color: #66baff;
  border-color: #66baff;
}
.hl-button.hover-primary.is-hover, .hl-button.hover-primary.is-focus, .hl-button.hover-primary:focus, .hl-button.hover-primary:hover {
  color: #FFFFFF;
  background-color: #66baff;
  border-color: #66baff;
}
.hl-button.hover-primary:focus, .hl-button.hover-primary.is-focus {
  box-shadow: 0 0 0 4px rgba(102, 186, 255, 0.1);
}
.hl-button.hover-primary.is-active, .hl-button.hover-primary:active {
  color: #FFFFFF;
  background-color: #1395ff;
  border-color: #1395ff;
}
.hl-button.hover-primary.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-primary, .hl-checkbox.is-checked .hl-button.hover-primary {
  color: #FFFFFF;
  background-color: #66baff;
  border-color: #66baff;
}
.hl-button.hover-primary-light.is-hover, .hl-button.hover-primary-light.is-focus, .hl-button.hover-primary-light:focus, .hl-button.hover-primary-light:hover {
  color: #40a9ff;
  background-color: #f4faff;
  border-color: #f4faff;
}
.hl-button.hover-primary-light:focus, .hl-button.hover-primary-light.is-focus {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-button.hover-primary-light.is-active, .hl-button.hover-primary-light:active {
  color: #FFFFFF;
  background-color: #1395ff;
  border-color: #1395ff;
}
.hl-button.hover-primary-light.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-primary-light, .hl-checkbox.is-checked .hl-button.hover-primary-light {
  color: #FFFFFF;
  background-color: #66baff;
  border-color: #66baff;
}
.hl-button.info {
  color: #FFFFFF;
  background-color: #7239ea;
  border-color: #7239ea;
}
.hl-button.info:focus, .hl-button.info.is-focus {
  box-shadow: 0 0 0 4px rgba(114, 57, 234, 0.1);
}
.hl-button.info:disabled, .hl-button.info.is-disabled {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.info.outline {
  color: #7239ea;
  background-color: transparent;
  border-color: #7239ea;
}
.hl-button.info.outline.light {
  background-color: transparent;
  border-color: #7239ea;
}
.hl-button.info.outline.light.is-hover, .hl-button.info.outline.light.is-focus, .hl-button.info.outline.light:focus, .hl-button.info.outline.light:hover {
  color: #8e61ee;
  background-color: #f7f3fe;
  border-color: #8e61ee;
}
.hl-button.info.outline.light.is-active, .hl-button.info.outline.light:active {
  color: #5918e2;
  background-color: #f7f3fe;
  border-color: #5918e2;
}
.hl-button.info.light {
  color: #7239ea;
  background-color: #f7f3fe;
  border-color: #f7f3fe;
}
.hl-button.info.no-fill {
  color: #7239ea;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.info.no-fill.is-hover, .hl-button.info.no-fill.is-focus, .hl-button.info.no-fill:focus, .hl-button.info.no-fill:hover {
  border-color: transparent;
}
.hl-button.info.no-fill.light:focus, .hl-button.info.no-fill.light:hover {
  color: #7239ea;
  background-color: #f7f3fe;
  border-color: transparent;
}
.hl-button.info.no-fill.light.is-active, .hl-button.info.no-fill.light:active {
  color: #FFFFFF;
  background-color: #7239ea;
  border-color: transparent;
}
.hl-button.info.is-hover, .hl-button.info.is-focus, .hl-button.info:focus, .hl-button.info:hover {
  color: #FFFFFF;
  background-color: #8e61ee;
  border-color: #8e61ee;
}
.hl-button.info.is-active, .hl-button.info:active {
  color: #FFFFFF;
  background-color: #5918e2;
  border-color: #5918e2;
}
.hl-radio.is-checked .hl-button.info, .hl-checkbox.is-checked .hl-button.info {
  color: #FFFFFF;
  background-color: #8e61ee;
  border-color: #8e61ee;
}
.hl-button.hover-info.is-hover, .hl-button.hover-info.is-focus, .hl-button.hover-info:focus, .hl-button.hover-info:hover {
  color: #FFFFFF;
  background-color: #8e61ee;
  border-color: #8e61ee;
}
.hl-button.hover-info:focus, .hl-button.hover-info.is-focus {
  box-shadow: 0 0 0 4px rgba(142, 97, 238, 0.1);
}
.hl-button.hover-info.is-active, .hl-button.hover-info:active {
  color: #FFFFFF;
  background-color: #5918e2;
  border-color: #5918e2;
}
.hl-button.hover-info.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-info, .hl-checkbox.is-checked .hl-button.hover-info {
  color: #FFFFFF;
  background-color: #8e61ee;
  border-color: #8e61ee;
}
.hl-button.hover-info-light.is-hover, .hl-button.hover-info-light.is-focus, .hl-button.hover-info-light:focus, .hl-button.hover-info-light:hover {
  color: #7239ea;
  background-color: #f7f3fe;
  border-color: #f7f3fe;
}
.hl-button.hover-info-light:focus, .hl-button.hover-info-light.is-focus {
  box-shadow: 0 0 0 4px rgba(114, 57, 234, 0.1);
}
.hl-button.hover-info-light.is-active, .hl-button.hover-info-light:active {
  color: #FFFFFF;
  background-color: #5918e2;
  border-color: #5918e2;
}
.hl-button.hover-info-light.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-info-light, .hl-checkbox.is-checked .hl-button.hover-info-light {
  color: #FFFFFF;
  background-color: #8e61ee;
  border-color: #8e61ee;
}
.hl-button.success {
  color: #FFFFFF;
  background-color: #50cd89;
  border-color: #50cd89;
}
.hl-button.success:focus, .hl-button.success.is-focus {
  box-shadow: 0 0 0 4px rgba(80, 205, 137, 0.1);
}
.hl-button.success:disabled, .hl-button.success.is-disabled {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.success.outline {
  color: #50cd89;
  background-color: transparent;
  border-color: #50cd89;
}
.hl-button.success.outline.light {
  background-color: transparent;
  border-color: #50cd89;
}
.hl-button.success.outline.light.is-hover, .hl-button.success.outline.light.is-focus, .hl-button.success.outline.light:focus, .hl-button.success.outline.light:hover {
  color: #73d7a1;
  background-color: #f5fcf8;
  border-color: #73d7a1;
}
.hl-button.success.outline.light.is-active, .hl-button.success.outline.light:active {
  color: #36bf75;
  background-color: #f5fcf8;
  border-color: #36bf75;
}
.hl-button.success.light {
  color: #50cd89;
  background-color: #f5fcf8;
  border-color: #f5fcf8;
}
.hl-button.success.no-fill {
  color: #50cd89;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.success.no-fill.is-hover, .hl-button.success.no-fill.is-focus, .hl-button.success.no-fill:focus, .hl-button.success.no-fill:hover {
  border-color: transparent;
}
.hl-button.success.no-fill.light:focus, .hl-button.success.no-fill.light:hover {
  color: #50cd89;
  background-color: #f5fcf8;
  border-color: transparent;
}
.hl-button.success.no-fill.light.is-active, .hl-button.success.no-fill.light:active {
  color: #FFFFFF;
  background-color: #50cd89;
  border-color: transparent;
}
.hl-button.success.is-hover, .hl-button.success.is-focus, .hl-button.success:focus, .hl-button.success:hover {
  color: #FFFFFF;
  background-color: #73d7a1;
  border-color: #73d7a1;
}
.hl-button.success.is-active, .hl-button.success:active {
  color: #FFFFFF;
  background-color: #36bf75;
  border-color: #36bf75;
}
.hl-radio.is-checked .hl-button.success, .hl-checkbox.is-checked .hl-button.success {
  color: #FFFFFF;
  background-color: #73d7a1;
  border-color: #73d7a1;
}
.hl-button.hover-success.is-hover, .hl-button.hover-success.is-focus, .hl-button.hover-success:focus, .hl-button.hover-success:hover {
  color: #FFFFFF;
  background-color: #73d7a1;
  border-color: #73d7a1;
}
.hl-button.hover-success:focus, .hl-button.hover-success.is-focus {
  box-shadow: 0 0 0 4px rgba(115, 215, 161, 0.1);
}
.hl-button.hover-success.is-active, .hl-button.hover-success:active {
  color: #FFFFFF;
  background-color: #36bf75;
  border-color: #36bf75;
}
.hl-button.hover-success.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-success, .hl-checkbox.is-checked .hl-button.hover-success {
  color: #FFFFFF;
  background-color: #73d7a1;
  border-color: #73d7a1;
}
.hl-button.hover-success-light.is-hover, .hl-button.hover-success-light.is-focus, .hl-button.hover-success-light:focus, .hl-button.hover-success-light:hover {
  color: #50cd89;
  background-color: #f5fcf8;
  border-color: #f5fcf8;
}
.hl-button.hover-success-light:focus, .hl-button.hover-success-light.is-focus {
  box-shadow: 0 0 0 4px rgba(80, 205, 137, 0.1);
}
.hl-button.hover-success-light.is-active, .hl-button.hover-success-light:active {
  color: #FFFFFF;
  background-color: #36bf75;
  border-color: #36bf75;
}
.hl-button.hover-success-light.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-success-light, .hl-checkbox.is-checked .hl-button.hover-success-light {
  color: #FFFFFF;
  background-color: #73d7a1;
  border-color: #73d7a1;
}
.hl-button.warning {
  color: #FFFFFF;
  background-color: #ffc700;
  border-color: #ffc700;
}
.hl-button.warning:focus, .hl-button.warning.is-focus {
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.1);
}
.hl-button.warning:disabled, .hl-button.warning.is-disabled {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.warning.outline {
  color: #ffc700;
  background-color: transparent;
  border-color: #ffc700;
}
.hl-button.warning.outline.light {
  background-color: transparent;
  border-color: #ffc700;
}
.hl-button.warning.outline.light.is-hover, .hl-button.warning.outline.light.is-focus, .hl-button.warning.outline.light:focus, .hl-button.warning.outline.light:hover {
  color: #ffd233;
  background-color: #fffcf0;
  border-color: #ffd233;
}
.hl-button.warning.outline.light.is-active, .hl-button.warning.outline.light:active {
  color: #dbab00;
  background-color: #fffcf0;
  border-color: #dbab00;
}
.hl-button.warning.light {
  color: #ffc700;
  background-color: #fffcf0;
  border-color: #fffcf0;
}
.hl-button.warning.no-fill {
  color: #ffc700;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.warning.no-fill.is-hover, .hl-button.warning.no-fill.is-focus, .hl-button.warning.no-fill:focus, .hl-button.warning.no-fill:hover {
  border-color: transparent;
}
.hl-button.warning.no-fill.light:focus, .hl-button.warning.no-fill.light:hover {
  color: #ffc700;
  background-color: #fffcf0;
  border-color: transparent;
}
.hl-button.warning.no-fill.light.is-active, .hl-button.warning.no-fill.light:active {
  color: #FFFFFF;
  background-color: #ffc700;
  border-color: transparent;
}
.hl-button.warning.is-hover, .hl-button.warning.is-focus, .hl-button.warning:focus, .hl-button.warning:hover {
  color: #FFFFFF;
  background-color: #ffd233;
  border-color: #ffd233;
}
.hl-button.warning.is-active, .hl-button.warning:active {
  color: #FFFFFF;
  background-color: #dbab00;
  border-color: #dbab00;
}
.hl-radio.is-checked .hl-button.warning, .hl-checkbox.is-checked .hl-button.warning {
  color: #FFFFFF;
  background-color: #ffd233;
  border-color: #ffd233;
}
.hl-button.hover-warning.is-hover, .hl-button.hover-warning.is-focus, .hl-button.hover-warning:focus, .hl-button.hover-warning:hover {
  color: #FFFFFF;
  background-color: #ffd233;
  border-color: #ffd233;
}
.hl-button.hover-warning:focus, .hl-button.hover-warning.is-focus {
  box-shadow: 0 0 0 4px rgba(255, 210, 51, 0.1);
}
.hl-button.hover-warning.is-active, .hl-button.hover-warning:active {
  color: #FFFFFF;
  background-color: #dbab00;
  border-color: #dbab00;
}
.hl-button.hover-warning.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-warning, .hl-checkbox.is-checked .hl-button.hover-warning {
  color: #FFFFFF;
  background-color: #ffd233;
  border-color: #ffd233;
}
.hl-button.hover-warning-light.is-hover, .hl-button.hover-warning-light.is-focus, .hl-button.hover-warning-light:focus, .hl-button.hover-warning-light:hover {
  color: #ffc700;
  background-color: #fffcf0;
  border-color: #fffcf0;
}
.hl-button.hover-warning-light:focus, .hl-button.hover-warning-light.is-focus {
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.1);
}
.hl-button.hover-warning-light.is-active, .hl-button.hover-warning-light:active {
  color: #FFFFFF;
  background-color: #dbab00;
  border-color: #dbab00;
}
.hl-button.hover-warning-light.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-warning-light, .hl-checkbox.is-checked .hl-button.hover-warning-light {
  color: #FFFFFF;
  background-color: #ffd233;
  border-color: #ffd233;
}
.hl-button.danger {
  color: #FFFFFF;
  background-color: #f1416c;
  border-color: #f1416c;
}
.hl-button.danger:focus, .hl-button.danger.is-focus {
  box-shadow: 0 0 0 4px rgba(241, 65, 108, 0.1);
}
.hl-button.danger:disabled, .hl-button.danger.is-disabled {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.danger.outline {
  color: #f1416c;
  background-color: transparent;
  border-color: #f1416c;
}
.hl-button.danger.outline.light {
  background-color: transparent;
  border-color: #f1416c;
}
.hl-button.danger.outline.light.is-hover, .hl-button.danger.outline.light.is-focus, .hl-button.danger.outline.light:focus, .hl-button.danger.outline.light:hover {
  color: #f46789;
  background-color: #fef4f6;
  border-color: #f46789;
}
.hl-button.danger.outline.light.is-active, .hl-button.danger.outline.light:active {
  color: #ee194d;
  background-color: #fef4f6;
  border-color: #ee194d;
}
.hl-button.danger.light {
  color: #f1416c;
  background-color: #fef4f6;
  border-color: #fef4f6;
}
.hl-button.danger.no-fill {
  color: #f1416c;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.danger.no-fill.is-hover, .hl-button.danger.no-fill.is-focus, .hl-button.danger.no-fill:focus, .hl-button.danger.no-fill:hover {
  border-color: transparent;
}
.hl-button.danger.no-fill.light:focus, .hl-button.danger.no-fill.light:hover {
  color: #f1416c;
  background-color: #fef4f6;
  border-color: transparent;
}
.hl-button.danger.no-fill.light.is-active, .hl-button.danger.no-fill.light:active {
  color: #FFFFFF;
  background-color: #f1416c;
  border-color: transparent;
}
.hl-button.danger.is-hover, .hl-button.danger.is-focus, .hl-button.danger:focus, .hl-button.danger:hover {
  color: #FFFFFF;
  background-color: #f46789;
  border-color: #f46789;
}
.hl-button.danger.is-active, .hl-button.danger:active {
  color: #FFFFFF;
  background-color: #ee194d;
  border-color: #ee194d;
}
.hl-radio.is-checked .hl-button.danger, .hl-checkbox.is-checked .hl-button.danger {
  color: #FFFFFF;
  background-color: #f46789;
  border-color: #f46789;
}
.hl-button.hover-danger.is-hover, .hl-button.hover-danger.is-focus, .hl-button.hover-danger:focus, .hl-button.hover-danger:hover {
  color: #FFFFFF;
  background-color: #f46789;
  border-color: #f46789;
}
.hl-button.hover-danger:focus, .hl-button.hover-danger.is-focus {
  box-shadow: 0 0 0 4px rgba(244, 103, 137, 0.1);
}
.hl-button.hover-danger.is-active, .hl-button.hover-danger:active {
  color: #FFFFFF;
  background-color: #ee194d;
  border-color: #ee194d;
}
.hl-button.hover-danger.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-danger, .hl-checkbox.is-checked .hl-button.hover-danger {
  color: #FFFFFF;
  background-color: #f46789;
  border-color: #f46789;
}
.hl-button.hover-danger-light.is-hover, .hl-button.hover-danger-light.is-focus, .hl-button.hover-danger-light:focus, .hl-button.hover-danger-light:hover {
  color: #f1416c;
  background-color: #fef4f6;
  border-color: #fef4f6;
}
.hl-button.hover-danger-light:focus, .hl-button.hover-danger-light.is-focus {
  box-shadow: 0 0 0 4px rgba(241, 65, 108, 0.1);
}
.hl-button.hover-danger-light.is-active, .hl-button.hover-danger-light:active {
  color: #FFFFFF;
  background-color: #ee194d;
  border-color: #ee194d;
}
.hl-button.hover-danger-light.no-fill {
  border-color: transparent;
}
.hl-radio.is-checked .hl-button.hover-danger-light, .hl-checkbox.is-checked .hl-button.hover-danger-light {
  color: #FFFFFF;
  background-color: #f46789;
  border-color: #f46789;
}
.hl-button.sm {
  padding: 3px 8px;
  font-size: 12px;
  line-height: 1.6666666667;
  height: 28px;
  border-radius: 3px;
}
.hl-button.sm.round {
  padding: 3px 8px;
}
.hl-button.sm.equal {
  min-width: 28px;
  max-width: 28px;
  width: 28px;
  height: 28px;
}
.hl-button.sm .hl-spinner,
.hl-button.sm .hl-icon {
  font-size: 14px;
  width: 14px;
  height: 14px;
}
.hl-button.md {
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5714285714;
  height: 36px;
  border-radius: 4px;
}
.hl-button.md.round {
  padding: 6px 12px;
}
.hl-button.md.equal {
  min-width: 36px;
  max-width: 36px;
  width: 36px;
  height: 36px;
}
.hl-button.md .hl-spinner,
.hl-button.md .hl-icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
}
.hl-button.lg {
  padding: 9px 16px;
  font-size: 16px;
  line-height: 1.5;
  height: 44px;
  border-radius: 6px;
}
.hl-button.lg.round {
  padding: 9px 16px;
}
.hl-button.lg.equal {
  min-width: 44px;
  max-width: 44px;
  width: 44px;
  height: 44px;
}
.hl-button.lg .hl-spinner,
.hl-button.lg .hl-icon {
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.hl-input.primary {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.primary:hover {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.primary.fill {
  border-color: transparent;
  background-color: #F3F6F9;
}
.hl-input.primary.is-focus, .hl-input.primary.is-active {
  color: #40a9ff;
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-input.primary.is-focus.input-affixe, .hl-input.primary.is-active.input-affixe {
  color: #40a9ff;
}
.hl-input.primary.is-focus {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-input.info {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.info:hover {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.info.fill {
  border-color: transparent;
  background-color: #F3F6F9;
}
.hl-input.info.is-focus, .hl-input.info.is-active {
  color: #7239ea;
  border-color: #7239ea;
  background-color: #FFFFFF;
}
.hl-input.info.is-focus.input-affixe, .hl-input.info.is-active.input-affixe {
  color: #7239ea;
}
.hl-input.info.is-focus {
  box-shadow: 0 0 0 4px rgba(114, 57, 234, 0.1);
}
.hl-input.success {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.success:hover {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.success.fill {
  border-color: transparent;
  background-color: #F3F6F9;
}
.hl-input.success.is-focus, .hl-input.success.is-active {
  color: #50cd89;
  border-color: #50cd89;
  background-color: #FFFFFF;
}
.hl-input.success.is-focus.input-affixe, .hl-input.success.is-active.input-affixe {
  color: #50cd89;
}
.hl-input.success.is-focus {
  box-shadow: 0 0 0 4px rgba(80, 205, 137, 0.1);
}
.hl-input.warning {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.warning:hover {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.warning.fill {
  border-color: transparent;
  background-color: #F3F6F9;
}
.hl-input.warning.is-focus, .hl-input.warning.is-active {
  color: #ffc700;
  border-color: #ffc700;
  background-color: #FFFFFF;
}
.hl-input.warning.is-focus.input-affixe, .hl-input.warning.is-active.input-affixe {
  color: #ffc700;
}
.hl-input.warning.is-focus {
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.1);
}
.hl-input.danger {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.danger:hover {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-input.danger.fill {
  border-color: transparent;
  background-color: #F3F6F9;
}
.hl-input.danger.is-focus, .hl-input.danger.is-active {
  color: #f1416c;
  border-color: #f1416c;
  background-color: #FFFFFF;
}
.hl-input.danger.is-focus.input-affixe, .hl-input.danger.is-active.input-affixe {
  color: #f1416c;
}
.hl-input.danger.is-focus {
  box-shadow: 0 0 0 4px rgba(241, 65, 108, 0.1);
}
.hl-input.sm {
  height: 28px;
  min-height: 28px;
  border-radius: 3px;
}
.hl-input.sm input {
  line-height: 1.6666666667;
  padding: 3px 8px;
  font-size: 12px;
}
.hl-input.sm.round {
  border-radius: 100px;
}
.hl-input.sm .input-affixe.prefix {
  margin-left: 8px;
}
.hl-input.sm .input-affixe.suffix {
  margin-right: 8px;
}
.hl-input.sm .input-affixe .hl-spinner,
.hl-input.sm .input-affixe .hl-icon {
  width: 14px;
  height: 14px;
}
.hl-input.sm .select-caret.hl-icon,
.hl-input.sm .select-close.hl-icon {
  width: 12px;
  height: 12px;
}
.hl-input.sm .input-count {
  padding: 6px;
}
.hl-input.sm .input-tags {
  padding: 3px;
}
.hl-input.sm .input-tags > input,
.hl-input.sm .input-tags .hl-tag {
  padding: 0 3px;
  font-size: 12px;
  height: 20px;
}
.hl-input.sm .input-tags .tag-close {
  font-size: inherit;
}
.hl-input.md {
  height: 36px;
  min-height: 36px;
  border-radius: 4px;
}
.hl-input.md input {
  line-height: 1.5714285714;
  padding: 6px 12px;
  font-size: 14px;
}
.hl-input.md.round {
  border-radius: 100px;
}
.hl-input.md .input-affixe.prefix {
  margin-left: 12px;
}
.hl-input.md .input-affixe.suffix {
  margin-right: 12px;
}
.hl-input.md .input-affixe .hl-spinner,
.hl-input.md .input-affixe .hl-icon {
  width: 16px;
  height: 16px;
}
.hl-input.md .select-caret.hl-icon,
.hl-input.md .select-close.hl-icon {
  width: 14px;
  height: 14px;
}
.hl-input.md .input-count {
  padding: 10px;
}
.hl-input.md .input-tags {
  padding: 6px;
}
.hl-input.md .input-tags > input,
.hl-input.md .input-tags .hl-tag {
  padding: 0 6px;
  font-size: 14px;
  height: 22px;
}
.hl-input.md .input-tags .tag-close {
  font-size: inherit;
}
.hl-input.lg {
  height: 44px;
  min-height: 44px;
  border-radius: 6px;
}
.hl-input.lg input {
  line-height: 1.5;
  padding: 9px 16px;
  font-size: 16px;
}
.hl-input.lg.round {
  border-radius: 100px;
}
.hl-input.lg .input-affixe.prefix {
  margin-left: 16px;
}
.hl-input.lg .input-affixe.suffix {
  margin-right: 16px;
}
.hl-input.lg .input-affixe .hl-spinner,
.hl-input.lg .input-affixe .hl-icon {
  width: 18px;
  height: 18px;
}
.hl-input.lg .select-caret.hl-icon,
.hl-input.lg .select-close.hl-icon {
  width: 16px;
  height: 16px;
}
.hl-input.lg .input-count {
  padding: 14px;
}
.hl-input.lg .input-tags {
  padding: 9px;
}
.hl-input.lg .input-tags > input,
.hl-input.lg .input-tags .hl-tag {
  padding: 0 9px;
  font-size: 16px;
  height: 24px;
}
.hl-input.lg .input-tags .tag-close {
  font-size: inherit;
}
.hl-form .hl-form-item.is-success .form-content .hl-input .input-affixe {
  color: none;
}
.hl-form .hl-form-item.is-success .form-content .form-content-info {
  color: none;
}
.hl-form.info-float .hl-form-item.is-success .form-content .form-content-info {
  color: #FFFFFF;
  background-color: none;
  opacity: 1;
  visibility: visible;
}
.hl-form.info-float .hl-form-item.is-success .form-content .form-content-info:before {
  border-right-color: none;
}
.hl-form.inline.info-float .form-content-info:before {
  border-right-color: transparent;
  border-top-color: none;
}
.hl-form .hl-form-item.is-warning .form-content .hl-input {
  border-color: #ffc700;
}
.hl-form .hl-form-item.is-warning .form-content .hl-input .input-affixe {
  color: #ffc700;
}
.hl-form .hl-form-item.is-warning .form-content .form-content-info {
  color: #ffc700;
}
.hl-form.info-float .hl-form-item.is-warning .form-content .form-content-info {
  color: #FFFFFF;
  background-color: #ffc700;
  opacity: 1;
  visibility: visible;
}
.hl-form.info-float .hl-form-item.is-warning .form-content .form-content-info:before {
  border-right-color: #ffc700;
}
.hl-form.inline.info-float .form-content-info:before {
  border-right-color: transparent;
  border-top-color: #ffc700;
}
.hl-form .hl-form-item.is-error .form-content .hl-input {
  border-color: #f1416c;
}
.hl-form .hl-form-item.is-error .form-content .hl-input .input-affixe {
  color: #f1416c;
}
.hl-form .hl-form-item.is-error .form-content .form-content-info {
  color: #f1416c;
}
.hl-form.info-float .hl-form-item.is-error .form-content .form-content-info {
  color: #FFFFFF;
  background-color: #f1416c;
  opacity: 1;
  visibility: visible;
}
.hl-form.info-float .hl-form-item.is-error .form-content .form-content-info:before {
  border-right-color: #f1416c;
}
.hl-form.inline.info-float .form-content-info:before {
  border-right-color: transparent;
  border-top-color: #f1416c;
}
.hl-form .hl-form-item.sm .form-label label {
  font-size: 12px;
  line-height: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.hl-form .hl-form-item.sm .form-content .hl-radio-group,
.hl-form .hl-form-item.sm .form-content .hl-checkbox-group {
  min-height: 28px;
  padding: 4px 0;
}
.hl-form .hl-form-item.md .form-label label {
  font-size: 14px;
  line-height: 22px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.hl-form .hl-form-item.md .form-content .hl-radio-group,
.hl-form .hl-form-item.md .form-content .hl-checkbox-group {
  min-height: 36px;
  padding: 7px 0;
}
.hl-form .hl-form-item.lg .form-label label {
  font-size: 16px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.hl-form .hl-form-item.lg .form-content .hl-radio-group,
.hl-form .hl-form-item.lg .form-content .hl-checkbox-group {
  min-height: 44px;
  padding: 10px 0;
}
.hl-checkbox.primary .checkbox-inner {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-checkbox.primary:hover .checkbox-inner {
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-checkbox.primary.is-checked .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.primary.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.primary.is-checked .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.primary.is-checked .checkbox-label {
  color: #40a9ff;
}
.hl-checkbox.primary.is-focus .checkbox-inner {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-checkbox.primary.is-indeterminate .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.primary.is-indeterminate .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.primary.is-indeterminate .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.primary.round .checkbox-inner {
  background-color: #E4E6EF;
}
.hl-checkbox.primary.round.is-checked .checkbox-inner {
  background-color: #40a9ff;
}
.hl-checkbox.primary.round.is-checked .checkbox-inner:after {
  background-color: #fff;
}
.hl-checkbox.primary.fill .checkbox-inner {
  border-color: #f4faff;
  background-color: #f4faff;
}
.hl-checkbox.primary.fill.is-checked .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.primary.fill.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.info .checkbox-inner {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-checkbox.info:hover .checkbox-inner {
  border-color: #7239ea;
  background-color: #FFFFFF;
}
.hl-checkbox.info.is-checked .checkbox-inner {
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-checkbox.info.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.info.is-checked .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.info.is-checked .checkbox-label {
  color: #7239ea;
}
.hl-checkbox.info.is-focus .checkbox-inner {
  box-shadow: 0 0 0 4px rgba(114, 57, 234, 0.1);
}
.hl-checkbox.info.is-indeterminate .checkbox-inner {
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-checkbox.info.is-indeterminate .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.info.is-indeterminate .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.info.round .checkbox-inner {
  background-color: #E4E6EF;
}
.hl-checkbox.info.round.is-checked .checkbox-inner {
  background-color: #7239ea;
}
.hl-checkbox.info.round.is-checked .checkbox-inner:after {
  background-color: #fff;
}
.hl-checkbox.info.fill .checkbox-inner {
  border-color: #f7f3fe;
  background-color: #f7f3fe;
}
.hl-checkbox.info.fill.is-checked .checkbox-inner {
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-checkbox.info.fill.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.success .checkbox-inner {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-checkbox.success:hover .checkbox-inner {
  border-color: #50cd89;
  background-color: #FFFFFF;
}
.hl-checkbox.success.is-checked .checkbox-inner {
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-checkbox.success.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.success.is-checked .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.success.is-checked .checkbox-label {
  color: #50cd89;
}
.hl-checkbox.success.is-focus .checkbox-inner {
  box-shadow: 0 0 0 4px rgba(80, 205, 137, 0.1);
}
.hl-checkbox.success.is-indeterminate .checkbox-inner {
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-checkbox.success.is-indeterminate .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.success.is-indeterminate .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.success.round .checkbox-inner {
  background-color: #E4E6EF;
}
.hl-checkbox.success.round.is-checked .checkbox-inner {
  background-color: #50cd89;
}
.hl-checkbox.success.round.is-checked .checkbox-inner:after {
  background-color: #fff;
}
.hl-checkbox.success.fill .checkbox-inner {
  border-color: #f5fcf8;
  background-color: #f5fcf8;
}
.hl-checkbox.success.fill.is-checked .checkbox-inner {
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-checkbox.success.fill.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.warning .checkbox-inner {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-checkbox.warning:hover .checkbox-inner {
  border-color: #ffc700;
  background-color: #FFFFFF;
}
.hl-checkbox.warning.is-checked .checkbox-inner {
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-checkbox.warning.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.warning.is-checked .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.warning.is-checked .checkbox-label {
  color: #ffc700;
}
.hl-checkbox.warning.is-focus .checkbox-inner {
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.1);
}
.hl-checkbox.warning.is-indeterminate .checkbox-inner {
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-checkbox.warning.is-indeterminate .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.warning.is-indeterminate .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.warning.round .checkbox-inner {
  background-color: #E4E6EF;
}
.hl-checkbox.warning.round.is-checked .checkbox-inner {
  background-color: #ffc700;
}
.hl-checkbox.warning.round.is-checked .checkbox-inner:after {
  background-color: #fff;
}
.hl-checkbox.warning.fill .checkbox-inner {
  border-color: #fffcf0;
  background-color: #fffcf0;
}
.hl-checkbox.warning.fill.is-checked .checkbox-inner {
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-checkbox.warning.fill.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.danger .checkbox-inner {
  border-color: #E4E6EF;
  background-color: #FFFFFF;
}
.hl-checkbox.danger:hover .checkbox-inner {
  border-color: #f1416c;
  background-color: #FFFFFF;
}
.hl-checkbox.danger.is-checked .checkbox-inner {
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-checkbox.danger.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.danger.is-checked .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.danger.is-checked .checkbox-label {
  color: #f1416c;
}
.hl-checkbox.danger.is-focus .checkbox-inner {
  box-shadow: 0 0 0 4px rgba(241, 65, 108, 0.1);
}
.hl-checkbox.danger.is-indeterminate .checkbox-inner {
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-checkbox.danger.is-indeterminate .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.danger.is-indeterminate .checkbox-inner .icon-checked {
  color: #fff;
}
.hl-checkbox.danger.round .checkbox-inner {
  background-color: #E4E6EF;
}
.hl-checkbox.danger.round.is-checked .checkbox-inner {
  background-color: #f1416c;
}
.hl-checkbox.danger.round.is-checked .checkbox-inner:after {
  background-color: #fff;
}
.hl-checkbox.danger.fill .checkbox-inner {
  border-color: #fef4f6;
  background-color: #fef4f6;
}
.hl-checkbox.danger.fill.is-checked .checkbox-inner {
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-checkbox.danger.fill.is-checked .checkbox-inner:after {
  color: #fff;
}
.hl-checkbox.sm {
  font-size: 12px;
}
.hl-checkbox.sm .checkbox-inner {
  width: 16px;
  height: 16px;
  line-height: 16px;
}
.hl-checkbox.sm .checkbox-inner:after {
  font-size: 10.6666666667px;
}
.hl-checkbox.md {
  font-size: 14px;
}
.hl-checkbox.md .checkbox-inner {
  width: 18px;
  height: 18px;
  line-height: 18px;
}
.hl-checkbox.md .checkbox-inner:after {
  font-size: 12px;
}
.hl-checkbox.lg {
  font-size: 16px;
}
.hl-checkbox.lg .checkbox-inner {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
.hl-checkbox.lg .checkbox-inner:after {
  font-size: 16px;
}
.hl-radio.primary:hover .radio-inner {
  border-color: #40a9ff;
  background-color: #FFFFFF;
}
.hl-radio.primary.is-checked .radio-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-radio.primary.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.primary.is-checked .radio-label {
  color: #40a9ff;
}
.hl-radio.primary.is-focus .radio-inner {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.1);
}
.hl-radio.primary.fill .radio-inner {
  border-color: #f4faff;
  background-color: #f4faff;
}
.hl-radio.primary.fill.is-checked .radio-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-radio.primary.fill.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.info:hover .radio-inner {
  border-color: #7239ea;
  background-color: #FFFFFF;
}
.hl-radio.info.is-checked .radio-inner {
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-radio.info.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.info.is-checked .radio-label {
  color: #7239ea;
}
.hl-radio.info.is-focus .radio-inner {
  box-shadow: 0 0 0 4px rgba(114, 57, 234, 0.1);
}
.hl-radio.info.fill .radio-inner {
  border-color: #f7f3fe;
  background-color: #f7f3fe;
}
.hl-radio.info.fill.is-checked .radio-inner {
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-radio.info.fill.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.success:hover .radio-inner {
  border-color: #50cd89;
  background-color: #FFFFFF;
}
.hl-radio.success.is-checked .radio-inner {
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-radio.success.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.success.is-checked .radio-label {
  color: #50cd89;
}
.hl-radio.success.is-focus .radio-inner {
  box-shadow: 0 0 0 4px rgba(80, 205, 137, 0.1);
}
.hl-radio.success.fill .radio-inner {
  border-color: #f5fcf8;
  background-color: #f5fcf8;
}
.hl-radio.success.fill.is-checked .radio-inner {
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-radio.success.fill.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.warning:hover .radio-inner {
  border-color: #ffc700;
  background-color: #FFFFFF;
}
.hl-radio.warning.is-checked .radio-inner {
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-radio.warning.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.warning.is-checked .radio-label {
  color: #ffc700;
}
.hl-radio.warning.is-focus .radio-inner {
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.1);
}
.hl-radio.warning.fill .radio-inner {
  border-color: #fffcf0;
  background-color: #fffcf0;
}
.hl-radio.warning.fill.is-checked .radio-inner {
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-radio.warning.fill.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.danger:hover .radio-inner {
  border-color: #f1416c;
  background-color: #FFFFFF;
}
.hl-radio.danger.is-checked .radio-inner {
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-radio.danger.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.danger.is-checked .radio-label {
  color: #f1416c;
}
.hl-radio.danger.is-focus .radio-inner {
  box-shadow: 0 0 0 4px rgba(241, 65, 108, 0.1);
}
.hl-radio.danger.fill .radio-inner {
  border-color: #fef4f6;
  background-color: #fef4f6;
}
.hl-radio.danger.fill.is-checked .radio-inner {
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-radio.danger.fill.is-checked .radio-inner:after {
  background-color: #fff;
}
.hl-radio.sm {
  font-size: 12px;
  line-height: 16px;
}
.hl-radio.sm .radio-inner {
  width: 16px;
  height: 16px;
}
.hl-radio.md {
  font-size: 14px;
  line-height: 18px;
}
.hl-radio.md .radio-inner {
  width: 18px;
  height: 18px;
}
.hl-radio.lg {
  font-size: 16px;
  line-height: 24px;
}
.hl-radio.lg .radio-inner {
  width: 24px;
  height: 24px;
}
.hl-switch.primary input + em {
  border-color: #E4E6EF;
  background-color: #E4E6EF;
}
.hl-switch.primary input:checked + em {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-switch.primary input:checked + em + i {
  color: #40a9ff;
}
.hl-switch.info input + em {
  border-color: #E4E6EF;
  background-color: #E4E6EF;
}
.hl-switch.info input:checked + em {
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-switch.info input:checked + em + i {
  color: #7239ea;
}
.hl-switch.success input + em {
  border-color: #E4E6EF;
  background-color: #E4E6EF;
}
.hl-switch.success input:checked + em {
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-switch.success input:checked + em + i {
  color: #50cd89;
}
.hl-switch.warning input + em {
  border-color: #E4E6EF;
  background-color: #E4E6EF;
}
.hl-switch.warning input:checked + em {
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-switch.warning input:checked + em + i {
  color: #ffc700;
}
.hl-switch.danger input + em {
  border-color: #E4E6EF;
  background-color: #E4E6EF;
}
.hl-switch.danger input:checked + em {
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-switch.danger input:checked + em + i {
  color: #f1416c;
}
.hl-switch.sm:active input + em:before {
  right: 8px;
}
.hl-switch.sm:active input:checked + em:before {
  right: 0;
  left: 8px;
}
.hl-switch.sm input:checked + em:before {
  right: 0;
  left: 12px;
}
.hl-switch.sm input:checked + em + i {
  transform: translate3d(12px, 0, 0);
}
.hl-switch.sm em {
  width: 28px;
  height: 16px;
}
.hl-switch.sm em:before {
  right: 12px;
  height: 12px;
}
.hl-switch.sm i {
  width: 16px;
  height: 16px;
}
.hl-switch.sm i svg {
  width: 8px;
  height: 8px;
}
.hl-switch.md:active input + em:before {
  right: 11px;
}
.hl-switch.md:active input:checked + em:before {
  right: 0;
  left: 11px;
}
.hl-switch.md input:checked + em:before {
  right: 0;
  left: 18px;
}
.hl-switch.md input:checked + em + i {
  transform: translate3d(18px, 0, 0);
}
.hl-switch.md em {
  width: 40px;
  height: 22px;
}
.hl-switch.md em:before {
  right: 18px;
  height: 18px;
}
.hl-switch.md i {
  width: 22px;
  height: 22px;
}
.hl-switch.md i svg {
  width: 11px;
  height: 11px;
}
.hl-switch.lg:active input + em:before {
  right: 16px;
}
.hl-switch.lg:active input:checked + em:before {
  right: 0;
  left: 16px;
}
.hl-switch.lg input:checked + em:before {
  right: 0;
  left: 28px;
}
.hl-switch.lg input:checked + em + i {
  transform: translate3d(28px, 0, 0);
}
.hl-switch.lg em {
  width: 60px;
  height: 32px;
}
.hl-switch.lg em:before {
  right: 28px;
  height: 28px;
}
.hl-switch.lg i {
  width: 32px;
  height: 32px;
}
.hl-switch.lg i svg {
  width: 16px;
  height: 16px;
}
.hl-alert.primary {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-color: #40a9ff;
}
.hl-alert.primary.light {
  color: #5E6278;
  background-color: #f4faff;
  border-color: #40a9ff;
}
.hl-alert.primary.light .alert-icon {
  color: #40a9ff;
}
.hl-alert.info {
  color: #FFFFFF;
  background-color: #7239ea;
  border-color: #7239ea;
}
.hl-alert.info.light {
  color: #5E6278;
  background-color: #f7f3fe;
  border-color: #7239ea;
}
.hl-alert.info.light .alert-icon {
  color: #7239ea;
}
.hl-alert.success {
  color: #FFFFFF;
  background-color: #50cd89;
  border-color: #50cd89;
}
.hl-alert.success.light {
  color: #5E6278;
  background-color: #f5fcf8;
  border-color: #50cd89;
}
.hl-alert.success.light .alert-icon {
  color: #50cd89;
}
.hl-alert.warning {
  color: #FFFFFF;
  background-color: #ffc700;
  border-color: #ffc700;
}
.hl-alert.warning.light {
  color: #5E6278;
  background-color: #fffcf0;
  border-color: #ffc700;
}
.hl-alert.warning.light .alert-icon {
  color: #ffc700;
}
.hl-alert.danger {
  color: #FFFFFF;
  background-color: #f1416c;
  border-color: #f1416c;
}
.hl-alert.danger.light {
  color: #5E6278;
  background-color: #fef4f6;
  border-color: #f1416c;
}
.hl-alert.danger.light .alert-icon {
  color: #f1416c;
}
.hl-badge.primary {
  color: #FFFFFF;
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-badge.primary.light {
  color: #40a9ff;
  border-color: #f4faff;
  background-color: #f4faff;
}
.hl-badge.outline.primary {
  color: #40a9ff;
  border-color: #40a9ff;
}
.hl-badge.info {
  color: #FFFFFF;
  border-color: #7239ea;
  background-color: #7239ea;
}
.hl-badge.info.light {
  color: #7239ea;
  border-color: #f7f3fe;
  background-color: #f7f3fe;
}
.hl-badge.outline.info {
  color: #7239ea;
  border-color: #7239ea;
}
.hl-badge.success {
  color: #FFFFFF;
  border-color: #50cd89;
  background-color: #50cd89;
}
.hl-badge.success.light {
  color: #50cd89;
  border-color: #f5fcf8;
  background-color: #f5fcf8;
}
.hl-badge.outline.success {
  color: #50cd89;
  border-color: #50cd89;
}
.hl-badge.warning {
  color: #FFFFFF;
  border-color: #ffc700;
  background-color: #ffc700;
}
.hl-badge.warning.light {
  color: #ffc700;
  border-color: #fffcf0;
  background-color: #fffcf0;
}
.hl-badge.outline.warning {
  color: #ffc700;
  border-color: #ffc700;
}
.hl-badge.danger {
  color: #FFFFFF;
  border-color: #f1416c;
  background-color: #f1416c;
}
.hl-badge.danger.light {
  color: #f1416c;
  border-color: #fef4f6;
  background-color: #fef4f6;
}
.hl-badge.outline.danger {
  color: #f1416c;
  border-color: #f1416c;
}
.offset-1 {
  margin-left: 4.1666666667%;
}
.col-1 {
  flex: 0 0 4.1666666667%;
  max-width: 4.1666666667%;
}
.count-1 {
  column-count: 1;
}
.count-1.grid-direction-vertical {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.count-1.grid-direction-horizontal {
  grid-template-rows: repeat(1, minmax(0, 1fr));
}
.grid-col-span-1 {
  grid-column: span 1;
}
.grid-row-span-1 {
  grid-row: span 1;
}
.offset-2 {
  margin-left: 8.3333333333%;
}
.col-2 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}
.count-2 {
  column-count: 2;
}
.count-2.grid-direction-vertical {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.count-2.grid-direction-horizontal {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}
.grid-col-span-2 {
  grid-column: span 2;
}
.grid-row-span-2 {
  grid-row: span 2;
}
.offset-3 {
  margin-left: 12.5%;
}
.col-3 {
  flex: 0 0 12.5%;
  max-width: 12.5%;
}
.count-3 {
  column-count: 3;
}
.count-3.grid-direction-vertical {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.count-3.grid-direction-horizontal {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}
.grid-col-span-3 {
  grid-column: span 3;
}
.grid-row-span-3 {
  grid-row: span 3;
}
.offset-4 {
  margin-left: 16.6666666667%;
}
.col-4 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}
.count-4 {
  column-count: 4;
}
.count-4.grid-direction-vertical {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.count-4.grid-direction-horizontal {
  grid-template-rows: repeat(4, minmax(0, 1fr));
}
.grid-col-span-4 {
  grid-column: span 4;
}
.grid-row-span-4 {
  grid-row: span 4;
}
.offset-5 {
  margin-left: 20.8333333333%;
}
.col-5 {
  flex: 0 0 20.8333333333%;
  max-width: 20.8333333333%;
}
.count-5 {
  column-count: 5;
}
.count-5.grid-direction-vertical {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.count-5.grid-direction-horizontal {
  grid-template-rows: repeat(5, minmax(0, 1fr));
}
.grid-col-span-5 {
  grid-column: span 5;
}
.grid-row-span-5 {
  grid-row: span 5;
}
.offset-6 {
  margin-left: 25%;
}
.col-6 {
  flex: 0 0 25%;
  max-width: 25%;
}
.count-6 {
  column-count: 6;
}
.count-6.grid-direction-vertical {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.count-6.grid-direction-horizontal {
  grid-template-rows: repeat(6, minmax(0, 1fr));
}
.grid-col-span-6 {
  grid-column: span 6;
}
.grid-row-span-6 {
  grid-row: span 6;
}
.offset-7 {
  margin-left: 29.1666666667%;
}
.col-7 {
  flex: 0 0 29.1666666667%;
  max-width: 29.1666666667%;
}
.count-7 {
  column-count: 7;
}
.count-7.grid-direction-vertical {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
.count-7.grid-direction-horizontal {
  grid-template-rows: repeat(7, minmax(0, 1fr));
}
.grid-col-span-7 {
  grid-column: span 7;
}
.grid-row-span-7 {
  grid-row: span 7;
}
.offset-8 {
  margin-left: 33.3333333333%;
}
.col-8 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}
.count-8 {
  column-count: 8;
}
.count-8.grid-direction-vertical {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}
.count-8.grid-direction-horizontal {
  grid-template-rows: repeat(8, minmax(0, 1fr));
}
.grid-col-span-8 {
  grid-column: span 8;
}
.grid-row-span-8 {
  grid-row: span 8;
}
.offset-9 {
  margin-left: 37.5%;
}
.col-9 {
  flex: 0 0 37.5%;
  max-width: 37.5%;
}
.count-9 {
  column-count: 9;
}
.count-9.grid-direction-vertical {
  grid-template-columns: repeat(9, minmax(0, 1fr));
}
.count-9.grid-direction-horizontal {
  grid-template-rows: repeat(9, minmax(0, 1fr));
}
.grid-col-span-9 {
  grid-column: span 9;
}
.grid-row-span-9 {
  grid-row: span 9;
}
.offset-10 {
  margin-left: 41.6666666667%;
}
.col-10 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}
.count-10 {
  column-count: 10;
}
.count-10.grid-direction-vertical {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}
.count-10.grid-direction-horizontal {
  grid-template-rows: repeat(10, minmax(0, 1fr));
}
.grid-col-span-10 {
  grid-column: span 10;
}
.grid-row-span-10 {
  grid-row: span 10;
}
.offset-11 {
  margin-left: 45.8333333333%;
}
.col-11 {
  flex: 0 0 45.8333333333%;
  max-width: 45.8333333333%;
}
.count-11 {
  column-count: 11;
}
.count-11.grid-direction-vertical {
  grid-template-columns: repeat(11, minmax(0, 1fr));
}
.count-11.grid-direction-horizontal {
  grid-template-rows: repeat(11, minmax(0, 1fr));
}
.grid-col-span-11 {
  grid-column: span 11;
}
.grid-row-span-11 {
  grid-row: span 11;
}
.offset-12 {
  margin-left: 50%;
}
.col-12 {
  flex: 0 0 50%;
  max-width: 50%;
}
.count-12 {
  column-count: 12;
}
.count-12.grid-direction-vertical {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.count-12.grid-direction-horizontal {
  grid-template-rows: repeat(12, minmax(0, 1fr));
}
.grid-col-span-12 {
  grid-column: span 12;
}
.grid-row-span-12 {
  grid-row: span 12;
}
.offset-13 {
  margin-left: 54.1666666667%;
}
.col-13 {
  flex: 0 0 54.1666666667%;
  max-width: 54.1666666667%;
}
.count-13 {
  column-count: 13;
}
.count-13.grid-direction-vertical {
  grid-template-columns: repeat(13, minmax(0, 1fr));
}
.count-13.grid-direction-horizontal {
  grid-template-rows: repeat(13, minmax(0, 1fr));
}
.grid-col-span-13 {
  grid-column: span 13;
}
.grid-row-span-13 {
  grid-row: span 13;
}
.offset-14 {
  margin-left: 58.3333333333%;
}
.col-14 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}
.count-14 {
  column-count: 14;
}
.count-14.grid-direction-vertical {
  grid-template-columns: repeat(14, minmax(0, 1fr));
}
.count-14.grid-direction-horizontal {
  grid-template-rows: repeat(14, minmax(0, 1fr));
}
.grid-col-span-14 {
  grid-column: span 14;
}
.grid-row-span-14 {
  grid-row: span 14;
}
.offset-15 {
  margin-left: 62.5%;
}
.col-15 {
  flex: 0 0 62.5%;
  max-width: 62.5%;
}
.count-15 {
  column-count: 15;
}
.count-15.grid-direction-vertical {
  grid-template-columns: repeat(15, minmax(0, 1fr));
}
.count-15.grid-direction-horizontal {
  grid-template-rows: repeat(15, minmax(0, 1fr));
}
.grid-col-span-15 {
  grid-column: span 15;
}
.grid-row-span-15 {
  grid-row: span 15;
}
.offset-16 {
  margin-left: 66.6666666667%;
}
.col-16 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}
.count-16 {
  column-count: 16;
}
.count-16.grid-direction-vertical {
  grid-template-columns: repeat(16, minmax(0, 1fr));
}
.count-16.grid-direction-horizontal {
  grid-template-rows: repeat(16, minmax(0, 1fr));
}
.grid-col-span-16 {
  grid-column: span 16;
}
.grid-row-span-16 {
  grid-row: span 16;
}
.offset-17 {
  margin-left: 70.8333333333%;
}
.col-17 {
  flex: 0 0 70.8333333333%;
  max-width: 70.8333333333%;
}
.count-17 {
  column-count: 17;
}
.count-17.grid-direction-vertical {
  grid-template-columns: repeat(17, minmax(0, 1fr));
}
.count-17.grid-direction-horizontal {
  grid-template-rows: repeat(17, minmax(0, 1fr));
}
.grid-col-span-17 {
  grid-column: span 17;
}
.grid-row-span-17 {
  grid-row: span 17;
}
.offset-18 {
  margin-left: 75%;
}
.col-18 {
  flex: 0 0 75%;
  max-width: 75%;
}
.count-18 {
  column-count: 18;
}
.count-18.grid-direction-vertical {
  grid-template-columns: repeat(18, minmax(0, 1fr));
}
.count-18.grid-direction-horizontal {
  grid-template-rows: repeat(18, minmax(0, 1fr));
}
.grid-col-span-18 {
  grid-column: span 18;
}
.grid-row-span-18 {
  grid-row: span 18;
}
.offset-19 {
  margin-left: 79.1666666667%;
}
.col-19 {
  flex: 0 0 79.1666666667%;
  max-width: 79.1666666667%;
}
.count-19 {
  column-count: 19;
}
.count-19.grid-direction-vertical {
  grid-template-columns: repeat(19, minmax(0, 1fr));
}
.count-19.grid-direction-horizontal {
  grid-template-rows: repeat(19, minmax(0, 1fr));
}
.grid-col-span-19 {
  grid-column: span 19;
}
.grid-row-span-19 {
  grid-row: span 19;
}
.offset-20 {
  margin-left: 83.3333333333%;
}
.col-20 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}
.count-20 {
  column-count: 20;
}
.count-20.grid-direction-vertical {
  grid-template-columns: repeat(20, minmax(0, 1fr));
}
.count-20.grid-direction-horizontal {
  grid-template-rows: repeat(20, minmax(0, 1fr));
}
.grid-col-span-20 {
  grid-column: span 20;
}
.grid-row-span-20 {
  grid-row: span 20;
}
.offset-21 {
  margin-left: 87.5%;
}
.col-21 {
  flex: 0 0 87.5%;
  max-width: 87.5%;
}
.count-21 {
  column-count: 21;
}
.count-21.grid-direction-vertical {
  grid-template-columns: repeat(21, minmax(0, 1fr));
}
.count-21.grid-direction-horizontal {
  grid-template-rows: repeat(21, minmax(0, 1fr));
}
.grid-col-span-21 {
  grid-column: span 21;
}
.grid-row-span-21 {
  grid-row: span 21;
}
.offset-22 {
  margin-left: 91.6666666667%;
}
.col-22 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}
.count-22 {
  column-count: 22;
}
.count-22.grid-direction-vertical {
  grid-template-columns: repeat(22, minmax(0, 1fr));
}
.count-22.grid-direction-horizontal {
  grid-template-rows: repeat(22, minmax(0, 1fr));
}
.grid-col-span-22 {
  grid-column: span 22;
}
.grid-row-span-22 {
  grid-row: span 22;
}
.offset-23 {
  margin-left: 95.8333333333%;
}
.col-23 {
  flex: 0 0 95.8333333333%;
  max-width: 95.8333333333%;
}
.count-23 {
  column-count: 23;
}
.count-23.grid-direction-vertical {
  grid-template-columns: repeat(23, minmax(0, 1fr));
}
.count-23.grid-direction-horizontal {
  grid-template-rows: repeat(23, minmax(0, 1fr));
}
.grid-col-span-23 {
  grid-column: span 23;
}
.grid-row-span-23 {
  grid-row: span 23;
}
.offset-24 {
  margin-left: 100%;
}
.col-24 {
  flex: 0 0 100%;
  max-width: 100%;
}
.count-24 {
  column-count: 24;
}
.count-24.grid-direction-vertical {
  grid-template-columns: repeat(24, minmax(0, 1fr));
}
.count-24.grid-direction-horizontal {
  grid-template-rows: repeat(24, minmax(0, 1fr));
}
.grid-col-span-24 {
  grid-column: span 24;
}
.grid-row-span-24 {
  grid-row: span 24;
}
@media (min-width: 640px) {
  .offset-sm-1 {
    margin-left: 4.1666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-1 {
    flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%;
  }

  .count-sm-1.flow {
    column-count: 1;
  }
  .count-sm-1.grid-direction-vertical {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .count-sm-1.grid-direction-horizontal {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .grid-col-span-sm-1 {
    grid-column: span 1;
  }

  .grid-row-span-sm-1 {
    grid-row: span 1;
  }

  .offset-sm-2 {
    margin-left: 8.3333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-2 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .count-sm-2.flow {
    column-count: 2;
  }
  .count-sm-2.grid-direction-vertical {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .count-sm-2.grid-direction-horizontal {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .grid-col-span-sm-2 {
    grid-column: span 2;
  }

  .grid-row-span-sm-2 {
    grid-row: span 2;
  }

  .offset-sm-3 {
    margin-left: 12.5%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .count-sm-3.flow {
    column-count: 3;
  }
  .count-sm-3.grid-direction-vertical {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .count-sm-3.grid-direction-horizontal {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .grid-col-span-sm-3 {
    grid-column: span 3;
  }

  .grid-row-span-sm-3 {
    grid-row: span 3;
  }

  .offset-sm-4 {
    margin-left: 16.6666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-4 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .count-sm-4.flow {
    column-count: 4;
  }
  .count-sm-4.grid-direction-vertical {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .count-sm-4.grid-direction-horizontal {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .grid-col-span-sm-4 {
    grid-column: span 4;
  }

  .grid-row-span-sm-4 {
    grid-row: span 4;
  }

  .offset-sm-5 {
    margin-left: 20.8333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-5 {
    flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%;
  }

  .count-sm-5.flow {
    column-count: 5;
  }
  .count-sm-5.grid-direction-vertical {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .count-sm-5.grid-direction-horizontal {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .grid-col-span-sm-5 {
    grid-column: span 5;
  }

  .grid-row-span-sm-5 {
    grid-row: span 5;
  }

  .offset-sm-6 {
    margin-left: 25%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .count-sm-6.flow {
    column-count: 6;
  }
  .count-sm-6.grid-direction-vertical {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .count-sm-6.grid-direction-horizontal {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .grid-col-span-sm-6 {
    grid-column: span 6;
  }

  .grid-row-span-sm-6 {
    grid-row: span 6;
  }

  .offset-sm-7 {
    margin-left: 29.1666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-7 {
    flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%;
  }

  .count-sm-7.flow {
    column-count: 7;
  }
  .count-sm-7.grid-direction-vertical {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .count-sm-7.grid-direction-horizontal {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .grid-col-span-sm-7 {
    grid-column: span 7;
  }

  .grid-row-span-sm-7 {
    grid-row: span 7;
  }

  .offset-sm-8 {
    margin-left: 33.3333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-8 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .count-sm-8.flow {
    column-count: 8;
  }
  .count-sm-8.grid-direction-vertical {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .count-sm-8.grid-direction-horizontal {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .grid-col-span-sm-8 {
    grid-column: span 8;
  }

  .grid-row-span-sm-8 {
    grid-row: span 8;
  }

  .offset-sm-9 {
    margin-left: 37.5%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .count-sm-9.flow {
    column-count: 9;
  }
  .count-sm-9.grid-direction-vertical {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .count-sm-9.grid-direction-horizontal {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .grid-col-span-sm-9 {
    grid-column: span 9;
  }

  .grid-row-span-sm-9 {
    grid-row: span 9;
  }

  .offset-sm-10 {
    margin-left: 41.6666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-10 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .count-sm-10.flow {
    column-count: 10;
  }
  .count-sm-10.grid-direction-vertical {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .count-sm-10.grid-direction-horizontal {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .grid-col-span-sm-10 {
    grid-column: span 10;
  }

  .grid-row-span-sm-10 {
    grid-row: span 10;
  }

  .offset-sm-11 {
    margin-left: 45.8333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-11 {
    flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%;
  }

  .count-sm-11.flow {
    column-count: 11;
  }
  .count-sm-11.grid-direction-vertical {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .count-sm-11.grid-direction-horizontal {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .grid-col-span-sm-11 {
    grid-column: span 11;
  }

  .grid-row-span-sm-11 {
    grid-row: span 11;
  }

  .offset-sm-12 {
    margin-left: 50%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .count-sm-12.flow {
    column-count: 12;
  }
  .count-sm-12.grid-direction-vertical {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .count-sm-12.grid-direction-horizontal {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .grid-col-span-sm-12 {
    grid-column: span 12;
  }

  .grid-row-span-sm-12 {
    grid-row: span 12;
  }

  .offset-sm-13 {
    margin-left: 54.1666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-13 {
    flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%;
  }

  .count-sm-13.flow {
    column-count: 13;
  }
  .count-sm-13.grid-direction-vertical {
    grid-template-columns: repeat(13, minmax(0, 1fr));
  }
  .count-sm-13.grid-direction-horizontal {
    grid-template-rows: repeat(13, minmax(0, 1fr));
  }

  .grid-col-span-sm-13 {
    grid-column: span 13;
  }

  .grid-row-span-sm-13 {
    grid-row: span 13;
  }

  .offset-sm-14 {
    margin-left: 58.3333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-14 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .count-sm-14.flow {
    column-count: 14;
  }
  .count-sm-14.grid-direction-vertical {
    grid-template-columns: repeat(14, minmax(0, 1fr));
  }
  .count-sm-14.grid-direction-horizontal {
    grid-template-rows: repeat(14, minmax(0, 1fr));
  }

  .grid-col-span-sm-14 {
    grid-column: span 14;
  }

  .grid-row-span-sm-14 {
    grid-row: span 14;
  }

  .offset-sm-15 {
    margin-left: 62.5%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .count-sm-15.flow {
    column-count: 15;
  }
  .count-sm-15.grid-direction-vertical {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
  .count-sm-15.grid-direction-horizontal {
    grid-template-rows: repeat(15, minmax(0, 1fr));
  }

  .grid-col-span-sm-15 {
    grid-column: span 15;
  }

  .grid-row-span-sm-15 {
    grid-row: span 15;
  }

  .offset-sm-16 {
    margin-left: 66.6666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-16 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .count-sm-16.flow {
    column-count: 16;
  }
  .count-sm-16.grid-direction-vertical {
    grid-template-columns: repeat(16, minmax(0, 1fr));
  }
  .count-sm-16.grid-direction-horizontal {
    grid-template-rows: repeat(16, minmax(0, 1fr));
  }

  .grid-col-span-sm-16 {
    grid-column: span 16;
  }

  .grid-row-span-sm-16 {
    grid-row: span 16;
  }

  .offset-sm-17 {
    margin-left: 70.8333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-17 {
    flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%;
  }

  .count-sm-17.flow {
    column-count: 17;
  }
  .count-sm-17.grid-direction-vertical {
    grid-template-columns: repeat(17, minmax(0, 1fr));
  }
  .count-sm-17.grid-direction-horizontal {
    grid-template-rows: repeat(17, minmax(0, 1fr));
  }

  .grid-col-span-sm-17 {
    grid-column: span 17;
  }

  .grid-row-span-sm-17 {
    grid-row: span 17;
  }

  .offset-sm-18 {
    margin-left: 75%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .count-sm-18.flow {
    column-count: 18;
  }
  .count-sm-18.grid-direction-vertical {
    grid-template-columns: repeat(18, minmax(0, 1fr));
  }
  .count-sm-18.grid-direction-horizontal {
    grid-template-rows: repeat(18, minmax(0, 1fr));
  }

  .grid-col-span-sm-18 {
    grid-column: span 18;
  }

  .grid-row-span-sm-18 {
    grid-row: span 18;
  }

  .offset-sm-19 {
    margin-left: 79.1666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-19 {
    flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%;
  }

  .count-sm-19.flow {
    column-count: 19;
  }
  .count-sm-19.grid-direction-vertical {
    grid-template-columns: repeat(19, minmax(0, 1fr));
  }
  .count-sm-19.grid-direction-horizontal {
    grid-template-rows: repeat(19, minmax(0, 1fr));
  }

  .grid-col-span-sm-19 {
    grid-column: span 19;
  }

  .grid-row-span-sm-19 {
    grid-row: span 19;
  }

  .offset-sm-20 {
    margin-left: 83.3333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-20 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .count-sm-20.flow {
    column-count: 20;
  }
  .count-sm-20.grid-direction-vertical {
    grid-template-columns: repeat(20, minmax(0, 1fr));
  }
  .count-sm-20.grid-direction-horizontal {
    grid-template-rows: repeat(20, minmax(0, 1fr));
  }

  .grid-col-span-sm-20 {
    grid-column: span 20;
  }

  .grid-row-span-sm-20 {
    grid-row: span 20;
  }

  .offset-sm-21 {
    margin-left: 87.5%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .count-sm-21.flow {
    column-count: 21;
  }
  .count-sm-21.grid-direction-vertical {
    grid-template-columns: repeat(21, minmax(0, 1fr));
  }
  .count-sm-21.grid-direction-horizontal {
    grid-template-rows: repeat(21, minmax(0, 1fr));
  }

  .grid-col-span-sm-21 {
    grid-column: span 21;
  }

  .grid-row-span-sm-21 {
    grid-row: span 21;
  }

  .offset-sm-22 {
    margin-left: 91.6666666667%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-22 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .count-sm-22.flow {
    column-count: 22;
  }
  .count-sm-22.grid-direction-vertical {
    grid-template-columns: repeat(22, minmax(0, 1fr));
  }
  .count-sm-22.grid-direction-horizontal {
    grid-template-rows: repeat(22, minmax(0, 1fr));
  }

  .grid-col-span-sm-22 {
    grid-column: span 22;
  }

  .grid-row-span-sm-22 {
    grid-row: span 22;
  }

  .offset-sm-23 {
    margin-left: 95.8333333333%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-23 {
    flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%;
  }

  .count-sm-23.flow {
    column-count: 23;
  }
  .count-sm-23.grid-direction-vertical {
    grid-template-columns: repeat(23, minmax(0, 1fr));
  }
  .count-sm-23.grid-direction-horizontal {
    grid-template-rows: repeat(23, minmax(0, 1fr));
  }

  .grid-col-span-sm-23 {
    grid-column: span 23;
  }

  .grid-row-span-sm-23 {
    grid-row: span 23;
  }

  .offset-sm-24 {
    margin-left: 100%;
  }

  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-sm-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .count-sm-24.flow {
    column-count: 24;
  }
  .count-sm-24.grid-direction-vertical {
    grid-template-columns: repeat(24, minmax(0, 1fr));
  }
  .count-sm-24.grid-direction-horizontal {
    grid-template-rows: repeat(24, minmax(0, 1fr));
  }

  .grid-col-span-sm-24 {
    grid-column: span 24;
  }

  .grid-row-span-sm-24 {
    grid-row: span 24;
  }
}
@media (min-width: 768px) {
  .offset-md-1 {
    margin-left: 4.1666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-1 {
    flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%;
  }

  .count-md-1.flow {
    column-count: 1;
  }
  .count-md-1.grid-direction-vertical {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .count-md-1.grid-direction-horizontal {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .grid-col-span-md-1 {
    grid-column: span 1;
  }

  .grid-row-span-md-1 {
    grid-row: span 1;
  }

  .offset-md-2 {
    margin-left: 8.3333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-2 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .count-md-2.flow {
    column-count: 2;
  }
  .count-md-2.grid-direction-vertical {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .count-md-2.grid-direction-horizontal {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .grid-col-span-md-2 {
    grid-column: span 2;
  }

  .grid-row-span-md-2 {
    grid-row: span 2;
  }

  .offset-md-3 {
    margin-left: 12.5%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .count-md-3.flow {
    column-count: 3;
  }
  .count-md-3.grid-direction-vertical {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .count-md-3.grid-direction-horizontal {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .grid-col-span-md-3 {
    grid-column: span 3;
  }

  .grid-row-span-md-3 {
    grid-row: span 3;
  }

  .offset-md-4 {
    margin-left: 16.6666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-4 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .count-md-4.flow {
    column-count: 4;
  }
  .count-md-4.grid-direction-vertical {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .count-md-4.grid-direction-horizontal {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .grid-col-span-md-4 {
    grid-column: span 4;
  }

  .grid-row-span-md-4 {
    grid-row: span 4;
  }

  .offset-md-5 {
    margin-left: 20.8333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-5 {
    flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%;
  }

  .count-md-5.flow {
    column-count: 5;
  }
  .count-md-5.grid-direction-vertical {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .count-md-5.grid-direction-horizontal {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .grid-col-span-md-5 {
    grid-column: span 5;
  }

  .grid-row-span-md-5 {
    grid-row: span 5;
  }

  .offset-md-6 {
    margin-left: 25%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .count-md-6.flow {
    column-count: 6;
  }
  .count-md-6.grid-direction-vertical {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .count-md-6.grid-direction-horizontal {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .grid-col-span-md-6 {
    grid-column: span 6;
  }

  .grid-row-span-md-6 {
    grid-row: span 6;
  }

  .offset-md-7 {
    margin-left: 29.1666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-7 {
    flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%;
  }

  .count-md-7.flow {
    column-count: 7;
  }
  .count-md-7.grid-direction-vertical {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .count-md-7.grid-direction-horizontal {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .grid-col-span-md-7 {
    grid-column: span 7;
  }

  .grid-row-span-md-7 {
    grid-row: span 7;
  }

  .offset-md-8 {
    margin-left: 33.3333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-8 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .count-md-8.flow {
    column-count: 8;
  }
  .count-md-8.grid-direction-vertical {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .count-md-8.grid-direction-horizontal {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .grid-col-span-md-8 {
    grid-column: span 8;
  }

  .grid-row-span-md-8 {
    grid-row: span 8;
  }

  .offset-md-9 {
    margin-left: 37.5%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .count-md-9.flow {
    column-count: 9;
  }
  .count-md-9.grid-direction-vertical {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .count-md-9.grid-direction-horizontal {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .grid-col-span-md-9 {
    grid-column: span 9;
  }

  .grid-row-span-md-9 {
    grid-row: span 9;
  }

  .offset-md-10 {
    margin-left: 41.6666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-10 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .count-md-10.flow {
    column-count: 10;
  }
  .count-md-10.grid-direction-vertical {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .count-md-10.grid-direction-horizontal {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .grid-col-span-md-10 {
    grid-column: span 10;
  }

  .grid-row-span-md-10 {
    grid-row: span 10;
  }

  .offset-md-11 {
    margin-left: 45.8333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-11 {
    flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%;
  }

  .count-md-11.flow {
    column-count: 11;
  }
  .count-md-11.grid-direction-vertical {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .count-md-11.grid-direction-horizontal {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .grid-col-span-md-11 {
    grid-column: span 11;
  }

  .grid-row-span-md-11 {
    grid-row: span 11;
  }

  .offset-md-12 {
    margin-left: 50%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .count-md-12.flow {
    column-count: 12;
  }
  .count-md-12.grid-direction-vertical {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .count-md-12.grid-direction-horizontal {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .grid-col-span-md-12 {
    grid-column: span 12;
  }

  .grid-row-span-md-12 {
    grid-row: span 12;
  }

  .offset-md-13 {
    margin-left: 54.1666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-13 {
    flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%;
  }

  .count-md-13.flow {
    column-count: 13;
  }
  .count-md-13.grid-direction-vertical {
    grid-template-columns: repeat(13, minmax(0, 1fr));
  }
  .count-md-13.grid-direction-horizontal {
    grid-template-rows: repeat(13, minmax(0, 1fr));
  }

  .grid-col-span-md-13 {
    grid-column: span 13;
  }

  .grid-row-span-md-13 {
    grid-row: span 13;
  }

  .offset-md-14 {
    margin-left: 58.3333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-14 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .count-md-14.flow {
    column-count: 14;
  }
  .count-md-14.grid-direction-vertical {
    grid-template-columns: repeat(14, minmax(0, 1fr));
  }
  .count-md-14.grid-direction-horizontal {
    grid-template-rows: repeat(14, minmax(0, 1fr));
  }

  .grid-col-span-md-14 {
    grid-column: span 14;
  }

  .grid-row-span-md-14 {
    grid-row: span 14;
  }

  .offset-md-15 {
    margin-left: 62.5%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .count-md-15.flow {
    column-count: 15;
  }
  .count-md-15.grid-direction-vertical {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
  .count-md-15.grid-direction-horizontal {
    grid-template-rows: repeat(15, minmax(0, 1fr));
  }

  .grid-col-span-md-15 {
    grid-column: span 15;
  }

  .grid-row-span-md-15 {
    grid-row: span 15;
  }

  .offset-md-16 {
    margin-left: 66.6666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-16 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .count-md-16.flow {
    column-count: 16;
  }
  .count-md-16.grid-direction-vertical {
    grid-template-columns: repeat(16, minmax(0, 1fr));
  }
  .count-md-16.grid-direction-horizontal {
    grid-template-rows: repeat(16, minmax(0, 1fr));
  }

  .grid-col-span-md-16 {
    grid-column: span 16;
  }

  .grid-row-span-md-16 {
    grid-row: span 16;
  }

  .offset-md-17 {
    margin-left: 70.8333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-17 {
    flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%;
  }

  .count-md-17.flow {
    column-count: 17;
  }
  .count-md-17.grid-direction-vertical {
    grid-template-columns: repeat(17, minmax(0, 1fr));
  }
  .count-md-17.grid-direction-horizontal {
    grid-template-rows: repeat(17, minmax(0, 1fr));
  }

  .grid-col-span-md-17 {
    grid-column: span 17;
  }

  .grid-row-span-md-17 {
    grid-row: span 17;
  }

  .offset-md-18 {
    margin-left: 75%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .count-md-18.flow {
    column-count: 18;
  }
  .count-md-18.grid-direction-vertical {
    grid-template-columns: repeat(18, minmax(0, 1fr));
  }
  .count-md-18.grid-direction-horizontal {
    grid-template-rows: repeat(18, minmax(0, 1fr));
  }

  .grid-col-span-md-18 {
    grid-column: span 18;
  }

  .grid-row-span-md-18 {
    grid-row: span 18;
  }

  .offset-md-19 {
    margin-left: 79.1666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-19 {
    flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%;
  }

  .count-md-19.flow {
    column-count: 19;
  }
  .count-md-19.grid-direction-vertical {
    grid-template-columns: repeat(19, minmax(0, 1fr));
  }
  .count-md-19.grid-direction-horizontal {
    grid-template-rows: repeat(19, minmax(0, 1fr));
  }

  .grid-col-span-md-19 {
    grid-column: span 19;
  }

  .grid-row-span-md-19 {
    grid-row: span 19;
  }

  .offset-md-20 {
    margin-left: 83.3333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-20 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .count-md-20.flow {
    column-count: 20;
  }
  .count-md-20.grid-direction-vertical {
    grid-template-columns: repeat(20, minmax(0, 1fr));
  }
  .count-md-20.grid-direction-horizontal {
    grid-template-rows: repeat(20, minmax(0, 1fr));
  }

  .grid-col-span-md-20 {
    grid-column: span 20;
  }

  .grid-row-span-md-20 {
    grid-row: span 20;
  }

  .offset-md-21 {
    margin-left: 87.5%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .count-md-21.flow {
    column-count: 21;
  }
  .count-md-21.grid-direction-vertical {
    grid-template-columns: repeat(21, minmax(0, 1fr));
  }
  .count-md-21.grid-direction-horizontal {
    grid-template-rows: repeat(21, minmax(0, 1fr));
  }

  .grid-col-span-md-21 {
    grid-column: span 21;
  }

  .grid-row-span-md-21 {
    grid-row: span 21;
  }

  .offset-md-22 {
    margin-left: 91.6666666667%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-22 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .count-md-22.flow {
    column-count: 22;
  }
  .count-md-22.grid-direction-vertical {
    grid-template-columns: repeat(22, minmax(0, 1fr));
  }
  .count-md-22.grid-direction-horizontal {
    grid-template-rows: repeat(22, minmax(0, 1fr));
  }

  .grid-col-span-md-22 {
    grid-column: span 22;
  }

  .grid-row-span-md-22 {
    grid-row: span 22;
  }

  .offset-md-23 {
    margin-left: 95.8333333333%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-23 {
    flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%;
  }

  .count-md-23.flow {
    column-count: 23;
  }
  .count-md-23.grid-direction-vertical {
    grid-template-columns: repeat(23, minmax(0, 1fr));
  }
  .count-md-23.grid-direction-horizontal {
    grid-template-rows: repeat(23, minmax(0, 1fr));
  }

  .grid-col-span-md-23 {
    grid-column: span 23;
  }

  .grid-row-span-md-23 {
    grid-row: span 23;
  }

  .offset-md-24 {
    margin-left: 100%;
  }

  .col-md {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-md-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .count-md-24.flow {
    column-count: 24;
  }
  .count-md-24.grid-direction-vertical {
    grid-template-columns: repeat(24, minmax(0, 1fr));
  }
  .count-md-24.grid-direction-horizontal {
    grid-template-rows: repeat(24, minmax(0, 1fr));
  }

  .grid-col-span-md-24 {
    grid-column: span 24;
  }

  .grid-row-span-md-24 {
    grid-row: span 24;
  }
}
@media (min-width: 1024px) {
  .offset-lg-1 {
    margin-left: 4.1666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-1 {
    flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%;
  }

  .count-lg-1.flow {
    column-count: 1;
  }
  .count-lg-1.grid-direction-vertical {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .count-lg-1.grid-direction-horizontal {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .grid-col-span-lg-1 {
    grid-column: span 1;
  }

  .grid-row-span-lg-1 {
    grid-row: span 1;
  }

  .offset-lg-2 {
    margin-left: 8.3333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-2 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .count-lg-2.flow {
    column-count: 2;
  }
  .count-lg-2.grid-direction-vertical {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .count-lg-2.grid-direction-horizontal {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .grid-col-span-lg-2 {
    grid-column: span 2;
  }

  .grid-row-span-lg-2 {
    grid-row: span 2;
  }

  .offset-lg-3 {
    margin-left: 12.5%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .count-lg-3.flow {
    column-count: 3;
  }
  .count-lg-3.grid-direction-vertical {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .count-lg-3.grid-direction-horizontal {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .grid-col-span-lg-3 {
    grid-column: span 3;
  }

  .grid-row-span-lg-3 {
    grid-row: span 3;
  }

  .offset-lg-4 {
    margin-left: 16.6666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-4 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .count-lg-4.flow {
    column-count: 4;
  }
  .count-lg-4.grid-direction-vertical {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .count-lg-4.grid-direction-horizontal {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .grid-col-span-lg-4 {
    grid-column: span 4;
  }

  .grid-row-span-lg-4 {
    grid-row: span 4;
  }

  .offset-lg-5 {
    margin-left: 20.8333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-5 {
    flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%;
  }

  .count-lg-5.flow {
    column-count: 5;
  }
  .count-lg-5.grid-direction-vertical {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .count-lg-5.grid-direction-horizontal {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .grid-col-span-lg-5 {
    grid-column: span 5;
  }

  .grid-row-span-lg-5 {
    grid-row: span 5;
  }

  .offset-lg-6 {
    margin-left: 25%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .count-lg-6.flow {
    column-count: 6;
  }
  .count-lg-6.grid-direction-vertical {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .count-lg-6.grid-direction-horizontal {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .grid-col-span-lg-6 {
    grid-column: span 6;
  }

  .grid-row-span-lg-6 {
    grid-row: span 6;
  }

  .offset-lg-7 {
    margin-left: 29.1666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-7 {
    flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%;
  }

  .count-lg-7.flow {
    column-count: 7;
  }
  .count-lg-7.grid-direction-vertical {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .count-lg-7.grid-direction-horizontal {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .grid-col-span-lg-7 {
    grid-column: span 7;
  }

  .grid-row-span-lg-7 {
    grid-row: span 7;
  }

  .offset-lg-8 {
    margin-left: 33.3333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-8 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .count-lg-8.flow {
    column-count: 8;
  }
  .count-lg-8.grid-direction-vertical {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .count-lg-8.grid-direction-horizontal {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .grid-col-span-lg-8 {
    grid-column: span 8;
  }

  .grid-row-span-lg-8 {
    grid-row: span 8;
  }

  .offset-lg-9 {
    margin-left: 37.5%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .count-lg-9.flow {
    column-count: 9;
  }
  .count-lg-9.grid-direction-vertical {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .count-lg-9.grid-direction-horizontal {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .grid-col-span-lg-9 {
    grid-column: span 9;
  }

  .grid-row-span-lg-9 {
    grid-row: span 9;
  }

  .offset-lg-10 {
    margin-left: 41.6666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-10 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .count-lg-10.flow {
    column-count: 10;
  }
  .count-lg-10.grid-direction-vertical {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .count-lg-10.grid-direction-horizontal {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .grid-col-span-lg-10 {
    grid-column: span 10;
  }

  .grid-row-span-lg-10 {
    grid-row: span 10;
  }

  .offset-lg-11 {
    margin-left: 45.8333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-11 {
    flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%;
  }

  .count-lg-11.flow {
    column-count: 11;
  }
  .count-lg-11.grid-direction-vertical {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .count-lg-11.grid-direction-horizontal {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .grid-col-span-lg-11 {
    grid-column: span 11;
  }

  .grid-row-span-lg-11 {
    grid-row: span 11;
  }

  .offset-lg-12 {
    margin-left: 50%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .count-lg-12.flow {
    column-count: 12;
  }
  .count-lg-12.grid-direction-vertical {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .count-lg-12.grid-direction-horizontal {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .grid-col-span-lg-12 {
    grid-column: span 12;
  }

  .grid-row-span-lg-12 {
    grid-row: span 12;
  }

  .offset-lg-13 {
    margin-left: 54.1666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-13 {
    flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%;
  }

  .count-lg-13.flow {
    column-count: 13;
  }
  .count-lg-13.grid-direction-vertical {
    grid-template-columns: repeat(13, minmax(0, 1fr));
  }
  .count-lg-13.grid-direction-horizontal {
    grid-template-rows: repeat(13, minmax(0, 1fr));
  }

  .grid-col-span-lg-13 {
    grid-column: span 13;
  }

  .grid-row-span-lg-13 {
    grid-row: span 13;
  }

  .offset-lg-14 {
    margin-left: 58.3333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-14 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .count-lg-14.flow {
    column-count: 14;
  }
  .count-lg-14.grid-direction-vertical {
    grid-template-columns: repeat(14, minmax(0, 1fr));
  }
  .count-lg-14.grid-direction-horizontal {
    grid-template-rows: repeat(14, minmax(0, 1fr));
  }

  .grid-col-span-lg-14 {
    grid-column: span 14;
  }

  .grid-row-span-lg-14 {
    grid-row: span 14;
  }

  .offset-lg-15 {
    margin-left: 62.5%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .count-lg-15.flow {
    column-count: 15;
  }
  .count-lg-15.grid-direction-vertical {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
  .count-lg-15.grid-direction-horizontal {
    grid-template-rows: repeat(15, minmax(0, 1fr));
  }

  .grid-col-span-lg-15 {
    grid-column: span 15;
  }

  .grid-row-span-lg-15 {
    grid-row: span 15;
  }

  .offset-lg-16 {
    margin-left: 66.6666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-16 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .count-lg-16.flow {
    column-count: 16;
  }
  .count-lg-16.grid-direction-vertical {
    grid-template-columns: repeat(16, minmax(0, 1fr));
  }
  .count-lg-16.grid-direction-horizontal {
    grid-template-rows: repeat(16, minmax(0, 1fr));
  }

  .grid-col-span-lg-16 {
    grid-column: span 16;
  }

  .grid-row-span-lg-16 {
    grid-row: span 16;
  }

  .offset-lg-17 {
    margin-left: 70.8333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-17 {
    flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%;
  }

  .count-lg-17.flow {
    column-count: 17;
  }
  .count-lg-17.grid-direction-vertical {
    grid-template-columns: repeat(17, minmax(0, 1fr));
  }
  .count-lg-17.grid-direction-horizontal {
    grid-template-rows: repeat(17, minmax(0, 1fr));
  }

  .grid-col-span-lg-17 {
    grid-column: span 17;
  }

  .grid-row-span-lg-17 {
    grid-row: span 17;
  }

  .offset-lg-18 {
    margin-left: 75%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .count-lg-18.flow {
    column-count: 18;
  }
  .count-lg-18.grid-direction-vertical {
    grid-template-columns: repeat(18, minmax(0, 1fr));
  }
  .count-lg-18.grid-direction-horizontal {
    grid-template-rows: repeat(18, minmax(0, 1fr));
  }

  .grid-col-span-lg-18 {
    grid-column: span 18;
  }

  .grid-row-span-lg-18 {
    grid-row: span 18;
  }

  .offset-lg-19 {
    margin-left: 79.1666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-19 {
    flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%;
  }

  .count-lg-19.flow {
    column-count: 19;
  }
  .count-lg-19.grid-direction-vertical {
    grid-template-columns: repeat(19, minmax(0, 1fr));
  }
  .count-lg-19.grid-direction-horizontal {
    grid-template-rows: repeat(19, minmax(0, 1fr));
  }

  .grid-col-span-lg-19 {
    grid-column: span 19;
  }

  .grid-row-span-lg-19 {
    grid-row: span 19;
  }

  .offset-lg-20 {
    margin-left: 83.3333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-20 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .count-lg-20.flow {
    column-count: 20;
  }
  .count-lg-20.grid-direction-vertical {
    grid-template-columns: repeat(20, minmax(0, 1fr));
  }
  .count-lg-20.grid-direction-horizontal {
    grid-template-rows: repeat(20, minmax(0, 1fr));
  }

  .grid-col-span-lg-20 {
    grid-column: span 20;
  }

  .grid-row-span-lg-20 {
    grid-row: span 20;
  }

  .offset-lg-21 {
    margin-left: 87.5%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .count-lg-21.flow {
    column-count: 21;
  }
  .count-lg-21.grid-direction-vertical {
    grid-template-columns: repeat(21, minmax(0, 1fr));
  }
  .count-lg-21.grid-direction-horizontal {
    grid-template-rows: repeat(21, minmax(0, 1fr));
  }

  .grid-col-span-lg-21 {
    grid-column: span 21;
  }

  .grid-row-span-lg-21 {
    grid-row: span 21;
  }

  .offset-lg-22 {
    margin-left: 91.6666666667%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-22 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .count-lg-22.flow {
    column-count: 22;
  }
  .count-lg-22.grid-direction-vertical {
    grid-template-columns: repeat(22, minmax(0, 1fr));
  }
  .count-lg-22.grid-direction-horizontal {
    grid-template-rows: repeat(22, minmax(0, 1fr));
  }

  .grid-col-span-lg-22 {
    grid-column: span 22;
  }

  .grid-row-span-lg-22 {
    grid-row: span 22;
  }

  .offset-lg-23 {
    margin-left: 95.8333333333%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-23 {
    flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%;
  }

  .count-lg-23.flow {
    column-count: 23;
  }
  .count-lg-23.grid-direction-vertical {
    grid-template-columns: repeat(23, minmax(0, 1fr));
  }
  .count-lg-23.grid-direction-horizontal {
    grid-template-rows: repeat(23, minmax(0, 1fr));
  }

  .grid-col-span-lg-23 {
    grid-column: span 23;
  }

  .grid-row-span-lg-23 {
    grid-row: span 23;
  }

  .offset-lg-24 {
    margin-left: 100%;
  }

  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-lg-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .count-lg-24.flow {
    column-count: 24;
  }
  .count-lg-24.grid-direction-vertical {
    grid-template-columns: repeat(24, minmax(0, 1fr));
  }
  .count-lg-24.grid-direction-horizontal {
    grid-template-rows: repeat(24, minmax(0, 1fr));
  }

  .grid-col-span-lg-24 {
    grid-column: span 24;
  }

  .grid-row-span-lg-24 {
    grid-row: span 24;
  }
}
@media (min-width: 1280px) {
  .offset-xl-1 {
    margin-left: 4.1666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-1 {
    flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%;
  }

  .count-xl-1.flow {
    column-count: 1;
  }
  .count-xl-1.grid-direction-vertical {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .count-xl-1.grid-direction-horizontal {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .grid-col-span-xl-1 {
    grid-column: span 1;
  }

  .grid-row-span-xl-1 {
    grid-row: span 1;
  }

  .offset-xl-2 {
    margin-left: 8.3333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-2 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .count-xl-2.flow {
    column-count: 2;
  }
  .count-xl-2.grid-direction-vertical {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .count-xl-2.grid-direction-horizontal {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .grid-col-span-xl-2 {
    grid-column: span 2;
  }

  .grid-row-span-xl-2 {
    grid-row: span 2;
  }

  .offset-xl-3 {
    margin-left: 12.5%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .count-xl-3.flow {
    column-count: 3;
  }
  .count-xl-3.grid-direction-vertical {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .count-xl-3.grid-direction-horizontal {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .grid-col-span-xl-3 {
    grid-column: span 3;
  }

  .grid-row-span-xl-3 {
    grid-row: span 3;
  }

  .offset-xl-4 {
    margin-left: 16.6666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-4 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .count-xl-4.flow {
    column-count: 4;
  }
  .count-xl-4.grid-direction-vertical {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .count-xl-4.grid-direction-horizontal {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .grid-col-span-xl-4 {
    grid-column: span 4;
  }

  .grid-row-span-xl-4 {
    grid-row: span 4;
  }

  .offset-xl-5 {
    margin-left: 20.8333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-5 {
    flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%;
  }

  .count-xl-5.flow {
    column-count: 5;
  }
  .count-xl-5.grid-direction-vertical {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .count-xl-5.grid-direction-horizontal {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .grid-col-span-xl-5 {
    grid-column: span 5;
  }

  .grid-row-span-xl-5 {
    grid-row: span 5;
  }

  .offset-xl-6 {
    margin-left: 25%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .count-xl-6.flow {
    column-count: 6;
  }
  .count-xl-6.grid-direction-vertical {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .count-xl-6.grid-direction-horizontal {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .grid-col-span-xl-6 {
    grid-column: span 6;
  }

  .grid-row-span-xl-6 {
    grid-row: span 6;
  }

  .offset-xl-7 {
    margin-left: 29.1666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-7 {
    flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%;
  }

  .count-xl-7.flow {
    column-count: 7;
  }
  .count-xl-7.grid-direction-vertical {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .count-xl-7.grid-direction-horizontal {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .grid-col-span-xl-7 {
    grid-column: span 7;
  }

  .grid-row-span-xl-7 {
    grid-row: span 7;
  }

  .offset-xl-8 {
    margin-left: 33.3333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-8 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .count-xl-8.flow {
    column-count: 8;
  }
  .count-xl-8.grid-direction-vertical {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .count-xl-8.grid-direction-horizontal {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .grid-col-span-xl-8 {
    grid-column: span 8;
  }

  .grid-row-span-xl-8 {
    grid-row: span 8;
  }

  .offset-xl-9 {
    margin-left: 37.5%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .count-xl-9.flow {
    column-count: 9;
  }
  .count-xl-9.grid-direction-vertical {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .count-xl-9.grid-direction-horizontal {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .grid-col-span-xl-9 {
    grid-column: span 9;
  }

  .grid-row-span-xl-9 {
    grid-row: span 9;
  }

  .offset-xl-10 {
    margin-left: 41.6666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-10 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .count-xl-10.flow {
    column-count: 10;
  }
  .count-xl-10.grid-direction-vertical {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .count-xl-10.grid-direction-horizontal {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .grid-col-span-xl-10 {
    grid-column: span 10;
  }

  .grid-row-span-xl-10 {
    grid-row: span 10;
  }

  .offset-xl-11 {
    margin-left: 45.8333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-11 {
    flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%;
  }

  .count-xl-11.flow {
    column-count: 11;
  }
  .count-xl-11.grid-direction-vertical {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .count-xl-11.grid-direction-horizontal {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .grid-col-span-xl-11 {
    grid-column: span 11;
  }

  .grid-row-span-xl-11 {
    grid-row: span 11;
  }

  .offset-xl-12 {
    margin-left: 50%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .count-xl-12.flow {
    column-count: 12;
  }
  .count-xl-12.grid-direction-vertical {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .count-xl-12.grid-direction-horizontal {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .grid-col-span-xl-12 {
    grid-column: span 12;
  }

  .grid-row-span-xl-12 {
    grid-row: span 12;
  }

  .offset-xl-13 {
    margin-left: 54.1666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-13 {
    flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%;
  }

  .count-xl-13.flow {
    column-count: 13;
  }
  .count-xl-13.grid-direction-vertical {
    grid-template-columns: repeat(13, minmax(0, 1fr));
  }
  .count-xl-13.grid-direction-horizontal {
    grid-template-rows: repeat(13, minmax(0, 1fr));
  }

  .grid-col-span-xl-13 {
    grid-column: span 13;
  }

  .grid-row-span-xl-13 {
    grid-row: span 13;
  }

  .offset-xl-14 {
    margin-left: 58.3333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-14 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .count-xl-14.flow {
    column-count: 14;
  }
  .count-xl-14.grid-direction-vertical {
    grid-template-columns: repeat(14, minmax(0, 1fr));
  }
  .count-xl-14.grid-direction-horizontal {
    grid-template-rows: repeat(14, minmax(0, 1fr));
  }

  .grid-col-span-xl-14 {
    grid-column: span 14;
  }

  .grid-row-span-xl-14 {
    grid-row: span 14;
  }

  .offset-xl-15 {
    margin-left: 62.5%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .count-xl-15.flow {
    column-count: 15;
  }
  .count-xl-15.grid-direction-vertical {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
  .count-xl-15.grid-direction-horizontal {
    grid-template-rows: repeat(15, minmax(0, 1fr));
  }

  .grid-col-span-xl-15 {
    grid-column: span 15;
  }

  .grid-row-span-xl-15 {
    grid-row: span 15;
  }

  .offset-xl-16 {
    margin-left: 66.6666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-16 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .count-xl-16.flow {
    column-count: 16;
  }
  .count-xl-16.grid-direction-vertical {
    grid-template-columns: repeat(16, minmax(0, 1fr));
  }
  .count-xl-16.grid-direction-horizontal {
    grid-template-rows: repeat(16, minmax(0, 1fr));
  }

  .grid-col-span-xl-16 {
    grid-column: span 16;
  }

  .grid-row-span-xl-16 {
    grid-row: span 16;
  }

  .offset-xl-17 {
    margin-left: 70.8333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-17 {
    flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%;
  }

  .count-xl-17.flow {
    column-count: 17;
  }
  .count-xl-17.grid-direction-vertical {
    grid-template-columns: repeat(17, minmax(0, 1fr));
  }
  .count-xl-17.grid-direction-horizontal {
    grid-template-rows: repeat(17, minmax(0, 1fr));
  }

  .grid-col-span-xl-17 {
    grid-column: span 17;
  }

  .grid-row-span-xl-17 {
    grid-row: span 17;
  }

  .offset-xl-18 {
    margin-left: 75%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .count-xl-18.flow {
    column-count: 18;
  }
  .count-xl-18.grid-direction-vertical {
    grid-template-columns: repeat(18, minmax(0, 1fr));
  }
  .count-xl-18.grid-direction-horizontal {
    grid-template-rows: repeat(18, minmax(0, 1fr));
  }

  .grid-col-span-xl-18 {
    grid-column: span 18;
  }

  .grid-row-span-xl-18 {
    grid-row: span 18;
  }

  .offset-xl-19 {
    margin-left: 79.1666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-19 {
    flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%;
  }

  .count-xl-19.flow {
    column-count: 19;
  }
  .count-xl-19.grid-direction-vertical {
    grid-template-columns: repeat(19, minmax(0, 1fr));
  }
  .count-xl-19.grid-direction-horizontal {
    grid-template-rows: repeat(19, minmax(0, 1fr));
  }

  .grid-col-span-xl-19 {
    grid-column: span 19;
  }

  .grid-row-span-xl-19 {
    grid-row: span 19;
  }

  .offset-xl-20 {
    margin-left: 83.3333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-20 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .count-xl-20.flow {
    column-count: 20;
  }
  .count-xl-20.grid-direction-vertical {
    grid-template-columns: repeat(20, minmax(0, 1fr));
  }
  .count-xl-20.grid-direction-horizontal {
    grid-template-rows: repeat(20, minmax(0, 1fr));
  }

  .grid-col-span-xl-20 {
    grid-column: span 20;
  }

  .grid-row-span-xl-20 {
    grid-row: span 20;
  }

  .offset-xl-21 {
    margin-left: 87.5%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .count-xl-21.flow {
    column-count: 21;
  }
  .count-xl-21.grid-direction-vertical {
    grid-template-columns: repeat(21, minmax(0, 1fr));
  }
  .count-xl-21.grid-direction-horizontal {
    grid-template-rows: repeat(21, minmax(0, 1fr));
  }

  .grid-col-span-xl-21 {
    grid-column: span 21;
  }

  .grid-row-span-xl-21 {
    grid-row: span 21;
  }

  .offset-xl-22 {
    margin-left: 91.6666666667%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-22 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .count-xl-22.flow {
    column-count: 22;
  }
  .count-xl-22.grid-direction-vertical {
    grid-template-columns: repeat(22, minmax(0, 1fr));
  }
  .count-xl-22.grid-direction-horizontal {
    grid-template-rows: repeat(22, minmax(0, 1fr));
  }

  .grid-col-span-xl-22 {
    grid-column: span 22;
  }

  .grid-row-span-xl-22 {
    grid-row: span 22;
  }

  .offset-xl-23 {
    margin-left: 95.8333333333%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-23 {
    flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%;
  }

  .count-xl-23.flow {
    column-count: 23;
  }
  .count-xl-23.grid-direction-vertical {
    grid-template-columns: repeat(23, minmax(0, 1fr));
  }
  .count-xl-23.grid-direction-horizontal {
    grid-template-rows: repeat(23, minmax(0, 1fr));
  }

  .grid-col-span-xl-23 {
    grid-column: span 23;
  }

  .grid-row-span-xl-23 {
    grid-row: span 23;
  }

  .offset-xl-24 {
    margin-left: 100%;
  }

  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xl-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .count-xl-24.flow {
    column-count: 24;
  }
  .count-xl-24.grid-direction-vertical {
    grid-template-columns: repeat(24, minmax(0, 1fr));
  }
  .count-xl-24.grid-direction-horizontal {
    grid-template-rows: repeat(24, minmax(0, 1fr));
  }

  .grid-col-span-xl-24 {
    grid-column: span 24;
  }

  .grid-row-span-xl-24 {
    grid-row: span 24;
  }
}
@media (min-width: 1536px) {
  .offset-xxl-1 {
    margin-left: 4.1666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-1 {
    flex: 0 0 4.1666666667%;
    max-width: 4.1666666667%;
  }

  .count-xxl-1.flow {
    column-count: 1;
  }
  .count-xxl-1.grid-direction-vertical {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .count-xxl-1.grid-direction-horizontal {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .grid-col-span-xxl-1 {
    grid-column: span 1;
  }

  .grid-row-span-xxl-1 {
    grid-row: span 1;
  }

  .offset-xxl-2 {
    margin-left: 8.3333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-2 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .count-xxl-2.flow {
    column-count: 2;
  }
  .count-xxl-2.grid-direction-vertical {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .count-xxl-2.grid-direction-horizontal {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .grid-col-span-xxl-2 {
    grid-column: span 2;
  }

  .grid-row-span-xxl-2 {
    grid-row: span 2;
  }

  .offset-xxl-3 {
    margin-left: 12.5%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-3 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .count-xxl-3.flow {
    column-count: 3;
  }
  .count-xxl-3.grid-direction-vertical {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .count-xxl-3.grid-direction-horizontal {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .grid-col-span-xxl-3 {
    grid-column: span 3;
  }

  .grid-row-span-xxl-3 {
    grid-row: span 3;
  }

  .offset-xxl-4 {
    margin-left: 16.6666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-4 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .count-xxl-4.flow {
    column-count: 4;
  }
  .count-xxl-4.grid-direction-vertical {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .count-xxl-4.grid-direction-horizontal {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .grid-col-span-xxl-4 {
    grid-column: span 4;
  }

  .grid-row-span-xxl-4 {
    grid-row: span 4;
  }

  .offset-xxl-5 {
    margin-left: 20.8333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-5 {
    flex: 0 0 20.8333333333%;
    max-width: 20.8333333333%;
  }

  .count-xxl-5.flow {
    column-count: 5;
  }
  .count-xxl-5.grid-direction-vertical {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .count-xxl-5.grid-direction-horizontal {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .grid-col-span-xxl-5 {
    grid-column: span 5;
  }

  .grid-row-span-xxl-5 {
    grid-row: span 5;
  }

  .offset-xxl-6 {
    margin-left: 25%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-6 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .count-xxl-6.flow {
    column-count: 6;
  }
  .count-xxl-6.grid-direction-vertical {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .count-xxl-6.grid-direction-horizontal {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .grid-col-span-xxl-6 {
    grid-column: span 6;
  }

  .grid-row-span-xxl-6 {
    grid-row: span 6;
  }

  .offset-xxl-7 {
    margin-left: 29.1666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-7 {
    flex: 0 0 29.1666666667%;
    max-width: 29.1666666667%;
  }

  .count-xxl-7.flow {
    column-count: 7;
  }
  .count-xxl-7.grid-direction-vertical {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .count-xxl-7.grid-direction-horizontal {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .grid-col-span-xxl-7 {
    grid-column: span 7;
  }

  .grid-row-span-xxl-7 {
    grid-row: span 7;
  }

  .offset-xxl-8 {
    margin-left: 33.3333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-8 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .count-xxl-8.flow {
    column-count: 8;
  }
  .count-xxl-8.grid-direction-vertical {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .count-xxl-8.grid-direction-horizontal {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .grid-col-span-xxl-8 {
    grid-column: span 8;
  }

  .grid-row-span-xxl-8 {
    grid-row: span 8;
  }

  .offset-xxl-9 {
    margin-left: 37.5%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-9 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .count-xxl-9.flow {
    column-count: 9;
  }
  .count-xxl-9.grid-direction-vertical {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .count-xxl-9.grid-direction-horizontal {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .grid-col-span-xxl-9 {
    grid-column: span 9;
  }

  .grid-row-span-xxl-9 {
    grid-row: span 9;
  }

  .offset-xxl-10 {
    margin-left: 41.6666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-10 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .count-xxl-10.flow {
    column-count: 10;
  }
  .count-xxl-10.grid-direction-vertical {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .count-xxl-10.grid-direction-horizontal {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .grid-col-span-xxl-10 {
    grid-column: span 10;
  }

  .grid-row-span-xxl-10 {
    grid-row: span 10;
  }

  .offset-xxl-11 {
    margin-left: 45.8333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-11 {
    flex: 0 0 45.8333333333%;
    max-width: 45.8333333333%;
  }

  .count-xxl-11.flow {
    column-count: 11;
  }
  .count-xxl-11.grid-direction-vertical {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .count-xxl-11.grid-direction-horizontal {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .grid-col-span-xxl-11 {
    grid-column: span 11;
  }

  .grid-row-span-xxl-11 {
    grid-row: span 11;
  }

  .offset-xxl-12 {
    margin-left: 50%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-12 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .count-xxl-12.flow {
    column-count: 12;
  }
  .count-xxl-12.grid-direction-vertical {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .count-xxl-12.grid-direction-horizontal {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .grid-col-span-xxl-12 {
    grid-column: span 12;
  }

  .grid-row-span-xxl-12 {
    grid-row: span 12;
  }

  .offset-xxl-13 {
    margin-left: 54.1666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-13 {
    flex: 0 0 54.1666666667%;
    max-width: 54.1666666667%;
  }

  .count-xxl-13.flow {
    column-count: 13;
  }
  .count-xxl-13.grid-direction-vertical {
    grid-template-columns: repeat(13, minmax(0, 1fr));
  }
  .count-xxl-13.grid-direction-horizontal {
    grid-template-rows: repeat(13, minmax(0, 1fr));
  }

  .grid-col-span-xxl-13 {
    grid-column: span 13;
  }

  .grid-row-span-xxl-13 {
    grid-row: span 13;
  }

  .offset-xxl-14 {
    margin-left: 58.3333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-14 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .count-xxl-14.flow {
    column-count: 14;
  }
  .count-xxl-14.grid-direction-vertical {
    grid-template-columns: repeat(14, minmax(0, 1fr));
  }
  .count-xxl-14.grid-direction-horizontal {
    grid-template-rows: repeat(14, minmax(0, 1fr));
  }

  .grid-col-span-xxl-14 {
    grid-column: span 14;
  }

  .grid-row-span-xxl-14 {
    grid-row: span 14;
  }

  .offset-xxl-15 {
    margin-left: 62.5%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-15 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .count-xxl-15.flow {
    column-count: 15;
  }
  .count-xxl-15.grid-direction-vertical {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
  .count-xxl-15.grid-direction-horizontal {
    grid-template-rows: repeat(15, minmax(0, 1fr));
  }

  .grid-col-span-xxl-15 {
    grid-column: span 15;
  }

  .grid-row-span-xxl-15 {
    grid-row: span 15;
  }

  .offset-xxl-16 {
    margin-left: 66.6666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-16 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .count-xxl-16.flow {
    column-count: 16;
  }
  .count-xxl-16.grid-direction-vertical {
    grid-template-columns: repeat(16, minmax(0, 1fr));
  }
  .count-xxl-16.grid-direction-horizontal {
    grid-template-rows: repeat(16, minmax(0, 1fr));
  }

  .grid-col-span-xxl-16 {
    grid-column: span 16;
  }

  .grid-row-span-xxl-16 {
    grid-row: span 16;
  }

  .offset-xxl-17 {
    margin-left: 70.8333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-17 {
    flex: 0 0 70.8333333333%;
    max-width: 70.8333333333%;
  }

  .count-xxl-17.flow {
    column-count: 17;
  }
  .count-xxl-17.grid-direction-vertical {
    grid-template-columns: repeat(17, minmax(0, 1fr));
  }
  .count-xxl-17.grid-direction-horizontal {
    grid-template-rows: repeat(17, minmax(0, 1fr));
  }

  .grid-col-span-xxl-17 {
    grid-column: span 17;
  }

  .grid-row-span-xxl-17 {
    grid-row: span 17;
  }

  .offset-xxl-18 {
    margin-left: 75%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-18 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .count-xxl-18.flow {
    column-count: 18;
  }
  .count-xxl-18.grid-direction-vertical {
    grid-template-columns: repeat(18, minmax(0, 1fr));
  }
  .count-xxl-18.grid-direction-horizontal {
    grid-template-rows: repeat(18, minmax(0, 1fr));
  }

  .grid-col-span-xxl-18 {
    grid-column: span 18;
  }

  .grid-row-span-xxl-18 {
    grid-row: span 18;
  }

  .offset-xxl-19 {
    margin-left: 79.1666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-19 {
    flex: 0 0 79.1666666667%;
    max-width: 79.1666666667%;
  }

  .count-xxl-19.flow {
    column-count: 19;
  }
  .count-xxl-19.grid-direction-vertical {
    grid-template-columns: repeat(19, minmax(0, 1fr));
  }
  .count-xxl-19.grid-direction-horizontal {
    grid-template-rows: repeat(19, minmax(0, 1fr));
  }

  .grid-col-span-xxl-19 {
    grid-column: span 19;
  }

  .grid-row-span-xxl-19 {
    grid-row: span 19;
  }

  .offset-xxl-20 {
    margin-left: 83.3333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-20 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .count-xxl-20.flow {
    column-count: 20;
  }
  .count-xxl-20.grid-direction-vertical {
    grid-template-columns: repeat(20, minmax(0, 1fr));
  }
  .count-xxl-20.grid-direction-horizontal {
    grid-template-rows: repeat(20, minmax(0, 1fr));
  }

  .grid-col-span-xxl-20 {
    grid-column: span 20;
  }

  .grid-row-span-xxl-20 {
    grid-row: span 20;
  }

  .offset-xxl-21 {
    margin-left: 87.5%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-21 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .count-xxl-21.flow {
    column-count: 21;
  }
  .count-xxl-21.grid-direction-vertical {
    grid-template-columns: repeat(21, minmax(0, 1fr));
  }
  .count-xxl-21.grid-direction-horizontal {
    grid-template-rows: repeat(21, minmax(0, 1fr));
  }

  .grid-col-span-xxl-21 {
    grid-column: span 21;
  }

  .grid-row-span-xxl-21 {
    grid-row: span 21;
  }

  .offset-xxl-22 {
    margin-left: 91.6666666667%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-22 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .count-xxl-22.flow {
    column-count: 22;
  }
  .count-xxl-22.grid-direction-vertical {
    grid-template-columns: repeat(22, minmax(0, 1fr));
  }
  .count-xxl-22.grid-direction-horizontal {
    grid-template-rows: repeat(22, minmax(0, 1fr));
  }

  .grid-col-span-xxl-22 {
    grid-column: span 22;
  }

  .grid-row-span-xxl-22 {
    grid-row: span 22;
  }

  .offset-xxl-23 {
    margin-left: 95.8333333333%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-23 {
    flex: 0 0 95.8333333333%;
    max-width: 95.8333333333%;
  }

  .count-xxl-23.flow {
    column-count: 23;
  }
  .count-xxl-23.grid-direction-vertical {
    grid-template-columns: repeat(23, minmax(0, 1fr));
  }
  .count-xxl-23.grid-direction-horizontal {
    grid-template-rows: repeat(23, minmax(0, 1fr));
  }

  .grid-col-span-xxl-23 {
    grid-column: span 23;
  }

  .grid-row-span-xxl-23 {
    grid-row: span 23;
  }

  .offset-xxl-24 {
    margin-left: 100%;
  }

  .col-xxl {
    flex-basis: 0;
    flex-grow: 1;
  }

  .col-xxl-24 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .count-xxl-24.flow {
    column-count: 24;
  }
  .count-xxl-24.grid-direction-vertical {
    grid-template-columns: repeat(24, minmax(0, 1fr));
  }
  .count-xxl-24.grid-direction-horizontal {
    grid-template-rows: repeat(24, minmax(0, 1fr));
  }

  .grid-col-span-xxl-24 {
    grid-column: span 24;
  }

  .grid-row-span-xxl-24 {
    grid-row: span 24;
  }
}
.hl-input-number.sm .hl-button {
  padding: 0;
  min-width: 28px;
}
.hl-input-number.sm.btn-vertical .btn-group {
  height: 28px;
}
.hl-input-number.sm.btn-vertical .btn-group .hl-button {
  width: 28px;
}
.hl-input-number.sm.btn-inner .hl-input {
  padding-left: 28px;
  padding-right: 28px;
}
.hl-input-number.sm.btn-inner .hl-button {
  position: absolute;
  top: 5px;
  min-width: 18px;
  width: 18px;
  height: 18px;
}
.hl-input-number.sm.btn-inner .hl-button.decrease {
  left: 5px;
}
.hl-input-number.sm.btn-inner .hl-button.increase {
  right: 5px;
}
.hl-input-number.md .hl-button {
  padding: 0;
  min-width: 36px;
}
.hl-input-number.md.btn-vertical .btn-group {
  height: 36px;
}
.hl-input-number.md.btn-vertical .btn-group .hl-button {
  width: 36px;
}
.hl-input-number.md.btn-inner .hl-input {
  padding-left: 36px;
  padding-right: 36px;
}
.hl-input-number.md.btn-inner .hl-button {
  position: absolute;
  top: 8px;
  min-width: 20px;
  width: 20px;
  height: 20px;
}
.hl-input-number.md.btn-inner .hl-button.decrease {
  left: 8px;
}
.hl-input-number.md.btn-inner .hl-button.increase {
  right: 8px;
}
.hl-input-number.lg .hl-button {
  padding: 0;
  min-width: 44px;
}
.hl-input-number.lg.btn-vertical .btn-group {
  height: 44px;
}
.hl-input-number.lg.btn-vertical .btn-group .hl-button {
  width: 44px;
}
.hl-input-number.lg.btn-inner .hl-input {
  padding-left: 44px;
  padding-right: 44px;
}
.hl-input-number.lg.btn-inner .hl-button {
  position: absolute;
  top: 11px;
  min-width: 22px;
  width: 22px;
  height: 22px;
}
.hl-input-number.lg.btn-inner .hl-button.decrease {
  left: 11px;
}
.hl-input-number.lg.btn-inner .hl-button.increase {
  right: 11px;
}
.hl-message.primary {
  background-color: #f4faff;
  border-color: transparent;
}
.hl-message.primary .panel-header {
  color: #40a9ff;
}
.hl-message.primary .panel-header .panel-header-left .hl-icon {
  color: #40a9ff;
}
.hl-message.info {
  background-color: #f7f3fe;
  border-color: transparent;
}
.hl-message.info .panel-header {
  color: #7239ea;
}
.hl-message.info .panel-header .panel-header-left .hl-icon {
  color: #7239ea;
}
.hl-message.success {
  background-color: #f5fcf8;
  border-color: transparent;
}
.hl-message.success .panel-header {
  color: #50cd89;
}
.hl-message.success .panel-header .panel-header-left .hl-icon {
  color: #50cd89;
}
.hl-message.warning {
  background-color: #fffcf0;
  border-color: transparent;
}
.hl-message.warning .panel-header {
  color: #ffc700;
}
.hl-message.warning .panel-header .panel-header-left .hl-icon {
  color: #ffc700;
}
.hl-message.danger {
  background-color: #fef4f6;
  border-color: transparent;
}
.hl-message.danger .panel-header {
  color: #f1416c;
}
.hl-message.danger .panel-header .panel-header-left .hl-icon {
  color: #f1416c;
}
.hl-notification.primary .panel-header {
  color: #40a9ff;
}
.hl-notification.info .panel-header {
  color: #7239ea;
}
.hl-notification.success .panel-header {
  color: #50cd89;
}
.hl-notification.warning .panel-header {
  color: #ffc700;
}
.hl-notification.danger .panel-header {
  color: #f1416c;
}
.hl-pagination.sm {
  border-radius: 3px;
}
.hl-pagination.sm ul li {
  font-size: 12px;
  height: 28px;
  min-width: 28px;
}
.hl-pagination.sm .hl-button {
  height: 28px;
  min-width: 28px;
}
.hl-pagination.md {
  border-radius: 4px;
}
.hl-pagination.md ul li {
  font-size: 14px;
  height: 36px;
  min-width: 36px;
}
.hl-pagination.md .hl-button {
  height: 36px;
  min-width: 36px;
}
.hl-pagination.lg {
  border-radius: 6px;
}
.hl-pagination.lg ul li {
  font-size: 16px;
  height: 44px;
  min-width: 44px;
}
.hl-pagination.lg .hl-button {
  height: 44px;
  min-width: 44px;
}
.hl-progress .progress-bar.warning {
  color: #FFFFFF;
  background-color: #ffc700;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-track.warning, .hl-progress.circle .progress-circle svg .progress-circle-track.warning {
  stroke: #EFF2F5;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-path.warning, .hl-progress.circle .progress-circle svg .progress-circle-path.warning {
  stroke: #ffc700;
}
.hl-progress .progress-bar.success {
  color: #FFFFFF;
  background-color: #50cd89;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-track.success, .hl-progress.circle .progress-circle svg .progress-circle-track.success {
  stroke: #EFF2F5;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-path.success, .hl-progress.circle .progress-circle svg .progress-circle-path.success {
  stroke: #50cd89;
}
.hl-progress .progress-bar.error {
  color: #FFFFFF;
  background-color: #f1416c;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-track.error, .hl-progress.circle .progress-circle svg .progress-circle-track.error {
  stroke: #EFF2F5;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-path.error, .hl-progress.circle .progress-circle svg .progress-circle-path.error {
  stroke: #f1416c;
}
.hl-simple-table th.primary,
.hl-simple-table td.primary {
  background-color: #f4faff;
}
.hl-simple-table th.info,
.hl-simple-table td.info {
  background-color: #f7f3fe;
}
.hl-simple-table th.success,
.hl-simple-table td.success {
  background-color: #f5fcf8;
}
.hl-simple-table th.warning,
.hl-simple-table td.warning {
  background-color: #fffcf0;
}
.hl-simple-table th.danger,
.hl-simple-table td.danger {
  background-color: #fef4f6;
}
.hl-simple-table.gap-none {
  border-spacing: 0 0px;
}
.hl-simple-table.gap-xxs {
  border-spacing: 0 4px;
}
.hl-simple-table.gap-xs {
  border-spacing: 0 8px;
}
.hl-simple-table.gap-sm {
  border-spacing: 0 12px;
}
.hl-simple-table.gap-md {
  border-spacing: 0 16px;
}
.hl-simple-table.gap-lg {
  border-spacing: 0 24px;
}
.hl-simple-table.gap-xl {
  border-spacing: 0 32px;
}
.hl-simple-table.gap-xxl {
  border-spacing: 0 40px;
}
.hl-simple-table.sm th,
.hl-simple-table.sm td {
  height: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.hl-simple-table.md th,
.hl-simple-table.md td {
  height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.hl-simple-table.lg th,
.hl-simple-table.lg td {
  height: 56px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.hl-table tr.primary,
.hl-table th.primary,
.hl-table td.primary {
  background-color: #f4faff;
}
.hl-table tr.info,
.hl-table th.info,
.hl-table td.info {
  background-color: #f7f3fe;
}
.hl-table tr.success,
.hl-table th.success,
.hl-table td.success {
  background-color: #f5fcf8;
}
.hl-table tr.warning,
.hl-table th.warning,
.hl-table td.warning {
  background-color: #fffcf0;
}
.hl-table tr.danger,
.hl-table th.danger,
.hl-table td.danger {
  background-color: #fef4f6;
}
.hl-table.gap-none .table-body {
  border-collapse: separate;
  border-spacing: 0 0px;
}
.hl-table.gap-xxs .table-body {
  border-collapse: separate;
  border-spacing: 0 4px;
}
.hl-table.gap-xs .table-body {
  border-collapse: separate;
  border-spacing: 0 8px;
}
.hl-table.gap-sm .table-body {
  border-collapse: separate;
  border-spacing: 0 12px;
}
.hl-table.gap-md .table-body {
  border-collapse: separate;
  border-spacing: 0 16px;
}
.hl-table.gap-lg .table-body {
  border-collapse: separate;
  border-spacing: 0 24px;
}
.hl-table.gap-xl .table-body {
  border-collapse: separate;
  border-spacing: 0 32px;
}
.hl-table.gap-xxl .table-body {
  border-collapse: separate;
  border-spacing: 0 40px;
}
.hl-table .sm th,
.hl-table .sm td {
  height: 40px;
  padding: 8px;
}
.hl-table .md th,
.hl-table .md td {
  height: 48px;
  padding: 12px;
}
.hl-table .lg th,
.hl-table .lg td {
  height: 56px;
  padding: 16px;
}
.hl-tag.primary {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-color: transparent;
}
.hl-tag.primary.is-focus {
  box-shadow: 0 0 0 1px #0d92ff;
}
.hl-tag.primary.outline {
  color: #40a9ff;
  background-color: transparent;
  border-color: #40a9ff;
}
.hl-tag.primary.light {
  color: #40a9ff;
  background-color: #f4faff;
  border-color: #f4faff;
}
.hl-tag.primary.light.is-active {
  box-shadow: 0 0 0 3px rgba(64, 169, 255, 0.25);
}
.hl-tag.primary.light.outline {
  color: #40a9ff;
  background-color: transparent;
  border-color: #f4faff;
}
.hl-tag.info {
  color: #FFFFFF;
  background-color: #7239ea;
  border-color: transparent;
}
.hl-tag.info.is-focus {
  box-shadow: 0 0 0 1px #5517d9;
}
.hl-tag.info.outline {
  color: #7239ea;
  background-color: transparent;
  border-color: #7239ea;
}
.hl-tag.info.light {
  color: #7239ea;
  background-color: #f7f3fe;
  border-color: #f7f3fe;
}
.hl-tag.info.light.is-active {
  box-shadow: 0 0 0 3px rgba(114, 57, 234, 0.25);
}
.hl-tag.info.light.outline {
  color: #7239ea;
  background-color: transparent;
  border-color: #f7f3fe;
}
.hl-tag.success {
  color: #FFFFFF;
  background-color: #50cd89;
  border-color: transparent;
}
.hl-tag.success.is-focus {
  box-shadow: 0 0 0 1px #34b66f;
}
.hl-tag.success.outline {
  color: #50cd89;
  background-color: transparent;
  border-color: #50cd89;
}
.hl-tag.success.light {
  color: #50cd89;
  background-color: #f5fcf8;
  border-color: #f5fcf8;
}
.hl-tag.success.light.is-active {
  box-shadow: 0 0 0 3px rgba(80, 205, 137, 0.25);
}
.hl-tag.success.light.outline {
  color: #50cd89;
  background-color: transparent;
  border-color: #f5fcf8;
}
.hl-tag.warning {
  color: #FFFFFF;
  background-color: #ffc700;
  border-color: transparent;
}
.hl-tag.warning.is-focus {
  box-shadow: 0 0 0 1px #cc9f00;
}
.hl-tag.warning.outline {
  color: #ffc700;
  background-color: transparent;
  border-color: #ffc700;
}
.hl-tag.warning.light {
  color: #ffc700;
  background-color: #fffcf0;
  border-color: #fffcf0;
}
.hl-tag.warning.light.is-active {
  box-shadow: 0 0 0 3px rgba(255, 199, 0, 0.25);
}
.hl-tag.warning.light.outline {
  color: #ffc700;
  background-color: transparent;
  border-color: #fffcf0;
}
.hl-tag.danger {
  color: #FFFFFF;
  background-color: #f1416c;
  border-color: transparent;
}
.hl-tag.danger.is-focus {
  box-shadow: 0 0 0 1px #ee1247;
}
.hl-tag.danger.outline {
  color: #f1416c;
  background-color: transparent;
  border-color: #f1416c;
}
.hl-tag.danger.light {
  color: #f1416c;
  background-color: #fef4f6;
  border-color: #fef4f6;
}
.hl-tag.danger.light.is-active {
  box-shadow: 0 0 0 3px rgba(241, 65, 108, 0.25);
}
.hl-tag.danger.light.outline {
  color: #f1416c;
  background-color: transparent;
  border-color: #fef4f6;
}
.hl-tag.sm {
  padding: 0px 8px;
  font-size: 12px;
  line-height: 1.6666666667;
  height: 22px;
}
.hl-tag.md {
  padding: 2px 12px;
  font-size: 14px;
  line-height: 1.5714285714;
  height: 28px;
}
.hl-tag.lg {
  padding: 5px 16px;
  font-size: 14px;
  line-height: 1.5714285714;
  height: 32px;
}
.hl-thumb.primary {
  color: #FFFFFF;
  background-color: #40a9ff;
}
.hl-thumb.primary.light {
  color: #40a9ff;
  background-color: #f4faff;
}
.hl-thumb.primary.light span {
  color: #40a9ff;
}
.hl-thumb.info {
  color: #FFFFFF;
  background-color: #7239ea;
}
.hl-thumb.info.light {
  color: #7239ea;
  background-color: #f7f3fe;
}
.hl-thumb.info.light span {
  color: #7239ea;
}
.hl-thumb.success {
  color: #FFFFFF;
  background-color: #50cd89;
}
.hl-thumb.success.light {
  color: #50cd89;
  background-color: #f5fcf8;
}
.hl-thumb.success.light span {
  color: #50cd89;
}
.hl-thumb.warning {
  color: #FFFFFF;
  background-color: #ffc700;
}
.hl-thumb.warning.light {
  color: #ffc700;
  background-color: #fffcf0;
}
.hl-thumb.warning.light span {
  color: #ffc700;
}
.hl-thumb.danger {
  color: #FFFFFF;
  background-color: #f1416c;
}
.hl-thumb.danger.light {
  color: #f1416c;
  background-color: #fef4f6;
}
.hl-thumb.danger.light span {
  color: #f1416c;
}
.hl-thumb.xxxs {
  width: 24px;
  height: 24px;
}
.hl-thumb.xxxs.radius {
  border-radius: 3px;
}
.hl-thumb.xxxs span {
  font-size: 10px;
}
.hl-thumb.xxs {
  width: 28px;
  height: 28px;
}
.hl-thumb.xxs.radius {
  border-radius: 3px;
}
.hl-thumb.xxs span {
  font-size: 12px;
}
.hl-thumb.xs {
  width: 32px;
  height: 32px;
}
.hl-thumb.xs.radius {
  border-radius: 3px;
}
.hl-thumb.xs span {
  font-size: 13px;
}
.hl-thumb.sm {
  width: 36px;
  height: 36px;
}
.hl-thumb.sm.radius {
  border-radius: 4px;
}
.hl-thumb.sm span {
  font-size: 14px;
}
.hl-thumb.md {
  width: 40px;
  height: 40px;
}
.hl-thumb.md.radius {
  border-radius: 4px;
}
.hl-thumb.md span {
  font-size: 16px;
}
.hl-thumb.lg {
  width: 48px;
  height: 48px;
}
.hl-thumb.lg.radius {
  border-radius: 6px;
}
.hl-thumb.lg span {
  font-size: 18px;
}
.hl-thumb.xl {
  width: 56px;
  height: 56px;
}
.hl-thumb.xl.radius {
  border-radius: 6px;
}
.hl-thumb.xl span {
  font-size: 20px;
}
.hl-thumb.xxl {
  width: 64px;
  height: 64px;
}
.hl-thumb.xxl.radius {
  border-radius: 8px;
}
.hl-thumb.xxl span {
  font-size: 24px;
}
.hl-thumb.xxxl {
  width: 72px;
  height: 72px;
}
.hl-thumb.xxxl.radius {
  border-radius: 8px;
}
.hl-thumb.xxxl span {
  font-size: 26px;
}
.hl-timeline .hl-timeline-item.primary .item-center .icon-dot {
  background-color: #40a9ff;
}
.hl-timeline .hl-timeline-item.primary .item-center .icon-dot::before {
  border-color: var(--timeline-icon-color, #40a9ff);
}
.hl-timeline .hl-timeline-item.info .item-center .icon-dot {
  background-color: #7239ea;
}
.hl-timeline .hl-timeline-item.info .item-center .icon-dot::before {
  border-color: var(--timeline-icon-color, #7239ea);
}
.hl-timeline .hl-timeline-item.success .item-center .icon-dot {
  background-color: #50cd89;
}
.hl-timeline .hl-timeline-item.success .item-center .icon-dot::before {
  border-color: var(--timeline-icon-color, #50cd89);
}
.hl-timeline .hl-timeline-item.warning .item-center .icon-dot {
  background-color: #ffc700;
}
.hl-timeline .hl-timeline-item.warning .item-center .icon-dot::before {
  border-color: var(--timeline-icon-color, #ffc700);
}
.hl-timeline .hl-timeline-item.danger .item-center .icon-dot {
  background-color: #f1416c;
}
.hl-timeline .hl-timeline-item.danger .item-center .icon-dot::before {
  border-color: var(--timeline-icon-color, #f1416c);
}
.hl-slider.primary .slider-bar {
  background-color: #40a9ff;
}
.hl-slider.primary .slider-handle {
  border: 2px solid #40a9ff;
  background-color: #40a9ff;
}
.hl-slider.primary .slider-handle.dragging {
  box-shadow: 0 0 0 8px rgba(64, 169, 255, 0.2) !important;
}
.hl-slider.primary .slider-handle.hover, .hl-slider.primary .slider-handle:hover {
  box-shadow: 0 0 0 4px rgba(64, 169, 255, 0.2);
}
.hl-slider.info .slider-bar {
  background-color: #7239ea;
}
.hl-slider.info .slider-handle {
  border: 2px solid #7239ea;
  background-color: #7239ea;
}
.hl-slider.info .slider-handle.dragging {
  box-shadow: 0 0 0 8px rgba(114, 57, 234, 0.2) !important;
}
.hl-slider.info .slider-handle.hover, .hl-slider.info .slider-handle:hover {
  box-shadow: 0 0 0 4px rgba(114, 57, 234, 0.2);
}
.hl-slider.success .slider-bar {
  background-color: #50cd89;
}
.hl-slider.success .slider-handle {
  border: 2px solid #50cd89;
  background-color: #50cd89;
}
.hl-slider.success .slider-handle.dragging {
  box-shadow: 0 0 0 8px rgba(80, 205, 137, 0.2) !important;
}
.hl-slider.success .slider-handle.hover, .hl-slider.success .slider-handle:hover {
  box-shadow: 0 0 0 4px rgba(80, 205, 137, 0.2);
}
.hl-slider.warning .slider-bar {
  background-color: #ffc700;
}
.hl-slider.warning .slider-handle {
  border: 2px solid #ffc700;
  background-color: #ffc700;
}
.hl-slider.warning .slider-handle.dragging {
  box-shadow: 0 0 0 8px rgba(255, 199, 0, 0.2) !important;
}
.hl-slider.warning .slider-handle.hover, .hl-slider.warning .slider-handle:hover {
  box-shadow: 0 0 0 4px rgba(255, 199, 0, 0.2);
}
.hl-slider.danger .slider-bar {
  background-color: #f1416c;
}
.hl-slider.danger .slider-handle {
  border: 2px solid #f1416c;
  background-color: #f1416c;
}
.hl-slider.danger .slider-handle.dragging {
  box-shadow: 0 0 0 8px rgba(241, 65, 108, 0.2) !important;
}
.hl-slider.danger .slider-handle.hover, .hl-slider.danger .slider-handle:hover {
  box-shadow: 0 0 0 4px rgba(241, 65, 108, 0.2);
}
.hl-spinner.xxxs {
  width: 12px;
  height: 12px;
}
.hl-spinner.xxs {
  width: 14px;
  height: 14px;
}
.hl-spinner.xs {
  width: 16px;
  height: 16px;
}
.hl-spinner.sm {
  width: 18px;
  height: 18px;
}
.hl-spinner.md {
  width: 20px;
  height: 20px;
}
.hl-spinner.lg {
  width: 24px;
  height: 24px;
}
.hl-spinner.xl {
  width: 28px;
  height: 28px;
}
.hl-spinner.xxl {
  width: 32px;
  height: 32px;
}
.hl-spinner.xxxl {
  width: 36px;
  height: 36px;
}
.hl-step.is-process {
  color: #5E6278;
}
.hl-step.is-process .step-head .step-line::before {
  border-color: #E4E6EF;
}
.hl-step.is-process .step-head .step-icon {
  color: #FFFFFF;
  background-color: #40a9ff;
}
.hl-step.is-wait {
  color: #5E6278;
}
.hl-step.is-wait .step-head .step-line::before {
  border-color: #E4E6EF;
}
.hl-step.is-wait .step-head .step-icon {
  color: #40a9ff;
  background-color: #f4faff;
}
.hl-step.is-finish {
  color: #5E6278;
}
.hl-step.is-finish .step-head .step-line::before {
  border-color: #E4E6EF;
}
.hl-step.is-finish .step-head .step-icon {
  color: #40a9ff;
  background-color: #f4faff;
}
.hl-step.is-success {
  color: #5E6278;
}
.hl-step.is-success .step-head .step-line::before {
  border-color: #E4E6EF;
}
.hl-step.is-success .step-head .step-icon {
  color: #40a9ff;
  background-color: #f4faff;
}
.hl-step.is-error {
  color: #5E6278;
}
.hl-step.is-error .step-head .step-line::before {
  border-color: #E4E6EF;
}
.hl-step.is-error .step-head .step-icon {
  color: #FFFFFF;
  background-color: #f1416c;
}
.hb-tree-selector-popper {
  min-width: 200px;
}
.hb-tree-selector-popper .selector-dropdown-wrap {
  max-height: 300px;
  min-height: 150px;
}
.hb-tree-selector-popper .selector-dropdown-wrap .selector-tree .tree-node .tree-node-content {
  height: 36px;
  border-radius: 0;
}
.hb-tree-selector-popper .selector-dropdown-wrap .selector-tree .tree-node .tree-node-content .tree-node-arrow {
  padding: 7px;
  width: 36px;
  height: 36px;
  margin-left: 12px;
}
.hb-tree-transfer {
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  gap: 16px;
}
.hb-tree-transfer.block {
  display: flex;
}
.hb-tree-transfer .transfer-panel {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  border-radius: 4px;
  border: 1px solid #EFF2F5;
  background-color: #FFFFFF;
  width: 260px;
  height: 400px;
}
.hb-tree-transfer .transfer-panel .panel-header {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #EFF2F5;
  background-color: #F6F9FB;
}
.hb-tree-transfer .transfer-panel .panel-header .count {
  color: #A1A5B7;
}
.hb-tree-transfer .transfer-panel .panel-body {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: hidden;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-filter {
  padding: 16px;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-filter .hl-input .input-close {
  display: none;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-filter .hl-input .input-close.show-close {
  display: block;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list {
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list.has-filterable {
  padding-top: 0;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list.hl-tree {
  padding-top: 0;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  padding: 8px 16px;
  border-radius: 4px;
  gap: 12px;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item:hover {
  background-color: #F6F9FB;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item:hover .item-close {
  opacity: 1;
  visibility: visible;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item .checkbox-label {
  padding: 0;
  flex-grow: 1;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item .checkbox-inner {
  flex-grow: 0;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item .hl-icon,
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item .hl-thumb {
  margin-right: 8px;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item .item-close {
  opacity: 0;
  visibility: hidden;
  width: 14px;
  margin: 0;
  color: #A1A5B7;
  transition: color 0.3s;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-list .item .item-close:hover {
  color: #5E6278;
}
.hb-tree-transfer .transfer-panel .panel-body .panel-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: #A1A5B7;
  min-height: 80px;
}
.hb-tree-transfer .transfer-panel .panel-body .tree-empty-block {
  height: auto;
}
.hb-tree-transfer .transfer-panel .panel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
  border-radius: 0 0 4px 4px;
  border-top: 1px solid #EFF2F5;
  height: 48px;
  background-color: #F6F9FB;
}
.hb-tree-transfer.no-buttons .transfer-panel.right .panel-list .hl-checkbox {
  pointer-events: none;
}
.hb-tree-transfer.no-buttons .transfer-panel.right .panel-list .hl-checkbox i.item-close {
  pointer-events: auto;
}
.hb-tree-transfer .transfer-buttons {
  display: flex;
  align-items: center;
}
.hb-text-overflow {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hb-text-overflow .text-overflow-content {
  position: relative;
  margin: -12px;
  padding: 12px;
  overflow: auto;
  max-height: 160px;
}
.hb-table-toolbar {
  --toolbar-padding: 24px;
  padding: 0 var(--toolbar-padding);
}
.hb-table-toolbar .toolbar-batch {
  width: 100%;
}
.hb-table-toolbar .toolbar-batch .batch-wrap {
  visibility: hidden;
  opacity: 0;
  transform: translateX(-16px);
  transition: all 0.5s ease;
}
.hb-table-toolbar .toolbar-batch .batch-wrap.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
.hb-table-toolbar .table-counts {
  min-width: 220px;
}
.hb-table-toolbar .table-counts strong {
  color: #40a9ff;
  font-weight: 400;
}
.hb-table-searchbar {
  --search-bar-padding: 24px;
  padding: 0 var(--search-bar-padding);
}
.hb-table-searchbar .input-search {
  min-width: 260px;
}
.hb-table-searchbar .searchbar-collapse {
  height: 36px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.hb-table-searchbar .searchbar-collapse.opened {
  height: auto;
  overflow: unset;
}
.hb-table-searchbar .more {
  transform: rotate(180deg);
  transition: transform 0.5s;
}
.hb-table-list {
  --table-list-padding: 24px;
}
.hb-table-list .hb-table-searchbar {
  --search-bar-padding: var(--table-list-padding);
  padding: 0 var(--search-bar-padding) 24px;
  border-bottom: 1px solid #EFF2F5;
}
.hb-table-list .hb-table-searchbar + .hb-table-toolbar {
  padding-top: 24px;
}
.hb-table-list .hb-table-toolbar {
  --toolbar-padding: var(--table-list-padding);
  padding: 0 var(--toolbar-padding) 24px;
  border-bottom: 1px solid #EFF2F5;
}
.hb-table-list .hb-table-toolbar + .hb-table-searchbar {
  padding-top: 24px;
}
.hb-table-list .hl-simple-table {
  --table-padding: var(--table-list-padding);
}
.hb-table-list .hl-pagination {
  display: flex;
  margin: 24px var(--table-list-padding);
}
.hb-simple-table-list {
  --table-list-padding: 24px;
}
.hb-simple-table-list .hb-table-searchbar {
  --search-bar-padding: var(--table-list-padding);
  padding: 0 var(--search-bar-padding) 24px;
  border-bottom: 1px solid #EFF2F5;
}
.hb-simple-table-list .hb-table-searchbar + .hb-table-toolbar {
  padding-top: 24px;
}
.hb-simple-table-list .hb-table-toolbar {
  --toolbar-padding: var(--table-list-padding);
  padding: 0 var(--toolbar-padding) 24px;
  border-bottom: 1px solid #EFF2F5;
}
.hb-simple-table-list .hb-table-toolbar + .hb-table-searchbar {
  padding-top: 24px;
}
.hb-simple-table-list .hl-simple-table {
  --table-padding: var(--table-list-padding);
}
.hb-simple-table-list .hl-pagination {
  display: flex;
  margin: 24px var(--table-list-padding);
}
.hb-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  --imageWidth: 160px;
}
.hb-empty .empty-image {
  width: var(--imageWidth);
}
.hb-empty .empty-image svg,
.hb-empty .empty-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.hb-empty .empty-image svg {
  fill: #B5B5C3;
}
.hb-empty .empty-description {
  margin-top: 24px;
  color: #A1A5B7;
}
.hb-data-filter-popper .hl-panel {
  box-shadow: 0 0 30px 0 rgba(109, 131, 168, 0.15);
  border: none;
}
.hb-data-filter-popper .hl-panel .selected-item-tag {
  max-width: calc(var(--data-filter-panel-width) - var(--panel-body-padding) * 2 - var(--sm) * 2 - 2px);
}
.hb-data-filter-popper .no-selected-items .form-content {
  display: none;
}
.hb-data-filter-popper .selected-items {
  width: 100%;
  background-color: #f4faff;
  border-radius: var(--radius-lg);
  border: 1px dashed #40a9ff;
  padding: var(--sm);
}
.hb-modeless-dialog {
  position: fixed;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  box-shadow: 0 5px 12px 0 rgba(109, 131, 168, 0.05), 0 0 50px 0 rgba(193, 205, 225, 0.1);
}
.hb-modeless-dialog .panel-header {
  user-select: none;
}
.hb-modeless-dialog .panel-resizer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  display: block;
  opacity: 0;
  cursor: se-resize;
}
.hb-modeless-dialog.fullscreen {
  transform: none;
}
.hb-dock-container {
  position: fixed;
  --dock-item-width: 144px;
  --dock-item-height: 96px;
}
.hb-dock-container.at-left {
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 0;
  height: 100%;
}
.hb-dock-container.at-left .panel-header,
.hb-dock-container.at-left .panel-footer {
  border-radius: 0;
}
.hb-dock-container.at-left .panel-body .scrollbar {
  height: calc(100vh - 2 * var(--panel-body-padding));
}
.hb-dock-container.at-left .panel-body .scrollbar .dock-items {
  flex-direction: column;
}
.hb-dock-container.at-left .panel-body .empty-text {
  margin-top: 45vh;
}
.hb-dock-container.at-right {
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0;
  height: 100%;
}
.hb-dock-container.at-right .panel-header,
.hb-dock-container.at-right .panel-footer {
  border-radius: 0;
}
.hb-dock-container.at-right .panel-body .scrollbar {
  height: calc(100vh - 2 * var(--panel-body-padding));
}
.hb-dock-container.at-right .panel-body .scrollbar .dock-items {
  flex-direction: column;
}
.hb-dock-container.at-right .panel-body .empty-text {
  margin-top: 45vh;
}
.hb-dock-container.at-top {
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  width: 100% !important;
}
.hb-dock-container.at-top .panel-header,
.hb-dock-container.at-top .panel-footer {
  border-radius: 0;
}
.hb-dock-container.at-top .panel-body .scrollbar .dock-items {
  flex-direction: row;
}
.hb-dock-container.at-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  width: 100% !important;
}
.hb-dock-container.at-bottom .panel-header,
.hb-dock-container.at-bottom .panel-footer {
  border-radius: 0;
}
.hb-dock-container.at-bottom .panel-body .scrollbar .dock-items {
  flex-direction: row;
}
.hb-dock-container .panel-body .dock-items {
  display: flex;
}
.hb-dock-container .dock-item {
  position: relative;
  margin: 24px;
  cursor: pointer;
}
.hb-dock-container .dock-item video,
.hb-dock-container .dock-item audio {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.hb-dock-container .dock-item:hover .item-content {
  box-shadow: 0 0 30px 0 rgba(109, 131, 168, 0.15);
}
.hb-dock-container .dock-item:hover .item-close {
  visibility: visible;
  opacity: 1;
}
.hb-dock-container .dock-item:hover .item-title {
  color: #009EF7;
}
.hb-dock-container .dock-item .item-content {
  width: var(--dock-item-width);
  height: var(--dock-item-height);
  box-shadow: 0 2px 14px 0 rgba(193, 205, 225, 0.25);
  background-color: #FFFFFF;
  border: 1px solid #EFF2F5;
  overflow: hidden;
}
.hb-dock-container .dock-item .item-content .media.text {
  padding: 16px;
}
.hb-dock-container .dock-item .item-title {
  margin-top: 12px;
  text-align: center;
}
.hb-dock-container .dock-item .item-close {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  display: flex;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: #FFFFFF;
  padding: 4px;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  box-shadow: 0 0 30px 0 rgba(109, 131, 168, 0.15);
  transition: all 0.3s;
}
.hb-dock-container .dock-item .item-close .hl-icon {
  width: 100%;
  height: 100%;
}
.hb-dock-container .empty-text {
  text-align: center;
}
.hb-banner {
  border-radius: 0;
}
.hb-banner.at-top {
  top: 0;
  left: 0;
  right: 0;
}
.hb-banner.at-bottom {
  bottom: 0;
  left: 0;
  right: 0;
}
.hb-data-collect {
  --data-collect-radius: 4px;
  --data-collect-padding: 16px;
  --data-collect-padding-x: var(--data-collect-padding);
  --data-collect-padding-y: var(--data-collect-padding);
  align-items: center;
  border-radius: var(--data-collect-radius);
  padding: var(--data-collect-padding-y) var(--data-collect-padding-x);
  transition: all 0.3s ease;
}
.hb-data-collect .hl-icon,
.hb-data-collect .hl-thumb,
.hb-data-collect .symbol {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
  transition: all 0.3s ease;
}
.hb-data-collect .title {
  display: block;
  color: #3F4254;
  font-weight: 500;
}
.hb-data-collect .sub-title {
  display: block;
  font-size: 12px;
  color: #A1A5B7;
}
.hb-popconfirm .main {
  display: flex;
  align-items: center;
}
.hb-popconfirm .action {
  text-align: right;
  margin-top: 8px;
}
.hb-popconfirm .action button + button {
  margin-left: var(--sm);
}
#app {
  height: inherit;
  --doc: "doc";
}
.dom-area {
  position: relative;
}
.dom-area::before {
  content: attr(data-name);
  position: absolute;
  top: -10px;
  left: -10px;
  background-color: #40a9ff;
  padding: 0px 8px;
  font-size: 10px;
  color: #fff;
  opacity: 0;
  z-index: 10;
  border-radius: 6px 0 3px 0;
  white-space: nowrap;
  transition: opacity 0.1s;
}
.dom-area::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  opacity: 0;
  border: 2px solid #40a9ff;
  border-radius: 8px;
  background-color: rgba(64, 169, 255, 0.08);
  z-index: 9;
}
.dom-area > .dom-area::after {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 2px solid #40a9ff;
  background-color: rgba(64, 169, 255, 0.16);
  border-radius: 0px;
}
.dom-area > .dom-area::before {
  top: 0px;
  left: auto;
  right: 0;
  border-radius: 0px 0px 0px 3px;
}
.dom-area > .dom-area > .dom-area::before {
  top: 50%;
  margin: -9px 0 0 -15px;
  border-radius: 3px;
}
.dom-area.active::before, .dom-area:hover::before {
  opacity: 1;
}
.dom-area.active::after, .dom-area:hover::after {
  opacity: 1;
}
.bg-stripes {
  --stripes-color: rgba(168, 85, 247, 0.4);
  background-image: linear-gradient(45deg, var(--stripes-color) 12.5%, transparent 12.5%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62.5%, transparent 62.5%, transparent 100%);
  background-size: 5.66px 5.66px;
}
.show-height {
  position: relative;
  --height-color: rgba(168, 85, 247, 0.4);
  border: 1px solid var(--height-color);
  border-left: none;
  border-right: none;
}
.hl-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #EFF2F5;
}
.hl-header nav {
  width: 100%;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 1280px) {
  .hl-header nav {
    margin: 0 auto;
    width: 1440px;
  }
}
.hl-header .nav-logo {
  position: relative;
  width: 140px;
  display: flex;
  color: #3F4254;
}
.hl-header .nav-logo svg {
  width: 100%;
  height: 100%;
}
.hl-header .nav-logo .version {
  position: absolute;
  top: 50%;
  right: -16px;
  transform: translate(100%, -50%);
}
.hl-header .nav-item {
  list-style-type: none;
  display: flex;
  gap: 32px;
}
.hl-header .nav-item li {
  display: flex;
  align-items: center;
  color: #5E6278;
  font-weight: 500;
  font-size: 14px;
}
.hl-header .nav-item li:hover {
  color: #009EF7;
}
.hl-header .nav-item li a {
  color: currentColor;
}
.side-nav {
  list-style-type: none;
  padding-left: 32px;
  padding-top: 24px;
  margin: 0;
}
.side-nav .nav-item a {
  font-weight: 500;
  color: #5E6278;
}
.side-nav .nav-group {
  margin-bottom: 16px;
}
.side-nav .nav-group .group-title {
  display: flex;
  color: #3F4254;
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
}
.side-nav .nav-group .group-title .hl-icon {
  width: 12px;
  height: 12px;
  transform: rotate(-90deg);
  margin-right: 12px;
  color: #A1A5B7;
}
.side-nav .nav-group.is-collapsed .group-title .hl-icon {
  transform: rotate(90deg);
}
.side-nav .nav-group.is-collapsed ul {
  display: none;
}
.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 1px solid #EFF2F5;
}
.side-nav ul li {
  margin-bottom: 12px;
}
.side-nav ul li a {
  position: relative;
  display: flex;
  padding: 0 16px;
  color: #5E6278;
}
.side-nav ul li a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transform: translate(-100%, 0);
  border-left: 1px solid transparent;
}
.side-nav ul li a:hover {
  color: #009EF7;
}
.side-nav ul li a:hover::before {
  border-color: #B5B5C3;
}
.side-nav ul li a.active {
  color: #009EF7;
}
.side-nav ul li a.active::before {
  border-color: #009EF7;
}
.right-nav {
  position: sticky;
  top: 100px;
  right: 0;
  width: 260px;
  height: calc(100vh - 112px);
  overflow-y: auto;
  display: none;
  padding-left: 32px;
}
@media (min-width: 1280px) {
  .right-nav {
    display: block;
  }
}
.right-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.right-nav ul li a {
  padding: 4px;
  cursor: pointer;
  display: block;
  color: #5E6278;
}
.right-nav ul li a.is-active, .right-nav ul li a:hover {
  color: #009EF7;
}
.doc-content {
  display: flex;
}
.doc-content section {
  padding: 32px 48px;
  width: 100%;
}
@media (min-width: 1280px) {
  .doc-content section {
    margin: 0 auto;
    max-width: 900px;
  }
}
.doc-content section > :is(h1, h2, h3, h4, h5) {
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 12px;
  color: #3F4254;
}
.doc-content section > h1 {
  font-size: 24px;
}
.doc-content section > h2 {
  font-size: 20px;
}
.doc-content section > h3 {
  font-size: 18px;
}
.doc-content section > h2,
.doc-content section > h3 {
  position: relative;
  margin-top: -64px;
  pointer-events: none;
}
.doc-content section > h2::before,
.doc-content section > h3::before {
  content: "";
  display: block;
  position: relative;
  width: 100%;
  height: 96px;
  visibility: hidden;
}
.doc-content section > h2 a,
.doc-content section > h3 a {
  pointer-events: all;
  display: block;
  position: absolute;
  height: 30px;
}
.doc-content section > h2 a::before,
.doc-content section > h3 a::before {
  content: "#";
  color: #f1416c;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  line-height: 32px;
  margin-left: -20px;
  padding-right: 8px;
  position: absolute;
  opacity: 0;
}
.doc-content section > h2:hover a::before,
.doc-content section > h3:hover a::before {
  opacity: 1;
}
.doc-content section > p {
  margin-bottom: 2em;
}
.doc-content section table:not(.hl-simple-table) {
  width: 100%;
  padding: 0;
  border-spacing: 0;
  border-collapse: collapse;
  --table-td-padding: 12px 12px;
}
.doc-content section table:not(.hl-simple-table) thead tr:last-child,
.doc-content section table:not(.hl-simple-table) tbody tr:last-child,
.doc-content section table:not(.hl-simple-table) tfoot tr:last-child {
  border-bottom: none;
}
.doc-content section table:not(.hl-simple-table) thead {
  border: 0;
  padding: 0;
  text-align: left;
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
}
.doc-content section table:not(.hl-simple-table) thead::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #EFF2F5;
}
.doc-content section table:not(.hl-simple-table) thead tr td,
.doc-content section table:not(.hl-simple-table) thead tr th {
  border: 0;
  font-weight: 700;
  margin: 0;
  padding: var(--table-td-padding);
}
.doc-content section table:not(.hl-simple-table) tbody {
  padding: 0;
}
.doc-content section table:not(.hl-simple-table) tbody tr {
  border-bottom: 1px solid #EFF2F5;
}
.doc-content section table:not(.hl-simple-table) tbody tr.emp td {
  position: relative;
}
.doc-content section table:not(.hl-simple-table) tbody tr.emp em {
  position: absolute;
  top: -1px;
  right: -1px;
  height: 100%;
  color: #fff;
}
.doc-content section table:not(.hl-simple-table) tbody tr td {
  border: 0;
  line-height: 1.4;
  padding: var(--table-td-padding);
}
.doc-content section table:not(.hl-simple-table) tbody tr:focus, .doc-content section table:not(.hl-simple-table) tbody tr:hover {
  background-color: #F6F9FB;
}
.doc-content section table:not(.hl-simple-table) tbody tr:focus td, .doc-content section table:not(.hl-simple-table) tbody tr:hover td {
  background: transparent;
}
.doc-content section table:not(.hl-simple-table).bordered {
  border: 1px solid #EFF2F5;
}
.doc-content section table:not(.hl-simple-table).bordered tbody > tr > td,
.doc-content section table:not(.hl-simple-table).bordered thead > tr > td,
.doc-content section table:not(.hl-simple-table).bordered thead > tr > th {
  border-right: 1px solid #EFF2F5;
}
.doc-content section table:not(.hl-simple-table).striped > tbody > tr:nth-child(2n+1),
.doc-content section table:not(.hl-simple-table).striped > tbody > tr:nth-child(2n+1) {
  background-color: #F6F9FB;
}
.doc-content section > ul li {
  margin-bottom: 0.5em;
}
.doc-content pre {
  display: flex;
  margin: 12px 0 24px;
  color: #abb2bf;
  background-color: #2d3748;
  border-radius: 6px;
  padding: 24px;
  font-size: 12px;
}
.doc-content pre > code {
  display: block;
  background-color: transparent;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  flex: none;
  min-width: 100%;
  white-space: pre-wrap;
}
.doc-content :not(pre) > code {
  display: inline;
  font-weight: 400;
  font-size: 14px;
  background-color: #F6F9FB;
  padding: 3px 6px;
  margin: 0 3px;
  border: 1px solid #EFF2F5;
  color: #f1416c;
  border-radius: 3px;
}
.demo-block {
  position: relative;
  border: 1px solid #EFF2F5;
  border-radius: 6px;
  transition: 0.2s;
  margin: 20px 0;
  background-color: #ffffff;
}
.demo-block.dark {
  border-color: transparent;
  background-color: #25303f;
}
.demo-block.dark .demo-block-control {
  background-color: rgba(0, 0, 0, 0.06);
  border-color: rgba(239, 242, 245, 0.1);
}
.demo-block.dark .demo-block-control:hover {
  transition: all 0.2s;
  color: #009EF7;
  background-color: rgba(0, 0, 0, 0.08);
}
.demo-block.dark .demo-block-control.is-fixed {
  background-color: rgba(0, 0, 0, 0.06);
  border-color: rgba(239, 242, 245, 0.1);
}
.demo-block.dark .demo-block-control.is-fixed:hover {
  transition: all 0.2s;
  color: #009EF7;
  background-color: rgba(0, 0, 0, 0.08);
}
.demo-block.gary {
  background-color: #f8fafc;
}
.demo-block .demo-button {
  float: right;
}
.demo-block .source {
  padding: 40px 32px 32px;
}
.demo-block .source:before {
  position: absolute;
  top: 10px;
  left: 10px;
  content: "Eexample:";
  color: rgba(94, 98, 120, 0.2);
  font-size: 10px;
}
.demo-block .code-content {
  position: static;
}
.demo-block .code-content .hl-tabs .tabs-nav {
  margin: 0 16px;
}
.demo-block .code-content .hl-tabs .tabs-content {
  padding: 0;
}
.demo-block .code-content .hl-tabs .tabs-header:after {
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-block .code-content .hl-tabs .tabs-item {
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  color: #cbd5e0;
}
.demo-block .code-content .hl-tabs .tabs-item.is-active {
  color: #fff;
}
.demo-block .code-content .hl-tabs .tabs-active-bar {
  background-color: #6b94df;
}
.demo-block .meta {
  overflow: hidden;
  height: 0;
  transition: height 0.5s;
}
.demo-block .demo-block-control {
  border-top: 1px solid #EFF2F5;
  height: 44px;
  background-color: #F6F9FB;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  margin-top: -1px;
  color: #A1A5B7;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}
.demo-block .demo-block-control:hover {
  color: #009EF7;
  background-color: #F6F9FB;
}
.demo-block .demo-block-control.is-fixed {
  position: sticky;
  bottom: 0;
  width: 100%;
  border-radius: 0;
  background-color: rgba(246, 249, 251, 0.8);
  border-color: rgba(239, 242, 245, 0.1);
  color: #5E6278;
}
.demo-block .demo-block-control.is-fixed:hover {
  transition: all 0.2s;
  color: #009EF7;
  background-color: #f6f9fb;
}
.demo-block .demo-block-control > span {
  font-size: 14px;
  line-height: 44px;
  display: inline-block;
}
.demo-block .demo-block-control .control-button {
  line-height: 26px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 25px;
}
.demo-block .demo-block-control .control-button-container {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
}
.demo-tabs {
  margin: 24px 0;
}
.demo-tabs .tab-items {
  position: relative;
  display: flex;
  overflow: hidden;
  padding-top: 6px;
  color: #abb2bf;
  background-color: #293242;
  border-radius: 6px 6px 0 0;
}
.demo-tabs .tab-items::before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  border-bottom: 1px solid #414f67;
}
.demo-tabs .tab-items .tab-title {
  position: relative;
  cursor: pointer;
  color: #6b80a3;
  padding: 6px 24px;
  border: 1px solid #414f67;
  margin-right: -1px;
}
.demo-tabs .tab-items .tab-title::before {
  position: absolute;
  left: -1px;
  right: -1px;
  top: -1px;
  bottom: 0;
  content: "";
  z-index: 1;
  border-top: 2px solid transparent;
}
.demo-tabs .tab-items .tab-title.active {
  color: #a6d7ff;
  background-color: #2d3748;
  border-radius: 6px 6px 0 0;
  border-bottom: transparent;
}
.demo-tabs .tab-items .tab-title.active::before {
  border-top-color: #73c0ff;
}
.demo-tabs pre {
  display: none;
  margin: 0;
  border-radius: 0 0 6px 6px;
}
.demo-tabs pre.active {
  display: block;
}
.doc-tip {
  padding: 16px;
  background-color: #f4faff;
  border-left: 4px solid #40a9ff;
  margin: 20px 0;
}
.doc-tip.warning {
  background-color: #fffcf0;
  border-color: #ffc700;
}
.doc-tip.danger {
  background-color: #fef4f6;
  border-color: #f1416c;
}
.doc-tip.success {
  background-color: #f5fcf8;
  border-color: #50cd89;
}
.doc-tip.info {
  background-color: #f7f3fe;
  border-color: #7239ea;
}
.doc-tip p {
  margin: 0 !important;
  line-height: 2;
}
.doc-tip code {
  color: #5e6d82;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 3px;
}
.demo-description {
  background-color: rgba(64, 169, 255, 0.08);
  padding: 16px;
  border-left: 4px solid #40a9ff;
  margin-bottom: 20px;
}
.demo-description p {
  margin: 0 !important;
  line-height: 2;
}
.demo-description code {
  color: #5e6d82;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 3px;
}
.icon-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #EFF2F5;
  border-left: 1px solid #EFF2F5;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  font-size: 13px;
  border-right: 1px solid #EFF2F5;
  border-bottom: 1px solid #EFF2F5;
}
.icon-list li::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.icon-list li span {
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
  transition: color 0.15s linear;
}
.icon-list li i {
  font-size: 32px;
  margin-bottom: 15px;
  color: #606266;
  transition: color 0.15s linear;
}
.icon-list li .icon-name {
  display: inline-block;
  padding: 0 3px;
  height: 1em;
}
.icon-list li:hover span,
.icon-list li:hover i {
  color: #5cb6ff;
}
.color-box {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0px;
  margin-right: 0px;
}
.color-list {
  display: flex;
  flex: 0 0 20%;
  max-width: 20%;
  flex-direction: column;
  padding: 40px 0px 0;
  margin: 0;
  height: 500px;
  list-style-type: none;
}
.color-list:after {
  display: block;
  content: "";
  clear: both;
}
.color-list.inline {
  flex: 0 0 100%;
  max-width: 100%;
  flex-direction: row;
  height: unset;
}
.color-list.inline li {
  height: 50px;
  justify-content: center;
}
.color-list.inline li:hover {
  margin-right: unset;
  z-index: 3;
}
.color-list li {
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  font-size: 12px;
  text-align: left;
  color: #fff;
  padding: 0px 8px;
  transition: all 0.2s ease;
  margin-right: 0;
  z-index: 1;
  overflow: hidden;
}
.color-list li em,
.color-list li span {
  position: absolute;
  line-height: 1;
  transition: all 0.2s ease;
}
.color-list li em {
  transform: translate(0, 100%);
  opacity: 0;
}
.color-list li:hover {
  margin: 0 -16px;
  z-index: 3;
}
.color-list li:hover span {
  transform: translate(0, -100%);
  opacity: 0;
}
.color-list li:hover em {
  transform: translate(0, 0px);
  opacity: 1;
}
.demo-browser {
  border: 1px solid #EFF2F5;
  padding: 24px;
  border-radius: 8px;
}
.demo-browser .content {
  overflow: hidden;
}
.demo-browser .content .iframe-demo {
  display: block;
  width: 100%;
  border: none;
  min-height: 500px;
}
.transition-demo {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.source .hl-row.dom-area::before {
  content: attr(data-name);
  position: absolute;
  top: -2px;
  left: -2px;
  width: auto;
}
.source .hl-row.dom-area::after {
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: 1;
}
.source .hl-row.show-col .col em,
.source .hl-row.show-col [class*=col-] em {
  display: block;
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  color: #fff;
  background-color: #66baff;
}
.source .hl-row.show-col .col:nth-child(odd) em,
.source .hl-row.show-col [class*=col-]:nth-child(odd) em {
  background-color: #8ccbff;
}
.source .hl-group .demo.group-item {
  display: flex;
  border: 1px solid #EFF2F5;
  border-radius: 12px;
  text-align: center;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.hl-header.dom-area,
.hl-sub-header.dom-area,
.hl-aside.dom-area,
.hl-main.dom-area,
.hl-footer.dom-area {
  top: 0 !important;
  position: relative !important;
  color: #fff !important;
  font-weight: 600 !important;
  display: flex !important;
  align-items: center !important;
  padding: 0 24px !important;
  text-shadow: 0 1px 0px rgba(82, 63, 105, 0.3) !important;
  border: none !important;
  z-index: 1 !important;
}
.hl-footer.dom-area,
.hl-header.dom-area {
  background-color: #006dff;
}
.hl-sub-header.dom-area {
  background-color: #2e87ff;
}
.hl-aside.dom-area {
  width: 200px;
  height: auto !important;
  background-color: #0058cf;
  align-items: start !important;
  justify-content: center;
}
.hl-main.dom-area {
  background-color: #5ca2ff !important;
}`,Ut=`@charset "UTF-8";
:root {
  --primary: 54, 153, 255;
  --success: 11, 183, 131;
  --danger: 246, 78, 96;
  --warning: 255, 199, 0;
  --info: 137, 80, 252;
  --original-Bg-Body: 22, 32, 47;
  --original-Bg-Content: 28, 40, 59;
  --original-Bg-Light: 24, 37, 54;
  --original-Bg-Popup: 22, 32, 47;
  --original-Bg-Element: 33, 49, 72;
  --original-Bg-Hover: 20, 28, 42;
  --original-Bg-Active: 246, 249, 251;
  --original-Bg-Title: 33, 49, 72;
  --original-Bg-Mask: 0, 0, 0;
  --pageFontColor: #899cae;
  --pageFontColor-Secondary: #a0b4c8;
  --pageFontColor-Light: #364964;
  --pageFontColor-Lightest: #1F272C;
  --pageFontColor-Title: #EBF0F4;
  --pageFontColor-Link: #7F60F9;
  --pageFontColor-Hover: #7F60F9;
  --pageFontColor-Inverse: #FFFFFF;
  --xxs: 4px;
  --xs: 8px;
  --sm: 12px;
  --md: 16px;
  --lg: 24px;
  --xl: 32px;
  --xxl: 40px;
  --radius-sm: 3px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --pageFontSize-Sm: 12px;
  --pageFontSize-Md: 14px;
  --pageFontSize-Lg: 16px;
  --pageFontSize-Xl: 18px;
  --pageFontFamily: Noto Sans, Helvetica Neue, Arial, Roboto, PingFang SC, Hiragino Sans GB, WenQuanYi Micro Hei, Microsoft Yahei, sans-serif;
}
:checked .fade-enter-checked,
.is-checked .fade-enter-checked,
.is-active .fade-enter-active,
.fade-enter-hover:hover,
.fade-enter-active {
  animation: fadeIn 0.3s forwards;
}
:checked .fade-leave-checked,
.is-checked .fade-leave-checked,
.is-active .fade-leave-active,
.fade-leave-hover:hover,
.fade-leave-active {
  animation: fadeOut 0.3s forwards;
}
:checked .fall-enter-checked,
.is-checked .fall-enter-checked,
.is-active .fall-enter-active,
.fall-enter-hover:hover,
.fall-enter-active {
  animation: fallIn 0.4s forwards;
}
:checked .fall-leave-checked,
.is-checked .fall-leave-checked,
.is-active .fall-leave-active,
.fall-leave-hover:hover,
.fall-leave-active {
  animation: fallOut 0.4s forwards;
}
:checked .bounce-enter-checked,
.is-checked .bounce-enter-checked,
.is-active .bounce-enter-active,
.bounce-enter-hover:hover,
.bounce-enter-active {
  animation: bounceIn 0.3s forwards;
}
:checked .bounce-leave-checked,
.is-checked .bounce-leave-checked,
.is-active .bounce-leave-active,
.bounce-leave-hover:hover,
.bounce-leave-active {
  animation: fallOut 0.3s forwards;
}
:checked .scale-enter-checked,
.is-checked .scale-enter-checked,
.is-active .scale-enter-active,
.scale-enter-hover:hover,
.scale-enter-active {
  animation: scaleIn 0.3s forwards;
}
:checked .scale-leave-checked,
.is-checked .scale-leave-checked,
.is-active .scale-leave-active,
.scale-leave-hover:hover,
.scale-leave-active {
  animation: scaleOut 0.3s forwards;
}
:checked .roadster-enter-checked,
.is-checked .roadster-enter-checked,
.is-active .roadster-enter-active,
.roadster-enter-hover:hover,
.roadster-enter-active {
  transition-delay: 0.25s;
  animation: roadsterIn 0.5s forwards ease-out;
}
:checked .roadster-leave-checked,
.is-checked .roadster-leave-checked,
.is-active .roadster-leave-active,
.roadster-leave-hover:hover,
.roadster-leave-active {
  transition-delay: 0.25s;
  animation: roadsterOut 0.5s forwards ease-out;
}
:checked .slideTop-enter-checked,
.is-checked .slideTop-enter-checked,
.is-active .slideTop-enter-active,
.slideTop-enter-hover:hover,
.slideTop-enter-active {
  animation: slideTopIn 0.3s forwards;
}
:checked .slideTop-leave-checked,
.is-checked .slideTop-leave-checked,
.is-active .slideTop-leave-active,
.slideTop-leave-hover:hover,
.slideTop-leave-active {
  animation: slideTopOut 0.3s forwards;
}
:checked .slideDown-enter-checked,
.is-checked .slideDown-enter-checked,
.is-active .slideDown-enter-active,
.slideDown-enter-hover:hover,
.slideDown-enter-active {
  animation: slideDownIn 0.3s forwards;
}
:checked .slideDown-leave-checked,
.is-checked .slideDown-leave-checked,
.is-active .slideDown-leave-active,
.slideDown-leave-hover:hover,
.slideDown-leave-active {
  animation: slideDownOut 0.3s forwards;
}
:checked .slideLeft-enter-checked,
.is-checked .slideLeft-enter-checked,
.is-active .slideLeft-enter-active,
.slideLeft-enter-hover:hover,
.slideLeft-enter-active {
  animation: slideLeftIn 0.3s forwards;
}
:checked .slideLeft-leave-checked,
.is-checked .slideLeft-leave-checked,
.is-active .slideLeft-leave-active,
.slideLeft-leave-hover:hover,
.slideLeft-leave-active {
  animation: slideLeftOut 0.3s forwards;
}
:checked .slideRight-enter-checked,
.is-checked .slideRight-enter-checked,
.is-active .slideRight-enter-active,
.slideRight-enter-hover:hover,
.slideRight-enter-active {
  animation: slideRightIn 0.3s forwards;
}
:checked .slideRight-leave-checked,
.is-checked .slideRight-leave-checked,
.is-active .slideRight-leave-active,
.slideRight-leave-hover:hover,
.slideRight-leave-active {
  animation: slideRightOut 0.3s forwards;
}
:checked .slideLeftSide-enter-checked,
.is-checked .slideLeftSide-enter-checked,
.is-active .slideLeftSide-enter-active,
.slideLeftSide-enter-hover:hover,
.slideLeftSide-enter-active {
  animation: slideLeftSideIn 0.4s forwards;
}
:checked .slideLeftSide-leave-checked,
.is-checked .slideLeftSide-leave-checked,
.is-active .slideLeftSide-leave-active,
.slideLeftSide-leave-hover:hover,
.slideLeftSide-leave-active {
  animation: slideLeftSideOut 0.4s forwards;
}
:checked .slideRightSide-enter-checked,
.is-checked .slideRightSide-enter-checked,
.is-active .slideRightSide-enter-active,
.slideRightSide-enter-hover:hover,
.slideRightSide-enter-active {
  animation: slideRightSideIn 0.4s forwards;
}
:checked .slideRightSide-leave-checked,
.is-checked .slideRightSide-leave-checked,
.is-active .slideRightSide-leave-active,
.slideRightSide-leave-hover:hover,
.slideRightSide-leave-active {
  animation: slideRightSideOut 0.4s forwards;
}
:checked .slideTopSide-enter-checked,
.is-checked .slideTopSide-enter-checked,
.is-active .slideTopSide-enter-active,
.slideTopSide-enter-hover:hover,
.slideTopSide-enter-active {
  animation: slideTopSideIn 0.4s forwards;
}
:checked .slideTopSide-leave-checked,
.is-checked .slideTopSide-leave-checked,
.is-active .slideTopSide-leave-active,
.slideTopSide-leave-hover:hover,
.slideTopSide-leave-active {
  animation: slideTopSideOut 0.4s forwards;
}
:checked .slideBottomSide-enter-checked,
.is-checked .slideBottomSide-enter-checked,
.is-active .slideBottomSide-enter-active,
.slideBottomSide-enter-hover:hover,
.slideBottomSide-enter-active {
  animation: slideBottomSideIn 0.4s forwards;
}
:checked .slideBottomSide-leave-checked,
.is-checked .slideBottomSide-leave-checked,
.is-active .slideBottomSide-leave-active,
.slideBottomSide-leave-hover:hover,
.slideBottomSide-leave-active {
  animation: slideBottomSideOut 0.4s forwards;
}
:checked .jelly-enter-checked,
.is-checked .jelly-enter-checked,
.is-active .jelly-enter-active,
.jelly-enter-hover:hover,
.jelly-enter-active {
  animation-timing-function: linear;
  animation: jellyIn 1s forwards;
}
:checked .jelly-leave-checked,
.is-checked .jelly-leave-checked,
.is-active .jelly-leave-active,
.jelly-leave-hover:hover,
.jelly-leave-active {
  animation-timing-function: linear;
  animation: jellyOut 1s forwards;
}
:checked .spring-enter-checked,
.is-checked .spring-enter-checked,
.is-active .spring-enter-active,
.spring-enter-hover:hover,
.spring-enter-active {
  animation-timing-function: linear;
  animation: springIn 0.4s forwards;
}
:checked .spring-leave-checked,
.is-checked .spring-leave-checked,
.is-active .spring-leave-active,
.spring-leave-hover:hover,
.spring-leave-active {
  animation-timing-function: linear;
  animation: springOut 0.4s forwards;
}
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.collapse-transition-leave-active,
.collapse-transition-enter-active {
  transition: 0.3s max-height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.horizontal-collapse-transition {
  transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
}
.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.zoom-in-top-enter-active[data-popper-placement^=top],
.zoom-in-top-leave-active[data-popper-placement^=top] {
  transform-origin: center bottom;
}
.zoom-in-top-enter-from,
.zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter-from, .list-leave-active {
  opacity: 0;
  transform: translateY(-30px);
}
.dropdown-enter-active {
  animation: dropdownUp 0.3s ease 1;
}
.dropdown-leave-active {
  animation: dropdownDown 0.3s ease 1;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fallIn {
  0% {
    opacity: 0;
    transform: scale3d(1.1, 1.1, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
@keyframes fallOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.9, 0.9, 1);
  }
}
@keyframes bounceIn {
  0% {
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
  }
  45% {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
  }
}
@keyframes scaleOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
@keyframes roadsterIn {
  0% {
    opacity: 0;
    transform: translate3d(calc(-100vw - 50%), 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(100px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes roadsterOut {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-100px, 0, 0) scale3d(1.1, 1.1, 1);
  }
  100% {
    opacity: 0;
    transform: translate3d(calc(100vw + 50%), 0, 0);
  }
}
@keyframes slideLeftSideIn {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideLeftSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}
@keyframes slideRightSideIn {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideRightSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
@keyframes slideTopSideIn {
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideTopSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
}
@keyframes slideBottomSideIn {
  0% {
    transform: translate(0, -100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes slideBottomSideOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -100%);
  }
}
@keyframes slideTopIn {
  0% {
    opacity: 0;
    transform: translate(0, 50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideTopOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 50px);
  }
}
@keyframes slideDownIn {
  0% {
    opacity: 0;
    transform: translate(0, -50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideDownOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -50px);
  }
}
@keyframes slideLeftIn {
  0% {
    opacity: 0;
    transform: translate(50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideLeftOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(50px, 0);
  }
}
@keyframes slideRightIn {
  0% {
    opacity: 0;
    transform: translate(-50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes slideRightOut {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50px, 0);
  }
}
@keyframes jellyIn {
  0% {
    opacity: 0;
    transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8% {
    transform: matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  16% {
    transform: matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24% {
    transform: matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  32% {
    transform: matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  40% {
    transform: matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  48% {
    opacity: 1;
    transform: matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  56% {
    transform: matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  64% {
    transform: matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  72% {
    transform: matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  80% {
    transform: matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  88% {
    transform: matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
@keyframes jellyOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes springIn {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  25% {
    opacity: 1;
    transform: translate(0, -10%);
  }
  50% {
    opacity: 1;
    transform: translate(0%, 10%);
  }
  75% {
    opacity: 1;
    transform: translate(0, -5%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes springOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes dropdownUp {
  from {
    opacity: 0;
    transform: translate(0, -10px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes dropdownDown {
  from {
    opacity: 1;
    transform: translate(0, 0);
  }
  to {
    opacity: 0;
    transform: translate(0, -10px);
  }
}
body {
  margin: 0;
  color: #899cae;
  font-family: Noto Sans, "Helvetica Neue", Arial, Roboto, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5714285714;
  background-color: #16202f;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  min-height: 100%;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: none;
}
a {
  color: #7F60F9;
  text-decoration: none;
}
a:hover {
  color: #7F60F9;
}
abbr[data-original-title],
abbr[title] {
  cursor: help;
  border-bottom: 1px dotted #233042;
}
figure {
  margin: 0 0 12px;
}
mark {
  padding: 1px 5px 2px;
  border-radius: 2px;
  background-color: #40a9ff;
  color: #FFFFFF;
}
pre {
  margin-top: 0;
  margin-bottom: 1em;
  font-family: inherit;
}
pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}
pre {
  display: block;
  margin-top: 0;
  margin-bottom: 16px;
  overflow: auto;
}
pre code {
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
}
code {
  font-style: 13px;
  white-space: pre-wrap;
}
a > code {
  color: inherit;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
kbd {
  padding: 3px 4px;
  color: #FFFFFF;
  background-color: #000;
  border-radius: 2px;
}
kbd kbd {
  padding: 0;
  font-weight: 400;
}
em {
  font-style: normal;
}
blockquote {
  padding: 12px 24px;
  margin: 0 0 24px;
  font-size: 14px;
  border-left: 5px solid #233042;
}
address {
  margin-bottom: 12px;
  font-style: normal;
  line-height: inherit;
}
img,
svg {
  vertical-align: middle;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}
button,
select {
  text-transform: none;
}
[role=button] {
  cursor: pointer;
}
select {
  word-wrap: normal;
}
[list]::-webkit-calendar-picker-indicator {
  display: none;
}
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
textarea {
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: inherit;
}
legend + * {
  clear: left;
}
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}
::-webkit-inner-spin-button {
  height: auto;
}
[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-color-swatch-wrapper {
  padding: 0;
}
::file-selector-button {
  font: inherit;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
iframe {
  border: 0;
}
summary {
  display: list-item;
  cursor: pointer;
}
progress {
  vertical-align: baseline;
}
[hidden] {
  display: none !important;
}
::selection {
  color: #fff;
  background: #b3d4fc;
  text-shadow: none;
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #f3f9ff inset !important;
  -webkit-text-fill-color: #40a9ff !important;
  background-color: transparent;
  background-image: none;
  border-color: #40a9ff;
}
::-webkit-input-placeholder {
  color: #364964;
}
::-moz-placeholder {
  color: #364964;
}
body.no-scroll {
  overflow: hidden;
}
p {
  margin-top: 0;
  margin-bottom: 0;
}
p:not(:only-of-type) {
  margin-bottom: 1em;
}
p.indent {
  text-indent: 2em;
}
p.justify {
  word-wrap: break-word;
  text-align: justify;
}
p:last-child, p:only-child {
  margin-bottom: 0;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #EBF0F4;
  font-weight: 500;
}
h1,
.h1 {
  font-size: 30px;
  line-height: 1.1333333333;
}
h2,
.h2 {
  font-size: 24px;
  line-height: 1.3333333333;
}
h3,
.h3 {
  font-size: 20px;
  line-height: 1.4;
}
h4,
.h4 {
  font-size: 18px;
  line-height: 1.4444444444;
}
h5,
.h5 {
  font-size: 16px;
  line-height: 1.5;
}
h6,
.h6 {
  font-size: 14px;
  line-height: 1.5714285714;
}
hr {
  border: none;
  border-bottom: 1px solid #233042;
  margin: 16px 0;
}
hr.dotted {
  border-bottom-style: dotted;
}
hr.dashed {
  border-bottom-style: dashed;
}
dl > dd,
dl > dt {
  padding: 0;
  margin: 0;
}
dl.list {
  display: inline-block;
  margin: 0 24px;
}
dl.list > dt {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.8;
}
dl.list > dd {
  line-height: 1.5;
}
dl.list.center > dd,
dl.list.center > dt {
  text-align: center;
}
dl.attr > dt {
  font-weight: 700;
  display: inline;
}
dl.attr > dd {
  display: inline;
  padding: 4px 8px;
}
ol.list li,
ul.list li {
  line-height: 1.5;
}
ol.list li ol,
ol.list li ul,
ul.list li ol,
ul.list li ul {
  margin: 8px 0;
}
.price {
  font-family: arial, sans-serif;
}
.price:before {
  content: "";
  font-family: arial, sans-serif;
}
.price.yuan:before {
  content: "\xA5";
}
.price.dollar:before {
  content: "$";
}
.price.euro:before {
  content: "\u20AC";
}
.cursor-auto {
  cursor: auto;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-help {
  cursor: help;
}
.cursor-grab {
  cursor: grab;
}
.cursor-wait {
  cursor: wait;
}
.cursor-text {
  cursor: text;
}
.cursor-move {
  cursor: move;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.transition-none {
  transition-property: none;
}
.transition-all {
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 0.3s;
}
.scroll-box {
  display: table;
  border-spacing: 0;
  position: relative;
  width: 100%;
  height: 100%;
}
.scroll-box .scroll-cell {
  display: table-row;
  height: 100%;
}
.scroll-box .scroll-cell .scroll-body {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.noscroll {
  overflow: hidden !important;
}
.scrollable {
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.clearfix:after {
  display: block;
  content: "";
  clear: both;
}
.box-shadow-none {
  box-shadow: none;
}
.box-shadow-level1 {
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.05), 0 0 50px 0 rgba(0, 0, 0, 0.1);
}
.box-shadow-level2 {
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
}
.box-shadow-level3 {
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
}
.radius-none {
  border-radius: 0;
}
.radius-t-none {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.radius-b-none {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.radius-l-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.radius-r-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.radius-tl-none {
  border-top-left-radius: 0;
}
.radius-tr-none {
  border-top-right-radius: 0;
}
.radius-bl-none {
  border-bottom-left-radius: 0;
}
.radius-br-none {
  border-bottom-right-radius: 0;
}
.radius-sm {
  border-radius: 3px;
}
.radius-t-sm {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.radius-b-sm {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.radius-l-sm {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.radius-r-sm {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.radius-tl-sm {
  border-top-left-radius: 3px;
}
.radius-tr-sm {
  border-top-right-radius: 3px;
}
.radius-bl-sm {
  border-bottom-left-radius: 3px;
}
.radius-br-sm {
  border-bottom-right-radius: 3px;
}
.radius-md {
  border-radius: 4px;
}
.radius-t-md {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.radius-b-md {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.radius-l-md {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.radius-r-md {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.radius-tl-md {
  border-top-left-radius: 4px;
}
.radius-tr-md {
  border-top-right-radius: 4px;
}
.radius-bl-md {
  border-bottom-left-radius: 4px;
}
.radius-br-md {
  border-bottom-right-radius: 4px;
}
.radius-lg {
  border-radius: 6px;
}
.radius-t-lg {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.radius-b-lg {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.radius-l-lg {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.radius-r-lg {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.radius-tl-lg {
  border-top-left-radius: 6px;
}
.radius-tr-lg {
  border-top-right-radius: 6px;
}
.radius-bl-lg {
  border-bottom-left-radius: 6px;
}
.radius-br-lg {
  border-bottom-right-radius: 6px;
}
.radius-xl {
  border-radius: 8px;
}
.radius-t-xl {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.radius-b-xl {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.radius-l-xl {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.radius-r-xl {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.radius-tl-xl {
  border-top-left-radius: 8px;
}
.radius-tr-xl {
  border-top-right-radius: 8px;
}
.radius-bl-xl {
  border-bottom-left-radius: 8px;
}
.radius-br-xl {
  border-bottom-right-radius: 8px;
}
.radius-round {
  border-radius: 100px;
}
.radius-t-round {
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}
.radius-b-round {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
}
.radius-l-round {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.radius-r-round {
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
.radius-tl-round {
  border-top-left-radius: 100px;
}
.radius-tr-round {
  border-top-right-radius: 100px;
}
.radius-bl-round {
  border-bottom-left-radius: 100px;
}
.radius-br-round {
  border-bottom-right-radius: 100px;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.ellipsis.fo {
  position: relative;
}
.ellipsis.fo:after {
  content: "\u3000";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  min-height: 1.4em;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0%, white 80%);
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-center {
  text-align: center !important;
}
.font-thin {
  font-weight: 100 !important;
}
.font-extralight {
  font-weight: 200 !important;
}
.font-light {
  font-weight: 300 !important;
}
.font-normal {
  font-weight: 400 !important;
}
.font-medium {
  font-weight: 500 !important;
}
.font-semibold {
  font-weight: 600 !important;
}
.font-bold {
  font-weight: 500 !important;
}
.font-extrabold {
  font-weight: 800 !important;
}
.font-black {
  font-weight: 900 !important;
}
.font-sm {
  font-size: 12px !important;
  line-height: 1.6666666667 !important;
}
.font-md {
  font-size: 14px !important;
  line-height: 1.5714285714 !important;
}
.font-lg {
  font-size: 16px !important;
  line-height: 1.5 !important;
}
.font-xl {
  font-size: 18px !important;
  line-height: 1.4444444444 !important;
}
.border-none {
  border: none !important;
}
.border {
  --border-width: 1px;
  border: var(--border-width) solid #233042 !important;
}
.border.dashed {
  border-style: dashed !important;
}
.border.dotted {
  border-style: dotted !important;
}
.border-top {
  --border-top-width: 1px;
  border-top: var(--border-top-width) solid #233042 !important;
}
.border-top.dashed {
  border-top-style: dashed !important;
}
.border-top.dotted {
  border-top-style: dotted !important;
}
.border-right {
  --border-right-width: 1px;
  border-right: var(--border-right-width) solid #233042 !important;
}
.border-right.dashed {
  border-right-style: dashed !important;
}
.border-right.dotted {
  border-right-style: dotted !important;
}
.border-bottom {
  --border-bottom-width: 1px;
  border-bottom: var(--border-bottom-width) solid #233042 !important;
}
.border-bottom.dashed {
  border-bottom-style: dashed !important;
}
.border-bottom.dotted {
  border-bottom-style: dotted !important;
}
.border-left {
  --border-left-width: 1px;
  border-left: var(--border-left-width) solid #233042 !important;
}
.border-left.dashed {
  border-left-style: dashed !important;
}
.border-left.dotted {
  border-left-style: dotted !important;
}
.display-block {
  display: block;
}
.display-inline-block {
  display: inline-block;
}
.display-inline {
  display: inline;
}
.display-flex {
  display: flex;
}
.display-inline-flex {
  display: inline-flex;
}
.display-table {
  display: table;
}
.display-inline-table {
  display: inline-table;
}
.display-table-caption {
  display: table-caption;
}
.display-table-cell {
  display: table-cell;
}
.display-table-column {
  display: table-column;
}
.display-table-column-group {
  display: table-column-group;
}
.display-table-footer-group {
  display: table-footer-group;
}
.display-table-header-group {
  display: table-header-group;
}
.display-table-row-group {
  display: table-row-group;
}
.display-table-row {
  display: table-row;
}
.display-flow-root {
  display: flow-root;
}
.display-grid {
  display: grid;
}
.display-inline-grid {
  display: inline-grid;
}
.display-contents {
  display: contents;
}
.display-list-item {
  display: list-item;
}
.display-none {
  display: none;
}
.static {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}
.no-grow {
  flex-grow: 0 !important;
}
.no-shrink {
  flex-shrink: 0 !important;
}
.flex-row {
  flex-direction: row !important;
}
.flex-col {
  flex-direction: column !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}
.self-grow {
  flex-grow: 1 !important;
}
.self-shrink {
  flex-shrink: 1 !important;
}
.self-no-grow {
  flex-grow: 0 !important;
}
.self-no-shrink {
  flex-shrink: 0 !important;
}
.self-static {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}
.self-full {
  flex-grow: 1 !important;
  flex-shrink: 1 !important;
  flex-basis: auto !important;
}
.self-no-full {
  flex: none !important;
}
.self-auto {
  align-self: auto !important;
}
.self-top {
  align-self: flex-start !important;
}
.self-middle {
  align-self: center !important;
}
.self-bottom {
  align-self: flex-end !important;
}
.self-stretch {
  align-self: stretch !important;
}
.self-baseline {
  align-self: baseline !important;
}
.item-top {
  align-items: flex-start !important;
}
.item-middle {
  align-items: center !important;
}
.item-bottom {
  align-items: flex-end !important;
}
.item-left {
  justify-content: flex-start !important;
}
.item-center {
  justify-content: center !important;
}
.item-right {
  justify-content: flex-end !important;
}
.item-baseline {
  align-items: baseline !important;
}
.item-stretch {
  align-items: stretch !important;
}
.item-between {
  justify-content: space-between !important;
}
.item-around {
  justify-content: space-around !important;
}
.item-evenly {
  justify-content: space-evenly !important;
}
.content-top {
  align-content: flex-start !important;
}
.content-middle {
  align-content: center !important;
}
.content-bottom {
  align-content: flex-end !important;
}
.content-between {
  align-content: space-between !important;
}
.content-stretch {
  align-content: stretch !important;
}
.content-around {
  align-content: space-around !important;
}
@media (min-width: 0) {
  .flex-row- {
    flex-direction: row !important;
  }

  .flex-col- {
    flex-direction: column !important;
  }

  .flex-wrap- {
    flex-wrap: wrap !important;
  }

  .flex-nowrap- {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse- {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow- {
    flex-grow: 1 !important;
  }

  .self-shrink- {
    flex-shrink: 1 !important;
  }

  .self-no-grow- {
    flex-grow: 0 !important;
  }

  .self-no-shrink- {
    flex-shrink: 0 !important;
  }

  .self-static- {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full- {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full- {
    flex: none !important;
  }

  .self-auto- {
    align-self: auto !important;
  }

  .self-top- {
    align-self: flex-start !important;
  }

  .self-middle- {
    align-self: center !important;
  }

  .self-bottom- {
    align-self: flex-end !important;
  }

  .self-stretch- {
    align-self: stretch !important;
  }

  .self-baseline- {
    align-self: baseline !important;
  }

  .item-top- {
    align-items: flex-start !important;
  }

  .item-middle- {
    align-items: center !important;
  }

  .item-bottom- {
    align-items: flex-end !important;
  }

  .item-left- {
    justify-content: flex-start !important;
  }

  .item-center- {
    justify-content: center !important;
  }

  .item-right- {
    justify-content: flex-end !important;
  }

  .item-baseline- {
    align-items: baseline !important;
  }

  .item-stretch- {
    align-items: stretch !important;
  }

  .item-between- {
    justify-content: space-between !important;
  }

  .item-around- {
    justify-content: space-around !important;
  }

  .item-evenly- {
    justify-content: space-evenly !important;
  }

  .content-top- {
    align-content: flex-start !important;
  }

  .content-middle- {
    align-content: center !important;
  }

  .content-bottom- {
    align-content: flex-end !important;
  }

  .content-between- {
    align-content: space-between !important;
  }

  .content-stretch- {
    align-content: stretch !important;
  }

  .content-around- {
    align-content: space-around !important;
  }
}
@media (min-width: 640px) {
  .flex-row-sm {
    flex-direction: row !important;
  }

  .flex-col-sm {
    flex-direction: column !important;
  }

  .flex-wrap-sm {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-sm {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-sm {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-sm {
    flex-grow: 1 !important;
  }

  .self-shrink-sm {
    flex-shrink: 1 !important;
  }

  .self-no-grow-sm {
    flex-grow: 0 !important;
  }

  .self-no-shrink-sm {
    flex-shrink: 0 !important;
  }

  .self-static-sm {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-sm {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-sm {
    flex: none !important;
  }

  .self-auto-sm {
    align-self: auto !important;
  }

  .self-top-sm {
    align-self: flex-start !important;
  }

  .self-middle-sm {
    align-self: center !important;
  }

  .self-bottom-sm {
    align-self: flex-end !important;
  }

  .self-stretch-sm {
    align-self: stretch !important;
  }

  .self-baseline-sm {
    align-self: baseline !important;
  }

  .item-top-sm {
    align-items: flex-start !important;
  }

  .item-middle-sm {
    align-items: center !important;
  }

  .item-bottom-sm {
    align-items: flex-end !important;
  }

  .item-left-sm {
    justify-content: flex-start !important;
  }

  .item-center-sm {
    justify-content: center !important;
  }

  .item-right-sm {
    justify-content: flex-end !important;
  }

  .item-baseline-sm {
    align-items: baseline !important;
  }

  .item-stretch-sm {
    align-items: stretch !important;
  }

  .item-between-sm {
    justify-content: space-between !important;
  }

  .item-around-sm {
    justify-content: space-around !important;
  }

  .item-evenly-sm {
    justify-content: space-evenly !important;
  }

  .content-top-sm {
    align-content: flex-start !important;
  }

  .content-middle-sm {
    align-content: center !important;
  }

  .content-bottom-sm {
    align-content: flex-end !important;
  }

  .content-between-sm {
    align-content: space-between !important;
  }

  .content-stretch-sm {
    align-content: stretch !important;
  }

  .content-around-sm {
    align-content: space-around !important;
  }
}
@media (min-width: 768px) {
  .flex-row-md {
    flex-direction: row !important;
  }

  .flex-col-md {
    flex-direction: column !important;
  }

  .flex-wrap-md {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-md {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-md {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-md {
    flex-grow: 1 !important;
  }

  .self-shrink-md {
    flex-shrink: 1 !important;
  }

  .self-no-grow-md {
    flex-grow: 0 !important;
  }

  .self-no-shrink-md {
    flex-shrink: 0 !important;
  }

  .self-static-md {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-md {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-md {
    flex: none !important;
  }

  .self-auto-md {
    align-self: auto !important;
  }

  .self-top-md {
    align-self: flex-start !important;
  }

  .self-middle-md {
    align-self: center !important;
  }

  .self-bottom-md {
    align-self: flex-end !important;
  }

  .self-stretch-md {
    align-self: stretch !important;
  }

  .self-baseline-md {
    align-self: baseline !important;
  }

  .item-top-md {
    align-items: flex-start !important;
  }

  .item-middle-md {
    align-items: center !important;
  }

  .item-bottom-md {
    align-items: flex-end !important;
  }

  .item-left-md {
    justify-content: flex-start !important;
  }

  .item-center-md {
    justify-content: center !important;
  }

  .item-right-md {
    justify-content: flex-end !important;
  }

  .item-baseline-md {
    align-items: baseline !important;
  }

  .item-stretch-md {
    align-items: stretch !important;
  }

  .item-between-md {
    justify-content: space-between !important;
  }

  .item-around-md {
    justify-content: space-around !important;
  }

  .item-evenly-md {
    justify-content: space-evenly !important;
  }

  .content-top-md {
    align-content: flex-start !important;
  }

  .content-middle-md {
    align-content: center !important;
  }

  .content-bottom-md {
    align-content: flex-end !important;
  }

  .content-between-md {
    align-content: space-between !important;
  }

  .content-stretch-md {
    align-content: stretch !important;
  }

  .content-around-md {
    align-content: space-around !important;
  }
}
@media (min-width: 1024px) {
  .flex-row-lg {
    flex-direction: row !important;
  }

  .flex-col-lg {
    flex-direction: column !important;
  }

  .flex-wrap-lg {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-lg {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-lg {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-lg {
    flex-grow: 1 !important;
  }

  .self-shrink-lg {
    flex-shrink: 1 !important;
  }

  .self-no-grow-lg {
    flex-grow: 0 !important;
  }

  .self-no-shrink-lg {
    flex-shrink: 0 !important;
  }

  .self-static-lg {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-lg {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-lg {
    flex: none !important;
  }

  .self-auto-lg {
    align-self: auto !important;
  }

  .self-top-lg {
    align-self: flex-start !important;
  }

  .self-middle-lg {
    align-self: center !important;
  }

  .self-bottom-lg {
    align-self: flex-end !important;
  }

  .self-stretch-lg {
    align-self: stretch !important;
  }

  .self-baseline-lg {
    align-self: baseline !important;
  }

  .item-top-lg {
    align-items: flex-start !important;
  }

  .item-middle-lg {
    align-items: center !important;
  }

  .item-bottom-lg {
    align-items: flex-end !important;
  }

  .item-left-lg {
    justify-content: flex-start !important;
  }

  .item-center-lg {
    justify-content: center !important;
  }

  .item-right-lg {
    justify-content: flex-end !important;
  }

  .item-baseline-lg {
    align-items: baseline !important;
  }

  .item-stretch-lg {
    align-items: stretch !important;
  }

  .item-between-lg {
    justify-content: space-between !important;
  }

  .item-around-lg {
    justify-content: space-around !important;
  }

  .item-evenly-lg {
    justify-content: space-evenly !important;
  }

  .content-top-lg {
    align-content: flex-start !important;
  }

  .content-middle-lg {
    align-content: center !important;
  }

  .content-bottom-lg {
    align-content: flex-end !important;
  }

  .content-between-lg {
    align-content: space-between !important;
  }

  .content-stretch-lg {
    align-content: stretch !important;
  }

  .content-around-lg {
    align-content: space-around !important;
  }
}
@media (min-width: 1280px) {
  .flex-row-xl {
    flex-direction: row !important;
  }

  .flex-col-xl {
    flex-direction: column !important;
  }

  .flex-wrap-xl {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-xl {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-xl {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-xl {
    flex-grow: 1 !important;
  }

  .self-shrink-xl {
    flex-shrink: 1 !important;
  }

  .self-no-grow-xl {
    flex-grow: 0 !important;
  }

  .self-no-shrink-xl {
    flex-shrink: 0 !important;
  }

  .self-static-xl {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-xl {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-xl {
    flex: none !important;
  }

  .self-auto-xl {
    align-self: auto !important;
  }

  .self-top-xl {
    align-self: flex-start !important;
  }

  .self-middle-xl {
    align-self: center !important;
  }

  .self-bottom-xl {
    align-self: flex-end !important;
  }

  .self-stretch-xl {
    align-self: stretch !important;
  }

  .self-baseline-xl {
    align-self: baseline !important;
  }

  .item-top-xl {
    align-items: flex-start !important;
  }

  .item-middle-xl {
    align-items: center !important;
  }

  .item-bottom-xl {
    align-items: flex-end !important;
  }

  .item-left-xl {
    justify-content: flex-start !important;
  }

  .item-center-xl {
    justify-content: center !important;
  }

  .item-right-xl {
    justify-content: flex-end !important;
  }

  .item-baseline-xl {
    align-items: baseline !important;
  }

  .item-stretch-xl {
    align-items: stretch !important;
  }

  .item-between-xl {
    justify-content: space-between !important;
  }

  .item-around-xl {
    justify-content: space-around !important;
  }

  .item-evenly-xl {
    justify-content: space-evenly !important;
  }

  .content-top-xl {
    align-content: flex-start !important;
  }

  .content-middle-xl {
    align-content: center !important;
  }

  .content-bottom-xl {
    align-content: flex-end !important;
  }

  .content-between-xl {
    align-content: space-between !important;
  }

  .content-stretch-xl {
    align-content: stretch !important;
  }

  .content-around-xl {
    align-content: space-around !important;
  }
}
@media (min-width: 1536px) {
  .flex-row-xxl {
    flex-direction: row !important;
  }

  .flex-col-xxl {
    flex-direction: column !important;
  }

  .flex-wrap-xxl {
    flex-wrap: wrap !important;
  }

  .flex-nowrap-xxl {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse-xxl {
    flex-wrap: wrap-reverse !important;
  }

  .self-grow-xxl {
    flex-grow: 1 !important;
  }

  .self-shrink-xxl {
    flex-shrink: 1 !important;
  }

  .self-no-grow-xxl {
    flex-grow: 0 !important;
  }

  .self-no-shrink-xxl {
    flex-shrink: 0 !important;
  }

  .self-static-xxl {
    flex-shrink: 0 !important;
    flex-grow: 0 !important;
  }

  .self-full-xxl {
    flex-grow: 1 !important;
    flex-shrink: 1 !important;
    flex-basis: auto !important;
  }

  .self-no-full-xxl {
    flex: none !important;
  }

  .self-auto-xxl {
    align-self: auto !important;
  }

  .self-top-xxl {
    align-self: flex-start !important;
  }

  .self-middle-xxl {
    align-self: center !important;
  }

  .self-bottom-xxl {
    align-self: flex-end !important;
  }

  .self-stretch-xxl {
    align-self: stretch !important;
  }

  .self-baseline-xxl {
    align-self: baseline !important;
  }

  .item-top-xxl {
    align-items: flex-start !important;
  }

  .item-middle-xxl {
    align-items: center !important;
  }

  .item-bottom-xxl {
    align-items: flex-end !important;
  }

  .item-left-xxl {
    justify-content: flex-start !important;
  }

  .item-center-xxl {
    justify-content: center !important;
  }

  .item-right-xxl {
    justify-content: flex-end !important;
  }

  .item-baseline-xxl {
    align-items: baseline !important;
  }

  .item-stretch-xxl {
    align-items: stretch !important;
  }

  .item-between-xxl {
    justify-content: space-between !important;
  }

  .item-around-xxl {
    justify-content: space-around !important;
  }

  .item-evenly-xxl {
    justify-content: space-evenly !important;
  }

  .content-top-xxl {
    align-content: flex-start !important;
  }

  .content-middle-xxl {
    align-content: center !important;
  }

  .content-bottom-xxl {
    align-content: flex-end !important;
  }

  .content-between-xxl {
    align-content: space-between !important;
  }

  .content-stretch-xxl {
    align-content: stretch !important;
  }

  .content-around-xxl {
    align-content: space-around !important;
  }
}
.order-first {
  order: -9999 !important;
}
.order-last {
  order: 9999 !important;
}
.order-none {
  order: 0 !important;
}
.order-1 {
  order: 1 !important;
}
.order-2 {
  order: 2 !important;
}
.order-3 {
  order: 3 !important;
}
.order-4 {
  order: 4 !important;
}
.order-5 {
  order: 5 !important;
}
.order-6 {
  order: 6 !important;
}
.order-7 {
  order: 7 !important;
}
.order-8 {
  order: 8 !important;
}
.order-9 {
  order: 9 !important;
}
.order-10 {
  order: 10 !important;
}
.order-11 {
  order: 11 !important;
}
.order-12 {
  order: 12 !important;
}
.order-13 {
  order: 13 !important;
}
.order-14 {
  order: 14 !important;
}
.order-15 {
  order: 15 !important;
}
.order-16 {
  order: 16 !important;
}
.order-17 {
  order: 17 !important;
}
.order-18 {
  order: 18 !important;
}
.order-19 {
  order: 19 !important;
}
.order-20 {
  order: 20 !important;
}
.order-21 {
  order: 21 !important;
}
.order-22 {
  order: 22 !important;
}
.order-23 {
  order: 23 !important;
}
.order-24 {
  order: 24 !important;
}
@media (min-width: 0) {
  .order-1- {
    order: 1 !important;
  }

  .order-2- {
    order: 2 !important;
  }

  .order-3- {
    order: 3 !important;
  }

  .order-4- {
    order: 4 !important;
  }

  .order-5- {
    order: 5 !important;
  }

  .order-6- {
    order: 6 !important;
  }

  .order-7- {
    order: 7 !important;
  }

  .order-8- {
    order: 8 !important;
  }

  .order-9- {
    order: 9 !important;
  }

  .order-10- {
    order: 10 !important;
  }

  .order-11- {
    order: 11 !important;
  }

  .order-12- {
    order: 12 !important;
  }

  .order-13- {
    order: 13 !important;
  }

  .order-14- {
    order: 14 !important;
  }

  .order-15- {
    order: 15 !important;
  }

  .order-16- {
    order: 16 !important;
  }

  .order-17- {
    order: 17 !important;
  }

  .order-18- {
    order: 18 !important;
  }

  .order-19- {
    order: 19 !important;
  }

  .order-20- {
    order: 20 !important;
  }

  .order-21- {
    order: 21 !important;
  }

  .order-22- {
    order: 22 !important;
  }

  .order-23- {
    order: 23 !important;
  }

  .order-24- {
    order: 24 !important;
  }
}
@media (min-width: 640px) {
  .order-1-sm {
    order: 1 !important;
  }

  .order-2-sm {
    order: 2 !important;
  }

  .order-3-sm {
    order: 3 !important;
  }

  .order-4-sm {
    order: 4 !important;
  }

  .order-5-sm {
    order: 5 !important;
  }

  .order-6-sm {
    order: 6 !important;
  }

  .order-7-sm {
    order: 7 !important;
  }

  .order-8-sm {
    order: 8 !important;
  }

  .order-9-sm {
    order: 9 !important;
  }

  .order-10-sm {
    order: 10 !important;
  }

  .order-11-sm {
    order: 11 !important;
  }

  .order-12-sm {
    order: 12 !important;
  }

  .order-13-sm {
    order: 13 !important;
  }

  .order-14-sm {
    order: 14 !important;
  }

  .order-15-sm {
    order: 15 !important;
  }

  .order-16-sm {
    order: 16 !important;
  }

  .order-17-sm {
    order: 17 !important;
  }

  .order-18-sm {
    order: 18 !important;
  }

  .order-19-sm {
    order: 19 !important;
  }

  .order-20-sm {
    order: 20 !important;
  }

  .order-21-sm {
    order: 21 !important;
  }

  .order-22-sm {
    order: 22 !important;
  }

  .order-23-sm {
    order: 23 !important;
  }

  .order-24-sm {
    order: 24 !important;
  }
}
@media (min-width: 768px) {
  .order-1-md {
    order: 1 !important;
  }

  .order-2-md {
    order: 2 !important;
  }

  .order-3-md {
    order: 3 !important;
  }

  .order-4-md {
    order: 4 !important;
  }

  .order-5-md {
    order: 5 !important;
  }

  .order-6-md {
    order: 6 !important;
  }

  .order-7-md {
    order: 7 !important;
  }

  .order-8-md {
    order: 8 !important;
  }

  .order-9-md {
    order: 9 !important;
  }

  .order-10-md {
    order: 10 !important;
  }

  .order-11-md {
    order: 11 !important;
  }

  .order-12-md {
    order: 12 !important;
  }

  .order-13-md {
    order: 13 !important;
  }

  .order-14-md {
    order: 14 !important;
  }

  .order-15-md {
    order: 15 !important;
  }

  .order-16-md {
    order: 16 !important;
  }

  .order-17-md {
    order: 17 !important;
  }

  .order-18-md {
    order: 18 !important;
  }

  .order-19-md {
    order: 19 !important;
  }

  .order-20-md {
    order: 20 !important;
  }

  .order-21-md {
    order: 21 !important;
  }

  .order-22-md {
    order: 22 !important;
  }

  .order-23-md {
    order: 23 !important;
  }

  .order-24-md {
    order: 24 !important;
  }
}
@media (min-width: 1024px) {
  .order-1-lg {
    order: 1 !important;
  }

  .order-2-lg {
    order: 2 !important;
  }

  .order-3-lg {
    order: 3 !important;
  }

  .order-4-lg {
    order: 4 !important;
  }

  .order-5-lg {
    order: 5 !important;
  }

  .order-6-lg {
    order: 6 !important;
  }

  .order-7-lg {
    order: 7 !important;
  }

  .order-8-lg {
    order: 8 !important;
  }

  .order-9-lg {
    order: 9 !important;
  }

  .order-10-lg {
    order: 10 !important;
  }

  .order-11-lg {
    order: 11 !important;
  }

  .order-12-lg {
    order: 12 !important;
  }

  .order-13-lg {
    order: 13 !important;
  }

  .order-14-lg {
    order: 14 !important;
  }

  .order-15-lg {
    order: 15 !important;
  }

  .order-16-lg {
    order: 16 !important;
  }

  .order-17-lg {
    order: 17 !important;
  }

  .order-18-lg {
    order: 18 !important;
  }

  .order-19-lg {
    order: 19 !important;
  }

  .order-20-lg {
    order: 20 !important;
  }

  .order-21-lg {
    order: 21 !important;
  }

  .order-22-lg {
    order: 22 !important;
  }

  .order-23-lg {
    order: 23 !important;
  }

  .order-24-lg {
    order: 24 !important;
  }
}
@media (min-width: 1280px) {
  .order-1-xl {
    order: 1 !important;
  }

  .order-2-xl {
    order: 2 !important;
  }

  .order-3-xl {
    order: 3 !important;
  }

  .order-4-xl {
    order: 4 !important;
  }

  .order-5-xl {
    order: 5 !important;
  }

  .order-6-xl {
    order: 6 !important;
  }

  .order-7-xl {
    order: 7 !important;
  }

  .order-8-xl {
    order: 8 !important;
  }

  .order-9-xl {
    order: 9 !important;
  }

  .order-10-xl {
    order: 10 !important;
  }

  .order-11-xl {
    order: 11 !important;
  }

  .order-12-xl {
    order: 12 !important;
  }

  .order-13-xl {
    order: 13 !important;
  }

  .order-14-xl {
    order: 14 !important;
  }

  .order-15-xl {
    order: 15 !important;
  }

  .order-16-xl {
    order: 16 !important;
  }

  .order-17-xl {
    order: 17 !important;
  }

  .order-18-xl {
    order: 18 !important;
  }

  .order-19-xl {
    order: 19 !important;
  }

  .order-20-xl {
    order: 20 !important;
  }

  .order-21-xl {
    order: 21 !important;
  }

  .order-22-xl {
    order: 22 !important;
  }

  .order-23-xl {
    order: 23 !important;
  }

  .order-24-xl {
    order: 24 !important;
  }
}
@media (min-width: 1536px) {
  .order-1-xxl {
    order: 1 !important;
  }

  .order-2-xxl {
    order: 2 !important;
  }

  .order-3-xxl {
    order: 3 !important;
  }

  .order-4-xxl {
    order: 4 !important;
  }

  .order-5-xxl {
    order: 5 !important;
  }

  .order-6-xxl {
    order: 6 !important;
  }

  .order-7-xxl {
    order: 7 !important;
  }

  .order-8-xxl {
    order: 8 !important;
  }

  .order-9-xxl {
    order: 9 !important;
  }

  .order-10-xxl {
    order: 10 !important;
  }

  .order-11-xxl {
    order: 11 !important;
  }

  .order-12-xxl {
    order: 12 !important;
  }

  .order-13-xxl {
    order: 13 !important;
  }

  .order-14-xxl {
    order: 14 !important;
  }

  .order-15-xxl {
    order: 15 !important;
  }

  .order-16-xxl {
    order: 16 !important;
  }

  .order-17-xxl {
    order: 17 !important;
  }

  .order-18-xxl {
    order: 18 !important;
  }

  .order-19-xxl {
    order: 19 !important;
  }

  .order-20-xxl {
    order: 20 !important;
  }

  .order-21-xxl {
    order: 21 !important;
  }

  .order-22-xxl {
    order: 22 !important;
  }

  .order-23-xxl {
    order: 23 !important;
  }

  .order-24-xxl {
    order: 24 !important;
  }
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
.w-inherit {
  width: inherit;
}
.h-inherit {
  height: inherit;
}
.w-auto {
  width: auto;
}
.h-auto {
  height: auto;
}
.vw-full {
  width: 100vw;
}
.vh-full {
  height: 100vh;
}
.w-5 {
  width: 5%;
}
.w-min-5 {
  min-width: 5%;
}
.w-max-5 {
  max-width: 5%;
}
.h-5 {
  height: 5%;
}
.h-min-5 {
  min-height: 5%;
}
.h-max-5 {
  max-height: 5%;
}
.vw-5 {
  width: 5vw;
}
.vw-min-5 {
  min-width: 5vw;
}
.vw-max-5 {
  max-width: 5vw;
}
.vh-5 {
  height: 5vh;
}
.vh-min-5 {
  min-height: 5vh;
}
.vh-max-5 {
  max-height: 5vh;
}
.w-10 {
  width: 10%;
}
.w-min-10 {
  min-width: 10%;
}
.w-max-10 {
  max-width: 10%;
}
.h-10 {
  height: 10%;
}
.h-min-10 {
  min-height: 10%;
}
.h-max-10 {
  max-height: 10%;
}
.vw-10 {
  width: 10vw;
}
.vw-min-10 {
  min-width: 10vw;
}
.vw-max-10 {
  max-width: 10vw;
}
.vh-10 {
  height: 10vh;
}
.vh-min-10 {
  min-height: 10vh;
}
.vh-max-10 {
  max-height: 10vh;
}
.w-15 {
  width: 15%;
}
.w-min-15 {
  min-width: 15%;
}
.w-max-15 {
  max-width: 15%;
}
.h-15 {
  height: 15%;
}
.h-min-15 {
  min-height: 15%;
}
.h-max-15 {
  max-height: 15%;
}
.vw-15 {
  width: 15vw;
}
.vw-min-15 {
  min-width: 15vw;
}
.vw-max-15 {
  max-width: 15vw;
}
.vh-15 {
  height: 15vh;
}
.vh-min-15 {
  min-height: 15vh;
}
.vh-max-15 {
  max-height: 15vh;
}
.w-20 {
  width: 20%;
}
.w-min-20 {
  min-width: 20%;
}
.w-max-20 {
  max-width: 20%;
}
.h-20 {
  height: 20%;
}
.h-min-20 {
  min-height: 20%;
}
.h-max-20 {
  max-height: 20%;
}
.vw-20 {
  width: 20vw;
}
.vw-min-20 {
  min-width: 20vw;
}
.vw-max-20 {
  max-width: 20vw;
}
.vh-20 {
  height: 20vh;
}
.vh-min-20 {
  min-height: 20vh;
}
.vh-max-20 {
  max-height: 20vh;
}
.w-25 {
  width: 25%;
}
.w-min-25 {
  min-width: 25%;
}
.w-max-25 {
  max-width: 25%;
}
.h-25 {
  height: 25%;
}
.h-min-25 {
  min-height: 25%;
}
.h-max-25 {
  max-height: 25%;
}
.vw-25 {
  width: 25vw;
}
.vw-min-25 {
  min-width: 25vw;
}
.vw-max-25 {
  max-width: 25vw;
}
.vh-25 {
  height: 25vh;
}
.vh-min-25 {
  min-height: 25vh;
}
.vh-max-25 {
  max-height: 25vh;
}
.w-30 {
  width: 30%;
}
.w-min-30 {
  min-width: 30%;
}
.w-max-30 {
  max-width: 30%;
}
.h-30 {
  height: 30%;
}
.h-min-30 {
  min-height: 30%;
}
.h-max-30 {
  max-height: 30%;
}
.vw-30 {
  width: 30vw;
}
.vw-min-30 {
  min-width: 30vw;
}
.vw-max-30 {
  max-width: 30vw;
}
.vh-30 {
  height: 30vh;
}
.vh-min-30 {
  min-height: 30vh;
}
.vh-max-30 {
  max-height: 30vh;
}
.w-35 {
  width: 35%;
}
.w-min-35 {
  min-width: 35%;
}
.w-max-35 {
  max-width: 35%;
}
.h-35 {
  height: 35%;
}
.h-min-35 {
  min-height: 35%;
}
.h-max-35 {
  max-height: 35%;
}
.vw-35 {
  width: 35vw;
}
.vw-min-35 {
  min-width: 35vw;
}
.vw-max-35 {
  max-width: 35vw;
}
.vh-35 {
  height: 35vh;
}
.vh-min-35 {
  min-height: 35vh;
}
.vh-max-35 {
  max-height: 35vh;
}
.w-40 {
  width: 40%;
}
.w-min-40 {
  min-width: 40%;
}
.w-max-40 {
  max-width: 40%;
}
.h-40 {
  height: 40%;
}
.h-min-40 {
  min-height: 40%;
}
.h-max-40 {
  max-height: 40%;
}
.vw-40 {
  width: 40vw;
}
.vw-min-40 {
  min-width: 40vw;
}
.vw-max-40 {
  max-width: 40vw;
}
.vh-40 {
  height: 40vh;
}
.vh-min-40 {
  min-height: 40vh;
}
.vh-max-40 {
  max-height: 40vh;
}
.w-45 {
  width: 45%;
}
.w-min-45 {
  min-width: 45%;
}
.w-max-45 {
  max-width: 45%;
}
.h-45 {
  height: 45%;
}
.h-min-45 {
  min-height: 45%;
}
.h-max-45 {
  max-height: 45%;
}
.vw-45 {
  width: 45vw;
}
.vw-min-45 {
  min-width: 45vw;
}
.vw-max-45 {
  max-width: 45vw;
}
.vh-45 {
  height: 45vh;
}
.vh-min-45 {
  min-height: 45vh;
}
.vh-max-45 {
  max-height: 45vh;
}
.w-50 {
  width: 50%;
}
.w-min-50 {
  min-width: 50%;
}
.w-max-50 {
  max-width: 50%;
}
.h-50 {
  height: 50%;
}
.h-min-50 {
  min-height: 50%;
}
.h-max-50 {
  max-height: 50%;
}
.vw-50 {
  width: 50vw;
}
.vw-min-50 {
  min-width: 50vw;
}
.vw-max-50 {
  max-width: 50vw;
}
.vh-50 {
  height: 50vh;
}
.vh-min-50 {
  min-height: 50vh;
}
.vh-max-50 {
  max-height: 50vh;
}
.w-55 {
  width: 55%;
}
.w-min-55 {
  min-width: 55%;
}
.w-max-55 {
  max-width: 55%;
}
.h-55 {
  height: 55%;
}
.h-min-55 {
  min-height: 55%;
}
.h-max-55 {
  max-height: 55%;
}
.vw-55 {
  width: 55vw;
}
.vw-min-55 {
  min-width: 55vw;
}
.vw-max-55 {
  max-width: 55vw;
}
.vh-55 {
  height: 55vh;
}
.vh-min-55 {
  min-height: 55vh;
}
.vh-max-55 {
  max-height: 55vh;
}
.w-60 {
  width: 60%;
}
.w-min-60 {
  min-width: 60%;
}
.w-max-60 {
  max-width: 60%;
}
.h-60 {
  height: 60%;
}
.h-min-60 {
  min-height: 60%;
}
.h-max-60 {
  max-height: 60%;
}
.vw-60 {
  width: 60vw;
}
.vw-min-60 {
  min-width: 60vw;
}
.vw-max-60 {
  max-width: 60vw;
}
.vh-60 {
  height: 60vh;
}
.vh-min-60 {
  min-height: 60vh;
}
.vh-max-60 {
  max-height: 60vh;
}
.w-65 {
  width: 65%;
}
.w-min-65 {
  min-width: 65%;
}
.w-max-65 {
  max-width: 65%;
}
.h-65 {
  height: 65%;
}
.h-min-65 {
  min-height: 65%;
}
.h-max-65 {
  max-height: 65%;
}
.vw-65 {
  width: 65vw;
}
.vw-min-65 {
  min-width: 65vw;
}
.vw-max-65 {
  max-width: 65vw;
}
.vh-65 {
  height: 65vh;
}
.vh-min-65 {
  min-height: 65vh;
}
.vh-max-65 {
  max-height: 65vh;
}
.w-70 {
  width: 70%;
}
.w-min-70 {
  min-width: 70%;
}
.w-max-70 {
  max-width: 70%;
}
.h-70 {
  height: 70%;
}
.h-min-70 {
  min-height: 70%;
}
.h-max-70 {
  max-height: 70%;
}
.vw-70 {
  width: 70vw;
}
.vw-min-70 {
  min-width: 70vw;
}
.vw-max-70 {
  max-width: 70vw;
}
.vh-70 {
  height: 70vh;
}
.vh-min-70 {
  min-height: 70vh;
}
.vh-max-70 {
  max-height: 70vh;
}
.w-75 {
  width: 75%;
}
.w-min-75 {
  min-width: 75%;
}
.w-max-75 {
  max-width: 75%;
}
.h-75 {
  height: 75%;
}
.h-min-75 {
  min-height: 75%;
}
.h-max-75 {
  max-height: 75%;
}
.vw-75 {
  width: 75vw;
}
.vw-min-75 {
  min-width: 75vw;
}
.vw-max-75 {
  max-width: 75vw;
}
.vh-75 {
  height: 75vh;
}
.vh-min-75 {
  min-height: 75vh;
}
.vh-max-75 {
  max-height: 75vh;
}
.w-80 {
  width: 80%;
}
.w-min-80 {
  min-width: 80%;
}
.w-max-80 {
  max-width: 80%;
}
.h-80 {
  height: 80%;
}
.h-min-80 {
  min-height: 80%;
}
.h-max-80 {
  max-height: 80%;
}
.vw-80 {
  width: 80vw;
}
.vw-min-80 {
  min-width: 80vw;
}
.vw-max-80 {
  max-width: 80vw;
}
.vh-80 {
  height: 80vh;
}
.vh-min-80 {
  min-height: 80vh;
}
.vh-max-80 {
  max-height: 80vh;
}
.w-85 {
  width: 85%;
}
.w-min-85 {
  min-width: 85%;
}
.w-max-85 {
  max-width: 85%;
}
.h-85 {
  height: 85%;
}
.h-min-85 {
  min-height: 85%;
}
.h-max-85 {
  max-height: 85%;
}
.vw-85 {
  width: 85vw;
}
.vw-min-85 {
  min-width: 85vw;
}
.vw-max-85 {
  max-width: 85vw;
}
.vh-85 {
  height: 85vh;
}
.vh-min-85 {
  min-height: 85vh;
}
.vh-max-85 {
  max-height: 85vh;
}
.w-90 {
  width: 90%;
}
.w-min-90 {
  min-width: 90%;
}
.w-max-90 {
  max-width: 90%;
}
.h-90 {
  height: 90%;
}
.h-min-90 {
  min-height: 90%;
}
.h-max-90 {
  max-height: 90%;
}
.vw-90 {
  width: 90vw;
}
.vw-min-90 {
  min-width: 90vw;
}
.vw-max-90 {
  max-width: 90vw;
}
.vh-90 {
  height: 90vh;
}
.vh-min-90 {
  min-height: 90vh;
}
.vh-max-90 {
  max-height: 90vh;
}
.w-95 {
  width: 95%;
}
.w-min-95 {
  min-width: 95%;
}
.w-max-95 {
  max-width: 95%;
}
.h-95 {
  height: 95%;
}
.h-min-95 {
  min-height: 95%;
}
.h-max-95 {
  max-height: 95%;
}
.vw-95 {
  width: 95vw;
}
.vw-min-95 {
  min-width: 95vw;
}
.vw-max-95 {
  max-width: 95vw;
}
.vh-95 {
  height: 95vh;
}
.vh-min-95 {
  min-height: 95vh;
}
.vh-max-95 {
  max-height: 95vh;
}
.w-100 {
  width: 100%;
}
.w-min-100 {
  min-width: 100%;
}
.w-max-100 {
  max-width: 100%;
}
.h-100 {
  height: 100%;
}
.h-min-100 {
  min-height: 100%;
}
.h-max-100 {
  max-height: 100%;
}
.vw-100 {
  width: 100vw;
}
.vw-min-100 {
  min-width: 100vw;
}
.vw-max-100 {
  max-width: 100vw;
}
.vh-100 {
  height: 100vh;
}
.vh-min-100 {
  min-height: 100vh;
}
.vh-max-100 {
  max-height: 100vh;
}
.p-none {
  padding: 0px !important;
}
.p-xxs {
  padding: 4px !important;
}
.p-xs {
  padding: 8px !important;
}
.p-sm {
  padding: 12px !important;
}
.p-md {
  padding: 16px !important;
}
.p-lg {
  padding: 24px !important;
}
.p-xl {
  padding: 32px !important;
}
.p-xxl {
  padding: 40px !important;
}
.m-none {
  margin: 0px !important;
}
.m-xxs {
  margin: 4px !important;
}
.m-xs {
  margin: 8px !important;
}
.m-sm {
  margin: 12px !important;
}
.m-md {
  margin: 16px !important;
}
.m-lg {
  margin: 24px !important;
}
.m-xl {
  margin: 32px !important;
}
.m-xxl {
  margin: 40px !important;
}
.w-none {
  width: 0px !important;
}
.w-xxs {
  width: 40px !important;
}
.w-xs {
  width: 80px !important;
}
.w-sm {
  width: 120px !important;
}
.w-md {
  width: 160px !important;
}
.w-lg {
  width: 240px !important;
}
.w-xl {
  width: 320px !important;
}
.w-xxl {
  width: 400px !important;
}
.w-min-none {
  min-width: 0px !important;
}
.w-min-xxs {
  min-width: 40px !important;
}
.w-min-xs {
  min-width: 80px !important;
}
.w-min-sm {
  min-width: 120px !important;
}
.w-min-md {
  min-width: 160px !important;
}
.w-min-lg {
  min-width: 240px !important;
}
.w-min-xl {
  min-width: 320px !important;
}
.w-min-xxl {
  min-width: 400px !important;
}
.w-max-none {
  max-width: 0px !important;
}
.w-max-xxs {
  max-width: 40px !important;
}
.w-max-xs {
  max-width: 80px !important;
}
.w-max-sm {
  max-width: 120px !important;
}
.w-max-md {
  max-width: 160px !important;
}
.w-max-lg {
  max-width: 240px !important;
}
.w-max-xl {
  max-width: 320px !important;
}
.w-max-xxl {
  max-width: 400px !important;
}
.h-none {
  height: 0px !important;
}
.h-xxs {
  height: 40px !important;
}
.h-xs {
  height: 80px !important;
}
.h-sm {
  height: 120px !important;
}
.h-md {
  height: 160px !important;
}
.h-lg {
  height: 240px !important;
}
.h-xl {
  height: 320px !important;
}
.h-xxl {
  height: 400px !important;
}
.h-max-none {
  max-height: 0px !important;
}
.h-max-xxs {
  max-height: 40px !important;
}
.h-max-xs {
  max-height: 80px !important;
}
.h-max-sm {
  max-height: 120px !important;
}
.h-max-md {
  max-height: 160px !important;
}
.h-max-lg {
  max-height: 240px !important;
}
.h-max-xl {
  max-height: 320px !important;
}
.h-max-xxl {
  max-height: 400px !important;
}
.h-min-none {
  min-height: 0px !important;
}
.h-min-xxs {
  min-height: 40px !important;
}
.h-min-xs {
  min-height: 80px !important;
}
.h-min-sm {
  min-height: 120px !important;
}
.h-min-md {
  min-height: 160px !important;
}
.h-min-lg {
  min-height: 240px !important;
}
.h-min-xl {
  min-height: 320px !important;
}
.h-min-xxl {
  min-height: 400px !important;
}
.h-max-none {
  max-height: 0px !important;
}
.h-max-xxs {
  max-height: 40px !important;
}
.h-max-xs {
  max-height: 80px !important;
}
.h-max-sm {
  max-height: 120px !important;
}
.h-max-md {
  max-height: 160px !important;
}
.h-max-lg {
  max-height: 240px !important;
}
.h-max-xl {
  max-height: 320px !important;
}
.h-max-xxl {
  max-height: 400px !important;
}
.m-l-none {
  margin-left: 0px !important;
}
.m-l-xxs {
  margin-left: 4px !important;
}
.m-l-xs {
  margin-left: 8px !important;
}
.m-l-sm {
  margin-left: 12px !important;
}
.m-l-md {
  margin-left: 16px !important;
}
.m-l-lg {
  margin-left: 24px !important;
}
.m-l-xl {
  margin-left: 32px !important;
}
.m-l-xxl {
  margin-left: 40px !important;
}
.m-r-none {
  margin-right: 0px !important;
}
.m-r-xxs {
  margin-right: 4px !important;
}
.m-r-xs {
  margin-right: 8px !important;
}
.m-r-sm {
  margin-right: 12px !important;
}
.m-r-md {
  margin-right: 16px !important;
}
.m-r-lg {
  margin-right: 24px !important;
}
.m-r-xl {
  margin-right: 32px !important;
}
.m-r-xxl {
  margin-right: 40px !important;
}
.m-t-none {
  margin-top: 0px !important;
}
.m-t-xxs {
  margin-top: 4px !important;
}
.m-t-xs {
  margin-top: 8px !important;
}
.m-t-sm {
  margin-top: 12px !important;
}
.m-t-md {
  margin-top: 16px !important;
}
.m-t-lg {
  margin-top: 24px !important;
}
.m-t-xl {
  margin-top: 32px !important;
}
.m-t-xxl {
  margin-top: 40px !important;
}
.m-b-none {
  margin-bottom: 0px !important;
}
.m-b-xxs {
  margin-bottom: 4px !important;
}
.m-b-xs {
  margin-bottom: 8px !important;
}
.m-b-sm {
  margin-bottom: 12px !important;
}
.m-b-md {
  margin-bottom: 16px !important;
}
.m-b-lg {
  margin-bottom: 24px !important;
}
.m-b-xl {
  margin-bottom: 32px !important;
}
.m-b-xxl {
  margin-bottom: 40px !important;
}
.p-l-none {
  padding-left: 0px !important;
}
.p-l-xxs {
  padding-left: 4px !important;
}
.p-l-xs {
  padding-left: 8px !important;
}
.p-l-sm {
  padding-left: 12px !important;
}
.p-l-md {
  padding-left: 16px !important;
}
.p-l-lg {
  padding-left: 24px !important;
}
.p-l-xl {
  padding-left: 32px !important;
}
.p-l-xxl {
  padding-left: 40px !important;
}
.p-r-none {
  padding-right: 0px !important;
}
.p-r-xxs {
  padding-right: 4px !important;
}
.p-r-xs {
  padding-right: 8px !important;
}
.p-r-sm {
  padding-right: 12px !important;
}
.p-r-md {
  padding-right: 16px !important;
}
.p-r-lg {
  padding-right: 24px !important;
}
.p-r-xl {
  padding-right: 32px !important;
}
.p-r-xxl {
  padding-right: 40px !important;
}
.p-t-none {
  padding-top: 0px !important;
}
.p-t-xxs {
  padding-top: 4px !important;
}
.p-t-xs {
  padding-top: 8px !important;
}
.p-t-sm {
  padding-top: 12px !important;
}
.p-t-md {
  padding-top: 16px !important;
}
.p-t-lg {
  padding-top: 24px !important;
}
.p-t-xl {
  padding-top: 32px !important;
}
.p-t-xxl {
  padding-top: 40px !important;
}
.p-b-none {
  padding-bottom: 0px !important;
}
.p-b-xxs {
  padding-bottom: 4px !important;
}
.p-b-xs {
  padding-bottom: 8px !important;
}
.p-b-sm {
  padding-bottom: 12px !important;
}
.p-b-md {
  padding-bottom: 16px !important;
}
.p-b-lg {
  padding-bottom: 24px !important;
}
.p-b-xl {
  padding-bottom: 32px !important;
}
.p-b-xxl {
  padding-bottom: 40px !important;
}
.gap-none {
  gap: 0px !important;
}
.gap-xxs {
  gap: 4px !important;
}
.gap-xs {
  gap: 8px !important;
}
.gap-sm {
  gap: 12px !important;
}
.gap-md {
  gap: 16px !important;
}
.gap-lg {
  gap: 24px !important;
}
.gap-xl {
  gap: 32px !important;
}
.gap-xxl {
  gap: 40px !important;
}
@media (min-width: 0) {
  .w-full- {
    width: 100%;
  }

  .h-full- {
    height: 100%;
  }

  .w-inherit- {
    width: inherit;
  }

  .h-inherit- {
    height: inherit;
  }

  .w-auto- {
    width: auto;
  }

  .h-auto- {
    height: auto;
  }

  .vw-full- {
    width: 100vw;
  }

  .vh-full- {
    height: 100vh;
  }

  .w-5- {
    width: 5%;
  }

  .w-min-5- {
    min-width: 5%;
  }

  .w-max-5- {
    max-width: 5%;
  }

  .h-5- {
    height: 5%;
  }

  .h-min-5- {
    min-height: 5%;
  }

  .h-max-5- {
    max-height: 5%;
  }

  .vw-5- {
    width: 5vw;
  }

  .vw-min-5- {
    min-width: 5vw;
  }

  .vw-max-5- {
    max-width: 5vw;
  }

  .vh-5- {
    height: 5vh;
  }

  .vh-min-5- {
    min-height: 5vh;
  }

  .vh-max-5- {
    max-height: 5vh;
  }

  .w-10- {
    width: 10%;
  }

  .w-min-10- {
    min-width: 10%;
  }

  .w-max-10- {
    max-width: 10%;
  }

  .h-10- {
    height: 10%;
  }

  .h-min-10- {
    min-height: 10%;
  }

  .h-max-10- {
    max-height: 10%;
  }

  .vw-10- {
    width: 10vw;
  }

  .vw-min-10- {
    min-width: 10vw;
  }

  .vw-max-10- {
    max-width: 10vw;
  }

  .vh-10- {
    height: 10vh;
  }

  .vh-min-10- {
    min-height: 10vh;
  }

  .vh-max-10- {
    max-height: 10vh;
  }

  .w-15- {
    width: 15%;
  }

  .w-min-15- {
    min-width: 15%;
  }

  .w-max-15- {
    max-width: 15%;
  }

  .h-15- {
    height: 15%;
  }

  .h-min-15- {
    min-height: 15%;
  }

  .h-max-15- {
    max-height: 15%;
  }

  .vw-15- {
    width: 15vw;
  }

  .vw-min-15- {
    min-width: 15vw;
  }

  .vw-max-15- {
    max-width: 15vw;
  }

  .vh-15- {
    height: 15vh;
  }

  .vh-min-15- {
    min-height: 15vh;
  }

  .vh-max-15- {
    max-height: 15vh;
  }

  .w-20- {
    width: 20%;
  }

  .w-min-20- {
    min-width: 20%;
  }

  .w-max-20- {
    max-width: 20%;
  }

  .h-20- {
    height: 20%;
  }

  .h-min-20- {
    min-height: 20%;
  }

  .h-max-20- {
    max-height: 20%;
  }

  .vw-20- {
    width: 20vw;
  }

  .vw-min-20- {
    min-width: 20vw;
  }

  .vw-max-20- {
    max-width: 20vw;
  }

  .vh-20- {
    height: 20vh;
  }

  .vh-min-20- {
    min-height: 20vh;
  }

  .vh-max-20- {
    max-height: 20vh;
  }

  .w-25- {
    width: 25%;
  }

  .w-min-25- {
    min-width: 25%;
  }

  .w-max-25- {
    max-width: 25%;
  }

  .h-25- {
    height: 25%;
  }

  .h-min-25- {
    min-height: 25%;
  }

  .h-max-25- {
    max-height: 25%;
  }

  .vw-25- {
    width: 25vw;
  }

  .vw-min-25- {
    min-width: 25vw;
  }

  .vw-max-25- {
    max-width: 25vw;
  }

  .vh-25- {
    height: 25vh;
  }

  .vh-min-25- {
    min-height: 25vh;
  }

  .vh-max-25- {
    max-height: 25vh;
  }

  .w-30- {
    width: 30%;
  }

  .w-min-30- {
    min-width: 30%;
  }

  .w-max-30- {
    max-width: 30%;
  }

  .h-30- {
    height: 30%;
  }

  .h-min-30- {
    min-height: 30%;
  }

  .h-max-30- {
    max-height: 30%;
  }

  .vw-30- {
    width: 30vw;
  }

  .vw-min-30- {
    min-width: 30vw;
  }

  .vw-max-30- {
    max-width: 30vw;
  }

  .vh-30- {
    height: 30vh;
  }

  .vh-min-30- {
    min-height: 30vh;
  }

  .vh-max-30- {
    max-height: 30vh;
  }

  .w-35- {
    width: 35%;
  }

  .w-min-35- {
    min-width: 35%;
  }

  .w-max-35- {
    max-width: 35%;
  }

  .h-35- {
    height: 35%;
  }

  .h-min-35- {
    min-height: 35%;
  }

  .h-max-35- {
    max-height: 35%;
  }

  .vw-35- {
    width: 35vw;
  }

  .vw-min-35- {
    min-width: 35vw;
  }

  .vw-max-35- {
    max-width: 35vw;
  }

  .vh-35- {
    height: 35vh;
  }

  .vh-min-35- {
    min-height: 35vh;
  }

  .vh-max-35- {
    max-height: 35vh;
  }

  .w-40- {
    width: 40%;
  }

  .w-min-40- {
    min-width: 40%;
  }

  .w-max-40- {
    max-width: 40%;
  }

  .h-40- {
    height: 40%;
  }

  .h-min-40- {
    min-height: 40%;
  }

  .h-max-40- {
    max-height: 40%;
  }

  .vw-40- {
    width: 40vw;
  }

  .vw-min-40- {
    min-width: 40vw;
  }

  .vw-max-40- {
    max-width: 40vw;
  }

  .vh-40- {
    height: 40vh;
  }

  .vh-min-40- {
    min-height: 40vh;
  }

  .vh-max-40- {
    max-height: 40vh;
  }

  .w-45- {
    width: 45%;
  }

  .w-min-45- {
    min-width: 45%;
  }

  .w-max-45- {
    max-width: 45%;
  }

  .h-45- {
    height: 45%;
  }

  .h-min-45- {
    min-height: 45%;
  }

  .h-max-45- {
    max-height: 45%;
  }

  .vw-45- {
    width: 45vw;
  }

  .vw-min-45- {
    min-width: 45vw;
  }

  .vw-max-45- {
    max-width: 45vw;
  }

  .vh-45- {
    height: 45vh;
  }

  .vh-min-45- {
    min-height: 45vh;
  }

  .vh-max-45- {
    max-height: 45vh;
  }

  .w-50- {
    width: 50%;
  }

  .w-min-50- {
    min-width: 50%;
  }

  .w-max-50- {
    max-width: 50%;
  }

  .h-50- {
    height: 50%;
  }

  .h-min-50- {
    min-height: 50%;
  }

  .h-max-50- {
    max-height: 50%;
  }

  .vw-50- {
    width: 50vw;
  }

  .vw-min-50- {
    min-width: 50vw;
  }

  .vw-max-50- {
    max-width: 50vw;
  }

  .vh-50- {
    height: 50vh;
  }

  .vh-min-50- {
    min-height: 50vh;
  }

  .vh-max-50- {
    max-height: 50vh;
  }

  .w-55- {
    width: 55%;
  }

  .w-min-55- {
    min-width: 55%;
  }

  .w-max-55- {
    max-width: 55%;
  }

  .h-55- {
    height: 55%;
  }

  .h-min-55- {
    min-height: 55%;
  }

  .h-max-55- {
    max-height: 55%;
  }

  .vw-55- {
    width: 55vw;
  }

  .vw-min-55- {
    min-width: 55vw;
  }

  .vw-max-55- {
    max-width: 55vw;
  }

  .vh-55- {
    height: 55vh;
  }

  .vh-min-55- {
    min-height: 55vh;
  }

  .vh-max-55- {
    max-height: 55vh;
  }

  .w-60- {
    width: 60%;
  }

  .w-min-60- {
    min-width: 60%;
  }

  .w-max-60- {
    max-width: 60%;
  }

  .h-60- {
    height: 60%;
  }

  .h-min-60- {
    min-height: 60%;
  }

  .h-max-60- {
    max-height: 60%;
  }

  .vw-60- {
    width: 60vw;
  }

  .vw-min-60- {
    min-width: 60vw;
  }

  .vw-max-60- {
    max-width: 60vw;
  }

  .vh-60- {
    height: 60vh;
  }

  .vh-min-60- {
    min-height: 60vh;
  }

  .vh-max-60- {
    max-height: 60vh;
  }

  .w-65- {
    width: 65%;
  }

  .w-min-65- {
    min-width: 65%;
  }

  .w-max-65- {
    max-width: 65%;
  }

  .h-65- {
    height: 65%;
  }

  .h-min-65- {
    min-height: 65%;
  }

  .h-max-65- {
    max-height: 65%;
  }

  .vw-65- {
    width: 65vw;
  }

  .vw-min-65- {
    min-width: 65vw;
  }

  .vw-max-65- {
    max-width: 65vw;
  }

  .vh-65- {
    height: 65vh;
  }

  .vh-min-65- {
    min-height: 65vh;
  }

  .vh-max-65- {
    max-height: 65vh;
  }

  .w-70- {
    width: 70%;
  }

  .w-min-70- {
    min-width: 70%;
  }

  .w-max-70- {
    max-width: 70%;
  }

  .h-70- {
    height: 70%;
  }

  .h-min-70- {
    min-height: 70%;
  }

  .h-max-70- {
    max-height: 70%;
  }

  .vw-70- {
    width: 70vw;
  }

  .vw-min-70- {
    min-width: 70vw;
  }

  .vw-max-70- {
    max-width: 70vw;
  }

  .vh-70- {
    height: 70vh;
  }

  .vh-min-70- {
    min-height: 70vh;
  }

  .vh-max-70- {
    max-height: 70vh;
  }

  .w-75- {
    width: 75%;
  }

  .w-min-75- {
    min-width: 75%;
  }

  .w-max-75- {
    max-width: 75%;
  }

  .h-75- {
    height: 75%;
  }

  .h-min-75- {
    min-height: 75%;
  }

  .h-max-75- {
    max-height: 75%;
  }

  .vw-75- {
    width: 75vw;
  }

  .vw-min-75- {
    min-width: 75vw;
  }

  .vw-max-75- {
    max-width: 75vw;
  }

  .vh-75- {
    height: 75vh;
  }

  .vh-min-75- {
    min-height: 75vh;
  }

  .vh-max-75- {
    max-height: 75vh;
  }

  .w-80- {
    width: 80%;
  }

  .w-min-80- {
    min-width: 80%;
  }

  .w-max-80- {
    max-width: 80%;
  }

  .h-80- {
    height: 80%;
  }

  .h-min-80- {
    min-height: 80%;
  }

  .h-max-80- {
    max-height: 80%;
  }

  .vw-80- {
    width: 80vw;
  }

  .vw-min-80- {
    min-width: 80vw;
  }

  .vw-max-80- {
    max-width: 80vw;
  }

  .vh-80- {
    height: 80vh;
  }

  .vh-min-80- {
    min-height: 80vh;
  }

  .vh-max-80- {
    max-height: 80vh;
  }

  .w-85- {
    width: 85%;
  }

  .w-min-85- {
    min-width: 85%;
  }

  .w-max-85- {
    max-width: 85%;
  }

  .h-85- {
    height: 85%;
  }

  .h-min-85- {
    min-height: 85%;
  }

  .h-max-85- {
    max-height: 85%;
  }

  .vw-85- {
    width: 85vw;
  }

  .vw-min-85- {
    min-width: 85vw;
  }

  .vw-max-85- {
    max-width: 85vw;
  }

  .vh-85- {
    height: 85vh;
  }

  .vh-min-85- {
    min-height: 85vh;
  }

  .vh-max-85- {
    max-height: 85vh;
  }

  .w-90- {
    width: 90%;
  }

  .w-min-90- {
    min-width: 90%;
  }

  .w-max-90- {
    max-width: 90%;
  }

  .h-90- {
    height: 90%;
  }

  .h-min-90- {
    min-height: 90%;
  }

  .h-max-90- {
    max-height: 90%;
  }

  .vw-90- {
    width: 90vw;
  }

  .vw-min-90- {
    min-width: 90vw;
  }

  .vw-max-90- {
    max-width: 90vw;
  }

  .vh-90- {
    height: 90vh;
  }

  .vh-min-90- {
    min-height: 90vh;
  }

  .vh-max-90- {
    max-height: 90vh;
  }

  .w-95- {
    width: 95%;
  }

  .w-min-95- {
    min-width: 95%;
  }

  .w-max-95- {
    max-width: 95%;
  }

  .h-95- {
    height: 95%;
  }

  .h-min-95- {
    min-height: 95%;
  }

  .h-max-95- {
    max-height: 95%;
  }

  .vw-95- {
    width: 95vw;
  }

  .vw-min-95- {
    min-width: 95vw;
  }

  .vw-max-95- {
    max-width: 95vw;
  }

  .vh-95- {
    height: 95vh;
  }

  .vh-min-95- {
    min-height: 95vh;
  }

  .vh-max-95- {
    max-height: 95vh;
  }

  .w-100- {
    width: 100%;
  }

  .w-min-100- {
    min-width: 100%;
  }

  .w-max-100- {
    max-width: 100%;
  }

  .h-100- {
    height: 100%;
  }

  .h-min-100- {
    min-height: 100%;
  }

  .h-max-100- {
    max-height: 100%;
  }

  .vw-100- {
    width: 100vw;
  }

  .vw-min-100- {
    min-width: 100vw;
  }

  .vw-max-100- {
    max-width: 100vw;
  }

  .vh-100- {
    height: 100vh;
  }

  .vh-min-100- {
    min-height: 100vh;
  }

  .vh-max-100- {
    max-height: 100vh;
  }

  .p-none- {
    padding: 0px !important;
  }

  .p-xxs- {
    padding: 4px !important;
  }

  .p-xs- {
    padding: 8px !important;
  }

  .p-sm- {
    padding: 12px !important;
  }

  .p-md- {
    padding: 16px !important;
  }

  .p-lg- {
    padding: 24px !important;
  }

  .p-xl- {
    padding: 32px !important;
  }

  .p-xxl- {
    padding: 40px !important;
  }

  .m-none- {
    margin: 0px !important;
  }

  .m-xxs- {
    margin: 4px !important;
  }

  .m-xs- {
    margin: 8px !important;
  }

  .m-sm- {
    margin: 12px !important;
  }

  .m-md- {
    margin: 16px !important;
  }

  .m-lg- {
    margin: 24px !important;
  }

  .m-xl- {
    margin: 32px !important;
  }

  .m-xxl- {
    margin: 40px !important;
  }

  .w-none- {
    width: 0px !important;
  }

  .w-xxs- {
    width: 40px !important;
  }

  .w-xs- {
    width: 80px !important;
  }

  .w-sm- {
    width: 120px !important;
  }

  .w-md- {
    width: 160px !important;
  }

  .w-lg- {
    width: 240px !important;
  }

  .w-xl- {
    width: 320px !important;
  }

  .w-xxl- {
    width: 400px !important;
  }

  .w-min-none- {
    min-width: 0px !important;
  }

  .w-min-xxs- {
    min-width: 40px !important;
  }

  .w-min-xs- {
    min-width: 80px !important;
  }

  .w-min-sm- {
    min-width: 120px !important;
  }

  .w-min-md- {
    min-width: 160px !important;
  }

  .w-min-lg- {
    min-width: 240px !important;
  }

  .w-min-xl- {
    min-width: 320px !important;
  }

  .w-min-xxl- {
    min-width: 400px !important;
  }

  .w-max-none- {
    max-width: 0px !important;
  }

  .w-max-xxs- {
    max-width: 40px !important;
  }

  .w-max-xs- {
    max-width: 80px !important;
  }

  .w-max-sm- {
    max-width: 120px !important;
  }

  .w-max-md- {
    max-width: 160px !important;
  }

  .w-max-lg- {
    max-width: 240px !important;
  }

  .w-max-xl- {
    max-width: 320px !important;
  }

  .w-max-xxl- {
    max-width: 400px !important;
  }

  .h-none- {
    height: 0px !important;
  }

  .h-xxs- {
    height: 40px !important;
  }

  .h-xs- {
    height: 80px !important;
  }

  .h-sm- {
    height: 120px !important;
  }

  .h-md- {
    height: 160px !important;
  }

  .h-lg- {
    height: 240px !important;
  }

  .h-xl- {
    height: 320px !important;
  }

  .h-xxl- {
    height: 400px !important;
  }

  .h-max-none- {
    max-height: 0px !important;
  }

  .h-max-xxs- {
    max-height: 40px !important;
  }

  .h-max-xs- {
    max-height: 80px !important;
  }

  .h-max-sm- {
    max-height: 120px !important;
  }

  .h-max-md- {
    max-height: 160px !important;
  }

  .h-max-lg- {
    max-height: 240px !important;
  }

  .h-max-xl- {
    max-height: 320px !important;
  }

  .h-max-xxl- {
    max-height: 400px !important;
  }

  .h-min-none- {
    min-height: 0px !important;
  }

  .h-min-xxs- {
    min-height: 40px !important;
  }

  .h-min-xs- {
    min-height: 80px !important;
  }

  .h-min-sm- {
    min-height: 120px !important;
  }

  .h-min-md- {
    min-height: 160px !important;
  }

  .h-min-lg- {
    min-height: 240px !important;
  }

  .h-min-xl- {
    min-height: 320px !important;
  }

  .h-min-xxl- {
    min-height: 400px !important;
  }

  .h-max-none- {
    max-height: 0px !important;
  }

  .h-max-xxs- {
    max-height: 40px !important;
  }

  .h-max-xs- {
    max-height: 80px !important;
  }

  .h-max-sm- {
    max-height: 120px !important;
  }

  .h-max-md- {
    max-height: 160px !important;
  }

  .h-max-lg- {
    max-height: 240px !important;
  }

  .h-max-xl- {
    max-height: 320px !important;
  }

  .h-max-xxl- {
    max-height: 400px !important;
  }

  .m-l-none- {
    margin-left: 0px !important;
  }

  .m-l-xxs- {
    margin-left: 4px !important;
  }

  .m-l-xs- {
    margin-left: 8px !important;
  }

  .m-l-sm- {
    margin-left: 12px !important;
  }

  .m-l-md- {
    margin-left: 16px !important;
  }

  .m-l-lg- {
    margin-left: 24px !important;
  }

  .m-l-xl- {
    margin-left: 32px !important;
  }

  .m-l-xxl- {
    margin-left: 40px !important;
  }

  .m-r-none- {
    margin-right: 0px !important;
  }

  .m-r-xxs- {
    margin-right: 4px !important;
  }

  .m-r-xs- {
    margin-right: 8px !important;
  }

  .m-r-sm- {
    margin-right: 12px !important;
  }

  .m-r-md- {
    margin-right: 16px !important;
  }

  .m-r-lg- {
    margin-right: 24px !important;
  }

  .m-r-xl- {
    margin-right: 32px !important;
  }

  .m-r-xxl- {
    margin-right: 40px !important;
  }

  .m-t-none- {
    margin-top: 0px !important;
  }

  .m-t-xxs- {
    margin-top: 4px !important;
  }

  .m-t-xs- {
    margin-top: 8px !important;
  }

  .m-t-sm- {
    margin-top: 12px !important;
  }

  .m-t-md- {
    margin-top: 16px !important;
  }

  .m-t-lg- {
    margin-top: 24px !important;
  }

  .m-t-xl- {
    margin-top: 32px !important;
  }

  .m-t-xxl- {
    margin-top: 40px !important;
  }

  .m-b-none- {
    margin-bottom: 0px !important;
  }

  .m-b-xxs- {
    margin-bottom: 4px !important;
  }

  .m-b-xs- {
    margin-bottom: 8px !important;
  }

  .m-b-sm- {
    margin-bottom: 12px !important;
  }

  .m-b-md- {
    margin-bottom: 16px !important;
  }

  .m-b-lg- {
    margin-bottom: 24px !important;
  }

  .m-b-xl- {
    margin-bottom: 32px !important;
  }

  .m-b-xxl- {
    margin-bottom: 40px !important;
  }

  .p-l-none- {
    padding-left: 0px !important;
  }

  .p-l-xxs- {
    padding-left: 4px !important;
  }

  .p-l-xs- {
    padding-left: 8px !important;
  }

  .p-l-sm- {
    padding-left: 12px !important;
  }

  .p-l-md- {
    padding-left: 16px !important;
  }

  .p-l-lg- {
    padding-left: 24px !important;
  }

  .p-l-xl- {
    padding-left: 32px !important;
  }

  .p-l-xxl- {
    padding-left: 40px !important;
  }

  .p-r-none- {
    padding-right: 0px !important;
  }

  .p-r-xxs- {
    padding-right: 4px !important;
  }

  .p-r-xs- {
    padding-right: 8px !important;
  }

  .p-r-sm- {
    padding-right: 12px !important;
  }

  .p-r-md- {
    padding-right: 16px !important;
  }

  .p-r-lg- {
    padding-right: 24px !important;
  }

  .p-r-xl- {
    padding-right: 32px !important;
  }

  .p-r-xxl- {
    padding-right: 40px !important;
  }

  .p-t-none- {
    padding-top: 0px !important;
  }

  .p-t-xxs- {
    padding-top: 4px !important;
  }

  .p-t-xs- {
    padding-top: 8px !important;
  }

  .p-t-sm- {
    padding-top: 12px !important;
  }

  .p-t-md- {
    padding-top: 16px !important;
  }

  .p-t-lg- {
    padding-top: 24px !important;
  }

  .p-t-xl- {
    padding-top: 32px !important;
  }

  .p-t-xxl- {
    padding-top: 40px !important;
  }

  .p-b-none- {
    padding-bottom: 0px !important;
  }

  .p-b-xxs- {
    padding-bottom: 4px !important;
  }

  .p-b-xs- {
    padding-bottom: 8px !important;
  }

  .p-b-sm- {
    padding-bottom: 12px !important;
  }

  .p-b-md- {
    padding-bottom: 16px !important;
  }

  .p-b-lg- {
    padding-bottom: 24px !important;
  }

  .p-b-xl- {
    padding-bottom: 32px !important;
  }

  .p-b-xxl- {
    padding-bottom: 40px !important;
  }

  .gap-none- {
    gap: 0px !important;
  }

  .gap-xxs- {
    gap: 4px !important;
  }

  .gap-xs- {
    gap: 8px !important;
  }

  .gap-sm- {
    gap: 12px !important;
  }

  .gap-md- {
    gap: 16px !important;
  }

  .gap-lg- {
    gap: 24px !important;
  }

  .gap-xl- {
    gap: 32px !important;
  }

  .gap-xxl- {
    gap: 40px !important;
  }
}
@media (min-width: 640px) {
  .w-full-sm {
    width: 100%;
  }

  .h-full-sm {
    height: 100%;
  }

  .w-inherit-sm {
    width: inherit;
  }

  .h-inherit-sm {
    height: inherit;
  }

  .w-auto-sm {
    width: auto;
  }

  .h-auto-sm {
    height: auto;
  }

  .vw-full-sm {
    width: 100vw;
  }

  .vh-full-sm {
    height: 100vh;
  }

  .w-5-sm {
    width: 5%;
  }

  .w-min-5-sm {
    min-width: 5%;
  }

  .w-max-5-sm {
    max-width: 5%;
  }

  .h-5-sm {
    height: 5%;
  }

  .h-min-5-sm {
    min-height: 5%;
  }

  .h-max-5-sm {
    max-height: 5%;
  }

  .vw-5-sm {
    width: 5vw;
  }

  .vw-min-5-sm {
    min-width: 5vw;
  }

  .vw-max-5-sm {
    max-width: 5vw;
  }

  .vh-5-sm {
    height: 5vh;
  }

  .vh-min-5-sm {
    min-height: 5vh;
  }

  .vh-max-5-sm {
    max-height: 5vh;
  }

  .w-10-sm {
    width: 10%;
  }

  .w-min-10-sm {
    min-width: 10%;
  }

  .w-max-10-sm {
    max-width: 10%;
  }

  .h-10-sm {
    height: 10%;
  }

  .h-min-10-sm {
    min-height: 10%;
  }

  .h-max-10-sm {
    max-height: 10%;
  }

  .vw-10-sm {
    width: 10vw;
  }

  .vw-min-10-sm {
    min-width: 10vw;
  }

  .vw-max-10-sm {
    max-width: 10vw;
  }

  .vh-10-sm {
    height: 10vh;
  }

  .vh-min-10-sm {
    min-height: 10vh;
  }

  .vh-max-10-sm {
    max-height: 10vh;
  }

  .w-15-sm {
    width: 15%;
  }

  .w-min-15-sm {
    min-width: 15%;
  }

  .w-max-15-sm {
    max-width: 15%;
  }

  .h-15-sm {
    height: 15%;
  }

  .h-min-15-sm {
    min-height: 15%;
  }

  .h-max-15-sm {
    max-height: 15%;
  }

  .vw-15-sm {
    width: 15vw;
  }

  .vw-min-15-sm {
    min-width: 15vw;
  }

  .vw-max-15-sm {
    max-width: 15vw;
  }

  .vh-15-sm {
    height: 15vh;
  }

  .vh-min-15-sm {
    min-height: 15vh;
  }

  .vh-max-15-sm {
    max-height: 15vh;
  }

  .w-20-sm {
    width: 20%;
  }

  .w-min-20-sm {
    min-width: 20%;
  }

  .w-max-20-sm {
    max-width: 20%;
  }

  .h-20-sm {
    height: 20%;
  }

  .h-min-20-sm {
    min-height: 20%;
  }

  .h-max-20-sm {
    max-height: 20%;
  }

  .vw-20-sm {
    width: 20vw;
  }

  .vw-min-20-sm {
    min-width: 20vw;
  }

  .vw-max-20-sm {
    max-width: 20vw;
  }

  .vh-20-sm {
    height: 20vh;
  }

  .vh-min-20-sm {
    min-height: 20vh;
  }

  .vh-max-20-sm {
    max-height: 20vh;
  }

  .w-25-sm {
    width: 25%;
  }

  .w-min-25-sm {
    min-width: 25%;
  }

  .w-max-25-sm {
    max-width: 25%;
  }

  .h-25-sm {
    height: 25%;
  }

  .h-min-25-sm {
    min-height: 25%;
  }

  .h-max-25-sm {
    max-height: 25%;
  }

  .vw-25-sm {
    width: 25vw;
  }

  .vw-min-25-sm {
    min-width: 25vw;
  }

  .vw-max-25-sm {
    max-width: 25vw;
  }

  .vh-25-sm {
    height: 25vh;
  }

  .vh-min-25-sm {
    min-height: 25vh;
  }

  .vh-max-25-sm {
    max-height: 25vh;
  }

  .w-30-sm {
    width: 30%;
  }

  .w-min-30-sm {
    min-width: 30%;
  }

  .w-max-30-sm {
    max-width: 30%;
  }

  .h-30-sm {
    height: 30%;
  }

  .h-min-30-sm {
    min-height: 30%;
  }

  .h-max-30-sm {
    max-height: 30%;
  }

  .vw-30-sm {
    width: 30vw;
  }

  .vw-min-30-sm {
    min-width: 30vw;
  }

  .vw-max-30-sm {
    max-width: 30vw;
  }

  .vh-30-sm {
    height: 30vh;
  }

  .vh-min-30-sm {
    min-height: 30vh;
  }

  .vh-max-30-sm {
    max-height: 30vh;
  }

  .w-35-sm {
    width: 35%;
  }

  .w-min-35-sm {
    min-width: 35%;
  }

  .w-max-35-sm {
    max-width: 35%;
  }

  .h-35-sm {
    height: 35%;
  }

  .h-min-35-sm {
    min-height: 35%;
  }

  .h-max-35-sm {
    max-height: 35%;
  }

  .vw-35-sm {
    width: 35vw;
  }

  .vw-min-35-sm {
    min-width: 35vw;
  }

  .vw-max-35-sm {
    max-width: 35vw;
  }

  .vh-35-sm {
    height: 35vh;
  }

  .vh-min-35-sm {
    min-height: 35vh;
  }

  .vh-max-35-sm {
    max-height: 35vh;
  }

  .w-40-sm {
    width: 40%;
  }

  .w-min-40-sm {
    min-width: 40%;
  }

  .w-max-40-sm {
    max-width: 40%;
  }

  .h-40-sm {
    height: 40%;
  }

  .h-min-40-sm {
    min-height: 40%;
  }

  .h-max-40-sm {
    max-height: 40%;
  }

  .vw-40-sm {
    width: 40vw;
  }

  .vw-min-40-sm {
    min-width: 40vw;
  }

  .vw-max-40-sm {
    max-width: 40vw;
  }

  .vh-40-sm {
    height: 40vh;
  }

  .vh-min-40-sm {
    min-height: 40vh;
  }

  .vh-max-40-sm {
    max-height: 40vh;
  }

  .w-45-sm {
    width: 45%;
  }

  .w-min-45-sm {
    min-width: 45%;
  }

  .w-max-45-sm {
    max-width: 45%;
  }

  .h-45-sm {
    height: 45%;
  }

  .h-min-45-sm {
    min-height: 45%;
  }

  .h-max-45-sm {
    max-height: 45%;
  }

  .vw-45-sm {
    width: 45vw;
  }

  .vw-min-45-sm {
    min-width: 45vw;
  }

  .vw-max-45-sm {
    max-width: 45vw;
  }

  .vh-45-sm {
    height: 45vh;
  }

  .vh-min-45-sm {
    min-height: 45vh;
  }

  .vh-max-45-sm {
    max-height: 45vh;
  }

  .w-50-sm {
    width: 50%;
  }

  .w-min-50-sm {
    min-width: 50%;
  }

  .w-max-50-sm {
    max-width: 50%;
  }

  .h-50-sm {
    height: 50%;
  }

  .h-min-50-sm {
    min-height: 50%;
  }

  .h-max-50-sm {
    max-height: 50%;
  }

  .vw-50-sm {
    width: 50vw;
  }

  .vw-min-50-sm {
    min-width: 50vw;
  }

  .vw-max-50-sm {
    max-width: 50vw;
  }

  .vh-50-sm {
    height: 50vh;
  }

  .vh-min-50-sm {
    min-height: 50vh;
  }

  .vh-max-50-sm {
    max-height: 50vh;
  }

  .w-55-sm {
    width: 55%;
  }

  .w-min-55-sm {
    min-width: 55%;
  }

  .w-max-55-sm {
    max-width: 55%;
  }

  .h-55-sm {
    height: 55%;
  }

  .h-min-55-sm {
    min-height: 55%;
  }

  .h-max-55-sm {
    max-height: 55%;
  }

  .vw-55-sm {
    width: 55vw;
  }

  .vw-min-55-sm {
    min-width: 55vw;
  }

  .vw-max-55-sm {
    max-width: 55vw;
  }

  .vh-55-sm {
    height: 55vh;
  }

  .vh-min-55-sm {
    min-height: 55vh;
  }

  .vh-max-55-sm {
    max-height: 55vh;
  }

  .w-60-sm {
    width: 60%;
  }

  .w-min-60-sm {
    min-width: 60%;
  }

  .w-max-60-sm {
    max-width: 60%;
  }

  .h-60-sm {
    height: 60%;
  }

  .h-min-60-sm {
    min-height: 60%;
  }

  .h-max-60-sm {
    max-height: 60%;
  }

  .vw-60-sm {
    width: 60vw;
  }

  .vw-min-60-sm {
    min-width: 60vw;
  }

  .vw-max-60-sm {
    max-width: 60vw;
  }

  .vh-60-sm {
    height: 60vh;
  }

  .vh-min-60-sm {
    min-height: 60vh;
  }

  .vh-max-60-sm {
    max-height: 60vh;
  }

  .w-65-sm {
    width: 65%;
  }

  .w-min-65-sm {
    min-width: 65%;
  }

  .w-max-65-sm {
    max-width: 65%;
  }

  .h-65-sm {
    height: 65%;
  }

  .h-min-65-sm {
    min-height: 65%;
  }

  .h-max-65-sm {
    max-height: 65%;
  }

  .vw-65-sm {
    width: 65vw;
  }

  .vw-min-65-sm {
    min-width: 65vw;
  }

  .vw-max-65-sm {
    max-width: 65vw;
  }

  .vh-65-sm {
    height: 65vh;
  }

  .vh-min-65-sm {
    min-height: 65vh;
  }

  .vh-max-65-sm {
    max-height: 65vh;
  }

  .w-70-sm {
    width: 70%;
  }

  .w-min-70-sm {
    min-width: 70%;
  }

  .w-max-70-sm {
    max-width: 70%;
  }

  .h-70-sm {
    height: 70%;
  }

  .h-min-70-sm {
    min-height: 70%;
  }

  .h-max-70-sm {
    max-height: 70%;
  }

  .vw-70-sm {
    width: 70vw;
  }

  .vw-min-70-sm {
    min-width: 70vw;
  }

  .vw-max-70-sm {
    max-width: 70vw;
  }

  .vh-70-sm {
    height: 70vh;
  }

  .vh-min-70-sm {
    min-height: 70vh;
  }

  .vh-max-70-sm {
    max-height: 70vh;
  }

  .w-75-sm {
    width: 75%;
  }

  .w-min-75-sm {
    min-width: 75%;
  }

  .w-max-75-sm {
    max-width: 75%;
  }

  .h-75-sm {
    height: 75%;
  }

  .h-min-75-sm {
    min-height: 75%;
  }

  .h-max-75-sm {
    max-height: 75%;
  }

  .vw-75-sm {
    width: 75vw;
  }

  .vw-min-75-sm {
    min-width: 75vw;
  }

  .vw-max-75-sm {
    max-width: 75vw;
  }

  .vh-75-sm {
    height: 75vh;
  }

  .vh-min-75-sm {
    min-height: 75vh;
  }

  .vh-max-75-sm {
    max-height: 75vh;
  }

  .w-80-sm {
    width: 80%;
  }

  .w-min-80-sm {
    min-width: 80%;
  }

  .w-max-80-sm {
    max-width: 80%;
  }

  .h-80-sm {
    height: 80%;
  }

  .h-min-80-sm {
    min-height: 80%;
  }

  .h-max-80-sm {
    max-height: 80%;
  }

  .vw-80-sm {
    width: 80vw;
  }

  .vw-min-80-sm {
    min-width: 80vw;
  }

  .vw-max-80-sm {
    max-width: 80vw;
  }

  .vh-80-sm {
    height: 80vh;
  }

  .vh-min-80-sm {
    min-height: 80vh;
  }

  .vh-max-80-sm {
    max-height: 80vh;
  }

  .w-85-sm {
    width: 85%;
  }

  .w-min-85-sm {
    min-width: 85%;
  }

  .w-max-85-sm {
    max-width: 85%;
  }

  .h-85-sm {
    height: 85%;
  }

  .h-min-85-sm {
    min-height: 85%;
  }

  .h-max-85-sm {
    max-height: 85%;
  }

  .vw-85-sm {
    width: 85vw;
  }

  .vw-min-85-sm {
    min-width: 85vw;
  }

  .vw-max-85-sm {
    max-width: 85vw;
  }

  .vh-85-sm {
    height: 85vh;
  }

  .vh-min-85-sm {
    min-height: 85vh;
  }

  .vh-max-85-sm {
    max-height: 85vh;
  }

  .w-90-sm {
    width: 90%;
  }

  .w-min-90-sm {
    min-width: 90%;
  }

  .w-max-90-sm {
    max-width: 90%;
  }

  .h-90-sm {
    height: 90%;
  }

  .h-min-90-sm {
    min-height: 90%;
  }

  .h-max-90-sm {
    max-height: 90%;
  }

  .vw-90-sm {
    width: 90vw;
  }

  .vw-min-90-sm {
    min-width: 90vw;
  }

  .vw-max-90-sm {
    max-width: 90vw;
  }

  .vh-90-sm {
    height: 90vh;
  }

  .vh-min-90-sm {
    min-height: 90vh;
  }

  .vh-max-90-sm {
    max-height: 90vh;
  }

  .w-95-sm {
    width: 95%;
  }

  .w-min-95-sm {
    min-width: 95%;
  }

  .w-max-95-sm {
    max-width: 95%;
  }

  .h-95-sm {
    height: 95%;
  }

  .h-min-95-sm {
    min-height: 95%;
  }

  .h-max-95-sm {
    max-height: 95%;
  }

  .vw-95-sm {
    width: 95vw;
  }

  .vw-min-95-sm {
    min-width: 95vw;
  }

  .vw-max-95-sm {
    max-width: 95vw;
  }

  .vh-95-sm {
    height: 95vh;
  }

  .vh-min-95-sm {
    min-height: 95vh;
  }

  .vh-max-95-sm {
    max-height: 95vh;
  }

  .w-100-sm {
    width: 100%;
  }

  .w-min-100-sm {
    min-width: 100%;
  }

  .w-max-100-sm {
    max-width: 100%;
  }

  .h-100-sm {
    height: 100%;
  }

  .h-min-100-sm {
    min-height: 100%;
  }

  .h-max-100-sm {
    max-height: 100%;
  }

  .vw-100-sm {
    width: 100vw;
  }

  .vw-min-100-sm {
    min-width: 100vw;
  }

  .vw-max-100-sm {
    max-width: 100vw;
  }

  .vh-100-sm {
    height: 100vh;
  }

  .vh-min-100-sm {
    min-height: 100vh;
  }

  .vh-max-100-sm {
    max-height: 100vh;
  }

  .p-none-sm {
    padding: 0px !important;
  }

  .p-xxs-sm {
    padding: 4px !important;
  }

  .p-xs-sm {
    padding: 8px !important;
  }

  .p-sm-sm {
    padding: 12px !important;
  }

  .p-md-sm {
    padding: 16px !important;
  }

  .p-lg-sm {
    padding: 24px !important;
  }

  .p-xl-sm {
    padding: 32px !important;
  }

  .p-xxl-sm {
    padding: 40px !important;
  }

  .m-none-sm {
    margin: 0px !important;
  }

  .m-xxs-sm {
    margin: 4px !important;
  }

  .m-xs-sm {
    margin: 8px !important;
  }

  .m-sm-sm {
    margin: 12px !important;
  }

  .m-md-sm {
    margin: 16px !important;
  }

  .m-lg-sm {
    margin: 24px !important;
  }

  .m-xl-sm {
    margin: 32px !important;
  }

  .m-xxl-sm {
    margin: 40px !important;
  }

  .w-none-sm {
    width: 0px !important;
  }

  .w-xxs-sm {
    width: 40px !important;
  }

  .w-xs-sm {
    width: 80px !important;
  }

  .w-sm-sm {
    width: 120px !important;
  }

  .w-md-sm {
    width: 160px !important;
  }

  .w-lg-sm {
    width: 240px !important;
  }

  .w-xl-sm {
    width: 320px !important;
  }

  .w-xxl-sm {
    width: 400px !important;
  }

  .w-min-none-sm {
    min-width: 0px !important;
  }

  .w-min-xxs-sm {
    min-width: 40px !important;
  }

  .w-min-xs-sm {
    min-width: 80px !important;
  }

  .w-min-sm-sm {
    min-width: 120px !important;
  }

  .w-min-md-sm {
    min-width: 160px !important;
  }

  .w-min-lg-sm {
    min-width: 240px !important;
  }

  .w-min-xl-sm {
    min-width: 320px !important;
  }

  .w-min-xxl-sm {
    min-width: 400px !important;
  }

  .w-max-none-sm {
    max-width: 0px !important;
  }

  .w-max-xxs-sm {
    max-width: 40px !important;
  }

  .w-max-xs-sm {
    max-width: 80px !important;
  }

  .w-max-sm-sm {
    max-width: 120px !important;
  }

  .w-max-md-sm {
    max-width: 160px !important;
  }

  .w-max-lg-sm {
    max-width: 240px !important;
  }

  .w-max-xl-sm {
    max-width: 320px !important;
  }

  .w-max-xxl-sm {
    max-width: 400px !important;
  }

  .h-none-sm {
    height: 0px !important;
  }

  .h-xxs-sm {
    height: 40px !important;
  }

  .h-xs-sm {
    height: 80px !important;
  }

  .h-sm-sm {
    height: 120px !important;
  }

  .h-md-sm {
    height: 160px !important;
  }

  .h-lg-sm {
    height: 240px !important;
  }

  .h-xl-sm {
    height: 320px !important;
  }

  .h-xxl-sm {
    height: 400px !important;
  }

  .h-max-none-sm {
    max-height: 0px !important;
  }

  .h-max-xxs-sm {
    max-height: 40px !important;
  }

  .h-max-xs-sm {
    max-height: 80px !important;
  }

  .h-max-sm-sm {
    max-height: 120px !important;
  }

  .h-max-md-sm {
    max-height: 160px !important;
  }

  .h-max-lg-sm {
    max-height: 240px !important;
  }

  .h-max-xl-sm {
    max-height: 320px !important;
  }

  .h-max-xxl-sm {
    max-height: 400px !important;
  }

  .h-min-none-sm {
    min-height: 0px !important;
  }

  .h-min-xxs-sm {
    min-height: 40px !important;
  }

  .h-min-xs-sm {
    min-height: 80px !important;
  }

  .h-min-sm-sm {
    min-height: 120px !important;
  }

  .h-min-md-sm {
    min-height: 160px !important;
  }

  .h-min-lg-sm {
    min-height: 240px !important;
  }

  .h-min-xl-sm {
    min-height: 320px !important;
  }

  .h-min-xxl-sm {
    min-height: 400px !important;
  }

  .h-max-none-sm {
    max-height: 0px !important;
  }

  .h-max-xxs-sm {
    max-height: 40px !important;
  }

  .h-max-xs-sm {
    max-height: 80px !important;
  }

  .h-max-sm-sm {
    max-height: 120px !important;
  }

  .h-max-md-sm {
    max-height: 160px !important;
  }

  .h-max-lg-sm {
    max-height: 240px !important;
  }

  .h-max-xl-sm {
    max-height: 320px !important;
  }

  .h-max-xxl-sm {
    max-height: 400px !important;
  }

  .m-l-none-sm {
    margin-left: 0px !important;
  }

  .m-l-xxs-sm {
    margin-left: 4px !important;
  }

  .m-l-xs-sm {
    margin-left: 8px !important;
  }

  .m-l-sm-sm {
    margin-left: 12px !important;
  }

  .m-l-md-sm {
    margin-left: 16px !important;
  }

  .m-l-lg-sm {
    margin-left: 24px !important;
  }

  .m-l-xl-sm {
    margin-left: 32px !important;
  }

  .m-l-xxl-sm {
    margin-left: 40px !important;
  }

  .m-r-none-sm {
    margin-right: 0px !important;
  }

  .m-r-xxs-sm {
    margin-right: 4px !important;
  }

  .m-r-xs-sm {
    margin-right: 8px !important;
  }

  .m-r-sm-sm {
    margin-right: 12px !important;
  }

  .m-r-md-sm {
    margin-right: 16px !important;
  }

  .m-r-lg-sm {
    margin-right: 24px !important;
  }

  .m-r-xl-sm {
    margin-right: 32px !important;
  }

  .m-r-xxl-sm {
    margin-right: 40px !important;
  }

  .m-t-none-sm {
    margin-top: 0px !important;
  }

  .m-t-xxs-sm {
    margin-top: 4px !important;
  }

  .m-t-xs-sm {
    margin-top: 8px !important;
  }

  .m-t-sm-sm {
    margin-top: 12px !important;
  }

  .m-t-md-sm {
    margin-top: 16px !important;
  }

  .m-t-lg-sm {
    margin-top: 24px !important;
  }

  .m-t-xl-sm {
    margin-top: 32px !important;
  }

  .m-t-xxl-sm {
    margin-top: 40px !important;
  }

  .m-b-none-sm {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-sm {
    margin-bottom: 4px !important;
  }

  .m-b-xs-sm {
    margin-bottom: 8px !important;
  }

  .m-b-sm-sm {
    margin-bottom: 12px !important;
  }

  .m-b-md-sm {
    margin-bottom: 16px !important;
  }

  .m-b-lg-sm {
    margin-bottom: 24px !important;
  }

  .m-b-xl-sm {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-sm {
    margin-bottom: 40px !important;
  }

  .p-l-none-sm {
    padding-left: 0px !important;
  }

  .p-l-xxs-sm {
    padding-left: 4px !important;
  }

  .p-l-xs-sm {
    padding-left: 8px !important;
  }

  .p-l-sm-sm {
    padding-left: 12px !important;
  }

  .p-l-md-sm {
    padding-left: 16px !important;
  }

  .p-l-lg-sm {
    padding-left: 24px !important;
  }

  .p-l-xl-sm {
    padding-left: 32px !important;
  }

  .p-l-xxl-sm {
    padding-left: 40px !important;
  }

  .p-r-none-sm {
    padding-right: 0px !important;
  }

  .p-r-xxs-sm {
    padding-right: 4px !important;
  }

  .p-r-xs-sm {
    padding-right: 8px !important;
  }

  .p-r-sm-sm {
    padding-right: 12px !important;
  }

  .p-r-md-sm {
    padding-right: 16px !important;
  }

  .p-r-lg-sm {
    padding-right: 24px !important;
  }

  .p-r-xl-sm {
    padding-right: 32px !important;
  }

  .p-r-xxl-sm {
    padding-right: 40px !important;
  }

  .p-t-none-sm {
    padding-top: 0px !important;
  }

  .p-t-xxs-sm {
    padding-top: 4px !important;
  }

  .p-t-xs-sm {
    padding-top: 8px !important;
  }

  .p-t-sm-sm {
    padding-top: 12px !important;
  }

  .p-t-md-sm {
    padding-top: 16px !important;
  }

  .p-t-lg-sm {
    padding-top: 24px !important;
  }

  .p-t-xl-sm {
    padding-top: 32px !important;
  }

  .p-t-xxl-sm {
    padding-top: 40px !important;
  }

  .p-b-none-sm {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-sm {
    padding-bottom: 4px !important;
  }

  .p-b-xs-sm {
    padding-bottom: 8px !important;
  }

  .p-b-sm-sm {
    padding-bottom: 12px !important;
  }

  .p-b-md-sm {
    padding-bottom: 16px !important;
  }

  .p-b-lg-sm {
    padding-bottom: 24px !important;
  }

  .p-b-xl-sm {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-sm {
    padding-bottom: 40px !important;
  }

  .gap-none-sm {
    gap: 0px !important;
  }

  .gap-xxs-sm {
    gap: 4px !important;
  }

  .gap-xs-sm {
    gap: 8px !important;
  }

  .gap-sm-sm {
    gap: 12px !important;
  }

  .gap-md-sm {
    gap: 16px !important;
  }

  .gap-lg-sm {
    gap: 24px !important;
  }

  .gap-xl-sm {
    gap: 32px !important;
  }

  .gap-xxl-sm {
    gap: 40px !important;
  }
}
@media (min-width: 768px) {
  .w-full-md {
    width: 100%;
  }

  .h-full-md {
    height: 100%;
  }

  .w-inherit-md {
    width: inherit;
  }

  .h-inherit-md {
    height: inherit;
  }

  .w-auto-md {
    width: auto;
  }

  .h-auto-md {
    height: auto;
  }

  .vw-full-md {
    width: 100vw;
  }

  .vh-full-md {
    height: 100vh;
  }

  .w-5-md {
    width: 5%;
  }

  .w-min-5-md {
    min-width: 5%;
  }

  .w-max-5-md {
    max-width: 5%;
  }

  .h-5-md {
    height: 5%;
  }

  .h-min-5-md {
    min-height: 5%;
  }

  .h-max-5-md {
    max-height: 5%;
  }

  .vw-5-md {
    width: 5vw;
  }

  .vw-min-5-md {
    min-width: 5vw;
  }

  .vw-max-5-md {
    max-width: 5vw;
  }

  .vh-5-md {
    height: 5vh;
  }

  .vh-min-5-md {
    min-height: 5vh;
  }

  .vh-max-5-md {
    max-height: 5vh;
  }

  .w-10-md {
    width: 10%;
  }

  .w-min-10-md {
    min-width: 10%;
  }

  .w-max-10-md {
    max-width: 10%;
  }

  .h-10-md {
    height: 10%;
  }

  .h-min-10-md {
    min-height: 10%;
  }

  .h-max-10-md {
    max-height: 10%;
  }

  .vw-10-md {
    width: 10vw;
  }

  .vw-min-10-md {
    min-width: 10vw;
  }

  .vw-max-10-md {
    max-width: 10vw;
  }

  .vh-10-md {
    height: 10vh;
  }

  .vh-min-10-md {
    min-height: 10vh;
  }

  .vh-max-10-md {
    max-height: 10vh;
  }

  .w-15-md {
    width: 15%;
  }

  .w-min-15-md {
    min-width: 15%;
  }

  .w-max-15-md {
    max-width: 15%;
  }

  .h-15-md {
    height: 15%;
  }

  .h-min-15-md {
    min-height: 15%;
  }

  .h-max-15-md {
    max-height: 15%;
  }

  .vw-15-md {
    width: 15vw;
  }

  .vw-min-15-md {
    min-width: 15vw;
  }

  .vw-max-15-md {
    max-width: 15vw;
  }

  .vh-15-md {
    height: 15vh;
  }

  .vh-min-15-md {
    min-height: 15vh;
  }

  .vh-max-15-md {
    max-height: 15vh;
  }

  .w-20-md {
    width: 20%;
  }

  .w-min-20-md {
    min-width: 20%;
  }

  .w-max-20-md {
    max-width: 20%;
  }

  .h-20-md {
    height: 20%;
  }

  .h-min-20-md {
    min-height: 20%;
  }

  .h-max-20-md {
    max-height: 20%;
  }

  .vw-20-md {
    width: 20vw;
  }

  .vw-min-20-md {
    min-width: 20vw;
  }

  .vw-max-20-md {
    max-width: 20vw;
  }

  .vh-20-md {
    height: 20vh;
  }

  .vh-min-20-md {
    min-height: 20vh;
  }

  .vh-max-20-md {
    max-height: 20vh;
  }

  .w-25-md {
    width: 25%;
  }

  .w-min-25-md {
    min-width: 25%;
  }

  .w-max-25-md {
    max-width: 25%;
  }

  .h-25-md {
    height: 25%;
  }

  .h-min-25-md {
    min-height: 25%;
  }

  .h-max-25-md {
    max-height: 25%;
  }

  .vw-25-md {
    width: 25vw;
  }

  .vw-min-25-md {
    min-width: 25vw;
  }

  .vw-max-25-md {
    max-width: 25vw;
  }

  .vh-25-md {
    height: 25vh;
  }

  .vh-min-25-md {
    min-height: 25vh;
  }

  .vh-max-25-md {
    max-height: 25vh;
  }

  .w-30-md {
    width: 30%;
  }

  .w-min-30-md {
    min-width: 30%;
  }

  .w-max-30-md {
    max-width: 30%;
  }

  .h-30-md {
    height: 30%;
  }

  .h-min-30-md {
    min-height: 30%;
  }

  .h-max-30-md {
    max-height: 30%;
  }

  .vw-30-md {
    width: 30vw;
  }

  .vw-min-30-md {
    min-width: 30vw;
  }

  .vw-max-30-md {
    max-width: 30vw;
  }

  .vh-30-md {
    height: 30vh;
  }

  .vh-min-30-md {
    min-height: 30vh;
  }

  .vh-max-30-md {
    max-height: 30vh;
  }

  .w-35-md {
    width: 35%;
  }

  .w-min-35-md {
    min-width: 35%;
  }

  .w-max-35-md {
    max-width: 35%;
  }

  .h-35-md {
    height: 35%;
  }

  .h-min-35-md {
    min-height: 35%;
  }

  .h-max-35-md {
    max-height: 35%;
  }

  .vw-35-md {
    width: 35vw;
  }

  .vw-min-35-md {
    min-width: 35vw;
  }

  .vw-max-35-md {
    max-width: 35vw;
  }

  .vh-35-md {
    height: 35vh;
  }

  .vh-min-35-md {
    min-height: 35vh;
  }

  .vh-max-35-md {
    max-height: 35vh;
  }

  .w-40-md {
    width: 40%;
  }

  .w-min-40-md {
    min-width: 40%;
  }

  .w-max-40-md {
    max-width: 40%;
  }

  .h-40-md {
    height: 40%;
  }

  .h-min-40-md {
    min-height: 40%;
  }

  .h-max-40-md {
    max-height: 40%;
  }

  .vw-40-md {
    width: 40vw;
  }

  .vw-min-40-md {
    min-width: 40vw;
  }

  .vw-max-40-md {
    max-width: 40vw;
  }

  .vh-40-md {
    height: 40vh;
  }

  .vh-min-40-md {
    min-height: 40vh;
  }

  .vh-max-40-md {
    max-height: 40vh;
  }

  .w-45-md {
    width: 45%;
  }

  .w-min-45-md {
    min-width: 45%;
  }

  .w-max-45-md {
    max-width: 45%;
  }

  .h-45-md {
    height: 45%;
  }

  .h-min-45-md {
    min-height: 45%;
  }

  .h-max-45-md {
    max-height: 45%;
  }

  .vw-45-md {
    width: 45vw;
  }

  .vw-min-45-md {
    min-width: 45vw;
  }

  .vw-max-45-md {
    max-width: 45vw;
  }

  .vh-45-md {
    height: 45vh;
  }

  .vh-min-45-md {
    min-height: 45vh;
  }

  .vh-max-45-md {
    max-height: 45vh;
  }

  .w-50-md {
    width: 50%;
  }

  .w-min-50-md {
    min-width: 50%;
  }

  .w-max-50-md {
    max-width: 50%;
  }

  .h-50-md {
    height: 50%;
  }

  .h-min-50-md {
    min-height: 50%;
  }

  .h-max-50-md {
    max-height: 50%;
  }

  .vw-50-md {
    width: 50vw;
  }

  .vw-min-50-md {
    min-width: 50vw;
  }

  .vw-max-50-md {
    max-width: 50vw;
  }

  .vh-50-md {
    height: 50vh;
  }

  .vh-min-50-md {
    min-height: 50vh;
  }

  .vh-max-50-md {
    max-height: 50vh;
  }

  .w-55-md {
    width: 55%;
  }

  .w-min-55-md {
    min-width: 55%;
  }

  .w-max-55-md {
    max-width: 55%;
  }

  .h-55-md {
    height: 55%;
  }

  .h-min-55-md {
    min-height: 55%;
  }

  .h-max-55-md {
    max-height: 55%;
  }

  .vw-55-md {
    width: 55vw;
  }

  .vw-min-55-md {
    min-width: 55vw;
  }

  .vw-max-55-md {
    max-width: 55vw;
  }

  .vh-55-md {
    height: 55vh;
  }

  .vh-min-55-md {
    min-height: 55vh;
  }

  .vh-max-55-md {
    max-height: 55vh;
  }

  .w-60-md {
    width: 60%;
  }

  .w-min-60-md {
    min-width: 60%;
  }

  .w-max-60-md {
    max-width: 60%;
  }

  .h-60-md {
    height: 60%;
  }

  .h-min-60-md {
    min-height: 60%;
  }

  .h-max-60-md {
    max-height: 60%;
  }

  .vw-60-md {
    width: 60vw;
  }

  .vw-min-60-md {
    min-width: 60vw;
  }

  .vw-max-60-md {
    max-width: 60vw;
  }

  .vh-60-md {
    height: 60vh;
  }

  .vh-min-60-md {
    min-height: 60vh;
  }

  .vh-max-60-md {
    max-height: 60vh;
  }

  .w-65-md {
    width: 65%;
  }

  .w-min-65-md {
    min-width: 65%;
  }

  .w-max-65-md {
    max-width: 65%;
  }

  .h-65-md {
    height: 65%;
  }

  .h-min-65-md {
    min-height: 65%;
  }

  .h-max-65-md {
    max-height: 65%;
  }

  .vw-65-md {
    width: 65vw;
  }

  .vw-min-65-md {
    min-width: 65vw;
  }

  .vw-max-65-md {
    max-width: 65vw;
  }

  .vh-65-md {
    height: 65vh;
  }

  .vh-min-65-md {
    min-height: 65vh;
  }

  .vh-max-65-md {
    max-height: 65vh;
  }

  .w-70-md {
    width: 70%;
  }

  .w-min-70-md {
    min-width: 70%;
  }

  .w-max-70-md {
    max-width: 70%;
  }

  .h-70-md {
    height: 70%;
  }

  .h-min-70-md {
    min-height: 70%;
  }

  .h-max-70-md {
    max-height: 70%;
  }

  .vw-70-md {
    width: 70vw;
  }

  .vw-min-70-md {
    min-width: 70vw;
  }

  .vw-max-70-md {
    max-width: 70vw;
  }

  .vh-70-md {
    height: 70vh;
  }

  .vh-min-70-md {
    min-height: 70vh;
  }

  .vh-max-70-md {
    max-height: 70vh;
  }

  .w-75-md {
    width: 75%;
  }

  .w-min-75-md {
    min-width: 75%;
  }

  .w-max-75-md {
    max-width: 75%;
  }

  .h-75-md {
    height: 75%;
  }

  .h-min-75-md {
    min-height: 75%;
  }

  .h-max-75-md {
    max-height: 75%;
  }

  .vw-75-md {
    width: 75vw;
  }

  .vw-min-75-md {
    min-width: 75vw;
  }

  .vw-max-75-md {
    max-width: 75vw;
  }

  .vh-75-md {
    height: 75vh;
  }

  .vh-min-75-md {
    min-height: 75vh;
  }

  .vh-max-75-md {
    max-height: 75vh;
  }

  .w-80-md {
    width: 80%;
  }

  .w-min-80-md {
    min-width: 80%;
  }

  .w-max-80-md {
    max-width: 80%;
  }

  .h-80-md {
    height: 80%;
  }

  .h-min-80-md {
    min-height: 80%;
  }

  .h-max-80-md {
    max-height: 80%;
  }

  .vw-80-md {
    width: 80vw;
  }

  .vw-min-80-md {
    min-width: 80vw;
  }

  .vw-max-80-md {
    max-width: 80vw;
  }

  .vh-80-md {
    height: 80vh;
  }

  .vh-min-80-md {
    min-height: 80vh;
  }

  .vh-max-80-md {
    max-height: 80vh;
  }

  .w-85-md {
    width: 85%;
  }

  .w-min-85-md {
    min-width: 85%;
  }

  .w-max-85-md {
    max-width: 85%;
  }

  .h-85-md {
    height: 85%;
  }

  .h-min-85-md {
    min-height: 85%;
  }

  .h-max-85-md {
    max-height: 85%;
  }

  .vw-85-md {
    width: 85vw;
  }

  .vw-min-85-md {
    min-width: 85vw;
  }

  .vw-max-85-md {
    max-width: 85vw;
  }

  .vh-85-md {
    height: 85vh;
  }

  .vh-min-85-md {
    min-height: 85vh;
  }

  .vh-max-85-md {
    max-height: 85vh;
  }

  .w-90-md {
    width: 90%;
  }

  .w-min-90-md {
    min-width: 90%;
  }

  .w-max-90-md {
    max-width: 90%;
  }

  .h-90-md {
    height: 90%;
  }

  .h-min-90-md {
    min-height: 90%;
  }

  .h-max-90-md {
    max-height: 90%;
  }

  .vw-90-md {
    width: 90vw;
  }

  .vw-min-90-md {
    min-width: 90vw;
  }

  .vw-max-90-md {
    max-width: 90vw;
  }

  .vh-90-md {
    height: 90vh;
  }

  .vh-min-90-md {
    min-height: 90vh;
  }

  .vh-max-90-md {
    max-height: 90vh;
  }

  .w-95-md {
    width: 95%;
  }

  .w-min-95-md {
    min-width: 95%;
  }

  .w-max-95-md {
    max-width: 95%;
  }

  .h-95-md {
    height: 95%;
  }

  .h-min-95-md {
    min-height: 95%;
  }

  .h-max-95-md {
    max-height: 95%;
  }

  .vw-95-md {
    width: 95vw;
  }

  .vw-min-95-md {
    min-width: 95vw;
  }

  .vw-max-95-md {
    max-width: 95vw;
  }

  .vh-95-md {
    height: 95vh;
  }

  .vh-min-95-md {
    min-height: 95vh;
  }

  .vh-max-95-md {
    max-height: 95vh;
  }

  .w-100-md {
    width: 100%;
  }

  .w-min-100-md {
    min-width: 100%;
  }

  .w-max-100-md {
    max-width: 100%;
  }

  .h-100-md {
    height: 100%;
  }

  .h-min-100-md {
    min-height: 100%;
  }

  .h-max-100-md {
    max-height: 100%;
  }

  .vw-100-md {
    width: 100vw;
  }

  .vw-min-100-md {
    min-width: 100vw;
  }

  .vw-max-100-md {
    max-width: 100vw;
  }

  .vh-100-md {
    height: 100vh;
  }

  .vh-min-100-md {
    min-height: 100vh;
  }

  .vh-max-100-md {
    max-height: 100vh;
  }

  .p-none-md {
    padding: 0px !important;
  }

  .p-xxs-md {
    padding: 4px !important;
  }

  .p-xs-md {
    padding: 8px !important;
  }

  .p-sm-md {
    padding: 12px !important;
  }

  .p-md-md {
    padding: 16px !important;
  }

  .p-lg-md {
    padding: 24px !important;
  }

  .p-xl-md {
    padding: 32px !important;
  }

  .p-xxl-md {
    padding: 40px !important;
  }

  .m-none-md {
    margin: 0px !important;
  }

  .m-xxs-md {
    margin: 4px !important;
  }

  .m-xs-md {
    margin: 8px !important;
  }

  .m-sm-md {
    margin: 12px !important;
  }

  .m-md-md {
    margin: 16px !important;
  }

  .m-lg-md {
    margin: 24px !important;
  }

  .m-xl-md {
    margin: 32px !important;
  }

  .m-xxl-md {
    margin: 40px !important;
  }

  .w-none-md {
    width: 0px !important;
  }

  .w-xxs-md {
    width: 40px !important;
  }

  .w-xs-md {
    width: 80px !important;
  }

  .w-sm-md {
    width: 120px !important;
  }

  .w-md-md {
    width: 160px !important;
  }

  .w-lg-md {
    width: 240px !important;
  }

  .w-xl-md {
    width: 320px !important;
  }

  .w-xxl-md {
    width: 400px !important;
  }

  .w-min-none-md {
    min-width: 0px !important;
  }

  .w-min-xxs-md {
    min-width: 40px !important;
  }

  .w-min-xs-md {
    min-width: 80px !important;
  }

  .w-min-sm-md {
    min-width: 120px !important;
  }

  .w-min-md-md {
    min-width: 160px !important;
  }

  .w-min-lg-md {
    min-width: 240px !important;
  }

  .w-min-xl-md {
    min-width: 320px !important;
  }

  .w-min-xxl-md {
    min-width: 400px !important;
  }

  .w-max-none-md {
    max-width: 0px !important;
  }

  .w-max-xxs-md {
    max-width: 40px !important;
  }

  .w-max-xs-md {
    max-width: 80px !important;
  }

  .w-max-sm-md {
    max-width: 120px !important;
  }

  .w-max-md-md {
    max-width: 160px !important;
  }

  .w-max-lg-md {
    max-width: 240px !important;
  }

  .w-max-xl-md {
    max-width: 320px !important;
  }

  .w-max-xxl-md {
    max-width: 400px !important;
  }

  .h-none-md {
    height: 0px !important;
  }

  .h-xxs-md {
    height: 40px !important;
  }

  .h-xs-md {
    height: 80px !important;
  }

  .h-sm-md {
    height: 120px !important;
  }

  .h-md-md {
    height: 160px !important;
  }

  .h-lg-md {
    height: 240px !important;
  }

  .h-xl-md {
    height: 320px !important;
  }

  .h-xxl-md {
    height: 400px !important;
  }

  .h-max-none-md {
    max-height: 0px !important;
  }

  .h-max-xxs-md {
    max-height: 40px !important;
  }

  .h-max-xs-md {
    max-height: 80px !important;
  }

  .h-max-sm-md {
    max-height: 120px !important;
  }

  .h-max-md-md {
    max-height: 160px !important;
  }

  .h-max-lg-md {
    max-height: 240px !important;
  }

  .h-max-xl-md {
    max-height: 320px !important;
  }

  .h-max-xxl-md {
    max-height: 400px !important;
  }

  .h-min-none-md {
    min-height: 0px !important;
  }

  .h-min-xxs-md {
    min-height: 40px !important;
  }

  .h-min-xs-md {
    min-height: 80px !important;
  }

  .h-min-sm-md {
    min-height: 120px !important;
  }

  .h-min-md-md {
    min-height: 160px !important;
  }

  .h-min-lg-md {
    min-height: 240px !important;
  }

  .h-min-xl-md {
    min-height: 320px !important;
  }

  .h-min-xxl-md {
    min-height: 400px !important;
  }

  .h-max-none-md {
    max-height: 0px !important;
  }

  .h-max-xxs-md {
    max-height: 40px !important;
  }

  .h-max-xs-md {
    max-height: 80px !important;
  }

  .h-max-sm-md {
    max-height: 120px !important;
  }

  .h-max-md-md {
    max-height: 160px !important;
  }

  .h-max-lg-md {
    max-height: 240px !important;
  }

  .h-max-xl-md {
    max-height: 320px !important;
  }

  .h-max-xxl-md {
    max-height: 400px !important;
  }

  .m-l-none-md {
    margin-left: 0px !important;
  }

  .m-l-xxs-md {
    margin-left: 4px !important;
  }

  .m-l-xs-md {
    margin-left: 8px !important;
  }

  .m-l-sm-md {
    margin-left: 12px !important;
  }

  .m-l-md-md {
    margin-left: 16px !important;
  }

  .m-l-lg-md {
    margin-left: 24px !important;
  }

  .m-l-xl-md {
    margin-left: 32px !important;
  }

  .m-l-xxl-md {
    margin-left: 40px !important;
  }

  .m-r-none-md {
    margin-right: 0px !important;
  }

  .m-r-xxs-md {
    margin-right: 4px !important;
  }

  .m-r-xs-md {
    margin-right: 8px !important;
  }

  .m-r-sm-md {
    margin-right: 12px !important;
  }

  .m-r-md-md {
    margin-right: 16px !important;
  }

  .m-r-lg-md {
    margin-right: 24px !important;
  }

  .m-r-xl-md {
    margin-right: 32px !important;
  }

  .m-r-xxl-md {
    margin-right: 40px !important;
  }

  .m-t-none-md {
    margin-top: 0px !important;
  }

  .m-t-xxs-md {
    margin-top: 4px !important;
  }

  .m-t-xs-md {
    margin-top: 8px !important;
  }

  .m-t-sm-md {
    margin-top: 12px !important;
  }

  .m-t-md-md {
    margin-top: 16px !important;
  }

  .m-t-lg-md {
    margin-top: 24px !important;
  }

  .m-t-xl-md {
    margin-top: 32px !important;
  }

  .m-t-xxl-md {
    margin-top: 40px !important;
  }

  .m-b-none-md {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-md {
    margin-bottom: 4px !important;
  }

  .m-b-xs-md {
    margin-bottom: 8px !important;
  }

  .m-b-sm-md {
    margin-bottom: 12px !important;
  }

  .m-b-md-md {
    margin-bottom: 16px !important;
  }

  .m-b-lg-md {
    margin-bottom: 24px !important;
  }

  .m-b-xl-md {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-md {
    margin-bottom: 40px !important;
  }

  .p-l-none-md {
    padding-left: 0px !important;
  }

  .p-l-xxs-md {
    padding-left: 4px !important;
  }

  .p-l-xs-md {
    padding-left: 8px !important;
  }

  .p-l-sm-md {
    padding-left: 12px !important;
  }

  .p-l-md-md {
    padding-left: 16px !important;
  }

  .p-l-lg-md {
    padding-left: 24px !important;
  }

  .p-l-xl-md {
    padding-left: 32px !important;
  }

  .p-l-xxl-md {
    padding-left: 40px !important;
  }

  .p-r-none-md {
    padding-right: 0px !important;
  }

  .p-r-xxs-md {
    padding-right: 4px !important;
  }

  .p-r-xs-md {
    padding-right: 8px !important;
  }

  .p-r-sm-md {
    padding-right: 12px !important;
  }

  .p-r-md-md {
    padding-right: 16px !important;
  }

  .p-r-lg-md {
    padding-right: 24px !important;
  }

  .p-r-xl-md {
    padding-right: 32px !important;
  }

  .p-r-xxl-md {
    padding-right: 40px !important;
  }

  .p-t-none-md {
    padding-top: 0px !important;
  }

  .p-t-xxs-md {
    padding-top: 4px !important;
  }

  .p-t-xs-md {
    padding-top: 8px !important;
  }

  .p-t-sm-md {
    padding-top: 12px !important;
  }

  .p-t-md-md {
    padding-top: 16px !important;
  }

  .p-t-lg-md {
    padding-top: 24px !important;
  }

  .p-t-xl-md {
    padding-top: 32px !important;
  }

  .p-t-xxl-md {
    padding-top: 40px !important;
  }

  .p-b-none-md {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-md {
    padding-bottom: 4px !important;
  }

  .p-b-xs-md {
    padding-bottom: 8px !important;
  }

  .p-b-sm-md {
    padding-bottom: 12px !important;
  }

  .p-b-md-md {
    padding-bottom: 16px !important;
  }

  .p-b-lg-md {
    padding-bottom: 24px !important;
  }

  .p-b-xl-md {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-md {
    padding-bottom: 40px !important;
  }

  .gap-none-md {
    gap: 0px !important;
  }

  .gap-xxs-md {
    gap: 4px !important;
  }

  .gap-xs-md {
    gap: 8px !important;
  }

  .gap-sm-md {
    gap: 12px !important;
  }

  .gap-md-md {
    gap: 16px !important;
  }

  .gap-lg-md {
    gap: 24px !important;
  }

  .gap-xl-md {
    gap: 32px !important;
  }

  .gap-xxl-md {
    gap: 40px !important;
  }
}
@media (min-width: 1024px) {
  .w-full-lg {
    width: 100%;
  }

  .h-full-lg {
    height: 100%;
  }

  .w-inherit-lg {
    width: inherit;
  }

  .h-inherit-lg {
    height: inherit;
  }

  .w-auto-lg {
    width: auto;
  }

  .h-auto-lg {
    height: auto;
  }

  .vw-full-lg {
    width: 100vw;
  }

  .vh-full-lg {
    height: 100vh;
  }

  .w-5-lg {
    width: 5%;
  }

  .w-min-5-lg {
    min-width: 5%;
  }

  .w-max-5-lg {
    max-width: 5%;
  }

  .h-5-lg {
    height: 5%;
  }

  .h-min-5-lg {
    min-height: 5%;
  }

  .h-max-5-lg {
    max-height: 5%;
  }

  .vw-5-lg {
    width: 5vw;
  }

  .vw-min-5-lg {
    min-width: 5vw;
  }

  .vw-max-5-lg {
    max-width: 5vw;
  }

  .vh-5-lg {
    height: 5vh;
  }

  .vh-min-5-lg {
    min-height: 5vh;
  }

  .vh-max-5-lg {
    max-height: 5vh;
  }

  .w-10-lg {
    width: 10%;
  }

  .w-min-10-lg {
    min-width: 10%;
  }

  .w-max-10-lg {
    max-width: 10%;
  }

  .h-10-lg {
    height: 10%;
  }

  .h-min-10-lg {
    min-height: 10%;
  }

  .h-max-10-lg {
    max-height: 10%;
  }

  .vw-10-lg {
    width: 10vw;
  }

  .vw-min-10-lg {
    min-width: 10vw;
  }

  .vw-max-10-lg {
    max-width: 10vw;
  }

  .vh-10-lg {
    height: 10vh;
  }

  .vh-min-10-lg {
    min-height: 10vh;
  }

  .vh-max-10-lg {
    max-height: 10vh;
  }

  .w-15-lg {
    width: 15%;
  }

  .w-min-15-lg {
    min-width: 15%;
  }

  .w-max-15-lg {
    max-width: 15%;
  }

  .h-15-lg {
    height: 15%;
  }

  .h-min-15-lg {
    min-height: 15%;
  }

  .h-max-15-lg {
    max-height: 15%;
  }

  .vw-15-lg {
    width: 15vw;
  }

  .vw-min-15-lg {
    min-width: 15vw;
  }

  .vw-max-15-lg {
    max-width: 15vw;
  }

  .vh-15-lg {
    height: 15vh;
  }

  .vh-min-15-lg {
    min-height: 15vh;
  }

  .vh-max-15-lg {
    max-height: 15vh;
  }

  .w-20-lg {
    width: 20%;
  }

  .w-min-20-lg {
    min-width: 20%;
  }

  .w-max-20-lg {
    max-width: 20%;
  }

  .h-20-lg {
    height: 20%;
  }

  .h-min-20-lg {
    min-height: 20%;
  }

  .h-max-20-lg {
    max-height: 20%;
  }

  .vw-20-lg {
    width: 20vw;
  }

  .vw-min-20-lg {
    min-width: 20vw;
  }

  .vw-max-20-lg {
    max-width: 20vw;
  }

  .vh-20-lg {
    height: 20vh;
  }

  .vh-min-20-lg {
    min-height: 20vh;
  }

  .vh-max-20-lg {
    max-height: 20vh;
  }

  .w-25-lg {
    width: 25%;
  }

  .w-min-25-lg {
    min-width: 25%;
  }

  .w-max-25-lg {
    max-width: 25%;
  }

  .h-25-lg {
    height: 25%;
  }

  .h-min-25-lg {
    min-height: 25%;
  }

  .h-max-25-lg {
    max-height: 25%;
  }

  .vw-25-lg {
    width: 25vw;
  }

  .vw-min-25-lg {
    min-width: 25vw;
  }

  .vw-max-25-lg {
    max-width: 25vw;
  }

  .vh-25-lg {
    height: 25vh;
  }

  .vh-min-25-lg {
    min-height: 25vh;
  }

  .vh-max-25-lg {
    max-height: 25vh;
  }

  .w-30-lg {
    width: 30%;
  }

  .w-min-30-lg {
    min-width: 30%;
  }

  .w-max-30-lg {
    max-width: 30%;
  }

  .h-30-lg {
    height: 30%;
  }

  .h-min-30-lg {
    min-height: 30%;
  }

  .h-max-30-lg {
    max-height: 30%;
  }

  .vw-30-lg {
    width: 30vw;
  }

  .vw-min-30-lg {
    min-width: 30vw;
  }

  .vw-max-30-lg {
    max-width: 30vw;
  }

  .vh-30-lg {
    height: 30vh;
  }

  .vh-min-30-lg {
    min-height: 30vh;
  }

  .vh-max-30-lg {
    max-height: 30vh;
  }

  .w-35-lg {
    width: 35%;
  }

  .w-min-35-lg {
    min-width: 35%;
  }

  .w-max-35-lg {
    max-width: 35%;
  }

  .h-35-lg {
    height: 35%;
  }

  .h-min-35-lg {
    min-height: 35%;
  }

  .h-max-35-lg {
    max-height: 35%;
  }

  .vw-35-lg {
    width: 35vw;
  }

  .vw-min-35-lg {
    min-width: 35vw;
  }

  .vw-max-35-lg {
    max-width: 35vw;
  }

  .vh-35-lg {
    height: 35vh;
  }

  .vh-min-35-lg {
    min-height: 35vh;
  }

  .vh-max-35-lg {
    max-height: 35vh;
  }

  .w-40-lg {
    width: 40%;
  }

  .w-min-40-lg {
    min-width: 40%;
  }

  .w-max-40-lg {
    max-width: 40%;
  }

  .h-40-lg {
    height: 40%;
  }

  .h-min-40-lg {
    min-height: 40%;
  }

  .h-max-40-lg {
    max-height: 40%;
  }

  .vw-40-lg {
    width: 40vw;
  }

  .vw-min-40-lg {
    min-width: 40vw;
  }

  .vw-max-40-lg {
    max-width: 40vw;
  }

  .vh-40-lg {
    height: 40vh;
  }

  .vh-min-40-lg {
    min-height: 40vh;
  }

  .vh-max-40-lg {
    max-height: 40vh;
  }

  .w-45-lg {
    width: 45%;
  }

  .w-min-45-lg {
    min-width: 45%;
  }

  .w-max-45-lg {
    max-width: 45%;
  }

  .h-45-lg {
    height: 45%;
  }

  .h-min-45-lg {
    min-height: 45%;
  }

  .h-max-45-lg {
    max-height: 45%;
  }

  .vw-45-lg {
    width: 45vw;
  }

  .vw-min-45-lg {
    min-width: 45vw;
  }

  .vw-max-45-lg {
    max-width: 45vw;
  }

  .vh-45-lg {
    height: 45vh;
  }

  .vh-min-45-lg {
    min-height: 45vh;
  }

  .vh-max-45-lg {
    max-height: 45vh;
  }

  .w-50-lg {
    width: 50%;
  }

  .w-min-50-lg {
    min-width: 50%;
  }

  .w-max-50-lg {
    max-width: 50%;
  }

  .h-50-lg {
    height: 50%;
  }

  .h-min-50-lg {
    min-height: 50%;
  }

  .h-max-50-lg {
    max-height: 50%;
  }

  .vw-50-lg {
    width: 50vw;
  }

  .vw-min-50-lg {
    min-width: 50vw;
  }

  .vw-max-50-lg {
    max-width: 50vw;
  }

  .vh-50-lg {
    height: 50vh;
  }

  .vh-min-50-lg {
    min-height: 50vh;
  }

  .vh-max-50-lg {
    max-height: 50vh;
  }

  .w-55-lg {
    width: 55%;
  }

  .w-min-55-lg {
    min-width: 55%;
  }

  .w-max-55-lg {
    max-width: 55%;
  }

  .h-55-lg {
    height: 55%;
  }

  .h-min-55-lg {
    min-height: 55%;
  }

  .h-max-55-lg {
    max-height: 55%;
  }

  .vw-55-lg {
    width: 55vw;
  }

  .vw-min-55-lg {
    min-width: 55vw;
  }

  .vw-max-55-lg {
    max-width: 55vw;
  }

  .vh-55-lg {
    height: 55vh;
  }

  .vh-min-55-lg {
    min-height: 55vh;
  }

  .vh-max-55-lg {
    max-height: 55vh;
  }

  .w-60-lg {
    width: 60%;
  }

  .w-min-60-lg {
    min-width: 60%;
  }

  .w-max-60-lg {
    max-width: 60%;
  }

  .h-60-lg {
    height: 60%;
  }

  .h-min-60-lg {
    min-height: 60%;
  }

  .h-max-60-lg {
    max-height: 60%;
  }

  .vw-60-lg {
    width: 60vw;
  }

  .vw-min-60-lg {
    min-width: 60vw;
  }

  .vw-max-60-lg {
    max-width: 60vw;
  }

  .vh-60-lg {
    height: 60vh;
  }

  .vh-min-60-lg {
    min-height: 60vh;
  }

  .vh-max-60-lg {
    max-height: 60vh;
  }

  .w-65-lg {
    width: 65%;
  }

  .w-min-65-lg {
    min-width: 65%;
  }

  .w-max-65-lg {
    max-width: 65%;
  }

  .h-65-lg {
    height: 65%;
  }

  .h-min-65-lg {
    min-height: 65%;
  }

  .h-max-65-lg {
    max-height: 65%;
  }

  .vw-65-lg {
    width: 65vw;
  }

  .vw-min-65-lg {
    min-width: 65vw;
  }

  .vw-max-65-lg {
    max-width: 65vw;
  }

  .vh-65-lg {
    height: 65vh;
  }

  .vh-min-65-lg {
    min-height: 65vh;
  }

  .vh-max-65-lg {
    max-height: 65vh;
  }

  .w-70-lg {
    width: 70%;
  }

  .w-min-70-lg {
    min-width: 70%;
  }

  .w-max-70-lg {
    max-width: 70%;
  }

  .h-70-lg {
    height: 70%;
  }

  .h-min-70-lg {
    min-height: 70%;
  }

  .h-max-70-lg {
    max-height: 70%;
  }

  .vw-70-lg {
    width: 70vw;
  }

  .vw-min-70-lg {
    min-width: 70vw;
  }

  .vw-max-70-lg {
    max-width: 70vw;
  }

  .vh-70-lg {
    height: 70vh;
  }

  .vh-min-70-lg {
    min-height: 70vh;
  }

  .vh-max-70-lg {
    max-height: 70vh;
  }

  .w-75-lg {
    width: 75%;
  }

  .w-min-75-lg {
    min-width: 75%;
  }

  .w-max-75-lg {
    max-width: 75%;
  }

  .h-75-lg {
    height: 75%;
  }

  .h-min-75-lg {
    min-height: 75%;
  }

  .h-max-75-lg {
    max-height: 75%;
  }

  .vw-75-lg {
    width: 75vw;
  }

  .vw-min-75-lg {
    min-width: 75vw;
  }

  .vw-max-75-lg {
    max-width: 75vw;
  }

  .vh-75-lg {
    height: 75vh;
  }

  .vh-min-75-lg {
    min-height: 75vh;
  }

  .vh-max-75-lg {
    max-height: 75vh;
  }

  .w-80-lg {
    width: 80%;
  }

  .w-min-80-lg {
    min-width: 80%;
  }

  .w-max-80-lg {
    max-width: 80%;
  }

  .h-80-lg {
    height: 80%;
  }

  .h-min-80-lg {
    min-height: 80%;
  }

  .h-max-80-lg {
    max-height: 80%;
  }

  .vw-80-lg {
    width: 80vw;
  }

  .vw-min-80-lg {
    min-width: 80vw;
  }

  .vw-max-80-lg {
    max-width: 80vw;
  }

  .vh-80-lg {
    height: 80vh;
  }

  .vh-min-80-lg {
    min-height: 80vh;
  }

  .vh-max-80-lg {
    max-height: 80vh;
  }

  .w-85-lg {
    width: 85%;
  }

  .w-min-85-lg {
    min-width: 85%;
  }

  .w-max-85-lg {
    max-width: 85%;
  }

  .h-85-lg {
    height: 85%;
  }

  .h-min-85-lg {
    min-height: 85%;
  }

  .h-max-85-lg {
    max-height: 85%;
  }

  .vw-85-lg {
    width: 85vw;
  }

  .vw-min-85-lg {
    min-width: 85vw;
  }

  .vw-max-85-lg {
    max-width: 85vw;
  }

  .vh-85-lg {
    height: 85vh;
  }

  .vh-min-85-lg {
    min-height: 85vh;
  }

  .vh-max-85-lg {
    max-height: 85vh;
  }

  .w-90-lg {
    width: 90%;
  }

  .w-min-90-lg {
    min-width: 90%;
  }

  .w-max-90-lg {
    max-width: 90%;
  }

  .h-90-lg {
    height: 90%;
  }

  .h-min-90-lg {
    min-height: 90%;
  }

  .h-max-90-lg {
    max-height: 90%;
  }

  .vw-90-lg {
    width: 90vw;
  }

  .vw-min-90-lg {
    min-width: 90vw;
  }

  .vw-max-90-lg {
    max-width: 90vw;
  }

  .vh-90-lg {
    height: 90vh;
  }

  .vh-min-90-lg {
    min-height: 90vh;
  }

  .vh-max-90-lg {
    max-height: 90vh;
  }

  .w-95-lg {
    width: 95%;
  }

  .w-min-95-lg {
    min-width: 95%;
  }

  .w-max-95-lg {
    max-width: 95%;
  }

  .h-95-lg {
    height: 95%;
  }

  .h-min-95-lg {
    min-height: 95%;
  }

  .h-max-95-lg {
    max-height: 95%;
  }

  .vw-95-lg {
    width: 95vw;
  }

  .vw-min-95-lg {
    min-width: 95vw;
  }

  .vw-max-95-lg {
    max-width: 95vw;
  }

  .vh-95-lg {
    height: 95vh;
  }

  .vh-min-95-lg {
    min-height: 95vh;
  }

  .vh-max-95-lg {
    max-height: 95vh;
  }

  .w-100-lg {
    width: 100%;
  }

  .w-min-100-lg {
    min-width: 100%;
  }

  .w-max-100-lg {
    max-width: 100%;
  }

  .h-100-lg {
    height: 100%;
  }

  .h-min-100-lg {
    min-height: 100%;
  }

  .h-max-100-lg {
    max-height: 100%;
  }

  .vw-100-lg {
    width: 100vw;
  }

  .vw-min-100-lg {
    min-width: 100vw;
  }

  .vw-max-100-lg {
    max-width: 100vw;
  }

  .vh-100-lg {
    height: 100vh;
  }

  .vh-min-100-lg {
    min-height: 100vh;
  }

  .vh-max-100-lg {
    max-height: 100vh;
  }

  .p-none-lg {
    padding: 0px !important;
  }

  .p-xxs-lg {
    padding: 4px !important;
  }

  .p-xs-lg {
    padding: 8px !important;
  }

  .p-sm-lg {
    padding: 12px !important;
  }

  .p-md-lg {
    padding: 16px !important;
  }

  .p-lg-lg {
    padding: 24px !important;
  }

  .p-xl-lg {
    padding: 32px !important;
  }

  .p-xxl-lg {
    padding: 40px !important;
  }

  .m-none-lg {
    margin: 0px !important;
  }

  .m-xxs-lg {
    margin: 4px !important;
  }

  .m-xs-lg {
    margin: 8px !important;
  }

  .m-sm-lg {
    margin: 12px !important;
  }

  .m-md-lg {
    margin: 16px !important;
  }

  .m-lg-lg {
    margin: 24px !important;
  }

  .m-xl-lg {
    margin: 32px !important;
  }

  .m-xxl-lg {
    margin: 40px !important;
  }

  .w-none-lg {
    width: 0px !important;
  }

  .w-xxs-lg {
    width: 40px !important;
  }

  .w-xs-lg {
    width: 80px !important;
  }

  .w-sm-lg {
    width: 120px !important;
  }

  .w-md-lg {
    width: 160px !important;
  }

  .w-lg-lg {
    width: 240px !important;
  }

  .w-xl-lg {
    width: 320px !important;
  }

  .w-xxl-lg {
    width: 400px !important;
  }

  .w-min-none-lg {
    min-width: 0px !important;
  }

  .w-min-xxs-lg {
    min-width: 40px !important;
  }

  .w-min-xs-lg {
    min-width: 80px !important;
  }

  .w-min-sm-lg {
    min-width: 120px !important;
  }

  .w-min-md-lg {
    min-width: 160px !important;
  }

  .w-min-lg-lg {
    min-width: 240px !important;
  }

  .w-min-xl-lg {
    min-width: 320px !important;
  }

  .w-min-xxl-lg {
    min-width: 400px !important;
  }

  .w-max-none-lg {
    max-width: 0px !important;
  }

  .w-max-xxs-lg {
    max-width: 40px !important;
  }

  .w-max-xs-lg {
    max-width: 80px !important;
  }

  .w-max-sm-lg {
    max-width: 120px !important;
  }

  .w-max-md-lg {
    max-width: 160px !important;
  }

  .w-max-lg-lg {
    max-width: 240px !important;
  }

  .w-max-xl-lg {
    max-width: 320px !important;
  }

  .w-max-xxl-lg {
    max-width: 400px !important;
  }

  .h-none-lg {
    height: 0px !important;
  }

  .h-xxs-lg {
    height: 40px !important;
  }

  .h-xs-lg {
    height: 80px !important;
  }

  .h-sm-lg {
    height: 120px !important;
  }

  .h-md-lg {
    height: 160px !important;
  }

  .h-lg-lg {
    height: 240px !important;
  }

  .h-xl-lg {
    height: 320px !important;
  }

  .h-xxl-lg {
    height: 400px !important;
  }

  .h-max-none-lg {
    max-height: 0px !important;
  }

  .h-max-xxs-lg {
    max-height: 40px !important;
  }

  .h-max-xs-lg {
    max-height: 80px !important;
  }

  .h-max-sm-lg {
    max-height: 120px !important;
  }

  .h-max-md-lg {
    max-height: 160px !important;
  }

  .h-max-lg-lg {
    max-height: 240px !important;
  }

  .h-max-xl-lg {
    max-height: 320px !important;
  }

  .h-max-xxl-lg {
    max-height: 400px !important;
  }

  .h-min-none-lg {
    min-height: 0px !important;
  }

  .h-min-xxs-lg {
    min-height: 40px !important;
  }

  .h-min-xs-lg {
    min-height: 80px !important;
  }

  .h-min-sm-lg {
    min-height: 120px !important;
  }

  .h-min-md-lg {
    min-height: 160px !important;
  }

  .h-min-lg-lg {
    min-height: 240px !important;
  }

  .h-min-xl-lg {
    min-height: 320px !important;
  }

  .h-min-xxl-lg {
    min-height: 400px !important;
  }

  .h-max-none-lg {
    max-height: 0px !important;
  }

  .h-max-xxs-lg {
    max-height: 40px !important;
  }

  .h-max-xs-lg {
    max-height: 80px !important;
  }

  .h-max-sm-lg {
    max-height: 120px !important;
  }

  .h-max-md-lg {
    max-height: 160px !important;
  }

  .h-max-lg-lg {
    max-height: 240px !important;
  }

  .h-max-xl-lg {
    max-height: 320px !important;
  }

  .h-max-xxl-lg {
    max-height: 400px !important;
  }

  .m-l-none-lg {
    margin-left: 0px !important;
  }

  .m-l-xxs-lg {
    margin-left: 4px !important;
  }

  .m-l-xs-lg {
    margin-left: 8px !important;
  }

  .m-l-sm-lg {
    margin-left: 12px !important;
  }

  .m-l-md-lg {
    margin-left: 16px !important;
  }

  .m-l-lg-lg {
    margin-left: 24px !important;
  }

  .m-l-xl-lg {
    margin-left: 32px !important;
  }

  .m-l-xxl-lg {
    margin-left: 40px !important;
  }

  .m-r-none-lg {
    margin-right: 0px !important;
  }

  .m-r-xxs-lg {
    margin-right: 4px !important;
  }

  .m-r-xs-lg {
    margin-right: 8px !important;
  }

  .m-r-sm-lg {
    margin-right: 12px !important;
  }

  .m-r-md-lg {
    margin-right: 16px !important;
  }

  .m-r-lg-lg {
    margin-right: 24px !important;
  }

  .m-r-xl-lg {
    margin-right: 32px !important;
  }

  .m-r-xxl-lg {
    margin-right: 40px !important;
  }

  .m-t-none-lg {
    margin-top: 0px !important;
  }

  .m-t-xxs-lg {
    margin-top: 4px !important;
  }

  .m-t-xs-lg {
    margin-top: 8px !important;
  }

  .m-t-sm-lg {
    margin-top: 12px !important;
  }

  .m-t-md-lg {
    margin-top: 16px !important;
  }

  .m-t-lg-lg {
    margin-top: 24px !important;
  }

  .m-t-xl-lg {
    margin-top: 32px !important;
  }

  .m-t-xxl-lg {
    margin-top: 40px !important;
  }

  .m-b-none-lg {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-lg {
    margin-bottom: 4px !important;
  }

  .m-b-xs-lg {
    margin-bottom: 8px !important;
  }

  .m-b-sm-lg {
    margin-bottom: 12px !important;
  }

  .m-b-md-lg {
    margin-bottom: 16px !important;
  }

  .m-b-lg-lg {
    margin-bottom: 24px !important;
  }

  .m-b-xl-lg {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-lg {
    margin-bottom: 40px !important;
  }

  .p-l-none-lg {
    padding-left: 0px !important;
  }

  .p-l-xxs-lg {
    padding-left: 4px !important;
  }

  .p-l-xs-lg {
    padding-left: 8px !important;
  }

  .p-l-sm-lg {
    padding-left: 12px !important;
  }

  .p-l-md-lg {
    padding-left: 16px !important;
  }

  .p-l-lg-lg {
    padding-left: 24px !important;
  }

  .p-l-xl-lg {
    padding-left: 32px !important;
  }

  .p-l-xxl-lg {
    padding-left: 40px !important;
  }

  .p-r-none-lg {
    padding-right: 0px !important;
  }

  .p-r-xxs-lg {
    padding-right: 4px !important;
  }

  .p-r-xs-lg {
    padding-right: 8px !important;
  }

  .p-r-sm-lg {
    padding-right: 12px !important;
  }

  .p-r-md-lg {
    padding-right: 16px !important;
  }

  .p-r-lg-lg {
    padding-right: 24px !important;
  }

  .p-r-xl-lg {
    padding-right: 32px !important;
  }

  .p-r-xxl-lg {
    padding-right: 40px !important;
  }

  .p-t-none-lg {
    padding-top: 0px !important;
  }

  .p-t-xxs-lg {
    padding-top: 4px !important;
  }

  .p-t-xs-lg {
    padding-top: 8px !important;
  }

  .p-t-sm-lg {
    padding-top: 12px !important;
  }

  .p-t-md-lg {
    padding-top: 16px !important;
  }

  .p-t-lg-lg {
    padding-top: 24px !important;
  }

  .p-t-xl-lg {
    padding-top: 32px !important;
  }

  .p-t-xxl-lg {
    padding-top: 40px !important;
  }

  .p-b-none-lg {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-lg {
    padding-bottom: 4px !important;
  }

  .p-b-xs-lg {
    padding-bottom: 8px !important;
  }

  .p-b-sm-lg {
    padding-bottom: 12px !important;
  }

  .p-b-md-lg {
    padding-bottom: 16px !important;
  }

  .p-b-lg-lg {
    padding-bottom: 24px !important;
  }

  .p-b-xl-lg {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-lg {
    padding-bottom: 40px !important;
  }

  .gap-none-lg {
    gap: 0px !important;
  }

  .gap-xxs-lg {
    gap: 4px !important;
  }

  .gap-xs-lg {
    gap: 8px !important;
  }

  .gap-sm-lg {
    gap: 12px !important;
  }

  .gap-md-lg {
    gap: 16px !important;
  }

  .gap-lg-lg {
    gap: 24px !important;
  }

  .gap-xl-lg {
    gap: 32px !important;
  }

  .gap-xxl-lg {
    gap: 40px !important;
  }
}
@media (min-width: 1280px) {
  .w-full-xl {
    width: 100%;
  }

  .h-full-xl {
    height: 100%;
  }

  .w-inherit-xl {
    width: inherit;
  }

  .h-inherit-xl {
    height: inherit;
  }

  .w-auto-xl {
    width: auto;
  }

  .h-auto-xl {
    height: auto;
  }

  .vw-full-xl {
    width: 100vw;
  }

  .vh-full-xl {
    height: 100vh;
  }

  .w-5-xl {
    width: 5%;
  }

  .w-min-5-xl {
    min-width: 5%;
  }

  .w-max-5-xl {
    max-width: 5%;
  }

  .h-5-xl {
    height: 5%;
  }

  .h-min-5-xl {
    min-height: 5%;
  }

  .h-max-5-xl {
    max-height: 5%;
  }

  .vw-5-xl {
    width: 5vw;
  }

  .vw-min-5-xl {
    min-width: 5vw;
  }

  .vw-max-5-xl {
    max-width: 5vw;
  }

  .vh-5-xl {
    height: 5vh;
  }

  .vh-min-5-xl {
    min-height: 5vh;
  }

  .vh-max-5-xl {
    max-height: 5vh;
  }

  .w-10-xl {
    width: 10%;
  }

  .w-min-10-xl {
    min-width: 10%;
  }

  .w-max-10-xl {
    max-width: 10%;
  }

  .h-10-xl {
    height: 10%;
  }

  .h-min-10-xl {
    min-height: 10%;
  }

  .h-max-10-xl {
    max-height: 10%;
  }

  .vw-10-xl {
    width: 10vw;
  }

  .vw-min-10-xl {
    min-width: 10vw;
  }

  .vw-max-10-xl {
    max-width: 10vw;
  }

  .vh-10-xl {
    height: 10vh;
  }

  .vh-min-10-xl {
    min-height: 10vh;
  }

  .vh-max-10-xl {
    max-height: 10vh;
  }

  .w-15-xl {
    width: 15%;
  }

  .w-min-15-xl {
    min-width: 15%;
  }

  .w-max-15-xl {
    max-width: 15%;
  }

  .h-15-xl {
    height: 15%;
  }

  .h-min-15-xl {
    min-height: 15%;
  }

  .h-max-15-xl {
    max-height: 15%;
  }

  .vw-15-xl {
    width: 15vw;
  }

  .vw-min-15-xl {
    min-width: 15vw;
  }

  .vw-max-15-xl {
    max-width: 15vw;
  }

  .vh-15-xl {
    height: 15vh;
  }

  .vh-min-15-xl {
    min-height: 15vh;
  }

  .vh-max-15-xl {
    max-height: 15vh;
  }

  .w-20-xl {
    width: 20%;
  }

  .w-min-20-xl {
    min-width: 20%;
  }

  .w-max-20-xl {
    max-width: 20%;
  }

  .h-20-xl {
    height: 20%;
  }

  .h-min-20-xl {
    min-height: 20%;
  }

  .h-max-20-xl {
    max-height: 20%;
  }

  .vw-20-xl {
    width: 20vw;
  }

  .vw-min-20-xl {
    min-width: 20vw;
  }

  .vw-max-20-xl {
    max-width: 20vw;
  }

  .vh-20-xl {
    height: 20vh;
  }

  .vh-min-20-xl {
    min-height: 20vh;
  }

  .vh-max-20-xl {
    max-height: 20vh;
  }

  .w-25-xl {
    width: 25%;
  }

  .w-min-25-xl {
    min-width: 25%;
  }

  .w-max-25-xl {
    max-width: 25%;
  }

  .h-25-xl {
    height: 25%;
  }

  .h-min-25-xl {
    min-height: 25%;
  }

  .h-max-25-xl {
    max-height: 25%;
  }

  .vw-25-xl {
    width: 25vw;
  }

  .vw-min-25-xl {
    min-width: 25vw;
  }

  .vw-max-25-xl {
    max-width: 25vw;
  }

  .vh-25-xl {
    height: 25vh;
  }

  .vh-min-25-xl {
    min-height: 25vh;
  }

  .vh-max-25-xl {
    max-height: 25vh;
  }

  .w-30-xl {
    width: 30%;
  }

  .w-min-30-xl {
    min-width: 30%;
  }

  .w-max-30-xl {
    max-width: 30%;
  }

  .h-30-xl {
    height: 30%;
  }

  .h-min-30-xl {
    min-height: 30%;
  }

  .h-max-30-xl {
    max-height: 30%;
  }

  .vw-30-xl {
    width: 30vw;
  }

  .vw-min-30-xl {
    min-width: 30vw;
  }

  .vw-max-30-xl {
    max-width: 30vw;
  }

  .vh-30-xl {
    height: 30vh;
  }

  .vh-min-30-xl {
    min-height: 30vh;
  }

  .vh-max-30-xl {
    max-height: 30vh;
  }

  .w-35-xl {
    width: 35%;
  }

  .w-min-35-xl {
    min-width: 35%;
  }

  .w-max-35-xl {
    max-width: 35%;
  }

  .h-35-xl {
    height: 35%;
  }

  .h-min-35-xl {
    min-height: 35%;
  }

  .h-max-35-xl {
    max-height: 35%;
  }

  .vw-35-xl {
    width: 35vw;
  }

  .vw-min-35-xl {
    min-width: 35vw;
  }

  .vw-max-35-xl {
    max-width: 35vw;
  }

  .vh-35-xl {
    height: 35vh;
  }

  .vh-min-35-xl {
    min-height: 35vh;
  }

  .vh-max-35-xl {
    max-height: 35vh;
  }

  .w-40-xl {
    width: 40%;
  }

  .w-min-40-xl {
    min-width: 40%;
  }

  .w-max-40-xl {
    max-width: 40%;
  }

  .h-40-xl {
    height: 40%;
  }

  .h-min-40-xl {
    min-height: 40%;
  }

  .h-max-40-xl {
    max-height: 40%;
  }

  .vw-40-xl {
    width: 40vw;
  }

  .vw-min-40-xl {
    min-width: 40vw;
  }

  .vw-max-40-xl {
    max-width: 40vw;
  }

  .vh-40-xl {
    height: 40vh;
  }

  .vh-min-40-xl {
    min-height: 40vh;
  }

  .vh-max-40-xl {
    max-height: 40vh;
  }

  .w-45-xl {
    width: 45%;
  }

  .w-min-45-xl {
    min-width: 45%;
  }

  .w-max-45-xl {
    max-width: 45%;
  }

  .h-45-xl {
    height: 45%;
  }

  .h-min-45-xl {
    min-height: 45%;
  }

  .h-max-45-xl {
    max-height: 45%;
  }

  .vw-45-xl {
    width: 45vw;
  }

  .vw-min-45-xl {
    min-width: 45vw;
  }

  .vw-max-45-xl {
    max-width: 45vw;
  }

  .vh-45-xl {
    height: 45vh;
  }

  .vh-min-45-xl {
    min-height: 45vh;
  }

  .vh-max-45-xl {
    max-height: 45vh;
  }

  .w-50-xl {
    width: 50%;
  }

  .w-min-50-xl {
    min-width: 50%;
  }

  .w-max-50-xl {
    max-width: 50%;
  }

  .h-50-xl {
    height: 50%;
  }

  .h-min-50-xl {
    min-height: 50%;
  }

  .h-max-50-xl {
    max-height: 50%;
  }

  .vw-50-xl {
    width: 50vw;
  }

  .vw-min-50-xl {
    min-width: 50vw;
  }

  .vw-max-50-xl {
    max-width: 50vw;
  }

  .vh-50-xl {
    height: 50vh;
  }

  .vh-min-50-xl {
    min-height: 50vh;
  }

  .vh-max-50-xl {
    max-height: 50vh;
  }

  .w-55-xl {
    width: 55%;
  }

  .w-min-55-xl {
    min-width: 55%;
  }

  .w-max-55-xl {
    max-width: 55%;
  }

  .h-55-xl {
    height: 55%;
  }

  .h-min-55-xl {
    min-height: 55%;
  }

  .h-max-55-xl {
    max-height: 55%;
  }

  .vw-55-xl {
    width: 55vw;
  }

  .vw-min-55-xl {
    min-width: 55vw;
  }

  .vw-max-55-xl {
    max-width: 55vw;
  }

  .vh-55-xl {
    height: 55vh;
  }

  .vh-min-55-xl {
    min-height: 55vh;
  }

  .vh-max-55-xl {
    max-height: 55vh;
  }

  .w-60-xl {
    width: 60%;
  }

  .w-min-60-xl {
    min-width: 60%;
  }

  .w-max-60-xl {
    max-width: 60%;
  }

  .h-60-xl {
    height: 60%;
  }

  .h-min-60-xl {
    min-height: 60%;
  }

  .h-max-60-xl {
    max-height: 60%;
  }

  .vw-60-xl {
    width: 60vw;
  }

  .vw-min-60-xl {
    min-width: 60vw;
  }

  .vw-max-60-xl {
    max-width: 60vw;
  }

  .vh-60-xl {
    height: 60vh;
  }

  .vh-min-60-xl {
    min-height: 60vh;
  }

  .vh-max-60-xl {
    max-height: 60vh;
  }

  .w-65-xl {
    width: 65%;
  }

  .w-min-65-xl {
    min-width: 65%;
  }

  .w-max-65-xl {
    max-width: 65%;
  }

  .h-65-xl {
    height: 65%;
  }

  .h-min-65-xl {
    min-height: 65%;
  }

  .h-max-65-xl {
    max-height: 65%;
  }

  .vw-65-xl {
    width: 65vw;
  }

  .vw-min-65-xl {
    min-width: 65vw;
  }

  .vw-max-65-xl {
    max-width: 65vw;
  }

  .vh-65-xl {
    height: 65vh;
  }

  .vh-min-65-xl {
    min-height: 65vh;
  }

  .vh-max-65-xl {
    max-height: 65vh;
  }

  .w-70-xl {
    width: 70%;
  }

  .w-min-70-xl {
    min-width: 70%;
  }

  .w-max-70-xl {
    max-width: 70%;
  }

  .h-70-xl {
    height: 70%;
  }

  .h-min-70-xl {
    min-height: 70%;
  }

  .h-max-70-xl {
    max-height: 70%;
  }

  .vw-70-xl {
    width: 70vw;
  }

  .vw-min-70-xl {
    min-width: 70vw;
  }

  .vw-max-70-xl {
    max-width: 70vw;
  }

  .vh-70-xl {
    height: 70vh;
  }

  .vh-min-70-xl {
    min-height: 70vh;
  }

  .vh-max-70-xl {
    max-height: 70vh;
  }

  .w-75-xl {
    width: 75%;
  }

  .w-min-75-xl {
    min-width: 75%;
  }

  .w-max-75-xl {
    max-width: 75%;
  }

  .h-75-xl {
    height: 75%;
  }

  .h-min-75-xl {
    min-height: 75%;
  }

  .h-max-75-xl {
    max-height: 75%;
  }

  .vw-75-xl {
    width: 75vw;
  }

  .vw-min-75-xl {
    min-width: 75vw;
  }

  .vw-max-75-xl {
    max-width: 75vw;
  }

  .vh-75-xl {
    height: 75vh;
  }

  .vh-min-75-xl {
    min-height: 75vh;
  }

  .vh-max-75-xl {
    max-height: 75vh;
  }

  .w-80-xl {
    width: 80%;
  }

  .w-min-80-xl {
    min-width: 80%;
  }

  .w-max-80-xl {
    max-width: 80%;
  }

  .h-80-xl {
    height: 80%;
  }

  .h-min-80-xl {
    min-height: 80%;
  }

  .h-max-80-xl {
    max-height: 80%;
  }

  .vw-80-xl {
    width: 80vw;
  }

  .vw-min-80-xl {
    min-width: 80vw;
  }

  .vw-max-80-xl {
    max-width: 80vw;
  }

  .vh-80-xl {
    height: 80vh;
  }

  .vh-min-80-xl {
    min-height: 80vh;
  }

  .vh-max-80-xl {
    max-height: 80vh;
  }

  .w-85-xl {
    width: 85%;
  }

  .w-min-85-xl {
    min-width: 85%;
  }

  .w-max-85-xl {
    max-width: 85%;
  }

  .h-85-xl {
    height: 85%;
  }

  .h-min-85-xl {
    min-height: 85%;
  }

  .h-max-85-xl {
    max-height: 85%;
  }

  .vw-85-xl {
    width: 85vw;
  }

  .vw-min-85-xl {
    min-width: 85vw;
  }

  .vw-max-85-xl {
    max-width: 85vw;
  }

  .vh-85-xl {
    height: 85vh;
  }

  .vh-min-85-xl {
    min-height: 85vh;
  }

  .vh-max-85-xl {
    max-height: 85vh;
  }

  .w-90-xl {
    width: 90%;
  }

  .w-min-90-xl {
    min-width: 90%;
  }

  .w-max-90-xl {
    max-width: 90%;
  }

  .h-90-xl {
    height: 90%;
  }

  .h-min-90-xl {
    min-height: 90%;
  }

  .h-max-90-xl {
    max-height: 90%;
  }

  .vw-90-xl {
    width: 90vw;
  }

  .vw-min-90-xl {
    min-width: 90vw;
  }

  .vw-max-90-xl {
    max-width: 90vw;
  }

  .vh-90-xl {
    height: 90vh;
  }

  .vh-min-90-xl {
    min-height: 90vh;
  }

  .vh-max-90-xl {
    max-height: 90vh;
  }

  .w-95-xl {
    width: 95%;
  }

  .w-min-95-xl {
    min-width: 95%;
  }

  .w-max-95-xl {
    max-width: 95%;
  }

  .h-95-xl {
    height: 95%;
  }

  .h-min-95-xl {
    min-height: 95%;
  }

  .h-max-95-xl {
    max-height: 95%;
  }

  .vw-95-xl {
    width: 95vw;
  }

  .vw-min-95-xl {
    min-width: 95vw;
  }

  .vw-max-95-xl {
    max-width: 95vw;
  }

  .vh-95-xl {
    height: 95vh;
  }

  .vh-min-95-xl {
    min-height: 95vh;
  }

  .vh-max-95-xl {
    max-height: 95vh;
  }

  .w-100-xl {
    width: 100%;
  }

  .w-min-100-xl {
    min-width: 100%;
  }

  .w-max-100-xl {
    max-width: 100%;
  }

  .h-100-xl {
    height: 100%;
  }

  .h-min-100-xl {
    min-height: 100%;
  }

  .h-max-100-xl {
    max-height: 100%;
  }

  .vw-100-xl {
    width: 100vw;
  }

  .vw-min-100-xl {
    min-width: 100vw;
  }

  .vw-max-100-xl {
    max-width: 100vw;
  }

  .vh-100-xl {
    height: 100vh;
  }

  .vh-min-100-xl {
    min-height: 100vh;
  }

  .vh-max-100-xl {
    max-height: 100vh;
  }

  .p-none-xl {
    padding: 0px !important;
  }

  .p-xxs-xl {
    padding: 4px !important;
  }

  .p-xs-xl {
    padding: 8px !important;
  }

  .p-sm-xl {
    padding: 12px !important;
  }

  .p-md-xl {
    padding: 16px !important;
  }

  .p-lg-xl {
    padding: 24px !important;
  }

  .p-xl-xl {
    padding: 32px !important;
  }

  .p-xxl-xl {
    padding: 40px !important;
  }

  .m-none-xl {
    margin: 0px !important;
  }

  .m-xxs-xl {
    margin: 4px !important;
  }

  .m-xs-xl {
    margin: 8px !important;
  }

  .m-sm-xl {
    margin: 12px !important;
  }

  .m-md-xl {
    margin: 16px !important;
  }

  .m-lg-xl {
    margin: 24px !important;
  }

  .m-xl-xl {
    margin: 32px !important;
  }

  .m-xxl-xl {
    margin: 40px !important;
  }

  .w-none-xl {
    width: 0px !important;
  }

  .w-xxs-xl {
    width: 40px !important;
  }

  .w-xs-xl {
    width: 80px !important;
  }

  .w-sm-xl {
    width: 120px !important;
  }

  .w-md-xl {
    width: 160px !important;
  }

  .w-lg-xl {
    width: 240px !important;
  }

  .w-xl-xl {
    width: 320px !important;
  }

  .w-xxl-xl {
    width: 400px !important;
  }

  .w-min-none-xl {
    min-width: 0px !important;
  }

  .w-min-xxs-xl {
    min-width: 40px !important;
  }

  .w-min-xs-xl {
    min-width: 80px !important;
  }

  .w-min-sm-xl {
    min-width: 120px !important;
  }

  .w-min-md-xl {
    min-width: 160px !important;
  }

  .w-min-lg-xl {
    min-width: 240px !important;
  }

  .w-min-xl-xl {
    min-width: 320px !important;
  }

  .w-min-xxl-xl {
    min-width: 400px !important;
  }

  .w-max-none-xl {
    max-width: 0px !important;
  }

  .w-max-xxs-xl {
    max-width: 40px !important;
  }

  .w-max-xs-xl {
    max-width: 80px !important;
  }

  .w-max-sm-xl {
    max-width: 120px !important;
  }

  .w-max-md-xl {
    max-width: 160px !important;
  }

  .w-max-lg-xl {
    max-width: 240px !important;
  }

  .w-max-xl-xl {
    max-width: 320px !important;
  }

  .w-max-xxl-xl {
    max-width: 400px !important;
  }

  .h-none-xl {
    height: 0px !important;
  }

  .h-xxs-xl {
    height: 40px !important;
  }

  .h-xs-xl {
    height: 80px !important;
  }

  .h-sm-xl {
    height: 120px !important;
  }

  .h-md-xl {
    height: 160px !important;
  }

  .h-lg-xl {
    height: 240px !important;
  }

  .h-xl-xl {
    height: 320px !important;
  }

  .h-xxl-xl {
    height: 400px !important;
  }

  .h-max-none-xl {
    max-height: 0px !important;
  }

  .h-max-xxs-xl {
    max-height: 40px !important;
  }

  .h-max-xs-xl {
    max-height: 80px !important;
  }

  .h-max-sm-xl {
    max-height: 120px !important;
  }

  .h-max-md-xl {
    max-height: 160px !important;
  }

  .h-max-lg-xl {
    max-height: 240px !important;
  }

  .h-max-xl-xl {
    max-height: 320px !important;
  }

  .h-max-xxl-xl {
    max-height: 400px !important;
  }

  .h-min-none-xl {
    min-height: 0px !important;
  }

  .h-min-xxs-xl {
    min-height: 40px !important;
  }

  .h-min-xs-xl {
    min-height: 80px !important;
  }

  .h-min-sm-xl {
    min-height: 120px !important;
  }

  .h-min-md-xl {
    min-height: 160px !important;
  }

  .h-min-lg-xl {
    min-height: 240px !important;
  }

  .h-min-xl-xl {
    min-height: 320px !important;
  }

  .h-min-xxl-xl {
    min-height: 400px !important;
  }

  .h-max-none-xl {
    max-height: 0px !important;
  }

  .h-max-xxs-xl {
    max-height: 40px !important;
  }

  .h-max-xs-xl {
    max-height: 80px !important;
  }

  .h-max-sm-xl {
    max-height: 120px !important;
  }

  .h-max-md-xl {
    max-height: 160px !important;
  }

  .h-max-lg-xl {
    max-height: 240px !important;
  }

  .h-max-xl-xl {
    max-height: 320px !important;
  }

  .h-max-xxl-xl {
    max-height: 400px !important;
  }

  .m-l-none-xl {
    margin-left: 0px !important;
  }

  .m-l-xxs-xl {
    margin-left: 4px !important;
  }

  .m-l-xs-xl {
    margin-left: 8px !important;
  }

  .m-l-sm-xl {
    margin-left: 12px !important;
  }

  .m-l-md-xl {
    margin-left: 16px !important;
  }

  .m-l-lg-xl {
    margin-left: 24px !important;
  }

  .m-l-xl-xl {
    margin-left: 32px !important;
  }

  .m-l-xxl-xl {
    margin-left: 40px !important;
  }

  .m-r-none-xl {
    margin-right: 0px !important;
  }

  .m-r-xxs-xl {
    margin-right: 4px !important;
  }

  .m-r-xs-xl {
    margin-right: 8px !important;
  }

  .m-r-sm-xl {
    margin-right: 12px !important;
  }

  .m-r-md-xl {
    margin-right: 16px !important;
  }

  .m-r-lg-xl {
    margin-right: 24px !important;
  }

  .m-r-xl-xl {
    margin-right: 32px !important;
  }

  .m-r-xxl-xl {
    margin-right: 40px !important;
  }

  .m-t-none-xl {
    margin-top: 0px !important;
  }

  .m-t-xxs-xl {
    margin-top: 4px !important;
  }

  .m-t-xs-xl {
    margin-top: 8px !important;
  }

  .m-t-sm-xl {
    margin-top: 12px !important;
  }

  .m-t-md-xl {
    margin-top: 16px !important;
  }

  .m-t-lg-xl {
    margin-top: 24px !important;
  }

  .m-t-xl-xl {
    margin-top: 32px !important;
  }

  .m-t-xxl-xl {
    margin-top: 40px !important;
  }

  .m-b-none-xl {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-xl {
    margin-bottom: 4px !important;
  }

  .m-b-xs-xl {
    margin-bottom: 8px !important;
  }

  .m-b-sm-xl {
    margin-bottom: 12px !important;
  }

  .m-b-md-xl {
    margin-bottom: 16px !important;
  }

  .m-b-lg-xl {
    margin-bottom: 24px !important;
  }

  .m-b-xl-xl {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-xl {
    margin-bottom: 40px !important;
  }

  .p-l-none-xl {
    padding-left: 0px !important;
  }

  .p-l-xxs-xl {
    padding-left: 4px !important;
  }

  .p-l-xs-xl {
    padding-left: 8px !important;
  }

  .p-l-sm-xl {
    padding-left: 12px !important;
  }

  .p-l-md-xl {
    padding-left: 16px !important;
  }

  .p-l-lg-xl {
    padding-left: 24px !important;
  }

  .p-l-xl-xl {
    padding-left: 32px !important;
  }

  .p-l-xxl-xl {
    padding-left: 40px !important;
  }

  .p-r-none-xl {
    padding-right: 0px !important;
  }

  .p-r-xxs-xl {
    padding-right: 4px !important;
  }

  .p-r-xs-xl {
    padding-right: 8px !important;
  }

  .p-r-sm-xl {
    padding-right: 12px !important;
  }

  .p-r-md-xl {
    padding-right: 16px !important;
  }

  .p-r-lg-xl {
    padding-right: 24px !important;
  }

  .p-r-xl-xl {
    padding-right: 32px !important;
  }

  .p-r-xxl-xl {
    padding-right: 40px !important;
  }

  .p-t-none-xl {
    padding-top: 0px !important;
  }

  .p-t-xxs-xl {
    padding-top: 4px !important;
  }

  .p-t-xs-xl {
    padding-top: 8px !important;
  }

  .p-t-sm-xl {
    padding-top: 12px !important;
  }

  .p-t-md-xl {
    padding-top: 16px !important;
  }

  .p-t-lg-xl {
    padding-top: 24px !important;
  }

  .p-t-xl-xl {
    padding-top: 32px !important;
  }

  .p-t-xxl-xl {
    padding-top: 40px !important;
  }

  .p-b-none-xl {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-xl {
    padding-bottom: 4px !important;
  }

  .p-b-xs-xl {
    padding-bottom: 8px !important;
  }

  .p-b-sm-xl {
    padding-bottom: 12px !important;
  }

  .p-b-md-xl {
    padding-bottom: 16px !important;
  }

  .p-b-lg-xl {
    padding-bottom: 24px !important;
  }

  .p-b-xl-xl {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-xl {
    padding-bottom: 40px !important;
  }

  .gap-none-xl {
    gap: 0px !important;
  }

  .gap-xxs-xl {
    gap: 4px !important;
  }

  .gap-xs-xl {
    gap: 8px !important;
  }

  .gap-sm-xl {
    gap: 12px !important;
  }

  .gap-md-xl {
    gap: 16px !important;
  }

  .gap-lg-xl {
    gap: 24px !important;
  }

  .gap-xl-xl {
    gap: 32px !important;
  }

  .gap-xxl-xl {
    gap: 40px !important;
  }
}
@media (min-width: 1536px) {
  .w-full-xxl {
    width: 100%;
  }

  .h-full-xxl {
    height: 100%;
  }

  .w-inherit-xxl {
    width: inherit;
  }

  .h-inherit-xxl {
    height: inherit;
  }

  .w-auto-xxl {
    width: auto;
  }

  .h-auto-xxl {
    height: auto;
  }

  .vw-full-xxl {
    width: 100vw;
  }

  .vh-full-xxl {
    height: 100vh;
  }

  .w-5-xxl {
    width: 5%;
  }

  .w-min-5-xxl {
    min-width: 5%;
  }

  .w-max-5-xxl {
    max-width: 5%;
  }

  .h-5-xxl {
    height: 5%;
  }

  .h-min-5-xxl {
    min-height: 5%;
  }

  .h-max-5-xxl {
    max-height: 5%;
  }

  .vw-5-xxl {
    width: 5vw;
  }

  .vw-min-5-xxl {
    min-width: 5vw;
  }

  .vw-max-5-xxl {
    max-width: 5vw;
  }

  .vh-5-xxl {
    height: 5vh;
  }

  .vh-min-5-xxl {
    min-height: 5vh;
  }

  .vh-max-5-xxl {
    max-height: 5vh;
  }

  .w-10-xxl {
    width: 10%;
  }

  .w-min-10-xxl {
    min-width: 10%;
  }

  .w-max-10-xxl {
    max-width: 10%;
  }

  .h-10-xxl {
    height: 10%;
  }

  .h-min-10-xxl {
    min-height: 10%;
  }

  .h-max-10-xxl {
    max-height: 10%;
  }

  .vw-10-xxl {
    width: 10vw;
  }

  .vw-min-10-xxl {
    min-width: 10vw;
  }

  .vw-max-10-xxl {
    max-width: 10vw;
  }

  .vh-10-xxl {
    height: 10vh;
  }

  .vh-min-10-xxl {
    min-height: 10vh;
  }

  .vh-max-10-xxl {
    max-height: 10vh;
  }

  .w-15-xxl {
    width: 15%;
  }

  .w-min-15-xxl {
    min-width: 15%;
  }

  .w-max-15-xxl {
    max-width: 15%;
  }

  .h-15-xxl {
    height: 15%;
  }

  .h-min-15-xxl {
    min-height: 15%;
  }

  .h-max-15-xxl {
    max-height: 15%;
  }

  .vw-15-xxl {
    width: 15vw;
  }

  .vw-min-15-xxl {
    min-width: 15vw;
  }

  .vw-max-15-xxl {
    max-width: 15vw;
  }

  .vh-15-xxl {
    height: 15vh;
  }

  .vh-min-15-xxl {
    min-height: 15vh;
  }

  .vh-max-15-xxl {
    max-height: 15vh;
  }

  .w-20-xxl {
    width: 20%;
  }

  .w-min-20-xxl {
    min-width: 20%;
  }

  .w-max-20-xxl {
    max-width: 20%;
  }

  .h-20-xxl {
    height: 20%;
  }

  .h-min-20-xxl {
    min-height: 20%;
  }

  .h-max-20-xxl {
    max-height: 20%;
  }

  .vw-20-xxl {
    width: 20vw;
  }

  .vw-min-20-xxl {
    min-width: 20vw;
  }

  .vw-max-20-xxl {
    max-width: 20vw;
  }

  .vh-20-xxl {
    height: 20vh;
  }

  .vh-min-20-xxl {
    min-height: 20vh;
  }

  .vh-max-20-xxl {
    max-height: 20vh;
  }

  .w-25-xxl {
    width: 25%;
  }

  .w-min-25-xxl {
    min-width: 25%;
  }

  .w-max-25-xxl {
    max-width: 25%;
  }

  .h-25-xxl {
    height: 25%;
  }

  .h-min-25-xxl {
    min-height: 25%;
  }

  .h-max-25-xxl {
    max-height: 25%;
  }

  .vw-25-xxl {
    width: 25vw;
  }

  .vw-min-25-xxl {
    min-width: 25vw;
  }

  .vw-max-25-xxl {
    max-width: 25vw;
  }

  .vh-25-xxl {
    height: 25vh;
  }

  .vh-min-25-xxl {
    min-height: 25vh;
  }

  .vh-max-25-xxl {
    max-height: 25vh;
  }

  .w-30-xxl {
    width: 30%;
  }

  .w-min-30-xxl {
    min-width: 30%;
  }

  .w-max-30-xxl {
    max-width: 30%;
  }

  .h-30-xxl {
    height: 30%;
  }

  .h-min-30-xxl {
    min-height: 30%;
  }

  .h-max-30-xxl {
    max-height: 30%;
  }

  .vw-30-xxl {
    width: 30vw;
  }

  .vw-min-30-xxl {
    min-width: 30vw;
  }

  .vw-max-30-xxl {
    max-width: 30vw;
  }

  .vh-30-xxl {
    height: 30vh;
  }

  .vh-min-30-xxl {
    min-height: 30vh;
  }

  .vh-max-30-xxl {
    max-height: 30vh;
  }

  .w-35-xxl {
    width: 35%;
  }

  .w-min-35-xxl {
    min-width: 35%;
  }

  .w-max-35-xxl {
    max-width: 35%;
  }

  .h-35-xxl {
    height: 35%;
  }

  .h-min-35-xxl {
    min-height: 35%;
  }

  .h-max-35-xxl {
    max-height: 35%;
  }

  .vw-35-xxl {
    width: 35vw;
  }

  .vw-min-35-xxl {
    min-width: 35vw;
  }

  .vw-max-35-xxl {
    max-width: 35vw;
  }

  .vh-35-xxl {
    height: 35vh;
  }

  .vh-min-35-xxl {
    min-height: 35vh;
  }

  .vh-max-35-xxl {
    max-height: 35vh;
  }

  .w-40-xxl {
    width: 40%;
  }

  .w-min-40-xxl {
    min-width: 40%;
  }

  .w-max-40-xxl {
    max-width: 40%;
  }

  .h-40-xxl {
    height: 40%;
  }

  .h-min-40-xxl {
    min-height: 40%;
  }

  .h-max-40-xxl {
    max-height: 40%;
  }

  .vw-40-xxl {
    width: 40vw;
  }

  .vw-min-40-xxl {
    min-width: 40vw;
  }

  .vw-max-40-xxl {
    max-width: 40vw;
  }

  .vh-40-xxl {
    height: 40vh;
  }

  .vh-min-40-xxl {
    min-height: 40vh;
  }

  .vh-max-40-xxl {
    max-height: 40vh;
  }

  .w-45-xxl {
    width: 45%;
  }

  .w-min-45-xxl {
    min-width: 45%;
  }

  .w-max-45-xxl {
    max-width: 45%;
  }

  .h-45-xxl {
    height: 45%;
  }

  .h-min-45-xxl {
    min-height: 45%;
  }

  .h-max-45-xxl {
    max-height: 45%;
  }

  .vw-45-xxl {
    width: 45vw;
  }

  .vw-min-45-xxl {
    min-width: 45vw;
  }

  .vw-max-45-xxl {
    max-width: 45vw;
  }

  .vh-45-xxl {
    height: 45vh;
  }

  .vh-min-45-xxl {
    min-height: 45vh;
  }

  .vh-max-45-xxl {
    max-height: 45vh;
  }

  .w-50-xxl {
    width: 50%;
  }

  .w-min-50-xxl {
    min-width: 50%;
  }

  .w-max-50-xxl {
    max-width: 50%;
  }

  .h-50-xxl {
    height: 50%;
  }

  .h-min-50-xxl {
    min-height: 50%;
  }

  .h-max-50-xxl {
    max-height: 50%;
  }

  .vw-50-xxl {
    width: 50vw;
  }

  .vw-min-50-xxl {
    min-width: 50vw;
  }

  .vw-max-50-xxl {
    max-width: 50vw;
  }

  .vh-50-xxl {
    height: 50vh;
  }

  .vh-min-50-xxl {
    min-height: 50vh;
  }

  .vh-max-50-xxl {
    max-height: 50vh;
  }

  .w-55-xxl {
    width: 55%;
  }

  .w-min-55-xxl {
    min-width: 55%;
  }

  .w-max-55-xxl {
    max-width: 55%;
  }

  .h-55-xxl {
    height: 55%;
  }

  .h-min-55-xxl {
    min-height: 55%;
  }

  .h-max-55-xxl {
    max-height: 55%;
  }

  .vw-55-xxl {
    width: 55vw;
  }

  .vw-min-55-xxl {
    min-width: 55vw;
  }

  .vw-max-55-xxl {
    max-width: 55vw;
  }

  .vh-55-xxl {
    height: 55vh;
  }

  .vh-min-55-xxl {
    min-height: 55vh;
  }

  .vh-max-55-xxl {
    max-height: 55vh;
  }

  .w-60-xxl {
    width: 60%;
  }

  .w-min-60-xxl {
    min-width: 60%;
  }

  .w-max-60-xxl {
    max-width: 60%;
  }

  .h-60-xxl {
    height: 60%;
  }

  .h-min-60-xxl {
    min-height: 60%;
  }

  .h-max-60-xxl {
    max-height: 60%;
  }

  .vw-60-xxl {
    width: 60vw;
  }

  .vw-min-60-xxl {
    min-width: 60vw;
  }

  .vw-max-60-xxl {
    max-width: 60vw;
  }

  .vh-60-xxl {
    height: 60vh;
  }

  .vh-min-60-xxl {
    min-height: 60vh;
  }

  .vh-max-60-xxl {
    max-height: 60vh;
  }

  .w-65-xxl {
    width: 65%;
  }

  .w-min-65-xxl {
    min-width: 65%;
  }

  .w-max-65-xxl {
    max-width: 65%;
  }

  .h-65-xxl {
    height: 65%;
  }

  .h-min-65-xxl {
    min-height: 65%;
  }

  .h-max-65-xxl {
    max-height: 65%;
  }

  .vw-65-xxl {
    width: 65vw;
  }

  .vw-min-65-xxl {
    min-width: 65vw;
  }

  .vw-max-65-xxl {
    max-width: 65vw;
  }

  .vh-65-xxl {
    height: 65vh;
  }

  .vh-min-65-xxl {
    min-height: 65vh;
  }

  .vh-max-65-xxl {
    max-height: 65vh;
  }

  .w-70-xxl {
    width: 70%;
  }

  .w-min-70-xxl {
    min-width: 70%;
  }

  .w-max-70-xxl {
    max-width: 70%;
  }

  .h-70-xxl {
    height: 70%;
  }

  .h-min-70-xxl {
    min-height: 70%;
  }

  .h-max-70-xxl {
    max-height: 70%;
  }

  .vw-70-xxl {
    width: 70vw;
  }

  .vw-min-70-xxl {
    min-width: 70vw;
  }

  .vw-max-70-xxl {
    max-width: 70vw;
  }

  .vh-70-xxl {
    height: 70vh;
  }

  .vh-min-70-xxl {
    min-height: 70vh;
  }

  .vh-max-70-xxl {
    max-height: 70vh;
  }

  .w-75-xxl {
    width: 75%;
  }

  .w-min-75-xxl {
    min-width: 75%;
  }

  .w-max-75-xxl {
    max-width: 75%;
  }

  .h-75-xxl {
    height: 75%;
  }

  .h-min-75-xxl {
    min-height: 75%;
  }

  .h-max-75-xxl {
    max-height: 75%;
  }

  .vw-75-xxl {
    width: 75vw;
  }

  .vw-min-75-xxl {
    min-width: 75vw;
  }

  .vw-max-75-xxl {
    max-width: 75vw;
  }

  .vh-75-xxl {
    height: 75vh;
  }

  .vh-min-75-xxl {
    min-height: 75vh;
  }

  .vh-max-75-xxl {
    max-height: 75vh;
  }

  .w-80-xxl {
    width: 80%;
  }

  .w-min-80-xxl {
    min-width: 80%;
  }

  .w-max-80-xxl {
    max-width: 80%;
  }

  .h-80-xxl {
    height: 80%;
  }

  .h-min-80-xxl {
    min-height: 80%;
  }

  .h-max-80-xxl {
    max-height: 80%;
  }

  .vw-80-xxl {
    width: 80vw;
  }

  .vw-min-80-xxl {
    min-width: 80vw;
  }

  .vw-max-80-xxl {
    max-width: 80vw;
  }

  .vh-80-xxl {
    height: 80vh;
  }

  .vh-min-80-xxl {
    min-height: 80vh;
  }

  .vh-max-80-xxl {
    max-height: 80vh;
  }

  .w-85-xxl {
    width: 85%;
  }

  .w-min-85-xxl {
    min-width: 85%;
  }

  .w-max-85-xxl {
    max-width: 85%;
  }

  .h-85-xxl {
    height: 85%;
  }

  .h-min-85-xxl {
    min-height: 85%;
  }

  .h-max-85-xxl {
    max-height: 85%;
  }

  .vw-85-xxl {
    width: 85vw;
  }

  .vw-min-85-xxl {
    min-width: 85vw;
  }

  .vw-max-85-xxl {
    max-width: 85vw;
  }

  .vh-85-xxl {
    height: 85vh;
  }

  .vh-min-85-xxl {
    min-height: 85vh;
  }

  .vh-max-85-xxl {
    max-height: 85vh;
  }

  .w-90-xxl {
    width: 90%;
  }

  .w-min-90-xxl {
    min-width: 90%;
  }

  .w-max-90-xxl {
    max-width: 90%;
  }

  .h-90-xxl {
    height: 90%;
  }

  .h-min-90-xxl {
    min-height: 90%;
  }

  .h-max-90-xxl {
    max-height: 90%;
  }

  .vw-90-xxl {
    width: 90vw;
  }

  .vw-min-90-xxl {
    min-width: 90vw;
  }

  .vw-max-90-xxl {
    max-width: 90vw;
  }

  .vh-90-xxl {
    height: 90vh;
  }

  .vh-min-90-xxl {
    min-height: 90vh;
  }

  .vh-max-90-xxl {
    max-height: 90vh;
  }

  .w-95-xxl {
    width: 95%;
  }

  .w-min-95-xxl {
    min-width: 95%;
  }

  .w-max-95-xxl {
    max-width: 95%;
  }

  .h-95-xxl {
    height: 95%;
  }

  .h-min-95-xxl {
    min-height: 95%;
  }

  .h-max-95-xxl {
    max-height: 95%;
  }

  .vw-95-xxl {
    width: 95vw;
  }

  .vw-min-95-xxl {
    min-width: 95vw;
  }

  .vw-max-95-xxl {
    max-width: 95vw;
  }

  .vh-95-xxl {
    height: 95vh;
  }

  .vh-min-95-xxl {
    min-height: 95vh;
  }

  .vh-max-95-xxl {
    max-height: 95vh;
  }

  .w-100-xxl {
    width: 100%;
  }

  .w-min-100-xxl {
    min-width: 100%;
  }

  .w-max-100-xxl {
    max-width: 100%;
  }

  .h-100-xxl {
    height: 100%;
  }

  .h-min-100-xxl {
    min-height: 100%;
  }

  .h-max-100-xxl {
    max-height: 100%;
  }

  .vw-100-xxl {
    width: 100vw;
  }

  .vw-min-100-xxl {
    min-width: 100vw;
  }

  .vw-max-100-xxl {
    max-width: 100vw;
  }

  .vh-100-xxl {
    height: 100vh;
  }

  .vh-min-100-xxl {
    min-height: 100vh;
  }

  .vh-max-100-xxl {
    max-height: 100vh;
  }

  .p-none-xxl {
    padding: 0px !important;
  }

  .p-xxs-xxl {
    padding: 4px !important;
  }

  .p-xs-xxl {
    padding: 8px !important;
  }

  .p-sm-xxl {
    padding: 12px !important;
  }

  .p-md-xxl {
    padding: 16px !important;
  }

  .p-lg-xxl {
    padding: 24px !important;
  }

  .p-xl-xxl {
    padding: 32px !important;
  }

  .p-xxl-xxl {
    padding: 40px !important;
  }

  .m-none-xxl {
    margin: 0px !important;
  }

  .m-xxs-xxl {
    margin: 4px !important;
  }

  .m-xs-xxl {
    margin: 8px !important;
  }

  .m-sm-xxl {
    margin: 12px !important;
  }

  .m-md-xxl {
    margin: 16px !important;
  }

  .m-lg-xxl {
    margin: 24px !important;
  }

  .m-xl-xxl {
    margin: 32px !important;
  }

  .m-xxl-xxl {
    margin: 40px !important;
  }

  .w-none-xxl {
    width: 0px !important;
  }

  .w-xxs-xxl {
    width: 40px !important;
  }

  .w-xs-xxl {
    width: 80px !important;
  }

  .w-sm-xxl {
    width: 120px !important;
  }

  .w-md-xxl {
    width: 160px !important;
  }

  .w-lg-xxl {
    width: 240px !important;
  }

  .w-xl-xxl {
    width: 320px !important;
  }

  .w-xxl-xxl {
    width: 400px !important;
  }

  .w-min-none-xxl {
    min-width: 0px !important;
  }

  .w-min-xxs-xxl {
    min-width: 40px !important;
  }

  .w-min-xs-xxl {
    min-width: 80px !important;
  }

  .w-min-sm-xxl {
    min-width: 120px !important;
  }

  .w-min-md-xxl {
    min-width: 160px !important;
  }

  .w-min-lg-xxl {
    min-width: 240px !important;
  }

  .w-min-xl-xxl {
    min-width: 320px !important;
  }

  .w-min-xxl-xxl {
    min-width: 400px !important;
  }

  .w-max-none-xxl {
    max-width: 0px !important;
  }

  .w-max-xxs-xxl {
    max-width: 40px !important;
  }

  .w-max-xs-xxl {
    max-width: 80px !important;
  }

  .w-max-sm-xxl {
    max-width: 120px !important;
  }

  .w-max-md-xxl {
    max-width: 160px !important;
  }

  .w-max-lg-xxl {
    max-width: 240px !important;
  }

  .w-max-xl-xxl {
    max-width: 320px !important;
  }

  .w-max-xxl-xxl {
    max-width: 400px !important;
  }

  .h-none-xxl {
    height: 0px !important;
  }

  .h-xxs-xxl {
    height: 40px !important;
  }

  .h-xs-xxl {
    height: 80px !important;
  }

  .h-sm-xxl {
    height: 120px !important;
  }

  .h-md-xxl {
    height: 160px !important;
  }

  .h-lg-xxl {
    height: 240px !important;
  }

  .h-xl-xxl {
    height: 320px !important;
  }

  .h-xxl-xxl {
    height: 400px !important;
  }

  .h-max-none-xxl {
    max-height: 0px !important;
  }

  .h-max-xxs-xxl {
    max-height: 40px !important;
  }

  .h-max-xs-xxl {
    max-height: 80px !important;
  }

  .h-max-sm-xxl {
    max-height: 120px !important;
  }

  .h-max-md-xxl {
    max-height: 160px !important;
  }

  .h-max-lg-xxl {
    max-height: 240px !important;
  }

  .h-max-xl-xxl {
    max-height: 320px !important;
  }

  .h-max-xxl-xxl {
    max-height: 400px !important;
  }

  .h-min-none-xxl {
    min-height: 0px !important;
  }

  .h-min-xxs-xxl {
    min-height: 40px !important;
  }

  .h-min-xs-xxl {
    min-height: 80px !important;
  }

  .h-min-sm-xxl {
    min-height: 120px !important;
  }

  .h-min-md-xxl {
    min-height: 160px !important;
  }

  .h-min-lg-xxl {
    min-height: 240px !important;
  }

  .h-min-xl-xxl {
    min-height: 320px !important;
  }

  .h-min-xxl-xxl {
    min-height: 400px !important;
  }

  .h-max-none-xxl {
    max-height: 0px !important;
  }

  .h-max-xxs-xxl {
    max-height: 40px !important;
  }

  .h-max-xs-xxl {
    max-height: 80px !important;
  }

  .h-max-sm-xxl {
    max-height: 120px !important;
  }

  .h-max-md-xxl {
    max-height: 160px !important;
  }

  .h-max-lg-xxl {
    max-height: 240px !important;
  }

  .h-max-xl-xxl {
    max-height: 320px !important;
  }

  .h-max-xxl-xxl {
    max-height: 400px !important;
  }

  .m-l-none-xxl {
    margin-left: 0px !important;
  }

  .m-l-xxs-xxl {
    margin-left: 4px !important;
  }

  .m-l-xs-xxl {
    margin-left: 8px !important;
  }

  .m-l-sm-xxl {
    margin-left: 12px !important;
  }

  .m-l-md-xxl {
    margin-left: 16px !important;
  }

  .m-l-lg-xxl {
    margin-left: 24px !important;
  }

  .m-l-xl-xxl {
    margin-left: 32px !important;
  }

  .m-l-xxl-xxl {
    margin-left: 40px !important;
  }

  .m-r-none-xxl {
    margin-right: 0px !important;
  }

  .m-r-xxs-xxl {
    margin-right: 4px !important;
  }

  .m-r-xs-xxl {
    margin-right: 8px !important;
  }

  .m-r-sm-xxl {
    margin-right: 12px !important;
  }

  .m-r-md-xxl {
    margin-right: 16px !important;
  }

  .m-r-lg-xxl {
    margin-right: 24px !important;
  }

  .m-r-xl-xxl {
    margin-right: 32px !important;
  }

  .m-r-xxl-xxl {
    margin-right: 40px !important;
  }

  .m-t-none-xxl {
    margin-top: 0px !important;
  }

  .m-t-xxs-xxl {
    margin-top: 4px !important;
  }

  .m-t-xs-xxl {
    margin-top: 8px !important;
  }

  .m-t-sm-xxl {
    margin-top: 12px !important;
  }

  .m-t-md-xxl {
    margin-top: 16px !important;
  }

  .m-t-lg-xxl {
    margin-top: 24px !important;
  }

  .m-t-xl-xxl {
    margin-top: 32px !important;
  }

  .m-t-xxl-xxl {
    margin-top: 40px !important;
  }

  .m-b-none-xxl {
    margin-bottom: 0px !important;
  }

  .m-b-xxs-xxl {
    margin-bottom: 4px !important;
  }

  .m-b-xs-xxl {
    margin-bottom: 8px !important;
  }

  .m-b-sm-xxl {
    margin-bottom: 12px !important;
  }

  .m-b-md-xxl {
    margin-bottom: 16px !important;
  }

  .m-b-lg-xxl {
    margin-bottom: 24px !important;
  }

  .m-b-xl-xxl {
    margin-bottom: 32px !important;
  }

  .m-b-xxl-xxl {
    margin-bottom: 40px !important;
  }

  .p-l-none-xxl {
    padding-left: 0px !important;
  }

  .p-l-xxs-xxl {
    padding-left: 4px !important;
  }

  .p-l-xs-xxl {
    padding-left: 8px !important;
  }

  .p-l-sm-xxl {
    padding-left: 12px !important;
  }

  .p-l-md-xxl {
    padding-left: 16px !important;
  }

  .p-l-lg-xxl {
    padding-left: 24px !important;
  }

  .p-l-xl-xxl {
    padding-left: 32px !important;
  }

  .p-l-xxl-xxl {
    padding-left: 40px !important;
  }

  .p-r-none-xxl {
    padding-right: 0px !important;
  }

  .p-r-xxs-xxl {
    padding-right: 4px !important;
  }

  .p-r-xs-xxl {
    padding-right: 8px !important;
  }

  .p-r-sm-xxl {
    padding-right: 12px !important;
  }

  .p-r-md-xxl {
    padding-right: 16px !important;
  }

  .p-r-lg-xxl {
    padding-right: 24px !important;
  }

  .p-r-xl-xxl {
    padding-right: 32px !important;
  }

  .p-r-xxl-xxl {
    padding-right: 40px !important;
  }

  .p-t-none-xxl {
    padding-top: 0px !important;
  }

  .p-t-xxs-xxl {
    padding-top: 4px !important;
  }

  .p-t-xs-xxl {
    padding-top: 8px !important;
  }

  .p-t-sm-xxl {
    padding-top: 12px !important;
  }

  .p-t-md-xxl {
    padding-top: 16px !important;
  }

  .p-t-lg-xxl {
    padding-top: 24px !important;
  }

  .p-t-xl-xxl {
    padding-top: 32px !important;
  }

  .p-t-xxl-xxl {
    padding-top: 40px !important;
  }

  .p-b-none-xxl {
    padding-bottom: 0px !important;
  }

  .p-b-xxs-xxl {
    padding-bottom: 4px !important;
  }

  .p-b-xs-xxl {
    padding-bottom: 8px !important;
  }

  .p-b-sm-xxl {
    padding-bottom: 12px !important;
  }

  .p-b-md-xxl {
    padding-bottom: 16px !important;
  }

  .p-b-lg-xxl {
    padding-bottom: 24px !important;
  }

  .p-b-xl-xxl {
    padding-bottom: 32px !important;
  }

  .p-b-xxl-xxl {
    padding-bottom: 40px !important;
  }

  .gap-none-xxl {
    gap: 0px !important;
  }

  .gap-xxs-xxl {
    gap: 4px !important;
  }

  .gap-xs-xxl {
    gap: 8px !important;
  }

  .gap-sm-xxl {
    gap: 12px !important;
  }

  .gap-md-xxl {
    gap: 16px !important;
  }

  .gap-lg-xxl {
    gap: 24px !important;
  }

  .gap-xl-xxl {
    gap: 32px !important;
  }

  .gap-xxl-xxl {
    gap: 40px !important;
  }
}
:checked .bg-transparent-checked,
.is-checked .bg-transparent-checked,
.is-active .bg-transparent-active,
.bg-transparent-active:active,
.bg-transparent-hover:hover,
.bg-transparent {
  background-color: transparent !important;
}
:checked .bg-white-checked,
.is-checked .bg-white-checked,
.is-active .bg-white-active,
.bg-white-active:active,
.bg-white-hover:hover,
.bg-white {
  background-color: #FFFFFF !important;
}
:checked .bg-body-checked,
.is-checked .bg-body-checked,
.is-active .bg-body-active,
.bg-body-active:active,
.bg-body-hover:hover,
.bg-body {
  background-color: #16202f !important;
}
:checked .bg-content-checked,
.is-checked .bg-content-checked,
.is-active .bg-content-active,
.bg-content-active:active,
.bg-content-hover:hover,
.bg-content {
  background-color: #1c283b !important;
}
:checked .bg-light-checked,
.is-checked .bg-light-checked,
.is-active .bg-light-active,
.bg-light-active:active,
.bg-light-hover:hover,
.bg-light {
  background-color: #182536 !important;
}
:checked .bg-popup-checked,
.is-checked .bg-popup-checked,
.is-active .bg-popup-active,
.bg-popup-active:active,
.bg-popup-hover:hover,
.bg-popup {
  background-color: #16202f !important;
}
:checked .bg-element-checked,
.is-checked .bg-element-checked,
.is-active .bg-element-active,
.bg-element-active:active,
.bg-element-hover:hover,
.bg-element {
  background-color: #213148 !important;
}
:checked .bg-hover-checked,
.is-checked .bg-hover-checked,
.is-active .bg-hover-active,
.bg-hover-active:active,
.bg-hover-hover:hover,
.bg-hover {
  background-color: #141c2a !important;
}
:checked .bg-active-checked,
.is-checked .bg-active-checked,
.is-active .bg-active-active,
.bg-active-active:active,
.bg-active-hover:hover,
.bg-active {
  background-color: #F6F9FB !important;
}
:checked .bg-title-checked,
.is-checked .bg-title-checked,
.is-active .bg-title-active,
.bg-title-active:active,
.bg-title-hover:hover,
.bg-title {
  background-color: #213148 !important;
}
:checked .bg-mask-checked,
.is-checked .bg-mask-checked,
.is-active .bg-mask-active,
.bg-mask-active:active,
.bg-mask-hover:hover,
.bg-mask {
  background-color: rgba(0, 0, 0, 0.6) !important;
}
:checked .text-regular-checked,
.is-checked .text-regular-checked,
.is-active .text-regular-active,
.text-regular-active:active,
.text-regular-hover:hover,
.text-regular {
  color: #899cae !important;
}
:checked .text-secondary-checked,
.is-checked .text-secondary-checked,
.is-active .text-secondary-active,
.text-secondary-active:active,
.text-secondary-hover:hover,
.text-secondary {
  color: #a0b4c8 !important;
}
:checked .text-light-checked,
.is-checked .text-light-checked,
.is-active .text-light-active,
.text-light-active:active,
.text-light-hover:hover,
.text-light {
  color: #364964 !important;
}
:checked .text-lightest-checked,
.is-checked .text-lightest-checked,
.is-active .text-lightest-active,
.text-lightest-active:active,
.text-lightest-hover:hover,
.text-lightest {
  color: #1F272C !important;
}
:checked .text-title-checked,
.is-checked .text-title-checked,
.is-active .text-title-active,
.text-title-active:active,
.text-title-hover:hover,
.text-title {
  color: #EBF0F4 !important;
}
:checked .text-link-checked,
.is-checked .text-link-checked,
.is-active .text-link-active,
.text-link-active:active,
.text-link-hover:hover,
.text-link {
  color: #7F60F9 !important;
}
:checked .text-hover-checked,
.is-checked .text-hover-checked,
.is-active .text-hover-active,
.text-hover-active:active,
.text-hover-hover:hover,
.text-hover {
  color: #7F60F9 !important;
}
:checked .text-inverse-checked,
.is-checked .text-inverse-checked,
.is-active .text-inverse-active,
.text-inverse-active:active,
.text-inverse-hover:hover,
.text-inverse {
  color: #FFFFFF !important;
}
:checked .text-inherit-checked,
.is-checked .text-inherit-checked,
.is-active .text-inherit-active,
.text-inherit-active:active,
.text-inherit-hover:hover,
.text-inherit {
  color: inherit !important;
}
:checked .text-current-checked,
.is-checked .text-current-checked,
.is-active .text-current-active,
.text-current-active:active,
.text-current-hover:hover,
.text-current {
  color: currentColor !important;
}
:checked .border-transparent-checked,
.is-checked .border-transparent-checked,
.is-active .border-transparent-active,
.border-transparent-active:active,
.border-transparent-hover:hover,
.border-transparent {
  border-color: transparent !important;
}
:checked .border-regular-checked,
.is-checked .border-regular-checked,
.is-active .border-regular-active,
.border-regular-active:active,
.border-regular-hover:hover,
.border-regular {
  border-color: #233042 !important;
}
:checked .border-light-checked,
.is-checked .border-light-checked,
.is-active .border-light-active,
.border-light-active:active,
.border-light-hover:hover,
.border-light {
  border-color: #334D5B !important;
}
:checked .border-dark-checked,
.is-checked .border-dark-checked,
.is-active .border-dark-active,
.border-dark-active:active,
.border-dark-hover:hover,
.border-dark {
  border-color: #CDCFD8 !important;
}
:checked .text-primary-checked,
.is-checked .text-primary-checked,
.is-active .text-primary-active,
.text-primary-active:active,
.text-primary-hover:hover,
.text-primary {
  color: #3699ff !important;
}
:checked .bg-primary-checked,
.is-checked .bg-primary-checked,
.is-active .bg-primary-active,
.bg-primary-active:active,
.bg-primary-hover:hover,
.bg-primary {
  background-color: #3699ff !important;
}
:checked .bg-primary-checked.light-1,
.is-checked .bg-primary-checked.light-1,
.is-active .bg-primary-active.light-1,
.bg-primary-active:active.light-1,
.bg-primary-hover:hover.light-1,
.bg-primary.light-1 {
  background-color: #007bfa !important;
}
:checked .bg-primary-checked.light-2,
.is-checked .bg-primary-checked.light-2,
.is-active .bg-primary-active.light-2,
.bg-primary-active:active.light-2,
.bg-primary-hover:hover.light-2,
.bg-primary.light-2 {
  background-color: #0060c3 !important;
}
:checked .bg-primary-checked.light-3,
.is-checked .bg-primary-checked.light-3,
.is-active .bg-primary-active.light-3,
.bg-primary-active:active.light-3,
.bg-primary-hover:hover.light-3,
.bg-primary.light-3 {
  background-color: #00458d !important;
}
:checked .bg-primary-checked.light-4,
.is-checked .bg-primary-checked.light-4,
.is-active .bg-primary-active.light-4,
.bg-primary-active:active.light-4,
.bg-primary-hover:hover.light-4,
.bg-primary.light-4 {
  background-color: #002a55 !important;
}
:checked .bg-primary-checked.light-5,
.is-checked .bg-primary-checked.light-5,
.is-active .bg-primary-active.light-5,
.bg-primary-active:active.light-5,
.bg-primary-hover:hover.light-5,
.bg-primary.light-5 {
  background-color: #001e3e !important;
}
:checked .bg-primary-checked.dark-1,
.is-checked .bg-primary-checked.dark-1,
.is-active .bg-primary-active.dark-1,
.bg-primary-active:active.dark-1,
.bg-primary-hover:hover.dark-1,
.bg-primary.dark-1 {
  background-color: #5aabff !important;
}
:checked .bg-primary-checked.dark-2,
.is-checked .bg-primary-checked.dark-2,
.is-active .bg-primary-active.dark-2,
.bg-primary-active:active.dark-2,
.bg-primary-hover:hover.dark-2,
.bg-primary.dark-2 {
  background-color: #7ebeff !important;
}
:checked .bg-primary-checked.dark-3,
.is-checked .bg-primary-checked.dark-3,
.is-active .bg-primary-active.dark-3,
.bg-primary-active:active.dark-3,
.bg-primary-hover:hover.dark-3,
.bg-primary.dark-3 {
  background-color: #a3d0ff !important;
}
:checked .bg-primary-checked.dark-4,
.is-checked .bg-primary-checked.dark-4,
.is-active .bg-primary-active.dark-4,
.bg-primary-active:active.dark-4,
.bg-primary-hover:hover.dark-4,
.bg-primary.dark-4 {
  background-color: #cbe5ff !important;
}
:checked .bg-primary-checked.dark-5,
.is-checked .bg-primary-checked.dark-5,
.is-active .bg-primary-active.dark-5,
.bg-primary-active:active.dark-5,
.bg-primary-hover:hover.dark-5,
.bg-primary.dark-5 {
  background-color: #eaf4ff !important;
}
:checked .bg-primary-checked.opacity-1,
.is-checked .bg-primary-checked.opacity-1,
.is-active .bg-primary-active.opacity-1,
.bg-primary-active:active.opacity-1,
.bg-primary-hover:hover.opacity-1,
.bg-primary.opacity-1 {
  background-color: rgba(54, 153, 255, 0.08) !important;
}
:checked .bg-primary-checked.opacity-2,
.is-checked .bg-primary-checked.opacity-2,
.is-active .bg-primary-active.opacity-2,
.bg-primary-active:active.opacity-2,
.bg-primary-hover:hover.opacity-2,
.bg-primary.opacity-2 {
  background-color: rgba(54, 153, 255, 0.16) !important;
}
:checked .bg-primary-checked.opacity-3,
.is-checked .bg-primary-checked.opacity-3,
.is-active .bg-primary-active.opacity-3,
.bg-primary-active:active.opacity-3,
.bg-primary-hover:hover.opacity-3,
.bg-primary.opacity-3 {
  background-color: rgba(54, 153, 255, 0.24) !important;
}
:checked .bg-primary-checked.opacity-4,
.is-checked .bg-primary-checked.opacity-4,
.is-active .bg-primary-active.opacity-4,
.bg-primary-active:active.opacity-4,
.bg-primary-hover:hover.opacity-4,
.bg-primary.opacity-4 {
  background-color: rgba(54, 153, 255, 0.32) !important;
}
:checked .bg-primary-checked.opacity-5,
.is-checked .bg-primary-checked.opacity-5,
.is-active .bg-primary-active.opacity-5,
.bg-primary-active:active.opacity-5,
.bg-primary-hover:hover.opacity-5,
.bg-primary.opacity-5 {
  background-color: rgba(54, 153, 255, 0.4) !important;
}
:checked .bg-primary-checked.opacity-6,
.is-checked .bg-primary-checked.opacity-6,
.is-active .bg-primary-active.opacity-6,
.bg-primary-active:active.opacity-6,
.bg-primary-hover:hover.opacity-6,
.bg-primary.opacity-6 {
  background-color: rgba(54, 153, 255, 0.48) !important;
}
:checked .bg-primary-checked.opacity-7,
.is-checked .bg-primary-checked.opacity-7,
.is-active .bg-primary-active.opacity-7,
.bg-primary-active:active.opacity-7,
.bg-primary-hover:hover.opacity-7,
.bg-primary.opacity-7 {
  background-color: rgba(54, 153, 255, 0.56) !important;
}
:checked .bg-primary-checked.opacity-8,
.is-checked .bg-primary-checked.opacity-8,
.is-active .bg-primary-active.opacity-8,
.bg-primary-active:active.opacity-8,
.bg-primary-hover:hover.opacity-8,
.bg-primary.opacity-8 {
  background-color: rgba(54, 153, 255, 0.64) !important;
}
:checked .bg-primary-checked.opacity-9,
.is-checked .bg-primary-checked.opacity-9,
.is-active .bg-primary-active.opacity-9,
.bg-primary-active:active.opacity-9,
.bg-primary-hover:hover.opacity-9,
.bg-primary.opacity-9 {
  background-color: rgba(54, 153, 255, 0.72) !important;
}
:checked .border-primary-checked,
.is-checked .border-primary-checked,
.is-active .border-primary-active,
.border-primary-active:active,
.border-primary-hover:hover,
.border-primary {
  border-color: #3699ff !important;
}
:checked .border-primary-checked.border-light-1,
.is-checked .border-primary-checked.border-light-1,
.is-active .border-primary-active.border-light-1,
.border-primary-active:active.border-light-1,
.border-primary-hover:hover.border-light-1,
.border-primary.border-light-1 {
  border-color: #007bfa !important;
}
:checked .border-primary-checked.border-light-2,
.is-checked .border-primary-checked.border-light-2,
.is-active .border-primary-active.border-light-2,
.border-primary-active:active.border-light-2,
.border-primary-hover:hover.border-light-2,
.border-primary.border-light-2 {
  border-color: #0060c3 !important;
}
:checked .border-primary-checked.border-light-3,
.is-checked .border-primary-checked.border-light-3,
.is-active .border-primary-active.border-light-3,
.border-primary-active:active.border-light-3,
.border-primary-hover:hover.border-light-3,
.border-primary.border-light-3 {
  border-color: #00458d !important;
}
:checked .border-primary-checked.border-light-4,
.is-checked .border-primary-checked.border-light-4,
.is-active .border-primary-active.border-light-4,
.border-primary-active:active.border-light-4,
.border-primary-hover:hover.border-light-4,
.border-primary.border-light-4 {
  border-color: #002a55 !important;
}
:checked .border-primary-checked.border-light-5,
.is-checked .border-primary-checked.border-light-5,
.is-active .border-primary-active.border-light-5,
.border-primary-active:active.border-light-5,
.border-primary-hover:hover.border-light-5,
.border-primary.border-light-5 {
  border-color: #001e3e !important;
}
:checked .border-primary-checked.border-dark-1,
.is-checked .border-primary-checked.border-dark-1,
.is-active .border-primary-active.border-dark-1,
.border-primary-active:active.border-dark-1,
.border-primary-hover:hover.border-dark-1,
.border-primary.border-dark-1 {
  border-color: #5aabff !important;
}
:checked .border-primary-checked.border-dark-2,
.is-checked .border-primary-checked.border-dark-2,
.is-active .border-primary-active.border-dark-2,
.border-primary-active:active.border-dark-2,
.border-primary-hover:hover.border-dark-2,
.border-primary.border-dark-2 {
  border-color: #7ebeff !important;
}
:checked .border-primary-checked.border-dark-3,
.is-checked .border-primary-checked.border-dark-3,
.is-active .border-primary-active.border-dark-3,
.border-primary-active:active.border-dark-3,
.border-primary-hover:hover.border-dark-3,
.border-primary.border-dark-3 {
  border-color: #a3d0ff !important;
}
:checked .border-primary-checked.border-dark-4,
.is-checked .border-primary-checked.border-dark-4,
.is-active .border-primary-active.border-dark-4,
.border-primary-active:active.border-dark-4,
.border-primary-hover:hover.border-dark-4,
.border-primary.border-dark-4 {
  border-color: #cbe5ff !important;
}
:checked .border-primary-checked.border-dark-5,
.is-checked .border-primary-checked.border-dark-5,
.is-active .border-primary-active.border-dark-5,
.border-primary-active:active.border-dark-5,
.border-primary-hover:hover.border-dark-5,
.border-primary.border-dark-5 {
  border-color: #eaf4ff !important;
}
:checked .border-primary-checked.border-opacity-1,
.is-checked .border-primary-checked.border-opacity-1,
.is-active .border-primary-active.border-opacity-1,
.border-primary-active:active.border-opacity-1,
.border-primary-hover:hover.border-opacity-1,
.border-primary.border-opacity-1 {
  border-color: rgba(54, 153, 255, 0.08) !important;
}
:checked .border-primary-checked.border-opacity-2,
.is-checked .border-primary-checked.border-opacity-2,
.is-active .border-primary-active.border-opacity-2,
.border-primary-active:active.border-opacity-2,
.border-primary-hover:hover.border-opacity-2,
.border-primary.border-opacity-2 {
  border-color: rgba(54, 153, 255, 0.16) !important;
}
:checked .border-primary-checked.border-opacity-3,
.is-checked .border-primary-checked.border-opacity-3,
.is-active .border-primary-active.border-opacity-3,
.border-primary-active:active.border-opacity-3,
.border-primary-hover:hover.border-opacity-3,
.border-primary.border-opacity-3 {
  border-color: rgba(54, 153, 255, 0.24) !important;
}
:checked .border-primary-checked.border-opacity-4,
.is-checked .border-primary-checked.border-opacity-4,
.is-active .border-primary-active.border-opacity-4,
.border-primary-active:active.border-opacity-4,
.border-primary-hover:hover.border-opacity-4,
.border-primary.border-opacity-4 {
  border-color: rgba(54, 153, 255, 0.32) !important;
}
:checked .border-primary-checked.border-opacity-5,
.is-checked .border-primary-checked.border-opacity-5,
.is-active .border-primary-active.border-opacity-5,
.border-primary-active:active.border-opacity-5,
.border-primary-hover:hover.border-opacity-5,
.border-primary.border-opacity-5 {
  border-color: rgba(54, 153, 255, 0.4) !important;
}
:checked .border-primary-checked.border-opacity-6,
.is-checked .border-primary-checked.border-opacity-6,
.is-active .border-primary-active.border-opacity-6,
.border-primary-active:active.border-opacity-6,
.border-primary-hover:hover.border-opacity-6,
.border-primary.border-opacity-6 {
  border-color: rgba(54, 153, 255, 0.48) !important;
}
:checked .border-primary-checked.border-opacity-7,
.is-checked .border-primary-checked.border-opacity-7,
.is-active .border-primary-active.border-opacity-7,
.border-primary-active:active.border-opacity-7,
.border-primary-hover:hover.border-opacity-7,
.border-primary.border-opacity-7 {
  border-color: rgba(54, 153, 255, 0.56) !important;
}
:checked .border-primary-checked.border-opacity-8,
.is-checked .border-primary-checked.border-opacity-8,
.is-active .border-primary-active.border-opacity-8,
.border-primary-active:active.border-opacity-8,
.border-primary-hover:hover.border-opacity-8,
.border-primary.border-opacity-8 {
  border-color: rgba(54, 153, 255, 0.64) !important;
}
:checked .border-primary-checked.border-opacity-9,
.is-checked .border-primary-checked.border-opacity-9,
.is-active .border-primary-active.border-opacity-9,
.border-primary-active:active.border-opacity-9,
.border-primary-hover:hover.border-opacity-9,
.border-primary.border-opacity-9 {
  border-color: rgba(54, 153, 255, 0.72) !important;
}
:checked .text-success-checked,
.is-checked .text-success-checked,
.is-active .text-success-active,
.text-success-active:active,
.text-success-hover:hover,
.text-success {
  color: #0bb783 !important;
}
:checked .bg-success-checked,
.is-checked .bg-success-checked,
.is-active .bg-success-active,
.bg-success-active:active,
.bg-success-hover:hover,
.bg-success {
  background-color: #0bb783 !important;
}
:checked .bg-success-checked.light-1,
.is-checked .bg-success-checked.light-1,
.is-active .bg-success-active.light-1,
.bg-success-active:active.light-1,
.bg-success-hover:hover.light-1,
.bg-success.light-1 {
  background-color: #09946a !important;
}
:checked .bg-success-checked.light-2,
.is-checked .bg-success-checked.light-2,
.is-active .bg-success-active.light-2,
.bg-success-active:active.light-2,
.bg-success-hover:hover.light-2,
.bg-success.light-2 {
  background-color: #077353 !important;
}
:checked .bg-success-checked.light-3,
.is-checked .bg-success-checked.light-3,
.is-active .bg-success-active.light-3,
.bg-success-active:active.light-3,
.bg-success-hover:hover.light-3,
.bg-success.light-3 {
  background-color: #05533c !important;
}
:checked .bg-success-checked.light-4,
.is-checked .bg-success-checked.light-4,
.is-active .bg-success-active.light-4,
.bg-success-active:active.light-4,
.bg-success-hover:hover.light-4,
.bg-success.light-4 {
  background-color: #033224 !important;
}
:checked .bg-success-checked.light-5,
.is-checked .bg-success-checked.light-5,
.is-active .bg-success-active.light-5,
.bg-success-active:active.light-5,
.bg-success-hover:hover.light-5,
.bg-success.light-5 {
  background-color: #02251a !important;
}
:checked .bg-success-checked.dark-1,
.is-checked .bg-success-checked.dark-1,
.is-active .bg-success-active.dark-1,
.bg-success-active:active.dark-1,
.bg-success-hover:hover.dark-1,
.bg-success.dark-1 {
  background-color: #0eeda9 !important;
}
:checked .bg-success-checked.dark-2,
.is-checked .bg-success-checked.dark-2,
.is-active .bg-success-active.dark-2,
.bg-success-active:active.dark-2,
.bg-success-hover:hover.dark-2,
.bg-success.dark-2 {
  background-color: #40f4bd !important;
}
:checked .bg-success-checked.dark-3,
.is-checked .bg-success-checked.dark-3,
.is-active .bg-success-active.dark-3,
.bg-success-active:active.dark-3,
.bg-success-hover:hover.dark-3,
.bg-success.dark-3 {
  background-color: #76f7d0 !important;
}
:checked .bg-success-checked.dark-4,
.is-checked .bg-success-checked.dark-4,
.is-active .bg-success-active.dark-4,
.bg-success-active:active.dark-4,
.bg-success-hover:hover.dark-4,
.bg-success.dark-4 {
  background-color: #b2fae5 !important;
}
:checked .bg-success-checked.dark-5,
.is-checked .bg-success-checked.dark-5,
.is-active .bg-success-active.dark-5,
.bg-success-active:active.dark-5,
.bg-success-hover:hover.dark-5,
.bg-success.dark-5 {
  background-color: #e0fdf4 !important;
}
:checked .bg-success-checked.opacity-1,
.is-checked .bg-success-checked.opacity-1,
.is-active .bg-success-active.opacity-1,
.bg-success-active:active.opacity-1,
.bg-success-hover:hover.opacity-1,
.bg-success.opacity-1 {
  background-color: rgba(11, 183, 131, 0.08) !important;
}
:checked .bg-success-checked.opacity-2,
.is-checked .bg-success-checked.opacity-2,
.is-active .bg-success-active.opacity-2,
.bg-success-active:active.opacity-2,
.bg-success-hover:hover.opacity-2,
.bg-success.opacity-2 {
  background-color: rgba(11, 183, 131, 0.16) !important;
}
:checked .bg-success-checked.opacity-3,
.is-checked .bg-success-checked.opacity-3,
.is-active .bg-success-active.opacity-3,
.bg-success-active:active.opacity-3,
.bg-success-hover:hover.opacity-3,
.bg-success.opacity-3 {
  background-color: rgba(11, 183, 131, 0.24) !important;
}
:checked .bg-success-checked.opacity-4,
.is-checked .bg-success-checked.opacity-4,
.is-active .bg-success-active.opacity-4,
.bg-success-active:active.opacity-4,
.bg-success-hover:hover.opacity-4,
.bg-success.opacity-4 {
  background-color: rgba(11, 183, 131, 0.32) !important;
}
:checked .bg-success-checked.opacity-5,
.is-checked .bg-success-checked.opacity-5,
.is-active .bg-success-active.opacity-5,
.bg-success-active:active.opacity-5,
.bg-success-hover:hover.opacity-5,
.bg-success.opacity-5 {
  background-color: rgba(11, 183, 131, 0.4) !important;
}
:checked .bg-success-checked.opacity-6,
.is-checked .bg-success-checked.opacity-6,
.is-active .bg-success-active.opacity-6,
.bg-success-active:active.opacity-6,
.bg-success-hover:hover.opacity-6,
.bg-success.opacity-6 {
  background-color: rgba(11, 183, 131, 0.48) !important;
}
:checked .bg-success-checked.opacity-7,
.is-checked .bg-success-checked.opacity-7,
.is-active .bg-success-active.opacity-7,
.bg-success-active:active.opacity-7,
.bg-success-hover:hover.opacity-7,
.bg-success.opacity-7 {
  background-color: rgba(11, 183, 131, 0.56) !important;
}
:checked .bg-success-checked.opacity-8,
.is-checked .bg-success-checked.opacity-8,
.is-active .bg-success-active.opacity-8,
.bg-success-active:active.opacity-8,
.bg-success-hover:hover.opacity-8,
.bg-success.opacity-8 {
  background-color: rgba(11, 183, 131, 0.64) !important;
}
:checked .bg-success-checked.opacity-9,
.is-checked .bg-success-checked.opacity-9,
.is-active .bg-success-active.opacity-9,
.bg-success-active:active.opacity-9,
.bg-success-hover:hover.opacity-9,
.bg-success.opacity-9 {
  background-color: rgba(11, 183, 131, 0.72) !important;
}
:checked .border-success-checked,
.is-checked .border-success-checked,
.is-active .border-success-active,
.border-success-active:active,
.border-success-hover:hover,
.border-success {
  border-color: #0bb783 !important;
}
:checked .border-success-checked.border-light-1,
.is-checked .border-success-checked.border-light-1,
.is-active .border-success-active.border-light-1,
.border-success-active:active.border-light-1,
.border-success-hover:hover.border-light-1,
.border-success.border-light-1 {
  border-color: #09946a !important;
}
:checked .border-success-checked.border-light-2,
.is-checked .border-success-checked.border-light-2,
.is-active .border-success-active.border-light-2,
.border-success-active:active.border-light-2,
.border-success-hover:hover.border-light-2,
.border-success.border-light-2 {
  border-color: #077353 !important;
}
:checked .border-success-checked.border-light-3,
.is-checked .border-success-checked.border-light-3,
.is-active .border-success-active.border-light-3,
.border-success-active:active.border-light-3,
.border-success-hover:hover.border-light-3,
.border-success.border-light-3 {
  border-color: #05533c !important;
}
:checked .border-success-checked.border-light-4,
.is-checked .border-success-checked.border-light-4,
.is-active .border-success-active.border-light-4,
.border-success-active:active.border-light-4,
.border-success-hover:hover.border-light-4,
.border-success.border-light-4 {
  border-color: #033224 !important;
}
:checked .border-success-checked.border-light-5,
.is-checked .border-success-checked.border-light-5,
.is-active .border-success-active.border-light-5,
.border-success-active:active.border-light-5,
.border-success-hover:hover.border-light-5,
.border-success.border-light-5 {
  border-color: #02251a !important;
}
:checked .border-success-checked.border-dark-1,
.is-checked .border-success-checked.border-dark-1,
.is-active .border-success-active.border-dark-1,
.border-success-active:active.border-dark-1,
.border-success-hover:hover.border-dark-1,
.border-success.border-dark-1 {
  border-color: #0eeda9 !important;
}
:checked .border-success-checked.border-dark-2,
.is-checked .border-success-checked.border-dark-2,
.is-active .border-success-active.border-dark-2,
.border-success-active:active.border-dark-2,
.border-success-hover:hover.border-dark-2,
.border-success.border-dark-2 {
  border-color: #40f4bd !important;
}
:checked .border-success-checked.border-dark-3,
.is-checked .border-success-checked.border-dark-3,
.is-active .border-success-active.border-dark-3,
.border-success-active:active.border-dark-3,
.border-success-hover:hover.border-dark-3,
.border-success.border-dark-3 {
  border-color: #76f7d0 !important;
}
:checked .border-success-checked.border-dark-4,
.is-checked .border-success-checked.border-dark-4,
.is-active .border-success-active.border-dark-4,
.border-success-active:active.border-dark-4,
.border-success-hover:hover.border-dark-4,
.border-success.border-dark-4 {
  border-color: #b2fae5 !important;
}
:checked .border-success-checked.border-dark-5,
.is-checked .border-success-checked.border-dark-5,
.is-active .border-success-active.border-dark-5,
.border-success-active:active.border-dark-5,
.border-success-hover:hover.border-dark-5,
.border-success.border-dark-5 {
  border-color: #e0fdf4 !important;
}
:checked .border-success-checked.border-opacity-1,
.is-checked .border-success-checked.border-opacity-1,
.is-active .border-success-active.border-opacity-1,
.border-success-active:active.border-opacity-1,
.border-success-hover:hover.border-opacity-1,
.border-success.border-opacity-1 {
  border-color: rgba(11, 183, 131, 0.08) !important;
}
:checked .border-success-checked.border-opacity-2,
.is-checked .border-success-checked.border-opacity-2,
.is-active .border-success-active.border-opacity-2,
.border-success-active:active.border-opacity-2,
.border-success-hover:hover.border-opacity-2,
.border-success.border-opacity-2 {
  border-color: rgba(11, 183, 131, 0.16) !important;
}
:checked .border-success-checked.border-opacity-3,
.is-checked .border-success-checked.border-opacity-3,
.is-active .border-success-active.border-opacity-3,
.border-success-active:active.border-opacity-3,
.border-success-hover:hover.border-opacity-3,
.border-success.border-opacity-3 {
  border-color: rgba(11, 183, 131, 0.24) !important;
}
:checked .border-success-checked.border-opacity-4,
.is-checked .border-success-checked.border-opacity-4,
.is-active .border-success-active.border-opacity-4,
.border-success-active:active.border-opacity-4,
.border-success-hover:hover.border-opacity-4,
.border-success.border-opacity-4 {
  border-color: rgba(11, 183, 131, 0.32) !important;
}
:checked .border-success-checked.border-opacity-5,
.is-checked .border-success-checked.border-opacity-5,
.is-active .border-success-active.border-opacity-5,
.border-success-active:active.border-opacity-5,
.border-success-hover:hover.border-opacity-5,
.border-success.border-opacity-5 {
  border-color: rgba(11, 183, 131, 0.4) !important;
}
:checked .border-success-checked.border-opacity-6,
.is-checked .border-success-checked.border-opacity-6,
.is-active .border-success-active.border-opacity-6,
.border-success-active:active.border-opacity-6,
.border-success-hover:hover.border-opacity-6,
.border-success.border-opacity-6 {
  border-color: rgba(11, 183, 131, 0.48) !important;
}
:checked .border-success-checked.border-opacity-7,
.is-checked .border-success-checked.border-opacity-7,
.is-active .border-success-active.border-opacity-7,
.border-success-active:active.border-opacity-7,
.border-success-hover:hover.border-opacity-7,
.border-success.border-opacity-7 {
  border-color: rgba(11, 183, 131, 0.56) !important;
}
:checked .border-success-checked.border-opacity-8,
.is-checked .border-success-checked.border-opacity-8,
.is-active .border-success-active.border-opacity-8,
.border-success-active:active.border-opacity-8,
.border-success-hover:hover.border-opacity-8,
.border-success.border-opacity-8 {
  border-color: rgba(11, 183, 131, 0.64) !important;
}
:checked .border-success-checked.border-opacity-9,
.is-checked .border-success-checked.border-opacity-9,
.is-active .border-success-active.border-opacity-9,
.border-success-active:active.border-opacity-9,
.border-success-hover:hover.border-opacity-9,
.border-success.border-opacity-9 {
  border-color: rgba(11, 183, 131, 0.72) !important;
}
:checked .text-danger-checked,
.is-checked .text-danger-checked,
.is-active .text-danger-active,
.text-danger-active:active,
.text-danger-hover:hover,
.text-danger {
  color: #F64E60 !important;
}
:checked .bg-danger-checked,
.is-checked .bg-danger-checked,
.is-active .bg-danger-active,
.bg-danger-active:active,
.bg-danger-hover:hover,
.bg-danger {
  background-color: #F64E60 !important;
}
:checked .bg-danger-checked.light-1,
.is-checked .bg-danger-checked.light-1,
.is-active .bg-danger-active.light-1,
.bg-danger-active:active.light-1,
.bg-danger-hover:hover.light-1,
.bg-danger.light-1 {
  background-color: #f3132b !important;
}
:checked .bg-danger-checked.light-2,
.is-checked .bg-danger-checked.light-2,
.is-active .bg-danger-active.light-2,
.bg-danger-active:active.light-2,
.bg-danger-hover:hover.light-2,
.bg-danger.light-2 {
  background-color: #c20a1e !important;
}
:checked .bg-danger-checked.light-3,
.is-checked .bg-danger-checked.light-3,
.is-active .bg-danger-active.light-3,
.bg-danger-active:active.light-3,
.bg-danger-hover:hover.light-3,
.bg-danger.light-3 {
  background-color: #8c0715 !important;
}
:checked .bg-danger-checked.light-4,
.is-checked .bg-danger-checked.light-4,
.is-active .bg-danger-active.light-4,
.bg-danger-active:active.light-4,
.bg-danger-hover:hover.light-4,
.bg-danger.light-4 {
  background-color: #55040d !important;
}
:checked .bg-danger-checked.light-5,
.is-checked .bg-danger-checked.light-5,
.is-active .bg-danger-active.light-5,
.bg-danger-active:active.light-5,
.bg-danger-hover:hover.light-5,
.bg-danger.light-5 {
  background-color: #3e0309 !important;
}
:checked .bg-danger-checked.dark-1,
.is-checked .bg-danger-checked.dark-1,
.is-active .bg-danger-active.dark-1,
.bg-danger-active:active.dark-1,
.bg-danger-hover:hover.dark-1,
.bg-danger.dark-1 {
  background-color: #f86e7d !important;
}
:checked .bg-danger-checked.dark-2,
.is-checked .bg-danger-checked.dark-2,
.is-active .bg-danger-active.dark-2,
.bg-danger-active:active.dark-2,
.bg-danger-hover:hover.dark-2,
.bg-danger.dark-2 {
  background-color: #f98e99 !important;
}
:checked .bg-danger-checked.dark-3,
.is-checked .bg-danger-checked.dark-3,
.is-active .bg-danger-active.dark-3,
.bg-danger-active:active.dark-3,
.bg-danger-hover:hover.dark-3,
.bg-danger.dark-3 {
  background-color: #fbaeb6 !important;
}
:checked .bg-danger-checked.dark-4,
.is-checked .bg-danger-checked.dark-4,
.is-active .bg-danger-active.dark-4,
.bg-danger-active:active.dark-4,
.bg-danger-hover:hover.dark-4,
.bg-danger.dark-4 {
  background-color: #fdd1d6 !important;
}
:checked .bg-danger-checked.dark-5,
.is-checked .bg-danger-checked.dark-5,
.is-active .bg-danger-active.dark-5,
.bg-danger-active:active.dark-5,
.bg-danger-hover:hover.dark-5,
.bg-danger.dark-5 {
  background-color: #feedef !important;
}
:checked .bg-danger-checked.opacity-1,
.is-checked .bg-danger-checked.opacity-1,
.is-active .bg-danger-active.opacity-1,
.bg-danger-active:active.opacity-1,
.bg-danger-hover:hover.opacity-1,
.bg-danger.opacity-1 {
  background-color: rgba(246, 78, 96, 0.08) !important;
}
:checked .bg-danger-checked.opacity-2,
.is-checked .bg-danger-checked.opacity-2,
.is-active .bg-danger-active.opacity-2,
.bg-danger-active:active.opacity-2,
.bg-danger-hover:hover.opacity-2,
.bg-danger.opacity-2 {
  background-color: rgba(246, 78, 96, 0.16) !important;
}
:checked .bg-danger-checked.opacity-3,
.is-checked .bg-danger-checked.opacity-3,
.is-active .bg-danger-active.opacity-3,
.bg-danger-active:active.opacity-3,
.bg-danger-hover:hover.opacity-3,
.bg-danger.opacity-3 {
  background-color: rgba(246, 78, 96, 0.24) !important;
}
:checked .bg-danger-checked.opacity-4,
.is-checked .bg-danger-checked.opacity-4,
.is-active .bg-danger-active.opacity-4,
.bg-danger-active:active.opacity-4,
.bg-danger-hover:hover.opacity-4,
.bg-danger.opacity-4 {
  background-color: rgba(246, 78, 96, 0.32) !important;
}
:checked .bg-danger-checked.opacity-5,
.is-checked .bg-danger-checked.opacity-5,
.is-active .bg-danger-active.opacity-5,
.bg-danger-active:active.opacity-5,
.bg-danger-hover:hover.opacity-5,
.bg-danger.opacity-5 {
  background-color: rgba(246, 78, 96, 0.4) !important;
}
:checked .bg-danger-checked.opacity-6,
.is-checked .bg-danger-checked.opacity-6,
.is-active .bg-danger-active.opacity-6,
.bg-danger-active:active.opacity-6,
.bg-danger-hover:hover.opacity-6,
.bg-danger.opacity-6 {
  background-color: rgba(246, 78, 96, 0.48) !important;
}
:checked .bg-danger-checked.opacity-7,
.is-checked .bg-danger-checked.opacity-7,
.is-active .bg-danger-active.opacity-7,
.bg-danger-active:active.opacity-7,
.bg-danger-hover:hover.opacity-7,
.bg-danger.opacity-7 {
  background-color: rgba(246, 78, 96, 0.56) !important;
}
:checked .bg-danger-checked.opacity-8,
.is-checked .bg-danger-checked.opacity-8,
.is-active .bg-danger-active.opacity-8,
.bg-danger-active:active.opacity-8,
.bg-danger-hover:hover.opacity-8,
.bg-danger.opacity-8 {
  background-color: rgba(246, 78, 96, 0.64) !important;
}
:checked .bg-danger-checked.opacity-9,
.is-checked .bg-danger-checked.opacity-9,
.is-active .bg-danger-active.opacity-9,
.bg-danger-active:active.opacity-9,
.bg-danger-hover:hover.opacity-9,
.bg-danger.opacity-9 {
  background-color: rgba(246, 78, 96, 0.72) !important;
}
:checked .border-danger-checked,
.is-checked .border-danger-checked,
.is-active .border-danger-active,
.border-danger-active:active,
.border-danger-hover:hover,
.border-danger {
  border-color: #F64E60 !important;
}
:checked .border-danger-checked.border-light-1,
.is-checked .border-danger-checked.border-light-1,
.is-active .border-danger-active.border-light-1,
.border-danger-active:active.border-light-1,
.border-danger-hover:hover.border-light-1,
.border-danger.border-light-1 {
  border-color: #f3132b !important;
}
:checked .border-danger-checked.border-light-2,
.is-checked .border-danger-checked.border-light-2,
.is-active .border-danger-active.border-light-2,
.border-danger-active:active.border-light-2,
.border-danger-hover:hover.border-light-2,
.border-danger.border-light-2 {
  border-color: #c20a1e !important;
}
:checked .border-danger-checked.border-light-3,
.is-checked .border-danger-checked.border-light-3,
.is-active .border-danger-active.border-light-3,
.border-danger-active:active.border-light-3,
.border-danger-hover:hover.border-light-3,
.border-danger.border-light-3 {
  border-color: #8c0715 !important;
}
:checked .border-danger-checked.border-light-4,
.is-checked .border-danger-checked.border-light-4,
.is-active .border-danger-active.border-light-4,
.border-danger-active:active.border-light-4,
.border-danger-hover:hover.border-light-4,
.border-danger.border-light-4 {
  border-color: #55040d !important;
}
:checked .border-danger-checked.border-light-5,
.is-checked .border-danger-checked.border-light-5,
.is-active .border-danger-active.border-light-5,
.border-danger-active:active.border-light-5,
.border-danger-hover:hover.border-light-5,
.border-danger.border-light-5 {
  border-color: #3e0309 !important;
}
:checked .border-danger-checked.border-dark-1,
.is-checked .border-danger-checked.border-dark-1,
.is-active .border-danger-active.border-dark-1,
.border-danger-active:active.border-dark-1,
.border-danger-hover:hover.border-dark-1,
.border-danger.border-dark-1 {
  border-color: #f86e7d !important;
}
:checked .border-danger-checked.border-dark-2,
.is-checked .border-danger-checked.border-dark-2,
.is-active .border-danger-active.border-dark-2,
.border-danger-active:active.border-dark-2,
.border-danger-hover:hover.border-dark-2,
.border-danger.border-dark-2 {
  border-color: #f98e99 !important;
}
:checked .border-danger-checked.border-dark-3,
.is-checked .border-danger-checked.border-dark-3,
.is-active .border-danger-active.border-dark-3,
.border-danger-active:active.border-dark-3,
.border-danger-hover:hover.border-dark-3,
.border-danger.border-dark-3 {
  border-color: #fbaeb6 !important;
}
:checked .border-danger-checked.border-dark-4,
.is-checked .border-danger-checked.border-dark-4,
.is-active .border-danger-active.border-dark-4,
.border-danger-active:active.border-dark-4,
.border-danger-hover:hover.border-dark-4,
.border-danger.border-dark-4 {
  border-color: #fdd1d6 !important;
}
:checked .border-danger-checked.border-dark-5,
.is-checked .border-danger-checked.border-dark-5,
.is-active .border-danger-active.border-dark-5,
.border-danger-active:active.border-dark-5,
.border-danger-hover:hover.border-dark-5,
.border-danger.border-dark-5 {
  border-color: #feedef !important;
}
:checked .border-danger-checked.border-opacity-1,
.is-checked .border-danger-checked.border-opacity-1,
.is-active .border-danger-active.border-opacity-1,
.border-danger-active:active.border-opacity-1,
.border-danger-hover:hover.border-opacity-1,
.border-danger.border-opacity-1 {
  border-color: rgba(246, 78, 96, 0.08) !important;
}
:checked .border-danger-checked.border-opacity-2,
.is-checked .border-danger-checked.border-opacity-2,
.is-active .border-danger-active.border-opacity-2,
.border-danger-active:active.border-opacity-2,
.border-danger-hover:hover.border-opacity-2,
.border-danger.border-opacity-2 {
  border-color: rgba(246, 78, 96, 0.16) !important;
}
:checked .border-danger-checked.border-opacity-3,
.is-checked .border-danger-checked.border-opacity-3,
.is-active .border-danger-active.border-opacity-3,
.border-danger-active:active.border-opacity-3,
.border-danger-hover:hover.border-opacity-3,
.border-danger.border-opacity-3 {
  border-color: rgba(246, 78, 96, 0.24) !important;
}
:checked .border-danger-checked.border-opacity-4,
.is-checked .border-danger-checked.border-opacity-4,
.is-active .border-danger-active.border-opacity-4,
.border-danger-active:active.border-opacity-4,
.border-danger-hover:hover.border-opacity-4,
.border-danger.border-opacity-4 {
  border-color: rgba(246, 78, 96, 0.32) !important;
}
:checked .border-danger-checked.border-opacity-5,
.is-checked .border-danger-checked.border-opacity-5,
.is-active .border-danger-active.border-opacity-5,
.border-danger-active:active.border-opacity-5,
.border-danger-hover:hover.border-opacity-5,
.border-danger.border-opacity-5 {
  border-color: rgba(246, 78, 96, 0.4) !important;
}
:checked .border-danger-checked.border-opacity-6,
.is-checked .border-danger-checked.border-opacity-6,
.is-active .border-danger-active.border-opacity-6,
.border-danger-active:active.border-opacity-6,
.border-danger-hover:hover.border-opacity-6,
.border-danger.border-opacity-6 {
  border-color: rgba(246, 78, 96, 0.48) !important;
}
:checked .border-danger-checked.border-opacity-7,
.is-checked .border-danger-checked.border-opacity-7,
.is-active .border-danger-active.border-opacity-7,
.border-danger-active:active.border-opacity-7,
.border-danger-hover:hover.border-opacity-7,
.border-danger.border-opacity-7 {
  border-color: rgba(246, 78, 96, 0.56) !important;
}
:checked .border-danger-checked.border-opacity-8,
.is-checked .border-danger-checked.border-opacity-8,
.is-active .border-danger-active.border-opacity-8,
.border-danger-active:active.border-opacity-8,
.border-danger-hover:hover.border-opacity-8,
.border-danger.border-opacity-8 {
  border-color: rgba(246, 78, 96, 0.64) !important;
}
:checked .border-danger-checked.border-opacity-9,
.is-checked .border-danger-checked.border-opacity-9,
.is-active .border-danger-active.border-opacity-9,
.border-danger-active:active.border-opacity-9,
.border-danger-hover:hover.border-opacity-9,
.border-danger.border-opacity-9 {
  border-color: rgba(246, 78, 96, 0.72) !important;
}
:checked .text-warning-checked,
.is-checked .text-warning-checked,
.is-active .text-warning-active,
.text-warning-active:active,
.text-warning-hover:hover,
.text-warning {
  color: #ffc700 !important;
}
:checked .bg-warning-checked,
.is-checked .bg-warning-checked,
.is-active .bg-warning-active,
.bg-warning-active:active,
.bg-warning-hover:hover,
.bg-warning {
  background-color: #ffc700 !important;
}
:checked .bg-warning-checked.light-1,
.is-checked .bg-warning-checked.light-1,
.is-active .bg-warning-active.light-1,
.bg-warning-active:active.light-1,
.bg-warning-hover:hover.light-1,
.bg-warning.light-1 {
  background-color: #cfa100 !important;
}
:checked .bg-warning-checked.light-2,
.is-checked .bg-warning-checked.light-2,
.is-active .bg-warning-active.light-2,
.bg-warning-active:active.light-2,
.bg-warning-hover:hover.light-2,
.bg-warning.light-2 {
  background-color: #a17d00 !important;
}
:checked .bg-warning-checked.light-3,
.is-checked .bg-warning-checked.light-3,
.is-active .bg-warning-active.light-3,
.bg-warning-active:active.light-3,
.bg-warning-hover:hover.light-3,
.bg-warning.light-3 {
  background-color: #745b00 !important;
}
:checked .bg-warning-checked.light-4,
.is-checked .bg-warning-checked.light-4,
.is-active .bg-warning-active.light-4,
.bg-warning-active:active.light-4,
.bg-warning-hover:hover.light-4,
.bg-warning.light-4 {
  background-color: #463700 !important;
}
:checked .bg-warning-checked.light-5,
.is-checked .bg-warning-checked.light-5,
.is-active .bg-warning-active.light-5,
.bg-warning-active:active.light-5,
.bg-warning-hover:hover.light-5,
.bg-warning.light-5 {
  background-color: #332800 !important;
}
:checked .bg-warning-checked.dark-1,
.is-checked .bg-warning-checked.dark-1,
.is-active .bg-warning-active.dark-1,
.bg-warning-active:active.dark-1,
.bg-warning-hover:hover.dark-1,
.bg-warning.dark-1 {
  background-color: #ffd12e !important;
}
:checked .bg-warning-checked.dark-2,
.is-checked .bg-warning-checked.dark-2,
.is-active .bg-warning-active.dark-2,
.bg-warning-active:active.dark-2,
.bg-warning-hover:hover.dark-2,
.bg-warning.dark-2 {
  background-color: #ffdb5c !important;
}
:checked .bg-warning-checked.dark-3,
.is-checked .bg-warning-checked.dark-3,
.is-active .bg-warning-active.dark-3,
.bg-warning-active:active.dark-3,
.bg-warning-hover:hover.dark-3,
.bg-warning.dark-3 {
  background-color: #ffe58a !important;
}
:checked .bg-warning-checked.dark-4,
.is-checked .bg-warning-checked.dark-4,
.is-active .bg-warning-active.dark-4,
.bg-warning-active:active.dark-4,
.bg-warning-hover:hover.dark-4,
.bg-warning.dark-4 {
  background-color: #fff1bd !important;
}
:checked .bg-warning-checked.dark-5,
.is-checked .bg-warning-checked.dark-5,
.is-active .bg-warning-active.dark-5,
.bg-warning-active:active.dark-5,
.bg-warning-hover:hover.dark-5,
.bg-warning.dark-5 {
  background-color: #fff9e5 !important;
}
:checked .bg-warning-checked.opacity-1,
.is-checked .bg-warning-checked.opacity-1,
.is-active .bg-warning-active.opacity-1,
.bg-warning-active:active.opacity-1,
.bg-warning-hover:hover.opacity-1,
.bg-warning.opacity-1 {
  background-color: rgba(255, 199, 0, 0.08) !important;
}
:checked .bg-warning-checked.opacity-2,
.is-checked .bg-warning-checked.opacity-2,
.is-active .bg-warning-active.opacity-2,
.bg-warning-active:active.opacity-2,
.bg-warning-hover:hover.opacity-2,
.bg-warning.opacity-2 {
  background-color: rgba(255, 199, 0, 0.16) !important;
}
:checked .bg-warning-checked.opacity-3,
.is-checked .bg-warning-checked.opacity-3,
.is-active .bg-warning-active.opacity-3,
.bg-warning-active:active.opacity-3,
.bg-warning-hover:hover.opacity-3,
.bg-warning.opacity-3 {
  background-color: rgba(255, 199, 0, 0.24) !important;
}
:checked .bg-warning-checked.opacity-4,
.is-checked .bg-warning-checked.opacity-4,
.is-active .bg-warning-active.opacity-4,
.bg-warning-active:active.opacity-4,
.bg-warning-hover:hover.opacity-4,
.bg-warning.opacity-4 {
  background-color: rgba(255, 199, 0, 0.32) !important;
}
:checked .bg-warning-checked.opacity-5,
.is-checked .bg-warning-checked.opacity-5,
.is-active .bg-warning-active.opacity-5,
.bg-warning-active:active.opacity-5,
.bg-warning-hover:hover.opacity-5,
.bg-warning.opacity-5 {
  background-color: rgba(255, 199, 0, 0.4) !important;
}
:checked .bg-warning-checked.opacity-6,
.is-checked .bg-warning-checked.opacity-6,
.is-active .bg-warning-active.opacity-6,
.bg-warning-active:active.opacity-6,
.bg-warning-hover:hover.opacity-6,
.bg-warning.opacity-6 {
  background-color: rgba(255, 199, 0, 0.48) !important;
}
:checked .bg-warning-checked.opacity-7,
.is-checked .bg-warning-checked.opacity-7,
.is-active .bg-warning-active.opacity-7,
.bg-warning-active:active.opacity-7,
.bg-warning-hover:hover.opacity-7,
.bg-warning.opacity-7 {
  background-color: rgba(255, 199, 0, 0.56) !important;
}
:checked .bg-warning-checked.opacity-8,
.is-checked .bg-warning-checked.opacity-8,
.is-active .bg-warning-active.opacity-8,
.bg-warning-active:active.opacity-8,
.bg-warning-hover:hover.opacity-8,
.bg-warning.opacity-8 {
  background-color: rgba(255, 199, 0, 0.64) !important;
}
:checked .bg-warning-checked.opacity-9,
.is-checked .bg-warning-checked.opacity-9,
.is-active .bg-warning-active.opacity-9,
.bg-warning-active:active.opacity-9,
.bg-warning-hover:hover.opacity-9,
.bg-warning.opacity-9 {
  background-color: rgba(255, 199, 0, 0.72) !important;
}
:checked .border-warning-checked,
.is-checked .border-warning-checked,
.is-active .border-warning-active,
.border-warning-active:active,
.border-warning-hover:hover,
.border-warning {
  border-color: #ffc700 !important;
}
:checked .border-warning-checked.border-light-1,
.is-checked .border-warning-checked.border-light-1,
.is-active .border-warning-active.border-light-1,
.border-warning-active:active.border-light-1,
.border-warning-hover:hover.border-light-1,
.border-warning.border-light-1 {
  border-color: #cfa100 !important;
}
:checked .border-warning-checked.border-light-2,
.is-checked .border-warning-checked.border-light-2,
.is-active .border-warning-active.border-light-2,
.border-warning-active:active.border-light-2,
.border-warning-hover:hover.border-light-2,
.border-warning.border-light-2 {
  border-color: #a17d00 !important;
}
:checked .border-warning-checked.border-light-3,
.is-checked .border-warning-checked.border-light-3,
.is-active .border-warning-active.border-light-3,
.border-warning-active:active.border-light-3,
.border-warning-hover:hover.border-light-3,
.border-warning.border-light-3 {
  border-color: #745b00 !important;
}
:checked .border-warning-checked.border-light-4,
.is-checked .border-warning-checked.border-light-4,
.is-active .border-warning-active.border-light-4,
.border-warning-active:active.border-light-4,
.border-warning-hover:hover.border-light-4,
.border-warning.border-light-4 {
  border-color: #463700 !important;
}
:checked .border-warning-checked.border-light-5,
.is-checked .border-warning-checked.border-light-5,
.is-active .border-warning-active.border-light-5,
.border-warning-active:active.border-light-5,
.border-warning-hover:hover.border-light-5,
.border-warning.border-light-5 {
  border-color: #332800 !important;
}
:checked .border-warning-checked.border-dark-1,
.is-checked .border-warning-checked.border-dark-1,
.is-active .border-warning-active.border-dark-1,
.border-warning-active:active.border-dark-1,
.border-warning-hover:hover.border-dark-1,
.border-warning.border-dark-1 {
  border-color: #ffd12e !important;
}
:checked .border-warning-checked.border-dark-2,
.is-checked .border-warning-checked.border-dark-2,
.is-active .border-warning-active.border-dark-2,
.border-warning-active:active.border-dark-2,
.border-warning-hover:hover.border-dark-2,
.border-warning.border-dark-2 {
  border-color: #ffdb5c !important;
}
:checked .border-warning-checked.border-dark-3,
.is-checked .border-warning-checked.border-dark-3,
.is-active .border-warning-active.border-dark-3,
.border-warning-active:active.border-dark-3,
.border-warning-hover:hover.border-dark-3,
.border-warning.border-dark-3 {
  border-color: #ffe58a !important;
}
:checked .border-warning-checked.border-dark-4,
.is-checked .border-warning-checked.border-dark-4,
.is-active .border-warning-active.border-dark-4,
.border-warning-active:active.border-dark-4,
.border-warning-hover:hover.border-dark-4,
.border-warning.border-dark-4 {
  border-color: #fff1bd !important;
}
:checked .border-warning-checked.border-dark-5,
.is-checked .border-warning-checked.border-dark-5,
.is-active .border-warning-active.border-dark-5,
.border-warning-active:active.border-dark-5,
.border-warning-hover:hover.border-dark-5,
.border-warning.border-dark-5 {
  border-color: #fff9e5 !important;
}
:checked .border-warning-checked.border-opacity-1,
.is-checked .border-warning-checked.border-opacity-1,
.is-active .border-warning-active.border-opacity-1,
.border-warning-active:active.border-opacity-1,
.border-warning-hover:hover.border-opacity-1,
.border-warning.border-opacity-1 {
  border-color: rgba(255, 199, 0, 0.08) !important;
}
:checked .border-warning-checked.border-opacity-2,
.is-checked .border-warning-checked.border-opacity-2,
.is-active .border-warning-active.border-opacity-2,
.border-warning-active:active.border-opacity-2,
.border-warning-hover:hover.border-opacity-2,
.border-warning.border-opacity-2 {
  border-color: rgba(255, 199, 0, 0.16) !important;
}
:checked .border-warning-checked.border-opacity-3,
.is-checked .border-warning-checked.border-opacity-3,
.is-active .border-warning-active.border-opacity-3,
.border-warning-active:active.border-opacity-3,
.border-warning-hover:hover.border-opacity-3,
.border-warning.border-opacity-3 {
  border-color: rgba(255, 199, 0, 0.24) !important;
}
:checked .border-warning-checked.border-opacity-4,
.is-checked .border-warning-checked.border-opacity-4,
.is-active .border-warning-active.border-opacity-4,
.border-warning-active:active.border-opacity-4,
.border-warning-hover:hover.border-opacity-4,
.border-warning.border-opacity-4 {
  border-color: rgba(255, 199, 0, 0.32) !important;
}
:checked .border-warning-checked.border-opacity-5,
.is-checked .border-warning-checked.border-opacity-5,
.is-active .border-warning-active.border-opacity-5,
.border-warning-active:active.border-opacity-5,
.border-warning-hover:hover.border-opacity-5,
.border-warning.border-opacity-5 {
  border-color: rgba(255, 199, 0, 0.4) !important;
}
:checked .border-warning-checked.border-opacity-6,
.is-checked .border-warning-checked.border-opacity-6,
.is-active .border-warning-active.border-opacity-6,
.border-warning-active:active.border-opacity-6,
.border-warning-hover:hover.border-opacity-6,
.border-warning.border-opacity-6 {
  border-color: rgba(255, 199, 0, 0.48) !important;
}
:checked .border-warning-checked.border-opacity-7,
.is-checked .border-warning-checked.border-opacity-7,
.is-active .border-warning-active.border-opacity-7,
.border-warning-active:active.border-opacity-7,
.border-warning-hover:hover.border-opacity-7,
.border-warning.border-opacity-7 {
  border-color: rgba(255, 199, 0, 0.56) !important;
}
:checked .border-warning-checked.border-opacity-8,
.is-checked .border-warning-checked.border-opacity-8,
.is-active .border-warning-active.border-opacity-8,
.border-warning-active:active.border-opacity-8,
.border-warning-hover:hover.border-opacity-8,
.border-warning.border-opacity-8 {
  border-color: rgba(255, 199, 0, 0.64) !important;
}
:checked .border-warning-checked.border-opacity-9,
.is-checked .border-warning-checked.border-opacity-9,
.is-active .border-warning-active.border-opacity-9,
.border-warning-active:active.border-opacity-9,
.border-warning-hover:hover.border-opacity-9,
.border-warning.border-opacity-9 {
  border-color: rgba(255, 199, 0, 0.72) !important;
}
:checked .text-info-checked,
.is-checked .text-info-checked,
.is-active .text-info-active,
.text-info-active:active,
.text-info-hover:hover,
.text-info {
  color: #8950fc !important;
}
:checked .bg-info-checked,
.is-checked .bg-info-checked,
.is-active .bg-info-active,
.bg-info-active:active,
.bg-info-hover:hover,
.bg-info {
  background-color: #8950fc !important;
}
:checked .bg-info-checked.light-1,
.is-checked .bg-info-checked.light-1,
.is-active .bg-info-active.light-1,
.bg-info-active:active.light-1,
.bg-info-hover:hover.light-1,
.bg-info.light-1 {
  background-color: #5f12fb !important;
}
:checked .bg-info-checked.light-2,
.is-checked .bg-info-checked.light-2,
.is-active .bg-info-active.light-2,
.bg-info-active:active.light-2,
.bg-info-hover:hover.light-2,
.bg-info.light-2 {
  background-color: #4704ce !important;
}
:checked .bg-info-checked.light-3,
.is-checked .bg-info-checked.light-3,
.is-active .bg-info-active.light-3,
.bg-info-active:active.light-3,
.bg-info-hover:hover.light-3,
.bg-info.light-3 {
  background-color: #330395 !important;
}
:checked .bg-info-checked.light-4,
.is-checked .bg-info-checked.light-4,
.is-active .bg-info-active.light-4,
.bg-info-active:active.light-4,
.bg-info-hover:hover.light-4,
.bg-info.light-4 {
  background-color: #1f025a !important;
}
:checked .bg-info-checked.light-5,
.is-checked .bg-info-checked.light-5,
.is-active .bg-info-active.light-5,
.bg-info-active:active.light-5,
.bg-info-hover:hover.light-5,
.bg-info.light-5 {
  background-color: #160141 !important;
}
:checked .bg-info-checked.dark-1,
.is-checked .bg-info-checked.dark-1,
.is-active .bg-info-active.dark-1,
.bg-info-active:active.dark-1,
.bg-info-hover:hover.dark-1,
.bg-info.dark-1 {
  background-color: #9e70fd !important;
}
:checked .bg-info-checked.dark-2,
.is-checked .bg-info-checked.dark-2,
.is-active .bg-info-active.dark-2,
.bg-info-active:active.dark-2,
.bg-info-hover:hover.dark-2,
.bg-info.dark-2 {
  background-color: #b38ffd !important;
}
:checked .bg-info-checked.dark-3,
.is-checked .bg-info-checked.dark-3,
.is-active .bg-info-active.dark-3,
.bg-info-active:active.dark-3,
.bg-info-hover:hover.dark-3,
.bg-info.dark-3 {
  background-color: #c9affe !important;
}
:checked .bg-info-checked.dark-4,
.is-checked .bg-info-checked.dark-4,
.is-active .bg-info-active.dark-4,
.bg-info-active:active.dark-4,
.bg-info-hover:hover.dark-4,
.bg-info.dark-4 {
  background-color: #e1d2fe !important;
}
:checked .bg-info-checked.dark-5,
.is-checked .bg-info-checked.dark-5,
.is-active .bg-info-active.dark-5,
.bg-info-active:active.dark-5,
.bg-info-hover:hover.dark-5,
.bg-info.dark-5 {
  background-color: #f3edff !important;
}
:checked .bg-info-checked.opacity-1,
.is-checked .bg-info-checked.opacity-1,
.is-active .bg-info-active.opacity-1,
.bg-info-active:active.opacity-1,
.bg-info-hover:hover.opacity-1,
.bg-info.opacity-1 {
  background-color: rgba(137, 80, 252, 0.08) !important;
}
:checked .bg-info-checked.opacity-2,
.is-checked .bg-info-checked.opacity-2,
.is-active .bg-info-active.opacity-2,
.bg-info-active:active.opacity-2,
.bg-info-hover:hover.opacity-2,
.bg-info.opacity-2 {
  background-color: rgba(137, 80, 252, 0.16) !important;
}
:checked .bg-info-checked.opacity-3,
.is-checked .bg-info-checked.opacity-3,
.is-active .bg-info-active.opacity-3,
.bg-info-active:active.opacity-3,
.bg-info-hover:hover.opacity-3,
.bg-info.opacity-3 {
  background-color: rgba(137, 80, 252, 0.24) !important;
}
:checked .bg-info-checked.opacity-4,
.is-checked .bg-info-checked.opacity-4,
.is-active .bg-info-active.opacity-4,
.bg-info-active:active.opacity-4,
.bg-info-hover:hover.opacity-4,
.bg-info.opacity-4 {
  background-color: rgba(137, 80, 252, 0.32) !important;
}
:checked .bg-info-checked.opacity-5,
.is-checked .bg-info-checked.opacity-5,
.is-active .bg-info-active.opacity-5,
.bg-info-active:active.opacity-5,
.bg-info-hover:hover.opacity-5,
.bg-info.opacity-5 {
  background-color: rgba(137, 80, 252, 0.4) !important;
}
:checked .bg-info-checked.opacity-6,
.is-checked .bg-info-checked.opacity-6,
.is-active .bg-info-active.opacity-6,
.bg-info-active:active.opacity-6,
.bg-info-hover:hover.opacity-6,
.bg-info.opacity-6 {
  background-color: rgba(137, 80, 252, 0.48) !important;
}
:checked .bg-info-checked.opacity-7,
.is-checked .bg-info-checked.opacity-7,
.is-active .bg-info-active.opacity-7,
.bg-info-active:active.opacity-7,
.bg-info-hover:hover.opacity-7,
.bg-info.opacity-7 {
  background-color: rgba(137, 80, 252, 0.56) !important;
}
:checked .bg-info-checked.opacity-8,
.is-checked .bg-info-checked.opacity-8,
.is-active .bg-info-active.opacity-8,
.bg-info-active:active.opacity-8,
.bg-info-hover:hover.opacity-8,
.bg-info.opacity-8 {
  background-color: rgba(137, 80, 252, 0.64) !important;
}
:checked .bg-info-checked.opacity-9,
.is-checked .bg-info-checked.opacity-9,
.is-active .bg-info-active.opacity-9,
.bg-info-active:active.opacity-9,
.bg-info-hover:hover.opacity-9,
.bg-info.opacity-9 {
  background-color: rgba(137, 80, 252, 0.72) !important;
}
:checked .border-info-checked,
.is-checked .border-info-checked,
.is-active .border-info-active,
.border-info-active:active,
.border-info-hover:hover,
.border-info {
  border-color: #8950fc !important;
}
:checked .border-info-checked.border-light-1,
.is-checked .border-info-checked.border-light-1,
.is-active .border-info-active.border-light-1,
.border-info-active:active.border-light-1,
.border-info-hover:hover.border-light-1,
.border-info.border-light-1 {
  border-color: #5f12fb !important;
}
:checked .border-info-checked.border-light-2,
.is-checked .border-info-checked.border-light-2,
.is-active .border-info-active.border-light-2,
.border-info-active:active.border-light-2,
.border-info-hover:hover.border-light-2,
.border-info.border-light-2 {
  border-color: #4704ce !important;
}
:checked .border-info-checked.border-light-3,
.is-checked .border-info-checked.border-light-3,
.is-active .border-info-active.border-light-3,
.border-info-active:active.border-light-3,
.border-info-hover:hover.border-light-3,
.border-info.border-light-3 {
  border-color: #330395 !important;
}
:checked .border-info-checked.border-light-4,
.is-checked .border-info-checked.border-light-4,
.is-active .border-info-active.border-light-4,
.border-info-active:active.border-light-4,
.border-info-hover:hover.border-light-4,
.border-info.border-light-4 {
  border-color: #1f025a !important;
}
:checked .border-info-checked.border-light-5,
.is-checked .border-info-checked.border-light-5,
.is-active .border-info-active.border-light-5,
.border-info-active:active.border-light-5,
.border-info-hover:hover.border-light-5,
.border-info.border-light-5 {
  border-color: #160141 !important;
}
:checked .border-info-checked.border-dark-1,
.is-checked .border-info-checked.border-dark-1,
.is-active .border-info-active.border-dark-1,
.border-info-active:active.border-dark-1,
.border-info-hover:hover.border-dark-1,
.border-info.border-dark-1 {
  border-color: #9e70fd !important;
}
:checked .border-info-checked.border-dark-2,
.is-checked .border-info-checked.border-dark-2,
.is-active .border-info-active.border-dark-2,
.border-info-active:active.border-dark-2,
.border-info-hover:hover.border-dark-2,
.border-info.border-dark-2 {
  border-color: #b38ffd !important;
}
:checked .border-info-checked.border-dark-3,
.is-checked .border-info-checked.border-dark-3,
.is-active .border-info-active.border-dark-3,
.border-info-active:active.border-dark-3,
.border-info-hover:hover.border-dark-3,
.border-info.border-dark-3 {
  border-color: #c9affe !important;
}
:checked .border-info-checked.border-dark-4,
.is-checked .border-info-checked.border-dark-4,
.is-active .border-info-active.border-dark-4,
.border-info-active:active.border-dark-4,
.border-info-hover:hover.border-dark-4,
.border-info.border-dark-4 {
  border-color: #e1d2fe !important;
}
:checked .border-info-checked.border-dark-5,
.is-checked .border-info-checked.border-dark-5,
.is-active .border-info-active.border-dark-5,
.border-info-active:active.border-dark-5,
.border-info-hover:hover.border-dark-5,
.border-info.border-dark-5 {
  border-color: #f3edff !important;
}
:checked .border-info-checked.border-opacity-1,
.is-checked .border-info-checked.border-opacity-1,
.is-active .border-info-active.border-opacity-1,
.border-info-active:active.border-opacity-1,
.border-info-hover:hover.border-opacity-1,
.border-info.border-opacity-1 {
  border-color: rgba(137, 80, 252, 0.08) !important;
}
:checked .border-info-checked.border-opacity-2,
.is-checked .border-info-checked.border-opacity-2,
.is-active .border-info-active.border-opacity-2,
.border-info-active:active.border-opacity-2,
.border-info-hover:hover.border-opacity-2,
.border-info.border-opacity-2 {
  border-color: rgba(137, 80, 252, 0.16) !important;
}
:checked .border-info-checked.border-opacity-3,
.is-checked .border-info-checked.border-opacity-3,
.is-active .border-info-active.border-opacity-3,
.border-info-active:active.border-opacity-3,
.border-info-hover:hover.border-opacity-3,
.border-info.border-opacity-3 {
  border-color: rgba(137, 80, 252, 0.24) !important;
}
:checked .border-info-checked.border-opacity-4,
.is-checked .border-info-checked.border-opacity-4,
.is-active .border-info-active.border-opacity-4,
.border-info-active:active.border-opacity-4,
.border-info-hover:hover.border-opacity-4,
.border-info.border-opacity-4 {
  border-color: rgba(137, 80, 252, 0.32) !important;
}
:checked .border-info-checked.border-opacity-5,
.is-checked .border-info-checked.border-opacity-5,
.is-active .border-info-active.border-opacity-5,
.border-info-active:active.border-opacity-5,
.border-info-hover:hover.border-opacity-5,
.border-info.border-opacity-5 {
  border-color: rgba(137, 80, 252, 0.4) !important;
}
:checked .border-info-checked.border-opacity-6,
.is-checked .border-info-checked.border-opacity-6,
.is-active .border-info-active.border-opacity-6,
.border-info-active:active.border-opacity-6,
.border-info-hover:hover.border-opacity-6,
.border-info.border-opacity-6 {
  border-color: rgba(137, 80, 252, 0.48) !important;
}
:checked .border-info-checked.border-opacity-7,
.is-checked .border-info-checked.border-opacity-7,
.is-active .border-info-active.border-opacity-7,
.border-info-active:active.border-opacity-7,
.border-info-hover:hover.border-opacity-7,
.border-info.border-opacity-7 {
  border-color: rgba(137, 80, 252, 0.56) !important;
}
:checked .border-info-checked.border-opacity-8,
.is-checked .border-info-checked.border-opacity-8,
.is-active .border-info-active.border-opacity-8,
.border-info-active:active.border-opacity-8,
.border-info-hover:hover.border-opacity-8,
.border-info.border-opacity-8 {
  border-color: rgba(137, 80, 252, 0.64) !important;
}
:checked .border-info-checked.border-opacity-9,
.is-checked .border-info-checked.border-opacity-9,
.is-active .border-info-active.border-opacity-9,
.border-info-active:active.border-opacity-9,
.border-info-hover:hover.border-opacity-9,
.border-info.border-opacity-9 {
  border-color: rgba(137, 80, 252, 0.72) !important;
}
.hl-anchor {
  position: relative;
  overflow: auto;
}
.hl-anchor .slider-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 2px;
  height: 24px;
  background-color: #40a9ff;
  transition: top 0.3s ease;
  margin-top: 2px;
}
.hl-anchor .anchor-list {
  position: relative;
}
.hl-anchor .anchor-list::before {
  position: absolute;
  content: "";
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #233042;
}
.hl-anchor .anchor-sublist {
  margin-top: 4px;
}
.hl-anchor.slider-less .slider-bar {
  display: none;
}
.hl-anchor.slider-less .anchor-list::before {
  display: none;
}
.hl-anchor.right .slider-bar {
  left: auto;
  right: 0;
}
.hl-anchor.right .anchor-list::before {
  left: auto;
  right: 0;
}
.hl-anchor.right .hl-anchor-link .hl-anchor-link {
  margin-left: unset;
  margin-right: 1em;
}
.hl-anchor.right .hl-anchor-link a {
  justify-content: flex-end;
}
.hl-anchor .hl-anchor-link .hl-anchor-link {
  margin-left: 1em;
}
.hl-anchor .hl-anchor-link a {
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 28px;
  padding: 8px 16px;
  color: #899cae;
  font-size: 14px;
  font-weight: 400;
  background-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-anchor .hl-anchor-link a:hover {
  font-weight: 400;
  color: #899cae;
  background-color: transparent;
}
.hl-anchor .hl-anchor-link.is-active > a {
  font-weight: 500;
  color: #7F60F9;
  background-color: transparent;
}
.hl-icon {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-style: normal;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
}
.hl-icon.disabled {
  color: #364964;
}
.hl-icon .icon-system {
  --stroke-width: 1.5;
  --fill-opacity: 0.15;
}
.hl-icon .icon-system g {
  fill-opacity: var(--fill-opacity);
  stroke-width: var(--stroke-width);
  stroke-linecap: round;
  stroke-linejoin: round;
  fill-rule: evenodd;
  fill: currentColor;
}
.hl-icon svg {
  width: 100%;
  height: 100%;
  display: block;
  color: currentColor;
}
.hl-icon.fill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #141c2a;
}
.hl-icon.fill.radius {
  border-radius: 6px;
}
.hl-icon.fill.round {
  border-radius: 100px;
}
.hl-icon.fill svg {
  width: 20px;
  height: 20px;
}
.hl-icon.transition:hover path {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: dash 2s ease-out forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.hl-group {
  --group-gap-x: 0;
  --group-gap-y: 0;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  vertical-align: middle;
  column-gap: var(--group-gap-x);
  row-gap: var(--group-gap-y);
}
.hl-group.full {
  display: flex;
  width: 100%;
}
.hl-group.full > .group-item,
.hl-group.full > .hl-group {
  flex-grow: 1;
  height: auto;
}
.hl-group.full-x {
  display: flex;
  width: 100%;
}
.hl-group.full-x > .group-item,
.hl-group.full-x > .hl-group {
  flex-grow: 1;
}
.hl-group.full-y {
  display: inline-flex;
}
.hl-group.full-y > .group-item,
.hl-group.full-y > .hl-group {
  flex-grow: 1;
  height: auto;
}
.hl-group.block {
  display: flex;
}
.hl-group.wrap {
  flex-wrap: wrap;
}
.hl-group.wrap.full > .group-item,
.hl-group.wrap.full > .hl-group {
  flex-basis: 0;
  max-width: 100%;
}
.hl-group.around {
  justify-content: space-around;
}
.hl-group.evenly {
  justify-content: space-evenly;
}
.hl-group.between {
  justify-content: space-between;
}
.hl-group.horizontal {
  flex-direction: row;
}
.hl-group.horizontal.indent {
  --indent: -1px;
}
.hl-group.horizontal.indent > .hl-group:not(:only-child):not(:first-child),
.hl-group.horizontal.indent > .group-item:not(:only-child):not(:first-child) {
  margin-left: var(--indent);
}
.hl-group.horizontal.merge > .hl-group:not(:first-child):not(:last-child) .group-item .hl-input,
.hl-group.horizontal.merge > .group-item:not(:first-child):not(:last-child) .hl-input,
.hl-group.horizontal.merge > .hl-group:not(:first-child):not(:last-child) > .group-item,
.hl-group.horizontal.merge > .group-item:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:last-child .group-item:first-child {
  border-bottom-left-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:first-child .group-item:first-child {
  border-bottom-right-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):last-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:first-child > .hl-group:not(:only-child):last-child .hl-group.vertical:last-child .group-item:first-child > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:first-child {
  border-top-left-radius: 0;
}
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-input,
.hl-group.horizontal.merge > .group-item:not(:only-child):first-child .hl-button,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:first-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:first-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:first-child .group-item:last-child,
.hl-group.horizontal.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:first-child {
  border-top-right-radius: 0;
}
.hl-group.horizontal.top {
  align-items: flex-start;
}
.hl-group.horizontal.middle {
  align-items: center;
}
.hl-group.horizontal.bottom {
  align-items: flex-end;
}
.hl-group.horizontal.left {
  justify-content: flex-start;
}
.hl-group.horizontal.center {
  justify-content: center;
}
.hl-group.horizontal.right {
  justify-content: flex-end;
}
.hl-group.vertical {
  flex-direction: column;
}
.hl-group.vertical.indent {
  --indent: -1px;
}
.hl-group.vertical.indent > .hl-group:not(:only-child):not(:first-child),
.hl-group.vertical.indent > .group-item:not(:only-child):not(:first-child) {
  margin-top: var(--indent);
}
.hl-group.vertical.full-x {
  display: flex;
  width: 100%;
}
.hl-group.vertical.full-x > .group-item,
.hl-group.vertical.full-x > .hl-group {
  flex-grow: 0;
}
.hl-group.vertical.merge > .hl-group:not(:first-child):not(:last-child) .group-item,
.hl-group.vertical.merge > .group-item:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:first-child .group-item:first-child {
  border-bottom-left-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.vertical:last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):first-child .hl-group.horizontal:last-child .group-item:last-child {
  border-bottom-right-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:first-child {
  border-top-left-radius: 0;
}
.hl-group.vertical.merge > .group-item:not(:only-child):last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:first-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.vertical:last-child .group-item:first-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:first-child .group-item:last-child,
.hl-group.vertical.merge > .hl-group:not(:only-child):last-child .hl-group.horizontal:last-child .group-item:last-child {
  border-top-right-radius: 0;
}
.hl-group.vertical.top {
  justify-content: flex-start;
}
.hl-group.vertical.middle {
  justify-content: center;
}
.hl-group.vertical.bottom {
  justify-content: flex-end;
}
.hl-group.vertical.left {
  align-items: flex-start;
}
.hl-group.vertical.center {
  align-items: center;
}
.hl-group.vertical.right {
  align-items: flex-end;
}
.hl-button {
  --button-font-color: #899cae;
  --button-font-color-hover: #899cae;
  --button-font-color-active: #899cae;
  --button-bg-color: #242f44;
  --button-bg-color-hover: #29364e;
  --button-bg-color-active: #1f283a;
  --button-border-color: #242f44;
  --button-border-color-hover: #29364e;
  --button-border-color-active: #1f283a;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--button-font-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5714285714;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  height: 36px;
  padding: 6px 12px;
  border: 1px solid var(--button-border-color);
  border-radius: 4px;
  background-color: var(--button-bg-color);
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.hl-button:focus:not(:focus-visible) {
  outline: 0;
}
.hl-button.is-hover, .hl-button.is-focus, .hl-button:focus, .hl-button:hover {
  color: var(--button-font-color-hover);
  border-color: var(--button-border-color-hover);
  background-color: var(--button-bg-color-hover);
}
.hl-radio.is-checked .hl-button, .hl-checkbox.is-checked .hl-button {
  color: var(--button-font-color-hover);
  border-color: var(--button-border-color-hover);
  background-color: var(--button-bg-color-hover);
}
.hl-button:disabled, .hl-button.is-disabled {
  color: #364964;
  background-color: #182536;
  border-color: #233042;
  pointer-events: none;
}
.hl-button.is-active, .hl-button:active {
  color: var(--button-font-color-active);
  border-color: var(--button-border-color-active);
  background-color: var(--button-bg-color-active);
}
.hl-button.is-loading {
  opacity: 0.8;
  pointer-events: none;
}
.hl-button.outline {
  color: #899cae;
  background-color: transparent;
  background-image: none;
}
.hl-button.outline.dashed {
  border-style: dashed;
}
.hl-button.link {
  color: #7F60F9;
  background-color: transparent;
  border-color: transparent;
}
.hl-button.link:focus, .hl-button.link:hover {
  color: #7F60F9;
}
.hl-button.no-padding {
  height: unset;
  padding: 0;
}
.hl-button:focus {
  z-index: 1;
}
.hl-button:hover, .hl-button.is-active, .hl-button:active {
  z-index: 1;
}
.hl-button input[type=file],
.hl-button input[type=checkbox],
.hl-button input[type=radio] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.hl-button.light {
  border-color: transparent;
  background-color: #282840;
}
.hl-button.light.is-hover, .hl-button.light.is-focus, .hl-button.light:focus, .hl-button.light:hover {
  color: #899cae;
  background-color: #29364e;
}
.hl-button.light.is-active, .hl-button.light:active {
  color: #899cae;
  background-color: #1f283a;
}
.hl-button.no-fill {
  border-color: transparent;
  background-color: transparent;
}
.hl-button.no-fill.is-hover, .hl-button.no-fill.is-focus, .hl-button.no-fill:focus, .hl-button.no-fill:hover {
  color: #899cae;
  background-color: #29364e;
  border-color: transparent;
}
.hl-button.no-fill.is-active, .hl-button.no-fill:active {
  background-color: #1f283a;
}
.hl-button span {
  align-items: center;
}
.hl-button .hl-spinner,
.hl-button .hl-icon {
  display: flex;
  flex-grow: unset;
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: currentColor;
}
.hl-button .hl-spinner:not(:only-child),
.hl-button .hl-icon:not(:only-child) {
  margin-right: 8px;
}
.hl-button.icon-left {
  justify-content: space-between;
}
.hl-button.icon-left .hl-icon {
  order: -1;
  flex-shrink: 0;
}
.hl-button.icon-right {
  justify-content: space-between;
}
.hl-button.icon-right .hl-icon {
  order: 1;
  flex-shrink: 0;
  margin-right: 0;
  margin-left: 8px;
}
.hl-button.rational span {
  flex-basis: 0;
  flex-grow: 1;
}
.hl-button.block {
  width: 100%;
  display: flex;
}
.hl-button.round {
  border-radius: 100px;
}
.hl-button.equal {
  padding-left: 0;
  padding-right: 0;
  min-width: 36px;
  max-width: 36px;
  width: 36px;
  height: 36px;
  justify-content: center;
}
.hl-button.equal .hl-icon {
  margin: 0;
}
span.hl-button {
  cursor: default;
  pointer-events: none;
}
span.hl-button.is-active {
  background-color: #2b3851;
  cursor: default;
  border-color: #242f44;
}
.hl-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  color: #899cae;
  background-color: #213148;
  font-size: 14px;
  line-height: 1.5714285714;
  border-radius: 4px;
  height: 36px;
  min-height: 36px;
  border: 1px solid #233042;
  transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
}
.hl-input .input-inner {
  outline: 0;
  -webkit-appearance: none;
  line-height: inherit;
  padding: 6px 12px;
  font-size: inherit;
  font-weight: inherit;
  text-align: inherit;
  border: none;
  width: 100%;
  color: currentColor;
  background-color: transparent;
  outline: 0;
}
.hl-input .input-inner:disabled {
  cursor: not-allowed;
}
.hl-input[role=textarea] {
  height: auto;
}
.hl-input[role=textarea] textarea {
  outline: 0;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 14px;
  line-height: 1.5714285714;
  padding: 6px 12px;
  background-color: transparent;
}
.hl-input.is-tags {
  height: auto;
}
.hl-input.is-tags .input-inner {
  display: none;
}
.hl-input:hover {
  z-index: 2;
  border-color: #233042;
  background-color: #213148;
}
.hl-input.is-focus, .hl-input.is-active {
  z-index: 2;
  border-color: #40a9ff;
  background-color: #213148;
}
.hl-input.is-focus .input-affixe, .hl-input.is-active .input-affixe {
  color: #40a9ff;
}
.hl-input.is-focus .input-affixe .hl-icon, .hl-input.is-active .input-affixe .hl-icon {
  color: currentColor;
}
.hl-input.is-disabled, .hl-input.is-disabled.is-active, .hl-input.is-disabled.is-focus {
  user-select: none;
  color: #364964 !important;
  background-color: #182536 !important;
  border-color: #233042 !important;
  box-shadow: none !important;
  cursor: not-allowed;
}
.hl-input.block {
  width: 100%;
}
.hl-input.round {
  border-radius: 100px;
}
.hl-input.fill {
  background-color: #0e1422;
  border-color: transparent;
}
.hl-input.fill.is-focus, .hl-input.fill.is-active {
  border-color: #40a9ff;
  background-color: #213148;
}
.hl-input.thin {
  border: none !important;
  background-color: unset !important;
  height: unset !important;
  min-height: unset !important;
}
.hl-input.thin .input-inner {
  padding: 0 !important;
}
.hl-input .input-affixe {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  min-height: 16px;
  flex-shrink: 0;
  flex-grow: unset;
  color: #899cae;
  transition: color 0.3s ease;
}
.hl-input .input-affixe a {
  display: flex;
  color: #a0b4c8;
  transition: color 0.3s ease;
}
.hl-input .input-affixe a:hover {
  color: #7F60F9;
}
.hl-input .input-affixe.prefix {
  order: -1;
  margin-left: 12px;
}
.hl-input .input-affixe.suffix {
  order: 1;
  margin-right: 12px;
}
.hl-input .input-affixe .hl-spinner,
.hl-input .input-affixe .hl-icon {
  display: flex;
  width: 16px;
  height: 16px;
  color: #899cae;
}
.hl-input .input-close {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 15px;
  color: #899cae;
  transition: color 0.3s ease;
}
.hl-input .input-close:hover {
  color: #7F60F9;
}
.hl-input .input-visible {
  cursor: pointer;
}
.hl-input .input-count {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 3;
  font-size: 12px;
  line-height: 1;
  padding: 10px;
  color: #364964;
}
.hl-input .input-tags {
  display: flex;
  width: 100%;
  padding: 6px;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
  flex-grow: 1;
}
.hl-input .input-tags > input,
.hl-input .input-tags .hl-tag {
  padding: 0 6px;
  height: 22px;
  line-height: 1;
}
.hl-input .input-tags > input {
  display: inline-block;
  width: 100px;
  border: none;
  background-color: transparent;
  outline: 0;
}
.hl-input .input-tags .tag-close {
  cursor: pointer;
}
.hl-input-number.is-disabled .hl-button,
.hl-input-number.is-disabled .hl-input {
  border-color: #233042;
}
.hl-input-number .hl-input {
  width: 100%;
  border: 1px solid #233042;
}
.hl-input-number .hl-input input {
  text-align: center;
  -moz-appearance: textfield;
}
.hl-input-number .hl-input input::-webkit-inner-spin-button, .hl-input-number .hl-input input::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.hl-input-number .hl-button {
  padding: 0;
  border: 1px solid #233042;
  min-width: 36px;
}
.hl-input-number .hl-button:hover {
  border-color: #29364e;
}
.hl-input-number .hl-button:active {
  border-color: #1f283a;
}
.hl-input-number .hl-button .hl-icon {
  height: 60%;
}
.hl-input-number.btn-vertical .hl-input {
  text-align: left;
  margin: 0;
}
.hl-input-number.btn-vertical .btn-group {
  height: 36px;
}
.hl-input-number.btn-vertical .btn-group .hl-button {
  padding: 0;
  width: 36px;
  height: 50%;
  flex-grow: 1;
}
.hl-input-number.btn-inner .hl-input {
  padding-left: 36px;
  padding-right: 36px;
}
.hl-input-number.btn-inner .hl-button {
  position: absolute;
  top: 6px;
  z-index: 3;
  border-radius: 6px;
  min-width: 24px;
  width: 24px;
  height: 24px;
}
.hl-input-number.btn-inner .hl-button.round {
  border-radius: 100px;
}
.hl-input-number.btn-inner .hl-button.decrease {
  left: 6px;
}
.hl-input-number.btn-inner .hl-button.increase {
  right: 6px;
}
.hl-radio {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  text-align: left;
  vertical-align: middle;
  cursor: pointer;
  line-height: 18px;
}
.hl-radio .radio-input {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  opacity: 0;
  outline: 0;
  width: 0;
  height: 0;
}
.hl-radio .radio-inner {
  position: relative;
  display: block;
  float: left;
  width: 18px;
  height: 18px;
  font-style: normal;
  background-color: #213148;
  border: 1px solid #233042;
  border-radius: 100%;
  flex-shrink: 0;
  flex-grow: unset;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  transition: background-color 0.2s ease, border 0.2s ease;
}
.hl-radio .radio-inner:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 100%;
  background-color: transparent;
  border: transparent;
  transform: scale(0.5);
  transition: background-color 0.2s ease;
}
.hl-radio .radio-label {
  padding: 0 8px;
}
.hl-radio .hl-button {
  pointer-events: none;
}
.hl-radio:hover .radio-inner {
  border-color: #40a9ff;
  background-color: #213148;
}
.hl-radio.is-checked {
  z-index: 1;
}
.hl-radio.is-checked .radio-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
  animation-name: bounceIn;
  transition: box-shadow 0.3s ease;
}
.hl-radio.is-checked .radio-inner:after {
  background-color: #FFFFFF;
}
.hl-radio.is-focus {
  z-index: 1;
}
.hl-radio.is-disabled {
  cursor: not-allowed;
}
.hl-radio.is-disabled .radio-inner {
  border-color: #233042 !important;
  background-color: #182536 !important;
}
.hl-radio.is-disabled .radio-label {
  color: #364964 !important;
}
.hl-radio.is-disabled.is-checked .radio-inner:after {
  background-color: #364964;
}
.hl-radio.bold .radio-inner {
  border-width: 2px;
}
.hl-radio.fill .radio-inner {
  background-color: #233042;
}
.hl-radio.fill.is-checked .radio-inner {
  background-color: #40a9ff;
}
.hl-radio-group {
  position: relative;
}
.hl-radio-group .hl-checkbox {
  display: flex;
}
.hl-checkbox {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  text-align: left;
  vertical-align: middle;
  cursor: pointer;
}
.hl-checkbox .checkbox-input {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  opacity: 0;
  outline: 0;
  width: 0;
  height: 0;
}
.hl-checkbox .checkbox-inner {
  position: relative;
  display: flex;
  width: 18px;
  height: 18px;
  background-color: #213148;
  border: 1px solid #233042;
  flex-shrink: 0;
  flex-grow: unset;
  overflow: hidden;
  border-radius: 3px;
  transition: all 0.2s ease;
}
.hl-checkbox .checkbox-inner .icon-checked,
.hl-checkbox .checkbox-inner .icon-indeterminate {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  transition: all 0.2s;
}
.hl-checkbox .checkbox-label {
  padding: 0 8px;
  line-height: 18px;
}
.hl-checkbox .hl-button {
  pointer-events: none;
}
.hl-checkbox:hover .checkbox-inner {
  border-color: #40a9ff;
  background-color: #213148;
}
.hl-checkbox.is-checked .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.is-checked .checkbox-inner .icon-checked {
  color: #FFFFFF;
  visibility: visible;
  opacity: 1;
  animation-name: checkBounceIn;
}
.hl-checkbox.is-disabled {
  cursor: not-allowed;
}
.hl-checkbox.is-disabled .checkbox-inner {
  border-color: #233042 !important;
  background-color: #182536 !important;
}
.hl-checkbox.is-disabled .checkbox-inner .icon-checked,
.hl-checkbox.is-disabled .checkbox-inner .icon-indeterminate {
  color: inherit;
}
.hl-checkbox.is-disabled .checkbox-label {
  color: #364964 !important;
}
.hl-checkbox.is-disabled.is-indeterminate .checkbox-inner .icon-checked,
.hl-checkbox.is-disabled.is-indeterminate .checkbox-inner .icon-indeterminate, .hl-checkbox.is-disabled.is-checked .checkbox-inner .icon-checked,
.hl-checkbox.is-disabled.is-checked .checkbox-inner .icon-indeterminate {
  color: #364964 !important;
}
.hl-checkbox.is-indeterminate .checkbox-inner {
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-checkbox.is-indeterminate .checkbox-inner .icon-indeterminate {
  color: #FFFFFF;
  opacity: 1;
  visibility: visible;
}
.hl-checkbox.bold .checkbox-inner {
  border-width: 2px;
  line-height: 15px;
}
.hl-checkbox.round .checkbox-inner {
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: #233042;
  border-radius: 50%;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}
.hl-checkbox.round .checkbox-inner .icon-checked,
.hl-checkbox.round .checkbox-inner .icon-indeterminate {
  opacity: 0;
  visibility: hidden;
}
.hl-checkbox.round .checkbox-inner:after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 12px;
  font-style: normal;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  content: "";
  border-radius: 50%;
  transform: scale(0.5);
  background-color: transparent;
  animation-name: unset;
}
.hl-checkbox.round:hover .checkbox-inner {
  border-color: transparent !important;
}
.hl-checkbox.round.is-checked .checkbox-inner {
  background-color: #40a9ff;
  animation-name: bounceIn;
}
.hl-checkbox.round.is-checked .checkbox-inner:after {
  transform: scale(0.5);
  background-color: #FFFFFF;
}
.hl-checkbox.fill .checkbox-inner {
  background-color: #233042;
  border-color: #233042;
}
.hl-checkbox.fill.is-checked .checkbox-inner {
  background-color: #40a9ff;
  border-color: #40a9ff;
}
@keyframes checkBounceIn {
  0% {
    transform: scale(0.6);
  }
  45% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.hl-checkbox-group {
  position: relative;
}
.hl-checkbox-group .hl-checkbox {
  display: flex;
}
.hl-switch {
  position: relative;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  --switch-width: 44px;
}
.hl-switch:active input + em:before {
  right: 30%;
}
.hl-switch:active input:checked + em:before {
  right: 0;
  left: 30%;
}
.hl-switch input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.hl-switch input:checked + em {
  border-color: #242f44;
  background-color: #242f44;
}
.hl-switch input:checked + em:before {
  left: calc(var(--switch-width) - 22px);
  right: 0;
}
.hl-switch input:checked + em + .hl-icon, .hl-switch input:checked + em + .hl-spinner, .hl-switch input:checked + em + i {
  left: calc(var(--switch-width) - 22px);
  right: 0;
  color: #7F60F9;
}
.hl-switch input:disabled + em {
  border-color: #233042;
  background-color: #182536;
}
.hl-switch input:disabled + em::before {
  box-shadow: none;
}
.hl-switch em {
  position: relative;
  display: block;
  pointer-events: none;
  width: var(--switch-width);
  height: 22px;
  border: 2px solid #233042;
  border-radius: 100px;
  background-color: #233042;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.hl-switch em:before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  right: calc(var(--switch-width) - 22px);
  height: 18px;
  border-radius: 100px;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px;
}
.hl-switch .hl-icon,
.hl-switch .hl-spinner,
.hl-switch i {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-style: normal;
  left: 0;
  top: 0;
  width: 22px;
  height: 22px;
  z-index: 1;
  color: #899cae;
  transition: all 0.3s ease;
}
.hl-switch .hl-icon svg,
.hl-switch .hl-spinner svg,
.hl-switch i svg {
  width: 11px;
  height: 11px;
}
.hl-input-select {
  position: relative;
  display: inline-flex;
}
.hl-input-select.block {
  width: 100%;
}
.hl-input-select .select-caret {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, 40%) rotate(0deg);
  transition: all 0.3s ease;
}
.hl-input-select .select-caret.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0) rotate(0deg);
}
.hl-input-select .select-caret.visible.is-open {
  transform: translate(0, 0) rotate(180deg);
}
.hl-input-select .select-close {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, -40%);
  transition: all 0.3s ease;
}
.hl-input-select .select-close.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-input-select .select-caret.hl-icon,
.hl-input-select .select-close.hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-input-select .icon-close {
  cursor: pointer;
}
.hl-input-select .hl-input {
  display: flex;
  width: 100%;
  height: auto !important;
}
.hl-select-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-select-popper .select-dropdown {
  padding: 12px 0;
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
}
.hl-select-popper .select-dropdown-empty {
  padding: 12px;
  margin: 0;
  text-align: center;
  color: #a0b4c8;
}
.hl-select-popper .select-dropdown-wrap {
  max-height: 300px;
}
.hl-select-popper .select-dropdown-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.hl-select-popper .select-dropdown-list li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 24px;
  min-height: 36px;
  font-size: 14px;
  color: #899cae;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-select-popper .select-dropdown-list li > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hl-select-popper .select-dropdown-list li .hl-icon {
  color: #899cae;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.hl-select-popper .select-dropdown-list li:focus, .hl-select-popper .select-dropdown-list li.hover, .hl-select-popper .select-dropdown-list li:hover {
  color: #7F60F9;
  background-color: #141c2a;
}
.hl-select-popper .select-dropdown-list li:focus .hl-icon, .hl-select-popper .select-dropdown-list li.hover .hl-icon, .hl-select-popper .select-dropdown-list li:hover .hl-icon {
  color: #7F60F9;
}
.hl-select-popper .select-dropdown-list li.menu-divider {
  height: 1px;
  min-height: 1px;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
  border-top: 1px solid #233042;
  pointer-events: none;
}
.hl-select-popper .select-dropdown-list li.is-selected {
  padding-right: 38px;
  background-color: #141c2a;
  font-size: 14px;
}
.hl-select-popper .select-dropdown-list li.is-selected .hl-icon {
  color: #7F60F9;
  position: absolute;
  margin: 0;
  right: 12px;
}
.hl-select-popper .select-dropdown-list li.is-disabled {
  color: #364964;
  cursor: not-allowed;
}
.hl-select-popper .select-dropdown-list li.is-disabled:hover {
  background-color: unset;
}
.hl-select-popper .select-dropdown-list li.hl-option-group {
  padding: 0;
  flex-direction: column;
  height: auto;
}
.hl-select-popper .select-dropdown-list li.hl-option-group:hover {
  background-color: transparent;
}
.hl-select-popper .select-dropdown-list li.hl-option-group strong {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 12px;
  color: #364964;
  height: 36px;
  font-weight: 400;
}
.hl-select-popper .select-dropdown-list li.hl-option-group ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.el-select-dropdown {
  z-index: calc(var(--el-index-top) + 1);
  border-radius: var(--el-border-radius-base);
  box-sizing: border-box;
}
.el-select-dropdown .el-scrollbar.is-empty .el-select-dropdown__list {
  padding: 0;
}
.el-select-dropdown__option-item:hover:not(.hover) {
  background-color: transparent;
}
.el-select-dropdown__empty {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: var(--el-select-font-size);
}
.el-select-dropdown__wrap {
  max-height: 274px;
}
.el-select-dropdown__list {
  list-style: none;
  margin: 6px 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}
.el-select-dropdown__option-item {
  font-size: var(--el-select-font-size);
  padding: 0 32px 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--el-text-color-regular);
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
}
.el-select-dropdown__option-item.is-disabled {
  color: var(--el-text-color-placeholder);
  cursor: not-allowed;
}
.el-select-dropdown__option-item.is-disabled:hover {
  background-color: var(--el-color-white);
}
.el-select-dropdown__option-item.is-selected {
  background-color: var(--el-background-color-base);
  font-weight: 700;
}
.el-select-dropdown__option-item.is-selected:not(.is-multiple) {
  color: var(--el-color-primary);
}
.el-select-dropdown__option-item.hover {
  background-color: var(--el-background-color-base) !important;
}
.el-select-dropdown__option-item:hover {
  background-color: var(--el-background-color-base);
}
.el-select-dropdown.is-multiple .el-select-dropdown__option-item.is-selected {
  color: var(--el-color-primary);
  background-color: var(--el-color-white);
  font-weight: 700;
}
.el-select-dropdown.is-multiple .el-select-dropdown__option-item.is-selected::after {
  position: absolute;
  right: 20px;
  top: 0;
  font-family: element-icons;
  content: "\\e6da";
  font-size: 12px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-select-group {
  margin: 0;
  padding: 0;
}
.el-select-group__wrap {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
.el-select-group__wrap:not(:last-of-type) {
  padding-bottom: 24px;
}
.el-select-group__wrap:not(:last-of-type)::after {
  content: "";
  position: absolute;
  display: block;
  left: 20px;
  right: 20px;
  bottom: 12px;
  height: 1px;
  background: var(--el-border-color-light);
}
.el-select-group__split-dash {
  position: absolute;
  left: 20px;
  right: 20px;
  height: 1px;
  background: var(--el-border-color-light);
}
.el-select-group__title {
  padding-left: 20px;
  font-size: 12px;
  color: var(--el-color-info);
  line-height: 30px;
}
.el-select-group .el-select-dropdown__item {
  padding-left: 20px;
}
.el-select-v2 {
  --el-select-border-color-hover: var(--el-border-color-hover);
  --el-select-disabled-border: var(--el-disabled-border-base);
  --el-select-font-size: var(--el-font-size-base);
  --el-select-close-hover-color: var(--el-text-color-secondary);
  --el-select-input-color: var(--el-text-color-placeholder);
  --el-select-multiple-input-color: var(--el-text-color-regular);
  --el-select-input-focus-border-color: var(--el-color-primary);
  --el-select-input-font-size: 14px ;
}
.el-select-v2 {
  display: inline-block;
  position: relative;
  font-size: var(--el-font-size-base, 14px);
}
.el-select-v2__wrapper {
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 30px 5px 0;
  border: 1px solid var(--el-border-color-base);
  border-radius: var(--el-border-radius-base);
  transition: border-color var(--el-transition-duration-fast) var(--el-ease-in-out-bezier-function);
}
.el-select-v2__wrapper:hover {
  border-color: var(--el-text-color-placeholder);
}
.el-select-v2__wrapper.is-filterable {
  cursor: text;
}
.el-select-v2__wrapper.is-focused {
  border-color: var(--el-color-primary);
}
.el-select-v2__wrapper.is-hovering:not(.is-focused) {
  border-color: var(--el-text-color-placeholder);
}
.el-select-v2__wrapper.is-disabled {
  cursor: not-allowed;
  background-color: var(--el-background-color-base);
  color: var(--el-text-color-placeholder);
  border-color: var(--el-select-disabled-border);
}
.el-select-v2__wrapper.is-disabled:hover {
  border-color: var(--el-select-disabled-border);
}
.el-select-v2__wrapper.is-disabled.is-focus {
  border-color: var(--el-input-focus-border-color);
}
.el-select-v2__wrapper.is-disabled .is-transparent {
  opacity: 1;
  -webkit-user-select: none;
  user-select: none;
}
.el-select-v2__wrapper .el-select-v2__input-wrapper {
  box-sizing: border-box;
  position: relative;
  -webkit-margin-start: 15px;
  margin-inline-start: 15px;
  max-width: 100%;
  overflow: hidden;
}
.el-select-v2__wrapper,
.el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 40px;
}
.el-select-v2__wrapper .el-select-v2__input-wrapper input {
  line-height: 28px;
  height: 28px;
  min-width: 4px;
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;
  appearance: none;
  background: 0 0;
  border: none;
  margin: 0;
  outline: 0;
  padding: 0;
}
.el-select-v2 .el-select-v2__tags-text {
  text-overflow: ellipsis;
  display: inline-block;
  overflow-x: hidden;
  vertical-align: bottom;
}
.el-select-v2__empty {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}
.el-select-v2__popper.el-popper[role=tooltip] {
  background: var(--el-color-white);
  border: 1px solid var(--el-border-color-light);
  box-shadow: var(--el-box-shadow-light);
}
.el-select-v2__popper.el-popper[role=tooltip] .el-popper__arrow::before {
  border: 1px solid var(--el-border-color-light);
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=top] .el-popper__arrow::before {
  border-top-color: transparent;
  border-left-color: transparent;
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=bottom] .el-popper__arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=left] .el-popper__arrow::before {
  border-left-color: transparent;
  border-bottom-color: transparent;
}
.el-select-v2__popper.el-popper[role=tooltip][data-popper-placement^=right] .el-popper__arrow::before {
  border-right-color: transparent;
  border-top-color: transparent;
}
.el-select-v2--medium .el-select-v2__wrapper {
  padding: 3px 30px 3px 0;
}
.el-select-v2--medium .el-select-v2__wrapper,
.el-select-v2--medium .el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 36px;
}
.el-select-v2--medium .el-select-v2__caret {
  line-height: 36px;
}
.el-select-v2--medium .el-select-v2__suffix {
  height: 36px;
}
.el-select-v2--small .el-select-v2__wrapper {
  padding: 3px 30px 3px 0;
  line-height: 32px;
}
.el-select-v2--small .el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 24px;
}
.el-select-v2--small .el-select-v2__wrapper .el-select-v2__input-wrapper input {
  line-height: 24px;
  height: 24px;
}
.el-select-v2--small .el-select-v2__caret {
  line-height: 32px;
}
.el-select-v2--small .el-select-v2__suffix {
  height: 32px;
}
.el-select-v2--mini .el-select-v2__wrapper {
  padding: 1px 30px 1px 0;
  line-height: 28px;
}
.el-select-v2--mini .el-select-v2__wrapper .el-select-v2__input-wrapper {
  line-height: 24px;
}
.el-select-v2--mini .el-select-v2__wrapper .el-select-v2__input-wrapper input {
  line-height: 24px;
  height: 24px;
}
.el-select-v2--mini .el-select-v2__caret {
  line-height: 28px;
}
.el-select-v2--mini .el-select-v2__suffix {
  height: 28px;
}
.el-select-v2 .el-select-v2__selection > span {
  display: inline-block;
}
.el-select-v2:hover .el-select-v2__combobox-input {
  border-color: var(--el-select-border-color-hover);
}
.el-select-v2 .el-select__selection-text {
  text-overflow: ellipsis;
  display: inline-block;
  overflow-x: hidden;
  vertical-align: bottom;
}
.el-select-v2 .el-select-v2__combobox-input {
  padding-right: 35px;
  display: block;
}
.el-select-v2 .el-select-v2__combobox-input:focus {
  border-color: var(--el-select-input-focus-border-color);
}
.el-select-v2__input {
  border: none;
  outline: 0;
  padding: 0;
  margin-left: 15px;
  color: var(--el-select-multiple-input-color);
  font-size: var(--el-select-font-size);
  -webkit-appearance: none;
  appearance: none;
  height: 28px;
}
.el-select-v2__input.is-mini {
  height: 14px;
}
.el-select-v2__close {
  cursor: pointer;
  position: absolute;
  top: 8px;
  z-index: var(--el-index-top);
  right: 25px;
  color: var(--el-select-input-color);
  line-height: 18px;
  font-size: var(--el-select-input-font-size);
}
.el-select-v2__close:hover {
  color: var(--el-select-close-hover-color);
}
.el-select-v2__suffix {
  position: absolute;
  right: 5px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
}
.el-select-v2__caret {
  color: var(--el-select-input-color);
  font-size: var(--el-select-input-font-size);
  transition: transform var(--el-transition-duration);
  transform: rotateZ(180deg);
  cursor: pointer;
}
.el-select-v2__caret.is-reverse {
  transform: rotateZ(0);
}
.el-select-v2__caret.is-show-close {
  font-size: var(--el-select-font-size);
  text-align: center;
  transform: rotateZ(180deg);
  border-radius: var(--el-border-radius-circle);
  color: var(--el-select-input-color);
  transition: var(--el-transition-color);
}
.el-select-v2__caret.is-show-close:hover {
  color: --el-select-close-hover-color;
}
.el-select-v2__selection {
  white-space: normal;
  z-index: var(--el-index-normal);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.el-select-v2__wrapper {
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: var(--el-border-radius-base);
  position: relative;
  transition: all var(--el-transition-duration) var(--el-ease-in-out-bezier-function);
}
.el-select-v2__input-calculator {
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
  white-space: pre;
  z-index: 999;
}
.el-select-v2__selected-item {
  line-height: inherit;
  height: inherit;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
}
.el-select-v2__placeholder {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-margin-start: 15px;
  margin-inline-start: 15px;
  width: calc(100% - 52px);
  color: var(--el-input-font-color, var(--el-text-color-regular));
  font-size: inherit;
}
.el-select-v2__placeholder.is-transparent {
  color: var(--el-text-color-placeholder);
}
.el-select-v2 .el-select-v2__selection .el-tag {
  box-sizing: border-box;
  border-color: transparent;
  margin: 2px 0 2px 6px;
  background-color: #f0f2f5;
}
.el-select-v2 .el-select-v2__selection .el-tag .el-icon-close {
  background-color: var(--el-text-color-placeholder);
  right: -7px;
  color: var(--el-color-white);
}
.el-select-v2 .el-select-v2__selection .el-tag .el-icon-close:hover {
  background-color: var(--el-text-color-secondary);
}
.el-select-v2 .el-select-v2__selection .el-tag .el-icon-close::before {
  display: block;
  transform: translate(0, 0.5px);
}
.hl-selector {
  position: relative;
  display: inline-block;
}
.hl-selector.block {
  width: 100%;
}
.hl-selector .select-caret {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, 40%) rotate(0deg);
  transition: all 0.3s ease;
}
.hl-selector .select-caret.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0) rotate(0deg);
}
.hl-selector .select-caret.visible.is-open {
  transform: translate(0, 0) rotate(180deg);
}
.hl-selector .select-close {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transform: translate(0, -40%);
  transition: all 0.3s ease;
}
.hl-selector .select-close.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-selector .select-caret.hl-icon,
.hl-selector .select-close.hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-selector .hl-input {
  width: 100%;
  height: auto !important;
}
.hl-selector .selector-tags {
  width: 100%;
}
.hl-selector .selector-tags > span {
  display: inline-block;
}
.hl-selector .selector-tags .hl-tag {
  padding: 0 6px;
  height: auto;
  margin: 2px 4px 2px 0;
}
.hl-selector .selector-tags > input {
  display: inline-block;
  width: auto;
  padding: 0 4px;
  border: none;
  background-color: transparent;
  outline: 0;
}
.hl-selector .selector-tags .tag-close {
  cursor: pointer;
}
.hl-selector .selector-tags + input {
  z-index: -1;
}
.hl-selector-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-selector-popper .selector-dropdown {
  padding: 0;
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
}
.hl-selector-popper .selector-dropdown-empty {
  padding: 12px 0;
  margin: 0;
  text-align: center;
  color: #a0b4c8;
}
.hl-form {
  --form-gap: 24px;
  display: flex;
  flex-direction: column;
  row-gap: var(--form-gap);
}
.hl-form.inline {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: var(--form-gap);
}
.hl-form.inline .form-label {
  min-width: auto;
  width: auto;
}
.hl-form.inline .form-content {
  min-width: auto;
  width: auto;
}
.hl-form.inline.info-float .form-content-info {
  top: 0;
  right: 0;
  transform: translate(0, -100%);
}
.hl-form.inline.info-float .form-content-info:before {
  top: auto;
  bottom: 0;
  left: auto;
  right: 14px;
  transform: translate(0, 100%);
  border-right-color: transparent !important;
  border-top-color: #233042;
}
.hl-form.full {
  display: block;
  width: 100%;
}
.hl-form.full .form-content {
  display: block;
  width: 100%;
}
.hl-form.full .form-content .hl-input {
  width: 100%;
}
.hl-form.info-float .form-content-info {
  top: 50%;
  right: 0;
  z-index: 10;
  padding: 4px 12px;
  color: #fff;
  border-radius: 4px;
  background-color: #16202f;
  transform: translate(100%, -50%);
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.hl-form.info-float .form-content-info:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  border: 5px solid transparent;
  border-right-color: transparent;
  transform: translate(-100%, -50%);
}
.hl-form .hl-form-item {
  display: flex;
}
.hl-form .hl-form-item.is-required:not(.is-no-asterisk) .form-label label::before {
  content: "*";
}
.hl-form .hl-form-item .static {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: unset;
}
.hl-form .form-label {
  display: inline-flex;
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-form .form-label label {
  position: relative;
  display: block;
  font-size: 14px;
  padding: 6px 0;
  line-height: 1.5714285714;
}
.hl-form .form-label label::before {
  position: absolute;
  content: "";
  font-family: sans-serif;
  color: #f1416c;
  transform: translate(-100%, 0);
  margin-left: -4px;
}
.hl-form .form-label.top {
  align-self: flex-start;
}
.hl-form .form-label.middle {
  align-self: center;
}
.hl-form .form-label.bottom {
  align-self: flex-end;
}
.hl-form .form-label.left {
  justify-content: flex-start;
  text-align: left;
}
.hl-form .form-label.center {
  justify-content: center;
  text-align: center;
}
.hl-form .form-label.right {
  justify-content: flex-end;
  text-align: right;
}
@media (max-width: 640px) {
  .hl-form .form-label.top-sm {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-sm {
    align-self: center;
  }
  .hl-form .form-label.bottom-sm {
    align-self: flex-end;
  }
  .hl-form .form-label.left-sm {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-sm {
    justify-content: center;
  }
  .hl-form .form-label.right-sm {
    justify-content: flex-end;
  }
}
@media (max-width: 768px) {
  .hl-form .form-label.top-md {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-md {
    align-self: center;
  }
  .hl-form .form-label.bottom-md {
    align-self: flex-end;
  }
  .hl-form .form-label.left-md {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-md {
    justify-content: center;
  }
  .hl-form .form-label.right-md {
    justify-content: flex-end;
  }
}
@media (max-width: 1024px) {
  .hl-form .form-label.top-lg {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-lg {
    align-self: center;
  }
  .hl-form .form-label.bottom-lg {
    align-self: flex-end;
  }
  .hl-form .form-label.left-lg {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-lg {
    justify-content: center;
  }
  .hl-form .form-label.right-lg {
    justify-content: flex-end;
  }
}
@media (max-width: 1280px) {
  .hl-form .form-label.top-xl {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-xl {
    align-self: center;
  }
  .hl-form .form-label.bottom-xl {
    align-self: flex-end;
  }
  .hl-form .form-label.left-xl {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-xl {
    justify-content: center;
  }
  .hl-form .form-label.right-xl {
    justify-content: flex-end;
  }
}
@media (max-width: 1536px) {
  .hl-form .form-label.top-xxl {
    align-self: flex-start;
  }
  .hl-form .form-label.middle-xxl {
    align-self: center;
  }
  .hl-form .form-label.bottom-xxl {
    align-self: flex-end;
  }
  .hl-form .form-label.left-xxl {
    justify-content: flex-start;
  }
  .hl-form .form-label.center-xxl {
    justify-content: center;
  }
  .hl-form .form-label.right-xxl {
    justify-content: flex-end;
  }
}
.hl-form .form-content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.hl-form .form-content-info {
  position: absolute;
  font-size: 12px;
  line-height: 1.6666666667;
  z-index: 1000;
  display: block;
  width: 100%;
  transform: translate(0, 100%);
  bottom: 0;
}
.hl-badge {
  display: inline-block;
  min-width: 12px;
  padding: 3px 6px;
  font-size: 12px;
  line-height: 1;
  color: #899cae;
  text-align: center;
  white-space: nowrap;
  background-color: #213148;
  border-radius: 3px;
  border: 1px solid #213148;
  font-style: normal;
}
.hl-badge.lt {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.lb {
  top: unset;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.rt {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.rb {
  top: unset;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  z-index: 10;
  position: absolute;
}
.hl-badge.dot {
  width: 8px;
  height: 8px;
  min-width: auto;
  max-width: auto;
  padding: 0;
  border-radius: 100% !important;
  line-height: 1;
}
.hl-badge.outline {
  color: #213148;
  background-color: transparent !important;
  border-color: #213148;
}
.hl-badge.round {
  border-radius: 100px;
}
.hl-simple-table {
  --table-gap: 0;
  --table-gap-x: var(--table-gap);
  --table-gap-y: var(--table-gap);
  --table-padding: 12px;
  --table-cell-padding: 12px;
  --table-highlight-color: #212e48;
  --tree-indent: 1em;
  width: 100%;
  padding: 0;
  margin: 0;
  caption-side: bottom;
  border-collapse: collapse;
  text-align: left;
  border-spacing: var(--table-gap-x) var(--table-gap-y);
}
.hl-simple-table > thead {
  color: #EBF0F4;
}
.hl-simple-table > thead > tr > th {
  height: 48px;
  white-space: nowrap;
  font-weight: 500;
  background-color: #213148;
}
.hl-simple-table > thead > tr > th .cell {
  position: relative;
  display: flex;
  align-items: center;
}
.hl-simple-table > thead > tr > th .caret-wrapper {
  display: flex;
  align-items: center;
  height: 18px;
  width: 24px;
  margin-left: 8px;
  cursor: pointer;
  position: relative;
}
.hl-simple-table > thead > tr > th .caret-wrapper.ascending .sort-caret.ascending {
  border-bottom-color: #40a9ff;
}
.hl-simple-table > thead > tr > th .caret-wrapper.descending .sort-caret.descending {
  border-top-color: #40a9ff;
}
.hl-simple-table > thead > tr > th .caret-wrapper .sort-caret {
  width: 0;
  height: 0;
  border: 4px solid transparent;
  position: absolute;
}
.hl-simple-table > thead > tr > th .caret-wrapper .sort-caret.ascending {
  border-bottom-color: #233042;
  top: 0;
}
.hl-simple-table > thead > tr > th .caret-wrapper .sort-caret.descending {
  border-top-color: #233042;
  bottom: 0;
}
.hl-simple-table > thead > tr > th .table-filter-trigger {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 4px;
  align-items: center;
  cursor: pointer;
  color: #899cae;
  transition: all 0.3s ease;
}
.hl-simple-table > thead > tr > th .table-filter-trigger .hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-simple-table > thead > tr > th .table-filter-trigger:hover {
  color: #40a9ff;
}
.hl-simple-table > tbody > tr.empty-content, .hl-simple-table > tbody > tr.more-content {
  text-align: center;
}
.hl-simple-table > tbody > tr.emp td {
  position: relative;
}
.hl-simple-table > tbody > tr.emp em {
  position: absolute;
  top: 1px;
  right: 1px;
  height: 100%;
  color: #fff;
}
.hl-simple-table > tbody > tr.current-row {
  background-color: var(--table-highlight-color);
}
.hl-simple-table th,
.hl-simple-table td {
  height: 48px;
  padding: var(--table-cell-padding);
  border-bottom: 1px solid #233042;
  background-color: transparent;
  word-break: break-all;
}
.hl-simple-table th.first-column-index,
.hl-simple-table td.first-column-index {
  padding-left: calc(var(--table-cell-padding) + var(--tree-indent) * var(--tree-level, 0));
}
.hl-simple-table th:first-child,
.hl-simple-table td:first-child {
  padding-left: var(--table-padding);
}
.hl-simple-table th:first-child.first-column-index,
.hl-simple-table td:first-child.first-column-index {
  padding-left: calc(var(--table-padding) + var(--tree-indent) * var(--tree-level, 0));
}
.hl-simple-table th:last-child,
.hl-simple-table td:last-child {
  padding-right: var(--table-padding);
}
.hl-simple-table th.center,
.hl-simple-table td.center {
  text-align: center;
}
.hl-simple-table th.right,
.hl-simple-table td.right {
  text-align: right;
}
.hl-simple-table th.show-tooltip .cell,
.hl-simple-table td.show-tooltip .cell {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.hl-simple-table th .cell,
.hl-simple-table td .cell {
  display: flex;
  align-items: center;
}
.hl-simple-table th .expand-icon,
.hl-simple-table th .placeholder-icon,
.hl-simple-table td .expand-icon,
.hl-simple-table td .placeholder-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #899cae;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  transition: all 0.2s ease;
}
.hl-simple-table th .expand-icon .hl-icon,
.hl-simple-table th .placeholder-icon .hl-icon,
.hl-simple-table td .expand-icon .hl-icon,
.hl-simple-table td .placeholder-icon .hl-icon {
  color: currentColor;
  width: 14px;
  height: 14px;
}
.hl-simple-table th.expanded .cell .expand-icon, .hl-simple-table th.tree-expanded .cell .expand-icon,
.hl-simple-table td.expanded .cell .expand-icon,
.hl-simple-table td.tree-expanded .cell .expand-icon {
  transform: rotate(90deg);
}
.hl-simple-table > thead > tr > th:first-child,
.hl-simple-table > thead > tr > td:first-child,
.hl-simple-table > tbody > tr > th:first-child,
.hl-simple-table > tbody > tr > td:first-child,
.hl-simple-table > tfoot > tr > th:first-child,
.hl-simple-table > tfoot > tr > td:first-child {
  border-left: 0;
}
.hl-simple-table > thead > tr > th:last-child,
.hl-simple-table > thead > tr > td:last-child,
.hl-simple-table > tbody > tr > th:last-child,
.hl-simple-table > tbody > tr > td:last-child,
.hl-simple-table > tfoot > tr > th:last-child,
.hl-simple-table > tfoot > tr > td:last-child {
  border-right: 0;
}
.hl-simple-table.auto-height > thead > tr > th {
  height: auto;
}
.hl-simple-table.auto-height th,
.hl-simple-table.auto-height td {
  height: auto;
}
.hl-simple-table.borderless {
  border: none;
}
.hl-simple-table.borderless th,
.hl-simple-table.borderless td {
  border: none;
}
.hl-simple-table.border-y {
  border: 1px solid #233042;
}
.hl-simple-table.border-y th,
.hl-simple-table.border-y td {
  border-right: 1px solid #233042;
  border-bottom: none;
}
.hl-simple-table.border-x {
  border: none;
}
.hl-simple-table.border-x th,
.hl-simple-table.border-x td {
  border-right: none;
  border-bottom: 1px solid #233042;
}
.hl-simple-table.bordered {
  border: 1px solid #233042;
}
.hl-simple-table.bordered th,
.hl-simple-table.bordered td {
  border-right: 1px solid #233042;
  border-bottom: 1px solid #233042;
}
.hl-simple-table.border-outline th,
.hl-simple-table.border-outline td {
  border-right: none;
  border-bottom: none;
}
.hl-simple-table.borderless-last > tbody > tr:last-child td {
  border-bottom: none;
}
.hl-simple-table.striped-even > tbody > tr:nth-child(even) td {
  background-color: #182536;
}
.hl-simple-table.striped-odd > tbody > tr:nth-child(odd) td {
  background-color: #182536;
}
.hl-simple-table.hover > tbody > tr:focus, .hl-simple-table.hover > tbody > tr:hover {
  background-color: #141c2a;
}
.hl-simple-table.hover > tbody > tr:focus td, .hl-simple-table.hover > tbody > tr:hover td {
  background: transparent;
}
.hl-simple-table.list {
  border-collapse: separate;
  border: none;
}
.hl-simple-table.list > thead tr,
.hl-simple-table.list > tfoot tr,
.hl-simple-table.list > tbody tr {
  border: 0;
}
.hl-simple-table.list > thead tr th,
.hl-simple-table.list > thead tr td,
.hl-simple-table.list > tfoot tr th,
.hl-simple-table.list > tfoot tr td,
.hl-simple-table.list > tbody tr th,
.hl-simple-table.list > tbody tr td {
  border: 0;
  background-color: transparent;
}
.hl-simple-table.list > thead tr th:first-child,
.hl-simple-table.list > thead tr td:first-child,
.hl-simple-table.list > tfoot tr th:first-child,
.hl-simple-table.list > tfoot tr td:first-child,
.hl-simple-table.list > tbody tr th:first-child,
.hl-simple-table.list > tbody tr td:first-child {
  border-left: 0;
  border-radius: 6px 0 0 6px;
}
.hl-simple-table.list > thead tr th:last-child,
.hl-simple-table.list > thead tr td:last-child,
.hl-simple-table.list > tfoot tr th:last-child,
.hl-simple-table.list > tfoot tr td:last-child,
.hl-simple-table.list > tbody tr th:last-child,
.hl-simple-table.list > tbody tr td:last-child {
  border-left: 0;
  border-radius: 0 6px 6px 0;
}
.hl-simple-table.list > tbody tr {
  background-color: #213148;
}
.hl-simple-table.list > thead tr,
.hl-simple-table.list > tfoot tr {
  background-color: #213148;
}
.hl-simple-table .fixed-left {
  position: sticky;
  left: var(--table-fixed-distance, 0);
  z-index: 10;
  background-color: #213148;
}
.hl-simple-table .fixed-left.show-shadow::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: -1px;
  width: 30px;
  transform: translate(100%, 0);
  box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.1);
}
.hl-simple-table .fixed-right {
  position: sticky;
  right: var(--table-fixed-distance, 0);
  z-index: 10;
  background-color: #213148;
}
.hl-simple-table .fixed-right.show-shadow::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: -1px;
  width: 30px;
  transform: translate(-100%, 0);
  box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.1);
}
.hl-simple-table .fixed-top {
  position: sticky;
  top: 0;
  z-index: 11;
}
.hl-simple-table .fixed-top::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #233042;
}
.hl-simple-table .fixed-top tr th {
  border: none;
}
.hl-simple-table .fixed-top th,
.hl-simple-table .fixed-top td {
  background-color: #213148;
}
.hl-simple-table .fixed-top.fixed-left {
  z-index: 12;
}
.hl-simple-table .fixed-top.fixed-right {
  z-index: 12;
}
.hl-simple-table .fixed-bottom {
  position: sticky;
  top: 0;
  z-index: 11;
}
.hl-simple-table .fixed-bottom th,
.hl-simple-table .fixed-bottom td {
  background-color: #213148;
}
.hl-simple-table.is-scrolling-none .fixed-left.show-shadow::before,
.hl-simple-table.is-scrolling-none .fixed-right.show-shadow::before {
  box-shadow: none;
}
.hl-simple-table.is-scrolling-left .fixed-left.show-shadow::before {
  box-shadow: none;
}
.hl-simple-table.is-scrolling-right .fixed-right.show-shadow::before {
  box-shadow: none;
}
.hl-simple-table tr th.fixed-right, .hl-simple-table tr th.fixed-left {
  background-color: #213148;
}
.table-scroll {
  overflow: auto;
}
.hl-panel {
  --panel-radius: 6px;
  --panel-header-height: 72px;
  --panel-padding: 24px;
  --panel-body-padding: var(--panel-padding);
  --panel-footer-padding: var(--panel-padding);
  --panel-fullscreen-top: 0;
  --panel-fullscreen-bottom: 0;
  --panel-fullscreen-left: 0;
  --panel-fullscreen-right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #1c283b;
  border-radius: var(--panel-radius);
  border: 1px solid #233042;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
}
.hl-panel:after {
  display: block;
  content: "";
  clear: both;
}
.hl-panel .panel-header {
  display: flex;
  align-items: center;
  height: var(--panel-header-height);
  padding: 0 var(--panel-padding);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  flex-shrink: 0;
  flex-grow: 0;
  border-top-right-radius: calc(var(--panel-radius) - 1px);
  border-top-left-radius: calc(var(--panel-radius) - 1px);
  border-bottom: 1px solid #233042;
}
.hl-panel .panel-header:only-child {
  border: none;
  border-bottom-right-radius: calc(var(--panel-radius) - 1px);
  border-bottom-left-radius: calc(var(--panel-radius) - 1px);
}
.hl-panel .panel-header.bottom {
  border-bottom-right-radius: calc(var(--panel-radius) - 1px);
  border-bottom-left-radius: calc(var(--panel-radius) - 1px);
  border-bottom: none;
  border-top: 1px solid #233042;
}
.hl-panel .panel-header .panel-title {
  font-size: 18px;
  color: #899cae;
  flex-grow: 1;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.hl-panel .panel-header .panel-header-right {
  display: flex;
  align-items: center;
  flex-grow: unset;
  flex-shrink: 0;
}
.hl-panel .panel-header .panel-header-right .panel-close {
  width: 20px;
  height: 20px;
  color: #899cae;
  font-size: 20px;
  padding: 2px;
  margin-left: 16px;
  margin-right: -4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: unset;
  border: none;
  background-color: transparent;
  transition: color 0.3s ease;
}
.hl-panel .panel-header .panel-header-right .panel-close .hl-icon {
  width: 100%;
  height: 100%;
}
.hl-panel .panel-header .panel-header-right .panel-close:hover {
  color: #899cae;
}
.hl-panel .panel-header .panel-header-left {
  display: flex;
  align-items: center;
  flex-grow: unset;
  flex-shrink: 0;
  margin-right: 12px;
}
.hl-panel .panel-body {
  padding: var(--panel-body-padding);
}
.hl-panel .panel-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #233042;
  padding-left: var(--panel-padding);
  padding-right: var(--panel-padding);
  padding-top: var(--panel-footer-padding);
  padding-bottom: var(--panel-footer-padding);
  flex-shrink: 0;
  flex-grow: 0;
  border-bottom-right-radius: calc(var(--panel-radius) - 1px);
  border-bottom-left-radius: calc(var(--panel-radius) - 1px);
}
.hl-panel.float-header .panel-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.hl-panel.borderless {
  border: none;
}
.hl-panel.borderless > .panel-header {
  border-bottom: none;
}
.hl-panel.borderless > .panel-header + .panel-body {
  padding-top: 0;
}
.hl-panel.borderless > .panel-footer {
  padding-top: 0;
  border-top: none;
}
.hl-panel.outlineless {
  border: none;
}
.hl-panel.no-shadow {
  box-shadow: none;
}
.hl-panel.no-bg {
  background: none;
}
.hl-panel.fullscreen {
  position: fixed;
  top: var(--panel-fullscreen-top) !important;
  left: var(--panel-fullscreen-left) !important;
  right: var(--panel-fullscreen-right) !important;
  bottom: var(--panel-fullscreen-bottom) !important;
  width: auto !important;
  height: auto !important;
  z-index: 10000;
  border-radius: 0;
}
.hl-panel.fullscreen > .panel-title {
  border-radius: 0;
}
.hl-panel.fullscreen > .panel-body {
  flex-grow: 1;
  height: auto;
  overflow: auto;
}
.hl-panel.collapsed:not(.fullscreen) > .panel-body {
  display: none;
}
.hl-panel.collapsed:not(.fullscreen) > .panel-footer {
  display: none;
}
.hl-panel.inner-scroll {
  display: table;
  border-spacing: 0;
  width: 100%;
}
.hl-panel.inner-scroll .panel-body {
  display: table-row;
  height: 100%;
  padding: unset;
}
.hl-panel.inner-scroll .panel-body .hl-scrollbar {
  overflow: auto;
}
.hl-panel.inner-scroll .panel-body .hl-scrollbar .scrollbar-wrap {
  padding: var(--panel-body-padding);
}
.hl-row {
  --row-gap-x: 0;
  --row-gap-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--row-gap-x) * -0.5);
  margin-right: calc(var(--row-gap-x) * -0.5);
  row-gap: var(--row-gap-y);
}
.hl-row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: calc(var(--row-gap-x) * 0.5);
  padding-right: calc(var(--row-gap-x) * 0.5);
}
.hl-row > .col {
  flex-basis: 0;
  flex-grow: 1;
  width: auto;
}
.hl-row.top {
  align-items: flex-start;
}
.hl-row.middle {
  align-items: center;
}
.hl-row.bottom {
  align-items: flex-end;
}
.hl-row.left {
  justify-content: flex-start;
}
.hl-row.center {
  justify-content: center;
}
.hl-row.right {
  justify-content: flex-end;
}
.hl-row.around {
  justify-content: space-around;
}
.hl-row.between {
  justify-content: space-between;
}
.hl-row.flow {
  display: block;
  margin-left: 0;
  margin-right: 0;
  column-gap: var(--row-gap-x);
  row-gap: var(--row-gap-y);
}
.hl-row.flow > .col,
.hl-row.flow > [class^=col-] {
  padding: 0;
  page-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: var(--row-gap-x);
}
.hl-row.grid {
  display: grid;
  margin-left: 0;
  margin-right: 0;
  column-gap: var(--row-gap-x);
  row-gap: var(--row-gap-y);
}
.hl-row.grid > .col,
.hl-row.grid > [class^=col-] {
  padding: 0;
}
.hl-row.grid-direction-vertical {
  grid-auto-flow: row;
}
.hl-row.grid-direction-horizontal {
  grid-auto-flow: column;
}
.hl-pagination {
  --pagination-gap: 16px;
  --pagination-pager-gap: 4px;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  gap: var(--pagination-gap);
  line-height: 1;
}
.hl-pagination.block {
  display: flex;
}
.hl-pagination.full {
  width: 100%;
}
.hl-pagination.left {
  display: flex;
  justify-content: flex-start;
}
.hl-pagination.center {
  display: flex;
  justify-content: center;
}
.hl-pagination.right {
  display: flex;
  justify-content: flex-end;
}
.hl-pagination.around {
  display: flex;
  justify-content: space-around;
}
.hl-pagination.between {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .hl-pagination.responsive {
    justify-content: space-between;
  }
  .hl-pagination.responsive li:not(:first-child):not(:last-child):not(.active) {
    display: none;
  }
  .hl-pagination.responsive li.select {
    display: block;
  }
}
.hl-pagination ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  font-size: 0;
  flex-wrap: wrap;
  -webkit-text-size-adjust: none;
  list-style-type: none;
  flex-shrink: 0;
  flex-grow: unset;
  gap: var(--pagination-pager-gap);
}
.hl-pagination ul li {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  font-size: 14px;
  color: #899cae;
  background-color: #182536;
  border-radius: 4px;
  border: 1px solid #182536;
  cursor: pointer;
  vertical-align: middle;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;
}
.hl-pagination ul li.is-active, .hl-pagination ul li:hover {
  z-index: 1;
}
.hl-pagination ul li:hover {
  color: #899cae;
  border-color: #212e48;
  background-color: #212e48;
}
.hl-pagination ul li.is-active {
  color: #FFFFFF;
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-pagination ul li.is-active a {
  color: inherit;
}
.hl-pagination ul li.pagination-phase-next, .hl-pagination ul li.pagination-phase-prev {
  border: 0;
}
.hl-pagination ul li.pagination-phase-next .hl-icon, .hl-pagination ul li.pagination-phase-prev .hl-icon {
  width: 14px;
  height: 14px;
  pointer-events: none;
}
.hl-pagination ul li.pagination-phase-next:hover .icon-more {
  opacity: 0;
  visibility: hidden;
  transform: translate(100%, 0);
}
.hl-pagination ul li.pagination-phase-next:hover .icon-next {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-pagination ul li.pagination-phase-prev:hover .icon-more {
  opacity: 0;
  visibility: hidden;
  transform: translate(-100%, 0);
}
.hl-pagination ul li.pagination-phase-prev:hover .icon-prev {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-pagination ul li .icon-more {
  position: absolute;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease;
}
.hl-pagination ul li .icon-next,
.hl-pagination ul li .icon-prev {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}
.hl-pagination ul li .icon-next {
  transform: translate(-100%, 0);
}
.hl-pagination ul li .icon-prev {
  transform: translate(100%, 0);
}
.hl-pagination ul li.is-disabled {
  color: #364964 !important;
  border-color: #233042 !important;
  background-color: #182536 !important;
  cursor: not-allowed;
}
.hl-pagination ul li.select {
  display: none;
}
.hl-pagination .hl-button {
  height: 36px;
  min-width: 36px;
}
.hl-pagination .hl-button.pagination-prev {
  padding: 0;
}
.hl-pagination .hl-button.pagination-next {
  padding: 0;
}
.hl-pagination .pagination-total {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-pagination .pagination-control {
  flex-shrink: 0;
  flex-grow: unset;
  width: 110px;
}
.hl-pagination .pagination-control .hl-input-select {
  width: 100%;
}
.hl-pagination .pagination-control .hl-input-select .hl-input {
  height: 36px;
}
.hl-pagination .pagination-goto {
  align-items: center;
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-pagination .pagination-goto .hl-input {
  width: 40px;
  margin: 0 8px;
}
.hl-pagination .pagination-goto .hl-input input {
  padding: 0 4px;
  text-align: center;
}
.hl-pagination .pagination-goto .hl-input input[type=number] {
  -moz-appearance: textfield;
}
.hl-pagination .pagination-goto .hl-input input[type=number]::-webkit-outer-spin-button, .hl-pagination .pagination-goto .hl-input input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.hl-pagination .pagination-box {
  margin: 0 8px;
}
.hl-pagination.line .hl-button:disabled {
  color: #364964 !important;
  border-color: none;
  background-color: transparent;
  cursor: not-allowed;
}
.hl-pagination.line .hl-button:active, .hl-pagination.line .hl-button:focus, .hl-pagination.line .hl-button:hover {
  background-color: inherit;
}
.hl-pagination.line ul li {
  border-radius: 0;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: transparent;
  margin-right: 0;
}
.hl-pagination.line ul li:hover {
  color: #899cae;
}
.hl-pagination.line ul li.is-active {
  color: #40a9ff;
  background-color: inherit;
  border-color: #40a9ff;
}
.hl-pagination.line ul li.is-disabled {
  border-color: transparent !important;
}
.hl-pagination.line ul li.is-disabled:hover {
  border-color: transparent !important;
}
.hl-pagination.line .hl-button {
  border: none;
}
.hl-pagination.line .hl-input-select .hl-input {
  border: none;
}
.hl-dialog {
  position: fixed;
}
.hl-dialog .hl-panel {
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.05), 0 0 50px 0 rgba(0, 0, 0, 0.1);
}
.hl-dialog .hl-panel .panel-header {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-dialog .hl-panel .panel-body {
  max-height: 100%;
}
.hl-dialog .hl-panel .panel-footer {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-dialog.at-center {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow: auto;
}
.hl-dialog.at-center .hl-panel {
  position: relative;
  margin: 40px auto;
}
.hl-dialog.at-left {
  left: 0;
  top: 0;
  bottom: 0;
}
.hl-dialog.at-left .hl-panel[role=drawer] {
  border-radius: 0;
  height: 100%;
}
.hl-dialog.at-left .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-left .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-right {
  right: 0;
  top: 0;
  bottom: 0;
}
.hl-dialog.at-right .hl-panel[role=drawer] {
  border-radius: 0;
  height: 100%;
}
.hl-dialog.at-right .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-right .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-top {
  top: 0;
  left: 0;
  right: 0;
}
.hl-dialog.at-top .hl-panel[role=drawer] {
  border-radius: 0;
  width: 100% !important;
}
.hl-dialog.at-top .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-top .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-bottom {
  bottom: 0;
  left: 0;
  right: 0;
}
.hl-dialog.at-bottom .hl-panel[role=drawer] {
  border-radius: 0;
  width: 100% !important;
}
.hl-dialog.at-bottom .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-bottom .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-dialog.at-fullscreen {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.hl-dialog.at-fullscreen .hl-panel {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: auto !important;
  height: auto !important;
  transform: translate(0) !important;
}
.hl-dialog.at-fullscreen .hl-panel[role=drawer] {
  border-radius: 0;
}
.hl-dialog.at-fullscreen .hl-panel[role=drawer] .panel-header,
.hl-dialog.at-fullscreen .hl-panel[role=drawer] .panel-footer {
  border-radius: 0;
}
.hl-message-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hl-message-box .hl-panel {
  min-width: 360px;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.05), 0 0 50px 0 rgba(0, 0, 0, 0.1);
}
.hl-message-box .hl-panel .panel-body {
  text-align: center;
}
.hl-message-box .hl-panel .panel-footer .hl-button {
  min-width: 80px;
  margin-right: 16px;
}
.hl-message-box .hl-panel .panel-footer .hl-button:last-child, .hl-message-box .hl-panel .panel-footer .hl-button:only-child {
  margin-right: 0;
}
.hl-thumb {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  flex-grow: 0;
}
.hl-thumb img {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: unset;
}
.hl-thumb > span {
  white-space: nowrap;
  line-height: 1;
  font-size: 16px;
  color: #FFFFFF;
}
.hl-thumb.full {
  width: 100%;
  height: 100%;
  display: flex;
}
.hl-thumb.full img {
  object-fit: unset;
}
.hl-thumb.radius {
  border-radius: 6px;
}
.hl-thumb.radius img {
  border-radius: inherit;
}
.hl-thumb.round {
  border-radius: 50%;
}
.hl-thumb.round img {
  border-radius: inherit;
}
.hl-thumb.bordered {
  box-sizing: content-box;
  border: 2px solid #1c283b;
}
.hl-thumb.bordered:hover {
  z-index: 1;
}
.hl-thumb .fill {
  object-fit: fill;
}
.hl-thumb .contain {
  object-fit: contain;
}
.hl-thumb .cover {
  object-fit: cover;
}
.hl-thumb .scale-down {
  object-fit: scale-down;
}
.hl-thumb .thumb-inner {
  vertical-align: top;
}
.hl-thumb .thumb-inner-center {
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
}
.hl-thumb .thumb-error {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #a0b4c8;
}
.hl-thumb .thumb-preview {
  cursor: pointer;
}
.hl-image-viewer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.hl-image-viewer .image-viewer-btn {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  opacity: 0.8;
  cursor: pointer;
  user-select: none;
}
.hl-image-viewer .image-viewer-btn.close {
  top: 40px;
  right: 40px;
}
.hl-image-viewer .image-viewer-btn.close, .hl-image-viewer .image-viewer-btn.next, .hl-image-viewer .image-viewer-btn.prev {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #fff;
  background-color: rgba(33, 36, 53, 0.8);
}
.hl-image-viewer .image-viewer-btn.prev {
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
}
.hl-image-viewer .image-viewer-btn.next {
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  text-indent: 2px;
}
.hl-image-viewer .image-viewer-canvas {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hl-image-viewer .image-viewer-canvas img {
  display: unset;
  max-width: unset;
  width: unset;
  height: unset;
  object-fit: unset;
}
.hl-image-viewer .image-viewer-tools {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  border-radius: 12px;
  left: 50%;
  bottom: 32px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transform: translateX(-50%);
  background-color: rgba(33, 36, 53, 0.8);
  width: 300px;
}
.hl-image-viewer .image-viewer-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(33, 36, 53, 0.8);
}
.viewer-fade-enter-active {
  animation: viewer-fade-in 0.3s;
}
.viewer-fade-leave-active {
  animation: viewer-fade-out 0.3s;
}
@keyframes viewer-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes viewer-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
.hl-progress-title .progress-number {
  position: absolute;
  right: 0;
}
.hl-progress {
  position: relative;
  display: flex;
  width: 100%;
  --progress-gap: 8px;
  --progress-bar-color: #40a9ff;
  --progress-track-color: #233042;
}
.hl-progress.left .progress-wrap {
  justify-content: flex-start;
}
.hl-progress.center .progress-wrap {
  justify-content: center;
}
.hl-progress.right .progress-wrap {
  justify-content: flex-end;
}
.hl-progress.block {
  display: flex;
}
.hl-progress .progress-wrap {
  display: flex;
  width: 100%;
  background-color: var(--progress-track-color);
  border-radius: 4px;
  font-size: 12px;
  line-height: 1;
}
.hl-progress .progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0%;
  height: var(--progress-height, 16px);
  font-size: inherit;
  line-height: inherit;
  color: #FFFFFF;
  text-align: center;
  background-color: var(--progress-bar-color);
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
  white-space: nowrap;
  transition: width 0.6s ease, background-color 0.6s ease;
}
.hl-progress .progress-bar:only-child {
  border-radius: 4px;
}
.hl-progress .progress-bar:not(:only-child):first-child {
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.hl-progress .progress-bar:not(:only-child):last-child {
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.hl-progress .progress-bar .progress-label {
  line-height: 1;
}
.hl-progress .progress-bar.striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.hl-progress .progress-bar.striped.is-active {
  animation: progress-bar-stripes 2s linear infinite;
}
.hl-progress .progress-bar.indicating.is-active {
  position: relative;
  animation: none;
}
.hl-progress .progress-bar.indicating.is-active:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  background-color: #fff;
  border-radius: inherit;
  opacity: 0;
  animation: progress-active 3s ease 0s infinite;
}
.hl-progress .progress-bar.disabled {
  background-color: #364964;
}
.hl-progress.round .progress-wrap {
  border-radius: 100px;
}
.hl-progress.round .progress-wrap .progress-bar:only-child {
  border-radius: 100px;
}
.hl-progress.round .progress-wrap .progress-bar:not(:only-child):first-child {
  border-radius: 100px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.hl-progress.round .progress-wrap .progress-bar:not(:only-child):last-child {
  border-radius: 100px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.hl-progress.line {
  flex-direction: column;
  gap: var(--progress-gap);
}
.hl-progress.line .progress-wrap {
  font-size: 12px;
}
.hl-progress.line .progress-bar {
  height: var(--progress-height, 4px);
}
.hl-progress.line .progress-content {
  display: flex;
  justify-content: space-between;
}
.hl-progress.line .progress-percentage,
.hl-progress.line .progress-label {
  display: flex;
  align-items: center;
  color: #899cae;
  font-size: 12px;
}
.hl-progress.line .progress-label {
  display: flex;
}
.hl-progress.line.change-places .progress-percentage {
  order: 100;
}
.hl-progress.dashboard, .hl-progress.circle {
  display: inline-flex;
  width: 128px;
  height: 128px;
}
.hl-progress.dashboard .progress-content, .hl-progress.circle .progress-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: currentColor;
}
.hl-progress.dashboard .progress-content .progress-label, .hl-progress.circle .progress-content .progress-label {
  display: flex;
}
.hl-progress.dashboard .progress-content .progress-percentage, .hl-progress.circle .progress-content .progress-percentage {
  display: flex;
  font-size: 18px;
}
.hl-progress.dashboard .progress-circle, .hl-progress.circle .progress-circle {
  width: 100%;
  height: 100%;
}
.hl-progress.dashboard .progress-circle svg, .hl-progress.circle .progress-circle svg {
  width: 100%;
  height: 100%;
}
.hl-progress.dashboard .progress-circle svg .progress-circle-track, .hl-progress.circle .progress-circle svg .progress-circle-track {
  stroke: var(--progress-track-color);
  stroke-width: var(--progress-height, 8px);
}
.hl-progress.dashboard .progress-circle svg .progress-circle-path, .hl-progress.circle .progress-circle svg .progress-circle-path {
  stroke: var(--progress-bar-color);
  stroke-width: var(--progress-height, 8px);
}
.hl-progress.no-label {
  margin-top: 0;
}
.hl-progress.no-label .progress-percentage,
.hl-progress.no-label .progress-label,
.hl-progress.no-label .progress-content .progress-percentage,
.hl-progress.no-label .progress-content .progress-label {
  display: none;
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-active {
  0% {
    width: 0;
    opacity: 0.4;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
.hl-dropdown {
  display: inline-block;
  position: relative;
}
.hl-dropdown .caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 8px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.hl-dropdown-popper {
  position: absolute;
  min-width: 100px;
  z-index: 2000;
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
}
.hl-dropdown-popper .hl-dropdown-menu {
  margin: 0;
  padding: 12px 0;
  list-style-type: none;
}
.hl-dropdown-popper .hl-dropdown-menu li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #899cae;
  font-size: 14px;
  padding: 4px 24px;
  min-height: 36px;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-dropdown-popper .hl-dropdown-menu li > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hl-dropdown-popper .hl-dropdown-menu li .hl-icon {
  color: #899cae;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.hl-dropdown-popper .hl-dropdown-menu li.hover, .hl-dropdown-popper .hl-dropdown-menu li:hover {
  color: #7F60F9;
  background-color: #141c2a;
}
.hl-dropdown-popper .hl-dropdown-menu li.hover .hl-icon, .hl-dropdown-popper .hl-dropdown-menu li:hover .hl-icon {
  color: #7F60F9;
}
.hl-dropdown-popper .hl-dropdown-menu li.menu-divider {
  height: 1px;
  min-height: 1px;
  margin: 8px 0;
  padding: 0;
  overflow: hidden;
  border-top: 1px solid #233042;
  pointer-events: none;
}
.hl-dropdown-popper .hl-dropdown-menu li.is-selected {
  padding-right: 48px;
  color: #7F60F9;
}
.hl-dropdown-popper .hl-dropdown-menu li.is-selected::before {
  content: "\\e6ad";
  position: absolute;
  right: 16px;
  font-family: system-icon;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hl-dropdown-popper .hl-dropdown-menu li.is-disabled {
  color: #364964;
  cursor: not-allowed;
}
.hl-scrollbar {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.hl-scrollbar:active .scrollbar-bar, .hl-scrollbar:focus .scrollbar-bar, .hl-scrollbar:hover .scrollbar-bar {
  opacity: 1;
}
.hl-scrollbar .scrollbar-wrap {
  overflow: auto;
  height: 100%;
}
.hl-scrollbar .scrollbar-wrap-hidden {
  scrollbar-width: none;
}
.hl-scrollbar .scrollbar-wrap-hidden::-webkit-scrollbar {
  display: none;
}
.hl-scrollbar .scrollbar-bar {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1000;
  border-radius: 100px;
  background-color: none;
  transition: all 0.4s ease;
}
.hl-scrollbar .scrollbar-bar.is-vertical {
  width: 4px;
  top: 0;
}
.hl-scrollbar .scrollbar-bar.is-vertical div {
  width: 100%;
}
.hl-scrollbar .scrollbar-bar.is-horizontal {
  height: 4px;
  left: 0;
}
.hl-scrollbar .scrollbar-bar.is-horizontal div {
  height: 100%;
}
.hl-scrollbar .scrollbar-bar .scrollbar-thumb {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.4s background-color;
}
.hl-scrollbar .scrollbar-bar .scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.hl-scrollbar .scrollbar-bar .scrollbar-thumb:active {
  background-color: rgba(0, 0, 0, 0.5);
}
.hl-loading-parent--relative {
  position: relative !important;
}
.loading-parent-hidden {
  overflow: hidden !important;
}
.hl-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s ease;
}
.hl-loading-mask.is-fullscreen {
  position: fixed;
}
.hl-loading-mask.is-fullscreen .loading-spinner {
  margin-top: -25px;
}
.hl-loading-mask.is-fullscreen .loading-spinner .circular {
  height: 50px;
  width: 50px;
}
.hl-loading-mask .loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
.hl-loading-mask .loading-spinner .loading-text {
  color: #409EFF;
  margin: 3px 0;
  font-size: 14px;
}
.hl-loading-mask .loading-spinner .circular {
  height: 42px;
  width: 42px;
  -webkit-animation: loading-rotate-anim 2s linear infinite;
  animation: loading-rotate-anim 2s linear infinite;
}
.hl-loading-mask .loading-spinner .path {
  -webkit-animation: loading-dash-anim 1.5s ease-in-out infinite;
  animation: loading-dash-anim 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409EFF;
  stroke-linecap: round;
}
.hl-loading-mask .loading-spinner i {
  color: #409EFF;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
@-webkit-keyframes loading-rotate-anim {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading-rotate-anim {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loading-dash-anim {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes loading-dash-anim {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
.hl-spinner {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  vertical-align: middle;
  --spinner-width: 24px;
  --spinner-height: 24px;
  --spinner-duration: 2s;
  --spinner-color: $pageFontColor;
  width: var(--spinner-width);
  height: var(--spinner-height);
  color: var(--spinner-color);
}
.hl-spinner.around-right .spinner-wrap {
  animation: spinner-rotate var(--spinner-duration) linear infinite;
}
.hl-spinner.around-left .spinner-wrap {
  animation: spinner-rotate var(--spinner-duration) linear infinite;
  animation-direction: reverse;
}
.hl-spinner.none .spinner-wrap {
  animation: unset;
}
.hl-spinner.is-finish {
  animation: unset;
}
.hl-spinner.is-finish .spinner-wrap {
  animation: spinner-rotate 2s linear infinite;
  visibility: hidden;
  opacity: 0;
}
.hl-spinner.is-finish .show-result {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.hl-spinner .spinner-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  text-align: center;
  transition: 0.3s;
}
.hl-spinner .spinner-wrap .hl-icon {
  width: 100%;
  height: 100%;
}
.hl-spinner .show-result {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 100%;
  visibility: hidden;
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.6s, visibility 0.6s;
}
.hl-spinner svg {
  width: 100%;
  height: 100%;
  display: block;
}
.hl-spinner .tail circle {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 90 120;
  stroke-dashoffset: 0;
  stroke-width: 4px;
  stroke-linecap: round;
  animation: icon-loading-dash 1.5s ease-in-out infinite;
}
@keyframes icon-loading-dash {
  0% {
    stroke-dasharray: 1 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes spinner-rotate {
  to {
    transform: rotate(1turn);
  }
}
.hl-popover {
  position: absolute;
  width: auto;
  z-index: 2000;
  padding: 16px;
  background-color: #213148;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid #233042;
  word-break: break-all;
}
.hl-popover.no-style {
  padding: unset;
  background-color: unset;
  box-shadow: unset;
  border-radius: unset;
  border: unset;
}
.hl-popover.tooltip {
  font-size: 12px;
  padding: 4px 12px;
}
.hl-popover.dark {
  background-color: #212435;
  color: #FFFFFF;
  border: none;
}
.hl-popover.dark .popper-arrow::before {
  border-color: #212435;
  background-color: #212435;
}
.hl-popover .popover-title {
  color: currentColor;
  margin-bottom: 4px;
}
.hl-popover p {
  margin-bottom: 0;
}
.hl-popover .popper-arrow {
  width: 12px;
  height: 12px;
  z-index: 1;
}
.hl-popover .popper-arrow::before {
  position: absolute;
  width: 12px;
  height: 12px;
  z-index: -1;
  content: " ";
  transform: rotate(45deg);
  background: #213148;
  box-sizing: border-box;
  border: 1px solid #233042;
  right: 0;
}
.hl-popover[data-popper-placement^=top] .popper-arrow {
  bottom: -6px;
}
.hl-popover[data-popper-placement^=top] .popper-arrow::before {
  border-top-color: transparent;
  border-left-color: transparent;
}
.hl-popover[data-popper-placement^=bottom] .popper-arrow {
  top: -6px;
}
.hl-popover[data-popper-placement^=bottom] .popper-arrow::before {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.hl-popover[data-popper-placement^=right] .popper-arrow {
  left: -6px;
}
.hl-popover[data-popper-placement^=right] .popper-arrow::before {
  border-top-color: transparent;
  border-right-color: transparent;
}
.hl-popover[data-popper-placement^=left] .popper-arrow {
  right: -6px;
}
.hl-popover[data-popper-placement^=left] .popper-arrow::before {
  border-top-color: transparent;
  border-right-color: transparent;
}
.hl-autocomplete {
  position: relative;
  display: inline-block;
}
.hl-autocomplete.block {
  display: block;
  width: 100%;
}
.hl-autocomplete.block .hl-input {
  width: 100%;
}
.hl-autocomplete-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-autocomplete-popper .autocomplete-dropdown {
  padding: 12px 0;
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: #899cae;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li:hover {
  background-color: transparent !important;
}
.hl-autocomplete-popper .autocomplete-dropdown.is-loading li .hl-icon {
  width: 24px;
  height: 24px;
}
.hl-autocomplete-popper .autocomplete-dropdown-wrap {
  max-height: 300px;
}
.hl-autocomplete-popper .autocomplete-dropdown-list {
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 24px;
  min-height: 36px;
  color: #899cae;
  font-size: 14px;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li > div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li .hl-spinner {
  color: #899cae;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li .hl-icon {
  color: #899cae;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li:focus, .hl-autocomplete-popper .autocomplete-dropdown-list li.hover, .hl-autocomplete-popper .autocomplete-dropdown-list li:hover {
  color: #7F60F9;
  background-color: #141c2a;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li:focus .hl-icon, .hl-autocomplete-popper .autocomplete-dropdown-list li.hover .hl-icon, .hl-autocomplete-popper .autocomplete-dropdown-list li:hover .hl-icon {
  color: #7F60F9;
}
.hl-autocomplete-popper .autocomplete-dropdown-list li.is-disabled {
  color: #364964;
  cursor: not-allowed;
}
.hl-tag {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 2px 12px;
  font-size: 14px;
  color: #899cae;
  border-radius: 4px;
  background-color: #0f1520;
  border: 1px solid #233042;
  white-space: nowrap;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hl-tag:only-child {
  margin: 0;
}
.hl-tag.is-focus {
  box-shadow: 0 0 0 1px black;
}
.hl-tag.outline {
  background-color: transparent;
  background-image: none;
  border-color: #233042;
}
.hl-tag.round {
  border-radius: 100px;
}
.hl-tag span {
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
.hl-tag .tag-close {
  display: flex;
  margin-left: 4px;
  cursor: pointer;
  width: 14px;
  height: 14px;
  flex-grow: 0;
  flex-shrink: 0;
  opacity: 0.6;
  margin-right: -3px;
}
.hl-tag .tag-close:hover {
  opacity: 1;
}
.hl-date-input .range-input {
  display: flex;
  align-items: center;
  width: 100%;
}
.hl-date-input .range-input input {
  width: 100%;
  border: none;
  text-align: center;
  flex-grow: 1;
  background-color: transparent;
  color: currentColor;
  font-size: inherit;
}
.hl-date-input .range-input .range-separator {
  font-family: sans-serif;
  display: block;
  padding: 0 8px;
  flex-grow: 1;
}
.hl-date-input .range-input .hl-icon.close {
  cursor: pointer;
}
.hl-date-input .range-input .hl-icon.close:hover {
  color: #7F60F9;
}
.hl-date-input.date.thin input, .hl-date-input.time.thin input {
  padding: 6px 12px !important;
}
.hl-date-picker {
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
}
.hl-date-picker .picker-wrapper {
  position: relative;
  display: flex;
}
.hl-date-picker .picker-sidebar {
  border-right: 1px solid #233042;
  padding: 24px;
}
.hl-date-picker .picker-sidebar .hl-button {
  width: 100%;
  display: flex;
}
.hl-date-picker .picker-body {
  padding: 24px;
}
.hl-date-picker .picker-body .picker-time-header {
  margin-bottom: 16px;
}
.hl-date-picker .picker-body .picker-time-header .group-item {
  width: 0px;
}
.hl-date-picker .picker-body .picker-time-header .hl-input {
  display: flex;
}
.hl-date-picker .picker-body .picker-time-header .hl-input {
  text-align: center;
}
.hl-date-picker .picker-body .picker-time-header .hl-time-picker {
  position: absolute;
  z-index: 1;
}
.hl-date-picker .picker-body .picker-body-header-wrapper {
  display: flex;
}
.hl-date-picker .picker-body .picker-body-header-wrapper .range-separator {
  padding: 0 8px;
  border: none;
  background-color: transparent;
}
.hl-date-picker .picker-body .picker-body-header-wrapper .range-separator::before {
  font-family: sans-serif;
  content: "-";
  color: currentColor;
}
.hl-date-picker .picker-body .picker-body-header {
  margin-bottom: 16px;
}
.hl-date-picker .picker-body .picker-body-header .group-item.static {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 56px;
}
.hl-date-picker .picker-body .picker-body-header .group-item.static:last-child {
  justify-content: flex-end;
}
.hl-date-picker .picker-body .picker-body-header .hl-button {
  padding: 0 4px;
  height: 28px;
  border: none;
  background: none;
  box-shadow: none;
  color: #899cae;
  font-size: 14px;
}
.hl-date-picker .picker-body .picker-body-header .hl-button:hover {
  color: #40a9ff;
}
.hl-date-picker .picker-body .picker-body-header .hl-button:disabled, .hl-date-picker .picker-body .picker-body-header .hl-button.is-disabled {
  cursor: not-allowed;
  background-color: transparent;
  color: #364964;
}
.hl-date-picker .picker-body .picker-body-header .header-label {
  padding: 0;
  display: flex;
  justify-content: center;
}
.hl-date-picker .picker-body .picker-body-header .header-label .hl-button {
  background-color: transparent;
}
.hl-date-picker .picker-body .picker-body-header .header-label .hl-button:focus, .hl-date-picker .picker-body .picker-body-header .header-label .hl-button:hover {
  color: #40a9ff;
}
.hl-date-picker .picker-body .picker-body-content.is-left {
  float: left;
  margin-right: 24px;
}
.hl-date-picker .picker-body .picker-body-content.is-right {
  float: right;
}
.hl-date-picker .picker-body .picker-body-content .picker-table {
  table-layout: fixed;
  font-size: 13px;
  user-select: none;
  border-spacing: 0;
  border-collapse: collapse;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td {
  color: #899cae;
  border-radius: 0;
  background-color: #141c2a;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td.today, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td.today {
  color: #899cae;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td:first-child, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td:last-child, .hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row:hover td:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td.start-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.is-week-mode .table-row.current td.end-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table.month-table tbody td, .hl-date-picker .picker-body .picker-body-content .picker-table.year-table tbody td {
  height: 56px;
  width: 56px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody th,
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td {
  position: relative;
  width: 32px;
  height: 32px;
  padding: 0;
  text-align: center;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td {
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td:hover {
  color: #40a9ff;
  background-color: #141c2a;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  height: 100%;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.today {
  background-color: #212e48;
  color: #40a9ff;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.today::before {
  content: "";
  position: absolute;
  bottom: 4px;
  right: 4px;
  display: block;
  border-style: solid;
  border-width: 4px;
  border-color: #40a9ff;
  border-left-color: transparent;
  border-top-color: transparent;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.prev-month, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.next-month {
  color: #364964;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.prev-month:hover, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.next-month:hover {
  color: #364964;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range {
  border-radius: 0;
  background-color: #141c2a;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.today {
  color: #899cae;
  background-color: #141c2a;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.today::before {
  border-color: transparent #40a9ff #40a9ff transparent;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.start-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.in-range.end-date {
  color: #FFFFFF;
  background-color: #40a9ff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.selected, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.current {
  background-color: #40a9ff;
  color: #FFFFFF !important;
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td.selected:hover, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.current:hover {
  color: #FFFFFF;
  background-color: rgba(64, 169, 255, 0.8);
}
.hl-date-picker .picker-body .picker-body-content .picker-table tbody td:disabled, .hl-date-picker .picker-body .picker-body-content .picker-table tbody td.disabled {
  cursor: not-allowed;
  background-color: transparent;
  color: #364964;
}
.hl-date-picker .picker-footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #233042;
}
.hl-date-picker .picker-footer .hl-button:last-child {
  margin-left: 12px;
}
.hl-time-picker {
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
}
.hl-time-picker .picker-header {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
.hl-time-picker .picker-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 12px;
}
.hl-time-picker .picker-cell.is-left {
  float: left;
  margin-right: 24px;
}
.hl-time-picker .picker-cell.is-right {
  float: right;
}
.hl-time-picker .picker-content {
  position: relative;
  width: 200px;
}
.hl-time-picker .picker-content::before {
  content: "";
  top: 50%;
  position: absolute;
  transform: translate(0, -50%);
  height: 32px;
  z-index: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  background-color: #141c2a;
}
.hl-time-picker .picker-content .time-spinner {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.hl-time-picker .picker-content .spinner-wrapper {
  max-height: 160px;
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
  position: relative;
  flex-grow: 1;
  border-right: 1px solid #233042;
}
.hl-time-picker .picker-content .spinner-wrapper:last-child {
  border: none;
}
.hl-time-picker .picker-content .spinner-wrapper.is-arrow .spinner-list {
  transform: translateY(-32px);
}
.hl-time-picker .picker-content .spinner-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.hl-time-picker .picker-content .spinner-list::before {
  content: "";
  display: block;
  width: 100%;
  height: 64px;
}
.hl-time-picker .picker-content .spinner-list::after {
  content: "";
  display: block;
  width: 100%;
  height: 64px;
}
.hl-time-picker .picker-content .spinner-list .spinner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  color: #899cae;
}
.hl-time-picker .picker-content .spinner-list .disabled {
  color: #364964;
}
.hl-time-picker .picker-content .spinner-arrow {
  position: absolute;
  width: 100%;
  height: 32px;
  border: none;
  z-index: 1;
}
.hl-time-picker .picker-content .spinner-arrow:active, .hl-time-picker .picker-content .spinner-arrow:focus {
  background-color: transparent;
}
.hl-time-picker .picker-content .spinner-arrow.up {
  top: 0;
  bottom: auto;
}
.hl-time-picker .picker-content .spinner-arrow.down {
  bottom: 0;
  top: auto;
}
.hl-time-picker .picker-footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #233042;
}
.hl-time-picker .picker-footer .hl-button:last-child {
  margin-left: 12px;
}
.hl-datepicker-popper {
  position: absolute;
  width: auto;
  z-index: 2000;
}
.hl-tree {
  --tree-gap: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.hl-tree.is-dragging .tree-node-content {
  cursor: move;
}
.hl-tree.is-dragging .tree-node-content * {
  pointer-events: none;
}
.hl-tree.is-dragging.is-drop-not-allow .tree-node-content {
  cursor: not-allowed;
}
.hl-tree.highlight-current .tree-node.is-current > .tree-node-content {
  background-color: #141c2a;
}
.tree-empty-block {
  position: relative;
  min-height: 80px;
  text-align: center;
  width: 100%;
  height: 100%;
}
.tree-empty-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #a0b4c8;
  font-size: 14px;
}
.tree-drop-indicator {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #40a9ff;
}
.tree-drop-indicator::before {
  content: "";
  position: absolute;
  left: -10px;
  top: -4px;
  width: 10px;
  height: 10px;
  border: 2px solid #40a9ff;
  border-radius: 100px;
}
.tree-node {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: 100%;
  outline: 0;
}
.tree-node.is-drop-inner > .tree-node-content {
  position: relative;
}
.tree-node.is-drop-inner > .tree-node-content .tree-node-label::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: 4px;
  border: 1px dashed #40a9ff;
  background-color: rgba(64, 169, 255, 0.08);
}
.tree-node .tree-node-children {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.tree-node .tree-node-children .tree-node .tree-node-content {
  color: #899cae;
  background-color: #213148;
}
.tree-node .tree-node-children .tree-node .tree-node-content:hover {
  color: #899cae;
  background-color: #141c2a;
}
.tree-node.is-expanded > .tree-node-children {
  display: block;
}
.tree-node-content {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  color: #899cae;
  background-color: #213148;
  margin-bottom: var(--tree-gap);
  transition: background-color 0.15s ease;
}
.tree-node-content:hover {
  color: #899cae;
  background-color: #141c2a;
}
.tree-node-content > label.hl-checkbox {
  margin-right: 8px;
}
.tree-node-content .tree-node-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #899cae;
  font-size: 14px;
  padding: 7px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  flex-grow: unset;
  transform: rotate(0);
  transition: all 0.3s ease;
}
.tree-node-content .tree-node-arrow .hl-icon {
  width: 14px;
  height: 14px;
}
.tree-node-content .tree-node-arrow.expanded {
  transform: rotate(90deg);
}
.tree-node-content .tree-node-arrow.is-leaf {
  color: transparent;
  cursor: default;
}
.tree-node-content .tree-node-icon {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  margin: 0 12px 0 4px;
}
.tree-node-content .tree-node-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.tree-node-content .tree-node-loading-icon {
  margin-right: 8px;
  width: 18px;
  height: 18px;
}
.tree-node-content .tree-node-label {
  font-size: 14px;
}
.hl-alert {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 6px;
  background-color: #213148;
  border: 1px solid #233042;
  color: #899cae;
  font-size: 14px;
  transition: opacity 0.3s ease;
}
.hl-alert.dashed {
  border-width: 1px;
  border-style: dashed;
}
.hl-alert.has-description {
  align-items: flex-start;
  padding: 16px;
}
.hl-alert.has-description .alert-content {
  width: 100%;
}
.hl-alert.has-description .alert-content .title {
  font-weight: 500;
  margin-bottom: 4px;
}
.hl-alert .alert-icon {
  color: currentColor;
  margin-right: 12px;
  flex-shrink: 0;
  flex-grow: unset;
  width: 20px;
  height: 20px;
}
.hl-alert .alert-content {
  width: 100%;
}
.hl-alert .alert-content .title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.hl-alert .alert-customed {
  flex-shrink: 0;
  flex-grow: unset;
}
.hl-alert .alert-close {
  width: 18px;
  height: 18px;
  padding: 2px;
  margin-left: 16px;
  margin-right: -4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: unset;
}
.alert-fade-enter,
.alert-fade-leave-active {
  opacity: 0;
}
.hl-carousel {
  position: relative;
}
.hl-carousel .carousel-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.hl-carousel .carousel-container .carousel-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.hl-carousel .carousel-container .carousel-arrow.hover {
  background-color: rgba(31, 45, 61, 0.23);
}
.hl-carousel .carousel-container .carousel-arrow .hl-icon {
  width: 14px;
  height: 14px;
}
.hl-carousel .carousel-container .carousel-arrow.left {
  left: 16px;
}
.hl-carousel .carousel-container .carousel-arrow.right {
  right: 16px;
}
.hl-carousel .carousel-indicators {
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.hl-carousel .carousel-indicators .carousel-indicator {
  background-color: transparent;
  cursor: pointer;
}
.hl-carousel .carousel-indicators .carousel-indicator.hover button {
  opacity: 0.72;
}
.hl-carousel .carousel-indicators .carousel-indicator.is-active button {
  opacity: 1;
}
.hl-carousel .carousel-indicators .carousel-indicator .carousel-dot {
  border-radius: 50%;
  display: inline-block;
  padding: 0;
  height: 8px;
  width: 8px;
  border: none;
  opacity: 0.72;
}
.hl-carousel .carousel-indicators .carousel-indicator .carousel-button {
  display: block;
  opacity: 0.48;
  width: 20px;
  height: 2px;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-carousel .carousel-indicators .carousel-indicator-horizontal {
  display: inline-block;
  padding: 12px 4px;
}
.hl-carousel .carousel-indicators .carousel-indicator-vertical {
  padding: 4px 12px;
}
.hl-carousel .carousel-indicators .carousel-indicator-vertical .carousel-button {
  width: 2px;
  height: 15px;
}
.hl-carousel .carousel-indicators-horizontal {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.hl-carousel .carousel-indicators-vertical {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hl-carousel .carousel-indicators-outside {
  bottom: 26px;
  text-align: center;
  position: static;
  transform: none;
}
.hl-carousel .carousel-indicators-outside button {
  background-color: #c0c4cc;
  opacity: 0.24;
}
.hl-carousel .carousel-indicators-outside .carousel-indicator.hover button {
  opacity: 0.64;
}
.hl-carousel .carousel-indicators-labels {
  left: 0;
  right: 0;
  transform: none;
  text-align: center;
}
.hl-carousel .carousel-indicators-labels .carousel-indicator {
  padding: 6px 4px;
}
.hl-carousel .carousel-indicators-labels .carousel-button {
  height: auto;
  width: auto;
  padding: 2px 18px;
  font-size: 12px;
}
.carousel-horizontal {
  overflow-x: hidden;
}
.carousel-vertical {
  overflow-y: hidden;
}
.carousel-arrow-left-enter,
.carousel-arrow-left-leave-active {
  transform: translateY(-50%) translateX(-10px);
  opacity: 0;
}
.carousel-arrow-right-enter,
.carousel-arrow-right-leave-active {
  transform: translateY(-50%) translateX(10px);
  opacity: 0;
}
.hl-carousel-item {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}
.hl-carousel-item.is-active {
  z-index: 2;
}
.hl-carousel-item.is-animating {
  -webkit-transition: -webkit-transform 0.4s ease-in-out;
  transition: -webkit-transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out;
  transition: transform 0.4s ease-in-out, -webkit-transform 0.4s ease-in-out;
}
.hl-carousel-item,
.carousel-mask {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
}
.carousel-mask {
  width: 100%;
  background-color: #fff;
  opacity: 0.24;
  transition: all 0.3s 0.2s;
}
.carousel-item-card {
  width: 50%;
  transition: all 0.4s ease-in-out;
}
.carousel-item-card.is-in-stage {
  cursor: pointer;
  z-index: 1;
}
.carousel-item-card.is-active {
  z-index: 2;
}
.carousel-item-card.is-in-stage.is-hover .carousel-mask,
.carousel-item-card.is-in-stage:hover .carousel-mask {
  opacity: 0.12;
}
.hl-message {
  position: fixed;
  left: 50%;
  top: 24px;
  transform: translateX(-50%);
  min-width: 400px;
  color: #899cae;
  border: 1px solid #233042;
  background-color: #213148;
  box-shadow: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.hl-message .panel-header {
  background-color: transparent;
  padding: 12px 16px;
  height: auto;
  border-radius: 0;
}
.hl-message .panel-header .panel-header-left .hl-icon {
  width: 20px;
  height: 20px;
  color: currentColor;
}
.hl-message .panel-header .panel-title {
  font-size: 14px;
  display: block;
  color: inherit;
}
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.hl-notification {
  position: fixed;
  width: 330px;
  background-color: #213148;
  border: 1px solid #233042;
  transition: opacity 0.4s ease, transform 0.4s ease, left 0.4s ease, right 0.4s ease, top 0.4s ease, bottom 0.4s ease;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  z-index: 4000;
  border-radius: 6px;
}
.hl-notification.hl-panel {
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.05), 0 0 50px 0 rgba(0, 0, 0, 0.1);
}
.hl-notification.hl-panel .panel-header {
  height: 48px;
  padding: 0 24px;
}
.hl-notification.hl-panel .panel-header .panel-title {
  font-size: 16px;
  font-weight: 500;
}
.hl-notification.at-top-right {
  right: 16px;
}
.hl-notification.at-top-left {
  left: 16px;
}
.hl-notification.at-bottom-left {
  left: 16px;
}
.hl-notification.at-bottom-right {
  right: 16px;
}
.notification-fade-enter-from,
.notification-fade-leave-to {
  opacity: 0;
}
.notification-fade-enter-from.at-top-left,
.notification-fade-leave-to.at-top-left {
  left: 0;
  transform: translateX(-100%);
}
.notification-fade-enter-from.at-top-right,
.notification-fade-leave-to.at-top-right {
  right: 0;
  transform: translateX(100%);
}
.notification-fade-enter-from.at-bottom-left,
.notification-fade-leave-to.at-bottom-left {
  left: 0;
  transform: translateX(-100%);
}
.notification-fade-enter-from.at-bottom-right,
.notification-fade-leave-to.at-bottom-right {
  right: 0;
  transform: translateX(100%);
}
.hl-tabs {
  --tabs-nav-height: 40px;
  --tabs-pane-height: auto;
  --tabs-nav-padding: 16px;
}
.hl-tabs .tabs-header {
  position: relative;
}
.hl-tabs .tabs-header::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #233042;
  z-index: 1;
}
.hl-tabs .is-scrollable {
  padding: 0 24px;
}
.hl-tabs .tabs-wrap {
  position: relative;
  overflow: hidden;
  height: inherit;
}
.hl-tabs .tabs-wrap .next,
.hl-tabs .tabs-wrap .prev {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  padding: 0 4px;
  color: #899cae;
  height: var(--tabs-nav-height);
}
.hl-tabs .tabs-wrap .next .hl-icon,
.hl-tabs .tabs-wrap .prev .hl-icon {
  width: 14px;
  height: size 14px;
}
.hl-tabs .tabs-wrap .prev {
  left: 0;
}
.hl-tabs .tabs-wrap .next {
  right: 0;
}
.hl-tabs .tabs-scroll {
  overflow: hidden;
}
.hl-tabs .tabs-nav {
  white-space: nowrap;
  position: relative;
  transition: transform 0.3s ease;
  float: left;
  z-index: 2;
  height: inherit;
}
.hl-tabs .tabs-active-bar {
  position: absolute;
  background-color: #40a9ff;
  z-index: 3;
  transition: all 0.2s ease;
}
.hl-tabs .tabs-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--tabs-nav-padding);
  padding-right: var(--tabs-nav-padding);
  height: var(--tabs-nav-height);
  color: #899cae;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #233042;
  background-color: #213148;
  vertical-align: middle;
  cursor: pointer;
}
.hl-tabs .tabs-item.is-active {
  color: #7F60F9;
}
.hl-tabs .tabs-item:hover {
  color: #7F60F9;
}
.hl-tabs .tabs-item .tab-close {
  display: flex;
  padding: 4px;
  margin-left: 4px;
  margin-right: -4px;
  font-size: 14px;
  color: #a0b4c8;
  opacity: 0.6;
  cursor: pointer;
}
.hl-tabs .tabs-item .tab-close .hl-icon {
  width: 100%;
  height: 100%;
}
.hl-tabs .tabs-item .tab-close:hover {
  opacity: 1;
}
.hl-tabs .tab-new {
  float: right;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: var(--tabs-nav-height);
  color: #899cae;
  border: 1px solid #233042;
  border-radius: 4px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
}
.hl-tabs .tab-new .hl-icon {
  width: 14px;
  height: 14px;
}
.hl-tabs.tabs-line .tabs-item {
  border: none;
  background-color: transparent;
}
.hl-tabs.tabs-button .tabs-item {
  color: #899cae;
  border-color: #213148;
  border-radius: 4px;
  background-color: #213148;
}
.hl-tabs.tabs-button .tabs-item:hover {
  color: #7F60F9;
  border-color: #213148;
  background-color: #213148;
}
.hl-tabs.tabs-button .tabs-item.is-active {
  color: #FFFFFF;
  border-color: #40a9ff;
  background-color: #40a9ff;
}
.hl-tabs.tabs-button .tabs-header::after {
  background-color: transparent;
}
.hl-tabs.tabs-button .tabs-active-bar {
  background-color: transparent;
}
.hl-tabs.tabs-top .tabs-header::after {
  bottom: 0;
}
.hl-tabs.tabs-top .tabs-item {
  margin-right: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-top .tabs-item:first-child {
  border-top-left-radius: 4px;
}
.hl-tabs.tabs-top .tabs-item:last-child {
  border-top-right-radius: 4px;
}
.hl-tabs.tabs-top .tabs-item:last-child {
  margin-right: 0;
}
.hl-tabs.tabs-top .tabs-item.is-active {
  border-bottom-color: #213148;
}
.hl-tabs.tabs-top .tabs-active-bar {
  bottom: 0;
  left: 0;
  height: 2px;
}
.hl-tabs.tabs-top.tabs-line .tabs-item {
  margin-right: var(--tabs-nav-gap);
  border: none;
}
.hl-tabs.tabs-top.tabs-line .tabs-item:nth-child(2) {
  padding-left: 0;
}
.hl-tabs.tabs-top.tabs-line .tabs-item:last-child {
  padding-right: 0;
}
.hl-tabs.tabs-top.tabs-button .tabs-item {
  margin-right: var(--tabs-nav-gap, 0);
}
.hl-tabs.tabs-top.tabs-button .tabs-item.is-active {
  border-color: #40a9ff;
}
.hl-tabs.tabs-bottom .tabs-header::after {
  top: 0;
}
.hl-tabs.tabs-bottom .tabs-item {
  margin-right: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-bottom .tabs-item:first-child {
  border-bottom-left-radius: 4px;
}
.hl-tabs.tabs-bottom .tabs-item:last-child {
  border-bottom-right-radius: 4px;
}
.hl-tabs.tabs-bottom .tabs-item:last-child {
  margin-right: 0;
}
.hl-tabs.tabs-bottom .tabs-item.is-active {
  border-top-color: #213148;
}
.hl-tabs.tabs-bottom .tabs-active-bar {
  top: 0;
  bottom: auto;
  left: 0;
  height: 2px;
}
.hl-tabs.tabs-bottom.tabs-line .tabs-item {
  margin-right: var(--tabs-nav-gap);
  border: none;
}
.hl-tabs.tabs-bottom.tabs-line .tabs-item:nth-child(2) {
  padding-left: 0;
}
.hl-tabs.tabs-bottom.tabs-line .tabs-item:last-child {
  padding-right: 0;
}
.hl-tabs.tabs-bottom.tabs-button .tabs-item {
  margin-right: var(--tabs-nav-gap, 0);
}
.hl-tabs.tabs-bottom.tabs-button .tabs-item.is-active {
  border-color: #40a9ff;
}
.hl-tabs.tabs-right .tabs-header {
  float: right;
}
.hl-tabs.tabs-right .tabs-header::after {
  left: 0;
  bottom: 0;
  width: 1px;
  height: 100%;
}
.hl-tabs.tabs-right .is-scrollable {
  padding: 24px 0;
}
.hl-tabs.tabs-right .tabs-active-bar {
  top: 0;
  left: 0;
  width: 2px;
}
.hl-tabs.tabs-right .tabs-item {
  display: flex;
  border: 1px solid #233042;
  margin-bottom: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-right .tabs-item:first-child {
  border-top-right-radius: 4px;
}
.hl-tabs.tabs-right .tabs-item:last-child {
  border-bottom-right-radius: 4px;
}
.hl-tabs.tabs-right .tabs-item:last-child {
  margin-bottom: 0;
}
.hl-tabs.tabs-right .tabs-item.is-active {
  border-left-color: #213148;
}
.hl-tabs.tabs-right.tabs-line .tabs-item {
  padding-right: 0;
  margin-bottom: var(--tabs-nav-gap);
  border: none;
}
.hl-tabs.tabs-right.tabs-button .tabs-item {
  border-color: #213148;
}
.hl-tabs.tabs-left .tabs-header {
  float: left;
}
.hl-tabs.tabs-left .tabs-header::after {
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
}
.hl-tabs.tabs-left .is-scrollable {
  padding: 24px 0;
}
.hl-tabs.tabs-left .tabs-active-bar {
  top: 0;
  right: 0;
  width: 2px;
}
.hl-tabs.tabs-left .tabs-item {
  display: flex;
  border: 1px solid #233042;
  margin-bottom: var(--tabs-nav-gap, -1px);
}
.hl-tabs.tabs-left .tabs-item:first-child {
  border-top-left-radius: 4px;
}
.hl-tabs.tabs-left .tabs-item:last-child {
  border-bottom-left-radius: 4px;
}
.hl-tabs.tabs-left .tabs-item:last-child {
  margin-bottom: 0;
}
.hl-tabs.tabs-left .tabs-item.is-active {
  border-right-color: #213148;
}
.hl-tabs.tabs-left.tabs-line .tabs-item {
  padding-left: 0;
  margin-bottom: var(--tabs-nav-gap, -1px);
  border: none;
}
.hl-tabs.tabs-left.tabs-button .tabs-item {
  border-color: #213148;
}
.hl-tabs .tabs-content {
  height: var(--tabs-pane-height);
}
.hl-tabs.no-pane .tabs-content {
  display: none;
}
.hl-table {
  position: relative;
  overflow: hidden;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  width: 100%;
  max-width: 100%;
  caption-side: bottom;
  border-collapse: collapse;
  --table-padding: 12px;
  --table-td-padding: 12px;
}
.hl-table::before {
  content: "";
  position: absolute;
  background-color: #233042;
  z-index: 1;
}
.hl-table thead {
  font-weight: 500;
  color: #EBF0F4;
}
.hl-table thead.is-group th {
  background-color: #213148;
}
.hl-table td,
.hl-table th {
  position: relative;
  height: 48px;
  line-height: 1.5714285714;
  padding: var(--table-td-padding);
  text-align: left;
}
.hl-table td:first-child,
.hl-table th:first-child {
  padding-left: var(--table-padding);
}
.hl-table td:last-child,
.hl-table th:last-child {
  padding-right: var(--table-padding);
}
.hl-table td.is-center,
.hl-table th.is-center {
  text-align: center;
}
.hl-table td.is-right,
.hl-table th.is-right {
  text-align: right;
}
.hl-table td.gutter,
.hl-table th.gutter {
  width: 16px;
  border-right-width: 0;
  border-bottom-width: 0;
  padding: 0;
}
.hl-table td.is-hidden > *,
.hl-table th.is-hidden > * {
  visibility: hidden;
}
.hl-table td.is-leaf,
.hl-table th.is-leaf {
  border-bottom: 1px solid #233042;
}
.hl-table tr input[type=checkbox] {
  margin: 0;
}
.hl-table th {
  overflow: hidden;
  user-select: none;
  background-color: #213148;
}
.hl-table th:hover .table-filter-trigger {
  opacity: 1;
  visibility: visible;
}
.hl-table th:hover .table-filter-trigger:hover {
  color: #899cae;
}
.hl-table th.is-sortable {
  cursor: pointer;
}
.hl-table th.highlight {
  color: #40a9ff;
}
.hl-table th.required > div::before {
  display: inline-block;
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #F64E60;
  margin-right: 4px;
  vertical-align: middle;
}
.hl-table th .table-filter-trigger {
  color: #364964;
}
.hl-table td {
  border-bottom: 1px solid #233042;
  background-color: transparent;
}
.hl-table td.gutter {
  width: 0;
}
.hl-table .caret-wrapper {
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 14px;
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  overflow: initial;
  position: relative;
}
.hl-table .sort-caret {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
}
.hl-table .sort-caret.ascending {
  border-bottom-color: #233042;
  top: -4px;
}
.hl-table .sort-caret.descending {
  border-top-color: #233042;
  bottom: -4px;
}
.hl-table .ascending .sort-caret.ascending {
  border-bottom-color: #40a9ff;
}
.hl-table .descending .sort-caret.descending {
  border-top-color: #40a9ff;
}
.hl-table .hidden-columns {
  visibility: hidden;
  position: absolute;
  z-index: -1;
}
.hl-table .fit {
  border-right: 0;
  border-bottom: 0;
}
.hl-table .fit td.gutter,
.hl-table .fit th.gutter {
  border-right-width: 1px;
}
.hl-table .table-hidden {
  visibility: hidden;
}
.hl-table .bordered,
.hl-table .table-group {
  border: 1px solid #233042;
}
.hl-table .bordered::after,
.hl-table .table-group::after {
  content: "";
  position: absolute;
  background-color: #233042;
  z-index: 1;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
}
.hl-table.bordered {
  border: 1px solid #233042;
  border-right: none;
  border-bottom: none;
}
.hl-table.bordered th,
.hl-table.bordered td {
  border-right: 1px solid #233042;
}
.hl-table.bordered th {
  border-bottom: 1px solid #233042;
}
.hl-table.bordered th.gutter:last-of-type {
  border-bottom: 1px solid #233042;
  border-bottom-width: 1px;
}
.hl-table.bordered .table-fixed-right {
  border-left: 1px solid #233042;
}
.hl-table.border-y {
  border: 1px solid #233042;
}
.hl-table.border-y th,
.hl-table.border-y td {
  border-bottom: none;
  border-right: 1px solid #233042;
}
.hl-table.borderless {
  border: none;
}
.hl-table.borderless th,
.hl-table.borderless td {
  border: none;
}
.hl-table.striped-even .table-body tr:nth-child(even) {
  background-color: #182536;
}
.hl-table.striped-even .table-body.current-row td {
  background-color: #141c2a;
}
.hl-table.striped-odd .table-body tr:nth-child(odd) {
  background-color: #182536;
}
.hl-table.striped-odd .table-body.current-row td {
  background-color: #141c2a;
}
.hl-table.hover .table-body tr:hover > td {
  background-color: #141c2a;
}
.hl-table .cell {
  display: flex;
  align-items: center;
}
.hl-table .cell.show-tooltip {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line, 1);
  hyphens: none;
}
.hl-table .hl-checkbox {
  display: flex;
}
.hl-table .table-body,
.hl-table .table-footer,
.hl-table .table-header {
  table-layout: fixed;
  border-collapse: separate;
}
.hl-table .table-body-wrapper,
.hl-table .table-footer-wrapper,
.hl-table .table-header-wrapper {
  width: 100%;
}
.hl-table .table-append-wrapper {
  overflow: hidden;
}
.hl-table .table-footer-wrapper {
  margin-top: -1px;
}
.hl-table .table-footer-wrapper td {
  border-top: 1px solid #233042;
}
.hl-table .table-body-wrapper {
  overflow: hidden;
  position: relative;
}
.hl-table .table-body-wrapper.is-scrolling-none ~ .table-fixed, .hl-table .table-body-wrapper.is-scrolling-left ~ .table-fixed {
  box-shadow: none;
}
.hl-table .table-body-wrapper.is-scrolling-none ~ .table-fixed-right, .hl-table .table-body-wrapper.is-scrolling-right ~ .table-fixed-right {
  box-shadow: none;
  border-left: none;
}
.hl-table .table-footer-wrapper,
.hl-table .table-header-wrapper {
  overflow: hidden;
}
.hl-table .table-footer-wrapper tbody td,
.hl-table .table-header-wrapper tbody td {
  background-color: #213148;
}
.hl-table .table-fixed-body-wrapper {
  position: absolute;
  left: 0;
  top: 48px;
  overflow: hidden;
  z-index: 3;
}
.hl-table .table-fixed-body-wrapper td {
  background-color: #213148;
}
.hl-table .table-empty-block {
  min-height: 60px;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
}
.hl-table .table-empty-text {
  line-height: 60px;
  width: 100%;
  color: #a0b4c8;
}
.hl-table .table-body tr.current-row > td {
  background-color: #182536;
}
.hl-table .table-body tr.hover-row > td {
  background-color: #141c2a;
}
.hl-table .table-body tr.hover-row.current-row > td {
  background-color: #141c2a;
}
.hl-table .table-expand-column .cell {
  padding: 0;
  text-align: center;
}
.hl-table .table-expand-icon {
  position: relative;
  cursor: pointer;
  color: #a0b4c8;
  font-size: 14px;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hl-table .table-expand-icon.table-expand-icon-expanded {
  transform: rotate(90deg);
}
.hl-table .table-expand-icon i {
  width: 14px;
  height: 14px;
}
.hl-table .table-expand-icon .hl-spinner {
  width: 100%;
  height: 100%;
}
.hl-table [class*=table-row-level] .table-expand-icon {
  margin-right: 8px;
}
.hl-table .table-placeholder {
  display: inline-block;
  width: 28px;
}
.hl-table.table-scrollable-x .table-body-wrapper {
  overflow-x: auto;
}
.hl-table.table-scrollable-y .table-body-wrapper {
  overflow-y: auto;
}
.hl-table .table-body-wrapper .table-border.is-scrolling-left ~ .table-fixed {
  border-right: 1px solid #233042;
}
.hl-table .table-fixed,
.hl-table .table-fixed-right {
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.05), 0 0 50px 0 rgba(0, 0, 0, 0.1);
}
.hl-table .table-fixed-right-patch {
  position: absolute;
  top: 1px;
  right: 0;
  background-color: transparent;
  border-bottom: 1px solid #233042;
}
.hl-table .table-fixed-right {
  top: 0;
  left: auto;
  right: 0;
}
.hl-table .table-fixed-right .table-fixed-body-wrapper,
.hl-table .table-fixed-right .table-fixed-footer-wrapper,
.hl-table .table-fixed-right .table-fixed-header-wrapper {
  left: auto;
  right: 0;
}
.hl-table .table-fixed-header-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
}
.hl-table .table-fixed-footer-wrapper {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
}
.hl-table .table-fixed-footer-wrapper tbody td {
  border-top: 1px solid #233042;
  background-color: #233042;
}
.hl-table .table-column-resize-proxy {
  position: absolute;
  left: 200px;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px solid #233042;
  z-index: 10;
}
.hl-table .table-fluid-height .table-fixed,
.hl-table .table-fluid-height .table-fixed-right {
  bottom: 0;
  overflow: hidden;
}
.hl-table .table-filter-trigger {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hl-table .table-filter-trigger .hl-icon {
  width: 14px;
  height: 14px;
}
.popover-table-filter {
  padding: 16px;
  background-color: #16202f;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
  border-radius: 4px;
  border: 1px solid #233042;
}
.popover-table-filter .table-filter-content .hl-checkbox-group {
  display: flex;
  flex-flow: column;
}
.popover-table-filter .table-filter-content .hl-checkbox-group .hl-checkbox {
  margin-bottom: 8px;
}
.popover-table-filter .table-filter-bottom {
  margin-top: 8px;
}
.popover-table-filter .table-filter-bottom .hl-button:first-child {
  margin-right: 12px;
}
.hl-cascader {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.hl-cascader.block {
  display: block;
  width: 100%;
}
.hl-cascader .hl-input {
  width: 100%;
  height: auto;
}
.hl-cascader .cascader-tags {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 40px 0 6px;
  text-align: left;
}
.hl-cascader .cascader-tags .hl-tag {
  max-width: 100%;
  padding: 0 6px;
  height: auto;
  margin: 2px 4px 2px 0;
}
.hl-cascader .cascader-tags .hl-tag > span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  hyphens: auto;
}
.hl-cascader-popper div.selector-dropdown {
  padding: 0;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  border: none;
}
.hl-cascader-suggestion-panel {
  display: flex;
  background-color: #1c283b;
  border-radius: 4px;
  border: 1px solid #233042;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
}
.hl-cascader-suggestion-panel .cascader-suggestion-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 12px 0;
  max-height: 200px;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item,
.hl-cascader-suggestion-panel .cascader-suggestion-list li {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  hyphens: auto;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item:focus, .hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item.hover, .hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item:hover,
.hl-cascader-suggestion-panel .cascader-suggestion-list li:focus,
.hl-cascader-suggestion-panel .cascader-suggestion-list li.hover,
.hl-cascader-suggestion-panel .cascader-suggestion-list li:hover {
  background-color: #141c2a;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item.is-active,
.hl-cascader-suggestion-panel .cascader-suggestion-list li.is-active {
  color: #7F60F9;
}
.hl-cascader-suggestion-panel .cascader-suggestion-list .cascader-suggestion-item span,
.hl-cascader-suggestion-panel .cascader-suggestion-list li span {
  padding-right: 16px;
}
.hl-cascader-panel {
  display: inline-flex;
  background-color: #16202f;
  border-radius: 4px;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
}
.hl-cascader-panel .cascader-menu {
  min-width: 180px;
  border-left: 1px solid #233042;
}
.hl-cascader-panel .cascader-menu:first-child {
  border-left: none;
}
.hl-cascader-panel .cascader-menu .cascader-menu-wrap {
  height: 204px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding: 12px 0;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list.is-empty {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #364964;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item,
.hl-cascader-panel .cascader-menu .cascader-menu-list li {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px 24px;
  padding-right: 38px;
  height: 36px;
  font-size: 14px;
  color: #899cae;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  hyphens: auto;
  transition: color 0.3s ease, background-color 0.3s ease;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .hl-spinner,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .hl-spinner {
  width: 16px;
  height: 16px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item:focus, .hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.hover, .hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item:hover,
.hl-cascader-panel .cascader-menu .cascader-menu-list li:focus,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.hover,
.hl-cascader-panel .cascader-menu .cascader-menu-list li:hover {
  color: #7F60F9;
  background-color: #141c2a;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.in-active-path,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.in-active-path {
  color: #7F60F9;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.is-active,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.is-active {
  color: #7F60F9;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item.is-disabled,
.hl-cascader-panel .cascader-menu .cascader-menu-list li.is-disabled {
  color: #364964;
  cursor: not-allowed;
  pointer-events: none;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-label,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-label {
  padding-right: 16px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-prefix,
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-postfix,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-prefix,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-postfix {
  position: absolute;
  right: 16px;
  margin: 0;
  color: currentColor;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-postfix,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-postfix {
  width: 14px;
  height: 14px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .cascader-item-prefi,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .cascader-item-prefi {
  width: 16px;
  height: 16px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .hl-checkbox,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .hl-checkbox {
  margin-right: 8px;
}
.hl-cascader-panel .cascader-menu .cascader-menu-list .cascader-item .hl-checkbox .radio-label,
.hl-cascader-panel .cascader-menu .cascader-menu-list li .hl-checkbox .radio-label {
  padding: 0;
}
.hl-cascader-panel .cascader-menu .cascader-menu-hover-zone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.hl-backtop {
  position: fixed;
  background-color: #FFF;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #40a9ff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
}
.hl-backtop:hover {
  background-color: #182536;
}
.hl-overlay {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.hl-menu {
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  font-size: 14px;
  background-color: #242939;
}
.hl-menu:after {
  display: block;
  content: "";
  clear: both;
}
.hl-menu .hl-menu-item {
  position: relative;
  list-style: none;
  margin: 0;
  cursor: pointer;
  color: #989eb3;
  transition: all 0.3s ease;
}
.hl-menu .hl-menu-item .hl-menu {
  font-size: 14px;
}
.hl-menu .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(4em + 4px);
}
.hl-menu .hl-menu-item .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(5em + 4px);
}
.hl-menu .hl-menu-item .hl-menu-item .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(6em + 4px);
}
.hl-menu .hl-menu-item .hl-menu-item .hl-menu-item .hl-menu-item .hl-menu-item .item-content {
  padding-left: calc(7em + 4px);
}
.hl-menu .hl-menu-item.hl-sub-menu.is-opened {
  background-color: #1e2230;
}
.hl-menu .hl-menu-item.hl-sub-menu.is-opened .menu-inline {
  background-color: transparent;
}
.hl-menu .hl-menu-item .item-content {
  display: flex;
  align-items: center;
  padding: 12px 2em;
  height: 46px;
  transition: all 0.3s ease;
}
.hl-menu .hl-menu-item .item-content:hover {
  color: #FFFFFF;
  background-color: #1f2433;
}
.hl-menu .hl-menu-item .item-content:hover .hl-icon {
  color: currentColor;
}
.hl-menu .hl-menu-item .item-content span {
  width: 100%;
}
.hl-menu .hl-menu-item .item-content .menu-arrow {
  position: absolute;
  right: 6px;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  margin-left: 8px;
  transition: all 0.3s ease;
  color: #989eb3;
}
.hl-menu .hl-menu-item a {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
.hl-menu .hl-menu-item .hl-icon {
  display: block;
  width: 18px;
  height: 18px;
  color: #4B5575;
  flex-shrink: 0;
  flex-grow: unset;
  margin-right: 1em;
  transition: all 0.3s ease;
}
.hl-menu .hl-menu-item.is-active:not(.is-opened) {
  color: #FFFFFF;
}
.hl-menu .hl-menu-item.is-active:not(.is-opened) .item-content {
  background-color: #1f2433;
}
.hl-menu .hl-menu-item.is-active:not(.is-opened) .item-content .hl-icon {
  color: currentColor;
}
.hl-menu .hl-menu-item.is-opened > .item-content .menu-arrow {
  transform: rotate(90deg);
}
.hl-menu .hl-menu-item.is-disabled {
  cursor: not-allowed;
  color: rgba(152, 158, 179, 0.5);
}
.hl-menu .hl-menu-item.is-disabled > .item-content:hover {
  color: inherit;
  background-color: inherit;
}
.hl-menu .hl-menu-item.hide-menu-arrow .menu-arrow {
  display: none;
}
.hl-menu .hl-menu-item-group ul {
  list-style: none;
  padding: 0;
}
.hl-menu .hl-menu-item-group .group-title {
  color: #1d212e;
  font-size: 12px;
  padding: 12px 2em;
  text-indent: 4px;
}
.hl-menu.horizontal .hl-menu-item {
  display: flex;
  align-items: center;
  float: left;
  height: 80px;
  margin: 0;
  color: #989eb3;
}
.hl-menu.horizontal .hl-menu-item .item-content {
  height: inherit;
}
.hl-menu.horizontal .hl-menu-item .item-content:hover {
  background-color: transparent;
}
.hl-menu.horizontal .hl-menu-item .item-content .menu-arrow {
  position: unset;
  right: unset;
  transform: rotate(90deg);
}
.hl-menu.horizontal .hl-menu-item.is-disabled {
  color: #364964;
}
.hl-menu.horizontal .hl-menu-item.is-active:not(.is-opened) .item-content {
  background-color: transparent;
}
.hl-menu.collapse {
  width: 80px;
}
.hl-menu.collapse .hl-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hl-menu.collapse .hl-menu-item .item-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  padding: 0;
}
.hl-menu.collapse .hl-menu-item .item-content span {
  display: none;
}
.hl-menu.collapse .hl-menu-item .hl-icon {
  margin: 0;
}
.hl-menu.collapse .hl-menu-item .menu-arrow {
  display: none;
}
.hl-menu.collapse .hl-menu-item-group .group-title {
  display: none;
}
.hl-menu.menu-dropdown {
  min-width: 200px;
  padding: 12px 0;
  background-color: #242939;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
}
.hl-menu.menu-dropdown .hl-menu-item:hover {
  background-color: #1f2433;
}
.hl-menu.menu-dropdown .hl-menu-item .item-content {
  padding: 6px 2em;
  height: 46px;
}
.hl-menu.menu-dropdown .hl-menu-item.is-opened > .item-content .menu-arrow {
  transform: rotate(90deg);
}
.hl-menu.menu-dropdown .hl-menu-item.is-active:not(.is-opened) .item-content {
  color: #FFFFFF;
}
.hl-menu-popover {
  border: 0;
  border-radius: 0;
  color: #989eb3;
  background-color: #242939;
  box-shadow: 0 12px 24px 0 rgba(13, 20, 30, 0.4);
}
.hl-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 14px;
  color: #a0b4c8;
}
.hl-breadcrumb .hl-breadcrumb-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
}
.hl-breadcrumb .hl-breadcrumb-item a {
  color: inherit;
}
.hl-breadcrumb .hl-breadcrumb-item:hover {
  color: #7F60F9;
}
.hl-breadcrumb .hl-breadcrumb-item:first-child .breadcrumb-separator {
  display: none;
}
.hl-breadcrumb .hl-breadcrumb-item .breadcrumb-separator {
  color: #364964;
  margin: 0 8px;
}
.hl-breadcrumb .hl-breadcrumb-item .breadcrumb-separator .hl-icon {
  display: flex;
}
.hl-upload {
  --upload-item-gap: 8px;
}
.hl-upload .upload-input {
  display: none;
}
.hl-upload iframe {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0;
}
.hl-upload .handle-text {
  display: inline-flex;
  vertical-align: middle;
  font-size: 14px;
  transition: all 0.3s ease;
}
.hl-upload .handle-card {
  display: inline-flex;
  background-color: #1c283b;
  border: 1px dashed #233042;
  border-radius: 4px;
  width: 128px;
  height: 128px;
  cursor: pointer;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.hl-upload .handle-card:hover, .hl-upload .handle-card:focus {
  color: #7F60F9;
  border-color: #40a9ff;
  background-color: #141c2a;
}
.hl-upload .upload-list {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 12px;
}
.hl-upload .upload-list .item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 16px;
  padding: 12px 16px;
  color: #899cae;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #233042;
  background-color: #213148;
  transition: all 0.3s ease;
  overflow: hidden;
}
.hl-upload .upload-list .item:not(:last-child) {
  margin-bottom: var(--upload-item-gap);
}
.hl-upload .upload-list .item .file-icon {
  flex-shrink: 0;
  flex-grow: unset;
  width: 24px;
  height: 24px;
  margin-right: 12px;
}
.hl-upload .upload-list .item .item-content {
  flex-grow: 1;
  width: 100%;
  margin-right: 12px;
}
.hl-upload .upload-list .item .item-name {
  font-size: 14px;
  color: #899cae;
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.hl-upload .upload-list .item .item-status {
  position: relative;
  display: flex;
  height: 24px;
  min-width: 24px;
  align-items: center;
  justify-content: center;
}
.hl-upload .upload-list .item .item-status .icon-status,
.hl-upload .upload-list .item .item-status .icon-close {
  position: absolute;
  z-index: 4;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;
}
.hl-upload .upload-list .item .item-status .icon-close {
  transform: translate(0, 50%);
}
.hl-upload .upload-list .item .item-status .icon-status {
  transform: translate(0, 0);
}
.hl-upload .upload-list .item .item-status .icon-loading {
  color: #40a9ff;
  min-width: 24px;
  height: 24px;
  padding: 4px;
}
.hl-upload .upload-list .item .hl-progress-title .progress-number {
  color: #40a9ff;
  transform: translate(0, -100%);
}
.hl-upload .upload-list.list-picture .item.is-success .item-status .icon-loading, .hl-upload .upload-list.list-text .item.is-success .item-status .icon-loading {
  display: none;
}
.hl-upload .upload-list.list-picture .item.is-success .item-status .icon-status, .hl-upload .upload-list.list-text .item.is-success .item-status .icon-status {
  visibility: visible;
  opacity: 1;
}
.hl-upload .upload-list.list-picture .item.is-success .item-status .icon-close, .hl-upload .upload-list.list-text .item.is-success .item-status .icon-close {
  visibility: hidden;
  opacity: 0;
}
.hl-upload .upload-list.list-picture .item.is-success:hover, .hl-upload .upload-list.list-text .item.is-success:hover {
  background-color: #141c2a;
  border-color: #233042;
}
.hl-upload .upload-list.list-picture .item.is-success:hover .item-status .icon-status, .hl-upload .upload-list.list-text .item.is-success:hover .item-status .icon-status {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, -50%);
}
.hl-upload .upload-list.list-picture .item.is-success:hover .item-status .icon-close, .hl-upload .upload-list.list-text .item.is-success:hover .item-status .icon-close {
  opacity: 1;
  visibility: visible;
  transform: translate(0, 0);
}
.hl-upload .upload-list.list-picture .item .hl-progress, .hl-upload .upload-list.list-text .item .hl-progress {
  margin-top: 4px;
  --progress-height: 4px;
}
.hl-upload .upload-list.list-picture .item .hl-progress .progress-content, .hl-upload .upload-list.list-text .item .hl-progress .progress-content {
  position: absolute;
  width: 100%;
  top: -4px;
  right: 0;
  transform: translate(0, -100%);
}
.hl-upload .upload-list.list-card {
  margin: 0;
  display: inline;
}
.hl-upload .upload-list.list-card .item {
  display: flex;
  float: left;
  width: 128px;
  height: 128px;
  padding: 0;
  border-color: transparent;
  margin-right: var(--upload-item-gap);
  margin-bottom: var(--upload-item-gap);
}
.hl-upload .upload-list.list-card .item div {
  width: 100%;
  height: 100%;
}
.hl-upload .upload-list.list-card .item .hl-icon {
  display: none;
}
.hl-upload .upload-list.list-card .item .item-content {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  background-color: rgba(0, 0, 0, 0.6);
}
.hl-upload .upload-list.list-card .item .item-content .item-name {
  display: none;
}
.hl-upload .upload-list.list-card .item .item-status {
  display: none;
}
.hl-upload .upload-list.list-card .item .hl-progress .progress-circle .progress-circle-path {
  stroke: #fff;
}
.hl-upload .upload-list.list-card .item .hl-progress .progress-circle .progress-circle-track {
  stroke: rgba(255, 255, 255, 0.3);
}
.hl-upload .upload-list.list-card .item .hl-progress .progress-content .progress-percentage {
  color: #FFFFFF;
  font-size: 12px;
}
.hl-upload .upload-list.list-card .item .item-thumb {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hl-upload .upload-list.list-card .item .item-actions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: default;
  color: #FFFFFF;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
}
.hl-upload .upload-list.list-card .item .item-actions span {
  display: none;
  cursor: pointer;
  text-align: center;
}
.hl-upload .upload-list.list-card .item .item-actions .hl-icon {
  display: block;
  width: 21px;
  height: 21px;
  max-width: 24px;
  max-height: 24px;
}
.hl-upload .upload-list.list-card .item.is-success .item-actions:hover {
  opacity: 1;
}
.hl-upload .upload-list.list-card .item.is-success .item-actions:hover span {
  display: inline-block;
}
.hl-upload .upload-list.list-card .item.is-ready .item-actions:hover {
  opacity: 1;
}
.hl-upload .upload-list.list-card .item.is-ready .item-actions:hover span {
  display: inline-block;
}
.hl-upload .upload-list.list-picture .item .item-thumb {
  border-radius: 4px;
  flex-shrink: 0;
  flex-grow: unset;
  width: 48px;
  height: 48px;
  margin-right: 12px;
}
.hl-upload .upload-list.list-picture .item .hl-icon {
  display: none;
}
.hl-upload .upload-dragger {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  width: 360px;
  height: 180px;
  border: 1px dashed #233042;
  background-color: #1c283b;
  transition: all 0.3s ease;
}
.hl-upload .upload-dragger .hl-icon {
  width: 40px;
  height: 40px;
}
.hl-upload .upload-dragger:hover {
  border-color: #40a9ff;
  background-color: #141c2a;
}
.hl-upload .upload-dragger.is-dragover {
  border-color: #40a9ff;
  background-color: #141c2a;
}
.hl-calendar .calendar-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #233042;
}
.hl-calendar .calendar-header .calendar-title {
  color: #EBF0F4;
  align-self: center;
}
.hl-calendar .calendar-body {
  padding: 12px 16px;
}
.hl-calendar .calendar-body .calendar-table {
  table-layout: fixed;
  width: 100%;
  font-size: 14px;
}
.hl-calendar .calendar-body .calendar-table thead th {
  padding: 16px 0;
  color: #EBF0F4;
  font-weight: 400;
}
.hl-calendar .calendar-body .calendar-table:not(.is-range) td.next, .hl-calendar .calendar-body .calendar-table:not(.is-range) td.prev {
  color: #364964;
}
.hl-calendar .calendar-body .calendar-table td {
  border-bottom: 1px solid #233042;
  border-right: 1px solid #233042;
  vertical-align: top;
  transition: background-color 0.3s ease;
}
.hl-calendar .calendar-body .calendar-table td.is-selected {
  background-color: #141c2a;
}
.hl-calendar .calendar-body .calendar-table td.is-today {
  color: #40a9ff;
}
.hl-calendar .calendar-body .calendar-table tr:first-child td {
  border-top: 1px solid #233042;
}
.hl-calendar .calendar-body .calendar-table tr td:first-child {
  border-left: 1px solid #233042;
}
.hl-calendar .calendar-body .calendar-table tr.calendar-table-row-hide-border td {
  border-top: none;
}
.hl-calendar .calendar-body .calendar-table .calendar-day {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 12px;
  height: 80px;
}
.hl-calendar .calendar-body .calendar-table .calendar-day:hover {
  cursor: pointer;
  background-color: #141c2a;
}
.hl-transfer {
  --transfer-gap: 16px;
  --transfer-list-gap: 4px;
  --transfer-item-gap: 4px;
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  gap: var(--transfer-gap);
}
.hl-transfer.block {
  display: flex;
}
.hl-transfer.no-buttons .transfer-panel .panel-list .hl-checkbox:hover {
  background-color: #141c2a;
}
.hl-transfer.no-buttons .transfer-panel .panel-list .hl-checkbox.is-disabled:hover {
  background-color: unset;
}
.hl-transfer .transfer-panel {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  border-radius: 4px;
  border: 1px solid #233042;
  background-color: #1c283b;
  min-width: 260px;
  width: 260px;
  height: 400px;
}
.hl-transfer .transfer-panel .panel-header {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #233042;
  background-color: #182536;
}
.hl-transfer .transfer-panel .panel-header .count {
  color: #a0b4c8;
}
.hl-transfer .transfer-panel .panel-body {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: hidden;
}
.hl-transfer .transfer-panel .panel-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
  border-radius: 0 0 4px 4px;
  border-top: 1px solid #233042;
  height: 48px;
  background-color: #182536;
}
.hl-transfer .transfer-panel .panel-filter {
  padding: 16px;
}
.hl-transfer .transfer-panel .panel-filter .hl-input .input-close {
  display: none;
}
.hl-transfer .transfer-panel .panel-filter .hl-input .input-close.show-close {
  display: block;
}
.hl-transfer .transfer-panel .panel-list {
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  flex-wrap: nowrap;
  gap: var(--transfer-list-gap);
}
.hl-transfer .transfer-panel .panel-list.has-filterable {
  padding-top: 0;
}
.hl-transfer .transfer-panel .panel-list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 4px;
  gap: var(--transfer-item-gap);
  transition: all 0.3s ease;
}
.hl-transfer .transfer-panel .panel-list .item.is-checked {
  background-color: #141c2a;
}
.hl-transfer .transfer-panel .panel-list .item.is-disabled {
  color: #364964;
}
.hl-transfer .transfer-panel .panel-list .item .checkbox-label {
  padding: 0;
  flex-grow: 1;
}
.hl-transfer .transfer-panel .panel-list .item .checkbox-label .close {
  display: none;
}
.hl-transfer .transfer-panel .panel-list .item .checkbox-inner {
  flex-grow: 0;
}
.hl-transfer .transfer-panel .panel-list .item .hl-icon,
.hl-transfer .transfer-panel .panel-list .item .hl-thumb {
  margin-right: 8px;
}
.hl-transfer .transfer-panel .panel-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px 0;
  color: #a0b4c8;
}
.hl-transfer .transfer-buttons {
  display: flex;
  align-items: center;
}
.hl-affix .fixed {
  position: fixed;
}
.hl-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.hl-timeline.block {
  display: flex;
  width: 100%;
}
.hl-timeline.alternate .hl-timeline-item:nth-child(odd) .item-left {
  order: 3;
  text-align: left;
}
.hl-timeline.alternate .hl-timeline-item:nth-child(odd) .item-center {
  order: 2;
}
.hl-timeline.alternate .hl-timeline-item:nth-child(odd) .item-right {
  order: 1;
  text-align: right;
}
.hl-timeline.has-icon .hl-timeline-item .item-center .dot-wrap {
  width: 40px;
}
.hl-timeline .hl-timeline-item {
  position: relative;
  display: flex;
  --timeline-item-gap: 16px;
  column-gap: var(--timeline-item-gap);
}
.hl-timeline .hl-timeline-item.is-active .item-center .icon-dot, .hl-timeline .hl-timeline-item:hover .item-center .icon-dot {
  background-color: var(--timeline-icon-color, #40a9ff);
}
.hl-timeline .hl-timeline-item.is-active .item-center .icon-dot::before, .hl-timeline .hl-timeline-item:hover .item-center .icon-dot::before {
  opacity: 1;
  transform: scale(1.8);
}
.hl-timeline .hl-timeline-item.left .item-left {
  order: 3;
  text-align: left;
}
.hl-timeline .hl-timeline-item.left .item-center {
  order: 2;
}
.hl-timeline .hl-timeline-item.left .item-right {
  order: 1;
  text-align: right;
}
.hl-timeline .hl-timeline-item.right .item-left {
  order: 1;
}
.hl-timeline .hl-timeline-item.right .item-center {
  order: 2;
}
.hl-timeline .hl-timeline-item.right .item-right {
  order: 3;
}
.hl-timeline .hl-timeline-item:last-child .item-center::before {
  display: none;
}
.hl-timeline .hl-timeline-item:last-child .item-right {
  margin-bottom: unset;
}
.hl-timeline .hl-timeline-item .item-left {
  width: 100%;
  flex-grow: 1;
  text-align: right;
}
.hl-timeline .hl-timeline-item .item-center {
  position: relative;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: auto;
  justify-content: center;
  align-items: flex-start;
}
.hl-timeline .hl-timeline-item .item-center .dot-wrap {
  display: flex;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.hl-timeline .hl-timeline-item .item-center::before {
  content: "";
  position: absolute;
  top: 14px;
  left: 50%;
  border-right: 2px solid #1F272C;
  height: 100%;
  transform: translate(-50%, 0);
}
.hl-timeline .hl-timeline-item .item-center .icon-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--timeline-icon-color, #1F272C);
  border-radius: 100px;
  transition: all 0.3s ease;
}
.hl-timeline .hl-timeline-item .item-center .icon-dot::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 1px solid var(--timeline-icon-color, #40a9ff);
  background-color: #213148;
  opacity: 0;
  transition: all 0.3s ease;
}
.hl-timeline .hl-timeline-item .item-center .hl-icon {
  position: relative;
}
.hl-timeline .hl-timeline-item .item-center .hl-icon::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 2px solid var(--timeline-icon-color, #1F272C);
  background-color: #213148;
  opacity: 0;
  transition: all 0.3s ease;
}
.hl-timeline .hl-timeline-item .item-right {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}
.hl-timeline .hl-timeline-item .item-title {
  font-size: 14px;
  color: #899cae;
  line-height: 24px;
}
.hl-timeline .hl-timeline-item .item-time {
  font-size: 12px;
  color: #a0b4c8;
  line-height: 24px;
}
.hl-slider .slider-wrap {
  width: 100%;
  height: 4px;
  margin: 16px 0;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  background-color: #182536;
}
.hl-slider .slider-wrap.disabled {
  cursor: default;
}
.hl-slider .slider-wrap.disabled .slider-bar {
  background-color: #182536;
}
.hl-slider .slider-wrap.disabled .slider-handle-wrap.dragging, .hl-slider .slider-wrap.disabled .slider-handle-wrap.hover, .hl-slider .slider-wrap.disabled .slider-handle-wrap:hover {
  cursor: not-allowed;
}
.hl-slider .slider-wrap.disabled .slider-handle.dragging, .hl-slider .slider-wrap.disabled .slider-handle.hover, .hl-slider .slider-wrap.disabled .slider-handle:hover {
  cursor: not-allowed;
}
.hl-slider .slider-bar {
  position: absolute;
  height: 4px;
  background-color: #40a9ff;
  border-radius: 100px;
}
.hl-slider .slider-handle-wrap {
  display: flex;
  position: absolute;
  z-index: 1;
  padding: 3.3333333333px;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  outline: none;
}
.hl-slider .slider-handle-wrap:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.hl-slider .slider-handle-wrap.dragging {
  cursor: grabbing;
}
  cursor: grab;
}
.hl-slider .slider-handle {
}
