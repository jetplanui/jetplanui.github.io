(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-152e2288"],{"091f":function(e,t,c){var l=c("24fb");t=l(!1),t.push([e.i,".j-cube.light{color:inherit}",""]),e.exports=t},3094:function(e,t,c){"use strict";c.r(t);var l=c("7a23");const b=Object(l["i"])("h2",null,"指令",-1),n=Object(l["i"])("p",null,"这里是组件库预定的一些快捷指令，希望对你有所帮助。",-1),o=Object(l["i"])("br",null,null,-1),j=Object(l["i"])("hr",null,null,-1),i=Object(l["i"])("br",null,null,-1),u=Object(l["i"])("hr",null,null,-1),O=Object(l["i"])("br",null,null,-1),a=Object(l["i"])("hr",null,null,-1),r=Object(l["i"])("br",null,null,-1),d=Object(l["i"])("hr",null,null,-1),s=Object(l["i"])("br",null,null,-1);function f(e,t,c,f,v,h){const p=Object(l["E"])("demo-directives-focus"),m=Object(l["E"])("demo-directives-scroll-to"),w=Object(l["E"])("demo-directives-shadow"),k=Object(l["E"])("demo-directives-re-screen-size"),g=Object(l["E"])("demo-directives-auto-color");return Object(l["w"])(),Object(l["h"])("div",null,[b,n,o,Object(l["l"])(p),j,i,Object(l["l"])(m),u,O,Object(l["l"])(w),a,r,Object(l["l"])(k),d,s,Object(l["l"])(g)])}var v=c("7ba7");const h={id:"focus"},p=Object(l["i"])("p",null,"判断操作是否聚焦于某个元素。",-1),m={id:"v-focus-value"},w=Object(l["k"])('="value"'),k=Object(l["k"])(" : type - Function "),g=Object(l["i"])("p",null,"接受一个无参数回调函数，会在点击元素外时执行回调",-1);function x(e,t,c,b,n,o){const j=Object(l["E"])("high-lighter"),i=Object(l["E"])("doc-item"),u=Object(l["E"])("j-cube"),O=Object(l["E"])("j-row"),a=Object(l["E"])("demo-box"),r=Object(l["F"])("focus");return Object(l["w"])(),Object(l["h"])("article",h,[Object(l["l"])(i,{name:"v-focus:","title-is":"h2"},{default:Object(l["Q"])(()=>[p,Object(l["i"])("li",m,[Object(l["l"])(i,{name:"Value："},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[w]),_:1}),k]),g])]),_:1})])]),_:1}),Object(l["l"])(a,{title:"v-focus",code:e.code},{default:Object(l["Q"])(()=>[Object(l["l"])(O,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{onClick:t[0]||(t[0]=()=>{e.value=!0}),style:{width:"150px",padding:"0 10px"}},{default:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(e.value?"NowClickOutside":"NowClickMe"),1)]),_:1})),[[r,o.onblur]])]),_:1})]),_:1},8,["code"])])}var _={name:"demo-directives-focus",data:()=>({code:"\n// Script\nfunction onblur () {\n    this.value = false;\n};\n//Html\n<j-cube v-focus=\"onblur\" @click=\"() => {value = true}\" 1>\n    {{ value ? 'NowClickOutside' : 'NowClickMe' }}\n</j-cube>\n",value:!1}),methods:{onblur(){this.value=!1}}},Q=c("6b0d"),y=c.n(Q);const E=y()(_,[["render",x]]);var z=E;const S={id:"scroll-to"},M=Object(l["k"])('="value"'),R=Object(l["k"])(" : type - Number "),D=Object(l["i"])("p",null," 传入任意数字作为参数,这个参数将在要滚动到的对象高度超出屏幕时启用，作用是设置滚动到元素时元素顶部距离屏幕的距离 ",-1),T=Object(l["k"])(":args"),C=Object(l["i"])("p",null,"传入任意元素 id",-1),N=Object(l["i"])("p",null," 当元素高度小于视窗高度时，滚动到该元素将会把该元素至于视窗中央。当元素高度大于视窗高度时将会把元素头部滚动至视窗顶部。 在元素高度大于视窗时，会将元素滚动至 “value” 中指定的距离屏幕顶部的高度。 ",-1),F={id:"scroll-controll"},I=Object(l["k"])(" 滚动至大于屏幕高度元素,定义顶部距离视窗200px "),H=Object(l["k"])(" 滚动至小于屏幕高度元素 "),V=Object(l["k"])(" 滚动至大于屏幕高度元素,未定义顶部距离视窗位置 "),J=Object(l["k"])(" 100px "),L=Object(l["k"])(" 120vh "),X=Object(l["k"])(" 120vh ");function U(e,t,c,b,n,o){const j=Object(l["E"])("high-lighter"),i=Object(l["E"])("doc-item"),u=Object(l["E"])("j-button"),O=Object(l["E"])("j-cube"),a=Object(l["E"])("j-col"),r=Object(l["E"])("j-row"),d=Object(l["E"])("demo-box"),s=Object(l["F"])("scroll-to");return Object(l["w"])(),Object(l["h"])("article",S,[Object(l["l"])(i,{name:"v-scroll-to:","title-is":"h2"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[M]),_:1}),R]),D]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[T]),_:1})]),C])]),_:1}),N,Object(l["i"])("div",F,[Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{row:"",tag:"a"},{default:Object(l["Q"])(()=>[I]),_:1})),[[s,"#cube1","120"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{row:"",tag:"a"},{default:Object(l["Q"])(()=>[H]),_:1})),[[s,"#cube2"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(u,{row:"",tag:"a"},{default:Object(l["Q"])(()=>[V]),_:1})),[[s,"#cube3"]])]),Object(l["l"])(d,{title:"v-scroll-to",code:e.code},{default:Object(l["Q"])(()=>[Object(l["l"])(r,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(a,{style:{width:"100px"}},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(O,{id:"cube2",style:{height:"100px",background:"var(--warning)"}},{default:Object(l["Q"])(()=>[J]),_:1})),[[s,"#scroll-controll"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(O,{id:"cube1",style:{height:"120vh"}},{default:Object(l["Q"])(()=>[L]),_:1})),[[s,"#scroll-controll"]]),Object(l["R"])((Object(l["w"])(),Object(l["f"])(O,{id:"cube3",style:{height:"120vh",background:"var(--error)"}},{default:Object(l["Q"])(()=>[X]),_:1})),[[s,"#scroll-controll"]])]),_:1})]),_:1})]),_:1},8,["code"])])}var $={name:"the-demo-directives-scroll-to",data:()=>({code:'// HTML\n<body>\n    <j-button tag=\'a\' v-scroll-to:120="\'#cube1\'">\n        滚动至大于屏幕高度元素,定义顶部距离视窗200px\n    </j-button>\n    <j-button tag=\'a\' v-scroll-to="#cube2\'">\n        滚动至小于屏幕高度元素\n    </j-button>\n    <j-button tag=\'a\' v-scroll-to="\'#cube3\'">\n        滚动至大于屏幕高度元素,未定义顶部距离视窗位置\n    </j-button>\n    <j-row X=\'center\'>\n        <j-col style="width:100px">\n            <j-cube id="cube1" style="height:120vh">120vh</j-cube>\n            <j-cube id="cube2" style="height:100px">100px</j-cube>\n            <j-cube id="cube3" style="height:120vh">120vh</j-cube>\n        </j-col>\n    </j-row>\n</body>'})};const A=y()($,[["render",U]]);var Y=A;const q={id:"shadow"},B=Object(l["k"])(":arg"),G=Object(l["k"])(" : range - top | nottom | left | right "),K=Object(l["k"])('="value"'),P=Object(l["k"])(" : type - Number, range - 1~30 "),W=Object(l["k"])(" 设置阴影强度,建议1~30,最大值可超过30 "),Z=Object(l["i"])("label",{for:"shadow-intensity"},[Object(l["i"])("span",null,"阴影强度")],-1);function ee(e,t,c,b,n,o){const j=Object(l["E"])("high-lighter"),i=Object(l["E"])("doc-item"),u=Object(l["E"])("j-row"),O=Object(l["E"])("j-card"),a=Object(l["E"])("j-cube"),r=Object(l["E"])("demo-box"),d=Object(l["F"])("shadow");return Object(l["w"])(),Object(l["h"])("article",q,[Object(l["l"])(i,{name:"v-shadow:","title-is":"h2"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[B]),_:1}),G])]),Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[K]),_:1}),P]),W])]),_:1}),Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[Object(l["l"])(u,{spaceMode:"between",Y:"center"},{default:Object(l["Q"])(()=>[Z,Object(l["R"])(Object(l["i"])("input",{id:"shadow-intensity",type:"number","onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t)},null,512),[[l["N"],e.value]])]),_:1})]),_:1}),Object(l["l"])(r,{title:"v-shaow",code:e.code},{default:Object(l["Q"])(()=>[Object(l["l"])(u,{X:"center"},{default:Object(l["Q"])(()=>[Object(l["R"])((Object(l["w"])(),Object(l["f"])(a,{class:"demo-box"},{default:Object(l["Q"])(()=>[Object(l["k"])(" Intensity:"+Object(l["I"])(e.value),1)]),_:1})),[[d,e.value,"bottom"]])]),_:1})]),_:1},8,["code"])])}var te={name:"v-shaow",data:()=>({code:'\n// Javascript\nlet value = 10;\n// HTML\n<body>\n    <style>\n        .demo-box {\n            background: var(--foreground) !important;\n            color: var(--text) !important;\n            height: 200px;\n            width: 150px;\n            border: unset;\n        }\n    </style>\n    <j-cube class="demo-box" v-shadow:bottom="value" >\n        Intensity:{{value}}\n    </j-cube>\n</body>',value:"10"})};c("8aba");const ce=y()(te,[["render",ee]]);var le=ce;const be={id:"re-screen-size"},ne=Object(l["k"])('="value"'),oe=Object(l["k"])(" : type - Function(el,reSizeObj) "),je=Object(l["i"])("p",null," 接受一个有参数回调函数，当屏幕尺寸发生变动时（旋转屏幕或调节窗口大小），函数将会被调用 ",-1),ie={id:"re-screen-size-value-callback-el"},ue=Object(l["k"])("el"),Oe=Object(l["k"])(" : type - Element "),ae=Object(l["i"])("p",null,"指令所在的元素",-1),re={id:"re-screen-size-value-callback-reSizeObj"},de=Object(l["k"])("reSizeObj"),se=Object(l["k"])(" : type - Object "),fe=Object(l["i"])("p",null,"包含了当前视窗尺寸信息的对象",-1),ve=Object(l["i"])("p",null,"reSizeObj 包含信息",-1),he={id:"resize-obj-width"},pe=Object(l["k"])("width"),me=Object(l["k"])(" : type - Number "),we=Object(l["i"])("p",null,"当前屏幕可视宽度，单位为 “px”",-1),ke={id:"resize-obj-col"},ge=Object(l["k"])("col"),xe=Object(l["k"])(" : type - Obj "),_e=Object(l["i"])("p",null," 包含所有屏幕宽度范围的对象，对应屏幕宽度的属性将会被设置为true ",-1),Qe=Object(l["k"])(" 类似这样： "),ye={id:"resize-obj-active-col"},Ee=Object(l["k"])("activeCol"),ze=Object(l["k"])(' : type - String, range - [ "xs", "sm", "md", "lg","xl"] '),Se=Object(l["i"])("p",null,"当前屏幕宽度所属范围",-1);function Me(e,t,c,b,n,o){const j=Object(l["E"])("high-lighter"),i=Object(l["E"])("j-code-box"),u=Object(l["E"])("doc-item"),O=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])("article",be,[Object(l["l"])(u,{name:"v-re-screen-size:","title-is":"h2"},{default:Object(l["Q"])(()=>[Object(l["i"])("li",null,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[ne]),_:1}),oe]),je]),Object(l["i"])("li",ie,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[ue]),_:1}),Oe]),ae]),Object(l["i"])("li",re,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[de]),_:1}),se]),fe,Object(l["l"])(u,{name:"reSizeObj:","title-is":"h3"},{default:Object(l["Q"])(()=>[ve,Object(l["i"])("li",he,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[pe]),_:1}),me]),we]),Object(l["i"])("li",ke,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[ge]),_:1}),xe]),_e,Object(l["i"])("p",null,[Qe,Object(l["l"])(i,{code:"{xs: false, sm: false, md: false, lg: false, xl: true}"})])]),Object(l["i"])("li",ye,[Object(l["i"])("p",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[Ee]),_:1}),ze]),Se])]),_:1})])]),_:1}),Object(l["l"])(O,{title:"v-re-screen-size",code:e.code,expand:!0},null,8,["code"])])}var Re={name:"re-screen-size",data:()=>({code:"// javascript\nfunction test(el,screenSizeInfo){\n    console.log(el);\n    console.log(screenSizeInfo);\n};\n// HTML\n<body>\n    <div v-reScreenSize=screenSizeInfo ></div>\n</body>"})};const De=y()(Re,[["render",Me]]);var Te=De;const Ce={id:"auto-color"},Ne=Object(l["i"])("p",null,"自动控制元素文本色彩，在明/暗两色之间自动切换，用于主题的自适应设计",-1),Fe=Object(l["i"])("p",null," 自动切换的文本色彩需预先在主题中设置。被控制的元素必须已设置了背景色，否则指令不会生效，子元素如无背景色可将指令设置到父元素 ",-1),Ie=Object(l["i"])("hr",null,null,-1),He=Object(l["k"])(" 切换色彩 "),Ve=Object(l["k"])("Test Text");function Je(e,t,c,b,n,o){const j=Object(l["E"])("doc-item"),i=Object(l["E"])("j-switch"),u=Object(l["E"])("j-control-bar"),O=Object(l["E"])("j-cube"),a=Object(l["E"])("demo-box"),r=Object(l["F"])("auto-color");return Object(l["w"])(),Object(l["h"])("article",Ce,[Object(l["l"])(j,{name:"v-auto-color:","title-is":"h2"},{default:Object(l["Q"])(()=>[Ne,Fe]),_:1}),Ie,Object(l["l"])(a,{title:"v-auto-color",code:n.code,expand:""},{default:Object(l["Q"])(()=>[Object(l["i"])("div",null,[Object(l["l"])(u,{"for-id":"color-switch"},{text:Object(l["Q"])(()=>[He]),default:Object(l["Q"])(()=>[Object(l["l"])(i,{id:"color-switch",modelValue:n.dark,"onUpdate:modelValue":t[0]||(t[0]=e=>n.dark=e)},null,8,["modelValue"])]),_:1}),Object(l["R"])((Object(l["w"])(),Object(l["f"])(O,{class:Object(l["r"])(["light"]),dark:n.dark},{default:Object(l["Q"])(()=>[Ve]),_:1},8,["dark"])),[[r]])])]),_:1},8,["code"])])}var Le={name:"the-demo-auto-color",data(){return{dark:!1,code:'\n//JavaScript\nlet dark = false;\n// HTML\n<j-control-bar for-id="color-switch">\n    <template v-slot:text> 切换色彩 </template>\n    <j-switch id="color-switch" v-model="dark" />\n</j-control-bar>\n<div v-auto-color :class="[!dark?\'light\':\'\']">Test Text</div>\n// CSS\ndiv{\n    background:#000\n}\ndiv{\n    background:#fff\n}\n      '}}};c("baae");const Xe=y()(Le,[["render",Je]]);var Ue=Xe,$e={mixins:[v["a"]],name:"the-demo-directives",components:{DemoDirectivesFocus:z,DemoDirectivesScrollTo:Y,DemoDirectivesShadow:le,DemoDirectivesAutoColor:Ue,DemoDirectivesReScreenSize:Te},data:()=>({})};const Ae=y()($e,[["render",f]]);t["default"]=Ae},"5ffb":function(e,t,c){var l=c("6619");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var b=c("499e").default;b("3cc57702",l,!0,{sourceMap:!1,shadowMode:!1})},6619:function(e,t,c){var l=c("24fb");t=l(!1),t.push([e.i,".demo-box{background:var(--foreground)!important;color:var(--text)!important;height:200px;width:150px;border:unset}",""]),e.exports=t},"7ba7":function(e,t,c){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},"8aba":function(e,t,c){"use strict";c("5ffb")},abf7:function(e,t,c){var l=c("091f");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var b=c("499e").default;b("507cd120",l,!0,{sourceMap:!1,shadowMode:!1})},baae:function(e,t,c){"use strict";c("abf7")}}]);
//# sourceMappingURL=chunk-152e2288.63b09109.js.map