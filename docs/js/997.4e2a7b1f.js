(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[997],{6774:function(e,l,t){"use strict";t.r(l);var a=t(8081),r=t.n(a),n=t(3645),i=t.n(n),d=i()(r());d.push([e.id,".demo-item{margin:0 10px}.demo-item>span{margin:5px}",""]),l["default"]=d},376:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return N}});var a=t(3396),r=t.p+"img/pexels-creative-vix-9754.85783d7a.jpg";const n=(0,a._)("h1",null,"Avater",-1),i=(0,a._)("p",null,"用于图形, 图标，头像",-1),d=(0,a._)("hr",null,null,-1),o={id:"avater-border"},u=(0,a.Uk)("border"),c=(0,a.Uk)(": type - Boolean, default - false "),s=(0,a._)("p",null,"关闭/开启 边框",-1),p={id:"avater-circle"},m=(0,a.Uk)("circle"),_=(0,a.Uk)(": type - Boolean, default - true "),v=(0,a._)("p",null,"切换 圆形/圆角矩形",-1),f={id:"avater-size"},b=(0,a.Uk)("size"),h=(0,a.Uk)(": type - String|Boolean, default - 2 "),w=(0,a._)("p",null,"控制组件尺寸，默认为组件字体尺寸 2倍，即2em",-1),x={id:"avater-color"},g=(0,a.Uk)("color"),k=(0,a.Uk)(": type - String, default - 'var(--foreground)' "),W=(0,a._)("p",null,"设置组件背景色",-1),U=(0,a.Uk)("default"),j=(0,a.Uk)(": 仅有默认插槽"),C=(0,a._)("h2",null,"示例：",-1),y=(0,a._)("hr",null,null,-1),A=(0,a.Uk)(" 切换外形为矩形 "),V=(0,a.Uk)(" 启用边框 "),B={class:"demo-item text-hint"},M=(0,a._)("span",null,"图标",-1),S=(0,a._)("i",{class:"bi bi-files"},null,-1),z={class:"demo-item text-hint"},Z=(0,a._)("span",null,"图片",-1),D=(0,a._)("img",{src:r,alt:"avater-bg"},null,-1),P={class:"demo-item text-hint"},q=(0,a._)("span",null,"文字",-1),E=(0,a.Uk)("A"),F={class:"demo-item text-hint"},G=(0,a._)("span",null,"文字-多字符",-1),H=(0,a._)("span",{style:{padding:"0 10px"}}," Abc123 ",-1);function I(e,l,t,r,I,J){const K=(0,a.up)("high-lighter"),L=(0,a.up)("doc-item"),N=(0,a.up)("j-switch"),O=(0,a.up)("j-control-bar"),Q=(0,a.up)("j-avater"),R=(0,a.up)("j-row"),T=(0,a.up)("demo-box");return(0,a.wg)(),(0,a.iD)("div",null,[n,i,d,(0,a.Wm)(L,{name:"Props:","title-is":"h2"},{default:(0,a.w5)((()=>[(0,a._)("li",o,[(0,a._)("p",null,[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[u])),_:1}),c]),s]),(0,a._)("li",p,[(0,a._)("p",null,[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[m])),_:1}),_]),v]),(0,a._)("li",f,[(0,a._)("p",null,[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[b])),_:1}),h]),w]),(0,a._)("li",x,[(0,a._)("p",null,[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[g])),_:1}),k]),W])])),_:1}),(0,a.Wm)(L,{name:"Slots:","title-is":"h2"},{default:(0,a.w5)((()=>[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[U])),_:1}),j])])])),_:1}),C,y,(0,a.Wm)(O,{"for-id":"c-switch-to-circle"},{text:(0,a.w5)((()=>[A])),default:(0,a.w5)((()=>[(0,a.Wm)(N,{id:"c-switch-to-circle",modelValue:I.toCircle,"onUpdate:modelValue":l[0]||(l[0]=e=>I.toCircle=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(O,{"for-id":"c-switch-border"},{text:(0,a.w5)((()=>[V])),default:(0,a.w5)((()=>[(0,a.Wm)(N,{id:"c-switch-border",modelValue:I.border,"onUpdate:modelValue":l[1]||(l[1]=e=>I.border=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(T,{title:"Avater",expand:"",code:'\n<div class="demo-item text-hint">\n    <span>图标</span>\n    <j-avater>\n        <i class="bi bi-files"></i>\n    </j-avater>\n</div>\n<div class="demo-item text-hint">\n    <span>图片</span>\n    <j-avater>\n        <img\n            src="../../../public/pexels-creative-vix-9754.jpg"\n            alt="avater-bg"\n        />\n    </j-avater>\n</div>\n<div class="demo-item text-hint">\n    <span>文字</span>\n    <j-avater>A</j-avater>\n</div>\n<div class="demo-item text-hint">\n    <span>文字-多字符</span>\n    <j-avater>\n        <span style="padding: 0 10px"> Abc123 </span>\n    </j-avater>\n</div>'},{default:(0,a.w5)((()=>[(0,a.Wm)(R,{warp:""},{default:(0,a.w5)((()=>[(0,a._)("div",B,[M,(0,a.Wm)(Q,{color:"#263238",border:I.border,circle:I.toCircle},{default:(0,a.w5)((()=>[S])),_:1},8,["border","circle"])]),(0,a._)("div",z,[Z,(0,a.Wm)(Q,{border:I.border,circle:I.toCircle},{default:(0,a.w5)((()=>[D])),_:1},8,["border","circle"])]),(0,a._)("div",P,[q,(0,a.Wm)(Q,{color:"#ff4d28",border:I.border,circle:I.toCircle},{default:(0,a.w5)((()=>[E])),_:1},8,["border","circle"])]),(0,a._)("div",F,[G,(0,a.Wm)(Q,{border:I.border,circle:I.toCircle},{default:(0,a.w5)((()=>[H])),_:1},8,["border","circle"])])])),_:1})])),_:1})])}var J={name:"the-demo-avater",data(){return{toCircle:!0,border:!1}}},K=(t(4495),t(89));const L=(0,K.Z)(J,[["render",I]]);var N=L},4495:function(e,l,t){var a=t(6774);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var r=t(7037).Z;r("98e2c8b8",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=997.4e2a7b1f.js.map