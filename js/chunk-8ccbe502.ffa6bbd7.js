(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ccbe502"],{1769:function(e,t,l){},3730:function(e,t,l){"use strict";l("ca35")},ba87:function(e,t,l){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},ca35:function(e,t,l){},d4ee:function(e,t,l){"use strict";l("1769")},ddb2:function(e,t,l){"use strict";l.r(t);var c=l("5037");const o=Object(c["i"])("h2",null,"工具",-1),n=Object(c["i"])("p",null,"这里是一些内置的工具函数&类，以及一些指令的函数版本。",-1),b=Object(c["i"])("hr",null,null,-1),i=Object(c["i"])("br",null,null,-1),O=Object(c["k"])(", "),j=Object(c["i"])("hr",null,null,-1),a=Object(c["i"])("br",null,null,-1),d=Object(c["i"])("br",null,null,-1),u=Object(c["i"])("hr",null,null,-1);function r(e,t,l,r,s,m){const h=Object(c["E"])("demo-tal"),k=Object(c["E"])("demo-scroll-to"),f=Object(c["E"])("demo-shadow-painter");return Object(c["w"])(),Object(c["h"])("div",null,[o,n,b,i,Object(c["l"])(h),O,j,a,Object(c["l"])(k),d,u,Object(c["l"])(f)])}var s=l("ba87");const m={id:"time-action-limit"},h=Object(c["k"])(" 工具存放以下路径中 "),k=Object(c["k"])("tool/lib"),f={id:"time-action-limit"},w=Object(c["i"])("p",null,"限制单位时间内所能执行操作的次数。",-1),p=Object(c["k"])("timeout:Number"),Q=Object(c["k"])(" 动作等待时间，单位为ms。 "),v=Object(c["i"])("strong",{style:{"font-size":"1em"}},"这个值是必须的",-1),_=Object(c["k"])("limt:Number"),C=Object(c["k"])(" 设定过热前可执行动作次数。 "),E=Object(c["k"])("default:1"),g=Object(c["k"])("waitCoolingDown:Boolean"),x=Object(c["k"])(" 是否要求完全冷却后方可执行动作。如设定为‘true’时，在冷却完成前执行动作则会重置冷却时间。 "),T=Object(c["k"])("default:true"),y=Object(c["k"])(".action(callback)"),A=Object(c["k"])(" 将需要执行的函数作为参数传入，即可对该函数进行单位时间执行次数限制。 "),I=Object(c["k"])(".setCooledAlarm(callback)"),S=Object(c["k"])(" 通知外部程序已冷却完成。 "),P=Object(c["k"])(" .setOverheatAlarm(callback) "),L=Object(c["k"])(" 通知外部程序已过热。 "),N=Object(c["i"])("li",null," 导入路径: ",-1),U=Object(c["i"])("p",null,"在下方 Demo 中限制为 2s内可执行2次操作",-1);function V(e,t,l,o,n,b){const i=Object(c["E"])("c-highlighter"),O=Object(c["E"])("doc-item"),j=Object(c["E"])("m-code-box"),a=Object(c["E"])("m-switch"),d=Object(c["E"])("m-control-bar"),u=Object(c["E"])("m-row"),r=Object(c["E"])("m-cube"),s=Object(c["E"])("demo-box");return Object(c["w"])(),Object(c["h"])("div",m,[Object(c["i"])("p",null,[h,Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[k]),_:1})]),Object(c["i"])("article",f,[Object(c["l"])(O,{name:"TimedActionLimit:","title-is":"h2"},{use:Object(c["Q"])(()=>[N,Object(c["l"])(j,{code:"import { TimedActionLimit } from mousse-ui/tool/lib"})]),default:Object(c["Q"])(()=>[w,Object(c["l"])(O,{name:"Args:","title-is":"h3"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[p]),_:1}),Q,v]),Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[_]),_:1}),C,Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[E]),_:1})]),Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[g]),_:1}),x,Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[T]),_:1})])]),_:1}),Object(c["l"])(O,{name:"methos:","title-is":"h3"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[y]),_:1}),A]),Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[I]),_:1}),S]),Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[P]),_:1}),L])]),_:1})]),_:1}),U,Object(c["l"])(s,{title:"TimedActionLimit",code:e.code},{header:Object(c["Q"])(()=>[Object(c["l"])(d,{"for-id":"demo-wcd-control"},{text:Object(c["Q"])(()=>[Object(c["k"])(Object(c["I"])(e.wcd?"阻塞式等待":"动态等待"),1)]),control:Object(c["Q"])(()=>[Object(c["l"])(a,{id:"demo-wcd-control",modelValue:e.wcd,"onUpdate:modelValue":t[0]||(t[0]=t=>e.wcd=t)},null,8,["modelValue"])]),_:1})]),default:Object(c["Q"])(()=>[Object(c["i"])("div",null,[Object(c["i"])("div",{class:Object(c["r"])(b.cooldownProgressClass),id:"demo-cooldown-progress"},[Object(c["l"])(u,{X:"center"},{default:Object(c["Q"])(()=>[Object(c["k"])(Object(c["I"])(e.text),1)]),_:1})],2),Object(c["l"])(r,{id:"demo-show-click-conter",onClick:b.click,style:Object(c["s"])([{"user-select":"none"},{fontSize:0==e.clickConter?"1em":""}])},{default:Object(c["Q"])(()=>[Object(c["k"])(Object(c["I"])(0==e.clickConter?"ClickMe!!":e.clickConter),1)]),_:1},8,["onClick","style"])])]),_:1},8,["code"])])])}var D=l("3841"),J={name:"the-tool-lib",data:()=>({code:"//注意！code 示例为 demo 的简化版本\n//JavaScript\nlet clickConter = 0;\n// 控制是否等待冷却完成\nlet wcd = true;\nconst tal = new TimedActionLimit(2000,2,wcl);\n\ntal.setCooledAlarm(() => {\n    alert('Cooled!')\n    })\ntal.setOverheatAlarm(() => {\n    alert('Overheat!')\n    })\n\nfunction click() {\n    tal.action(()=>{\n        clickConter++;\n    })\n}\n\n//HTML\n<body>\n    <p onclick=\"click()\">{{ clickConter == 0? 'ClickMe!!':clickConter }}</p>\n</body>\n      ",clickConter:0,overheat:!1,text:"Cooled!",wcd:!0}),mounted(){},watch:{overheat(e){e&&setTimeout(()=>{this.overheat=!1,this.text="Cooling..."},1e3)}},methods:{click(){this.tal.action(()=>{this.clickConter++})}},computed:{cooldownProgressClass(){return[this.overheat?"overheat":"",!this.overheat&&this.clickConter>1?"cooling":""]},tal(){let e=new D["a"](2e3,2,this.wcd);return e.setCooledAlarm(()=>{this.text="Cooled!"}),e.setOverheatAlarm(()=>{this.overheat=!0,this.text="Overheat!"}),e}}},M=(l("3730"),l("b3f2")),z=l.n(M);const R=z()(J,[["render",V]]);var X=R;const $={id:"demo-scroll-to"},B=Object(c["i"])("h2",null,"scrollTo",-1),F=Object(c["i"])("br",null,null,-1),H=Object(c["i"])("p",null," 使用过渡动画滚动到指定元素。目标元素高度小于视窗高度时，滚动至其会居中至窗口中央，超出视窗高度则滚动至 “toTop” 定义的高度 ",-1),q=Object(c["k"])("elID:String"),G=Object(c["k"])(" 目标元素 id "),K=Object(c["k"])("toTop:Number"),W=Object(c["k"])(" 滚动至距离多少像素 ");function Y(e,t,l,o,n,b){const i=Object(c["E"])("c-highlighter"),O=Object(c["E"])("doc-item"),j=Object(c["E"])("m-code-box");return Object(c["w"])(),Object(c["h"])("article",$,[B,F,H,Object(c["l"])(O,{class:"no-dot",name:"参数"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[q]),_:1}),G]),Object(c["i"])("li",null,[Object(c["i"])("p",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[K]),_:1}),W])])]),_:1}),Object(c["l"])(O,{class:"no-dot",name:"使用"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",null,[Object(c["l"])(j,{code:e.code},null,8,["code"])])]),_:1})])}var Z={name:"the-tool-lib-dom",data:()=>({code:"import { scrollTo } from 'mousseUI/tool';\nscrollTo('#id1',100)"})};const ee=z()(Z,[["render",Y]]);var te=ee;const le={id:"demo-shadow-painter"},ce=Object(c["i"])("h2",null,"ShadowPainter",-1),oe=Object(c["i"])("p",null,"输出一个和 UI 界面统一样式的 css 阴影配置字符串",-1),ne=Object(c["k"])("direction:String"),be=Object(c["k"])(" top | bottom | left | right。 设置阴影的方向 "),ie=Object(c["k"])("intensity:Number"),Oe=Object(c["k"])(" 大于0的任意数字。设置阴影的强度 "),je=Object(c["k"])("color:String"),ae=Object(c["k"])(" 任意 css 支持的色彩编码。设置阴影色彩，不指定则使用默认阴影色彩 "),de=Object(c["i"])("label",{for:"shadow-intensity"},"阴影强度",-1);function ue(e,t,l,o,n,b){const i=Object(c["E"])("c-highlighter"),O=Object(c["E"])("doc-item"),j=Object(c["E"])("m-cube"),a=Object(c["E"])("m-row"),d=Object(c["E"])("demo-box"),u=Object(c["F"])("shadow");return Object(c["w"])(),Object(c["h"])("article",le,[ce,oe,Object(c["l"])(O,{"no-dot":"",name:"参数"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",null,[Object(c["i"])("p",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[ne]),_:1}),be])]),Object(c["i"])("li",null,[Object(c["i"])("p",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[ie]),_:1}),Oe])]),Object(c["i"])("li",null,[Object(c["i"])("p",null,[Object(c["l"])(i,null,{default:Object(c["Q"])(()=>[je]),_:1}),ae])])]),_:1}),Object(c["l"])(O,{"no-dot":"",name:"示例"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",null,[Object(c["l"])(d,{title:"shadowPainter",code:e.code,expand:""},{header:Object(c["Q"])(()=>[Object(c["i"])("p",null,[de,Object(c["R"])(Object(c["i"])("input",{style:{color:"black"},id:"shadow-intensity",type:"number","onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t)},null,512),[[c["N"],e.value]])])]),default:Object(c["Q"])(()=>[Object(c["l"])(a,{X:"center"},{default:Object(c["Q"])(()=>[Object(c["R"])((Object(c["w"])(),Object(c["f"])(j,{class:"demo-box"},{default:Object(c["Q"])(()=>[Object(c["k"])(" Intensity:"+Object(c["I"])(e.value),1)]),_:1})),[[u,e.value,"bottom"]])]),_:1})]),_:1},8,["code"])])]),_:1})])}var re={name:"demo-shadow-painter",data:()=>({value:15,code:"import { shadowPainter } from 'mousseUI/tool'\n// 渲染一个组件\nexport default {\n    render(){\n        return h('div',\n            {\n            style: {\n                boxShadow: shadowPainter('buttom', 15)\n            }\n        })\n    }\n}\n      "})};l("d4ee");const se=z()(re,[["render",ue]]);var me=se,he={mixins:[s["a"]],name:"the-demo-tools",components:{demoTal:X,demoScrollTo:te,demoShadowPainter:me},data:()=>({})};const ke=z()(he,[["render",r]]);t["default"]=ke}}]);
//# sourceMappingURL=chunk-8ccbe502.ffa6bbd7.js.map