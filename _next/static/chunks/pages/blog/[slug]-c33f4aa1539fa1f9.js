(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8165:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(6106)}])},1635:function(e,t,r){"use strict";r.d(t,{E:function(){return d}});var n=r(5893),a=r(5675),s=r.n(a),i=r(7294),l=r(4841),c=r(1876).Buffer,o=r(3471);let d=(0,i.forwardRef)((e,t)=>{let{thumbhash:r,src:a,height:d,width:u,priority:h,style:f,alt:x,title:j,fill:g,className:m="lg:aspect-[16/9] object-cover aspect-[4/3] rounded-2xl bg-gray-100",...p}=e,[v,N]=(0,i.useState)(),w=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(w.current){if(w.current.complete){N(void 0);return}(0,o.K)(()=>{N(function(e){if(!e)return e;let{w:t,h:r,rgba:n}=(0,l.JK)(function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),r=void 0!==c?c.from(t,"base64"):Uint8Array.from(atob(t),e=>e.charCodeAt(0));return new Uint8Array(r)}(e));return function(e,t,r){let n=4*e+1,a=6+t*(5+n),s=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,255&e,0,0,t>>8,255&t,8,6,0,0,0,0,0,0,0,a>>>24,a>>16&255,a>>8&255,255&a,73,68,65,84,120,1],i=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],l=1,o=0;for(let e=0,a=0,i=n-1;e<t;e++,i+=n-1)for(s.push(e+1<t?0:1,255&n,n>>8,255&~n,n>>8^255,0),o=(o+l)%65521;a<i;a++){let e=255&r[a];s.push(e),o=(o+(l=(l+e)%65521))%65521}for(let[e,t]of(s.push(o>>8,255&o,l>>8,255&l,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130),[[12,29],[37,41+a]])){let r=-1;for(let n=e;n<t;n++)r^=s[n],r=(r=r>>>4^i[15&r])>>>4^i[15&r];r=~r,s[t++]=r>>>24,s[t++]=r>>16&255,s[t++]=r>>8&255,s[t++]=255&r}let d=void 0!==c?c.from(new Uint8Array(s)).toString("base64"):btoa(String.fromCharCode(...s));return"data:image/png;base64,".concat(d)}(t,r,n)}(r))})}},[]),(0,n.jsx)(s(),{priority:h,fill:g,className:"bg-no-repeat bg-gray-500 ".concat(m),draggable:"false",src:a,alt:x||"",title:j||"",height:g?void 0:d,width:g?void 0:u,placeholder:v,ref:e=>{w.current=e,"function"==typeof t?t(e):t&&(t.current=e)},...p})});d.displayName="Image"},8710:function(e,t,r){"use strict";r.d(t,{h:function(){return i}});var n=r(5893);r(7294);var a=r(9008),s=r.n(a);let i=e=>{let{title:t,description:r,canonical:a}=e;return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"og:title",content:t}),(0,n.jsx)("meta",{name:"og:description",content:r})]})}},2277:function(e,t,r){"use strict";r.d(t,{c:function(){return i}});var n=r(5893),a=r(7294);let s=e=>{let{children:t,loader:r,defer:s=!1}=e,[i,l]=(0,a.useState)(!!window.pageMounted);return((0,a.useEffect)(()=>{s&&setTimeout(async()=>{l(!1)},document.startViewTransition?532:32)},[]),s&&r&&i)?(0,n.jsx)(r,{}):t},i=e=>{let{prePage:t,postPage:r,postPageLoader:i,deferPostPage:l=!1}=e;return(0,a.useEffect)(()=>{var e;null==r||null===(e=r.render)||void 0===e||e.preload()},[]),(0,n.jsx)(t,{children:r&&(0,n.jsx)(s,{loader:i,defer:l,children:(0,n.jsx)(r,{})})})}},4564:function(e,t,r){"use strict";r.d(t,{H:function(){return s}});var n=r(5893),a=r(230);r(7294);let s=e=>{let{content:t}=e;return(0,n.jsx)(a.i,{content:t})}},7414:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var n=r(5893),a=r(7098);let s=()=>(0,n.jsx)("div",{className:"mt-10",children:(0,n.jsxs)("div",{className:"prose lg:prose-xl max-w-none dark:prose-invert flex flex-col",children:[(0,n.jsx)(a.N,{width:"65%",as:"h2"}),(0,n.jsx)(a.N,{width:"90%"}),(0,n.jsx)(a.N,{width:"93%"}),(0,n.jsx)(a.N,{width:"85%"}),(0,n.jsx)(a.N,{width:"98%"}),(0,n.jsx)(a.N,{width:"92%"}),(0,n.jsx)(a.N,{width:"95%"}),(0,n.jsx)(a.N,{width:"91%"}),(0,n.jsx)(a.N,{width:"60%"})]})})},9205:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(5893);let a=e=>{let{className:t="bg-zinc-600 dark:bg-zinc-400 rounded-2xl",width:r,height:a}=e;return(0,n.jsx)("div",{className:"aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-zinc-400 object-cover pointer-events-none animate-pulse"})}},7098:function(e,t,r){"use strict";r.d(t,{N:function(){return a}});var n=r(5893);let a=e=>{let{as:t="span",className:r="",width:a}=e,s={width:a||"auto",animationFillMode:"backwards",animationDelay:"150ms"},i="".concat(r," bg-zinc-600 dark:bg-zinc-400 animate-pulse");return"span"===t?(0,n.jsx)("span",{className:i,style:s,children:"\xa0"}):"h1"===t?(0,n.jsx)("h1",{className:i,style:s,children:"\xa0"}):"h2"===t?(0,n.jsx)("h2",{className:i,style:s,children:"\xa0"}):"h3"===t?(0,n.jsx)("h3",{className:i,style:s,children:"\xa0"}):(0,n.jsx)(n.Fragment,{})}},4364:function(e,t,r){"use strict";r.d(t,{V:function(){return c}});var n=r(1163),a=r.n(n),s=r(5945),i=r(7837),l=r(6982);let c=()=>{let e=(0,n.useRouter)(),t=(0,s.NL)(),r=window.placeholderData;return(0,i.a)({queryKey:e&&t?[e.asPath.split(/[?#]/)[0]]:void 0,placeholderData:r,queryFn:async()=>{if(e&&(null===a()||void 0===a()?void 0:a().router)){let t=await fetch(a().router.pageLoader.getDataHref({href:(0,l.formatWithValidation)({pathname:e.route,query:e.query}),asPath:e.asPath}));if(t.ok){let{state:e}=(await t.json()).pageProps.dehydratedState.queries[0];return e.data}throw e.reload(),Error(t.statusText)}}})}},3707:function(e,t,r){"use strict";function n(e){let{src:t,width:r}=e;return"".concat(t.replace("/","/".concat(r,"_")))}r.r(t),r.d(t,{default:function(){return n}})},6106:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return N},default:function(){return w}});var n=r(5893);r(7294);var a=r(9876),s=r(8710),i=r(7098),l=r(9205);let c=()=>(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(i.N,{width:"95%"}),(0,n.jsx)(i.N,{width:"75%"}),(0,n.jsx)(i.N,{width:"60%"})]});var o=r(7414);let d=e=>{let{children:t}=e;return(0,n.jsx)(a.W,{className:"",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-8 dark:text-gray-50",children:[(0,n.jsxs)("div",{className:"flex flex-col  space-y-6",children:[(0,n.jsx)(i.N,{as:"h1",className:"leading-tight text-5xl font-bold",width:"65%"}),(0,n.jsx)("div",{className:"relative w-full banner-img",children:(0,n.jsx)(l.M,{width:16,height:9})})]}),(0,n.jsxs)("div",{className:"dark:text-gray-100",children:[(0,n.jsx)(c,{}),(0,n.jsx)(o.B,{})]})]})})};var u=r(1635),h=r(4564),f=r(4364);let x=e=>{var t,r;let{children:i}=e,{data:l,isLoading:c,isFetching:o}=(0,f.V)();if(!l&&(c||o))return(0,n.jsx)(d,{children:i});if(!l)return i;let x=l.attributes||{},j=(null===(r=x.thumbnail)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.attributes)||{},{title:g,description:m}=x;return(0,n.jsxs)(a.W,{children:[(0,n.jsx)(s.h,{title:g,description:""}),(0,n.jsxs)("article",{className:"flex flex-col space-y-8 dark:text-gray-50",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,n.jsx)("h1",{className:"leading-tight text-5xl font-bold ",children:g}),(0,n.jsx)("div",{className:"banner-img",children:(0,n.jsx)(u.E,{priority:!0,sizes:"100vw",thumbhash:j.thumbhash,src:"/".concat(j.name),alt:j.alternativeText,width:j.width,height:j.height})})]}),(0,n.jsxs)("div",{className:"dark:text-gray-100",children:[(0,n.jsx)(h.H,{content:m}),i]})]})]})};var j=r(5152),g=r.n(j),m=r(2277);let p=g()(()=>r.e(809).then(r.bind(r,4809)).then(e=>e.BlogItemPostPage),{loadableGenerated:{webpack:()=>[4809]},loading:()=>(0,n.jsx)(o.B,{})}),v=()=>(0,n.jsx)(m.c,{deferPostPage:!0,postPageLoader:o.B,prePage:x,postPage:p});var N=!0;function w(){return(0,n.jsx)(v,{})}}},function(e){e.O(0,[541,273,888,774,179],function(){return e(e.s=8165)}),_N_E=e.O()}]);