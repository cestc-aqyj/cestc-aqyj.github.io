var H=Object.defineProperty;var D=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var J=(t,l,e)=>l in t?H(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,A=(t,l)=>{for(var e in l||(l={}))P.call(l,e)&&J(t,e,l[e]);if(D)for(var e of D(l))T.call(l,e)&&J(t,e,l[e]);return t};import{S as k,L as U,W as j,Q as a,a0 as m,U as _,a7 as Q,aY as v,a1 as C,aS as W}from"./vue.aeed2366.js";import{_ as q}from"./index.1ceb2445.js";import"./hongluan-business.7de35cf9.js";import"./highlight.aba4bc0a.js";import"./hongluan-icons.6c2b21a2.js";const G={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:t,openBlock:l,createBlock:e}=v;function s(n,r){const d=t("hb-data-collect");return l(),e(d,{title:`${Math.floor(Math.random()*1e4)}`,"sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},null,8,["title"])}const{defineComponent:u,ref:i}=v,f=u({setup(){const n=i(!1);return{visible:n,show:()=>{n.value=!n.value}}}});return A({render:s},f)}(),"hb-demo1":function(){const{resolveComponent:t,createVNode:l,withCtx:e,openBlock:s,createBlock:u}=v;function i(r,d){const b=t("fill-Firm"),g=t("hl-icon"),x=t("hb-data-collect");return s(),u(x,{gap:"var(--sm)",title:"3867.25","sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},{icon:e(()=>[l(g,{type:"primary",effect:"light",size:"xl",fill:"",radius:"",class:"static"},{default:e(()=>[l(b)]),_:1})]),_:1})}const{defineComponent:f}=v,n=f({setup(){return{}}});return A({render:i},n)}(),"hb-demo2":function(){const{renderList:t,Fragment:l,openBlock:e,createElementBlock:s,resolveComponent:u,createBlock:i,createCommentVNode:f,withCtx:n,createVNode:r,createElementVNode:d}=v,b={class:"m-t-md"},g=d("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),x=d("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function w(c,p){const h=u("hl-option"),y=u("hl-select"),S=u("hl-group"),z=u("fill-PhoneBook"),F=u("hl-icon"),E=u("hb-data-collect");return e(),s(l,null,[r(S,{gap:"var(--sm)"},{default:n(()=>[r(y,{modelValue:c.valueX,"onUpdate:modelValue":p[0]||(p[0]=o=>c.valueX=o),clearable:"",placeholder:"gap-x \u5C5E\u6027"},{default:n(()=>[(e(!0),s(l,null,t(c.options,o=>(e(),s(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),r(y,{modelValue:c.valueY,"onUpdate:modelValue":p[1]||(p[1]=o=>c.valueY=o),clearable:"",placeholder:"gap-y \u5C5E\u6027"},{default:n(()=>[(e(!0),s(l,null,t(c.options,o=>(e(),s(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),d("div",b,[r(E,{gap:"var(--md)","padding-x":c.valueX,"padding-y":c.valueY,class:"bg-stripes"},{default:n(()=>[r(F,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:n(()=>[r(z)]),_:1}),r(S,{dir:"vertical",full:"full-x",class:"content"},{default:n(()=>[g,x]),_:1})]),_:1},8,["padding-x","padding-y"])])],64)}const{defineComponent:V,ref:B}=v,N=V({setup(){const c=B([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),p=B("var(--md)"),h=B("var(--md)"),y=B("var(--md)");return{options:c,value:p,valueX:h,valueY:y}}});return A({render:w},N)}(),"hb-demo3":function(){const{renderList:t,Fragment:l,openBlock:e,createElementBlock:s,resolveComponent:u,createBlock:i,createCommentVNode:f,withCtx:n,createVNode:r,createElementVNode:d}=v,b={class:"m-t-md"},g=d("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),x=d("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function w(c,p){const h=u("hl-option"),y=u("hl-select"),S=u("fill-Application"),z=u("hl-icon"),F=u("hl-group"),E=u("hb-data-collect");return e(),s(l,null,[r(y,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=o=>c.value=o),clearable:"",placeholder:"gap \u5C5E\u6027"},{default:n(()=>[(e(!0),s(l,null,t(c.options,o=>(e(),s(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),d("div",b,[r(E,{gap:"var(--md)",radius:c.value,class:"border border-primary bg-stripes"},{default:n(()=>[r(z,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:n(()=>[r(S)]),_:1}),r(F,{dir:"vertical",full:"full-x",class:"content"},{default:n(()=>[g,x]),_:1})]),_:1},8,["radius"])])],64)}const{defineComponent:V,ref:B}=v,N=V({setup(){const c=B([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),p=B("var(--xxs)");return{options:c,value:p}}});return A({render:w},N)}(),"hb-demo4":function(){const{resolveComponent:t,createVNode:l,withCtx:e,createElementVNode:s,toDisplayString:u,openBlock:i,createBlock:f}=v,n=s("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),r=s("span",{class:"sub-title"},"HTML, JS, ReactJS",-1),d=s("h6",{class:"title"},"13,647",-1),b=s("span",{class:"sub-title"},"\u62A5\u8B66\u6B21\u6570\u7EDF\u8BA1",-1),g={class:"progress-content"},x=s("span",{class:"sub-title"},"\u9500\u552E\u603B\u989D",-1),w=s("h2",{class:"title"},"$13,647",-1),V=s("div",{class:"static text-danger p-t-lg"},"+75%",-1),B=s("h2",{class:"title"},"13,647",-1),N=s("span",null,"\u6BCF\u5468\u8425\u4E1A\u989D",-1);function c(y,S){const z=t("fill-print"),F=t("hl-icon"),E=t("hl-group"),o=t("hb-data-collect"),M=t("hl-col"),L=t("fill-pie"),X=t("hl-progress"),Y=t("fill-chart-bar"),$=t("hl-row");return i(),f($,{layout:"grid",count:"count-lg-3 count-sm-2"},{default:e(()=>[l(M,{span:"col"},{default:e(()=>[l(o,{full:"",gap:"var(--md)"},{default:e(()=>[l(F,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(z)]),_:1}),l(E,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[n,r]),_:1})]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(o,{full:"",gap:"var(--md)"},{default:e(()=>[l(F,{type:"primary",size:"lg",effect:"light",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(L)]),_:1}),l(E,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[d,b]),_:1}),l(X,{"show-as":"circle","stroke-width":"6px",percentage:Math.floor(Math.random()*(1-100)+100),class:"static",style:{width:"56px",height:"56px"}},{default:e(({percentage:R})=>[s("div",g,u(R)+"%",1)]),_:1},8,["percentage"])]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(o,{full:"",gap:"var(--md)"},{default:e(()=>[l(E,{dir:"vertical"},{default:e(()=>[x,w]),_:1}),V]),_:1})]),_:1}),l(M,{span:"col"},{default:e(()=>[l(o,{dir:"vertical",align:"left",padding:"var(--lg)",gap:"var(--md)",class:"bg-warning light-5 border border-warning"},{default:e(()=>[l(E,{dir:"horizontal",gap:"var(--sm)"},{default:e(()=>[l(F,{name:"alert",type:"warning",size:"xxl",class:"static"},{default:e(()=>[l(Y)]),_:1}),B]),_:1}),N]),_:1})]),_:1})]),_:1})}const{defineComponent:p}=v,h=p({setup(){return{}}});return A({render:c},h)}()}},I=a("h1",null,"DataCollect \u6570\u636E\u96C6\u5361\u7247",-1),K=a("p",null,"\u6570\u636E\u96C6\u5361\u7247\u7528\u4E8E\u8868\u8FBE\u4E00\u4E9B\u6570\u636E\u7684\u96C6\u5408\u3002",-1),O=a("h2",{id:"ji-chu-yong-fa"},[a("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),C(" \u57FA\u7840\u7528\u6CD5")],-1),Z=a("pre",null,[a("code",{class:"html"},` <template>
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
`)],-1),ee=a("h2",{id:"tu-biao"},[a("a",{class:"header-anchor",href:"#tu-biao"}),C(" \u56FE\u6807")],-1),le=a("pre",null,[a("code",{class:"html"},` <template>
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
`)],-1),te=a("h2",{id:"padding-shu-xing"},[a("a",{class:"header-anchor",href:"#padding-shu-xing"}),C(" Padding \u5C5E\u6027")],-1),oe=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-group gap="var(--sm)">
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
`)],-1),ae=a("h2",{id:"radius-shu-xing"},[a("a",{class:"header-anchor",href:"#radius-shu-xing"}),C(" Radius \u5C5E\u6027")],-1),ne=a("pre",null,[a("code",{class:"html"},` <template>
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
`)],-1),se=a("h2",{id:"zi-ding-yi-nei-rong"},[a("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),C(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),ue=a("div",null,[a("p",null,[C("data-collect\u7531"),a("code",null,"group"),C("\u7EC4\u4EF6\u6784\u9020\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528"),a("code",null,"group"),C("\u7684\u5168\u90E8\u5C5E\u6027\u3002")])],-1),re=a("pre",null,[a("code",{class:"html"},` <template>
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
`)],-1),ce=W('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sub-title</td><td>\u526F\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>padding</td><td>\u586B\u5145\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>radius</td><td>\u5706\u89D2\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>\u56FE\u6807</td></tr><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table>',4);function ie(t,l,e,s,u,i){const f=k("hb-demo0"),n=k("demo-block"),r=k("hb-demo1"),d=k("hb-demo2"),b=k("hb-demo3"),g=k("hb-demo4"),x=k("right-nav");return U(),j(Q,null,[a("section",null,[I,K,O,m(n,{fs:""},{source:_(()=>[m(f)]),highlight:_(()=>[Z]),_:1}),ee,m(n,{fs:""},{source:_(()=>[m(r)]),highlight:_(()=>[le]),_:1}),te,m(n,{fs:""},{source:_(()=>[m(d)]),highlight:_(()=>[oe]),_:1}),ae,m(n,{fs:""},{source:_(()=>[m(b)]),highlight:_(()=>[ne]),_:1}),se,m(n,{fs:""},{source:_(()=>[m(g)]),highlight:_(()=>[re]),default:_(()=>[ue]),_:1}),ce]),m(x)],64)}var fe=q(G,[["render",ie]]);export{fe as default};
