(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(231)}])},73:function(e,t,n){"use strict";n.d(t,{V:function(){return r}});var s=n(5893),a=n(7098),i=n(9205);let r=()=>(0,s.jsxs)("article",{className:"flex flex-col items-start justify-between card pointer-events-none",children:[(0,s.jsx)(i.M,{}),(0,s.jsxs)("div",{className:" w-full",children:[(0,s.jsx)("div",{className:"mt-3 text-lg font-semibold tracking-tight leading-6",children:(0,s.jsx)(a.N,{as:"h3",width:"45%"})}),(0,s.jsxs)("div",{className:"relative z-10 mt-5 line-clamp-3 text-sm leading-6 flex flex-col",children:[(0,s.jsx)(a.N,{className:"mt-1px bg-zinc-600 dark:bg-zinc-400",width:"85%"}),(0,s.jsx)(a.N,{className:"mt-1px bg-zinc-600 dark:bg-zinc-400",width:"92%"}),(0,s.jsx)(a.N,{className:"mt-1px bg-zinc-600 dark:bg-zinc-400",width:"60%"})]})]})]})},8710:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var s=n(5893);n(7294);var a=n(9008),i=n.n(a);let r=e=>{let{title:t,description:n,canonical:a}=e;return(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"description",content:n}),(0,s.jsx)("meta",{name:"og:title",content:t}),(0,s.jsx)("meta",{name:"og:description",content:n})]})}},2277:function(e,t,n){"use strict";n.d(t,{c:function(){return r}});var s=n(5893),a=n(7294);let i=e=>{let{children:t,loader:n,defer:i=!1}=e,[r,l]=(0,a.useState)(!!window.pageMounted);return((0,a.useEffect)(()=>{i&&setTimeout(async()=>{l(!1)},document.startViewTransition?532:32)},[]),i&&n&&r)?(0,s.jsx)(n,{}):t},r=e=>{let{prePage:t,postPage:n,postPageLoader:r,deferPostPage:l=!1}=e;return(0,a.useEffect)(()=>{var e;null==n||null===(e=n.render)||void 0===e||e.preload()},[]),(0,s.jsx)(t,{children:n&&(0,s.jsx)(i,{loader:r,defer:l,children:(0,s.jsx)(n,{})})})}},1909:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var s=n(5893);n(7294);var a=n(73);let i=()=>(0,s.jsx)("div",{className:"mt-16",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12",children:[(0,s.jsx)(a.V,{}),(0,s.jsx)(a.V,{}),(0,s.jsx)(a.V,{}),(0,s.jsx)(a.V,{}),(0,s.jsx)(a.V,{}),(0,s.jsx)(a.V,{})]})})},9205:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var s=n(5893);let a=e=>{let{className:t="bg-zinc-600 dark:bg-zinc-400 rounded-2xl",width:n,height:a}=e;return(0,s.jsx)("div",{className:"aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-zinc-400 object-cover pointer-events-none animate-pulse"})}},7098:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var s=n(5893);let a=e=>{let{as:t="span",className:n="",width:a}=e,i={width:a||"auto",animationFillMode:"backwards",animationDelay:"150ms"},r="".concat(n," bg-zinc-600 dark:bg-zinc-400 animate-pulse");return"span"===t?(0,s.jsx)("span",{className:r,style:i,children:"\xa0"}):"h1"===t?(0,s.jsx)("h1",{className:r,style:i,children:"\xa0"}):"h2"===t?(0,s.jsx)("h2",{className:r,style:i,children:"\xa0"}):"h3"===t?(0,s.jsx)("h3",{className:r,style:i,children:"\xa0"}):(0,s.jsx)(s.Fragment,{})}},4364:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var s=n(1163),a=n.n(s),i=n(5945),r=n(7837),l=n(6982);let o=()=>{let e=(0,s.useRouter)(),t=(0,i.NL)(),n=window.placeholderData;return(0,r.a)({queryKey:e&&t?[e.asPath.split(/[?#]/)[0]]:void 0,placeholderData:n,queryFn:async()=>{if(e&&(null===a()||void 0===a()?void 0:a().router)){let t=await fetch(a().router.pageLoader.getDataHref({href:(0,l.formatWithValidation)({pathname:e.route,query:e.query}),asPath:e.asPath}));if(t.ok){let{state:e}=(await t.json()).pageProps.dehydratedState.queries[0];return e.data}throw e.reload(),Error(t.statusText)}}})}},231:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return f}});var s=n(5893);n(7294);var a=n(5152),i=n.n(a),r=n(9876),l=n(8710),o=n(4364);let c=e=>{let{children:t}=e;return(0,o.V)(),(0,s.jsxs)(r.W,{children:[(0,s.jsx)(l.h,{title:"Next.js site with optimistic navigation and View Transitions API",description:"No matter how slow the user’s Internet is or how weak his hardware is, site navigation remains instantaneous"}),(0,s.jsxs)("div",{className:"max-w-2xl",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold tracking-tight sm:text-5xl",children:"Next.js site with optimistic navigation and View Transitions API."}),(0,s.jsx)("p",{className:"mt-10 text-lg text-zinc-600 dark:text-zinc-100",children:"This site looks simple but it takes a lot of effort to achieve what it does. No matter how slow the user’s Internet is or how weak his hardware is, site navigation remains instantaneous. Click on any card bellow, to see it."})]}),t]})};var d=n(2277),u=n(1909);let h=i()(()=>Promise.all([n.e(541),n.e(842)]).then(n.bind(n,4554)).then(e=>e.HomePostPage),{loadableGenerated:{webpack:()=>[4554]},loading:()=>(0,s.jsx)(u.j,{})}),x=()=>(0,s.jsx)(d.c,{postPageLoader:u.j,prePage:c,postPage:h});var m=!0;function f(){return(0,s.jsx)(x,{})}}},function(e){e.O(0,[273,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);