(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf54"],{8435:function(e,t,d){"use strict";d.r(t);var i=d("7a23");const l={id:"the-demo-sidebar"},c=Object(i["i"])("li",null,[Object(i["i"])("p",null,"用于在屏幕两侧展示内容")],-1),b=Object(i["i"])("hr",null,null,-1),o={id:"doc"},a={id:"props"},j={id:"prop-mode-value"},n=Object(i["k"])("modelValue"),O=Object(i["k"])(" :type - Boolean, default - false "),s=Object(i["i"])("p",null,"用于参数绑定，控制侧栏开关",-1),r={id:"propo-dock"},u=Object(i["k"])("dock"),h=Object(i["k"])(" :type - Boolean, default - false "),p=Object(i["i"])("p",null," 设置为 true 将停靠于设置位置，点击非侧栏中内容时将不响应关闭动作 ",-1),m={id:"prop-right"},f=Object(i["k"])("right"),w=Object(i["k"])(" :type - Boolean, default - false "),g=Object(i["i"])("p",null,"设置侧栏在屏幕左/右，默认左侧",-1),S=Object(i["k"])("开启侧栏"),k=Object(i["k"])("停靠于右侧"),y=Object(i["k"])(" 测试内容 ");function Q(e,t,d,Q,v,_){const R=Object(i["E"])("doc-item"),x=Object(i["E"])("high-lighter"),I=Object(i["E"])("j-switch"),V=Object(i["E"])("j-control-bar"),E=Object(i["E"])("demo-box"),B=Object(i["E"])("j-sidebar"),J=Object(i["F"])("focus");return Object(i["w"])(),Object(i["h"])("div",l,[Object(i["l"])(R,{id:"describes","title-is":"h2",name:"侧边栏："},{default:Object(i["Q"])(()=>[c]),_:1}),b,Object(i["i"])("div",o,[Object(i["l"])(R,{"title-is":"h2",name:"<j-sidebar>："},{default:Object(i["Q"])(()=>[Object(i["i"])("li",a,[Object(i["l"])(R,{name:"props:"},{default:Object(i["Q"])(()=>[Object(i["i"])("li",j,[Object(i["i"])("p",null,[Object(i["l"])(x,null,{default:Object(i["Q"])(()=>[n]),_:1}),O]),s]),Object(i["i"])("li",r,[Object(i["i"])("p",null,[Object(i["l"])(x,null,{default:Object(i["Q"])(()=>[u]),_:1}),h]),p]),Object(i["i"])("li",m,[Object(i["i"])("p",null,[Object(i["l"])(x,null,{default:Object(i["Q"])(()=>[f]),_:1}),w]),g])]),_:1})])]),_:1})]),Object(i["i"])("div",{onClick:t[2]||(t[2]=Object(i["S"])(()=>{},["stop"]))},[Object(i["l"])(V,{"for-id":"demo-sidebar-switch"},{text:Object(i["Q"])(()=>[S]),default:Object(i["Q"])(()=>[Object(i["l"])(I,{id:"demo-sidebar-switch",modelValue:e.demoShowSidebar,"onUpdate:modelValue":t[0]||(t[0]=t=>e.demoShowSidebar=t)},null,8,["modelValue"])]),_:1}),Object(i["l"])(V,{"for-id":"demo-sideber-display-in-right"},{text:Object(i["Q"])(()=>[k]),default:Object(i["Q"])(()=>[Object(i["l"])(I,{id:"demo-sideber-display-in-right",modelValue:e.displayInRight,"onUpdate:modelValue":t[1]||(t[1]=t=>e.displayInRight=t)},null,8,["modelValue"])]),_:1})]),Object(i["l"])(E,{title:"<j-sidebar>",code:e.code,expand:!0},null,8,["code"]),Object(i["R"])((Object(i["w"])(),Object(i["f"])(B,{style:{width:"320px"},right:e.displayInRight,expand:e.demoShowSidebar},{default:Object(i["Q"])(()=>[y]),_:1},8,["right","expand"])),[[J,_.close]])])}var v={name:"the-demo-sidebar",data:()=>({code:'\n\n\t//Javascript\n\tlet demoShowSidebar =  true;\n\tlet displayInRight = true;\n\t// HTML\n\t<j-switch id="demo-sideber-display-in-right" v-model="displayInRight" />\n\t<j-switch id="demo-sideber-switch" v-model="demoShowSidebar" />\n\t<j-sidebar :right="displayInRight" v-model="demoShowSidebar">\n\t测试内容\n\t</j-sidebar>\n\t                ',demoShowSidebar:!1,displayInRight:!0}),methods:{close(){this.demoShowSidebar=!1}}},_=d("6b0d"),R=d.n(_);const x=R()(v,[["render",Q]]);t["default"]=x}}]);
//# sourceMappingURL=chunk-2d0ddf54.5e111922.js.map