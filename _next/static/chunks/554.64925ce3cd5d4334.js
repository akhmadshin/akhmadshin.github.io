"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[554],{7246:function(e,t,r){r.d(t,{E:function(){return v},m:function(){return p}});var n=r(5893),i=r(5675),a=r.n(i),s=r(7294),l=r(4841),c=r(1876).Buffer,o=r(3471),u=r(3935),d=r(9008),f=r.n(d);let h=e=>{let{isAppRouter:t,imgAttributes:r}=e;console.log("prefetchImgAttributes = ",r);let i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...function(e){let[t,r]=s.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}(r.fetchPriority)};return t&&u.preload?(u.preload(r.src,i),null):(0,n.jsx)(f(),{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})};var m=r(3707);let g=(e,t,r)=>{let{deviceSizes:n,imageSizes:i}=e,a=[...n,...i].sort((e,t)=>e-t);if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}},p=e=>{let{src:t,width:r,sizes:n}=e,{widths:i,kind:a}=g({deviceSizes:[526,680,832,1080,1280],imageSizes:[16,32,48,64,96,128,256,316],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1},r,n);return i.map((e,r)=>"".concat((0,m.default)({src:t,width:e})," ").concat("w"===a?e:r+1).concat(a)).join(", ")},v=(0,s.forwardRef)((e,t)=>{let{thumbhash:r,src:i,height:u,width:d,priority:f,style:m,alt:g,title:p,fill:v,prefetchImgAttributes:x,className:w="lg:aspect-[16/9] object-cover aspect-[4/3] rounded-2xl bg-gray-100",...b}=e,[j,y]=(0,s.useState)(),N=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(N.current){if(N.current.complete){y(void 0);return}(0,o.K)(()=>{y(function(e){if(!e)return e;let{w:t,h:r,rgba:n}=(0,l.JK)(function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),r=void 0!==c?c.from(t,"base64"):Uint8Array.from(atob(t),e=>e.charCodeAt(0));return new Uint8Array(r)}(e));return function(e,t,r){let n=4*e+1,i=6+t*(5+n),a=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,255&e,0,0,t>>8,255&t,8,6,0,0,0,0,0,0,0,i>>>24,i>>16&255,i>>8&255,255&i,73,68,65,84,120,1],s=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],l=1,o=0;for(let e=0,i=0,s=n-1;e<t;e++,s+=n-1)for(a.push(e+1<t?0:1,255&n,n>>8,255&~n,n>>8^255,0),o=(o+l)%65521;i<s;i++){let e=255&r[i];a.push(e),o=(o+(l=(l+e)%65521))%65521}for(let[e,t]of(a.push(o>>8,255&o,l>>8,255&l,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130),[[12,29],[37,41+i]])){let r=-1;for(let n=e;n<t;n++)r^=a[n],r=(r=r>>>4^s[15&r])>>>4^s[15&r];r=~r,a[t++]=r>>>24,a[t++]=r>>16&255,a[t++]=r>>8&255,a[t++]=255&r}let u=void 0!==c?c.from(new Uint8Array(a)).toString("base64"):btoa(String.fromCharCode(...a));return"data:image/png;base64,".concat(u)}(t,r,n)}(r))})}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{priority:f,fill:v,className:"bg-no-repeat bg-gray-500 ".concat(w),draggable:"false",src:i,alt:g||"",title:p||"",height:v?void 0:u,width:v?void 0:d,placeholder:j,ref:e=>{N.current=e,"function"==typeof t?t(e):t&&(t.current=e)},...b}),x&&(0,n.jsx)(h,{isAppRouter:!1,imgAttributes:x})]})});v.displayName="Image"},4564:function(e,t,r){r.d(t,{H:function(){return a}});var n=r(5893),i=r(230);r(7294);let a=e=>{let{content:t}=e;return(0,n.jsx)(i.i,{content:t})}},7633:function(e,t,r){r.d(t,{H:function(){return n.H}});var n=r(4564)},4554:function(e,t,r){r.r(t),r.d(t,{HomePostPage:function(){return f}});var n=r(5893),i=r(7294),a=r(7347),s=r(73),l=r(7246),c=r(7633);let o=e=>{var t;let r=(0,i.useRef)(null),o=(0,i.useRef)(null),[u,d]=(0,i.useState)();if((0,i.useEffect)(()=>{o.current&&o.current.addEventListener("mouseenter",e=>{d({style:{},srcSet:(0,l.m)({width:window.innerWidth,src:"/".concat(h.name),sizes:"100vw"}),src:"/".concat(h.name),sizes:"100vw",loading:"lazy",width:h.width,height:h.height}),console.log("mouseOver")},{once:!0})},[o]),!e.article)return(0,n.jsx)(s.V,{});let f=e.article.attributes,h=null===(t=f.thumbnail.data)||void 0===t?void 0:t.attributes;return(0,n.jsx)("div",{ref:o,children:(0,n.jsxs)("article",{className:"flex flex-col items-start justify-between card pointer-events-none",children:[(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)(l.E,{priority:e.priority,sizes:"(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",ref:r,thumbhash:h.thumbhash,src:"/".concat(h.name),alt:h.alternativeText,width:h.width,height:h.height,prefetchImgAttributes:u}),(0,n.jsx)("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"})]}),(0,n.jsxs)("div",{className:" w-full",children:[(0,n.jsx)("h3",{className:"mt-2 text-2xl font-bold line-clamp-3 4xl:text-regular-18 group-hover:text-gray-600",children:(0,n.jsx)(a.r,{beforeTransition:()=>{r.current&&(r.current.style.viewTransitionName="banner-img")},afterTransition:()=>{r.current&&(r.current.style.viewTransitionName="")},href:"/blog/".concat(f.slug,"/"),onClick:()=>{},data:e.article,className:"pointer-events-auto card-link",children:f.title})}),(0,n.jsx)("div",{className:"relative z-10 mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-200",children:(0,n.jsx)(c.H,{content:f.description})})]})]})})};var u=r(4364),d=r(1909);let f=()=>{let{data:e,isLoading:t,isFetching:r}=(0,u.V)();return!e&&(t||r)?(0,n.jsx)(d.j,{}):e&&(null==e?void 0:e.data)?(0,n.jsx)("div",{className:"mt-16",children:(0,n.jsx)("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12",children:e.data.map((e,t)=>(0,n.jsx)(o,{article:e,priority:0===t},t))})}):void 0}},3707:function(e,t,r){function n(e){let{src:t,width:r}=e;return"".concat(t.replace("/","/".concat(r,"_")))}r.r(t),r.d(t,{default:function(){return n}})}}]);