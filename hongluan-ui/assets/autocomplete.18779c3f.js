var O=Object.defineProperty;var q=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var k=(d,E,F)=>E in d?O(d,E,{enumerable:!0,configurable:!0,writable:!0,value:F}):d[E]=F,S=(d,E)=>{for(var F in E||(E={}))x.call(E,F)&&k(d,F,E[F]);if(q)for(var F of q(E))V.call(E,F)&&k(d,F,E[F]);return d};import{E as b,o as M,c as N,g as e,Q as p,H as m,Y as I,ay as y,_ as c,ax as L}from"./vue.7de0486a.js";import{_ as H}from"./index.6438634e.js";import"./hongluan.9c38f5fe.js";import"./highlight.e2508551.js";import"./hongluan-icons.14143dc3.js";const U={name:"component-doc",components:{"hl-demo0":function(){const{createElementVNode:d,resolveComponent:E,createVNode:F,withCtx:A,openBlock:f,createBlock:v}=y,i=d("p",{class:"m-b-sm"},"\u6FC0\u6D3B\u5373\u5217\u51FA\u8F93\u5165\u5EFA\u8BAE",-1),o=d("p",{class:"m-b-sm"},"\u8F93\u5165\u540E\u5339\u914D\u8F93\u5165\u5EFA\u8BAE",-1);function s(u,t){const D=E("two-point"),a=E("hl-icon"),_=E("hl-autocomplete"),B=E("hl-col"),l=E("hl-row");return f(),v(l,{gap:"var(--lg)"},{default:A(()=>[F(B,{span:"col-md-12"},{default:A(()=>[i,F(_,{modelValue:u.state1,"onUpdate:modelValue":t[0]||(t[0]=n=>u.state1=n),"fetch-suggestions":u.querySearch,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",block:"",clearable:"",onSelect:u.handleSelect},{prefix:A(()=>[F(a,null,{default:A(()=>[F(D)]),_:1})]),_:1},8,["modelValue","fetch-suggestions","onSelect"])]),_:1}),F(B,{span:"col-md-12"},{default:A(()=>[o,F(_,{modelValue:u.state2,"onUpdate:modelValue":t[1]||(t[1]=n=>u.state2=n),class:"inline-input","fetch-suggestions":u.querySearch,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9","trigger-on-focus":!1,block:"",onSelect:u.handleSelect},{prefix:A(()=>[F(a,null,{default:A(()=>[F(D)]),_:1})]),_:1},8,["modelValue","fetch-suggestions","onSelect"])]),_:1})]),_:1})}const{defineComponent:r,ref:C,onMounted:h}=y,g=r({setup(){const u=C([]),t=(B,l)=>{var n=B?u.value.filter(D(B)):u.value;l(n)},D=B=>l=>l.value.toLowerCase().indexOf(B.toLowerCase())===0,a=()=>[{value:"\u4E09\u5168\u9C9C\u98DF\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7"},{value:"Hot honey \u9996\u5C14\u70B8\u9E21\uFF08\u4ED9\u971E\u8DEF\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u6DDE\u8679\u8DEF661\u53F7"},{value:"\u65B0\u65FA\u89D2\u8336\u9910\u5385",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF988\u53F7\u521B\u9091\u91D1\u6C99\u8C376\u53F7\u697C113"},{value:"\u6CF7\u5343\u5BB6(\u5929\u5C71\u897F\u8DEF\u5E97)",address:"\u5929\u5C71\u897F\u8DEF438\u53F7"},{value:"\u80D6\u4ED9\u5973\u7EB8\u676F\u86CB\u7CD5\uFF08\u4E0A\u6D77\u51CC\u7A7A\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F71\u5E6218\u53F7\u697C\u4E00\u5C42\u5546\u94FA18-101"},{value:"\u8D21\u8336",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF633\u53F7"},{value:"\u8C6A\u5927\u5927\u9999\u9E21\u6392\u8D85\u7EA7\u5976\u7238",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF\u66F9\u5B89\u8DEF1685\u53F7"},{value:"\u8336\u829D\u5170\uFF08\u5976\u8336\uFF0C\u624B\u6293\u997C\uFF09",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u540C\u666E\u8DEF1435\u53F7"},{value:"\u5341\u4E8C\u6CF7\u753A",address:"\u4E0A\u6D77\u5E02\u5317\u7FDF\u8DEF1444\u5F0481\u53F7B\u5E62-107"},{value:"\u661F\u79FB\u6D53\u7F29\u5496\u5561",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u65B0\u90C1\u8DEF817\u53F7"},{value:"\u963F\u59E8\u5976\u8336/\u8C6A\u5927\u5927",address:"\u5609\u5B9A\u533A\u66F9\u5B89\u8DEF1611\u53F7"},{value:"\u65B0\u9EA6\u751C\u56DB\u5B63\u751C\u54C1\u70B8\u9E21",address:"\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF2383\u5F0455\u53F7"},{value:"Monica\u6469\u6258\u4E3B\u9898\u5496\u5561\u5E97",address:"\u5609\u5B9A\u533A\u6C5F\u6865\u9547\u66F9\u5B89\u516C\u8DEF2409\u53F71F\uFF0C2383\u5F0462\u53F71F"},{value:"\u6D6E\u751F\u82E5\u8336\uFF08\u51CC\u7A7Asoho\u5E97\uFF09",address:"\u4E0A\u6D77\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C42"},{value:"NONO JUICE  \u9C9C\u69A8\u679C\u6C41",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF119\u53F7"},{value:"CoCo\u90FD\u53EF(\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF"},{value:"\u5FEB\u4E50\u67E0\u6AAC\uFF08\u795E\u5DDE\u667A\u6167\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF567\u53F71\u5C42R117\u53F7\u5E97\u94FA"},{value:"Merci Paul cafe",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u5149\u590D\u897F\u8DEF\u4E39\u5DF4\u8DEF28\u5F046\u53F7\u697C819"},{value:"\u732B\u5C71\u738B\uFF08\u897F\u90CA\u767E\u8054\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u7B2C\u4E00\u5C42G05-F01-1-306"},{value:"\u67AA\u4F1A\u5C71",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u68D5\u6988\u8DEF"},{value:"\u7EB5\u98DF",address:"\u5143\u4E30\u5929\u5C71\u82B1\u56ED(\u4E1C\u95E8) \u53CC\u6D41\u8DEF267\u53F7"},{value:"\u94B1\u8BB0",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF"},{value:"\u58F9\u676F\u52A0",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u901A\u534F\u8DEF"},{value:"\u5526\u54C7\u5600\u5496",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u65B0\u6CFE\u9547\u91D1\u949F\u8DEF999\u53F72\u5E62\uFF08B\u5E62\uFF09\u7B2C01\u5C42\u7B2C1-02A\u5355\u5143"},{value:"\u7231\u831C\u831C\u91CC(\u897F\u90CA\u767E\u8054)",address:"\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F71305\u5BA4"},{value:"\u7231\u831C\u831C\u91CC(\u8FD1\u94C1\u5E7F\u573A)",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF818\u53F7\u8FD1\u94C1\u57CE\u5E02\u5E7F\u573A\u5317\u533A\u5730\u4E0B\u4E8C\u697CN-B2-O2-C\u5546\u94FA"},{value:"\u9C9C\u679C\u69A8\u6C41\uFF08\u91D1\u6C99\u6C5F\u8DEF\u548C\u7F8E\u5E7F\u5E97\uFF09",address:"\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF2239\u53F7\u91D1\u6C99\u548C\u7F8E\u5E7F\u573AB1-10-6"},{value:"\u5F00\u5FC3\u4E3D\u679C\uFF08\u7F24\u8C37\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5A01\u5B81\u8DEF\u5929\u5C71\u8DEF341\u53F7"},{value:"\u8D85\u7EA7\u9E21\u8F66\uFF08\u4E30\u5E84\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u4E30\u5E84\u8DEF240\u53F7"},{value:"\u5999\u751F\u6D3B\u679C\u56ED\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7"},{value:"\u9999\u5B9C\u5EA6\u9EBB\u8FA3\u9999\u9505",address:"\u957F\u5B81\u533A\u6DDE\u8679\u8DEF148\u53F7"},{value:"\u51E1\u4ED4\u6C49\u5821\uFF08\u8001\u771F\u5317\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u8001\u771F\u5317\u8DEF160\u53F7"},{value:"\u6E2F\u5F0F\u5C0F\u94FA",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4"},{value:"\u8700\u9999\u6E90\u9EBB\u8FA3\u9999\u9505\uFF08\u5251\u6CB3\u8DEF\u5E97\uFF09",address:"\u5251\u6CB3\u8DEF443-1"},{value:"\u5317\u4EAC\u997A\u5B50\u9986",address:"\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u5929\u5C71\u897F\u8DEF490-1\u53F7"},{value:"\u996D\u5178*\u65B0\u7B80\u9910\uFF08\u51CC\u7A7ASOHO\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C429-83\u5BA4"},{value:"\u7126\u8033\xB7\u5DDD\u5F0F\u5FEB\u9910\uFF08\u91D1\u949F\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u91D1\u949F\u8DEF633\u53F7\u5730\u4E0B\u4E00\u5C42\u7532\u90E8"},{value:"\u52A8\u529B\u9E21\u8F66",address:"\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF299\u5F043\u53F7101B"},{value:"\u6D4F\u9633\u84B8\u83DC",address:"\u5929\u5C71\u897F\u8DEF430\u53F7"},{value:"\u56DB\u6D77\u6E38\u9F99\uFF08\u5929\u5C71\u897F\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF"},{value:"\u6A31\u82B1\u98DF\u5802\uFF08\u51CC\u7A7A\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4"},{value:"\u58F9\u5206\u7C73\u5BA2\u5BB6\u4F20\u7EDF\u8C03\u5236\u7C73\u7C89(\u5929\u5C71\u5E97)",address:"\u5929\u5C71\u897F\u8DEF428\u53F7"},{value:"\u798F\u8363\u7965\u70E7\u814A\uFF08\u5E73\u6EAA\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u534F\u548C\u8DEF\u798F\u6CC9\u8DEF255\u5F0457-73\u53F7"},{value:"\u901F\u8BB0\u9EC4\u7116\u9E21\u7C73\u996D",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u91D1\u949F\u8DEF180\u53F71\u5C4201\u53F7\u644A\u4F4D"},{value:"\u7EA2\u8FA3\u6912\u9EBB\u8FA3\u70EB",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF492\u53F7"},{value:"(\u5C0F\u6768\u751F\u714E)\u897F\u90CA\u767E\u8054\u9910\u5385",address:"\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u767E\u80542\u697C"},{value:"\u9633\u9633\u9EBB\u8FA3\u70EB",address:"\u5929\u5C71\u897F\u8DEF389\u53F7"},{value:"\u5357\u62F3\u5988\u5988\u9F99\u867E\u76D6\u6D47\u996D",address:"\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF1699\u53F7\u946B\u4E50\u60E0\u7F8E\u98DF\u5E7F\u573AA13"}],_=B=>{console.log(B)};return h(()=>{u.value=a()}),{restaurants:u,state1:C(""),state2:C(""),querySearch:t,createFilter:D,loadAll:a,handleSelect:_}}});return S({render:s},g)}(),"hl-demo1":function(){const{createElementVNode:d,toDisplayString:E,resolveComponent:F,withCtx:A,openBlock:f,createBlock:v}=y,i={class:"name"},o={class:"addr"};function s(u,t){const D=F("hl-autocomplete");return f(),v(D,{modelValue:u.state,"onUpdate:modelValue":t[1]||(t[1]=a=>u.state=a),"popper-class":"my-autocomplete","fetch-suggestions":u.querySearch,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",onSelect:u.handleSelect},{suffix:A(()=>[d("i",{class:"hl-icon-edit hl-input__icon",onClick:t[0]||(t[0]=(...a)=>u.handleIconClick&&u.handleIconClick(...a))})]),default:A(({item:a})=>[d("div",i,E(a.value),1),d("span",o,E(a.address),1)]),_:1},8,["modelValue","fetch-suggestions","onSelect"])}const{defineComponent:r,ref:C,onMounted:h}=y,g=r({setup(){const u=C([]),t=(l,n)=>{var w=l?u.value.filter(D(l)):u.value;n(w)},D=l=>n=>n.value.toLowerCase().indexOf(l.toLowerCase())===0,a=()=>[{value:"\u4E09\u5168\u9C9C\u98DF\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7"},{value:"Hot honey \u9996\u5C14\u70B8\u9E21\uFF08\u4ED9\u971E\u8DEF\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u6DDE\u8679\u8DEF661\u53F7"},{value:"\u65B0\u65FA\u89D2\u8336\u9910\u5385",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF988\u53F7\u521B\u9091\u91D1\u6C99\u8C376\u53F7\u697C113"},{value:"\u6CF7\u5343\u5BB6(\u5929\u5C71\u897F\u8DEF\u5E97)",address:"\u5929\u5C71\u897F\u8DEF438\u53F7"},{value:"\u80D6\u4ED9\u5973\u7EB8\u676F\u86CB\u7CD5\uFF08\u4E0A\u6D77\u51CC\u7A7A\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F71\u5E6218\u53F7\u697C\u4E00\u5C42\u5546\u94FA18-101"},{value:"\u8D21\u8336",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF633\u53F7"},{value:"\u8C6A\u5927\u5927\u9999\u9E21\u6392\u8D85\u7EA7\u5976\u7238",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF\u66F9\u5B89\u8DEF1685\u53F7"},{value:"\u8336\u829D\u5170\uFF08\u5976\u8336\uFF0C\u624B\u6293\u997C\uFF09",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u540C\u666E\u8DEF1435\u53F7"},{value:"\u5341\u4E8C\u6CF7\u753A",address:"\u4E0A\u6D77\u5E02\u5317\u7FDF\u8DEF1444\u5F0481\u53F7B\u5E62-107"},{value:"\u661F\u79FB\u6D53\u7F29\u5496\u5561",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u65B0\u90C1\u8DEF817\u53F7"},{value:"\u963F\u59E8\u5976\u8336/\u8C6A\u5927\u5927",address:"\u5609\u5B9A\u533A\u66F9\u5B89\u8DEF1611\u53F7"},{value:"\u65B0\u9EA6\u751C\u56DB\u5B63\u751C\u54C1\u70B8\u9E21",address:"\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF2383\u5F0455\u53F7"},{value:"Monica\u6469\u6258\u4E3B\u9898\u5496\u5561\u5E97",address:"\u5609\u5B9A\u533A\u6C5F\u6865\u9547\u66F9\u5B89\u516C\u8DEF2409\u53F71F\uFF0C2383\u5F0462\u53F71F"},{value:"\u6D6E\u751F\u82E5\u8336\uFF08\u51CC\u7A7Asoho\u5E97\uFF09",address:"\u4E0A\u6D77\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C42"},{value:"NONO JUICE  \u9C9C\u69A8\u679C\u6C41",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF119\u53F7"},{value:"CoCo\u90FD\u53EF(\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF"},{value:"\u5FEB\u4E50\u67E0\u6AAC\uFF08\u795E\u5DDE\u667A\u6167\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF567\u53F71\u5C42R117\u53F7\u5E97\u94FA"},{value:"Merci Paul cafe",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u5149\u590D\u897F\u8DEF\u4E39\u5DF4\u8DEF28\u5F046\u53F7\u697C819"},{value:"\u732B\u5C71\u738B\uFF08\u897F\u90CA\u767E\u8054\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u7B2C\u4E00\u5C42G05-F01-1-306"},{value:"\u67AA\u4F1A\u5C71",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u68D5\u6988\u8DEF"},{value:"\u7EB5\u98DF",address:"\u5143\u4E30\u5929\u5C71\u82B1\u56ED(\u4E1C\u95E8) \u53CC\u6D41\u8DEF267\u53F7"},{value:"\u94B1\u8BB0",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF"},{value:"\u58F9\u676F\u52A0",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u901A\u534F\u8DEF"},{value:"\u5526\u54C7\u5600\u5496",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u65B0\u6CFE\u9547\u91D1\u949F\u8DEF999\u53F72\u5E62\uFF08B\u5E62\uFF09\u7B2C01\u5C42\u7B2C1-02A\u5355\u5143"},{value:"\u7231\u831C\u831C\u91CC(\u897F\u90CA\u767E\u8054)",address:"\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F71305\u5BA4"},{value:"\u7231\u831C\u831C\u91CC(\u8FD1\u94C1\u5E7F\u573A)",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF818\u53F7\u8FD1\u94C1\u57CE\u5E02\u5E7F\u573A\u5317\u533A\u5730\u4E0B\u4E8C\u697CN-B2-O2-C\u5546\u94FA"},{value:"\u9C9C\u679C\u69A8\u6C41\uFF08\u91D1\u6C99\u6C5F\u8DEF\u548C\u7F8E\u5E7F\u5E97\uFF09",address:"\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF2239\u53F7\u91D1\u6C99\u548C\u7F8E\u5E7F\u573AB1-10-6"},{value:"\u5F00\u5FC3\u4E3D\u679C\uFF08\u7F24\u8C37\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5A01\u5B81\u8DEF\u5929\u5C71\u8DEF341\u53F7"},{value:"\u8D85\u7EA7\u9E21\u8F66\uFF08\u4E30\u5E84\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u4E30\u5E84\u8DEF240\u53F7"},{value:"\u5999\u751F\u6D3B\u679C\u56ED\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7"},{value:"\u9999\u5B9C\u5EA6\u9EBB\u8FA3\u9999\u9505",address:"\u957F\u5B81\u533A\u6DDE\u8679\u8DEF148\u53F7"},{value:"\u51E1\u4ED4\u6C49\u5821\uFF08\u8001\u771F\u5317\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u8001\u771F\u5317\u8DEF160\u53F7"},{value:"\u6E2F\u5F0F\u5C0F\u94FA",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4"},{value:"\u8700\u9999\u6E90\u9EBB\u8FA3\u9999\u9505\uFF08\u5251\u6CB3\u8DEF\u5E97\uFF09",address:"\u5251\u6CB3\u8DEF443-1"},{value:"\u5317\u4EAC\u997A\u5B50\u9986",address:"\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u5929\u5C71\u897F\u8DEF490-1\u53F7"},{value:"\u996D\u5178*\u65B0\u7B80\u9910\uFF08\u51CC\u7A7ASOHO\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C429-83\u5BA4"},{value:"\u7126\u8033\xB7\u5DDD\u5F0F\u5FEB\u9910\uFF08\u91D1\u949F\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u91D1\u949F\u8DEF633\u53F7\u5730\u4E0B\u4E00\u5C42\u7532\u90E8"},{value:"\u52A8\u529B\u9E21\u8F66",address:"\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF299\u5F043\u53F7101B"},{value:"\u6D4F\u9633\u84B8\u83DC",address:"\u5929\u5C71\u897F\u8DEF430\u53F7"},{value:"\u56DB\u6D77\u6E38\u9F99\uFF08\u5929\u5C71\u897F\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF"},{value:"\u6A31\u82B1\u98DF\u5802\uFF08\u51CC\u7A7A\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4"},{value:"\u58F9\u5206\u7C73\u5BA2\u5BB6\u4F20\u7EDF\u8C03\u5236\u7C73\u7C89(\u5929\u5C71\u5E97)",address:"\u5929\u5C71\u897F\u8DEF428\u53F7"},{value:"\u798F\u8363\u7965\u70E7\u814A\uFF08\u5E73\u6EAA\u8DEF\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u534F\u548C\u8DEF\u798F\u6CC9\u8DEF255\u5F0457-73\u53F7"},{value:"\u901F\u8BB0\u9EC4\u7116\u9E21\u7C73\u996D",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u91D1\u949F\u8DEF180\u53F71\u5C4201\u53F7\u644A\u4F4D"},{value:"\u7EA2\u8FA3\u6912\u9EBB\u8FA3\u70EB",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF492\u53F7"},{value:"(\u5C0F\u6768\u751F\u714E)\u897F\u90CA\u767E\u8054\u9910\u5385",address:"\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u767E\u80542\u697C"},{value:"\u9633\u9633\u9EBB\u8FA3\u70EB",address:"\u5929\u5C71\u897F\u8DEF389\u53F7"},{value:"\u5357\u62F3\u5988\u5988\u9F99\u867E\u76D6\u6D47\u996D",address:"\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF1699\u53F7\u946B\u4E50\u60E0\u7F8E\u98DF\u5E7F\u573AA13"}],_=l=>{console.log(l)},B=l=>{console.log(l)};return h(()=>{u.value=a()}),{restaurants:u,state:C(""),querySearch:t,createFilter:D,loadAll:a,handleSelect:_,handleIconClick:B}}});return S({render:s},g)}(),"hl-demo2":function(){const{resolveComponent:d,openBlock:E,createBlock:F}=y;function A(s,r){const C=d("hl-autocomplete");return E(),F(C,{modelValue:s.state,"onUpdate:modelValue":r[0]||(r[0]=h=>s.state=h),"fetch-suggestions":s.querySearchAsync,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",onSelect:s.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])}const{defineComponent:f,ref:v,onMounted:i}=y,o=f({setup(){const s=v([]),r=()=>[{value:"\u4E09\u5168\u9C9C\u98DF\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09",address:"\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7"},{value:"Hot honey \u9996\u5C14\u70B8\u9E21\uFF08\u4ED9\u971E\u8DEF\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u6DDE\u8679\u8DEF661\u53F7"},{value:"\u65B0\u65FA\u89D2\u8336\u9910\u5385",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF988\u53F7\u521B\u9091\u91D1\u6C99\u8C376\u53F7\u697C113"},{value:"\u6CF7\u5343\u5BB6(\u5929\u5C71\u897F\u8DEF\u5E97)",address:"\u5929\u5C71\u897F\u8DEF438\u53F7"},{value:"\u80D6\u4ED9\u5973\u7EB8\u676F\u86CB\u7CD5\uFF08\u4E0A\u6D77\u51CC\u7A7A\u5E97\uFF09",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F71\u5E6218\u53F7\u697C\u4E00\u5C42\u5546\u94FA18-101"},{value:"\u8D21\u8336",address:"\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF633\u53F7"},{value:"\u8C6A\u5927\u5927\u9999\u9E21\u6392\u8D85\u7EA7\u5976\u7238",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF\u66F9\u5B89\u8DEF1685\u53F7"},{value:"\u8336\u829D\u5170\uFF08\u5976\u8336\uFF0C\u624B\u6293\u997C\uFF09",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u540C\u666E\u8DEF1435\u53F7"},{value:"\u5341\u4E8C\u6CF7\u753A",address:"\u4E0A\u6D77\u5E02\u5317\u7FDF\u8DEF1444\u5F0481\u53F7B\u5E62-107"},{value:"\u661F\u79FB\u6D53\u7F29\u5496\u5561",address:"\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u65B0\u90C1\u8DEF817\u53F7"},{value:"\u963F\u59E8\u5976\u8336/\u8C6A\u5927\u5927",address:"\u5609\u5B9A\u533A\u66F9\u5B89\u8DEF1611\u53F7"},{value:"\u65B0\u9EA6\u751C\u56DB\u5B63\u751C\u54C1\u70B8\u9E21",address:"\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF2383\u5F0455\u53F7"}];let C;const h=(t,D)=>{var a=t?s.value.filter(g(t)):s.value;clearTimeout(C),C=setTimeout(()=>{D(a)},11e4)},g=t=>D=>D.value.toLowerCase().indexOf(t.toLowerCase())===0,u=t=>{console.log(t)};return i(()=>{s.value=r()}),{restaurants:s,state:v(""),querySearchAsync:h,createFilter:g,loadAll:r,handleSelect:u}}});return S({render:A},o)}()}},j=e("h1",null,"Autocomplete \u8F93\u5165\u5EFA\u8BAE",-1),z=e("p",null,[c("Autocomplete \u662F\u4E00\u4E2A\u5E26\u8F93\u5165\u5EFA\u8BAE\u7684\u8F93\u5165\u6846\u7EC4\u4EF6\uFF0C\u5B83\u62E5\u6709\u540C"),e("code",null,"Input"),c("\u7EC4\u4EF6\u4E00\u6837\u7684\u5C5E\u6027\u3002")],-1),G=e("div",null,[e("p",null,[e("code",null,"fetch-suggestions"),c(" \u662F\u4E00\u4E2A\u8FD4\u56DE\u8F93\u5165\u5EFA\u8BAE\u7684\u65B9\u6CD5\u5C5E\u6027\uFF0C\u5982 querySearch(queryString, cb)\uFF0C\u5728\u8BE5\u65B9\u6CD5\u4E2D\u4F60\u53EF\u4EE5\u5728\u4F60\u7684\u8F93\u5165\u5EFA\u8BAE\u6570\u636E\u51C6\u5907\u597D\u65F6\u901A\u8FC7 cb(data) \u8FD4\u56DE\u5230 Autocomplete \u7EC4\u4EF6\u4E2D\u3002")])],-1),J=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-row gap="var(--lg)">
    <hl-col span="col-md-12">
      <p class="m-b-sm">\u6FC0\u6D3B\u5373\u5217\u51FA\u8F93\u5165\u5EFA\u8BAE</p>
      <hl-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
        block
        clearable
        @select="handleSelect"
      >
        <template #prefix>
          <hl-icon><two-point /></hl-icon>
        </template>
      </hl-autocomplete>
    </hl-col>

    <hl-col span="col-md-12">
      <p class="m-b-sm">\u8F93\u5165\u540E\u5339\u914D\u8F93\u5165\u5EFA\u8BAE</p>
      <hl-autocomplete
        v-model="state2"
        class="inline-input"
        :fetch-suggestions="querySearch"
        placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
        :trigger-on-focus="false"
        block
        @select="handleSelect"
      >
        <template #prefix>
          <hl-icon><two-point /></hl-icon>
        </template>
      </hl-autocomplete>
    </hl-col>
  </hl-row>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const restaurants = ref([])
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // \u8C03\u7528 callback \u8FD4\u56DE\u5EFA\u8BAE\u5217\u8868\u7684\u6570\u636E
      cb(results)
    }
    const createFilter = queryString => {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: '\u4E09\u5168\u9C9C\u98DF\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09', address: '\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7' },
        {
          value: 'Hot honey \u9996\u5C14\u70B8\u9E21\uFF08\u4ED9\u971E\u8DEF\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u6DDE\u8679\u8DEF661\u53F7',
        },
        {
          value: '\u65B0\u65FA\u89D2\u8336\u9910\u5385',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF988\u53F7\u521B\u9091\u91D1\u6C99\u8C376\u53F7\u697C113',
        },
        { value: '\u6CF7\u5343\u5BB6(\u5929\u5C71\u897F\u8DEF\u5E97)', address: '\u5929\u5C71\u897F\u8DEF438\u53F7' },
        {
          value: '\u80D6\u4ED9\u5973\u7EB8\u676F\u86CB\u7CD5\uFF08\u4E0A\u6D77\u51CC\u7A7A\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F71\u5E6218\u53F7\u697C\u4E00\u5C42\u5546\u94FA18-101',
        },
        { value: '\u8D21\u8336', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF633\u53F7' },
        {
          value: '\u8C6A\u5927\u5927\u9999\u9E21\u6392\u8D85\u7EA7\u5976\u7238',
          address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF\u66F9\u5B89\u8DEF1685\u53F7',
        },
        {
          value: '\u8336\u829D\u5170\uFF08\u5976\u8336\uFF0C\u624B\u6293\u997C\uFF09',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u540C\u666E\u8DEF1435\u53F7',
        },
        { value: '\u5341\u4E8C\u6CF7\u753A', address: '\u4E0A\u6D77\u5E02\u5317\u7FDF\u8DEF1444\u5F0481\u53F7B\u5E62-107' },
        { value: '\u661F\u79FB\u6D53\u7F29\u5496\u5561', address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u65B0\u90C1\u8DEF817\u53F7' },
        { value: '\u963F\u59E8\u5976\u8336/\u8C6A\u5927\u5927', address: '\u5609\u5B9A\u533A\u66F9\u5B89\u8DEF1611\u53F7' },
        { value: '\u65B0\u9EA6\u751C\u56DB\u5B63\u751C\u54C1\u70B8\u9E21', address: '\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF2383\u5F0455\u53F7' },
        {
          value: 'Monica\u6469\u6258\u4E3B\u9898\u5496\u5561\u5E97',
          address: '\u5609\u5B9A\u533A\u6C5F\u6865\u9547\u66F9\u5B89\u516C\u8DEF2409\u53F71F\uFF0C2383\u5F0462\u53F71F',
        },
        {
          value: '\u6D6E\u751F\u82E5\u8336\uFF08\u51CC\u7A7Asoho\u5E97\uFF09',
          address: '\u4E0A\u6D77\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C42',
        },
        { value: 'NONO JUICE  \u9C9C\u69A8\u679C\u6C41', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF119\u53F7' },
        { value: 'CoCo\u90FD\u53EF(\u5317\u65B0\u6CFE\u5E97\uFF09', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF' },
        {
          value: '\u5FEB\u4E50\u67E0\u6AAC\uFF08\u795E\u5DDE\u667A\u6167\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF567\u53F71\u5C42R117\u53F7\u5E97\u94FA',
        },
        {
          value: 'Merci Paul cafe',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u5149\u590D\u897F\u8DEF\u4E39\u5DF4\u8DEF28\u5F046\u53F7\u697C819',
        },
        {
          value: '\u732B\u5C71\u738B\uFF08\u897F\u90CA\u767E\u8054\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u7B2C\u4E00\u5C42G05-F01-1-306',
        },
        { value: '\u67AA\u4F1A\u5C71', address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u68D5\u6988\u8DEF' },
        { value: '\u7EB5\u98DF', address: '\u5143\u4E30\u5929\u5C71\u82B1\u56ED(\u4E1C\u95E8) \u53CC\u6D41\u8DEF267\u53F7' },
        { value: '\u94B1\u8BB0', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF' },
        { value: '\u58F9\u676F\u52A0', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u901A\u534F\u8DEF' },
        {
          value: '\u5526\u54C7\u5600\u5496',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u65B0\u6CFE\u9547\u91D1\u949F\u8DEF999\u53F72\u5E62\uFF08B\u5E62\uFF09\u7B2C01\u5C42\u7B2C1-02A\u5355\u5143',
        },
        { value: '\u7231\u831C\u831C\u91CC(\u897F\u90CA\u767E\u8054)', address: '\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F71305\u5BA4' },
        {
          value: '\u7231\u831C\u831C\u91CC(\u8FD1\u94C1\u5E7F\u573A)',
          address:
            '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF818\u53F7\u8FD1\u94C1\u57CE\u5E02\u5E7F\u573A\u5317\u533A\u5730\u4E0B\u4E8C\u697CN-B2-O2-C\u5546\u94FA',
        },
        {
          value: '\u9C9C\u679C\u69A8\u6C41\uFF08\u91D1\u6C99\u6C5F\u8DEF\u548C\u7F8E\u5E7F\u5E97\uFF09',
          address: '\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF2239\u53F7\u91D1\u6C99\u548C\u7F8E\u5E7F\u573AB1-10-6',
        },
        {
          value: '\u5F00\u5FC3\u4E3D\u679C\uFF08\u7F24\u8C37\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5A01\u5B81\u8DEF\u5929\u5C71\u8DEF341\u53F7',
        },
        { value: '\u8D85\u7EA7\u9E21\u8F66\uFF08\u4E30\u5E84\u8DEF\u5E97\uFF09', address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u4E30\u5E84\u8DEF240\u53F7' },
        { value: '\u5999\u751F\u6D3B\u679C\u56ED\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09', address: '\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7' },
        { value: '\u9999\u5B9C\u5EA6\u9EBB\u8FA3\u9999\u9505', address: '\u957F\u5B81\u533A\u6DDE\u8679\u8DEF148\u53F7' },
        {
          value: '\u51E1\u4ED4\u6C49\u5821\uFF08\u8001\u771F\u5317\u8DEF\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u8001\u771F\u5317\u8DEF160\u53F7',
        },
        { value: '\u6E2F\u5F0F\u5C0F\u94FA', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4' },
        { value: '\u8700\u9999\u6E90\u9EBB\u8FA3\u9999\u9505\uFF08\u5251\u6CB3\u8DEF\u5E97\uFF09', address: '\u5251\u6CB3\u8DEF443-1' },
        { value: '\u5317\u4EAC\u997A\u5B50\u9986', address: '\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u5929\u5C71\u897F\u8DEF490-1\u53F7' },
        {
          value: '\u996D\u5178*\u65B0\u7B80\u9910\uFF08\u51CC\u7A7ASOHO\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C429-83\u5BA4',
        },
        {
          value: '\u7126\u8033\xB7\u5DDD\u5F0F\u5FEB\u9910\uFF08\u91D1\u949F\u8DEF\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u91D1\u949F\u8DEF633\u53F7\u5730\u4E0B\u4E00\u5C42\u7532\u90E8',
        },
        { value: '\u52A8\u529B\u9E21\u8F66', address: '\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF299\u5F043\u53F7101B' },
        { value: '\u6D4F\u9633\u84B8\u83DC', address: '\u5929\u5C71\u897F\u8DEF430\u53F7' },
        { value: '\u56DB\u6D77\u6E38\u9F99\uFF08\u5929\u5C71\u897F\u8DEF\u5E97\uFF09', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF' },
        {
          value: '\u6A31\u82B1\u98DF\u5802\uFF08\u51CC\u7A7A\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4',
        },
        { value: '\u58F9\u5206\u7C73\u5BA2\u5BB6\u4F20\u7EDF\u8C03\u5236\u7C73\u7C89(\u5929\u5C71\u5E97)', address: '\u5929\u5C71\u897F\u8DEF428\u53F7' },
        {
          value: '\u798F\u8363\u7965\u70E7\u814A\uFF08\u5E73\u6EAA\u8DEF\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u534F\u548C\u8DEF\u798F\u6CC9\u8DEF255\u5F0457-73\u53F7',
        },
        {
          value: '\u901F\u8BB0\u9EC4\u7116\u9E21\u7C73\u996D',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u91D1\u949F\u8DEF180\u53F71\u5C4201\u53F7\u644A\u4F4D',
        },
        { value: '\u7EA2\u8FA3\u6912\u9EBB\u8FA3\u70EB', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF492\u53F7' },
        {
          value: '(\u5C0F\u6768\u751F\u714E)\u897F\u90CA\u767E\u8054\u9910\u5385',
          address: '\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u767E\u80542\u697C',
        },
        { value: '\u9633\u9633\u9EBB\u8FA3\u70EB', address: '\u5929\u5C71\u897F\u8DEF389\u53F7' },
        {
          value: '\u5357\u62F3\u5988\u5988\u9F99\u867E\u76D6\u6D47\u996D',
          address: '\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF1699\u53F7\u946B\u4E50\u60E0\u7F8E\u98DF\u5E7F\u573AA13',
        },
      ]
    }
    const handleSelect = item => {
      console.log(item)
    }
    onMounted(() => {
      restaurants.value = loadAll()
    })
    return {
      restaurants,
      state1: ref(''),
      state2: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
    }
  },
})
<\/script>
`)],-1),P=e("h2",{id:"zi-ding-yi-mo-ban"},[e("a",{class:"header-anchor",href:"#zi-ding-yi-mo-ban"}),c(" \u81EA\u5B9A\u4E49\u6A21\u677F")],-1),R=e("p",null,[c("\u4F7F\u7528"),e("code",null,"#default"),c("\u81EA\u5B9A\u4E49\u8F93\u5165\u5EFA\u8BAE\u7684\u6A21\u677F\u3002\u8BE5 scope \u7684\u53C2\u6570\u4E3A"),e("code",null,"item"),c("\uFF0C\u8868\u793A\u5F53\u524D\u8F93\u5165\u5EFA\u8BAE\u5BF9\u8C61\u3002")],-1),T=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-autocomplete
    v-model="state"
    popper-class="my-autocomplete"
    :fetch-suggestions="querySearch"
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
    @select="handleSelect"
  >
    <template #suffix>
      <i class="hl-icon-edit hl-input__icon" @click="handleIconClick"> </i>
    </template>
    <template #default="{ item }">
      <div class="name">{{ item.value }}</div>
      <span class="addr">{{ item.address }}</span>
    </template>
  </hl-autocomplete>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const restaurants = ref([])

    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // \u8C03\u7528 callback \u8FD4\u56DE\u5EFA\u8BAE\u5217\u8868\u7684\u6570\u636E
      cb(results)
    }
    const createFilter = queryString => {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: '\u4E09\u5168\u9C9C\u98DF\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09', address: '\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7' },
        {
          value: 'Hot honey \u9996\u5C14\u70B8\u9E21\uFF08\u4ED9\u971E\u8DEF\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u6DDE\u8679\u8DEF661\u53F7',
        },
        {
          value: '\u65B0\u65FA\u89D2\u8336\u9910\u5385',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF988\u53F7\u521B\u9091\u91D1\u6C99\u8C376\u53F7\u697C113',
        },
        { value: '\u6CF7\u5343\u5BB6(\u5929\u5C71\u897F\u8DEF\u5E97)', address: '\u5929\u5C71\u897F\u8DEF438\u53F7' },
        {
          value: '\u80D6\u4ED9\u5973\u7EB8\u676F\u86CB\u7CD5\uFF08\u4E0A\u6D77\u51CC\u7A7A\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F71\u5E6218\u53F7\u697C\u4E00\u5C42\u5546\u94FA18-101',
        },
        { value: '\u8D21\u8336', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF633\u53F7' },
        {
          value: '\u8C6A\u5927\u5927\u9999\u9E21\u6392\u8D85\u7EA7\u5976\u7238',
          address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF\u66F9\u5B89\u8DEF1685\u53F7',
        },
        {
          value: '\u8336\u829D\u5170\uFF08\u5976\u8336\uFF0C\u624B\u6293\u997C\uFF09',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u540C\u666E\u8DEF1435\u53F7',
        },
        { value: '\u5341\u4E8C\u6CF7\u753A', address: '\u4E0A\u6D77\u5E02\u5317\u7FDF\u8DEF1444\u5F0481\u53F7B\u5E62-107' },
        { value: '\u661F\u79FB\u6D53\u7F29\u5496\u5561', address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u65B0\u90C1\u8DEF817\u53F7' },
        { value: '\u963F\u59E8\u5976\u8336/\u8C6A\u5927\u5927', address: '\u5609\u5B9A\u533A\u66F9\u5B89\u8DEF1611\u53F7' },
        { value: '\u65B0\u9EA6\u751C\u56DB\u5B63\u751C\u54C1\u70B8\u9E21', address: '\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF2383\u5F0455\u53F7' },
        {
          value: 'Monica\u6469\u6258\u4E3B\u9898\u5496\u5561\u5E97',
          address: '\u5609\u5B9A\u533A\u6C5F\u6865\u9547\u66F9\u5B89\u516C\u8DEF2409\u53F71F\uFF0C2383\u5F0462\u53F71F',
        },
        {
          value: '\u6D6E\u751F\u82E5\u8336\uFF08\u51CC\u7A7Asoho\u5E97\uFF09',
          address: '\u4E0A\u6D77\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C42',
        },
        { value: 'NONO JUICE  \u9C9C\u69A8\u679C\u6C41', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF119\u53F7' },
        { value: 'CoCo\u90FD\u53EF(\u5317\u65B0\u6CFE\u5E97\uFF09', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF' },
        {
          value: '\u5FEB\u4E50\u67E0\u6AAC\uFF08\u795E\u5DDE\u667A\u6167\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF567\u53F71\u5C42R117\u53F7\u5E97\u94FA',
        },
        {
          value: 'Merci Paul cafe',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u5149\u590D\u897F\u8DEF\u4E39\u5DF4\u8DEF28\u5F046\u53F7\u697C819',
        },
        {
          value: '\u732B\u5C71\u738B\uFF08\u897F\u90CA\u767E\u8054\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u7B2C\u4E00\u5C42G05-F01-1-306',
        },
        { value: '\u67AA\u4F1A\u5C71', address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u68D5\u6988\u8DEF' },
        { value: '\u7EB5\u98DF', address: '\u5143\u4E30\u5929\u5C71\u82B1\u56ED(\u4E1C\u95E8) \u53CC\u6D41\u8DEF267\u53F7' },
        { value: '\u94B1\u8BB0', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF' },
        { value: '\u58F9\u676F\u52A0', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u901A\u534F\u8DEF' },
        {
          value: '\u5526\u54C7\u5600\u5496',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u65B0\u6CFE\u9547\u91D1\u949F\u8DEF999\u53F72\u5E62\uFF08B\u5E62\uFF09\u7B2C01\u5C42\u7B2C1-02A\u5355\u5143',
        },
        { value: '\u7231\u831C\u831C\u91CC(\u897F\u90CA\u767E\u8054)', address: '\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F71305\u5BA4' },
        {
          value: '\u7231\u831C\u831C\u91CC(\u8FD1\u94C1\u5E7F\u573A)',
          address:
            '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF818\u53F7\u8FD1\u94C1\u57CE\u5E02\u5E7F\u573A\u5317\u533A\u5730\u4E0B\u4E8C\u697CN-B2-O2-C\u5546\u94FA',
        },
        {
          value: '\u9C9C\u679C\u69A8\u6C41\uFF08\u91D1\u6C99\u6C5F\u8DEF\u548C\u7F8E\u5E7F\u5E97\uFF09',
          address: '\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF2239\u53F7\u91D1\u6C99\u548C\u7F8E\u5E7F\u573AB1-10-6',
        },
        {
          value: '\u5F00\u5FC3\u4E3D\u679C\uFF08\u7F24\u8C37\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5A01\u5B81\u8DEF\u5929\u5C71\u8DEF341\u53F7',
        },
        { value: '\u8D85\u7EA7\u9E21\u8F66\uFF08\u4E30\u5E84\u8DEF\u5E97\uFF09', address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u4E30\u5E84\u8DEF240\u53F7' },
        { value: '\u5999\u751F\u6D3B\u679C\u56ED\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09', address: '\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7' },
        { value: '\u9999\u5B9C\u5EA6\u9EBB\u8FA3\u9999\u9505', address: '\u957F\u5B81\u533A\u6DDE\u8679\u8DEF148\u53F7' },
        {
          value: '\u51E1\u4ED4\u6C49\u5821\uFF08\u8001\u771F\u5317\u8DEF\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u8001\u771F\u5317\u8DEF160\u53F7',
        },
        { value: '\u6E2F\u5F0F\u5C0F\u94FA', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4' },
        { value: '\u8700\u9999\u6E90\u9EBB\u8FA3\u9999\u9505\uFF08\u5251\u6CB3\u8DEF\u5E97\uFF09', address: '\u5251\u6CB3\u8DEF443-1' },
        { value: '\u5317\u4EAC\u997A\u5B50\u9986', address: '\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u5929\u5C71\u897F\u8DEF490-1\u53F7' },
        {
          value: '\u996D\u5178*\u65B0\u7B80\u9910\uFF08\u51CC\u7A7ASOHO\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F79\u53F7\u697C\u5730\u4E0B\u4E00\u5C429-83\u5BA4',
        },
        {
          value: '\u7126\u8033\xB7\u5DDD\u5F0F\u5FEB\u9910\uFF08\u91D1\u949F\u8DEF\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u91D1\u949F\u8DEF633\u53F7\u5730\u4E0B\u4E00\u5C42\u7532\u90E8',
        },
        { value: '\u52A8\u529B\u9E21\u8F66', address: '\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF299\u5F043\u53F7101B' },
        { value: '\u6D4F\u9633\u84B8\u83DC', address: '\u5929\u5C71\u897F\u8DEF430\u53F7' },
        { value: '\u56DB\u6D77\u6E38\u9F99\uFF08\u5929\u5C71\u897F\u8DEF\u5E97\uFF09', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF' },
        {
          value: '\u6A31\u82B1\u98DF\u5802\uFF08\u51CC\u7A7A\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F715\u697C15-105\u5BA4',
        },
        { value: '\u58F9\u5206\u7C73\u5BA2\u5BB6\u4F20\u7EDF\u8C03\u5236\u7C73\u7C89(\u5929\u5C71\u5E97)', address: '\u5929\u5C71\u897F\u8DEF428\u53F7' },
        {
          value: '\u798F\u8363\u7965\u70E7\u814A\uFF08\u5E73\u6EAA\u8DEF\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u534F\u548C\u8DEF\u798F\u6CC9\u8DEF255\u5F0457-73\u53F7',
        },
        {
          value: '\u901F\u8BB0\u9EC4\u7116\u9E21\u7C73\u996D',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5317\u65B0\u6CFE\u8857\u9053\u91D1\u949F\u8DEF180\u53F71\u5C4201\u53F7\u644A\u4F4D',
        },
        { value: '\u7EA2\u8FA3\u6912\u9EBB\u8FA3\u70EB', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u5929\u5C71\u897F\u8DEF492\u53F7' },
        {
          value: '(\u5C0F\u6768\u751F\u714E)\u897F\u90CA\u767E\u8054\u9910\u5385',
          address: '\u957F\u5B81\u533A\u4ED9\u971E\u897F\u8DEF88\u53F7\u767E\u80542\u697C',
        },
        { value: '\u9633\u9633\u9EBB\u8FA3\u70EB', address: '\u5929\u5C71\u897F\u8DEF389\u53F7' },
        {
          value: '\u5357\u62F3\u5988\u5988\u9F99\u867E\u76D6\u6D47\u996D',
          address: '\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF1699\u53F7\u946B\u4E50\u60E0\u7F8E\u98DF\u5E7F\u573AA13',
        },
      ]
    }
    const handleSelect = item => {
      console.log(item)
    }

    const handleIconClick = ev => {
      console.log(ev)
    }

    onMounted(() => {
      restaurants.value = loadAll()
    })

    return {
      restaurants,
      state: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      handleIconClick,
    }
  },
})
<\/script>

<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>
`)],-1),$=e("h2",{id:"yuan-cheng-sou-suo"},[e("a",{class:"header-anchor",href:"#yuan-cheng-sou-suo"}),c(" \u8FDC\u7A0B\u641C\u7D22")],-1),Y=e("p",null,"\u4ECE\u670D\u52A1\u7AEF\u641C\u7D22\u6570\u636E",-1),Q=e("pre",null,[e("code",{class:"html"},` <template>
  <hl-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
    @select="handleSelect"
  />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const restaurants = ref([])
    const loadAll = () => {
      return [
        {
          value: '\u4E09\u5168\u9C9C\u98DF\uFF08\u5317\u65B0\u6CFE\u5E97\uFF09',
          address: '\u957F\u5B81\u533A\u65B0\u6E14\u8DEF144\u53F7',
        },
        {
          value: 'Hot honey \u9996\u5C14\u70B8\u9E21\uFF08\u4ED9\u971E\u8DEF\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u6DDE\u8679\u8DEF661\u53F7',
        },
        {
          value: '\u65B0\u65FA\u89D2\u8336\u9910\u5385',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u771F\u5317\u8DEF988\u53F7\u521B\u9091\u91D1\u6C99\u8C376\u53F7\u697C113',
        },
        { value: '\u6CF7\u5343\u5BB6(\u5929\u5C71\u897F\u8DEF\u5E97)', address: '\u5929\u5C71\u897F\u8DEF438\u53F7' },
        {
          value: '\u80D6\u4ED9\u5973\u7EB8\u676F\u86CB\u7CD5\uFF08\u4E0A\u6D77\u51CC\u7A7A\u5E97\uFF09',
          address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF968\u53F71\u5E6218\u53F7\u697C\u4E00\u5C42\u5546\u94FA18-101',
        },
        { value: '\u8D21\u8336', address: '\u4E0A\u6D77\u5E02\u957F\u5B81\u533A\u91D1\u949F\u8DEF633\u53F7' },
        {
          value: '\u8C6A\u5927\u5927\u9999\u9E21\u6392\u8D85\u7EA7\u5976\u7238',
          address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF\u66F9\u5B89\u8DEF1685\u53F7',
        },
        {
          value: '\u8336\u829D\u5170\uFF08\u5976\u8336\uFF0C\u624B\u6293\u997C\uFF09',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u540C\u666E\u8DEF1435\u53F7',
        },
        { value: '\u5341\u4E8C\u6CF7\u753A', address: '\u4E0A\u6D77\u5E02\u5317\u7FDF\u8DEF1444\u5F0481\u53F7B\u5E62-107' },
        { value: '\u661F\u79FB\u6D53\u7F29\u5496\u5561', address: '\u4E0A\u6D77\u5E02\u5609\u5B9A\u533A\u65B0\u90C1\u8DEF817\u53F7' },
        { value: '\u963F\u59E8\u5976\u8336/\u8C6A\u5927\u5927', address: '\u5609\u5B9A\u533A\u66F9\u5B89\u8DEF1611\u53F7' },
        { value: '\u65B0\u9EA6\u751C\u56DB\u5B63\u751C\u54C1\u70B8\u9E21', address: '\u5609\u5B9A\u533A\u66F9\u5B89\u516C\u8DEF2383\u5F0455\u53F7' },
      ]
    }

    let timeout
    const querySearchAsync = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(results)
      }, 110000)
    }
    const createFilter = queryString => {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const handleSelect = item => {
      console.log(item)
    }
    onMounted(() => {
      restaurants.value = loadAll()
    })
    return {
      restaurants,
      state: ref(''),
      querySearchAsync,
      createFilter,
      loadAll,
      handleSelect,
    }
  },
})
<\/script>
`)],-1),W=L('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>value-key</td><td>\u8F93\u5165\u5EFA\u8BAE\u5BF9\u8C61\u4E2D\u7528\u4E8E\u663E\u793A\u7684\u952E\u540D</td><td>string</td><td>\u2014</td><td>value</td></tr><tr><td>value</td><td>\u5FC5\u586B\u503C\uFF0C\u8F93\u5165\u7ED1\u5B9A\u503C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>debounce</td><td>\u83B7\u53D6\u8F93\u5165\u5EFA\u8BAE\u7684\u53BB\u6296\u5EF6\u65F6</td><td>number</td><td>\u2014</td><td>300</td></tr><tr><td>placement</td><td>\u83DC\u5355\u5F39\u51FA\u4F4D\u7F6E</td><td>string</td><td>top / top-start / top-end / bottom / bottom-start / bottom-end</td><td>bottom-start</td></tr><tr><td>fetch-suggestions</td><td>\u8FD4\u56DE\u8F93\u5165\u5EFA\u8BAE\u7684\u65B9\u6CD5\uFF0C\u4EC5\u5F53\u4F60\u7684\u8F93\u5165\u5EFA\u8BAE\u6570\u636E resolve \u65F6\uFF0C\u901A\u8FC7\u8C03\u7528 callback(data:[]) \u6765\u8FD4\u56DE\u5B83</td><td>Function(queryString, callback)</td><td>\u2014</td><td>\u2014</td></tr><tr><td>popper-class</td><td>Autocomplete \u4E0B\u62C9\u5217\u8868\u7684\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>trigger-on-focus</td><td>\u662F\u5426\u5728\u8F93\u5165\u6846 focus \u65F6\u663E\u793A\u5EFA\u8BAE\u5217\u8868</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>name</td><td>\u539F\u751F\u5C5E\u6027</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>select-when-unmatched</td><td>\u5728\u8F93\u5165\u6CA1\u6709\u4EFB\u4F55\u5339\u914D\u5EFA\u8BAE\u7684\u60C5\u51B5\u4E0B\uFF0C\u6309\u4E0B\u56DE\u8F66\u662F\u5426\u89E6\u53D1 <code>select</code> \u4E8B\u4EF6</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>label</td><td>\u8F93\u5165\u6846\u5173\u8054\u7684label\u6587\u5B57</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>prefix-icon</td><td>\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>suffix-icon</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>hide-loading</td><td>\u662F\u5426\u9690\u85CF\u8FDC\u7A0B\u52A0\u8F7D\u65F6\u7684\u52A0\u8F7D\u56FE\u6807</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>\u662F\u5426\u5C06\u4E0B\u62C9\u5217\u8868\u63D2\u5165\u81F3 body \u5143\u7D20\u3002\u5728\u4E0B\u62C9\u5217\u8868\u7684\u5B9A\u4F4D\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u53EF\u5C06\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A false</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>highlight-first-item</td><td>\u662F\u5426\u9ED8\u8BA4\u7A81\u51FA\u663E\u793A\u8FDC\u7A0B\u641C\u7D22\u5EFA\u8BAE\u4E2D\u7684\u7B2C\u4E00\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5C3A\u5BF8</td><td>string</td><td>sm / lg</td><td>-</td></tr><tr><td>fill</td><td>\u586B\u5145\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>thin</td><td>\u5355\u8584\u3001\u65E0\u8FB9\u6846\u3001\u65E0\u80CC\u666F\u6837\u5F0F</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u5EFA\u8BAE\uFF0C\u53C2\u6570\u4E3A { item }</td></tr><tr><td>prefix</td><td>\u8F93\u5165\u6846\u5934\u90E8\u5185\u5BB9</td></tr><tr><td>suffix</td><td>\u8F93\u5165\u6846\u5C3E\u90E8\u5185\u5BB9</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u70B9\u51FB\u9009\u4E2D\u5EFA\u8BAE\u9879\u65F6\u89E6\u53D1</td><td>\u9009\u4E2D\u5EFA\u8BAE\u9879</td></tr><tr><td>change</td><td>\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(value: string | number)</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>focus</td><td>\u4F7F input \u83B7\u53D6\u7126\u70B9</td><td>-</td></tr></tbody></table>',8);function K(d,E,F,A,f,v){const i=b("hl-demo0"),o=b("demo-block"),s=b("hl-demo1"),r=b("hl-demo2"),C=b("right-nav");return M(),N(I,null,[e("section",null,[j,z,p(o,{fs:""},{source:m(()=>[p(i)]),highlight:m(()=>[J]),default:m(()=>[G]),_:1}),P,R,p(o,{fs:""},{source:m(()=>[p(s)]),highlight:m(()=>[T]),_:1}),$,Y,p(o,{fs:""},{source:m(()=>[p(r)]),highlight:m(()=>[Q]),_:1}),W]),p(C)],64)}var tu=H(U,[["render",K]]);export{tu as default};
