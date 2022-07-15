import{_ as k,o as t,c as e,a as o,w as c,b as n,F as l,r as i,d as s,e as u}from"./app.96bf443e.js";const d={},m=n("p",null,"Hayat her \u015Feyi d\xFC\u015F\xFCnmek i\xE7in \xE7ok k\u0131sa. Bir zamanlar sizin i\xE7in d\xFC\u015F\xFCnd\xFCk, \u015Fimdi gerisi a\u015Fa\u011F\u0131daki kodlar kadar zahmetsiz!",-1),v=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@istanbul/app"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createHttpServer"),n("span",{class:"token punctuation"},","),s(" createRouter "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@istanbul/http"'),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"register"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"createHttpServer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"view"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("req"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},","),s(" next"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Welcome to IstanbulJS!"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@istanbul/app"'),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createWsApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@istanbul/ws"'),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ws "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createWsApp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"register"),n("span",{class:"token punctuation"},"("),s("ws"),n("span",{class:"token punctuation"},")"),s(`

ws`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"view"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("socket"),n("span",{class:"token punctuation"},","),s(" req"),n("span",{class:"token punctuation"},","),s(" res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Welcome to IstanbulJS!"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("p",null,[s("Kodlar k\u0131sa olsa da yapabilece\u011Fimiz bir\xE7ok \u015Fey var. "),n("a",{href:"/introduction/getting-started"},"\u015Eimdi"),s(" ba\u015Flay\u0131n.")],-1),f=n("h3",{class:"text-center"},"Sponsorlar",-1),g={class:"sponsor-container"},y=n("span",{class:"question-mark"},"?",-1),h=[y],w=n("div",{class:"sponsor-item sponsor-marketing"},[n("span",{class:"marketing-text"},"Sponsor oldu\u011Funuzda logonuz burada g\xF6r\xFCnt\xFClenecektir.")],-1),x=n("span",{class:"question-mark"},"?",-1),z=[x];function C(S,A){const p=u("CodeGroupItem"),r=u("CodeGroup");return t(),e("div",null,[m,o(r,null,{default:c(()=>[o(p,{title:"HTTP",active:""},{default:c(()=>[v]),_:1}),o(p,{title:"WEBSOCKET"},{default:c(()=>[_]),_:1})]),_:1}),b,f,n("div",g,[(t(),e(l,null,i(4,a=>n("div",{class:"sponsor-item sponsor-empty",key:a},h)),64)),w,(t(),e(l,null,i(4,a=>n("div",{class:"sponsor-item sponsor-empty",key:a},z)),64))])])}var W=k(d,[["render",C],["__file","index.html.vue"]]);export{W as default};
