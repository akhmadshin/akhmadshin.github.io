(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{3841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return u},default:function(){return l}});let s=r(8754);r(5893),r(7294);let i=s._(r(8354));function n(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let r=i.default,s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e});let l=(s={...s,...t}).loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?r({...s,loader:()=>null!=l?l().then(n):Promise.resolve(n(()=>null))}):(delete s.webpack,delete s.modules,u(r,s))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7309:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return s}});let s=r(8754)._(r(7294)).default.createContext(null)},8354:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let s=r(8754)._(r(7294)),i=r(7309),n=[],u=[],l=!1;function o(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class a{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function o(){if(!n){let t=new a(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!l){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(t.includes(r))return o()})}function c(e,t){!function(){o();let e=s.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=s.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),s.default.useMemo(()=>{var t;return u.loading||u.error?s.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:n.retry}):u.loaded?s.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return c.preload=()=>o(),c.displayName="LoadableComponent",s.default.forwardRef(c)}(o,e)}function h(e,t){let r=[];for(;e.length;){let s=e.pop();r.push(s(t))}return Promise.all(r).then(()=>{if(e.length)return h(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{h(n).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(l=!0,t());h(u,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let d=c},5152:function(e,t,r){e.exports=r(3841)},9008:function(e,t,r){e.exports=r(6665)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=s.useState,u=s.useEffect,l=s.useLayoutEffect,o=s.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),s=n({inst:{value:r,getSnapshot:t}}),i=s[0].inst,c=s[1];return l(function(){i.value=r,i.getSnapshot=t,a(i)&&c({inst:i})},[e,r,t]),u(function(){return a(i)&&c({inst:i}),e(function(){a(i)&&c({inst:i})})},[e]),o(r),r};t.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:c},1688:function(e,t,r){"use strict";e.exports=r(3250)},7837:function(e,t,r){"use strict";let s;r.d(t,{a:function(){return w}});var i=r(2161),n=r(81),u=r(5761),l=r(3989),o=r(2379);class a extends l.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),c(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return h(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,i.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let n=this.hasListeners();n&&d(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==s||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let u=this.computeRefetchInterval();n&&(this.currentQuery!==s||this.options.enabled!==r.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!r.isPlaceholderData:(0,i.VS)(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(i.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),i.sk||this.currentResult.isStale||!(0,i.PN)(this.options.staleTime))return;let e=(0,i.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!i.sk&&!1!==this.options.enabled&&(0,i.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||u.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let s=this.currentQuery,n=this.options,u=this.currentResult,l=this.currentResultState,a=this.currentResultOptions,h=e!==s,f=h?e.state:this.currentQueryInitialState,y=h?this.currentResult:this.previousQueryResult,{state:m}=e,{dataUpdatedAt:b,error:v,errorUpdatedAt:R,fetchStatus:_,status:g}=m,S=!1,E=!1;if(t._optimisticResults){let r=this.hasListeners(),i=!r&&c(e,t),u=r&&d(e,s,t,n);(i||u)&&(_=(0,o.Kw)(e.options.networkMode)?"fetching":"paused",b||(g="loading")),"isRestoring"===t._optimisticResults&&(_="idle")}if(t.keepPreviousData&&!m.dataUpdatedAt&&null!=y&&y.isSuccess&&"error"!==g)r=y.data,b=y.dataUpdatedAt,g=y.status,S=!0;else if(t.select&&void 0!==m.data){if(u&&m.data===(null==l?void 0:l.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(m.data),r=(0,i.oE)(null==u?void 0:u.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=m.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===g){let e;if(null!=u&&u.isPlaceholderData&&t.placeholderData===(null==a?void 0:a.placeholderData))e=u.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(g="success",r=(0,i.oE)(null==u?void 0:u.data,e,t),E=!0)}this.selectError&&(v=this.selectError,r=this.selectResult,R=Date.now(),g="error");let O="fetching"===_,C="loading"===g,Q="error"===g;return{status:g,fetchStatus:_,isLoading:C,isSuccess:"success"===g,isError:Q,isInitialLoading:C&&O,data:r,dataUpdatedAt:b,error:v,errorUpdatedAt:R,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>f.dataUpdateCount||m.errorUpdateCount>f.errorUpdateCount,isFetching:O,isRefetching:O&&!C,isLoadingError:Q&&0===m.dataUpdatedAt,isPaused:"paused"===_,isPlaceholderData:E,isPreviousData:S,isRefetchError:Q&&0!==m.dataUpdatedAt,isStale:p(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,i.VS)(r,t))return;this.currentResult=r;let s={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let s=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&s.add("error"),Object.keys(this.currentResult).some(e=>this.currentResult[e]!==t[e]&&s.has(e))})()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,o.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){n.V.batch(()=>{var t,r,s,i,n,u,l,o;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(s=(i=this.options).onSettled)||s.call(i,this.currentResult.data,null)):e.onError&&(null==(n=(u=this.options).onError)||n.call(u,this.currentResult.error),null==(l=(o=this.options).onSettled)||l.call(o,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function c(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&h(e,t,t.refetchOnMount)}function h(e,t,r){if(!1!==t.enabled){let s="function"==typeof r?r(e):r;return"always"===s||!1!==s&&p(e,t)}return!1}function d(e,t,r,s){return!1!==r.enabled&&(e!==t||!1===s.enabled)&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return e.isStaleByTime(t.staleTime)}var f=r(7294);let y=r(1688).useSyncExternalStore,m=f.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),b=()=>f.useContext(m);var v=r(5945);let R=f.createContext(!1),_=()=>f.useContext(R);R.Provider;let g=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},S=e=>{f.useEffect(()=>{e.clearReset()},[e])},E=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:s})=>{var i;return e.isError&&!t.isReset()&&!e.isFetching&&(i=[e.error,s],"function"==typeof r?r(...i):!!r)},O=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},C=(e,t)=>e.isLoading&&e.isFetching&&!t,Q=(e,t,r)=>(null==e?void 0:e.suspense)&&C(t,r),I=(e,t,r)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function w(e,t,r){return function(e,t){let r=(0,v.NL)({context:e.context}),s=_(),i=b(),u=r.defaultQueryOptions(e);u._optimisticResults=s?"isRestoring":"optimistic",u.onError&&(u.onError=n.V.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=n.V.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=n.V.batchCalls(u.onSettled)),O(u),g(u,i),S(i);let[l]=f.useState(()=>new t(r,u)),o=l.getOptimisticResult(u);if(y(f.useCallback(e=>{let t=s?()=>void 0:l.subscribe(n.V.batchCalls(e));return l.updateResult(),t},[l,s]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),f.useEffect(()=>{l.setOptions(u,{listeners:!1})},[u,l]),Q(u,o,s))throw I(u,l,i);if(E({result:o,errorResetBoundary:i,useErrorBoundary:u.useErrorBoundary,query:l.getCurrentQuery()}))throw o.error;return u.notifyOnChangeProps?o:l.trackResult(o)}((0,i._v)(e,t,r),a)}}}]);