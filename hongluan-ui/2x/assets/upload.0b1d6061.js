var O=Object.defineProperty;var I=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var $=(u,t,e)=>t in u?O(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,k=(u,t)=>{for(var e in t||(t={}))G.call(t,e)&&$(u,e,t[e]);if(I)for(var e of I(t))J.call(t,e)&&$(u,e,t[e]);return u};import{H as y,L as H,W,Q as o,X as w,P as B,a4 as Q,S as E,o as X,aL as m}from"./vue.8f5537c1.js";import{H as V}from"./hongluan-icons.35255449.js";import{_ as Z}from"./index.4914c8f9.js";import"./hongluan.f4777b07.js";import"./highlight.687c59a9.js";const K={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createTextVNode:s,createElementVNode:g,openBlock:F,createBlock:b}=m,r=s(" \u70B9\u51FB\u4E0A\u4F20 "),_=g("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function v(l,d){const c=u("two-upload"),a=u("hl-icon"),i=u("hl-button"),f=u("hl-upload");return F(),b(f,{style:{width:"400px"},action:"http://10.32.66.28/up/","on-preview":l.handlePreview,"on-remove":l.handleRemove,"before-remove":l.beforeRemove,multiple:"",limit:5,"on-exceed":l.handleExceed,"file-list":l.fileList},{tip:e(()=>[_]),default:e(()=>[t(i,{type:"primary","icon-position":"left"},{icon:e(()=>[t(a,null,{default:e(()=>[t(c)]),_:1})]),default:e(()=>[r]),_:1})]),_:1},8,["on-preview","on-remove","before-remove","on-exceed","file-list"])}const{defineComponent:A}=m,{ref:n}=m,{TwoUpload:p}=V;return k({render:v},A({setup(l,{expose:d}){d();const L={fileList:n([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleRemove:(j,C)=>{console.log(j,C)},handlePreview:j=>{console.log(j)},handleExceed:(j,C)=>{alert(`\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 ${j.length} \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 ${j.length+C.length} \u4E2A\u6587\u4EF6`)},beforeRemove:j=>confirm(`\u786E\u5B9A\u79FB\u9664 ${j.name}\uFF1F`),ref:n,TwoUpload:p};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}}))}(),"hl-demo1":function(){const{resolveComponent:u,openBlock:t,createBlock:e,createCommentVNode:s,createVNode:g,withCtx:F}=m;function b(n,p){const h=u("hl-thumb"),l=u("two-user"),d=u("hl-icon"),c=u("hl-upload");return t(),e(c,{action:"http://10.32.66.28/up/","show-file-list":!1,"on-success":n.handleAvatarSuccess,"before-upload":n.beforeAvatarUpload},{default:F(()=>[n.imageUrl?(t(),e(h,{key:0,size:"xxxl",round:"",src:n.imageUrl,fit:"cover"},null,8,["src"])):(t(),e(h,{key:1,size:"xxxl",class:"bg-light",round:""},{default:F(()=>[g(d,{size:"xl"},{default:F(()=>[g(l)]),_:1})]),_:1}))]),_:1},8,["on-success","before-upload"])}const{defineComponent:r}=m,{ref:_}=m,{TwoUser:v}=V;return k({render:b},r({setup(n,{expose:p}){p();const h=_(""),c={imageUrl:h,handleAvatarSuccess:(a,i)=>{h.value=URL.createObjectURL(i.raw)},beforeAvatarUpload:a=>{const i=a.type==="image/jpeg",f=a.size/1024/1024<2;return i||alert("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!"),f||alert("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),i&&f},ref:_,TwoUser:v};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}))}(),"hl-demo2":function(){const{resolveComponent:u,createVNode:t,withCtx:e,Fragment:s,openBlock:g,createElementBlock:F}=m;function b(n,p){const h=u("two-upload"),l=u("hl-icon"),d=u("hl-upload"),c=u("hl-thumb"),a=u("hl-dialog");return g(),F(s,null,[t(d,{action:"http://10.32.66.28/up/","list-type":"card","file-list":n.fileList,"on-preview":n.handlePictureCardPreview,"on-remove":n.handleRemove},{default:e(()=>[t(l,null,{default:e(()=>[t(h)]),_:1})]),_:1},8,["file-list","on-preview","on-remove"]),t(a,{modelValue:n.dialogVisible,"onUpdate:modelValue":p[0]||(p[0]=i=>n.dialogVisible=i),title:"\u67E5\u770B\u56FE\u7247",width:"600px"},{default:e(()=>[t(c,{src:n.dialogImageUrl,class:"full"},null,8,["src"])]),_:1},8,["modelValue"])],64)}const{defineComponent:r}=m,{ref:_}=m,{TwoUpload:v}=V;return k({render:b},r({setup(n,{expose:p}){p();const h=_(""),l=_(!1),d=(f,D)=>{console.log(f,D)},c=f=>{h.value=f.url,l.value=!0},a=_([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),i={dialogImageUrl:h,dialogVisible:l,handleRemove:d,handlePictureCardPreview:c,fileList:a,ref:_,TwoUpload:v};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createElementVNode:s,openBlock:g,createElementBlock:F,createCommentVNode:b,Fragment:r}=m,_=["src"],v={class:"item-actions"},A=["onClick"],n=["onClick"],p=["onClick"],h={style:{width:"300px",height:"300px"}},l=["src"];function d(C,U){const N=u("two-pic"),P=u("hl-icon"),T=u("two-zoom-in"),M=u("two-download"),q=u("two-delete"),S=u("hl-upload"),R=u("hl-dialog");return g(),F(r,null,[t(S,{action:"#","list-type":"card","auto-upload":!1},{default:e(()=>[t(P,{size:"xl"},{default:e(()=>[t(N)]),_:1})]),file:e(({file:x})=>[s("div",null,[s("img",{class:"item-thumb",src:x.url,alt:""},null,8,_),s("span",v,[s("span",{class:"item-preview",onClick:z=>C.handlePictureCardPreview(x)},[t(P,null,{default:e(()=>[t(T)]),_:1})],8,A),C.disabled?b("",!0):(g(),F("span",{key:0,class:"item-delete",onClick:z=>C.handleDownload(x)},[t(P,null,{default:e(()=>[t(M)]),_:1})],8,n)),C.disabled?b("",!0):(g(),F("span",{key:1,class:"item-delete",onClick:z=>C.handleRemove(x)},[t(P,null,{default:e(()=>[t(q)]),_:1})],8,p))])])]),_:1}),t(R,{modelValue:C.dialogVisible,"onUpdate:modelValue":U[0]||(U[0]=x=>C.dialogVisible=x),"modal-class":"is-center"},{default:e(()=>[s("div",h,[s("img",{width:"100%",src:C.dialogImageUrl,alt:""},null,8,l)])]),_:1},8,["modelValue"])],64)}const{defineComponent:c}=m,{ref:a}=m,{TwoPic:i,TwoZoomIn:f,TwoDownload:D,TwoDelete:L}=V;return k({render:d},c({setup(C,{expose:U}){U();const N=a(""),P=a(!1),T=a(!1),R={dialogImageUrl:N,dialogVisible:P,disabled:T,handleRemove:x=>{console.log(x)},handlePictureCardPreview:x=>{N.value=x.url,P.value=!0},handleDownload:x=>{console.log(x)},ref:a,TwoPic:i,TwoZoomIn:f,TwoDownload:D,TwoDelete:L};return Object.defineProperty(R,"__isScriptSetup",{enumerable:!1,value:!0}),R}}))}(),"hl-demo4":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createTextVNode:s,createElementVNode:g,openBlock:F,createBlock:b}=m,r=s(" \u70B9\u51FB\u4E0A\u4F20 "),_=g("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function v(l,d){const c=u("two-upload"),a=u("hl-icon"),i=u("hl-button"),f=u("hl-upload");return F(),b(f,{action:"http://10.32.66.28/up/","on-preview":l.handlePreview,"on-remove":l.handleRemove,"file-list":l.fileList,"list-type":"picture"},{tip:e(()=>[_]),default:e(()=>[t(i,{type:"primary","icon-position":"left"},{icon:e(()=>[t(a,null,{default:e(()=>[t(c)]),_:1})]),default:e(()=>[r]),_:1})]),_:1},8,["on-preview","on-remove","file-list"])}const{defineComponent:A}=m,{ref:n}=m,{TwoUpload:p}=V;return k({render:v},A({setup(l,{expose:d}){d();const f={fileList:n([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleRemove:(D,L)=>{console.log(D,L)},handlePreview:D=>{console.log(D)},ref:n,TwoUpload:p};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}))}(),"hl-demo5":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createTextVNode:s,createElementVNode:g,openBlock:F,createBlock:b}=m,r=s(" \u70B9\u51FB\u4E0A\u4F20 "),_=g("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function v(l,d){const c=u("two-upload"),a=u("hl-icon"),i=u("hl-button"),f=u("hl-upload");return F(),b(f,{action:"http://10.32.66.28/up/","on-change":l.handleChange,"file-list":l.fileList},{tip:e(()=>[_]),default:e(()=>[t(i,{type:"primary","icon-position":"left"},{icon:e(()=>[t(a,null,{default:e(()=>[t(c)]),_:1})]),default:e(()=>[r]),_:1})]),_:1},8,["on-change","file-list"])}const{defineComponent:A}=m,{ref:n}=m,{TwoUpload:p}=V;return k({render:v},A({setup(l,{expose:d}){d();const i={fileList:n([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleChange:(f,D)=>{D.value=D.slice(-3)},ref:n,TwoUpload:p};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}))}(),"hl-demo6":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createElementVNode:s,createTextVNode:g,openBlock:F,createBlock:b}=m,r=s("div",{class:"m-t-md"},[g("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),s("em",{class:"text-primary"},"\u70B9\u51FB\u4E0A\u4F20")],-1);function _(p,h){const l=u("two-upload"),d=u("hl-icon"),c=u("hl-upload");return F(),b(c,{drag:"",action:"http://10.32.66.28/up/",multiple:"",full:""},{default:e(()=>[t(d,{border:1.2},{default:e(()=>[t(l)]),_:1},8,["border"]),r]),_:1})}const{defineComponent:v}=m,{TwoUpload:A}=V;return k({render:_},v({setup(p,{expose:h}){h();const l={TwoUpload:A};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}))}(),"hl-demo7":function(){const{createTextVNode:u,resolveComponent:t,withCtx:e,createVNode:s,createElementVNode:g,openBlock:F,createBlock:b}=m,r=u("\u9009\u53D6\u6587\u4EF6"),_=u(" \u4E0A\u4F20\u5230\u670D\u52A1\u5668 "),v=g("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function A(d,c){const a=t("hl-button"),i=t("two-server"),f=t("hl-icon"),D=t("hl-upload");return F(),b(D,{ref:"upload",action:"http://10.32.66.28/up/","on-preview":d.handlePreview,"on-remove":d.handleRemove,"file-list":d.fileList,"auto-upload":!1},{trigger:e(()=>[s(a,{type:"primary"},{default:e(()=>[r]),_:1})]),tip:e(()=>[v]),default:e(()=>[s(a,{type:"primary",class:"m-l-md",effect:"light",onClick:d.submitUpload},{icon:e(()=>[s(f,null,{default:e(()=>[s(i)]),_:1})]),default:e(()=>[_]),_:1},8,["onClick"])]),_:1},8,["on-preview","on-remove","file-list"])}const{defineComponent:n}=m,{ref:p}=m,{TwoServer:h}=V;return k({render:A},n({setup(d,{expose:c}){c();const a=p(null),i=p([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),j={upload:a,fileList:i,submitUpload:()=>{a.value.submit()},handleRemove:(C,U)=>{console.log(C,U)},handlePreview:C=>{console.log(C)},ref:p,TwoServer:h};return Object.defineProperty(j,"__isScriptSetup",{enumerable:!1,value:!0}),j}}))}()}},Y=o("h1",null,"Upload \u4E0A\u4F20",-1),ee=o("p",null,"\u901A\u8FC7\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6",-1),te=o("div",null,[o("p",null,[E("\u901A\u8FC7 slot \u4F60\u53EF\u4EE5\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u6309\u94AE\u7C7B\u578B\u548C\u6587\u5B57\u63D0\u793A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E"),o("code",null,"limit"),E("\u548C"),o("code",null,"on-exceed"),E("\u6765\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u4E2A\u6570\u548C\u5B9A\u4E49\u8D85\u51FA\u9650\u5236\u65F6\u7684\u884C\u4E3A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E"),o("code",null,"before-remove"),E("\u6765\u963B\u6B62\u6587\u4EF6\u79FB\u9664\u64CD\u4F5C\u3002")])],-1),ue=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload
    style="width: 400px"
    action="http://10.32.66.28/up/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="5"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <hl-button type="primary" icon-position="left">
      \u70B9\u51FB\u4E0A\u4F20
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])
const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePreview = file => {
  console.log(file)
}
const handleExceed = (files, fileList) => {
  alert(\`\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 \${files.length} \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 \${files.length + fileList.length} \u4E2A\u6587\u4EF6\`)
}
const beforeRemove = file => {
  // alert(\`\u786E\u5B9A\u79FB\u9664 \${file.name}\uFF1F\`)
  return confirm(\`\u786E\u5B9A\u79FB\u9664 \${file.name}\uFF1F\`)
}

<\/script>
`)],-1),oe=o("h2",{id:"yong-hu-tou-xiang-shang-chuan"},[o("a",{class:"header-anchor",href:"#yong-hu-tou-xiang-shang-chuan"}),E(" \u7528\u6237\u5934\u50CF\u4E0A\u4F20")],-1),le=o("p",null,[E("\u4F7F\u7528 "),o("code",null,"before-upload"),E(" \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002")],-1),ne=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload action="http://10.32.66.28/up/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
    <hl-thumb v-if="imageUrl" size="xxxl" round :src="imageUrl" fit="cover" />
    <hl-thumb v-else size="xxxl" class="bg-light" round>
      <hl-icon size="xl"><two-user /></hl-icon>
    </hl-thumb>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUser } from '@hongluan-ui/icons'

const imageUrl = ref('')

const handleAvatarSuccess = (res, file) => {
  imageUrl.value = URL.createObjectURL(file.raw)
}
const beforeAvatarUpload = file => {
  const isJPG = file.type === 'image/jpeg'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    alert('\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!')
  }
  if (!isLt2M) {
    alert('\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!')
  }
  return isJPG && isLt2M
}

<\/script>
`)],-1),de=o("h2",{id:"zhao-pian-qiang"},[o("a",{class:"header-anchor",href:"#zhao-pian-qiang"}),E(" \u7167\u7247\u5899")],-1),ae=o("p",null,[E("\u4F7F\u7528 "),o("code",null,"list-type"),E(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6587\u4EF6\u5217\u8868\u7684\u6837\u5F0F\u3002")],-1),ie=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload
    action="http://10.32.66.28/up/"
    list-type="card"
    :file-list="fileList"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <hl-icon><two-upload /></hl-icon>
  </hl-upload>
  <hl-dialog v-model="dialogVisible" title="\u67E5\u770B\u56FE\u7247" width="600px">
    <hl-thumb :src="dialogImageUrl" class="full" />
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePictureCardPreview = file => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

<\/script>
`)],-1),se=o("h2",{id:"wen-jian-suo-lue-tu"},[o("a",{class:"header-anchor",href:"#wen-jian-suo-lue-tu"}),E(" \u6587\u4EF6\u7F29\u7565\u56FE")],-1),re=o("p",null,[E("\u4F7F\u7528 "),o("code",null,"slot"),E(" \u53BB\u8BBE\u7F6E\u7F29\u7565\u56FE\u6A21\u7248\u3002")],-1),ce=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload action="#" list-type="card" :auto-upload="false">
    <template #default>
      <hl-icon size="xl"><two-pic /></hl-icon>
    </template>
    <template #file="{file}">
      <div>
        <img class="item-thumb" :src="file.url" alt="">
        <span class="item-actions">
          <span class="item-preview" @click="handlePictureCardPreview(file)">
            <hl-icon><two-zoom-in /></hl-icon>
          </span>
          <span v-if="!disabled" class="item-delete" @click="handleDownload(file)">
            <hl-icon><two-download /></hl-icon>
          </span>
          <span v-if="!disabled" class="item-delete" @click="handleRemove(file)">
            <hl-icon><two-delete /></hl-icon>
          </span>
        </span>
      </div>
    </template>
  </hl-upload>
  <hl-dialog v-model="dialogVisible" modal-class="is-center">
    <div style="width:300px;height:300px;">
      <img width="100%" :src="dialogImageUrl" alt="">
    </div>
  </hl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoPic, TwoZoomIn, TwoDownload, TwoDelete } from '@hongluan-ui/icons'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = file => {
  console.log(file)
}
const handlePictureCardPreview = file => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}
const handleDownload = file => {
  console.log(file)
}

<\/script>
`)],-1),pe=o("h2",{id:"tu-pian-lie-biao-suo-lue-tu"},[o("a",{class:"header-anchor",href:"#tu-pian-lie-biao-suo-lue-tu"}),E(" \u56FE\u7247\u5217\u8868\u7F29\u7565\u56FE")],-1),me=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload action="http://10.32.66.28/up/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
    <hl-button type="primary" icon-position="left">
      \u70B9\u51FB\u4E0A\u4F20
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePreview = file => {
  console.log(file)
}

<\/script>
`)],-1),he=o("h2",{id:"shang-chuan-wen-jian-lie-biao-kong-zhi"},[o("a",{class:"header-anchor",href:"#shang-chuan-wen-jian-lie-biao-kong-zhi"}),E(" \u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u63A7\u5236")],-1),fe=o("p",null,[E("\u901A\u8FC7 "),o("code",null,"on-change"),E(" \u94A9\u5B50\u51FD\u6570\u6765\u5BF9\u5217\u8868\u8FDB\u884C\u63A7\u5236")],-1),_e=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload action="http://10.32.66.28/up/" :on-change="handleChange" :file-list="fileList">
    <hl-button type="primary" icon-position="left">
      \u70B9\u51FB\u4E0A\u4F20
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoUpload } from '@hongluan-ui/icons'

const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleChange = (file, fileList) => {
  fileList.value = fileList.slice(-3)
}
<\/script>
`)],-1),Fe=o("h2",{id:"tuo-zhuai-shang-chuan"},[o("a",{class:"header-anchor",href:"#tuo-zhuai-shang-chuan"}),E(" \u62D6\u62FD\u4E0A\u4F20")],-1),ge=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload drag action="http://10.32.66.28/up/" multiple full>
    <hl-icon :border="1.2"><two-upload /></hl-icon>
    <div class="m-t-md">\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 <em class="text-primary">\u70B9\u51FB\u4E0A\u4F20</em></div>
  </hl-upload>
</template>
<script lang="ts" setup>
import { TwoUpload } from '@hongluan-ui/icons'

<\/script>
`)],-1),Ee=o("h2",{id:"shou-dong-shang-chuan"},[o("a",{class:"header-anchor",href:"#shou-dong-shang-chuan"}),E(" \u624B\u52A8\u4E0A\u4F20")],-1),be=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload
    ref="upload"
    action="http://10.32.66.28/up/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
  >
    <template #trigger>
      <hl-button type="primary">\u9009\u53D6\u6587\u4EF6</hl-button>
    </template>
    <hl-button type="primary" class="m-l-md" effect="light" @click="submitUpload">
      \u4E0A\u4F20\u5230\u670D\u52A1\u5668
      <template #icon>
        <hl-icon><two-server /></hl-icon>
      </template>
    </hl-button>
    <template #tip>
      <div class="text-danger m-t-sm">\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb</div>
    </template>
  </hl-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwoServer } from '@hongluan-ui/icons'

const upload = ref(null)
const fileList = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const submitUpload = () => {
  upload.value.submit()
}
const handleRemove = (file, fileList) => {
  console.log(file, fileList)
}
const handlePreview = file => {
  console.log(file)
}

<\/script>
`)],-1),ve=X('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>action</td><td>\u5FC5\u9009\u53C2\u6570\uFF0C\u4E0A\u4F20\u7684\u5730\u5740</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>method</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u65B9\u6CD5\u5740</td><td>string</td><td>post / put</td><td>post</td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>data</td><td>\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D</td><td>string</td><td>\u2014</td><td>file</td></tr><tr><td>with-credentials</td><td>\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-file-list</td><td>\u662F\u5426\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>drag</td><td>\u662F\u5426\u542F\u7528\u62D6\u62FD\u4E0A\u4F20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">\u6587\u4EF6\u7C7B\u578B</a>\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-preview</td><td>\u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>function(file)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-remove</td><td>\u6587\u4EF6\u5217\u8868\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-success</td><td>\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50</td><td>function(response, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-error</td><td>\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50</td><td>function(err, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-progress</td><td>\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50</td><td>function(event, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-change</td><td>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u6DFB\u52A0\u6587\u4EF6\u3001\u4E0A\u4F20\u6210\u529F\u548C\u4E0A\u4F20\u5931\u8D25\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>before-upload</td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u4E0A\u4F20\u3002</td><td>function(file)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>before-remove</td><td>\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5217\u8868\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5220\u9664\u3002</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>list-type</td><td>\u6587\u4EF6\u5217\u8868\u7684\u7C7B\u578B</td><td>string</td><td>text/picture/card</td><td>text</td></tr><tr><td>auto-upload</td><td>\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>file-list</td><td>\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868, \u4F8B\u5982: [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>http-request</td><td>\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u7684\u5B9E\u73B0</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>limit</td><td>\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-exceed</td><td>\u6587\u4EF6\u8D85\u51FA\u4E2A\u6570\u9650\u5236\u65F6\u7684\u94A9\u5B50</td><td>function(files, fileList)</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u6587\u4EF6\u9009\u62E9\u6846\u7684\u5185\u5BB9</td></tr><tr><td>tip</td><td>\u63D0\u793A\u8BF4\u660E\u6587\u5B57</td></tr><tr><td>file</td><td>\u6587\u4EF6\u5217\u8868\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { file }</td></tr><tr><td>file-icon</td><td>\u6587\u4EF6\u5217\u8868\u81EA\u5B9A\u4E49\u6587\u4EF6Icon\uFF0C\u53C2\u6570\u4E3A { file }\u3002file\u548Cfile-icon\u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0Cfile\u4F18\u5148\u7EA7\u66F4\u9AD8</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearFiles</td><td>\u6E05\u7A7A\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u5728 before-upload \u4E2D\u8C03\u7528\uFF09</td><td>\u2014</td></tr><tr><td>abort</td><td>\u53D6\u6D88\u4E0A\u4F20\u8BF7\u6C42</td><td>\uFF08 file: fileList \u4E2D\u7684 file \u5BF9\u8C61 \uFF09</td></tr><tr><td>submit</td><td>\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u5217\u8868</td><td>\u2014</td></tr><tr><td>handleStart</td><td>\u624B\u5DE5\u9009\u62E9\u6587\u4EF6</td><td>( file: files \u4E2D\u7684 file \u5BF9\u8C61)</td></tr><tr><td>handleRemove</td><td>\u624B\u5DE5\u5220\u9664\u6587\u4EF6</td><td>( file: fileList \u4E2D\u7684 file \u5BF9\u8C61 )</td></tr></tbody></table>',6);function Ce(u,t,e,s,g,F){const b=y("hl-demo0"),r=y("demo-block"),_=y("hl-demo1"),v=y("hl-demo2"),A=y("hl-demo3"),n=y("hl-demo4"),p=y("hl-demo5"),h=y("hl-demo6"),l=y("hl-demo7"),d=y("right-nav");return H(),W(Q,null,[o("section",null,[Y,ee,w(r,{fs:""},{source:B(()=>[w(b)]),highlight:B(()=>[ue]),default:B(()=>[te]),_:1}),oe,le,w(r,{fs:""},{source:B(()=>[w(_)]),highlight:B(()=>[ne]),_:1}),de,ae,w(r,{fs:""},{source:B(()=>[w(v)]),highlight:B(()=>[ie]),_:1}),se,re,w(r,{fs:""},{source:B(()=>[w(A)]),highlight:B(()=>[ce]),_:1}),pe,w(r,{fs:""},{source:B(()=>[w(n)]),highlight:B(()=>[me]),_:1}),he,fe,w(r,{fs:""},{source:B(()=>[w(p)]),highlight:B(()=>[_e]),_:1}),Fe,w(r,{fs:""},{source:B(()=>[w(h)]),highlight:B(()=>[ge]),_:1}),Ee,w(r,{fs:""},{source:B(()=>[w(l)]),highlight:B(()=>[be]),_:1}),ve]),w(d)],64)}var ye=Z(K,[["render",Ce]]);export{ye as default};
