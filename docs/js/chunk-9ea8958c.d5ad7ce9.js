(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ea8958c"],{"3eec":function(e,t,l){"use strict";l.r(t);var c=l("7a23");const n={id:"the-demo-progressbar"},i=Object(c["i"])("li",null,[Object(c["i"])("p",null,"用于展示加载进度")],-1),s=Object(c["i"])("hr",null,null,-1),o={id:"doc"},d={id:"prop-value"},a=Object(c["j"])("value"),r=Object(c["j"])(" :type - String|Number, default - 0, range - 0 ~ 100 "),j=Object(c["i"])("p",null,"控制进度条百分比",-1),b={id:"prop-failed"},u=Object(c["j"])("failed"),O=Object(c["j"])(" : type - Boolean, default - false "),p=Object(c["i"])("p",null,"切换进度条为失败状态",-1),m={id:"prop-height"},f=Object(c["j"])("height"),h=Object(c["j"])(' : type - String, default - "8px" '),v=Object(c["i"])("p",null,"控制状态栏行高",-1),g=Object(c["j"])("完成进度条"),k=Object(c["j"])("失败进度条"),P={id:"demo-content"};function w(e,t,l,w,D,_){const x=Object(c["D"])("doc-item"),I=Object(c["D"])("high-lighter"),V=Object(c["D"])("j-switch"),y=Object(c["D"])("j-control-bar"),J=Object(c["D"])("j-progress"),S=Object(c["D"])("demo-box");return Object(c["v"])(),Object(c["h"])("div",n,[Object(c["k"])(x,{id:"describes","title-is":"h2",name:"进度条:"},{default:Object(c["P"])(()=>[i]),_:1}),s,Object(c["i"])("div",o,[Object(c["k"])(x,{"title-is":"h2",name:"<j-progress>:"},{default:Object(c["P"])(()=>[Object(c["i"])("li",null,[Object(c["k"])(x,{name:"Props:"},{default:Object(c["P"])(()=>[Object(c["i"])("li",d,[Object(c["i"])("p",null,[Object(c["k"])(I,null,{default:Object(c["P"])(()=>[a]),_:1}),r]),j]),Object(c["i"])("li",b,[Object(c["i"])("p",null,[Object(c["k"])(I,null,{default:Object(c["P"])(()=>[u]),_:1}),O]),p]),Object(c["i"])("li",m,[Object(c["i"])("p",null,[Object(c["k"])(I,null,{default:Object(c["P"])(()=>[f]),_:1}),h]),v])]),_:1})])]),_:1})]),Object(c["k"])(y,{"for-id":"demo-progress-to-susccess"},{text:Object(c["P"])(()=>[g]),default:Object(c["P"])(()=>[Object(c["k"])(V,{id:"demo-progress-to-susccess",modelValue:D.success,"onUpdate:modelValue":t[0]||(t[0]=e=>D.success=e)},null,8,["modelValue"])]),_:1}),Object(c["k"])(y,{"for-id":"demo-progress-to-failed"},{text:Object(c["P"])(()=>[k]),default:Object(c["P"])(()=>[Object(c["k"])(V,{id:"demo-progress-to-failed",modelValue:D.failed,"onUpdate:modelValue":t[1]||(t[1]=e=>D.failed=e)},null,8,["modelValue"])]),_:1}),Object(c["k"])(S,{title:"<j-progress>",code:D.code,expand:!0},{default:Object(c["P"])(()=>[Object(c["i"])("div",P,[Object(c["k"])(J,{failed:D.failed,value:D.number},null,8,["failed","value"])])]),_:1},8,["code"])])}var D=l("7ba7"),_={mixins:[D["a"]],name:"the-demo-progress",data(){return{code:'\n//javascript\nlet value = 50;\nlet filed = false;\n\n// HTML\n<j-control-bar for-id="demo-progress-to-susccess">\n    <template v-slot:text>完成进度条</template>\n        <j-switch\n            id="demo-progress-to-susccess"\n            v-model="success"\n        />\n</j-control-bar>\n<j-control-bar for-id="demo-progress-to-failed">\n    <template v-slot:text>失败进度条</template>\n        <j-switch\n            id="demo-progress-to-failed"\n            v-model="failed"\n        />\n</j-control-bar>\n<div id="demo-content">\n    <j-progress\n        :failed="failed"\n        :value="number"\n    ></j-progress>\n</div>\n                ',intervalID:null,success:!1,failed:!1,number:50}},watch:{success(){this.success?this.intervalID=setInterval(()=>{this.number++},100):(this.number=50,clearInterval(this.intervalID))},number(){this.number>100&&clearInterval(this.intervalID)}}},x=l("6b0d"),I=l.n(x);const V=I()(_,[["render",w]]);t["default"]=V},"7ba7":function(e,t,l){"use strict";t["a"]={mounted(){this.$emit("md-title",this.$route.name)}}}}]);
//# sourceMappingURL=chunk-9ea8958c.d5ad7ce9.js.map