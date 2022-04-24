(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[381],{8942:function(n,e,t){"use strict";t.r(e);var i=t(8081),l=t.n(i),o=t(3645),a=t.n(o),m=a()(l());m.push([n.id,".theme-item>span{padding-left:8px}.color-box{align-items:top;display:flex}.color-box>*{width:130px;display:inline-block}.color-box p{font-size:19px}.color{border:3px solid var(--border);border-radius:var(--m-radius);height:50px;width:50px;margin:5px}.show-h-tag>:last-child{margin-left:10px}.show-h-tag>*{display:inline-block}.shadow{box-shadow:0 2px 10px 1px var(--shadow)}",""]),e["default"]=m},7608:function(n,e){"use strict";e["Z"]={mounted(){this.$emit("md-title",this.$route.name)}}},381:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return M}});var i=t(3396);const l=(0,i.Uk)(" Jet plan UI 内置了一个主题控制器 "),o=(0,i.Uk)(" $jetTheme "),a=(0,i.Uk)(" 。使用它来轻松的切换，自定义，或从网络动态加载主题 "),m=(0,i._)("hr",null,null,-1),d={id:"theme-switcher"},u=(0,i._)("hr",null,null,-1),h={id:"set-theme-at-main-file"},r=(0,i._)("p",{class:"text-hint"},"在'main.js'（app 入口 js）:",-1),s={id:"set-theme-at-component"},p=(0,i._)("p",null,"在组件中更改/安装主题:",-1),c=(0,i._)("p",{class:"text-hint"}," $JetTheme 是全局注册的你可以在任何地方调用它。比如在组件中 ",-1),j={id:"use-theme-pack"},f=(0,i._)("p",null,"使用主题包:",-1),g=(0,i._)("p",{class:"text-hint"}," 主题控制的 '.install' 方法接受一个对象或一个函数以一次性安装主题包内有主题 ",-1),_=(0,i._)("p",null,"在这里讲述了如何快速定制属于你的主题",-1),x=(0,i._)("hr",null,null,-1),T={id:"theme-create-extend"},P=(0,i._)("h3",null,"从现有主题创建新主题",-1),b=(0,i._)("p",null," 使用 '$jetTheme.installTheme' 方法来从现有主题拓展一个新主题 ",-1),k={id:"theme-create-new"},w=(0,i._)("h3",null,"创建新主题",-1),C=(0,i._)("p",null," 如需要完全重定义主题可参照以下配置。一个完整的主题对象所包含的所有 'option' 参考。 ",-1),L={id:"theme-create-add-option"},$=(0,i._)("h3",null,"自定义 option",-1),W=(0,i._)("p",null," 如果你的组件有额外的 'option' 需求则只需在注册主题时通过拓展来加入选项，或直接在主题对象中加入 'option'。要使用 'option 中定义的值时则只需通过 css 变量的形式引用即可。或者从当前定义的主题 '$jetTheme.theme' 中读取值 ",-1),v=(0,i._)("hr",null,null,-1),y=(0,i._)("p",null,"设置自定义 'option'",-1),D=(0,i._)("p",null,"使用自定义 'option'",-1),J=(0,i._)("br",null,null,-1),O=(0,i._)("p",null," 使用 '$jetTheme.toAuto' 方法来创建一个随系统切换的深色模式 ",-1);function U(n,e,t,U,Z,A){const F=(0,i.up)("high-lighter"),I=(0,i.up)("j-all-theme"),R=(0,i.up)("doc-item"),M=(0,i.up)("j-code-box");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(R,{name:"主题","title-is":"h1",noDot:"",noPadding:""},{default:(0,i.w5)((()=>[(0,i._)("p",null,[l,(0,i.Wm)(F,null,{default:(0,i.w5)((()=>[o])),_:1}),a]),m,(0,i._)("li",d,[(0,i.Wm)(R,{name:"选择主题",noPadding:"","title-is":"h2"},{default:(0,i.w5)((()=>[(0,i.Wm)(I)])),_:1})]),(0,i.Wm)(R,{id:"theme-install-use",name:"使用主题","title-is":"h2",noPadding:"",noDot:""},{default:(0,i.w5)((()=>[u,(0,i._)("li",h,[r,(0,i.Wm)(M,{code:"\n// main.js\n\n// 导入ui和主题\nimport ui from 'jet-plan-ui'\nimport { jetPlanLight } from 'jet-plan-ui-theme'\n\n// 安装主题\nui.$jetTheme.installTheme(\n    'jet-ui-light',\n    jetPlanLight\n)\n\n// 通过向 '.setTheme' 方法指定 主题的安装名来应用主题\nui.$jetTheme.setTheme('jet-ui-light')\n          "},null,8,["code"])]),(0,i._)("li",s,[p,c,(0,i.Wm)(M,{code:"\nimport { jetPlanDark } from 'jet-plan-ui-theme'\n\nexport default{\n    name:'some-component',\n    mounted(){\n\n        this.$jetTheme.installTheme(\n            'jet-ui-dark',\n            jetPlanDark\n        )\n\n        this.$jetTheme.setTheme('jet-ui-dark')\n    }\n}\n          "},null,8,["code"])]),(0,i._)("li",j,[f,g,(0,i.Wm)(M,{code:"\nimport JetPlanUI from 'jet-plan-ui';\nimport jetPlanTheme from 'jet-plan-ui-theme';\n\nui.$jetTheme.install(\n    JetPlanTheme\n);\n          "},null,8,["code"])])])),_:1}),(0,i.Wm)(R,{id:"theme-create",name:"创建主题","title-is":"h2",noPadding:""},{default:(0,i.w5)((()=>[_,x,(0,i._)("li",T,[P,b,(0,i.Wm)(M,{code:"\n// main.js\n\n// 导入组件库和主题\nimport ui from 'jet-plan-ui'\nimport { jetPLanLight } from 'jet-plan-ui-theme'\n\n// 拓展&安装主题\nui.$jetTheme.installTheme(\n    'jetPlanLight_Red', // 主题名称\n    {\n        primary:'#ef5961' // 要覆盖的 option\n    },\n    jetPlanLight // 蓝本主题,其中所有的 option 将被继承,\n)\n            "},null,8,["code"])]),(0,i._)("li",k,[w,C,(0,i.Wm)(M,{lang:"javascript",code:"\n// jetPLanDark\n export default {\n    // BACKGROUND\n    foreground: '#363636',\n    background: '#202020',\n    disabled: '#535353',\n    border: '#6a6a6a',\n\n    // TEXT\n    'text-disabled': '#CCCCCC4d',\n    'text-hint': '#CCCCCC',\n    text: '#FCFCFC',\n\n    // INFO\n    secondary: this.border,\n    primary: '#1687a7',\n    success: '#4cd966',\n    warning: '#ecb02c',\n    error: '#f33f2e',\n    info: '#0d75ec',\n\n    // OTHERS\n    frosted_glass: this.foreground + 'b3',\n    card: this.foreground,\n    shadow: '#00000033',\n    mask: '#85858560',\n    'text-light': this.text,\n    'text-dark': '#505050',\n}\n          "},null,8,["code"])]),(0,i._)("li",L,[$,W,v,y,(0,i.Wm)(M,{code:"\n// main.js\n\n// 导入组件库和主题\nimport ui from 'jet-plan-ui'\nimport { jetPLanLight } from 'jet-plan-ui-theme'\n\n// 拓展&安装主题\nui.$jetTheme.installTheme(\n    'jetPlanLight_Red', // 主题名称\n    {\n        myOption:'#ef5961' // 自定义 option\n    },\n    JetPlanLight // 蓝本主题,其中所有的 option 将被继承,\n)\n\n          "},null,8,["code"]),D,(0,i.Wm)(M,{lang:"css",code:"\n /* 在css中访问 */\n.body{\n    background: var(--myOption);\n}\n          "},null,8,["code"]),J,(0,i.Wm)(M,{lang:"JavaScript",code:"\n // 在组件中调用当前主题\n{\n    mounted(){\n        // 可通过 'jetTheme.theme' 访问到当前使用的主题\n        this.$jetTheme.theme.myOption\n    }\n}\n          "},null,8,["code"])])])),_:1}),(0,i.Wm)(R,{id:"theme-auto-dark-mode",name:"创建自动深色模式","title-is":"h2",noPadding:""},{default:(0,i.w5)((()=>[O,(0,i.Wm)(M,{code:"\n// main.js\n\n// 导入组件库和主题\nimport ui from 'jet-plan-ui'\nimport { jetPLanLight, jetPLanDark } from 'jet-plan-ui-theme'\n\n// 安装主题\nui.$jetTheme.installTheme(\n    'jetPlanAuto', // 主题名称\n\n    // 将两个主题合并为一个主题\n    $jetTheme.toAuto(\n        jetPLanLight, // 第一位参数提供亮色主题\n        jetPLanDark // 第二位参数提供暗色主题\n    )\n)\n            "},null,8,["code"])])),_:1})])),_:1})])}var Z=t(7608),A=t(7077),F={components:{DocItem:A.Z},name:"the-demo-style",mixins:[Z.Z]},I=(t(4456),t(89));const R=(0,I.Z)(F,[["render",U]]);var M=R},4456:function(n,e,t){var i=t(8942);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);var l=t(7037).Z;l("2d57cf9a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=381.aefb97ef.js.map