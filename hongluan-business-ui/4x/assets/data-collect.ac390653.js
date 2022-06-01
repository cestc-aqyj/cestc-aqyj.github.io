var j=Object.defineProperty;var X=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var H=(t,l,e)=>l in t?j(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,A=(t,l)=>{for(var e in l||(l={}))I.call(l,e)&&H(t,e,l[e]);if(X)for(var e of X(l))Q.call(l,e)&&H(t,e,l[e]);return t};import{U as y,L as W,W as q,Q as a,a1 as m,X as _,a9 as G,aX as v,a2 as E,aR as K}from"./vue.64e975b8.js";import{H as L}from"./hongluan-icons.0c35ed0d.js";import{_ as O}from"./index.ac2db5b0.js";import"./hongluan-business.0b34ca1e.js";import"./highlight.aba4bc0a.js";const Z={name:"component-doc",components:{"hb-demo0":function(){const{resolveComponent:t,openBlock:l,createBlock:e}=v;function s(n,u){const d=t("hb-data-collect");return l(),e(d,{title:`${Math.floor(Math.random()*1e4)}`,"sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},null,8,["title"])}const{defineComponent:r,ref:i}=v,f=r({setup(){const n=i(!1);return{visible:n,show:()=>{n.value=!n.value}}}});return A({render:s},f)}(),"hb-demo1":function(){const{resolveComponent:t,createVNode:l,withCtx:e,openBlock:s,createBlock:r}=v;function i(d,B){const g=t("fill-firm"),b=t("hl-icon"),F=t("hb-data-collect");return s(),r(F,{gap:"var(--sm)",title:"3867.25","sub-title":"\u4ECA\u65E5\u4EFB\u52A1\u6570"},{icon:e(()=>[l(b,{type:"primary",effect:"light",size:"xl",fill:"",radius:"",class:"static"},{default:e(()=>[l(g)]),_:1})]),_:1})}const{defineComponent:f}=v,{FillFirm:n}=L,u=f({components:{FillFirm:n}});return A({render:i},u)}(),"hb-demo2":function(){const{renderList:t,Fragment:l,openBlock:e,createElementBlock:s,resolveComponent:r,createBlock:i,createCommentVNode:f,withCtx:n,createVNode:u,createElementVNode:d}=v,B={class:"m-t-md"},g=d("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),b=d("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function F(c,p){const h=r("hl-option"),C=r("hl-select"),k=r("hl-group"),P=r("fill-PhoneBook"),S=r("hl-icon"),z=r("hb-data-collect");return e(),s(l,null,[u(k,{gap:"var(--sm)"},{default:n(()=>[u(C,{modelValue:c.valueX,"onUpdate:modelValue":p[0]||(p[0]=o=>c.valueX=o),clearable:"",placeholder:"gap-x \u5C5E\u6027"},{default:n(()=>[(e(!0),s(l,null,t(c.options,o=>(e(),s(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),u(C,{modelValue:c.valueY,"onUpdate:modelValue":p[1]||(p[1]=o=>c.valueY=o),clearable:"",placeholder:"gap-y \u5C5E\u6027"},{default:n(()=>[(e(!0),s(l,null,t(c.options,o=>(e(),s(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"])]),_:1}),d("div",B,[u(z,{gap:"var(--md)","padding-x":c.valueX,"padding-y":c.valueY,class:"bg-stripes"},{default:n(()=>[u(S,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:n(()=>[u(P)]),_:1}),u(k,{dir:"vertical",full:"full-x",class:"content"},{default:n(()=>[g,b]),_:1})]),_:1},8,["padding-x","padding-y"])])],64)}const{defineComponent:w,ref:x}=v,{FillPhoneBook:V}=L,N=w({components:{FillPhoneBook:V},setup(){const c=x([{value:"0",label:"none"},{divider:!0},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),p=x("var(--md)"),h=x("var(--md)"),C=x("var(--md)");return{options:c,value:p,valueX:h,valueY:C}}});return A({render:F},N)}(),"hb-demo3":function(){const{renderList:t,Fragment:l,openBlock:e,createElementBlock:s,resolveComponent:r,createBlock:i,createCommentVNode:f,withCtx:n,createVNode:u,createElementVNode:d}=v,B={class:"m-t-md"},g=d("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),b=d("span",{class:"sub-title"},"HTML, JS, ReactJS",-1);function F(c,p){const h=r("hl-option"),C=r("hl-select"),k=r("fill-application"),P=r("hl-icon"),S=r("hl-group"),z=r("hb-data-collect");return e(),s(l,null,[u(C,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=o=>c.value=o),clearable:"",placeholder:"gap \u5C5E\u6027"},{default:n(()=>[(e(!0),s(l,null,t(c.options,o=>(e(),s(l,null,[o.divider?(e(),i(h,{key:o.value,divider:""})):(e(),i(h,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))],64))),256))]),_:1},8,["modelValue"]),d("div",B,[u(z,{gap:"var(--md)",radius:c.value,class:"border border-primary bg-stripes"},{default:n(()=>[u(P,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:n(()=>[u(k)]),_:1}),u(S,{dir:"vertical",full:"full-x",class:"content"},{default:n(()=>[g,b]),_:1})]),_:1},8,["radius"])])],64)}const{defineComponent:w,ref:x}=v,{FillApplication:V}=L,N=w({components:{FillApplication:V},setup(){const c=x([{value:"0",label:"none"},{divider:!0},{value:"var(--xxs)",label:"xxs"},{value:"var(--xs)",label:"xs"},{value:"var(--sm)",label:"sm"},{value:"var(--md)",label:"md"},{value:"var(--lg)",label:"lg"},{value:"var(--xl)",label:"xl"},{value:"var(--xxl)",label:"xxl"}]),p=x("var(--xxs)");return{options:c,value:p}}});return A({render:F},N)}(),"hb-demo4":function(){const{resolveComponent:t,createVNode:l,withCtx:e,createElementVNode:s,toDisplayString:r,openBlock:i,createBlock:f}=v,n=s("h6",{class:"title"},"\u5E03\u62C9\u5FB7\xB7\u897F\u8499\u65AF",-1),u=s("span",{class:"sub-title"},"HTML, JS, ReactJS",-1),d=s("h6",{class:"title"},"13,647",-1),B=s("span",{class:"sub-title"},"\u62A5\u8B66\u6B21\u6570\u7EDF\u8BA1",-1),g={class:"progress-content"},b=s("span",{class:"sub-title"},"\u9500\u552E\u603B\u989D",-1),F=s("h2",{class:"title"},"$13,647",-1),w=s("div",{class:"static text-danger p-t-lg"},"+75%",-1),x=s("h2",{class:"title"},"13,647",-1),V=s("span",null,"\u6BCF\u5468\u8425\u4E1A\u989D",-1);function N(P,S){const z=t("fill-print"),o=t("hl-icon"),M=t("hl-group"),D=t("hb-data-collect"),J=t("hl-col"),R=t("fill-pie"),Y=t("hl-progress"),$=t("fill-chart-bar"),T=t("hl-row");return i(),f(T,{layout:"grid",count:"count-lg-3 count-sm-2"},{default:e(()=>[l(J,{span:"col"},{default:e(()=>[l(D,{full:"",gap:"var(--md)"},{default:e(()=>[l(o,{type:"primary",size:"lg",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(z)]),_:1}),l(M,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[n,u]),_:1})]),_:1})]),_:1}),l(J,{span:"col"},{default:e(()=>[l(D,{full:"",gap:"var(--md)"},{default:e(()=>[l(o,{type:"primary",size:"lg",effect:"light",fill:"",radius:"",class:"symbol"},{default:e(()=>[l(R)]),_:1}),l(M,{dir:"vertical",full:"full-x",class:"content"},{default:e(()=>[d,B]),_:1}),l(Y,{"show-as":"circle","stroke-width":"6px",percentage:Math.floor(Math.random()*(1-100)+100),class:"static",style:{width:"56px",height:"56px"}},{default:e(({percentage:U})=>[s("div",g,r(U)+"%",1)]),_:1},8,["percentage"])]),_:1})]),_:1}),l(J,{span:"col"},{default:e(()=>[l(D,{full:"",gap:"var(--md)"},{default:e(()=>[l(M,{dir:"vertical"},{default:e(()=>[b,F]),_:1}),w]),_:1})]),_:1}),l(J,{span:"col"},{default:e(()=>[l(D,{dir:"vertical",align:"left",padding:"var(--lg)",gap:"var(--md)",class:"bg-warning light-5 border border-warning"},{default:e(()=>[l(M,{dir:"horizontal",gap:"var(--sm)"},{default:e(()=>[l(o,{name:"alert",type:"warning",size:"xxl",class:"static"},{default:e(()=>[l($)]),_:1}),x]),_:1}),V]),_:1})]),_:1})]),_:1})}const{defineComponent:c}=v,{FillPrint:p,FillPie:h,FillChartBar:C}=L,k=c({components:{FillPrint:p,FillPie:h,FillChartBar:C}});return A({render:N},k)}()}},ee=a("h1",null,"DataCollect \u6570\u636E\u96C6\u5361\u7247",-1),le=a("p",null,"\u6570\u636E\u96C6\u5361\u7247\u7528\u4E8E\u8868\u8FBE\u4E00\u4E9B\u6570\u636E\u7684\u96C6\u5408\u3002",-1),te=a("h2",{id:"ji-chu-yong-fa"},[a("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),E(" \u57FA\u7840\u7528\u6CD5")],-1),oe=a("pre",null,[a("code",{class:"html"},` <template>
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
`)],-1),ae=a("h2",{id:"tu-biao"},[a("a",{class:"header-anchor",href:"#tu-biao"}),E(" \u56FE\u6807")],-1),ne=a("pre",null,[a("code",{class:"html"},` <template>
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
        <fill-firm />
      </hl-icon>
    </template>
  </hb-data-collect>
</template>
<script>
import { defineComponent } from 'vue'
import { FillFirm } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillFirm },
})
<\/script>
`)],-1),se=a("h2",{id:"padding-shu-xing"},[a("a",{class:"header-anchor",href:"#padding-shu-xing"}),E(" Padding \u5C5E\u6027")],-1),ue=a("pre",null,[a("code",{class:"html"},` <template>
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
import { FillPhoneBook } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillPhoneBook },
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
`)],-1),re=a("h2",{id:"radius-shu-xing"},[a("a",{class:"header-anchor",href:"#radius-shu-xing"}),E(" Radius \u5C5E\u6027")],-1),ce=a("pre",null,[a("code",{class:"html"},` <template>
  <hl-select v-model="value" clearable placeholder="gap \u5C5E\u6027">
    <template v-for="item in options">
      <hl-option v-if="item.divider" :key="item.value" divider />
      <hl-option v-else :key="item.value" :label="item.label" :value="item.value" />
    </template>
  </hl-select>
  <div class="m-t-md">
    <hb-data-collect gap="var(--md)" :radius="value" class="border border-primary bg-stripes">
      <hl-icon type="primary" size="lg" fill radius class="symbol">
        <fill-application />
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
import { FillApplication } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillApplication },
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
`)],-1),ie=a("h2",{id:"zi-ding-yi-nei-rong"},[a("a",{class:"header-anchor",href:"#zi-ding-yi-nei-rong"}),E(" \u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),de=a("div",null,[a("p",null,[E("data-collect\u7531"),a("code",null,"group"),E("\u7EC4\u4EF6\u6784\u9020\uFF0C\u540C\u65F6\u53EF\u4F7F\u7528"),a("code",null,"group"),E("\u7684\u5168\u90E8\u5C5E\u6027\u3002")])],-1),pe=a("pre",null,[a("code",{class:"html"},` <template>
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
import { FillPrint, FillPie, FillChartBar } from '@hongluan-ui/icons'

export default defineComponent({
  components: { FillPrint, FillPie, FillChartBar },
})
<\/script>
`)],-1),he=K('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>sub-title</td><td>\u526F\u6807\u9898\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>padding</td><td>\u586B\u5145\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>radius</td><td>\u5706\u89D2\u8BBE\u7F6E</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>\u56FE\u6807</td></tr><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table>',4);function me(t,l,e,s,r,i){const f=y("hb-demo0"),n=y("demo-block"),u=y("hb-demo1"),d=y("hb-demo2"),B=y("hb-demo3"),g=y("hb-demo4"),b=y("right-nav");return W(),q(G,null,[a("section",null,[ee,le,te,m(n,{fs:""},{source:_(()=>[m(f)]),highlight:_(()=>[oe]),_:1}),ae,m(n,{fs:""},{source:_(()=>[m(u)]),highlight:_(()=>[ne]),_:1}),se,m(n,{fs:""},{source:_(()=>[m(d)]),highlight:_(()=>[ue]),_:1}),re,m(n,{fs:""},{source:_(()=>[m(B)]),highlight:_(()=>[ce]),_:1}),ie,m(n,{fs:""},{source:_(()=>[m(g)]),highlight:_(()=>[pe]),default:_(()=>[de]),_:1}),he]),m(b)],64)}var Be=O(Z,[["render",me]]);export{Be as default};
