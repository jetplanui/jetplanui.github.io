(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-307388af"],{"2b80":function(e,t,c){"use strict";c("b8db")},b8db:function(e,t,c){},ba87:function(e,t,c){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},f4da:function(e,t,c){"use strict";c.r(t);var l=c("5037");const b=Object(l["i"])("h2",null,"指令",-1),n=Object(l["i"])("p",null,"这里是组件库预定的一些快捷指令，希望对你有所帮助。",-1),i=Object(l["i"])("br",null,null,-1),j=Object(l["i"])("hr",null,null,-1),O=Object(l["i"])("br",null,null,-1),o=Object(l["i"])("hr",null,null,-1),u=Object(l["i"])("br",null,null,-1),d=Object(l["i"])("hr",null,null,-1),a=Object(l["i"])("br",null,null,-1);function r(e,t,c,r,s,m){const v=Object(l["E"])("demo-directives-focus"),h=Object(l["E"])("demo-directives-scroll-to"),f=Object(l["E"])("demo-directives-shadow"),p=Object(l["E"])("demo-directives-re-screen-size");return Object(l["w"])(),Object(l["h"])("div",null,[b,n,i,Object(l["l"])(v),j,O,Object(l["l"])(h),o,u,Object(l["l"])(f),d,a,Object(l["l"])(p)])}var s=c("ba87");const m={id:"focus"},v=Object(l["i"])("p",null,"判断操作是否聚焦于某个元素。",-1),h={id:"v-focus-value"},f=Object(l["k"])('="value"'),p=Object(l["k"])(" : type - Function "),w=Object(l["i"])("p",null,"接受一个无参数回调函数，会在点击元素外时执行回调",-1);function k(e,t,c,b,n,i){const j=Object(l["E"])("c-highlighter"),O=Object(l["E"])("doc-item"),o=Object(l["E"])("m-cube"),u=Object(l["E"])("m-row"),d=Object(l["E"])("demo-box"),a=Object(l["F"])("focus");return Object(l["w"])(),Object(l["h"])("article",m,[Object(l["l"])(O,{name:"v-focus:","title-is":"h2"},{default:Object(l["Q"])(()=>[v,Object(l["i"])("li",h,[Object(l["l"])(O,{name:"Value："},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[f]),_:1}),p]),w])]),_:1})])]),_:1}),Object(l["l"])(d,{title:"v-focus",code:e.code},{default:Object(l["Q"])(()=>[Object(l["l"])(u,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(o,{style:{width:"150px",padding:"0 10px"}},{default:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(e.value?"NowClickOutside":"NowClickMe"),1)]),_:1})),[[a,i.onblur]])]),_:1})]),_:1},8,["code"])])}var g={name:"demo-directives-focus",data:()=>({code:'// Script\nfunction onblur (v) {\n    this.value = v;\n};\n\n\n// Style\n<style>\n    .demo-cube{\n        style="width:150px;\n        padding:0 10px;\n    }\n</style>\n\n\n//Html\n<body>\n    <div class="demo-cube" v-focus="onblur">\n        {{value?\'NowClickOutside\':"NowClickMe"}}\n    </div>\n</body>\n\n',value:!1}),methods:{onblur(e){this.value=e}}},y=c("b3f2"),Q=c.n(y);const _=Q()(g,[["render",k]]);var x=_;const E={id:"scroll-to"},z=Object(l["k"])('="value"'),S=Object(l["k"])(" : type - Number "),R=Object(l["i"])("p",null," 传入任意数字作为参数,这个参数将在要滚动到的对象高度超出屏幕时启用，作用是设置滚动到元素时元素顶部距离屏幕的距离 ",-1),D=Object(l["k"])(":args"),N=Object(l["i"])("p",null,"传入任意元素 id",-1),I=Object(l["i"])("p",null," 当元素高度小于视窗高度时，滚动到该元素将会把该元素至于视窗中央。当元素高度大于视窗高度时将会把元素头部滚动至视窗顶部。 在元素高度大于视窗时，会将元素滚动至 “value” 中指定的距离屏幕顶部的高度。 ",-1),F={id:"scroll-controll"},C=Object(l["k"])(" 滚动至大于屏幕高度元素,定义顶部距离视窗200px "),M=Object(l["k"])(" 滚动至小于屏幕高度元素 "),H=Object(l["k"])(" 滚动至大于屏幕高度元素,未定义顶部距离视窗位置 "),T=Object(l["k"])(" 100px "),X=Object(l["k"])(" 120vh "),J=Object(l["k"])(" 120vh ");function L(e,t,c,b,n,i){const j=Object(l["E"])("c-highlighter"),O=Object(l["E"])("doc-item"),o=Object(l["E"])("m-button"),u=Object(l["E"])("m-cube"),d=Object(l["E"])("m-col"),a=Object(l["E"])("m-row"),r=Object(l["E"])("demo-box"),s=Object(l["F"])("scroll-to");return Object(l["w"])(),Object(l["h"])("article",E,[Object(l["l"])(O,{name:"v-scroll-to:","title-is":"h2"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[z]),_:1}),S]),R]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[D]),_:1})]),N])]),_:1}),I,Object(l["l"])(r,{title:"v-scroll-to",code:e.code},{header:Object(l["Q"])(()=>[Object(l["i"])("div",F,[Object(l["R"])((Object(l["w"])(),Object(l["f"])(o,{tag:"a"},{default:Object(l["Q"])(()=>[C]),_:1})),[[s,"#cube1","120"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(o,{tag:"a"},{default:Object(l["Q"])(()=>[M]),_:1})),[[s,"#cube2"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(o,{tag:"a"},{default:Object(l["Q"])(()=>[H]),_:1})),[[s,"#cube3"]])])]),default:Object(l["Q"])(()=>[Object(l["l"])(a,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(d,{style:{width:"100px"}},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{id:"cube2",style:{height:"100px",background:"var(--warning)"}},{default:Object(l["Q"])(()=>[T]),_:1})),[[s,"#scroll-controll"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{id:"cube1",style:{height:"120vh"}},{default:Object(l["Q"])(()=>[X]),_:1})),[[s,"#scroll-controll"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{id:"cube3",style:{height:"120vh",background:"var(--error)"}},{default:Object(l["Q"])(()=>[J]),_:1})),[[s,"#scroll-controll"]])]),_:1})]),_:1})]),_:1},8,["code"])])}var V={name:"the-demo-directives-scroll-to",data:()=>({code:'// HTML\n<body>\n    <m-button tag=\'a\' v-scroll-to:120="\'#cube1\'">\n        滚动至大于屏幕高度元素,定义顶部距离视窗200px\n    </m-button>\n    <m-button tag=\'a\' v-scroll-to="#cube2\'">\n        滚动至小于屏幕高度元素\n    </m-button>\n    <m-button tag=\'a\' v-scroll-to="\'#cube3\'">\n        滚动至大于屏幕高度元素,未定义顶部距离视窗位置\n    </m-button>\n    <m-row X=\'center\'>\n        <m-col style="width:100px">\n            <m-cube id="cube1" style="height:120vh">120vh</m-cube>\n            <m-cube id="cube2" style="height:100px">100px</m-cube>\n            <m-cube id="cube3" style="height:120vh">120vh</m-cube>\n        </m-col>\n    </m-row>\n</body>'})};const $=Q()(V,[["render",L]]);var U=$;const q={id:"shadow"},A=Object(l["k"])(":arg"),B=Object(l["k"])(" : range - top | nottom | left | right "),G=Object(l["k"])('="value"'),K=Object(l["k"])(" : type - Number, range - 1~30 "),P=Object(l["k"])(" 设置阴影强度,建议1~30,最大值可超过30 "),W=Object(l["i"])("label",{for:"shadow-intensity"},"阴影强度",-1);function Y(e,t,c,b,n,i){const j=Object(l["E"])("c-highlighter"),O=Object(l["E"])("doc-item"),o=Object(l["E"])("m-cube"),u=Object(l["E"])("m-row"),d=Object(l["E"])("demo-box"),a=Object(l["F"])("shadow");return Object(l["w"])(),Object(l["h"])("article",q,[Object(l["l"])(O,{name:"v-shadow:","title-is":"h2"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[A]),_:1}),B])]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[G]),_:1}),K]),P])]),_:1}),Object(l["l"])(d,{title:"v-shaow",code:e.code},{header:Object(l["Q"])(()=>[Object(l["i"])("p",null,[W,Object(l["R"])(Object(l["i"])("input",{id:"shadow-intensity",type:"number","onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t)},null,512),[[l["N"],e.value]])])]),default:Object(l["Q"])(()=>[Object(l["l"])(u,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(o,{class:"demo-box"},{default:Object(l["Q"])(()=>[Object(l["k"])(" Intensity:"+Object(l["I"])(e.value),1)]),_:1})),[[a,e.value,"bottom"]])]),_:1})]),_:1},8,["code"])])}var Z={name:"v-shaow",data:()=>({code:'\n// Javascript\nlet value = 10;\n// HTML\n<body>\n    <style>\n        .demo-box {\n            background: var(--foreground) !important;\n            color: var(--text) !important;\n            height: 200px;\n            width: 150px;\n            border: unset;\n        }\n    </style>\n    <m-cube class="demo-box" v-shadow:bottom="value" >\n        Intensity:{{value}}\n    </m-cube>\n</body>',value:"10"})};c("2b80");const ee=Q()(Z,[["render",Y]]);var te=ee;const ce={id:"re-screen-size"},le=Object(l["k"])('="value"'),be=Object(l["k"])(" : type - Function(el,reSizeObj) "),ne=Object(l["i"])("p",null," 接受一个有参数回调函数，当屏幕尺寸发生变动时（旋转屏幕或调节窗口大小），函数将会被调用 ",-1),ie={id:"re-screen-size-value-callback-el"},je=Object(l["k"])("el"),Oe=Object(l["k"])(" : type - Element "),oe=Object(l["i"])("p",null,"指令所在的元素",-1),ue={id:"re-screen-size-value-callback-reSizeObj"},de=Object(l["k"])("reSizeObj"),ae=Object(l["k"])(" : type - Object "),re=Object(l["i"])("p",null,"包含了当前视窗尺寸信息的对象",-1),se=Object(l["i"])("p",null,"reSizeObj 包含信息",-1),me={id:"resize-obj-width"},ve=Object(l["k"])("width"),he=Object(l["k"])(" : type - Number "),fe=Object(l["i"])("p",null,"当前屏幕可视宽度，单位为 “px”",-1),pe={id:"resize-obj-col"},we=Object(l["k"])("col"),ke=Object(l["k"])(" : type - Obj "),ge=Object(l["i"])("p",null," 包含所有屏幕宽度范围的对象，对应屏幕宽度的属性将会被设置为true ",-1),ye=Object(l["k"])(" 类似这样： "),Qe={id:"resize-obj-active-col"},_e=Object(l["k"])("activeCol"),xe=Object(l["k"])(' : type - String, range - [ "xs", "sm", "md", "lg","xl"] '),Ee=Object(l["i"])("p",null,"当前屏幕宽度所属范围",-1);function ze(e,t,c,b,n,i){const j=Object(l["E"])("c-highlighter"),O=Object(l["E"])("m-code-box"),o=Object(l["E"])("doc-item"),u=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])("article",ce,[Object(l["l"])(o,{name:"v-re-screen-size:","title-is":"h2"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[le]),_:1}),be]),ne]),Object(l["i"])("li",ie,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[je]),_:1}),Oe]),oe]),Object(l["i"])("li",ue,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[de]),_:1}),ae]),re,Object(l["l"])(o,{name:"reSizeObj:","title-is":"h3"},{default:Object(l["Q"])(()=>[se,Object(l["i"])("li",me,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[ve]),_:1}),he]),fe]),Object(l["i"])("li",pe,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[we]),_:1}),ke]),ge,Object(l["i"])("p",null,[ye,Object(l["l"])(O,{code:"{xs: false, sm: false, md: false, lg: false, xl: true}"})])]),Object(l["i"])("li",Qe,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[_e]),_:1}),xe]),Ee])]),_:1})])]),_:1}),Object(l["l"])(u,{title:"v-re-screen-size",code:e.code,expand:!0},null,8,["code"])])}var Se={name:"re-screen-size",data:()=>({code:"// javascript\nfunction test(el,screenSizeInfo){\n    console.log(el);\n    console.log(screenSizeInfo);\n};\n// HTML\n<body>\n    <div v-reScreenSize=screenSizeInfo ></div>\n</body>"})};const Re=Q()(Se,[["render",ze]]);var De=Re,Ne={mixins:[s["a"]],name:"the-demo-directives",components:{DemoDirectivesFocus:x,DemoDirectivesScrollTo:U,DemoDirectivesShadow:te,DemoDirectivesReScreenSize:De},data:()=>({})};const Ie=Q()(Ne,[["render",r]]);t["default"]=Ie}}]);
//# sourceMappingURL=chunk-307388af.3aaa0959.js.map