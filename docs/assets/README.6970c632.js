import{d as F,s as f,u as c,R as D,Y as y,o as _,i as g,w as t,b as u,Z as S,V as v,W as h,$ as k,h as x,x as E,v as $,r as A,c as i,a as s,F as B,D as q,E as R,f as m,B as C,S as T,C as V,H as P,y as N,I as M,T as I,e as L}from"./index.76a63c96.js";const O=F({__name:"DemoDrawer",props:{expand:{type:Boolean},from:{}},setup(p){const a=p;f(r=>({f9b5f8dc:c(o)}));const e=D.getTheme().value.infoColors.primary.default,o=y("",2,e);return(r,n)=>(_(),g(c(k),v(h(a)),{default:t(()=>[u("div",{class:S(["demo-cube",a.from])},"Drawer",2)]),_:1},16))}});const z=x(O,[["__scopeId","data-v-e7df3ccb"]]),U={class:"demo"},Y=["value"],H=F({__name:"DemoControl",setup(p){f(n=>({"51232c9a":r.value.value.background.dark}));const a=["top","bottom","left","right"],e=E("bottom"),o=E(!1),r=$(()=>D.getTheme());return(n,l)=>{const b=A("ActionLabel");return _(),i(B,null,[u("div",U,[s(c(R),{Y:"center",spaceMode:"between"},{default:t(()=>[(_(),i(B,null,q(a,d=>s(b,{key:d},{default:t(()=>[s(c(P),null,{default:t(()=>[N(u("input",{type:"radio",value:d,name:"from","onUpdate:modelValue":l[0]||(l[0]=w=>e.value=w)},null,8,Y),[[M,e.value]])]),_:2},1024),u("strong",null,C(d.toUpperCase()),1)]),_:2},1024)),64))]),_:1}),s(c(T),{primary:"",block:"",onClick:l[1]||(l[1]=d=>o.value=!o.value)},{default:t(()=>[m(C(o.value?"Close":"Open")+" Drawer ",1)]),_:1})]),V(n.$slots,"default",{from:e.value,expand:o.value},void 0,!0)],64)}}});const J=x(H,[["__scopeId","data-v-868fb7de"]]),W={class:"markdown-body"},Z=u("h1",{id:"\u62BD\u5C49\u7EC4\u4EF6"},"\u62BD\u5C49\u7EC4\u4EF6",-1),j=u("p",null,"\u5728\u5C4F\u5E55\u8FB9\u7F18\u6298\u53E0\u5185\u5BB9",-1),G=u("h2",{id:"\u793A\u4F8B"},"\u793A\u4F8B",-1),K=u("p",null,[m("\u62BD\u5C49\u7EC4\u4EF6\u9ED8\u8BA4\u4E0E\u5C5E\u6027"),u("code",{class:""},"from"),m("\u4E2D\u8BBE\u7F6E\u7684\u5C4F\u5E55\u8FB9\u7F18\u7B49\u5BBD\uFF0C\u4F46\u5176\u5185\u90E8\u9AD8\u5EA6\u9700\u8981\u7531\u5185\u90E8\u5143\u7D20\u6491\u5F00\u6216\u4F7F \u7528css\u8FDB\u884C\u8BBE\u7F6E\u3002\u4F8B\u5982\u793A\u4F8B\u4E2D\u88AB\u653E\u7F6E\u5728\u62BD\u5C49\u4E2D\u7684\u65B9\u5757\uFF0C\u5B83\u7684\u9AD8\u5EA6\u8BBE\u7F6E\u59CB\u7EC8\u751F\u6548\u4E8E\u6298\u53E0\u5C4F\u5E55\u8FB9 \u7F18\u7684\u5782\u7EBF\u65B9\u5411\u3002")],-1),Q=L('<h2 id="Props">Props</h2><ul><li><p><code class="">expand</code>:</p><p>type:<code class="">Boolean</code></p><p>\u8FD9\u4E2A\u53C2\u6570\u662F\u5FC5\u987B\u7684,\u5B83\u63A7\u5236\u62BD\u5C49\u662F\u5426\u5C55\u5F00\u3002</p></li><li><p><code class="">from</code>:</p><p>type:<code class="">String</code></p><p>range:<code class="">&quot;top&quot; | &quot;left&quot; | &quot;right&quot; | &quot;bottom&quot;</code></p><p>\u8FD9\u4E2A\u53C2\u6570\u662F\u5FC5\u987B\u7684,\u5B83\u63A7\u5236\u62BD\u5C49\u5728\u5C4F\u5E55\u7684\u4EC0\u4E48\u4F4D\u7F6E\u5C55\u5F00\u3002</p></li></ul><h2 id="Slots">Slots</h2><ul><li><p><code class="">default</code>:</p><p>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u5C06\u8981\u6298\u53E0\u7684\u5185\u5BB9\u653E\u5728\u8FD9\u91CC\u3002</p></li></ul>',4),uu={},eu="",ou=F({__name:"README",setup(p,{expose:a}){a({frontmatter:{},excerpt:void 0});const e=I();return e.TocData=JSON.parse('[{"level":1,"text":"\u62BD\u5C49\u7EC4\u4EF6","children":[{"level":2,"text":"\u793A\u4F8B","children":[]},{"level":2,"text":"Props","children":[]},{"level":2,"text":"Slots","children":[]}]}]'),(o,r)=>{const n=A("preview-demo-code");return _(),i("div",W,[Z,j,G,K,s(n,{"comp-name":"Drawer","demo-name":"DemoDrawer"},{default:t(()=>[s(J,null,{default:t(l=>[s(z,v(h(l)),null,16)]),_:1})]),_:1}),Q])}}});export{ou as default,eu as excerpt,uu as frontmatter};
