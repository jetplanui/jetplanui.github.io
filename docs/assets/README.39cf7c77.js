import{d as E,T as F,r as c,o as d,c as B,a as t,w as l,b as u,e as a,f as e}from"./index.f4350e6c.js";const i={class:"markdown-body"},h=a('<h1 id="\u4E3B\u9898">\u4E3B\u9898</h1><p><strong><em>Jet ui</em></strong> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u81EA\u7531\u5EA6\u6781\u9AD8\u7684\u4E3B\u9898\u7CFB\u7EDF,\u4F7F\u7528\u5B83\u6765\u8F7B\u677E\u7684\u5207\u6362\uFF0C\u81EA\u5B9A\u4E49\uFF0C\u6216\u4ECE\u7F51\u7EDC \u52A8\u6001\u52A0\u8F7D\u4E3B\u9898</p><h2 id="\u5B9A\u4E49\u4E3B\u9898">\u5B9A\u4E49\u4E3B\u9898</h2><p><strong><em>Jet UI</em></strong> \u7EC4\u4EF6\u4F9D\u8D56\u4E8E\u4E3B\u9898\u63A7\u5236\u5668\u5DE5\u4F5C\uFF0C\u5728\u4F7F\u7528\u7EC4\u4EF6\u524D\u4F60\u5E94\u8BE5\u5728\u82E5\u5165\u53E3\u6587\u4EF6\u51FA\u521D\u59CB\u5316<code class="">\u4E3B\u9898\u63A7\u5236\u5668</code>\u3002</p><h3 id="\u4E3B\u9898\u63A7\u5236\u5668">\u4E3B\u9898\u63A7\u5236\u5668</h3><p>\u521D\u59CB\u5316\u4E3B\u9898\u63A7\u5236\u5668</p>',6),A=u("pre",null,[u("code",{class:"language-ts"},`import { newReactiveThemeSystem } from "jet-plan-ui";
const RTS = newReactiveThemeSystem(
    styleId:string, //\u5B58\u653E css \u7684<style>\u5143\u7D20\u7684 id
    defaultTheme:Theme // \u9ED8\u8BA4\u4E3B\u9898\uFF0C\u540C\u65F6\u6B64\u4E3B\u9898\u5C06\u4F5C\u4E3A\u7C7B\u578B\u63A8\u65AD\u4F7F\u7528
);
`)],-1),_=u("h4",null,[e("\u83B7\u53D6\u4E3B\u9898 "),u("code",{class:""},".getTheme")],-1),C=u("p",null,"\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF0C\u8BA1\u7B97\u5C5E\u6027\u5C06\u59CB\u7EC8\u6307\u5411\u5F53\u524D\u5E94\u7528\u7684\u4E3B\u9898\u3002",-1),r=u("p",null,[u("strong",null,"\u51FD\u6570\u5B9A\u4E49:")],-1),D=u("pre",null,[u("code",{class:"language-ts"},`.getTheme(): ComputedRef<Theme>
`)],-1),m=u("h4",null,[e("\u5B89\u88C5\u4E3B\u9898 "),u("code",{class:""},".install")],-1),p=u("p",null,[e("\u6B64\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u542B\u6709 "),u("code",{class:""},"install"),e(" \u65B9\u6CD5\u7684\u5BF9\u8C61\u6216\u4E00\u4E2A\u51FD\u6570\u7528\u4E8E\u5B89\u88C5\u4E3B\u9898\u3002")],-1),g=u("p",null,[u("strong",null,"\u51FD\u6570\u5B9A\u4E49:")],-1),T=u("pre",null,[u("code",{class:"language-ts"},`.install(theme: ThemePack | installTheme ): void
`)],-1),f=u("h4",null,[e("\u6DFB\u52A0\u4E3B\u9898 "),u("code",{class:""},".addTheme")],-1),k=u("p",null,"\u6B64\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u7ED3\u6784\u4E0E\u521D\u59CB\u5316\u4E3B\u9898\u65F6\u63D0\u4F9B\u7684\u9ED8\u8BA4\u4E3B\u9898\u7ED3\u6784\u4E00\u81F4\u7684\u5BF9\u8C61\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230\u4E3B\u9898\u5217\u8868\u4E2D",-1),v=u("p",null,[u("strong",null,"\u51FD\u6570\u5B9A\u4E49:")],-1),b=u("pre",null,[u("code",{class:"language-ts"},`.addTheme(theme: Theme ): void
`)],-1),x=u("h4",null,[e("\u8BBE\u7F6E\u4E3B\u9898 "),u("code",{class:""},".setTheme")],-1),j=u("p",null,"\u6B64\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u5BF9\u8C61\u3002\u5F53\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32\u65F6\u5C06\u4F1A\u5728\u5DF2\u5B89\u88C5\u7684\u4E3B\u9898\u4E2D\u67E5\u627E\u4E3B\u9898\u5E76\u5E94\u7528\u4E3B\u9898\uFF0C\u672A\u627E\u5230\u65F6\u5C06\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u53C2\u6570\u4E3A\u5BF9\u8C61\u65F6\u5C06\u8BE5\u5BF9\u8C61\u4F5C\u4E3A\u4E3B\u9898 \u5904\u7406\uFF0C\u5728\u5B89\u88C5\u8BE5\u4E3B\u540E\u5E76\u5E94\u7528\u4E3B\u9898\u3002",-1),y=u("pre",null,[u("code",{class:"language-ts"},`.steTheme(theme:string | Theme): void
`)],-1),S=u("h4",{id:"\u5B8C\u6574\u793A\u4F8B"},"\u5B8C\u6574\u793A\u4F8B",-1),w=u("p",null,"\u8FD9\u91CC\u4F7F\u7528\u5185\u7F6E\u7684\u4E3B\u9898\u5305\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5EFA\u8BAE\u5728\u72EC\u7ACB\u6587\u4EF6\u4E2D\u521D\u59CB\u5316\u4E3B\u9898\u63A7\u5236\u5668\u3002",-1),R=u("p",null,[u("strong",null,[u("em",null,"theme.js")])],-1),N=u("pre",null,[u("code",{class:"language-ts"},`import { newReactiveThemeSystem, type ThemePack } from "jet-plan-ui";
import { jetAuto, jetDark, jetLight } from "jet-plan-ui-theme";
export const RTS = newReactiveThemeSystem("theme", jetLight);

// \u5B9A\u4E49\u4E3B\u9898\u5305
const themePack: ThemePack = {
    install(v) {
    v.addTheme(jetAuto);
    v.addTheme(jetDark);
    },
};

RTS.install(themePack);
RTS.setTheme("JetAuto");
`)],-1),O=u("p",null,[e("\u5728"),u("code",{class:""},"main.js"),e("\u4E2D\u5BFC\u5165\u5373\u53EF")],-1),P=u("p",null,[u("strong",null,[u("em",null,"main.js")])],-1),J=u("pre",null,[u("code",{class:"language-ts"},`...
import './theme.js'
...
`)],-1),U=u("h2",{id:"\u4F7F\u7528\u4E3B\u9898"},"\u4F7F\u7528\u4E3B\u9898",-1),V=u("h3",null,"\u5728\u7EC4\u4EF6\u4E2D",-1),I=u("p",null,[e("\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E3B\u9898\u65F6\u63A8\u8350\u5F15\u5165\u5DF2\u5B9A\u4E49\u7684\u4E3B\u9898\u63A7\u5236\u5668\uFF0C\u901A\u8FC7\u8C03\u7528\u5176"),u("code",{class:""},"getTheme"),e("\u65B9\u6CD5\u83B7\u53D6\u5F53\u524D\u4E3B\u9898\u3002")],-1),K=u("p",null,[u("strong",null,[u("em",null,"\u793A\u4F8B")])],-1),L=u("pre",null,[u("code",{class:"language-xml"},`<template>
    <div class='component'>\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6</div>
</template>
<script lang='ts'>
    import RTS from 'theme.ts' // \u5BFC\u5165\u5B9A\u4E49\u7684\u4E3B\u9898\u63A7\u5236\u5668
    export default defineComponent({
        setup(){
            return {
                colors:RTS.getTheme() // \u83B7\u53D6\u5F53\u524D\u4E3B\u9898
            }
        }
    })
<\/script>
<style>
    .component{
        /* \u5E94\u7528\u4E3B\u9898\u8272\u5F69\u5230css */
        background:v-bind('colors.background.default');
    }
</style>
`)],-1),M=u("h3",null,[e("\u5728"),u("code",{class:""},"css"),e("\u4E2D")],-1),q=u("p",null,[e("\u5728"),u("code",{class:""},"css"),e("\u4E2D\u4F7F\u7528\u4E3B\u9898\u914D\u7F6E\u65F6\u9700\u8981\u4EE5"),u("code",{class:""},"css\u53D8\u91CF"),e("\u7684\u5F62\u5F0F\u8C03\u7528\u3002")],-1),z=u("p",null,[u("strong",null,[u("em",null,"\u793A\u4F8B customTheme")])],-1),G=u("pre",null,[u("code",{class:"language-ts"},`{
    background:{ 
        default:white,
        dark: black
    }
}
`)],-1),H=u("p",null,"\u5728 css \u4E2D\u8C03\u7528\u65F6\u5C06\u4F1A\u628A\u6240\u6709\u7684\u8272\u5F69\u914D\u7F6E\u8F6C\u6362\u4E3A\u4EE5 kebab \u683C\u5F0F\u7684\u547D\u540D\u7684css\u53D8\u91CF\u3002",-1),Q=u("pre",null,[u("code",{class:"language-css"},`.component{
    /* kebab \u683C\u5F0F\u7684\u53D8\u91CF */
    background:var(--background);
    color:var(--background-dark);
}
`)],-1),W=u("h2",{id:"\u65B0\u5EFA\u4E3B\u9898"},"\u65B0\u5EFA\u4E3B\u9898",-1),X=u("h3",null,"defineTheme",-1),Y=u("p",null,[u("strong",null,"\u51FD\u6570\u5B9A\u4E49\uFF1A")],-1),Z=u("pre",null,[u("code",{class:"language-ts"},`defineTheme(theme:Object):Theme
`)],-1),$=u("p",null,"\u5B9A\u4E49\u65B0\u4E3B\u9898\u65F6\uFF0C\u5728\u6EE1\u8DB3\u5FC5\u8981\u7684\u57FA\u7840\u5C5E\u6027\u540E\uFF0C\u4F60\u53EF\u4EE5\u4EFB\u610F\u6DFB\u52A0\u3001\u5D4C\u5957\u5C5E\u6027\u3002",-1),uu=u("p",null,[u("strong",null,"\u793A\u4F8B\uFF1A"),u("code",{class:""},"Tips\uFF1A\u5C5E\u6027 default\uFF0CAUTO\uFF0Cname \u4E3A\u7279\u6B8A\u952E\uFF0C\u5B9A\u4E49\u4E3B\u9898\u65F6\u4E0D\u8981\u4EE5\u5176\u4ED6\u65B9\u5F0F\u4F7F\u7528\u5B83\u4EEC\u3002")],-1),eu=u("pre",null,[u("code",{class:"language-ts"},`import { defineTheme } from 'jet-plan-ui'

export const newTheme defineTheme({
    name:"newTheme",
    first\uFF1A{
        second\uFF1A{
            third\uFF1A{
                default:'white'
                testKey:"rgb(40, 44, 52)"
                testKey2:"#282c34"
            }
        }
    }
})
`)],-1),nu=u("p",null,"\u4EE5\u4E0A\u4E3B\u9898\u5728\u88AB\u89E3\u6790\u4E3A css \u65F6\u90FD\u5C06\u4F1A\u8F6C\u6362\u4E3A kebab \u683C\u5F0F\u7684\u547D\u540D\u7684 css \u53D8\u91CF\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A",-1),tu=u("pre",null,[u("code",{class:"language-css"},`:root {
    --first-second-third\uFF1Awhite;
    --first-second-third-test-key\uFF1Argb(40, 44, 52);
    --first-second-third-test-key-2\uFF1A#282c34;
}
`)],-1),lu=u("p",null,[e("\u53EF\u4EE5\u770B\u89C1\u6240\u6709\u7684\u952E\u540D\u90FD\u5C06\u4EE5 \u2018\u7236\u7EA7->\u5B50\u7EA7\u2019 \u7684\u987A\u5E8F\u6392\u5217\uFF0C\u5176\u4E2D \u5C5E\u6027"),u("code",{class:""},"default"),e("\u4E0D\u4F1A\u88AB\u89E3\u6790 \u5230 css \u53D8\u91CF\u540D\u4E2D\uFF0C\u5B83\u5C06\u4F5C\u4E3A\u8BE5\u5C42\u7EA7\u7684\u9ED8\u8BA4\u503C\u3002")],-1),su=u("h3",null,"\u5B9A\u4E49AutoDarkModeTheme",-1),ou=u("p",null,[e("\u5B9A\u4E49\u652F\u6301\u81EA\u52A8\u6697\u9ED1\u6A21\u5F0F\u7684\u4E3B\u9898\u4F60\u9700\u8981\u7528\u5230\u7279\u6B8A\u5C5E\u6027"),u("code",{class:""},"AUTO"),e("\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u5176\u503C\u3002 \u8BE5\u529F\u80FD\u4F9D\u8D56\u4E8E\u6D4F\u89C8\u5668\u7684\u5A92\u4F53\u67E5\u8BE2\u529F\u80FD\uFF0C\u6240\u4EE5\u5B83\u53EA\u4F1A\u5728\u652F\u6301\u6697\u9ED1\u6A21\u5F0F\u7684\u6D4F\u89C8\u5668\u548C\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u751F\u6548\u3002")],-1),Eu=u("p",null,[u("strong",null,[u("em",null,"\u51FD\u6570\u5B9A\u4E49")])],-1),Fu=u("pre",null,[u("code",{class:"language-ts"},`{
    AUTO:()=>Theme
}
`)],-1),iu={},hu="",Au=E({__name:"README",setup(cu,{expose:s}){s({frontmatter:{},excerpt:void 0});const o=F();return o.TocData=JSON.parse('[{"level":1,"text":"\u4E3B\u9898","children":[{"level":2,"text":"\u5B9A\u4E49\u4E3B\u9898","children":[{"level":3,"text":"\u4E3B\u9898\u63A7\u5236\u5668","children":[{"level":4,"text":"\u5B8C\u6574\u793A\u4F8B","children":[]}]}]},{"level":2,"text":"\u4F7F\u7528\u4E3B\u9898","children":[]},{"level":2,"text":"\u65B0\u5EFA\u4E3B\u9898","children":[]}]}]'),(du,Bu)=>{const n=c("doc-code-box");return d(),B("div",i,[h,t(n,null,{default:l(()=>[A]),_:1}),u("ul",null,[u("li",null,[_,C,r,t(n,null,{default:l(()=>[D]),_:1})]),u("li",null,[m,p,g,t(n,null,{default:l(()=>[T]),_:1})]),u("li",null,[f,k,v,t(n,null,{default:l(()=>[b]),_:1})]),u("li",null,[x,j,t(n,null,{default:l(()=>[y]),_:1})])]),S,w,R,t(n,null,{default:l(()=>[N]),_:1}),O,P,t(n,null,{default:l(()=>[J]),_:1}),U,u("ul",null,[u("li",null,[V,I,K,t(n,null,{default:l(()=>[L]),_:1})]),u("li",null,[M,q,z,t(n,null,{default:l(()=>[G]),_:1}),H,t(n,null,{default:l(()=>[Q]),_:1})])]),W,u("ul",null,[u("li",null,[X,Y,t(n,null,{default:l(()=>[Z]),_:1}),$,uu,t(n,null,{default:l(()=>[eu]),_:1}),nu,t(n,null,{default:l(()=>[tu]),_:1}),lu]),u("li",null,[su,ou,Eu,t(n,null,{default:l(()=>[Fu]),_:1})])])])}}});export{Au as default,hu as excerpt,iu as frontmatter};
