(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-712024e8"],{"4e8f":function(e,t,c){"use strict";c("b856")},"59ab":function(e,t,c){},b856:function(e,t,c){},ba87:function(e,t,c){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},c43b:function(e,t,c){"use strict";c("59ab")},ddb2:function(e,t,c){"use strict";c.r(t);var l=c("5037");const o=Object(l["i"])("h2",null,"工具",-1),n=Object(l["i"])("p",null,"这里是一些内置的工具函数&类，以及一些指令的函数版本。",-1),b=Object(l["i"])("hr",null,null,-1),i=Object(l["i"])("br",null,null,-1),O=Object(l["k"])(", "),j=Object(l["i"])("hr",null,null,-1),a=Object(l["i"])("br",null,null,-1),d=Object(l["i"])("br",null,null,-1),u=Object(l["i"])("hr",null,null,-1);function r(e,t,c,r,s,m){const h=Object(l["E"])("demo-tal"),k=Object(l["E"])("demo-scroll-to"),f=Object(l["E"])("demo-shadow-painter");return Object(l["w"])(),Object(l["h"])("div",null,[o,n,b,i,Object(l["l"])(h),O,j,a,Object(l["l"])(k),d,u,Object(l["l"])(f)])}var s=c("ba87");const m={id:"time-action-limit"},h=Object(l["k"])(" 工具存放以下路径中 "),k=Object(l["k"])("tool/lib"),f={id:"time-action-limit"},w=Object(l["i"])("p",null,"限制单位时间内所能执行操作的次数。",-1),p=Object(l["k"])("timeout:Number"),v=Object(l["k"])(" 动作等待时间，单位为ms。 "),Q=Object(l["i"])("strong",{style:{"font-size":"1em"}},"这个值是必须的",-1),_=Object(l["k"])("limt:Number"),C=Object(l["k"])(" 设定过热前可执行动作次数。 "),E=Object(l["k"])("default:1"),g=Object(l["k"])("waitCoolingDown:Boolean"),x=Object(l["k"])(" 是否要求完全冷却后方可执行动作。如设定为‘true’时，在冷却完成前执行动作则会重置冷却时间。 "),T=Object(l["k"])("default:true"),A=Object(l["k"])(".action(callback)"),I=Object(l["k"])(" 将需要执行的函数作为参数传入，即可对该函数进行单位时间执行次数限制。 "),S=Object(l["k"])(".setCooledAlarm(callback)"),y=Object(l["k"])(" 通知外部程序已冷却完成。 "),P=Object(l["k"])(" .setOverheatAlarm(callback) "),L=Object(l["k"])(" 通知外部程序已过热。 "),N=Object(l["i"])("li",null," 导入路径: ",-1),U=Object(l["i"])("p",null,"在下方 Demo 中限制为 2s内可执行2次操作",-1);function D(e,t,c,o,n,b){const i=Object(l["E"])("c-highlighter"),O=Object(l["E"])("doc-item"),j=Object(l["E"])("m-code-box"),a=Object(l["E"])("m-switch"),d=Object(l["E"])("m-control-bar"),u=Object(l["E"])("m-row"),r=Object(l["E"])("m-cube"),s=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])("div",m,[Object(l["i"])("p",null,[h,Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[k]),_:1})]),Object(l["i"])("article",f,[Object(l["l"])(O,{name:"TimedActionLimit:","title-is":"h2"},{use:Object(l["Q"])(()=>[N,Object(l["l"])(j,{code:"import { TimedActionLimit } from mousse-ui/tool/lib"})]),default:Object(l["Q"])(()=>[w,Object(l["l"])(O,{name:"Args:","title-is":"h3"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[p]),_:1}),v,Q]),Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[_]),_:1}),C,Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[E]),_:1})]),Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[g]),_:1}),x,Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[T]),_:1})])]),_:1}),Object(l["l"])(O,{name:"methos:","title-is":"h3"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[A]),_:1}),I]),Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[S]),_:1}),y]),Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[P]),_:1}),L])]),_:1})]),_:1}),U,Object(l["l"])(d,{"for-id":"demo-wcd-control"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(e.wcd?"阻塞式等待":"动态等待"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(a,{id:"demo-wcd-control",modelValue:e.wcd,"onUpdate:modelValue":t[0]||(t[0]=t=>e.wcd=t)},null,8,["modelValue"])]),_:1}),Object(l["l"])(s,{title:"TimedActionLimit",code:e.code},{default:Object(l["Q"])(()=>[Object(l["i"])("div",null,[Object(l["i"])("div",{class:Object(l["r"])(b.cooldownProgressClass),id:"demo-cooldown-progress"},[Object(l["l"])(u,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(e.text),1)]),_:1})],2),Object(l["l"])(r,{id:"demo-show-click-conter",onClick:b.click,style:Object(l["s"])([{"user-select":"none"},{fontSize:0==e.clickConter?"1em":""}])},{default:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(0==e.clickConter?"ClickMe!!":e.clickConter),1)]),_:1},8,["onClick","style"])])]),_:1},8,["code"])])])}var J=c("3841"),M={name:"the-tool-lib",data:()=>({code:"//注意！code 示例为 demo 的简化版本\n//JavaScript\nlet clickConter = 0;\n// 控制是否等待冷却完成\nlet wcd = true;\nconst tal = new TimedActionLimit(2000,2,wcl);\n\ntal.setCooledAlarm(() => {\n    alert('Cooled!')\n    })\ntal.setOverheatAlarm(() => {\n    alert('Overheat!')\n    })\n\nfunction click() {\n    tal.action(()=>{\n        clickConter++;\n    })\n}\n\n//HTML\n<body>\n    <p onclick=\"click()\">{{ clickConter == 0? 'ClickMe!!':clickConter }}</p>\n</body>\n      ",clickConter:0,overheat:!1,text:"Cooled!",wcd:!0}),mounted(){},watch:{overheat(e){e&&setTimeout(()=>{this.overheat=!1,this.text="Cooling..."},1e3)}},methods:{click(){this.tal.action(()=>{this.clickConter++})}},computed:{cooldownProgressClass(){return[this.overheat?"overheat":"",!this.overheat&&this.clickConter>1?"cooling":""]},tal(){let e=new J["a"](2e3,2,this.wcd);return e.setCooledAlarm(()=>{this.text="Cooled!"}),e.setOverheatAlarm(()=>{this.overheat=!0,this.text="Overheat!"}),e}}},V=(c("4e8f"),c("b3f2")),z=c.n(V);const X=z()(M,[["render",D]]);var $=X;const B={id:"demo-scroll-to"},F=Object(l["i"])("h2",null,"scrollTo",-1),H=Object(l["i"])("br",null,null,-1),R=Object(l["i"])("p",null," 使用过渡动画滚动到指定元素。目标元素高度小于视窗高度时，滚动至其会居中至窗口中央，超出视窗高度则滚动至 “toTop” 定义的高度 ",-1),q=Object(l["k"])("elID:String"),G=Object(l["k"])(" 目标元素 id "),K=Object(l["k"])("toTop:Number"),W=Object(l["k"])(" 滚动至距离多少像素 ");function Y(e,t,c,o,n,b){const i=Object(l["E"])("c-highlighter"),O=Object(l["E"])("doc-item"),j=Object(l["E"])("m-code-box");return Object(l["w"])(),Object(l["h"])("article",B,[F,H,R,Object(l["l"])(O,{class:"no-dot",name:"参数"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[q]),_:1}),G]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[K]),_:1}),W])])]),_:1}),Object(l["l"])(O,{class:"no-dot",name:"使用"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["l"])(j,{code:e.code},null,8,["code"])])]),_:1})])}var Z={name:"the-tool-lib-dom",data:()=>({code:"import { scrollTo } from 'mousseUI/tool';\nscrollTo('#id1',100)"})};const ee=z()(Z,[["render",Y]]);var te=ee;const ce={id:"demo-shadow-painter"},le=Object(l["i"])("h2",null,"ShadowPainter",-1),oe=Object(l["i"])("p",null,"输出一个和 UI 界面统一样式的 css 阴影配置字符串",-1),ne=Object(l["k"])("direction:String"),be=Object(l["k"])(" top | bottom | left | right。 设置阴影的方向 "),ie=Object(l["k"])("intensity:Number"),Oe=Object(l["k"])(" 大于0的任意数字。设置阴影的强度 "),je=Object(l["k"])("color:String"),ae=Object(l["k"])(" 任意 css 支持的色彩编码。设置阴影色彩，不指定则使用默认阴影色彩 ");function de(e,t,c,o,n,b){const i=Object(l["E"])("c-highlighter"),O=Object(l["E"])("doc-item"),j=Object(l["E"])("m-cube"),a=Object(l["E"])("m-row"),d=Object(l["E"])("demo-box"),u=Object(l["F"])("shadow");return Object(l["w"])(),Object(l["h"])("article",ce,[le,oe,Object(l["l"])(O,{"no-dot":"",name:"参数"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[ne]),_:1}),be])]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[ie]),_:1}),Oe])]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(i,null,{default:Object(l["Q"])(()=>[je]),_:1}),ae])])]),_:1}),Object(l["l"])(d,{title:"shadowPainter",code:e.code,expand:""},{default:Object(l["Q"])(()=>[Object(l["l"])(a,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(j,{class:"demo-box"},{default:Object(l["Q"])(()=>[Object(l["k"])(" Intensity:"+Object(l["I"])(e.value),1)]),_:1})),[[u,e.value,"bottom"]])]),_:1})]),_:1},8,["code"])])}var ue={name:"demo-shadow-painter",data:()=>({value:15,code:"import { shadowPainter } from 'mousseUI/tool'\n// 渲染一个组件\nexport default {\n    render(){\n        return h('div',\n            {\n            style: {\n                boxShadow: shadowPainter('buttom', 15)\n            }\n        })\n    }\n}\n      "})};c("c43b");const re=z()(ue,[["render",de]]);var se=re,me={mixins:[s["a"]],name:"the-demo-tools",components:{demoTal:$,demoScrollTo:te,demoShadowPainter:se},data:()=>({})};const he=z()(me,[["render",r]]);t["default"]=he}}]);
//# sourceMappingURL=chunk-712024e8.47fca7d7.js.map