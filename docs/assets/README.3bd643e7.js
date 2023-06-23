import{a0 as S,a1 as P,d as x,o as E,i as V,u as o,a2 as U,x as f,v as T,a3 as O,a4 as h,c as C,b as u,C as R,a as l,w as t,B as p,F as v,D as w,E as A,G as g,f as a,K as Y,y,L as j,S as b,H as k,I as M,O as L,N as z,l as G,T as H,r as N,e as I,V as J,W as K}from"./index.3dee3569.js";class W{alerts;counter;key;constructor(){this.alerts=S([]),this.counter=0,this.key=0,P(this.alerts,n=>{const e=n[0];this.key=e?e.key:0,e&&e.timeout&&setTimeout(()=>this._$remove(e),e.timeout)})}sendMessage(n,e,s){this.counter++;const r={type:n,key:this.counter,content:s,timeout:e};this.alerts.push(r)}_$remove(n){const e=this.alerts.indexOf(n);e!==-1&&this.alerts.splice(e,1)}async removeAll(n){function e(s){return new Promise(r=>setTimeout(r,s))}if(n)for(;this.alerts.length;){const s=this.alerts.shift();if(!s)break;this._$remove(s),await e(n)}else this.alerts.splice(0);this.counter=0}}const q=x({__name:"DemoAlert",props:{alertController:{},transition:{type:Function}},setup(_){const n=_;return(e,s)=>(E(),V(o(U),{"alert-controller":n.alertController,transition:n.transition},null,8,["alert-controller","transition"]))}}),Q={class:"demo no-padding demo-alert"},X={class:"demo xy-selector"},Z=u("p",null,[u("strong",null,"Message type")],-1),uu=["value"],eu=u("p",null,[u("strong",null,"Show Time")],-1),tu=["value"],lu=x({__name:"typeSelector",setup(_){const n={Folded:L,Scale:z,Fade:G},e=f("Scale"),s=new W,r=f("info"),F=f(2e3);function d(){s.sendMessage(r.value,F.value,{closeButton:h("i",{class:"bi bi-x-lg"}),default:$.value})}const m=T(()=>D=>h(n[e.value],{mode:"out-in"},{default:()=>D})),$=T(()=>"Type "+r.value[0].toUpperCase()+r.value.slice(1));return O(()=>s.sendMessage("info",null,{default:"This is Alert .",closeButton:h("i",{class:"bi bi-x-lg"})})),(D,c)=>(E(),C(v,null,[u("div",Q,[R(D.$slots,"default",{transition:m.value,alertController:o(s)})]),u("div",X,[Z,l(o(A),{Y:"center",spaceMode:"between"},{default:t(()=>[(E(),C(v,null,w(["info","success","warning","error"],i=>l(o(g),{key:i},{default:t(()=>[l(o(k),null,{default:t(()=>[y(u("input",{value:i,type:"radio","onUpdate:modelValue":c[0]||(c[0]=B=>r.value=B)},null,8,uu),[[M,r.value]])]),_:2},1024),u("strong",null,p(i.toUpperCase()),1)]),_:2},1024)),64))]),_:1}),eu,l(o(A),{Y:"center",spaceMode:"between"},{default:t(()=>[l(o(g),null,{default:t(()=>[u("p",null,[u("strong",null,p(F.value)+" ms",1),a(" to close ")]),l(o(Y),null,{default:t(()=>[y(u("input",{type:"range",max:"4000",min:"0","onUpdate:modelValue":c[1]||(c[1]=i=>F.value=i)},null,512),[[j,F.value,void 0,{number:!0}]])]),_:1})]),_:1})]),_:1}),u("p",null,[u("strong",null,"Transition"+p(e.value),1)]),l(o(A),{Y:"center",spaceMode:"between"},{default:t(()=>[(E(!0),C(v,null,w(Object.keys(n),i=>(E(),V(o(g),{key:i},{default:t(()=>[l(o(k),null,{default:t(()=>[y(u("input",{value:i,type:"radio","onUpdate:modelValue":c[2]||(c[2]=B=>e.value=B)},null,8,tu),[[M,e.value]])]),_:2},1024),u("strong",null,p(i.toUpperCase()),1)]),_:2},1024))),128))]),_:1}),l(o(A),null,{default:t(()=>[l(o(b),{primary:"",block:"",onClick:d},{default:t(()=>[a("Send Message")]),_:1}),l(o(b),{block:"",onClick:c[3]||(c[3]=()=>o(s).removeAll())},{default:t(()=>[a("Close All")]),_:1})]),_:1})])],64))}}),nu={class:"markdown-body"},ou=u("h1",{id:"\u6D88\u606F\u63D0\u793A\u7EC4\u4EF6"},"\u6D88\u606F\u63D0\u793A\u7EC4\u4EF6",-1),su=u("p",null,"\u4F20\u9012\u7B80\u77ED\u7684\u6D88\u606F\u901A\u77E5\uFF0C\u5F53\u6709\u591A\u6761\u901A\u77E5\u65F6\u4EE5\u963B\u585E\u5F0F\u5C55\u793A\u6D88\u606F\u3002",-1),au=u("h2",{id:"\u793A\u4F8B"},"\u793A\u4F8B",-1),ru=I('<h2 id="Props">Props</h2><ul><li><p><code class="">alertController</code></p><p>type:<code class="">new AlertController()</code></p><p>\u63A5\u53D7 <code class="">AlertController</code> \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6B64\u9009\u9879\u662F\u5FC5\u987B\u7684</p></li><li><p><code class="">transition</code></p><p>type:<code class="">Function</code></p><p>\u63A5\u53D7\u8FD4\u56DE\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\u7684\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</p></li></ul><h2 id="AlertController">AlertController</h2><p>\u5C06\u4E00\u4E2A <code class="">AlertController</code> \u5BF9\u8C61\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u65F6\uFF0C\u8C03\u7528\u5176\u542B\u6709\u7684\u65B9\u6CD5\u53EF\u4EE5\u63A7\u5236\u6D88\u606F\u5982\u4F55\u53D1\u51FA\uFF0C\u4EE5\u53CA\u5173\u95ED\u65F6\u673A\u3002</p><p>\u5B9A\u4E49\u4E00\u4E2A\u63A7\u5236\u5668</p>',5),iu=u("pre",null,[u("code",{class:"language-ts"},`import { AlertController } from "jet-plan-ui"
const AC = new AlertController()
AC.sendMessage(...) // \u53D1\u51FA\u4E00\u6761\u6D88\u606F
AC.removeAll(...) // \u5173\u95ED\u6240\u6709\u6D88\u606F
`)],-1),cu=u("p",null,[a("\u8C03\u7528\u65B9\u6CD5 "),u("code",{class:""},".sendMessage"),a(" \u4EE5\u53D1\u9001\u4E00\u4E2A\u65B0\u7684\u901A\u77E5\uFF0C\u4EE5\u4E0B\u662F\u5B83\u7684\u51FD\u6570\u5B9A\u4E49\u3002")],-1),du=u("pre",null,[u("code",{class:"language-ts"},`sendMessage(

  // \u5B9A\u4E49\u6D88\u606F\u7C7B\u578B
  messageType: "info" | "error" | "warning" | "success",

  // \u51B3\u5B9A\u6D88\u606F\u5C55\u793A\u65F6\u95F4\uFF0C\u5355\u4F4D 'ms'\uFF0C\u4E3A 0 | null \u65F6\u5C06\u4E00\u76F4\u5C55\u793A\u6D88\u606F
  timeout: number | null\uFF0C

  // \u6D88\u606F\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u6765\u5B9A\u4E49\u66F4\u4E30\u5BCC\u7684\u901A\u77E5\u5185\u5BB9
  content:  string | VNode | {
    default: string | VNode; // \u6D88\u606F\u5185\u5BB9
    closeButton: string | VNode; // \u5173\u95ED\u6309\u94AE\u8981\u5C55\u793A\u7684\u5185\u5BB9
  }
)
`)],-1),Fu=u("p",null,[a("\u8C03\u7528 "),u("code",{class:""},".removeAll"),a(" \u4EE5\u5173\u95ED\u6240\u6709\u6D88\u606F\uFF0C\u4EE5\u4E0B\u662F\u5B83\u7684\u51FD\u6570\u5B9A\u4E49\u3002")],-1),Eu=u("pre",null,[u("code",{class:"language-ts"},`async removeAll(
  ms?:number //\u4EE5\u6D88\u606F\u53D1\u51FA\u987A\u5E8F\u4F9D\u6B21\u5173\u95ED\u901A\u77E5\uFF0C\u5355\u4F4D 'ms'\uFF0C\u4E0D\u63D0\u4F9B\u65F6\u5C06\u76F4\u63A5\u5173\u95ED\u6240\u6709\u901A\u77E5\u3002
)
`)],-1),_u=u("h2",{id:"\u81EA\u5B9A\u4E49\u52A8\u753B"},"\u81EA\u5B9A\u4E49\u52A8\u753B",-1),pu=u("p",null,[a("\u7EC4\u4EF6\u5C5E\u6027"),u("code",{class:""},"transition"),a("\u63A5\u53D7\u4E00\u4E2A\u8FD4\u56DE "),u("code",{class:""},"VNode"),a("\u7684\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4EE5\u4E0B\u662F\u5B83\u7684\u51FD\u6570\u5B9A\u4E49")],-1),Au=u("pre",null,[u("code",{class:"language-ts"},`function customTransition (
  vNode:VNode | undefined // \u6D88\u606F\u901A\u77E5\u7EC4\u4EF6\u7684VNode
) => VNode
`)],-1),Cu=u("p",null,"\u793A\u4F8B",-1),mu=u("pre",null,[u("code",{class:"language-ts"},`import { Transition } from "vue";
function customTransition(vNode) {
  return h(
    Transition,
    { mode: "out-in", name: "fade" },
    { default: () => vNode }
  );
}
`)],-1),Du=u("p",null,[u("strong",null,[u("em",null,[a("\u6CE8\u610F\uFF01\u4E3A "),u("code",{class:""},"Transition"),a(" \u8BBE\u7F6E"),u("code",{class:""},'{mode: "out-in"}'),a("\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5B83\u5C06\u80FD\u591F\u4FDD\u8BC1\u6D88\u606F\u4EE5\u6B63\u786E\u7684\u6837\u5F0F\u5C55\u793A\u3002")])])],-1),fu={},hu="",vu=x({__name:"README",setup(_,{expose:n}){n({frontmatter:{},excerpt:void 0});const e=H();return e.TocData=JSON.parse('[{"level":1,"text":"\u6D88\u606F\u63D0\u793A\u7EC4\u4EF6","children":[{"level":2,"text":"\u793A\u4F8B","children":[]},{"level":2,"text":"Props","children":[]},{"level":2,"text":"AlertController","children":[]},{"level":2,"text":"\u81EA\u5B9A\u4E49\u52A8\u753B","children":[]}]}]'),(s,r)=>{const F=N("preview-demo-code"),d=N("doc-code-box");return E(),C("div",nu,[ou,su,au,l(lu,null,{default:t(m=>[l(F,{"comp-name":"Alert","demo-name":"DemoAlert"},{default:t(()=>[l(q,J(K(m)),null,16)]),_:2},1024)]),_:1}),ru,l(d,null,{default:t(()=>[iu]),_:1}),cu,l(d,null,{default:t(()=>[du]),_:1}),Fu,l(d,null,{default:t(()=>[Eu]),_:1}),_u,pu,l(d,null,{default:t(()=>[Au]),_:1}),Cu,l(d,null,{default:t(()=>[mu]),_:1}),Du])}}});export{vu as default,hu as excerpt,fu as frontmatter};
