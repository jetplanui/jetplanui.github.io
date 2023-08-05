import{d as p,x as _,o as r,c as i,b as e,B as F,a as s,u as l,W as v,F as E,_ as C,C as D,w as c,G as h,A as B,y as f,z as A,E as b,T as x,r as k,e as g,Q as y,S}from"./index.f4350e6c.js";const $={class:"title-value font-mono"},w=p({__name:"DemoTrackBar",props:["disabled"],setup(d){const u=d,o=_(.5);return(t,a)=>(r(),i(E,null,[e("p",$,[e("strong",null,"\u767E\u5206\u6BD4\uFF1A"+F((o.value*100).toFixed(2))+"%",1)]),s(l(v),{percentage:o.value,"onUpdate:percentage":a[0]||(a[0]=n=>o.value=n),disabled:u.disabled},null,8,["percentage","disabled"])],64))}});const T=C(w,[["__scopeId","data-v-0ca358e5"]]),N={class:"demo"},P={class:"demo control padding"},M=e("p",{class:"sub-title"},"Disabled TrackBar",-1),V={class:"sub-text"},R=p({__name:"DemoTrackBarControl",setup(d){const u=_(!1);return(o,t)=>(r(),i(E,null,[e("div",N,[D(o.$slots,"default",{disabled:u.value})]),e("div",P,[M,s(l(b),{Y:"center",spaceMode:"between"},{default:c(()=>[s(l(h),null,{default:c(()=>[e("p",V,F(u.value?"disabled":"active"),1),s(l(B),null,{default:c(()=>[f(e("input",{type:"checkbox",name:"trackBarDisable",id:"trackBarDisable","onUpdate:modelValue":t[0]||(t[0]=a=>u.value=a)},null,512),[[A,u.value]])]),_:1})]),_:1})]),_:1})])],64))}}),z={class:"markdown-body"},O=e("h1",{id:"\u8FFD\u8E2A\u6761"},"\u8FFD\u8E2A\u6761",-1),U=e("p",null,"\u5C55\u793A\u8FDB\u5EA6\u6216\u8F93\u5165\u4E00\u4E2A\u8303\u56F4\u5185\u7684\u503C\uFF0C\u70B9\u51FB\u6216\u5728\u7EC4\u4EF6\u4E0A\u62D6\u52A8\u5C06\u4F1A\u6839\u636E\u5149\u6807\u4F4D\u7F6E\u8F93\u51FA\u4E00\u4E2A 0~1 \u4E4B\u95F4\u7684\u503C",-1),q=e("h2",{id:"\u793A\u4F8B"},"\u793A\u4F8B",-1),G=g('<h2 id="Props">Props</h2><ul><li><p><code class="">disabled</code>:</p><p>type:<code class="">Boolean</code></p><p>default:<code class="">false</code></p><p>\u7981\u7528\u7EC4\u4EF6</p></li><li><p><code class="">displayOnly</code>:</p><p>type:<code class="">Boolean</code></p><p>default:<code class="">false</code></p><p>\u7EC4\u4EF6\u5C06\u4E0D\u54CD\u5E94\u4EFB\u4F55\u8F93\u5165</p></li><li><p><code class="">percentage</code>:</p><p>type:<code class="">Number</code></p><p>required: <code class="">true</code></p><p>\u767E\u5206\u6BD4\u503C 0~1</p></li></ul><h2 id="Events">Events</h2><ul><li><p><code class="">trackStart</code>:</p><p>\u5728<code class="">onmousedown</code>&amp;<code class="">ontouchstart</code>\u65F6\u89E6\u53D1\uFF0C\u65E0\u643A\u5E26\u503C\u3002</p></li><li><p><code class="">trackMove</code>:</p><p>\u5728<code class="">onmousemove</code>&amp;<code class="">ontouchmove</code>\u65F6\u89E6\u53D1\uFF0C\u65E0\u643A\u5E26\u503C\u3002</p></li><li><p><code class="">trackEnd</code>:</p><p>\u5728<code class="">onmouseup</code>,<code class="">ontouchcancel</code>,<code class="">ontouchend</code>\u65F6\u89E6\u53D1\uFF0C\u65E0\u643A\u5E26\u503C\u3002</p></li><li><p><code class="">update:percentage</code>:</p><p>\u5728\u64CD\u4F5C\u7EC4\u4EF6\u65F6\u89E6\u53D1\uFF0C\u643A\u5E26\u6539\u53D8\u540E\u7684<code class="">percentage</code>\u7684\u503C\u3002</p></li></ul><h2 id="Slots">Slots</h2><ul><li><p>default\uFF1A\u5185\u5BB9\u5C06\u63D2\u5165\u5230\u7EC4\u4EF6\u8868\u9762</p></li><li><p>slider\uFF1A\u5185\u5BB9\u5C06\u5165\u5230\u6ED1\u52A8\u6761\u4E2D</p></li><li><p>background\uFF1A\u5185\u5BB9\u5C06\u63D2\u5165\u5230\u80CC\u666F\u4E2D</p></li></ul>',6),J={},Q="",W=p({__name:"README",setup(d,{expose:u}){u({frontmatter:{},excerpt:void 0});const o=x();return o.TocData=JSON.parse('[{"level":1,"text":"\u8FFD\u8E2A\u6761","children":[{"level":2,"text":"\u793A\u4F8B","children":[]},{"level":2,"text":"Props","children":[]},{"level":2,"text":"Events","children":[]},{"level":2,"text":"Slots","children":[]}]}]'),(t,a)=>{const n=k("preview-demo-code");return r(),i("div",z,[O,U,q,s(R,null,{default:c(m=>[s(n,{"comp-name":"TrackBar","demo-name":"DemoTrackBar"},{default:c(()=>[s(T,y(S(m)),null,16)]),_:2},1024)]),_:1}),G])}}});export{W as default,Q as excerpt,J as frontmatter};