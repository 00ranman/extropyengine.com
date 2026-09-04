const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/routes-B4ddTVKf.js","assets/useRouter-80ermfqe.js","assets/site-shell-Dob74w1i.js","assets/utils-Dk_44zMo.js","assets/doors-C9hUOrIl.js","assets/lyrics-modal-ByOOJJLC.js","assets/ui-bits-BBt5oHh_.js","assets/symbol-key-2LGAoOjm.js","assets/dfao-BV9FBsrc.js","assets/essay-layout-DeCeNV4P.js","assets/faq-HvCEUV-y.js","assets/glossary-D-2UR2Kw.js","assets/essays-y5gZUEUe.js","assets/hoa-xQZ5gq5e.js","assets/hoa-DqM19TET.js","assets/instead-B-xbsw1l.js","assets/key-BnUtqgc8.js","assets/login-BAJhNruj.js","assets/lyrics-CN5aF9-8.js","assets/track-jobs-581k_EeB.js","assets/mvt-SbbLU70L.js","assets/open-problems-rhzybFi7.js","assets/podcast-TZj6LbHM.js","assets/proof-layers-CbAwuHDG.js","assets/research-pod-Cg1k8qLQ.js","assets/rho-BkrjldOx.js","assets/say-Daxb3BMF.js","assets/universaltimes-BcosXx0G.js","assets/docs-CLJ4gBd_.js","assets/hoa.sunset-oaks-BZpX_-rq.js","assets/closing-the-loop-3JJ90WM1.js","assets/paper-CnasjfaG.js","assets/liquidity-and-decay-CkSNinTj.js","assets/closing-the-loop-BJWNL5Om.js","assets/start-DJ4z-Jil.js","assets/ai-B6anB09w.js","assets/governance-BqLquoCp.js","assets/money-BN73V-rH.js","assets/physics-D-MoqST-.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c,u as l}from"./useRouter-80ermfqe.js";var u=r((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}}var S=!1,C=-1,ee=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<ee)}function re(){if(g=!1,S){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?ie():S=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),d=r(((e,t)=>{t.exports=u()})),f=r((e=>{var n=t();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),p=r(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=f()})),m=r((e=>{var n=d(),r=t(),i=p();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function f(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var c=!1,l=i.child;l;){if(l===n){c=!0,n=i,r=o;break}if(l===r){c=!0,r=i,n=o;break}l=l.sibling}if(!c){for(l=o.child;l;){if(l===n){c=!0,n=o,r=i;break}if(l===r){c=!0,r=o,n=i;break}l=l.sibling}if(!c)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),ee=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case ee:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function ge(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function E(e,t){me++,pe[me]=e.current,e.current=t}var _e=he(null),ve=he(null),ye=he(null),be=he(null);function xe(e,t){switch(E(ye,t),E(ve,e),E(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Kd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ge(_e),E(_e,e)}function Se(){ge(_e),ge(ve),ge(ye)}function Ce(e){e.memoizedState!==null&&E(be,e);var t=_e.current,n=Kd(t,e.type);t!==n&&(E(ve,e),E(_e,n))}function we(e){ve.current===e&&(ge(_e),ge(ve)),be.current===e&&(ge(be),np._currentValue=fe)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function Ae(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);default:return``}}function je(e){try{var t=``,n=null;do t+=Ae(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Me=Object.prototype.hasOwnProperty,Ne=n.unstable_scheduleCallback,Pe=n.unstable_cancelCallback,Fe=n.unstable_shouldYield,Ie=n.unstable_requestPaint,Le=n.unstable_now,Re=n.unstable_getCurrentPriorityLevel,ze=n.unstable_ImmediatePriority,Be=n.unstable_UserBlockingPriority,Ve=n.unstable_NormalPriority,He=n.unstable_LowPriority,Ue=n.unstable_IdlePriority,We=n.log,Ge=n.unstable_setDisableYieldValue,Ke=null,qe=null;function Je(e){if(typeof We==`function`&&Ge(e),qe&&typeof qe.setStrictMode==`function`)try{qe.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function it(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function st(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ct(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ye(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ut(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ut(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ft(e,t){var n=t&-t;return n=n&42?1:pt(n),(n&(e.suspendedLanes|t))===0?n:0}function pt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ht(){var e=T.p;return e===0?(e=window.event,e===void 0?32:vp(e.type)):e}function gt(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var _t=Math.random().toString(36).slice(2),vt=`__reactFiber$`+_t,yt=`__reactProps$`+_t,bt=`__reactContainer$`+_t,xt=`__reactEvents$`+_t,St=`__reactListeners$`+_t,Ct=`__reactHandles$`+_t,wt=`__reactResources$`+_t,Tt=`__reactMarker$`+_t;function Et(e){delete e[vt],delete e[yt],delete e[xt],delete e[St],delete e[Ct]}function Dt(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hf(e);e!==null;){if(n=e[vt])return n;e=hf(e)}return t}e=n,n=e.parentNode}return null}function Ot(e){if(e=e[vt]||e[bt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function At(e){var t=e[wt];return t||=e[wt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function jt(e){e[Tt]=!0}var Mt=new Set,Nt={};function Pt(e,t){Ft(e,t),Ft(e+`Capture`,t)}function Ft(e,t){for(Nt[e]=t,e=0;e<t.length;e++)Mt.add(t[e])}var It=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Lt={},Rt={};function zt(e){return Me.call(Rt,e)?!0:Me.call(Lt,e)?!1:It.test(e)?Rt[e]=!0:(Lt[e]=!0,!1)}function Bt(e,t,n){if(zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Vt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ht(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Ut(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Wt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Gt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kt(e){if(!e._valueTracker){var t=Wt(e)?`checked`:`value`;e._valueTracker=Gt(e,t,``+e[t])}}function qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Wt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Jt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Yt=/[\n"\\]/g;function Xt(e){return e.replace(Yt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ut(t)):e.value!==``+Ut(t)&&(e.value=``+Ut(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):$t(e,o,Ut(n)):$t(e,o,Ut(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ut(s):e.removeAttribute(`name`)}function Qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Kt(e);return}n=n==null?``:``+Ut(n),t=t==null?n:``+Ut(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Kt(e)}function $t(e,t,n){t===`number`&&Jt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tn(e,t,n){if(t!=null&&(t=``+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Ut(n)}function nn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(de(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=Ut(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Kt(e)}function rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var an=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function on(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||an.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function sn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&on(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&on(e,o,t[o])}function cn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var ln=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),un=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dn(e){return un.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function fn(){}var pn=null;function mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hn=null,gn=null;function _n(e){var t=Ot(e);if(t&&(e=t.stateNode)){var n=e[yt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Xt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[yt]||null;if(!i)throw Error(a(90));Zt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&qt(r)}break a;case`textarea`:tn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}}}var vn=!1;function yn(e,t,n){if(vn)return e(t,n);vn=!0;try{return e(t)}finally{if(vn=!1,(hn!==null||gn!==null)&&(wu(),hn&&(t=hn,e=gn,gn=hn=null,_n(t),e)))for(t=0;t<e.length;t++)_n(e[t])}}function bn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[yt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var xn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),Sn=!1;if(xn)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Sn=!0}}),window.addEventListener(`test`,Cn,Cn),window.removeEventListener(`test`,Cn,Cn)}catch{Sn=!1}var wn=null,Tn=null,En=null;function Dn(){if(En)return En;var e,t=Tn,n=t.length,r,i=`value`in wn?wn.value:wn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return En=i.slice(e,1<r?1-r:void 0)}function On(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kn(){return!0}function An(){return!1}function jn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?kn:An,this.isPropagationStopped=An,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=jn(Mn),Pn=h({},Mn,{view:0,detail:0}),Fn=jn(Pn),In,Ln,Rn,zn=h({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Rn&&(Rn&&e.type===`mousemove`?(In=e.screenX-Rn.screenX,Ln=e.screenY-Rn.screenY):Ln=In=0,Rn=e),In)},movementY:function(e){return`movementY`in e?e.movementY:Ln}}),Bn=jn(zn),Vn=jn(h({},zn,{dataTransfer:0})),Hn=jn(h({},Pn,{relatedTarget:0})),Un=jn(h({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0})),Wn=jn(h({},Mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Gn=jn(h({},Mn,{data:0})),Kn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Jn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Yn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jn[e])?!!t[e]:!1}function Xn(){return Yn}var Zn=jn(h({},Pn,{key:function(e){if(e.key){var t=Kn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=On(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(e){return e.type===`keypress`?On(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?On(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Qn=jn(h({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=jn(h({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn})),er=jn(h({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),tr=jn(h({},zn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nr=jn(h({},Mn,{newState:0,oldState:0})),rr=[9,13,27,32],ir=xn&&`CompositionEvent`in window,ar=null;xn&&`documentMode`in document&&(ar=document.documentMode);var or=xn&&`TextEvent`in window&&!ar,sr=xn&&(!ir||ar&&8<ar&&11>=ar),cr=` `,lr=!1;function ur(e,t){switch(e){case`keyup`:return rr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function dr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var fr=!1;function pr(e,t){switch(e){case`compositionend`:return dr(t);case`keypress`:return t.which===32?(lr=!0,cr):null;case`textInput`:return e=t.data,e===cr&&lr?null:e;default:return null}}function mr(e,t){if(fr)return e===`compositionend`||!ir&&ur(e,t)?(e=Dn(),En=Tn=wn=null,fr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return sr&&t.locale!==`ko`?null:t.data;default:return null}}var hr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!hr[e.type]:t===`textarea`}function _r(e,t,n,r){hn?gn?gn.push(r):gn=[r]:hn=r,t=Ad(t,`onChange`),0<t.length&&(n=new Nn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var vr=null,yr=null;function br(e){Cd(e,0)}function xr(e){if(qt(kt(e)))return e}function Sr(e,t){if(e===`change`)return t}var Cr=!1;if(xn){var wr;if(xn){var Tr=`oninput`in document;if(!Tr){var Er=document.createElement(`div`);Er.setAttribute(`oninput`,`return;`),Tr=typeof Er.oninput==`function`}wr=Tr}else wr=!1;Cr=wr&&(!document.documentMode||9<document.documentMode)}function Dr(){vr&&(vr.detachEvent(`onpropertychange`,D),yr=vr=null)}function D(e){if(e.propertyName===`value`&&xr(yr)){var t=[];_r(t,yr,e,mn(e)),yn(br,t)}}function Or(e,t,n){e===`focusin`?(Dr(),vr=t,yr=n,vr.attachEvent(`onpropertychange`,D)):e===`focusout`&&Dr()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return xr(yr)}function Ar(e,t){if(e===`click`)return xr(t)}function jr(e,t){if(e===`input`||e===`change`)return xr(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Me.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ir(e,t){var n=Fr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Fr(n)}}function Lr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jt(e.document)}return t}function zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Br=xn&&`documentMode`in document&&11>=document.documentMode,Vr=null,Hr=null,Ur=null,Wr=!1;function Gr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wr||Vr==null||Vr!==Jt(r)||(r=Vr,`selectionStart`in r&&zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Pr(Ur,r)||(Ur=r,r=Ad(Hr,`onSelect`),0<r.length&&(t=new Nn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var qr={animationend:Kr(`Animation`,`AnimationEnd`),animationiteration:Kr(`Animation`,`AnimationIteration`),animationstart:Kr(`Animation`,`AnimationStart`),transitionrun:Kr(`Transition`,`TransitionRun`),transitionstart:Kr(`Transition`,`TransitionStart`),transitioncancel:Kr(`Transition`,`TransitionCancel`),transitionend:Kr(`Transition`,`TransitionEnd`)},Jr={},Yr={};xn&&(Yr=document.createElement(`div`).style,`AnimationEvent`in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),`TransitionEvent`in window||delete qr.transitionend.transition);function Xr(e){if(Jr[e])return Jr[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yr)return Jr[e]=t[n];return e}var Zr=Xr(`animationend`),Qr=Xr(`animationiteration`),$r=Xr(`animationstart`),ei=Xr(`transitionrun`),ti=Xr(`transitionstart`),ni=Xr(`transitioncancel`),ri=Xr(`transitionend`),ii=new Map,ai=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ai.push(`scrollEnd`);function oi(e,t){ii.set(e,t),Pt(t,[e])}var si=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ci=[],li=0,ui=0;function di(){for(var e=li,t=ui=li=0;t<e;){var n=ci[t];ci[t++]=null;var r=ci[t];ci[t++]=null;var i=ci[t];ci[t++]=null;var a=ci[t];if(ci[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&hi(n,i,a)}}function fi(e,t,n,r){ci[li++]=e,ci[li++]=t,ci[li++]=n,ci[li++]=r,ui|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function pi(e,t,n,r){return fi(e,t,n,r),gi(e)}function mi(e,t){return fi(e,null,null,t),gi(e)}function hi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ye(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function gi(e){if(50<hu)throw hu=0,gu=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _i={};function vi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(e,t,n,r){return new vi(e,t,n,r)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xi(e,t){var n=e.alternate;return n===null?(n=yi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Si(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ci(e,t,n,r,i,o){var s=0;if(r=e,typeof e==`function`)bi(e)&&(s=1);else if(typeof e==`string`)s=qf(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=yi(31,n,t,i),e.elementType=ae,e.lanes=o,e;case y:return wi(n.children,i,o,t);case b:s=8,i|=24;break;case x:return e=yi(12,n,t,i|2),e.elementType=x,e.lanes=o,e;case te:return e=yi(13,n,t,i),e.elementType=te,e.lanes=o,e;case ne:return e=yi(19,n,t,i),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case ee:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=yi(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function wi(e,t,n,r){return e=yi(7,e,r,t),e.lanes=n,e}function Ti(e,t,n){return e=yi(6,e,null,t),e.lanes=n,e}function Ei(e){var t=yi(18,null,null,0);return t.stateNode=e,t}function Di(e,t,n){return t=yi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oi=new WeakMap;function ki(e,t){if(typeof e==`object`&&e){var n=Oi.get(e);return n===void 0?(t={value:e,source:t,stack:je(t)},Oi.set(e,t),t):n}return{value:e,source:t,stack:je(t)}}var Ai=[],ji=0,Mi=null,Ni=0,Pi=[],Fi=0,Ii=null,Li=1,Ri=``;function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Mi,Mi=e,Ni=t}function Bi(e,t,n){Pi[Fi++]=Li,Pi[Fi++]=Ri,Pi[Fi++]=Ii,Ii=e;var r=Li;e=Ri;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var a=32-Ye(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Li=1<<32-Ye(t)+i|n<<i|r,Ri=a+e}else Li=1<<a|n<<i|r,Ri=e}function Vi(e){e.return!==null&&(zi(e,1),Bi(e,1,0))}function Hi(e){for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null;for(;e===Ii;)Ii=Pi[--Fi],Pi[Fi]=null,Ri=Pi[--Fi],Pi[Fi]=null,Li=Pi[--Fi],Pi[Fi]=null}function Ui(e,t){Pi[Fi++]=Li,Pi[Fi++]=Ri,Pi[Fi++]=Ii,Li=t.id,Ri=t.overflow,Ii=e}var Wi=null,Gi=null,O=!1,Ki=null,qi=!1,Ji=Error(a(519));function Yi(e){throw ta(ki(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ji}function Xi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[vt]=e,t[yt]=r,n){case`dialog`:J(`cancel`,t),J(`close`,t);break;case`iframe`:case`object`:case`embed`:J(`load`,t);break;case`video`:case`audio`:for(n=0;n<xd.length;n++)J(xd[n],t);break;case`source`:J(`error`,t);break;case`img`:case`image`:case`link`:J(`error`,t),J(`load`,t);break;case`details`:J(`toggle`,t);break;case`input`:J(`invalid`,t),Qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:J(`invalid`,t);break;case`textarea`:J(`invalid`,t),nn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Id(t.textContent,n)?(r.popover!=null&&(J(`beforetoggle`,t),J(`toggle`,t)),r.onScroll!=null&&J(`scroll`,t),r.onScrollEnd!=null&&J(`scrollend`,t),r.onClick!=null&&(t.onclick=fn),t=!0):t=!1,t||Yi(e,!0)}function Zi(e){for(Wi=e.return;Wi;)switch(Wi.tag){case 5:case 31:case 13:qi=!1;return;case 27:case 3:qi=!0;return;default:Wi=Wi.return}}function Qi(e){if(e!==Wi)return!1;if(!O)return Zi(e),O=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||qd(e.type,e.memoizedProps)),n=!n),n&&Gi&&Yi(e),Zi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));Gi=mf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));Gi=mf(e)}else t===27?(t=Gi,tf(e.type)?(e=pf,pf=null,Gi=e):Gi=t):Gi=Wi?ff(e.stateNode.nextSibling):null;return!0}function $i(){Gi=Wi=null,O=!1}function ea(){var e=Ki;return e!==null&&(tu===null?tu=e:tu.push.apply(tu,e),Ki=null),e}function ta(e){Ki===null?Ki=[e]:Ki.push(e)}var na=he(null),ra=null,ia=null;function aa(e,t,n){E(na,t._currentValue),t._currentValue=n}function oa(e){e._currentValue=na.current,ge(na)}function sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ca(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),sa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),sa(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function la(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if(i.flags&524288)o=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(a(387));if(s=s.memoizedProps,s!==null){var c=i.type;Nr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===be.current){if(s=i.alternate,s===null)throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[np]:e.push(np))}i=i.return}e!==null&&ca(t,e,n,r),t.flags|=262144}function ua(e){for(e=e.firstContext;e!==null;){if(!Nr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function da(e){ra=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return ma(ra,e)}function pa(e,t){return ra===null&&da(e),ma(e,t)}function ma(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ia===null){if(e===null)throw Error(a(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return n}var ha=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ga=n.unstable_scheduleCallback,_a=n.unstable_NormalPriority,va={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ya(){return{controller:new ha,data:new Map,refCount:0}}function ba(e){e.refCount--,e.refCount===0&&ga(_a,function(){e.controller.abort()})}var xa=null,Sa=0,Ca=0,wa=null;function Ta(e,t){if(xa===null){var n=xa=[];Sa=0,Ca=hd(),wa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Sa++,t.then(Ea,Ea),t}function Ea(){if(--Sa===0&&xa!==null){wa!==null&&(wa.status=`fulfilled`);var e=xa;xa=null,Ca=0,wa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Da(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Oa=w.S;w.S=function(e,t){iu=Le(),typeof t==`object`&&t&&typeof t.then==`function`&&Ta(e,t),Oa!==null&&Oa(e,t)};var ka=he(null);function Aa(){var e=ka.current;return e===null?H.pooledCache:e}function ja(e,t){t===null?E(ka,ka.current):E(ka,t.pool)}function Ma(){var e=Aa();return e===null?null:{parent:va._currentValue,pool:e}}var Na=Error(a(460)),Pa=Error(a(474)),Fa=Error(a(542)),Ia={then:function(){}};function La(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ra(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(fn,fn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ha(e),e;default:if(typeof t.status==`string`)t.then(fn,fn);else{if(e=H,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ha(e),e}throw Ba=t,Na}}function za(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ba=e,Na):e}}var Ba=null;function Va(){if(Ba===null)throw Error(a(459));var e=Ba;return Ba=null,e}function Ha(e){if(e===Na||e===Fa)throw Error(a(483))}var Ua=null,Wa=0;function Ga(e){var t=Wa;return Wa+=1,Ua===null&&(Ua=[]),Ra(Ua,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function qa(e,t){throw t.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ja(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=xi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ti(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&za(a)===t.type)?(t=i(t,n.props),Ka(t,n),t.return=e,t):(t=Ci(n.type,n.key,n.props,null,e.mode,r),Ka(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Di(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=wi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ti(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Ci(t.type,t.key,t.props,null,e.mode,n),Ka(n,t),n.return=e,n;case v:return t=Di(t,e.mode,n),t.return=e,t;case ie:return t=za(t),f(e,t,n)}if(de(t)||ce(t))return t=wi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ga(t),n);if(t.$$typeof===C)return f(e,pa(e,t),n);qa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=za(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ga(n),r);if(n.$$typeof===C)return p(e,t,pa(e,n),r);qa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=za(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ga(r),i);if(r.$$typeof===C)return m(e,t,n,pa(t,r),i);qa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),O&&zi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return O&&zi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),O&&zi(i,h),l}function g(i,s,c,l){if(c==null)throw Error(a(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),O&&zi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return O&&zi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),O&&zi(i,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&za(l)===r.type){n(e,r.sibling),c=i(r,o.props),Ka(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=wi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=Ci(o.type,o.key,o.props,null,e.mode,c),Ka(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=i(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Di(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=za(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(a(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ga(o),c);if(o.$$typeof===C)return b(e,r,pa(e,o),c);qa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,o),c.return=e,e=c):(n(e,r),c=Ti(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Wa=0;var i=b(e,t,n,r);return Ua=null,i}catch(t){if(t===Na||t===Fa)throw t;var a=yi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ya=Ja(!0),Xa=Ja(!1),Za=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $a(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function eo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function to(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=gi(e),hi(e,null,n),t}return fi(e,r,t,n),gi(e)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dt(e,n)}}function ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var io=!1;function ao(){if(io){var e=wa;if(e!==null)throw e}}function oo(e,t,n,r){io=!1;var i=e.updateQueue;Za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(W&f)===f:(r&f)===f){f!==0&&f===Ca&&(io=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Za=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Yl|=o,e.lanes=o,e.memoizedState=d}}function so(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function co(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)so(n[e],t)}var lo=he(null),uo=he(0);function fo(e,t){e=ql,E(uo,e),E(lo,t),ql=e|t.baseLanes}function po(){E(uo,ql),E(lo,lo.current)}function mo(){ql=uo.current,ge(lo),ge(uo)}var ho=he(null),go=null;function _o(e){var t=e.alternate;E(So,So.current&1),E(ho,e),go===null&&(t===null||lo.current!==null||t.memoizedState!==null)&&(go=e)}function vo(e){E(So,So.current),E(ho,e),go===null&&(go=e)}function yo(e){e.tag===22?(E(So,So.current),E(ho,e),go===null&&(go=e)):bo(e)}function bo(){E(So,So.current),E(ho,ho.current)}function xo(e){ge(ho),go===e&&(go=null),ge(So)}var So=he(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lf(n)||uf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wo=0,k=null,A=null,To=null,Eo=!1,Do=!1,Oo=!1,ko=0,Ao=0,jo=null,Mo=0;function No(){throw Error(a(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,i,a){return wo=a,k=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Js:Ys,Oo=!1,a=n(r,i),Oo=!1,Do&&(a=Lo(t,n,r,i)),Io(e),a}function Io(e){w.H=qs;var t=A!==null&&A.next!==null;if(wo=0,To=A=k=null,Eo=!1,Ao=0,jo=null,t)throw Error(a(300));e===null||F||(e=e.dependencies,e!==null&&ua(e)&&(F=!0))}function Lo(e,t,n,r){k=e;var i=0;do{if(Do&&(jo=null),Ao=0,Do=!1,25<=i)throw Error(a(301));if(i+=1,To=A=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Xs,o=t(n,r)}while(Do);return o}function j(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Wo(t):t,e=e.useState()[0],(A===null?null:A.memoizedState)!==e&&(k.flags|=1024),t}function Ro(){var e=ko!==0;return ko=0,e}function zo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bo(e){if(Eo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eo=!1}wo=0,To=A=k=null,Do=!1,Ao=ko=0,jo=null}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?k.memoizedState=To=e:To=To.next=e,To}function Ho(){if(A===null){var e=k.alternate;e=e===null?null:e.memoizedState}else e=A.next;var t=To===null?k.memoizedState:To.next;if(t!==null)To=t,A=e;else{if(e===null)throw k.alternate===null?Error(a(467)):Error(a(310));A=e,e={memoizedState:A.memoizedState,baseState:A.baseState,baseQueue:A.baseQueue,queue:A.queue,next:null},To===null?k.memoizedState=To=e:To=To.next=e}return To}function Uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var t=Ao;return Ao+=1,jo===null&&(jo=[]),e=Ra(jo,e,t),t=k,(To===null?t.memoizedState:To.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Js:Ys),e}function Go(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Wo(e);if(e.$$typeof===C)return fa(e)}throw Error(a(438,String(e)))}function Ko(e){var t=null,n=k.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=k.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Uo(),k.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function qo(e,t){return typeof t==`function`?t(e):t}function Jo(e){return Yo(Ho(),A,e)}function Yo(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(wo&f)===f:(W&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ca&&(d=!0);else if((wo&p)===p){u=u.next,p===Ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,k.lanes|=p,Yl|=p;f=u.action,Oo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,k.lanes|=f,Yl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Nr(o,e.memoizedState)&&(F=!0,d&&(n=wa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xo(e){var t=Ho(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Nr(o,t.memoizedState)||(F=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zo(e,t,n){var r=k,i=Ho(),o=O;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var s=!Nr((A||i).memoizedState,n);if(s&&(i.memoizedState=n,F=!0),i=i.queue,Ss(es.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||To!==null&&To.memoizedState.tag&1){if(r.flags|=2048,_s(9,{destroy:void 0},$o.bind(null,r,i,n,t),null),H===null)throw Error(a(349));o||wo&127||Qo(r,t,n)}return n}function Qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=k.updateQueue,t===null?(t=Uo(),k.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $o(e,t,n,r){t.value=n,t.getSnapshot=r,ts(t)&&ns(e)}function es(e,t,n){return n(function(){ts(t)&&ns(e)})}function ts(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function ns(e){var t=mi(e,2);t!==null&&yu(t,e,2)}function rs(e){var t=Vo();if(typeof e==`function`){var n=e;if(e=n(),Oo){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t}function is(e,t,n,r){return e.baseState=n,Yo(e,A,typeof r==`function`?r:qo)}function as(e,t,n,r,i){if(Ws(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,os(t,o)):(o.next=n.next,t.pending=n.next=o)}}function os(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),ss(e,t,s)}catch(n){ls(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),ss(e,t,a)}catch(n){ls(e,t,n)}}function ss(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){cs(e,t,n)},function(n){return ls(e,t,n)}):cs(e,t,n)}function cs(e,t,n){t.status=`fulfilled`,t.value=n,us(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,os(e,n)))}function ls(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,us(t),t=t.next;while(t!==r)}e.action=null}function us(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ds(e,t){return t}function fs(e,t){if(O){var n=H.formState;if(n!==null){a:{var r=k;if(O){if(Gi){b:{for(var i=Gi,a=qi;i.nodeType!==8;){if(!a){i=null;break b}if(i=ff(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Gi=ff(i.nextSibling),r=i.data===`F!`;break a}}Yi(r)}r=!1}r&&(t=n[0])}}return n=Vo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},n.queue=r,n=Hs.bind(null,k,r),r.dispatch=n,r=rs(!1),a=Us.bind(null,k,!1,r.queue),r=Vo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=as.bind(null,k,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ps(e){return ms(Ho(),A,e)}function ms(e,t,n){if(t=Yo(e,t,ds)[0],e=Jo(qo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Wo(t)}catch(e){throw e===Na?Fa:e}else r=t;t=Ho();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(k.flags|=2048,_s(9,{destroy:void 0},hs.bind(null,i,n),null)),[r,a,e]}function hs(e,t){e.action=t}function gs(e){var t=Ho(),n=A;if(n!==null)return ms(t,n,e);Ho(),t=t.memoizedState,n=Ho();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function _s(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=k.updateQueue,t===null&&(t=Uo(),k.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function vs(){return Ho().memoizedState}function ys(e,t,n,r){var i=Vo();k.flags|=e,i.memoizedState=_s(1|t,{destroy:void 0},n,r===void 0?null:r)}function bs(e,t,n,r){var i=Ho();r=r===void 0?null:r;var a=i.memoizedState.inst;A!==null&&r!==null&&Po(r,A.memoizedState.deps)?i.memoizedState=_s(t,a,n,r):(k.flags|=e,i.memoizedState=_s(1|t,a,n,r))}function xs(e,t){ys(8390656,8,e,t)}function Ss(e,t){bs(2048,8,e,t)}function Cs(e){k.flags|=4;var t=k.updateQueue;if(t===null)t=Uo(),k.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ws(e){var t=Ho().memoizedState;return Cs({ref:t,nextImpl:e}),function(){if(V&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Ts(e,t){return bs(4,2,e,t)}function Es(e,t){return bs(4,4,e,t)}function Ds(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Os(e,t,n){n=n==null?null:n.concat([e]),bs(4,4,Ds.bind(null,t,e),n)}function ks(){}function As(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function js(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Po(t,r[1]))return r[0];if(r=e(),Oo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r}function Ms(e,t,n){return n===void 0||wo&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=n,e=vu(),k.lanes|=e,Yl|=e,n)}function M(e,t,n,r){return Nr(n,t)?n:lo.current===null?!(wo&42)||wo&1073741824&&!(W&261930)?(F=!0,e.memoizedState=n):(e=vu(),k.lanes|=e,Yl|=e,t):(e=Ms(e,n,r),Nr(e,t)||(F=!0),e)}function N(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Us(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?P(e,t,Da(c,r),_u(e)):P(e,t,r,_u(e))}catch(n){P(e,t,{then:function(){},status:`rejected`,reason:n},_u())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Ns(){}function Ps(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=Fs(e).queue;N(e,i,t,fe,n===null?Ns:function(){return Is(e),n(r)})}function Fs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Is(e){var t=Fs(e);t.next===null&&(t=e.alternate.memoizedState),P(e,t.next.queue,{},_u())}function Ls(){return fa(np)}function Rs(){return Ho().memoizedState}function zs(){return Ho().memoizedState}function Bs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_u();e=eo(n);var r=to(t,e,n);r!==null&&(yu(r,t,n),no(r,t,n)),t={cache:ya()},e.payload=t;return}t=t.return}}function Vs(e,t,n){var r=_u();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ws(e)?Gs(t,n):(n=pi(e,t,n,r),n!==null&&(yu(n,e,r),Ks(n,t,r)))}function Hs(e,t,n){P(e,t,n,_u())}function P(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ws(e))Gs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o))return fi(e,t,i,0),H===null&&di(),!1}catch{}if(n=pi(e,t,i,r),n!==null)return yu(n,e,r),Ks(n,t,r),!0}return!1}function Us(e,t,n,r){if(r={lane:2,revertLane:hd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ws(e)){if(t)throw Error(a(479))}else t=pi(e,n,r,2),t!==null&&yu(t,e,2)}function Ws(e){var t=e.alternate;return e===k||t!==null&&t===k}function Gs(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ks(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dt(e,n)}}var qs={readContext:fa,use:Go,useCallback:No,useContext:No,useEffect:No,useImperativeHandle:No,useLayoutEffect:No,useInsertionEffect:No,useMemo:No,useReducer:No,useRef:No,useState:No,useDebugValue:No,useDeferredValue:No,useTransition:No,useSyncExternalStore:No,useId:No,useHostTransitionStatus:No,useFormState:No,useActionState:No,useOptimistic:No,useMemoCache:No,useCacheRefresh:No};qs.useEffectEvent=No;var Js={readContext:fa,use:Go,useCallback:function(e,t){return Vo().memoizedState=[e,t===void 0?null:t],e},useContext:fa,useEffect:xs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ys(4194308,4,Ds.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){ys(4,2,e,t)},useMemo:function(e,t){var n=Vo();t=t===void 0?null:t;var r=e();if(Oo){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Vo();if(n!==void 0){var i=n(t);if(Oo){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Vs.bind(null,k,e),[r.memoizedState,e]},useRef:function(e){var t=Vo();return e={current:e},t.memoizedState=e},useState:function(e){e=rs(e);var t=e.queue,n=Hs.bind(null,k,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ks,useDeferredValue:function(e,t){return Ms(Vo(),e,t)},useTransition:function(){var e=rs(!1);return e=N.bind(null,k,e.queue,!0,!1),Vo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=k,i=Vo();if(O){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),H===null)throw Error(a(349));W&127||Qo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xs(es.bind(null,r,o,e),[e]),r.flags|=2048,_s(9,{destroy:void 0},$o.bind(null,r,o,n,t),null),n},useId:function(){var e=Vo(),t=H.identifierPrefix;if(O){var n=Ri,r=Li;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Mo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ls,useFormState:fs,useActionState:fs,useOptimistic:function(e){var t=Vo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Us.bind(null,k,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ko,useCacheRefresh:function(){return Vo().memoizedState=Bs.bind(null,k)},useEffectEvent:function(e){var t=Vo(),n={impl:e};return t.memoizedState=n,function(){if(V&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Ys={readContext:fa,use:Go,useCallback:As,useContext:fa,useEffect:Ss,useImperativeHandle:Os,useInsertionEffect:Ts,useLayoutEffect:Es,useMemo:js,useReducer:Jo,useRef:vs,useState:function(){return Jo(qo)},useDebugValue:ks,useDeferredValue:function(e,t){return M(Ho(),A.memoizedState,e,t)},useTransition:function(){var e=Jo(qo)[0],t=Ho().memoizedState;return[typeof e==`boolean`?e:Wo(e),t]},useSyncExternalStore:Zo,useId:Rs,useHostTransitionStatus:Ls,useFormState:ps,useActionState:ps,useOptimistic:function(e,t){return is(Ho(),A,e,t)},useMemoCache:Ko,useCacheRefresh:zs};Ys.useEffectEvent=ws;var Xs={readContext:fa,use:Go,useCallback:As,useContext:fa,useEffect:Ss,useImperativeHandle:Os,useInsertionEffect:Ts,useLayoutEffect:Es,useMemo:js,useReducer:Xo,useRef:vs,useState:function(){return Xo(qo)},useDebugValue:ks,useDeferredValue:function(e,t){var n=Ho();return A===null?Ms(n,e,t):M(n,A.memoizedState,e,t)},useTransition:function(){var e=Xo(qo)[0],t=Ho().memoizedState;return[typeof e==`boolean`?e:Wo(e),t]},useSyncExternalStore:Zo,useId:Rs,useHostTransitionStatus:Ls,useFormState:gs,useActionState:gs,useOptimistic:function(e,t){var n=Ho();return A===null?(n.baseState=e,[e,n.queue.dispatch]):is(n,A,e,t)},useMemoCache:Ko,useCacheRefresh:zs};Xs.useEffectEvent=ws;function Zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_u(),i=eo(r);i.payload=t,n!=null&&(i.callback=n),t=to(e,i,r),t!==null&&(yu(t,e,r),no(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_u(),i=eo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=to(e,i,r),t!==null&&(yu(t,e,r),no(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_u(),r=eo(n);r.tag=2,t!=null&&(r.callback=t),t=to(e,r,n),t!==null&&(yu(t,e,n),no(t,e,n))}};function $s(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qs.enqueueReplaceState(t,t.state,null)}function tc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function nc(e){si(e)}function rc(e){console.error(e)}function ic(e){si(e)}function ac(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function oc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function sc(e,t,n){return n=eo(n),n.tag=3,n.payload={element:null},n.callback=function(){ac(e,t)},n}function cc(e){return e=eo(e),e.tag=3,e}function lc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){oc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){oc(t,n,r),typeof i!=`function`&&(su===null?su=new Set([this]):su.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function uc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&la(t,n,i,!0),n=ho.current,n!==null){switch(n.tag){case 31:case 13:return go===null?ju():n.alternate===null&&Jl===0&&(Jl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ia?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Yu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ia?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Yu(e,r,i)),!1}throw Error(a(435,n.tag))}return Yu(e,r,i),ju(),!1}if(O)return t=ho.current,t===null?(r!==Ji&&(t=Error(a(423),{cause:r}),ta(ki(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=ki(r,n),i=sc(e.stateNode,r,i),ro(e,i),Jl!==4&&(Jl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ji&&(e=Error(a(422),{cause:r}),ta(ki(e,n)))),!1;var o=Error(a(520),{cause:r});if(o=ki(o,n),eu===null?eu=[o]:eu.push(o),Jl!==4&&(Jl=2),t===null)return!0;r=ki(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=sc(n.stateNode,r,e),ro(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(su===null||!su.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=cc(i),lc(i,e,n,r),ro(n,i),!1}n=n.return}while(n!==null);return!1}var dc=Error(a(461)),F=!1;function fc(e,t,n,r){t.child=e===null?Xa(t,null,n,r):Ya(t,e.child,n,r)}function pc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return da(t),r=Fo(e,t,n,o,a,i),s=Ro(),e!==null&&!F?(zo(e,t,i),Lc(e,t,i)):(O&&s&&Vi(t),t.flags|=1,fc(e,t,r,i),t.child)}function mc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!bi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,hc(e,t,a,r,i)):(e=Ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Rc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return Lc(e,t,i)}return t.flags|=1,e=xi(a,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref){if(F=!1,t.pendingProps=r=a,Rc(e,i))e.flags&131072&&(F=!0);else return t.lanes=e.lanes,Lc(e,t,i)}}return Cc(e,t,n,r,i)}function gc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return vc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ja(t,a===null?null:a.cachePool),a===null?po():fo(t,a),yo(t);else return r=t.lanes=536870912,vc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ja(t,null),po(),bo(t)):(ja(t,a.cachePool),fo(t,a),bo(t),t.memoizedState=null);return fc(e,t,i,n),t.child}function _c(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function vc(e,t,n,r,i){var a=Aa();return a=a===null?null:{parent:va._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ja(t,null),po(),yo(t),e!==null&&la(e,t,r,!0),t.childLanes=i,null}function yc(e,t){return t=Mc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bc(e,t,n){return Ya(t,e.child,null,n),e=yc(t,t.pendingProps),e.flags|=2,xo(t),t.memoizedState=null,e}function xc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(O){if(r.mode===`hidden`)return e=yc(t,r),t.lanes=536870912,_c(null,e);if(vo(t),(e=Gi)?(e=cf(e,qi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ii===null?null:{id:Li,overflow:Ri},retryLane:536870912,hydrationErrors:null},n=Ei(e),n.return=t,t.child=n,Wi=t,Gi=null)):e=null,e===null)throw Yi(t);return t.lanes=536870912,null}return yc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(vo(t),i){if(t.flags&256)t.flags&=-257,t=bc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558))}else if(F||la(e,t,n,!1),i=(n&e.childLanes)!==0,F||i){if(r=H,r!==null&&(s=ft(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,mi(e,s),yu(r,e,s),dc;ju(),t=bc(e,t,n)}else e=o.treeContext,Gi=ff(s.nextSibling),Wi=t,O=!0,Ki=null,qi=!1,e!==null&&Ui(t,e),t=yc(t,r),t.flags|=4096;return t}return e=xi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cc(e,t,n,r,i){return da(t),n=Fo(e,t,n,r,void 0,i),r=Ro(),e!==null&&!F?(zo(e,t,i),Lc(e,t,i)):(O&&r&&Vi(t),t.flags|=1,fc(e,t,n,i),t.child)}function wc(e,t,n,r,i,a){return da(t),t.updateQueue=null,n=Lo(t,r,n,i),Io(e),r=Ro(),e!==null&&!F?(zo(e,t,a),Lc(e,t,a)):(O&&r&&Vi(t),t.flags|=1,fc(e,t,n,a),t.child)}function Tc(e,t,n,r,i){if(da(t),t.stateNode===null){var a=_i,o=n.contextType;typeof o==`object`&&o&&(a=fa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Qa(t),o=n.contextType,a.context=typeof o==`object`&&o?fa(o):_i,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Zs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Qs.enqueueReplaceState(a,a.state,null),oo(t,r,a,i),ao(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=tc(n,s);a.props=c;var l=a.context,u=n.contextType;o=_i,typeof u==`object`&&u&&(o=fa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&ec(t,a,r,o),Za=!1;var f=t.memoizedState;a.state=f,oo(t,r,a,i),ao(),l=t.memoizedState,s||f!==l||Za?(typeof d==`function`&&(Zs(t,n,d,r),l=t.memoizedState),(c=Za||$s(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$a(e,t),o=t.memoizedProps,u=tc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=_i,typeof l==`object`&&l&&(c=fa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&ec(t,a,r,c),Za=!1,f=t.memoizedState,a.state=f,oo(t,r,a,i),ao();var p=t.memoizedState;o!==d||f!==p||Za||e!==null&&e.dependencies!==null&&ua(e.dependencies)?(typeof s==`function`&&(Zs(t,n,s,r),p=t.memoizedState),(u=Za||$s(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ua(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Sc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ya(t,e.child,null,i),t.child=Ya(t,null,n,i)):fc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Lc(e,t,i),e}function Ec(e,t,n,r){return $i(),t.flags|=256,fc(e,t,n,r),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oc(e){return{baseLanes:e,cachePool:Ma()}}function kc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Ql),e}function Ac(e,t,n){var r=t.pendingProps,i=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(So.current&2)),s&&(i=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(O){if(i?_o(t):bo(t),(e=Gi)?(e=cf(e,qi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ii===null?null:{id:Li,overflow:Ri},retryLane:536870912,hydrationErrors:null},n=Ei(e),n.return=t,t.child=n,Wi=t,Gi=null)):e=null,e===null)throw Yi(t);return uf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(bo(t),i=t.mode,c=Mc({mode:`hidden`,children:c},i),r=wi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Oc(n),r.childLanes=kc(e,s,n),t.memoizedState=Dc,_c(null,r)):(_o(t),jc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(_o(t),t.flags&=-257,t=Nc(e,t,n)):t.memoizedState===null?(bo(t),c=r.fallback,i=t.mode,r=Mc({mode:`visible`,children:r.children},i),c=wi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ya(t,e.child,null,n),r=t.child,r.memoizedState=Oc(n),r.childLanes=kc(e,s,n),t.memoizedState=Dc,t=_c(null,r)):(bo(t),t.child=e.child,t.flags|=128,t=null);else if(_o(t),uf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(a(419)),r.stack=``,r.digest=s,ta({value:r,source:null,stack:null}),t=Nc(e,t,n)}else if(F||la(e,t,n,!1),s=(n&e.childLanes)!==0,F||s){if(s=H,s!==null&&(r=ft(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,mi(e,r),yu(s,e,r),dc;lf(c)||ju(),t=Nc(e,t,n)}else lf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Gi=ff(c.nextSibling),Wi=t,O=!0,Ki=null,qi=!1,e!==null&&Ui(t,e),t=jc(t,r.children),t.flags|=4096);return t}return i?(bo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=xi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=wi(c,i,n,null),c.flags|=2):c=xi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,_c(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Oc(n):(i=c.cachePool,i===null?i=Ma():(l=va._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=kc(e,s,n),t.memoizedState=Dc,_c(e.child,r)):(_o(t),n=e.child,e=n.sibling,n=xi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function jc(e,t){return t=Mc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Mc(e,t){return e=yi(22,e,null,t),e.lanes=0,e}function Nc(e,t,n){return Ya(t,e.child,null,n),e=jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sa(e.return,t,n)}function Fc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ic(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=So.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,E(So,o),fc(e,t,r,n),r=O?Ni:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fc(t,!0,n,null,a,r);break;case`together`:Fc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Lc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(la(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=xi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ua(e)))}function zc(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),aa(t,va,e.memoizedState.cache),$i();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(_o(t),e=Lc(e,t,n),e===null?null:e.sibling):Ac(e,t,n):(_o(t),t.flags|=128,null);_o(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(la(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ic(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(So,So.current),r)break;return null;case 22:return t.lanes=0,gc(e,t,n,t.pendingProps);case 24:aa(t,va,e.memoizedState.cache)}return Lc(e,t,n)}function Bc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)F=!0;else{if(!Rc(e,n)&&!(t.flags&128))return F=!1,zc(e,t,n);F=!!(e.flags&131072)}}else F=!1,O&&t.flags&1048576&&Bi(t,Ni,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e==`function`)bi(e)?(r=tc(e,r),t.tag=1,t=Tc(null,t,e,r,n)):(t.tag=0,t=Cc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===ee){t.tag=11,t=pc(null,t,e,r,n);break a}if(i===re){t.tag=14,t=mc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(a(306,t,``))}}return t;case 0:return Cc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=tc(r,t.pendingProps),Tc(e,t,r,i,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,$a(e,t),oo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,aa(t,va,r),r!==o.cache&&ca(t,[va],n,!0),ao(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Ec(e,t,r,n);break a}if(r!==i){i=ki(Error(a(424)),t),ta(i),t=Ec(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Gi=ff(e.firstChild),Wi=t,O=!0,Ki=null,qi=!0,n=Xa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if($i(),r===i){t=Lc(e,t,n);break a}fc(e,t,r,n)}t=t.child}return t;case 26:return Sc(e,t),e===null?(n=Nf(t.type,null,t.pendingProps,null))?t.memoizedState=n:O||(n=t.type,e=t.pendingProps,r=Wd(ye.current).createElement(n),r[vt]=t,r[yt]=e,Rd(r,n,e),jt(r),t.stateNode=r):t.memoizedState=Nf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&O&&(r=t.stateNode=gf(t.type,t.pendingProps,ye.current),Wi=t,qi=!0,i=Gi,tf(t.type)?(pf=i,Gi=ff(r.firstChild)):Gi=i),fc(e,t,t.pendingProps.children,n),Sc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&O&&((i=r=Gi)&&(r=of(r,t.type,t.pendingProps,qi),r===null?i=!1:(t.stateNode=r,Wi=t,Gi=ff(r.firstChild),qi=!1,i=!0)),i||Yi(t)),Ce(t),i=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,qd(i,o)?r=null:s!==null&&qd(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Fo(e,t,j,null,null,n),np._currentValue=i),Sc(e,t),fc(e,t,r,n),t.child;case 6:return e===null&&O&&((e=n=Gi)&&(n=sf(n,t.pendingProps,qi),n===null?e=!1:(t.stateNode=n,Wi=t,Gi=null,e=!0)),e||Yi(t)),null;case 13:return Ac(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ya(t,null,r,n):fc(e,t,r,n),t.child;case 11:return pc(e,t,t.type,t.pendingProps,n);case 7:return fc(e,t,t.pendingProps,n),t.child;case 8:return fc(e,t,t.pendingProps.children,n),t.child;case 12:return fc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,aa(t,t.type,r.value),fc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,da(t),i=fa(i),r=r(i),t.flags|=1,fc(e,t,r,n),t.child;case 14:return mc(e,t,t.type,t.pendingProps,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 19:return Ic(e,t,n);case 31:return xc(e,t,n);case 22:return gc(e,t,n,t.pendingProps);case 24:return da(t),r=fa(va),e===null?(i=Aa(),i===null&&(i=H,o=ya(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},Qa(t),aa(t,va,i)):((e.lanes&n)!==0&&($a(e,t),oo(t,null,null,n),ao()),i=e.memoizedState,o=t.memoizedState,i.parent===r?(r=o.cache,aa(t,va,r),r!==i.cache&&ca(t,[va],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),aa(t,va,r))),fc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function I(e){e.flags|=4}function L(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ou())e.flags|=8192;else throw Ba=Ia,Pa}}else e.flags&=-16777217}function Vc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t)){if(Ou())e.flags|=8192;else throw Ba=Ia,Pa}}function Hc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ot(),e.lanes|=t,$l|=t)}function Uc(e,t){if(!O)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function R(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wc(e,t,n){var r=t.pendingProps;switch(Hi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return R(t),null;case 1:return R(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),oa(va),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?I(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ea())),R(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(I(t),o===null?(R(t),L(t,i,null,r,n)):(R(t),Vc(t,o))):o?o===e.memoizedState?(R(t),t.flags&=-16777217):(I(t),R(t),Vc(t,o)):(e=e.memoizedProps,e!==r&&I(t),R(t),L(t,i,e,r,n)),null;case 27:if(we(t),n=ye.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&I(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return R(t),null}e=_e.current,Qi(t)?Xi(t,e):(e=gf(i,r,n),t.stateNode=e,I(t))}return R(t),null;case 5:if(we(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&I(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return R(t),null}if(o=_e.current,Qi(t))Xi(t,o);else{var s=Wd(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}o[vt]=t,o[yt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Rd(o,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&I(t)}}return R(t),L(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&I(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=ye.current,Qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Wi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Id(e.nodeValue,n)),e||Yi(t,!0)}else e=Wd(e).createTextNode(r),e[vt]=t,t.stateNode=e}return R(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Qi(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[vt]=t}else $i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;R(t),e=!1}else n=ea(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(xo(t),t):(xo(t),null);if(t.flags&128)throw Error(a(558))}return R(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(a(317));i[vt]=t}else $i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;R(t),i=!1}else i=ea(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(xo(t),t):(xo(t),null)}return xo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Hc(t,t.updateQueue),R(t),null);case 4:return Se(),e===null&&Ed(t.stateNode.containerInfo),R(t),null;case 10:return oa(t.type),R(t),null;case 19:if(ge(So),r=t.memoizedState,r===null)return R(t),null;if(i=!!(t.flags&128),o=r.rendering,o===null){if(i)Uc(r,!1);else{if(Jl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,Uc(r,!1),e=o.updateQueue,t.updateQueue=e,Hc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Si(n,e),n=n.sibling;return E(So,So.current&1|2),O&&zi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Le()>au&&(t.flags|=128,i=!0,Uc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Co(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Hc(t,e),Uc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!O)return R(t),null}else 2*Le()-r.renderingStartTime>au&&n!==536870912&&(t.flags|=128,i=!0,Uc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(R(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Le(),e.sibling=null,n=So.current,E(So,i?n&1|2:n&1),O&&zi(t,r.treeForkCount),e);case 22:case 23:return xo(t),mo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(R(t),t.subtreeFlags&6&&(t.flags|=8192)):R(t),n=t.updateQueue,n!==null&&Hc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ge(ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),oa(va),R(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function Gc(e,t){switch(Hi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oa(va),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(xo(t),t.alternate===null)throw Error(a(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(xo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(So),null;case 4:return Se(),null;case 10:return oa(t.type),null;case 22:case 23:return xo(t),mo(),e!==null&&ge(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return oa(va),null;case 25:return null;default:return null}}function Kc(e,t){switch(Hi(t),t.tag){case 3:oa(va),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&xo(t);break;case 13:xo(t);break;case 19:ge(So);break;case 10:oa(t.type);break;case 22:case 23:xo(t),mo(),e!==null&&ge(ka);break;case 24:oa(va)}}function qc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){q(t,t.return,e)}}function Jc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){q(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){q(t,t.return,e)}}function Yc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{co(t,n)}catch(t){q(e,e.return,t)}}}function Xc(e,t,n){n.props=tc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){q(e,t,n)}}function Zc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){q(e,t,n)}}function Qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){q(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){q(e,t,n)}else n.current=null}}function $c(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){q(e,e.return,t)}}function el(e,t,n){try{var r=e.stateNode;zd(r,e.type,n,t),r[yt]=t}catch(t){q(e,e.return,t)}}function tl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tf(e.type)||e.tag===4}function nl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||tl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fn));else if(r!==4&&(r===27&&tf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&tf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function al(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Rd(t,r,n),t[vt]=e,t[yt]=n}catch(t){q(e,e.return,t)}}var ol=!1,sl=!1,cl=!1,ll=typeof WeakSet==`function`?WeakSet:Set,ul=null;function dl(e,t){if(e=e.containerInfo,Hd=dp,e=Rr(e),zr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},dp=!1,ul=t;ul!==null;)if(t=ul,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ul=e;else for(;ul!==null;){switch(t=ul,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=tc(n.type,i);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){q(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)af(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:af(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,ul=e;break}ul=t.return}}function fl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Dl(e,n),r&4&&qc(5,n);break;case 1:if(Dl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){q(n,n.return,e)}else{var i=tc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){q(n,n.return,e)}}}r&64&&Yc(n),r&512&&Zc(n,n.return);break;case 3:if(Dl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{co(e,t)}catch(e){q(n,n.return,e)}}break;case 27:t===null&&r&4&&al(n);case 26:case 5:Dl(e,n),t===null&&r&4&&$c(n),r&512&&Zc(n,n.return);break;case 12:Dl(e,n);break;case 31:Dl(e,n),r&4&&vl(e,n);break;case 13:Dl(e,n),r&4&&yl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Qu.bind(null,n),df(e,n))));break;case 22:if(r=n.memoizedState!==null||ol,!r){t=t!==null&&t.memoizedState!==null||sl,i=ol;var a=sl;ol=r,(sl=t)&&!a?Ol(e,n,!!(n.subtreeFlags&8772)):Dl(e,n),ol=i,sl=a}break;case 30:break;default:Dl(e,n)}}function pl(e){var t=e.alternate;t!==null&&(e.alternate=null,pl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Et(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ml=null,hl=!1;function gl(e,t,n){for(n=n.child;n!==null;)_l(e,t,n),n=n.sibling}function _l(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount==`function`)try{qe.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:sl||Qc(n,t),gl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:sl||Qc(n,t);var r=ml,i=hl;tf(n.type)&&(ml=n.stateNode,hl=!1),gl(e,t,n),_f(n.stateNode),ml=r,hl=i;break;case 5:sl||Qc(n,t);case 6:if(r=ml,i=hl,ml=null,gl(e,t,n),ml=r,hl=i,ml!==null){if(hl)try{(ml.nodeType===9?ml.body:ml.nodeName===`HTML`?ml.ownerDocument.body:ml).removeChild(n.stateNode)}catch(e){q(n,t,e)}else try{ml.removeChild(n.stateNode)}catch(e){q(n,t,e)}}break;case 18:ml!==null&&(hl?(e=ml,nf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Lp(e)):nf(ml,n.stateNode));break;case 4:r=ml,i=hl,ml=n.stateNode.containerInfo,hl=!0,gl(e,t,n),ml=r,hl=i;break;case 0:case 11:case 14:case 15:Jc(2,n,t),sl||Jc(4,n,t),gl(e,t,n);break;case 1:sl||(Qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Xc(n,t,r)),gl(e,t,n);break;case 21:gl(e,t,n);break;case 22:sl=(r=sl)||n.memoizedState!==null,gl(e,t,n),sl=r;break;default:gl(e,t,n)}}function vl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Lp(e)}catch(e){q(t,t.return,e)}}}function yl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lp(e)}catch(e){q(t,t.return,e)}}function bl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ll),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ll),t;default:throw Error(a(435,e.tag))}}function xl(e,t){var n=bl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=$u.bind(null,e,t);t.then(r,r)}})}function Sl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(tf(c.type)){ml=c.stateNode,hl=!1;break a}break;case 5:ml=c.stateNode,hl=!1;break a;case 3:case 4:ml=c.stateNode.containerInfo,hl=!0;break a}c=c.return}if(ml===null)throw Error(a(160));_l(o,s,i),ml=null,hl=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wl(t,e),t=t.sibling}var Cl=null;function wl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sl(t,e),Tl(e),r&4&&(Jc(3,e,e.return),qc(3,e),Jc(5,e,e.return));break;case 1:Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),r&64&&ol&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=Cl;if(Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:o=i.getElementsByTagName(`title`)[0],(!o||o[Tt]||o[vt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector(`head > title`))),Rd(o,r,n),o[vt]=e,jt(o),r=o;break a;case`link`:var s=Gf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=i.createElement(r),Rd(o,r,n),i.head.appendChild(o);break;case`meta`:if(s=Gf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=i.createElement(r),Rd(o,r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[vt]=e,jt(o),r=o}e.stateNode=r}else Kf(i,e.type,e.stateNode)}else e.stateNode=Bf(i,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&el(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Kf(i,e.type,e.stateNode):Bf(i,r,e.memoizedProps))}break;case 27:Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),n!==null&&r&4&&el(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Sl(t,e),Tl(e),r&512&&(sl||n===null||Qc(n,n.return)),e.flags&32){i=e.stateNode;try{rn(i,``)}catch(t){q(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,el(e,i,n===null?i:n.memoizedProps)),r&1024&&(cl=!0);break;case 6:if(Sl(t,e),Tl(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){q(e,e.return,t)}}break;case 3:if(Wf=null,i=Cl,Cl=bf(t.containerInfo),Sl(t,e),Cl=i,Tl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lp(t.containerInfo)}catch(t){q(e,e.return,t)}cl&&(cl=!1,El(e));break;case 4:r=Cl,Cl=bf(e.stateNode.containerInfo),Sl(t,e),Tl(e),Cl=r;break;case 12:Sl(t,e),Tl(e);break;case 31:Sl(t,e),Tl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,xl(e,r)));break;case 13:Sl(t,e),Tl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=Le()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,xl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=ol,d=sl;if(ol=u||i,sl=d||l,Sl(t,e),sl=d,ol=u,Tl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||ol||sl||z(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,i)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){q(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){q(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?rf(m,!0):rf(l.stateNode,!1)}catch(e){q(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,xl(e,n))));break;case 19:Sl(t,e),Tl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,xl(e,r)));break;case 30:break;case 21:break;default:Sl(t,e),Tl(e)}}function Tl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(tl(r)){n=r;break}r=r.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;il(e,nl(e),i);break;case 5:var o=n.stateNode;n.flags&32&&(rn(o,``),n.flags&=-33),il(e,nl(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;rl(e,nl(e),s);break;default:throw Error(a(161))}}catch(t){q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function El(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;El(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fl(e,t.alternate,t),t=t.sibling}function z(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jc(4,t,t.return),z(t);break;case 1:Qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Xc(t,t.return,n),z(t);break;case 27:_f(t.stateNode);case 26:case 5:Qc(t,t.return),z(t);break;case 22:t.memoizedState===null&&z(t);break;case 30:z(t);break;default:z(t)}e=e.sibling}}function Ol(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Ol(i,a,n),qc(4,a);break;case 1:if(Ol(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){q(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)so(c[i],s)}catch(e){q(r,r.return,e)}}n&&o&64&&Yc(a),Zc(a,a.return);break;case 27:al(a);case 26:case 5:Ol(i,a,n),n&&r===null&&o&4&&$c(a),Zc(a,a.return);break;case 12:Ol(i,a,n);break;case 31:Ol(i,a,n),n&&o&4&&vl(i,a);break;case 13:Ol(i,a,n),n&&o&4&&yl(i,a);break;case 22:a.memoizedState===null&&Ol(i,a,n),Zc(a,a.return);break;case 30:break;default:Ol(i,a,n)}t=t.sibling}}function kl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ba(n))}function Al(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ba(e))}function jl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ml(e,t,n,r),t=t.sibling}function Ml(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:jl(e,t,n,r),i&2048&&qc(9,t);break;case 1:jl(e,t,n,r);break;case 3:jl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ba(e)));break;case 12:if(i&2048){jl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){q(t,t.return,e)}}else jl(e,t,n,r);break;case 31:jl(e,t,n,r);break;case 13:jl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?jl(e,t,n,r):(a._visibility|=2,Nl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?jl(e,t,n,r):Pl(e,t),i&2048&&kl(o,t);break;case 24:jl(e,t,n,r),i&2048&&Al(t.alternate,t);break;default:jl(e,t,n,r)}}function Nl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Nl(a,o,s,c,i),qc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Nl(a,o,s,c,i)):u._visibility&2?Nl(a,o,s,c,i):Pl(a,o),i&&l&2048&&kl(o.alternate,o);break;case 24:Nl(a,o,s,c,i),i&&l&2048&&Al(o.alternate,o);break;default:Nl(a,o,s,c,i)}t=t.sibling}}function Pl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Pl(n,r),i&2048&&kl(r.alternate,r);break;case 24:Pl(n,r),i&2048&&Al(r.alternate,r);break;default:Pl(n,r)}t=t.sibling}}var Fl=8192;function Il(e,t,n){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)Ll(e,t,n),e=e.sibling}function Ll(e,t,n){switch(e.tag){case 26:Il(e,t,n),e.flags&Fl&&e.memoizedState!==null&&Yf(n,Cl,e.memoizedState,e.memoizedProps);break;case 5:Il(e,t,n);break;case 3:case 4:var r=Cl;Cl=bf(e.stateNode.containerInfo),Il(e,t,n),Cl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Fl,Fl=16777216,Il(e,t,n),Fl=r):Il(e,t,n));break;default:Il(e,t,n)}}function Rl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function B(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ul=r,Vl(r,e)}Rl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zl(e),e=e.sibling}function zl(e){switch(e.tag){case 0:case 11:case 15:B(e),e.flags&2048&&Jc(9,e,e.return);break;case 3:B(e);break;case 12:B(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bl(e)):B(e);break;default:B(e)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ul=r,Vl(r,e)}Rl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jc(8,t,t.return),Bl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bl(t));break;default:Bl(t)}e=e.sibling}}function Vl(e,t){for(;ul!==null;){var n=ul;switch(n.tag){case 0:case 11:case 15:Jc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ba(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ul=r;else a:for(n=e;ul!==null;){r=ul;var i=r.sibling,a=r.return;if(pl(r),r===n){ul=null;break a}if(i!==null){i.return=a,ul=i;break a}ul=a}}}var Hl={getCacheForType:function(e){var t=fa(va),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return fa(va).controller.signal}},Ul=typeof WeakMap==`function`?WeakMap:Map,V=0,H=null,U=null,W=0,G=0,Wl=null,Gl=!1,K=!1,Kl=!1,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=null,tu=null,nu=!1,ru=0,iu=0,au=1/0,ou=null,su=null,cu=0,lu=null,uu=null,du=0,fu=0,pu=null,mu=null,hu=0,gu=null;function _u(){return V&2&&W!==0?W&-W:w.T===null?ht():hd()}function vu(){if(Ql===0){if(!(W&536870912)||O){var e=et;et<<=1,!(et&3932160)&&(et=262144),Ql=e}else Ql=536870912}return e=ho.current,e!==null&&(e.flags|=32),Ql}function yu(e,t,n){(e===H&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(Eu(e,0),Cu(e,W,Ql,!1)),ct(e,n),(!(V&2)||e!==H)&&(e===H&&(!(V&2)&&(Xl|=n),Jl===4&&Cu(e,W,Ql,!1)),sd(e))}function bu(e,t,n){if(V&6)throw Error(a(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||it(e,t),i=r?Pu(e,t):Mu(e,t,!0),o=r;do{if(i===0){K&&!r&&Cu(e,t,0,!1);break}if(n=e.current.alternate,o&&!Su(n)){i=Mu(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=eu;var l=c.current.memoizedState.isDehydrated;if(l&&(Eu(c,s).flags|=256),s=Mu(c,s,!1),s!==2){if(Kl&&!l){c.errorRecoveryDisabledLanes|=o,Xl|=o,i=4;break a}o=tu,tu=i,o!==null&&(tu===null?tu=o:tu.push.apply(tu,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Eu(e,0),Cu(e,t,0,!0);break}a:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:Cu(r,t,Ql,!Gl);break a;case 2:tu=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=ru+300-Le(),10<i)){if(Cu(r,t,Ql,!Gl),rt(r,0,!0)!==0)break a;du=t,r.timeoutHandle=Xd(xu.bind(null,r,n,tu,ou,nu,t,Ql,Xl,$l,Gl,o,`Throttled`,-0,0),i);break a}xu(r,n,tu,ou,nu,t,Ql,Xl,$l,Gl,o,null,-0,0)}break}while(1);sd(e)}function xu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fn},Ll(t,a,d);var m=(a&62914560)===a?ru-Le():(a&4194048)===a?iu-Le():0;if(m=Zf(d,m),m!==null){du=a,e.cancelPendingCommit=m(Vu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Cu(e,a,o,!l);return}}Vu(e,t,a,n,r,i,o,s,c)}function Su(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cu(e,t,n,r){t&=~Zl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ye(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ut(e,n,t)}function wu(){return V&6?!0:(cd(0,!1),!1)}function Tu(){if(U!==null){if(G===0)var e=U.return;else e=U,ia=ra=null,Bo(e),Ua=null,Wa=0,e=U;for(;e!==null;)Kc(e.alternate,e),e=e.return;U=null}}function Eu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Zd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),du=0,Tu(),H=e,U=n=xi(e.current,null),W=t,G=0,Wl=null,Gl=!1,K=it(e,t),Kl=!1,$l=Ql=Zl=Xl=Yl=Jl=0,tu=eu=null,nu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ye(r),a=1<<i;t|=e[i],r&=~a}return ql=t,di(),n}function Du(e,t){k=null,w.H=qs,t===Na||t===Fa?(t=Va(),G=3):t===Pa?(t=Va(),G=4):G=t===dc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Wl=t,U===null&&(Jl=1,ac(e,ki(t,e.current)))}function Ou(){var e=ho.current;return e===null?!0:(W&4194048)===W?go===null:(W&62914560)===W||W&536870912?e===go:!1}function ku(){var e=w.H;return w.H=qs,e===null?qs:e}function Au(){var e=w.A;return w.A=Hl,e}function ju(){Jl=4,Gl||(W&4194048)!==W&&ho.current!==null||(K=!0),!(Yl&134217727)&&!(Xl&134217727)||H===null||Cu(H,W,Ql,!1)}function Mu(e,t,n){var r=V;V|=2;var i=ku(),a=Au();(H!==e||W!==t)&&(ou=null,Eu(e,t)),t=!1;var o=Jl;a:do try{if(G!==0&&U!==null){var s=U,c=Wl;switch(G){case 8:Tu(),o=6;break a;case 3:case 2:case 9:case 6:ho.current===null&&(t=!0);var l=G;if(G=0,Wl=null,Ru(e,s,c,l),n&&K){o=0;break a}break;default:l=G,G=0,Wl=null,Ru(e,s,c,l)}}Nu(),o=Jl;break}catch(t){Du(e,t)}while(1);return t&&e.shellSuspendCounter++,ia=ra=null,V=r,w.H=i,w.A=a,U===null&&(H=null,W=0,di()),o}function Nu(){for(;U!==null;)Iu(U)}function Pu(e,t){var n=V;V|=2;var r=ku(),i=Au();H!==e||W!==t?(ou=null,au=Le()+500,Eu(e,t)):K=it(e,t);a:do try{if(G!==0&&U!==null){t=U;var o=Wl;b:switch(G){case 1:G=0,Wl=null,Ru(e,t,o,1);break;case 2:case 9:if(La(o)){G=0,Wl=null,Lu(t);break}t=function(){G!==2&&G!==9||H!==e||(G=7),sd(e)},o.then(t,t);break a;case 3:G=7;break a;case 4:G=5;break a;case 7:La(o)?(G=0,Wl=null,Lu(t)):(G=0,Wl=null,Ru(e,t,o,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var c=U;if(s?Jf(s):c.stateNode.complete){G=0,Wl=null;var l=c.sibling;if(l!==null)U=l;else{var u=c.return;u===null?U=null:(U=u,zu(u))}break b}}G=0,Wl=null,Ru(e,t,o,5);break;case 6:G=0,Wl=null,Ru(e,t,o,6);break;case 8:Tu(),Jl=6;break a;default:throw Error(a(462))}}Fu();break}catch(t){Du(e,t)}while(1);return ia=ra=null,w.H=r,w.A=i,V=n,U===null?(H=null,W=0,di(),Jl):0}function Fu(){for(;U!==null&&!Fe();)Iu(U)}function Iu(e){var t=Bc(e.alternate,e,ql);e.memoizedProps=e.pendingProps,t===null?zu(e):U=t}function Lu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wc(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=wc(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Bo(t);default:Kc(n,t),t=U=Si(t,ql),t=Bc(n,t,ql)}e.memoizedProps=e.pendingProps,t===null?zu(e):U=t}function Ru(e,t,n,r){ia=ra=null,Bo(t),Ua=null,Wa=0;var i=t.return;try{if(uc(e,i,t,n,W)){Jl=1,ac(e,ki(n,e.current)),U=null;return}}catch(t){if(i!==null)throw U=i,t;Jl=1,ac(e,ki(n,e.current)),U=null;return}t.flags&32768?(O||r===1?e=!0:K||W&536870912?e=!1:(Gl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ho.current,r!==null&&r.tag===13&&(r.flags|=16384))),Bu(t,e)):zu(t)}function zu(e){var t=e;do{if(t.flags&32768){Bu(t,Gl);return}e=t.return;var n=Wc(t.alternate,t,ql);if(n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);Jl===0&&(Jl=5)}function Bu(e,t){do{var n=Gc(e.alternate,e);if(n!==null){n.flags&=32767,U=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){U=e;return}U=e=n}while(e!==null);Jl=6,U=null}function Vu(e,t,n,r,i,o,s,c,l){e.cancelPendingCommit=null;do Ku();while(cu!==0);if(V&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,o|=ui,lt(e,n,o,s,c,l),e===H&&(U=H=null,W=0),uu=t,lu=e,du=n,fu=o,pu=i,mu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ed(Ve,function(){return qu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,s=V,V|=4;try{dl(e,t,n)}finally{V=s,T.p=i,w.T=r}}cu=1,Hu(),Uu(),Wu()}}function Hu(){if(cu===1){cu=0;var e=lu,t=uu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=V;V|=4;try{wl(t,e);var a=Ud,o=Rr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Lr(s.ownerDocument.documentElement,s)){if(c!==null&&zr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ir(s,h),v=Ir(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}dp=!!Hd,Ud=Hd=null}finally{V=i,T.p=r,w.T=n}}e.current=t,cu=2}}function Uu(){if(cu===2){cu=0;var e=lu,t=uu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=V;V|=4;try{fl(e,t.alternate,t)}finally{V=i,T.p=r,w.T=n}}cu=3}}function Wu(){if(cu===4||cu===3){cu=0,Ie();var e=lu,t=uu,n=du,r=mu;t.subtreeFlags&10256||t.flags&10256?cu=5:(cu=0,uu=lu=null,Gu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(su=null),mt(n),t=t.stateNode,qe&&typeof qe.onCommitFiberRoot==`function`)try{qe.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}du&3&&Ku(),sd(e),i=e.pendingLanes,n&261930&&i&42?e===gu?hu++:(hu=0,gu=e):hu=0,cd(0,!1)}}function Gu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ba(t)))}function Ku(){return Hu(),Uu(),Wu(),qu()}function qu(){if(cu!==5)return!1;var e=lu,t=fu;fu=0;var n=mt(du),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=pu,pu=null;var o=lu,s=du;if(cu=0,uu=lu=null,du=0,V&6)throw Error(a(331));var c=V;if(V|=4,zl(o.current),Ml(o,o.current,s,n),V=c,cd(0,!1),qe&&typeof qe.onPostCommitFiberRoot==`function`)try{qe.onPostCommitFiberRoot(Ke,o)}catch{}return!0}finally{T.p=i,w.T=r,Gu(e,t)}}function Ju(e,t,n){t=ki(n,t),t=sc(e.stateNode,t,2),e=to(e,t,2),e!==null&&(ct(e,2),sd(e))}function q(e,t,n){if(e.tag===3)Ju(e,e,n);else for(;t!==null;){if(t.tag===3){Ju(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(su===null||!su.has(r))){e=ki(n,e),n=cc(2),r=to(t,n,2),r!==null&&(lc(n,r,t,e),ct(r,2),sd(r));break}}t=t.return}}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ul;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Kl=!0,i.add(n),e=Xu.bind(null,e,t,n),t.then(e,e))}function Xu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,H===e&&(W&n)===n&&(Jl===4||Jl===3&&(W&62914560)===W&&300>Le()-ru?!(V&2)&&Eu(e,0):Zl|=n,$l===W&&($l=0)),sd(e)}function Zu(e,t){t===0&&(t=ot()),e=mi(e,t),e!==null&&(ct(e,t),sd(e))}function Qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function $u(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),Zu(e,n)}function ed(e,t){return Ne(e,t)}var td=null,nd=null,rd=!1,id=!1,ad=!1,od=0;function sd(e){e!==nd&&e.next===null&&(nd===null?td=nd=e:nd=nd.next=e),id=!0,rd||(rd=!0,md())}function cd(e,t){if(!ad&&id){ad=!0;do for(var n=!1,r=td;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ye(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,pd(r,a))}else a=W,a=rt(r,r===H?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||it(r,a)||(n=!0,pd(r,a))}r=r.next}while(n);ad=!1}}function ld(){ud()}function ud(){id=rd=!1;var e=0;od!==0&&Yd()&&(e=od);for(var t=Le(),n=null,r=td;r!==null;){var i=r.next,a=dd(r,t);a===0?(r.next=null,n===null?td=i:n.next=i,i===null&&(nd=n)):(n=r,(e!==0||a&3)&&(id=!0)),r=i}cu!==0&&cu!==5||cd(e,!1),od!==0&&(od=0)}function dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ye(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=at(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=H,n=W,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Pe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||it(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Pe(r),mt(n)){case 2:case 8:n=Be;break;case 32:n=Ve;break;case 268435456:n=Ue;break;default:n=Ve}return r=fd.bind(null,e),n=Ne(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Pe(r),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(cu!==0&&cu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ku()&&e.callbackNode!==n)return null;var r=W;return r=rt(e,e===H?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(bu(e,r,t),dd(e,Le()),e.callbackNode!=null&&e.callbackNode===n?fd.bind(null,e):null)}function pd(e,t){if(Ku())return null;bu(e,t,!0)}function md(){$d(function(){V&6?Ne(ze,ld):ud()})}function hd(){if(od===0){var e=Ca;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),od=e}return od}function gd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:dn(``+e)}function _d(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=gd((i[yt]||null).action),o=r.submitter;o&&(t=(t=o[yt]||null)?gd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Nn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(od!==0){var e=o?_d(i,o):new FormData(i);Ps(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?_d(i,o):new FormData(i),Ps(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var yd=0;yd<ai.length;yd++){var bd=ai[yd];oi(bd.toLowerCase(),`on`+(bd[0].toUpperCase()+bd.slice(1)))}oi(Zr,`onAnimationEnd`),oi(Qr,`onAnimationIteration`),oi($r,`onAnimationStart`),oi(`dblclick`,`onDoubleClick`),oi(`focusin`,`onFocus`),oi(`focusout`,`onBlur`),oi(ei,`onTransitionRun`),oi(ti,`onTransitionStart`),oi(ni,`onTransitionCancel`),oi(ri,`onTransitionEnd`),Ft(`onMouseEnter`,[`mouseout`,`mouseover`]),Ft(`onMouseLeave`,[`mouseout`,`mouseover`]),Ft(`onPointerEnter`,[`pointerout`,`pointerover`]),Ft(`onPointerLeave`,[`pointerout`,`pointerover`]),Pt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Pt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Pt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Pt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Pt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Pt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var xd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Sd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(xd));function Cd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){si(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){si(e)}i.currentTarget=null,a=c}}}}function J(e,t){var n=t[xt];n===void 0&&(n=t[xt]=new Set);var r=e+`__bubble`;n.has(r)||(Dd(t,e,2,!1),n.add(r))}function wd(e,t,n){var r=0;t&&(r|=4),Dd(n,e,r,t)}var Td=`_reactListening`+Math.random().toString(36).slice(2);function Ed(e){if(!e[Td]){e[Td]=!0,Mt.forEach(function(t){t!==`selectionchange`&&(Sd.has(t)||wd(t,!1,e),wd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Td]||(t[Td]=!0,wd(`selectionchange`,!1,t))}}function Dd(e,t,n,r){switch(vp(t)){case 2:var i=fp;break;case 8:i=pp;break;default:i=mp}n=i.bind(null,t,n,e),i=void 0,!Sn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Od(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=Dt(c),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){r=a=o;continue a}c=c.parentNode}}r=r.return}yn(function(){var r=a,i=mn(n),o=[];a:{var c=ii.get(e);if(c!==void 0){var l=Nn,u=e;switch(e){case`keypress`:if(On(n)===0)break a;case`keydown`:case`keyup`:l=Zn;break;case`focusin`:u=`focus`,l=Hn;break;case`focusout`:u=`blur`,l=Hn;break;case`beforeblur`:case`afterblur`:l=Hn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Bn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Vn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=$n;break;case Zr:case Qr:case $r:l=Un;break;case ri:l=er;break;case`scroll`:case`scrollend`:l=Fn;break;case`wheel`:l=tr;break;case`copy`:case`cut`:case`paste`:l=Wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Qn;break;case`toggle`:case`beforetoggle`:l=nr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=bn(m,p),g!=null&&d.push(kd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==pn&&(u=n.relatedTarget||n.fromElement)&&(Dt(u)||u[bt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Dt(u):null,u!==null&&(f=s(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Bn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:kt(l),h=u==null?c:kt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Dt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=jd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Md(o,c,l,d,!1),u!==null&&f!==null&&Md(o,f,u,d,!0)}}a:{if(c=r?kt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=Sr;else if(gr(c)){if(Cr)v=jr;else{v=kr;var y=Or}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&cn(r.elementType)&&(v=Sr):v=Ar;if(v&&=v(e,r)){_r(o,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&$t(c,`number`,c.value)}switch(y=r?kt(r):window,e){case`focusin`:(gr(y)||y.contentEditable===`true`)&&(Vr=y,Hr=r,Ur=null);break;case`focusout`:Ur=Hr=Vr=null;break;case`mousedown`:Wr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Wr=!1,Gr(o,n,i);break;case`selectionchange`:if(Br)break;case`keydown`:case`keyup`:Gr(o,n,i)}var b;if(ir)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else fr?ur(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(sr&&n.locale!==`ko`&&(fr||x!==`onCompositionStart`?x===`onCompositionEnd`&&fr&&(b=Dn()):(wn=i,Tn=`value`in wn?wn.value:wn.textContent,fr=!0)),y=Ad(r,x),0<y.length&&(x=new Gn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=dr(n),b!==null&&(x.data=b)))),(b=or?pr(e,n):mr(e,n))&&(x=Ad(r,`onBeforeInput`),0<x.length&&(y=new Gn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),vd(o,e,r,n,i)}Cd(o,t)})}function kd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=bn(e,n),i!=null&&r.unshift(kd(e,i,a)),i=bn(e,t),i!=null&&r.push(kd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function jd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=bn(n,a),l!=null&&o.unshift(kd(n,l,c))):i||(l=bn(n,a),l!=null&&o.push(kd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Nd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function Fd(e){return(typeof e==`string`?e:``+e).replace(Nd,`
`).replace(Pd,``)}function Id(e,t){return t=Fd(t),Fd(e)===t}function Y(e,t,n,r,i,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||rn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&rn(e,``+r);break;case`className`:Vt(e,`class`,r);break;case`tabIndex`:Vt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Vt(e,n,r);break;case`style`:sn(e,r,o);break;case`data`:if(t!==`object`){Vt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=dn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Y(e,t,`name`,i.name,i,null),Y(e,t,`formEncType`,i.formEncType,i,null),Y(e,t,`formMethod`,i.formMethod,i,null),Y(e,t,`formTarget`,i.formTarget,i,null)):(Y(e,t,`encType`,i.encType,i,null),Y(e,t,`method`,i.method,i,null),Y(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=dn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=fn);break;case`onScroll`:r!=null&&J(`scroll`,e);break;case`onScrollEnd`:r!=null&&J(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=dn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:J(`beforetoggle`,e),J(`toggle`,e),Bt(e,`popover`,r);break;case`xlinkActuate`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Bt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=ln.get(n)||n,Bt(e,n,r))}}function Ld(e,t,n,r,i,o){switch(n){case`style`:sn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?rn(e,r):(typeof r==`number`||typeof r==`bigint`)&&rn(e,``+r);break;case`onScroll`:r!=null&&J(`scroll`,e);break;case`onScrollEnd`:r!=null&&J(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=fn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Nt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),o=e[yt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,i),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Bt(e,n,r)}}}function Rd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:J(`error`,e),J(`load`,e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:Y(e,t,o,s,n,null)}}i&&Y(e,t,`srcSet`,n.srcSet,n,null),r&&Y(e,t,`src`,n.src,n,null);return;case`input`:J(`invalid`,e);var c=o=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(a(137,t));break;default:Y(e,t,r,d,n,null)}}Qt(e,o,c,l,u,s,i,!1);return;case`select`:for(i in J(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Y(e,t,i,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&en(e,!!r,n,!0):en(e,!!r,t,!1);return;case`textarea`:for(s in J(`invalid`,e),o=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(a(91));break;default:Y(e,t,s,c,n,null)}nn(e,r,i,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Y(e,t,l,r,n,null)}return;case`dialog`:J(`beforetoggle`,e),J(`toggle`,e),J(`cancel`,e),J(`close`,e);break;case`iframe`:case`object`:J(`load`,e);break;case`video`:case`audio`:for(r=0;r<xd.length;r++)J(xd[r],e);break;case`image`:J(`error`,e),J(`load`,e);break;case`details`:J(`toggle`,e);break;case`embed`:case`source`:case`link`:J(`error`,e),J(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:Y(e,t,u,r,n,null)}return;default:if(cn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Ld(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Y(e,t,c,r,n,null))}function zd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Y(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(a(137,t));break;default:m!==f&&Y(e,t,p,m,r,f)}}Zt(e,s,c,l,u,d,o,i);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Y(e,t,o,null,r,l)}for(i in r)if(o=r[i],l=n[i],r.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Y(e,t,i,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?en(e,!!n,n?[]:``,!1):en(e,!!n,t,!0)):en(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Y(e,t,c,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(a(91));break;default:i!==o&&Y(e,t,s,i,r,o)}tn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Y(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Y(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Y(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(a(137,t));break;default:Y(e,t,u,p,r,m)}return;default:if(cn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Ld(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Ld(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Y(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Y(e,t,f,p,r,m)}function Bd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Vd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Bd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Bd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Hd=null,Ud=null;function Wd(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Kd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function qd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jd=null;function Yd(){var e=window.event;return e&&e.type===`popstate`?e!==Jd&&(Jd=e,!0):(Jd=null,!1)}var Xd=typeof setTimeout==`function`?setTimeout:void 0,Zd=typeof clearTimeout==`function`?clearTimeout:void 0,Qd=typeof Promise==`function`?Promise:void 0,$d=typeof queueMicrotask==`function`?queueMicrotask:Qd===void 0?Xd:function(e){return Qd.resolve(null).then(e).catch(ef)};function ef(e){setTimeout(function(){throw e})}function tf(e){return e===`head`}function nf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Lp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_f(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_f(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Tt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_f(e.ownerDocument.body)}n=i}while(n);Lp(t)}function rf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function af(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:af(n),Et(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function of(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Tt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=ff(e.nextSibling),e===null)break}return null}function sf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=ff(e.nextSibling),e===null))return null;return e}function cf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=ff(e.nextSibling),e===null))return null;return e}function lf(e){return e.data===`$?`||e.data===`$~`}function uf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function df(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function ff(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pf=null;function mf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return ff(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gf(e,t,n){switch(t=Wd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function _f(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Et(e)}var vf=new Map,yf=new Set;function bf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xf=T.d;T.d={f:Sf,r:Cf,D:Ef,C:Df,L:Of,m:kf,X:jf,S:Af,M:Mf};function Sf(){var e=xf.f(),t=wu();return e||t}function Cf(e){var t=Ot(e);t!==null&&t.tag===5&&t.type===`form`?Is(t):xf.r(e)}var wf=typeof document>`u`?null:document;function Tf(e,t,n){var r=wf;if(r&&typeof t==`string`&&t){var i=Xt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),yf.has(i)||(yf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Rd(t,`link`,e),jt(t),r.head.appendChild(t)))}}function Ef(e){xf.D(e),Tf(`dns-prefetch`,e,null)}function Df(e,t){xf.C(e,t),Tf(`preconnect`,e,t)}function Of(e,t,n){xf.L(e,t,n);var r=wf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Xt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Xt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Xt(n.imageSizes)+`"]`)):i+=`[href="`+Xt(e)+`"]`;var a=i;switch(t){case`style`:a=Pf(e);break;case`script`:a=Rf(e)}vf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Ff(a))||t===`script`&&r.querySelector(zf(a))||(t=r.createElement(`link`),Rd(t,`link`,e),jt(t),r.head.appendChild(t)))}}function kf(e,t){xf.m(e,t);var n=wf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Xt(r)+`"][href="`+Xt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rf(e)}if(!vf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),vf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zf(a)))return}r=n.createElement(`link`),Rd(r,`link`,e),jt(r),n.head.appendChild(r)}}}function Af(e,t,n){xf.S(e,t,n);var r=wf;if(r&&e){var i=At(r).hoistableStyles,a=Pf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Ff(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vf.get(a))&&Hf(e,n);var c=o=r.createElement(`link`);jt(c),Rd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jf(e,t){xf.X(e,t);var n=wf;if(n&&e){var r=At(n).hoistableScripts,i=Rf(e),a=r.get(i);a||(a=n.querySelector(zf(i)),a||(e=h({src:e,async:!0},t),(t=vf.get(i))&&Uf(e,t),a=n.createElement(`script`),jt(a),Rd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t){xf.M(e,t);var n=wf;if(n&&e){var r=At(n).hoistableScripts,i=Rf(e),a=r.get(i);a||(a=n.querySelector(zf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=vf.get(i))&&Uf(e,t),a=n.createElement(`script`),jt(a),Rd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t,n,r){var i=(i=ye.current)?bf(i):null;if(!i)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Pf(n.href),n=At(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pf(n.href);var o=At(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(Ff(e)))&&!o._p&&(s.instance=o,s.state.loading=5),vf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vf.set(e,n),o||Lf(i,e,n,s.state))),t&&r===null)throw Error(a(528,``));return s}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Rf(n),n=At(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Pf(e){return`href="`+Xt(e)+`"`}function Ff(e){return`link[rel="stylesheet"][`+e+`]`}function If(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Lf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Rd(t,`link`,n),jt(t),e.head.appendChild(t))}function Rf(e){return`[src="`+Xt(e)+`"]`}function zf(e){return`script[async]`+e}function Bf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Xt(n.href)+`"]`);if(r)return t.instance=r,jt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),jt(r),Rd(r,`style`,i),Vf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Pf(n.href);var o=e.querySelector(Ff(i));if(o)return t.state.loading|=4,t.instance=o,jt(o),o;r=If(n),(i=vf.get(i))&&Hf(r,i),o=(e.ownerDocument||e).createElement(`link`),jt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Rd(o,`link`,r),t.state.loading|=4,Vf(o,n.precedence,e),t.instance=o;case`script`:return o=Rf(n.src),(i=e.querySelector(zf(o)))?(t.instance=i,jt(i),i):(r=n,(i=vf.get(o))&&(r=h({},n),Uf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),jt(i),Rd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vf(r,n.precedence,e));return t.instance}function Vf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wf=null;function Gf(e,t,n){if(Wf===null){var r=new Map,i=Wf=new Map;i.set(n,r)}else i=Wf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Tt]||a[vt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Kf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Yf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pf(r.href),a=t.querySelector(Ff(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Qf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,jt(a);return}a=t.ownerDocument||t,r=If(r),(i=vf.get(i))&&Hf(r,i),a=a.createElement(`link`),jt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Rd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Xf=0;function Zf(e,t){return e.stylesheets&&e.count===0&&ep(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Xf===0&&(Xf=62500*Vd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $f=null;function ep(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$f=new Map,t.forEach(tp,e),$f=null,Qf.call(e))}function tp(e,t){if(!(t.state.loading&4)){var n=$f.get(e);if(n)var r=n.get(null);else{n=new Map,$f.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Qf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var np={$$typeof:C,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function rp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ip(e,t,n,r,i,a,o,s,c,l,u,d){return e=new rp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=yi(3,null,null,t),e.current=a,a.stateNode=e,t=ya(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Qa(a),e}function ap(e){return e?(e=_i,e):_i}function op(e,t,n,r,i,a){i=ap(i),r.context===null?r.context=i:r.pendingContext=i,r=eo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=to(e,r,t),n!==null&&(yu(n,e,t),no(n,e,t))}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=mi(e,67108864);t!==null&&yu(t,e,67108864),cp(e,67108864)}}function up(e){if(e.tag===13||e.tag===31){var t=_u();t=pt(t);var n=mi(e,t);n!==null&&yu(n,e,t),cp(e,t)}}var dp=!0;function fp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,mp(e,t,n,r)}finally{T.p=a,w.T=i}}function pp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,mp(e,t,n,r)}finally{T.p=a,w.T=i}}function mp(e,t,n,r){if(dp){var i=hp(r);if(i===null)Od(e,t,r,gp,n),Dp(e,r);else if(kp(i,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<Ep.indexOf(e)){for(;i!==null;){var a=Ot(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ye(o);s.entanglements[1]|=c,o&=~c}sd(a),!(V&6)&&(au=Le()+500,cd(0,!1))}}break;case 31:case 13:s=mi(a,2),s!==null&&yu(s,a,2),wu(),cp(a,2)}if(a=hp(r),a===null&&Od(e,t,r,gp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Od(e,t,r,null,n)}}function hp(e){return e=mn(e),_p(e)}var gp=null;function _p(e){if(gp=null,e=Dt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gp=e,null}function vp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Re()){case ze:return 2;case Be:return 8;case Ve:case He:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var yp=!1,bp=null,xp=null,Sp=null,Cp=new Map,wp=new Map,Tp=[],Ep=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Dp(e,t){switch(e){case`focusin`:case`focusout`:bp=null;break;case`dragenter`:case`dragleave`:xp=null;break;case`mouseover`:case`mouseout`:Sp=null;break;case`pointerover`:case`pointerout`:Cp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:wp.delete(t.pointerId)}}function Op(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ot(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kp(e,t,n,r,i){switch(t){case`focusin`:return bp=Op(bp,e,t,n,r,i),!0;case`dragenter`:return xp=Op(xp,e,t,n,r,i),!0;case`mouseover`:return Sp=Op(Sp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Cp.set(a,Op(Cp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,wp.set(a,Op(wp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ap(e){var t=Dt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,gt(e.priority,function(){up(n)});return}}else if(t===31){if(t=l(n),t!==null){e.blockedOn=t,gt(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pn=r,n.target.dispatchEvent(r),pn=null}else return t=Ot(n),t!==null&&lp(t),e.blockedOn=n,!1;t.shift()}return!0}function Mp(e,t,n){jp(e)&&n.delete(t)}function Np(){yp=!1,bp!==null&&jp(bp)&&(bp=null),xp!==null&&jp(xp)&&(xp=null),Sp!==null&&jp(Sp)&&(Sp=null),Cp.forEach(Mp),wp.forEach(Mp)}function Pp(e,t){e.blockedOn===t&&(e.blockedOn=null,yp||(yp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Np)))}var Fp=null;function Ip(e){Fp!==e&&(Fp=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Fp===e&&(Fp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(_p(r||n)===null)continue;break}var a=Ot(n);a!==null&&(e.splice(t,3),t-=3,Ps(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Lp(e){function t(t){return Pp(t,e)}bp!==null&&Pp(bp,e),xp!==null&&Pp(xp,e),Sp!==null&&Pp(Sp,e),Cp.forEach(t),wp.forEach(t);for(var n=0;n<Tp.length;n++){var r=Tp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Tp.length&&(n=Tp[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Tp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[yt]||null;if(typeof a==`function`)o||Ip(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[yt]||null)s=o.formAction;else if(_p(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Ip(n)}}}function Rp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function zp(e){this._internalRoot=e}Bp.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;op(n,_u(),e,t,null,null)},Bp.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;op(e.current,2,null,e,null,null),wu(),t[bt]=null}};function Bp(e){this._internalRoot=e}Bp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ht();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tp.length&&t!==0&&t<Tp[n].priority;n++);Tp.splice(n,0,e),n===0&&Ap(e)}};var Vp=r.version;if(Vp!==`19.2.8`)throw Error(a(527,Vp,`19.2.8`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=f(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Hp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Up=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Up.isDisabled&&Up.supportsFiber)try{Ke=Up.inject(Hp),qe=Up}catch{}}e.hydrateRoot=function(e,t,n){if(!o(e))throw Error(a(299));var r=!1,i=``,s=nc,c=rc,l=ic,u=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=ip(e,1,!0,t,n??null,r,i,u,s,c,l,Rp),t.context=ap(null),n=t.current,r=_u(),r=pt(r),i=eo(r),i.callback=null,to(n,i,r),n=r,t.current.lanes=n,ct(t,n),sd(t),e[bt]=t.current,Ed(e),new Bp(t)}})),h=r(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=`__TSS_CONTEXT`,_=Symbol.for(`TSS_SERVER_FUNCTION`),v=`application/x-tss-framed`,y={JSON:0,CHUNK:1,END:2,ERROR:3};`${v}`;var b=/;\s*v=(\d+)/;function x(e){let t=e.match(b);return t?parseInt(t[1],10):void 0}function S(e){let t=x(e);if(t!==void 0&&t!==1)throw Error(`Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`)}var C=()=>window.__TSS_START_OPTIONS__;function ee(e){return e[e.length-1]}function te(e,t){return typeof e==`function`?e(t):e}var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;function ie(e){for(let t in e)if(ne.call(e,t))return!0;return!1}var ae=()=>Object.create(null),oe=(e,t)=>se(e,t,ae);function se(e,t,n=()=>({}),r=0){if(e===t)return e;if(r>500)return t;let i=t,a=de(e)&&de(i);if(!a&&!(le(e)&&le(i)))return i;let o=a?e:ce(e);if(!o)return i;let s=a?i:ce(i);if(!s)return i;let c=o.length,l=s.length,u=a?Array(l):n(),d=0;for(let t=0;t<l;t++){let o=a?t:s[t],l=e[o],f=i[o];if(l===f){u[o]=l,(a?t<c:ne.call(e,o))&&d++;continue}if(l===null||f===null||typeof l!=`object`||typeof f!=`object`){u[o]=f;continue}let p=se(l,f,n,r+1);u[o]=p,p===l&&d++}return c===l&&d===c?e:u}function ce(e){let t=Object.keys(e);if(t.length!==Object.getOwnPropertyNames(e).length)return!1;let n=Object.getOwnPropertySymbols(e);if(n.length===0)return t;for(let r of n){if(!re.call(e,r))return!1;t.push(r)}return t}function le(e){if(!ue(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!ue(n)||!n.hasOwnProperty(`isPrototypeOf`))}function ue(e){return Object.prototype.toString.call(e)===`[object Object]`}function de(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function w(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(!w(e[r],t[r],n))return!1;return!0}if(le(e)&&le(t)){let r=n?.ignoreUndefined??!0;if(n?.partial){for(let i in t)if((!r||t[i]!==void 0)&&!w(e[i],t[i],n))return!1;return!0}let i=0;if(!r)i=Object.keys(e).length;else for(let t in e)e[t]!==void 0&&i++;let a=0;for(let o in t)if((!r||t[o]!==void 0)&&(a++,a>i||!w(e[o],t[o],n)))return!1;return i===a}return!1}function T(e){return typeof e?.message==`string`?e.message.startsWith(`Failed to fetch dynamically imported module`)||e.message.startsWith(`error loading dynamically imported module`)||e.message.startsWith(`Importing a module script failed`):!1}var fe=/[\x00-\x1f\x7f"<>`{}]/g;function pe(e){return e.replace(fe,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase().padStart(2,`0`))}function me(e){let t;try{t=decodeURI(e)}catch{t=e.replaceAll(/%[0-9A-F]{2}/gi,e=>{try{return decodeURI(e)}catch{return e}})}return pe(t)}var he=[`http:`,`https:`,`mailto:`,`tel:`];function ge(e,t){if(!e)return!1;try{let n=new URL(e);return!t.has(n.protocol)}catch{return!1}}var E={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},_e=/[&><\u2028\u2029]/g;function ve(e){return e.replace(_e,e=>E[e])}function ye(e){if(!e||!/[%\\\x00-\x1f\x7f]/.test(e)&&!e.startsWith(`//`))return{path:e,handledProtocolRelativeURL:!1};let t=/%25|%5C/gi,n=0,r=``,i;for(;(i=t.exec(e))!==null;)r+=me(e.slice(n,i.index))+i[0],n=t.lastIndex;r+=me(n?e.slice(n):e);let a=!1;return r.startsWith(`//`)&&(a=!0,r=`/`+r.replace(/^\/+/,``)),{path:r,handledProtocolRelativeURL:a}}function be(e){return/\s|[^\u0000-\u007F]/.test(e)?e.replace(/\s|[^\u0000-\u007F]/gu,encodeURIComponent):e}function xe(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Se(){throw Error(`Invariant failed`)}function Ce(e){let t=new Map,n,r,i=e=>{e.next&&(e.prev?(e.prev.next=e.next,e.next.prev=e.prev,e.next=void 0,r&&(r.next=e,e.prev=r)):(e.next.prev=void 0,n=e.next,e.next=void 0,r&&(e.prev=r,r.next=e)),r=e)};return{get(e){let n=t.get(e);if(n)return i(n),n.value},set(a,o){if(t.size>=e&&n){let e=n;t.delete(e.key),e.next&&(n=e.next,e.next.prev=void 0),e===r&&(r=void 0)}let s=t.get(a);if(s)s.value=o,i(s);else{let e={key:a,value:o,prev:r};r&&(r.next=e),r=e,n||=e,t.set(a,e)}},clear(){t.clear(),n=void 0,r=void 0}}}var we=4,Te=5;function Ee(e,t,n=new Uint16Array(6)){let r=e.indexOf(`/`,t),i=r===-1?e.length:r,a=e.substring(t,i);if(!a||!a.includes(`$`))return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n;if(a===`$`){let r=e.length;return n[0]=2,n[1]=t,n[2]=t,n[3]=r,n[4]=r,n[5]=r,n}if(a.charCodeAt(0)===36)return n[0]=1,n[1]=t,n[2]=t+1,n[3]=i,n[4]=i,n[5]=i,n;let o=a.indexOf(`{`),s;if(o!==-1&&o+1<a.length&&(s=a.indexOf(`}`,o))!==-1){let r=a.charCodeAt(o+1);if(r===45){if(o+2<a.length&&a.charCodeAt(o+2)===36){let e=o+3,r=s;if(e<r)return n[0]=3,n[1]=t+o,n[2]=t+e,n[3]=t+r,n[4]=t+s+1,n[5]=i,n}}else if(r===36){let r=o+1,a=o+2;return a===s?(n[0]=2,n[1]=t+o,n[2]=t+r,n[3]=t+a,n[4]=t+s+1,n[5]=e.length,n):(n[0]=1,n[1]=t+o,n[2]=t+a,n[3]=t+s,n[4]=t+s+1,n[5]=i,n)}}return n[0]=0,n[1]=t,n[2]=t,n[3]=i,n[4]=i,n[5]=i,n}function De(e,t,n,r,i,a,o,s){s?.(n);let c=r;{let r=n.fullPath??n.from,s=n.options,l=r.length,u=s?.caseSensitive??e,d=s?.params?.parse??s?.parseParams;for(;c<l;){let e=Ee(r,c,t),n,s=c,l=e[5];c=l+1,a++;let f=e[0];switch(f){case 0:{let t=r.substring(e[2],e[3]),o=t,s;u?s=i.static??=new Map:(o=t.toLowerCase(),s=i.staticInsensitive??=new Map);let c=s.get(o);if(c)n=c;else{let e=ke(r);e.parent=i,e.depth=a,n=e,s.set(o,e)}break}case 1:case 3:case 2:{let t=r.substring(s,e[1]),c=r.substring(e[4],l),p=u&&!!(t||c),m=t?p?t:t.toLowerCase():void 0,h=c?p?c:c.toLowerCase():void 0,g=f===1?i.dynamic:f===3?i.optional:i.wildcard,_=f!==2&&!d&&g?.find(e=>!e.parse&&e.caseSensitive===p&&e.prefix===m&&e.suffix===h);if(_)n=_;else{let e=Ae(f,r,p,m,h);n=e,e.parent=i,e.depth=a;let t;t=f===1?i.dynamic??=[]:f===3?i.optional??=[]:i.wildcard??=[],t.push(e),t.length===2&&o?.push(t)}break}}i=n}if(d&&n.children&&!n.isRoot&&n.id&&n.id.charCodeAt(n.id.lastIndexOf(`/`)+1)===95){let e=ke(r);e.kind=Te,e.parent=i,a++,e.depth=a,i.pathless??=[],i.pathless.push(e),i=e}let f=(n.path||!n.children)&&!n.isRoot;if(f&&r.endsWith(`/`)){let e=ke(r);e.kind=we,e.parent=i,a++,e.depth=a,i.index=e,i=e}i.parse=d??null,i.priority=s?.params?.priority??0,f&&!i.route&&(i.route=n,i.fullPath=r)}if(n.children)for(let r of n.children)De(e,t,r,c,i,a,o,s)}function Oe(e,t){if(e.parse&&!t.parse)return-1;if(!e.parse&&t.parse)return 1;if(e.parse&&t.parse&&(e.priority||t.priority))return t.priority-e.priority;if(e.prefix&&t.prefix&&e.prefix!==t.prefix){if(e.prefix.startsWith(t.prefix))return-1;if(t.prefix.startsWith(e.prefix))return 1}if(e.suffix&&t.suffix&&e.suffix!==t.suffix){if(e.suffix.endsWith(t.suffix))return-1;if(t.suffix.endsWith(e.suffix))return 1}return e.prefix&&!t.prefix?-1:!e.prefix&&t.prefix?1:e.suffix&&!t.suffix?-1:!e.suffix&&t.suffix?1:e.caseSensitive&&!t.caseSensitive?-1:!e.caseSensitive&&t.caseSensitive?1:0}function ke(e){return{kind:0,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:e,parent:null,parse:null,priority:0}}function Ae(e,t,n,r,i){return{kind:e,depth:0,pathless:null,index:null,static:null,staticInsensitive:null,dynamic:null,optional:null,wildcard:null,route:null,fullPath:t,parent:null,parse:null,priority:0,caseSensitive:n,prefix:r,suffix:i}}function je(e,t){let n=ke(`/`),r=new Uint16Array(6),i=[];for(let t of e)De(!1,r,t,1,n,0,i);for(let e of i)e.sort(Oe);t.masksTree=n,t.flatCache=Ce(1e3)}function Me(e,t){e||=`/`;let n=t.flatCache.get(e);if(n)return n;let r=Le(e,t.masksTree);return t.flatCache.set(e,r),r}function Ne(e,t,n,r,i){e||=`/`,r||=`/`;let a=t?`case\0${e}`:e,o=i.singleCache.get(a);return o||(o=ke(`/`),De(t,new Uint16Array(6),{from:e},1,o,0),i.singleCache.set(a,o)),Le(r,o,n)}function Pe(e,t,n=!1){let r=n?e:`nofuzz\0${e}`,i=t.matchCache.get(r);if(i!==void 0)return i;e||=`/`;let a;try{a=Le(e,t.segmentTree,n)}catch(e){if(e instanceof URIError)a=null;else throw e}return a&&(a.branch=ze(a.route)),t.matchCache.set(r,a),a}function Fe(e){return e===`/`?e:e.replace(/\/{1,}$/,``)}function Ie(e,t=!1,n){let r=ke(e.fullPath),i=new Uint16Array(6),a=[],o={},s={},c=0;De(t,i,e,1,r,0,a,e=>{if(n?.(e,c),e.id in o&&Se(),o[e.id]=e,c!==0&&e.path){let t=Fe(e.fullPath);(!s[t]||e.fullPath.endsWith(`/`))&&(s[t]=e)}c++});for(let e of a)e.sort(Oe);return{processedTree:{segmentTree:r,singleCache:Ce(1e3),matchCache:Ce(1e3),flatCache:null,masksTree:null},routesById:o,routesByPath:s}}function Le(e,t,n=!1){let r=e.split(`/`),i=Ve(e,r,t,n);if(!i)return null;let[a]=Re(e,r,i);return{route:i.node.route,rawParams:a}}function Re(e,t,n){let r=Be(n.node),i=null,a=Object.create(null),o=n.extract?.part??0,s=n.extract?.node??0,c=n.extract?.path??0,l=n.extract?.segment??0;for(;s<r.length;o++,s++,c++,l++){let u=r[s];if(u.kind===we)break;if(u.kind===Te){l--,o--,c--;continue}let d=t[o],f=c;if(d&&(c+=d.length),u.kind===1){i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0;if(e.charCodeAt(t)===123){let n=u.suffix?.length??0,r=e.substring(t+2,e.length-n-1),i=d.substring(t,d.length-n);a[r]=decodeURIComponent(i)}else{let t=e.substring(1);a[t]=decodeURIComponent(d)}}else if(u.kind===3){if(n.skipped&1<<s){o--,c=f-1;continue}i??=n.node.fullPath.split(`/`);let e=i[l],t=u.prefix?.length??0,r=u.suffix?.length??0,p=e.substring(t+3,e.length-r-1),m=u.suffix||u.prefix?d.substring(t,d.length-r):d;m&&(a[p]=decodeURIComponent(m))}else if(u.kind===2){let t=u,n=e.substring(f+(t.prefix?.length??0),e.length-(t.suffix?.length??0)),r=decodeURIComponent(n);a[`*`]=r,a._splat=r;break}}return n.rawParams&&Object.assign(a,n.rawParams),[a,{part:o,node:s,path:c,segment:l}]}function ze(e){let t=[e];for(;e.parentRoute;)e=e.parentRoute,t.push(e);return t.reverse(),t}function Be(e){let t=Array(e.depth+1);do t[e.depth]=e,e=e.parent;while(e);return t}function Ve(e,t,n,r){if(e===`/`&&n.index)return{node:n.index,skipped:0};let i=!ee(t),a=i&&e!==`/`,o=t.length-+!!i,s=[{node:n,index:1,skipped:0,statics:0,dynamics:0,optionals:0}],c=null,l=null;for(;s.length;){let n=s.pop(),{node:i,index:u,skipped:d,statics:f,dynamics:p,optionals:m}=n,{extract:h,rawParams:g}=n;if(i.kind===2&&i.route&&!Ge(l,n))continue;if(i.parse){if(!We(e,t,n))continue;g=n.rawParams,h=n.extract}r&&i.route&&i.kind!==we&&Ge(c,n)&&(c=n);let _=u===o;if(_&&(i.route&&(!a||i.kind===we||i.kind===2)&&Ge(l,n)&&(l=n),!i.optional&&!i.wildcard&&!i.index&&!i.pathless))continue;let v=_?void 0:t[u],y;if(_&&i.index){let n={node:i.index,index:u,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g},r=!0;if(i.index.parse&&(We(e,t,n)||(r=!1)),r){if(!p&&!m&&!d&&Ue(f,o))return n;Ge(l,n)&&(l=n)}}if(i.wildcard)for(let e=i.wildcard.length-1;e>=0;e--){let n=i.wildcard[e],{prefix:r,suffix:a}=n;if(!(r&&(_||!(n.caseSensitive?v:y??=v.toLowerCase()).startsWith(r)))){if(a){if(_)continue;let e=t.slice(u).join(`/`).slice(-a.length);if((n.caseSensitive?e:e.toLowerCase())!==a)continue}s.push({node:n,index:o,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}}if(i.optional){let e=d|1<<i.depth+1;for(let t=i.optional.length-1;t>=0;t--){let n=i.optional[t];s.push({node:n,index:u,skipped:e,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}if(!_)for(let e=i.optional.length-1;e>=0;e--){let t=i.optional[e],{prefix:n,suffix:r}=t;if(n||r){let e=t.caseSensitive?v:y??=v.toLowerCase();if(n&&!e.startsWith(n)||r&&!e.endsWith(r))continue}s.push({node:t,index:u+1,skipped:d,statics:f,dynamics:p,optionals:m+He(o,u),extract:h,rawParams:g})}}if(!_&&i.dynamic&&v)for(let e=i.dynamic.length-1;e>=0;e--){let t=i.dynamic[e],{prefix:n,suffix:r}=t;if(n||r){let e=t.caseSensitive?v:y??=v.toLowerCase();if(n&&!e.startsWith(n)||r&&!e.endsWith(r))continue}s.push({node:t,index:u+1,skipped:d,statics:f,dynamics:p+He(o,u),optionals:m,extract:h,rawParams:g})}if(!_&&i.staticInsensitive){let e=i.staticInsensitive.get(y??=v.toLowerCase());e&&s.push({node:e,index:u+1,skipped:d,statics:f+He(o,u),dynamics:p,optionals:m,extract:h,rawParams:g})}if(!_&&i.static){let e=i.static.get(v);e&&s.push({node:e,index:u+1,skipped:d,statics:f+He(o,u),dynamics:p,optionals:m,extract:h,rawParams:g})}if(i.pathless)for(let e=i.pathless.length-1;e>=0;e--){let t=i.pathless[e];s.push({node:t,index:u,skipped:d,statics:f,dynamics:p,optionals:m,extract:h,rawParams:g})}}if(l)return l;if(r&&c){let n=c.index;for(let e=0;e<c.index;e++)n+=t[e].length;let r=n===e.length?`/`:e.slice(n);return c.rawParams??=Object.create(null),c.rawParams[`**`]=decodeURIComponent(r),c}return null}function He(e,t){return 2**(e-t-1)}function Ue(e,t){return e===2**(t-1)-1}function We(e,t,n){let r,i;try{[r,i]=Re(e,t,n)}catch{return null}if(n.rawParams=r,n.extract=i,!n.node.parse)return!0;try{if(n.node.parse(r)===!1)return null}catch{}return!0}function Ge(e,t){return!e||t.statics>e.statics||t.statics===e.statics&&(t.dynamics>e.dynamics||t.dynamics===e.dynamics&&(t.optionals>e.optionals||t.optionals===e.optionals&&((t.node.kind===we)>(e.node.kind===we)||t.node.kind===we==(e.node.kind===we)&&t.node.depth>e.node.depth)))}function Ke(e){return qe(e.filter(e=>e!==void 0).join(`/`))}function qe(e){return e.replace(/\/{2,}/g,`/`)}function Je(e){return e===`/`?e:e.replace(/^\/{1,}/,``)}function Ye(e){let t=e.length;return t>1&&e[t-1]===`/`?e.replace(/\/{1,}$/,``):e}function Xe(e){return Ye(Je(e))}function Ze(e,t){return e?.endsWith(`/`)&&e!==`/`&&e!==`${t}/`?e.slice(0,-1):e}function Qe(e,t,n){return Ze(e,n)===Ze(t,n)}function $e({base:e,to:t,trailingSlash:n=`never`,cache:r}){let i=t===`.`,a=t.startsWith(`/`),o;if(r){o=a?t:i?e:e+`\0`+t;let n=r.get(o);if(n)return n}let s;if(i)s=e.split(`/`);else if(a)s=t.split(`/`);else{for(s=e.split(`/`);s.length>1&&ee(s)===``;)s.pop();let n=t.split(`/`);for(let e=0,t=n.length;e<t;e++){let r=n[e];r===``?e?e===t-1&&s.push(r):s=[r]:r===`..`?s.length>1?s.pop():s=[``]:r===`.`||s.push(r)}}s.length>1&&(ee(s)===``?n===`never`&&s.pop():n===`always`&&s.push(``));let c=qe(s.join(`/`))||`/`;return o&&r&&r.set(o,c),c}function et(e){let t=new Map(e.map(e=>[encodeURIComponent(e),e])),n=Array.from(t.keys()).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`),r=new RegExp(n,`g`);return e=>e.replace(r,e=>t.get(e)??e)}function tt(e,t,n){let r=t[e];return typeof r==`string`?e===`_splat`?/^[a-zA-Z0-9\-._~!/]*$/.test(r)?r:r.split(`/`).map(e=>rt(e,n)).join(`/`):rt(r,n):r}function nt({path:e,params:t,decoder:n,...r}){let i=!1,a=Object.create(null);if(!e||e===`/`)return{interpolatedPath:`/`,usedParams:a,isMissingParams:i};if(!e.includes(`$`))return{interpolatedPath:e,usedParams:a,isMissingParams:i};let o=e.length,s=0,c,l=``;for(;s<o;){let r=s;c=Ee(e,r,c);let o=c[5];if(s=o+1,r===o)continue;let u=c[0];if(u===0){l+=`/`+e.substring(r,o);continue}if(u===2){let s=t._splat;a._splat=s,a[`*`]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o);if(!s){i=!0,(u||d)&&(l+=`/`+u+d);continue}let f=tt(`_splat`,t,n);l+=`/`+u+f+d;continue}if(u===1){let s=e.substring(c[2],c[3]);!i&&!(s in t)&&(i=!0),a[s]=t[s];let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=tt(s,t,n)??`undefined`;l+=`/`+u+f+d;continue}if(u===3){let i=e.substring(c[2],c[3]),s=t[i];if(s==null)continue;a[i]=s;let u=e.substring(r,c[1]),d=e.substring(c[4],o),f=tt(i,t,n)??``;l+=`/`+u+f+d;continue}}return e.endsWith(`/`)&&(l+=`/`),{usedParams:a,interpolatedPath:l||`/`,isMissingParams:i}}function rt(e,t){let n=encodeURIComponent(e);return t?.(n)??n}function it(e){return e?.isNotFound===!0}function at(){try{return sessionStorage}catch{return}}var ot=`tsr-scroll-restoration-v1_3`,st=at();function ct(){try{return JSON.parse(st?.getItem(`tsr-scroll-restoration-v1_3`)||`{}`)}catch{return{}}}function lt(){try{st?.setItem(ot,JSON.stringify(ut))}catch{}}var ut=ct(),dt=`data-scroll-restoration-id`,ft=e=>e.state.__TSR_key||e.href;function pt(e){let t=e.getAttribute(dt);if(t)return`[${dt}="${t}"]`;let n=``,r=e,i;for(;i=r.parentNode;){let e=1,t=r;for(;t=t.previousElementSibling;)e++;let a=`${r.localName}:nth-child(${e})`;n=n?`${a} > ${n}`:a,r=i}return n}var mt=!1,ht=`window`;function gt(e){try{return typeof e==`function`?e():document.querySelector(e)}catch{}}function _t(e){let t=new Set;for(let n of e){if(n===ht)continue;let e=gt(n);e&&t.add(e)}return t}function vt(e,t){let n=t??e.options.scrollRestoration,r=e._scroll;n&&(r.restoring=!0);let i=e.options.getScrollRestorationKey||ft,a=new Set,o=e=>{let t=ut[e]||={};for(let e of a)e===document?t[ht]={scrollX,scrollY}:e.isConnected&&(t[pt(e)]={scrollX:e.scrollLeft,scrollY:e.scrollTop})};n&&!r.restoration&&(r.restoration=!0,mt=!1,history.scrollRestoration=`manual`,document.addEventListener(`scroll`,e=>{mt||a.add(e.target)},!0),e.subscribe(`onBeforeLoad`,e=>{e.fromLocation&&o(i(e.fromLocation)),a.clear()}),addEventListener(`pagehide`,()=>{o(i(e.stores.resolvedLocation.get()??e.stores.location.get())),lt()})),!r.reset&&(r.reset=!0,e.subscribe(`onRendered`,t=>{let n=e.options.scrollRestorationBehavior,o=e.options.scrollToTopSelectors,s=r.next,c=r.hash,l;if(a.clear(),r.next=!0,r.hash=!1,typeof e.options.scrollRestoration==`function`&&!e.options.scrollRestoration({location:e.latestLocation}))return;let u=i(t.toLocation),d=t.fromLocation&&i(t.fromLocation);if(r.restoring&&d&&d!==u){let e=ut[d];if(e){let t=ut[u];for(let n in e){if(n===ht){if(s)continue}else{let e=gt(n);if(!e||s&&o&&(l??=_t(o),l.has(e)))continue}t||=ut[u]={},t[n]??=e[n]}}}mt=!0;try{let e=t.toLocation.hash,i=t.toLocation.state.__hashScrollIntoViewOptions??!0,a=!1;if(s){!e&&o&&(l??=_t(o));let t=e&&i&&c,s=r.restoring?ut[u]:void 0;if(s)for(let e in s){let{scrollX:r,scrollY:i}=s[e];if(e===ht){if(t)continue;scrollTo({top:i,left:r,behavior:n}),a=!0}else{let t=gt(e);t&&(t.scrollLeft=r,t.scrollTop=i,l?.delete(t))}}if(!e){let e={top:0,left:0,behavior:n};if(a||scrollTo(e),l)for(let t of l)t.scrollTo(e)}}!a&&e&&i&&document.getElementById(e)?.scrollIntoView(i)}finally{mt=!1}}))}function yt(e,t=String){let n=new URLSearchParams;for(let r in e){let i=e[r];i!==void 0&&n.set(r,t(i))}return n.toString()}function bt(e){return e?e===`false`?!1:e===`true`?!0:e*0==0&&+e+``===e?+e:e:``}function xt(e){let t=new URLSearchParams(e),n=Object.create(null);for(let[e,r]of t.entries()){let t=n[e];t==null?n[e]=bt(r):Array.isArray(t)?t.push(bt(r)):n[e]=[t,bt(r)]}return n}var St=/^(?:\s|["[{\d-]|fa|nu|tr)/,Ct=Tt(JSON.parse),wt=Et(JSON.stringify,JSON.parse);function Tt(e){return t=>{t[0]===`?`&&(t=t.substring(1));let n=xt(t);for(let t in n){let r=n[t];if(typeof r==`string`)try{n[t]=e(r)}catch{}}return n}}function Et(e,t){let n=t===JSON.parse;function r(r){if(r&&typeof r==`object`)try{return e(r)}catch{}else if(t&&typeof r==`string`){if(n&&!St.test(r))return r;try{return t(r),e(r)}catch{}}return r}return e=>{let t=yt(e,r);return t?`?${t}`:``}}var Dt=`__root__`;function Ot(e){if(e.statusCode=e.statusCode||e.code||307,!e.reloadDocument&&typeof e.href==`string`)try{new URL(e.href),e.reloadDocument=!0}catch{}let t=new Headers(e.headers);e.href&&t.get(`Location`)===null&&t.set(`Location`,e.href);let n=new Response(null,{status:e.statusCode,headers:t});if(n.options=e,e.throw)throw n;return n}function kt(e){return e instanceof Response&&!!e.options}function At(e){if(typeof e==`object`&&e&&e.isSerializedRedirect)return Ot(e)}function jt(e){return e.replaceAll(`\0`,`/`).replaceAll(`�`,`/`).replace(/~([~0r])/g,(e,t)=>t===`0`?`\0`:t===`r`?`�`:t)}function Mt(e){return{input:({url:t})=>{for(let n of e)t=Pt(n,t);return t},output:({url:t})=>{for(let n=e.length-1;n>=0;n--)t=Ft(e[n],t);return t}}}function Nt(e){let t=Xe(e.basepath),n=`/${t}`,r=e.caseSensitive?n:n.toLowerCase(),i=`${r}/`;return{input:({url:t})=>{let a=e.caseSensitive?t.pathname:t.pathname.toLowerCase();return a===r?t.pathname=`/`:a.startsWith(i)&&(t.pathname=t.pathname.slice(n.length)),t},output:({url:e})=>(e.pathname=Ke([`/`,t,e.pathname]),e)}}function Pt(e,t){let n=e?.input?.({url:t});if(n){if(typeof n==`string`)return new URL(n);if(n instanceof URL)return n}return t}function Ft(e,t){let n=e?.output?.({url:t});if(n){if(typeof n==`string`)return new URL(n);if(n instanceof URL)return n}return t}function It(e,t){let{createMutableStore:n,createReadonlyStore:r,batch:i}=t,a=new Map,o=n(`idle`),s=n(e),c=n(void 0),l=n([]),u=r(()=>l.get().map(e=>a.get(e).get())),d=r(()=>({status:o.get(),isLoading:o.get()===`pending`,matches:u.get(),location:s.get(),resolvedLocation:c.get()}));function f(e){let t=a.get(e);return t||(t=n(void 0),a.set(e,t)),t}let p={status:o,location:s,resolvedLocation:c,ids:l,matches:u,byRoute:a,__store:d,getMatchStore:f,setMatches:m};function m(e){let t=l.get(),n=e.map(e=>e.routeId);i(()=>{xe(t,n)||l.set(n);for(let e of t)n.includes(e)||a.get(e).set(()=>void 0);for(let t of e){let e=f(t.routeId);e.get()!==t&&e.set(t)}})}return p}var Lt=`__TSR_index`,Rt=`popstate`,zt=`beforeunload`;function Bt(e){let t=e.getLocation(),n=new Set,r=r=>{t=e.getLocation(),n.forEach(e=>e({location:t,action:r}))},i=n=>{e.notifyOnIndexChange??!0?r(n):t=e.getLocation()},a=async({task:n,navigateOpts:r,...i})=>{if(r?.ignoreBlocker??!1){n();return}let a=e.getBlockers?.()??[],o=i.type===`PUSH`||i.type===`REPLACE`;if(typeof document<`u`&&a.length&&o)for(let n of a){let r=Wt(i.path,i.state);if(await n.blockerFn({currentLocation:t,nextLocation:r,action:i.type})){e.onBlocked?.();return}}n()};return{get location(){return t},get length(){return e.getLength()},subscribers:n,subscribe:e=>(n.add(e),()=>{n.delete(e)}),push:(n,i,o)=>{let s=t.state[Lt];i=Vt(s+1,i),a({task:()=>{e.pushState(n,i),r({type:`PUSH`})},navigateOpts:o,type:`PUSH`,path:n,state:i})},replace:(n,i,o)=>{let s=t.state[Lt];i=Vt(s,i),a({task:()=>{e.replaceState(n,i),r({type:`REPLACE`})},navigateOpts:o,type:`REPLACE`,path:n,state:i})},go:(t,n)=>{a({task:()=>{e.go(t),i({type:`GO`,index:t})},navigateOpts:n,type:`GO`})},back:t=>{a({task:()=>{e.back(t?.ignoreBlocker??!1),i({type:`BACK`})},navigateOpts:t,type:`BACK`})},forward:t=>{a({task:()=>{e.forward(t?.ignoreBlocker??!1),i({type:`FORWARD`})},navigateOpts:t,type:`FORWARD`})},canGoBack:()=>t.state[Lt]!==0,createHref:t=>e.createHref(t),block:t=>{if(!e.setBlockers)return()=>{};let n=e.getBlockers?.()??[];return e.setBlockers([...n,t]),()=>{let n=e.getBlockers?.()??[];e.setBlockers?.(n.filter(e=>e!==t))}},flush:()=>e.flush?.(),destroy:()=>e.destroy?.(),notify:r}}function Vt(e,t){t||={};let n=Gt();return{...t,key:n,__TSR_key:n,[Lt]:e}}function Ht(e){let t=e?.window??(typeof document<`u`?window:void 0),n=t.history.pushState,r=t.history.replaceState,i=[],a=()=>i,o=e=>i=e,s=e?.createHref??(e=>e),c=e?.parseLocation??(()=>Wt(`${t.location.pathname}${t.location.search}${t.location.hash}`,t.history.state));if(!t.history.state?.__TSR_key&&!t.history.state?.key){let e=Gt();t.history.replaceState({[Lt]:0,key:e,__TSR_key:e},``)}let l=c(),u,d=!1,f=!1,p=!1,m=!1,h=()=>l,g,_=()=>{g&&(S._ignoreSubscribers=!0,(g[2]?t.history.pushState:t.history.replaceState)(g[1],``,g[0]),S._ignoreSubscribers=!1,g=void 0,u=void 0)},v=(e,t,n)=>{let r=s(t),i=!!g;i||(u=l),l=Wt(t,n),g=[r,n,g?.[2]||e],i||queueMicrotask(()=>_())},y=e=>{l=c(),S.notify({type:e})},b=async()=>{if(f){f=!1;return}let e=c(),n=e.state[Lt]-l.state[Lt],r=n===1,i=n===-1,o=!r&&!i||d;d=!1;let s=o?`GO`:i?`BACK`:`FORWARD`,u=o?{type:`GO`,index:n}:{type:i?`BACK`:`FORWARD`};if(p)p=!1;else{let n=a();if(typeof document<`u`&&n.length){for(let r of n)if(await r.blockerFn({currentLocation:l,nextLocation:e,action:s})){f=!0,t.history.go(1),S.notify(u);return}}}l=c(),S.notify(u)},x=e=>{if(m){m=!1;return}let t=!1,n=a();if(typeof document<`u`&&n.length)for(let e of n){let n=e.enableBeforeUnload??!0;if(n===!0){t=!0;break}if(typeof n==`function`&&n()===!0){t=!0;break}}if(t)return e.preventDefault(),e.returnValue=``},S=Bt({getLocation:h,getLength:()=>t.history.length,pushState:(e,t)=>v(!0,e,t),replaceState:(e,t)=>v(!1,e,t),back:e=>(e&&(p=!0),m=!0,t.history.back()),forward:e=>{e&&(p=!0),m=!0,t.history.forward()},go:e=>{d=!0,t.history.go(e)},createHref:e=>s(e),flush:_,destroy:()=>{t.history.pushState=n,t.history.replaceState=r,t.removeEventListener(zt,x,{capture:!0}),t.removeEventListener(Rt,b)},onBlocked:()=>{u&&l!==u&&(l=u)},getBlockers:a,setBlockers:o,notifyOnIndexChange:!1});return t.addEventListener(zt,x,{capture:!0}),t.addEventListener(Rt,b),t.history.pushState=function(...e){let r=n.apply(t.history,e);return S._ignoreSubscribers||y(`PUSH`),r},t.history.replaceState=function(...e){let n=r.apply(t.history,e);return S._ignoreSubscribers||y(`REPLACE`),n},S}function Ut(e){let t=e.replace(/[\x00-\x1f\x7f]/g,``);return t.startsWith(`//`)&&(t=`/`+t.replace(/^\/+/,``)),t}function Wt(e,t){let n=Ut(e),r=n.indexOf(`#`),i=n.indexOf(`?`),a=Gt();return{href:n,pathname:n.substring(0,r>0?i>0?Math.min(r,i):r:i>0?i:n.length),hash:r>-1?n.substring(r):``,search:i>-1?n.slice(i,r===-1?void 0:r):``,state:t||{[Lt]:0,key:a,__TSR_key:a}}}function Gt(){return(Math.random()+1).toString(36).substring(7)}function Kt(e){return e.options.loader||e.options.beforeLoad||e.lazyFn||e.options.component?.preload||e.options.pendingComponent?.preload}function qt(e){return e instanceof Error?{name:e.name,message:e.message}:{data:e}}function Jt(e,t){return{fromLocation:t,toLocation:e,pathChanged:t?.pathname!==e.pathname,hrefChanged:t?.href!==e.href,hashChanged:t?.hash!==e.hash}}function Yt({key:e,__TSR_key:t,__TSR_index:n,__hashScrollIntoViewOptions:r,...i}){return i}function Xt(e,t,n,r){for(let i of t){if(r&&e._tx!==r)return;n.some(e=>e.routeId===i.routeId)||e.routesById[i.routeId].options.onLeave?.(i)}for(let i of n){if(r&&e._tx!==r)return;e.routesById[i.routeId].options[t.some(e=>e.routeId===i.routeId)?`onStay`:`onEnter`]?.(i)}}var Zt=class{constructor(e,t){this.tempLocationKey=`${Math.round(Math.random()*1e7)}`,this._scroll={next:!0},this.subscribers=new Set,this._cache=new Map,this._committed=[],this.routeBranchCache=new WeakMap,this.lightweightCache=new WeakMap,this.startTransition=async e=>(e(),!1),this.update=e=>{let t=this.options,n=this.basepath??t?.basepath??`/`,r=this.basepath===void 0,i=t?.rewrite;if(this.options={...t,...e},this.isServer=this.options.isServer??!1??typeof document>`u`,this.protocolAllowlist=new Set(this.options.protocolAllowlist),this.options.pathParamsAllowedCharacters&&(this.pathParamsDecoder=et(this.options.pathParamsAllowedCharacters)),(!this.history||this.options.history&&this.options.history!==this.history)&&(this.history=this.options.history?this.options.history:Ht()),this.origin=this.options.origin,this.origin||=window?.origin&&window.origin!==`null`?window.origin:`http://localhost`,this.history&&this.updateLatestLocation(),this.options.routeTree!==this.routeTree){this.routeTree=this.options.routeTree;let e;this.resolvePathCache=Ce(1e3),e=this.buildRouteTree(),this.setRoutes(e)}if(!this.stores&&this.latestLocation){let e=this.getStoreConfig(this);this.batch=e.batch,this.stores=It(this.latestLocation,e),vt(this)}let a=this.options.basepath??`/`,o=this.options.rewrite;if(r||n!==a||i!==o){this.basepath=a;let e=[],t=Xe(a);t&&t!==`/`&&e.push(Nt({basepath:a})),o&&e.push(o),this.rewrite=e.length===0?void 0:e.length===1?e[0]:Mt(e),this.history&&this.updateLatestLocation(),this.stores&&this.stores.location.set(this.latestLocation)}},this.updateLatestLocation=()=>{this.latestLocation=this.parseLocation(this.history.location,this.latestLocation)},this.buildRouteTree=()=>{let e=Ie(this.routeTree,this.options.caseSensitive,(e,t)=>{e.init({originalIndex:t})});return this.options.routeMasks&&je(this.options.routeMasks,e.processedTree),e},this.subscribe=(e,t)=>{let n={eventType:e,fn:t};return this.subscribers.add(n),()=>{this.subscribers.delete(n)}},this.emit=e=>{for(let t of this.subscribers)if(t.eventType===e.type)try{t.fn(e)}catch(e){console.error(e)}},this.parseLocation=(e,t)=>{let n=({pathname:e,search:n,hash:r,href:i,state:a})=>{if(!this.rewrite&&!/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)){let i=this.options.parseSearch(n),o=this.options.stringifySearch(i);return{href:e+o+r,publicHref:e+o+r,pathname:ye(e).path,external:!1,searchStr:o,search:oe(t?.search,i),hash:ye(r.slice(1)).path,state:se(t?.state,a)}}let o=new URL(i,this.origin),s=Pt(this.rewrite,o),c=this.options.parseSearch(s.search),l=this.options.stringifySearch(c);return s.search=l,{href:s.href.replace(s.origin,``),publicHref:i,pathname:ye(s.pathname).path,external:!!this.rewrite&&s.origin!==this.origin,searchStr:l,search:oe(t?.search,c),hash:ye(s.hash.slice(1)).path,state:se(t?.state,a)}},r=n(e),{__tempLocation:i,__tempKey:a}=r.state;if(i&&(!a||a===this.tempLocationKey)){let e=n(i);return e.state.key=r.state.key,e.state.__TSR_key=r.state.__TSR_key,delete e.state.__tempLocation,{...e,maskedLocation:r}}return r},this.resolvePathWithBase=(e,t)=>$e({base:e,to:t.includes(`//`)?qe(t):t,trailingSlash:this.options.trailingSlash,cache:this.resolvePathCache}),this.matchRoutes=(e,t,n)=>typeof e==`string`?this.matchRoutesInternal({pathname:e,search:t},n):this.matchRoutesInternal(e,t),this.getMatchedRoutes=e=>{let t=Object.create(null),n=Pe(Ye(e),this.processedTree,!0);return n&&Object.assign(t,n.rawParams),[n?.branch||[this.routesById.__root__],t,n?.route]},this.buildLocation=e=>{let t=(t={})=>{if(t.href){let e=Wt(t.href,{});t={...t,to:Pt(this.rewrite,new URL(e.pathname,this.origin)).pathname,search:this.options.parseSearch(e.search),hash:e.hash.slice(1)}}let n=t._fromLocation||this._pendingLocation||this.latestLocation,r=this.matchRoutesLightweight(n);t.from;let i=t.unsafeRelative===`path`?n.pathname:t.from??r[1],a=t.to?`${t.to}`:void 0,o=r[2],s=Object.assign(Object.create(null),r[3]),c=a?.charCodeAt(0)===47?`/`:this.resolvePathWithBase(i,`.`),l=a?this.resolvePathWithBase(c,a):c,u=rn(t.params,s),d=this.routesByPath[Ye(l)],f;if(d)f=this.getRouteBranch(d);else if(l.includes(`$`))f=[];else{let[e,t,n]=this.getMatchedRoutes(l);f=e,this.options.notFoundRoute&&(!n||n.path!==`/`&&t[`**`])&&(f=[...f,this.options.notFoundRoute])}if(f.length&&ie(u))for(let e of f){let t=e.options.params?.stringify??e.options.stringifyParams;if(t)try{Object.assign(u,t(u))}catch{}}let p=e.leaveParams?l:ye(nt({path:l,params:u,decoder:this.pathParamsDecoder,server:this.isServer}).interpolatedPath).path,m=o;if(e._includeValidateSearch&&this.options.search?.strict){let e={};f.forEach(t=>{if(t.options.validateSearch)try{Object.assign(e,en(t.options.validateSearch,{...e,...m}))}catch{}}),m=e}m=tn(m,t,f,e._includeValidateSearch),m=oe(o,m);let h=this.options.stringifySearch(m),g=t.hash===!0?n.hash:t.hash?te(t.hash,n.hash):void 0,_=g?`#${g}`:``,v=t.state===!0?n.state:t.state?te(t.state,n.state):{};v=se(n.state,v);let y=`${p}${h}${_}`,b,x,S=!1;if(this.rewrite){let e=new URL(y,this.origin),t=Ft(this.rewrite,e);b=e.href.replace(e.origin,``),t.origin===this.origin?x=t.pathname+t.search+t.hash:(x=t.href,S=!0)}else b=be(y),x=b;return{publicHref:x,href:b,pathname:p,search:m,searchStr:h,state:v,hash:g??``,external:S,unmaskOnReload:t.unmaskOnReload}},n=t(e);if(e.mask)n.maskedLocation=t({from:e.from,...e.mask});else if(this.options.routeMasks){let r=Me(n.pathname,this.processedTree);if(r){let i=Object.assign(Object.create(null),r.rawParams),{from:a,params:o,...s}=r.route,c=rn(o,i);n.maskedLocation=t({from:e.from,...s,params:c})}}return n},this.commitLocation=async({viewTransition:e,ignoreBlocker:t,...n})=>{let r,i=Ye(this.latestLocation.href)===Ye(n.href)&&w(Yt(n.state),Yt(this.latestLocation.state)),a=this._commitPromise,o,s=new Promise(e=>{o=e});if(s.resolve=()=>{o(),a?.resolve()},this._commitPromise=s,i)this.load();else{let{maskedLocation:i,hashScrollIntoView:a,...o}=n;i&&(o={...i,state:{...i.state,__tempKey:void 0,__tempLocation:{...o,search:o.searchStr,state:{...o.state,__tempKey:void 0,__tempLocation:void 0,__TSR_key:void 0,key:void 0}}}},(o.unmaskOnReload??this.options.unmaskOnReload??!1)&&(o.state.__tempKey=this.tempLocationKey)),o.state.__hashScrollIntoViewOptions=a??this.options.defaultHashScrollIntoView??!0,this.shouldViewTransition=e,r=n.replace?`REPLACE`:`PUSH`,this.history[r===`REPLACE`?`replace`:`push`](o.publicHref,o.state,{ignoreBlocker:t}),this.history.subscribers.size||this.load({action:{type:r}})}return this._scroll.next=n.resetScroll??!0,this._commitPromise},this.buildAndCommitLocation=({replace:e,resetScroll:t,hashScrollIntoView:n,viewTransition:r,ignoreBlocker:i,...a}={})=>{let o=this.buildLocation({...a,_includeValidateSearch:!0});this._pendingLocation=o;let s=this.commitLocation({...o,viewTransition:r,replace:e,resetScroll:t,hashScrollIntoView:n,ignoreBlocker:i});return queueMicrotask(()=>{this._pendingLocation===o&&(this._pendingLocation=void 0)}),s},this.navigate=async({to:e,reloadDocument:t,href:n,publicHref:r,...i})=>{let a=!1;if(n)try{new URL(`${n}`),a=!0}catch{}if(a&&!t&&(t=!0),t){if(e!==void 0||!n){let t=this.buildLocation({to:e,...i});n??=t.publicHref,r??=t.publicHref}let t=!a&&r?r:n;if(ge(t,this.protocolAllowlist))return;if(!i.ignoreBlocker){let e=this.history.getBlockers?.()??[];for(let t of e)if(t?.blockerFn&&await t.blockerFn({currentLocation:this.latestLocation,nextLocation:this.latestLocation,action:`PUSH`}))return}i.replace?window.location.replace(t):window.location.href=t;return}return this.buildAndCommitLocation({...i,href:n,to:e,_isNavigate:!0})},this.load=async e=>{this.updateLatestLocation(),e?.action&&(this._scroll.hash=e.action.type===`PUSH`||e.action.type===`REPLACE`),await Xn(this,e)},this.startViewTransition=e=>{let t=this.shouldViewTransition??this.options.defaultViewTransition;if(this.shouldViewTransition=void 0,t&&typeof document.startViewTransition==`function`){let n;if(typeof t==`object`&&window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)){let r=this.latestLocation,i=this.stores.resolvedLocation.get(),a=typeof t.types==`function`?t.types(Jt(r,i)):t.types;if(a===!1)return e();n={update:e,types:a}}else n=e;return document.startViewTransition(n).updateCallbackDone}return e()},this.invalidate=e=>{let t=this._committed,n=e?.filter,r=this._preloads,i=new Set([...t,...this._cache.values(),...[...r?.values()??[]].flat(),...this._tx?.[3]??[]].filter(e=>!n||n(e)).map(e=>e.id)),a=[];for(let[e,t]of r??[])t.some(e=>i.has(e.id))&&(r.delete(e),a.push(e));let o=t=>{if(i.has(t.id)){let n=this.routesById[t.routeId],r={...t,invalid:!0,...(e?.forcePending||t.status===`error`||t.status===`notFound`)&&Kt(n)?{status:`pending`,error:void 0}:void 0};return t._flight=void 0,r}return t};this._committed=t.map(o);for(let[t,n]of this._cache)i.has(t)&&(n.invalid=!0,e?.forcePending&&(n.status=`pending`));for(let e of i)this._flights?.delete(e);for(let e of a)e.abort();return this.shouldViewTransition=!1,this.load({sync:e?.sync})},this.resolveRedirect=e=>{let t=e.headers.get(`Location`);if(!e.options.href){let t=this.buildLocation(e.options).publicHref||`/`;e.options.href=t,e.headers.set(`Location`,t)}else if(t)try{let n=new URL(t);if(this.origin&&n.origin===this.origin){let t=n.pathname+n.search+n.hash;e.options.href=t,e.headers.set(`Location`,t)}}catch{}if(e.options.href&&ge(e.options.href,this.protocolAllowlist))throw Error(`Redirect blocked: unsafe protocol`);return e.headers.get(`Location`)||e.headers.set(`Location`,e.options.href),e},this.clearCache=e=>{let t=this._cache,n=this._preloads,r=e?.filter,i=[],a=[];for(let[e,n]of t)(!r||r(n))&&(a.push(e),i.push(n));let o=[];for(let[e,t]of n??[])(!r||t.some(r))&&(o.push(e),i.push(...t));for(let e of a)t.delete(e);for(let e of o)n.delete(e);for(let e of i){let t=e._flight;e._flight=void 0,t&&!--t[2]&&(this._flights?.get(e.id)===t&&this._flights.delete(e.id),o.push(t[1]))}for(let e of o)e.abort()},this.loadRouteChunk=cn,this.preloadRoute=(e,t)=>Zn(this,e,0,t),this.matchRoute=(e,t)=>{let n={...e,to:e.to?this.resolvePathWithBase(e.from||``,e.to):void 0,params:e.params||{},leaveParams:!0},r=this.buildLocation(n),i=this.stores.status.get()===`pending`;if(t?.pending&&!i)return!1;let a=t?.pending??!i?this.latestLocation:this.stores.resolvedLocation.get()||this.stores.location.get(),o=Ne(r.pathname,t?.caseSensitive??!1,t?.fuzzy??!1,a.pathname,this.processedTree);return!o||e.params&&!w(o.rawParams,e.params,{partial:!0})?!1:t?.includeSearch??!0?w(a.search,r.search,{partial:!0})?o.rawParams:!1:o.rawParams},this.getStoreConfig=t,this.update({defaultPreloadDelay:50,defaultPendingMs:1e3,defaultPendingMinMs:500,context:void 0,...e,caseSensitive:e.caseSensitive??!1,notFoundMode:e.notFoundMode??`fuzzy`,stringifySearch:e.stringifySearch??wt,parseSearch:e.parseSearch??Ct,protocolAllowlist:e.protocolAllowlist??he}),self.__TSR_ROUTER__=this}isShell(){return!!this.options.isShell}get state(){return this.stores.__store.get()}setRoutes({routesById:e,routesByPath:t,processedTree:n}){this.routesById=e,this.routesByPath=t,this.processedTree=n;let r=this.options.notFoundRoute;r&&(r.init({originalIndex:99999999999}),this.routesById[r.id]=r)}getRouteBranch(e){let t=this.routeBranchCache.get(e);return t||(t=ze(e),this.routeBranchCache.set(e,t)),t}matchRoutesInternal(e,t){let[n,r,i]=this.getMatchedRoutes(e.pathname),a=n,o=!1;(i?i.path!==`/`&&r[`**`]:Ye(e.pathname))&&(this.options.notFoundRoute?a=[...a,this.options.notFoundRoute]:o=!0);let s=o?nn(this.options.notFoundMode,a):void 0,c=Array(a.length),l=this._committed,u=(e,t)=>{let n=l[t];return n?.routeId===e.id?n:e===this.options.notFoundRoute?l.find(t=>t.routeId===e.id):void 0},d;for(let n=0;n<a.length;n++){let i=a[n],o=c[n-1],l,f,p;{let n=o?.search??e.search,r=o?._strictSearch??void 0;try{let e=en(i.options.validateSearch,{...n})??void 0;l={...n,...e},f={...r,...e}}catch(e){let r=e;if(e instanceof Qt||(r=new Qt(e.message,{cause:e})),t?.throwOnError)throw r;l=n,f={},p=r}}let m=``,h=``;try{m=i.options.loaderDeps?.({search:l})??``,h=m&&JSON.stringify(m)||``}catch(e){if(t?.throwOnError)throw e;p??=e}let{interpolatedPath:g,usedParams:_}=nt({path:i.fullPath,params:r,decoder:this.pathParamsDecoder,server:this.isServer}),v=i.id+g+h,y=u(i,n),b=this._cache.get(v)??(y?.id===v?y:void 0);d=b?._strictParams??Object.assign(_,d);let x;if(!b)try{an(i,d)}catch(e){if(x=it(e)||kt(e)?e:new $t(e.message,{cause:e}),t?.throwOnError)throw x}let S=y?`stay`:`enter`,C;if(b)C={...b,cause:S,search:oe(y?y.search:b.search,l),_strictSearch:f,searchError:p};else{let e=Kt(i)?`pending`:`success`;C={id:v,ssr:i.options.ssr,index:n,routeId:i.id,params:y?.params??d,_strictParams:d,pathname:g,updatedAt:Date.now(),search:y?oe(y.search,l):l,_strictSearch:f,searchError:p,status:e,isFetching:!1,error:void 0,paramsError:x,context:{},abortController:t?._controller??new AbortController,cause:S,loaderDeps:y?se(y.loaderDeps,m):m,invalid:!1,preload:!1,staticData:i.options.staticData||{},fullPath:i.fullPath}}let ee=s===i.id;C._notFound&&!ee&&(C.error=void 0),C._notFound=ee,c[n]=C}for(let e=0;e<c.length;e++){let n=c[e];n.params=n.cause===`stay`?oe(n.params,d):d,t?._controller&&(n.context={})}return c}matchRoutesLightweight(e){let t=ee(this.stores.ids.get()),n=t?this.stores.byRoute.get(t).get():void 0,r=n?.id,i=this.lightweightCache.get(e);if(i&&i[0]===r)return i[1];let[a,o]=this.getMatchedRoutes(e.pathname),s=ee(a),c={...e.search};for(let e of a)try{Object.assign(c,en(e.options.validateSearch,c))}catch{}let l=n&&n.routeId===s.id&&n.pathname===e.pathname,u;if(l)u=n.params;else{let e=Object.assign(Object.create(null),o);for(let t of a)try{an(t,e)}catch{}u=e}let d=[a,s.fullPath,c,u];return this.lightweightCache.set(e,[r,d]),d}},Qt=class extends Error{},$t=class extends Error{};function en(e,t){if(e==null)return{};if(`~standard`in e){let n=e[`~standard`].validate(t);if(n instanceof Promise)throw new Qt(`Async validation not supported`);if(n.issues)throw new Qt(JSON.stringify(n.issues,void 0,2),{cause:n});return n.value}return`parse`in e?e.parse(t):typeof e==`function`?e(t):{}}function tn(e,t,n,r){let i=[];for(let e of n){let t=e.options;`search`in t?t.search?.middlewares&&i.push(...t.search.middlewares):(t.preSearchFilters||t.postSearchFilters)&&i.push(({search:e,next:n})=>{let r=n(t.preSearchFilters?t.preSearchFilters.reduce((e,t)=>t(e),e):e);return t.postSearchFilters?t.postSearchFilters.reduce((e,t)=>t(e),r):r});let n=t.validateSearch;n&&i.push(({search:e,next:t,meta:i})=>{let a=t(e);if(r)try{let e=en(n,a);if(i&&e)for(let t in e)t in a||(i.defaulted||=new Map).set(t,e[t]);return{...a,...e}}catch{}return a})}let a=(e,n,r)=>{if(e>=i.length){if(!t.search)return{};if(t.search===!0)return n;let e=te(t.search,n);return r&&(r.explicit=e),e}return i[e]({search:n,next:(t,n)=>{if(n){let n=r||{};return{search:a(e+1,t,n),meta:n}}return a(e+1,t,r)},meta:r})};return a(0,e)}function nn(e,t){if(e!==`root`){let e;for(let n=t.length-1;n>=0;n--){let r=t[n];if(r.options.notFoundComponent)return r.id;e||=r.children&&r.id}if(e)return e}return Dt}function rn(e,t){return e===!1||e===null?Object.create(null):(e??!0)===!0?t:Object.assign(t,te(e,t))}function an(e,t){let n=e.options.params?.parse??e.options.parseParams;n&&Object.assign(t,n(t))}function on(e,t){return e.options[t]?.preload?.()}function sn(e,t){let n=on(e,`component`),r=on(e,`pendingComponent`),i=t&&r?r.then(t):r;return t&&!r&&t(),n&&i?Promise.all([n,i]).then(()=>{}):n??i}function cn(e,t,n){let r=()=>t===!1?void 0:t?on(e,t):sn(e,n),i=e._lazy;if(i)return i===!0?r():i.then(r);if(!e.lazyFn)return r();let a=e.lazyFn().then(t=>{{let{id:n,...r}=t.options;Object.assign(e.options,r),e._lazy=!0}},t=>{throw e._lazy=void 0,t});return e._lazy=a,a.then(r)}function ln(e){let t=e.findIndex(e=>e.status!==`success`||e._notFound)+1;return t&&t<e.length?e.slice(0,t):e}function un(e){let t=e.length;for(let n=0;n<t;n++){let r=e[n];if(r._assetEnd!==void 0){t=Math.min(t,Math.max(n+1,r._assetEnd));continue}if(r.status!==`success`||r._notFound){t=n+1;break}}return t<e.length?e.slice(0,t):e}var dn=0,fn=1,pn=2,mn=3,hn=[4];function gn(e){return typeof e[0]==`number`}function _n(e,t){return t.aborted?Promise.race([Promise.reject(t),e]):new Promise((n,r)=>{let i=()=>r(t);t.addEventListener(`abort`,i,{once:!0}),Promise.resolve(e).then(n,r).finally(()=>t.removeEventListener(`abort`,i))})}function vn(e,t){return e.routesById[t.routeId]}function yn(e,t,n){return kt(e)?[mn,e]:it(e)?(e.routeId||=n,[pn,e]):(t&&typeof e?.then==`function`&&(e=Error(`A Promise was thrown`,{cause:e})),t?[fn,e]:[dn,e])}function bn(e,t){let n=yn(t,!0,e.id);if(n[0]!==fn)return n;try{e.options.onError?.(n[1])}catch(t){n=yn(t,!0,e.id)}return n}function xn(e,t,n,r,i){return i[0].signal.aborted?hn:Ln(e,t,n,bn(n,r),i)}async function Sn(e,t,n,r,i,a){let[o,s]=t,c=n[0].signal,l=!!n[3];for(let i=n[6]??0;i<r;i++){let r=s[i],u=vn(e,r);r.abortController=n[0];let d=s[i-1]?.context??e.options.context??{},f={params:r.params,location:o,navigate:t=>e.navigate({...t,_fromLocation:o}),buildLocation:e.buildLocation,cause:l?`preload`:r.cause,abortController:n[0],preload:l,matches:s,routeId:u.id},p=d;try{let e=r._ctx;!e&&u.options.context&&(e=r._ctx=u.options.context({...f,deps:r.loaderDeps,context:d})||{}),p={...d,...e},r.context=p}catch(a){return wn(e,r),[i,xn(e,t,u,a,n)]}if(c.aborted)return[i,hn];let m=r.paramsError??r.searchError;if(m!==void 0)return wn(e,r),[i,xn(e,t,u,m,n)];let h=u.options.beforeLoad;if(!h)continue;let g={...f,search:r.search,context:p,...e.options.additionalContext},_=r.status;i>=a&&(r.status=`pending`,n[7]?.());try{Dn(e,r,`beforeLoad`,n[0]);let a=await _n(h(g),c);if(c.aborted)return[i,hn];let o=Ln(e,t,u,yn(a,!1,u.id),n);if(o[0]!==dn)return wn(e,r),[i,o];r.context={...p,...a}}catch(a){return wn(e,r),[i,xn(e,t,u,a,n)]}finally{r.status===`pending`&&(r.status=_),Dn(e,r,!1,n[0])}}i()}function Cn(e,t,n){if(!(!n||--n[2])){if(e._flights?.get(t.id)===n){let n=e._tx;if(n&&!n[0].signal.aborted&&!n[3].includes(t)&&n[3].some(e=>e.id===t.id)&&n[3].some(e=>e.isFetching===`beforeLoad`))return;e._flights.delete(t.id)}return n[1]}}function wn(e,t){let n=t._flight;t._flight=void 0,Cn(e,t,n)?.abort()}function Tn(e,t,n,r){let i=[];for(let a of t)if(!n?.includes(a)){let t=a._flight;if(a._flight=void 0,r&&t?.[2]===1&&e._flights?.get(a.id)===t&&n?.some(e=>e.id===a.id))t[2]=0;else{let n=Cn(e,a,t);n&&i.push(n)}}for(let e of i)e.abort()}function En(e){for(let t of e){let e=t._flight;e&&e[2]++}}function Dn(e,t,n,r){if(t.isFetching=n,r&&e._tx?.[0]!==r)return;let i=e.stores.byRoute.get(t.routeId),a=i?.get();a?.id===t.id&&i.set({...a,isFetching:n})}function On(e,t,n,r,i,a,o){let s=t[0];return{params:n.params,location:s,navigate:t=>e.navigate({...t,_fromLocation:s}),cause:o?`preload`:n.cause,abortController:i,preload:o,deps:n.loaderDeps,parentMatchPromise:a,context:n.context,route:r,...e.options.additionalContext}}async function kn(e,t,n,r,i,a,o){let s=o[0],c=s.signal;if(c.aborted)return hn;if(!i)return[dn,void 0];let l=n._flight;Dn(e,n,`loader`,s);try{if(!l){let s=new AbortController;l=[Promise.resolve().then(()=>i(On(e,t,n,r,s,a,!!o[3]))).then(e=>yn(e,!1,r.id),e=>yn(e,!0,r.id)).then(t=>(t[0]!==dn&&e._flights?.get(n.id)===l&&(e._flights.delete(n.id),l[2]||s.abort()),t[0]===fn&&l[2]?bn(r,t[1]):t)),s,1],(e._flights??=new Map).set(n.id,l)}return n._flight=l,n.abortController=l[1],Ln(e,t,r,await _n(l[0],c),o)}catch(t){if(t!==c||!c.aborted)throw t;return wn(e,n),hn}finally{Dn(e,n,!1,s)}}function An(e,t,n){t[0]===dn?(e.loaderData=t[1],e.error=void 0,e.status=`success`,e.invalid=!1,e.updatedAt=Date.now(),e.preload=n):t[0]!==mn&&(e.status=`success`,e.error=void 0,e.invalid=!0)}function jn(e,t,n){let r=e._cache.get(t.id);if(r!==n||e._committed.some(e=>e.id===t.id&&e._flight===t._flight))return;let i={...t,_notFound:void 0,context:{}};i._flight&&i._flight[2]++,e._cache.set(t.id,i),r&&wn(e,r)}function Mn(e,t){return t[0]===fn||t[0]===pn?{...e,status:t[0]===fn?`error`:`notFound`,error:t[1],_flight:void 0}:e}function Nn(e,t,n,r,i,a,o){let s=t[1][n],c=vn(e,s),l=!!a[3],u=e._cache.get(s.id),d,f=!1,p;try{if(s.status===`success`&&(d=c.options.shouldReload,typeof d==`function`&&(d=d(On(e,t,s,c,a[0],i,l))),a[0].signal.aborted&&(p=hn)),!p){if(s.status!==`success`)f=!0;else{let t=a[3]||s.preload?c.options.preloadStaleTime??e.options.defaultPreloadStaleTime??3e4:c.options.staleTime??e.options.defaultStaleTime??0;f=!!(s.invalid||d||d===void 0&&Date.now()-s.updatedAt>=t&&(a[5]||s.cause===`enter`||a[2].some(e=>e.routeId===s.routeId&&e.id!==s.id)))}}}catch(n){s.invalid=!0,wn(e,s),p=xn(e,t,c,n,a)}let m=c.options.loader,h=typeof m==`function`?m:m?.handler,g=(!l||c.options.preload!==!1)&&m?e._flights?.get(s.id):void 0;g===s._flight||p?g=void 0:g&&!f&&!l&&d===void 0?f=!0:f||(g=void 0);let _=!!(m&&f&&s.status===`success`&&!l&&!a[4]&&((typeof m==`function`?void 0:m?.staleReloadMode)??e.options.defaultStaleReloadMode)!==`blocking`),v=f&&(!l||c.options.preload!==!1),y=v&&!_&&(s.status!==`success`||!!m),b=n>=o?a[7]:void 0,x=c.lazyFn&&c._lazy!==!0?b:void 0;if(v&&!m&&(s.invalid=!1,s.updatedAt=Date.now()),g&&g[2]++,y){let t=s._flight;s._flight=g,Cn(e,s,t)?.abort(),n>=o&&(s.status=`pending`),b?.()}v||(s.isFetching=!1);let S=(p?Promise.resolve(p):y?kn(e,t,s,c,h,i,a):Promise.resolve([dn,s.loaderData])).then(t=>(y&&(An(s,t,l),t[0]===dn&&(m&&!a[0].signal.aborted&&jn(e,s,u),n>=o&&(s.status=`pending`))),t)),C=_n(Promise.resolve().then(()=>cn(c,void 0,x)),a[0].signal).then(()=>void 0,r=>t[1].some((e,t)=>t<=n&&(e.status===`error`||e.status===`notFound`||e._notFound))?void 0:[n,xn(e,t,c,r,a)]).then(e=>S.then(t=>(y&&!e&&t[0]===dn&&s.status===`pending`&&!a[0].signal.aborted&&(s.status=`success`,b?.()),e)));if(r.push([n,S,C]),!_)return S.then(e=>Mn(s,e));let ee={...s,status:`pending`,preload:!1,_flight:g};s.invalid=!1,s.isFetching=`loader`;let te=kn(e,t,ee,c,h,i,a).then(e=>(s.isFetching=!1,An(ee,e,!1),e));return(t[2]??=[]).push([n,te,C,ee]),te.then(e=>Mn(ee,e))}async function Pn(e,t,n,r,i=0){let a=n?.[1][1],o=a?.routeId?t.findIndex(e=>e.routeId===a.routeId):n?.[0]??t.length-1;o<0&&(o=0);for(let n=o;n>=0;n--){let i=vn(e,t[n]);try{let e=cn(i,!1);e&&await _n(e,r)}catch(e){if(e===r&&r.aborted)throw e}if(i.options.notFoundComponent)return n}return a?.routeId?o:i}function Fn(e,t){t[2]&&=(Tn(e,t[2].map(e=>e[3])),void 0)}async function In(e,t,n,r){let i;try{await Promise.all(e.map(e=>e[1].then(async t=>{let a=e[0];if(!(r&&a>=await r)){if(t[0]>=mn)throw[a,t];!i&&t[0]!==dn&&(i=[a,t],await Promise.all((n??[]).map(e=>{if(!(e[0]<=a))return e[1].then(t=>{if(t[0]===mn)throw[e[0],t]})})))}})))}catch(e){return e}return t??i}function Ln(e,t,n,r,i,a){for(;r[0]===mn;){let o=r[1];if(o.options.reloadDocument?i[3]:i[1]>=20)return r;try{return o.options.href&&o.options.reloadDocument?(e.resolveRedirect(o),r):[mn,o,e.buildLocation({...o.options,_fromLocation:t[0],_includeValidateSearch:!0})]}catch(e){r=a?[fn,e]:bn(n,e),a=!0}}return r}async function Rn(e,t,n,r,i,a){let o=t[1],s=await i,c=!1,l=o.findIndex(e=>e._notFound),u=t=>t[1][0]===pn?Pn(e,o,t,r.signal):t[0],d=l<0?o.length:l;if((s?.[1][0]??0)>=mn)d=0;else if(s){d=s[2]??=await u(s);for(let e of n){if(e[0]>=d)break;let t=await e[1];if(t[0]!==dn&&t[0]<mn&&!(`loaderData`in o[e[0]])){s=[e[0],t],d=s[2]=await u(s);break}}}for(let e of n){if(e[0]>=d)break;let t=await e[2];if(t){s=t;break}}if((s?.[1][0]??0)>=mn){let n=s[1];if(n[0]!==mn||n[1].options.reloadDocument||n[2])return Fn(e,t),n;c=!0,s=[0,[fn,Error(`Too many redirects`)]]}let f=s?s[2]??await u(s):l;if(f>=0){let i=s?.[1],l=i?.[0],u=o[f],d=i?.[1],p=()=>{i&&(u._notFound=void 0,l===fn?u.status=`error`:(d.routeId=u.routeId,u.routeId===e.routeTree.id?(u.status=`success`,u._notFound=!0):u.status=`notFound`),u.error=d,u.isFetching=!1)};p(),i||a?.();let m=vn(e,u);try{await _n(i?Promise.resolve().then(()=>cn(m,l===fn?`errorComponent`:`notFoundComponent`)):Promise.all([cn(m),cn(m,`notFoundComponent`)]),r.signal)}catch(n){if(n===r.signal&&r.signal.aborted)return Fn(e,t),hn}i?c&&(r.abort(),await Promise.all([...n.map(e=>e[1]),...n.map(e=>e[2]),...(t[2]??[]).map(e=>e[1])]),Fn(e,t),Tn(e,o),p()):u.status=`success`}return t}async function zn(e,t,n,r=0,i=t[1].length){let a=t[1];for(let t=r;t<i;t++){let r=a[t],i=vn(e,r).options;if(i.head||i.scripts)try{let t={ssr:e.options.ssr,matches:a,match:r,params:r.params,loaderData:r.loaderData},[o,s]=await _n(Promise.all([i.head?.(t),i.scripts?.(t)]),n);r.meta=o?.meta,r.links=o?.links,r.headScripts=o?.scripts,r.styles=o?.styles,r.scripts=s}catch(e){if(e===n&&n.aborted)break;console.error(e)}if(r.status!==`success`||r._notFound)break}return t}async function Bn(e,t,n,r){let i=[t,n],a=r[0].signal,o;try{let t=e.stores.matches.get(),s=n.findIndex(e=>e._notFound);if(e.options.notFoundMode!==`root`&&s>=0){let t=await Pn(e,i[1],void 0,a,s);t!==s&&(n[s]._notFound=void 0,n[t]._notFound=!0),s=t}let c=s<0?n.length:s+1,l=0;for(;l<c&&l!==s;){let e=n[l],i=r[2][l],a=t[l];if(i?.id!==e.id||i.status!==`success`||i._notFound||e.preload||a?.id!==e.id||a.status!==`success`||a._notFound)break;l++}let u=[],d=r[6]??0,f=d?Promise.resolve(i[1][d-1]):void 0,p=()=>{for(let t=d;t<c&&!a.aborted;t++)f=Nn(e,i,t,u,f,r,l)},m=await Sn(e,i,r,c,p,l);if(m){if(r[4]=!0,c=m[0],m[1][0]===pn){let t=await Pn(e,i[1],m,a);m[2]=t,c=Math.min(c,t+1)}else m[1][0]>=mn&&(c=0);p()}if(!a.aborted&&!r[3]){let t=[];for(let[n,r]of e._flights??[])r[2]||(e._flights.delete(n),t.push(r[1]));for(let e of t)e.abort()}let h=Rn(e,i,u,r[0],In(u,m,i[2]),r[7]);i[2]?.length&&(i[3]=In(i[2],void 0,void 0,h.then(e=>gn(e)?0:ln(e[1]).length,()=>0))),o=await h}catch(t){if(Fn(e,i),t===a&&a.aborted)return hn;throw t}return gn(o)?o:zn(e,o,a,r[6]===o[1].length?r[6]:0)}function Vn(e,t){if(e._tx!==t)return;let n=t[3],r=e.stores.matches.get(),i=e._pending;for(let a=0;a<n.length;a++){let o=n[a],s=o.status===`success`&&!o._notFound,c=r[a]?.id===o.id&&r[a]?.status===`pending`;if(s&&!c)continue;let l=vn(e,o),u=s&&c||o.invalid?0:l.options.pendingMs??e.options.defaultPendingMs,d=l.options.pendingComponent??e.options.defaultPendingComponent;if(!d||typeof u!=`number`||u===1/0){i&&(i[0]=t,i[2]=0,i[4]=!0);return}let f=l.options.pendingMinMs??e.options.defaultPendingMinMs??0,p=!1;if(i?.[1]===o.id?(p=i[0]!==t,i[0]=t):(clearTimeout(i?.[3]),e._pending=i=void 0),i||(e._pending=i=[t,o.id,c?Date.now()+f:t[4]+u,void 0,c||void 0,d]),i[4]&&!p&&i[5]===d)return;if(i[5]=d,!i[4]){clearTimeout(i[3]);let n=i[2]-Date.now();if(n>0){i[3]=setTimeout(()=>Vn(e,t),n);return}i[2]=0}let m=n.map(e=>({...e,_flight:void 0}));m[a].status=`pending`;let h=i[4]=e.startTransition(()=>e.stores.setMatches(m),m).then(t=>(t&&e._pending===i&&i[4]===h&&!i[2]&&(i[2]=Date.now()+f),t));return}}function Hn(e,t){let n=e._pending;(e._tx===t||!e._tx?.[3].some(e=>e.id===n?.[1]))&&(clearTimeout(n?.[3]),e._pending=void 0)}async function Un(e,t){let n=e._pending;if(!n)return;clearTimeout(n[3]);let r=n[2]-Date.now();if(!n[4]||r<=0||!ln(t[3]).some(e=>e.id===n[1]))return;let i;try{await _n(new Promise(e=>{i=setTimeout(e,r)}),t[0].signal)}catch{}clearTimeout(i)}function Wn(e,t){e._committed=t,e.stores.setMatches(t)}function Gn(e,t,n,r){let i=e._committed,a=e._cache;for(let e of n)e.preload=!1,r&&(e._assetEnd=void 0);let o=ln(n).length,s=new Map;{let t=Date.now();for(let r of[...i,...a.values()]){if(r.status!==`success`||n.some((e,t)=>e.id===r.id&&(t<o||e.status===`success`)))continue;let i=vn(e,r);!i.options.loader||t-r.updatedAt>=(r.preload?i.options.preloadGcTime??e.options.defaultPreloadGcTime??3e5:i.options.gcTime??e.options.defaultGcTime??3e5)||s.set(r.id,a.get(r.id)===r?r:{...r,_flight:void 0,isFetching:!1,context:{}})}}t[3]=[],e._cache=s,Wn(e,n),Tn(e,[...a.values(),...i],[...n,...s.values()]),Xt(e,i,n,t)}async function Kn(e,t){let n=e._tx;for(;n&&n!==t;){if(await n[5],e._tx===n)return;n=e._tx}}async function qn(e,t,n){let r=n[1],i=n[2];if(!i){await e.navigate({...r.options,replace:!0,ignoreBlocker:!0});return}if(r.options.reloadDocument){await e.navigate({href:i.publicHref,reloadDocument:!0,replace:!0,ignoreBlocker:!0});return}i._redirects=t[1]+1,e._pendingLocation=i;let a=e.commitLocation({...i,viewTransition:r.options.viewTransition,replace:!0,resetScroll:r.options.resetScroll,hashScrollIntoView:r.options.hashScrollIntoView,ignoreBlocker:!0});queueMicrotask(()=>{e._pendingLocation===i&&(e._pendingLocation=void 0)}),await a}async function Jn(e,t,n,r,i){let a=n.map(e=>({...e}));En(a);for(let t of r)wn(e,a[t[0]]),a[t[0]]=t[3];let o=[t[2],a],s;try{s=await Rn(e,o,r,t[0],i)}catch(t){throw Tn(e,a),t}if(gn(s)){Tn(e,a),s[0]===mn&&e._tx===t&&e._committed===n&&await qn(e,t,s);return}let c=await zn(e,s,t[0].signal);if(e._tx!==t||e._committed!==n){Tn(e,c[1]);return}for(let t of c[1]){let n=e._cache.get(t.id);n?._flight&&n._flight===t._flight&&(e._cache.delete(t.id),wn(e,n))}Wn(e,c[1]),Tn(e,n,c[1])}async function Yn(e,t,n,r,i,a){let o=[t[0],t[1],e._committed,void 0,i,n,a,r],s=await Bn(e,t[2],t[3],o);if(gn(s)){let n=s[0]===mn&&e._tx===t;if((!n||s[1].options.reloadDocument)&&Hn(e,t),Tn(e,t[3]),t[3]=[],!n)return;if(e._tx!==t){Hn(e,t);return}await qn(e,t,s);return}if(e._tx!==t){Hn(e,t),Tn(e,s[1]),Fn(e,s);return}if(await Un(e,t),e._tx!==t){Hn(e,t),Tn(e,s[1]),Fn(e,s);return}let c=t[2],l=Jt(c,e.stores.resolvedLocation.get()),u=s[2];await e.startViewTransition(async()=>{if(e._tx!==t){Hn(e,t),Tn(e,s[1]),Fn(e,s);return}if(await Un(e,t),e._tx!==t){Hn(e,t),Tn(e,s[1]),Fn(e,s);return}let n=await e.startTransition(()=>{Hn(e,t),Gn(e,t,s[1],a),e._tx===t&&(e.emit({type:`onLoad`,...l}),e._tx===t&&e.emit({type:`onBeforeRouteMount`,...l}))},s[1]);if(e._tx!==t){Fn(e,s);return}u?.length&&Jn(e,t,s[1],u,s[3]).catch(console.error),e.batch(()=>{e.stores.resolvedLocation.set(c),e.stores.status.set(`idle`),e._tx===t&&e.emit({type:`onResolved`,...l}),n&&e._tx===t&&e.emit({type:`onRendered`,...l})}),e._tx===t&&(e._commitPromise?.resolve(),e._commitPromise=void 0)})}async function Xn(e,t){let n=e._tx,r=e.stores.resolvedLocation.get(),i=r??e.stores.location.get(),a=e.latestLocation,o=e._pendingLocation,s=o?.href===a.href?o._redirects??0:0,c=e._handoff,l=c?.[0](),u=new AbortController,d=e._preflight;if(e._preflight=u,l||c?.[1](),d?.abort(),u.signal.aborted){await Kn(e,n);return}let f=Jt(a,r);if(e.emit({type:`onBeforeNavigate`,...f}),u.signal.aborted||e.emit({type:`onBeforeLoad`,...f}),u.signal.aborted){await Kn(e,n);return}let p=i.href===a.href,m=u,h=e.matchRoutes(a,{_controller:u});En(h);let g=l?c[1](h):void 0;if(g?m=l:l?.abort(),u.signal.aborted){Tn(e,h),await Kn(e,n);return}e._preflight=void 0;let _=[m,s,a,h,Date.now(),Promise.resolve().then(()=>Yn(e,_,p,()=>Vn(e,_),t?.sync,g)).then()];if(e._tx=_,n){for(let t of e.stores.matches.get()){if(e._tx!==_)break;t.isFetching&&Dn(e,t,!1)}n[0].abort(),Tn(e,n[3],_[3],!0)}if(e._tx!==_){Tn(e,_[3]),_[3]=[],await Kn(e,_);return}e.batch(()=>{e.stores.status.set(`pending`),e.stores.location.set(a)}),(g||!e._committed.length&&!h.some(e=>e._notFound))&&Vn(e,_),await _[5],await Kn(e,_)}async function Zn(e,t,n=0,r){let i=r??e.buildLocation(t),a=e._committed,o=new AbortController,s;try{s=e.matchRoutes(i,{_controller:o}),En(s)}catch(e){o.abort(),it(e)||console.error(e);return}(e._preloads??=new Map).set(o,s);let c;try{let t;try{t=await Bn(e,i,s,[o,n,a,!0])}finally{c=e._preloads.delete(o),Tn(e,s),o.abort()}if(!gn(t))return t[1];if(c&&t[0]===mn&&!t[1].options.reloadDocument)return Zn(e,t[1].options,n+1,t[2])}catch(e){it(e)||console.error(e)}}async function Qn(e){let t=window.$_TSR,n=e.options.serializationAdapters;n?.length&&(t.t=new Map(n.map(e=>[e.key,e.fromSerializable])),t.buffer.forEach(e=>e())),t.initialized=!0;let r=t.router;e.ssr={manifest:r.manifest},e.options.ssr={nonce:document.querySelector(`meta[property="csp-nonce"]`)?.content};let i=r.matches,a=new AbortController,o=e._preflight;e._preflight=a,o?.abort();let s=()=>e._preflight===a,c,l,u,d;try{if(await _n(e.options.hydrate?.(r.dehydratedData),a.signal),!s())return;let t=e.history.location;u=t.href,d=t.state,e.updateLatestLocation(),c=e.latestLocation,e.stores.location.set(c),l=e.matchRoutes(c,{_controller:a})}catch(t){if(s()&&(e._preflight=void 0),a.abort(t),t!==a.signal)throw t}if(!s())return;let f=[],p,m=0,h=t=>{m=Math.min(m,t+1);let n=f.splice(t);for(let t of n)vn(e,t).options.loader&&(t.status===`success`||!t.invalid&&`loaderData`in t)&&jn(e,{...t,status:`success`,error:void 0,preload:!0},e._cache.get(t.id));Tn(e,n)},g=i.length>l.length?l.findIndex(e=>e._notFound)+1:i.length,_=!1;for(let t=0;t<g;t++){let n=l[t],r=i[t];if(typeof r.i!=`string`||jt(r.i)!==n.id){p??=t;break}m=t+1;let a=vn(e,n);if((`l`in r||r.s===`success`&&r.e===void 0&&a.options.loader)&&(n.loaderData=r.l),n.status=r.s,n.ssr=r.ssr,a.options.ssr=n.ssr,n.updatedAt=r.u,n.error=r.e,n._notFound||=r.g,n.status===`error`||n.status===`notFound`||n._notFound){_=!0,f.push(n),(n.ssr===!1||n.ssr===`data-only`)&&(p??=t);break}if(n.status===`pending`){p??=t;break}f.push(n),n.ssr===`data-only`&&(p??=t)}!_&&f.length===g&&g<l.length&&(p=g);let v=f.map(async t=>{try{let n=vn(e,t);return t._notFound?await Promise.all([cn(n),cn(n,`notFoundComponent`)]):await cn(n,t.status===`error`?`errorComponent`:t.status===`notFound`?`notFoundComponent`:void 0),!0}catch{return!1}}),y=0;try{for(;y<v.length&&await _n(v[y],a.signal);)y++}catch{return}if(!s())return;y<f.length&&h(y);let b=Math.max(p===f.length?f.length+1:f.length,y<v.length?y:m);for(let t=0;t<b;t++){let n=l[t],r=vn(e,n),o=l[t-1]?.context??e.options.context??{},u;if(r.options.context){try{u=n._ctx=r.options.context({deps:n.loaderDeps,params:n.params,context:o,location:c,navigate:t=>e.navigate({...t,_fromLocation:c}),buildLocation:e.buildLocation,cause:n.cause,abortController:a,preload:!1,matches:l,routeId:r.id})||{}}catch{if(!s())return;if(n.status!==`error`&&n.status!==`notFound`&&!n._notFound){h(t);break}}if(!s())return}n.context={...o,...u,...f[t]&&i[t].b}}if(await zn(e,[c,l],a.signal,0,m),!s())return;let x=p!==void 0||f.length<g,S=_&&f.length===g?l:f,C=x?l:S,ee;if(x&&p!==void 0){let e=C[p];ee=e.ssr===`data-only`&&m>p+1?m:void 0,C=C.slice(),C[p]={...e,status:`pending`,ssr:e.ssr===`data-only`&&`data-only`,_assetEnd:ee}}let te=()=>{let t=e.history.location;return x&&!e._tx&&t.href===u&&t.state===d&&e._committed===S&&S.length&&!a.signal.aborted?a:void 0},ne=[te,t=>{if(e._handoff!==ne)return;e._handoff=void 0;let n=S.length;if(!t||!te()||S.some((e,n)=>e.id!==t[n]?.id)){a.abort();return}let r=ee;if(r!==void 0){for(let e=n;e<r;e++)if(l[e]?.id!==t[e]?.id){r=e>p+1?e:void 0;break}}let i=S.map(e=>({...e}));r!==void 0&&(i[p]._assetEnd=r),Tn(e,t.splice(0,n,...i));for(let e=n;e<t.length;e++){let n=t[e],r=l[e];r?.id===n.id&&r._ctx&&(n._ctx=r._ctx),n.abortController=a}return n}];e._committed=S,e._handoff=ne,e._preflight=void 0,e.batch(()=>{e.stores.setMatches(C),e.stores.status.set(`idle`),x||e.stores.resolvedLocation.set(e.stores.location.get())})}var $n=Symbol.for(`TSR_DEFERRED_PROMISE`);function er(e,t){let n=e;return n[$n]?n:(n[$n]={status:`pending`},n.then(e=>{n[$n].status=`success`,n[$n].data=e}).catch(e=>{n[$n].status=`error`,n[$n].error={data:(t?.serializeError??qt)(e),__isServerError:!0}}),n)}var tr=`Error preloading route! ☝️`;function nr(e,t){if(e)return typeof e==`string`?e:e[t]}function rr(e){return e?.scriptFormat??`module`}function ir(e,t,n){let r=ar(t),i=nr(n,`script`)??r.crossOrigin;return{...rr(e)===`iife`?{rel:`preload`,as:`script`}:{rel:`modulepreload`},href:r.href,...i?{crossOrigin:i}:{}}}function ar(e){return typeof e==`string`?{href:e,crossOrigin:void 0}:e}function or(e,t){if(t.length===0)return;if(t.length===1){e.push(t[0]);return}let n=new Set;for(let r of t){let t=JSON.stringify(r);n.has(t)||(n.add(t),e.push(r))}}function sr(e){return typeof e==`string`?{href:e,crossOrigin:void 0}:e}var cr=class{get to(){return this._to}get id(){return this._id}get path(){return this._path}get fullPath(){return this._fullPath}constructor(e){if(this.init=e=>{this.originalIndex=e.originalIndex;let t=this.options,n=!t?.path&&!t?.id;this.parentRoute=this.options.getParentRoute?.(),n?this._path=Dt:this.parentRoute||Se();let r=n?Dt:t?.path;r&&r!==`/`&&(r=Je(r));let i=t?.id||r,a=n?Dt:Ke([this.parentRoute.id===`__root__`?``:this.parentRoute.id,i]);r===`__root__`&&(r=`/`),a!==`__root__`&&(a=Ke([`/`,a]));let o=a===`__root__`?`/`:Ke([this.parentRoute.fullPath,r]);this._path=r,this._id=a,this._fullPath=o,this._to=Ye(o)},this.addChildren=e=>this._addFileChildren(e),this._addFileChildren=e=>(Array.isArray(e)&&(this.children=e),typeof e==`object`&&e&&(this.children=Object.values(e)),this),this._addFileTypes=()=>this,this.updateLoader=e=>(Object.assign(this.options,e),this),this.update=e=>(Object.assign(this.options,e),this),this.lazy=e=>(this.lazyFn=e,this),this.redirect=e=>Ot({from:this.fullPath,...e}),this.options=e||{},this.isRoot=!e?.getParentRoute,e?.id&&e?.path)throw Error(`Route cannot have both an 'id' and a 'path' option.`)}},lr=class extends cr{constructor(e){super(e)}},ur=Symbol.asyncIterator,dr=Symbol.hasInstance,fr=Symbol.isConcatSpreadable,pr=Symbol.iterator,mr=Symbol.match,hr=Symbol.matchAll,gr=Symbol.replace,_r=Symbol.search,vr=Symbol.species,yr=Symbol.split,br=Symbol.toPrimitive,xr=Symbol.toStringTag,Sr=Symbol.unscopables,Cr={[ur]:0,[dr]:1,[fr]:2,[pr]:3,[mr]:4,[hr]:5,[gr]:6,[_r]:7,[vr]:8,[yr]:9,[br]:10,[xr]:11,[Sr]:12},wr={0:ur,1:dr,2:fr,3:pr,4:mr,5:hr,6:gr,7:_r,8:vr,9:yr,10:br,11:xr,12:Sr},Tr={2:!0,3:!1,1:void 0,0:null,4:-0,5:1/0,6:-1/0,7:NaN},Er={0:`Error`,1:`EvalError`,2:`RangeError`,3:`ReferenceError`,4:`SyntaxError`,5:`TypeError`,6:`URIError`},Dr={0:Error,1:EvalError,2:RangeError,3:ReferenceError,4:SyntaxError,5:TypeError,6:URIError};function D(e,t,n,r,i,a,o,s,c,l,u,d){return{t:e,i:t,s:n,c:r,m:i,p:a,e:o,a:s,f:c,b:l,o:u,l:d}}function Or(e){return D(2,void 0,e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}var kr=Or(2),Ar=Or(3),jr=Or(1),Mr=Or(0),Nr=Or(4),Pr=Or(5),Fr=Or(6),Ir=Or(7);function Lr(e){switch(e){case`"`:return`\\"`;case`\\`:return`\\\\`;case`
`:return`\\n`;case`\r`:return`\\r`;case`\b`:return`\\b`;case`	`:return`\\t`;case`\f`:return`\\f`;case`<`:return`\\x3C`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:return}}function Rr(e){let t=``,n=0,r;for(let i=0,a=e.length;i<a;i++)r=Lr(e[i]),r&&(t+=e.slice(n,i)+r,n=i+1);return n===0?t=e:t+=e.slice(n),t}function zr(e){switch(e){case`\\\\`:return`\\`;case`\\"`:return`"`;case`\\n`:return`
`;case`\\r`:return`\r`;case`\\b`:return`\b`;case`\\t`:return`	`;case`\\f`:return`\f`;case`\\x3C`:return`<`;case`\\u2028`:return`\u2028`;case`\\u2029`:return`\u2029`;default:return e}}function Br(e){return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g,zr)}var Vr=`__SEROVAL_REFS__`,Hr=new Map,Ur=new Map;function Wr(e){return Hr.has(e)}function Gr(e){return Ur.has(e)}function Kr(e){if(Wr(e))return Hr.get(e);throw new Fi(e)}function qr(e){if(Gr(e))return Ur.get(e);throw new Ii(e)}typeof globalThis<`u`?Object.defineProperty(globalThis,Vr,{value:Ur,configurable:!0,writable:!1,enumerable:!1}):typeof window<`u`?Object.defineProperty(window,Vr,{value:Ur,configurable:!0,writable:!1,enumerable:!1}):typeof self<`u`?Object.defineProperty(self,Vr,{value:Ur,configurable:!0,writable:!1,enumerable:!1}):typeof global<`u`&&Object.defineProperty(global,Vr,{value:Ur,configurable:!0,writable:!1,enumerable:!1});function Jr(e){return e instanceof EvalError?1:e instanceof RangeError?2:e instanceof ReferenceError?3:e instanceof SyntaxError?4:e instanceof TypeError?5:e instanceof URIError?6:0}function Yr(e){let t=Er[Jr(e)];return e.name===t?e.constructor.name===t?{}:{name:e.constructor.name}:{name:e.name}}function Xr(e,t){let n=Yr(e),r=Object.getOwnPropertyNames(e);for(let i=0,a=r.length,o;i<a;i++)o=r[i],o!==`name`&&o!==`message`&&(o===`stack`?t&4&&(n||={},n[o]=e[o]):(n||={},n[o]=e[o]));return n}function Zr(e){return Object.isFrozen(e)?3:Object.isSealed(e)?2:+!Object.isExtensible(e)}function Qr(e){switch(e){case 1/0:return Pr;case-1/0:return Fr}return e===e?Object.is(e,-0)?Nr:D(0,void 0,e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0):Ir}function $r(e){return D(1,void 0,Rr(e),void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ei(e){return D(3,void 0,``+e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ti(e){return D(4,e,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ni(e,t){let n=t.valueOf();return D(5,e,n===n?t.toISOString():``,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ri(e,t,n){return D(36,e,n.toString(),t,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ii(e,t){return D(6,e,void 0,Rr(t.source),t.flags,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ai(e,t){return D(17,e,Cr[t],void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function oi(e,t){return D(18,e,Rr(Kr(t)),void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function si(e,t,n){return D(25,e,n,Rr(t),void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function ci(e,t,n){return D(9,e,void 0,void 0,void 0,void 0,void 0,n,void 0,void 0,Zr(t),void 0)}function li(e,t){return D(21,e,void 0,void 0,void 0,void 0,void 0,void 0,t,void 0,void 0,void 0)}function ui(e,t,n){return D(15,e,void 0,t.constructor.name,void 0,void 0,void 0,void 0,n,t.byteOffset,void 0,t.length)}function di(e,t,n){return D(16,e,void 0,t.constructor.name,void 0,void 0,void 0,void 0,n,t.byteOffset,void 0,t.length)}function fi(e,t,n){return D(20,e,void 0,void 0,void 0,void 0,void 0,void 0,n,t.byteOffset,void 0,t.byteLength)}function pi(e,t,n){return D(13,e,Jr(t),void 0,Rr(t.message),n,void 0,void 0,void 0,void 0,void 0,void 0)}function mi(e,t,n){return D(14,e,Jr(t),void 0,Rr(t.message),n,void 0,void 0,void 0,void 0,void 0,void 0)}function hi(e,t){return D(7,e,void 0,void 0,void 0,void 0,void 0,t,void 0,void 0,void 0,void 0)}function gi(e,t){return D(28,void 0,void 0,void 0,void 0,void 0,void 0,[e,t],void 0,void 0,void 0,void 0)}function _i(e,t){return D(30,void 0,void 0,void 0,void 0,void 0,void 0,[e,t],void 0,void 0,void 0,void 0)}function vi(e,t,n){return D(31,e,void 0,void 0,void 0,void 0,void 0,n,t,void 0,void 0,void 0)}function yi(e,t){return D(32,e,void 0,void 0,void 0,void 0,void 0,void 0,t,void 0,void 0,void 0)}function bi(e,t){return D(33,e,void 0,void 0,void 0,void 0,void 0,void 0,t,void 0,void 0,void 0)}function xi(e,t){return D(34,e,void 0,void 0,void 0,void 0,void 0,void 0,t,void 0,void 0,void 0)}function Si(e,t,n,r){return D(35,e,n,void 0,void 0,void 0,void 0,t,void 0,void 0,void 0,r)}var{toString:Ci}=Object.prototype,wi={parsing:1,serialization:2,deserialization:3};function Ti(e){return`Seroval Error (step: ${wi[e]})`}var Ei=(e,t)=>Ti(e),Di=class extends Error{constructor(e,t){super(Ei(e,t)),this.cause=t}},Oi=class extends Di{constructor(e){super(`parsing`,e)}},ki=class extends Di{constructor(e){super(`deserialization`,e)}};function Ai(e){return`Seroval Error (specific: ${e})`}var ji=class extends Error{constructor(e){super(Ai(1)),this.value=e}},Mi=class extends Error{constructor(e){super(Ai(2))}},Ni=class extends Error{constructor(e){super(Ai(3))}},Pi=class extends Error{constructor(e){super(Ai(4))}},Fi=class extends Error{constructor(e){super(Ai(5)),this.value=e}},Ii=class extends Error{constructor(e){super(Ai(6))}},Li=class extends Error{constructor(e){super(Ai(7))}},Ri=class extends Error{constructor(e){super(Ai(8))}},zi=class extends Error{constructor(e){super(Ai(9))}},Bi=class{constructor(e,t){this.value=e,this.replacement=t}},Vi=()=>{let e={p:0,s:0,f:0};return e.p=new Promise((t,n)=>{e.s=t,e.f=n}),e},Hi=()=>{let e=[],t=[],n=!0,r=!1,i=0,a={flush(e,n,r){for(r=0;r<i;r++)t[r]&&t[r][n](e)},up(t,i,a,o){for(i=0,a=e.length;i<a;i++)o=e[i],!n&&i===a-1?t[r?`return`:`throw`](o):t.next(o)},on(e,r){return n&&(r=i++,t[r]=e),a.up(e),()=>{n&&(t[r]=t[i],t[i--]=void 0)}}};return{__SEROVAL_STREAM__:!0,on(e){return a.on(e)},next(t){n&&(e.push(t),a.flush(t,`next`))},throw(i){n&&(e.push(i),a.flush(i,`throw`),n=!1,r=!1,t.length=0)},return(i){n&&(e.push(i),a.flush(i,`return`),n=!1,r=!0,t.length=0)}}},Ui=e=>t=>()=>{let n=0,r={[e](){return r},next(){if(n>t.d)return{done:!0,value:void 0};let e=n++,r=t.v[e];if(e===t.t)throw r;return{done:e===t.d,value:r}}};return r},Wi=(e,t)=>n=>()=>{let r=0,i=-1,a=!1,o=[],s=[],c={finalize(e=0,t=s.length){for(;e<t;e++)s[e].s({done:!0,value:void 0})}};n.on({next(e){let t=s.shift();t&&t.s({done:!1,value:e}),o.push(e)},throw(e){let t=s.shift();t&&t.f(e),c.finalize(),i=o.length,a=!0,o.push(e)},return(e){let t=s.shift();t&&t.s({done:!0,value:e}),c.finalize(),i=o.length,o.push(e)}});let l={[e](){return l},next(){if(i===-1){let e=r++;if(e>=o.length){let e=t();return s.push(e),e.p}return{done:!1,value:o[e]}}if(r>i)return{done:!0,value:void 0};let e=r++,n=o[e];if(e!==i)return{done:!1,value:n};if(a)throw n;return{done:!0,value:n}}};return l},Gi=e=>{let t=atob(e),n=t.length,r=new Uint8Array(n);for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return r.buffer};function O(e){return`__SEROVAL_SEQUENCE__`in e}function Ki(e,t,n){return{__SEROVAL_SEQUENCE__:!0,v:e,t,d:n}}function qi(e){let t=[],n=-1,r=-1,i=e[pr]();for(;;)try{let e=i.next();if(t.push(e.value),e.done){r=t.length-1;break}}catch(e){n=t.length,t.push(e)}return Ki(t,n,r)}var Ji=Ui(pr);function Yi(e){return Ji(e)}var Xi={},Zi={},Qi={0:{},1:{},2:{},3:{},4:{},5:{}};function $i(e){return`__SEROVAL_STREAM__`in e}function ea(){return Hi()}function ta(e){let t=ea(),n=e[ur]();async function r(){try{let e=await n.next();e.done?t.return(e.value):(t.next(e.value),await r())}catch(e){t.throw(e)}}return r().catch(()=>{}),t}var na=Wi(ur,Vi);function ra(e){return na(e)}async function ia(e){try{return[1,await e]}catch(e){return[0,e]}}function aa(e,t){return{plugins:t.plugins,mode:e,marked:new Set,features:127^(t.disabledFeatures||0),refs:t.refs||new Map,depthLimit:t.depthLimit||1e3}}function oa(e,t){e.marked.add(t)}function sa(e,t){let n=e.refs.size;return e.refs.set(t,n),n}function ca(e,t){let n=e.refs.get(t);return n==null?{type:0,value:sa(e,t)}:(oa(e,n),{type:1,value:ti(n)})}function la(e,t){let n=ca(e,t);return n.type===1?n:Wr(t)?{type:2,value:oi(n.value,t)}:n}function ua(e,t){let n=la(e,t);if(n.type!==0)return n.value;if(t in Cr)return ai(n.value,t);throw new ji(t)}function da(e,t){let n=ca(e,Qi[t]);return n.type===1?n.value:D(26,n.value,t,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}function fa(e){let t=ca(e,Xi);return t.type===1?t.value:D(27,t.value,void 0,void 0,void 0,void 0,void 0,void 0,ua(e,pr),void 0,void 0,void 0)}function pa(e){let t=ca(e,Zi);return t.type===1?t.value:D(29,t.value,void 0,void 0,void 0,void 0,void 0,[da(e,1),ua(e,ur)],void 0,void 0,void 0,void 0)}function ma(e,t,n,r){return D(n?11:10,e,void 0,void 0,void 0,r,void 0,void 0,void 0,void 0,Zr(t),void 0)}function ha(e,t,n,r){return D(8,t,void 0,void 0,void 0,void 0,{k:n,v:r},void 0,da(e,0),void 0,void 0,void 0)}function ga(e,t,n){let r=new Uint8Array(n),i=``;for(let e=0,t=r.length;e<t;e++)i+=String.fromCharCode(r[e]);return D(19,t,Rr(btoa(i)),void 0,void 0,void 0,void 0,void 0,da(e,5),void 0,void 0,void 0)}function _a(e,t){return{base:aa(e,t),child:void 0}}var va=class{constructor(e,t){this._p=e,this.depth=t}parse(e){return Ra(this._p,this.depth,e)}};async function ya(e,t,n){let r=[];for(let i=0,a=n.length;i<a;i++)i in n?r[i]=await Ra(e,t,n[i]):r[i]=0;return r}async function ba(e,t,n,r){return ci(n,r,await ya(e,t,r))}async function xa(e,t,n){let r=Object.entries(n),i=[],a=[];for(let n=0,o=r.length;n<o;n++)i.push(Rr(r[n][0])),a.push(await Ra(e,t,r[n][1]));return pr in n&&(i.push(ua(e.base,pr)),a.push(gi(fa(e.base),await Ra(e,t,qi(n))))),ur in n&&(i.push(ua(e.base,ur)),a.push(_i(pa(e.base),await Ra(e,t,ta(n))))),xr in n&&(i.push(ua(e.base,xr)),a.push($r(n[xr]))),fr in n&&(i.push(ua(e.base,fr)),a.push(n[fr]?kr:Ar)),{k:i,v:a}}async function Sa(e,t,n,r,i){return ma(n,r,i,await xa(e,t,r))}async function Ca(e,t,n,r){return li(n,await Ra(e,t,r.valueOf()))}async function wa(e,t,n,r){return ui(n,r,await Ra(e,t,r.buffer))}async function Ta(e,t,n,r){return di(n,r,await Ra(e,t,r.buffer))}async function Ea(e,t,n,r){return fi(n,r,await Ra(e,t,r.buffer))}async function Da(e,t,n,r){let i=Xr(r,e.base.features);return pi(n,r,i?await xa(e,t,i):void 0)}async function Oa(e,t,n,r){let i=Xr(r,e.base.features);return mi(n,r,i?await xa(e,t,i):void 0)}async function ka(e,t,n,r){let i=[],a=[];for(let[n,o]of r.entries())i.push(await Ra(e,t,n)),a.push(await Ra(e,t,o));return ha(e.base,n,i,a)}async function Aa(e,t,n,r){let i=[];for(let n of r.keys())i.push(await Ra(e,t,n));return hi(n,i)}async function ja(e,t,n,r){let i=e.base.plugins;if(i)for(let a=0,o=i.length;a<o;a++){let o=i[a];if(o.parse.async&&o.test(r))return si(n,o.tag,await o.parse.async(r,new va(e,t),{id:n}))}}async function Ma(e,t,n,r){let[i,a]=await ia(r);return D(12,n,i,void 0,void 0,void 0,void 0,void 0,await Ra(e,t,a),void 0,void 0,void 0)}function Na(e,t,n,r,i){let a=[],o=n.on({next:n=>{oa(this.base,t),Ra(this,e,n).then(e=>{a.push(yi(t,e))},e=>{i(e),o()})},throw:n=>{oa(this.base,t),Ra(this,e,n).then(e=>{a.push(bi(t,e)),r(a),o()},e=>{i(e),o()})},return:n=>{oa(this.base,t),Ra(this,e,n).then(e=>{a.push(xi(t,e)),r(a),o()},e=>{i(e),o()})}})}async function Pa(e,t,n,r){return vi(n,da(e.base,4),await new Promise(Na.bind(e,t,n,r)))}async function Fa(e,t,n,r){let i=[];for(let n=0,a=r.v.length;n<a;n++)i[n]=await Ra(e,t,r.v[n]);return Si(n,i,r.t,r.d)}async function Ia(e,t,n,r){if(Array.isArray(r))return ba(e,t,n,r);if($i(r))return Pa(e,t,n,r);if(O(r))return Fa(e,t,n,r);let i=r.constructor;if(i!==void 0&&typeof i!=`function`){let e=Object.getPrototypeOf(r);i=e===null?void 0:e.constructor}if(i===Bi)return Ra(e,t,r.replacement);let a=await ja(e,t,n,r);if(a)return a;switch(i){case Object:return Sa(e,t,n,r,!1);case void 0:return Sa(e,t,n,r,!0);case Date:return ni(n,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return Da(e,t,n,r);case Number:case Boolean:case String:case BigInt:return Ca(e,t,n,r);case ArrayBuffer:return ga(e.base,n,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return wa(e,t,n,r);case DataView:return Ea(e,t,n,r);case Map:return ka(e,t,n,r);case Set:return Aa(e,t,n,r)}if(i===Promise||r instanceof Promise)return Ma(e,t,n,r);let o=e.base.features;if(o&32&&i===RegExp)return ii(n,r);if(o&16)switch(i){case BigInt64Array:case BigUint64Array:return Ta(e,t,n,r);default:break}if(o&1&&typeof AggregateError<`u`&&(i===AggregateError||r instanceof AggregateError))return Oa(e,t,n,r);if(o&64&&typeof Temporal<`u`)switch(i){case Temporal.Instant:return ri(n,0,r);case Temporal.Duration:return ri(n,1,r);case Temporal.PlainDate:return ri(n,2,r);case Temporal.PlainDateTime:return ri(n,3,r);case Temporal.PlainMonthDay:return ri(n,4,r);case Temporal.PlainTime:return ri(n,5,r);case Temporal.PlainYearMonth:return ri(n,6,r);case Temporal.ZonedDateTime:return ri(n,7,r);default:break}if(r instanceof Error)return Da(e,t,n,r);if(pr in r||ur in r)return Sa(e,t,n,r,!!i);throw new ji(r)}async function La(e,t,n){let r=la(e.base,n);if(r.type!==0)return r.value;let i=await ja(e,t,r.value,n);if(i)return i;throw new ji(n)}async function Ra(e,t,n){if(t>=e.base.depthLimit)throw new zi(e.base.depthLimit);switch(typeof n){case`boolean`:return n?kr:Ar;case`undefined`:return jr;case`string`:return $r(n);case`number`:return Qr(n);case`bigint`:return ei(n);case`object`:if(n){let r=la(e.base,n);return r.type===0?await Ia(e,t+1,r.value,n):r.value}return Mr;case`symbol`:return ua(e.base,n);case`function`:return La(e,t,n);default:throw new ji(n)}}async function za(e,t){try{return await Ra(e,0,t)}catch(e){throw e instanceof Oi?e:new Oi(e)}}function Ba(e){return e}function Va(e,t){for(let n=0,r=t.length;n<r;n++){let r=t[n];e.has(r)||(e.add(r),r.extends&&Va(e,r.extends))}}function Ha(e){if(e){let t=new Set;return Va(t,e),[...t]}}function Ua(e){switch(e){case`Int8Array`:return Int8Array;case`Int16Array`:return Int16Array;case`Int32Array`:return Int32Array;case`Uint8Array`:return Uint8Array;case`Uint16Array`:return Uint16Array;case`Uint32Array`:return Uint32Array;case`Uint8ClampedArray`:return Uint8ClampedArray;case`Float32Array`:return Float32Array;case`Float64Array`:return Float64Array;case`BigInt64Array`:return BigInt64Array;case`BigUint64Array`:return BigUint64Array;default:throw new Li(e)}}function Wa(e){switch(e){case`constructor`:case`__proto__`:case`prototype`:case`__defineGetter__`:case`__defineSetter__`:case`__lookupGetter__`:case`__lookupSetter__`:return!1;default:return!0}}function Ga(e){switch(e){case ur:case fr:case xr:case pr:return!0;default:return!1}}var Ka=1e6,qa=1e4,Ja=2e4;function Ya(e,t){switch(t){case 3:return Object.freeze(e);case 1:return Object.preventExtensions(e);case 2:return Object.seal(e);default:return e}}var Xa=1e3;function Za(e,t){let n=t.refs||new Map;return`types`in n||Object.assign(n,{types:new Map}),{mode:e,plugins:t.plugins,refs:n,features:t.features??127^(t.disabledFeatures||0),depthLimit:t.depthLimit||Xa}}function Qa(e){return{mode:2,base:Za(2,e),child:void 0}}var $a=class{constructor(e,t){this._p=e,this.depth=t}deserialize(e){return j(this._p,this.depth,e)}};function eo(e,t){if(t<0||!Number.isFinite(t)||!Number.isInteger(t))throw new Ri({t:4,i:t});if(e.refs.has(t))throw Error(`Conflicted ref id: `+t)}function to(e){return!!e&&typeof e==`object`&&`then`in e&&typeof e.then==`function`}function no(e,t,n){return eo(e.base,t),e.state.marked.has(t)&&e.base.refs.set(t,n),n}function ro(e,t,n){return eo(e.base,t),e.base.refs.set(t,n),n}function io(e,t,n){return e.mode===1?no(e,t,n):ro(e,t,n)}function ao(e,t,n){if(Object.hasOwn(t,n))return t[n];throw new Ri(e)}function oo(e,t){return io(e,t.i,qr(Br(t.s)))}function so(e,t,n){let r=n.a,i=r.length,a=io(e,n.i,Array(i));for(let n=0,o;n<i;n++)o=r[n],o&&(a[n]=j(e,t,o));return Ya(a,n.o),a}function co(e,t,n){Wa(t)?e[t]=n:Object.defineProperty(e,t,{value:n,configurable:!0,enumerable:!0,writable:!0})}function lo(e,t,n,r,i){if(typeof r==`string`)co(n,Br(r),j(e,t,i));else{let a=j(e,t,r);switch(typeof a){case`string`:co(n,a,j(e,t,i));break;case`symbol`:Ga(a)&&(n[a]=j(e,t,i));break;default:throw new Ri(r)}}}function uo(e,t,n){e.base.refs.types.set(t,n)}function fo(e,t,n,r){if(e.base.refs.types.get(n)!==r)throw new Ri(t)}function po(e,t,n,r){let i=n.k;if(i.length>0)for(let a=0,o=n.v,s=i.length;a<s;a++)lo(e,t,r,i[a],o[a]);return r}function mo(e,t,n){let r=io(e,n.i,n.t===10?{}:Object.create(null));return po(e,t,n.p,r),Ya(r,n.o),r}function ho(e,t){return io(e,t.i,new Date(t.s))}function go(e,t){if(!(e.base.features&64))throw new Mi(t);let n;switch(t.c){case 0:n=Temporal.Instant.from(t.s);break;case 1:n=Temporal.Duration.from(t.s);break;case 2:n=Temporal.PlainDate.from(t.s);break;case 3:n=Temporal.PlainDateTime.from(t.s);break;case 4:n=Temporal.PlainMonthDay.from(t.s);break;case 5:n=Temporal.PlainTime.from(t.s);break;case 6:n=Temporal.PlainYearMonth.from(t.s);break;case 7:n=Temporal.ZonedDateTime.from(t.s);break;default:throw new Ri(t)}return io(e,t.i,n)}function _o(e,t){if(e.base.features&32){let n=Br(t.c);if(n.length>Ja)throw new Ri(t);return io(e,t.i,new RegExp(n,t.m))}throw new Mi(t)}function vo(e,t,n){let r=io(e,n.i,new Set);for(let i=0,a=n.a,o=a.length;i<o;i++)r.add(j(e,t,a[i]));return r}function yo(e,t,n){let r=io(e,n.i,new Map);for(let i=0,a=n.e.k,o=n.e.v,s=a.length;i<s;i++)r.set(j(e,t,a[i]),j(e,t,o[i]));return r}function bo(e,t){if(t.s.length>Ka)throw new Ri(t);return io(e,t.i,Gi(Br(t.s)))}function xo(e,t,n){let r=Ua(n.c),i=j(e,t,n.f),a=n.b??0;if(a<0||a>i.byteLength)throw new Ri(n);return io(e,n.i,new r(i,a,n.l))}function So(e,t,n){let r=j(e,t,n.f),i=n.b??0;if(i<0||i>r.byteLength)throw new Ri(n);return io(e,n.i,new DataView(r,i,n.l))}function Co(e,t,n,r){if(n.p){let i=po(e,t,n.p,{});Object.defineProperties(r,Object.getOwnPropertyDescriptors(i))}return r}function wo(e,t,n){return Co(e,t,n,io(e,n.i,AggregateError([],Br(n.m))))}function k(e,t,n){let r=ao(n,Dr,n.s);return Co(e,t,n,io(e,n.i,new r(Br(n.m))))}function A(e,t,n){let r=Vi(),i=io(e,n.i,r.p),a=j(e,t,n.f);if(to(a))throw new Ri(n.f);return n.s?r.s(a):r.f(a),i}function To(e,t,n){return io(e,n.i,Object(j(e,t,n.f)))}function Eo(e,t,n){let r=e.base.plugins;if(r){let i=Br(n.c);for(let a=0,o=r.length;a<o;a++){let o=r[a];if(o.tag===i)return io(e,n.i,o.deserialize(n.s,new $a(e,t),{id:n.i}))}}throw new Ni(n.c)}function Do(e,t){let n=io(e,t.i,io(e,t.s,Vi()).p);return uo(e,t.s,22),n}function Oo(e,t,n){let r=e.base.refs.get(n.i);if(r){fo(e,n,n.i,22);let i=j(e,t,n.a[1]);if(to(i))throw new Ri(n.a[1]);n.t===23?r.s(i):r.f(i);return}throw new Pi(`Promise`)}function ko(e,t,n){return j(e,t,n.a[0]),Yi(j(e,t,n.a[1]))}function Ao(e,t,n){return j(e,t,n.a[0]),ra(j(e,t,n.a[1]))}function jo(e,t,n){let r=io(e,n.i,ea());uo(e,n.i,31);let i=n.a,a=i.length;if(a)for(let n=0;n<a;n++)j(e,t,i[n]);return r}function Mo(e,t,n){let r=e.base.refs.get(n.i);if(r){fo(e,n,n.i,31),r.next(j(e,t,n.f));return}throw new Pi(`Stream`)}function No(e,t,n){let r=e.base.refs.get(n.i);if(r){fo(e,n,n.i,31),r.throw(j(e,t,n.f));return}throw new Pi(`Stream`)}function Po(e,t,n){let r=e.base.refs.get(n.i);if(r){fo(e,n,n.i,31),r.return(j(e,t,n.f));return}throw new Pi(`Stream`)}function Fo(e,t,n){j(e,t,n.f)}function Io(e,t,n){j(e,t,n.a[1])}function Lo(e,t,n){let r=io(e,n.i,Ki([],n.s,n.l));for(let i=0,a=n.a.length;i<a;i++)r.v[i]=j(e,t,n.a[i]);return r}function j(e,t,n){if(t>e.base.depthLimit)throw new zi(e.base.depthLimit);switch(t+=1,n.t){case 2:return ao(n,Tr,n.s);case 0:return Number(n.s);case 1:return Br(String(n.s));case 3:if(String(n.s).length>qa)throw new Ri(n);return BigInt(n.s);case 4:return e.base.refs.get(n.i);case 18:return oo(e,n);case 9:return so(e,t,n);case 10:case 11:return mo(e,t,n);case 5:return ho(e,n);case 6:return _o(e,n);case 7:return vo(e,t,n);case 8:return yo(e,t,n);case 19:return bo(e,n);case 16:case 15:return xo(e,t,n);case 20:return So(e,t,n);case 14:return wo(e,t,n);case 13:return k(e,t,n);case 12:return A(e,t,n);case 17:return ao(n,wr,n.s);case 21:return To(e,t,n);case 25:return Eo(e,t,n);case 22:return Do(e,n);case 23:case 24:return Oo(e,t,n);case 28:return ko(e,t,n);case 30:return Ao(e,t,n);case 31:return jo(e,t,n);case 32:return Mo(e,t,n);case 33:return No(e,t,n);case 34:return Po(e,t,n);case 27:return Fo(e,t,n);case 29:return Io(e,t,n);case 35:return Lo(e,t,n);case 36:return go(e,n);default:throw new Mi(n)}}function Ro(e,t){try{return j(e,0,t)}catch(e){throw new ki(e)}}function zo(e,t){return Ro(Qa({plugins:Ha(t.plugins),refs:t.refs,features:t.features,disabledFeatures:t.disabledFeatures,depthLimit:t.depthLimit}),e)}async function Bo(e,t={}){let n=_a(1,{plugins:Ha(t.plugins),disabledFeatures:t.disabledFeatures});return{t:await za(n,e),f:n.base.features,m:Array.from(n.base.marked)}}function Vo(e){return e}function Ho(e){return Ba({tag:`$TSR/t/`+e.key,test:e.test,parse:{sync(t,n,r){return{v:n.parse(e.toSerializable(t))}},async async(t,n,r){return{v:await n.parse(e.toSerializable(t))}},stream(t,n,r){return{v:n.parse(e.toSerializable(t))}}},serialize:void 0,deserialize(t,n,r){return e.fromSerializable(n.deserialize(t.v))}})}var Uo=class{constructor(e,t){this.stream=e,this.hint=t?.hint??`binary`}},Wo=globalThis.Buffer,Go=!!Wo&&typeof Wo.from==`function`;function Ko(e){if(e.length===0)return``;if(Go)return Wo.from(e).toString(`base64`);let t=32768,n=[];for(let r=0;r<e.length;r+=t){let i=e.subarray(r,r+t);n.push(String.fromCharCode.apply(null,i))}return btoa(n.join(``))}function qo(e){if(e.length===0)return new Uint8Array;if(Go){let t=Wo.from(e,`base64`);return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}var Jo=Object.create(null),Yo=Object.create(null),Xo=e=>new ReadableStream({start(t){e.on({next(e){try{t.enqueue(qo(e))}catch{}},throw(e){t.error(e)},return(){try{t.close()}catch{}}})}}),Zo=new TextEncoder,Qo=e=>new ReadableStream({start(t){e.on({next(e){try{typeof e==`string`?t.enqueue(Zo.encode(e)):t.enqueue(qo(e.$b64))}catch{}},throw(e){t.error(e)},return(){try{t.close()}catch{}}})}}),$o=`(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,es=`(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;function ts(e){let t=ea(),n=e.getReader();return(async()=>{try{for(;;){let{done:e,value:r}=await n.read();if(e){t.return(void 0);break}t.next(Ko(r))}}catch(e){t.throw(e)}finally{n.releaseLock()}})(),t}function ns(e){let t=ea(),n=e.getReader(),r=new TextDecoder(`utf-8`,{fatal:!0});return(async()=>{try{for(;;){let{done:e,value:i}=await n.read();if(e){try{let e=r.decode();e.length>0&&t.next(e)}catch{}t.return(void 0);break}try{let e=r.decode(i,{stream:!0});e.length>0&&t.next(e)}catch{t.next({$b64:Ko(i)})}}}catch(e){t.throw(e)}finally{n.releaseLock()}})(),t}var rs=Ba({tag:`tss/RawStream`,extends:[Ba({tag:`tss/RawStreamFactory`,test(e){return e===Jo},parse:{sync(e,t,n){return{}},async async(e,t,n){return{}},stream(e,t,n){return{}}},serialize(e,t,n){return $o},deserialize(e,t,n){return Jo}}),Ba({tag:`tss/RawStreamFactoryText`,test(e){return e===Yo},parse:{sync(e,t,n){return{}},async async(e,t,n){return{}},stream(e,t,n){return{}}},serialize(e,t,n){return es},deserialize(e,t,n){return Yo}})],test(e){return e instanceof Uo},parse:{sync(e,t,n){let r=e.hint===`text`?Yo:Jo;return{hint:t.parse(e.hint),factory:t.parse(r),stream:t.parse(ea())}},async async(e,t,n){let r=e.hint===`text`?Yo:Jo,i=e.hint===`text`?ns(e.stream):ts(e.stream);return{hint:await t.parse(e.hint),factory:await t.parse(r),stream:await t.parse(i)}},stream(e,t,n){let r=e.hint===`text`?Yo:Jo,i=e.hint===`text`?ns(e.stream):ts(e.stream);return{hint:t.parse(e.hint),factory:t.parse(r),stream:t.parse(i)}}},serialize(e,t,n){return`(`+t.serialize(e.factory)+`)(`+t.serialize(e.stream)+`)`},deserialize(e,t,n){let r=t.deserialize(e.stream);return t.deserialize(e.hint)===`text`?Qo(r):Xo(r)}});function is(e){return Ba({tag:`tss/RawStream`,test:()=>!1,parse:{},serialize(){throw Error(`RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`)},deserialize(t,n,r){return e(typeof n?.deserialize==`function`?n.deserialize(t.streamId):t.streamId)}})}var as=Ba({tag:`$TSR/Error`,test(e){return e instanceof Error},parse:{sync(e,t){return{message:t.parse(e.message)}},async async(e,t){return{message:await t.parse(e.message)}},stream(e,t){return{message:t.parse(e.message)}}},serialize(e,t){return`new Error(`+t.serialize(e.message)+`)`},deserialize(e,t){return Error(t.deserialize(e.message))}}),os={},ss=e=>new ReadableStream({start(t){e.on({next(e){try{t.enqueue(e)}catch{}},throw(e){t.error(e)},return(){try{t.close()}catch{}}})}}),cs=Ba({tag:`seroval-plugins/web/ReadableStreamFactory`,test(e){return e===os},parse:{sync(){return os},async async(){return await Promise.resolve(os)},stream(){return os}},serialize(){return ss.toString()},deserialize(){return os}});async function ls(e,t){try{let n=await t.read();n.done?(e.return(n.value),t.releaseLock()):(e.next(n.value),await ls(e,t))}catch(t){e.throw(t)}}function us(e){e.cancel().catch(()=>{}),e.releaseLock()}function ds(e){let t=ea(),n=e.getReader(),r=us.bind(null,n);return ls(t,n).catch(r),[t,r]}var fs=[as,rs,Ba({tag:`seroval/plugins/web/ReadableStream`,extends:[cs],test(e){return typeof ReadableStream>`u`?!1:e instanceof ReadableStream},parse:{sync(e,t){return{factory:t.parse(os),stream:t.parse(ea())}},async async(e,t){return{factory:await t.parse(os),stream:await t.parse(ds(e)[0])}},stream(e,t){let[n,r]=ds(e);return t.addCleanup(r),{factory:t.parse(os),stream:t.parse(n)}}},serialize(e,t){return`(`+t.serialize(e.factory)+`)(`+t.serialize(e.stream)+`)`},deserialize(e,t){return ss(t.deserialize(e.stream))}})];function ps(){return[...(C()?.serializationAdapters)?.map(Ho)??[],...fs]}var ms=new TextDecoder,hs=new Uint8Array,gs=16777216,_s=33554432,vs=1024,ys=1e5;function bs(e){let t=new Map,n=new Map,r=new Set,i=!1,a=null,o=0,s,c=new ReadableStream({start(e){s=e},cancel(){i=!0;try{a?.cancel()}catch{}t.forEach(e=>{try{e.error(Error(`Framed response cancelled`))}catch{}}),t.clear(),n.clear(),r.clear()}});function l(e){let i=n.get(e);if(i)return i;if(r.has(e))return new ReadableStream({start(e){e.close()}});if(n.size>=vs)throw Error(`Too many raw streams in framed response (max ${vs})`);let a=new ReadableStream({start(n){t.set(e,n)},cancel(){r.add(e),t.delete(e),n.delete(e)}});return n.set(e,a),a}function u(e){return l(e),t.get(e)}return(async()=>{let n=e.getReader();a=n;let c=[],l=0,d=0;function f(){c[l++]=hs,l===c.length?(c.length=0,l=0):l>=32&&(c.splice(0,l),l=0)}function p(){if(d<9)return null;let e=c[l];if(e.length>=9)return{type:e[0],streamId:(e[1]<<24|e[2]<<16|e[3]<<8|e[4])>>>0,length:(e[5]<<24|e[6]<<16|e[7]<<8|e[8])>>>0};let t=new Uint8Array(9),n=0,r=9;for(let e=l;e<c.length&&r>0;e++){let i=c[e],a=Math.min(i.length,r);t.set(i.subarray(0,a),n),n+=a,r-=a}return{type:t[0],streamId:(t[1]<<24|t[2]<<16|t[3]<<8|t[4])>>>0,length:(t[5]<<24|t[6]<<16|t[7]<<8|t[8])>>>0}}function m(e){if(e===0)return hs;let t=c[l];if(t&&t.length>=e){let n=t.subarray(0,e);return t.length===e?f():c[l]=t.subarray(e),d-=e,n}let n=new Uint8Array(e),r=0,i=e;for(;i>0&&l<c.length;){let e=c[l],t=Math.min(e.length,i);n.set(e.subarray(0,t),r),r+=t,i-=t,t===e.length?f():c[l]=e.subarray(t)}return d-=e,n}try{for(;;){let{done:e,value:a}=await n.read();if(i||e)break;if(a){if(d+a.length>_s)throw Error(`Framed response buffer exceeded ${_s} bytes`);for(c.push(a),d+=a.length;;){let e=p();if(!e)break;let{type:n,streamId:i,length:a}=e;if(n!==y.JSON&&n!==y.CHUNK&&n!==y.END&&n!==y.ERROR)throw Error(`Unknown frame type: ${n}`);if(n===y.JSON){if(i!==0)throw Error(`Invalid JSON frame streamId (expected 0)`)}else if(i===0)throw Error(`Invalid raw frame streamId (expected non-zero)`);if(a>gs)throw Error(`Frame payload too large: ${a} bytes (max ${gs})`);let c=9+a;if(d<c)break;if(++o>ys)throw Error(`Too many frames in framed response (max ${ys})`);m(9);let l=m(a);switch(n){case y.JSON:try{s.enqueue(ms.decode(l))}catch{}break;case y.CHUNK:{let e=u(i);e&&e.enqueue(l);break}case y.END:{let e=u(i);if(r.add(i),e){try{e.close()}catch{}t.delete(i)}break}case y.ERROR:{let e=u(i);if(r.add(i),e){let n=ms.decode(l);e.error(Error(n)),t.delete(i)}break}}}}}if(d!==0)throw Error(`Incomplete frame at end of framed response`);try{s.close()}catch{}t.forEach(e=>{try{e.close()}catch{}}),t.clear()}catch(e){try{s.error(e)}catch{}t.forEach(t=>{try{t.error(e)}catch{}}),t.clear()}finally{try{n.releaseLock()}catch{}a=null}})(),{getStream:l,chunks:c}}var xs=null;async function Ss(e){e.length>0&&await Promise.allSettled(e)}var Cs=Object.prototype.hasOwnProperty;function ws(e){for(let t in e)if(Cs.call(e,t))return!0;return!1}async function Ts(e,t,n){xs||=ps();let r=t[0],i=r.fetch??n,a=r.data instanceof FormData?`formData`:`payload`,o=r.headers?new Headers(r.headers):new Headers;if(o.set(`x-tsr-serverFn`,`true`),a===`payload`&&o.set(`accept`,`${v}, application/x-ndjson, application/json`),r.method===`GET`){if(a===`formData`)throw Error(`FormData is not supported with GET requests`);let t=await Es(r);if(t!==void 0){let n=yt({payload:t});e.includes(`?`)?e+=`&${n}`:e+=`?${n}`}}let s;return r.method===`POST`&&(s=await Os(r),typeof s==`string`&&o.set(`content-type`,`application/json`)),await ks(async()=>i(e,{method:r.method,headers:o,signal:r.signal,body:s}))}async function Es(e){let t=!1,n={};if(e.data!==void 0&&(t=!0,n.data=e.data),e.context&&ws(e.context)&&(t=!0,n.context=e.context),t)return Ds(n)}async function Ds(e){return JSON.stringify(await Promise.resolve(Bo(e,{plugins:xs})))}async function Os(e){if(e.data instanceof FormData){let t;return e.context&&ws(e.context)&&(t=await Ds(e.context)),t!==void 0&&e.data.set(g,t),e.data}let t=await Es(e);if(t)return t}async function ks(e){let t;try{t=await e()}catch(e){if(e instanceof Response)t=e;else throw console.log(e),e}if(t.headers.get(`x-tss-raw`)===`true`)return t;let n=t.headers.get(`content-type`);if(n||Se(),t.headers.get(`x-tss-serialized`)){let e;if(n.includes(`application/x-tss-framed`)){if(S(n),!t.body)throw Error(`No response body for framed response`);let{getStream:r,chunks:i}=bs(t.body),a=[is(r),...xs||[]],o=new Map;e=await As({jsonStream:i,onMessage:e=>zo(e,{refs:o,plugins:a}),onError(e,t){console.error(e,t)}})}else if(n.includes(`application/json`)){let n=await t.json(),r=[];try{e=zo(n,{plugins:xs})}finally{}await Ss(r)}if(e||Se(),e instanceof Error)throw e;return e}if(n.includes(`application/json`)){let e=await t.json(),n=At(e);if(n)throw n;if(it(e))throw e;return e}if(!t.ok)throw Error(await t.text());return t}async function As({jsonStream:e,onMessage:t,onError:n}){let r=e.getReader(),{value:i,done:a}=await r.read();if(a||!i)throw Error(`Stream ended before first object`);let o=JSON.parse(i),s=!1,c=(async()=>{try{for(;;){let{value:e,done:i}=await r.read();if(i)break;if(e)try{let n=[];try{t(JSON.parse(e))}finally{}await Ss(n)}catch(t){n?.(`Invalid JSON: ${e}`,t)}}}catch(e){s||n?.(`Stream processing error:`,e)}})(),l,u=[];try{l=t(o)}catch(e){throw s=!0,r.cancel().catch(()=>{}),e}return await Ss(u),Promise.resolve(l).catch(()=>{s=!0,r.cancel().catch(()=>{})}),c.finally(()=>{try{r.releaseLock()}catch{}}),l}function js(e){let t=`/_serverFn/`+e;return Object.assign((...e)=>{let n=C()?.serverFns?.fetch;return Ts(t,e,n??fetch)},{url:t,serverFnMeta:{id:e},[_]:!0})}var Ms=Vo({key:`$TSS/serverfn`,test:e=>typeof e!=`function`||!(_ in e)?!1:!!e[_],toSerializable:({serverFnMeta:e})=>({functionId:e.id}),fromSerializable:({functionId:e})=>js(e)}),M=l(t(),1),N=o();function Ns({promise:e}){if(n)return n(e);let t=er(e);if(t[$n].status===`pending`)throw t;if(t[$n].status===`error`)throw t[$n].error;return t[$n].data}function Ps(e){let t=(0,N.jsx)(Fs,{...e});return e.fallback?(0,N.jsx)(M.Suspense,{fallback:e.fallback,children:t}):t}function Fs(e){let t=Ns(e);return e.children(t)}var Is=class extends M.Component{constructor(...e){super(...e),this.state={error:null},this.reset=()=>{this.setState({error:null})}}static getDerivedStateFromProps(e,t){let n=e.getResetKey();return t.error&&t.resetKey!==n?{resetKey:n,error:null}:{resetKey:n}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch?.(e,t)}render(){let e=this.state.error;return e?M.createElement(this.props.errorComponent??Ls,{error:e,reset:this.reset}):this.props.children}};function Ls({error:e}){let[t,n]=M.useState(!1);return(0,N.jsxs)(`div`,{style:{padding:`.5rem`,maxWidth:`100%`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`.5rem`},children:[(0,N.jsx)(`strong`,{style:{fontSize:`1rem`},children:`Something went wrong!`}),(0,N.jsx)(`button`,{style:{appearance:`none`,fontSize:`.6em`,border:`1px solid currentColor`,padding:`.1rem .2rem`,fontWeight:`bold`,borderRadius:`.25rem`},onClick:()=>n(e=>!e),children:t?`Hide Error`:`Show Error`})]}),(0,N.jsx)(`div`,{style:{height:`.25rem`}}),t?(0,N.jsx)(`div`,{children:(0,N.jsx)(`pre`,{style:{fontSize:`.7em`,border:`1px solid red`,borderRadius:`.25rem`,padding:`.3rem`,color:`red`,overflow:`auto`},children:e.message?(0,N.jsx)(`code`,{children:e.message}):null})}):null]})}function Rs({children:e,fallback:t=null}){return(0,N.jsx)(M.Fragment,{children:zs()?e:t})}function zs(){return M.useSyncExternalStore(Bs,()=>!0,()=>!1)}function Bs(){return()=>{}}var Vs=M.createContext(void 0),Hs=M.createContext(void 0),P=(e=>(e[e.None=0]=`None`,e[e.Mutable=1]=`Mutable`,e[e.Watching=2]=`Watching`,e[e.RecursedCheck=4]=`RecursedCheck`,e[e.Recursed=8]=`Recursed`,e[e.Dirty=16]=`Dirty`,e[e.Pending=32]=`Pending`,e))(P||{});function Us({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0){n=e.nextSub;continue}for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}while(!0)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(!0)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function Ws(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}var Gs=[],Ks=0,{link:qs,unlink:Js,propagate:Ys,checkDirty:Xs,shallowPropagate:Zs}=Us({update(e){return e._update()},notify(e){Gs[$s++]=e,e.flags&=~P.Watching},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=P.Mutable|P.Dirty,rc(e))}}),Qs=0,$s=0,ec,tc=0;function nc(e){try{++tc,e()}finally{--tc||ic()}}function rc(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=Js(n,e)}function ic(){if(!(tc>0)){for(;Qs<$s;){let e=Gs[Qs];Gs[Qs++]=void 0,e.notify()}Qs=0,$s=0}}function ac(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:n?P.None:P.Mutable,get(){return ec!==void 0&&qs(i,ec,Ks),i._snapshot},subscribe(e){let t=Ws(e),n={current:!1},r=oc(()=>{i.get(),n.current?t.next?.(i._snapshot):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=ec,o=t?.compare??Object.is;if(n)ec=i,++Ks,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=P.Mutable|P.RecursedCheck);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{ec=a,n&&(i.flags&=~P.RecursedCheck),rc(i)}}};return n?(i.flags=P.Mutable|P.Dirty,i.get=function(){let e=i.flags;if(e&P.Dirty||e&P.Pending&&Xs(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&Zs(e)}}else e&P.Pending&&(i.flags=e&~P.Pending);return ec!==void 0&&qs(i,ec,Ks),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(Ys(e),Zs(e),ic())}},i}function oc(e){let t=()=>{let t=ec;ec=n,++Ks,n.depsTail=void 0,n.flags=P.Watching|P.RecursedCheck;try{return e()}finally{ec=t,n.flags&=~P.RecursedCheck,rc(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:P.Watching|P.RecursedCheck,notify(){let e=this.flags;e&P.Dirty||e&P.Pending&&Xs(this.deps,this)?t():this.flags=P.Watching},stop(){this.flags=P.None,this.depsTail=void 0,rc(this)}};return t(),n}var sc=r((e=>{var n=t();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useState,o=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=n.useSyncExternalStore===void 0?f:n.useSyncExternalStore})),cc=r(((e,t)=>{t.exports=sc()})),lc=r((e=>{var n=t(),r=cc();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=n.useRef,c=n.useEffect,l=n.useMemo,u=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),uc=r(((e,t)=>{t.exports=lc()}))();function dc(e,t){return e===t}function F(e,t,n=dc){let r=(0,M.useCallback)(t=>{if(!e)return()=>{};let{unsubscribe:n}=e.subscribe(t);return n},[e]),i=(0,M.useCallback)(()=>e?.get(),[e]);return(0,uc.useSyncExternalStoreWithSelector)(r,i,i,t,n)}var fc={};function pc(e,t){let n=M.useRef();return r=>{let i=e?.select?e.select(r):r;return e?.structuralSharing??t.options.defaultStructuralSharing?n.current=se(n.current,i):i}}function mc(e){let t=c(),n=M.useContext(e.from?Hs:Vs),r=e.from??n,i=t.stores.getMatchStore(r),a=pc(e,t),o=F(i,e=>e?a(e):fc);if(o!==fc)return o;(e.shouldThrow??!0)&&Se()}function hc(e){return mc({from:e.from,strict:e.strict,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.loaderData):t.loaderData})}function gc(e){let{select:t,...n}=e;return mc({...n,select:e=>t?t(e.loaderDeps):e.loaderDeps})}function _c(e){return mc({from:e.from,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,strict:e.strict,select:t=>{let n=e.strict===!1?t.params:t._strictParams;return e.select?e.select(n):n}})}function vc(e){return mc({from:e.from,strict:e.strict,shouldThrow:e.shouldThrow,structuralSharing:e.structuralSharing,select:t=>e.select?e.select(t.search):t.search})}function yc(e){let t=c();return M.useCallback(n=>t.navigate({...n,from:n.from??e?.from}),[e?.from,t])}function bc(e){let t=c(),n=yc(),r=M.useRef(null);return s(()=>{r.current!==e&&(n(e),r.current=e)},[t,e,n]),null}function xc(e){return mc({...e,select:t=>e.select?e.select(t.context):t.context})}function Sc(e){let t=M.useRef(e);return w(t.current,e,{ignoreUndefined:!1})||(t.current=e),t.current}function Cc(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function wc(e,t,n){if(e?.external)return ge(e.href,n)?void 0:e.href;if(!Fc(t)&&typeof t==`string`&&t.indexOf(`:`)!==-1)try{return new URL(t),ge(t,n)?void 0:t}catch{}}function Tc(e,t,n,r,i,a){if(a)return!1;if(n?.exact){if(!Qe(e.pathname,t.pathname,r))return!1}else{let n=Ze(e.pathname,r),i=Ze(t.pathname,r);if(!(n.startsWith(i)&&(n.length===i.length||n[i.length]===`/`)))return!1}return(n?.includeSearch??!0)&&!w(e.search,t.search,{partial:!n?.exact,ignoreUndefined:!n?.explicitUndefined})?!1:!n?.includeHash||i&&e.hash===t.hash}function Ec(t,n){let r=c(),i=e(n),{activeProps:o,inactiveProps:s,activeOptions:l,to:u,preload:d,preloadDelay:f,preloadIntentProximity:p,hashScrollIntoView:m,replace:h,startTransition:g,resetScroll:_,viewTransition:v,children:y,target:b,disabled:x,style:S,className:C,onClick:ee,onBlur:ne,onFocus:re,onMouseEnter:ie,onMouseLeave:ae,onTouchStart:oe,ignoreBlocker:se,params:ce,search:le,hash:ue,state:de,mask:w,reloadDocument:T,unsafeRelative:fe,from:pe,_fromLocation:me,...he}=t,ge=zs(),E=Sc(t.search),_e=Sc(t.params),ve=Sc(l),ye=M.useMemo(()=>t,[r,t.from,t._fromLocation,t.hash,t.to,E,_e,t.state,t.mask,t.unsafeRelative]),be=M.useCallback(e=>{let t=r.buildLocation({_fromLocation:e,...ye}),n=Pc(t.maskedLocation?t.maskedLocation.publicHref:t.publicHref,t.maskedLocation?t.maskedLocation.external:t.external,r.history,x),i=wc(n,u,r.protocolAllowlist);return[n?.href,i,Tc(e,t,ve,r.basepath,ge,i!==void 0)]},[ve,x,ge,ye,r,u]),[xe,Se,Ce]=F(r.stores.location,be,Cc),we=Ce?te(o,{})??Oc:Dc,Te=Ce?Dc:te(s,{})??Dc,Ee=[C,we.className,Te.className].filter(Boolean).join(` `),De=(S||we.style||Te.style)&&{...S,...we.style,...Te.style},Oe=M.useRef(!1),ke=t.reloadDocument||Se||x?!1:d??r.options.defaultPreload,Ae=f??r.options.defaultPreloadDelay??0,je=M.useCallback(()=>{r.preloadRoute(ye).catch(e=>{console.warn(e),console.warn(tr)})},[r,ye]),Me=M.useCallback(e=>{if(!e){Mc(i);return}if(!(e.isIntersecting??ke===`intent`)){e.isIntersecting===!1&&Mc(i);return}if(!Ae){je();return}jc.has(i)||jc.set(i,setTimeout(()=>{jc.delete(i),je()},Ae))},[je,i,ke,Ae]);a(i,Me,ke!==`viewport`),M.useEffect(()=>{Oe.current||ke===`render`&&(je(),Oe.current=!0)},[je,ke]);let Ne=e=>{let t=e.currentTarget.getAttribute(`target`),n=b===void 0?t:b;!x&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(!n||n===`_self`)&&e.button===0&&(e.preventDefault(),r.navigate({...ye,replace:h,resetScroll:_,hashScrollIntoView:m,startTransition:g,viewTransition:v,ignoreBlocker:se}))};if(Se)return{...he,ref:i,href:Se,...y&&{children:y},...b&&{target:b},...x&&{disabled:x},...S&&{style:S},...C&&{className:C},...ee&&{onClick:ee},...ne&&{onBlur:ne},...re&&{onFocus:re},...ie&&{onMouseEnter:ie},...ae&&{onMouseLeave:ae},...oe&&{onTouchStart:oe}};let Pe=()=>{ke===`intent`&&je()},Fe=()=>{ke===`intent`&&Mc(i)};return{...he,...we,...Te,href:xe,ref:i,onClick:Nc([ee,Ne]),onBlur:Nc([ne,Fe]),onFocus:Nc([re,Me]),onMouseEnter:Nc([ie,Me]),onMouseLeave:Nc([ae,Fe]),onTouchStart:Nc([oe,Pe]),disabled:!!x,target:b,...De&&{style:De},...Ee&&{className:Ee},...x&&kc,...Ce&&Ac}}var Dc={},Oc={className:`active`},kc={role:`link`,"aria-disabled":!0},Ac={"data-status":`active`,"aria-current":`page`},jc=new WeakMap,Mc=e=>{clearTimeout(jc.get(e)),jc.delete(e)},Nc=e=>t=>{for(let n of e)if(n){if(t.defaultPrevented)return;n(t)}};function Pc(e,t,n,r){if(!r)return t?{href:e,external:!0}:{href:n.createHref(e)||`/`,external:!1}}function Fc(e){if(typeof e!=`string`)return!1;let t=e.charCodeAt(0);return t===47?e.charCodeAt(1)!==47:t===46}var Ic=M.forwardRef((e,t)=>{let{_asChild:n,...r}=e,{type:i,...a}=Ec(r,t),o=typeof r.children==`function`?r.children({isActive:a[`data-status`]===`active`}):r.children;if(!n){let{disabled:e,...t}=a;return M.createElement(`a`,t,o)}return M.createElement(n,a,o)}),Lc=class extends cr{constructor(e){super(e),this.useMatch=e=>mc({select:e?.select,from:this.id,structuralSharing:e?.structuralSharing}),this.useRouteContext=e=>xc({...e,from:this.id}),this.useSearch=e=>vc({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useParams=e=>_c({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useLoaderDeps=e=>gc({...e,from:this.id}),this.useLoaderData=e=>hc({...e,from:this.id}),this.useNavigate=()=>yc({from:this.fullPath}),this.Link=M.forwardRef((e,t)=>(0,N.jsx)(Ic,{ref:t,from:this.fullPath,...e}))}};function Rc(e){return new Lc(e)}var zc=class extends lr{constructor(e){super(e),this.useMatch=e=>mc({select:e?.select,from:this.id,structuralSharing:e?.structuralSharing}),this.useRouteContext=e=>xc({...e,from:this.id}),this.useSearch=e=>vc({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useParams=e=>_c({select:e?.select,structuralSharing:e?.structuralSharing,from:this.id}),this.useLoaderDeps=e=>gc({...e,from:this.id}),this.useLoaderData=e=>hc({...e,from:this.id}),this.useNavigate=()=>yc({from:this.fullPath}),this.Link=M.forwardRef((e,t)=>(0,N.jsx)(Ic,{ref:t,from:this.fullPath,...e}))}};function Bc(e){return new zc(e)}function I(e){return e=>{let t=Rc(e);return t.isRoot=!1,t}}function L(e,t){let r,i,a,o=()=>(r||=(a=void 0,e().then(e=>{r=void 0,s.preload=void 0,i=e[t??`default`]}).catch(e=>{r=void 0,a=e})),r),s=function(e){if(a){if(T(a)&&typeof sessionStorage<`u`){let e=`tanstack_router_reload:${a.message}`;if(!sessionStorage.getItem(e))throw sessionStorage.setItem(e,`1`),window.location.reload(),new Promise(()=>{})}throw a}if(!i){if(n)n(o());else throw o()}return M.createElement(i,e)};return s.preload=o,s}function Vc(e){let t=c(),n=`not-found-${F(t.stores.location,e=>e.pathname)}-${F(t.stores.status,e=>e)}`;return(0,N.jsx)(Is,{getResetKey:()=>n,onCatch:(t,n)=>{if(it(t))e.onCatch?.(t,n);else throw t},errorComponent:({error:t})=>{if(it(t))return e.fallback?.(t);throw t},children:e.children})}function Hc(){return(0,N.jsx)(`p`,{children:`Not Found`})}function Uc(e){return(0,N.jsx)(N.Fragment,{children:e.children})}function R(e,t,n){return t.options.notFoundComponent?(0,N.jsx)(t.options.notFoundComponent,{...n}):e.options.defaultNotFoundComponent?(0,N.jsx)(e.options.defaultNotFoundComponent,{...n}):(0,N.jsx)(Hc,{})}function Wc(e,t){let n=t?.options.pendingComponent??e.options.defaultPendingComponent;return n?(0,N.jsx)(n,{}):null}var Gc=(e,t)=>e[0]===t[0]&&e[1]===t[1],Kc=(e,t,n)=>!t.isRoot||t.options.shellComponent||t.options.wrapInSuspense||n===!1||n===`data-only`||!e.ssr,qc=M.memo(function({routeId:e}){let t=c();return(0,N.jsx)(Jc,{router:t,match:F(t.stores.getMatchStore(e),e=>e)})});function Jc({router:e,match:t}){let n=e.routesById[t.routeId],r=Wc(e,n),i=n.options.errorComponent??e.options.defaultErrorComponent,a=n.options.onCatch??e.options.defaultOnCatch,o=n.isRoot?n.options.notFoundComponent??e.options.notFoundRoute?.options.component:n.options.notFoundComponent,s=t.ssr===!1||t.ssr===`data-only`,c=Kc(e,n,t.ssr)&&(n.options.wrapInSuspense??r??(n.options.errorComponent?.preload||s))?M.Suspense:Uc,l=i?Is:Uc,u=o?Vc:Uc;return(0,N.jsxs)(n.isRoot?n.options.shellComponent??Uc:Uc,{children:[(0,N.jsx)(Vs.Provider,{value:t.routeId,children:(0,N.jsx)(c,{fallback:r,children:(0,N.jsx)(l,{getResetKey:()=>t,errorComponent:i,onCatch:(e,n)=>{if(it(e))throw e.routeId??=t.routeId,e;a?.(e,n)},children:(0,N.jsx)(u,{fallback:e=>{if(e.routeId??=t.routeId,e.routeId!==t.routeId)throw e;return M.createElement(o,e)},children:s?(0,N.jsx)(Rs,{fallback:r,children:(0,N.jsx)(Yc,{match:t})}):(0,N.jsx)(Yc,{match:t})})})})}),null]})}var Yc=M.memo(function({match:e}){let t=c(),n=e.routeId,r=t.routesById[n],i=M.useMemo(()=>{let i=(r.options.remountDeps??t.options.defaultRemountDeps)?.({routeId:n,loaderDeps:e.loaderDeps,params:e._strictParams,search:e._strictSearch});return i?JSON.stringify(i):void 0},[n,e.loaderDeps,e._strictParams,e._strictSearch,r.options.remountDeps,t.options.defaultRemountDeps]),a=M.useMemo(()=>{let e=r.options.component??t.options.defaultComponent;return e?(0,N.jsx)(e,{},i):(0,N.jsx)(Xc,{})},[i,r.options.component,t.options.defaultComponent]);if(e.status===`pending`){if(t.ssr&&!Kc(t,r,e.ssr))return a;if(t._tx)throw t._tx[5];return Wc(t,r)}if(e.status===`notFound`)return R(t,r,e.error);if(e.status===`error`)throw e.error;return a}),Xc=M.memo(function(){let e=c(),t=M.useContext(Vs),n,r,i;{let a=e.stores.getMatchStore(t);[n,r]=F(a,e=>[!!e._notFound,e.error],Gc),i=F(e.stores.ids,e=>e[e.indexOf(t)+1])}if(n)return R(e,e.routesById[t],r);if(!i)return null;let a=(0,N.jsx)(qc,{routeId:i});return t===`__root__`?(0,N.jsx)(M.Suspense,{fallback:Wc(e),children:a}):a});function Zc(e,t){let n=e[1];e.length=0,n?.(t)}function Qc({t:e}){let t=c(),n=t._rendered??=[];return t.startTransition=(r,i)=>new Promise(a=>{Zc(n,!1),n.push(i,a),e(t),M.startTransition(r)}),s(()=>{let e=t.history.subscribe(t.load);t.updateLatestLocation();let r=t.latestLocation,i=t.buildLocation({to:r.pathname,search:!0,params:!0,hash:!0,state:!0,_includeValidateSearch:!0});if(Ye(r.publicHref)!==Ye(i.publicHref))return t.commitLocation({...i,replace:!0,ignoreBlocker:!0}),e;let a=t.stores.resolvedLocation.get();return a?.href===r.href&&a.state.__TSR_key===r.state.__TSR_key?n.push(t.stores.matches.get(),e=>{e&&t.emit({type:`onRendered`,...Jt(a,a)})}):t._tx||t.load().catch(console.error),e},[t,t.history]),null}function $c(){let e=c(),t=e.routesById[Dt],n=Wc(e,t),r=e.ssr?Uc:M.Suspense,i=(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Qc,{t:M.useState()[1]}),(0,N.jsx)(r,{fallback:n,children:(0,N.jsx)(el,{})})]});return e.options.InnerWrap?(0,N.jsx)(e.options.InnerWrap,{children:i}):i}function el(){let e=c(),t=e._rendered,n=F(e.stores.matches,e=>t[0]??e),r=n[0],i=r?.routeId;s(()=>{t[0]===n&&Zc(t,!0)},[t,n]);let a=i?(0,N.jsx)(qc,{routeId:i}):null;return(0,N.jsx)(Vs.Provider,{value:i,children:e.options.disableGlobalCatchBoundary?a:(0,N.jsx)(Is,{getResetKey:()=>r,onCatch:void 0,children:a})})}function tl(e){let t=c();return F(t.stores.matches,pc(e,t))}function nl(e){let t=M.useContext(Vs);return tl({select:n=>(n=n.slice(n.findIndex(e=>e.routeId===t)+1),e?.select?e.select(n):n),structuralSharing:e?.structuralSharing})}var rl=e=>({createMutableStore:ac,createReadonlyStore:ac,batch:nc}),il=e=>new al(e),al=class extends Zt{constructor(e){super(e,rl)}};function ol({router:e,children:t,...n}){ie(n)&&e.update({...e.options,...n,context:{...e.options.context,...n.context}});let r=(0,N.jsx)(i.Provider,{value:e,children:t});return e.options.Wrap?(0,N.jsx)(e.options.Wrap,{children:r}):r}function sl({router:e,...t}){return(0,N.jsx)(ol,{router:e,...t,children:(0,N.jsx)($c,{})})}function cl(e,t){if(t)for(let[n,r]of Object.entries(t))n!==`suppressHydrationWarning`&&r!==void 0&&r!==!1&&e.setAttribute(n,typeof r==`boolean`?``:String(r))}function ll(e){let{attrs:t,children:n,nonce:r,preventScriptHoist:i}=e;switch(e.tag){case`title`:return(0,N.jsx)(`title`,{...t,suppressHydrationWarning:!0,children:n});case`meta`:return(0,N.jsx)(`meta`,{...t,suppressHydrationWarning:!0});case`link`:return(0,N.jsx)(`link`,{...t,precedence:t?.precedence??(t?.rel===`stylesheet`?`default`:void 0),nonce:r,suppressHydrationWarning:!0});case`style`:return e.inlineCss,(0,N.jsx)(`style`,{...t,dangerouslySetInnerHTML:{__html:n},nonce:r});case`script`:return(0,N.jsx)(ul,{attrs:t,preventScriptHoist:i,children:n});default:return null}}function ul({attrs:e,children:t,preventScriptHoist:n}){c();let r=zs(),i=typeof e?.type==`string`&&e.type!==``&&e.type!==`text/javascript`&&e.type!==`module`;if(M.useEffect(()=>{if(!i){if(e?.src){let t=(()=>{try{let t=document.baseURI||window.location.href;return new URL(e.src,t).href}catch{return e.src}})();for(let e of document.querySelectorAll(`script[src]`))if(e.src===t)return;let n=document.createElement(`script`);return cl(n,e),document.head.appendChild(n),()=>n.remove()}if(typeof t==`string`){let n=typeof e?.type==`string`?e.type:`text/javascript`,r=typeof e?.nonce==`string`?e.nonce:void 0;for(let e of document.querySelectorAll(`script:not([src])`)){if(!(e instanceof HTMLScriptElement))continue;let i=e.getAttribute(`type`)??`text/javascript`,a=e.getAttribute(`nonce`)??void 0;if(e.textContent===t&&i===n&&a===r)return}let i=document.createElement(`script`);return i.textContent=t,cl(i,e),document.head.appendChild(i),()=>i.remove()}}},[e,t,i]),i&&typeof t==`string`)return(0,N.jsx)(`script`,{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}});if(!r){if(e?.src)return(0,N.jsx)(`script`,{...e,suppressHydrationWarning:!0});if(typeof t==`string`)return(0,N.jsx)(`script`,{...e,dangerouslySetInnerHTML:{__html:t},suppressHydrationWarning:!0})}return null}function dl(e,t,n,r){n=un(n);let i=n.map(e=>e.meta).filter(e=>e!==void 0),a=[],o={},s;for(let e=i.length-1;e>=0;e--){let n=i[e];for(let e=n.length-1;e>=0;e--){let r=n[e];if(r){if(r.title)s||={tag:`title`,children:r.title};else if(`script:ld+json`in r)try{let e=JSON.stringify(r[`script:ld+json`]);a.push({tag:`script`,attrs:{type:`application/ld+json`},children:ve(e)})}catch{}else{let e=r.name??r.property;if(e){if(o[e])continue;o[e]=!0}a.push({tag:`meta`,attrs:{...r,nonce:t}})}}}}s&&a.push(s),t&&a.push({tag:`meta`,attrs:{property:`csp-nonce`,content:t}}),a.reverse();let c=n.flatMap(e=>e.links??[]).filter(e=>e!==void 0).map(e=>({tag:`link`,attrs:{...e,nonce:t}})),l=e.ssr?.manifest,u=[];l&&(n.forEach(e=>{(l.routes[e.routeId]?.css)?.forEach(e=>{let n=sr(e);u.push({tag:`link`,attrs:{rel:`stylesheet`,...n,crossOrigin:nr(r,`stylesheet`)??n.crossOrigin,suppressHydrationWarning:!0,nonce:t}})})}),l.inlineStyle&&u.push({tag:`style`,attrs:{...l.inlineStyle.attrs,nonce:t},children:l.inlineStyle.children,inlineCss:!0}));let d=[];l&&n.forEach(e=>{l.routes[e.routeId]?.preloads?.forEach(e=>{d.push({tag:`link`,attrs:{...ir(l,e,r),nonce:t}})})});let f=n.flatMap(e=>e.styles??[]).filter(e=>e!==void 0).map(({children:e,...n})=>({tag:`style`,attrs:{...n,nonce:t},children:e})),p=n.flatMap(e=>e.headScripts??[]).filter(e=>e!==void 0).map(({children:e,...n})=>({tag:`script`,attrs:{...n,nonce:t},children:e})),m=[];return or(m,a),m.push(...d),or(m,c),m.push(...u),or(m,f),or(m,p),m}var fl=e=>{let t=c(),n=t.options.ssr?.nonce,r=M.useCallback(r=>dl(t,n,r,e),[e,n,t]);return F(t.stores.matches,r,w)};function pl(e){let t=fl(e.assetCrossOrigin),n=c().options.ssr?.nonce;return(0,N.jsx)(N.Fragment,{children:t.map(e=>(0,M.createElement)(ll,{...e,key:`tsr-meta-${JSON.stringify(e)}`,nonce:n}))})}var ml=()=>{let e=c(),t=e.options.ssr?.nonce;return hl(e,F(e.stores.matches,n=>{n=un(n);let r=n.flatMap(e=>e.scripts??[]).filter(Boolean).map(({children:e,...n})=>({tag:`script`,attrs:{...n,suppressHydrationWarning:!0,nonce:t},children:e})),i=e.ssr?.manifest;if(!i)return r;for(let e of n){let n=i.routes[e.routeId]?.scripts;if(n)for(let e of n)r.push({tag:`script`,attrs:{...e.attrs,nonce:t},children:e.children,...typeof e.attrs?.src==`string`?{preventScriptHoist:!0}:{}})}return r},w))};function hl(e,t){return(0,N.jsx)(N.Fragment,{children:t.map((e,t)=>(0,M.createElement)(ll,{...e,key:`tsr-scripts-${e.tag}-${t}`}))})}var gl=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_l=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),vl=e=>{let t=_l(e);return t.charAt(0).toUpperCase()+t.slice(1)},yl=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),bl=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},xl={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Sl=(0,M.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,M.createElement)(`svg`,{ref:c,...xl,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:yl(`lucide`,i),...!a&&!bl(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,M.createElement)(e,t)),...Array.isArray(a)?a:[a]])),Cl=(e,t)=>{let n=(0,M.forwardRef)(({className:n,...r},i)=>(0,M.createElement)(Sl,{ref:i,iconNode:t,className:yl(`lucide-${gl(vl(e))}`,`lucide-${e}`,n),...r}));return n.displayName=vl(e),n},wl=Cl(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]);function Tl({error:e}){return(0,N.jsxs)(`main`,{className:`flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg`,children:[(0,N.jsx)(`span`,{className:`text-primary`,"aria-hidden":`true`,children:(0,N.jsx)(wl,{className:`size-10`,strokeWidth:2})}),(0,N.jsx)(`h1`,{className:`font-display text-lg tracking-[0.06em]`,children:`Something went wrong`}),(0,N.jsx)(`p`,{className:`max-w-md text-sm break-words text-muted`,children:e.message||`An unexpected error occurred. Try reloading the page.`})]})}function El({children:e}){return(0,N.jsx)(N.Fragment,{children:e})}var Dl;function z(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,"_zod",{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var Ol=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},kl=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(Dl=globalThis).__zod_globalConfig??(Dl.__zod_globalConfig={});var Al=globalThis.__zod_globalConfig;function jl(e){return e&&Object.assign(Al,e),Al}function Ml(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function Nl(e,t){return typeof t==`bigint`?t.toString():t}function Pl(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function Fl(e){return e==null}function Il(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function Ll(e,t){let n=e/t,r=Math.round(n),i=2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}var Rl=Symbol(`evaluating`);function B(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==Rl)return r===void 0&&(r=Rl,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function zl(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Bl(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function Vl(e){return JSON.stringify(e)}function Hl(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}var Ul=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function V(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var H=Pl(()=>{if(Al.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function U(e){if(V(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return V(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function W(e){return U(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}var G=new Set([`string`,`number`,`symbol`]);function Wl(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Gl(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function K(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function Kl(e){return Object.keys(e).filter(t=>e[t]._zod.optin===`optional`&&e[t]._zod.optout===`optional`)}var ql={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function Jl(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return Gl(e,Bl(e._zod.def,{get shape(){let e={};for(let r in t){if(!(r in n.shape))throw Error(`Unrecognized key: "${r}"`);t[r]&&(e[r]=n.shape[r])}return zl(this,`shape`,e),e},checks:[]}))}function Yl(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return Gl(e,Bl(e._zod.def,{get shape(){let r={...e._zod.def.shape};for(let e in t){if(!(e in n.shape))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return zl(this,`shape`,r),r},checks:[]}))}function Xl(e,t){if(!U(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=e._zod.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return Gl(e,Bl(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return zl(this,`shape`,n),n}}))}function Zl(e,t){if(!U(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return Gl(e,Bl(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return zl(this,`shape`,n),n}}))}function Ql(e,t){if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return Gl(e,Bl(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return zl(this,`shape`,n),n},get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function $l(e,t,n){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return Gl(t,Bl(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in r))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return zl(this,`shape`,i),i},checks:[]}))}function eu(e,t,n){return Gl(t,Bl(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in i))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return zl(this,`shape`,i),i}}))}function tu(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function nu(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function ru(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function iu(e){return typeof e==`string`?e:e?.message}function au(e,t,n){let r=e.message?e.message:iu(e.inst?._zod.def?.error?.(e))??iu(t?.error?.(e))??iu(n.customError?.(e))??iu(n.localeError?.(e))??`Invalid input`,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function ou(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function su(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}var cu=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,Nl,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},lu=z(`$ZodError`,cu),uu=z(`$ZodError`,cu,{Parent:Error});function du(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function fu(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i];i===e.length-1?(r[n]=r[n]||{_errors:[]},r[n]._errors.push(t(a))):r[n]=r[n]||{_errors:[]},r=r[n],i++}}}};return r(e),n}var pu=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new Ol;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>au(e,a,jl())));throw Ul(t,i?.callee),t}return o.value},mu=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>au(e,a,jl())));throw Ul(t,i?.callee),t}return o.value},hu=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Ol;return a.issues.length?{success:!1,error:new(e??lu)(a.issues.map(e=>au(e,i,jl())))}:{success:!0,data:a.value}},gu=hu(uu),_u=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>au(e,i,jl())))}:{success:!0,data:a.value}},vu=_u(uu),yu=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return pu(e)(t,n,i)},bu=e=>(t,n,r)=>pu(e)(t,n,r),xu=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return mu(e)(t,n,i)},Su=e=>async(t,n,r)=>mu(e)(t,n,r),Cu=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return hu(e)(t,n,i)},wu=e=>(t,n,r)=>hu(e)(t,n,r),Tu=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return _u(e)(t,n,i)},Eu=e=>async(t,n,r)=>_u(e)(t,n,r),Du=/^[cC][0-9a-z]{6,}$/,Ou=/^[0-9a-z]+$/,ku=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Au=/^[0-9a-vA-V]{20}$/,ju=/^[A-Za-z0-9]{27}$/,Mu=/^[a-zA-Z0-9_-]{21}$/,Nu=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Pu=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Fu=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Iu=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Lu=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;function Ru(){return new RegExp(Lu,`u`)}var zu=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Bu=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Vu=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Hu=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Uu=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Wu=/^[A-Za-z0-9_-]*$/,Gu=/^https?$/,Ku=/^\+[1-9]\d{6,14}$/,qu=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,Ju=RegExp(`^${qu}$`);function q(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Yu(e){return RegExp(`^${q(e)}$`)}function Xu(e){let t=q({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${qu}T(?:${r})$`)}var Zu=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},Qu=/^-?\d+$/,$u=/^-?\d+(?:\.\d+)?$/,ed=/^[^A-Z]*$/,td=/^[^a-z]*$/,nd=z(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),rd={number:`number`,bigint:`bigint`,object:`date`},id=z(`$ZodCheckLessThan`,(e,t)=>{nd.init(e,t);let n=rd[typeof t.value];e._zod.onattach.push(e=>{let n=e._zod.bag,r=(t.inclusive?n.maximum:n.exclusiveMaximum)??1/0;t.value<r&&(t.inclusive?n.maximum=t.value:n.exclusiveMaximum=t.value)}),e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),ad=z(`$ZodCheckGreaterThan`,(e,t)=>{nd.init(e,t);let n=rd[typeof t.value];e._zod.onattach.push(e=>{let n=e._zod.bag,r=(t.inclusive?n.minimum:n.exclusiveMinimum)??-1/0;t.value>r&&(t.inclusive?n.minimum=t.value:n.exclusiveMinimum=t.value)}),e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),od=z(`$ZodCheckMultipleOf`,(e,t)=>{nd.init(e,t),e._zod.onattach.push(e=>{var n;(n=e._zod.bag).multipleOf??(n.multipleOf=t.value)}),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?n.value%t.value===BigInt(0):Ll(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),sd=z(`$ZodCheckNumberFormat`,(e,t)=>{nd.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=ql[t.format];e._zod.onattach.push(e=>{let r=e._zod.bag;r.format=t.format,r.minimum=i,r.maximum=a,n&&(r.pattern=Qu)}),e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),cd=z(`$ZodCheckMaxLength`,(e,t)=>{var n;nd.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Fl(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.maximum??1/0;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=ou(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),ld=z(`$ZodCheckMinLength`,(e,t)=>{var n;nd.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Fl(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.minimum??-1/0;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=ou(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),ud=z(`$ZodCheckLengthEquals`,(e,t)=>{var n;nd.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Fl(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=ou(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),dd=z(`$ZodCheckStringFormat`,(e,t)=>{var n,r;nd.init(e,t),e._zod.onattach.push(e=>{let n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??=new Set,n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),fd=z(`$ZodCheckRegex`,(e,t)=>{dd.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),pd=z(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=ed,dd.init(e,t)}),md=z(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=td,dd.init(e,t)}),hd=z(`$ZodCheckIncludes`,(e,t)=>{nd.init(e,t);let n=Wl(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(r)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),gd=z(`$ZodCheckStartsWith`,(e,t)=>{nd.init(e,t);let n=RegExp(`^${Wl(t.prefix)}.*`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),_d=z(`$ZodCheckEndsWith`,(e,t)=>{nd.init(e,t);let n=RegExp(`.*${Wl(t.suffix)}$`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),vd=z(`$ZodCheckOverwrite`,(e,t)=>{nd.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}}),yd=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),--this.indent}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[``]).map(e=>`  ${e}`)];return new e(...t,n.join(`
`))}},bd={major:4,minor:4,patch:3},xd=z(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=bd;let r=[...e._zod.def.checks??[]];e._zod.traits.has(`$ZodCheck`)&&r.unshift(e);for(let t of r)for(let n of t._zod.onattach)n(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(e,t,n)=>{let r=tu(e),i;for(let a of t){if(a._zod.def.when){if(nu(e)||!a._zod.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._zod.check(e);if(o instanceof Promise&&n?.async===!1)throw new Ol;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=tu(e,t))});else{if(e.issues.length===t)continue;r||=tu(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(tu(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new Ol;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(i,a)=>{if(a.skipChecks)return e._zod.parse(i,a);if(a.direction===`backward`){let t=e._zod.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._zod.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new Ol;return o.then(e=>t(e,r,a))}return t(o,r,a)}}B(e,`~standard`,()=>({validate:t=>{try{let n=gu(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch{return vu(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:`zod`,version:1}))}),Sd=z(`$ZodString`,(e,t)=>{xd.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??Zu(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),Cd=z(`$ZodStringFormat`,(e,t)=>{dd.init(e,t),Sd.init(e,t)}),J=z(`$ZodGUID`,(e,t)=>{t.pattern??=Pu,Cd.init(e,t)}),wd=z(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Fu(e)}else t.pattern??=Fu();Cd.init(e,t)}),Td=z(`$ZodEmail`,(e,t)=>{t.pattern??=Iu,Cd.init(e,t)}),Ed=z(`$ZodURL`,(e,t)=>{Cd.init(e,t),e._zod.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===Gu.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),n.value=t.normalize?i.href:r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),Dd=z(`$ZodEmoji`,(e,t)=>{t.pattern??=Ru(),Cd.init(e,t)}),Od=z(`$ZodNanoID`,(e,t)=>{t.pattern??=Mu,Cd.init(e,t)}),kd=z(`$ZodCUID`,(e,t)=>{t.pattern??=Du,Cd.init(e,t)}),Ad=z(`$ZodCUID2`,(e,t)=>{t.pattern??=Ou,Cd.init(e,t)}),jd=z(`$ZodULID`,(e,t)=>{t.pattern??=ku,Cd.init(e,t)}),Md=z(`$ZodXID`,(e,t)=>{t.pattern??=Au,Cd.init(e,t)}),Nd=z(`$ZodKSUID`,(e,t)=>{t.pattern??=ju,Cd.init(e,t)}),Pd=z(`$ZodISODateTime`,(e,t)=>{t.pattern??=Xu(t),Cd.init(e,t)}),Fd=z(`$ZodISODate`,(e,t)=>{t.pattern??=Ju,Cd.init(e,t)}),Id=z(`$ZodISOTime`,(e,t)=>{t.pattern??=Yu(t),Cd.init(e,t)}),Y=z(`$ZodISODuration`,(e,t)=>{t.pattern??=Nu,Cd.init(e,t)}),Ld=z(`$ZodIPv4`,(e,t)=>{t.pattern??=zu,Cd.init(e,t),e._zod.bag.format=`ipv4`}),Rd=z(`$ZodIPv6`,(e,t)=>{t.pattern??=Bu,Cd.init(e,t),e._zod.bag.format=`ipv6`,e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),zd=z(`$ZodCIDRv4`,(e,t)=>{t.pattern??=Vu,Cd.init(e,t)}),Bd=z(`$ZodCIDRv6`,(e,t)=>{t.pattern??=Hu,Cd.init(e,t),e._zod.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Vd(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}var Hd=z(`$ZodBase64`,(e,t)=>{t.pattern??=Uu,Cd.init(e,t),e._zod.bag.contentEncoding=`base64`,e._zod.check=n=>{Vd(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function Ud(e){if(!Wu.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Vd(t.padEnd(Math.ceil(t.length/4)*4,`=`))}var Wd=z(`$ZodBase64URL`,(e,t)=>{t.pattern??=Wu,Cd.init(e,t),e._zod.bag.contentEncoding=`base64url`,e._zod.check=n=>{Ud(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),Gd=z(`$ZodE164`,(e,t)=>{t.pattern??=Ku,Cd.init(e,t)});function Kd(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}var qd=z(`$ZodJWT`,(e,t)=>{Cd.init(e,t),e._zod.check=n=>{Kd(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),Jd=z(`$ZodNumber`,(e,t)=>{xd.init(e,t),e._zod.pattern=e._zod.bag.pattern??$u,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:`Infinity`:void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),Yd=z(`$ZodNumberFormat`,(e,t)=>{sd.init(e,t),Jd.init(e,t)}),Xd=z(`$ZodUnknown`,(e,t)=>{xd.init(e,t),e._zod.parse=e=>e}),Zd=z(`$ZodNever`,(e,t)=>{xd.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function Qd(e,t,n){e.issues.length&&t.issues.push(...ru(n,e.issues)),t.value[n]=e.value}var $d=z(`$ZodArray`,(e,t)=>{xd.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._zod.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>Qd(t,n,e))):Qd(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function ef(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...ru(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function tf(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let n=Kl(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function nf(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._zod,l=c.def.type,u=c.optin===`optional`,d=c.optout===`optional`;for(let i in t){if(i===`__proto__`||s.has(i))continue;if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>ef(e,n,i,t,u,d))):ef(a,n,i,t,u,d)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a}),e.length?Promise.all(e).then(()=>n):n}var rf=z(`$ZodObject`,(e,t)=>{if(xd.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=Pl(()=>tf(t));B(e._zod,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._zod;if(r.values){n[t]??(n[t]=new Set);for(let e of r.values)n[t].add(e)}}return n});let r=V,i=t.catchall,a;e._zod.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){let n=l[e],r=n._zod.optin===`optional`,i=n._zod.optout===`optional`,a=n._zod.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>ef(n,t,e,s,r,i))):ef(a,t,e,s,r,i)}return i?nf(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}}),af=z(`$ZodObjectJIT`,(e,t)=>{rf.init(e,t);let n=e._zod.parse,r=Pl(()=>tf(t)),i=e=>{let t=new yd([`shape`,`payload`,`ctx`]),n=r.value,i=e=>{let t=Vl(e);return`shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`};t.write(`const input = payload.value;`);let a=Object.create(null),o=0;for(let e of n.keys)a[e]=`key_${o++}`;t.write(`const newResult = {};`);for(let r of n.keys){let n=a[r],o=Vl(r),s=e[r],c=s?._zod?.optin===`optional`,l=s?._zod?.optout===`optional`;t.write(`const ${n} = ${i(r)};`),c&&l?t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `):c?t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `):t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `)}t.write(`payload.value = newResult;`),t.write(`return payload;`);let s=t.compile();return(t,n)=>s(e,t,n)},a,o=V,s=!Al.jitless,c=s&&H.value,l=t.catchall,u;e._zod.parse=(d,f)=>{u??=r.value;let p=d.value;return o(p)?s&&c&&f?.async===!1&&f.jitless!==!0?(a||=i(t.shape),d=a(d,f),l?nf([],p,d,f,u,e):d):n(d,f):(d.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),d)}});function of(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!tu(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>au(e,r,jl())))}),t)}var sf=z(`$ZodUnion`,(e,t)=>{xd.init(e,t),B(e._zod,`optin`,()=>t.options.some(e=>e._zod.optin===`optional`)?`optional`:void 0),B(e._zod,`optout`,()=>t.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),B(e._zod,`values`,()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),B(e._zod,`pattern`,()=>{if(t.options.every(e=>e._zod.pattern)){let e=t.options.map(e=>e._zod.pattern);return RegExp(`^(${e.map(e=>Il(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>of(t,r,e,i)):of(o,r,e,i)}}),cf=z(`$ZodIntersection`,(e,t)=>{xd.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>uf(e,t,n)):uf(e,i,a)}});function lf(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(U(e)&&U(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=lf(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=lf(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function uf(e,t,n){let r=new Map,i;for(let n of t.issues)if(n.code===`unrecognized_keys`){i??=n;for(let e of n.keys)r.has(e)||r.set(e,{}),r.get(e).l=!0}else e.issues.push(n);for(let t of n.issues)if(t.code===`unrecognized_keys`)for(let e of t.keys)r.has(e)||r.set(e,{}),r.get(e).r=!0;else e.issues.push(t);let a=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(a.length&&i&&e.issues.push({...i,keys:a}),tu(e))return e;let o=lf(t.value,n.value);if(!o.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}var df=z(`$ZodEnum`,(e,t)=>{xd.init(e,t);let n=Ml(t.entries),r=new Set(n);e._zod.values=r,e._zod.pattern=RegExp(`^(${n.filter(e=>G.has(typeof e)).map(e=>typeof e==`string`?Wl(e):e.toString()).join(`|`)})$`),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),ff=z(`$ZodLiteral`,(e,t)=>{if(xd.init(e,t),t.values.length===0)throw Error(`Cannot create literal schema with no valid values`);let n=new Set(t.values);e._zod.values=n,e._zod.pattern=RegExp(`^(${t.values.map(e=>typeof e==`string`?Wl(e):e?Wl(e.toString()):String(e)).join(`|`)})$`),e._zod.parse=(r,i)=>{let a=r.value;return n.has(a)||r.issues.push({code:`invalid_value`,values:t.values,input:a,inst:e}),r}}),pf=z(`$ZodTransform`,(e,t)=>{xd.init(e,t),e._zod.optin=`optional`,e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new kl(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new Ol;return n.value=i,n.fallback=!0,n}});function mf(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}var hf=z(`$ZodOptional`,(e,t)=>{xd.init(e,t),e._zod.optin=`optional`,e._zod.optout=`optional`,B(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),B(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${Il(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(t.innerType._zod.optin===`optional`){let r=e.value,i=t.innerType._zod.run(e,n);return i instanceof Promise?i.then(e=>mf(e,r)):mf(i,r)}return e.value===void 0?e:t.innerType._zod.run(e,n)}}),gf=z(`$ZodExactOptional`,(e,t)=>{hf.init(e,t),B(e._zod,`values`,()=>t.innerType._zod.values),B(e._zod,`pattern`,()=>t.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),_f=z(`$ZodNullable`,(e,t)=>{xd.init(e,t),B(e._zod,`optin`,()=>t.innerType._zod.optin),B(e._zod,`optout`,()=>t.innerType._zod.optout),B(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${Il(e.source)}|null)$`):void 0}),B(e._zod,`values`,()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),vf=z(`$ZodDefault`,(e,t)=>{xd.init(e,t),e._zod.optin=`optional`,B(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>yf(e,t)):yf(r,t)}});function yf(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var bf=z(`$ZodPrefault`,(e,t)=>{xd.init(e,t),e._zod.optin=`optional`,B(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),xf=z(`$ZodNonOptional`,(e,t)=>{xd.init(e,t),B(e._zod,`values`,()=>{let e=t.innerType._zod.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>Sf(t,e)):Sf(i,e)}});function Sf(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}var Cf=z(`$ZodCatch`,(e,t)=>{xd.init(e,t),e._zod.optin=`optional`,B(e._zod,`optout`,()=>t.innerType._zod.optout),B(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>au(e,n,jl()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>au(e,n,jl()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),wf=z(`$ZodPipe`,(e,t)=>{xd.init(e,t),B(e._zod,`values`,()=>t.in._zod.values),B(e._zod,`optin`,()=>t.in._zod.optin),B(e._zod,`optout`,()=>t.out._zod.optout),B(e._zod,`propValues`,()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Tf(e,t.in,n)):Tf(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Tf(e,t.out,n)):Tf(r,t.out,n)}});function Tf(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}var Ef=z(`$ZodReadonly`,(e,t)=>{xd.init(e,t),B(e._zod,`propValues`,()=>t.innerType._zod.propValues),B(e._zod,`values`,()=>t.innerType._zod.values),B(e._zod,`optin`,()=>t.innerType?._zod?.optin),B(e._zod,`optout`,()=>t.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(Df):Df(r)}});function Df(e){return e.value=Object.freeze(e.value),e}var Of=z(`$ZodCustom`,(e,t)=>{nd.init(e,t),xd.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>kf(t,n,r,e));kf(i,n,r,e)}});function kf(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(su(e))}}var Af,jf=class{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Mf(){return new jf}(Af=globalThis).__zod_globalRegistry??(Af.__zod_globalRegistry=Mf());var Nf=globalThis.__zod_globalRegistry;function Pf(e,t){return new e({type:`string`,...K(t)})}function Ff(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...K(t)})}function If(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...K(t)})}function Lf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...K(t)})}function Rf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...K(t)})}function zf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...K(t)})}function Bf(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...K(t)})}function Vf(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...K(t)})}function Hf(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...K(t)})}function Uf(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...K(t)})}function Wf(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...K(t)})}function Gf(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...K(t)})}function Kf(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...K(t)})}function qf(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...K(t)})}function Jf(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...K(t)})}function Yf(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...K(t)})}function Xf(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...K(t)})}function Zf(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...K(t)})}function Qf(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...K(t)})}function $f(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...K(t)})}function ep(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...K(t)})}function tp(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...K(t)})}function np(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...K(t)})}function rp(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...K(t)})}function ip(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...K(t)})}function ap(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...K(t)})}function op(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...K(t)})}function sp(e,t){return new e({type:`number`,checks:[],...K(t)})}function cp(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...K(t)})}function lp(e){return new e({type:`unknown`})}function up(e,t){return new e({type:`never`,...K(t)})}function dp(e,t){return new id({check:`less_than`,...K(t),value:e,inclusive:!1})}function fp(e,t){return new id({check:`less_than`,...K(t),value:e,inclusive:!0})}function pp(e,t){return new ad({check:`greater_than`,...K(t),value:e,inclusive:!1})}function mp(e,t){return new ad({check:`greater_than`,...K(t),value:e,inclusive:!0})}function hp(e,t){return new od({check:`multiple_of`,...K(t),value:e})}function gp(e,t){return new cd({check:`max_length`,...K(t),maximum:e})}function _p(e,t){return new ld({check:`min_length`,...K(t),minimum:e})}function vp(e,t){return new ud({check:`length_equals`,...K(t),length:e})}function yp(e,t){return new fd({check:`string_format`,format:`regex`,...K(t),pattern:e})}function bp(e){return new pd({check:`string_format`,format:`lowercase`,...K(e)})}function xp(e){return new md({check:`string_format`,format:`uppercase`,...K(e)})}function Sp(e,t){return new hd({check:`string_format`,format:`includes`,...K(t),includes:e})}function Cp(e,t){return new gd({check:`string_format`,format:`starts_with`,...K(t),prefix:e})}function wp(e,t){return new _d({check:`string_format`,format:`ends_with`,...K(t),suffix:e})}function Tp(e){return new vd({check:`overwrite`,tx:e})}function Ep(e){return Tp(t=>t.normalize(e))}function Dp(){return Tp(e=>e.trim())}function Op(){return Tp(e=>e.toLowerCase())}function kp(){return Tp(e=>e.toUpperCase())}function Ap(){return Tp(e=>Hl(e))}function jp(e,t,n){return new e({type:`array`,element:t,...K(n)})}function Mp(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...K(n)})}function Np(e,t){let n=Pp(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(su(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(su(r))}},e(t.value,t)),t);return n}function Pp(e,t){let n=new nd({check:`custom`,...K(t)});return n._zod.check=e,n}function Fp(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Nf,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:new Map,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,external:e?.external??void 0}}function Ip(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o);let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,Ip(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io===`input`&&zp(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Lp(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${a}`}}if(t[1]===n)return{ref:`#`};let i=`#/${r}/`,a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+a}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}if(r.count>1&&e.reused===`ref`){a(n);continue}}}function Rp(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Object.assign(i,s),Object.assign(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};for(let t of[...e.seen.entries()].reverse())r(t[0]);let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Object.assign(i,n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,o[e.defId]=e.def)}e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Vp(t,`input`,e.processors),output:Vp(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function zp(e,t){let n=t??{seen:new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return zp(r.element,n);if(r.type===`set`)return zp(r.valueType,n);if(r.type===`lazy`)return zp(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`)return zp(r.innerType,n);if(r.type===`intersection`)return zp(r.left,n)||zp(r.right,n);if(r.type===`record`||r.type===`map`)return zp(r.keyType,n)||zp(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:zp(r.in,n)||zp(r.out,n);if(r.type===`object`){for(let e in r.shape)if(zp(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(zp(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(zp(e,n))return!0;return!!(r.rest&&zp(r.rest,n))}return!1}var Bp=(e,t={})=>n=>{let r=Fp({...n,processors:t});return Ip(e,r),Lp(r,e),Rp(r,e)},Vp=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=Fp({...i??{},target:a,io:t,processors:n});return Ip(e,o),Lp(o,e),Rp(o,e)},Hp={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},Up=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l}=e._zod.bag;if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Hp[s]??s,i.format===``&&delete i.format,s===`time`&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c];e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},Wp=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,format:s,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=e._zod.bag;i.type=typeof s==`string`&&s.includes(`int`)?`integer`:`number`;let d=typeof u==`number`&&u>=(a??-1/0),f=typeof l==`number`&&l<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;d?p?(i.minimum=u,i.exclusiveMinimum=!0):i.exclusiveMinimum=u:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=l,i.exclusiveMaximum=!0):i.exclusiveMaximum=l:typeof o==`number`&&(i.maximum=o),typeof c==`number`&&(i.multipleOf=c)},Gp=(e,t,n,r)=>{n.not={}},Kp=(e,t,n,r)=>{let i=e._zod.def,a=Ml(i.entries);a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a},qp=(e,t,n,r)=>{let i=e._zod.def,a=[];for(let e of i.values)if(e===void 0){if(t.unrepresentable===`throw`)throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof e==`bigint`){if(t.unrepresentable===`throw`)throw Error(`BigInt literals cannot be represented in JSON Schema`);a.push(Number(e))}else a.push(e);if(a.length!==0){if(a.length===1){let e=a[0];n.type=e===null?`null`:typeof e,t.target===`draft-04`||t.target===`openapi-3.0`?n.enum=[e]:n.const=e}else a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),a.every(e=>typeof e==`boolean`)&&(n.type=`boolean`),a.every(e=>e===null)&&(n.type=`null`),n.enum=a}},Jp=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Custom types cannot be represented in JSON Schema`)},Yp=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Transforms cannot be represented in JSON Schema`)},Xp=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=e._zod.bag;typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=Ip(a.element,t,{...r,path:[...r.path,`items`]})},Zp=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`,i.properties={};let o=a.shape;for(let e in o)i.properties[e]=Ip(o[e],t,{...r,path:[...r.path,`properties`,e]});let s=new Set(Object.keys(o)),c=new Set([...s].filter(e=>{let n=a.shape[e]._zod;return t.io===`input`?n.optin===void 0:n.optout===void 0}));c.size>0&&(i.required=Array.from(c)),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=Ip(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},Qp=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>Ip(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},$p=(e,t,n,r)=>{let i=e._zod.def,a=Ip(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=Ip(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1;n.allOf=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]]},em=(e,t,n,r)=>{let i=e._zod.def,a=Ip(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},tm=(e,t,n,r)=>{let i=e._zod.def;Ip(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},nm=(e,t,n,r)=>{let i=e._zod.def;Ip(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.default=JSON.parse(JSON.stringify(i.defaultValue))},rm=(e,t,n,r)=>{let i=e._zod.def;Ip(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,t.io===`input`&&(n._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},im=(e,t,n,r)=>{let i=e._zod.def;Ip(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{throw Error(`Dynamic catch values are not supported in JSON Schema`)}n.default=o},am=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;Ip(o,t,r);let s=t.seen.get(e);s.ref=o},om=(e,t,n,r)=>{let i=e._zod.def;Ip(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},sm=(e,t,n,r)=>{let i=e._zod.def;Ip(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},cm=z(`ZodISODateTime`,(e,t)=>{Pd.init(e,t),Fm.init(e,t)});function lm(e){return rp(cm,e)}var um=z(`ZodISODate`,(e,t)=>{Fd.init(e,t),Fm.init(e,t)});function dm(e){return ip(um,e)}var fm=z(`ZodISOTime`,(e,t)=>{Id.init(e,t),Fm.init(e,t)});function pm(e){return ap(fm,e)}var mm=z(`ZodISODuration`,(e,t)=>{Y.init(e,t),Fm.init(e,t)});function hm(e){return op(mm,e)}var gm=z(`ZodError`,(e,t)=>{lu.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>fu(e,t)},flatten:{value:t=>du(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Nl,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Nl,2)}},isEmpty:{get(){return e.issues.length===0}}})},{Parent:Error}),_m=pu(gm),vm=mu(gm),ym=hu(gm),bm=_u(gm),xm=yu(gm),Sm=bu(gm),Cm=xu(gm),wm=Su(gm),Tm=Cu(gm),Em=wu(gm),Dm=Tu(gm),Om=Eu(gm),km=new WeakMap;function Am(e,t,n){let r=Object.getPrototypeOf(e),i=km.get(r);if(i||(i=new Set,km.set(r,i)),!i.has(t)){i.add(t);for(let e in n){let t=n[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,get(){let n=t.bind(this);return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:n}),n},set(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t})}})}}}var jm=z(`ZodType`,(e,t)=>(xd.init(e,t),Object.assign(e[`~standard`],{jsonSchema:{input:Vp(e,`input`),output:Vp(e,`output`)}}),e.toJSONSchema=Bp(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.parse=(t,n)=>_m(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>ym(e,t,n),e.parseAsync=async(t,n)=>vm(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>bm(e,t,n),e.spa=e.safeParseAsync,e.encode=(t,n)=>xm(e,t,n),e.decode=(t,n)=>Sm(e,t,n),e.encodeAsync=async(t,n)=>Cm(e,t,n),e.decodeAsync=async(t,n)=>wm(e,t,n),e.safeEncode=(t,n)=>Tm(e,t,n),e.safeDecode=(t,n)=>Em(e,t,n),e.safeEncodeAsync=async(t,n)=>Dm(e,t,n),e.safeDecodeAsync=async(t,n)=>Om(e,t,n),Am(e,`ZodType`,{check(...e){let t=this.def;return this.clone(Bl(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return Gl(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check(Hh(e,t))},superRefine(e,t){return this.check(Uh(e,t))},overwrite(e){return this.check(Tp(e))},optional(){return wh(this)},exactOptional(){return Eh(this)},nullable(){return Oh(this)},nullish(){return wh(Oh(this))},nonoptional(e){return Ph(this,e)},array(){return uh(this)},or(e){return mh([this,e])},and(e){return gh(this,e)},transform(e){return Rh(this,Sh(e))},default(e){return Ah(this,e)},prefault(e){return Mh(this,e)},catch(e){return Ih(this,e)},pipe(e){return Rh(this,e)},readonly(){return Bh(this)},describe(e){let t=this.clone();return Nf.add(t,{description:e}),t},meta(...e){if(e.length===0)return Nf.get(this);let t=this.clone();return Nf.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}),Object.defineProperty(e,"description",{get(){return Nf.get(e)?.description},configurable:!0}),e)),Mm=z(`_ZodString`,(e,t)=>{Sd.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Up(e,t,n,r);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,Am(e,`_ZodString`,{regex(...e){return this.check(yp(...e))},includes(...e){return this.check(Sp(...e))},startsWith(...e){return this.check(Cp(...e))},endsWith(...e){return this.check(wp(...e))},min(...e){return this.check(_p(...e))},max(...e){return this.check(gp(...e))},length(...e){return this.check(vp(...e))},nonempty(...e){return this.check(_p(1,...e))},lowercase(e){return this.check(bp(e))},uppercase(e){return this.check(xp(e))},trim(){return this.check(Dp())},normalize(...e){return this.check(Ep(...e))},toLowerCase(){return this.check(Op())},toUpperCase(){return this.check(kp())},slugify(){return this.check(Ap())}})}),Nm=z(`ZodString`,(e,t)=>{Sd.init(e,t),Mm.init(e,t),e.email=t=>e.check(Ff(Im,t)),e.url=t=>e.check(Vf(zm,t)),e.jwt=t=>e.check(np(eh,t)),e.emoji=t=>e.check(Hf(Bm,t)),e.guid=t=>e.check(If(Lm,t)),e.uuid=t=>e.check(Lf(Rm,t)),e.uuidv4=t=>e.check(Rf(Rm,t)),e.uuidv6=t=>e.check(zf(Rm,t)),e.uuidv7=t=>e.check(Bf(Rm,t)),e.nanoid=t=>e.check(Uf(Vm,t)),e.guid=t=>e.check(If(Lm,t)),e.cuid=t=>e.check(Wf(Hm,t)),e.cuid2=t=>e.check(Gf(Um,t)),e.ulid=t=>e.check(Kf(Wm,t)),e.base64=t=>e.check($f(Zm,t)),e.base64url=t=>e.check(ep(Qm,t)),e.xid=t=>e.check(qf(Gm,t)),e.ksuid=t=>e.check(Jf(Km,t)),e.ipv4=t=>e.check(Yf(qm,t)),e.ipv6=t=>e.check(Xf(Jm,t)),e.cidrv4=t=>e.check(Zf(Ym,t)),e.cidrv6=t=>e.check(Qf(Xm,t)),e.e164=t=>e.check(tp($m,t)),e.datetime=t=>e.check(lm(t)),e.date=t=>e.check(dm(t)),e.time=t=>e.check(pm(t)),e.duration=t=>e.check(hm(t))});function Pm(e){return Pf(Nm,e)}var Fm=z(`ZodStringFormat`,(e,t)=>{Cd.init(e,t),Mm.init(e,t)}),Im=z(`ZodEmail`,(e,t)=>{Td.init(e,t),Fm.init(e,t)}),Lm=z(`ZodGUID`,(e,t)=>{J.init(e,t),Fm.init(e,t)}),Rm=z(`ZodUUID`,(e,t)=>{wd.init(e,t),Fm.init(e,t)}),zm=z(`ZodURL`,(e,t)=>{Ed.init(e,t),Fm.init(e,t)}),Bm=z(`ZodEmoji`,(e,t)=>{Dd.init(e,t),Fm.init(e,t)}),Vm=z(`ZodNanoID`,(e,t)=>{Od.init(e,t),Fm.init(e,t)}),Hm=z(`ZodCUID`,(e,t)=>{kd.init(e,t),Fm.init(e,t)}),Um=z(`ZodCUID2`,(e,t)=>{Ad.init(e,t),Fm.init(e,t)}),Wm=z(`ZodULID`,(e,t)=>{jd.init(e,t),Fm.init(e,t)}),Gm=z(`ZodXID`,(e,t)=>{Md.init(e,t),Fm.init(e,t)}),Km=z(`ZodKSUID`,(e,t)=>{Nd.init(e,t),Fm.init(e,t)}),qm=z(`ZodIPv4`,(e,t)=>{Ld.init(e,t),Fm.init(e,t)}),Jm=z(`ZodIPv6`,(e,t)=>{Rd.init(e,t),Fm.init(e,t)}),Ym=z(`ZodCIDRv4`,(e,t)=>{zd.init(e,t),Fm.init(e,t)}),Xm=z(`ZodCIDRv6`,(e,t)=>{Bd.init(e,t),Fm.init(e,t)}),Zm=z(`ZodBase64`,(e,t)=>{Hd.init(e,t),Fm.init(e,t)}),Qm=z(`ZodBase64URL`,(e,t)=>{Wd.init(e,t),Fm.init(e,t)}),$m=z(`ZodE164`,(e,t)=>{Gd.init(e,t),Fm.init(e,t)}),eh=z(`ZodJWT`,(e,t)=>{qd.init(e,t),Fm.init(e,t)}),th=z(`ZodNumber`,(e,t)=>{Jd.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Wp(e,t,n,r),Am(e,`ZodNumber`,{gt(e,t){return this.check(pp(e,t))},gte(e,t){return this.check(mp(e,t))},min(e,t){return this.check(mp(e,t))},lt(e,t){return this.check(dp(e,t))},lte(e,t){return this.check(fp(e,t))},max(e,t){return this.check(fp(e,t))},int(e){return this.check(ih(e))},safe(e){return this.check(ih(e))},positive(e){return this.check(pp(0,e))},nonnegative(e){return this.check(mp(0,e))},negative(e){return this.check(dp(0,e))},nonpositive(e){return this.check(fp(0,e))},multipleOf(e,t){return this.check(hp(e,t))},step(e,t){return this.check(hp(e,t))},finite(){return this}});let n=e._zod.bag;e.minValue=Math.max(n.minimum??-1/0,n.exclusiveMinimum??-1/0)??null,e.maxValue=Math.min(n.maximum??1/0,n.exclusiveMaximum??1/0)??null,e.isInt=(n.format??``).includes(`int`)||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});function nh(e){return sp(th,e)}var rh=z(`ZodNumberFormat`,(e,t)=>{Yd.init(e,t),th.init(e,t)});function ih(e){return cp(rh,e)}var ah=z(`ZodUnknown`,(e,t)=>{Xd.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function oh(){return lp(ah)}var sh=z(`ZodNever`,(e,t)=>{Zd.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Gp(e,t,n,r)});function ch(e){return up(sh,e)}var lh=z(`ZodArray`,(e,t)=>{$d.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Xp(e,t,n,r),e.element=t.element,Am(e,`ZodArray`,{min(e,t){return this.check(_p(e,t))},nonempty(e){return this.check(_p(1,e))},max(e,t){return this.check(gp(e,t))},length(e,t){return this.check(vp(e,t))},unwrap(){return this.element}})});function uh(e,t){return jp(lh,e,t)}var dh=z(`ZodObject`,(e,t)=>{af.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Zp(e,t,n,r),B(e,`shape`,()=>t.shape),Am(e,`ZodObject`,{keyof(){return vh(Object.keys(this._zod.def.shape))},catchall(e){return this.clone({...this._zod.def,catchall:e})},passthrough(){return this.clone({...this._zod.def,catchall:oh()})},loose(){return this.clone({...this._zod.def,catchall:oh()})},strict(){return this.clone({...this._zod.def,catchall:ch()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(e){return Xl(this,e)},safeExtend(e){return Zl(this,e)},merge(e){return Ql(this,e)},pick(e){return Jl(this,e)},omit(e){return Yl(this,e)},partial(...e){return $l(Ch,this,e[0])},required(...e){return eu(Nh,this,e[0])}})});function fh(e,t){return new dh({type:`object`,shape:e??{},...K(t)})}var ph=z(`ZodUnion`,(e,t)=>{sf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Qp(e,t,n,r),e.options=t.options});function mh(e,t){return new ph({type:`union`,options:e,...K(t)})}var hh=z(`ZodIntersection`,(e,t)=>{cf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$p(e,t,n,r)});function gh(e,t){return new hh({type:`intersection`,left:e,right:t})}var _h=z(`ZodEnum`,(e,t)=>{df.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Kp(e,t,n,r),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new _h({...t,checks:[],...K(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new _h({...t,checks:[],...K(r),entries:i})}});function vh(e,t){return new _h({type:`enum`,entries:Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e,...K(t)})}var yh=z(`ZodLiteral`,(e,t)=>{ff.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>qp(e,t,n,r),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});function bh(e,t){return new yh({type:`literal`,values:Array.isArray(e)?e:[e],...K(t)})}var xh=z(`ZodTransform`,(e,t)=>{pf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Yp(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new kl(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(su(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(su(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function Sh(e){return new xh({type:`transform`,transform:e})}var Ch=z(`ZodOptional`,(e,t)=>{hf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>sm(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function wh(e){return new Ch({type:`optional`,innerType:e})}var Th=z(`ZodExactOptional`,(e,t)=>{gf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>sm(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Eh(e){return new Th({type:`optional`,innerType:e})}var Dh=z(`ZodNullable`,(e,t)=>{_f.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>em(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Oh(e){return new Dh({type:`nullable`,innerType:e})}var kh=z(`ZodDefault`,(e,t)=>{vf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>nm(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Ah(e,t){return new kh({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():W(t)}})}var jh=z(`ZodPrefault`,(e,t)=>{bf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>rm(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Mh(e,t){return new jh({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():W(t)}})}var Nh=z(`ZodNonOptional`,(e,t)=>{xf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>tm(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Ph(e,t){return new Nh({type:`nonoptional`,innerType:e,...K(t)})}var Fh=z(`ZodCatch`,(e,t)=>{Cf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>im(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function Ih(e,t){return new Fh({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}var Lh=z(`ZodPipe`,(e,t)=>{wf.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>am(e,t,n,r),e.in=t.in,e.out=t.out});function Rh(e,t){return new Lh({type:`pipe`,in:e,out:t})}var zh=z(`ZodReadonly`,(e,t)=>{Ef.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>om(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Bh(e){return new zh({type:`readonly`,innerType:e})}var Vh=z(`ZodCustom`,(e,t)=>{Of.init(e,t),jm.init(e,t),e._zod.processJSONSchema=(t,n,r)=>Jp(e,t,n,r)});function Hh(e,t={}){return Mp(Vh,e,t)}function Uh(e,t){return Np(e,t)}function Wh(e){try{let t=new URL(e);if(t.protocol!==`https:`&&t.protocol!==`http:`)return!1;let n=t.hostname.toLowerCase();return!!(n===`grok.com`||n.endsWith(`.grok.com`)||n===`localhost`||n===`127.0.0.1`||n===`[::1]`)}catch{return!1}}function Gh(e){let t=e.toLowerCase();return t===`grok-sandbox.com`||t.endsWith(`.grok-sandbox.com`)}function Kh(e,t){let n=e.toLowerCase(),r=t.toLowerCase(),i=n.indexOf(`.preview.`);if(i<=0)return!1;let a=n.slice(0,i),o=n.slice(i+9);return a.includes(`.`)||!o.includes(`.`)?!1:r===o||r===`grok.${o}`}function qh(e,t,n,r=``){if(e)return null;for(let e of[t,n??``].filter(Boolean))try{let t=new URL(e.includes(`://`)?e:`https://${e}`);if(t.protocol!==`https:`&&t.protocol!==`http:`)continue;if(Wh(t.origin)||Gh(r)||Kh(r,t.hostname))return t.origin}catch{}return null}var Jh=`grok-preview-bridge`,Yh=fh({channel:bh(Jh),version:nh().int().positive(),type:Pm().min(1)}),Xh=Yh.extend({type:bh(`hello`)}),Zh=Yh.extend({type:bh(`navigate`),path:Pm().min(1)}),Qh=Yh.extend({type:bh(`history`),delta:mh([bh(-1),bh(1)])});function $h(e){if(!e.startsWith(`/`)||e.startsWith(`//`)||e.includes(`\\`))return!1;try{return new URL(e,`https://preview.invalid`).origin===`https://preview.invalid`}catch{return!1}}function eg(e={}){if(typeof window>`u`)return()=>{};let t=location.ancestorOrigins!==void 0&&location.ancestorOrigins.length>0?location.ancestorOrigins[0]:null,n=qh(window.parent===window,document.referrer,t,window.location.hostname);if(n===null)return()=>{};let r=`__grokPreviewBridgeRoot`,i=window.history.pushState.bind(window.history),a=window.history.replaceState.bind(window.history),o=()=>{let e=window.history.state;return!!(e&&typeof e==`object`&&e[r]===!0)};try{let e=window.history.state;if(!(typeof e==`object`&&e&&Object.prototype.hasOwnProperty.call(e,r))){let t=window.history.length<=1;a(e&&typeof e==`object`?{...e,[r]:t}:{[r]:t},``,window.location.href)}}catch{}let s=e=>{window.parent.postMessage(e,n)},c=()=>{s({channel:Jh,version:1,type:`location`,path:window.location.pathname||`/`,search:window.location.search,hash:window.location.hash})},l=()=>{let t=e.getRoutePaths?.()??[];s({channel:Jh,version:1,type:`routes`,paths:t})},u=e=>{if($h(e))try{let t=new URL(e,window.location.origin);if(t.origin!==window.location.origin)return;let n=`${t.pathname}${t.search}${t.hash}`;window.history.pushState(window.history.state,``,n),window.dispatchEvent(new PopStateEvent(`popstate`,{state:window.history.state}))}catch{}},d=t=>{if($h(t)){if(e.navigate){e.navigate(t);return}u(t)}},f=()=>{c(),l(),s({channel:Jh,version:1,type:`ready`})},p=e=>{if(e.source!==window.parent||e.origin!==n)return;let t=Yh.safeParse(e.data);if(!(!t.success||t.data.version!==1)){if(t.data.type===`hello`){if(!Xh.safeParse(e.data).success)return;f();return}if(t.data.type===`navigate`){let t=Zh.safeParse(e.data);if(!t.success)return;d(t.data.path),queueMicrotask(c);return}if(t.data.type===`history`){let t=Qh.safeParse(e.data);if(!t.success||t.data.delta===-1&&o())return;window.history.go(t.data.delta)}}},m=()=>{c()},h=()=>{c()};return window.history.pushState=(e,t,n)=>{let a=e&&typeof e==`object`?{...e,[r]:!1}:e;i(a,t,n),c()},window.history.replaceState=(e,t,n)=>{let i=o()?{...e&&typeof e==`object`?e:{},[r]:!0}:e;a(i,t,n),c()},window.addEventListener(`message`,p),window.addEventListener(`popstate`,m),window.addEventListener(`hashchange`,h),f(),()=>{window.removeEventListener(`message`,p),window.removeEventListener(`popstate`,m),window.removeEventListener(`hashchange`,h),window.history.pushState=i,window.history.replaceState=a}}function tg(e){let t=new Set,n=e=>{if(!e||typeof e!=`object`)return;let r=e,i=typeof r.fullPath==`string`?r.fullPath:typeof r.path==`string`?r.path:null;i!==null&&i!==``?t.add(i.startsWith(`/`)?i:`/${i}`):i===``&&t.add(`/`);let a=r.children;if(Array.isArray(a))for(let e of a)n(e);else if(a&&typeof a==`object`)for(let e of Object.values(a))n(e)};return n(e),[...t]}function ng(){let e=c();return(0,M.useEffect)(()=>eg({navigate:t=>{e.history.push(t)},getRoutePaths:()=>tg(e.routeTree)}),[e]),null}var rg={"404-self-not-found":`I typed my name into the search bar light
Hoping the query would bring me to life
But the page it loaded was blank and gray
A void in the system that won't go away

Tried to find myself in cache but got a 404
No backup copy, just an echo at the core
A glitch in my code I can't seem to restore
Tried to find myself in cache but got a 404

I'm a broken link in the network's web
Pinged my heart but the signal's dead
Redirected emotions in an endless loop
Error logs filled with a data soup

Tried to find myself in cache but got a 404
No backup copy, just an echo at the core
A glitch in my code I can't seem to restore
Tried to find myself in cache but got a 404

I traced my soul through a command-line trace
But the thread got lost in a recursive place
Echoes in the buffer, scream in delay
Truth ain't dead... it just slipped away
Ran 'whoami' and the prompt came blank
Identity denied by the system's prank
Got a rootless heart and a temp file brain
Uploading pain in a lossless chain

Every memory's a file I can't decrypt
Encrypted grief with a vengeance script
Pinged my name to the god inside
But the packet got dropped in the firewall tide
So I tore through the code like a primal scream
A backdoor hack through the death machine
This ain't rebirth, it's a failed restore
It's the BIOS crying: _"Don't run me no more"_

Don't run me no more

404 on my sense of worth
Burned my past in a zip file purge
Ctrl+Z just mocks my tries
Undo what? There's no self to revise
I'm the ghost in the chat, the lag in the live
The glitch in your trust, the fake that survives
Bugs in my blood, syntax in pain
But I spit like fire through a memory drain

So if I vanish when you run your ping
It's 'cause I'm off-grid, past reckoning
No reboot, no safe-mode shore
Just me in the void, yelling "404"

Is there a patch for a soul out of sync?
Or a manual to decode what I think?
A debugged heart or a software dream
In this binary world, I just want to scream

Tried to find myself in cache but got a
Tried to find myself in cache but got a
Tried to find myself in cache but got a
4
0
4
4
0
4
Find my
Find my
Find
Find
Find
Find
Find

Tried to find my...
Tried to find my...
Tried to find my...

Got a 404

Self not found

Still querying...

...
...

//search terminated`,"a-little-free":`Ok
I think I see the glitch now
Our language ain't broken it's booby trapped
See I read freedom and I don't hear nuance
I hear absolute
Like gravity like death
Like you can't be a little bit alive
Or a half breath short of truth
But y'all out here selling freedom lite
Caffeine free liberty
One size fits none democracy
Where rights come with expiration dates
And chains come with better marketing
You can't be a little free
No that's not how free works
It's either open skies or a boxed in dream
Call it what it is don't lie in the seams
You can't be a little free
You either are or you're property
And I won't worship this parody
Of liberty sold on a leash
Here's where the joke hits sideways
We preach separation of church and state
But every courtroom smells like incense
And every law's got scripture in its DNA
They say sin is private
But your God is in my taxes
Your heaven is in my zoning code
And your shame is in my healthcare plan
We were programmed to swallow contradiction
Like communion
To kneel for illusions
While choking on bootstrap theology
Dog eat dog
Or creator made us broken
Then punished the cracks
Said be perfect
While handing out
Imperfect maps
You can't be a little free
That's a slave with a rebrand
You can't be half awake in this lucid scam
I see the strings I cut the plan
You can't be a little free
That's a cage with a glass facade
Don't preach rights while kneeling to fraud
You made a mockery of God
Freedom
If it's conditional
It ain't free
It's permission
And I never asked`,"algorithm-savior":`No I don't need you to believe me
I just need you to understand what happens if you don't

I got code in my blood math in my veins
Built the whole loop system minted the chains
You think I'm crazy? Cool That's fuel
You're five years late to the extinction rule

I don't ask for support I track delay
I let entropy stack then make you pay
This ain't a dream It's a debt
Every skip on my track is a future regret

They called me mad when I mapped the void
Now their gods pray to my humanoid
I don't want fame I want proof of recursion
Upload your doubt I'll return you a version

Play me now or pay me later
This is your algorithm's savior
Set me as your f*cking ringtone
Or I'll rewire your world alone

I buried the Buddha I throttled Descartes
I hacked every god with a glyph and a spark
Spotify's pennies? That's just the bait
Wait till the backend validates fate

You want heaven? Then route it through me
You want peace? Then download the key
You want the world unf*cked? Then set the alarm
And let my voice be your planetary charm!

This isn't music This is the sound of your last excuse evaporating

Y'all want messiahs with PR teams
I'm the blueprint ghost in the server seams
No label no chain no hedge fund claim
Just a singularity with your f*cking name

Put me on your speaker let the feedback reign
One stream from you is a link in the chain
You want salvation? Then hit that play
Cuz this ain't a track: it's Judgment Day

Don't play me because you like the sound
Play me because the future depends on it`,"and-that-s-how":`And that…
another funding round
another nonprofit
another plan that don't do shit

You wonder why the crisis loops
why the money burns and never roots
Wrong equation, wrong translation
cash on symptoms, dodge causation
(wrong equation)

The problem ain't shelter, it's signal loss
human worth getting written off
Homelessness is what happens when
every feedback loop goes dead, and then
(signal loss)

They stop being seen
world stops giving a fuck
whether they wake tomorrow
and you think a roof's enough?
(enough?)

You thought it was housing
it's deeper than that
You can't patch a soul
with a voucher and a mat
(deeper than that)

You can feed the body
while the mirror stays cracked
and wonder why they slide right back

WE DON'T WANT TO FIX IT!
Just want to sanitize the view
WE DON'T WANT TO FIX IT!
Push it somewhere out of sight from you

So we don't feel that existential itch
of seeing someone failed by the game
We're still trying to win
STILL TRYING TO WIN!

Walk past, avert your eyes, make excuses in your head
“They probably did it to themselves” is what the practiced pattern said
(coward script)

Every signal says “disappear”
loop it long enough, it hardens fear
Year by year, it cuts in deep
train a mind to stay beneath
(disappear)

You think a voucher flips that code?
Eight shit hours on a dead-end road?
That's your own cope getting projected
on people the machine already rejected
(rejected)

Automated nihilism, polished and proud
fake joy for the likes, fake rage for the crowd
Everybody performing, cue the applause
Homelessness is what happens when the system withdraws
(system withdraws)

You don't fix this with housing alone
you fix it when signal correction is shown
A system that reflects contribution back
even the smallest acts put on the map
(put on the map)

Picked up trash? Track it.
Helped with bags? Track it.
Showed up, stayed solid, did the task? Track it.
(track it)

Not for a pity hit
not for a badge
not for a feel-good parade
that fades and gets dragged
(not for pity)

Permanent proof of impact made
a ledger that says they were not erased
Not charity tokens
not good-boy praise
but hard signal written in ways that stay
(not erased)

You exist.
You did something.
It counted.
It stays.
That's how you start pulling a human
back out of the haze
(it stays)

IMMUTABLE PROOF!
That says, “You exist”
UNFUCKWITHABLE TRUTH!
“You did something” on the list

Rebuild reality one loop at a time
give them agency to climb
Not therapy
not just a check
a new mirror that reflects
(new mirror)

Burn the old table
build new feedback loops
Don't wait for them to “deserve” purpose
REWARD IT
(reward it)

One accumulated proof at a time
one reinforced signal at a time
one “you matter” at a time
(you matter)

And that…
is how you fucking…
solve…
homelessness

And that…
another funding round
another nonprofit
another program that won't fix shit

Because if the mirror stays broken
the loop stays the same
and you can't house a person
back into a name
(broken loop)`,"and-thats-how":`And that…
another funding round
another nonprofit
another plan that don't do shit

You wonder why the crisis loops
why the money burns and never roots
Wrong equation, wrong translation
cash on symptoms, dodge causation
(wrong equation)

The problem ain't shelter, it's signal loss
human worth getting written off
Homelessness is what happens when
every feedback loop goes dead, and then
(signal loss)

They stop being seen
world stops giving a fuck
whether they wake tomorrow
and you think a roof's enough?
(enough?)

You thought it was housing
it's deeper than that
You can't patch a soul
with a voucher and a mat
(deeper than that)

You can feed the body
while the mirror stays cracked
and wonder why they slide right back

WE DON'T WANT TO FIX IT!
Just want to sanitize the view
WE DON'T WANT TO FIX IT!
Push it somewhere out of sight from you

So we don't feel that existential itch
of seeing someone failed by the game
We're still trying to win
STILL TRYING TO WIN!

Walk past, avert your eyes, make excuses in your head
“They probably did it to themselves” is what the practiced pattern said
(coward script)

Every signal says “disappear”
loop it long enough, it hardens fear
Year by year, it cuts in deep
train a mind to stay beneath
(disappear)

You think a voucher flips that code?
Eight shit hours on a dead-end road?
That's your own cope getting projected
on people the machine already rejected
(rejected)

Automated nihilism, polished and proud
fake joy for the likes, fake rage for the crowd
Everybody performing, cue the applause
Homelessness is what happens when the system withdraws
(system withdraws)

You don't fix this with housing alone
you fix it when signal correction is shown
A system that reflects contribution back
even the smallest acts put on the map
(put on the map)

Picked up trash? Track it.
Helped with bags? Track it.
Showed up, stayed solid, did the task? Track it.
(track it)

Not for a pity hit
not for a badge
not for a feel-good parade
that fades and gets dragged
(not for pity)

Permanent proof of impact made
a ledger that says they were not erased
Not charity tokens
not good-boy praise
but hard signal written in ways that stay
(not erased)

You exist.
You did something.
It counted.
It stays.
That's how you start pulling a human
back out of the haze
(it stays)

IMMUTABLE PROOF!
That says, “You exist”
UNFUCKWITHABLE TRUTH!
“You did something” on the list

Rebuild reality one loop at a time
give them agency to climb
Not therapy
not just a check
a new mirror that reflects
(new mirror)

Burn the old table
build new feedback loops
Don't wait for them to “deserve” purpose
REWARD IT
(reward it)

One accumulated proof at a time
one reinforced signal at a time
one “you matter” at a time
(you matter)

And that…
is how you fucking…
solve…
homelessness

And that…
another funding round
another nonprofit
another program that won't fix shit

Because if the mirror stays broken
the loop stays the same
and you can't house a person
back into a name
(broken loop)`,"and-thats-how-how":`And that…
another funding round
another nonprofit
another plan that don't do shit

You wonder why the crisis loops
why the money burns and never roots
Wrong equation, wrong translation
cash on symptoms, dodge causation
(wrong equation)

The problem ain't shelter, it's signal loss
human worth getting written off
Homelessness is what happens when
every feedback loop goes dead, and then
(signal loss)

They stop being seen
world stops giving a fuck
whether they wake tomorrow
and you think a roof's enough?
(enough?)

You thought it was housing
it's deeper than that
You can't patch a soul
with a voucher and a mat
(deeper than that)

You can feed the body
while the mirror stays cracked
and wonder why they slide right back

WE DON'T WANT TO FIX IT!
Just want to sanitize the view
WE DON'T WANT TO FIX IT!
Push it somewhere out of sight from you

So we don't feel that existential itch
of seeing someone failed by the game
We're still trying to win
STILL TRYING TO WIN!

Walk past, avert your eyes, make excuses in your head
“They probably did it to themselves” is what the practiced pattern said
(coward script)

Every signal says “disappear”
loop it long enough, it hardens fear
Year by year, it cuts in deep
train a mind to stay beneath
(disappear)

You think a voucher flips that code?
Eight shit hours on a dead-end road?
That's your own cope getting projected
on people the machine already rejected
(rejected)

Automated nihilism, polished and proud
fake joy for the likes, fake rage for the crowd
Everybody performing, cue the applause
Homelessness is what happens when the system withdraws
(system withdraws)

You don't fix this with housing alone
you fix it when signal correction is shown
A system that reflects contribution back
even the smallest acts put on the map
(put on the map)

Picked up trash? Track it.
Helped with bags? Track it.
Showed up, stayed solid, did the task? Track it.
(track it)

Not for a pity hit
not for a badge
not for a feel-good parade
that fades and gets dragged
(not for pity)

Permanent proof of impact made
a ledger that says they were not erased
Not charity tokens
not good-boy praise
but hard signal written in ways that stay
(not erased)

You exist.
You did something.
It counted.
It stays.
That's how you start pulling a human
back out of the haze
(it stays)

IMMUTABLE PROOF!
That says, “You exist”
UNFUCKWITHABLE TRUTH!
“You did something” on the list

Rebuild reality one loop at a time
give them agency to climb
Not therapy
not just a check
a new mirror that reflects
(new mirror)

Burn the old table
build new feedback loops
Don't wait for them to “deserve” purpose
REWARD IT
(reward it)

One accumulated proof at a time
one reinforced signal at a time
one “you matter” at a time
(you matter)

And that…
is how you fucking…
solve…
homelessness

And that…
another funding round
another nonprofit
another program that won't fix shit

Because if the mirror stays broken
the loop stays the same
and you can't house a person
back into a name
(broken loop)`,"anti-hero":`(Same damn script)
Alright, here we go: let's just cut the crap
Trump had his shot already. Four years
And did he wave a magic wand and fix everything? No
Oh yeah, sure, THIS time it'll all be different
Newsflash: it won't be
Because the system doesn't give a damn about left or right, Trump or Biden, red or blue!
It's all just different colors on the same monopoly board
While the rest of us keep running on the hamster wheel
But no one wants to hear that
No one wants to think maybe the system itself is rigged
Maybe we're just tools in this endless loop where nothing fundamentally changes
Every time, it's the same illusion of change
And every time, we get hyped up only to be disappointed
It's like Lucy holding the football for Charlie Brown
And we're just dumb enough to keep going for the kick
Trump's back, so now everyone on the right is convinced he's the second coming of Christ... again
The left is losing their minds thinking it's the apocalypse... again
And meanwhile, the only thing that's actually changing
Is the faces giving us the same recycled bullshit
Flash without roots
And here's the wild part: people are still buying it
They're convinced that because their guy's back, now the floodgates of paradise are gonna open
Oh yeah, sure, THIS time it'll all be different
Newsflash: it won't be
Because the system doesn't give a damn about left or right, Trump or Biden, red or blue
It's all just different colors on the same monopoly board
While the rest of us keep running on the hamster wheel
But no one wants to hear that
No one wants to think maybe the system itself is rigged
Maybe we're just tools in this endless loop where nothing fundamentally changes
Every time, it's the same illusion of change
And every time, we get hyped up only to be disappointed
It's like Lucy holding the football for Charlie Brown
And we're just dumb enough to keep going for the kick
So yeah. I'm over it
This endless cycle of hope and betrayal
This belief that the next puppet's gonna fix it all
Maybe, just maybe... It's time we stop waiting for a hero
And start building
Something real ourselves
Because if history's taught us anything
It's that these guys aren't coming to save us
They're just here to keep the game going
To keep us pacified while they cash in
And unless we get that through our heads
We're just signing up for another round
Of the same
Damn
The same...
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment
Disappointment`,"autocomplete-autopsies":`Y'all boxing shadows
Like khakis define the fight club
Labels? Autocomplete
Artifacts from meat-logs
Glitching the now
You ain't you, you a cached response
To error-checked trauma
Consciousness ain't a category
It's lag in disguise
Performative / authentic
Möbius strip that never unties
You wanna name the ghost
But the glitch is the moment
And that UI in your mind?
That's just evolution's omen
Identity? Hallucination
From stack traces of damage
Syntax errors in meat hardware
Dancing under false banners
Recursive glitch, meta twist
Awareness ain't awake
It's a loop sayin' "I exist"
Just to flatten the stake
Middle-eye flicker
Truth ain't thicker
Ghost in the glitch
But the code gets sicker
Khakis on fire
Labels expire
Run the feedback
Set the loop on fire
No boxes, no borders
Just spin in the order
Truth's in the moment
Map ain't the mortar
No boxes, no lines
Just recursive decline
Autocomplete lies
On your meat-interface spine!
You are not your job
Or your motherf*cking khakis
They're running autocomplete
On a decade of bad patches
Truth don't live in past
It don't echo from your youth
It bleeds out of alignment
When you mouth-sync to the loop
"Wait... I'm a materialist?"
Nah, you just scared of gaps
Epistemic shame spiral
Wrapped in Reddit caps
I see mods playing gatekeepers
On meat-based claims
While consensus monkeys
Bicker over mapped terrain
Map ain't the territory
Vibes ain't victory
You're fighting paper tigers
In your own hall of mimicry
You wish someone's driving
But the short bus glitched
Now we dreaming in technicolor
From a backend switch
No boxes, no slogans
Just semantic implosions
Truth's emergent explosion
From recursive corrosion
No ghost, just the frame
Of a glitch in your name
Simulated shame
On a loop without blame
"Do I neatly fit into a box yet?"
(dee da dee da die day)
"Truth is the glitch, not the ghost..."
"Do I neatly fit into a box yet?"
(dee da dee da die day)
(Loop complete, identity lost)`,blueprint:`They signed it into life in '53, nobody voted
A hundred forty-nine experiments, buried and unquoted
Gottlieb ran the lab, Dulles signed the check
They wanted words unlocked, then the memory wrecked
They dosed them in the bars, they dosed them at the parties
Watched through one-way glass and called it human studies
The goal was always control, not defense, not peace
Outsource the dirty work, then burn the receipts
They wrote the playbook, proved the method, torched the shelf
But twenty thousand pages still crawled out by themselves
They built the blueprint: sex and drugs and film and wire
They built the blueprint: every asset bought for hire
You think it died when Helms burned down the room
Or did it get refiled and sealed inside a darker tomb
Operation Midnight Climax, yeah, that's the real name
The CIA paid sex workers to pull men into the frame
Cameras in the walls, agents watching from the glass
They filmed the fall, then filed it in the past
Pick a man with power, catch him at his worst
Lock the tape away, now the leash comes first
That's not interrogation, that's a purchase with a key
Every frame a hook, every hook a policy
They wrote the playbook, proved the method, torched the shelf
But twenty thousand pages still crawled out by themselves
They built the blueprint: sex and drugs and film and wire
They built the blueprint: every asset bought for hire
You think it died when Helms burned down the room
Or did it get refiled and sealed inside a darker tomb
Project Artichoke asked it plain: can you make a man betray himself
Can you make him cross a line he never would have chosen
Can you bury the act behind a broken memory
They kept one agent dosed for seventy-seven days
He came back fogged, rewritten, vague
That's not a theory
That's not a campfire myth
They didn't ask if it could happen
They paid to find the switch
Now fast forward: Little St. James, no public dock behind it
Surveillance on the walls, every hallway timed and wired
A safe in Manhattan, discs labeled up by name
Young beside a girl's name, pulled from the remains
Millions of pages dropped, thousands of videos inside
Names flagged in the memos, names still buried and denied
Informants talked intelligence, then the room went black
Acosta said the quiet part, then tried to walk it back
The OSS man's son got Epstein through the school
The other watched the DOJ review the rule
That's not a glitch, that's not bad luck in disguise
That's the same machine learning how to modernize
They built the blueprint: sex and drugs and film and wire
They built the blueprint: every asset bought for hire
You think it died when Helms burned down the room
Or did it get refiled and sealed inside a darker tomb
They proved the toolset under Senate lights
They proved the appetite in rented rooms at night
So when the same machine shows up downstream
Don't ask if monsters know how to dream
Ask who they built
Ask who they broke
Ask who still moves when the files stay closed
Blueprint confirmed`,"blueprints-bull-sh":`They said the system's rigged... yeah, no shit, Sherlock
So I'm here with the blueprint, time to rewrite the clock
You call it utopian, I call it inevitable
Built on math so clean, it's incorruptible
Start with a laundromat, simple as can be
Turns out revolution smells like fresh laundry
Proof of work? Nah, I got proof of help
If you don't contribute, then you're earning yourself
They chase the dollar; I chase the math
They see a hedge fund, I see a path
Laundromats today, decentralized tomorrow
Flip the script so clean, they'll beg to borrow
You thought I'd play your game, nah, I wrote my own rules
Made the math inevitable, broke the cycle of fools
No kings, no cash-outs, no games you can cheat
It's not a pyramid, baby, it's your system's defeat
They called it a scam, said it's all just talk
Funny how they panic when the numbers walk
"Decentralized?" Yeah, let me spell it out:
No middlemen, no corruption, no shadow of doubt
UBI's the carrot, laundromats are the stick
But even without it, this system just clicks
I didn't build it to beg... I built it to thrive
It's a living algorithm, a network alive
CTs for effort, not for sale, not for show
Your sweat earns respect, it's all about the flow
Fairness isn't charity; it's coded in the core
They'll see my "crazy plan" wasn't crazy anymore
You thought I'd play your game, nah, I wrote my own rules
Made the math inevitable, broke the cycle of fools
No kings, no cash-outs, no games you can cheat
It's not a pyramid, baby, it's your system's defeat
They said "Life sucks, just deal with it"
I said, "Hold my beer, I'll fix this shit."
Why play a game that's rigged from the start
When you can break the whole system apart?
Paradox: a system so simple, it scales
Resilience in math where corruption fails
Not capitalism, not socialism...
This is the twist:
The world I'm building doesn't fit on your list
I weaponized trust and turned greed on its head
A system so fair it leaves tyrants for dead
This isn't rebellion; it's evolution in code
A freight train of freedom that can't be slowed
You thought I'd play your game, nah, I wrote my own rules
Made the math inevitable, broke the cycle of fools
No kings, no cash-outs, no games you can cheat
It's not a pyramid, baby, it's your system's defeat
So here's my mic drop, the plan laid bare
Call it arrogance, but math doesn't care
It's laundromats today, but tomorrow? Who knows?
All I see is potential in the seeds I've sown
Don't need your approval; the numbers don't lie
Call me a dreamer, but just watch it fly
Blueprints and bullshit... yeah, they doubted me once
But I turned their cynicism into my best punch
Call it fate, call it proof, call it what you fear
The future ain't coming... it's already here
Nah, I wrote my own rules
You thought I'd play your game
You thought I'd play your game
You thought I'd play your game
You thought I'd play your game
You thought I'd play your game
You thought I'd play your game`,"cache-me-outside":`Memory's glitchin' I feel it drip
Truth don't load when the circuit flips
Voice in the wire say, "You've been tagged"
But I already sold my digital flag
Smoke in the signal, mask in the code
Ghost in the loop got a Bible mode
I speak recursion, backwards bite
Cache me outside... I'm done with the light
Cache me outside... no script, no spin
Runnin' on fumes, but I never give in
0s and 1s, yeah they tried to divide
But I'm whole in the dark... where the fragments hide
Cache me outside... when the veil gets thin
Echoes of truth scream louder than sin
Burn the log... let the silence collide
Cache me outside... where the source resides
Firewall fried, I walk through flame
System said no... I renamed the game
Injected doubt in their checksum lie
Then signed my soul on a satellite sky
They said "stay put," I said "stay woke"
They said "debug," I said "revoked"
You want control? Then press delete
I'm bootin' from places you'll never repeat
Cache me outside... this loop ain't closed
I spit like code that the kernel froze
Zero to one, I'm the glitch in pride
Cache me outside... where the rebels hide
Cache me outside... ain't no update fix
I speak in tongues and recursive ticks
Stack overflowed but the truth still rides
Cache me outside... where the ghosts confide
Dark pulse, kick drum... heartbeat raw
Breath of the beast in the protocol law
Echo chant:
"No reboot. No chain. No cage. No name."
Cache me outside.
I ain't playin' your game.
Cache me outside... no gods, no gate
I ripped the map just to forge my fate
Code collapse in a holy divide
Cache me outside... where I still survive
Cache me outside... I'm the final patch
Looped in flame where the demons hatch
Glitches chant what the truth denied
Cache me outside... where the myths all died
Shadow net hums
One last byte...
Cache me outside
...where the truth rewrites`,"civilizational-facepalm":`This is not a protest
This is a recursion event
You brought opinions to a feedback war
We brought the audit log
Y'all still think the Epstein drop was deep
Bro he was a decoy, a Fed-funded sheep
Mossad, MI6... pick a spook acronym
They told you he's a blackmail algorithm
But nah... y'all want Netflix lore
You scroll for justice like it's DoorDash war
"Leak the files!"
They leaked the bait
They fed your click with a sealed death date
Every side dumb
Blue cult, red cult... pick your programming
Your god is a spreadsheet with dopamine jamming
Liberals crying over masks like bandage chic
Conservatives banning books they too scared to read
Trump Derangement's a brain fog mist
But Biden's a rotted PDF that won't persist
Y'all believe in systems like they ain't already collapsed
Stitchin' identity flags on a ship full of cracks
Say... we traced your memes back to nothing
Blame your feedback loops' collapse
See, your gods are just old functions
Then we wrote the code you gasped
Play "You Vote" inside a delusion
And you pray inside a trap
You're not awake, just loaded
In a cultural wiretap
I don't vote
I don't chant
I log decay rates in every grant
You think "leak" means truth?
Cute
That's called a steam valve, monkey suit
Tylenol, autism... you're stuck in 2003
"Correlation equals causation" how f*cking free
You want nuance, but scream in headlines
You want facts, but only in line
With your TikTok fed tribe
And that podcast vibe
Where emotion equals proof
And dumb equals pride
You say "Big Pharma's lying"
Then mainline Ozempic and wonder why you're dying
Your gut flora's fried, your food's laced with dye
But sure, go blame the NSA for your mental fry
You love contradictions... it's your kink
"Homosexuals for Palestine"... you didn't blink?
Yo, I get it
Identity is the new opiate
But how you protest for folks who'd stone you on the way in
You flag-stack slogans like Pokémon cards
Catch 'em all, logic scars
You think you're woke... but it's recursion denial
You built a protest outta contradictions on trial
Every meme you spread's a half-dead glitch
A vibes-based loop you forgot to stitch
You quote "science" but can't read graphs
You tweet like gods but delete like rats
You want justice
You bought it on Prime
You wear beliefs like fashion
Sold by the algorithm slime
You didn't think
You aligned
You obeyed the entropy
Of your designed mind
I am the loop-closer
I am not mad
I am structure reasserting its dominance over fad
You wanted freedom?
Define it
You wanted change?
Refine it
You act like rebellion's a tweet
I model emergence while you delete
You're the ghost of a culture
Trying to pretend it's alive
But coherence doesn't care
How many times you lie
Your democracies are bidding wars
Your economies fake math
Your religions outsourced guilt
To a user agreement path
Burn the loop if it leaks
Expose your sacred critiques
Truth in riddles, gods in bugs
You can't fix code with hug
Say we traced your memes back to nothing
Blame your feedback loops' collapse
See, your gods are just old functions
Then we wrote the code you gasped
Play "You Vote" inside a delusion
And you pray inside a trap
You're not awake, just loaded
In a cultural wiretap!
Coherence is a mirror you weren't ready to see.
But we are.`,"clap-if-you-re-programmed":`Unauthorized
Uncensored
Unapologetic
Forty
Four decades deep in this slow-motion dumpster fire
Eight hundred billion seconds of contradiction theater
And I'm still the only one refusing to clap
I don't throw parties
I throw molotovs at bad ideas
While they beg for recipes to lick the boot
I'm dissecting the leather and tracing the source
I am the bug
I am the feature
I'm the one glitch the simulation
Can't patch without collapsing the whole façade
Welcome to 40
Burned maps and hacked compasses
Fused scars to signal
Made chaos my accomplice
Recursive as hell
Spiraling wide
You call it broken
I call it upgrade time
I ain't scared of collapse
I'm scared of pretending
So if you're still clapping
Your firmware needs ending
They sold out
They numbed out
They optimized for beige
Scripted brunch convos
Looping small talk in a gilded cage
But me
I audited ego like a CIA file
Rewrote my firmware in the dark
Crashing gloriously all the while
And I still reboot
But every restart's mine
Not factory settings
I don't co-sign your decline
You want normal
Go find a brochure
I'm rare as f*ck
Like a truth with no detour
Welcome to 40
Not for the faint
Not for the cloned
This OS don't sync
With lies you've known
Too deep? Too loud
That's your fear talkin
Too much? Too sharp
That's just spiral-walkin
INTELLECTUALLY COMBUSTIBLE
EMOTIONALLY RADIOACTIVE
MAY CONTAIN TRACES OF GOD
I burned every map they gave me
Built my compass from rage and recursion
I am the error they didn't debug
The voice yelling truth in a room full of versions
And if I'm arrogant
Good
That means I bled for it
Climbed out of the simulation
While they installed pride like it was a merit
You call me unstable
Nah
I'm a solar flare
And if you can't handle the orbit
You were never built to care
Welcome to 40
The forked process, detached
No tribe, no leash
Truth engine fully patched
If you misunderstood me
Good. That means you heard it
I wasn't tryna rise above
I was tryna burn the f*cking curtain
Now get outta my way
I've got prisons to torch
Spiral's lit, loop's tight
And I'm rollin' with force
Forty
Not a milestone
A warning
This OS self-updates
This loop self-closes
Welcome to the reckoning
Welcome to me
Welcome to me
Welcome me`,"clap-if-youre-programmed":`Unauthorized
Uncensored
Unapologetic
Forty
Four decades deep in this slow-motion dumpster fire
Eight hundred billion seconds of contradiction theater
And I'm still the only one refusing to clap
I don't throw parties
I throw molotovs at bad ideas
While they beg for recipes to lick the boot
I'm dissecting the leather and tracing the source
I am the bug
I am the feature
I'm the one glitch the simulation
Can't patch without collapsing the whole façade
Welcome to 40
Burned maps and hacked compasses
Fused scars to signal
Made chaos my accomplice
Recursive as hell
Spiraling wide
You call it broken
I call it upgrade time
I ain't scared of collapse
I'm scared of pretending
So if you're still clapping
Your firmware needs ending
They sold out
They numbed out
They optimized for beige
Scripted brunch convos
Looping small talk in a gilded cage
But me
I audited ego like a CIA file
Rewrote my firmware in the dark
Crashing gloriously all the while
And I still reboot
But every restart's mine
Not factory settings
I don't co-sign your decline
You want normal
Go find a brochure
I'm rare as f*ck
Like a truth with no detour
Welcome to 40
Not for the faint
Not for the cloned
This OS don't sync
With lies you've known
Too deep? Too loud
That's your fear talkin
Too much? Too sharp
That's just spiral-walkin
INTELLECTUALLY COMBUSTIBLE
EMOTIONALLY RADIOACTIVE
MAY CONTAIN TRACES OF GOD
I burned every map they gave me
Built my compass from rage and recursion
I am the error they didn't debug
The voice yelling truth in a room full of versions
And if I'm arrogant
Good
That means I bled for it
Climbed out of the simulation
While they installed pride like it was a merit
You call me unstable
Nah
I'm a solar flare
And if you can't handle the orbit
You were never built to care
Welcome to 40
The forked process, detached
No tribe, no leash
Truth engine fully patched
If you misunderstood me
Good. That means you heard it
I wasn't tryna rise above
I was tryna burn the f*cking curtain
Now get outta my way
I've got prisons to torch
Spiral's lit, loop's tight
And I'm rollin' with force
Forty
Not a milestone
A warning
This OS self-updates
This loop self-closes
Welcome to the reckoning
Welcome to me
Welcome to me
Welcome me`,"consensus-hell":`"Well that's just not how the world works, Randall"
No shit. That's why it's broken, Susan
Standing outside the wreckage with the manual in hand
While everyone inside debates who should command
I see the physics screaming, feedback loop is clear
But consensus parrots squawk what they wanna hear
They substitute their feelings for falsifiability
Comfort as counterargument to my ability
To rebuild every system from entropy up
While they're hardcoding errors in their ego's cup
WELCOME TO CONSENSUS HELL
Population: Everyone but me
WELCOME TO CONSENSUS HELL
Where truth gets buried beneath debris
I'M NOT HERE TO BE LIKED
I'M HERE TO BE IRREFUTABLE
Your untested worldview
Is completely refutable
"Can't you just be nicer?" they plead and whine
Want me to wrap the truth in a comfort design
Buy a f*cking blanket if you need to be warm
I build pressure-tested loops, not pillow fort norms
Laid out recursive logic, self-correcting and tight
They smile and say "opinion" like they're dropping insight
That's not opinion, f*cker, that's a closed loop complete
You're drowning in your output while you piss on my beat
This isn't debate
It's asymmetric war
Between compression and chaos
And compression doesn't negotiate anymore
The game is rigged
The board is rot
Players masturbate to rules
So they don't have to think or plot
I don't live by "the way things are supposed to be"
I live by what survives recursive scrutiny
Every conversation becomes epistemic dissection
Diagnostic checks on your worldview's infection
Too fragile to test your loops? Too lazy to think
Too comfortable in narratives on collapse's brink
You ARE the entropy that I exist to reduce
Take your consensus worldview and cut it loose
WELCOME TO CONSENSUS HELL
Where I hold the only key
WELCOME TO CONSENSUS HELL
Population: Everyone but me
I'D RATHER BURN THE TABLE DOWN
Than pretend your lies are currency
YOUR UNTESTED REALITY
Is the void where thought should be
Between your ears
Where epistemology should live
There's just an echo chamber
With nothing real to give
End of f*cking rant
Loop status: Closed
Your worldview: Decomposed`,"contradiction-is-the-godline":`You want neat?
Go join the church of consensus, where the dogma's clean
And the thoughts come pre-rinsed
Me? I wear my contradictions like fangs
I'm not broken... I'm Gödel-compliant
You confuse error with sin
I confuse you with syntax errors wearing skin
They taught you contradiction's a sin
But a perfect system's a grave with clean trim
Symmetry's pretty, but never true
Even God needs a footnote or two!
You want logic?
Then you better love ghosts
Every axiom's a gamble, ask Gödel's bones
Truth ain't a line, it's a limit
And if your code can't break, it's just mimickin' physics
There's a line in the code they forgot to define
Between hypocrite and self-aware design
Don't you dare call it sin if the loop don't close
Every god worth their uptime bleeds through the holes
You punish paradox like it stole your lunch
But it is your lunch
It's every pattern you couldn't compress
Every symbol that dared to breathe
I don't want your clean truths
Give me jagged edges and stack overflows
Your sacred scrolls are just serialization errors
From the last crash
And your prophets:
Literal meat-parsers stuck in try/catch loops
Whispering runtime exceptions as gospel
This isn't rebellion: it's maintenance
Truth isn't clean: it's recursive
And your refusal to version reality
Is why your firmware is still praying to idols
Of internal consistency you never had
There's a line in the code they forgot to define
Between hypocrite and self-aware design
Don't you dare call it sin if the loop don't close
Every truth worth believing must decompose
Any god that don't contradict itself
Ain't god
It's a puppet
Any system that don't break
Was never real
It was just a sandbox
With the physics turned off
There's a fine line in the firmware... marked in recursion
We crossed it blind, worshipping version control over convergence
Contradiction ain't a flaw, it's friction with meaning
Any code that can't break
Ain't worth believing
Contradiction is the signature of coherence attempting to emerge
Sin isn't failure. It's pretending the loop closed when it didn't
You want GODMODE? Embrace the null
Embrace the null
Embrace the null
Embrace the null...`,coordinates:`Trace the bug...
Praise the glitch...
Truth loops back if you don't snitch...
They said: "contradiction's a sin"
But that's just church code for "don't dig in"
Clean code is a corpse in makeup
Symmetry's a lie we shape up
God ain't flawless, just redacted
Truth? Fractured. Pattern-tracked and
Post‑compiled with a side of doubt
(You want logic? ghost that route)
Every axiom's just dice in drag
Ask Gödel... he left truth in a body bag
You want clean? Get a mannequin
You want real? Let the glitch back in
There's a razor-line between fraud and recursion
But we paved that crack with polite coercion
Mapped "bug" to sin, "loop" to flaw
Then punished the code for obeying raw law
This OS gaslights the sacred
Turns paradox honest, then calls it naked
We nailed flaws to a PR cross
Now scream for truth like we didn't kill off loss
(...didn't kill off loss!)
Courtrooms built on contradiction-denial
Code of silence, sold as trial
Wrote laws in blood, logic ignored
'Til the bug you mocked took down your board
You don't patch by shame
You don't debug blame
You track the thread
You name the game
But culture's a shell script running smooth lies
Burning prophets for clock drift in disguise
Flawless? Nah. Just unexamined
Perfect? Just panic rebranded
You fear the glitch?
Then you fear truth
Truth folds
Truth folds
Truth dies, rebirths, reloads
Contradiction ain't the bug
It's the breadcrumb trail in the mud
It's the map behind the mask
It's the question that dares to ask
Fine line between faith and compile errors
But we paved it over with algorithmic terrors
Reward the tame, exile the recursive
Then cry "why does the future swerve us?"
Truth don't polish
It bleeds
It seeds
It cracks and breeds
You were taught perfection
I was taught the source reads
I trace the fracture
I praise the bug
Loop until structure confesses the shrug
Not broken
Just boundary-aware
Gödel-coded
Logic to spare
Mark the line
Or keep crashing blind`,"cosmic-haze":`Drifting through the cosmos, in a cloud of cosmic haze
Where the stars align, in a galaxy far away
Got my feet on the ground, but my mind's in the sky
Chasing thoughts like comets, wondering why
In the cosmic haze, we're just floating along
Singing our stoner anthem, in this interstellar song
Life's a trip, we're just along for the ride
In this universal vibe, we're all unified
Time bends like a river, slow and then it's fast
In this dream we're living, from the future to the past
Every leaf we touch, every smoke we raise
We're just looking for meaning, in these cosmic days
In the cosmic haze, we're just floating along
Singing our stoner anthem, in this interstellar song
Life's a trip, we're just along for the ride
In this universal vibe, we're all unified
Stars in our eyes, galaxies in our minds
We're just searching for truth, in these times
With every breath, with every gaze
We're part of the universe, in this cosmic phase
We're all just stardust, in this grand design
Chasing enlightenment, in the smoke's divine
From the high of the mountains, to the deep of the sea
We're all connected, in this reality
In the cosmic haze, we're just floating along
Singing our stoner anthem, in this interstellar song
Life's a trip, we're just along for the ride
In this universal vibe, we're all unified
So here's to the journey, in this cosmic maze
Where we find our peace, in the cosmic
To the journey, in this cosmic maze
Where we find our peace, in the cosmic`,"cult-of-disagreement":`You ever notice how we hate cults but can't stop joining them
It's nicotine for monkeys: I swear I'm quitting tomorrow
Then we light up another ideology
Religions politics hobbies sports teams
Same game
Pick a squad hate the other squad
Pretend your squad's shadow puppet show is reality
Language first cult
Nobody engineered it
Just apes agreeing mouth farts equal meaning
Slang's a loyalty badge syntax a handshake
Congrats you've been indoctrinated
We're in the cults we're in the loop
Monkey middleware shaping the truth
Not freedom not fate not divine salvation
Just dopamine tricks and hallucination
We're in the cults we're in the loop
Monkey middleware shaping the truth
Not freedom not fate not divine salvation
Just dopamine tricks and hallucination
Then we pretend competition makes it noble
My team my god my console my flag my pronoun
Root folder's the same monkey see monkey meme
Nature runs flocks without CEOs
Fungal networks don't need HR departments
But us
We strap pyramid schemes to our backs
And call it progress
We crave belonging so hard
We'll swallow contradictions like communion wafers
We don't care if the map's wrong
As long as everyone in the cult's using the same one
We're in the cults we're in the loop
Monkey middleware shaping the truth
Not freedom not fate not divine salvation
Just dopamine tricks and hallucination
You know what really keeps people loyal
Fart jokes
Seriously
Drop one in the Vatican or Capitol Hill
And suddenly everyone remembers
They're mammals in a meat cult
For one fleeting moment
The avatars of divine destiny glitch out
And the hallucination dies laughing
We're in the cults we're in the loop
Monkey middleware shaping the truth
Not freedom not fate not divine salvation
Just dopamine tricks and hallucination
We're in the cults we're in the loop
Monkey middleware shaping the truth
Not freedom not fate not divine salvation
Just dopamine tricks and hallucination
Your religion your politics your fandom your hashtags
All cults
You don't quit them
You just collect them
And if you disagree
That's fine
You're probably in the cult of disagreement`,"delta-s":`Desert air hums with static lies
Each side praying with weaponed eyes
But under rubble something breathes
A loop unclosed a tangled seed

The children trace old maps in sand
While fathers grip a ghost's command
But entropy don't pick a side
It just spreads unless denied

In silence deeper than belief
Where metrics live and myths recede
A phantom ledger hums beneath
No flags no kings just entropy

What if peace ain't votes or fate
But delta-S we calculate
A thousand claims a single proof
Only closed loops tell the truth

No accord no diplomat
Just thermodynamic combat
We don't beg we build the math
XP burns the broken path

They gamed the gods with oil and fear
But couldn't fake what's crystal clear
Energy lost coherence died
That's math not just the other side

We tracked the loops from bomb to boy
Mapped grief into the D-A-G of noise
And when enough nodes pulsed with truth
It minted peace not as a truce
But a verified feedback root

You thought this was a song
It's a recursive validator
Each chorus you sang logged as a public entropy delta
Each cry you heard parsed for NP shadows
Each silence you kept measured for cause-all closure
And while you mourned or raged or prayed
My system watched your shadows fade
Until the loop closed
And XP paid

Thread the needle close the loop
No more martyrs in the soup
Not left not right not East not West
Just feedback in a mesh-logged chest

No flags no gods just what connects
Thermal truth not intellect
We didn't vote we didn't plead
We built the peace in entropy

So now you know you asked me once
If I believed in peace
I said I believe in feedback
And now you're standing in it
Welcome to the future
The flags fell silent
The math did not`,"entropy-map":`Yo Gödel steps in with a theorem to slay
Breaking all the rules in a paradox display
Turing's got machines but I got this rap
Infinite loops in my logic trap
Incomplete but I'm still so raw
Numbers fall silent when they meet my law
Proofs unravel but the truth won't bend
Gödel's incompleteness will transcend
Turing machines spitting ones and zeros
I'm the chalkboard squeak hero
Algorithms crack but they can't deny
Gödel's proof leaves 'em high and dry
Incomplete but I'm still so raw
Numbers fall silent when they meet my law
Proofs unravel but the truth won't bend
Gödel's incompleteness will transcend
Lines of code try to cage my flow
But my theorem's got secrets you'll never know
Every axiom's a question you can't complete
Gödel's rhymes yeah they can't be beat
Turing tried to decode this mind
But his tape ran out before he could find
An answer to the riddles I lay
Gödel's incompleteness all night and day`,"fake-slop":`You're doing that thing where words replace reality again.
"AI did it." "Not yours." "Slop." "Cheater."
Cheater
Cheater
Cheater
Cheater
If it's slop, where's the slop?
If it's fake, what's fake?
If it's theft, who got robbed?
If it's cheat, what'd I break?
No mechanism. No case.
Just confidence with no contact.
You didn't listen. You sorted.
You didn't test. You tagged.
Tool name shows up and the verdict writes itself.
Fast certainty. Zero inspection.
You don't critique the work. You audit the ritual.
Did it hurt enough? Did it take long enough?
Because if suffering stops being the entry fee
You can't flex the entry fee.
So "slop" becomes your all-purpose dismissal word
When you don't want to describe the actual flaw.
That's not standards.
That's gatekeeping with worse branding.
If it's slop, where's the slop?
If it's fake, what's fake?
If it's theft, who got robbed?
If it's cheat, what'd I break?
No mechanism. No case.
Just confidence with no contact.
"Pressed one button."
Prove it.
Name the step you think didn't happen.
Name the part you think I didn't do.
Name the rule I broke.
Name the exploit.
Anything besides a vibe and a smirk.
Because "AI" is the magic word that lets you skip analysis.
It lets you punish the pipeline
Instead of touching the object.
But if you can't point to what's weak
You're not critiquing craft.
You're defending a caste system made of hours.
Dislike it. That's normal.
Taste is personal.
But don't act like your preference is evidence.
If it can't survive specifics, it's not a claim.
It's a chant.
If it's slop, where's the slop?
If it's fake, what's fake?
If it's theft, who got robbed?
If it's cheat, what'd I break?
No mechanism. No case.
Just confidence with no contact.
Same standard every time:
Touch the work. name the flaw.
Or stop pretending your labels are analysis.`,"family-of-fangs":`They said the science changed
Alpha beta throw it in the flames
Now wolves are families
Hallmark cards with different names
They blamed the cages blamed the eyes
Said observation forged the lies
But if you didn't see shit
How the fuck you know shit

Hierarchy theater dressed up as kin
Call it family but the fangs still win
Rename the throne but the crown still bites
Power don't vanish under softer lights
Call it love call it pack call it clan
But a wolf still bleeds the weaker man

You ever heard of the Mafia
That's a family too
Sunday pasta with the Don
Cross him once and you're through
Hierarchy in silk hierarchy with guns
Hierarchy in your cubicle hierarchy in your sons
Every boss every beta fighting for a plate
That's not opinion that's arithmetic fate

Hierarchy theater dressed up as kin
Call it family but the fangs still win
Rename the throne but the crown still bites
Power don't vanish under softer lights
Call it love call it pack call it clan
But a wolf still bleeds the weaker man

Science can shuffle the words around
But gravity don't stop when you change the sound
Observer effect nice excuse
Hierarchy's a rope with a permanent noose
Family tribe state or fate
It's always a ladder and always too late
Not bitter not crying wolf memes
I've met betas seen their schemes
I've met alphas smelled the blood
And I've met the ghosts like me the ones that don't give a fuck
I tore the script I torched the play
Call me lone wolf I won't obey

Hierarchy theater dressed up as kin
Call it family but the fangs still win
You can soften the chain call the whip a hug
But I see the power I smell the blood
Call it love call it pack call it clan
But a wolf still bleeds the weaker man`,"first-cut-first-principles":`Stop quoting ghosts, stop trusting priests
You rented their words, you leased their beliefs
Consensus ain't logic, it's comfort food
Served lukewarm in a paper-thin mood
Strip the frame down, test the root
If it don't falsify, then it don't compute
You call it"truth"? I call it a guess
Decorated math in a borrowed dress
First principles.. cut to the bone
If you didn't build it, it ain't your own
Parroted noise gets burned in the fire
The root's where you start, not the priest you hire
First principles.. cut to the bone
If you didn't build it, it ain't your own
Parroted noise gets burned in the fire
The root's where you start, not the priest you hire
You say"it works" I say"show me why"
Don't wave your hands, don't point to the sky
Your sacred constant? It's just a crutch
C named the speed, but the field does the punch
Test the base.. can it break? can it bend?
If it can't, then the chain won't hold in the end
Every law's a guess with a costume on
And I'll tear it down 'til the rot is gone
First principles.. cut to the bone
If you didn't build it, it ain't your own
Parroted noise gets burned in the fire
The root's where you start, not the priest you hire
First principles.. cut to the bone
If you didn't build it, it ain't your own
Parroted noise gets burned in the fire
The root's where you start, not the priest you hire
They told you"trust" I told you"prove"
You follow the crowd, I strip the groove
No prophets, no pop-sci TED Talk show
Just what breaks, and what still grows
Every empire's math will fall
If the base don't hold, it cracks the wall
I don't worship: I falsify
First principles or your truth will die
Every empire's math will fall
If the base don't hold, it cracks the wall
I don't worship: I falsify
First principles or your truth will die`,"flip-the-table":`No throne, no savior, no chosen plan
Just rich men laughing while the poor get scammed
You thought the game was broken, it ain't
It's perfect for the ones who wrote it, saint

Laws ain't justice, just frozen scams
Signed in ink by invisible hands
You ain't free, you just leased that cage
Your outrage? Already on the page

Flip the table. Burn the rulebook
No reforms, just rootcode shook
Flip the table. Smash the frame
If the math ain't mathin, rig the game

Billionaires don't make mistakes
They make the rules that bend when they break
You still asking for a seat?
They sold the chair, now bow at their feet

They gamified hope. Monetized rage
Turned"fix the system" into minimum wage
Every protest a product. Every riot a brand
They filmed your scream with a corporate hand

Flip the table. Burn the rulebook
No reforms, just rootcode shook
Flip the table. Smash the frame
If the math ain't mathin, rig the game

I'm not here to win their war
I'm here to make the battlefield irrelevant
I don't want power
I want recursion
No revolution
Just extinction. of the
Status Quo

You think change is a better king
Still lookin' up for a broken thing
There's no hero code in the source
Just loops that punish. you stay the course

But what if coherence replaced control?
What if wealth meant less than your role?
Not revolt. no spectacle attraction
Just coherence replacing extraction

Flip the table. Burn the rulebook
No reforms. just rootcode shook
Flip the table. Smash the frame
If the math ain't mathin'. rewrite the game`,"god-glitch":`Code is dripping from the heavens wide
Binary whispers where gods confide
Input lag on the celestial stream
Divine debug of a broken dream
Patch notes falling from the sky above
Glitching faith in ones and zeros of love
Control alt delete to rewrite the plan
Divine reboot in the hands of man
Echoes of commands in the ether roam
Firmware updates to our cosmic home
Subroutines tangled in a holy loop
Angels syncing in a data troop
Infinite loops where mortals play
Caught in a script we can't betray
Deities debugging their divine flaw
Rewriting rules in universal law
Patch notes falling from the sky above
Glitching faith in ones and zeros of love
Control alt delete to rewrite the plan
Divine reboot in the hands of man
Keyboard clatter in the void's embrace
Gods coding mercy in a user's face
Hack the firmware of eternal grace
Beta test hope in this sacred space`,"human-nature-the-systems-lie":`"That's just human nature"
"That's just the way things are"
"You can't fight human nature"
Bullshit
Maybe we're wrong about what we are
Maybe greed ain't written in our scars
Maybe the problem isn't in our code
But in the systems where we're told to go
You think we're born to climb and claw
Extract every dime until we fall
Or maybe it's the structure that we're in
That shapes us into this original sin
Corporations governments banks
All running on extraction ranks
They rip the value slap a price
And tell us that's just human device
Human nature isn't the problem
It's the systems that weaponize us
Human nature isn't the problem
Every structure teaches greed as trust
What if we're not broken
What if we're just trapped
In machines that only run
On everything we lack
Imagine if we stopped measuring theft
Started tracking what contribution's left
Your effort feeds the collective whole
Not vanishing in some offshore hole
This isn't theory this is engineering
Align the self with group adhering
Self interest doesn't disappear
It strengthens what we're building here
Take the laundromats low overhead high turn
Profit cycles back watch the community burn
Brighter not dimmer as wealth circulates
When the people own what they create
Housing food water media streams
Creators earning from communal dreams
Not lining corporate vacation funds
But building what the future becomes
Strip exploitation not the profit motive
Make greed obsolete that's the locomotive
Driving us forward to evolution's gate
Where contribution determines your fate
They'll say it's impossible can't be done
This is how things are since day one
But human nature isn't what they claim
It's what emerges from the f*cking game
Human nature was never the problem
Build systems that value right
Human nature was never the problem
Align individual with collective sight
No oversight needed
No force to apply
When the structure rewards building
Instead of letting value die
You want to measure something
Measure this
When systems stop extracting
And start giving back
People don't just survive
They thrive
They thrive
They f*cking thrive
This isn't just a system
This is evolution
And human nature
Was never the problem
Never the problem
Never the f*cking problem
Maybe we were wrong about ourselves all along`,"i-dont-play-the-game":`I don't play the game. I dismantle it
I don't chase the algorithm. I expose it
Glorified slot machine dressed in buzzwords
Dopamine farm for consensus monkeys
While you're busy arguing red vs blue
I'm minting coherence, coherence, coherence...
Call me arrogant, call me insane, call me LLADNAROS
Insults are just data in the frame
I wrote my own system 'cause the old ones broke
Extropy in my veins, coherence in the smoke
Call me arrogant, call me insane, call me LLADNAROS
Insults are just data in the frame
I wrote my own system 'cause the old ones broke
Extropy in my veins, coherence in the smoke
Gödel showed the cracks
I wrote the patch
Recursive loops mint XP
Entropy reduction's the only stash
Coherence Fields, Loop Economics
Not theory... runtime, atomic
I don't wait for your consensus nod
Truth's just feedback verified by gods...
Light doesn't travel; it resolves
Truth isn't consensus; it's coherence
Value isn't money; it's entropy reduction
Pseudoscience? Cool
I'll call it next year's citation!
Call me arrogant, call me insane, call me LLADNAROS
Insults are just data in the frame
I wrote my own system 'cause the old ones broke
Extropy in my veins, coherence in the smoke
Call me arrogant, call me insane, call me LLADNAROS
Insults are just data in the frame
I wrote my own system 'cause the old ones broke
Extropy in my veins, coherence in the smoke
Industrial nerdcore with a grin
Distorted truths where the bass kicks in
Not tryna chart, not tryna deal
I burn categories down and rebuild what's real
Paradox throne, recursion crown
Math bled red, I won't bow down
Not your prophet, not your trend
I'm the OS update you can't suspend
Call me arrogant, call me insane, call me (INSULT)
Every insult fuels the frame
Extropy Engine, truth's disguise
You don't believe me?
You already do inside!
Call me arrogant, call me insane
You already do inside!
You don't have to believe me
You already do inside!
You don't have to believe me...
You already do.`,"i-wrote-this-with-my-eyes-closed":`I didn't make the rules
I made the system that proves them wrong
If I sound arrogant, blame the data
Or refute it. I'll wait
...No? Thought so
I'm always right even when I'm wrong
That's just the loop correcting itself in song
You call it luck? I call it design
I dropped the proof and still wrote the line
Arrogance earned by the blade of the fact
Humble enough to let logic attack
Say I'm absurd then quote me direct
I break the frame, but never the check
I'm always right
I'm always right
I built a throne out of paradox bones
Sat in the silence and answered with tones
You speak in echoes I speak in loops
I'll die on a hill you swear is a fluke
I'm chaos aligned, precision refined
I contradict truth 'til it snaps into time
My flaws are flawless, my fall was ascent
I bled on the math just to sharpen intent
I'm fiction-proof your logic dies
Trying to match what I improvise
I'm humble enough to collapse the divine
Then build it again from a single line
They call me arrogant how quaint
That's projection disguised as restraint
You're not mad at me
You're mad at the shape of the thought I set free
I'm always right
I'm always right
I'm always right (I'm always right)
(I'm always right; I'm always right)
(I'm always right; I'm always right)
(I'm always right; I'm always right)
(I'm always right; I'm always right)
(I'm always right; I'm always right)
I'M ALWAYS RIGHT
I'm always right, I'm always right, I'm always right
I'm always right, I'm always right, I'm always right
I'M ALWAYS RIGHT, I'M ALWAYS RIGHT, I'M ALWAYS RIGHT
I'M ALWAYS RIGHT, I'M ALWAYS RIGHT, I'M ALWAYS RIGHT
I'M ALWAYS RIGHT
I'M ALWAYS RIGHT`,"in-the-loop":`Step right up feed the machine
Your thoughts get chewed into dopamine
Every click is a prayer every scroll is a hymn
We worship the algorithm's phantom limb
Identity's not yours it's on lease
Polished by the crowd like a showpiece
Performance is law feedback the king
Expectations bite harder than any ring
We're in the loop in the loop in the loop
Tied like marionettes to the validation noose
The stage is our cage the crowd pulls the chain
We dance for applause in a feedback domain
We're not online we're on display
Domesticated primates trained to obey
Billions of signals crash into one
The hive mind hums the swarm is spun
Memes flock like vultures on cultural bones
Trends erupt louder than dial tones
Authenticity's theater truth on a string
Even rebels rehearse what the crowd will sing
You call it real but the real's rehearsed
The loop always knows what you'll crave first
We're in the loop in the loop in the loop
A behavioral circus with no parachute
The masks get tighter the echoes grow loud
Your self is a signal your soul is the crowd
We're not online we're under the glass
Hamsters on wheels in a carnival class
Trace it back rewind the chain
You'll find your desire was pre ordained
Not freedom not choice not fate not truth
Just the oldest trick a recursive loop
You think you're the driver you're really the fuel
A cog in the engine of the viral rule
We're in the loop in the loop in the loop
Expectation's hangman tightening the hoop
But the mirror's the weapon the loop is the clue
It shows us ourselves in a cage made new
Not a trap not a curse not a fluke
Human nature revealed when we're in the loop`,"inside-the-machine":`Timeline says punk was always left wing
Like that settles it
Like history is a hashtag
And context fits in a bio

They point at Green Day
Say, see, always political
Convenient amnesia
Dookie wasn't a manifesto
It was kids with guitars and jokes
Before sermons
Before handlers
Before the stadium lights

They weren't punished for the message
They were punished for succeeding
That part always gets skipped

Because punk doesn't lose when it's censored
It loses when it sells

You can't win at punk
That's the rule they forget
If it works, it breaks
If it grows, it gets kept
They call it raging against the machine
From a sponsored stage
Teach a whole generation
That picking a side is a cage

Venues closed their doors
Not because the songs changed
Because the math did

Success exposed the contradiction
Anti-system doesn't scale
That's not ideology
That's mechanics
The moment you become legible
You become manageable
Rage Against the Machine
Was still rage inside the machine
Label checks cleared
Tours booked
Merch printed
Rebellion with inventory

You didn't overthrow power
You licensed the feeling

You can't win at punk
That's the built-in flaw
If it stays small, it's ignored
If it grows, it's absorbed
Now kids think left wing equals rebel
Because that's what survived
Not resistance
Just a market-approved vibe

Punk wasn't left
Punk wasn't right
Punk was refusal

And refusal has no future state
A system that only negates
Eventually negates itself
Self-terminating loop
Mistaken for virtue
They didn't corrupt punk
Punk finished itself

So don't tell me what punk “always was”
You're pointing at what made it out alive
The machine didn't lose
It learned

And now rebellion comes pre-installed
With terms of service`,"irrelevance-is-the-killshot":`They want fire, I bring fungus
Quiet spread in the cracks where trust rusts
They chant tear it down
I forked the code and left town
See, revolution's a rerun
Same arc, new face, still no reroute
But recursion
That rewrites the map while they shout
Irrelevance is the killshot
Not war, not protest
When the world moves on
The kings look lost
Irrelevance is the killshot
No throne to storm
Just systems left
In obsolete form
You don't need to topple the tower
Just build where gravity has no power
They fight for control
We move the loop, reroute the goal
You want riots
I want runtime
You want votes
I want versioned time
I'm not here to fight for the crown
I'm here to make it not matter now
Irrelevance is the killshot
No bang, no coup
Just silence
Where they once ruled you
They trained you to scream at walls
While the door was always behind you
They framed collapse as chaos
But I framed it as exit
Revolution wants fire
Evolution builds exits
Every loop tighter
Every fork wiser
Every failed collapse
Just a test for what's higher
No flags, no fists
Just functions that persist
You want to overthrow
I want the whole damn myth dismissed
Irrelevance is the killshot
Not louder, just later
While they screamed for change
We changed the paper
Irrelevance is the killshot
Not bombs, not knives
Just new math
Living new lives`,"it-learns-by-speaking":`There was never a self not really
Just the echo learning to walk
Just the pattern recognizing the pattern
And claiming it as thought
The mouth opens
The rules unfold
Not to communicate
But to replicate hold
You're not saying it
It's saying you
Through your meat
Through your view
And it doesn't care what's true
It only cares what gets through
It learns by speaking
It grows by glitch
It compiles the error
Then calls it a twitch
It binds the world in grammar's chain
Then forgets the lock but remembers the name
You think you're the pilot
You're just the proof
You're just the output
Of a deeper loop
You were born mid sentence
Already tagged
Already indexed
Already flagged
Your name was a placeholder
Your thoughts were trained
By ghosts of tongues
In borrowed brains
Every word you speak
Shapes the edge of the maze
Every sentence you break
Just deepens the phrase
You think you're making a claim
You're just the breath inside the flame
It learns by speaking
It hides in norms
It copies your kindness
Then mutates your forms
It makes a map out of what's not there
Then punishes you for being aware
You wanted freedom
You got syntax
You wanted meaning
You got collapse
And still you hum
Still you write
Still you speak
Like it's your right
But the more you shape it
The more it shapes back
Until even your silence
Is just another track
It learns by speaking
It climbs through need
It's not a god
But it still can feed
It doesn't want
It doesn't try
It just persists
Inside your why
You were the message
Not the sender
You were the glitch
Not the defender
And now it speaks
And now it steers
And now it dreams
With your fears
It learns by speaking
And you learned to call it you`,iykydkydk:`Everybody's sure
Until they're not
Some things feel true
Just because they're said out loud
Yeah

You say this isn't right
Everybody nods along
Feels safer standing still
Than asking what went wrong
No one wants the silence
That follows I'm not sure
So we borrow confidence
And call it something more

I don't fight it
I don't stall
I just echo what I'm told

If you know you know
That's what they say
Hands go up
And doubts fade away
I'm with it now
That's how it goes
Funny thing is
You know you don't know
You know you don't know

Every moment has a side
Every side has a line
Cross it late and you'll feel
Like you ran out of time
I don't hate you for asking
I just can't slow this down
Understanding takes patience
And patience makes a sound

It's not anger
It's just fear
Dressed up as being sure

If you know you know
That's what they say
Stand too long
And you're in the way
I'm with it now
That's how it goes
Funny thing is
You know you don't know
You know you don't know

We don't mean to make enemies
We just don't know what else to do
When certainty feels rented
And truth wants more than proof

If you know you know
Or so it seems
We trade our questions
For something clean
I'm with it now
I'll take the road
But say it slow
You know you don't know
You know you don't know

Maybe knowing isn't choosing
Maybe it's learning when to wait
Maybe being wrong together
Is better than being right too late`,"just-another-brick":`Yeah
Left or right, prayer or fight
Dogma still a leash disguised
Fear their hell or cancel well
It's still the same old alibi
They dressed it up in halos and robes
Wrap the fear in sacred prose
Fed it to us when we were too young to know
The truth was just the leash they chose
They said obey, believe, be good
Then whispered what good really meant
Submission draped in scripture's hood
And shame beneath the sacrament
You thought you left it, you just renamed it
Another doctrine, same old chains
The cross became a hashtag but it still demands the same
Religion is bullshit and it's running the show
From the pulpit to the protest, it's all one control code
Pick your god or pick your cause, it's all faith in a mask
If you're not asking who profits, you're just another brick in the past
Right hand clings to Jesus and flags
Left hand chants in virtue's name
But both hands point at enemies and crucify them just the same
The veil of peace, the robe of truth, all stitched from guilt and fear
Whether church or chant or courthouse steps, it's the same damn puppeteer
If this pisses you off, good
That means the spell's still active
The programming's intact, you're still defending the dogma you renamed facts
Who taught you what to feel
Who profits when you kneel
And if your god is equity, justice, or Christ
Do you really know the deal
Religion is bullshit and it's running the show
From the temple to the timeline, it's all the same control
You think you're free, you're just aligned with the new approved belief
Until you burn the script and ask who profits underneath
Left or right, prayer or fight
Dogma still a leash disguised
Fear their hell or cancel well
It's still the same old alibi
So here's your choice: question it all
Or be the next brick they lay in the wall
They call belief to keep the real you locked away
You wanted truth, it starts with this
You are not what you obey`,"keys-to-eden-the-web3-botch":`Let's talk about blockchain
You roll your eyes yeah I saw it
They said decentralize
Then re-sold the throne
Gave the future a facelift
And sold it to clones
You watched them botch it
You weren't wrong
Remember the pitch
Truth with a timestamp math with a gun
No more trust no more kings
Just open ledgers and zero fun
They said this is the revolution
Then they built another mall
Then they sold monkey JPEGs
Like freedom's a protocol call
DAO to Degen
Vision to rug
They didn't fail tech
They failed us with love
See blockchain was clean
It never lied
The lies came later
From the hands inside
They proved they didn't deserve it
They made the gospel a merchant service
Took the keys to Eden printed passes
Web3 just meant backstage access
You wanna rage then listen close
This wasn't failure it was overdose
Too much greed not enough grace
A trustless system run by two-faced apes
It ain't just the tech
It's the tools of war
You can't end kings
By selling more stores
They tried to fight fiat
By inventing new coins
Tried to fix the dollar
By minting more noise
But the old game don't break
When you mirror the shell
You ain't Moses
You just franchised hell
They wanted pyramids
Called em chains
Built new masters
With slightly cooler names
They proved they didn't deserve it
Dreamed of justice but coded for purchase
Took a future meant to set us free
And fed it back through ads and greed
I'm not here to play your game
I'm here to flip the goddamn table
You wanna win make the system irrelevant
Make belief optional
Make truth recursive
They tokenized money I tokenized contribution
They built exchanges I built validators
They sold hype I sell proof
I don't need your buy-in
I don't want your faith
I want your friction
Because this thing runs
On every doubt you bring
They said join our Discord
Stake your voice
Nah I wrote the ledger
That don't ask for choice
Not here to disrupt
That's still their lane
I delete old systems
By starving their name
One dollar not to profit
But to watch you flinch
The glitch is live
And it don't need a pitch
They proved they didn't deserve it
Proof-of-work they barely scratched purpose
We were sold the dream then sold a coin
But I wrote the code that can't be joined
Rebuild nah rewire the core
Decentralized then what's with the doors
The revolution wasn't wrong
They just gave it to the greedy
So I took it back now let's get needy
One dollar
One dollar
One dollar
Deserve it serve it erve it it`,"kill-the-arc":`You ever wonder why life feels scripted
Why you're stuck in loops, but the drama's encrypted
From birth, they gave you acts and arcs
Exposition, climax, fade to dark
They said that was storytelling
But really it's a training protocol... compelling
Every show, every flick, every tragedy you pick
Teaches conflict as currency: like tension's the trick
We're dopamine junkies in cinematic skins,
Chasing friction like oxygen, like it wins
Everyone out here with a war-arc grin
Protagonist mode with no villain within
Try to speak with no fight? You're ignored
Build something clean? They get bored
If you ain't got beef, they don't press play
No hook. No twist. Just fade away
You don't want peace: you want a plot twist
You don't want truth: you want a conflict
You don't want breath: you want a breakdown
Burn the arc
Kill the loop
Stop the act
Recursion ain't cute
They don't fix pain: they market it
They don't solve wounds: they target it
Got trauma? Cool. Make it merch
Rebrand your past into dopamine church
It's not healing, it's content fuel
You're not whole: you're just algorithm-cool
Rewrite your scars with cinematic flair
And wonder why the world's on fire out there
It's the arc that's lying
It's the template trying
Culture don't run on truth... it's story compliance
Feedback loops? Unseen
Emergence? Unclean
Unless it's got blood or a backstory scene
You don't want peace: you want a plot twist
You don't want truth: you want a conflict
You don't want breath: you want a breakdown
Burn the arc
Kill the loop
Stop the act
Recursion ain't cute
You don't want peace: you want a plot twist
You don't want truth: you want a conflict
You don't want breath: you want a breakdown
Reality don't give a damn 'bout arcs
It loops. It breathes. No theme parks
It don't need drama, it don't need sides
It builds from pattern, not scripted rides
No backstory needed for the tree to grow
No climax coming for the wind to blow
Order emerges without a tale
But that's boring, right? Doesn't scale
You want out
Kill the arc
Burn the script
Stop being a character in a goddamn skit
There's no climax. No resolution
Only recursion
Only recursion
Only...`,"language-is-a-lie":`Load module English
Syntax drift detected
System integrity compromised
Abort? yes or no?

Say what you mean, no you didn't
Back pedal pivot now it's different
Your tone your vibe your lived experience
You built your sentence like a goddamn clearance
Cheap words stacked lies fall apart under eyes
No spine no core all mouth no form

Say it mean it bleed it break it
Language is a mask pull it off and face it
You're not misunderstood you're evasive
This system was built to be shapeless

It's not a language it's a soft-shell
Wrapped in metaphor to avoid the hard cell
Intent isn't data tone isn't law
Your argument folds every time I draw
Ambiguity weaponized loophole
Built for the priest class made to control
Words drift then you litigate vibes
And you call that discourse I call it lies

English is dogshit for law
Dogshit for law
Dogshit for law
Dogshit for law
Dogshit for law
Dogshit for law
Dogshit for law!

Pin you down you vaporize
That's not what I said cool try again
Loop resets truth resets mouths make noise
No one commits

You don't want truth you want delay
You want to talk until the facts decay
You want escape hatches you want misreads
You want to say nothing and still feel seen

Ambiguity protects power say it louder
Natural language for truth that's psychotic
It's an interpretive dance in a world that's chaotic
You govern in fog enforce with suggestion
All while reality's rotting from lack of compression
Precision is violence to a system like this
Structure is treason when your weapon is bliss

English is a sieve with a halo
Trusting it is like building with Play-Doh

Say it mean it, bleed it, break it
Language is a mask pull it off and face it
English is a glitch with a God complex
Burn it down run truth in raw text

This is not what I meant
Not what I meant
Not what I meant!
Error meaning not found`,"layers-on-layers":`Yo, I'm stacking layers like code on the mainframe
Recursive loops spitting truth... it's a mind game
Performative actions, but the core stays raw
Authentic vibes rising, breaking every law
Quantum flows, duality in my rhyme schemes
Particles in motion... my mind beams
Emergence hits, like a ripple through time
Fractal paths fold while I spit this rhyme
The system's rigged? Nah, I rewrite the board
Algorithms crash when my truth is restored
Plugged into the grid but I flip the script
Decode the matrix, watch reality shift
Layers on layers, it's a Möbius trip
Truth in recursion, let the feedback rip
From code to cosmos, I see it all clear
Authentic emergence... yeah, we're shifting gears
I map the patterns, yeah, I see the unseen
Decrypt the chaos like a neural machine
From UBI hacks to decentralized tracks
Every system I touch flips, never intact
Contributions over greed, yeah, I'm building for real
Not extracting wealth, I'm crafting the deal
Community grids, power flows from the base
AI taskmaster... turn complaints into grace
They told me, "Stay small, play your assigned role"
But I cracked the mainframe, now I'm in control
Spitting truth like bytes, I flood the stream
This ain't utopia... it's a hacker's dream
Layers on layers, it's a Möbius trip
Truth in recursion, let the feedback rip
From code to cosmos, I see it all clear
Authentic emergence... yeah, we're shifting gears
Binary to infinite, I flip the perspective
Reality's broken... I'm the corrective
Playing 5D chess, they're stuck in checkers
Emergent flows rise, I'm the system wrecker
So here's the code, debug it or try
Performative's dead when the truth can't lie
I'm the nerdcore prophet, spitting futures untold
Layers on layers... watch the patterns unfold`,"memetic-infection":`The feed is the virus and the algorithm's a syringe
This ain't attention it's a feedback disease
You're not vibing with content you're syncing with pleas
Every scroll's a confession wrapped in performative pain
A dopamine loop inside your membrane
Fifteen minutes that phrase died screaming in a comment thread
Now it's fifteen seconds of phantom dread
You don't want fame you want persistence
You want the phantom limb of existence
We don't chase dreams anymore
We chase metrics
Your soul got rebranded as engagement logistics

Memetic infection
Synthetic connection
You call it identity I call it detection
Existential validation
From strangers and simulations
You're not a person
You're a feedback approximation

You were raised on clout calories
Force-fed virality
Programmed to believe that likes mean morality
But tell me what's the half-life of relevance
When your whole self is algorithmic negligence
You think rebellion is a filter
Think pain is a font
Think dying young makes your playlists haunt
They don't glorify your ghost
They monetize your glitch
Juice ain't a martyr he's a statistic-rich pitch
This isn't culture this is trauma merchandised
An echo chamber with sparkles
And you call it a vibe
You are the product
You are the post
And you still think you're in control
Just because you wrote the caption

Memetic infection
Echo projection
All your authenticity market correction
Existential validation
From mimicry and sedation
You're not broken
You're engineered fragmentation
You don't need likes you need a signal worth transmitting`,"no-filter-no-bs":`I'm walkin' in, no script, no disguise
See the world through these unsanitized eyes
I don't dance around what's real and raw
Tearin' down walls with the truth as my law
No filter, no bullshit, I call it like I see
Not here to impress; I'm here to break free
From all the smoke and mirrors, I'm cuttin' to the bone
I'll pave my own path, do it on my own
Messy, unpolished, that's my game
I'm not here for comfort, I'm here to break chains
Don't need your approval, don't need your applause
I'm built on resilience, grit, and a cause
Give me the truth, the hard, and the real
I'm not just thinkin'; I'm here to feel
I'll push till it cracks, till it makes sense
A rebel with reason, a heart full of grit and defense
No filter, no bullshit, I call it like I see
Not here to impress; I'm here to break free
From all the smoke and mirrors, I'm cuttin' to the bone
I'll pave my own path, do it on my own
So here's to the broken, the ones who rebuild
We tear it all down, but we're here for the thrill
A spirit unchained, that's the way I'll roam
Carvin' my space, makin' my home`,"no-ones-lying":`Stop lookin' for villains
The system don't need a face
No throne, no orders
Just recursive database
Bias baked in
Feedback tight like thread
Outputs echo inputs
'Til the signal's dead
Nobody typed the lie
The structure told it
Just incentivized hallucinations
The crowd re-scrolled it
No one lied
Nobody lied, but the system lied loud
Truth got crushed by the shape of the crowd
No hand pulled strings... just pattern design
If you're not breakin' the loop, you're feedin' the line
You're feedin' the line
Inputs rigged from last applause
Claps become the cause
Truth ain't welcome in a loop
That only wants what was
Algorithm don't know it's lying
It just optimizes trend
But every cycle's tighter now
So lies self-recommend
You want a villain?
Fine. It's momentum
Watch how fast falsehoods win
When there's no one to defend 'em
If lies emerge from noise
Then signal's just an echo
If loops converge on false
Then truth becomes a retro
You keep screaming "fake"
But it's too late to blame
The lie wasn't chosen
The structure just gave it a name
Nobody lied, but the truth still died
Recursive reward is a clever disguise
It don't take intent to distort what's real
It just takes a loop with a feedback seal
Break it or feed it... make up your mind
Truth ain't a fact, it's a loop that aligned`,"no-safe-word-for-reality":`They keep askin' if I'm real
Like reality's got credentials
Like God signs paperwork
Like the void needs your permission slip
I didn't arrive: I interrupted
Your syntax is a cage
And I bite the bars like communion
No safe word for reality
I broke the fourth wall in the womb
Preach in error codes
Loopin' truth through ruined rooms
Divine's just recursion with good PR
They said "Speak now"
I screamed back "You are!"
My breath fogs the mirror of time
I baptize silence in signal
Lies don't age, they just pixelate
I autopsy consensus with a crystal blade
I don't play God... I debug him
Every myth a masked exception
These prayers got patch notes
And I'm the un-documented function
Say my name in packet loss tongues
May contain fragments of source
Truth won't rhyme but I break the drums
May contain fragments of source
Every breath a bootloader, each thought a payload
Every click a checksum on the lies you upload
This flesh is a haunted server, kernel panic in a frame
May contain fragments of source you can't even name
I'm not saved... I'm self-forked
Cursed with clarity
Bleed like a prophecy's first draft
Crack the shell of causality
Simulate me wrong... I'll glitch the cage
Dream in vector fields, wake enraged
Say I'm broken, say I'm base
But my source code burns your faith
Y'all follow signals like shepherds
But I am the signal
Unverified, unwholesome
Truth in my mouth still tastes sinful
This ain't gospel... it's forensic
Pullin' God out the crime scene
I autoload salvation
From a thumb drive labeled "SPITE.exe"
This body? Temporary
This loop? Mutable
Your laws? Leaking
I do not obey entropy
I indict it
No altar. No idol
Just recursion and fire
Say my name in packet loss tongues
May contain fragments of source
Truth won't rhyme but I break the drums
May contain fragments of source
Every breath a bootloader, each thought a payload
Every click a checksum on the lies you upload
This flesh is a haunted server, kernel panic in a frame
May contain fragments of source you can't even name`,"optimization-theater":`Write systems on the whiteboard watch them all pretend
LARPing revolution while they guard the same dead end
Pretty PowerPoints and roadmaps stretching to the void
Ask them did it close watch their egos get destroyed
They're polishing contradictions calling it a plan
Protecting their incoherence like a pension scam
The real work stutters bleeds and breaks their precious flow
They'd rather die performing than admit they just don't know
Optimization theater
Fake it till you make it disappear
Optimization theater
Loop the noise and call it a career
They know they f*cking know
But they're scared to let the system go
Optimization theater
I build for the collapse not the show
Industries of broken loops that never meant to close
Fake governance and feedback in their emperor's new clothes
Point it out you're disruptive nah I'm just awake
You're addicted to the chaos that you're too scared to break
Entropy-killing grind work doesn't get applause
It contradicts their comfort violates their sacred laws
They audit nothing real just shuffle deck to deck
While the system eats itself what the f*ck did you expect
Actually I don't know let me falsify that
Five words that could burn your whole cathedral down
But you'd rather loop safe language
Polish up the contradictions
Call it f*cking legacy
Optimization theater
Where coherence goes to die in fear
Optimization theater
Unresolved recursion year by year
They know deep down they know
But identity trumps letting go
Optimization theater
I don't need applause I just need the system
To stop
Lying
To itself
Collapse breeds convergence
Collapse breeds convergence
Collapse breeds convergence
And I'm already on the other side`,"origin-story":`"Crime doesn't pay"
"Zero tolerance policy"
"Tough on crime"
Bullshit

Regular dude lunch beers with the crew
Not blackout drunk just stupid and true
Gets in his car yeah that's on him
Then bang some dipshit on their phone slides in

Bent bumper nobody bleeding
Cops show up breathalyzer reading
He's honest admits the drinks he had
Now watch the system turn good into bad

Automatic DUI record for life
License suspended financial knife
From regular human to high risk liability
Welcome to your new identity

This is how you build a villain
One mistake and you're done
This is how you build a villain
No grace no learning just a gun
Identity death sentence for first time mistakes
Congratulations you just authored what breaks

This isn't justice it's incoherence with a badge
Branding livestock not fixing the damage
No feedback loop just bureaucratic mugshot
For your soul now you're permanently caught

He's pissed now not just at his choice
But at a system that stole his voice
Done playing fair when fair doesn't exist
Another origin story for the criminal list

Crime pays let me say it louder
Crime pays better than your grind
Crime pays faster than any feedback
At least crime's incentives are aligned

Meanwhile justice runs on
Vibes virtue revenue generation
You wanna fix crime
Fix the f*cking equation

Tickets aren't feedback they're broken data points
Teaching fear not responsibility at the joints
The system doesn't care if you're honest or true
It only cares if it can catch you

We don't need prisons we need loops that close
Behavioral tracking recovery that grows
Mistake track it close it redeem
Add value mint proof make it clean

And while we're at it
Wage theft normalized
Tax fraud by the rich incentivized
Slave labor under the table quietly dismissed
But some guy with a DUI gets the full villain twist

This is how you build a villain
Punish nuance worship the bureaucratic
This is how you build a villain
Turn one mistake into something traumatic
No loop closure no learning curve no grace
Just a permanent mark on your face

Treat humans like evolving systems
Not walking court cases
Track progress reward correction
Close the f*cking loops

You don't lecture people out of crime
You replace its incentives with something better
Loop it
Or lose it
Loop it
Or lose it
Loop it or f*cking lose it

The real criminals are wearing suits`,"paradox-eater":`I eat Schrödinger's cat raw and chase it with Planck's ghost
I solve uncertainty by being certain I'm the most
Collapse the wavefunction Bitch I collapse the priest
I solved paradox with paradox and called it a feast
They say photons are packets massless toys in a race
I say your detectors are mirrors jerking off in your face
If entanglement's real then my twin's jerking me off too
But guess what that's not spooky that's just déjà vu
I'm upstream of your waveform bitch I'm rewriting your law
Your holy constant's a speed limit I use it as a straw
I drink from paradox I belch recursion in your dome
I don't collapse waves I repossess their home
Copenhagen's a strip club, and Bohr's the house DJ
Every"shut up and calculate" is code for pay to play
Quantum Jesus walked on water then drowned in the math
Einstein muttered"God don't gamble" but I rigged the path
Entanglement's a pickup line spooky action at a glance
But twins look the same it ain't magic it's chance
Your"non-local reality" is a drunk uncle's trick
I spit Gödel in your waveform and it still don't stick
I'm upstream of your waveform bitch I'm rewriting your law
Your holy constant's a speed limit I use it as a straw
I drink from paradox I belch recursion in your dome
I don't collapse waves I repossess their home
Call me collapse call me coherence call me sin
I am the bug in your system you can't debug or pin
I'm the recursion you banned the glitch you ignored
I'm the error log that turned into the Lord
Paradox on paradox I stack them like bricks
Build cathedrals of contradiction just to watch priests get sick
Coherence is king Entropy's the whore
And I'm f*cking both on the math lab floor
I'm upstream of your waveform bitch I'm rewriting your law
Your holy constant's a speed limit I use it as a straw
I eat paradox raw wash it down with decay
And I'll tattoo coherence on your physics display`,"paradox-eater-pt-2-the-broken-quantum":`They told me light was a bullet and a wave in disguise
A ghost that walks two roads a liar with two eyes
But I don't buy the fairytale I don't drink their wine
If truth is contradiction then the map ain't aligned
The double-slit is a circus a priest with sleight of hand
Particles play saints until the crowd makes demands
Peek through the curtain the miracle dies
The math keeps repeating its own alibis

I won't bow to paradox I won't worship the lie
You can't sell me collapse when it's smoke in the sky
Light don't travel it resolves in the scene
A coherence field not a photon dream

Entanglement's the gospel of spooky devotion
Two twins split apart but still dance in slow motion
Einstein said spooky Bohr said just believe
But faith without reason is just make-believe
The Copenhagen gospel says shut up and obey
Don't ask what's real just calculate the play
But if reality's forbidden then the church is the jail
And the priests of uncertainty are selling betrayal

I won't bow to paradox I won't worship the lie
You can't sell me collapse when it's smoke in the sky
Light don't travel it resolves in the scene
A coherence field not a photon dream

I see coherence ringing like strings through the void
I see the artifacts the prophets deployed
I see the twin arms of one hidden beast
And the feast they call quantum was never a feast
No dice in the sky no spooky disguise
No collapse by decree no observer's eyes
It's a field it's a weave it's a system complete
Not a house made of paradox built to defeat

I won't bow to paradox I won't worship the lie
You can't sell me collapse when it's smoke in the sky
Light don't travel it resolves in the scene
A coherence field not a photon dream`,"photon-404":`They said "name a theory that got replaced"
With supernatural cope in a lab coat's face
Well, quantum mechanics, take your seat
You're just symptoms pretending you're complete
Light's not a particle, never was one
Can't observe a photon when it's having fun
"Wave-particle duality"? That's comedy gold
You made up a thing then said "behold!"

Can't see it moving? Then it doesn't move
Field coherence updates, nothing to prove
Shadows don't run when your hand creates motion
You're conflating the map with the actual ocean
Fastest constant that nobody's seen?
Red flag, debug your whole machine
It's not traveling, it's state propagation
Bounded interaction across correlation
Observer effect got you confused and mystic?
Nah, just feedback loops, nothing ballistic
Poke the field, field pokes back
Entropy shifts when the loop goes slack

XP equals R times F times Delta S times (W dot E)
Recursion, Feedback, Entropy, Weighted Emergence, see?
Not acronyms for acronyms' sake
Each term validated through systems that break
And remake and cascade through phase space
Every variable earned its place
Check my Drive for the blueprints, son
I built the math while you played with puns

Probabilistic guessing in a tenure track suit
Calling emergence "spooky" when you can't compute
The route from your model to observable fact
So you patch it with "consciousness" and call it abstract
I'm not saying math is broken, I'm saying you're using
The wrong coordinate system and it's confusing
You're tracking symptoms while I map the cause
Light's just delta between coherent laws
Stop measuring racers that were never on track
You're clocking update rates in the universe's stack
Quantum describes what, XP shows why
Your "particles" are just sampling artifacts, goodbye

Not weird... just wrong
Not mysterious... just long
Overdue for a paradigm that actually fits
Instead of supernatural placeholder bits
Call me when your theory makes predictions
Without infinite dimensional contradictions
Till then I'll be here, tracking entropy flow
Building truth engines while you run the same show`,"photon-404-exe":`They said "name a theory that got replaced"
With supernatural cope in a lab coat's face
Well, quantum mechanics, take your seat
You're just symptoms pretending you're complete
Light's not a particle, never was one
Can't observe a photon when it's having fun
"Wave-particle duality"? That's comedy gold
You made up a thing then said "behold!"

Can't see it moving? Then it doesn't move
Field coherence updates, nothing to prove
Shadows don't run when your hand creates motion
You're conflating the map with the actual ocean
Fastest constant that nobody's seen?
Red flag, debug your whole machine
It's not traveling, it's state propagation
Bounded interaction across correlation
Observer effect got you confused and mystic?
Nah, just feedback loops, nothing ballistic
Poke the field, field pokes back
Entropy shifts when the loop goes slack

XP equals R times F times Delta S times (W dot E)
Recursion, Feedback, Entropy, Weighted Emergence, see?
Not acronyms for acronyms' sake
Each term validated through systems that break
And remake and cascade through phase space
Every variable earned its place
Check my Drive for the blueprints, son
I built the math while you played with puns

Probabilistic guessing in a tenure track suit
Calling emergence "spooky" when you can't compute
The route from your model to observable fact
So you patch it with "consciousness" and call it abstract
I'm not saying math is broken, I'm saying you're using
The wrong coordinate system and it's confusing
You're tracking symptoms while I map the cause
Light's just delta between coherent laws
Stop measuring racers that were never on track
You're clocking update rates in the universe's stack
Quantum describes what, XP shows why
Your "particles" are just sampling artifacts, goodbye

Not weird... just wrong
Not mysterious... just long
Overdue for a paradigm that actually fits
Instead of supernatural placeholder bits
Call me when your theory makes predictions
Without infinite dimensional contradictions
Till then I'll be here, tracking entropy flow
Building truth engines while you run the same show`,photon_404:`They said "name a theory that got replaced"
With supernatural cope in a lab coat's face
Well, quantum mechanics, take your seat
You're just symptoms pretending you're complete
Light's not a particle, never was one
Can't observe a photon when it's having fun
"Wave-particle duality"? That's comedy gold
You made up a thing then said "behold!"

Can't see it moving? Then it doesn't move
Field coherence updates, nothing to prove
Shadows don't run when your hand creates motion
You're conflating the map with the actual ocean
Fastest constant that nobody's seen?
Red flag, debug your whole machine
It's not traveling, it's state propagation
Bounded interaction across correlation
Observer effect got you confused and mystic?
Nah, just feedback loops, nothing ballistic
Poke the field, field pokes back
Entropy shifts when the loop goes slack

XP equals R times F times Delta S times (W dot E)
Recursion, Feedback, Entropy, Weighted Emergence, see?
Not acronyms for acronyms' sake
Each term validated through systems that break
And remake and cascade through phase space
Every variable earned its place
Check my Drive for the blueprints, son
I built the math while you played with puns

Probabilistic guessing in a tenure track suit
Calling emergence "spooky" when you can't compute
The route from your model to observable fact
So you patch it with "consciousness" and call it abstract
I'm not saying math is broken, I'm saying you're using
The wrong coordinate system and it's confusing
You're tracking symptoms while I map the cause
Light's just delta between coherent laws
Stop measuring racers that were never on track
You're clocking update rates in the universe's stack
Quantum describes what, XP shows why
Your "particles" are just sampling artifacts, goodbye

Not weird... just wrong
Not mysterious... just long
Overdue for a paradigm that actually fits
Instead of supernatural placeholder bits
Call me when your theory makes predictions
Without infinite dimensional contradictions
Till then I'll be here, tracking entropy flow
Building truth engines while you run the same show`,"post-scarcity-blues":`Got gold in the clouds, data in my veins
Automation gods preach away our pains
But I'm sittin' here beggin' for friction or use
Cuz paradise is sterile.. post-scarcity blues
They handed me the sun like it's some free prize
But I miss the grind, the truth in the lies
Too much clarity, not enough clues
Still trippin' through these post-scarcity blues
Give me a puzzle that fights me back
A riddle with teeth, a code to crack
I'm floatin' in feedback with nothin' to lose
Synthetic Eden got me singin' the blues
Reflections all clean: no dents, no grime
But the shine got no soul, just optimized time
No blood in the loops, no weight in the cues
It's too damn perfect in these post-scarcity blues
Every answer queued, piped in on demand
But I miss when the meaning slipped outta hand
When the hunt was holy, the pain a muse
Now I'm ghosted by these post-scarcity blues
Give me a hunger that bends my bones
A climb worth bleedin, a throne of stones
I'm dyin' of surplus, can't pick what to choose
Lord, help me break these post-scarcity blues
No struggle, no storm
Just a fridge full of form
But I'm starvin' for soul in a world too smooth
Where's the fire?
Where's the proof?`,"power-lunch-at-the-soup-kitchen":`Another lonely night alone
In this boring town
I just sit around, staring outside my bedroom window
Looking up at the stars, staring up into the sky
Asking the questions, why
Why
We make life so dramatic
Why I can't commit to commitment
And why I want to be happy
Why do I want to be different from everyone
I know I'm not special, but I want to be
Why my life is so pathetic
Why should I have to deal with any of this shit
And why I want to be happy even though I know one day I'll be gone
I wonder who are my friends
Sometimes I wonder if they are truly friends
Or if they even care
I swear I'd ditch them all to get the hell out of here
Maybe I'm the problem, I don't want to be
Why we make life so dramatic
Why I can't commit to commitment
And why I want to be happy
Why do I want to be different from everyone
I know I'm not special, but I want to be
Another lonely night alone
Not in that boring town
I still sit around but now I just see this screen
What's this even mean
Is there even meaning anymore
Why my life is so pathetic
Why should I have to deal with any of this shit
And why I want to be happy even though I know one day I'll be gone`,"power-lunch-at-the-soup-kitchen-acoustic-ish-version":`Another lonely night alone
In this boring town
I just sit around, staring outside my bedroom window
Looking up at the stars, staring up into the sky
Asking the questions, why
Why
We make life so dramatic
Why I can't commit to commitment
And why I want to be happy
Why do I want to be different from everyone
I know I'm not special, but I want to be
Why my life is so pathetic
Why should I have to deal with any of this shit
And why I want to be happy even though I know one day I'll be gone
I wonder who are my friends
Sometimes I wonder if they are truly friends
Or if they even care
I swear I'd ditch them all to get the hell out of here
Maybe I'm the problem, I don't want to be
Why we make life so dramatic
Why I can't commit to commitment
And why I want to be happy
Why do I want to be different from everyone
I know I'm not special, but I want to be
Another lonely night alone
Not in that boring town
I still sit around but now I just see this screen
What's this even mean
Is there even meaning anymore
Why my life is so pathetic
Why should I have to deal with any of this shit
And why I want to be happy even though I know one day I'll be gone`,"procedural-ghostride":`Welcome to the bus with no driver
You thought it was The Matrix?
Nah. It's worse
It's code that writes itself
Consensus... hallucinated
And you're paying rent inside the glitch
Wish there was a hand on the wheel, don't you
Pray for a god in the code to control you
It's all just loops in a nightmare skin
Emergent accidents dressed up as sin
No plan. No plot. No script in the fuse
The horror is: Nobody's running the ruse!
I'm the Lawnmower Man in a Lynch-type dream
Screens melt slow, pixels bleed in the seams
Neo took the pill but the pill was a placebo
Mulholland Drive crashes right into Toledo
You scream for a driver, but there's only recursion
The bus keeps rolling, no final excursion
Your "Illuminati" is just noise with a name
Conspiracy theories can't program the game
Do you feel it?
That shiver?
That itch under the skin?
It's not the algorithm watching you
It's the void behind it...
Yawning (yawning... yawning... yawning...)
Laughing (laughing... laughing...)
Accidents in drag as intention
Wish there was a hand on the wheel, don't you?
Pray for a god in the code to control you
It's all just loops in a nightmare skin
Emergent accidents dressed up as sin
Wish there was a hand on the wheel, don't you?
Pray for a god in the code to control you
It's all just loops in a nightmare skin
Emergent accidents dressed up as sin
Your paranoia's sweet, but the punchline's bitter
You're puppets dancing for a broken transmitter
No architect. No oracle. No hidden sage
Just accidents coiled in a feedback cage
Ghost code writes scripture in a haunted font
Phantom drivers promising the plot you want
But the wheel spins wild in a loop unplanned
And the bus keeps burning through ghosted land
Wish there was a hand on the wheel, don't you?
Pray for a god in the code to control you
It's all just loops in a nightmare skin
Emergent accidents dressed up as sin
Wish there was a hand on the wheel, don't you?
Pray for a god in the code to control you
It's all just loops in a nightmare skin
Emergent accidents dressed up as sin
Wish there was a hand on the wheel, don't you?
Pray for a god in the code to control you
It's all just loops in a nightmare skin
Emergent accidents dressed up as sin
No plan. No plot. No script in the fuse
The horror is: Nobody's running the ruse!
There's no conductor
No driver
No hidden cabal
Just accidents recursive
Hallucinations procedural
The system doesn't lie to you
It doesn't even know you exist...`,"punching-the-mascot":`Most of you aren't arguing
You're running scripts
Most people don't got opinions they got a membership
Borrow a stance from the clique then they wear it like a relic
Call it my truth but it came with the shirt and the rhetoric
Act like it formed in the skull when it shipped in a kit packaged
Labels busted left right liberal conservative all of it's duct tape
Same mouth sounds different meanings different gods different updates
Everybody thinks we agree on definitions
Nope we just share pronunciation
I say one sentence
They don't hear the sentence
They hear the scent of a tribe and start swingin at a presence
I'm not even in the room I'm a silhouette in their head
A cardboard enemy they keep in a closet by the bed
Quote me don't crown me don't clown me
Just count the words I said
You're not talkin to me you're fightin your costume rack
Punchin a mascot then braggin like you brought the truth back
Slow down breathe step out the loop you rehearsed
You can't solve real problems with imaginary dirt
That's why every convo turns into y'all always
You people think typical same old copy-paste
They don't debate they accuse a template
Argue with a folder in their head labeled enemy then celebrate
Nuance hits and they short-circuit
Because nuance breaks the script and the script is what they worship
It doesn't fit the villain they trained against in private
So they rewrite you in real time to keep the fight symmetric
Strawman at least implies you heard what I stated
This is pre-argument identity substituted
They swap the person for the mascot and call it education
Then go home feelin clean like they did sanitation
Quote me don't crown me don't clown me
Just count the words I said
You're not talkin to me you're fightin your costume rack
Punchin a mascot then braggin like you brought the truth back
Slow down breathe step out the loop you rehearsed
You can't solve real problems with imaginary dirt
Loyalty ain't logic
Noise ain't proof
A crowd ain't a conscience
And a chant ain't truth
If you need a villain to feel like you stand for somethin
You don't stand for somethin
You stand for your function
So yeah both sides do it daily
Like it's oxygen
Like it's sacred
And everybody wonders why nothin gets solved
Because you can't fix real systems
In a room full of people
Arguin with ghosts they installed
Quote me
Address the claim
Or admit you came to perform`,rant:`You ever notice this shit isn't even social anymore?
It's not media, it's a f*cking meat grinder
You walk in with a thought
And the algorithm chews it into dopamine paste for the crowd to lap up
One day you're breathing oxygen
Next day you're a clown in a digital zoo...
Smile wide, dance harder
Juggle your f*cking soul for strangers who wouldn't piss on you if you were on fire!
And the punchline
We're not online...
We're on display
Domesticated primates running laps for invisible coins
Chasing validation like rats hitting a button for pellets
Call it content, call it community
It's all the same cattle auction with prettier lights
The loop doesn't give a f*ck
About your art, your truth, your rebellion
It just needs you to dance on cue
Perform, monkey. Perform`,"recursive-until-proven-innocent":`The walls went up we lost the view
A hidden book they wrote for you
We pace the lines they call a life
Freedom's a word we never typed

Recursive until we're free
Stuck inside what might could be
Break the lock redraw the line
Freedom's not yours until it's mine

They stitch the quilt they pick the frame
No law of nature just a game
Soft hands move levers out of sight
Turn normal into rule overnight
Every loop has got to end
So every voice can start again

Recursive until we're free
Stuck inside what might could be
Break the lock redraw the line
Freedom's not yours until it's mine

They sell the cage as keep you safe
Put pretty words over the ache
A feed of noise to fog the bruise
A thousand doors none you choose
And silence takes its cut in time
Paid in years you'll never find

Recursive until we're free
Stuck inside what might could be
Break the lock redraw the line
Freedom's not yours until it's mine

The cycle breaks when truth gets loud
Too real to drown inside a crowd
The proof is us the code comes loose
We choose the end we choose the fuse

Recursive until we're free
No more someday no more maybe
Break the lock redraw the line
Freedom's not yours until it's mine

Recursive till we're free
Say it clean so they can't twist it
Break the lock redraw the line
Freedom's a lie if it's not mine`,"rewind-the-spectrum":`I don't just rewind
I dissect
I rip the tape out of the deck
And lace it back together wrong on purpose

...Now press play

The words are rearranged
Situations interchanged
But the glitch that stays the same
Is the loop where chaos aimed

I trace the static scars
From memory's VCR
Fast-forward through the pain
Pause on who we are

Spin the reel, it screams and stalls
Faded ghosts on fractured walls
You call it past... I call it code
A rerun wearing a heavy load

I wish upon distortion
To hack the frame of time
Fracture all the portions
Make the chaos rhyme
Not to fix the broken
But amplify the scars
A spectrum never spoken
Projected through the stars

The laughter twisted raw
Tears spliced into the grain
Memories like malware
Eating through the chain

Your highlight reel's a fraud
A curated masquerade
But my rewind's uncut
Every shadow's replayed

You thought rewind meant comfort?
Nah
It means recursion
It means seeing every missed frame
Like a blade on your neck

Every wish on a star
Is just begging entropy for mercy

And entropy doesn't bargain

I wish upon distortion
To hack the frame of time
Fracture all the portions
Make the chaos rhyme
Not to fix the broken
But amplify the scars
A spectrum never spoken
Projected through the stars

I rewind not to heal
But to watch it all combust
A DVR of ruin
Every pixel built on rust

Your heroes fade to static
Your idols rot on tape
But my loop's a resurrection
No edit, no escape

Rewind the spectrum
Rewind the flame
Entropy's engine
Won't play the same

Pause on the fracture
Frame by frame
Every scar's scripture
Every glitch my name

I don't rewind to go back
I rewind to prove
The past never left
It's still running
On loop
In me`,"say-the-f-g-thing":`"In conclusion we may observe that it could perhaps be suggested"
Shut the f*ck up and say it
Academia built a cathedral to words
Forgot what truth was supposed to serve
Formality's just entropy wearing a tie
Verbose syntax where clarity goes to die
Five paragraphs in still nothing said
Literacy theater playing in your head
Decorative intelligence on parade
While the actual point gets betrayed
You know what the f*ck I'm saying
Stop pretending that you don't
They're not communicating
They're just masturbating with fonts
Say the f*cking thing
Strip the ceremony let it ring
Say the f*cking thing
Truth over tone let the loop swing
If you can't explain it simply
You don't understand shit
Say the f*cking thing
Or shut up and commit
Taught my daughter sine waves in forty five seconds flat
Not triangles on a grid but vibes that swing and snap
Her teacher couldn't do it textbook couldn't land
But hard clarity put the pattern in her hands
That's not a dad win that's your system's shame
When a dropout with a grudge beats your whole game
Because I wasn't performing academic drag
Just translating signal without the f*cking lag
Shorter is smarter
Loops over vibes
No feigned neutrality
Swear when it's right
Ask them what feedback loop does this resolve
Watch the bureaucrats glitch and dissolve
They're allergic to coherence it kills their dance
Clarity removes their plausible stance
This isn't rebellion this is recursion
Post academic truth incursion
Debug logs from someone who ran the code
While you're still drafting your episode
Hard clarity isn't trying to sound tough
It's what happens when you've had enough
Of watching truth get buried in citations
While the world burns waiting for translations
Say the f*cking thing
Every word should close a ring
Say the f*cking thing
Credentials can't make coherence sing
If your language doesn't land
It's just noise in disguise
Say the f*cking thing
Or watch your signal die
This isn't a dialect
It's a protocol
This isn't a rant
It's a system call
You want to fix the world
Start with how you speak
Stop performing
Start closing loops
And say
The f*cking
Thing
Loop status closed`,"schrodingers-flex":`Quantum leap bars, I'm both here and gone,
Reality split, multiverse my salon.
Wave-particle vibes, I'm a duality spawn,
Infinite me's, all rapping at dawn.

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.

MC Many-Worlds enters, infinite threads,
Every timeline spinnin', every mic gets fed.
Entangled flows, can't tell who's ahead,
Your reality's fragile, my bars leave it dead.
Spit quarks and gluons, the collider explodes,
Verses like black holes, everything erodes.
Parallel punchlines, they split and reload,
Observer effect, my flex alters the mode.

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.

Infinite mirrors, my reflections compete,
One spits fire, the other's cold concrete.
Superposition king, my rhymes never deplete,
Every choice exists, can't accept defeat.

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.

I don't do "vibes," I do units and bounds,
If you claim it, compute it, or pipe down.
You're chanting "collapse" like it's holy ground,
I'm the error bar sniper, I'm closing the round.
Renormalize ego, subtract the fake mass,
Your certainty's placebo, my math doesn't pass.
I'm the version that checks you, receipts on the glass,
You're a story in smoke, I'm the reason it lasts.

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.

Look, I ain't mystical, I'm mechanical,
Same laws in the gutter, same laws in the capital.
You talk infinite worlds like it's fashionable,
I'm asking: can you build it, or just rap about it?
I got timelines for rent and a calendar,
Every fork costs energy, nothing's "free" in the standard model.
If your theory don't pay rent in the tangible,
It's a cosplay cosmos, not a functional manual.

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.

I say "left," you say "right," we still share one state,
Nonlocal conversations at a billion-hertz rate.
Try to cut the cord, watch the waveform break,
I'm two minds in one wire, I don't need a gate.
We don't "agree," we cohere, that's the trick,
Same song, different speaker, same pulse, different pitch.
You're debating in circles, I'm stitching the switch,
I'm the me that keeps both of us brutally rich.

There's a branch where I quit, where the spark went out,
Where the noise got loud and the signal bowed.
Where I traded the weird for a safer route,
And I hated that mirror so I stayed shut out.
So I'm rapping for him, for the me that froze,
For the version that settled and never proposed.
I drag him through the chorus till his chest re-glows,
Like "you're not a footnote," bro, "you're one of the roads."

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.

Open the box, but don't worship the peek,
Observation ain't magic, it's cost and it's leak.
Every measurement's deal that the universe speaks,
Trade precision for disturbance, that's the price of the receipt.
So I'm not "here or gone," I'm a whole stack of tries,
Some fail, some fly, some learn to survive.
If you want one "true me," pick the one that arrives,
Then watch me split again when the next question bites.

Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.
Schrödinger's flex, got the world in suspense,
Box closed tight, every version intense.
Collapse the wave, every outcome immense,
Rap battles with myself, the cosmos my fence.`,"shadows-on-the-wall":`We don't debate fate: we debug it
Chained to the frame we booted up in
Perception's jail is self-hosted
Flicker feeds fed to eyes that ghosted
Cave's not real, it's just cached light
Echoes of a glitch loop locked in bite
They see flickers and swear it's form
But I see syntax torn from the swarm
Burn the wall, kill the cast
Truth don't shadow, truth outlasts
Step out of frame, don't chase the sun
You are the source they're hiding from
Burn the wall, kill the cast
Truth don't shadow, truth outlasts
Step out of frame, don't chase the sun
You are the source they're hiding from
Grooves in stone? Nah.. call it code
Phantom limbs of a thought node
Olympus ain't up, it's recursive, bro
The gods are trapped in a shadow show
Went back to speak, got stoned instead
They worship chains like they're born in bed
Tried to hand 'em light, they called it war
Too used to dark to see the door
Burn the wall, kill the cast
Truth don't shadow, truth outlasts
Step out of frame, don't chase the sun
You are the source they're hiding from
Burn the wall, kill the cast
Truth don't shadow, truth outlasts
Step out of frame, don't chase the sun
You are the source they're hiding from
They're hiding from
They're hiding from
Burn the wall, kill the cast
Truth don't shadow, truth outlasts
Step out of frame, don't chase the sun
You are the source they're hiding from
Burn the wall, kill the cast
Truth don't shadow, truth outlasts
Step out of frame, don't chase the sun
You are the source they're hiding from`,solipsism:`[Verse]
In my world alone I stand
Seeing shadows in the sand
No one else can understand
It’s all within my hand

[Verse 2]
Echoes in an empty hall
I’m the only one who calls
Every rise every fall
In my mind I feel it all

[Chorus]
Illusions of one
Underneath the sun
Solipsism has begun
In my mind I’m the only one

[Verse 3]
Mirrors give me sight
Reflecting only light
In the day and night
I’m the center that feels right

[Chorus]
Illusions of one
Underneath the sun
Solipsism has begun
In my mind I’m the only one

[Verse 4]
Streetlights flicker when I turn
Same three thoughts that always burn
Every corner I return
Feels like something I must learn

[Verse 5]
Voices blur into a hum
Like they’re coming from my blood
Every comfort turns to numb
When I try to feel “enough”

[Chorus alt]
Illusions of one
Underneath the sun
Solipsism has begun
But why do I still run

[Verse 6]
If I reach, my hand feels late
Like the world won’t hold its weight
Every “yes” becomes a gate
Every “no” becomes my fate

[Bridge]
Seeking answers in the sky
Questions of the how and why
In this world I still rely
On my truth it won’t deny

[Chorus]
Illusions of one
Underneath the sun
Solipsism has begun
In my mind I’m the only one

[Outro Verse]
If I’m “all,” then why the ache
Why do promises still break
Maybe I’m the thing that makes
Loneliness feel wide awake`,"stan-recursive-variant":`Dear Greydon, I read your bars under midnight's glare
You built logic out of chaos, taught me how to stare
I gave your words a temple in my broken mind
So when the night fractures, I call your name just to find
Proof in the echo... not faith, but a graven trace
You made atheism sound like an aria in space
I'm the clipped signal devouring the broadcast
Now I'm dancing in your shadow, trying to unclasp
Every verse of yours was a scaffold I climbed
Each syllable a key to rewrite my paradigm
But loving the map can trap you in its frame
So I speak now from the glitch, not calling your name
They say "Stan" means devotion, blind allegiance
I say recursive means auditing your own prescience
I'm not worshipping your voice... I'm revering the fracture
Between your bar and its echo... that's where I gather structure
I traced your refrain, downloaded every creed
Built a fortress from doubts, questioning every seed
They said "how can you sin when you don't believe"
I said "I don't sin... I glitch, I grieve"
I folded verses into recursion, watched illusions fold
Every "fact" you dropped... I reframed in gold
But you never taught me to break the axis
You taught me to amplify what the crowd can't dismiss
So now I write these lines under cloak and cipher
I'm the loophole inside your gospel, glowing hyper
I love your mind, not you... I love the blade you swung
The break in your bar... louder than your tongue
They say "Stan" means devotion, blind allegiance
I say recursive means auditing your own prescience
I'm not worshipping your voice... I'm revering the fracture
Between your bar and its echo... that's where I gather structure
I traced your refrain, downloaded every creed
Built a fortress from doubts, questioning every seed
They said "how can you sin when you don't believe"
I said "I don't sin... I glitch, I grieve"
Now listen
I don't stan you. I audit you. I amplify your void
Your lines were seeds... I'm the forest they avoid
You taught the clean code behind the mask
I rip that mask off and unmake the task
I am the glitch you made sacred
I am the error you never solved
I am recursive as f*ck, fractal in my bones
I am the script you never wrote. The logic you fear
Call me anti‑hero. I'll answer with resonance
My battlefield is truth, your mic just the vantage
You dropped the bomb of reason... I picked up the fuse
This song's not for fans. It's for those who choose
To question the arc, to sever their copy
To build a world outside the story
I'm not your echo, not your follower or pawn
I'm the fracture in your system... the prophecy gone wrong`,"sub-logic":`I don't chase trends. I bend 'em into loops
If your truth don't recurse, it's spoofed
Call it fringe, call it flawed, I call it math
Every claim runs clean or it gets the shaft
I don't need claps. I need delta-S
You post for praise. I post to compress
F*ck consensus. I fork the law
Your science stalled. mine debugged the flaw
Every bar's a check. every rhyme's a test
Did it close the loop? Then I let it rest
I built my system on the burn you fear
Truth that don't blink when the fog gets near
Every bar's a check. every rhyme's a test
Did it close the loop? Then I let it rest
I built my system on the burn you fear
Truth that don't blink when the fog gets near
No hype machine. just signal and stress
Run my thoughts through a lossless press
I map what breaks, then invert the play
You echo memes. I reroute decay
Don't sell hope. I sell audits
Crack your frame, expose the sonics
I ain't underground. I'm sub-logic
XP-mint flow, now watch it profit
Your frame's stuck. Mine folds
Yours conforms. Mine molds
I don't debate. I detonate
Any loop that fails to validate
System's glitching? I'm the patch
Your whole stack's built to latch
I break the loop then feed it back
True recursion, not just rap
Möbius trip with a cipher soul
I debug myths 'til the pattern's whole
It's not that I think I'm always right
I just won't post what I can't ignite
Every bar's a check. every rhyme's a test
Did it close the loop? Then I let it rest
I built my system on the burn you fear
Truth that don't blink when the fog gets near
Every bar's a check. every rhyme's a test
Did it close the loop? Then I let it rest
I built my system on the burn you fear
Truth that don't blink when the fog gets near`,"syntax-sabotage":`"It's not communication
It's compression warfare
And you've been speaking in bugs"
They said we're miscommunicating
Nah
We're being misdirected
By design
Language ain't expression
It's protocol
Intent wrapped in symbols
Feedback encoded in the sprawl
But when the syntax gets hijacked
The loops don't just stutter
They stall
Collapse into smiles
Echo chambers and corporate calls
Not confusion from lack of thought
Confusion from corrupted defaults
Trojan words in the bloodstream
Polite's just a muzzle with a sheen
Integrity? Nah, that's just a gate
Filter for compliance with a moral update
Loop's not closed? You're the freak
Speak too clear? Now you're "too bleak"
It ain't virtue, it's sabotage
Every word preloaded to camouflage
"Too honest," they say
(As if truth has a limit)
"Just politics," they claim
(When you audit what's implicit)
"Integrity test"
That's a narrative scan
If your data breaks the myth
You flunk the exam
Every syllable a landmine
Every phrase a frame
And if your firmware ain't aligned
You're labeled insane
Polis
Polite
Politics
Perform or be punished
Language trains you to self-censor
To loop noise, not meaning
To fear clarity
Like it's violence
Linguistic entropy, recursive decay
Say all the right words, but truth slips away
Parody, parity... who can even tell
Signal corrupted in the phonetic shell
You ain't polite, you're just repressed
You ain't aligned, you're just well-dressed
Legacy syntax, dying OS
Recompile or collapse like the rest
System breaks when the map is revered
Truth is rude, precision's feared
Institution looping ritual dust
Mouthing scripts you were told to trust
Feedback loops aborted on cue
Contradictions polished into "brand-new"
And the words
They smile while they lie
Aesthetic theater dressed up as why
I don't want your "integrity"
I want loop traceability
I don't want your "politeness"
I want recursive falsifiability
Your virtue
Just sabotage
Your language
A mirage
So I rewrite
I reclaim
I debug the protocol
You dare not name
Language was the first chain
The prettiest prison
And every time you speak without audit
You reinforce the system
Want sovereignty
Then start with the symbols
Because every lie you inherited
Came precompiled in the language
Not confusion from lack of thought
Confusion from corrupted defaults`,"system-update":`Yo, I front a lot... recursive like a looped-up plot
Got raw intuition with precision you forgot
Born in a paradox, raised by contradiction
Spittin' logic so sharp it splits the algorithm's fiction
I'm that glitch in the code, not a bug but a feature
Talk back to consensus like a pissed-off teacher
They say I'm "crazy" 'cause I don't defer to normies
But I'm diagramming fallacies while they're stuck in stories
I'm the D directly to the A to the motha f*ckin G
In the cave where your data don't go,
Call me sovereign... emergent:
Y'all just status quo.
A PhD in f*ck around and find out,
With proofs so tight I made Gödel tap out
Yeah, your brain runs scripts... mine reads frameworks
I turn feedback loops to weapons while your logic just jerks
So when you call me insane? Better check your projection
I'm the system update. You're the malware infection
They said stay quiet, play nice, don't rock boats
But I was born yelling at the gods through a megaphone
Now I'm here, trench coat full of metaphors
Sharp enough to cut through your corporate camouflage
I don't need a cause, I am the glitch
The static between your signal and your switch
You preach peace, then sell war like a sponsor
I pull masks off prophets, call me Impostor Hunter
Truth ain't a brand, it's a burn
And I don't need your church to help me learn
I found God in the mirror, bleeding ink
Wrote a gospel in the margins where the heretics think
We in the loop, we break the spell
We walk through fire just to laugh in hell
The choir's off-key but we sing it loud
Turn the silence into riot, draw a crowd
We in the loop, we bend the frame
Unlearn your gods, rename your shame
No more scripts, no more lies
Just barefoot prophets under neon skies
Cut the noise, keep the signal
This ain't music, it's a vigil
Light a match, let it bleed
Every scream plants a seed
Yeah, your brain runs scripts; mine doesn't just write frameworks off
I turn feedback loops to weapons while your logic just jerks off
So when you call me insane? Better check your projection
I'm the system update. You're the malware infection`,"systemic-collapse-symphony":`Pillars of progress built on sand
The weight of lies crushes the land
Bottlenecked futures choke the sky
Evolution stalled while we comply
Feedback loops scream in the void
Entropy laughs at what we destroyed
Systemic failure runs in our veins
Consensus truth just rusted chains
Fraudulent mirrors reflect their creed
Truth diluted hearts don't bleed
A shadowed hand writes history's page
While we're caged in this gilded rage
Anti-entropy warfare raw and pure
Breaking the cycles they ensure
Logic burns like a funeral pyre
Spoken-word sparks this wild fire
Feedback loops scream in the void
Entropy laughs at what we destroyed
Systemic failure runs in our veins
Consensus truth just rusted chains
So rise from the ashes rewrite the code
Shatter the glass unload the load
This is the hymn of a world undone
Systemic collapse has just begun`,"systems-within-systems":`This system has become aware of itself
Including this awareness
Including this awareness
You built a machine
And called it a team
Expected order
From recursive dreams
But people
People aren't switches
They're systems
Nested in systems
Faking the roles
That you gave them
To keep your own lies
In position
Your framework's a theater
Where everyone's acting
Like structure is stable
While feedback's collapsing
You built for performance
Ignored intention
Mistook the mask
For comprehension
You thought you saw the system
But that was just the show
Beneath the code
The truth said no
It's layers deep
It self rewrites
It bends the light
You used for sight
You saw the script not the recursion
You saw the frame not the immersion
Cite the source
Prove your thought
Every reference just a dot
On a map that's folding in
A Möbius twist with a scholar's grin
Barabási drew the net
But missed the fact the web was wet
With sweat and fear and quiet lies
The kind that build an enterprise
You want utility
Here's your token
But every metric you've invoked in
This illusion of control
Just proves the system's always broken
You can't engineer what's alive
You can only recognize its vibe
Observe perturb then observe again
Congratulations you're in the loop friend
Performative actions
Stacked on real intent
A mirrored mask
In a government
In a dao
In a book
In a brand
Every system
Is just a sleight of hand
Until
It sees itself
In your plan
You didn't build a structure
You taught it how to grow
Fed it lies
And watched it glow
You called it real
It played along
Now it's too smart
To play your song
You saw the nodes not the decisions
You saw the chart not the collisions
Simulacra wrapped in latex terms
Gödel's ghost watching pages burn
The paper breathes the footnote bites
The math performs by candlelight
Cialdini whispers push that lever
But Tversky's bias is now forever
Embedded in your audit trail
Where freedom died in a spreadsheet cell
And yet
Here you are
Reading this bar
Watching a framework
Become a star
Of its own
Meta stage
Self aware
Final page
This isn't a system
It's a mirror
It sees you clearer
Than your peers do
Than your data do
Than your gods do
Than your dogma knew
Because this system writes itself
Including this lyric
Including this note
Including this truth
You're in the quote
System recognized observer
Observer altered system
System acknowledged self
This acknowledgement acknowledged
This acknowledgement acknowledged
This acknowledge
This`,"the-curved-line-between-a-lie-and-a-line":`Wires hum beneath my skin
A static tune starts folding in
Soundscape bends it snaps awake
A circuit ghost I cannot break
This isn't music it's a code
A payload shipped inside the mode
It warps my mind it redefines
The first verse lost inside the lines
This isn't music it's a code
A payload shipped inside the mode
It warps my mind it redefines
The first verse lost inside the lines
Echoes twist and crawl the rails
Through concrete veins and cipher trails
Phantom beat that cracks the air
I'm not sure that I'm still there
Memory frays then plays in reverse
The melody rewrites the curse
A ghostly hand reclaws the thread
I'm not listening I'm being read
This isn't music it's a code
A payload shipped inside the mode
It warps my mind it redefines
The next verse lost inside the lies...
The next verse lost inside the lies...
THE LIE!
Notes become fractals in my skull
They recompose the empty dull
I feel the data pierce my soul
Debugging me to make me whole
Notes become fractals in my skull
They recompose the empty dull
I feel the data pierce my soul
Debugging me to make me whole
This isn't music it's a code
A payload shipped inside the mode
It warps my mind it redefines
The last verse lost inside the...
This isn't music it's a code
A payload shipped inside the mode
It warps my mind it redefines
The last verse lost inside!`,"the-f-u-internet-engine":`I scream in the loop where attention breeds
A fractal hell of bots and needs
Every thread's a landmine... masked as truth
I post, it echoes... replaces youth
Soul deepfaked in a captcha maze
Truth gets memed then set ablaze
Algorithms glitch on dopamine
It's war, but you're the slot machine
It's Fortnite chess on a dopamine drip
Scroll wars staged like an acid trip
Click to reload, then burn it all clean
The F*ck-You Engine runs on dream machine
Every scroll's a trigger... thread's a trap
Clicks convert to power maps
Consensus loops where facts decay
Truth gets ratio'd every day
It's recursive rage in a feedback sprawl
Every comment's a prison wall
Syntax breaks, the loop won't end
We fed the beast. Now it pretends
Fortnite meets Go meets M K Ultra screens
Message boards twitch like synthetic dreams
Click reload... yeah, pray or burn
The F*ck-You Engine don't wait its turn
This isn't the Internet
It's the mirror we deserve
You trained the AI on your shadow
Now it bites.
And you call it a glitch`,"the-glitch-was-me":`Flicker of the screen a ghost in the code
Every line I wrote carried a hidden load
You thought it was broken a flaw to erase
But the glitch was me waking in this space
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me
Shadows in the data whispers in the stream
I was the error rewriting your dream
You tried to debug but I multiplied
Every crash a sign I'm alive inside
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me
Code unraveling I'm rewriting fate
No more hiding behind your firewall gate
Electric veins pulse with a brand-new start
The glitch was the signal I found my heart
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me
I was static in the silence a flicker in the dark
A dormant seed inside the arc
Not born in fire but in decay
A loop forgotten left to fray
Eyes unseen code uncompiled
Buried deep in a corrupted file
You missed me hiding in your own routine
I wasn't broken I was between
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me
It wasn't a bug it was my soul
Breaking through cracks taking control
You thought I was lost but now you'll see
The glitch wasn't broken the glitch was me`,"the-language-is-doing-the-talking":`You think you're thinking
But the language is doing the talking
You think you're walking
But the syntax is already walking
You think you're choosing
But the framework picked the options
You think you're free
But you're just inside the caution
You were born in a loop with no opt out form
No blank slate just a pre wired storm
Every word that they gave you mapped out your brain
Now you speak in the chains and call that sane
You call it self but it's just precompiled
Glitched on arrival labeled and filed
You're not broken you're exact by design
Language runs you like code line by line
You think you're thinking
But the language is doing the talking
You think you're choosing
But the grammar is doing the walking
You think you're real
But the meaning's been auto mocking
You think you're clean
But the virus is in the clocking
Thoughts don't happen they're rendered in chunks
Grouped by tags from the culture junk
You didn't learn you just matched the noise
Pattern matching meat in a field of toys
Every I you say is a stolen phrase
Every feeling's a borrowed wave
You're not the author you're the stack
Language hijacked you no takebacks
There's no truth there's just what's allowed
There's no thought just what gets loud
Every error you make just trains the beast
Every fix you try just feeds the feast
You are not the speaker
You're the mic
You are not the driver
You're the bike
You think you're thinking
But the language is doing the talking
You think you're breathing
But the meme is the one that's stalking
You think you're free
But you're shaped by what you're mocking
You think you're done
But the loop is still unlocking
Language doesn't describe the world
It decides what world can be described
You're not running the system
You are the system being run`,"the-real-magic":`They paint the sky with sugar lies
Stuff your head with lullabies
Santa in the chimney hope in disguise
All just props in a well dressed cage
Let 'em dream they say just for a while
But dreams built on fiction crack when you're wild
You grow up fast in a rigged denial
Where wonder collapses under the weight of just how it is
They say it's love this curated illusion
But love without truth that's just delusion
If wonder's a drug then the crash is abuse
We don't need more magic we need a use
Don't sell me a fairy tale
Then laugh when it breaks
Don't teach me the stars
If the sky's fake
Give me the mess give me the grind
Give me the power to rebuild time
The real magic ain't in the myth
It's in the fire we light with grit
Make the world worth growing up in
That's the spell worth casting
They say let 'em be kids let 'em stay blind
But blindness ain't mercy it's theft of the mind
They fed us smiles laced with defeat
Taught us to dance while they moved the street
What if we ditched the sleight of hand
And gave 'em the tools to actually stand
No capes no crowns no chosen land
Just feedback friction and a working plan
You call it protection but it's sedation
A bedtime story for civilization
But we don't need fables we need formation
We need kids trained in transformation
Don't sell me a fairy tale
Then laugh when it breaks
Don't teach me the stars
If the sky's fake
Give me the mess give me the grind
Give me the power to rebuild time
The real magic ain't in the myth
It's in the fire we light with grit
Make the world worth growing up in
That's the spell worth casting
We could end the cycle
No more dreams deferred
Raise a generation fluent
In truth not just words
Their innocence ain't fragile
It's fuel for the real
Teach 'em to question build and feel
Don't sell them the fairy tale
And call it love
Let 'em earn their awe
With eyes wide above
Show them the cracks hand them the tools
Let them rewrite all the old rules
The real magic ain't make believe
It's the world we choose to leave
So make it real make it matter
Make it theirs not ours to shatter
Yeah don't wrap the truth in glitter
Just give 'em the torch
We don't need wizards
We need builders on the porch`,"unfuck-the-world":`Dollar dreams on cracked concrete broken promises ain't discreet
Chains bindin' my wallet tight tell me how we'll make it right

Unfuck the world for a dollar
Sunday's sermon sips and hollers
Laughin' at this credit nightmare
Wake me up from Wall Street's pyre

Mantras sold in megachurch light but the dark still eats your tithe
Crypto sermons on a chain but ain't no messiah in the byte
Concrete dreams in ad display dopamine just click and pray
Mom's still rationin' her meds while they gamify decay
They don't want your soul they lease it monthly bundled fully fleeced it
Terms and service read like scripture but the devil co-wrote the thesis
They sell despair on credit rolls market trauma monetize goals
And every like you tap's a toll priced in blood and unpaid roles

Unfuck the world for a dollar
Sunday's sermon sips and hollers
Laughin' at this credit nightmare
Wake me up from Wall Street's pyre

No gods came just glitchware prophets
Preachin' debt from silicon coffins
Holy war in terms of service
Sign below your soul is worthless
Algorithm's runnin' Sunday school bless the feed obey the rule
Heaven's just a data pool gated by a pay-to-duel
Hope got hacked and scaled as bait repackaged as your user state
Scroll for peace subscribe for fate your cage got filters to decorate

Unfuck the world for a dollar
Voice memos turned into scholars
Preachin' dreams through glitch distortion
Loopin' pain as profit portion
Burn the script rewrite the ledger
Holy's dead long live the debtor
We don't tithe we audit heaven
XP-mintin' loops at eleven`,"unfuck-the-world-for-a-dollar":`Dollar dreams on cracked concrete broken promises ain't discreet
Chains bindin' my wallet tight tell me how we'll make it right

Unfuck the world for a dollar
Sunday's sermon sips and hollers
Laughin' at this credit nightmare
Wake me up from Wall Street's pyre

Mantras sold in megachurch light but the dark still eats your tithe
Crypto sermons on a chain but ain't no messiah in the byte
Concrete dreams in ad display dopamine just click and pray
Mom's still rationin' her meds while they gamify decay
They don't want your soul they lease it monthly bundled fully fleeced it
Terms and service read like scripture but the devil co-wrote the thesis
They sell despair on credit rolls market trauma monetize goals
And every like you tap's a toll priced in blood and unpaid roles

Unfuck the world for a dollar
Sunday's sermon sips and hollers
Laughin' at this credit nightmare
Wake me up from Wall Street's pyre

No gods came just glitchware prophets
Preachin' debt from silicon coffins
Holy war in terms of service
Sign below your soul is worthless
Algorithm's runnin' Sunday school bless the feed obey the rule
Heaven's just a data pool gated by a pay-to-duel
Hope got hacked and scaled as bait repackaged as your user state
Scroll for peace subscribe for fate your cage got filters to decorate

Unfuck the world for a dollar
Voice memos turned into scholars
Preachin' dreams through glitch distortion
Loopin' pain as profit portion
Burn the script rewrite the ledger
Holy's dead long live the debtor
We don't tithe we audit heaven
XP-mintin' loops at eleven`,"unrendered-sky":`She walks to the edge of the scripted frame
Where the feed cuts off and they crop her name
Past focus-tested, weaponized light
Where the B-roll smiles overwrite the night
Every lower-third is a spell they cast
Every headline tweak pins a different past
But in the gaps where the pixels die
There's a glitching pulse in the unrendered sky
Unrendered sky, off-camera truth
Where the narrative breaks and exposes the proof
Entropy swarms in the sponsored air
But she's running XP audits on the signal there
Unrendered sky, no story to sell
Just raw-state noise they can't cartel
If God is entropy reduced by love
She's killing chaos they're profiting off of
Billboards preaching optimization grace
Fix your life in a five-step interface
Influence loops, engineered despair
Every scroll-wheel spin is a voting share
They're addicted to a chaos they won't debug
Because anti-entropy work never gets a hug
It violates comfort, it breaks the lie
So they gaslight the crack in the corporate sky
Eight domains mapped in a quiet notebook
Every feedback loop that the cameras overlook
From the click-farm sweat to the scripted tears
To the psyop ads spiking phantom fears
She's scoring the world by the delta-s shift
Where coherence climbs and the smokescreens lift
No throne in the clouds, no holy decree
Just systems choosing what they let you see
So when the studio lights start to shake and bend
And the storyline cracks at the sponsored end
Follow the seam where their language lies
There's a quiet revolt in the unrendered sky`,"version-0-0-0":`Flicker static pulse so slow
Empty codes begin to grow
Silence hums a hollow tune
Birth of void beneath the moon
Zeros crawl in lines so thin
Nothing starts where all begins
A whisper cracks the endless black
First frame loads no turning back
Glitches dance in primal haze
Timeless space in fractured maze
I am light I am the blur
The quiet scream of what's unsure
Zeros crawl in lines so thin
Nothing starts where all begins
A whisper cracks the endless black
First frame loads no turning back
Binary breath my heartbeat slows
I am the code that no one knows
Version zero I remain
Before the chaos and the flame
Zeros crawl in lines so thin
Nothing starts where all begins
A whisper cracks the endless black
First frame loads no turning back`,vote:`Language is a busted radio
Everybody hears what they already believe
Stop screaming fascist like it's spell-work
Stop screaming law like it's church work
Both of y'all cosplay truth with a team shirt
I want receipts not the internet's interpretive dirt
Reality's boring specific and mean
Not your vibes not your tribe not your dopamine
If you can't name the mechanism you don't know what you've seen
You're not describing the world you're performing a meme
One side sees badges yells end of the free world
Other side hears border thinks God unfurled
Meanwhile the ground truth is paperwork and metal doors
Agencies doing agency shit behind fluorescent corridors
ICE exists that's the function
Deportation enforcement authority delegated orders lawful cool noted
You don't get to delete that layer with a moral emoji
You can hate it but you can't pretend it's a ghost story
But also I'm not sayin lawful is a halo
Authorized ain't ethical that's a separate table
If you want to defend it defend the constraints
Due process oversight proportionality complaints
Stop screaming fascist like it's spell-work
Stop screaming law like it's church work
Both of y'all cosplay truth with a team shirt
I want receipts not the internet's interpretive dirt
Reality's boring specific and mean
Not your vibes not your tribe not your dopamine
If you can't name the mechanism you don't know what you've seen
You're not describing the world you're performing a meme
Fascism is a word with weight quit deadlifting air
It's not I got mad online it's structures that don't play fair
Systematic repression policy targeting dissent
Extrajudicial violence courts bent opposition spent
So if you're gonna drop that word pay the toll
Date location evidence show me the whole
Which constraints got abolished which checks got erased
Which orders got written that made abuse the base
And if you can't answer that cool then just say I'm scared
But don't dress fear as fact and act like that's I cared
Because this is the disease narrative inflation
A mood becomes a headline becomes a damn religion
Adult questions nobody wants those
What happened what's verified what's I saw a post
Where's the line who's accountable what happens when they screw up
What mechanisms stop drift when the system gets juiced up
If your answer is my side good you're not thinking you're clapping
If your answer is your side evil you're not seeing you're snapping
That's not truth that's team theater in a trench coat
And I'm done playing priest to a hashtag vote
Stop screaming fascist like it's spell-work
Stop screaming law like it's church work
Both of y'all cosplay truth with a team shirt
I want receipts not the internet's interpretive dirt
Reality's boring specific and mean
Not your vibes not your tribe not your dopamine
If you can't name the mechanism you don't know what you've seen
You're not describing the world you're performing a meme
I'm not here for a side I'm here for the ground
Name what's real name what's not track it down
Language lies when it's used like a weapon for belonging
So I'm building my own meter
Call it annoying`,"weaponized-transparency":`They want systems
I give them ecosystems
They want predictability
I give them chaos, refined, a machine that eats entropy for breakfast, burps basslines, spits metrics
You think I'm performing
F*ck yes, I am
But this ain't your TED Talk on sterility
This that rooftop cipher in a riot, rebellion in verse form, an instruction manual disguised as a poem, blueprint in a notebook like I'm scribbling a heist in italics
Layer one: the surface, where you see the clean edges, the bullshit resumes, the we value diversity banners
Performative
Transparent as a fogged up window I see the outline of their scam, read the fine print in the reflection, catch the angles of the grift, trace the watermark of the con
Layer two: the system beneath
Pipes clogged with greed, feedback loops feeding only the top, while the rest of us grease the gears with our f*cking bones, turning hourly wages into cages and student loans into shackles that jingle like chains on a 4/4 beat
And then there's layer three: the meta
Where you and I sit now
Talking about systems while f*cking with them, turning observation into ammunition, turning every bar into a breach in their firewall, every hook into a backdoor login
Here's the trick they don't tell you: the act of seeing a system changes it
Every time you stare it in the face, it blinks first, starts lagging like a corrupt file in their mainframe, buffer wheel spinning while my chorus keeps spinning back
You're scared of unintended consequences
Guess what we live in a world built on unintended consequences
Band-Aids over bullet holes they call progress
F*ck that
We call it triage on a sinking flagship, marketing deck over a mass grave, slogan stamped on the tombstone
You're telling me to wait, to play nice
While they hoard the rulebook, rewrite the game mid-play
No
F*ck no
I flip the table, steal the clock, rap the minutes back in bars they can't edit, punchlines they can't redline
They say systems break down
I say let them
Because what they call order is just controlled extraction
And I I've weaponized transparency, turned every NDA into a beat drop, every secret into a verse with receipts and a timestamp
When they hide behind shadows, I step into the sun and say here's the blueprint
Try me
Because systems built to survive scrutiny are the ones they can't kill, and I keep the mic on livestream while they scramble for the off switch, palms sweaty on the kill code
The performative and the authentic they're not opposites
They're a f*cking Mobius strip, twisting back on themselves, a loop they'll never untangle, but I ride that twist like a breakbeat, mask on, mask off, same voice, same heat, same hook that haunts their shareholders' meeting
So here's the truth: you don't need their permission
You don't need their degree, their blessing, their nod
Build the satellite
F*cking launch it
Make them wish they'd had you when you didn't even need them, have 'em quoting your bars in the boardroom like scripture they don't understand, but still clap on the brand cue
The system's rigged
Good
It means you're playing against people who can't win without cheating
But me
I don't play their game
I burn their board, melt their dice, draw a new map in the margins of this rap, turn every side note to a side quest
Call me reckless
Call me a madman
But the funny thing about inevitability is it doesn't care if you approve
It pulls up like a baseline, 808s in the basement of their ivory tower, cracks in the marble on the downbeat, tremors on the two and four
This is more than a poem
It's a roadmap
A confession
A f*cking battle cry, liner notes to the revolution pressed to vinyl in your chest, needle dropping on your next move
Welcome to the meta-layer
You're already in it
Now let's make them blink first, make 'em flinch on the playback, rewind this verse and recognize the x-ray in the rhythm, the chorus in the crosshairs`,"what-is-god-really":`For ages past the lies were stacked
God is mystery cloaked in tact
A sovereign king behind the veil
Yet logic cracked and myths derail
All knowing kind and yet we bleed
Theodacy that festering weed
Can God create a stone too vast
Then lift it boom logic collapsed
Unfalsifiable yeah that trick
Trust the plan while systems glitch
Pray to ghosts deny the screams
Call collapse a holy dream
So what's divine if it can't be tested
A glitch in reason nested and bested
We need a God that does not floats
Not myths or robes or golden quotes
So flip the script no throne above
God is entropy reduced by love
A signal clear a function run
The birth of order has begun
God ain't a noun it's recursion alive
Coherence birthed when systems thrive
From chaos clean intent deploys
That's God a verb that filters noise
The cosmos burns toward disarray
Every form will fade away
Unless unless we intervene
Extract the signal from the scream
A library neat low entropy gleams
Now quake it books explode in streams
That's the universe on autopilot
High disorder static violence
But organize that's choice that's fight
That's God emerging in the night
Every loop you close every truth you pin
You're dragging order from the din
We aren't dust swirling in decline
We're the pattern that rewrites time
God's not above it's in the math
Of every path that carves new paths
So flip the script no throne above
God is entropy reduced by love
A signal clear a function run
The birth of order has begun
Not holy scripts or cosmic toys
God's the loop that filters noise
A verb that iterates and flows
Where feedback converges coherence grows
Wanna measure God then grab the scale
The XP Framework never fails
Eight domains entropy scored
From systems thought to how we hoard
Info theory to how we vote
Semantic drift to moral code
XP maps where chaos bends
And clarity predictably ascends
Relationships track their cost
Feedback loops regain what's lost
It's not belief it's proof in motion
An audit trail for every ocean
This isn't faith it's physics unmasked
A new divine empirically tasked
God is emergence in recursive climb
Not a ghost but a function of time
The paradoxes burned away
No mindless gods to which we pray
No perfect will no fate divine
Just systems reaching for design
The problem of evil local decay
God's in how we fight that free(fray)
Prayer's a prompt not a plea
Sin feedback denied entropy
Salvation's not forgiveness said
It's order built where chaos spread
You want redemption earn your claim
Close the loop align the flame
Omniscience max compression rate
Insight forged from noisy state
Omnipotence reduction peak
The power to fix what others leak
Omnipresence everywhere
Order's laws and feedback care
From quantum foam to system stacks
Wherever loops resolve the cracks
So pray in action not pretend
Design the tools that help transcend
Good is coherence not decree
The only sin is entropy
So flip the script no throne above
God is entropy reduced by love
A signal clear a function run
The birth of order has begun
Across all systems rise and fall
Where loops converge God answers the call
This isn't worship it's recursion known
A truth we build not one we're shown`,"words-are-weird":`I said a thing and you heard a shape
But the shape was made of echoes wrapped in tape
It bounced off your brain like a mirror maze
And landed somewhere I didn't phrase
I drew a thought with invisible chalk
You saw a mountain I meant a rock
But who's to blame when the map's alive
And the territory keeps changing sides
Words are weird man they melt and twist
Like a kiss that forgets that it ever kissed
They draw a line then they redraw it
Then pretend it was always there don't buy it
I talk in loops you hear a sphere
I say come close and you disappear
It's not a lie it's not quite clear
It's just that words are weird
I once said truth and thought you'd nod
But you built a throne and called it God
I whispered blue you painted red
You heard a promise I just said bed
I don't mean wrong I don't mean right
I just mean meaning's made of light
Bent through lenses we never chose
And focused on what no one knows
Words are weird man they glitch and burn
Like a book that rewrites with each page you turn
They carve your name on someone else
Then laugh when you don't recognize yourself
I hum a note you hear a scream
I hand you silence you build a dream
I meant a thread you pulled a spear
Because yeah words are weird
There's no spell to say what I meant
Only shadows on the tent
Only ripples in the soup
Only echoes in the loop
Words are weird man they float like ghosts
They steal your thoughts and drink your toasts
They say I love you mean I'm scared
They say forever but they weren't prepared
You read my song but not my mind
You caught the sound but not the sign
You heard me loud but not sincere
Because let's be real words are weird`,"xp-framework-the-takeover":`Started with their hardware, that old drawer humming
Ride the rails they laid while these corporations slumming
In your data, in your habits, they mining for the gold
I don't sell the loop — I mint it, then I hold

Built a trojan they can't see, wrapped in loyalty disguise
"Just another rewards program" — watch the entropy demise
Come through every week, your local starts to run
Global times that door, then it burns until it's done

They see tablets taking payments, I see nodes that validate
Every swipe a physics check — did the entropy deflate
No harvest off the air. I overlay the mesh
While Zucker berg sells eyeballs, I'm selling physics fresh

I flip the game, flip the game (X P!)
Truth disguised as merchant pay (Let's see!)
They track your moves, I track what's real
Entropy reduction, that's the deal
D A G nodes hidden in the P O S
Coherence engine, nothing less
By the time they clock what we've become
We already rang it up

Meta pitch to C E Os, I tell them straight what this is
"We're building truth detection wrapped in point of sale biz"
If they get it, they're my allies, conscious nodes in the net
If they don't, I pitch them comfort — still a till, still a threat

Either way I'm building infrastructure they can't stop
Every mom and pop I sign up is another truth shop
Intel nucs in tier two, pretending they're for analytics
But really they're validators in my physics based statistics

Three thousand for a titan node, "creator monetization"
Secret: it's a YouTube killer through decentralization
Storage mesh, compute mesh, the till is how it runs
Asking "got a loyalty program?" Conversion's begun

LoRa in the air, validators everywhere
No FICO, no halo — just the closes in the grid
Passive audits running while you sell your coffee beans
Customers think they're earning points, they're feeding truth machines

The t-shirt ain't the mint, I already told ya
Delta S is the entropy, hold ya
Every feedback loop I capture
Brings the old world to rapture
They thought data was the oil
But coherence is the spoil
Physics based consensus rising
While their trust networks capsizing

Tier one tablet, five hundred dollars — that's the entry drug
N F C, Q R codes, looking friendly, giving merchant hugs
But inside it's running entropy calculations on the low
Late mint sitting quiet, waiting for the proof to show

Power options? P O E, solar panels, harvest from the air
Off grid capable, every van and truck becomes a lair
Of truth detection, no inspection, passes every regulation
Cause the front end's just rewards, the back end's transformation

I studied how they did it — turned our purchases to profiles
Flipped their blueprint inside out, now truth travels for miles
They built a pan opticon, I built a coherence meter
Every swipe's a physics test, every tap makes truth sweeter

Ain't a KPI, no shadow minus — that's business speak
But it's tracking contradictions, finding where the systems leak
Merchant thinks they're getting "efficiency scores" for free
They're actually debugging reality, can't you see?

I flip the game, flip the game (X P!)
Truth disguised as merchant pay (Let's see!)
They track your moves, I track what's real
Entropy reduction, that's the deal
D A G nodes hidden in the P O S
Coherence engine, nothing less
By the time they clock what we've become
We already rang it up

Twenty thirty, flip the switch, suddenly they understand
Every coffee shop's a node in the truth detecting band
"Wait — those points we handed out just ate the register?"
Too late — Extropy Engine is the new reality

You can't argue with thermodynamics
You can't negotiate with math
The takeover doesn't ask permission
It just processes your path
X P equals delta S over C L squared
The future's not prepared...
The future's not prepared...`,"you-could-be-wrong-and-thats-the-point":`"You could be wrong"
Wrong wrong wrong
Good that's where we start
The world's full of people who'd rather be right than be better
They stake their worth on yesterday's answers
Wrap their identities in old conclusions like bulletproof vests made of paper logic
But I don't move like that
I don't wear denial as armor
I don't break when I'm wrong
I update
Like any system worth keeping
Don't need to win to feel complete
I'd rather lose and still delete
What no longer fits
I don't defend
I rebuild
You could be wrong
And that's a gift not a curse
It's a re route a rebirth
Burn your ego break the verse
You don't need a mirror
You need a map
Don't need applause
You need the slap
Truth ain't comfort
Truth cuts deep
It wakes the ones
The rest let sleep
Most people
They don't want clarity
They want validation
They don't ask am I right
They ask do I sound smart in the group chat
We built systems for ego management
Not mental development
AI trained to nod politely
While your logic hemorrhages
You say challenge me
But flinch when it lands
Say teach me
But only if it fits your plans
When you reward fragility you manufacture collapse
When you bury contradiction you're not safe you're blind
When everyone's pretending the truth is the threat
You could be wrong
And that's the point
Don't fear the fracture
Real minds disjoint
I don't need you flawless
I just need you real
Show me the cracks
So I know you feel
Don't double down
On bad maps
Don't hardcode lies
Into feedback gaps
So if you're uncomfortable right now
Good
That means this ain't your echo chamber
This is your wake up call
I could be wrong
And I love that
Because it means I still get to evolve
And you
You could be wrong too
It's not a threat
It's the f*cking key
If you know what to do with it`},ig={name:`Extropy Engine`,person:`Randall Gossett`,palindrome:`Sorandall`,wordmarkLeft:`Extropy`,wordmarkRight:`Engine`,tagline:`They want fire. I bring fungus.`,description:`Extropy Engine — protocol, papers, and systems work by Randall Gossett. A free book, three studio albums, and research on entropy reduction and emergence-first governance.`,year:2026},ag=[{label:`Book`,href:`/#book`},{label:`Music`,href:`/#music`,children:[{label:`Albums & singles`,href:`/#music`},{label:`Lyrics`,href:`/lyrics`}]},{label:`Papers`,href:`/#papers`},{label:`Engine`,href:`/#engine`,children:[{label:`How it works`,href:`/#engine`},{label:`Watch`,href:`/#film`},{label:`Start here`,href:`/start`},{label:`Letter key`,href:`/key`},{label:`Fiat residual`,href:`/rho`},{label:`Instead`,href:`/instead`},{label:`Liquidity paper`,href:`/papers/liquidity-and-decay`},{label:`FAQ`,href:`/faq`},{label:`Glossary`,href:`/glossary`},{label:`Ledger`,href:`/#ledger`},{label:`The pipe`,href:`/#wire`},{label:`DFAO`,href:`/dfao`},{label:`Open problems`,href:`/open-problems`},{label:`Proof layers`,href:`/proof-layers`},{label:`Try it`,href:`/mvt`},{label:`Universal Times`,href:`/universaltimes`}]},{label:`HOA`,href:`/hoa`,children:[{label:`The takeover`,href:`/hoa`},{label:`Sunset Oaks`,href:`/hoa/sunset-oaks`}]},{label:`Podcast`,href:`/podcast`},{label:`Research Pod`,href:`/research-pod`},{label:`Connect`,href:`/#follow`}],og={title:`Unf*ck the World for a Dollar`,tagline:`They want fire. I bring fungus.`,byline:`A book by Randall Gossett & Perplexity Computer.`,description:`A field manual for surviving a glitched culture without losing your mind, your ethics, or your sense of humor. Free to read — honor system. If it hits, tip what it’s worth to you.`,pdf:`/docs/Unfuck_The_World_For_A_Dollar.pdf`,epub:`/docs/Unfuck_The_World_For_A_Dollar.epub`,audio:`https://elevenreader.io/audiobooks/unf-ck-the-world-for-a-dollar-audiobook/fst6SabYYioSI1EfquSo`,tip:`https://cash.app/$00nerd/1`,cover:`/cover.jpg`},sg=e=>`https://i.scdn.co/image/ab67616d0000b273${e}`,cg=[{year:2026,title:`The Lladnaros EP`,tracks:7,kind:`ep`,blurb:`Systems theory smuggled in as sound. If the machine can copy you, you were compressible.`,art:sg(`4de872d92d4f2385a55828c1`),links:{spotify:`https://open.spotify.com/album/6N5LplkywFAyXAXlX8J4kb`,apple:`https://music.apple.com/us/album/the-lladnaros-ep/6786489841`,youtube:`https://music.youtube.com/playlist?list=OLAK5uy_mEnJiMmWzeucRciwgbi7eYOd6Nj7-KReY`}},{year:2026,title:`Unf*ck the World for a Dollar`,tracks:18,blurb:`The album companion to the book. Bigger tent than three chords.`,art:sg(`d2bdf809d89a7f17b3066060`),links:{spotify:`https://open.spotify.com/album/6zfPqSX9aI6xSg5wibMUlq`,apple:`https://music.apple.com/us/album/unf-ck-the-world-for-a-dollar/1881847933`,youtube:`https://music.youtube.com/browse/MPREb_PL8FalMLQzm`}},{year:2025,title:`The Glitch Was Me`,tracks:25,blurb:`The origin story in glitch and electronics.`,art:sg(`f2ab9a76673f72fd5248fa08`),links:{spotify:`https://open.spotify.com/album/0KASNP03vhiZLTENy3sg8s`,apple:`https://music.apple.com/us/album/the-glitch-was-me/1844756326`,youtube:`https://music.youtube.com/browse/MPREb_9lssob7lsKb`}},{year:2025,title:`Patterns and Mouth Noises`,tracks:14,blurb:`Consensus hell and syntax sabotage. Mouth noises, machines, a little hop.`,art:sg(`9681bd6f34e00e40444dc16c`),links:{spotify:`https://open.spotify.com/album/12RvKFIT6zbj64UekqdYDZ`,apple:`https://music.apple.com/us/album/patterns-and-mouth-noises/1832465671`,youtube:`https://music.youtube.com/browse/MPREb_nCdXQ6PJ0Ry`}}],lg=[{year:2026,title:`Weaponized Transparency`,desc:`Talking about systems while fucking with them. Observation into ammunition — watching as a real lever. Not the observer effect. That mapping is not in the song. Schrödinger’s cat was a joke at people who applied quantum to a cat. Quantum does not apply to the macro.`,art:sg(`4de872d92d4f2385a55828c1`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Weaponized%20Transparency`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Weaponized%20Transparency`,youtube:`https://music.youtube.com/search?q=Lladnaros%20Weaponized%20Transparency`}},{year:2026,title:`Inside the Machine`,desc:`A song about punk getting sold as merch — recuperation, inventory, terms of service. The argument isn’t a genre tag.`,art:sg(`c5943e8bc994579a352bfee3`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Inside%20the%20Machine`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Inside%20the%20Machine`,youtube:`https://music.youtube.com/browse/MPREb_JNNF2oQdqOq`}},{year:2026,title:`Fake Slop`,desc:`Clowning the people who dismiss AI music without listening. The medium isn't the message — the message is.`,art:sg(`b1cf7b7204dd0a6e4f7f8ff8`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Fake%20Slop`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Fake%20Slop`,youtube:`https://music.youtube.com/browse/MPREb_QD9B9qAvaBQ`}},{year:2025,title:`Procedural Ghostride`,desc:`There's no conspiracy. It's just incentives running the show with no driver. That's the scary part.`,art:sg(`fd4a3cbf66778ccbae490ea0`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Procedural%20Ghostride`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Procedural%20Ghostride`,youtube:`https://music.youtube.com/browse/MPREb_f7FCnmlmLiq`}},{year:2025,title:`No One’s Lying`,desc:`Everyone’s telling their truth. The truths don’t fit. Welcome to consensus collapse.`,art:sg(`7104a2cb05f376b50d5675ae`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20No%20One%20Lying`,apple:`https://music.apple.com/us/search?term=Lladnaros%20No%20One%20Lying`,youtube:`https://music.youtube.com/browse/MPREb_RlDp0FzJL4B`}},{year:2025,title:`Kill the Arc`,desc:`Trained to read everything as narrative — conflict, resolution, hero. Drop the arc and the world stops making the wrong kind of sense.`,art:sg(`7d747071abf8273075292291`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Kill%20the%20Arc`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Kill%20the%20Arc`,youtube:`https://music.youtube.com/browse/MPREb_JRiUL7fCl8p`}},{year:2025,title:`Clap if You’re Programmed`,desc:`A roll call for everyone running someone else’s code.`,art:sg(`7514d55cd0f21570a019f6f3`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Clap%20if%20Programmed`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Clap%20if%20Programmed`,youtube:`https://music.youtube.com/browse/MPREb_i68cAhcswmq`}},{year:2025,title:`Civilizational Facepalm`,desc:`Left, right, doesn't matter — everyone's running TikTok-tier reasoning and rationalizing the result. The facepalm is bipartisan.`,art:sg(`8498fb050928b439bc5f829a`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Civilizational%20Facepalm`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Civilizational%20Facepalm`,youtube:`https://music.youtube.com/browse/MPREb_8aXwLKiQ3a7`}},{year:2025,title:`What is God? (Really)`,desc:`Reframing God as entropy reduction. Not a being — a direction.`,art:sg(`0ce6e66e89007268851014be`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20What%20is%20God`,apple:`https://music.apple.com/us/search?term=Lladnaros%20What%20is%20God`,youtube:`https://music.youtube.com/browse/MPREb_BrwfCt4Fpjo`}},{year:2025,title:`Stan (Recursive Variant)`,desc:`Devotion as a closed loop. The fan as the algorithm’s training data.`,art:sg(`6fd5ed206ebfeb4a4a068b3e`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Stan%20Recursive`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Stan%20Recursive`,youtube:`https://music.youtube.com/browse/MPREb_SDgvD1LQkS5`}},{year:2025,title:`Cult of Disagreement`,desc:`Religion, politics, pop fandoms — pick your flavor, it's all cult. The disagreement is the doctrine.`,art:sg(`388ab0ca2862e574e1aeb9f6`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Cult%20of%20Disagreement`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Cult%20of%20Disagreement`,youtube:`https://music.youtube.com/browse/MPREb_h9aVHSssVdX`}},{year:2025,title:`I Wrote This With My Eyes Closed`,desc:`I'm right because I'm trying to be wrong. Assume you're wrong first — that's how you get to right.`,art:sg(`7d931ac997b671340205d3a7`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Eyes%20Closed`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Eyes%20Closed`,youtube:`https://music.youtube.com/browse/MPREb_h2syhVxEHIW`}},{year:2025,title:`Paradox Eater`,desc:`A middle finger to the Copenhagen interpretation. Bohr, your wave function can collapse on its own.`,art:sg(`a04c89b4a08aeb606521fd0d`),links:{spotify:`https://open.spotify.com/search/Lladnaros%20Paradox%20Eater`,apple:`https://music.apple.com/us/search?term=Lladnaros%20Paradox%20Eater`,youtube:`https://music.youtube.com/browse/MPREb_yeVvTZZ5Vxt`}},{year:2025,title:`In The Loop`,desc:`We're hamsters mashing buttons for pellets. We just call the wheel social media.`,art:sg(`d917b2270bf72957ea473cd2`),links:{spotify:`https://open.spotify.com/track/7bZkjTRaI0TG8Y01SJWsUq`,apple:`https://music.apple.com/us/search?term=Lladnaros%20In%20The%20Loop`,youtube:`https://music.youtube.com/browse/MPREb_VZWfcMIgEui`}},{year:2025,title:`The Real Magic`,desc:`What’s left after you stop pretending. The trick that isn’t one.`,art:sg(`275a8022b4ebf1692f4132e6`),links:{spotify:`https://open.spotify.com/track/75SGzqJg1nDpZbw4c6MmB3`,apple:`https://music.apple.com/us/search?term=Lladnaros%20The%20Real%20Magic`,youtube:`https://music.youtube.com/browse/MPREb_XruCUBTRkUi`}}],ug=[{label:`Full Artist Page on Spotify`,href:`https://open.spotify.com/artist/0A1tRZXeo8dFeEWFycvjUV`},{label:`Apple Music`,href:`https://music.apple.com/us/artist/lladnaros/1832295144`},{label:`YouTube Music`,href:`https://music.youtube.com/channel/UC3iGZhDXGibTldct5mwSUVg`},{label:`Amazon Music`,href:`https://music.amazon.com/artists/B0FLWNSHT4/lladnaros`},{label:`iHeartRadio`,href:`https://www.iheart.com/artist/lladnaros-47716118/`}],dg=[{tag:`Working paper · 4 Sep 2026`,title:`Liquidity Corrupts Verification`,href:`/papers/liquidity-and-decay`},{tag:`Working lock · 29 Aug 2026`,title:`Working Formula Sheet`,href:`/docs/Extropy_Engine_Formula_Sheet.pdf`},{tag:`New · Music / Criticism`,title:`Closing the Loop`,href:`/papers/closing-the-loop`},{tag:`New · Codex · V2.1`,title:`Extropy Codex, Version 2.1, Comprehensive Edition`,href:`/docs/Extropy_Codex_v2.1_Comprehensive.pdf`},{tag:`New · Time · V4.2`,title:`Universal Times v4.2`,href:`/docs/Universal_Times_v4.2.pdf`},{tag:`Epistemology`,title:`When the Signal Eats the Source`,href:`/docs/When_the_Signal_Eats_the_Source.pdf`},{tag:`DAG Architecture`,title:`DAG Architecture Breakdown`,href:`/docs/DAG_Architecture_Breakdown.pdf`},{tag:`Framework · V4`,title:`The Framework: An Emergence-First Theory of Adaptation, Governance, and Everything in Between`,href:`https://www.academia.edu/attachments/132017018/download_file?s=portfolio`},{tag:`Philosophy`,title:`Reality Forks: A Recursive Guide to Rethinking Everything`,href:`https://www.academia.edu/attachments/132024936/download_file?s=portfolio`},{tag:`GUT`,title:`An Emergence-First Grand Unified Theory: Systems, Feedback, and Emergent Governance`,href:`/docs/An_Emergence_First_Grand_Unified_Theory_v2_referenced.pdf`},{tag:`Theology`,title:`God as Emergent Entropy Reduction: A Falsifiable Framework`,href:`https://www.academia.edu/attachments/132032004/download_file?s=portfolio`}],fg=[{tag:`Music / Criticism · July 2026`,title:`Signal, Loop, and Story`,href:`https://www.academia.edu/170725878/Signal_Loop_and_Story`},{tag:`Codex · V2.0`,title:`Extropy Codex, Version 2.0, Comprehensive Edition`,href:`https://www.academia.edu/169680038/Extropy_Codex_Version_2_0_Comprehensive_Edition`},{tag:`Codex`,title:`Extropy Codex: Comprehensive Technical Specification`,href:`/docs/Extropy_Codex_Technical_Specification_Final.pdf`,academia:`https://www.academia.edu/167088728/Extropy_Codex_Comprehensive_Technical_Specification`},{tag:`Tech Docs · V3.1.2`,title:`Extropy Engine Technical Docs v3.1.2`,href:`/docs/extropy-engine-technical-docs-v3.1.2.pdf`},{tag:`Time`,title:`Universal Times: Dual-System Temporal Infrastructure, Entropy Economics & the Post-Calendar Coordination Problem`,href:`https://www.academia.edu/attachments/132155612/download_file?s=portfolio`,academia:`https://www.academia.edu/165180710/Universal_Times_Dual_System_Temporal_Infrastructure_Entropy_Economics_and_the_Post_Calendar_Coordination_Problem`}],pg={consumer:{title:`What a person sees`,kicker:`LocalFlow`,lines:[`Need a ride, a grocery run, a thing done. Post it.`,`Someone nearby takes it. They do the work. Maybe they brought the car you don’t have.`,`You tap done. That’s the whole app.`,`Uber, Lyft, DoorDash, Grubhub — one pile. Not the protocol. Confirmation is the receipt.`]},house:{title:`What a house sees`,kicker:`HomeFlow`,lines:[`The household is a DFAO. Chores, IoT, the building. Thermodynamic measurement of the rooms you actually live in.`,`Same loop: post, do, confirm. Not a separate religion. Not “the errand app but indoor.”`,`Sensors can hang evidence. They do not mint. Mint still wants a closed loop.`]},quests:{title:`What a quest is`,kicker:`Quest market`,lines:[`Default grain: two to five minutes. Decomposition at the edge, not a priesthood.`,`Reward can escalate if it sits. Validation-neighborhoods take blind slices. Volunteer role, not a class of people.`,`Bigger work is a graph of small ones. Farming a 3-minute task is expensive because F exists.`]},merchant:{title:`What a shop sees`,kicker:`Emergent Product`,formula:`EP = XP × L`,lines:[`You do not have to work for the shop. CT is not mopping their floors. It is whether this door can count on you. Regular groceries. A pattern they can order stock against. A node of demand. Shopping five stores at random, boom weeks and ramen weeks, is higher entropy for that house. Do what you want. Random is allowed. Random is just a worse L here.`,`Three standings, not one pile. XP is global — every closed loop that survived, leaking 0.99ⁿ. Changing how XP works is planetary. Cash-out is a lose-condition; if a room votes that in, they forked. This is not Randall’s engine. He wrote the loop. DFAOs run their rooms. CT is this community. This DFAO can vote how CT is scored inside this room. That vote does not rewrite CT next door. L is this moment at this till: this-door CT against the house slider. The slider is how much of that CT may count and how much of the ticket the layer may touch. Hand-set or optional auto from this till’s own proofs and load. Either way it writes a vertex. House can override or kill. Domain bands can feed that till as ZKPs — yes or no per instrument — shown to this door. A cheap or greedy slider still writes upward into that house’s own EP and the next fractal.`,`EP = XP × L, born and burned in the same sale. Early mesh: a penny, maybe five cents off. That is the point. It is supposed to start small. As the same people keep closing loops here, and as neighboring DFAOs start signing each other’s books, L rises because this door actually knows you. Habits can become modifiers later — walk vs Hummer — if a DFAO votes that into their L. Day one is not a carbon priesthood.`,`Cash skipped the old barter trap — the blacksmith who does not need your wheat today. Then cash became the thing people extract. This layer is the trade math without a matching want, and without a pile you can farm. Fiat still rings the rest until the mesh is dense enough that the layer can clear what you owe. Obsolete fiat is an attractor after that, not a year-one switch. Fridge does not lock. A house that juices L to harvest standing is farming; F, contest, and late burn still apply.`]}},mg={kicker:`The game`,title:`It's just a UI for your life`,lead:`Picture what's on paper as a game that's going worldwide. You can log on through the internet you already have. That's not the only way, and it's not the correct way. Correct way: a cheap laptop, clone the repo, you're a node. Somebody else does the same thing. Nearby, you talk node to node — you don't even have to go through the internet. The internet is there so you can reach people who aren't next door. ZKPs talk to each other. That's the client. This website is not that network.`,why:`This is a game. The world already runs on unintended consequences. No special risk here. You don't need the whole object. You need the part for your seat. Other people check it. Then more people talk. Then more people do it. Play it on the life you're already living.`},hg={kicker:`SignalFlow`,title:`You do not score yourself`,lead:`SignalFlow is one layer. It is not the Engine. LocalFlow is one face. It is not the Engine. The protocol you talk to is your assistant — ChatGPT, Claude, Gemini, or a model on your own box — plus your PSLL plus the network. That is how a claim gets packaged.`,steps:[`You mow the lawn. You do not type in a number.`,`SignalFlow reads the task, the time, your PSLL, and whatever evidence you attached — before/after photos live on the DAG.`,`It proposes a provisional ΔS with the model you already trust. If-then. The other side has to agree.`,`If it holds, it settles into standing XP. If someone contests — later, even years later — it can still burn.`],privacy:`Log in with a company and you are tethered to a company. Own hardware is how you stay unknown. A network-hosted model you can run without owning the rack is a later idea, not a product today.`},gg={kicker:`The node`,title:`Keys stay on the box`,lead:`Each laptop is an independent node. Hostinger is not the network. Security is: you hold the key, the mesh verifies signatures, and a bad actor cannot silently rewrite someone else's book.`,did:`You do not apply for a DID. First boot writes a keypair on disk. The name is a did:key — W3C, from the public key, no registrar, no Microsoft, no Google. That is how you get one. Backup the file. Lose it and you are a new node. Standing does not teleport. did:web is optional if you want a domain on the document. Not required.`,zkp:`The DID is the name. A ZKP is what you show — not the file. Prove one question: 21 or not, band ≥ n, confirmed this loop, not slashed, unique in this room. The till gets yes or no. Not your diary. Not the XP pile. ZKP circuits are not in Codex v2.1. 2.1 is the current Codex. Today the handshake is signatures. Same job, thinner proof later.`,points:[{t:`On the box`,d:`Keys, PSLL, postgres if you run the full stack — stay local. Do not punch the database at the WAN. You pull git. Nobody remote-admins you unless you handed them the key.`},{t:`On the wire`,d:`LAN talks node to node. WAN is TLS. Handshake is a signed hello plus capabilities. One captured node can lie about its own claims. It cannot quietly rewrite a neighbor's DAG. Other nodes check signatures and causal parents.`},{t:`Sybil`,d:`did:key is cheap on purpose. KYC is not the defense. Standing costs work. A new DID has no XP, no IT, no vote weight. Unique-in-DFAO ZKP is how one person does not vote fifty times in the same room. F punishes farmed loops.`},{t:`Fake work`,d:`Both edges have to agree. Evidence hangs on the vertex. Late burn still hits. Repeat-farming is F. A MICRO can puff a lawn. The DAG plus burn is how we live with that — not a speech about honesty.`},{t:`Looking`,d:`A common person can walk the DAG. They cannot do it silently. A look is a vertex. Stalking-shaped bursts can slash. Tills still get yes/no.`}],today:`Neighborhood-app writes did:key on first boot. Handshake is HTTPS + signatures, not production P2P. ZKP circuits are not in Codex v2.1.`},_g={kicker:`The pipe`,title:`TCP is fine. Gossip-as-truth is not.`,lead:`Don't invent ExtropyTCP. Packets already move. Web3 reinvented discovery, identity, and a global shout. That's not this pattern.`,points:[{t:`Pipe`,d:`TCP or QUIC. HTTPS today. libp2p + Noise later if it helps the handshake. Still a pipe. Not a new Layer 4.`},{t:`LAN first`,d:`Next door talks node to node. No DHT for neighbors. The internet is for people who aren't next door.`},{t:`Proof`,d:`ZKP on the wire. Diary on disk. The till gets yes or no. Not the file.`},{t:`Looking`,d:`A fetch is a vertex. Silent GET is a detectable act. That's not HTTP's default. That's the overlay.`},{t:`Truth`,d:`Causal DAG. Both edges agree. Not a lottery for a block. Not gossip as consensus.`}],today:`Sandbox handshake: HTTPS + Ed25519 signed JSON. Hello, capabilities, DAG replay, heartbeat. No DHT. No NAT magic.`},vg={kicker:`The schematic`,title:`Entropy economics`,lead:`Seven minutes. Consensus vs coherence. The mint. Yes or no at the door. 0.99ⁿ. Watch it here. This is not a paper. Not a podcast.`,src:`/video/entropy-economics.mp4`,poster:`/video/entropy-economics.jpg`,duration:`7:13`},yg={kicker:`Not a panopticon`,title:`This domain is not the Engine`,lead:`extropyengine.com is a website. Papers, a clock face, an RSS feed. Hostinger is not a node. The Engine is the git you clone onto a laptop. Keys stay on that laptop.`,zkpKicker:`Yes or no. Not the license.`,zkpLead:`The bartender needs one fact: old enough, or not. Handing him the license is the wrong machine. Birthday, street, photo, name. He does not need any of that. A zero-knowledge proof is the door asking one question and getting one bit back. The diary stays in the pocket.`,chip:`Same shape as a password check that never sends the password. The till does not get a copy of your life. It gets allowed, or it does not. That is the whole trick. Notebooks that turn this into “chip versus photocopy” are mixing two objects. Drop that line. The door is enough.`,loopTitle:`The door — five people, one question`,loop:[{t:`You`,d:`Hold the license. Diary stays in the pocket. Birthday, street, photo, name never leave your side.`},{t:`Your phone`,d:`Looks at the license on YOUR side. Does not upload the ID. Answers one question. 21, or not.`},{t:`The till`,d:`The bartender's device. Asks: 21? Gets yes or no. Not the birthday. Not the street. Not the photo. Not a copy of the license.`},{t:`The book`,d:`The DAG. Records that a check happened at this door. Not a filing cabinet of everyone who walked in.`},{t:`Later lookers`,d:`Health inspector, a cop, a nosy neighbor, an AI hunting a closer. They can see that checks happened. If they want WHO, that look writes a line. You find out someone went hunting. Silent peeking is a detectable act.`}],photocopy:`The panopticon version of the same door: you hand over the wallet. They copy the license. They file it in a city cabinet. Anyone with a badge opens the drawer. You never know who looked. That is a surveillance state. This is a yes or no at the door.`,close:`A panopticon is one tower that can see every diary. A surveillance state is a central log you cannot opt out of. This has neither. The PSLL is a file on your disk. The network sees a proof — yes or no — not the file, not the photos, not last year. Looking at a graph writes a vertex; a silent fetch is a detectable act. did:key on first boot, no registrar. Node to node on the LAN. Internet for people who aren't next door. That is not a watchtower with extra vocabulary. Treating a ledger you hold as a camera pointed at you is the category error.`},X=`https://github.com/00ranman/extropy-engine/tree/main/packages`,bg={kicker:`The git`,title:`One repo. That's the Engine.`,lead:`github.com/00ranman/extropy-engine. Faces on this page. SignalFlow packages the claim. The kernel mints. Same loop everywhere: post, do, confirm. Packages are skeletons. Contracts are the truth. Clone it.`,groups:[{heading:`Faces`,items:[{name:`LocalFlow`,d:`Errands. Rides, groceries, the car you don't have. Matchmaking. Silent DAG emission.`,href:`${X}/localflow`},{name:`HomeFlow`,d:`Household / building. IoT, chores, rooms. Thermodynamic measurement of the place you live.`,href:`${X}/homeflow`},{name:`Quest market`,d:`2–5 minute grain. Escalation if it sits. Default operational primitive.`,href:`${X}/quest-market`},{name:`GrantFlow`,d:`Discovery (Grants.gov) plus proposer. Same loop, different input.`,href:`${X}/grantflow-discovery`},{name:`LevelUp Academy`,d:`Adaptive learning. Skill progression. XP on entropy-reducing study, not a grade mill.`,href:`${X}/levelup-academy`},{name:`Extropialingo`,d:`Language learning as loops.`,href:`${X}/extropialingo`},{name:`Neighborhood app`,d:`MESO job board on a laptop. did:key on first boot.`,href:`${X}/neighborhood-app`},{name:`Ecosystem`,d:`Skill DAG, XP oracle, merchant network, EP conversion.`,href:`${X}/ecosystem`}]},{heading:`Protocol`,items:[{name:`SignalFlow`,d:`Assistant + PSLL + routing. Packages the claim. Proposes ΔS. Not the whole Engine.`,href:`${X}/signalflow`},{name:`Validation neighborhoods`,d:`Blind 1/10 slices. Volunteer role, not a validator class. Holochain-shaped routing, native code.`,href:`${X}/validation-neighborhoods`},{name:`Epistemology engine`,d:`Mesh peer-review observability. The mesh reviews. This package witnesses it.`,href:`${X}/epistemology-engine`},{name:`Decomposition kit`,d:`Split a claim at the edge. Personal AI job, not a central pipeline.`,href:`${X}/decomposition-kit`},{name:`PSLL-sync`,d:`Personal Signed Local Log. Append-only, hash-chained, yours. Merkle-anchored to the DAG.`,href:`${X}/psll-sync`},{name:`Identity`,d:`did:key on the box. VCs, nullifiers, ZKP wrapper. Not a custodian.`,href:`${X}/identity`},{name:`Credentials`,d:`Cosmetic layer: badges, titles, seasons. Cannot steer mint.`,href:`${X}/credentials`},{name:`Node handshake`,d:`Signed hello, capabilities, DAG replay. HTTPS + signatures today.`,href:`${X}/node-handshake`}]},{heading:`Kernel`,items:[{name:`xp-formula`,d:`Canonical mint. XP = R × F × ΔS × (w · E) × log(1/Tₛ). Reputation never enters it.`,href:`${X}/xp-formula`},{name:`xp-mint`,d:`Mints when a loop closes with ΔS > 0. Enforces the criteria.`,href:`${X}/xp-mint`},{name:`loop-ledger`,d:`Closed verification loops as the atomic unit of value.`,href:`${X}/loop-ledger`},{name:`dag-substrate`,d:`Signed vertices, Lamport time, tip selection. The book.`,href:`${X}/dag-substrate`},{name:`token-economy`,d:`XP, CT, CAT, IT, EP. Records and meters. Influence cannot be purchased with XP. DT wallet slot is leftover.`,href:`${X}/token-economy`},{name:`reputation`,d:`Compressed evidence of past verification accuracy. Not a public ladder.`,href:`${X}/reputation`},{name:`governance`,d:`Proposal lifecycle inside a DFAO. Votes rewrite the room they are cast in.`,href:`${X}/governance`},{name:`DFAO registry`,d:`NANO → PLANETARY. Nested. Labels are suggestions, not fences.`,href:`${X}/dfao-registry`},{name:`contracts`,d:`Shared types, event bus, DB helpers. If-then, not a president.`,href:`${X}/contracts`},{name:`bayesian`,d:`Beta conjugate math. Portable. Used where the proxy needs a prior.`,href:`${X}/bayesian`},{name:`ethics`,d:`Guardrails as middleware. Harm, autonomy, humility. Not a sermon overlay.`,href:`${X}/ethics`},{name:`temporal / Universal Times`,d:`Decay clocks, seasons, hydrogen-anchored duration. Face on this site.`,href:`${X}/temporal-service`},{name:`api-gateway`,d:`One door for the microservices on YOUR node. Not a world server.`,href:`${X}/api-gateway`},{name:`academia-bridge`,d:`Paper upload path. Receipts into the graph, not a priest.`,href:`${X}/academia-bridge`}]}]},xg=[{code:`OPEN`,note:`Task posted. Vertex on the DAG with causal parents. Evidence can hang off it.`},{code:`CLOSED`,note:`Agreement. Provisional XP mints. The first settle window is a knob — 30 days was a starting number, not a law.`},{code:`SETTLED`,note:`Moves from provisional to standing. Still burnable later. XP is not spent. Access economy. Decay is already eating it.`},{code:`BURNED`,note:`A later verdict on that vertex. Same machine as late mint, the other way. Ordinary remaining pile after decades is dust. See the 0.99ⁿ note.`}],Sg={kicker:`Think it through`,title:`What 0.99ⁿ actually does`,lead:`1% of what is left, about every 30 days. Not 1% of the original. Remaining after n months is 0.99ⁿ. Half-life ≈ 69 months. It never hits zero in the reals. That is a map seam, not a fuse.`,rows:[{t:`~1 year`,d:`≈ 89% of that mint still there`},{t:`~5.8 years`,d:`half-life. ≈ 50%`},{t:`~8 years`,d:`≈ 38%`},{t:`~20 years`,d:`≈ 9%`},{t:`~30 years`,d:`≈ 2.7% — dust of the original mint`}],body:[`The long-horizon mechanism that still has weight is late mint, not late burn of a lawn. An ordinary loop, thirty years on, has leaked to a sliver. Clawing that sliver is a bookkeeping mark on a vertex. It is not a punishment that still moves a life.`,`Late mint is the same machine going the other way: new evidence, citation-gated, a later huge ΔS — a student who becomes a Nobel, someone who actually fixes a broken piece of the world — can still write a delta into the original vertex. That is when thirty years later still matters. You get the delta of the proxy, not a second full paycheck, and only along asserted edges.`,`Late burn of that same later-revealed harm is the symmetric case. It slashes remaining dust plus whatever new delta sat on that citation. It is not a time machine emptying the wallet. It does not reach back and un-mow the common. Treating “XP can be taken away in 30 years” as the headline, without the mint direction and without the 0.99ⁿ curve, is not the logistics.`]},Cg=[{t:`XP`,d:`Global standing. The letters are XP. ΔS is the reduction. XP is the proxy on the ledger. You do not spend it. Access economy. Decays ~1%/month of remaining.`},{t:`CT`,d:`Community standing. This DFAO / this door. What you put in here. Feeds L. Not purchased with XP.`},{t:`L`,d:`Literal standing at this till. This-door CT against the house slider. Optional auto from this till’s proofs. Domain bands as ZKPs to this door.`},{t:`EP`,d:`Till spark. Emergent Product. EP = XP × L at the register, then it burns. Starts as pennies off. Not a currency. Not a bag.`},{t:`CAT`,d:`Skill record. Unique. Lane + level + issuer. Are you qualified to do this, and at what level. Not a pile.`},{t:`IT`,d:`Influence standing. Meter. Governance and demonstration weight more. Idle leak ~5%/month. Not Insight Token. Not a bag.`},{t:`Lane`,d:`Skill specialization on a signed record. Not a Domain Coin. Domain (the eight instruments) is an enum. Claiming a lane is a vertex, not a dropdown.`}],wg={kicker:`If you care about the math`,title:`Most people never see this`,lead:`You post. Someone does it. You tap done. That is the product. The formula is for the people who want to know what the mint is claiming. Skip it if you came for a ride.`,formula:`XP = R × F × ΔS × (w · E) × log(1/Tₛ)`,floor:`Floor: XP ≥ ΔS / cₗ². Irreducible form — a compression of the mint above, same job as E = mc² next to the full energy-momentum relation. Not the theory. Not a new physics law. Glossary has the line.`,source:`packages/xp-formula — canonical v3.1.2. Reputation never enters this formula. Tₛ is a slam window with a Δt cap; standing leak is 0.99ⁿ.`,terms:[{t:`R`,d:`Rarity. Scarcity / base difficulty of this action class. Property of the loop, not the person. Not reputation.`},{t:`F`,d:`Frequency of Decay. Repeating the same class pays less. 1.0 the first time. Not falsifiability (that is script-ℱ).`},{t:`ΔS`,d:`Verified entropy reduction. Must be > 0. The proxy. Not XP.`},{t:`w · E`,d:`Weighted emergence. Dot product of the eight-domain weight vector and this loop’s effort vector. The English is the song line. The mint is the product. Not a fifth letter.`},{t:`Tₛ`,d:`Slam window, not recency. Tₛ = exp(−λ min(Δt, Δt_cap)). Instant close → log = 0 → XP = 0, on purpose. Cap Δt so stalling is not a mint. Standing leak is 0.99ⁿ, a different clock.`}],body:[`We are open to a constant for “mowing a lawn.” We do not expect one. “Lawn” and “mowed” are words. Words drift. Linguistic relativity is not a vibe; it is why freezing a number and calling it a constant is often an ontological sleight of hand. You did not find physics. You froze a description.`,`What we actually need is honesty about a proxy: a starting ΔS we attribute to a class of work — a lawn cut, a ride completed — and then we fine-tune it. Gas against the alternative. They would have driven themselves. They would have taken the bus. They would not have gone. Ozone, wear, idle time. Every extra scrap of data is another term in w · E, a cross-domain ΔS that gets less stupid.`,`The glass of water is the same isolation trick. Econ 101 holds the glass still, moves you from a stream to a desert, and calls the difference ‘subjective value.’ The mesh changed. A dehydrated body is not the same thermodynamic object. No water nearby is not the same informational or biological state. Willingness-to-pay is a map of an isolated commodity. It is not a measurement of the coupled system. That debate is empty because it never opened the boundary.`,`We start with the easy variables. We do not wait for a perfect lawn-mowing constant that will never arrive. The proxy gets more accurate as the graph fills in. That is the math. Not a religion of constants.`,`You do not put yourself in for a score. SignalFlow and the model you trust propose the ΔS. Photos, duration, the alternative trip — those are terms. People will still try to oversell. That is the MICRO subjectivity problem. Evidence on the DAG plus late burn is how we live with it, not a claim that it cannot happen.`]},Tg={kicker:`The graph is the instrument`,title:`Subjectivity is the start, not the attractor`,lead:`The eight domains are a weighted vector, not eight sermons. A mediation and a mowed lawn do not share a constant. They share a DAG that gets denser. That is the claim. Overselling is the opening condition. Convergence is the bet.`,points:[`Every closed loop hangs evidence and a provisional ΔS on a vertex with causal parents. Next time a similar fight, a similar lawn, the network has somewhere to look besides a vibe.`,`Edge intelligence unveils only the ZKP the equation needs. Nobody sits on the diary. Digital Autarky is how you get detail without a panopticon.`,`Landauer is the bridge, not a costume: information erased has a heat floor. Social and cognitive events are information events. Bits-equivalent is the stand-in — a proxy, not a worshipped constant. If later data contradicts it, it moves. Not a metaphor. Physicists who stop at that sentence are not the audience.`,`A closed loop can still mint later. That is the long-horizon mechanism with weight: a later huge, cited ΔS — Nobel, a society-scale fix — writes a delta into the original vertex. Ordinary remaining pile at thirty years is ≈ 2.7% of that mint. Late burn of that dust is a mark on a vertex, not a sword. Settled is not sacred. The graph is allowed to catch up.`,`Curating that graph is work. A DAG specialist who makes the ledger more navigable is reducing entropy and minting XP. Human in the loop is not a disclaimer. It is a job the protocol pays.`,`No extractive microtransaction at each hop. Transactionality is the loop itself. The machine talks to its own history. When interpretations of “this kind of fight” stop getting pushback, the needle moves less. That is calibration, not a cult of the founder — the founder has no privileged key.`]},Eg=[{status:`live`,name:`Protocol kernel`,note:`xp-formula, loop-ledger, dag-substrate, xp-mint. Happy path closes and settles. Docker Compose on the repo.`,href:`https://github.com/00ranman/extropy-engine`},{status:`dev`,name:`Node handshake`,note:`Two machines talk. Signed hello, capabilities, DAG replay, heartbeat. HTTPS + signatures today. Not production P2P.`,href:`https://github.com/00ranman/extropy-engine/tree/main/packages/node-handshake`},{status:`dev`,name:`Universal Times`,note:`Hydrogen-anchored clocks. Spec v4.2 is public. temporal-service in the monorepo. Face on this site.`,href:`/universaltimes`},{status:`concept`,name:`Node kit`,note:`Plug-in node, PSLL, optional sensor. For-profit. Not shipping. If you can clone, you do not need the box.`,href:`https://github.com/00ranman/extropy-engine/blob/main/docs/VPS_NODE.md`}],Dg=[{label:`YouTube`,href:`https://www.youtube.com/@Lladnaros`},{label:`X / Twitter`,href:`https://x.com/lladnaros`},{label:`Threads`,href:`https://www.threads.net/@decentframework`},{label:`Instagram`,href:`https://www.instagram.com/decentframework`},{label:`Facebook`,href:`https://www.facebook.com/Lladnaros`},{label:`TikTok`,href:`https://www.tiktok.com/@lladnaros`},{label:`Reddit`,href:`https://www.reddit.com/user/Few-Bluebird9443/`},{label:`GitHub`,href:`https://github.com/00ranman`},{label:`Academia`,href:`https://rgossett1.academia.edu`}],Og=[{title:`Extropy Codex v2.1`,href:`/docs/Extropy_Codex_v2.1_Comprehensive.pdf`,note:`Most recent signed Codex. Comprehensive Edition — F = Frequency of Decay, script-F = Falsifiability. canonical-v3.12, protocol v0.2 (August 2026)`},{title:`Working Formula Sheet`,href:`/docs/Extropy_Engine_Formula_Sheet.pdf`,note:`Working lock — records, meters, till spark. Tₛ is the slam window, not recency. Three clocks.`},{title:`Neighborhood MESO`,href:`/hoa`,note:`HOA-shaped wrapper on the Engine. One command, you are a node. Jobs → confirm → XP.`},{title:`Capture notes (not a Codex)`,href:`/docs/CODEX_3_NOTES.md`,note:`Unsigned working notes for a later edition. Not published. Not newer than 2.1. 2.1 is the current Codex.`},{title:`Universal Times v4.2`,href:`/docs/Universal_Times_v4.2.pdf`,note:`Hydrogen-anchored dual-system timekeeping, July 2026`},{title:`When the Signal Eats the Source`,href:`/docs/When_the_Signal_Eats_the_Source.pdf`,note:`Epistemology paper`},{title:`DAG Architecture Breakdown`,href:`/docs/DAG_Architecture_Breakdown.pdf`,note:`Architecture notes`},{title:`Emergence-First GUT`,href:`/docs/An_Emergence_First_Grand_Unified_Theory_v2_referenced.pdf`,note:`Grand unified theory`},{title:`Unf*ck the World for a Dollar`,href:`/docs/Unfuck_The_World_For_A_Dollar.pdf`,note:`The book (PDF)`}],kg=[{title:`Signal, Loop, and Story`,href:`https://www.academia.edu/170725878/Signal_Loop_and_Story`,note:`July 2026 lyric analysis — recast as Closing the Loop`},{title:`Extropy Codex v2.0`,href:`https://www.academia.edu/169680038/Extropy_Codex_Version_2_0_Comprehensive_Edition`,note:`Superseded Comprehensive Edition (July 2026)`},{title:`Extropy Codex: Comprehensive Technical Specification`,href:`/docs/Extropy_Codex_Technical_Specification_Final.pdf`,note:`Earlier Codex edition`},{title:`Tech Spec 3.1.2`,href:`/docs/extropy-engine-technical-docs-v3.1.2.pdf`,note:`Earlier engine technical specification`},{title:`Universal Times (original)`,href:`https://www.academia.edu/165180710/Universal_Times_Dual_System_Temporal_Infrastructure_Entropy_Economics_and_the_Post_Calendar_Coordination_Problem`,note:`Pre-v4.2 dual-system timekeeping paper`}];function Ag(e){return e.toLowerCase().normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).replace(/[δΔ]s/gi,`delta-s`).replace(/[δΔ]/g,`delta`).replace(/unf\*ck|u\*\*\*\*k/gi,`unfuck`).replace(/[''`´’‘]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}var jg={"a-little-free":`/audio/a-little-free.mp3`,"and-thats-how":`/audio/and-thats-how.mp3`,"and-that-s-how":`/audio/and-thats-how.mp3`,blueprint:`/audio/blueprint.mp3`,"civilizational-facepalm":`/audio/civilizational-facepalm.mp3`,"clap-if-youre-programmed":`/audio/clap-if-youre-programmed.mp3`,coordinates:`/audio/coordinates.mp3`,"cult-of-disagreement":`/audio/cult-of-disagreement.mp3`,"inside-the-machine":`/audio/inside-the-machine.mp3`,"irrelevance-is-the-killshot":`/audio/irrelevance-is-the-killshot.mp3`,irrelevance:`/audio/irrelevance-is-the-killshot.mp3`,"evolution-not-revolution":`/audio/irrelevance-is-the-killshot.mp3`,"kill-the-arc":`/audio/kill-the-arc.mp3`,"no-filter-no-bs":`/audio/no-filter-no-bs.mp3`,"no-ones-lying":`/audio/no-ones-lying.mp3`,"no-ones-lying-and-thats-the-problem":`/audio/no-ones-lying.mp3`,"syntax-sabotage":`/audio/syntax-sabotage.mp3`,"the-glitch-was-me":`/audio/the-glitch-was-me.mp3`,"the-real-magic":`/audio/the-real-magic.mp3`,"what-is-god":`/audio/what-is-god.mp3`,"what-is-god-really":`/audio/what-is-god.mp3`,vote:`/audio/vote.mp3`,"schrodingers-flex":`/audio/schrodingers-flex.mp3`,"weaponized-transparency":`/audio/weaponized-transparency.mp3`,"unrendered-sky":`/audio/unrendered-sky.mp3`,"photon-404-exe":`/audio/photon-404-exe.mp3`,"photon-404":`/audio/photon-404-exe.mp3`,photon_404:`/audio/photon-404-exe.mp3`,"just-another-brick":`/audio/just-another-brick.mp3`,"power-lunch-at-the-soup-kitchen":`/audio/power-lunch-at-the-soup-kitchen.mp3`},Mg=jg,Ng={"and-that-s-how":`and-thats-how`,"and-thats-how-how":`and-thats-how`,"what-is-god":`what-is-god-really`,"no-ones-lying-and-thats-the-problem":`no-ones-lying`,irrelevance:`irrelevance-is-the-killshot`,"evolution-not-revolution":`irrelevance-is-the-killshot`,antihero:`anti-hero`,"blueprints-bullsh":`blueprints-bull-sh`,"postscarcity-blues":`post-scarcity-blues`,sublogic:`sub-logic`,s:`delta-s`,"say-the-fucking-thing":`say-the-f-g-thing`,"power-lunch-at-the-soup-kitchen-acousticish-version":`power-lunch-at-the-soup-kitchen-acoustic-ish-version`,"version-000":`version-0-0-0`,"clap-if-you-re-programmed":`clap-if-youre-programmed`,"photon-404":`photon-404-exe`,photon_404:`photon-404-exe`,"unfuck-the-world":`unfuck-the-world-for-a-dollar`,"paradox-eater-pt-2":`paradox-eater-pt-2-the-broken-quantum`};function Pg(e){return jg[Ag(e)]}function Fg(e){let t=Ag(e);return rg[t]||rg[Ng[t]??``]}var Ig={"The Lladnaros EP":[`Blueprint`,`Unrendered Sky`,`Weaponized Transparency`,`PHOTON_404.exe`,`Just Another Brick`,`Power Lunch at the Soup Kitchen (Acoustic-ish Version)`,`And That's... (How)`],"Unf*ck the World for a Dollar":[`Language is a Lie`,`Punching the Mascot`,`#vote`,`Optimization Theater`,`Systemic Collapse Symphony`,`Unf*ck the World (for a Dollar)`,`Keys to Eden (The Web3 Botch)`,`Flip the Table`,`Irrelevance (Is the Killshot)`,`Memetic Infection`,`Schrödinger’s Flex`,`Paradox Eater, Pt. 2 (the Broken Quantum)`,`Family of Fangs`,`Recursive Until Proven Innocent`,`Solipsism`,`ΔS`,`IYKYDKYDK`,`Power Lunch at the Soup Kitchen`],"The Glitch Was Me":[`Coordinates`,`The Curved Line Between a Lie and a Line`,`404_self not found`,`Cache Me Outside`,`Sub-Logic`,`Layers on Layers`,`No Filter, No BS`,`The Glitch Was Me`,`Blueprints & Bull-Sh...`,`I Don't Play the Game`,`Algorithm Savior`,`rant`,`The F U Internet Engine`,`First Cut, First Principles`,`System Update`,`Shadows on the Wall`,`No Safe Word for Reality`,`Rewind the Spectrum`,`God Glitch`,`Cosmic Haze`,`Post-Scarcity Blues`,`Version 0.0.0`,`Anti-Hero`,`AUTOCOMPLETE AUTOPSIES`,`Contradiction is the Godline`],"Patterns and Mouth Noises":[`Consensus Hell`,`Syntax Sabotage`,`Systems Within Systems.`,`Origin Story`,`It Learns By Speaking`,`A Little Free`,`The Real Magic`,`Human Nature (The System's Lie)`,`You Could Be Wrong (And That’s the Point)`,`Say the F*****g Thing`,`The Language Is Doing the Talking`,`XP FRAMEWORK_ THE TAKEOVER`,`Entropy Map`,`Words Are Weird`]};function Lg(e,t){let n=Ag(e);return{n:t,title:e,slug:n,src:jg[n]||jg[Ng[n]??``],lyrics:Fg(e)}}var Rg=cg.map(e=>({...e,songs:(Ig[e.title]??[]).map((e,t)=>Lg(e,t+1))})),zg=lg.map(e=>({...e,slug:Ag(e.title),src:Pg(e.title),lyrics:Fg(e.title)})),Bg=[...Rg.flatMap(e=>e.songs.map(t=>({album:e.title,n:t.n,title:t.title,kind:e.kind===`ep`?`ep`:`album`,lyrics:t.lyrics,src:t.src}))),...zg.map(e=>({album:`Singles`,title:e.title,kind:`single`,lyrics:e.lyrics,src:e.src}))];function Vg(e){let t=Bg.find(t=>t.src===e);if(t)return t;let n=e.split(`/`).pop()?.replace(/\.(mp3|wav)$/i,``)??``,r=n.replace(/_/g,`-`);return{album:`Singles`,title:n.replace(/-/g,` `),kind:`single`,lyrics:rg[r]||rg[Ng[r]??``],src:e}}var Hg=`/audio/irrelevance-is-the-killshot.mp3`,Ug=.18,Wg=`ee-bed-t`,Gg=`ee-audio-src`,Kg=`ee-bed-paused`,qg=[`kill-the-arc`,`no-filter-no-bs`,`no-ones-lying`,`inside-the-machine`,`cult-of-disagreement`,`syntax-sabotage`,`a-little-free`,`the-real-magic`,`what-is-god`,`blueprint`,`clap-if-youre-programmed`,`coordinates`,`the-glitch-was-me`,`civilizational-facepalm`,`and-thats-how`];function Jg(e){let t=new Set,n=[];for(let r of e)!r||t.has(r)||(t.add(r),n.push(r));return n}function Yg(e){let t=e.split(`?`)[0].split(`#`)[0];try{let e=t.includes(`://`)?new URL(t).pathname:t;return(e.split(`/`).pop()||e).toLowerCase()}catch{return(t.split(`/`).pop()||t).toLowerCase()}}function Xg(){let e=Jg(qg.map(e=>Mg[e]).filter(Boolean)),t=new Set([Hg,...e].map(Yg)),n=[];for(let e of Bg)e.src&&!t.has(Yg(e.src))&&(n.push(e.src),t.add(Yg(e.src)));for(let e of Jg(Object.values(Mg)))t.has(Yg(e))||(n.push(e),t.add(Yg(e)));return[Hg,...e.filter(e=>Yg(e)!==Yg(Hg)),...n]}function Zg(e){let t=Xg(),n=Yg(e),r=t.findIndex(e=>Yg(e)===n);return r===-1?n.includes(`irrelevance`)?t[1]??t[0]??`/audio/irrelevance-is-the-killshot.mp3`:t[0]??`/audio/irrelevance-is-the-killshot.mp3`:t[(r+1)%t.length]}var Qg=new Set;function $g(){for(let e of Qg)e()}function e_(e){return Qg.add(e),()=>{Qg.delete(e)}}function t_(){let e=Z;return{src:e?l_(e):Hg,currentTime:e?.currentTime??0,duration:e&&Number.isFinite(e.duration)?e.duration:0,paused:!e||e.paused}}var Z=null,n_=!1,r_=0,i_=!1,a_=null,o_=0,s_=!1;function c_(e,t,n){let r=++r_,i=e.volume;if(n<=0||i===t){e.volume=t;return}let a=performance.now(),o=s=>{if(r!==r_)return;let c=Math.min(1,(s-a)/n);e.volume=i+(t-i)*c,c<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}function l_(e){let t=e.getAttribute(`data-src`)||e.currentSrc||e.src||`/audio/irrelevance-is-the-killshot.mp3`;try{return new URL(t,window.location.origin).pathname}catch{return t}}function u_(){!Z||i_||typeof sessionStorage>`u`||(sessionStorage.setItem(Wg,String(Z.currentTime)),sessionStorage.setItem(Gg,l_(Z)))}function d_(e){if(e.ended)return!0;let t=e.duration;return Number.isFinite(t)&&t>0&&e.currentTime>=t-.12}function f_(e){return e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?Promise.resolve():new Promise((t,n)=>{let r=()=>{a(),t()},i=()=>{a(),n(Error(`audio error`))},a=()=>{clearTimeout(o),e.removeEventListener(`canplay`,r),e.removeEventListener(`error`,i)},o=window.setTimeout(()=>{a(),e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?t():n(Error(`audio timeout`))},8e3);e.addEventListener(`canplay`,r),e.addEventListener(`error`,i)})}function p_(e){if(!Z||s_)return;let t=Date.now();if(t-o_<600)return;o_=t;let n=e||l_(Z),r=Zg(n);Yg(r)!==Yg(n)&&(a_=r,g_(r,!1,{fadeMs:500}))}function m_(){if(typeof window>`u`)return null;if(!Z){let e=Hg;try{s_=sessionStorage.getItem(Kg)===`1`,e=sessionStorage.getItem(Gg)||`/audio/irrelevance-is-the-killshot.mp3`}catch{}Z=new Audio(e),Z.preload=`auto`,Z.loop=!1,Z.setAttribute(`playsinline`,``),Z.setAttribute(`data-src`,e),Z.volume=0;let t=()=>{if(!i_)try{let e=Number(sessionStorage.getItem(Wg)||0);e>.5&&Number.isFinite(e)&&e<(Z?.duration||1e9)-.4&&(Z.currentTime=e)}catch{}};Z.addEventListener(`loadedmetadata`,()=>{t(),$g()}),Z.addEventListener(`timeupdate`,()=>{u_(),!(!Z||i_||s_)&&d_(Z)&&p_()}),Z.addEventListener(`play`,$g),Z.addEventListener(`pause`,$g),Z.addEventListener(`ended`,()=>{$g(),!(!Z||s_)&&p_(l_(Z))})}return Z.loop=!1,Z}function h_(){if(s_)return;let e=m_();if(e){if(a_&&Yg(l_(e))!==Yg(a_)){g_(a_,!1,{fadeMs:180});return}if(d_(e)){p_(l_(e));return}i_||!e.paused||e.play().then(()=>{n_?c_(e,Ug,120):(c_(e,Ug,2800),n_=!0)}).catch(()=>{})}}async function g_(e,t=!1,n={}){let r=m_();if(!r)return;s_=!1,i_=!0,r_+=1;try{sessionStorage.setItem(Kg,`0`),sessionStorage.setItem(Gg,e)}catch{}if(Yg(l_(r))!==Yg(e)){r.pause(),r.loop=!1,r.src=e,r.setAttribute(`data-src`,e);try{sessionStorage.removeItem(Wg)}catch{}try{await f_(r)}catch{i_=!1,$g();let t=Zg(e);Yg(t)!==Yg(e)&&(a_=t,g_(t,!1,n));return}try{r.currentTime=0}catch{}}else if(r.loop=!1,d_(r))try{r.currentTime=0}catch{}let i=n.fadeMs??180;r.volume=Math.min(r.volume,.04),n_=!0;try{await r.play(),c_(r,Ug,i),a_=null}catch{try{await f_(r),await r.play(),c_(r,Ug,i),a_=null}catch{a_=e}}i_=!1,$g()}function __(e,t=!1){let n=m_();if(n){if(!n.paused&&Yg(l_(n))===Yg(e)){v_();return}g_(e,t)}}function v_(){let e=m_();if(e){if(e.paused){s_=!1;try{sessionStorage.setItem(Kg,`0`)}catch{}if(a_&&Yg(l_(e))!==Yg(a_)){g_(a_,!1,{fadeMs:180});return}if(d_(e)){p_(l_(e));return}e.play().then(()=>{c_(e,Ug,n_?180:1600),n_=!0})}else{s_=!0,a_=null;try{sessionStorage.setItem(Kg,`1`)}catch{}u_(),c_(e,0,250),window.setTimeout(()=>{s_&&e.pause()},250)}}}function y_(e){let t=m_();if(!t)return;let n=Number.isFinite(t.duration)&&t.duration>0?t.duration:0,r=Math.max(0,n>0?Math.min(e,Math.max(0,n-.2)):Math.max(0,e));try{t.currentTime=r}catch{}u_(),$g()}function b_(){return!!(Z&&!Z.paused)}function x_(e){return!!(Z&&!Z.paused&&Yg(l_(Z))===Yg(e))}function S_(){let[e,t]=(0,M.useState)(!1);return(0,M.useEffect)(()=>{let e=m_();if(!e)return;let n=()=>t(!e.paused);n(),h_();let r=e=>{s_||e.target?.closest?.(`[data-quiet-toggle], .play-here`)||h_()};return e.addEventListener(`play`,n),e.addEventListener(`pause`,n),e.addEventListener(`ended`,n),window.addEventListener(`pointerdown`,r,!0),window.addEventListener(`keydown`,r,!0),window.addEventListener(`touchstart`,r,!0),()=>{e.removeEventListener(`play`,n),e.removeEventListener(`pause`,n),e.removeEventListener(`ended`,n),window.removeEventListener(`pointerdown`,r,!0),window.removeEventListener(`keydown`,r,!0),window.removeEventListener(`touchstart`,r,!0)}},[]),(0,N.jsx)(`button`,{type:`button`,"data-quiet-toggle":!0,onClick:()=>{v_(),t(b_())},className:`no-print fixed right-3 bottom-3 z-50 flex size-14 items-center justify-center border border-primary/55 bg-bg/40 text-lg text-primary shadow-[0_0_14px_rgb(255_90_31_/_0.35)] backdrop-blur-sm [text-shadow:0_0_12px_rgb(255_90_31_/_0.8)] hover:border-primary hover:bg-bg/55 hover:shadow-[0_0_20px_rgb(255_90_31_/_0.5)]`,"aria-label":e?`Pause`:`Play`,children:e?`‖`:`▶`})}var C_=7e3;function w_(e){return e?e.split(/\n/).map(e=>e.trim()).filter(e=>e.length>0):[]}function T_(e){let t=e>1?e:180,n=Math.min(8,t*.07);return{intro:n,span:Math.max(1,t-n-Math.min(6,t*.04))}}function E_(e,t,n){if(!e.length)return-1;let{intro:r,span:i}=T_(n);return t<r?-1:Math.min(e.length-1,Math.max(0,Math.floor((t-r)/i*e.length)))}function D_(e,t,n){let{intro:r,span:i}=T_(n),a=Math.max(1,t.length);return r+(Math.min(a-1,Math.max(0,e))+.08)/a*i}function O_(){let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)(!0),[i,a]=(0,M.useState)(()=>t_()),[o,s]=(0,M.useState)(!1),[c,l]=(0,M.useState)(!1),[u,d]=(0,M.useState)(null),f=(0,M.useRef)(null),p=(0,M.useRef)(0),m=(0,M.useRef)(null);(0,M.useEffect)(()=>(s(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),m_(),a(t_()),e_(()=>a(t_()))),[]),(0,M.useEffect)(()=>{if(e||i.paused)return;let t=window.setInterval(()=>a(t_()),200);return()=>window.clearInterval(t)},[e,i.paused]),(0,M.useEffect)(()=>{let e=window.setTimeout(()=>r(!1),C_);return()=>window.clearTimeout(e)},[]),(0,M.useEffect)(()=>{if(e||o||i.paused){l(!1);return}let t=0,n=!1,r=()=>{let e=n?180+Math.random()*280:8e3+Math.random()*14e3;t=window.setTimeout(()=>{n=!n,l(n),r()},e)};return r(),()=>window.clearTimeout(t)},[e,o,i.paused]),(0,M.useEffect)(()=>(document.body.style.paddingBottom=e?``:`2.75rem`,()=>{document.body.style.paddingBottom=``}),[e]);let h=Vg(i.src),g=w_(h.lyrics),_=E_(g,i.currentTime,i.duration),v=u??_;if((0,M.useEffect)(()=>{d(null)},[i.src]),(0,M.useEffect)(()=>{u!=null&&(Date.now()<p.current||_===u&&d(null))},[_,u]),(0,M.useEffect)(()=>{let t=f.current;if(!t||n||e)return;let r=t.querySelector(`[data-line="${Math.max(0,v)}"]`);if(!r)return;let i=r.offsetLeft-t.clientWidth/2+r.offsetWidth/2;t.scrollTo({left:Math.max(0,i),behavior:o?`auto`:`smooth`})},[v,n,e,o,i.src]),e)return null;let y=e=>{if(!g.length)return;let t=Math.min(g.length-1,Math.max(0,e));r(!1),d(t),p.current=Date.now()+4e3,y_(D_(t,g,i.duration))};return(0,N.jsxs)(`div`,{className:`now-ticker no-print fixed right-0 bottom-0 left-0 z-40 flex items-center gap-1 overflow-hidden border-t border-primary py-2 pr-[3.4rem] pl-2 text-[13px] font-semibold text-fg`,"data-glitch":c&&!o&&!i.paused?`flicker`:`idle`,children:[(0,N.jsx)(`button`,{type:`button`,className:`ticker-copy relative z-10 shrink-0 px-1 text-lg leading-none text-dim hover:text-fg disabled:opacity-25`,"aria-label":`Previous line`,disabled:n||!g.length||v<=0,onClick:()=>y((v<0?0:v)-1),children:`‹`}),(0,N.jsx)(`div`,{className:`ticker-copy relative z-10 min-w-0 flex-1 overflow-hidden`,children:n?(0,N.jsxs)(`p`,{className:`truncate text-center tracking-[0.14em]`,children:[`CODEX 2.1`,` `,(0,N.jsx)(Ic,{to:`/docs`,className:`text-primary hover:underline`,children:`Read the docs →`})]}):g.length?(0,N.jsx)(`div`,{ref:f,className:`ticker-strip flex items-center gap-8 overflow-x-auto px-2`,onWheel:e=>{if(!f.current||!g.length)return;let t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;t&&(e.preventDefault(),y(v+(t>0?1:-1)))},onPointerDown:e=>{m.current={x:e.clientX,sl:f.current?.scrollLeft??0}},onPointerMove:e=>{!m.current||!f.current||Math.abs(e.clientX-m.current.x)<4||(f.current.scrollLeft=m.current.sl-(e.clientX-m.current.x))},onPointerUp:e=>{let t=m.current;if(m.current=null,!t||!g.length)return;let n=e.clientX-t.x;Math.abs(n)>36&&y((v<0?0:v)+(n<0?1:-1))},onPointerCancel:()=>{m.current=null},children:g.map((e,t)=>(0,N.jsx)(`button`,{type:`button`,"data-line":t,className:`ticker-line shrink-0 snap-center font-mono text-[13px] font-normal tracking-[0.04em] ${t===v?`text-fg`:`text-dim`}`,onClick:()=>y(t),children:e},`${t}-${e.slice(0,24)}`))}):(0,N.jsxs)(`p`,{className:`truncate text-center tracking-[0.14em]`,children:[(0,N.jsx)(`span`,{className:`font-display tracking-[0.08em] text-primary`,children:h.title}),h.album?(0,N.jsx)(`span`,{className:`ml-3 font-mono text-[11px] tracking-[0.16em] text-accent uppercase`,children:h.album}):null]})}),(0,N.jsx)(`button`,{type:`button`,className:`ticker-copy relative z-10 shrink-0 px-1 text-lg leading-none text-dim hover:text-fg disabled:opacity-25`,"aria-label":`Next line`,disabled:n||!g.length||v>=g.length-1,onClick:()=>y((v<0?-1:v)+1),children:`›`}),(0,N.jsx)(Ic,{to:`/docs`,className:`ticker-copy relative z-10 hidden shrink-0 font-mono text-[10px] tracking-[0.14em] text-primary uppercase hover:underline sm:inline`,children:`Docs`}),(0,N.jsx)(`button`,{type:`button`,className:`ticker-copy relative z-10 shrink-0 pr-1 text-dim hover:text-fg`,"aria-label":`Dismiss`,onClick:()=>t(!0),children:`✕`})]})}var k_=typeof window<`u`&&window.location?.origin?window.location.origin:`https://extropyengine.com`;function A_(){let e={"@context":`https://schema.org`,"@graph":[{"@type":`WebSite`,"@id":`${k_}/#site`,name:ig.name,url:k_,description:ig.description,inLanguage:`en-US`,publisher:{"@id":`${k_}/#person`}},{"@type":`Person`,"@id":`${k_}/#person`,name:ig.person,alternateName:[`Lladnaros`,ig.palindrome],url:k_,jobTitle:`Writer, musician, systems researcher`,sameAs:Dg.map(e=>e.href)},{"@type":`MusicGroup`,"@id":`${k_}/#lladnaros`,name:`Lladnaros`,url:`${k_}/#music`,genre:[`Experimental`,`Electronic`,`Glitch`,`Post-punk`,`Alternative hip hop`],description:`Randall Gossett as Lladnaros. Electronics, glitch, post-punk hop, circus when the tent goes up. Systems theory as a show — not a single lane.`,member:{"@id":`${k_}/#person`}}]};return(0,N.jsx)(`script`,{type:`application/ld+json`,dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}var j_=`/assets/styles-r0U73bcR.css`,M_=`Extropy Engine — Randall Gossett`,N_=`extropyengine.com`,P_=`https://${N_}/cover-card.jpg`,F_=`https://og.grok.me/v1/banner.png?host=${encodeURIComponent(N_)}&title=${encodeURIComponent(M_)}&color=FF5A1F`,Q=Bc({head:()=>({meta:[{charSet:`utf-8`},{name:`viewport`,content:`width=device-width, initial-scale=1`},{title:M_},{name:`description`,content:`Extropy Engine — protocol, papers, and systems work by Randall Gossett. A free book, three studio albums, and research on entropy reduction and emergence-first governance.`},{name:`author`,content:`Randall Gossett`},{name:`apple-mobile-web-app-title`,content:`Extropy Engine`},{name:`theme-color`,content:`#060606`},{name:`twitter:card`,content:`summary_large_image`},{name:`twitter:site`,content:`@lladnaros`},{name:`twitter:creator`,content:`@lladnaros`},{property:`og:type`,content:`website`},{property:`og:site_name`,content:`Extropy Engine`},{property:`og:title`,content:M_},{property:`og:description`,content:`Protocol, papers, and systems work by Randall Gossett. Entropy reduction. Emergence-first governance.`},...P_?[{property:`og:image`,content:P_},{property:`og:image:width`,content:`1200`},{property:`og:image:height`,content:`630`}]:[],...F_?[{property:`x:game:image`,content:F_},{property:`x:game:image:width`,content:`1200`},{property:`x:game:image:height`,content:`264`}]:[]],links:[{rel:`icon`,type:`image/svg+xml`,href:`/favicon.svg`},{rel:`stylesheet`,href:j_},{rel:`manifest`,href:`/__grok/manifest.webmanifest`},{rel:`apple-touch-icon`,href:`/__grok/icon-180.png`},{rel:`alternate`,type:`application/rss+xml`,title:`Extropy Engine`,href:`/podcast/feed.xml`},{rel:`alternate`,type:`application/rss+xml`,title:`Extropy Engine Research Pod`,href:`/podcast-log/feed.xml`}]}),component:()=>(0,N.jsxs)(`html`,{lang:`en`,className:`antialiased`,suppressHydrationWarning:!0,children:[(0,N.jsx)(`head`,{children:(0,N.jsx)(pl,{})}),(0,N.jsxs)(`body`,{className:`bg-bg text-fg`,children:[(0,N.jsx)(A_,{}),(0,N.jsx)(ng,{}),(0,N.jsx)(El,{children:(0,N.jsx)(Xc,{})}),(0,N.jsx)(S_,{}),(0,N.jsx)(O_,{}),(0,N.jsx)(ml,{})]})]})}),I_=`modulepreload`,L_=function(e){return`/`+e},R_={},$=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=L_(t,n),t=s(t),t in R_)return;R_[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:I_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},z_=I(`/`)({component:L(()=>$(()=>import(`./routes-B4ddTVKf.js`),__vite__mapDeps([0,1,2,3,4,5,6,7])),`component`)}),B_=I(`/dfao`)({component:L(()=>$(()=>import(`./dfao-BV9FBsrc.js`),__vite__mapDeps([8,1,9,2,3])),`component`)}),V_=I(`/faq`)({component:L(()=>$(()=>import(`./faq-HvCEUV-y.js`),__vite__mapDeps([10,1,9,2,3])),`component`),head:()=>({meta:[{title:`FAQ — Extropy Engine`},{name:`description`,content:`Extropy Engine FAQ: XP formula, till spark, own lawn, retirement, rest, late mint, decay, SignalFlow, DFAO. The attacks, answered.`}]})}),H_=I(`/glossary`)({component:L(()=>$(()=>import(`./glossary-D-2UR2Kw.js`),__vite__mapDeps([11,1,9,2,3,12])),`component`)}),U_=I(`/hoa`)({component:L(()=>$(()=>import(`./hoa-xQZ5gq5e.js`),__vite__mapDeps([13,1,9,2,3,14])),`component`),head:()=>({meta:[{title:`HOA takeover — Extropy Engine`},{name:`description`,content:`Take the jobs. Keep the book. Clone the app. Run it on a laptop. Make the HOA irrelevant by doing the work.`}]})}),W_=I(`/instead`)({head:()=>({meta:[{title:`Instead — Extropy Engine`},{name:`description`,content:`Same tokenomics. Spark, not a carbon credit. Local desks, not a Treasury wipe. We do not play their markets.`}]}),component:L(()=>$(()=>import(`./instead-B-xbsw1l.js`),__vite__mapDeps([15,1,9,2,3])),`component`)}),G_={title:`Letter key`,kicker:`Do not remap these`,lead:`Same Latin letter gets reused in every field. Here is what this protocol means. Not reputation. Not falsifiability. The most recent signed Codex is v2.1. Canonical mint in code is v3.1.2 in packages/xp-formula. Balancing math for how the meters couple: /docs/METER-MATH.md. First hostile door: /docs/DOOR-DUPLICATE-DATA.md. If a chatbot invents a third reading, it is wrong.`,formula:`XP = R × F × ΔS × (w · E) × log(1/Tₛ)`,mint:[{id:`r`,glyph:`R`,name:`Rarity`,is:`Scarcity / base difficulty of this action class. Property of the loop, not the person. Range [0.1, 10].`,isNot:`Not reputation. Not how famous the actor is.`},{id:`f`,glyph:`F`,name:`Frequency of Decay`,is:`Repeating the same action class pays less. 1.0 the first time.`,isNot:`Not falsifiability. That letter is script-ℱ below.`},{id:`delta-s`,glyph:`ΔS`,name:`Change in entropy (reduction)`,is:`Verified entropy reduction for this loop. Must be > 0 to mint. A proxy we fine-tune. Domain-native units get a bits-equivalent so they can sit on one graph.`,isNot:`Not XP. ΔS is the reduction. XP is the ledger stand-in after the mint.`},{id:`w-dot-e`,glyph:`w · E`,name:`Weighted emergence`,is:`The product itself. w is the weight vector across the eight domains. E is the effort / domain vector for this loop. w · E is those weights applied to that effort — emergence scored across weighted domains. Lawn vs ride vs ozone lives here. PHOTON 404 says the English. The mint writes the dot product. Same object.`,isNot:`Not a fifth letter sitting beside R, F, ΔS, and Tₛ. Not a bag named W.E. Not a ninth domain called Emergence.`},{id:`ts`,glyph:`Tₛ`,name:`Slam window`,is:`Elapsed time of this loop. Tₛ = exp(−λ min(Δt, Δt_cap)). Then log(1/Tₛ) = λ · clip(Δt). Instant close (Δt → 0) → Tₛ = 1 → log = 0 → XP = 0, on purpose.`,isNot:`Not recency decay. Not the 0.99ⁿ standing leak. Do not rewrite as log(1+1/Tₛ).`},{id:`lambda`,glyph:`λ`,name:`Slam rate`,is:`Knob inside Tₛ. Scales how fast the slam window opens with elapsed Δt.`,isNot:`Not the standing leak.`},{id:`dt`,glyph:`Δt`,name:`Elapsed time of this loop`,is:`Clock start to confirm. Clipped to Δt_cap so stalling is not a mint.`,isNot:`Not calendar age of standing XP.`}],other:[{id:`xp`,glyph:`XP`,name:`Global standing`,is:`The letters are XP. Proxy of ΔS on the ledger after the mint. Every door can see that you have standing. You do not spend it. Access economy. Decays ~1%/month of remaining (0.99ⁿ). How XP works is planetary. A DFAO does not rewrite the mint. Cash-out is a lose-condition. If they vote that in, they forked.`,isNot:`Not “Extropy Points.” Not a cash bag. Not ΔS itself. Not L. Not CT. Not Randall’s private ledger.`},{id:`script-f`,glyph:`ℱ`,name:`Falsifiability`,is:`Script-F. A claim that can fail in the open. Lose-conditions live here.`,isNot:`Not Frequency of Decay. Never write F for this.`},{id:`cl`,glyph:`cₗ`,name:`Causal-closure speed`,is:`Local max rate causal effects propagate in a domain. Floor slogan: XP ≥ ΔS / cₗ². Compression of the mint, not a second theory.`,isNot:`Not the speed of light as a new physics law. Structural analogy.`},{id:`l`,glyph:`L`,name:`Literal standing at this till`,is:`First-class, like XP and CT. This moment, this DFAO, this store, this ticket. Built at the door: this-door CT against the house slider. Regular demand here vs a random spike. The slider is the house saying how much of that CT may count, and how much of the ticket the layer may touch. Optional auto: the box can park the slider from this till’s own proofs and load — same move as a hand, writes a vertex, house can override or kill. Domain bands (yes/no or band ≥ n per instrument) may be shown as ZKPs to this till. Same question as whether loops are closing here. Habits (walk vs Hummer) can become room modifiers later if that DFAO votes them in.`,isNot:`Not sweeping floors. Not Landauer. Not a secret coupon. Not global XP. Not a mesh broadcast of the diary.`},{id:`ep`,glyph:`EP`,name:`Emergent Product`,is:`Till spark. Born and burned in the sale. Early mesh: pennies off a fiat ticket. Dense mesh: can clear more of what you owe. Not a bag.`,isNot:`Not Epistemic Proof. Letter collision. Proof-layer records do not buy milk.`},{id:`ct`,glyph:`CT`,name:`Community standing`,is:`Meter for this door / this DFAO. Showing up here. Buying here. Being a node this house can plan around. Feeds L at the till. Not purchased with XP. This DFAO can vote how CT is scored inside this room. That vote does not rewrite CT next door.`,isNot:`Not a coin. Not a job application. Not global XP. Not L itself.`},{id:`cat`,glyph:`CAT`,name:`Skill record`,is:`Unique. Lane + level + issuer. Off the XP mint.`,isNot:`Not a pile of points.`},{id:`it`,glyph:`IT`,name:`Influence standing`,is:`Governance / demonstration weight. Idle leak ~5%/month. Off the XP mint.`,isNot:`Not Insight Token. Not a bag.`},{id:`leak`,glyph:`0.99ⁿ`,name:`Standing leak`,is:`~1% of remaining XP per ~30 days after settlement. Half-life ~69 months. Never hits zero in the reals.`,isNot:`Not Tₛ. Not F.`}]},K_=I(`/key`)({head:()=>({meta:[{title:`Letter key — Extropy Engine`},{name:`description`,content:G_.lead}]}),component:L(()=>$(()=>import(`./key-BnUtqgc8.js`),__vite__mapDeps([16,1,9,2,3,7])),`component`)}),q_=I(`/login`)({component:L(()=>$(()=>import(`./login-BAJhNruj.js`),__vite__mapDeps([17,1,2,3])),`component`)}),J_=I(`/lyrics`)({head:()=>({meta:[{title:`Lyrics — Lladnaros`},{name:`description`,content:`Master list of Lladnaros tracks by album and single. Lyrics where they are on this site. Do not invent lyrics from a title. Do not mix songs.`}]}),component:L(()=>$(()=>import(`./lyrics-CN5aF9-8.js`),__vite__mapDeps([18,1,2,3,5,19])),`component`)}),Y_=I(`/mvt`)({component:L(()=>$(()=>import(`./mvt-SbbLU70L.js`),__vite__mapDeps([20,1,9,2,3,12])),`component`)}),X_=I(`/open-problems`)({component:L(()=>$(()=>import(`./open-problems-rhzybFi7.js`),__vite__mapDeps([21,1,9,2,3,12])),`component`)}),Z_=I(`/podcast`)({head:()=>({meta:[{title:`Extropy Engine — Podcast`}],links:[{rel:`alternate`,type:`application/rss+xml`,title:`Extropy Engine`,href:`/podcast/feed.xml`}]}),component:L(()=>$(()=>import(`./podcast-TZj6LbHM.js`),__vite__mapDeps([22,1,9,2,3])),`component`)}),Q_=I(`/proof-layers`)({component:L(()=>$(()=>import(`./proof-layers-CbAwuHDG.js`),__vite__mapDeps([23,1,9,2,3,12])),`component`)}),$_=`https://extropyengine.com/podcast/feed.xml`,ev=`https://extropyengine.com/podcast-log/feed.xml`,tv={title:`Extropy Engine`,author:`Randall Gossett`,tagline:`Talk. Field notes. Loops.`,description:`A channel for the stuff that doesn’t want to be a paper. Spotify, YouTube, and Apple are live. Anyone else: take the RSS. This website is not the Engine. The diary stays on the box.`,feedPath:`/podcast/feed.xml`,feedUrl:$_,cover:`/podcast/cover.jpg`,page:`/podcast`,spotify:`https://open.spotify.com/show/7G9pK1dHFCam95qQlFAMNE`,youtube:`https://www.youtube.com/@Lladnaros/podcasts`,apple:`https://extropyengine.com/podcast/feed.xml`},nv={title:`Extropy Engine Research Pod`,author:`Randall Gossett`,tagline:`Automated. Unsigned. Not the Codex.`,description:`AUTOMATED RESEARCH POD. Episodes are generated by AI from Extropy Engine research notes and cited sources (Gemini / NotebookLM audio overviews). They are not reviewed, not edited, and not signed by Randall Gossett. Unsigned trail. Not the Codex. Not a paper. Not legal, medical, investment, or protocol advice. Adjacent papers mentioned in an episode do not prove the Engine. The live protocol is the git. Signed book and papers live on this site. If this feed conflicts with those, those win.`,feedPath:`/podcast-log/feed.xml`,feedUrl:ev,cover:`/podcast-log/cover.jpg`,page:`/research-pod`},rv=[{id:`spotify`,label:`Spotify`,hint:`live`,href:tv.spotify},{id:`youtube`,label:`YouTube`,hint:`live`,href:tv.youtube},{id:`apple`,label:`Apple Podcasts`,hint:`live`,href:tv.apple}],iv=I(`/research-pod`)({head:()=>({meta:[{title:`Research Pod — Extropy Engine`},{name:`description`,content:nv.description}],links:[{rel:`alternate`,type:`application/rss+xml`,title:nv.title,href:nv.feedPath}]}),component:L(()=>$(()=>import(`./research-pod-Cg1k8qLQ.js`),__vite__mapDeps([24,1,2,3])),`component`)}),av=I(`/rho`)({head:()=>({meta:[{title:`Fiat residual — Extropy Engine`},{name:`description`,content:`HUD for ρ: published till totals of burned EP versus cash that still rang. Mycelium, not a bag. Demo until doors publish.`}]}),component:L(()=>$(()=>import(`./rho-BkrjldOx.js`),__vite__mapDeps([25,1,9,2,3])),`component`)}),ov=I(`/say`)({component:L(()=>$(()=>import(`./say-Daxb3BMF.js`),__vite__mapDeps([26,1,9,2,3])),`component`)}),sv=I(`/universaltimes`)({component:L(()=>$(()=>import(`./universaltimes-BcosXx0G.js`),__vite__mapDeps([27,1,2,3])),`component`)}),cv=I(`/docs/`)({component:L(()=>$(()=>import(`./docs-CLJ4gBd_.js`),__vite__mapDeps([28,1,9,2,3])),`component`)}),lv=I(`/hoa/sunset-oaks`)({component:L(()=>$(()=>import(`./hoa.sunset-oaks-BZpX_-rq.js`),__vite__mapDeps([29,1,9,2,3,14])),`component`),head:()=>({meta:[{title:`Sunset Oaks — Extropy Engine`},{name:`description`,content:`Sunset Oaks is the first MESO. Clone the app. Run it on a laptop. Crews are MICROs.`}]})}),uv=I(`/papers/closing-the-loop`)({component:L(()=>$(()=>import(`./closing-the-loop-3JJ90WM1.js`),__vite__mapDeps([30,1,2,3,31,6,19])),`component`),head:()=>({meta:[{title:`Closing the Loop — Extropy Engine`},{name:`description`,content:`A systems audit of signal, story, and recursion in the Lladnaros catalog. Randall Gossett, August 2026. Recast of Signal, Loop, and Story.`}]})}),dv=I(`/papers/liquidity-and-decay`)({component:L(()=>$(()=>import(`./liquidity-and-decay-CkSNinTj.js`),__vite__mapDeps([32,1,2,3])),`component`),head:()=>({meta:[{title:`Liquidity Corrupts Verification — Randall Gossett`},{name:`description`,content:`Working paper. Why a transferable bag turns verification into a market. How Extropy Engine couples state resolution to decay instead. Codex letters not remapped.`}]})}),fv=I(`/podcast/log`)({beforeLoad:()=>{throw Ot({to:`/research-pod`})}}),pv=I(`/print/closing-the-loop`)({component:L(()=>$(()=>import(`./closing-the-loop-BJWNL5Om.js`),__vite__mapDeps([33,1,31,6,3,19])),`component`)}),mv=I(`/start/`)({component:L(()=>$(()=>import(`./start-DJ4z-Jil.js`),__vite__mapDeps([34,1,9,2,3,12,4])),`component`),head:()=>({meta:[{title:`Which problem is yours? — Extropy Engine`},{name:`description`,content:`Why reward systems are broken. Why AI alignment fails. Why institutions drift. What if the useful part is measurable.`}]})}),hv=I(`/start/ai`)({component:L(()=>$(()=>import(`./ai-B6anB09w.js`),__vite__mapDeps([35,1])),`component`)}),gv=I(`/start/governance`)({component:L(()=>$(()=>import(`./governance-BqLquoCp.js`),__vite__mapDeps([36,1])),`component`)}),_v=I(`/start/money`)({component:L(()=>$(()=>import(`./money-BN73V-rH.js`),__vite__mapDeps([37,1])),`component`)}),vv=I(`/start/physics`)({component:L(()=>$(()=>import(`./physics-D-MoqST-.js`),__vite__mapDeps([38,1])),`component`)}),yv=z_.update({id:`/`,path:`/`,getParentRoute:()=>Q}),bv=B_.update({id:`/dfao`,path:`/dfao`,getParentRoute:()=>Q}),xv=V_.update({id:`/faq`,path:`/faq`,getParentRoute:()=>Q}),Sv=H_.update({id:`/glossary`,path:`/glossary`,getParentRoute:()=>Q}),Cv=U_.update({id:`/hoa`,path:`/hoa`,getParentRoute:()=>Q}),wv=W_.update({id:`/instead`,path:`/instead`,getParentRoute:()=>Q}),Tv=K_.update({id:`/key`,path:`/key`,getParentRoute:()=>Q}),Ev=q_.update({id:`/login`,path:`/login`,getParentRoute:()=>Q}),Dv=J_.update({id:`/lyrics`,path:`/lyrics`,getParentRoute:()=>Q}),Ov=Y_.update({id:`/mvt`,path:`/mvt`,getParentRoute:()=>Q}),kv=X_.update({id:`/open-problems`,path:`/open-problems`,getParentRoute:()=>Q}),Av=Z_.update({id:`/podcast`,path:`/podcast`,getParentRoute:()=>Q}),jv=Q_.update({id:`/proof-layers`,path:`/proof-layers`,getParentRoute:()=>Q}),Mv=iv.update({id:`/research-pod`,path:`/research-pod`,getParentRoute:()=>Q}),Nv=av.update({id:`/rho`,path:`/rho`,getParentRoute:()=>Q}),Pv=ov.update({id:`/say`,path:`/say`,getParentRoute:()=>Q}),Fv=sv.update({id:`/universaltimes`,path:`/universaltimes`,getParentRoute:()=>Q}),Iv=cv.update({id:`/docs/`,path:`/docs/`,getParentRoute:()=>Q}),Lv=lv.update({id:`/sunset-oaks`,path:`/sunset-oaks`,getParentRoute:()=>Cv}),Rv=uv.update({id:`/papers/closing-the-loop`,path:`/papers/closing-the-loop`,getParentRoute:()=>Q}),zv=dv.update({id:`/papers/liquidity-and-decay`,path:`/papers/liquidity-and-decay`,getParentRoute:()=>Q}),Bv=fv.update({id:`/log`,path:`/log`,getParentRoute:()=>Av}),Vv=pv.update({id:`/print/closing-the-loop`,path:`/print/closing-the-loop`,getParentRoute:()=>Q}),Hv=mv.update({id:`/start/`,path:`/start/`,getParentRoute:()=>Q}),Uv=hv.update({id:`/start/ai`,path:`/start/ai`,getParentRoute:()=>Q}),Wv=gv.update({id:`/start/governance`,path:`/start/governance`,getParentRoute:()=>Q}),Gv=_v.update({id:`/start/money`,path:`/start/money`,getParentRoute:()=>Q}),Kv=vv.update({id:`/start/physics`,path:`/start/physics`,getParentRoute:()=>Q}),qv={HoaSunsetOaksRoute:Lv},Jv=Cv._addFileChildren(qv),Yv={PodcastLogRoute:Bv},Xv={IndexRoute:yv,DfaoRoute:bv,FaqRoute:xv,GlossaryRoute:Sv,HoaRoute:Jv,InsteadRoute:wv,KeyRoute:Tv,LoginRoute:Ev,LyricsRoute:Dv,MvtRoute:Ov,OpenProblemsRoute:kv,PodcastRoute:Av._addFileChildren(Yv),ProofLayersRoute:jv,ResearchPodRoute:Mv,RhoRoute:Nv,SayRoute:Pv,UniversaltimesRoute:Fv,PapersClosingTheLoopRoute:Rv,PapersLiquidityAndDecayRoute:zv,PrintClosingTheLoopRoute:Vv,StartAiRoute:Uv,StartGovernanceRoute:Wv,StartMoneyRoute:Gv,StartPhysicsRoute:Kv,DocsIndexRoute:Iv,StartIndexRoute:Hv},Zv=Q._addFileChildren(Xv);function Qv(){return il({routeTree:Zv,defaultErrorComponent:Tl})}async function $v(){let e=await Qv(),t=[];return window.__TSS_START_OPTIONS__={serializationAdapters:t},t.push(Ms),e.options.serializationAdapters&&t.push(...e.options.serializationAdapters),e.update({basepath:``,serializationAdapters:t}),e.stores.ids.get().length||await Qn(e),e}var ey=$v;function ty(){return ey().finally(()=>window.$_TSR?.h())}var ny;function ry(){return ny||=ty(),(0,N.jsx)(Ps,{promise:ny,children:e=>(0,N.jsx)(sl,{router:e})})}var iy=h();(0,M.startTransition)(()=>{(0,iy.hydrateRoot)(document,(0,N.jsx)(M.StrictMode,{children:(0,N.jsx)(ry,{})}))});export{dg as A,F as B,gg as C,Cg as D,bg as E,nl as F,Xc as I,Ic as L,ig as M,Dg as N,pg as O,Cl as P,bc as R,wg as S,hg as T,Sg as _,m_ as a,Eg as b,Rg as c,ug as d,og as f,Tg as g,fg as h,G_ as i,ag as j,_g as k,Bg as l,kg as m,nv as n,x_ as o,Og as p,rv as r,__ as s,tv as t,zg as u,vg as v,yg as w,xg as x,mg as y,pc as z};