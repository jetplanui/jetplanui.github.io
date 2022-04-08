(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d9966c9"],{3851:function(e,t,l){"use strict";l.r(t);var o=l("7a23");const c={id:"demo-j-control-bar"},d=Object(o["k"])(" 强化 "),a=Object(o["k"])("input"),i=Object(o["k"])(" 衍生组件的可点击范围,使得组件内任意区域均可触发点击 "),n=Object(o["i"])("hr",null,null,-1),r={id:"j-control-bar-props"},b={id:"prop-for-id"},j=Object(o["k"])("for-id"),u=Object(o["k"])(" type - String, required - true "),O=Object(o["k"])(" 被控制组件的 "),s=Object(o["k"])("id"),v=Object(o["k"])(" ,这个值是必须的 "),m={id:"prop-reverse"},p=Object(o["k"])("reverse"),f=Object(o["k"])(" type - Boolean, default - false "),k=Object(o["i"])("p",null,"反向排列内部元素",-1),h={id:"j-control-bar-slots"},R={id:"slot-text"},x=Object(o["k"])("text"),Q=Object(o["k"])(" 文本或任意你想要放置于内部的元素 "),_={id:"slot-control"},w=Object(o["k"])("control"),V=Object(o["k"])(" 只能放置 input 组件以及 input 衍生组件 "),E=Object(o["k"])("反向排列元素"),U={id:"demo-default"},S=Object(o["k"])("Switch"),g=Object(o["k"])("Checkbox"),J=Object(o["k"])("Radio1"),y=Object(o["k"])("Radio2");function C(e,t,l,C,$,q){const B=Object(o["E"])("high-lighter"),H=Object(o["E"])("doc-item"),L=Object(o["E"])("j-switch"),M=Object(o["E"])("j-control-bar"),P=Object(o["E"])("j-checkbox"),T=Object(o["E"])("j-radio"),z=Object(o["E"])("demo-box");return Object(o["w"])(),Object(o["h"])("div",c,[Object(o["l"])(H,{id:"describes",name:"控制条组件:","title-is":"h2"},{default:Object(o["Q"])(()=>[Object(o["i"])("p",null,[d,Object(o["l"])(B,null,{default:Object(o["Q"])(()=>[a]),_:1}),i])]),_:1}),n,Object(o["l"])(H,{name:"<j-control-bar> :","title-is":"h2"},{default:Object(o["Q"])(()=>[Object(o["i"])("li",r,[Object(o["l"])(H,{name:"Props:","title-is":"h3"},{default:Object(o["Q"])(()=>[Object(o["i"])("li",b,[Object(o["i"])("p",null,[Object(o["l"])(B,null,{default:Object(o["Q"])(()=>[j]),_:1}),u]),Object(o["i"])("p",null,[O,Object(o["l"])(B,null,{default:Object(o["Q"])(()=>[s]),_:1}),v])]),Object(o["i"])("li",m,[Object(o["i"])("p",null,[Object(o["l"])(B,null,{default:Object(o["Q"])(()=>[p]),_:1}),f]),k])]),_:1})]),Object(o["i"])("li",h,[Object(o["l"])(H,{name:"Slots:","title-is":"h3"},{default:Object(o["Q"])(()=>[Object(o["i"])("li",R,[Object(o["i"])("p",null,[Object(o["l"])(B,null,{default:Object(o["Q"])(()=>[x]),_:1}),Q])]),Object(o["i"])("li",_,[Object(o["i"])("p",null,[Object(o["l"])(B,null,{default:Object(o["Q"])(()=>[w]),_:1}),V])])]),_:1})])]),_:1}),Object(o["l"])(M,{"for-id":"to-reverse"},{text:Object(o["Q"])(()=>[E]),default:Object(o["Q"])(()=>[Object(o["l"])(L,{id:"to-reverse",modelValue:e.toReverse,"onUpdate:modelValue":t[0]||(t[0]=t=>e.toReverse=t)},null,8,["modelValue"])]),_:1}),Object(o["l"])(z,{title:"<j-control-bar>",code:e.code},{default:Object(o["Q"])(()=>[Object(o["i"])("div",U,[Object(o["l"])(M,{"for-id":"demo-switch",reverse:e.toReverse},{text:Object(o["Q"])(()=>[S]),default:Object(o["Q"])(()=>[Object(o["l"])(L,{id:"demo-switch",modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t)},null,8,["modelValue"])]),_:1},8,["reverse"]),Object(o["l"])(M,{"for-id":"demo-checkbox",reverse:e.toReverse},{text:Object(o["Q"])(()=>[g]),default:Object(o["Q"])(()=>[Object(o["l"])(P,{id:"demo-checkbox",modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value=t)},null,8,["modelValue"])]),_:1},8,["reverse"]),Object(o["l"])(M,{"for-id":"demo-radio1",reverse:e.toReverse},{text:Object(o["Q"])(()=>[J]),default:Object(o["Q"])(()=>[Object(o["l"])(T,{id:"demo-radio1",value:"demo-value1",modelValue:e.valueRadio,"onUpdate:modelValue":t[3]||(t[3]=t=>e.valueRadio=t)},null,8,["modelValue"])]),_:1},8,["reverse"]),Object(o["l"])(M,{"for-id":"demo-radio2",reverse:e.toReverse},{text:Object(o["Q"])(()=>[y]),default:Object(o["Q"])(()=>[Object(o["l"])(T,{id:"demo-radio2",value:"demo-value2",modelValue:e.valueRadio,"onUpdate:modelValue":t[4]||(t[4]=t=>e.valueRadio=t)},null,8,["modelValue"])]),_:1},8,["reverse"])])]),_:1},8,["code"])])}var $=l("7ba7"),q={mixins:[$["a"]],name:"",data:()=>({code:'\n//Javascript\nlet value = false;\nlet valueRadio = [];\nlet toReverse = false,\n\n\n// HTML\n<div id="demo-default">\n<j-control-bar\n    for-id="demo-switch"\n    :reverse="toReverse"\n>\n    <template v-slot:text>Switch</template>\n        <j-switch id="demo-switch" v-model="value" />\n</j-control-bar>\n<j-control-bar\n    for-id="demo-checkbox"\n    :reverse="toReverse"\n>\n    <template v-slot:text>Checkbox</template>\n        <j-checkbox\n            id="demo-checkbox"\n            v-model="value"\n        />\n</j-control-bar>\n<j-control-bar\n    for-id="demo-radio1"\n    :reverse="toReverse"\n>\n    <template v-slot:text>Radio1</template>\n        <j-radio\n            id="demo-radio1"\n            value="demo-value1"\n            v-model="valueRadio"\n        />\n</j-control-bar>\n<j-control-bar\n    for-id="demo-radio2"\n    :reverse="toReverse"\n>\n    <template v-slot:text>Radio2</template>\n        <j-radio\n            id="demo-radio2"\n            value="demo-value2"\n            v-model="valueRadio"\n        />\n</j-control-bar>',value:!1,valueRadio:[],toReverse:!1})},B=l("6b0d"),H=l.n(B);const L=H()(q,[["render",C]]);t["default"]=L},"7ba7":function(e,t,l){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}}}]);
//# sourceMappingURL=chunk-2d9966c9.ccd1232f.js.map