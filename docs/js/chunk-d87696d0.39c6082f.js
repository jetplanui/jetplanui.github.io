(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d87696d0"],{"5fd2":function(e,t,d){var o=d("fe20");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=d("499e").default;a("5e296ae3",o,!0,{sourceMap:!1,shadowMode:!1})},"757d":function(e,t,d){"use strict";d("5fd2")},"7ba7":function(e,t,d){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},"826f":function(e,t,d){"use strict";d.r(t);var o=d("7a23");const a={id:"demo-pages"},c=Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("p",null,"mousseUI 提供一些预设的页面布局来进行快速页面设置")],-1),l=Object(o["createElementVNode"])("hr",null,null,-1),i={id:"p1-doc"},r=Object(o["createElementVNode"])("li",{id:"describes-p1"},[Object(o["createElementVNode"])("p",null,"上中下布局+侧栏，兼容移动设备"),Object(o["createElementVNode"])("p",null,"在移动设备宽度下侧栏由停靠转为浮动")],-1),n={id:"p1-props"},b={id:"props-model-value"},p=Object(o["createTextVNode"])("modelValue"),s=Object(o["createTextVNode"])(" : type - Boolean "),m=Object(o["createElementVNode"])("p",null,"用于绑定值，控制侧边栏开/关",-1),u={id:"p1-event"},j={id:"event-update-model-value"},O=Object(o["createTextVNode"])(" @update-model-value "),h=Object(o["createTextVNode"])(" : type - Boolean "),V=Object(o["createElementVNode"])("p",null,"更新绑定值",-1),N={id:"p1-slots"},v={id:"p1-slots-header"},x=Object(o["createTextVNode"])(":header"),f=Object(o["createTextVNode"])(" - 顶部浮动栏插槽 "),w={id:"p1-slots-default"},g=Object(o["createTextVNode"])(":default"),E=Object(o["createTextVNode"])(" - 正文插槽 "),C={id:"p1-slots-footer"},_=Object(o["createTextVNode"])(":footer"),M=Object(o["createTextVNode"])(" - 页脚插槽 "),k={id:"p1-slots-sidebar"},T=Object(o["createTextVNode"])(":sidebar"),y=Object(o["createTextVNode"])(" - 侧栏插槽 "),B=Object(o["createElementVNode"])("div",{id:"p1-sidebar"},null,-1),D=Object(o["createElementVNode"])("div",{id:"p1-header"},null,-1),z=Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div"),Object(o["createElementVNode"])("div"),Object(o["createElementVNode"])("div")],-1),S=Object(o["createElementVNode"])("div",null,null,-1);function J(e,t,d,J,X,H){const $=Object(o["resolveComponent"])("doc-item"),I=Object(o["resolveComponent"])("c-highlighter"),L=Object(o["resolveComponent"])("j-col"),U=Object(o["resolveComponent"])("j-transition-slide"),q=Object(o["resolveComponent"])("j-row"),A=Object(o["resolveComponent"])("demo-box"),F=Object(o["resolveDirective"])("re-screen-size");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])($,{id:"describes","title-is":"h2",name:"预设页面布局:","no-dot":""},{default:Object(o["withCtx"])(()=>[c]),_:1}),l,Object(o["createElementVNode"])("div",i,[Object(o["createVNode"])($,{"title-is":"h2",name:"预设1："},{default:Object(o["withCtx"])(()=>[r,Object(o["createElementVNode"])("li",n,[Object(o["createVNode"])($,{name:"props"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("li",b,[Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(I,null,{default:Object(o["withCtx"])(()=>[p]),_:1}),s]),m])]),_:1})]),Object(o["createElementVNode"])("li",u,[Object(o["createVNode"])($,{name:"Event:"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("li",j,[Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(I,null,{default:Object(o["withCtx"])(()=>[O]),_:1}),h]),V])]),_:1})]),Object(o["createElementVNode"])("li",N,[Object(o["createVNode"])($,{name:"Slots"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("li",v,[Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(I,null,{default:Object(o["withCtx"])(()=>[x]),_:1}),f])]),Object(o["createElementVNode"])("li",w,[Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(I,null,{default:Object(o["withCtx"])(()=>[g]),_:1}),E])]),Object(o["createElementVNode"])("li",C,[Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(I,null,{default:Object(o["withCtx"])(()=>[_]),_:1}),M])]),Object(o["createElementVNode"])("li",k,[Object(o["createElementVNode"])("p",null,[Object(o["createVNode"])(I,null,{default:Object(o["withCtx"])(()=>[T]),_:1}),y])])]),_:1})])]),_:1}),Object(o["createVNode"])(A,{id:"p1-demo",code:e.code,expand:!0,title:"预设1"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(q,{X:"center"},{default:Object(o["withCtx"])(()=>[Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createBlock"])(q,{id:"p1",class:Object(o["normalizeClass"])(H.demoClass)},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(U,{position:"left"},{default:Object(o["withCtx"])(()=>[Object(o["withDirectives"])(Object(o["createVNode"])(L,{id:"left",col:4},{default:Object(o["withCtx"])(()=>[B]),_:1},512),[[o["vShow"],!e.demoMobileMode]])]),_:1}),Object(o["createVNode"])(L,{id:"right"},{default:Object(o["withCtx"])(()=>[D,Object(o["createVNode"])(q,{X:"center",id:"p1-main"},{default:Object(o["withCtx"])(()=>[z]),_:1}),Object(o["createVNode"])(q,{X:"center",id:"p1-footer"},{default:Object(o["withCtx"])(()=>[S]),_:1})]),_:1})]),_:1},8,["class"])),[[F,H.setDemoMobileMode]])]),_:1})]),_:1},8,["code"])])])}var X=d("7ba7"),H={mixins:[X["a"]],name:"demo-pages",data:()=>({demoMobileMode:!1,code:'\n// Javascript\nlet expandSidebar = true;\n// HTML\n<body>\n    <j-pages v-mode="expandSidebar">\n        <template slot:header>\n            Header\n        </template>\n        <template slot:default>\n            default\n        </template>\n        <template slot:footer>\n            footer\n        </template>\n        <template slot:sidebar>\n            sidebar\n        </template>\n    </j-pages>\n</body>'}),methods:{setDemoMobileMode(e,t){-1!==["xs"].indexOf(t.activeCol)?this.demoMobileMode=!0:this.demoMobileMode=!1}},computed:{demoClass(){return[this.demoMobileMode?"mobile-mode":""]}}},$=(d("757d"),d("6b0d")),I=d.n($);const L=I()(H,[["render",J]]);t["default"]=L},fe20:function(e,t,d){var o=d("24fb");t=o(!1),t.push([e.i,"#p1{transition:all .4s var(--ease-in-out);border-radius:var(--m-radius);background:var(--foreground);box-sizing:border-box;overflow:hidden;width:400px}#p1.mobile-mode{width:220px}#p1 #left,#p1 #right{padding:10px;height:200px}#p1 #right{padding-left:unset;width:100%}#p1.mobile-mode #right{padding:10px}#p1 #p1-sidebar{height:100%}#p1 #p1-sidebar,#p1-header{border-radius:var(--m-radius);background:var(--primary)}#p1-header{height:20%}#p1-main{height:calc(60% - 10px);background:unset;margin-top:10px}#p1-footer>div,#p1-main>div{background:var(--background);box-sizing:border-box;padding:10px;height:100%;width:50%}#p1-main>div{border-radius:var(--m-radius) var(--m-radius) 0 0}#p1-footer>div{border-top:solid 1px var(--border);border-radius:0 0 var(--m-radius) var(--m-radius)}#p1-main>div>:first-child,#p1-main>div>:nth-child(2),#p1-main>div>:nth-child(3){border-radius:var(--m-radius);background:var(--text-hint);margin-top:5px;height:8px}#p1-main>div>:nth-child(2),#p1-main>div>:nth-child(3){height:5px;width:80%}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-d87696d0.39c6082f.js.map