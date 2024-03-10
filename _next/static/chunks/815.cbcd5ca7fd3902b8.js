"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{1635:function(e,t,a){a.d(t,{E:function(){return d}});var n=a(5893),r=a(5675),i=a.n(r),l=a(7294),s=a(4841),c=a(1876).Buffer;let d=(0,l.forwardRef)((e,t)=>{let{thumbhash:a,src:r,height:l,width:d,priority:o,style:u,alt:m,title:h,fill:f,className:x="aspect-[16/9] rounded-2xl bg-gray-100",...g}=e,v=a?function(e){if(!e)return e;let{w:t,h:a,rgba:n}=(0,s.JK)(function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),a=void 0!==c?c.from(t,"base64"):Uint8Array.from(atob(t),e=>e.charCodeAt(0));return new Uint8Array(a)}(e));return function(e,t,a){let n=4*e+1,r=6+t*(5+n),i=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,255&e,0,0,t>>8,255&t,8,6,0,0,0,0,0,0,0,r>>>24,r>>16&255,r>>8&255,255&r,73,68,65,84,120,1],l=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],s=1,d=0;for(let e=0,r=0,l=n-1;e<t;e++,l+=n-1)for(i.push(e+1<t?0:1,255&n,n>>8,255&~n,n>>8^255,0),d=(d+s)%65521;r<l;r++){let e=255&a[r];i.push(e),d=(d+(s=(s+e)%65521))%65521}for(let[e,t]of(i.push(d>>8,255&d,s>>8,255&s,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130),[[12,29],[37,41+r]])){let a=-1;for(let n=e;n<t;n++)a^=i[n],a=(a=a>>>4^l[15&a])>>>4^l[15&a];a=~a,i[t++]=a>>>24,i[t++]=a>>16&255,i[t++]=a>>8&255,i[t++]=255&a}let o=void 0!==c?c.from(new Uint8Array(i)).toString("base64"):btoa(String.fromCharCode(...i));return"data:image/png;base64,".concat(o)}(t,a,n)}(a):void 0;return(0,n.jsx)(i(),{priority:o,style:{...u},fill:f,className:"bg-no-repeat ".concat(x),draggable:"false",src:r,alt:m||"",title:h||"",height:f?void 0:l,width:f?void 0:d,placeholder:v||void 0,ref:t,...g})});d.displayName="Image"},4564:function(e,t,a){a.d(t,{H:function(){return i}});var n=a(5893),r=a(230);a(7294);let i=e=>{let{content:t}=e;return(0,n.jsx)(r.i,{content:t})}},7633:function(e,t,a){a.d(t,{H:function(){return n.H}});var n=a(4564)},9815:function(e,t,a){a.r(t),a.d(t,{HomePostPage:function(){return h}});var n=a(5893),r=a(7294),i=a(7347),l=a(7098),s=a(9205);let c=()=>(0,n.jsxs)("article",{className:"flex flex-col items-start justify-between card pointer-events-none",children:[(0,n.jsx)(s.M,{}),(0,n.jsxs)("div",{className:" w-full",children:[(0,n.jsx)("div",{className:"mt-3 text-lg font-semibold tracking-tight leading-6",children:(0,n.jsx)(l.N,{as:"h3",width:"45%"})}),(0,n.jsxs)("div",{className:"relative z-10 mt-5 line-clamp-3 text-sm leading-6 flex flex-col",children:[(0,n.jsx)(l.N,{className:"mt-1px bg-zinc-600 dark:bg-zinc-400",width:"85%"}),(0,n.jsx)(l.N,{className:"mt-1px bg-zinc-600 dark:bg-zinc-400",width:"92%"}),(0,n.jsx)(l.N,{className:"mt-1px bg-zinc-600 dark:bg-zinc-400",width:"60%"})]})]})]});var d=a(1635),o=a(7633);let u=e=>{var t;let a=(0,r.useRef)(null);if(!e.article)return(0,n.jsx)(c,{});let l=e.article.attributes,s=null===(t=l.thumbnail.data)||void 0===t?void 0:t.attributes;return(0,n.jsxs)("article",{className:"flex flex-col items-start justify-between card pointer-events-none",children:[(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)(d.E,{ref:a,thumbhash:s.thumbhash,src:"/".concat(s.name),alt:s.alternativeText,width:s.width,height:s.height}),(0,n.jsx)("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"})]}),(0,n.jsxs)("div",{className:" w-full",children:[(0,n.jsx)("h3",{className:"mt-3 text-2xl font-bold line-clamp-3 4xl:text-regular-18 group-hover:text-gray-600",children:(0,n.jsx)(i.r,{beforeTransition:()=>{a.current&&(a.current.style.viewTransitionName="banner-img")},afterTransition:()=>{a.current&&(a.current.style.viewTransitionName="")},href:"/blog/".concat(l.slug,"/"),onClick:()=>{},data:e.article,className:"pointer-events-auto card-link",children:l.title})}),(0,n.jsx)("div",{className:"relative z-10 mt-5 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400",children:(0,n.jsx)(o.H,{content:l.description})})]})]})};var m=a(4232);let h=e=>{let{children:t}=e,{data:a}=(0,m.O)(["/"]);if(a&&(null==a?void 0:a.data))return(0,n.jsx)("div",{className:"mt-16",children:(0,n.jsx)("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-10",children:a.data.map((e,t)=>(0,n.jsx)(u,{article:e},t))})})}},9205:function(e,t,a){a.d(t,{M:function(){return r}});var n=a(5893);let r=e=>{let{className:t="bg-zinc-600 dark:bg-zinc-400 rounded-2xl",width:a,height:r}=e;return(0,n.jsx)("div",{className:"aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-zinc-400 object-cover pointer-events-none animate-pulse"})}},7098:function(e,t,a){a.d(t,{N:function(){return r}});var n=a(5893);let r=e=>{let{as:t="span",className:a="",width:r}=e,i={width:r||"auto",animationFillMode:"backwards",animationDelay:"150ms"},l="".concat(a," bg-zinc-600 dark:bg-zinc-400 animate-pulse");return"span"===t?(0,n.jsx)("span",{className:l,style:i,children:"\xa0"}):"h1"===t?(0,n.jsx)("h1",{className:l,style:i,children:"\xa0"}):"h2"===t?(0,n.jsx)("h2",{className:l,style:i,children:"\xa0"}):"h3"===t?(0,n.jsx)("h3",{className:l,style:i,children:"\xa0"}):(0,n.jsx)(n.Fragment,{})}}}]);