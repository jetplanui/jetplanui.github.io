(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fd6d7aa"],{2085:function(e,t,c){"use strict";c.r(t);var l=c("5037");const i=Object(l["i"])("h2",null,"动画组件",-1),b=Object(l["i"])("p",null,"使用动画组件可以快速使自定义组件拥有与设计风格统一的风格。",-1),n=Object(l["k"])("使用前请参考官方"),o=Object(l["k"])("Transition 文档"),a=Object(l["k"])("。"),d=Object(l["i"])("br",null,null,-1),O=Object(l["i"])("br",null,null,-1),j=Object(l["i"])("br",null,null,-1);function u(e,t,c,u,r,m){const s=Object(l["E"])("m-button"),f=Object(l["E"])("demo-animation-fade"),v=Object(l["E"])("demo-animation-slide"),p=Object(l["E"])("demo-animation-folded");return Object(l["w"])(),Object(l["h"])("div",null,[i,b,Object(l["i"])("p",null,[n,Object(l["l"])(s,{text:"",tag:"a"},{default:Object(l["Q"])(()=>[o]),_:1}),a]),d,Object(l["l"])(f),O,Object(l["l"])(v),j,Object(l["l"])(p)])}var r=c("ba87");const m=Object(l["i"])("h2",null,"淡出淡入",-1),s=Object(l["k"])(" ClickMe "),f=Object(l["i"])("p",null,"Fade",-1);function v(e,t,c,i,b,n){const o=Object(l["E"])("m-button"),a=Object(l["E"])("m-control-bar"),d=Object(l["E"])("m-cube"),O=Object(l["E"])("m-transition-fade"),j=Object(l["E"])("m-row"),u=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])(l["a"],null,[m,Object(l["l"])(a,{"for-id":"re-fade-value"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(b.value?"淡出":"淡入"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(o,{id:"re-fade-value",onClick:t[0]||(t[0]=()=>{b.value=!b.value})},{default:Object(l["Q"])(()=>[s]),_:1})]),_:1}),Object(l["l"])(u,{title:"淡出淡入",code:b.code,id:"fade"},{default:Object(l["Q"])(()=>[Object(l["l"])(j,{class:"animation-box",X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["l"])(d,null,{default:Object(l["Q"])(()=>[f]),_:1},512),[[l["O"],b.value]])]),_:1})]),_:1})]),_:1},8,["code"])],64)}var p={name:"animation-fade",data(){return{value:!0,code:'<m-transition-fade>\n    <m-cube v-show="value">\n        <p>Fade</p>\n    </m-cube>\n</m-transition-fade>'}}},Q=(c("b73f"),c("b3f2")),_=c.n(Q);const k=_()(p,[["render",v]]);var w=k;const E=Object(l["i"])("h2",null,"滑入滑出",-1),y=Object(l["k"])(" ClickMe "),h=Object(l["k"])("同时应用 Fade 效果"),x={id:"slider-animation-group"},F={class:"deom-item"},T=Object(l["k"])("To top"),g={class:"deom-item"},C=Object(l["k"])("To right"),R={class:"deom-item"},A=Object(l["k"])("To left"),D={class:"deom-item"},I=Object(l["k"])("To bottom"),M=Object(l["i"])("p",null,"禁用透明效果适用于元素在屏幕或其他元素边缘进出可视范围使用",-1),S=Object(l["i"])("p",null,"Transition-Slide 组件接口:",-1),V=Object(l["i"])("div",{style:{"overflow-x":"scroll"}},[Object(l["i"])("table",{style:{width:"768px"}},[Object(l["i"])("tr",{"space-mode":"between"},[Object(l["i"])("td",null,"名称"),Object(l["i"])("td",null,"功能"),Object(l["i"])("td",null,"参数类型"),Object(l["i"])("td",null,"可选值"),Object(l["i"])("td",null,"默认")]),Object(l["i"])("tr",{"space-mode":"between"},[Object(l["i"])("td",null,"position"),Object(l["i"])("td",null,"定义滑动方向"),Object(l["i"])("td",null,"String"),Object(l["i"])("td",null,'["left", "right", "top", "bottom"]'),Object(l["i"])("td",null,"--")]),Object(l["i"])("tr",{"space-mode":"between"},[Object(l["i"])("td",null,"opacity"),Object(l["i"])("td",null,"在过渡中是否启用淡出/入效果"),Object(l["i"])("td",null,"Boolean"),Object(l["i"])("td",null,"true/false"),Object(l["i"])("td",null,"true")])])],-1);function X(e,t,c,i,b,n){const o=Object(l["E"])("m-button"),a=Object(l["E"])("m-control-bar"),d=Object(l["E"])("m-switch"),O=Object(l["E"])("m-cube"),j=Object(l["E"])("m-transition-slide"),u=Object(l["E"])("m-row"),r=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])(l["a"],null,[E,Object(l["l"])(a,{"for-id":"re-slide-value"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(b.value?"滑出":"滑入"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(o,{id:"re-slide-value",onClick:t[0]||(t[0]=()=>{b.value=!b.value})},{default:Object(l["Q"])(()=>[y]),_:1})]),_:1}),Object(l["l"])(a,{"for-id":"re-opacity-value"},{text:Object(l["Q"])(()=>[h]),default:Object(l["Q"])(()=>[Object(l["l"])(d,{id:"re-opacity-value",modelValue:b.opacity,"onUpdate:modelValue":t[1]||(t[1]=e=>b.opacity=e)},null,8,["modelValue"])]),_:1}),Object(l["l"])(r,{title:"滑入滑出",code:b.code,id:"slide"},{default:Object(l["Q"])(()=>[Object(l["i"])("div",x,[Object(l["l"])(u,{class:"demo-row",X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(j,{opacity:b.opacity,position:"top"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",F,[Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[T]),_:1})],512),[[l["O"],b.value]])]),_:1},8,["opacity"]),Object(l["l"])(j,{opacity:b.opacity,position:"right"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",g,[Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[C]),_:1})],512),[[l["O"],b.value]])]),_:1},8,["opacity"])]),_:1}),Object(l["l"])(u,{class:"demo-row",X:"center"},{default:Object(l["Q"])(()=>[Object(l["l"])(j,{opacity:b.opacity,class:"deom-item",position:"left"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",R,[Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[A]),_:1})],512),[[l["O"],b.value]])]),_:1},8,["opacity"]),Object(l["l"])(j,{opacity:b.opacity,class:"deom-item",position:"bottom"},{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["i"])("div",D,[Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[I]),_:1})],512),[[l["O"],b.value]])]),_:1},8,["opacity"])]),_:1})])]),_:1},8,["code"]),M,S,V],64)}var J={name:"animation-slide",data(){return{value:!0,opacity:!0,code:'<m-transition-slide :opacity="true/false" position="top">\n    <div class="deom-item" v-show="value">\n    <m-cube>To top</m-cube>\n    </div>\n</m-transition-slide>'}}};c("f364e");const $=_()(J,[["render",X]]);var B=$;const U=Object(l["i"])("h2",null,"折叠展开",-1),q=Object(l["k"])(" ClickMe "),z=Object(l["i"])("p",null,"Folded",-1);function G(e,t,c,i,b,n){const o=Object(l["E"])("m-button"),a=Object(l["E"])("m-control-bar"),d=Object(l["E"])("m-cube"),O=Object(l["E"])("m-transition-folded"),j=Object(l["E"])("demo-box");return Object(l["w"])(),Object(l["h"])(l["a"],null,[U,Object(l["l"])(a,{"for-id":"re-folded-value"},{text:Object(l["Q"])(()=>[Object(l["k"])(Object(l["I"])(b.value?"折叠":"展开"),1)]),default:Object(l["Q"])(()=>[Object(l["l"])(o,{id:"re-folded-value",onClick:t[0]||(t[0]=()=>{b.value=!b.value})},{default:Object(l["Q"])(()=>[q]),_:1})]),_:1}),Object(l["l"])(j,{title:"折叠展开",code:b.code,id:"folded"},{default:Object(l["Q"])(()=>[Object(l["i"])("div",null,[Object(l["l"])(O,null,{default:Object(l["Q"])(()=>[Object(l["R"])(Object(l["l"])(d,null,{default:Object(l["Q"])(()=>[z]),_:1},512),[[l["O"],b.value]])]),_:1})])]),_:1},8,["code"])],64)}var H={name:"animation-folded",data(){return{value:!0,code:'<m-transition-folded>\n    <div v-show="value">\n        <m-cube>\n        <p>Folded</p>\n        </m-cube>\n    </div>\n</m-transition-folded>'}}};const K=_()(H,[["render",G]]);var L=K,N={mixins:[r["a"]],name:"DemoAnimation",components:{DemoAnimationFade:w,DemoAnimationSlide:B,DemoAnimationFolded:L}};const P=_()(N,[["render",u]]);var W=P;t["default"]=W},"6b47":function(e,t,c){},b73f:function(e,t,c){"use strict";c("fdaa")},ba87:function(e,t,c){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}},f364e:function(e,t,c){"use strict";c("6b47")},fdaa:function(e,t,c){}}]);
//# sourceMappingURL=chunk-6fd6d7aa.5ad80310.js.map