var z=Object.defineProperty;var U=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var R=(u,t,e)=>t in u?z(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,D=(u,t)=>{for(var e in t||(t={}))$.call(t,e)&&R(u,e,t[e]);if(U)for(var e of U(t))I.call(t,e)&&R(u,e,t[e]);return u};import{F as w,L as T,W as S,Q as o,X as v,P as C,a2 as J,aJ as A,M as _,o as G}from"./vue.fdea90c3.js";import{_ as W}from"./index.3f300018.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const O={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createTextVNode:i,createElementVNode:f,openBlock:m,createBlock:E}=A,s=i(" \u70B9\u51FB\u4E0A\u4F20 "),F=f("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function B(l,d){const a=u("two-upload"),c=u("hl-icon"),b=u("hl-button"),g=u("hl-upload");return m(),E(g,{style:{width:"400px"},action:"http://10.32.66.28/up/","on-preview":l.handlePreview,"on-remove":l.handleRemove,"before-remove":l.beforeRemove,multiple:"",limit:5,"on-exceed":l.handleExceed,"file-list":l.fileList},{tip:e(()=>[F]),default:e(()=>[t(b,{type:"primary","icon-position":"left"},{icon:e(()=>[t(c,null,{default:e(()=>[t(a)]),_:1})]),default:e(()=>[s]),_:1})]),_:1},8,["on-preview","on-remove","before-remove","on-exceed","file-list"])}const{defineComponent:n,ref:h}=A,r=n({setup(){return{fileList:h([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleRemove:(g,p)=>{console.log(g,p)},handlePreview:g=>{console.log(g)},handleExceed:(g,p)=>{alert(`\u5F53\u524D\u9650\u5236\u9009\u62E9 3 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 ${g.length} \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 ${g.length+p.length} \u4E2A\u6587\u4EF6`)},beforeRemove:g=>confirm(`\u786E\u5B9A\u79FB\u9664 ${g.name}\uFF1F`)}}});return D({render:B},r)}(),"hl-demo1":function(){const{resolveComponent:u,openBlock:t,createBlock:e,createCommentVNode:i,createVNode:f,withCtx:m}=A;function E(n,h){const r=u("hl-thumb"),l=u("two-user"),d=u("hl-icon"),a=u("hl-upload");return t(),e(a,{action:"http://10.32.66.28/up/","show-file-list":!1,"on-success":n.handleAvatarSuccess,"before-upload":n.beforeAvatarUpload},{default:m(()=>[n.imageUrl?(t(),e(r,{key:0,size:"xxxl",round:"",src:n.imageUrl,fit:"cover"},null,8,["src"])):(t(),e(r,{key:1,type:"primary",size:"xxxl",effect:"light",round:""},{default:m(()=>[f(d,{size:"xl"},{default:m(()=>[f(l)]),_:1})]),_:1}))]),_:1},8,["on-success","before-upload"])}const{defineComponent:s,ref:F}=A,B=s({setup(){const n=F("");return{imageUrl:n,handleAvatarSuccess:(l,d)=>{n.value=URL.createObjectURL(d.raw)},beforeAvatarUpload:l=>{const d=l.type==="image/jpeg",a=l.size/1024/1024<2;return d||alert("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u53EA\u80FD\u662F JPG \u683C\u5F0F!"),a||alert("\u4E0A\u4F20\u5934\u50CF\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),d&&a}}}});return D({render:E},B)}(),"hl-demo2":function(){const{resolveComponent:u,createVNode:t,withCtx:e,Fragment:i,openBlock:f,createElementBlock:m}=A;function E(n,h){const r=u("two-upload"),l=u("hl-icon"),d=u("hl-upload"),a=u("hl-thumb"),c=u("hl-dialog");return f(),m(i,null,[t(d,{action:"http://10.32.66.28/up/","list-type":"card","file-list":n.fileList,"on-preview":n.handlePictureCardPreview,"on-remove":n.handleRemove},{default:e(()=>[t(l,null,{default:e(()=>[t(r)]),_:1})]),_:1},8,["file-list","on-preview","on-remove"]),t(c,{modelValue:n.dialogVisible,"onUpdate:modelValue":h[0]||(h[0]=b=>n.dialogVisible=b),title:"\u67E5\u770B\u56FE\u7247",width:"600px"},{default:e(()=>[t(a,{src:n.dialogImageUrl,class:"full"},null,8,["src"])]),_:1},8,["modelValue"])],64)}const{defineComponent:s,ref:F}=A,B=s({setup(){const n=F(""),h=F(!1),r=(a,c)=>{console.log(a,c)},l=a=>{n.value=a.url,h.value=!0},d=F([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]);return{dialogImageUrl:n,dialogVisible:h,handleRemove:r,handlePictureCardPreview:l,fileList:d}}});return D({render:E},B)}(),"hl-demo3":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createElementVNode:i,openBlock:f,createElementBlock:m,createCommentVNode:E,Fragment:s}=A,F=["src"],B={class:"item-actions"},n=["onClick"],h=["onClick"],r=["onClick"],l={style:{width:"300px",height:"300px"}},d=["src"];function a(p,j){const k=u("two-pic"),V=u("hl-icon"),L=u("two-zoom-in"),P=u("two-download"),x=u("two-delete"),M=u("hl-upload"),q=u("hl-dialog");return f(),m(s,null,[t(M,{action:"#","list-type":"card","auto-upload":!1},{default:e(()=>[t(V,{type:"danger",fill:"",radius:""},{default:e(()=>[t(k)]),_:1})]),file:e(({file:y})=>[i("div",null,[i("img",{class:"item-thumb",src:y.url,alt:""},null,8,F),i("span",B,[i("span",{class:"item-preview",onClick:N=>p.handlePictureCardPreview(y)},[t(V,null,{default:e(()=>[t(L)]),_:1})],8,n),p.disabled?E("",!0):(f(),m("span",{key:0,class:"item-delete",onClick:N=>p.handleDownload(y)},[t(V,null,{default:e(()=>[t(P)]),_:1})],8,h)),p.disabled?E("",!0):(f(),m("span",{key:1,class:"item-delete",onClick:N=>p.handleRemove(y)},[t(V,null,{default:e(()=>[t(x)]),_:1})],8,r))])])]),_:1}),t(q,{modelValue:p.dialogVisible,"onUpdate:modelValue":j[0]||(j[0]=y=>p.dialogVisible=y),"modal-class":"is-center"},{default:e(()=>[i("div",l,[i("img",{width:"100%",src:p.dialogImageUrl,alt:""},null,8,d)])]),_:1},8,["modelValue"])],64)}const{defineComponent:c,ref:b}=A,g=c({setup(){const p=b(""),j=b(!1),k=b(!1);return{dialogImageUrl:p,dialogVisible:j,disabled:k,handleRemove:x=>{console.log(x)},handlePictureCardPreview:x=>{p.value=x.url,j.value=!0},handleDownload:x=>{console.log(x)}}}});return D({render:a},g)}(),"hl-demo4":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createTextVNode:i,createElementVNode:f,openBlock:m,createBlock:E}=A,s=i(" \u70B9\u51FB\u4E0A\u4F20 "),F=f("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function B(l,d){const a=u("two-upload"),c=u("hl-icon"),b=u("hl-button"),g=u("hl-upload");return m(),E(g,{action:"http://10.32.66.28/up/","on-preview":l.handlePreview,"on-remove":l.handleRemove,"file-list":l.fileList,"list-type":"picture"},{tip:e(()=>[F]),default:e(()=>[t(b,{type:"primary","icon-position":"left"},{icon:e(()=>[t(c,null,{default:e(()=>[t(a)]),_:1})]),default:e(()=>[s]),_:1})]),_:1},8,["on-preview","on-remove","file-list"])}const{defineComponent:n,ref:h}=A,r=n({setup(){return{fileList:h([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleRemove:(c,b)=>{console.log(c,b)},handlePreview:c=>{console.log(c)}}}});return D({render:B},r)}(),"hl-demo5":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createTextVNode:i,createElementVNode:f,openBlock:m,createBlock:E}=A,s=i(" \u70B9\u51FB\u4E0A\u4F20 "),F=f("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function B(l,d){const a=u("two-upload"),c=u("hl-icon"),b=u("hl-button"),g=u("hl-upload");return m(),E(g,{action:"http://10.32.66.28/up/","on-change":l.handleChange,"file-list":l.fileList},{tip:e(()=>[F]),default:e(()=>[t(b,{type:"primary","icon-position":"left"},{icon:e(()=>[t(c,null,{default:e(()=>[t(a)]),_:1})]),default:e(()=>[s]),_:1})]),_:1},8,["on-change","file-list"])}const{defineComponent:n,ref:h}=A,r=n({setup(){return{fileList:h([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleChange:(a,c)=>{c.value=c.slice(-3)}}}});return D({render:B},r)}(),"hl-demo6":function(){const{resolveComponent:u,createVNode:t,withCtx:e,createElementVNode:i,createTextVNode:f,openBlock:m,createBlock:E}=A,s=i("div",{class:"m-t-md"},[f("\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),i("em",{class:"text-primary"},"\u70B9\u51FB\u4E0A\u4F20")],-1);function F(n,h){const r=u("two-upload"),l=u("hl-icon"),d=u("hl-upload");return m(),E(d,{drag:"",action:"http://10.32.66.28/up/",multiple:"",full:""},{default:e(()=>[t(l,{border:1.2},{default:e(()=>[t(r)]),_:1},8,["border"]),s]),_:1})}return D({render:F},{})}(),"hl-demo7":function(){const{createTextVNode:u,resolveComponent:t,withCtx:e,createVNode:i,createElementVNode:f,openBlock:m,createBlock:E}=A,s=u("\u9009\u53D6\u6587\u4EF6"),F=u(" \u4E0A\u4F20\u5230\u670D\u52A1\u5668 "),B=f("div",{class:"text-danger m-t-sm"},"\u53EA\u80FD\u4E0A\u4F20 jpg/png \u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 500kb",-1);function n(d,a){const c=t("hl-button"),b=t("two-server"),g=t("hl-icon"),p=t("hl-upload");return m(),E(p,{ref:"upload",action:"http://10.32.66.28/up/","on-preview":d.handlePreview,"on-remove":d.handleRemove,"file-list":d.fileList,"auto-upload":!1},{trigger:e(()=>[i(c,{type:"primary"},{default:e(()=>[s]),_:1})]),tip:e(()=>[B]),default:e(()=>[i(c,{type:"primary",class:"m-l-md",effect:"light",onClick:d.submitUpload},{icon:e(()=>[i(g,null,{default:e(()=>[i(b)]),_:1})]),default:e(()=>[F]),_:1},8,["onClick"])]),_:1},8,["on-preview","on-remove","file-list"])}const{defineComponent:h,ref:r}=A,l=h({setup(){const d=r(null),a=r([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]);return{upload:d,fileList:a,submitUpload:()=>{d.value.submit()},handleRemove:(p,j)=>{console.log(p,j)},handlePreview:p=>{console.log(p)}}}});return D({render:n},l)}()}},Q=o("h1",null,"Upload \u4E0A\u4F20",-1),X=o("p",null,"\u901A\u8FC7\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6",-1),H=o("div",null,[o("p",null,[_("\u901A\u8FC7 slot \u4F60\u53EF\u4EE5\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u6309\u94AE\u7C7B\u578B\u548C\u6587\u5B57\u63D0\u793A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E"),o("code",null,"limit"),_("\u548C"),o("code",null,"on-exceed"),_("\u6765\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u4E2A\u6570\u548C\u5B9A\u4E49\u8D85\u51FA\u9650\u5236\u65F6\u7684\u884C\u4E3A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E"),o("code",null,"before-remove"),_("\u6765\u963B\u6B62\u6587\u4EF6\u79FB\u9664\u64CD\u4F5C\u3002")])],-1),K=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      fileList,
      handleRemove,
      handlePreview,
      handleExceed,
      beforeRemove,
    }
  },
})
<\/script>
`)],-1),Y=o("h2",{id:"yong-hu-tou-xiang-shang-chuan"},[o("a",{class:"header-anchor",href:"#yong-hu-tou-xiang-shang-chuan"}),_(" \u7528\u6237\u5934\u50CF\u4E0A\u4F20")],-1),Z=o("p",null,[_("\u4F7F\u7528 "),o("code",null,"before-upload"),_(" \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002")],-1),ee=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload action="http://10.32.66.28/up/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
    <hl-thumb v-if="imageUrl" size="xxxl" round :src="imageUrl" fit="cover" />
    <hl-thumb v-else type="primary" size="xxxl" effect="light" round>
      <hl-icon size="xl"><two-user /></hl-icon>
    </hl-thumb>
  </hl-upload>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      imageUrl,
      handleAvatarSuccess,
      beforeAvatarUpload,
    }
  },
})
<\/script>
`)],-1),te=o("h2",{id:"zhao-pian-qiang"},[o("a",{class:"header-anchor",href:"#zhao-pian-qiang"}),_(" \u7167\u7247\u5899")],-1),ue=o("p",null,[_("\u4F7F\u7528 "),o("code",null,"list-type"),_(" \u5C5E\u6027\u6765\u8BBE\u7F6E\u6587\u4EF6\u5217\u8868\u7684\u6837\u5F0F\u3002")],-1),oe=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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

    return {
      dialogImageUrl,
      dialogVisible,
      handleRemove,
      handlePictureCardPreview,
      fileList,
    }
  },
})
<\/script>
`)],-1),le=o("h2",{id:"wen-jian-suo-lue-tu"},[o("a",{class:"header-anchor",href:"#wen-jian-suo-lue-tu"}),_(" \u6587\u4EF6\u7F29\u7565\u56FE")],-1),ne=o("p",null,[_("\u4F7F\u7528 "),o("code",null,"slot"),_(" \u53BB\u8BBE\u7F6E\u7F29\u7565\u56FE\u6A21\u7248\u3002")],-1),de=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload action="#" list-type="card" :auto-upload="false">
    <template #default>
      <hl-icon type="danger" fill radius><two-pic /></hl-icon>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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

    return {
      dialogImageUrl,
      dialogVisible,
      disabled,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
    }
  },
})
<\/script>
`)],-1),ae=o("h2",{id:"tu-pian-lie-biao-suo-lue-tu"},[o("a",{class:"header-anchor",href:"#tu-pian-lie-biao-suo-lue-tu"}),_(" \u56FE\u7247\u5217\u8868\u7F29\u7565\u56FE")],-1),ie=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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
    return {
      fileList,
      handleRemove,
      handlePreview,
    }
  },
})
<\/script>
`)],-1),se=o("h2",{id:"shang-chuan-wen-jian-lie-biao-kong-zhi"},[o("a",{class:"header-anchor",href:"#shang-chuan-wen-jian-lie-biao-kong-zhi"}),_(" \u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u63A7\u5236")],-1),ce=o("p",null,[_("\u901A\u8FC7 "),o("code",null,"on-change"),_(" \u94A9\u5B50\u51FD\u6570\u6765\u5BF9\u5217\u8868\u8FDB\u884C\u63A7\u5236")],-1),re=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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

    return {
      fileList,
      handleChange,
    }
  },
})
<\/script>
`)],-1),pe=o("h2",{id:"tuo-zhuai-shang-chuan"},[o("a",{class:"header-anchor",href:"#tuo-zhuai-shang-chuan"}),_(" \u62D6\u62FD\u4E0A\u4F20")],-1),me=o("pre",null,[o("code",{class:"html"},` <template>
  <hl-upload drag action="http://10.32.66.28/up/" multiple full>
    <hl-icon :border="1.2"><two-upload /></hl-icon>
    <div class="m-t-md">\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 <em class="text-primary">\u70B9\u51FB\u4E0A\u4F20</em></div>
  </hl-upload>
</template>
`)],-1),he=o("h2",{id:"shou-dong-shang-chuan"},[o("a",{class:"header-anchor",href:"#shou-dong-shang-chuan"}),_(" \u624B\u52A8\u4E0A\u4F20")],-1),fe=o("pre",null,[o("code",{class:"html"},` <template>
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

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
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

    return {
      upload,
      fileList,
      submitUpload,
      handleRemove,
      handlePreview,
    }
  },
})
<\/script>
`)],-1),Fe=G('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>action</td><td>\u5FC5\u9009\u53C2\u6570\uFF0C\u4E0A\u4F20\u7684\u5730\u5740</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>method</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u65B9\u6CD5\u5740</td><td>string</td><td>post / put</td><td>post</td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>data</td><td>\u4E0A\u4F20\u65F6\u9644\u5E26\u7684\u989D\u5916\u53C2\u6570</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>name</td><td>\u4E0A\u4F20\u7684\u6587\u4EF6\u5B57\u6BB5\u540D</td><td>string</td><td>\u2014</td><td>file</td></tr><tr><td>with-credentials</td><td>\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>show-file-list</td><td>\u662F\u5426\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>drag</td><td>\u662F\u5426\u542F\u7528\u62D6\u62FD\u4E0A\u4F20</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">\u6587\u4EF6\u7C7B\u578B</a>\uFF08thumbnail-mode \u6A21\u5F0F\u4E0B\u6B64\u53C2\u6570\u65E0\u6548\uFF09</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-preview</td><td>\u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>function(file)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-remove</td><td>\u6587\u4EF6\u5217\u8868\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-success</td><td>\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50</td><td>function(response, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-error</td><td>\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50</td><td>function(err, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-progress</td><td>\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50</td><td>function(event, file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-change</td><td>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u6DFB\u52A0\u6587\u4EF6\u3001\u4E0A\u4F20\u6210\u529F\u548C\u4E0A\u4F20\u5931\u8D25\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>before-upload</td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u4E0A\u4F20\u3002</td><td>function(file)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>before-remove</td><td>\u5220\u9664\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5217\u8868\uFF0C\u82E5\u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject\uFF0C\u5219\u505C\u6B62\u5220\u9664\u3002</td><td>function(file, fileList)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>list-type</td><td>\u6587\u4EF6\u5217\u8868\u7684\u7C7B\u578B</td><td>string</td><td>text/picture/card</td><td>text</td></tr><tr><td>auto-upload</td><td>\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>file-list</td><td>\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868, \u4F8B\u5982: [{name: &#39;food.jpg&#39;, url: &#39;https://xxx.cdn.com/xxx.jpg&#39;}]</td><td>array</td><td>\u2014</td><td>[]</td></tr><tr><td>http-request</td><td>\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0A\u4F20\u7684\u5B9E\u73B0</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>limit</td><td>\u6700\u5927\u5141\u8BB8\u4E0A\u4F20\u4E2A\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>on-exceed</td><td>\u6587\u4EF6\u8D85\u51FA\u4E2A\u6570\u9650\u5236\u65F6\u7684\u94A9\u5B50</td><td>function(files, fileList)</td><td>\u2014</td><td>-</td></tr><tr><td>gap</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u95F4\u9694</td><td>string</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>trigger</td><td>\u89E6\u53D1\u6587\u4EF6\u9009\u62E9\u6846\u7684\u5185\u5BB9</td></tr><tr><td>tip</td><td>\u63D0\u793A\u8BF4\u660E\u6587\u5B57</td></tr><tr><td>file</td><td>\u6587\u4EF6\u5217\u8868\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\u4E3A { file }</td></tr><tr><td>file-icon</td><td>\u6587\u4EF6\u5217\u8868\u81EA\u5B9A\u4E49\u6587\u4EF6Icon\uFF0C\u53C2\u6570\u4E3A { file }\u3002file\u548Cfile-icon\u4E0D\u80FD\u540C\u65F6\u5B58\u5728\uFF0Cfile\u4F18\u5148\u7EA7\u66F4\u9AD8</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>clearFiles</td><td>\u6E05\u7A7A\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301\u5728 before-upload \u4E2D\u8C03\u7528\uFF09</td><td>\u2014</td></tr><tr><td>abort</td><td>\u53D6\u6D88\u4E0A\u4F20\u8BF7\u6C42</td><td>\uFF08 file: fileList \u4E2D\u7684 file \u5BF9\u8C61 \uFF09</td></tr><tr><td>submit</td><td>\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u5217\u8868</td><td>\u2014</td></tr><tr><td>handleStart</td><td>\u624B\u5DE5\u9009\u62E9\u6587\u4EF6</td><td>( file: files \u4E2D\u7684 file \u5BF9\u8C61)</td></tr><tr><td>handleRemove</td><td>\u624B\u5DE5\u5220\u9664\u6587\u4EF6</td><td>( file: fileList \u4E2D\u7684 file \u5BF9\u8C61 )</td></tr></tbody></table>',6);function ge(u,t,e,i,f,m){const E=w("hl-demo0"),s=w("demo-block"),F=w("hl-demo1"),B=w("hl-demo2"),n=w("hl-demo3"),h=w("hl-demo4"),r=w("hl-demo5"),l=w("hl-demo6"),d=w("hl-demo7"),a=w("right-nav");return T(),S(J,null,[o("section",null,[Q,X,v(s,{fs:""},{source:C(()=>[v(E)]),highlight:C(()=>[K]),default:C(()=>[H]),_:1}),Y,Z,v(s,{fs:""},{source:C(()=>[v(F)]),highlight:C(()=>[ee]),_:1}),te,ue,v(s,{fs:""},{source:C(()=>[v(B)]),highlight:C(()=>[oe]),_:1}),le,ne,v(s,{fs:""},{source:C(()=>[v(n)]),highlight:C(()=>[de]),_:1}),ae,v(s,{fs:""},{source:C(()=>[v(h)]),highlight:C(()=>[ie]),_:1}),se,ce,v(s,{fs:""},{source:C(()=>[v(r)]),highlight:C(()=>[re]),_:1}),pe,v(s,{fs:""},{source:C(()=>[v(l)]),highlight:C(()=>[me]),_:1}),he,v(s,{fs:""},{source:C(()=>[v(d)]),highlight:C(()=>[fe]),_:1}),Fe]),v(a)],64)}var Ae=W(O,[["render",ge]]);export{Ae as default};
