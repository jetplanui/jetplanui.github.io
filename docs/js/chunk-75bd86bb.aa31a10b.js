(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75bd86bb"],{"2d52":function(e,t,c){"use strict";c.r(t);var l=c("7a23");const o=Object(l["createElementVNode"])("h2",null,"Inputs",-1),a=Object(l["createTextVNode"])(" 以下组件都是 "),d=Object(l["createTextVNode"])("<input>"),n=Object(l["createTextVNode"])(" 标签的衍生组件，使用它们以获得统一的样式风格 "),b=Object(l["createElementVNode"])("br",null,null,-1),r=Object(l["createElementVNode"])("hr",null,null,-1),i=Object(l["createElementVNode"])("br",null,null,-1),j=Object(l["createElementVNode"])("hr",null,null,-1),u=Object(l["createElementVNode"])("br",null,null,-1),O=Object(l["createElementVNode"])("hr",null,null,-1),m=Object(l["createElementVNode"])("br",null,null,-1),s=Object(l["createElementVNode"])("hr",null,null,-1),V=Object(l["createTextVNode"])("modeValue"),h=Object(l["createTextVNode"])(" 用于数据绑定 "),N=Object(l["createTextVNode"])("disable - Boolean"),v=Object(l["createTextVNode"])(" 禁用组件 "),p=Object(l["createTextVNode"])("default - false"),x=Object(l["createTextVNode"])("value"),w=Object(l["createTextVNode"])(" 传入待交值 "),f=Object(l["createTextVNode"])("name - String"),k=Object(l["createTextVNode"])(" 等同 "),C=Object(l["createTextVNode"])("<input>"),E=Object(l["createTextVNode"])(" 标签属性 "),T=Object(l["createTextVNode"])("name"),D=Object(l["createTextVNode"])("id - String"),_=Object(l["createTextVNode"])(" 组件 id "),B=Object(l["createTextVNode"])(" size - ['s','m','l','em','rem'] "),g=Object(l["createTextVNode"])(" 设定组件尺寸 "),y=Object(l["createTextVNode"])("default - em"),S=Object(l["createTextVNode"])(" ， "),R=Object(l["createTextVNode"])("em,rem"),U=Object(l["createTextVNode"])(" 为等同当前或根字体尺寸大小 "),I=Object(l["createTextVNode"])(" 组件事件请参考 "),H=Object(l["createTextVNode"])("<input>"),A=Object(l["createTextVNode"])(" 标签事件 ");function F(e,t,c,F,J,L){const $=Object(l["resolveComponent"])("c-highlighter"),z=Object(l["resolveComponent"])("the-inputs-input"),q=Object(l["resolveComponent"])("theinputs-checkbox"),G=Object(l["resolveComponent"])("theinputs-radio"),K=Object(l["resolveComponent"])("theinputs-switch"),M=Object(l["resolveComponent"])("j-button"),P=Object(l["resolveComponent"])("demo-doc");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[o,Object(l["createElementVNode"])("p",null,[a,Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[d]),_:1}),n]),Object(l["createVNode"])(z,{id:"input"}),b,r,Object(l["createVNode"])(q,{id:"checkbox"}),i,j,Object(l["createVNode"])(G,{id:"radio"}),u,O,Object(l["createVNode"])(K,{id:"switch"}),m,s,Object(l["createVNode"])(P,null,{prop:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("li",null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[V]),_:1}),h]),Object(l["createElementVNode"])("li",null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[N]),_:1}),v,Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[p]),_:1})]),Object(l["createElementVNode"])("li",null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[x]),_:1}),w]),Object(l["createElementVNode"])("li",null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[f]),_:1}),k,Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[C]),_:1}),E,Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[T]),_:1})]),Object(l["createElementVNode"])("li",null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[D]),_:1}),_]),Object(l["createElementVNode"])("li",null,[Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[B]),_:1}),g,Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[y]),_:1}),S,Object(l["createVNode"])($,null,{default:Object(l["withCtx"])(()=>[R]),_:1}),U])]),event:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("li",null,[I,Object(l["createVNode"])(M,{text:"",hover:""},{default:Object(l["withCtx"])(()=>[H]),_:1}),A])]),_:1})])}var J=c("7ba7");const L=Object(l["createElementVNode"])("strong",null,"Checkbox",-1),$=Object(l["createTextVNode"])("禁用组件"),z={id:"demo-checkbox-group"},q={id:"check-all-group"},G=Object(l["createElementVNode"])("label",{for:"check-all"},"Check All",-1),K={id:"checkbox-group"},M=["for"];function P(e,t,c,o,a,d){const n=Object(l["resolveComponent"])("j-switch"),b=Object(l["resolveComponent"])("j-control-bar"),r=Object(l["resolveComponent"])("j-checkbox"),i=Object(l["resolveComponent"])("demo-box");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[L,Object(l["createVNode"])(b,{"for-id":"disabled-checkbox"},{text:Object(l["withCtx"])(()=>[$]),default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(n,{modelValue:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.disabled=t),id:"disabled-checkbox"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(i,{title:"Checkbox",code:e.code},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("div",z,[Object(l["createElementVNode"])("div",q,[Object(l["createVNode"])(r,{id:"check-all",value:e.data,modelValue:e.showData,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showData=t),disabled:e.disabled},null,8,["value","modelValue","disabled"]),G]),Object(l["createElementVNode"])("div",K,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.data,c=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:c},[Object(l["createVNode"])(r,{disabled:e.disabled,id:c,value:c,modelValue:e.showData,"onUpdate:modelValue":t[2]||(t[2]=t=>e.showData=t)},null,8,["disabled","id","value","modelValue"]),Object(l["createElementVNode"])("label",{for:c},Object(l["toDisplayString"])(c),9,M)]))),128))])])]),_:1},8,["code"])])}var Q={name:"inputs-checkbox",data:()=>({disabled:!1,data:["Checkbox1","Checkbox2","Checkbox3"],showData:[],code:'// javaScript\nlet data: ["Checkbox1", "Checkbox2", "Checkbox3"],\nlet showData: [];\n\n// Html\n<body>\n    <p>Data:{{ showData }}</p>\n    <div id="check-all-group">\n        <j-checkbox id="check-all" :value="data" v-model="showData" />\n        <label for="check-all">Check All</label>\n    </div>\n    <div id="checkbox-group">\n        <div v-for="item in data" :key="item">\n        <j-checkbox :id="item" :value="item" v-model="showData" />\n        <label :for="item">{{ item }} </label>\n        </div>\n    </div>\n</body>'})},W=c("6b0d"),X=c.n(W);const Y=X()(Q,[["render",P]]);var Z=Y;const ee=Object(l["createElementVNode"])("h3",null,"Switch",-1),te={id:"demo-switch-group"},ce={for:"demo-switch"},le={for:"demo-switch-disabled"};function oe(e,t,c,o,a,d){const n=Object(l["resolveComponent"])("j-switch"),b=Object(l["resolveComponent"])("demo-box");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[ee,Object(l["createVNode"])(b,{title:"Switch",code:e.code},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("div",te,[Object(l["createElementVNode"])("div",null,[Object(l["createVNode"])(n,{id:"demo-switch",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t)},null,8,["modelValue"]),Object(l["createElementVNode"])("label",ce,Object(l["toDisplayString"])(e.value?"on":"off"),1)]),Object(l["createElementVNode"])("div",null,[Object(l["createVNode"])(n,{id:"demo-switch-disabled",disabled:"",modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t)},null,8,["modelValue"]),Object(l["createElementVNode"])("label",le," disabled-"+Object(l["toDisplayString"])(e.value?"on":"off"),1)])])]),_:1},8,["code"])])}var ae={name:"",data:()=>({value:!1,code:'\n//Script\nlet value = false;\n// Html\n<div>\n    <j-switch id="demo-switch" v-model="value" />\n    <label for="demo-switch">\n    {{ value ? "on" : "off" }}\n    </label>\n</div>\n<div>\n    <j-switch id="demo-switch-disabled" disabled v-model="value" />\n    <labed for="demo-switch-disabled">\n    disabled-{{ value ? "on" : "off" }}\n    </labed>\n</div>\n      '})};const de=X()(ae,[["render",oe]]);var ne=de;const be=Object(l["createElementVNode"])("h3",null,"Radio",-1),re=Object(l["createTextVNode"])("禁用组件"),ie={id:"demo-radio-group"},je=["for"];function ue(e,t,c,o,a,d){const n=Object(l["resolveComponent"])("j-switch"),b=Object(l["resolveComponent"])("j-control-bar"),r=Object(l["resolveComponent"])("j-radio"),i=Object(l["resolveComponent"])("demo-box");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[be,Object(l["createVNode"])(b,{"for-id":"disabled-radio"},{text:Object(l["withCtx"])(()=>[re]),default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(n,{modelValue:e.disabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.disabled=t),id:"disabled-radio"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(i,{title:"Radio",code:e.code},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("ul",ie,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.data,c=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("li",{key:c},[Object(l["createVNode"])(r,{disabled:e.disabled,id:c,name:"radioData",modelValue:e.radioData,"onUpdate:modelValue":t[1]||(t[1]=t=>e.radioData=t),value:c},null,8,["disabled","id","modelValue","value"]),Object(l["createElementVNode"])("label",{for:c},Object(l["toDisplayString"])(c),9,je)]))),128))])]),_:1},8,["code"])])}var Oe={name:"the-inputs-radio",data:()=>({data:["Radio1","Radio2","Radio3"],radioData:void 0,disabled:!1,code:'\n// Script\nlet data = ["Radio1", "Radio2", "Radio3"]\nlet radioData;\n\n// Html\n<body>\n    <div v-for="v in data" :key="v">\n        <j-radio :id="v" name="radioData" v-model="radioData" :value="v" />\n        <label :for="v">{{ v }}</label>\n    </div>\n</body>'})};const me=X()(Oe,[["render",ue]]);var se=me;const Ve=Object(l["createElementVNode"])("h3",null,"Input",-1);function he(e,t,c,o,a,d){const n=Object(l["resolveComponent"])("j-input"),b=Object(l["resolveComponent"])("demo-box");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",null,[Ve,Object(l["createVNode"])(b,{title:"input",code:e.code},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(n)]),_:1},8,["code"])])}var Ne={name:"",data:()=>({code:"<j-input />"})};const ve=X()(Ne,[["render",he]]);var pe=ve,xe={mixins:[J["a"]],name:"the-demo-inputs",components:{TheinputsCheckbox:Z,TheinputsSwitch:ne,TheinputsRadio:se,TheInputsInput:pe}};const we=X()(xe,[["render",F]]);t["default"]=we},"7ba7":function(e,t,c){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}}}]);
//# sourceMappingURL=chunk-75bd86bb.aa31a10b.js.map