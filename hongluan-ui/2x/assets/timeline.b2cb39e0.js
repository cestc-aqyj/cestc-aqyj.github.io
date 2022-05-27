var $=Object.defineProperty;var j=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var S=(l,n,t)=>n in l?$(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,V=(l,n)=>{for(var t in n||(n={}))O.call(n,t)&&S(l,t,n[t]);if(j)for(var t of j(n))P.call(n,t)&&S(l,t,n[t]);return l};import{H as w,L as G,W as Q,Q as e,X as v,P as f,a4 as W,aJ as D,S as s,o as X}from"./vue.059774a0.js";import{_ as H}from"./index.c1538894.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";import"./hongluan-icons.5b925e95.js";const J={name:"component-doc",components:{"hl-demo0":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:u,toDisplayString:o,createTextVNode:F,resolveComponent:a,withCtx:i,createBlock:c,createVNode:m}=D;function d(B,k){const A=a("hl-timeline-item"),p=a("hl-timeline"),N=a("hl-col"),g=a("hl-row");return t(),c(g,null,{default:i(()=>[m(N,{span:"col"},{default:i(()=>[m(p,null,{default:i(()=>[(t(!0),u(n,null,l(B.activities,(h,C)=>(t(),c(A,{key:C,timestamp:h.timestamp},{default:i(()=>[F(o(h.content),1)]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1}),m(N,{span:"col"},{default:i(()=>[m(p,null,{default:i(()=>[(t(!0),u(n,null,l(B.activities,(h,C)=>(t(),c(A,{key:C,timestamp:h.timestamp,dir:"left"},{default:i(()=>[F(o(h.content),1)]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})]),_:1})}const{defineComponent:E,ref:y}=D,x=E({setup(){return{activities:y([{content:"\u6D3B\u52A8\u6309\u671F\u5F00\u59CB",timestamp:"2018-04-15"},{content:"\u901A\u8FC7\u5BA1\u6838",timestamp:"2018-04-13"},{content:"\u521B\u5EFA\u6210\u529F",timestamp:"2018-04-11"},{content:"\u521B\u5EFA\u6210\u529F",timestamp:"2018-04-11"}])}}});return V({render:d},x)}(),"hl-demo1":function(){const{createElementVNode:l,renderList:n,Fragment:t,openBlock:u,createElementBlock:o,toDisplayString:F,createTextVNode:a,resolveComponent:i,withCtx:c,createBlock:m,createVNode:d}=D,E=l("p",{class:"p-md text-center text-primary"},"\u624B\u52A8\u4EA4\u66FF",-1),y=l("p",{class:"p-md text-center text-danger"},"\u81EA\u52A8\u4EA4\u66FF",-1);function x(p,N){const g=i("hl-timeline-item"),h=i("hl-timeline"),C=i("hl-col"),_=i("hl-row");return u(),m(_,null,{default:c(()=>[d(C,{class:"col"},{default:c(()=>[E,d(h,{center:""},{default:c(()=>[(u(!0),o(t,null,n(p.activities,(r,b)=>(u(),m(g,{key:b,timestamp:r.timestamp,placement:r.placement,dir:r.dir},{default:c(()=>[a(F(r.content),1)]),_:2},1032,["timestamp","placement","dir"]))),128))]),_:1})]),_:1}),d(C,{class:"col"},{default:c(()=>[y,d(h,{center:"",alternate:""},{default:c(()=>[(u(!0),o(t,null,n(p.activities,(r,b)=>(u(),m(g,{key:b,timestamp:r.timestamp,placement:r.placement},{default:c(()=>[a(F(r.content),1)]),_:2},1032,["timestamp","placement"]))),128))]),_:1})]),_:1})]),_:1})}const{defineComponent:B,ref:k}=D,A=B({setup(){return{activities:k([{content:"\u6D3B\u52A8\u6309\u671F\u5F00\u59CB",timestamp:"2018-04-15",dir:"left"},{content:"\u901A\u8FC7\u5BA1\u6838",timestamp:"2018-04-13",dir:"right"},{content:"\u521B\u5EFA\u6210\u529F",timestamp:"2018-04-11",dir:""},{content:"\u521B\u5EFA\u6210\u529F",timestamp:"2018-04-11",dir:"left"}])}}});return V({render:x},A)}(),"hl-demo2":function(){const{renderList:l,Fragment:n,openBlock:t,createElementBlock:u,toDisplayString:o,resolveDynamicComponent:F,createBlock:a,resolveComponent:i,withCtx:c,createCommentVNode:m,createTextVNode:d,createVNode:E}=D,y={class:"block"};function x(p,N){const g=i("hl-icon"),h=i("hl-timeline-item"),C=i("hl-timeline");return t(),u("div",y,[E(C,null,{default:c(()=>[(t(!0),u(n,null,l(p.activities,(_,r)=>(t(),a(h,{key:r,type:_.type,color:_.color,timestamp:_.timestamp,placement:_.placement},{icon:c(()=>[_.icon?(t(),a(g,{key:0,type:_.icon.type,round:"",fill:"",effect:"light"},{default:c(()=>[(t(),a(F(_.icon.name)))]),_:2},1032,["type"])):m("",!0)]),default:c(()=>[d(o(_.content)+" ",1)]),_:2},1032,["type","color","timestamp","placement"]))),128))]),_:1})])}const{defineComponent:B,ref:k}=D,A=B({setup(){return{activities:k([{content:"\u4F7F\u7528Icon\u56FE\u6807\u7EC4\u4EF6",timestamp:"2018-04-12 20:46",icon:{name:"TwoNews",type:"primary"},color:"#0bbd87"},{content:"\u81EA\u5B9A\u4E49\u989C\u8272",timestamp:"2018-04-03 20:46",color:"#0bbd87"},{content:"\u4F7F\u7528\u72B6\u6001\u8272",timestamp:"2018-04-03 20:46",icon:{name:"TwoAirplay",type:"danger"}}])}}});return V({render:x},A)}(),"hl-demo3":function(){const{createTextVNode:l,createElementVNode:n,resolveComponent:t,withCtx:u,createVNode:o,openBlock:F,createElementBlock:a}=D,i={class:"block"},c=l("2021/7/12"),m=n("h4",null,"\u66F4\u65B0 Github \u6A21\u677F",-1),d=n("p",null,"bitjjj",-1),E=l("2021/7/12"),y=n("h6",null,"\u66F4\u65B0 Timeline\u6837\u5F0F",-1),x=n("p",null,"Song",-1),B=l("2021/7/12"),k=n("span",null,"\u59DC",-1),A=l("\u673A\u7EC4AOC"),p=n("span",null,"\u53CD\u9988\u65F6\u95F4\uFF1A10:01:00",-1),N=n("div",{class:"p-y-sm p-x-lg bg-element radius-md"},[n("span",{class:"text-primary"},"@\u5BFC\u8C03\u7EC4"),l(" \u6536\u5230\uFF0C\u5168\u4F53\u5DF2\u5C31\u4F4D\u3002 ")],-1);function g(C,_){const r=t("hl-panel"),b=t("hl-timeline-item"),I=t("hl-thumb"),L=t("hl-tag"),T=t("hl-group"),z=t("hl-timeline");return F(),a("div",i,[o(z,null,{default:u(()=>[o(b,{"hide-timestamp":!0,timestamp:"2021/7/12",active:""},{label:u(()=>[c]),default:u(()=>[o(r,null,{default:u(()=>[m,d]),_:1})]),_:1}),o(b,{"hide-timestamp":!0,dir:"left",timestamp:"2021/7/3"},{label:u(()=>[E]),default:u(()=>[o(r,null,{default:u(()=>[y,x]),_:1})]),_:1}),o(b,{"hide-timestamp":!0,timestamp:"2021/7/2"},{label:u(()=>[B]),dot:u(()=>[o(I,{round:"",type:"primary",size:"md",class:"static"},{default:u(()=>[k]),_:1})]),default:u(()=>[o(T,{align:"items-top",full:"full-x",gap:"var(--xs)"},{default:u(()=>[o(T,{dir:"vertical",full:"full-x",gap:"var(--md)"},{default:u(()=>[o(T,{gap:"var(--xs)"},{default:u(()=>[o(L,{type:"success",effect:"light",size:"sm"},{default:u(()=>[A]),_:1}),p]),_:1}),N]),_:1})]),_:1})]),_:1})]),_:1})])}return V({render:g},{})}()}},M=e("h1",null,"Timeline \u65F6\u95F4\u8F74",-1),q=e("p",null,"\u65F6\u95F4\u8F74\u901A\u5E38\u7528\u4E8E\u76F4\u89C2\u7684\u5C55\u793A\u65F6\u95F4\u6D41\u4FE1\u606F",-1),K=e("div",null,[e("p",null,[s("\u5BF9 TimelineItem \u7EC4\u4EF6\u7684 dir \u5C5E\u6027\u8BBE\u7F6E"),e("code",null,"left"),s(" \u6216 "),e("code",null,"right"),s(" \u5373\u53EF\u6539\u53D8\u5B50\u5143\u7D20\u7684\u6392\u5217\u65B9\u5F0F\u3002")])],-1),R=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col span="col">
      <hl-timeline>
        <hl-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
          {{ activity.content }}
        </hl-timeline-item>
      </hl-timeline>
    </hl-col>

    <hl-col span="col">
      <hl-timeline>
        <hl-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" dir="left">
          {{ activity.content }}
        </hl-timeline-item>
      </hl-timeline>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activities = ref([
      {
        content: '\u6D3B\u52A8\u6309\u671F\u5F00\u59CB',
        timestamp: '2018-04-15',
      },
      {
        content: '\u901A\u8FC7\u5BA1\u6838',
        timestamp: '2018-04-13',
      },
      {
        content: '\u521B\u5EFA\u6210\u529F',
        timestamp: '2018-04-11',
      },
      {
        content: '\u521B\u5EFA\u6210\u529F',
        timestamp: '2018-04-11',
      },
    ])
    return {
      activities,
    }
  },
})
<\/script>
`)],-1),U=e("h2",{id:"ju-zhong-pai-lie-fang-shi"},[e("a",{class:"header-anchor",href:"#ju-zhong-pai-lie-fang-shi"}),s(" \u5C45\u4E2D\u6392\u5217\u65B9\u5F0F")],-1),Y=e("p",null,[s("\u4E3A Timeline \u7EC4\u4EF6\u8BBE\u7F6E "),e("code",null,"center"),s(" \u5C5E\u6027\uFF0C\u53EF\u4F7F\u65F6\u95F4\u8F74\u5C45\u4E2D\u6446\u653E\u3002")],-1),Z=e("div",null,[e("p",null,[s("\u540C\u65F6\u4F1A\u4E3A TimelineItem \u521B\u5EFA\u4E00\u4E2A class \u4E3A"),e("code",null,"item-left"),s("\u7684 DOM \u8282\u70B9\u6765\u4FDD\u6301\u5C45\u4E2D\u7684\u6548\u679C\u3002")])],-1),tt=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row>
    <hl-col class="col">
      <p class="p-md text-center text-primary">\u624B\u52A8\u4EA4\u66FF</p>
      <hl-timeline center>
        <hl-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" :placement="activity.placement" :dir="activity.dir">
          {{ activity.content }}
        </hl-timeline-item>
      </hl-timeline>
    </hl-col>

    <hl-col class="col">
      <p class="p-md text-center text-danger">\u81EA\u52A8\u4EA4\u66FF</p>
      <hl-timeline center alternate>
        <hl-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp" :placement="activity.placement">
          {{ activity.content }}
        </hl-timeline-item>
      </hl-timeline>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activities = ref([
      {
        content: '\u6D3B\u52A8\u6309\u671F\u5F00\u59CB',
        timestamp: '2018-04-15',
        dir: 'left',
      },
      {
        content: '\u901A\u8FC7\u5BA1\u6838',
        timestamp: '2018-04-13',
        dir: 'right',
      },
      {
        content: '\u521B\u5EFA\u6210\u529F',
        timestamp: '2018-04-11',
        dir: '',
      },
      {
        content: '\u521B\u5EFA\u6210\u529F',
        timestamp: '2018-04-11',
        dir: 'left',
      },
    ])
    return {
      activities,
    }
  },
})
<\/script>
`)],-1),et=e("h2",{id:"ding-yi-jie-dian-yang-shi"},[e("a",{class:"header-anchor",href:"#ding-yi-jie-dian-yang-shi"}),s(" \u2F83\u5B9A\u4E49\u8282\u70B9\u6837\u5F0F")],-1),nt=e("p",null,"\u53EF\u6839\u636E\u5B9E\u9645\u573A\u666F\u2F83\u5B9A\u4E49\u8282\u70B9\u989C\u2F8A\uFF0C\u6216\u76F4\u63A5\u4F7F\u2F64\u56FE\u6807\u3002",-1),ut=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-timeline>
      <hl-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :type="activity.type"
        :color="activity.color"
        :timestamp="activity.timestamp"
        :placement="activity.placement"
      >
        {{ activity.content }}
        <template #icon>
          <hl-icon v-if="activity.icon" :type="activity.icon.type" round fill effect="light">
            <component :is="activity.icon.name" />
          </hl-icon>
        </template>
      </hl-timeline-item>
    </hl-timeline>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const activities = ref([
      {
        content: '\u4F7F\u7528Icon\u56FE\u6807\u7EC4\u4EF6',
        timestamp: '2018-04-12 20:46',
        icon: {
          name: 'TwoNews',
          type: 'primary',
        },
        color: '#0bbd87',
      },
      {
        content: '\u81EA\u5B9A\u4E49\u989C\u8272',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
      },
      {
        content: '\u4F7F\u7528\u72B6\u6001\u8272',
        timestamp: '2018-04-03 20:46',
        icon: {
          name: 'TwoAirplay',
          type: 'danger',
        },
      },
    ])
    return {
      activities,
    }
  },
})
<\/script>
`)],-1),it=e("h2",{id:"cha-cao"},[e("a",{class:"header-anchor",href:"#cha-cao"}),s(" \u63D2\u69FD")],-1),lt=e("p",null,[s("\u65F6\u95F4\u8F74\u63D0\u4F9B"),e("code",null,"default"),s(),e("code",null,"dot"),s(),e("code",null,"label"),s("\u4E09\u4E2A\u63D2\u69FD\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F")],-1),ot=e("pre",null,[e("code",{class:"html"},` <template>
  <div class="block">
    <hl-timeline>
      <hl-timeline-item :hide-timestamp="true" timestamp="2021/7/12" active>
        <template #label>2021/7/12</template>
        <hl-panel>
          <h4>\u66F4\u65B0 Github \u6A21\u677F</h4>
          <p>bitjjj</p>
        </hl-panel>
      </hl-timeline-item>
      <hl-timeline-item :hide-timestamp="true" dir="left" timestamp="2021/7/3">
        <template #label>2021/7/12</template>
        <hl-panel>
          <h6>\u66F4\u65B0 Timeline\u6837\u5F0F</h6>
          <p>Song</p>
        </hl-panel>
      </hl-timeline-item>
      <hl-timeline-item :hide-timestamp="true" timestamp="2021/7/2">
        <template #label>2021/7/12</template>
        <template #dot>
          <hl-thumb round type="primary" size="md" class="static">
            <span>\u59DC</span>
          </hl-thumb>
        </template>
        <hl-group align="items-top" full="full-x" gap="var(--xs)">
          <hl-group dir="vertical" full="full-x" gap="var(--md)">
            <hl-group gap="var(--xs)">
              <hl-tag type="success" effect="light" size="sm">\u673A\u7EC4AOC</hl-tag>
              <span>\u53CD\u9988\u65F6\u95F4\uFF1A10:01:00</span>
            </hl-group>
            <div class="p-y-sm p-x-lg bg-element radius-md">
              <span class="text-primary">@\u5BFC\u8C03\u7EC4</span> \u6536\u5230\uFF0C\u5168\u4F53\u5DF2\u5C31\u4F4D\u3002
            </div>
          </hl-group>
        </hl-group>
      </hl-timeline-item>
    </hl-timeline>
  </div>
</template>
`)],-1),ct=X('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>center</td><td>\u662F\u5426\u65F6\u95F4\u8F74\u5C45\u4E2D\u663E\u793A</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>alternate</td><td>\u662F\u5426\u81EA\u52A8\u5DE6\u53F3\u4EA4\u66FF\u663E\u793A\u5185\u5BB9</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="timeline-item-attributes"><a class="header-anchor" href="#timeline-item-attributes"></a> Timeline Item Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>timestamp</td><td>\u65F6\u95F4\u6233</td><td>string</td><td>-</td><td>\u2014</td></tr><tr><td>hide-timestamp</td><td>\u662F\u5426\u9690\u85CF\u65F6\u95F4\u6233</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>type</td><td>\u8282\u70B9\u7C7B\u578B</td><td>string</td><td>primary / success / warning / danger / info</td><td>-</td></tr><tr><td>color</td><td>\u8282\u70B9\u989C\u8272</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>-</td></tr><tr><td>icon</td><td>\u8282\u70B9\u56FE\u6807</td><td>object</td><td>\u53C2\u89C1 Icon \u7EC4\u4EF6\u5C5E\u6027</td><td>-</td></tr><tr><td>dir</td><td>\u8282\u70B9\u4F4D\u7F6E</td><td>string</td><td>left / right</td><td>right</td></tr><tr><td>active</td><td>\u5F53\u524D\u8282\u70B9</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h2 id="timeline-item-slots"><a class="header-anchor" href="#timeline-item-slots"></a> Timeline Item Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>Timeline-Item \u7684\u5185\u5BB9</td></tr><tr><td>dot</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eicon</td></tr><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr></tbody></table>',6);function at(l,n,t,u,o,F){const a=w("hl-demo0"),i=w("demo-block"),c=w("hl-demo1"),m=w("hl-demo2"),d=w("hl-demo3"),E=w("right-nav");return G(),Q(W,null,[e("section",null,[M,q,v(i,{fs:""},{source:f(()=>[v(a)]),highlight:f(()=>[R]),default:f(()=>[K]),_:1}),U,Y,v(i,{fs:""},{source:f(()=>[v(c)]),highlight:f(()=>[tt]),default:f(()=>[Z]),_:1}),et,nt,v(i,{fs:""},{source:f(()=>[v(m)]),highlight:f(()=>[ut]),_:1}),it,lt,v(i,{fs:""},{source:f(()=>[v(d)]),highlight:f(()=>[ot]),_:1}),ct]),v(E)],64)}var _t=H(J,[["render",at]]);export{_t as default};
