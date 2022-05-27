var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(e,t,o)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))z.call(t,o)&&g(e,o,t[o]);if(x)for(var o of x(t))N.call(t,o)&&g(e,o,t[o]);return e};import{H as E,L as V,W as T,Q as u,X as i,P as c,a4 as y,aJ as A,S as s,o as S}from"./vue.059774a0.js";import{H as P}from"./hongluan-icons.5b925e95.js";import{_ as j}from"./index.1d9df885.js";import"./hongluan.25ab0f23.js";import"./highlight.687c59a9.js";const I={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:e,createVNode:t,withCtx:o,createTextVNode:F,Fragment:r,openBlock:h,createElementBlock:a}=A,l=F("\u4E0B\u4E00\u6B65");function p(B,C){const _=e("hl-step"),f=e("hl-steps"),v=e("hl-button");return h(),a(r,null,[t(f,{active:B.active,"finish-status":"success",gap:"var(--sm)",round:"",size:"var(--xxl)"},{default:o(()=>[t(_,{title:"\u6D3B\u52A8\u6309\u671F\u5F00\u59CB"}),t(_,{title:"\u901A\u8FC7\u5BA1\u6838"}),t(_,{title:"\u9879\u76EE\u521B\u5EFA\u6210\u529F"}),t(_,{title:"\u521D\u59CB\u5316\u9879\u76EE"})]),_:1},8,["active"]),t(v,{class:"m-t-md",onClick:B.next},{default:o(()=>[l]),_:1},8,["onClick"])],64)}const{defineComponent:n,ref:d}=A,D=n({setup(){const B=d(0);return{active:B,next:()=>{B.value++>3&&(B.value=0)}}}});return m({render:p},D)}(),"hl-demo1":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=A;function h(l,p){const n=e("hl-step"),d=e("hl-steps");return F(),r(d,{active:2,"finish-status":"success"},{default:o(()=>[t(n,{title:"\u5DF2\u5B8C\u6210"}),t(n,{title:"\u8FDB\u884C\u4E2D"}),t(n,{title:"\u6B65\u9AA4 3"})]),_:1})}return m({render:h},{})}(),"hl-demo2":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=A;function h(l,p){const n=e("hl-step"),d=e("hl-steps");return F(),r(d,{active:1},{default:o(()=>[t(n,{title:"\u6B65\u9AA4 1",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA4 2",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA4 3",description:"\u8FD9\u6BB5\u5C31\u6CA1\u90A3\u4E48\u957F\u4E86"})]),_:1})}return m({render:h},{})}(),"hl-demo3":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=A;function h(l,p){const n=e("hl-step"),d=e("hl-steps");return F(),r(d,{active:2,center:""},{default:o(()=>[t(n,{title:"\u6B65\u9AA41",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA42",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA43",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA44",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"})]),_:1})}return m({render:h},{})}(),"hl-demo4":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=A;function h(D,B){const C=e("two-edit"),_=e("hl-icon"),f=e("hl-step"),v=e("two-upload"),b=e("two-pic"),w=e("hl-steps");return F(),r(w,{active:1},{default:o(()=>[t(f,{title:"\u6B65\u9AA4 1"},{icon:o(()=>[t(_,null,{default:o(()=>[t(C)]),_:1})]),_:1}),t(f,{title:"\u6B65\u9AA4 2"},{icon:o(()=>[t(_,null,{default:o(()=>[t(v)]),_:1})]),_:1}),t(f,{title:"\u6B65\u9AA4 3"},{icon:o(()=>[t(_,null,{default:o(()=>[t(b)]),_:1})]),_:1})]),_:1})}const{defineComponent:a}=A,{TwoEdit:l,TwoUpload:p,TwoPic:n}=P,d=a({components:{TwoEdit:l,TwoUpload:p,TwoPic:n}});return m({render:h},d)}(),"hl-demo5":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=A;function h(l,p){const n=e("hl-step"),d=e("hl-steps");return F(),r(d,{dir:"vertical",active:1},{default:o(()=>[t(n,{title:"\u6B65\u9AA4 1"}),t(n,{title:"\u6B65\u9AA4 2"}),t(n,{title:"\u6B65\u9AA4 3",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"})]),_:1})}return m({render:h},{})}()}},U=u("h1",null,"Steps \u6B65\u9AA4\u6761",-1),$=u("p",null,"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5206\u6B65\u5BFC\u822A\u6761\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u5E94\u7528\u573A\u666F\u8BBE\u5B9A\u6B65\u9AA4\uFF0C\u6B65\u9AA4\u4E0D\u5F97\u5C11\u4E8E 2 \u6B65\u3002",-1),H=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),s(" \u57FA\u7840\u7528\u6CD5")],-1),L=u("p",null,"\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002",-1),Q=u("div",null,[u("p",null,[s("\u8BBE\u7F6E"),u("code",null,"active"),s("\u5C5E\u6027\uFF0C\u63A5\u53D7\u4E00\u4E2A"),u("code",null,"number"),s("\uFF0C\u8868\u660E\u6B65\u9AA4\u7684 index\uFF0C\u4ECE 0 \u5F00\u59CB\u3002\u8BBE\u7F6E"),u("code",null,"finish-status"),s("\u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u5DF2\u7ECF\u5B8C\u6210\u7684\u6B65\u9AA4\u7684\u72B6\u6001\u3002")])],-1),W=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="active" finish-status="success" gap="var(--sm)" round size="var(--xxl)">
    <hl-step title="\u6D3B\u52A8\u6309\u671F\u5F00\u59CB" />
    <hl-step title="\u901A\u8FC7\u5BA1\u6838" />
    <hl-step title="\u9879\u76EE\u521B\u5EFA\u6210\u529F" />
    <hl-step title="\u521D\u59CB\u5316\u9879\u76EE" />
  </hl-steps>

  <hl-button class="m-t-md" @click="next">\u4E0B\u4E00\u6B65</hl-button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const active = ref(0)

    const next = () => {
      if (active.value++ > 3) active.value = 0
    }

    return {
      active,
      next,
    }
  },
})
<\/script>
`)],-1),X=u("h2",{id:"han-zhuang-tai-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#han-zhuang-tai-bu-zou-tiao"}),s(" \u542B\u72B6\u6001\u6B65\u9AA4\u6761")],-1),J=u("p",null,"\u6BCF\u4E00\u6B65\u9AA4\u663E\u793A\u51FA\u8BE5\u6B65\u9AA4\u7684\u72B6\u6001\u3002",-1),q=u("div",null,[u("p",null,[s("\u4E5F\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"title"),s("\u5177\u540D\u5206\u53D1\uFF0C\u53EF\u4EE5\u7528"),u("code",null,"slot"),s("\u7684\u65B9\u5F0F\u6765\u53D6\u4EE3\u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u5728\u672C\u6587\u6863\u6700\u540E\u7684\u5217\u8868\u4E2D\u6709\u6240\u6709\u7684 slot name \u53EF\u4F9B\u53C2\u8003\u3002")])],-1),G=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="2" finish-status="success">
    <hl-step title="\u5DF2\u5B8C\u6210" />
    <hl-step title="\u8FDB\u884C\u4E2D" />
    <hl-step title="\u6B65\u9AA4 3" />
  </hl-steps>
</template>
`)],-1),K=u("h2",{id:"you-miao-shu-de-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#you-miao-shu-de-bu-zou-tiao"}),s(" \u6709\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761")],-1),M=u("p",null,"\u6BCF\u4E2A\u6B65\u9AA4\u6709\u5176\u5BF9\u5E94\u7684\u6B65\u9AA4\u72B6\u6001\u63CF\u8FF0\u3002",-1),O=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="1">
    <hl-step title="\u6B65\u9AA4 1" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA4 2" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA4 3" description="\u8FD9\u6BB5\u5C31\u6CA1\u90A3\u4E48\u957F\u4E86" />
  </hl-steps>
</template>
`)],-1),R=u("h2",{id:"ju-zhong-de-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#ju-zhong-de-bu-zou-tiao"}),s(" \u5C45\u4E2D\u7684\u6B65\u9AA4\u6761")],-1),Y=u("p",null,"\u6807\u9898\u548C\u63CF\u8FF0\u90FD\u5C06\u5C45\u4E2D\u3002",-1),Z=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="2" center>
    <hl-step title="\u6B65\u9AA41" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA42" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA43" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA44" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
  </hl-steps>
</template>
`)],-1),uu=u("h2",{id:"dai-tu-biao-de-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#dai-tu-biao-de-bu-zou-tiao"}),s(" \u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761")],-1),tu=u("p",null,"\u6B65\u9AA4\u6761\u5185\u53EF\u4EE5\u542F\u7528\u5404\u79CD\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002",-1),eu=u("div",null,[u("p",null,[s("\u901A\u8FC7"),u("code",null,"icon"),s("\u5C5E\u6027\u6765\u8BBE\u7F6E\u56FE\u6807\uFF0C\u56FE\u6807\u7684\u7C7B\u578B\u53EF\u4EE5\u53C2\u8003 Icon \u7EC4\u4EF6\u7684\u6587\u6863\uFF0C\u9664\u6B64\u4EE5\u5916\uFF0C\u8FD8\u80FD\u901A\u8FC7\u5177\u540D"),u("code",null,"slot"),s("\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002")])],-1),ou=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="1">
    <hl-step title="\u6B65\u9AA4 1">
      <template #icon>
        <hl-icon><two-edit /></hl-icon>
      </template>
    </hl-step>
    <hl-step title="\u6B65\u9AA4 2">
      <template #icon>
        <hl-icon><two-upload /></hl-icon>
      </template>
    </hl-step>
    <hl-step title="\u6B65\u9AA4 3">
      <template #icon>
        <hl-icon><two-pic /></hl-icon>
      </template>
    </hl-step>
  </hl-steps>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { TwoEdit, TwoUpload, TwoPic } from '@hongluan-ui/icons'

export default defineComponent({
  components: { TwoEdit, TwoUpload, TwoPic },
})
<\/script>
`)],-1),nu=u("h2",{id:"zong-xiang-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#zong-xiang-bu-zou-tiao"}),s(" \u7EB5\u5411\u6B65\u9AA4\u6761")],-1),su=u("p",null,"\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002",-1),cu=u("div",null,[u("p",null,[s("\u53EA\u9700\u8981\u5728 Steps \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),u("code",null,"dir"),s("\u5C5E\u6027\u4E3A"),u("code",null,"vertical"),s("\u5373\u53EF\u3002")])],-1),lu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps dir="vertical" :active="1">
    <hl-step title="\u6B65\u9AA4 1" />
    <hl-step title="\u6B65\u9AA4 2" />
    <hl-step title="\u6B65\u9AA4 3" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
  </hl-steps>
</template>
`)],-1),du=S('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dir</td><td>\u663E\u793A\u65B9\u5411</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>\u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6B65\u9AA4</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>process-status</td><td>\u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>\u8BBE\u7F6E\u7ED3\u675F\u6B65\u9AA4\u7684\u72B6\u6001</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>center</td><td>\u8FDB\u884C\u5C45\u4E2D\u5BF9\u9F50</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u8BBE\u7F6E step-icon \u4E3A \u5706\u5F62\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>size</td><td>\u8BBE\u7F6E step-icon \u7684\u5C3A\u5BF8</td><td>string</td><td>\u4EFB\u610F\u5C3A\u5BF8 / \u901A\u7528\u5C3A\u5BF8\u6807\u7B7E</td><td>-</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E step-icon \u7684\u8FB9\u8DDD</td><td>string</td><td>\u4EFB\u610F\u5C3A\u5BF8 / \u901A\u7528\u5C3A\u5BF8\u6807\u7B7E</td><td>-</td></tr><tr><td>item-padding</td><td>\u8BBE\u7F6E StepItem \u7684\u4E0B\u95F4\u8DDD</td><td>string</td><td>\u4EFB\u610F\u5C3A\u5BF8 / \u901A\u7528\u5C3A\u5BF8\u6807\u7B7E</td><td>-</td></tr></tbody></table><h2 id="step-attributes"><a class="header-anchor" href="#step-attributes"></a> Step Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>description</td><td>\u63CF\u8FF0\u6027\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>status</td><td>\u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E steps \u786E\u5B9A\u72B6\u6001</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table><h3 id="step-slots"><a class="header-anchor" href="#step-slots"></a> Step Slots</h3><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>description</td><td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6027\u6587\u5B57</td></tr></tbody></table>',6);function iu(e,t,o,F,r,h){const a=E("hl-demo0"),l=E("demo-block"),p=E("hl-demo1"),n=E("hl-demo2"),d=E("hl-demo3"),D=E("hl-demo4"),B=E("hl-demo5"),C=E("right-nav");return V(),T(y,null,[u("section",null,[U,$,H,L,i(l,{fs:""},{source:c(()=>[i(a)]),highlight:c(()=>[W]),default:c(()=>[Q]),_:1}),X,J,i(l,{fs:""},{source:c(()=>[i(p)]),highlight:c(()=>[G]),default:c(()=>[q]),_:1}),K,M,i(l,{fs:""},{source:c(()=>[i(n)]),highlight:c(()=>[O]),_:1}),R,Y,i(l,{fs:""},{source:c(()=>[i(d)]),highlight:c(()=>[Z]),_:1}),uu,tu,i(l,{fs:""},{source:c(()=>[i(D)]),highlight:c(()=>[ou]),default:c(()=>[eu]),_:1}),nu,su,i(l,{fs:""},{source:c(()=>[i(B)]),highlight:c(()=>[lu]),default:c(()=>[cu]),_:1}),du]),i(C)],64)}var _u=j(I,[["render",iu]]);export{_u as default};
