(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73f87269"],{"19bc":function(e,t,l){"use strict";l("52be")},"52be":function(e,t,l){},"61ed":function(e,t,l){"use strict";l.r(t);var c=l("5037");const i={id:"demo-pages"},b=Object(c["i"])("li",null,[Object(c["i"])("p",null,"mousseUI 提供一些预设的页面布局来进行快速页面设置")],-1),d=Object(c["i"])("hr",null,null,-1),O={id:"p1-doc"},o=Object(c["i"])("li",{id:"describes-p1"},[Object(c["i"])("p",null,"上中下布局+侧栏，兼容移动设备"),Object(c["i"])("p",null,"在移动设备宽度下侧栏由停靠转为浮动")],-1),j={id:"p1-props"},n={id:"props-model-value"},a=Object(c["k"])("modelValue"),u=Object(c["k"])(" : type - Boolean "),s=Object(c["i"])("p",null,"用于绑定值，控制侧边栏开/关",-1),p={id:"p1-event"},m={id:"event-update-model-value"},r=Object(c["k"])(" @update-model-value "),f=Object(c["k"])(" : type - Boolean "),h=Object(c["i"])("p",null,"更新绑定值",-1),v={id:"p1-slots"},Q={id:"p1-slots-header"},_=Object(c["k"])(":header"),k=Object(c["k"])(" - 顶部浮动栏插槽 "),M={id:"p1-slots-default"},w=Object(c["k"])(":default"),g=Object(c["k"])(" - 正文插槽 "),x={id:"p1-slots-footer"},E=Object(c["k"])(":footer"),y=Object(c["k"])(" - 页脚插槽 "),C={id:"p1-slots-sidebar"},J=Object(c["k"])(":sidebar"),S=Object(c["k"])(" - 侧栏插槽 "),X={id:"p1-demo"},B=Object(c["i"])("div",{id:"p1-sidebar"},null,-1),D=Object(c["i"])("div",{id:"p1-header"},null,-1),H=Object(c["i"])("div",null,[Object(c["i"])("div"),Object(c["i"])("div"),Object(c["i"])("div")],-1),R=Object(c["i"])("div",null,null,-1);function $(e,t,l,$,z,F){const I=Object(c["E"])("doc-item"),L=Object(c["E"])("c-highlighter"),T=Object(c["E"])("m-col"),U=Object(c["E"])("m-transition-slide"),V=Object(c["E"])("m-row"),q=Object(c["E"])("demo-box"),A=Object(c["F"])("re-screen-size");return Object(c["w"])(),Object(c["h"])("div",i,[Object(c["l"])(I,{id:"describes","title-is":"h2",name:"预设页面布局:","no-dot":""},{default:Object(c["Q"])(()=>[b]),_:1}),d,Object(c["i"])("div",O,[Object(c["l"])(I,{"title-is":"h2",name:"预设1："},{default:Object(c["Q"])(()=>[o,Object(c["i"])("li",j,[Object(c["l"])(I,{name:"props"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",n,[Object(c["i"])("p",null,[Object(c["l"])(L,null,{default:Object(c["Q"])(()=>[a]),_:1}),u]),s])]),_:1})]),Object(c["i"])("li",p,[Object(c["l"])(I,{name:"Event:"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",m,[Object(c["i"])("p",null,[Object(c["l"])(L,null,{default:Object(c["Q"])(()=>[r]),_:1}),f]),h])]),_:1})]),Object(c["i"])("li",v,[Object(c["l"])(I,{name:"Slots"},{default:Object(c["Q"])(()=>[Object(c["i"])("li",Q,[Object(c["i"])("p",null,[Object(c["l"])(L,null,{default:Object(c["Q"])(()=>[_]),_:1}),k])]),Object(c["i"])("li",M,[Object(c["i"])("p",null,[Object(c["l"])(L,null,{default:Object(c["Q"])(()=>[w]),_:1}),g])]),Object(c["i"])("li",x,[Object(c["i"])("p",null,[Object(c["l"])(L,null,{default:Object(c["Q"])(()=>[E]),_:1}),y])]),Object(c["i"])("li",C,[Object(c["i"])("p",null,[Object(c["l"])(L,null,{default:Object(c["Q"])(()=>[J]),_:1}),S])])]),_:1})]),Object(c["i"])("li",X,[Object(c["l"])(q,{code:e.code,expand:!0,title:"预设1"},{default:Object(c["Q"])(()=>[Object(c["l"])(V,{X:"center"},{default:Object(c["Q"])(()=>[Object(c["R"])((Object(c["w"])(),Object(c["f"])(V,{id:"p1",class:Object(c["r"])(F.demoClass)},{default:Object(c["Q"])(()=>[Object(c["l"])(U,{position:"left"},{default:Object(c["Q"])(()=>[Object(c["R"])(Object(c["l"])(T,{id:"left",col:4},{default:Object(c["Q"])(()=>[B]),_:1},512),[[c["O"],!e.demoMobileMode]])]),_:1}),Object(c["l"])(T,{id:"right"},{default:Object(c["Q"])(()=>[D,Object(c["l"])(V,{X:"center",id:"p1-main"},{default:Object(c["Q"])(()=>[H]),_:1}),Object(c["l"])(V,{X:"center",id:"p1-footer"},{default:Object(c["Q"])(()=>[R]),_:1})]),_:1})]),_:1},8,["class"])),[[A,F.setDemoMobileMode]])]),_:1})]),_:1},8,["code"])])]),_:1})])])}var z=l("ba87"),F={mixins:[z["a"]],name:"demo-pages",data:()=>({demoMobileMode:!1,code:'\n// Javascript\nlet expandSidebar = true;\n// HTML\n<body>\n    <m-pages v-mode="expandSidebar">\n        <template slot:header>\n            Header\n        </template>\n        <template slot:default>\n            default\n        </template>\n        <template slot:footer>\n            footer\n        </template>\n        <template slot:sidebar>\n            sidebar\n        </template>\n    </m-pages>\n</body>'}),methods:{setDemoMobileMode(e,t){-1!==["xs"].indexOf(t.activeCol)?this.demoMobileMode=!0:this.demoMobileMode=!1}},computed:{demoClass(){return[this.demoMobileMode?"mobile-mode":""]}}},I=(l("19bc"),l("b3f2")),L=l.n(I);const T=L()(F,[["render",$]]);t["default"]=T},ba87:function(e,t,l){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}}}]);
//# sourceMappingURL=chunk-73f87269.cf85faaa.js.map