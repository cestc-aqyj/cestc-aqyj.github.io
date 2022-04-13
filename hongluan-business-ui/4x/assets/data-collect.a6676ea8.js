var R=Object.defineProperty;var D=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var J=(a,l,e)=>l in a?R(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,V=(a,l)=>{for(var e in l||(l={}))T.call(l,e)&&J(a,e,l[e]);if(D)for(var e of D(l))H.call(l,e)&&J(a,e,l[e]);return a};import{P as k,L as U,W as j,Q as u,Y as m,S as v,a8 as Q,aZ as _,a0 as y,aT as W}from"./vue.fe1efe53.js";import{_ as Z}from"./index.5d086418.js";import"./hongluan-business.978527d4.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.f25ece14.js";const q={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:a,openBlock:l,createBlock:e}=_;function o(n,r){const p=a("hb-data-collect");return l(),e(p,{title:`${Math.floor(Math.random()*1e4)}`,"sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},null,8,["title"])}const{defineComponent:c,ref:i}=_,f=c({setup(){const n=i(!1);return{visible:n,show:()=>{n.value=!n.value}}}});return V({render:o},f)}(),"hb-demo1":function(){const{resolveComponent:a,createVNode:l,withCtx:e,openBlock:o,createBlock:c}=_;function i(r,p){const b=a("fill-Firm"),g=a("hl-icon"),x=a("hb-data-collect");return o(),c(x,{gap:"var(--sm)",title:"3867.25","sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},{icon:e(()=>[l(g,{type:"primary",effect:"light",size:"xl",fill:"",radius:"",class:"static"},{default:e(()=>[l(b)]),_:1})]),_:1})}const{defineComponent:f}=_,n=f({setup(){return{}}});return V({render:i},n)}(),"hb-demo2":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:o,resolveComponent:c,createBlock:i,createCommentVNode:f,withCtx:n,createVNode:r,createElementVNode:p}=_,b={class:"m-t-md"},g=p("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),x=p("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function A(s,d){const h=c("hl-option"),B=c("hl-select"),z=c("hl-group"),S=c("fill-PhoneBook"),F=c("hl-icon"),C=c("hb-data-collect");return e(),o(l,null,[r(z,{gap:"var(--sm)"},{default:n(()=>[r(B,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=t=>s.value=t),clearable:"",placeholder:"gap \u5C5E\u6027"},{default:n(()=>[(e(!0),o(l,null,a(s.options,t=>(e(),o(l,null,[t.divider?(e(),i(h,{key:t.value,divider:""})):(e(),i(h,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),r(B,{modelValue:s.valueX,"onUpdate:modelValue":d[1]||(d[1]=t=>s.valueX=t),clearable:"",placeholder:"gap-x \u5C5E\u6027"},{default:n(()=>[(e(!0),o(l,null,a(s.options,t=>(e(),o(l,null,[t.divider?(e(),i(h,{key:t.value,divider:""})):(e(),i(h,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),r(B,{modelValue:s.valueY,"onUpdate:modelValue":d[2]||(d[2]=t=>s.valueY=t),clearable:"",placeholder:"gap-y \u5C5E\u6027"},{default:n(()=>[(e(!0),o(l,null,a(s.options,t=>(e(),o(l,null,[t.divider?(e(),i(h,{key:t.value,divider:""})):(e(),i(h,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),p("div",b,[r(C,{gap:"var(--md)",padding:s.value,"padding-x":s.valueX,"padding-y":s.valueY,class:"bg-stripes"},{default:n(()=>[r(F,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:n(()=>[r(S)]),_:1}),r(z,{dir:"vertical",full:"full-x",class:"content"},{default:n(()=>[g,x]),_:1})]),_:1},8,["padding","padding-x","padding-y"])])],64)}const{defineComponent:w,ref:E}=_,N=w({setup(){const s=E([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),d=E("var(--md)"),h=E("var(--md)"),B=E("var(--md)");return{options:s,value:d,valueX:h,valueY:B}}});return V({render:A},N)}(),"hb-demo3":function(){const{renderList:a,Fragment:l,openBlock:e,createElementBlock:o,resolveComponent:c,createBlock:i,createCommentVNode:f,withCtx:n,createVNode:r,createElementVNode:p}=_,b={class:"m-t-md"},g=p("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),x=p("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function A(s,d){const h=c("hl-option"),B=c("hl-select"),z=c("fill-Application"),S=c("hl-icon"),F=c("hl-group"),C=c("hb-data-collect");return e(),o(l,null,[r(B,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=t=>s.value=t),clearable:"",placeholder:"gap \u5C5E\u6027"},{default:n(()=>[(e(!0),o(l,null,a(s.options,t=>(e(),o(l,null,[t.divider?(e(),i(h,{key:t.value,divider:""})):(e(),i(h,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),p("div",b,[r(C,{gap:"var(--md)",radius:s.value,class:"border border-primary bg-stripes"},{default:n(()=>[r(S,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:n(()=>[r(z)]),_:1}),r(F,{dir:"vertical",full:"full-x",class:"content"},{default:n(()=>[g,x]),_:1})]),_:1},8,["radius"])])],64)}const{defineComponent:w,ref:E}=_,N=w({setup(){const s=E([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),d=E("var(--xxs)");return{options:s,value:d}}});return V({render:A},N)}(),"hb-demo4":function(){const{resolveComponent:a,createVNode:l,withCtx:e,createElementVNode:o,toDisplayString:c,openBlock:i,createBlock:f}=_,n=o("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),r=o("span",{class:"sub-title"},"HTML, JS, ReactJS",-1),p=o("h6",{class:"title"},"13,647",-1),b=o("span",{class:"sub-title"},"\u62A5\u8B66\u6B21\u6570\u7EDF\u8BA1",-1),g={class:"progress-content"},x=o("span",{class:"sub-title"},"\u9500\u552E\u603B\u989D",-1),A=o("h2",{class:"title"},"$13,647",-1),w=o("div",{class:"static text-danger p-t-lg"},"+75%",-1),E=o("h2",{class:"title"},"13,647",-1),N=o("span",null,"\u6BCF\u5468\u8425\u4E1A\u989D",-1);function s(B,z){const S=a("fill-print"),F=a("hl-icon"),C=a("hl-group"),t=a("hb-data-collect"),M=a("hl-col"),L=a("fill-pie"),X=a("hl-progress"),Y=a("fill-chart-bar"),$=a("hl-row");return i(),f($,{layout:"grid",count:"count-lg-3 count-sm-2"},{default:e(()=>[l(M,{span:"col"},{default:e(()=>[l(t,{full:"",gap:"var(--md)"},{default:e(()=>[l(F,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(S)]),_:1}),l(C,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[n,r]),_:1})]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(t,{full:"",gap:"var(--md)"},{default:e(()=>[l(F,{type:"primary",size:"lg",effect:"light",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(L)]),_:1}),l(C,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[p,b]),_:1}),l(X,{"show-as":"circle","stroke-width":"6px",percentage:Math.floor(Math.random()*(1-100)+100),class:"static",style:{width:"56px",height:"56px"}},{default:e(({percentage:P})=>[o("div",g,c(P)+"%",1)]),_:1},8,["percentage"])]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(t,{full:"",gap:"var(--md)"},{default:e(()=>[l(C,{dir:"vertical"},{default:e(()=>[x,A]),_:1}),w]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(t,{dir:"vertical",align:"left",padding:"var(--lg)",gap:"var(--md)",class:"bg-warning light-5 border border-warning"},{default:e(()=>[l(C,{dir:"horizontal",gap:"var(--sm)"},{default:e(()=>[l(F,{name:"alert",type:"warning",size:"xxl",class:"static"},{default:e(()=>[l(Y)]),_:1}),E]),_:1}),N]),_:1})]),_:1})]),_:1})}const{defineComponent:d}=_,h=d({setup(){return{}}});return V({render:s},h)}()}},G=u("h1",null,"DataCollect \u6570\u636E\u96C6\u5361\u7247",-1),I=u("p",null,"\u6570\u636E\u96C6\u5361\u7247\u7528\u4E8E\u8868\u8FBE\u4E00\u4E9B\u6570\u636E\u7684\u96C6\u5408\u3002",-1),K=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),y(" \u57FA\u7840\u7528\u6CD5")],-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-data-collect :title="\`\${Math.floor(Math.random() * 10000)}\`" sub-title="\u4ECA\u65E5\u4EFB\u52A1\u6570" />
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const show = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      show,
    }
  },
})
<\/script>
`)],-1),ee=u("h2",{id:"tu-biao"},[u("a",{class:"header-anchor",href:"#tu-biao"}),y(" \u56FE\u6807")],-1),le=u("pre",null,[u("code",{class:"html"},` <template>
  <hb-data-collect gap="var(--sm)" title="3867.25" sub-title="\u4ECA\u65E5\u4EFB\u52A1\u6570">
    <template #icon>
      <hl-icon
        type="primary"
        effect="light"
        size="xl"
        fill
        radius
        class="static"
      >
        <fill-Firm />
      </hl-icon>
    </template>
  </hb-data-collect>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
<\/script>
`)],-1),te=u("h2",{id:"padding-shu-xing"},[u("a",{class:"header-anchor",href:"#padding-shu-xing"}),y(" Padding \u5C5E\u6027")],-1),ae=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
    <hl-select v-model="value" clearable placeholder="gap \u5C5E\u6027">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
    <hl-select v-model="valueX" clearable placeholder="gap-x \u5C5E\u6027">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
    <hl-select v-model="valueY" clearable placeholder="gap-y \u5C5E\u6027">
      <template v-for="item in options">
        <hl-option v-if="item.divider" :key="item.value" divider />
        <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
      </template>
    </hl-select>
  </hl-group>
  <div class="m-t-md">
    <hb-data-collect
      gap="var(--md)"
      :padding="value"
      :padding-x="valueX"
      :padding-y="valueY"
      class="bg-stripes"
    >
      <hl-icon type="primary" size="lg" fill radius class="symbol">
        <fill-PhoneBook />
      </hl-icon>
      <hl-group dir="vertical" full="full-x" class="content">
        <h6 class="title">\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF</h6>
        <span class="sub-title">HTML, JS, ReactJS</span>
      </hl-group>
    </hb-data-collect>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '0',
        label: 'none',
      },
      {
        divider: true,
      },
      {
        value: 'var(--sm)',
        label: 'sm',
      },
      {
        value: 'var(--md)',
        label: 'md',
      },
      {
        value: 'var(--lg)',
        label: 'lg',
      },
      {
        value: 'var(--xl)',
        label: 'xl',
      },
      {
        value: 'var(--xxl)',
        label: 'xxl',
      },
    ])
    const value = ref('var(--md)')
    const valueX = ref('var(--md)')
    const valueY = ref('var(--md)')

    return {
      options,
      value,
      valueX,
      valueY,
    }
  },
})
<\/script>
`)],-1),oe=u("h2",{id:"radius-shu-xing"},[u("a",{class:"header-anchor",href:"#radius-shu-xing"}),y(" Radius \u5C5E\u6027")],-1),ne=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="gap \u5C5E\u6027">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
  <div class="m-t-md">
    <hb-data-collect gap="var(--md)" :radius="value" class="border border-primary bg-stripes">
      <hl-icon type="primary" size="lg" fill radius class="symbol">
        <fill-Application />
      </hl-icon>
      <hl-group dir="vertical" full="full-x" class="content">
        <h6 class="title">\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF</h6>
        <span class="sub-title">HTML, JS, ReactJS</span>
      </hl-group>
    </hb-data-collect>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = ref([
      {
        value: '0',
        label: 'none',
      },
      {
        divider: true,
      },
      {
        value: 'var(--xxs)',
        label: 'xxs',
      },
      {
        value: 'var(--xs)',
        label: 'xs',
      },
      {
        value: 'var(--sm)',
        label: 'sm',
      },
      {
        value: 'var(--md)',
        label: 'md',
      },
      {
        value: 'var(--lg)',
        label: 'lg',
      },
      {
        value: 'var(--xl)',
        label: 'xl',
      },
      {
        value: 'var(--xxl)',
        label: 'xxl',
      },
    ])
    const value = ref('var(--xxs)')

    return {
      options,
      value,
    }
  },
})
<\/script>
`)],-1),ue=u("h2",{id:"zi-ding-yi-nei-rong"},[u("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),y(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),se=u("div",null,[u("p",null,[y("data-collect\u7531"),u("code",null,"group"),y("\u7EC4\u4EF6\u6784\u9020\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528"),u("code",null,"group"),y("\u7684\u5168\u90E8\u5C5E\u6027\u3002")])],-1),re=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-row layout="grid" count="count-lg-3 count-sm-2">
    <hl-col span="col">
      <hb-data-collect full gap="var(--md)">
        <hl-icon type="primary" size="lg" fill radius class="symbol">
          <fill-print />
        </hl-icon>
        <hl-group dir="vertical" full="full-x" class="content">
          <h6 class="title">\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF</h6>
          <span class="sub-title">HTML, JS, ReactJS</span>
        </hl-group>
      </hb-data-collect>
    </hl-col>
    <hl-col span="col">
      <hb-data-collect full gap="var(--md)">
        <hl-icon
          type="primary"
          size="lg"
          effect="light"
          fill
          radius
          class="symbol"
        >
          <fill-pie />
        </hl-icon>
        <hl-group dir="vertical" full="full-x" class="content">
          <h6 class="title">13,647</h6>
          <span class="sub-title">\u62A5\u8B66\u6B21\u6570\u7EDF\u8BA1</span>
        </hl-group>
        <hl-progress
          show-as="circle"
          stroke-width="6px"
          :percentage="Math.floor(Math.random() * (1 - 100) + 100)"
          class="static"
          style="width: 56px; height: 56px"
        >
          <template #default="{ percentage }">
            <div class="progress-content">{{ percentage }}%</div>
          </template>
        </hl-progress>
      </hb-data-collect>
    </hl-col>

    <hl-col span="col">
      <hb-data-collect full gap="var(--md)">
        <hl-group dir="vertical">
          <span class="sub-title">\u9500\u552E\u603B\u989D</span>
          <h2 class="title">$13,647</h2>
        </hl-group>
        <div class="static text-danger p-t-lg">+75%</div>
      </hb-data-collect>
    </hl-col>

    <hl-col span="col">
      <hb-data-collect dir="vertical" align="left" padding="var(--lg)" gap="var(--md)" class="bg-warning light-5 border border-warning">
        <hl-group dir="horizontal" gap="var(--sm)">
          <hl-icon name="alert" type="warning" size="xxl" class="static">
            <fill-chart-bar />
          </hl-icon>
          <h2 class="title">13,647</h2>
        </hl-group>
        <span>\u6BCF\u5468\u8425\u4E1A\u989D</span>
      </hb-data-collect>
    </hl-col>
  </hl-row>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
<\/script>
`)],-1),ce=W('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sub-title</td><td>\u526F\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>padding</td><td>\u586B\u5145\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>radius</td><td>\u5706\u89D2\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>\u56FE\u6807</td></tr><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table>',4);function ie(a,l,e,o,c,i){const f=k("hb-demo0"),n=k("demo-block"),r=k("hb-demo1"),p=k("hb-demo2"),b=k("hb-demo3"),g=k("hb-demo4"),x=k("right-nav");return U(),j(Q,null,[u("section",null,[G,I,K,m(n,{fs:""},{source:v(()=>[m(f)]),highlight:v(()=>[O]),_:1}),ee,m(n,{fs:""},{source:v(()=>[m(r)]),highlight:v(()=>[le]),_:1}),te,m(n,{fs:""},{source:v(()=>[m(p)]),highlight:v(()=>[ae]),_:1}),oe,m(n,{fs:""},{source:v(()=>[m(b)]),highlight:v(()=>[ne]),_:1}),ue,m(n,{fs:""},{source:v(()=>[m(g)]),highlight:v(()=>[re]),default:v(()=>[se]),_:1}),ce]),m(x)],64)}var fe=Z(q,[["render",ie]]);export{fe as default};
