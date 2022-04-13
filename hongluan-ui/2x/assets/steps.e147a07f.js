var g=Object.defineProperty;var D=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,A=(e,t)=>{for(var o in t||(t={}))k.call(t,o)&&v(e,o,t[o]);if(D)for(var o of D(t))w.call(t,o)&&v(e,o,t[o]);return e};import{F as _,L as z,W as N,Q as u,X as i,P as c,a2 as V,aJ as m,M as s,o as y}from"./vue.fdea90c3.js";import{_ as j}from"./index.f30b9df7.js";import"./hongluan.31740c77.js";import"./highlight.cdf997ce.js";import"./hongluan-icons.74bf772c.js";const S={name:"component-doc",components:{"hl-demo0":function(){const{resolveComponent:e,createVNode:t,withCtx:o,createTextVNode:F,Fragment:r,openBlock:h,createElementBlock:B}=m,d=F("\u4E0B\u4E00\u6B65");function p(a,f){const C=e("hl-step"),x=e("hl-steps"),b=e("hl-button");return h(),B(r,null,[t(x,{active:a.active,"finish-status":"success",gap:"var(--sm)",round:"",size:"var(--xxl)"},{default:o(()=>[t(C,{title:"\u6D3B\u52A8\u6309\u671F\u5F00\u59CB"}),t(C,{title:"\u901A\u8FC7\u5BA1\u6838"}),t(C,{title:"\u9879\u76EE\u521B\u5EFA\u6210\u529F"}),t(C,{title:"\u521D\u59CB\u5316\u9879\u76EE"})]),_:1},8,["active"]),t(b,{class:"m-t-md",onClick:a.next},{default:o(()=>[d]),_:1},8,["onClick"])],64)}const{defineComponent:n,ref:l}=m,E=n({setup(){const a=l(0);return{active:a,next:()=>{a.value++>3&&(a.value=0)}}}});return A({render:p},E)}(),"hl-demo1":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=m;function h(d,p){const n=e("hl-step"),l=e("hl-steps");return F(),r(l,{active:2,"finish-status":"success"},{default:o(()=>[t(n,{title:"\u5DF2\u5B8C\u6210"}),t(n,{title:"\u8FDB\u884C\u4E2D"}),t(n,{title:"\u6B65\u9AA4 3"})]),_:1})}return A({render:h},{})}(),"hl-demo2":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=m;function h(d,p){const n=e("hl-step"),l=e("hl-steps");return F(),r(l,{active:1},{default:o(()=>[t(n,{title:"\u6B65\u9AA4 1",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA4 2",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA4 3",description:"\u8FD9\u6BB5\u5C31\u6CA1\u90A3\u4E48\u957F\u4E86"})]),_:1})}return A({render:h},{})}(),"hl-demo3":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=m;function h(d,p){const n=e("hl-step"),l=e("hl-steps");return F(),r(l,{active:2,center:""},{default:o(()=>[t(n,{title:"\u6B65\u9AA41",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA42",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA43",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"}),t(n,{title:"\u6B65\u9AA44",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"})]),_:1})}return A({render:h},{})}(),"hl-demo4":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=m;function h(d,p){const n=e("two-edit"),l=e("hl-icon"),E=e("hl-step"),a=e("two-upload"),f=e("two-pic"),C=e("hl-steps");return F(),r(C,{active:1},{default:o(()=>[t(E,{title:"\u6B65\u9AA4 1"},{icon:o(()=>[t(l,null,{default:o(()=>[t(n)]),_:1})]),_:1}),t(E,{title:"\u6B65\u9AA4 2"},{icon:o(()=>[t(l,null,{default:o(()=>[t(a)]),_:1})]),_:1}),t(E,{title:"\u6B65\u9AA4 3"},{icon:o(()=>[t(l,null,{default:o(()=>[t(f)]),_:1})]),_:1})]),_:1})}return A({render:h},{})}(),"hl-demo5":function(){const{resolveComponent:e,createVNode:t,withCtx:o,openBlock:F,createBlock:r}=m;function h(d,p){const n=e("hl-step"),l=e("hl-steps");return F(),r(l,{dir:"vertical",active:1},{default:o(()=>[t(n,{title:"\u6B65\u9AA4 1"}),t(n,{title:"\u6B65\u9AA4 2"}),t(n,{title:"\u6B65\u9AA4 3",description:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57"})]),_:1})}return A({render:h},{})}()}},$=u("h1",null,"Steps \u6B65\u9AA4\u6761",-1),P=u("p",null,"\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5206\u6B65\u5BFC\u822A\u6761\uFF0C\u53EF\u6839\u636E\u5B9E\u9645\u5E94\u7528\u573A\u666F\u8BBE\u5B9A\u6B65\u9AA4\uFF0C\u6B65\u9AA4\u4E0D\u5F97\u5C11\u4E8E 2 \u6B65\u3002",-1),I=u("h2",{id:"ji-chu-yong-fa"},[u("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),s(" \u57FA\u7840\u7528\u6CD5")],-1),L=u("p",null,"\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002",-1),Q=u("div",null,[u("p",null,[s("\u8BBE\u7F6E"),u("code",null,"active"),s("\u5C5E\u6027\uFF0C\u63A5\u53D7\u4E00\u4E2A"),u("code",null,"number"),s("\uFF0C\u8868\u660E\u6B65\u9AA4\u7684 index\uFF0C\u4ECE 0 \u5F00\u59CB\u3002\u8BBE\u7F6E"),u("code",null,"finish-status"),s("\u5C5E\u6027\u53EF\u4EE5\u6539\u53D8\u5DF2\u7ECF\u5B8C\u6210\u7684\u6B65\u9AA4\u7684\u72B6\u6001\u3002")])],-1),T=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),W=u("h2",{id:"han-zhuang-tai-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#han-zhuang-tai-bu-zou-tiao"}),s(" \u542B\u72B6\u6001\u6B65\u9AA4\u6761")],-1),X=u("p",null,"\u6BCF\u4E00\u6B65\u9AA4\u663E\u793A\u51FA\u8BE5\u6B65\u9AA4\u7684\u72B6\u6001\u3002",-1),J=u("div",null,[u("p",null,[s("\u4E5F\u53EF\u4EE5\u4F7F\u7528"),u("code",null,"title"),s("\u5177\u540D\u5206\u53D1\uFF0C\u53EF\u4EE5\u7528"),u("code",null,"slot"),s("\u7684\u65B9\u5F0F\u6765\u53D6\u4EE3\u5C5E\u6027\u7684\u8BBE\u7F6E\uFF0C\u5728\u672C\u6587\u6863\u6700\u540E\u7684\u5217\u8868\u4E2D\u6709\u6240\u6709\u7684 slot name \u53EF\u4F9B\u53C2\u8003\u3002")])],-1),M=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="2" finish-status="success">
    <hl-step title="\u5DF2\u5B8C\u6210" />
    <hl-step title="\u8FDB\u884C\u4E2D" />
    <hl-step title="\u6B65\u9AA4 3" />
  </hl-steps>
</template>
`)],-1),q=u("h2",{id:"you-miao-shu-de-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#you-miao-shu-de-bu-zou-tiao"}),s(" \u6709\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761")],-1),G=u("p",null,"\u6BCF\u4E2A\u6B65\u9AA4\u6709\u5176\u5BF9\u5E94\u7684\u6B65\u9AA4\u72B6\u6001\u63CF\u8FF0\u3002",-1),H=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="1">
    <hl-step title="\u6B65\u9AA4 1" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA4 2" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA4 3" description="\u8FD9\u6BB5\u5C31\u6CA1\u90A3\u4E48\u957F\u4E86" />
  </hl-steps>
</template>
`)],-1),K=u("h2",{id:"ju-zhong-de-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#ju-zhong-de-bu-zou-tiao"}),s(" \u5C45\u4E2D\u7684\u6B65\u9AA4\u6761")],-1),O=u("p",null,"\u6807\u9898\u548C\u63CF\u8FF0\u90FD\u5C06\u5C45\u4E2D\u3002",-1),R=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps :active="2" center>
    <hl-step title="\u6B65\u9AA41" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA42" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA43" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
    <hl-step title="\u6B65\u9AA44" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
  </hl-steps>
</template>
`)],-1),U=u("h2",{id:"dai-tu-biao-de-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#dai-tu-biao-de-bu-zou-tiao"}),s(" \u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761")],-1),Y=u("p",null,"\u6B65\u9AA4\u6761\u5185\u53EF\u4EE5\u542F\u7528\u5404\u79CD\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002",-1),Z=u("div",null,[u("p",null,[s("\u901A\u8FC7"),u("code",null,"icon"),s("\u5C5E\u6027\u6765\u8BBE\u7F6E\u56FE\u6807\uFF0C\u56FE\u6807\u7684\u7C7B\u578B\u53EF\u4EE5\u53C2\u8003 Icon \u7EC4\u4EF6\u7684\u6587\u6863\uFF0C\u9664\u6B64\u4EE5\u5916\uFF0C\u8FD8\u80FD\u901A\u8FC7\u5177\u540D"),u("code",null,"slot"),s("\u6765\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u56FE\u6807\u3002")])],-1),uu=u("pre",null,[u("code",{class:"html"},` <template>
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
`)],-1),tu=u("h2",{id:"zong-xiang-bu-zou-tiao"},[u("a",{class:"header-anchor",href:"#zong-xiang-bu-zou-tiao"}),s(" \u7EB5\u5411\u6B65\u9AA4\u6761")],-1),eu=u("p",null,"\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002",-1),ou=u("div",null,[u("p",null,[s("\u53EA\u9700\u8981\u5728 Steps \u7EC4\u4EF6\u4E2D\u8BBE\u7F6E"),u("code",null,"dir"),s("\u5C5E\u6027\u4E3A"),u("code",null,"vertical"),s("\u5373\u53EF\u3002")])],-1),nu=u("pre",null,[u("code",{class:"html"},` <template>
  <hl-steps dir="vertical" :active="1">
    <hl-step title="\u6B65\u9AA4 1" />
    <hl-step title="\u6B65\u9AA4 2" />
    <hl-step title="\u6B65\u9AA4 3" description="\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u63CF\u8FF0\u6027\u6587\u5B57" />
  </hl-steps>
</template>
`)],-1),su=y('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dir</td><td>\u663E\u793A\u65B9\u5411</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>\u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6B65\u9AA4</td><td>number</td><td>\u2014</td><td>0</td></tr><tr><td>process-status</td><td>\u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>\u8BBE\u7F6E\u7ED3\u675F\u6B65\u9AA4\u7684\u72B6\u6001</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>center</td><td>\u8FDB\u884C\u5C45\u4E2D\u5BF9\u9F50</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>round</td><td>\u8BBE\u7F6E step-icon \u4E3A \u5706\u5F62\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>size</td><td>\u8BBE\u7F6E step-icon \u7684\u5C3A\u5BF8</td><td>string</td><td>\u4EFB\u610F\u5C3A\u5BF8 / \u901A\u7528\u5C3A\u5BF8\u6807\u7B7E</td><td>-</td></tr><tr><td>gap</td><td>\u8BBE\u7F6E step-icon \u7684\u8FB9\u8DDD</td><td>string</td><td>\u4EFB\u610F\u5C3A\u5BF8 / \u901A\u7528\u5C3A\u5BF8\u6807\u7B7E</td><td>-</td></tr><tr><td>item-padding</td><td>\u8BBE\u7F6E StepItem \u7684\u4E0B\u95F4\u8DDD</td><td>string</td><td>\u4EFB\u610F\u5C3A\u5BF8 / \u901A\u7528\u5C3A\u5BF8\u6807\u7B7E</td><td>-</td></tr></tbody></table><h2 id="step-attributes"><a class="header-anchor" href="#step-attributes"></a> Step Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>description</td><td>\u63CF\u8FF0\u6027\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>status</td><td>\u8BBE\u7F6E\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E steps \u786E\u5B9A\u72B6\u6001</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table><h3 id="step-slots"><a class="header-anchor" href="#step-slots"></a> Step Slots</h3><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>description</td><td>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6027\u6587\u5B57</td></tr></tbody></table>',6);function cu(e,t,o,F,r,h){const B=_("hl-demo0"),d=_("demo-block"),p=_("hl-demo1"),n=_("hl-demo2"),l=_("hl-demo3"),E=_("hl-demo4"),a=_("hl-demo5"),f=_("right-nav");return z(),N(V,null,[u("section",null,[$,P,I,L,i(d,{fs:""},{source:c(()=>[i(B)]),highlight:c(()=>[T]),default:c(()=>[Q]),_:1}),W,X,i(d,{fs:""},{source:c(()=>[i(p)]),highlight:c(()=>[M]),default:c(()=>[J]),_:1}),q,G,i(d,{fs:""},{source:c(()=>[i(n)]),highlight:c(()=>[H]),_:1}),K,O,i(d,{fs:""},{source:c(()=>[i(l)]),highlight:c(()=>[R]),_:1}),U,Y,i(d,{fs:""},{source:c(()=>[i(E)]),highlight:c(()=>[uu]),default:c(()=>[Z]),_:1}),tu,eu,i(d,{fs:""},{source:c(()=>[i(a)]),highlight:c(()=>[nu]),default:c(()=>[ou]),_:1}),su]),i(f)],64)}var au=j(S,[["render",cu]]);export{au as default};
