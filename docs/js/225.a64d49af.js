(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[225],{8553:function(e,l,n){"use strict";n.r(l);var t=n(8081),o=n.n(t),u=n(3645),a=n.n(u),r=a()(o());r.push([e.id,"",""]),l["default"]=r},4874:function(e,l,n){"use strict";n.r(l);var t=n(8081),o=n.n(t),u=n(3645),a=n.n(u),r=a()(o());r.push([e.id,".demo-box{background:var(--white)!important;color:var(--text-dark)!important;height:200px;width:150px;border:unset}",""]),l["default"]=r},7608:function(e,l){"use strict";l["Z"]={mounted(){this.$emit("md-title",this.$route.name)}}},9225:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return Y}});var t=n(3396);const o=(0,t._)("h1",null,"指令",-1),u=(0,t._)("p",null,"这里是组件库预定的一些快捷指令，希望对你有所帮助。",-1),a=(0,t._)("hr",null,null,-1),r=(0,t._)("br",null,null,-1),d=(0,t._)("br",null,null,-1),i=(0,t._)("br",null,null,-1);function c(e,l,n,c,s,m){const v=(0,t.up)("demo-directives-focus"),p=(0,t.up)("demo-directives-shadow"),h=(0,t.up)("demo-directives-re-screen-size"),f=(0,t.up)("demo-directives-auto-color");return(0,t.wg)(),(0,t.iD)("div",null,[o,u,a,(0,t.Wm)(v),r,(0,t.Wm)(p),d,(0,t.Wm)(h),i,(0,t.Wm)(f)])}var s=n(7608),m=n(7139);const v={id:"focus"},p=(0,t._)("p",null,"判断操作是否聚焦于某个元素。",-1),h=(0,t._)("hr",null,null,-1),f=(0,t.Uk)(' ="function()=>{CallBack}"'),w=(0,t._)("p",null,"接受一个无参数回调函数，会在点击元素外时执行回调",-1);function _(e,l,n,o,u,a){const r=(0,t.up)("high-lighter"),d=(0,t.up)("doc-item"),i=(0,t.up)("j-cube"),c=(0,t.up)("j-row"),s=(0,t.up)("demo-box"),_=(0,t.Q2)("focus");return(0,t.wg)(),(0,t.iD)("article",v,[(0,t.Wm)(d,{name:"v-focus:",tag:"h2"},{default:(0,t.w5)((()=>[p,h,(0,t.Wm)(d,{name:"Value:"},{default:(0,t.w5)((()=>[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[f])),_:1})]),w])])])),_:1})])),_:1}),(0,t.Wm)(s,{title:"v-focus"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{X:"center"},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{onClick:l[0]||(l[0]=()=>{e.value=!0}),style:{width:"200px",padding:"0 10px"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,m.zw)(e.value?"NowClickOutside":"NowClickMe"),1)])),_:1})),[[_,a.onblur]])])),_:1})])),_:1}),(0,t.Wm)(s,{title:"Html",code:'\n<div\n    style="height=100px;width=100px;background=red;"\n    @click="onClick"\n    v-focus="onblur"\n    >\n    <p>Test</p>\n</div>'}),(0,t.Wm)(s,{title:"Script",code:"\nexport default{\n    data(){\n        return {\n            value:false\n        }\n    },\n    methods:{\n        onClick(){\n            this.value=true;\n        },\n        onblur(){\n            this.value=false;\n        }\n    }\n}\n        "})])}var g={name:"demo-directives-focus",data:()=>({value:!1}),methods:{onblur(){this.value=!1}}},k=n(89);const x=(0,k.Z)(g,[["render",_]]);var b=x;const W={id:"shadow"},C=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"Arg:")]),(0,t._)("p",null,"range - top | button | left | right")]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("strong",null,"Value:")]),(0,t._)("p",null,": type - Number, range - 1~30"),(0,t.Uk)(" 设置阴影强度,建议1~30,最大值可超过30 ")])],-1),j=(0,t.Uk)("Checkbox");function D(e,l,n,o,u,a){const r=(0,t.up)("doc-item"),d=(0,t.up)("j-slider"),i=(0,t.up)("j-control-bar"),c=(0,t.up)("j-cube"),s=(0,t.up)("j-row"),v=(0,t.up)("demo-box"),p=(0,t.Q2)("shadow");return(0,t.wg)(),(0,t.iD)("article",W,[(0,t.Wm)(r,{name:"v-shadow:",tag:"h2"},{default:(0,t.w5)((()=>[C])),_:1}),(0,t.Wm)(i,{active:!1,"for-id":"demo-checkbox"},{text:(0,t.w5)((()=>[j])),default:(0,t.w5)((()=>[(0,t.Wm)(d,{max:30,modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(v,{title:"v-shadow"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{X:"center"},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(c,{class:"demo-box"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Intensity:"+(0,m.zw)(e.value),1)])),_:1})),[[p,e.value,"bottom"]])])),_:1})])),_:1}),(0,t.Wm)(v,{title:"Html",code:'\n<div\n    style="height=100px;width=100px;background=red;"\n    v-shadow:bottom="value"\n    >\n    <p>Test</p>\n</div>\n        '}),(0,t.Wm)(v,{title:"Script",code:"\nexport default{\n    data(){\n        return {\n            value:10\n        }\n    },\n}\n        "})])}var y={name:"v-shadow",data:()=>({value:10})};n(4668);const U=(0,k.Z)(y,[["render",D]]);var S=U;const V={id:"re-screen-size"},z=(0,t._)("p",null,[(0,t._)("strong",null,"Value:")],-1),Z=(0,t.Uk)(' ="function(el,value)=>{CallBack}" '),M=(0,t._)("p",null," 接受一个有参数回调函数，当屏幕尺寸发生变动时（旋转屏幕或调节窗口大小），函数将会被调用 ",-1),T=(0,t._)("h3",{class:"text-hint"},"参数详解：",-1),B=(0,t.Uk)("尝试改变屏幕宽度你将能看见关于屏幕宽度的提示，在控制台中能看见相应的输出");function A(e,l,n,o,u,a){const r=(0,t.up)("high-lighter"),d=(0,t.up)("j-code-box"),i=(0,t.up)("doc-item"),c=(0,t.up)("demo-box"),s=(0,t.up)("info-text"),m=(0,t.Q2)("re-screen-size");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("article",V,[(0,t.Wm)(i,{name:"v-re-screen-size:",tag:"h2"},{default:(0,t.w5)((()=>[(0,t._)("ul",null,[(0,t._)("li",null,[z,(0,t._)("p",null,[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[Z])),_:1})]),M])]),T,(0,t.Wm)(d,{code:'\n// CallBack Function\n(el, Value)=>{\n    el // 元素节点\n    value // 屏幕参数信息\n\n    console.log(value)\n}\n\n>>---------Console----------\n>>  {\n        "activeCol": "xl", // 当前所处的屏幕宽度范围.\n        "width": 1407, // 当前屏幕宽度/px\n        "height": 1002, // 当前屏幕高度/px\n        "col": { // 当前所处的屏幕宽度范围\n            "xs": false,\n            "sm": false,\n            "md": false,\n            "lg": false,\n            "xl": true\n        }\n        // 验证屏幕宽度是否在指定的范围中\n        function contains(\n            Array, // 包含宽度字符的序列，例如 ["xl", "lg"]\n            (Boolean)=>{CallBack} // 当前屏幕宽度在以上序列中时回调值为 true\n        )\n    }\n                    '})])),_:1}),(0,t.Wm)(c,{title:"Html",code:'<div v-re-screen-size="callBack">Test</div>'}),(0,t.Wm)(c,{title:"Script",code:"\nexport default{\n    methods:{\n        callBack(el,value){\n            console.log(el)\n            console.log(value)\n        }\n    }\n}\n        "}),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[B])),_:1})])),[[m,a.log]])}var H={name:"re-screen-size",data:()=>({oldCol:void 0}),methods:{log(e,l){this.oldCol!=l.activeCol&&(this.$jetAlert.info(`Screen Col - ${l.activeCol}`,1500),console.log(l)),this.oldCol=l.activeCol}}};const Q=(0,k.Z)(H,[["render",A]]);var $=Q;const N={id:"auto-color"},F=(0,t._)("h2",null,"v-auto-color:",-1),X=(0,t._)("p",null," 自动控制元素文本色彩，在明/暗两色之间自动切换，用于主题的自适应设计 ",-1),I=(0,t._)("p",null," 被控制的元素必须已设置了背景色，否则指令不会生效，子元素如无背景色可将指令设置到父元素 ",-1),J=(0,t._)("hr",null,null,-1),L=(0,t.Uk)(" 切换色彩 "),O=(0,t.Uk)(" Test Text ");function R(e,l,n,o,u,a){const r=(0,t.up)("j-switch"),d=(0,t.up)("j-control-bar"),i=(0,t.up)("j-cube"),c=(0,t.up)("demo-box"),s=(0,t.Q2)("auto-color");return(0,t.wg)(),(0,t.iD)("article",N,[F,X,I,J,(0,t.Wm)(c,{title:"v-auto-color",code:u.code,expand:""},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(d,{"for-id":"color-switch"},{text:(0,t.w5)((()=>[L])),default:(0,t.w5)((()=>[(0,t.Wm)(r,{id:"color-switch",modelValue:u.dark,"onUpdate:modelValue":l[0]||(l[0]=e=>u.dark=e)},null,8,["modelValue"])])),_:1}),(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{class:"light",dark:u.dark},{default:(0,t.w5)((()=>[O])),_:1},8,["dark"])),[[s]])])])),_:1},8,["code"])])}var q={name:"the-demo-auto-color",data(){return{dark:!1,code:'\n//JavaScript\nlet dark = false;\n// HTML\n<j-control-bar for-id="color-switch">\n    <template v-slot:text> 切换色彩 </template>\n    <j-switch id="color-switch" v-model="dark" />\n</j-control-bar>\n<div v-auto-color :class="[!dark?\'light\':\'\']">Test Text</div>\n// CSS\ndiv{\n    background:#000\n}\ndiv{\n    background:#fff\n}\n      '}}};n(5715);const E=(0,k.Z)(q,[["render",R]]);var G=E,K={mixins:[s.Z],name:"the-demo-directives",components:{DemoDirectivesFocus:b,DemoDirectivesShadow:S,DemoDirectivesAutoColor:G,DemoDirectivesReScreenSize:$},data:()=>({})};const P=(0,k.Z)(K,[["render",c]]);var Y=P},5715:function(e,l,n){var t=n(8553);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=n(7037).Z;o("f759a13a",t,!0,{sourceMap:!1,shadowMode:!1})},4668:function(e,l,n){var t=n(4874);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=n(7037).Z;o("60b72a3e",t,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=225.a64d49af.js.map