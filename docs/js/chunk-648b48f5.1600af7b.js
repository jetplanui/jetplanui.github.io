(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-648b48f5"],{"3a67":function(e,t,c){var l=c("24fb");t=l(!1),t.push([e.i,"#fade .animation-box{height:100px}",""]),e.exports=t},"78bf":function(e,t,c){"use strict";c.r(t);var l=c("7a23");const i=Object(l["i"])("h2",null,"动画组件",-1),o=Object(l["i"])("p",null,"使用动画组件可以快速使自定义组件拥有与设计风格统一的风格。",-1),a=Object(l["k"])(" 使用前请参考官方 "),n=Object(l["k"])("Transition 文档"),b=Object(l["k"])(" 。 "),d=Object(l["i"])("br",null,null,-1),j=Object(l["i"])("br",null,null,-1),O=Object(l["i"])("br",null,null,-1);function u(e,t,c,u,r,s){const f=Object(l["E"])("j-button"),m=Object(l["E"])("demo-animation-fade"),p=Object(l["E"])("demo-animation-slide"),v=Object(l["E"])("demo-animation-folded");return Object(l["w"])(),Object(l["h"])("div",null,[i,o,Object(l["i"])("p",null,[a,Object(l["l"])(f,{text:"",tag:"a"},{default:Object(l["Q"])(()=>[n]),_:1}),b]),d,Object(l["l"])(m),j,Object(l["l"])(p),O,Object(l["l"])(v)])}var r=c("7ba7");const s=Object(l["i"])("h2",null,"淡出淡入",-1),f=Object(l["k"])(" ClickMe "),m=Object(l["i"])("p",null,"Fade",-1);function p(e,t,c,i,o,a){const n=Object(l["E"])("j-button"),b=Object(l["E"])("j-control-bar"),d=Object(l["E"])("j-cube"),j=Object(l["E"])("j-transition-fade"),O=Object(l["E"])("j-row"),u=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])(l["a"],null,[s,Object(l["l"])(b,{"for-id":"re-fade-value"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(o.value?"淡出":"淡入"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(n,{id:"re-fade-value",onClick:t[0]||(t[0]=()=>{o.value=!o.value})},{default:Object(l["Q"])(()=>[f]),_:1})]),_:1}),Object(l["l"])(u,{title:"淡出淡入",code:o.code,id:"fade"},{default:Object(l["Q"])(()=>[Object(l["l"])(O,{class:"animation-box",X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["l"])(d,null,{default:Object(l["Q"])(()=>[m]),_:1},512),[[l["O"],o.value]])]),_:1})]),_:1})]),_:1},8,["code"])],64)}var v={name:"animation-fade",data(){return{value:!0,code:'<j-transition-fade>\n    <j-cube v-show="value">\n        <p>Fade</p>\n    </j-cube>\n</j-transition-fade>'}}},h=(c("a2d7"),c("6b0d")),Q=c.n(h);const _=Q()(v,[["render",p]]);var w=_;const k=Object(l["i"])("h2",null,"滑入滑出",-1),x=Object(l["k"])(" ClickMe "),y=Object(l["k"])("同时应用 Fade 效果"),E={id:"slider-animation-group"},g={class:"deom-item"},M=Object(l["k"])("To top"),T={class:"deom-item"},C=Object(l["k"])("To right"),F={class:"deom-item"},R=Object(l["k"])("To left"),S={class:"deom-item"},A=Object(l["k"])("To bottom"),D=Object(l["i"])("p",null,"禁用透明效果适用于元素在屏幕或其他元素边缘进出可视范围使用",-1),I=Object(l["i"])("p",null,"Transition-Slide 组件接口:",-1),V=Object(l["i"])("div",{style:{"overflow-x":"scroll"}},[Object(l["i"])("table",{style:{width:"768px"}},[Object(l["i"])("tr",{"space-mode":"between"},[Object(l["i"])("td",null,"名称"),Object(l["i"])("td",null,"功能"),Object(l["i"])("td",null,"参数类型"),Object(l["i"])("td",null,"可选值"),Object(l["i"])("td",null,"默认")]),Object(l["i"])("tr",{"space-mode":"between"},[Object(l["i"])("td",null,"position"),Object(l["i"])("td",null,"定义滑动方向"),Object(l["i"])("td",null,"String"),Object(l["i"])("td",null,'["left", "right", "top", "bottom"]'),Object(l["i"])("td",null,"--")]),Object(l["i"])("tr",{"space-mode":"between"},[Object(l["i"])("td",null,"opacity"),Object(l["i"])("td",null,"在过渡中是否启用淡出/入效果"),Object(l["i"])("td",null,"Boolean"),Object(l["i"])("td",null,"true/false"),Object(l["i"])("td",null,"true")])])],-1);function X(e,t,c,i,o,a){const n=Object(l["E"])("j-button"),b=Object(l["E"])("j-control-bar"),d=Object(l["E"])("j-switch"),j=Object(l["E"])("j-cube"),O=Object(l["E"])("j-transition-slide"),u=Object(l["E"])("j-row"),r=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])(l["a"],null,[k,Object(l["l"])(b,{"for-id":"re-slide-value"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(o.value?"滑出":"滑入"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(n,{id:"re-slide-value",onClick:t[0]||(t[0]=()=>{o.value=!o.value})},{default:Object(l["Q"])(()=>[x]),_:1})]),_:1}),Object(l["l"])(b,{"for-id":"re-opacity-value"},{text:Object(l["Q"])(()=>[y]),default:Object(l["Q"])(()=>[Object(l["l"])(d,{id:"re-opacity-value",modelValue:o.opacity,"onUpdate:modelValue":t[1]||(t[1]=e=>o.opacity=e)},null,8,["modelValue"])]),_:1}),Object(l["l"])(r,{title:"滑入滑出",code:o.code,id:"slide"},{default:Object(l["Q"])(()=>[Object(l["i"])("div",E,[Object(l["l"])(u,{class:"demo-row",X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(O,{opacity:o.opacity,position:"top"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",g,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[M]),_:1})],512),[[l["O"],o.value]])]),_:1},8,["opacity"]),Object(l["l"])(O,{opacity:o.opacity,position:"right"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",T,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[C]),_:1})],512),[[l["O"],o.value]])]),_:1},8,["opacity"])]),_:1}),Object(l["l"])(u,{class:"demo-row",X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(O,{opacity:o.opacity,class:"deom-item",position:"left"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",F,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[R]),_:1})],512),[[l["O"],o.value]])]),_:1},8,["opacity"]),Object(l["l"])(O,{opacity:o.opacity,class:"deom-item",position:"bottom"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",S,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[A]),_:1})],512),[[l["O"],o.value]])]),_:1},8,["opacity"])]),_:1})])]),_:1},8,["code"]),D,I,V],64)}var J={name:"animation-slide",data(){return{value:!0,opacity:!0,code:'<j-transition-slide :opacity="true/false" position="top">\n    <div class="deom-item" v-show="value">\n    <j-cube>To top</j-cube>\n    </div>\n</j-transition-slide>'}}};c("f94d");const $=Q()(J,[["render",X]]);var z=$;const B=Object(l["i"])("h2",null,"折叠展开",-1),H=Object(l["k"])(" ClickMe "),L=Object(l["k"])("Folded");function U(e,t,c,i,o,a){const n=Object(l["E"])("j-button"),b=Object(l["E"])("j-control-bar"),d=Object(l["E"])("j-cube"),j=Object(l["E"])("j-transition-folded"),O=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])(l["a"],null,[B,Object(l["l"])(b,{"for-id":"re-folded-value"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(o.value?"折叠":"展开"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(n,{id:"re-folded-value",onClick:t[0]||(t[0]=()=>{o.value=!o.value})},{default:Object(l["Q"])(()=>[H]),_:1})]),_:1}),Object(l["l"])(O,{title:"折叠展开",code:o.code,id:"folded"},{default:Object(l["Q"])(()=>[Object(l["i"])("div",null,[Object(l["l"])(j,null,{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",null,[Object(l["l"])(d,null,{default:Object(l["Q"])(()=>[L]),_:1})],512),[[l["O"],o.value]])]),_:1})])]),_:1},8,["code"])],64)}var q={name:"animation-folded",data(){return{value:!0,code:'\n// HTML\n<j-transition-folded>\n    <div class="cube"></div>\n</j-transition-folded>\n\n// CSS\n.cube{\n    height: 100px;\n    width: 100px;\n}\n'}}};const G=Q()(q,[["render",U]]);var K=G,N={mixins:[r["a"]],name:"DemoAnimation",components:{DemoAnimationFade:w,DemoAnimationSlide:z,DemoAnimationFolded:K}};const P=Q()(N,[["render",u]]);var W=P;t["default"]=W},"7ba7":function(e,t,c){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},a2d7:function(e,t,c){"use strict";c("a99e")},a910:function(e,t,c){var l=c("f083");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var i=c("499e").default;i("6ad16c0b",l,!0,{sourceMap:!1,shadowMode:!1})},a99e:function(e,t,c){var l=c("3a67");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var i=c("499e").default;i("4dc72c88",l,!0,{sourceMap:!1,shadowMode:!1})},f083:function(e,t,c){var l=c("24fb");t=l(!1),t.push([e.i,".demo-row{height:100px}.deom-item .j-cube{font-size:14px}.deom-item+.deom-item{margin-left:5px}.demo-row+.demo-row{margin-top:5px}",""]),e.exports=t},f94d:function(e,t,c){"use strict";c("a910")}}]);
//# sourceMappingURL=chunk-648b48f5.1600af7b.js.map