"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[53],{53:function(e,d,l){l.r(d),l.d(d,{default:function(){return R}});var i=l(3396),t=l(9242);const o={id:"the-demo-sidebar"},a=(0,i._)("li",null,[(0,i._)("p",null,"用于在屏幕两侧展示内容")],-1),n=(0,i._)("hr",null,null,-1),r={id:"doc"},s={id:"props"},u={id:"prop-mode-value"},p=(0,i.Uk)("modelValue"),m=(0,i.Uk)(" :type - Boolean, default - false "),h=(0,i._)("p",null,"用于参数绑定，控制侧栏开关",-1),w={id:"propo-dock"},c=(0,i.Uk)("dock"),b=(0,i.Uk)(" :type - Boolean, default - false "),f=(0,i._)("p",null," 设置为 true 将停靠于设置位置，点击非侧栏中内容时将不响应关闭动作 ",-1),_={id:"prop-right"},g=(0,i.Uk)("right"),k=(0,i.Uk)(" :type - Boolean, default - false "),S=(0,i._)("p",null,"设置侧栏在屏幕左/右，默认左侧",-1),y=(0,i.Uk)("开启侧栏"),v=(0,i.Uk)("停靠于右侧"),U=(0,i.Uk)(" 测试内容 ");function W(e,d,l,W,j,x){const I=(0,i.up)("doc-item"),R=(0,i.up)("high-lighter"),V=(0,i.up)("j-switch"),B=(0,i.up)("j-control-bar"),C=(0,i.up)("demo-box"),M=(0,i.up)("j-sidebar"),D=(0,i.Q2)("focus");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(I,{id:"describes","title-is":"h2",name:"侧边栏："},{default:(0,i.w5)((()=>[a])),_:1}),n,(0,i._)("div",r,[(0,i.Wm)(I,{"title-is":"h2",name:"<j-sidebar>："},{default:(0,i.w5)((()=>[(0,i._)("li",s,[(0,i.Wm)(I,{name:"props:"},{default:(0,i.w5)((()=>[(0,i._)("li",u,[(0,i._)("p",null,[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[p])),_:1}),m]),h]),(0,i._)("li",w,[(0,i._)("p",null,[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[c])),_:1}),b]),f]),(0,i._)("li",_,[(0,i._)("p",null,[(0,i.Wm)(R,null,{default:(0,i.w5)((()=>[g])),_:1}),k]),S])])),_:1})])])),_:1})]),(0,i._)("div",{onClick:d[2]||(d[2]=(0,t.iM)((()=>{}),["stop"]))},[(0,i.Wm)(B,{"for-id":"demo-sidebar-switch"},{text:(0,i.w5)((()=>[y])),default:(0,i.w5)((()=>[(0,i.Wm)(V,{id:"demo-sidebar-switch",modelValue:e.demoShowSidebar,"onUpdate:modelValue":d[0]||(d[0]=d=>e.demoShowSidebar=d)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(B,{"for-id":"demo-sideber-display-in-right"},{text:(0,i.w5)((()=>[v])),default:(0,i.w5)((()=>[(0,i.Wm)(V,{id:"demo-sideber-display-in-right",modelValue:e.displayInRight,"onUpdate:modelValue":d[1]||(d[1]=d=>e.displayInRight=d)},null,8,["modelValue"])])),_:1})]),(0,i.Wm)(C,{title:"<j-sidebar>",code:e.code,expand:!0},null,8,["code"]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(M,{style:{width:"320px"},right:e.displayInRight,expand:e.demoShowSidebar},{default:(0,i.w5)((()=>[U])),_:1},8,["right","expand"])),[[D,x.close]])])}var j={name:"the-demo-sidebar",data:()=>({code:'\n\n\t//Javascript\n\tlet demoShowSidebar =  true;\n\tlet displayInRight = true;\n\t// HTML\n\t<j-switch id="demo-sideber-display-in-right" v-model="displayInRight" />\n\t<j-switch id="demo-sideber-switch" v-model="demoShowSidebar" />\n\t<j-sidebar :right="displayInRight" v-model="demoShowSidebar">\n\t测试内容\n\t</j-sidebar>\n\t                ',demoShowSidebar:!1,displayInRight:!0}),methods:{close(){this.demoShowSidebar=!1}}},x=l(89);const I=(0,x.Z)(j,[["render",W]]);var R=I}}]);
//# sourceMappingURL=53.4b82d961.js.map