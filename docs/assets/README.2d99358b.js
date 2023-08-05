import{d as m,x as v,c as i,C as y,b as e,a as u,w as o,u as t,F as E,o as n,D as C,E as F,G as h,H as x,y as D,I as w,B as f,v as A,J as B,f as d,_ as g,K as $,L as X,s as R,R as Y,h as k,p as G,i as M,T as N,r as T,e as S}from"./index.f4350e6c.js";const V={class:"demo control padding xy-selector"},I=["value"],O=["value"],H=m({__name:"XYSelector",setup(a){const s=v("center"),c=v("bottom");return(r,l)=>(n(),i(E,null,[y(r.$slots,"default",{X:s.value,Y:c.value}),e("div",V,[u(t(F),{Y:"center",spaceMode:"between"},{default:o(()=>[(n(),i(E,null,C(["start","center","end"],p=>u(t(h),{key:p},{default:o(()=>[u(t(x),null,{default:o(()=>[D(e("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>s.value=_),value:p,type:"radio",name:"item",title:"item"},null,8,I),[[w,s.value]])]),_:2},1024),e("span",null,"X"+f(p.toUpperCase()),1)]),_:2},1024)),64))]),_:1}),u(t(F),{Y:"center",spaceMode:"between"},{default:o(()=>[(n(),i(E,null,C(["top","center","bottom"],p=>u(t(h),{key:p},{default:o(()=>[u(t(x),null,{default:o(()=>[D(e("input",{type:"radio",value:p,"onUpdate:modelValue":l[1]||(l[1]=_=>c.value=_),name:"item",title:"item"},null,8,O),[[w,c.value]])]),_:2},1024),e("span",null,"Y"+f(p.toUpperCase()),1)]),_:2},1024)),64))]),_:1})])],64))}}),U={class:"demo demo-offset"},J=m({__name:"DemoOffset",props:{offset:Number},setup(a){const s=a,c=A(()=>s.offset?s.offset:0);return(r,l)=>(n(),i("div",U,[u(t(F),{class:"item"},{default:o(()=>[u(t(B),{class:"cube",col:4,offset:c.value},{default:o(()=>[d(f(c.value),1)]),_:1},8,["offset"])]),_:1}),u(t(F),{class:"item"},{default:o(()=>[u(t(B),{class:"cube",col:4,offset:4},{default:o(()=>[d(f(4))]),_:1})]),_:1}),u(t(F),{class:"item"},{default:o(()=>[u(t(B),{class:"cube",col:4,offset:6},{default:o(()=>[d(f(6))]),_:1})]),_:1})]))}});const L=g(J,[["__scopeId","data-v-642d67d6"]]),P=m({__name:"SetOffset",setup(a){const s=v(2);return(c,r)=>(n(),i(E,null,[y(c.$slots,"default",{offset:s.value}),u(t(h),{class:"demo control padding",active:!1},{default:o(()=>[e("div",null,f(s.value),1),u(t($),null,{default:o(()=>[D(e("input",{type:"range",max:"20",min:"0","onUpdate:modelValue":r[0]||(r[0]=l=>s.value=l)},null,512),[[X,s.value,void 0,{number:!0}]])]),_:1})]),_:1})],64))}}),K={class:"demo"},j={class:"demo-cube"},q={class:"demo-cube demo-cube-dark",dark:""},z=m({__name:"DemoGrid",setup(a){R(c=>({"52aa264c":s.value.value.border.light,"947852f4":s.value.value.text.default}));const s=A(()=>Y.getTheme());return(c,r)=>(n(),i("div",K,[(n(),i(E,null,C(4,l=>u(t(F),{class:"grid-item",key:l},{default:o(()=>[u(t(B),{col:l*4},{default:o(()=>[e("div",j,f(l*4),1)]),_:2},1032,["col"]),u(t(B),{col:24-l*4},{default:o(()=>[e("div",q,f(24-l*4),1)]),_:2},1032,["col"])]),_:2},1024)),64))]))}});const Q=g(z,[["__scopeId","data-v-6adb23b7"]]),b=a=>(G("data-v-81b8bb68"),a=a(),M(),a),W=b(()=>e("div",{class:"demo-cube height-full"},"Height Full",-1)),Z=b(()=>e("div",{class:"demo-cube height-half"},"Height Half",-1)),ee=b(()=>e("div",{class:"demo-cube height-min"},"Height Min",-1)),ue=m({__name:"DemoRow",props:{rowX:String,rowY:String},setup(a){const s=a;return(c,r)=>(n(),k(t(F),{class:"demo demo-row",X:s.rowX,Y:s.rowY},{default:o(()=>[W,Z,ee]),_:1},8,["X","Y"]))}});const oe=g(ue,[["__scopeId","data-v-81b8bb68"]]),se={class:"markdown-body"},te=S('<h1 id="\u6805\u683C\u5E03\u5C40">\u6805\u683C\u5E03\u5C40</h1><p>\u57FA\u4E8E<code class="">flex box</code> \u7684 24 \u680F\u7F51\u683C\u7CFB\u7EDF,</p><h2 id="\u7F51\u683C">\u7F51\u683C</h2><p>\u4F7F\u7528 <code class="">&lt;Row&gt;</code>, <code class="">&lt;Col&gt;</code> \u7EC4\u4EF6\u8FDB\u884C\u7F51\u683C\u5B9A\u4F4D\u3002</p><p><strong>\u793A\u4F8B</strong>\uFF1A</p>',5),le=e("h2",{id:"\u5B9A\u4F4D"},"\u5B9A\u4F4D",-1),ce=e("p",null,[d("\u4F7F\u7528\u7EC4\u4EF6"),e("code",{class:""},"<Row>"),d("\u7684 prop"),e("code",{class:""},"X"),d(","),e("code",{class:""},"Y"),d("\u5BF9\u7EC4\u4EF6\u5185\u5143\u7D20\u8FDB\u884C\u5FEB\u901F\u5B9A\u4F4D\u3002")],-1),de=e("p",null,[e("strong",null,"\u793A\u4F8B"),d(":")],-1),ae=e("h2",{id:"\u504F\u79FB"},"\u504F\u79FB",-1),pe=e("p",null,[d("\u4F7F\u7528\u7EC4\u4EF6"),e("code",{class:""},"<Col>"),d("\u7684 prop"),e("code",{class:""},"offset"),d("\u8FDB\u884C\u5B9A\u4F4D\u504F\u79FB\uFF0C\u5176\u4E2D\u6BCF\u4E2A"),e("code",{class:""},"<Col>"),d("\u5BBD\u5EA6\u5360\u636E\u5176\u7236\u5143\u7D20\u5BBD\u5EA6\u7684 4 \u680F\u3002")],-1),ne=e("p",null,[e("strong",null,"\u793A\u4F8B"),d(":")],-1),re=S('<h2 id="\u7EC4\u4EF6 Row">\u7EC4\u4EF6 Row</h2><ul><li><p><strong>Props</strong></p><ul><li><p><code class="">X</code>:</p><p>type\uFF1A<code class="">String</code></p><p>default:<code class="">&#39;start&#39;</code></p><p>range:<code class="">[&#39;start&#39;, &#39;center&#39;, &#39;end&#39;]</code></p><p>\u2018X\u2019 \u8F74\u5B9A\u4F4D</p></li><li><p><code class="">Y</code>:</p><p>type:<code class="">String</code></p><p>default : <code class="">top</code></p><p>range: <code class="">[&#39;top&#39;, &#39;center&#39;, &#39;bottom&#39;]</code></p><p>\u2018Y\u2019 \u8F74\u5B9A\u4F4D</p></li><li><p><code class="">tag</code>:</p><p>type:<code class="">String</code></p><p>default:<code class="">&#39;div&#39;</code></p><p>\u8BBE\u7F6E\u6700\u7EC8\u6E32\u67D3\u6807\u7B7E</p></li><li><p><code class="">warp</code>:</p><p>type:<code class="">Boolean</code></p><p>default:<code class="">false</code></p><p>\u5141\u8BB8\u5185\u90E8\u5143\u7D20\u6362\u884C</p></li><li><p><code class="">reverse</code>:</p><p>type:<code class="">Boolean</code></p><p>default:<code class="">false</code></p><p>\u53CD\u5411\u6392\u5217\u5185\u90E8\u5143\u7D20</p></li><li><p><code class="">noGap</code>:</p><p>type:<code class="">Boolean</code></p><p>default:<code class="">false</code></p><p>\u5F53\u5B50\u5143\u7D20\u4E3A\u7EC4\u4EF6<code class="">&lt;Col&gt;</code>\u65F6\uFF0C\u53D6\u6D88\u5176\u4E0E\u76F8\u90BB <code class="">&lt;Col&gt;</code> \u7EC4\u4EF6\u7684\u95F4\u9699</p></li><li><p><code class="">spaceMode</code>:</p><p>type:<code class="">String</code></p><p>default:<code class="">false</code></p><p>range: <code class="">[&#39;around&#39;, &#39;between&#39;]</code></p><p>\u8BBE\u7F6E\u5185\u90E8\u5143\u7D20\u7A7A\u683C\u6392\u5217\u65B9\u5F0F\uFF0C\u6B64 prop \u5C06\u8986\u76D6 <code class="">props:X</code>\u3002</p></li></ul></li><li><p><strong>Slots</strong></p><ul><li>default:\u9ED8\u8BA4\u63D2\u69FD</li></ul></li></ul><h2 id="\u7EC4\u4EF6 Col">\u7EC4\u4EF6 Col</h2><ul><li><p><strong>Props</strong></p><ul><li><p><code class="">tag</code>:</p><p>type:<code class="">String</code></p><p>default:<code class="">&#39;div&#39;</code></p></li><li><p><code class="">col</code> , <code class="">xs</code> , <code class="">sm</code> , <code class="">md</code> , <code class="">lg</code> , <code class="">xl</code>:</p><p>type: <code class="">Number</code></p><p>range: 0~24</p><p>\u8BBE\u7F6E\u7EC4\u4EF6\u5BBD\u5EA6\u5360\u7528\u51E0\u680F</p></li><li><p><code class="">offset</code> , <code class="">offsetXs</code> , <code class="">offsetSm</code> , <code class="">offsetMd</code> , <code class="">offsetXl</code>:</p><p>type: <code class="">Number</code></p><p>range: 0~24</p><p>\u8BBE\u7F6E\u7EC4\u4EF6\u504F\u79FB\u51E0\u680F</p></li><li><p><code class="">relativeToScreen</code>:</p><p>type: <code class="">Boolean</code></p><p>default: <code class="">false</code></p><p>\u8BBE\u7F6E 1 \u680F\u7684\u5BBD\u5EA6\u662F\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u4EA6\u6216\u8005\u662F\u7236\u7EC4\u4EF6\u7684\u5BBD\u5EA6</p></li></ul></li><li><p><strong>Slots</strong></p><ul><li>default:\u9ED8\u8BA4\u63D2\u69FD</li></ul></li></ul>',4),ie={},fe="",Fe=m({__name:"README",setup(a,{expose:s}){s({frontmatter:{},excerpt:void 0});const c=N();return c.TocData=JSON.parse('[{"level":1,"text":"\u6805\u683C\u5E03\u5C40","children":[{"level":2,"text":"\u7F51\u683C","children":[]},{"level":2,"text":"\u5B9A\u4F4D","children":[]},{"level":2,"text":"\u504F\u79FB","children":[]},{"level":2,"text":"\u7EC4\u4EF6 Row","children":[]},{"level":2,"text":"\u7EC4\u4EF6 Col","children":[]}]}]'),(r,l)=>{const p=T("preview-demo-code");return n(),i("div",se,[te,u(p,{"comp-name":"Grid","demo-name":"DemoGrid"},{default:o(()=>[u(Q)]),_:1}),le,ce,de,u(H,null,{default:o(_=>[u(p,{"comp-name":"Grid","demo-name":"DemoRow"},{default:o(()=>[u(oe,{"row-x":_.X,"row-y":_.Y},null,8,["row-x","row-y"])]),_:2},1024)]),_:1}),ae,pe,ne,u(P,null,{default:o(_=>[u(p,{"comp-name":"Grid","demo-name":"DemoOffset"},{default:o(()=>[u(L,{offset:_.offset},null,8,["offset"])]),_:2},1024)]),_:1}),re])}}});export{Fe as default,fe as excerpt,ie as frontmatter};