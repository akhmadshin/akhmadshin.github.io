(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{8165:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(8582)}])},5295:function(e,t,r){"use strict";r.d(t,{E:function(){return j}});var n=r(5893),s=r(5675),i=r.n(s),a=r(7294),l=r(4841),c=r(1876).Buffer,d=r(3471),o=r(3935),u=r(9008),h=r.n(u),f=r(3707);let x=(e,t,r)=>{let{deviceSizes:n,imageSizes:s}=e,i=[...n,...s].sort((e,t)=>e-t);if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...Array.from(new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1])))],kind:"x"}},g=e=>{let{src:t,width:r,sizes:n}=e,{widths:s,kind:i}=x({deviceSizes:[526,680,832,1080,1280],imageSizes:[16,32,48,64,96,128,256,316],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1},r,n);return s.map((e,r)=>"".concat((0,f.default)({src:t,width:e})," ").concat("w"===i?e:r+1).concat(i)).join(", ")},m=e=>{let{isAppRouter:t,src:r,width:s,height:i,sizes:a}=e,l={style:{},srcSet:g({width:window.innerWidth,src:r,sizes:a}),src:r,sizes:"100vw",loading:"lazy",width:Number(s),height:Number(i)},c={as:"image",imageSrcSet:l.srcSet,imageSizes:l.sizes,crossOrigin:l.crossOrigin,referrerPolicy:l.referrerPolicy};return t&&o.preload?(o.preload(l.src,c),null):(0,n.jsx)(h(),{children:(0,n.jsx)("link",{rel:"preload",href:l.srcSet?void 0:l.src,...c},"__nimg-"+l.src+l.srcSet+l.sizes)})},j=(0,a.forwardRef)((e,t)=>{let{thumbhash:r,src:s,height:o,width:u,priority:h,style:f,alt:x,title:g,fill:j,prefetchSizes:p,className:w="lg:aspect-[16/9] object-cover aspect-[4/3] rounded-2xl bg-gray-100",...v}=e,[N,b]=(0,a.useState)(),y=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(y.current){if(y.current.complete){b(void 0);return}(0,d.K)(()=>{b(function(e){if(!e)return e;let{w:t,h:r,rgba:n}=(0,l.JK)(function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),r=void 0!==c?c.from(t,"base64"):Uint8Array.from(atob(t),e=>e.charCodeAt(0));return new Uint8Array(r)}(e));return function(e,t,r){let n=4*e+1,s=6+t*(5+n),i=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,255&e,0,0,t>>8,255&t,8,6,0,0,0,0,0,0,0,s>>>24,s>>16&255,s>>8&255,255&s,73,68,65,84,120,1],a=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],l=1,d=0;for(let e=0,s=0,a=n-1;e<t;e++,a+=n-1)for(i.push(e+1<t?0:1,255&n,n>>8,255&~n,n>>8^255,0),d=(d+l)%65521;s<a;s++){let e=255&r[s];i.push(e),d=(d+(l=(l+e)%65521))%65521}for(let[e,t]of(i.push(d>>8,255&d,l>>8,255&l,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130),[[12,29],[37,41+s]])){let r=-1;for(let n=e;n<t;n++)r^=i[n],r=(r=r>>>4^a[15&r])>>>4^a[15&r];r=~r,i[t++]=r>>>24,i[t++]=r>>16&255,i[t++]=r>>8&255,i[t++]=255&r}let o=void 0!==c?c.from(new Uint8Array(i)).toString("base64"):btoa(String.fromCharCode(...i));return"data:image/png;base64,".concat(o)}(t,r,n)}(r))})}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{priority:h,fill:j,className:"bg-no-repeat bg-gray-500 ".concat(w),draggable:"false",src:s,alt:x||"",title:g||"",height:j?void 0:o,width:j?void 0:u,placeholder:N,ref:e=>{y.current=e,"function"==typeof t?t(e):t&&(t.current=e)},...v}),p&&(0,n.jsx)(m,{isAppRouter:!1,src:s,sizes:p,height:o,width:u})]})});j.displayName="Image"},8267:function(e,t,r){"use strict";r.d(t,{h:function(){return a}});var n=r(5893);r(7294);var s=r(9008),i=r.n(s);let a=e=>{let{title:t,description:r,canonical:s}=e;return(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"og:title",content:t}),(0,n.jsx)("meta",{name:"og:description",content:r})]})}},2277:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});var n=r(5893),s=r(7294);let i=e=>{let{children:t,loader:r,defer:i=!1}=e,[a,l]=(0,s.useState)(!!window.pageMounted);return((0,s.useEffect)(()=>{i&&setTimeout(async()=>{l(!1)},document.startViewTransition?382:32)},[]),i&&r&&a)?(0,n.jsx)(r,{}):t},a=e=>{let{prePage:t,postPage:r,postPageLoader:a,deferPostPage:l=!1}=e;return(0,s.useEffect)(()=>{var e;null==r||null===(e=r.render)||void 0===e||e.preload()},[]),(0,n.jsx)(t,{children:r&&(0,n.jsx)(i,{loader:a,defer:l,children:(0,n.jsx)(r,{})})})}},4564:function(e,t,r){"use strict";r.d(t,{H:function(){return i}});var n=r(5893),s=r(230);r(7294);let i=e=>{let{content:t}=e;return(0,n.jsx)(s.i,{content:t})}},9205:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(5893);let s=e=>{let{className:t="bg-zinc-600 dark:bg-zinc-400 rounded-2xl",width:r,height:s}=e;return(0,n.jsx)("div",{className:"aspect-[4/3] lg:aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-zinc-400 object-cover pointer-events-none animate-pulse"})}},7098:function(e,t,r){"use strict";r.d(t,{N:function(){return s}});var n=r(5893);let s=e=>{let{as:t="span",className:r="",width:s}=e,i={width:s||"auto",animationFillMode:"backwards",animationDelay:"150ms"},a="".concat(r," bg-zinc-600 dark:bg-zinc-400 animate-pulse");return"span"===t?(0,n.jsx)("span",{className:a,style:i,children:"\xa0"}):"h1"===t?(0,n.jsx)("h1",{className:a,style:i,children:"\xa0"}):"h2"===t?(0,n.jsx)("h2",{className:a,style:i,children:"\xa0"}):"h3"===t?(0,n.jsx)("h3",{className:a,style:i,children:"\xa0"}):(0,n.jsx)(n.Fragment,{})}},4364:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(7633),s=r(3542),i=r(1163);let a=()=>{let e=(0,i.useRouter)(),{queryKey:t,queryFn:r}=(0,s.NR)(e,!0),a=window.placeholderData;return(0,n.a)({queryKey:t,queryFn:r,placeholderData:a,staleTime:3e5})}},3707:function(e,t,r){"use strict";function n(e){let{src:t,width:r}=e;return"".concat(t.replace("/","/".concat(r,"_")))}r.r(t),r.d(t,{default:function(){return n}})},8582:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return N}});var n=r(5893);r(7294);var s=r(9876),i=r(8267),a=r(7098),l=r(9205);let c=()=>(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(a.N,{width:"95%"}),(0,n.jsx)(a.N,{width:"75%"}),(0,n.jsx)(a.N,{width:"60%"})]});var d=r(2437);let o=e=>{let{children:t}=e;return(0,n.jsx)(s.W,{className:"",children:(0,n.jsxs)("div",{className:"flex flex-col space-y-8 dark:text-gray-50",children:[(0,n.jsxs)("div",{className:"flex flex-col  space-y-6",children:[(0,n.jsx)(a.N,{as:"h1",className:"leading-tight text-5xl font-bold",width:"65%"}),(0,n.jsx)("div",{className:"relative w-full banner-img",children:(0,n.jsx)(l.M,{width:16,height:9})})]}),(0,n.jsxs)("div",{className:"dark:text-gray-100",children:[(0,n.jsx)(c,{}),(0,n.jsx)(d.B,{})]})]})})};var u=r(5295),h=r(4564),f=r(4364);let x=e=>{var t,r;let{children:a}=e,{data:l,isLoading:c,isFetching:d}=(0,f.V)();if(!l&&(c||d))return(0,n.jsx)(o,{children:a});if(!l)return a;let x=l.attributes||{},g=(null===(r=x.thumbnail)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.attributes)||{},{title:m,description:j}=x;return(0,n.jsxs)(s.W,{children:[(0,n.jsx)(i.h,{title:m,description:""}),(0,n.jsxs)("article",{className:"flex flex-col space-y-8 dark:text-gray-50",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,n.jsx)("h1",{className:"leading-tight text-5xl font-bold ",children:m}),(0,n.jsx)("div",{className:"banner-img",children:(0,n.jsx)(u.E,{priority:!0,sizes:"100vw",thumbhash:g.thumbhash,src:"/".concat(g.name),alt:g.alternativeText,width:g.width,height:g.height})})]}),(0,n.jsx)("div",{className:"text-white text-xl",children:(0,n.jsx)(h.H,{content:j})}),(0,n.jsx)("div",{className:"dark:text-gray-100",children:a})]})]})};var g=r(5152),m=r.n(g),j=r(2277);let p=m()(()=>r.e(333).then(r.bind(r,333)).then(e=>e.BlogItemPostPage),{loadableGenerated:{webpack:()=>[333]},loading:()=>(0,n.jsx)(d.B,{})}),w=()=>(0,n.jsx)(j.c,{deferPostPage:!0,postPageLoader:d.B,prePage:x,postPage:p});var v=!0;function N(){return(0,n.jsx)(w,{})}},2437:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(5893),s=r(7098);let i=()=>(0,n.jsx)("div",{className:"mt-10",children:(0,n.jsxs)("div",{className:"prose lg:prose-xl max-w-none dark:prose-invert flex flex-col",children:[(0,n.jsx)(s.N,{width:"65%",as:"h2"}),(0,n.jsx)(s.N,{width:"90%"}),(0,n.jsx)(s.N,{width:"93%"}),(0,n.jsx)(s.N,{width:"85%"}),(0,n.jsx)(s.N,{width:"98%"}),(0,n.jsx)(s.N,{width:"92%"}),(0,n.jsx)(s.N,{width:"95%"}),(0,n.jsx)(s.N,{width:"91%"}),(0,n.jsx)(s.N,{width:"60%"})]})})}},function(e){e.O(0,[541,367,888,774,179],function(){return e(e.s=8165)}),_N_E=e.O()}]);