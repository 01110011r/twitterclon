(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function nv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wf={exports:{}},Rs={},Kf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),rv=Symbol.for("react.portal"),iv=Symbol.for("react.fragment"),ov=Symbol.for("react.strict_mode"),sv=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),uv=Symbol.for("react.forward_ref"),cv=Symbol.for("react.suspense"),dv=Symbol.for("react.memo"),fv=Symbol.for("react.lazy"),$c=Symbol.iterator;function hv(t){return t===null||typeof t!="object"?null:(t=$c&&t[$c]||t["@@iterator"],typeof t=="function"?t:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gf=Object.assign,Jf={};function Cr(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||qf}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yf(){}Yf.prototype=Cr.prototype;function fu(t,e,n){this.props=t,this.context=e,this.refs=Jf,this.updater=n||qf}var hu=fu.prototype=new Yf;hu.constructor=fu;Gf(hu,Cr.prototype);hu.isPureReactComponent=!0;var Vc=Array.isArray,Qf=Object.prototype.hasOwnProperty,pu={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Qf.call(e,r)&&!Xf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vi,type:t,key:o,ref:s,props:i,_owner:pu.current}}function pv(t,e){return{$$typeof:Vi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vi}function mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hc=/\/+/g;function ca(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mv(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Vi:case rv:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+ca(s,0):r,Vc(i)?(n="",t!=null&&(n=t.replace(Hc,"$&/")+"/"),ko(i,e,n,"",function(u){return u})):i!=null&&(mu(i)&&(i=pv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Hc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Vc(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+ca(o,a);s+=ko(o,e,n,l,i)}else if(l=hv(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+ca(o,a++),s+=ko(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function oo(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(o){return e.call(n,o,i++)}),r}function gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},To={transition:null},vv={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:To,ReactCurrentOwner:pu};b.Children={map:oo,forEach:function(t,e,n){oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oo(t,function(){e++}),e},toArray:function(t){return oo(t,function(e){return e})||[]},only:function(t){if(!mu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=Cr;b.Fragment=iv;b.Profiler=sv;b.PureComponent=fu;b.StrictMode=ov;b.Suspense=cv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gf({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=pu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qf.call(e,l)&&!Xf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vi,type:t.type,key:i,ref:o,props:r,_owner:s}};b.createContext=function(t){return t={$$typeof:lv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:av,_context:t},t.Consumer=t};b.createElement=Zf;b.createFactory=function(t){var e=Zf.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:uv,render:t}};b.isValidElement=mu;b.lazy=function(t){return{$$typeof:fv,_payload:{_status:-1,_result:t},_init:gv}};b.memo=function(t,e){return{$$typeof:dv,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=To.transition;To.transition={};try{t()}finally{To.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return Ie.current.useCallback(t,e)};b.useContext=function(t){return Ie.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};b.useEffect=function(t,e){return Ie.current.useEffect(t,e)};b.useId=function(){return Ie.current.useId()};b.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return Ie.current.useMemo(t,e)};b.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};b.useRef=function(t){return Ie.current.useRef(t)};b.useState=function(t){return Ie.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return Ie.current.useTransition()};b.version="18.2.0";Kf.exports=b;var k=Kf.exports;const Ht=nv(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=k,wv=Symbol.for("react.element"),_v=Symbol.for("react.fragment"),Ev=Object.prototype.hasOwnProperty,Iv=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sv={key:!0,ref:!0,__self:!0,__source:!0};function eh(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Ev.call(e,r)&&!Sv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wv,type:t,key:o,ref:s,props:i,_owner:Iv.current}}Rs.Fragment=_v;Rs.jsx=eh;Rs.jsxs=eh;Wf.exports=Rs;var E=Wf.exports,el={},th={exports:{}},Ue={},nh={exports:{}},rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,x){var L=R.length;R.push(x);e:for(;0<L;){var Y=L-1>>>1,le=R[Y];if(0<i(le,x))R[Y]=x,R[L]=le,L=Y;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var x=R[0],L=R.pop();if(L!==x){R[0]=L;e:for(var Y=0,le=R.length,ro=le>>>1;Y<ro;){var pn=2*(Y+1)-1,ua=R[pn],mn=pn+1,io=R[mn];if(0>i(ua,L))mn<le&&0>i(io,ua)?(R[Y]=io,R[mn]=L,Y=mn):(R[Y]=ua,R[pn]=L,Y=pn);else if(mn<le&&0>i(io,L))R[Y]=io,R[mn]=L,Y=mn;else break e}}return x}function i(R,x){var L=R.sortIndex-x.sortIndex;return L!==0?L:R.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,p=3,y=!1,g=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=R)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function _(R){if(v=!1,m(R),!g)if(n(l)!==null)g=!0,aa(T);else{var x=n(u);x!==null&&la(_,x.startTime-R)}}function T(R,x){g=!1,v&&(v=!1,h(O),O=-1),y=!0;var L=p;try{for(m(x),d=n(l);d!==null&&(!(d.expirationTime>x)||R&&!qe());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,p=d.priorityLevel;var le=Y(d.expirationTime<=x);x=t.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&r(l),m(x)}else r(l);d=n(l)}if(d!==null)var ro=!0;else{var pn=n(u);pn!==null&&la(_,pn.startTime-x),ro=!1}return ro}finally{d=null,p=L,y=!1}}var N=!1,A=null,O=-1,$=5,D=-1;function qe(){return!(t.unstable_now()-D<$)}function Ur(){if(A!==null){var R=t.unstable_now();D=R;var x=!0;try{x=A(!0,R)}finally{x?Fr():(N=!1,A=null)}}else N=!1}var Fr;if(typeof f=="function")Fr=function(){f(Ur)};else if(typeof MessageChannel<"u"){var Bc=new MessageChannel,tv=Bc.port2;Bc.port1.onmessage=Ur,Fr=function(){tv.postMessage(null)}}else Fr=function(){P(Ur,0)};function aa(R){A=R,N||(N=!0,Fr())}function la(R,x){O=P(function(){R(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,aa(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(p){case 1:case 2:case 3:var x=3;break;default:x=p}var L=p;p=x;try{return R()}finally{p=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,x){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=p;p=R;try{return x()}finally{p=L}},t.unstable_scheduleCallback=function(R,x,L){var Y=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,R){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=L+le,R={id:c++,callback:x,priorityLevel:R,startTime:L,expirationTime:le,sortIndex:-1},L>Y?(R.sortIndex=L,e(u,R),n(l)===null&&R===n(u)&&(v?(h(O),O=-1):v=!0,la(_,L-Y))):(R.sortIndex=le,e(l,R),g||y||(g=!0,aa(T))),R},t.unstable_shouldYield=qe,t.unstable_wrapCallback=function(R){var x=p;return function(){var L=p;p=x;try{return R.apply(this,arguments)}finally{p=L}}}})(rh);nh.exports=rh;var kv=nh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=k,Me=kv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,mi={};function Fn(t,e){gr(t,e),gr(t+"Capture",e)}function gr(t,e){for(mi[t]=e,t=0;t<e.length;t++)oh.add(e[t])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Tv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wc={},Kc={};function Cv(t){return tl.call(Kc,t)?!0:tl.call(Wc,t)?!1:Tv.test(t)?Kc[t]=!0:(Wc[t]=!0,!1)}function Rv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pv(t,e,n,r){if(e===null||typeof e>"u"||Rv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Se(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new Se(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new Se(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new Se(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new Se(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new Se(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new Se(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new Se(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new Se(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new Se(t,5,!1,t.toLowerCase(),null,!1,!1)});var gu=/[\-:]([a-z])/g;function vu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gu,vu);pe[e]=new Se(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gu,vu);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gu,vu);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!0,!0)});function yu(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pv(e,n,i,r)&&(n=null),r||i===null?Cv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var At=ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),sh=Symbol.for("react.provider"),ah=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),rl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),lh=Symbol.for("react.offscreen"),qc=Symbol.iterator;function jr(t){return t===null||typeof t!="object"?null:(t=qc&&t[qc]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,da;function Qr(t){if(da===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);da=e&&e[1]||""}return`
`+da+t}var fa=!1;function ha(t,e){if(!t||fa)return"";fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{fa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qr(t):""}function Nv(t){switch(t.tag){case 5:return Qr(t.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return t=ha(t.type,!1),t;case 11:return t=ha(t.type.render,!1),t;case 1:return t=ha(t.type,!0),t;default:return""}}function ol(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gn:return"Fragment";case qn:return"Portal";case nl:return"Profiler";case wu:return"StrictMode";case rl:return"Suspense";case il:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ah:return(t.displayName||"Context")+".Consumer";case sh:return(t._context.displayName||"Context")+".Provider";case _u:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eu:return e=t.displayName||null,e!==null?e:ol(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return ol(t(e))}catch{}}return null}function Av(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(e);case 8:return e===wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ov(t){var e=uh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=Ov(t))}function ch(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sl(t,e){var n=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dh(t,e){e=e.checked,e!=null&&yu(t,"checked",e,!1)}function al(t,e){dh(t,e);var n=rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ll(t,e.type,n):e.hasOwnProperty("defaultValue")&&ll(t,e.type,rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ll(t,e,n){(e!=="number"||Ko(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xr=Array.isArray;function sr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ul(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Xr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rn(n)}}function fh(t,e){var n=rn(e.value),r=rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,ph=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(ri).forEach(function(t){xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ri[e]=ri[t]})});function mh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ri.hasOwnProperty(t)&&ri[t]?(""+e).trim():e+"px"}function gh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Lv=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(t,e){if(e){if(Lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function fl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function Iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pl=null,ar=null,lr=null;function Xc(t){if(t=Ki(t)){if(typeof pl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=xs(e),pl(t.stateNode,t.type,e))}}function vh(t){ar?lr?lr.push(t):lr=[t]:ar=t}function yh(){if(ar){var t=ar,e=lr;if(lr=ar=null,Xc(t),e)for(t=0;t<e.length;t++)Xc(e[t])}}function wh(t,e){return t(e)}function _h(){}var pa=!1;function Eh(t,e,n){if(pa)return t(e,n);pa=!0;try{return wh(t,e,n)}finally{pa=!1,(ar!==null||lr!==null)&&(_h(),yh())}}function vi(t,e){var n=t.stateNode;if(n===null)return null;var r=xs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var ml=!1;if(Tt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ml=!1}function Dv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ii=!1,qo=null,Go=!1,gl=null,bv={onError:function(t){ii=!0,qo=t}};function Mv(t,e,n,r,i,o,s,a,l){ii=!1,qo=null,Dv.apply(bv,arguments)}function Uv(t,e,n,r,i,o,s,a,l){if(Mv.apply(this,arguments),ii){if(ii){var u=qo;ii=!1,qo=null}else throw Error(I(198));Go||(Go=!0,gl=u)}}function jn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ih(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zc(t){if(jn(t)!==t)throw Error(I(188))}function Fv(t){var e=t.alternate;if(!e){if(e=jn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zc(i),t;if(o===r)return Zc(i),e;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Sh(t){return t=Fv(t),t!==null?kh(t):null}function kh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kh(t);if(e!==null)return e;t=t.sibling}return null}var Th=Me.unstable_scheduleCallback,ed=Me.unstable_cancelCallback,jv=Me.unstable_shouldYield,zv=Me.unstable_requestPaint,Q=Me.unstable_now,Bv=Me.unstable_getCurrentPriorityLevel,Su=Me.unstable_ImmediatePriority,Ch=Me.unstable_UserBlockingPriority,Jo=Me.unstable_NormalPriority,$v=Me.unstable_LowPriority,Rh=Me.unstable_IdlePriority,Ps=null,dt=null;function Vv(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ps,t,void 0,(t.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Kv,Hv=Math.log,Wv=Math.LN2;function Kv(t){return t>>>=0,t===0?32:31-(Hv(t)/Wv|0)|0}var uo=64,co=4194304;function Zr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Zr(a):(o&=s,o!==0&&(r=Zr(o)))}else s=n&~i,s!==0?r=Zr(s):o!==0&&(r=Zr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xe(e),i=1<<n,r|=t[n],e&=~i;return r}function qv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function vl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ph(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function ma(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xe(e),t[e]=n}function Jv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function ku(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function Nh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ah,Tu,Oh,xh,Lh,yl=!1,fo=[],Wt=null,Kt=null,qt=null,yi=new Map,wi=new Map,Ft=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(t,e){switch(t){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(e.pointerId)}}function Br(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ki(e),e!==null&&Tu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qv(t,e,n,r,i){switch(e){case"focusin":return Wt=Br(Wt,t,e,n,r,i),!0;case"dragenter":return Kt=Br(Kt,t,e,n,r,i),!0;case"mouseover":return qt=Br(qt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,Br(yi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,Br(wi.get(o)||null,t,e,n,r,i)),!0}return!1}function Dh(t){var e=wn(t.target);if(e!==null){var n=jn(e);if(n!==null){if(e=n.tag,e===13){if(e=Ih(n),e!==null){t.blockedOn=e,Lh(t.priority,function(){Oh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Co(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return e=Ki(n),e!==null&&Tu(e),t.blockedOn=n,!1;e.shift()}return!0}function nd(t,e,n){Co(t)&&n.delete(e)}function Xv(){yl=!1,Wt!==null&&Co(Wt)&&(Wt=null),Kt!==null&&Co(Kt)&&(Kt=null),qt!==null&&Co(qt)&&(qt=null),yi.forEach(nd),wi.forEach(nd)}function $r(t,e){t.blockedOn===e&&(t.blockedOn=null,yl||(yl=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Xv)))}function _i(t){function e(i){return $r(i,t)}if(0<fo.length){$r(fo[0],t);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wt!==null&&$r(Wt,t),Kt!==null&&$r(Kt,t),qt!==null&&$r(qt,t),yi.forEach(e),wi.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&Ft.shift()}var ur=At.ReactCurrentBatchConfig,Qo=!0;function Zv(t,e,n,r){var i=j,o=ur.transition;ur.transition=null;try{j=1,Cu(t,e,n,r)}finally{j=i,ur.transition=o}}function ey(t,e,n,r){var i=j,o=ur.transition;ur.transition=null;try{j=4,Cu(t,e,n,r)}finally{j=i,ur.transition=o}}function Cu(t,e,n,r){if(Qo){var i=wl(t,e,n,r);if(i===null)Ta(t,e,r,Xo,n),td(t,r);else if(Qv(i,t,e,n,r))r.stopPropagation();else if(td(t,r),e&4&&-1<Yv.indexOf(t)){for(;i!==null;){var o=Ki(i);if(o!==null&&Ah(o),o=wl(t,e,n,r),o===null&&Ta(t,e,r,Xo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ta(t,e,r,null,n)}}var Xo=null;function wl(t,e,n,r){if(Xo=null,t=Iu(r),t=wn(t),t!==null)if(e=jn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ih(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function bh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bv()){case Su:return 1;case Ch:return 4;case Jo:case $v:return 16;case Rh:return 536870912;default:return 16}default:return 16}}var zt=null,Ru=null,Ro=null;function Mh(){if(Ro)return Ro;var t,e=Ru,n=e.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Ro=i.slice(t,1<r?1-r:void 0)}function Po(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function rd(){return!1}function Fe(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ho:rd,this.isPropagationStopped=rd,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=Fe(Rr),Wi=G({},Rr,{view:0,detail:0}),ty=Fe(Wi),ga,va,Vr,Ns=G({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(ga=t.screenX-Vr.screenX,va=t.screenY-Vr.screenY):va=ga=0,Vr=t),ga)},movementY:function(t){return"movementY"in t?t.movementY:va}}),id=Fe(Ns),ny=G({},Ns,{dataTransfer:0}),ry=Fe(ny),iy=G({},Wi,{relatedTarget:0}),ya=Fe(iy),oy=G({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Fe(oy),ay=G({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ly=Fe(ay),uy=G({},Rr,{data:0}),od=Fe(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fy[t])?!!e[t]:!1}function Nu(){return hy}var py=G({},Wi,{key:function(t){if(t.key){var e=cy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(t){return t.type==="keypress"?Po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),my=Fe(py),gy=G({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=Fe(gy),vy=G({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),yy=Fe(vy),wy=G({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Fe(wy),Ey=G({},Ns,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Fe(Ey),Sy=[9,13,27,32],Au=Tt&&"CompositionEvent"in window,oi=null;Tt&&"documentMode"in document&&(oi=document.documentMode);var ky=Tt&&"TextEvent"in window&&!oi,Uh=Tt&&(!Au||oi&&8<oi&&11>=oi),ad=String.fromCharCode(32),ld=!1;function Fh(t,e){switch(t){case"keyup":return Sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jn=!1;function Ty(t,e){switch(t){case"compositionend":return jh(e);case"keypress":return e.which!==32?null:(ld=!0,ad);case"textInput":return t=e.data,t===ad&&ld?null:t;default:return null}}function Cy(t,e){if(Jn)return t==="compositionend"||!Au&&Fh(t,e)?(t=Mh(),Ro=Ru=zt=null,Jn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uh&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ry[t.type]:e==="textarea"}function zh(t,e,n,r){vh(r),e=Zo(e,"onChange"),0<e.length&&(n=new Pu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var si=null,Ei=null;function Py(t){Qh(t,0)}function As(t){var e=Xn(t);if(ch(e))return t}function Ny(t,e){if(t==="change")return e}var Bh=!1;if(Tt){var wa;if(Tt){var _a="oninput"in document;if(!_a){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),_a=typeof cd.oninput=="function"}wa=_a}else wa=!1;Bh=wa&&(!document.documentMode||9<document.documentMode)}function dd(){si&&(si.detachEvent("onpropertychange",$h),Ei=si=null)}function $h(t){if(t.propertyName==="value"&&As(Ei)){var e=[];zh(e,Ei,t,Iu(t)),Eh(Py,e)}}function Ay(t,e,n){t==="focusin"?(dd(),si=e,Ei=n,si.attachEvent("onpropertychange",$h)):t==="focusout"&&dd()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return As(Ei)}function xy(t,e){if(t==="click")return As(e)}function Ly(t,e){if(t==="input"||t==="change")return As(e)}function Dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var et=typeof Object.is=="function"?Object.is:Dy;function Ii(t,e){if(et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tl.call(e,i)||!et(t[i],e[i]))return!1}return!0}function fd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hd(t,e){var n=fd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fd(n)}}function Vh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hh(){for(var t=window,e=Ko();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ko(t.document)}return e}function Ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function by(t){var e=Hh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vh(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=hd(n,o);var s=hd(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=Tt&&"documentMode"in document&&11>=document.documentMode,Yn=null,_l=null,ai=null,El=!1;function pd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||Yn==null||Yn!==Ko(r)||(r=Yn,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ai&&Ii(ai,r)||(ai=r,r=Zo(_l,"onSelect"),0<r.length&&(e=new Pu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yn)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qn={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Ea={},Wh={};Tt&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Os(t){if(Ea[t])return Ea[t];if(!Qn[t])return t;var e=Qn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wh)return Ea[t]=e[n];return t}var Kh=Os("animationend"),qh=Os("animationiteration"),Gh=Os("animationstart"),Jh=Os("transitionend"),Yh=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(t,e){Yh.set(t,e),Fn(e,[t])}for(var Ia=0;Ia<md.length;Ia++){var Sa=md[Ia],Uy=Sa.toLowerCase(),Fy=Sa[0].toUpperCase()+Sa.slice(1);cn(Uy,"on"+Fy)}cn(Kh,"onAnimationEnd");cn(qh,"onAnimationIteration");cn(Gh,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Jh,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function gd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Uv(r,e,void 0,t),t.currentTarget=null}function Qh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;gd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;gd(i,a,u),o=l}}}if(Go)throw t=gl,Go=!1,gl=null,t}function V(t,e){var n=e[Cl];n===void 0&&(n=e[Cl]=new Set);var r=t+"__bubble";n.has(r)||(Xh(e,t,2,!1),n.add(r))}function ka(t,e,n){var r=0;e&&(r|=4),Xh(n,t,r,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Si(t){if(!t[mo]){t[mo]=!0,oh.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||ka(n,!1,t),ka(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,ka("selectionchange",!1,e))}}function Xh(t,e,n,r){switch(bh(e)){case 1:var i=Zv;break;case 4:i=ey;break;default:i=Cu}n=i.bind(null,e,n,t),i=void 0,!ml||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ta(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=wn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Eh(function(){var u=o,c=Iu(n),d=[];e:{var p=Yh.get(t);if(p!==void 0){var y=Pu,g=t;switch(t){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":y=my;break;case"focusin":g="focus",y=ya;break;case"focusout":g="blur",y=ya;break;case"beforeblur":case"afterblur":y=ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yy;break;case Kh:case qh:case Gh:y=sy;break;case Jh:y=_y;break;case"scroll":y=ty;break;case"wheel":y=Iy;break;case"copy":case"cut":case"paste":y=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sd}var v=(e&4)!==0,P=!v&&t==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,m;f!==null;){m=f;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,h!==null&&(_=vi(f,h),_!=null&&v.push(ki(f,_,m)))),P)break;f=f.return}0<v.length&&(p=new y(p,g,null,n,c),d.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==hl&&(g=n.relatedTarget||n.fromElement)&&(wn(g)||g[Ct]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?wn(g):null,g!==null&&(P=jn(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=id,_="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=sd,_="onPointerLeave",h="onPointerEnter",f="pointer"),P=y==null?p:Xn(y),m=g==null?p:Xn(g),p=new v(_,f+"leave",y,n,c),p.target=P,p.relatedTarget=m,_=null,wn(c)===u&&(v=new v(h,f+"enter",g,n,c),v.target=m,v.relatedTarget=P,_=v),P=_,y&&g)t:{for(v=y,h=g,f=0,m=v;m;m=Wn(m))f++;for(m=0,_=h;_;_=Wn(_))m++;for(;0<f-m;)v=Wn(v),f--;for(;0<m-f;)h=Wn(h),m--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=Wn(v),h=Wn(h)}v=null}else v=null;y!==null&&vd(d,p,y,v,!1),g!==null&&P!==null&&vd(d,P,g,v,!0)}}e:{if(p=u?Xn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var T=Ny;else if(ud(p))if(Bh)T=Ly;else{T=Oy;var N=Ay}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=xy);if(T&&(T=T(t,u))){zh(d,T,n,c);break e}N&&N(t,p,u),t==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&ll(p,"number",p.value)}switch(N=u?Xn(u):window,t){case"focusin":(ud(N)||N.contentEditable==="true")&&(Yn=N,_l=u,ai=null);break;case"focusout":ai=_l=Yn=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,pd(d,n,c);break;case"selectionchange":if(My)break;case"keydown":case"keyup":pd(d,n,c)}var A;if(Au)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Jn?Fh(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Uh&&n.locale!=="ko"&&(Jn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Jn&&(A=Mh()):(zt=c,Ru="value"in zt?zt.value:zt.textContent,Jn=!0)),N=Zo(u,O),0<N.length&&(O=new od(O,t,null,n,c),d.push({event:O,listeners:N}),A?O.data=A:(A=jh(n),A!==null&&(O.data=A)))),(A=ky?Ty(t,n):Cy(t,n))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(c=new od("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Qh(d,e)})}function ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vi(t,n),o!=null&&r.unshift(ki(t,o,i)),o=vi(t,e),o!=null&&r.push(ki(t,o,i))),t=t.return}return r}function Wn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vd(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vi(n,o),l!=null&&s.unshift(ki(n,l,a))):i||(l=vi(n,o),l!=null&&s.push(ki(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var zy=/\r\n?/g,By=/\u0000|\uFFFD/g;function yd(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(By,"")}function go(t,e,n){if(e=yd(e),yd(t)!==e&&n)throw Error(I(425))}function es(){}var Il=null,Sl=null;function kl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(t){return wd.resolve(null).then(t).catch(Hy)}:Tl;function Hy(t){setTimeout(function(){throw t})}function Ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_i(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(e)}function Gt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _d(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),it="__reactFiber$"+Pr,Ti="__reactProps$"+Pr,Ct="__reactContainer$"+Pr,Cl="__reactEvents$"+Pr,Wy="__reactListeners$"+Pr,Ky="__reactHandles$"+Pr;function wn(t){var e=t[it];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ct]||n[it]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_d(t);t!==null;){if(n=t[it])return n;t=_d(t)}return e}t=n,n=t.parentNode}return null}function Ki(t){return t=t[it]||t[Ct],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function xs(t){return t[Ti]||null}var Rl=[],Zn=-1;function dn(t){return{current:t}}function H(t){0>Zn||(t.current=Rl[Zn],Rl[Zn]=null,Zn--)}function B(t,e){Zn++,Rl[Zn]=t.current,t.current=e}var on={},we=dn(on),Re=dn(!1),Pn=on;function vr(t,e){var n=t.type.contextTypes;if(!n)return on;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(t){return t=t.childContextTypes,t!=null}function ts(){H(Re),H(we)}function Ed(t,e,n){if(we.current!==on)throw Error(I(168));B(we,e),B(Re,n)}function Zh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Av(t)||"Unknown",i));return G({},n,r)}function ns(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Pn=we.current,B(we,t),B(Re,Re.current),!0}function Id(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Zh(t,e,Pn),r.__reactInternalMemoizedMergedChildContext=t,H(Re),H(we),B(we,t)):H(Re),B(Re,n)}var gt=null,Ls=!1,Ra=!1;function ep(t){gt===null?gt=[t]:gt.push(t)}function qy(t){Ls=!0,ep(t)}function fn(){if(!Ra&&gt!==null){Ra=!0;var t=0,e=j;try{var n=gt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gt=null,Ls=!1}catch(i){throw gt!==null&&(gt=gt.slice(t+1)),Th(Su,fn),i}finally{j=e,Ra=!1}}return null}var er=[],tr=0,rs=null,is=0,je=[],ze=0,Nn=null,vt=1,yt="";function gn(t,e){er[tr++]=is,er[tr++]=rs,rs=t,is=e}function tp(t,e,n){je[ze++]=vt,je[ze++]=yt,je[ze++]=Nn,Nn=t;var r=vt;t=yt;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var o=32-Xe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,vt=1<<32-Xe(e)+i|n<<i|r,yt=o+t}else vt=1<<o|n<<i|r,yt=t}function xu(t){t.return!==null&&(gn(t,1),tp(t,1,0))}function Lu(t){for(;t===rs;)rs=er[--tr],er[tr]=null,is=er[--tr],er[tr]=null;for(;t===Nn;)Nn=je[--ze],je[ze]=null,yt=je[--ze],je[ze]=null,vt=je[--ze],je[ze]=null}var be=null,Le=null,W=!1,Qe=null;function np(t,e){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,be=t,Le=Gt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,be=t,Le=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nn!==null?{id:vt,overflow:yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,be=t,Le=null,!0):!1;default:return!1}}function Pl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nl(t){if(W){var e=Le;if(e){var n=e;if(!Sd(t,e)){if(Pl(t))throw Error(I(418));e=Gt(n.nextSibling);var r=be;e&&Sd(t,e)?np(r,n):(t.flags=t.flags&-4097|2,W=!1,be=t)}}else{if(Pl(t))throw Error(I(418));t.flags=t.flags&-4097|2,W=!1,be=t}}}function kd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;be=t}function vo(t){if(t!==be)return!1;if(!W)return kd(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kl(t.type,t.memoizedProps)),e&&(e=Le)){if(Pl(t))throw rp(),Error(I(418));for(;e;)np(t,e),e=Gt(e.nextSibling)}if(kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Le=Gt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Le=null}}else Le=be?Gt(t.stateNode.nextSibling):null;return!0}function rp(){for(var t=Le;t;)t=Gt(t.nextSibling)}function yr(){Le=be=null,W=!1}function Du(t){Qe===null?Qe=[t]:Qe.push(t)}var Gy=At.ReactCurrentBatchConfig;function Je(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var os=dn(null),ss=null,nr=null,bu=null;function Mu(){bu=nr=ss=null}function Uu(t){var e=os.current;H(os),t._currentValue=e}function Al(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function cr(t,e){ss=t,bu=nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function He(t){var e=t._currentValue;if(bu!==t)if(t={context:t,memoizedValue:e,next:null},nr===null){if(ss===null)throw Error(I(308));nr=t,ss.dependencies={lanes:0,firstContext:t}}else nr=nr.next=t;return e}var _n=null;function Fu(t){_n===null?_n=[t]:_n.push(t)}function ip(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rt(t,r)}function Rt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ut=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Et(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rt(t,n)}return i=r.interleaved,i===null?(e.next=e,Fu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rt(t,n)}function No(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ku(t,n)}}function Td(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function as(t,e,n,r){var i=t.updateQueue;Ut=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(p=e,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(y,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(y,d,p):g,p==null)break e;d=G({},d,p);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);On|=s,t.lanes=s,t.memoizedState=d}}function Cd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var sp=new ih.Component().refs;function Ol(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:G({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ds={isMounted:function(t){return(t=t._reactInternals)?jn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=Qt(t),o=Et(r,i);o.payload=e,n!=null&&(o.callback=n),e=Jt(t,o,i),e!==null&&(Ze(e,t,i,r),No(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=Qt(t),o=Et(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Jt(t,o,i),e!==null&&(Ze(e,t,i,r),No(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ee(),r=Qt(t),i=Et(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jt(t,i,r),e!==null&&(Ze(e,t,r,n),No(e,t,r))}};function Rd(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,o):!0}function ap(t,e,n){var r=!1,i=on,o=e.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=Pe(e)?Pn:we.current,r=e.contextTypes,o=(r=r!=null)?vr(t,i):on),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ds,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Pd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ds.enqueueReplaceState(e,e.state,null)}function xl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sp,ju(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=Pe(e)?Pn:we.current,i.context=vr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ol(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ds.enqueueReplaceState(i,i.state,null),as(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===sp&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function yo(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nd(t){var e=t._init;return e(t._payload)}function lp(t){function e(h,f){if(t){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Xt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,_){return f===null||f.tag!==6?(f=Da(m,h.mode,_),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,_){var T=m.type;return T===Gn?c(h,f,m.props.children,_,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mt&&Nd(T)===f.type)?(_=i(f,m.props),_.ref=Hr(h,f,m),_.return=h,_):(_=bo(m.type,m.key,m.props,null,h.mode,_),_.ref=Hr(h,f,m),_.return=h,_)}function u(h,f,m,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ba(m,h.mode,_),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,_,T){return f===null||f.tag!==7?(f=kn(m,h.mode,_,T),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Da(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case so:return m=bo(f.type,f.key,f.props,null,h.mode,m),m.ref=Hr(h,null,f),m.return=h,m;case qn:return f=ba(f,h.mode,m),f.return=h,f;case Mt:var _=f._init;return d(h,_(f._payload),m)}if(Xr(f)||jr(f))return f=kn(f,h.mode,m,null),f.return=h,f;yo(h,f)}return null}function p(h,f,m,_){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(h,f,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return m.key===T?l(h,f,m,_):null;case qn:return m.key===T?u(h,f,m,_):null;case Mt:return T=m._init,p(h,f,T(m._payload),_)}if(Xr(m)||jr(m))return T!==null?null:c(h,f,m,_,null);yo(h,m)}return null}function y(h,f,m,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(m)||null,a(f,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case so:return h=h.get(_.key===null?m:_.key)||null,l(f,h,_,T);case qn:return h=h.get(_.key===null?m:_.key)||null,u(f,h,_,T);case Mt:var N=_._init;return y(h,f,m,N(_._payload),T)}if(Xr(_)||jr(_))return h=h.get(m)||null,c(f,h,_,T,null);yo(f,_)}return null}function g(h,f,m,_){for(var T=null,N=null,A=f,O=f=0,$=null;A!==null&&O<m.length;O++){A.index>O?($=A,A=null):$=A.sibling;var D=p(h,A,m[O],_);if(D===null){A===null&&(A=$);break}t&&A&&D.alternate===null&&e(h,A),f=o(D,f,O),N===null?T=D:N.sibling=D,N=D,A=$}if(O===m.length)return n(h,A),W&&gn(h,O),T;if(A===null){for(;O<m.length;O++)A=d(h,m[O],_),A!==null&&(f=o(A,f,O),N===null?T=A:N.sibling=A,N=A);return W&&gn(h,O),T}for(A=r(h,A);O<m.length;O++)$=y(A,h,O,m[O],_),$!==null&&(t&&$.alternate!==null&&A.delete($.key===null?O:$.key),f=o($,f,O),N===null?T=$:N.sibling=$,N=$);return t&&A.forEach(function(qe){return e(h,qe)}),W&&gn(h,O),T}function v(h,f,m,_){var T=jr(m);if(typeof T!="function")throw Error(I(150));if(m=T.call(m),m==null)throw Error(I(151));for(var N=T=null,A=f,O=f=0,$=null,D=m.next();A!==null&&!D.done;O++,D=m.next()){A.index>O?($=A,A=null):$=A.sibling;var qe=p(h,A,D.value,_);if(qe===null){A===null&&(A=$);break}t&&A&&qe.alternate===null&&e(h,A),f=o(qe,f,O),N===null?T=qe:N.sibling=qe,N=qe,A=$}if(D.done)return n(h,A),W&&gn(h,O),T;if(A===null){for(;!D.done;O++,D=m.next())D=d(h,D.value,_),D!==null&&(f=o(D,f,O),N===null?T=D:N.sibling=D,N=D);return W&&gn(h,O),T}for(A=r(h,A);!D.done;O++,D=m.next())D=y(A,h,O,D.value,_),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?O:D.key),f=o(D,f,O),N===null?T=D:N.sibling=D,N=D);return t&&A.forEach(function(Ur){return e(h,Ur)}),W&&gn(h,O),T}function P(h,f,m,_){if(typeof m=="object"&&m!==null&&m.type===Gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case so:e:{for(var T=m.key,N=f;N!==null;){if(N.key===T){if(T=m.type,T===Gn){if(N.tag===7){n(h,N.sibling),f=i(N,m.props.children),f.return=h,h=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Mt&&Nd(T)===N.type){n(h,N.sibling),f=i(N,m.props),f.ref=Hr(h,N,m),f.return=h,h=f;break e}n(h,N);break}else e(h,N);N=N.sibling}m.type===Gn?(f=kn(m.props.children,h.mode,_,m.key),f.return=h,h=f):(_=bo(m.type,m.key,m.props,null,h.mode,_),_.ref=Hr(h,f,m),_.return=h,h=_)}return s(h);case qn:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else e(h,f);f=f.sibling}f=ba(m,h.mode,_),f.return=h,h=f}return s(h);case Mt:return N=m._init,P(h,f,N(m._payload),_)}if(Xr(m))return g(h,f,m,_);if(jr(m))return v(h,f,m,_);yo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Da(m,h.mode,_),f.return=h,h=f),s(h)):n(h,f)}return P}var wr=lp(!0),up=lp(!1),qi={},ft=dn(qi),Ci=dn(qi),Ri=dn(qi);function En(t){if(t===qi)throw Error(I(174));return t}function zu(t,e){switch(B(Ri,e),B(Ci,t),B(ft,qi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cl(e,t)}H(ft),B(ft,e)}function _r(){H(ft),H(Ci),H(Ri)}function cp(t){En(Ri.current);var e=En(ft.current),n=cl(e,t.type);e!==n&&(B(Ci,t),B(ft,n))}function Bu(t){Ci.current===t&&(H(ft),H(Ci))}var K=dn(0);function ls(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pa=[];function $u(){for(var t=0;t<Pa.length;t++)Pa[t]._workInProgressVersionPrimary=null;Pa.length=0}var Ao=At.ReactCurrentDispatcher,Na=At.ReactCurrentBatchConfig,An=0,q=null,ie=null,ue=null,us=!1,li=!1,Pi=0,Jy=0;function ge(){throw Error(I(321))}function Vu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!et(t[n],e[n]))return!1;return!0}function Hu(t,e,n,r,i,o){if(An=o,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ao.current=t===null||t.memoizedState===null?Zy:e0,t=n(r,i),li){o=0;do{if(li=!1,Pi=0,25<=o)throw Error(I(301));o+=1,ue=ie=null,e.updateQueue=null,Ao.current=t0,t=n(r,i)}while(li)}if(Ao.current=cs,e=ie!==null&&ie.next!==null,An=0,ue=ie=q=null,us=!1,e)throw Error(I(300));return t}function Wu(){var t=Pi!==0;return Pi=0,t}function rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=t:ue=ue.next=t,ue}function We(){if(ie===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ue===null?q.memoizedState:ue.next;if(e!==null)ue=e,ie=t;else{if(t===null)throw Error(I(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=t:ue=ue.next=t}return ue}function Ni(t,e){return typeof e=="function"?e(t):e}function Aa(t){var e=We(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((An&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,q.lanes|=c,On|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,et(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,q.lanes|=o,On|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oa(t){var e=We(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);et(o,e.memoizedState)||(Ce=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function dp(){}function fp(t,e){var n=q,r=We(),i=e(),o=!et(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Ku(mp.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Ai(9,pp.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(I(349));An&30||hp(n,e,i)}return i}function hp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pp(t,e,n,r){e.value=n,e.getSnapshot=r,gp(e)&&vp(t)}function mp(t,e,n){return n(function(){gp(e)&&vp(t)})}function gp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!et(t,n)}catch{return!0}}function vp(t){var e=Rt(t,1);e!==null&&Ze(e,t,1,-1)}function Ad(t){var e=rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},e.queue=t,t=t.dispatch=Xy.bind(null,q,t),[e.memoizedState,t]}function Ai(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yp(){return We().memoizedState}function Oo(t,e,n,r){var i=rt();q.flags|=t,i.memoizedState=Ai(1|e,n,void 0,r===void 0?null:r)}function bs(t,e,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&Vu(r,s.deps)){i.memoizedState=Ai(e,n,o,r);return}}q.flags|=t,i.memoizedState=Ai(1|e,n,o,r)}function Od(t,e){return Oo(8390656,8,t,e)}function Ku(t,e){return bs(2048,8,t,e)}function wp(t,e){return bs(4,2,t,e)}function _p(t,e){return bs(4,4,t,e)}function Ep(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ip(t,e,n){return n=n!=null?n.concat([t]):null,bs(4,4,Ep.bind(null,e,t),n)}function qu(){}function Sp(t,e){var n=We();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kp(t,e){var n=We();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tp(t,e,n){return An&21?(et(n,e)||(n=Ph(),q.lanes|=n,On|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function Yy(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=Na.transition;Na.transition={};try{t(!1),e()}finally{j=n,Na.transition=r}}function Cp(){return We().memoizedState}function Qy(t,e,n){var r=Qt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rp(t))Pp(e,n);else if(n=ip(t,e,n,r),n!==null){var i=Ee();Ze(n,t,r,i),Np(n,e,r)}}function Xy(t,e,n){var r=Qt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rp(t))Pp(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,s)){var l=e.interleaved;l===null?(i.next=i,Fu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ip(t,e,i,r),n!==null&&(i=Ee(),Ze(n,t,r,i),Np(n,e,r))}}function Rp(t){var e=t.alternate;return t===q||e!==null&&e===q}function Pp(t,e){li=us=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Np(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ku(t,n)}}var cs={readContext:He,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Zy={readContext:He,useCallback:function(t,e){return rt().memoizedState=[t,e===void 0?null:e],t},useContext:He,useEffect:Od,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,Ep.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qy.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=rt();return t={current:t},e.memoizedState=t},useState:Ad,useDebugValue:qu,useDeferredValue:function(t){return rt().memoizedState=t},useTransition:function(){var t=Ad(!1),e=t[0];return t=Yy.bind(null,t[1]),rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=rt();if(W){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ce===null)throw Error(I(349));An&30||hp(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Od(mp.bind(null,r,o,t),[t]),r.flags|=2048,Ai(9,pp.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=rt(),e=ce.identifierPrefix;if(W){var n=yt,r=vt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},e0={readContext:He,useCallback:Sp,useContext:He,useEffect:Ku,useImperativeHandle:Ip,useInsertionEffect:wp,useLayoutEffect:_p,useMemo:kp,useReducer:Aa,useRef:yp,useState:function(){return Aa(Ni)},useDebugValue:qu,useDeferredValue:function(t){var e=We();return Tp(e,ie.memoizedState,t)},useTransition:function(){var t=Aa(Ni)[0],e=We().memoizedState;return[t,e]},useMutableSource:dp,useSyncExternalStore:fp,useId:Cp,unstable_isNewReconciler:!1},t0={readContext:He,useCallback:Sp,useContext:He,useEffect:Ku,useImperativeHandle:Ip,useInsertionEffect:wp,useLayoutEffect:_p,useMemo:kp,useReducer:Oa,useRef:yp,useState:function(){return Oa(Ni)},useDebugValue:qu,useDeferredValue:function(t){var e=We();return ie===null?e.memoizedState=t:Tp(e,ie.memoizedState,t)},useTransition:function(){var t=Oa(Ni)[0],e=We().memoizedState;return[t,e]},useMutableSource:dp,useSyncExternalStore:fp,useId:Cp,unstable_isNewReconciler:!1};function Er(t,e){try{var n="",r=e;do n+=Nv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function xa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ll(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Ap(t,e,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fs||(fs=!0,Vl=r),Ll(t,e)},n}function Op(t,e,n){n=Et(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ll(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ll(t,e),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function xd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new n0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=g0.bind(null,t,e,n),e.then(t,t))}function Ld(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Et(-1,1),e.tag=2,Jt(n,e,1))),n.lanes|=1),t)}var r0=At.ReactCurrentOwner,Ce=!1;function _e(t,e,n,r){e.child=t===null?up(e,null,n,r):wr(e,t.child,n,r)}function bd(t,e,n,r,i){n=n.render;var o=e.ref;return cr(e,i),r=Hu(t,e,n,r,o,i),n=Wu(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(W&&n&&xu(e),e.flags|=1,_e(t,e,r,i),e.child)}function Md(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!tc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,xp(t,e,o,r,i)):(t=bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(s,r)&&t.ref===e.ref)return Pt(t,e,i)}return e.flags|=1,t=Xt(o,r),t.ref=e.ref,t.return=e,e.child=t}function xp(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ii(o,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,Pt(t,e,i)}return Dl(t,e,n,r,i)}function Lp(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(ir,Oe),Oe|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(ir,Oe),Oe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(ir,Oe),Oe|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,B(ir,Oe),Oe|=r;return _e(t,e,i,n),e.child}function Dp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dl(t,e,n,r,i){var o=Pe(n)?Pn:we.current;return o=vr(e,o),cr(e,i),n=Hu(t,e,n,r,o,i),r=Wu(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(W&&r&&xu(e),e.flags|=1,_e(t,e,n,i),e.child)}function Ud(t,e,n,r,i){if(Pe(n)){var o=!0;ns(e)}else o=!1;if(cr(e,i),e.stateNode===null)xo(t,e),ap(e,n,r),xl(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Pe(n)?Pn:we.current,u=vr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pd(e,s,r,u),Ut=!1;var p=e.memoizedState;s.state=p,as(e,r,s,i),l=e.memoizedState,a!==r||p!==l||Re.current||Ut?(typeof c=="function"&&(Ol(e,n,c,r),l=e.memoizedState),(a=Ut||Rd(e,n,a,r,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,op(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Je(e.type,a),s.props=u,d=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Pe(n)?Pn:we.current,l=vr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Pd(e,s,r,l),Ut=!1,p=e.memoizedState,s.state=p,as(e,r,s,i);var g=e.memoizedState;a!==d||p!==g||Re.current||Ut?(typeof y=="function"&&(Ol(e,n,y,r),g=e.memoizedState),(u=Ut||Rd(e,n,u,r,p,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return bl(t,e,n,r,o,i)}function bl(t,e,n,r,i,o){Dp(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Id(e,n,!1),Pt(t,e,o);r=e.stateNode,r0.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=wr(e,t.child,null,o),e.child=wr(e,null,a,o)):_e(t,e,a,o),e.memoizedState=r.state,i&&Id(e,n,!0),e.child}function bp(t){var e=t.stateNode;e.pendingContext?Ed(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ed(t,e.context,!1),zu(t,e.containerInfo)}function Fd(t,e,n,r,i){return yr(),Du(i),e.flags|=256,_e(t,e,n,r),e.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Ul(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mp(t,e,n){var r=e.pendingProps,i=K.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(K,i&1),t===null)return Nl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Fs(s,r,0,null),t=kn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ul(n),e.memoizedState=Ml,t):Gu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i0(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=kn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ul(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ml,r}return o=t.child,t=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gu(t,e){return e=Fs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wo(t,e,n,r){return r!==null&&Du(r),wr(e,t.child,null,n),t=Gu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function i0(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=xa(Error(I(422))),wo(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Fs({mode:"visible",children:r.children},i,0,null),o=kn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&wr(e,t.child,null,s),e.child.memoizedState=Ul(s),e.memoizedState=Ml,o);if(!(e.mode&1))return wo(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=xa(o,r,void 0),wo(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ce||a){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rt(t,i),Ze(r,t,i,-1))}return ec(),r=xa(Error(I(421))),wo(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v0.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Le=Gt(i.nextSibling),be=e,W=!0,Qe=null,t!==null&&(je[ze++]=vt,je[ze++]=yt,je[ze++]=Nn,vt=t.id,yt=t.overflow,Nn=e),e=Gu(e,r.children),e.flags|=4096,e)}function jd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Al(t.return,e,n)}function La(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Up(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(_e(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jd(t,n,e);else if(t.tag===19)jd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ls(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),La(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ls(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}La(e,!0,n,null,o);break;case"together":La(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Xt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o0(t,e,n){switch(e.tag){case 3:bp(e),yr();break;case 5:cp(e);break;case 1:Pe(e.type)&&ns(e);break;case 4:zu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(os,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?Mp(t,e,n):(B(K,K.current&1),t=Pt(t,e,n),t!==null?t.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Up(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,Lp(t,e,n)}return Pt(t,e,n)}var Fp,Fl,jp,zp;Fp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};jp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,En(ft.current);var o=null;switch(n){case"input":i=sl(t,i),r=sl(t,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ul(t,i),r=ul(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=es)}dl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};zp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wr(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function s0(t,e,n){var r=e.pendingProps;switch(Lu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return Pe(e.type)&&ts(),ve(e),null;case 3:return r=e.stateNode,_r(),H(Re),H(we),$u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qe!==null&&(Kl(Qe),Qe=null))),Fl(t,e),ve(e),null;case 5:Bu(e);var i=En(Ri.current);if(n=e.type,t!==null&&e.stateNode!=null)jp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ve(e),null}if(t=En(ft.current),vo(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[it]=e,r[Ti]=o,t=(e.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)V(ei[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Gc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Yc(r,o),V("invalid",r)}dl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",""+a]):mi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":ao(r),Jc(r,o,!0);break;case"textarea":ao(r),Qc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=es)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[it]=e,t[Ti]=r,Fp(t,e,!1,!1),e.stateNode=t;e:{switch(s=fl(n,r),n){case"dialog":V("cancel",t),V("close",t),i=r;break;case"iframe":case"object":case"embed":V("load",t),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)V(ei[i],t);i=r;break;case"source":V("error",t),i=r;break;case"img":case"image":case"link":V("error",t),V("load",t),i=r;break;case"details":V("toggle",t),i=r;break;case"input":Gc(t,r),i=sl(t,r),V("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),V("invalid",t);break;case"textarea":Yc(t,r),i=ul(t,r),V("invalid",t);break;default:i=r}dl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?gh(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ph(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gi(t,l):typeof l=="number"&&gi(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",t):l!=null&&yu(t,o,l,s))}switch(n){case"input":ao(t),Jc(t,r,!1);break;case"textarea":ao(t),Qc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?sr(t,!!r.multiple,o,!1):r.defaultValue!=null&&sr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)zp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=En(Ri.current),En(ft.current),vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[it]=e,(o=r.nodeValue!==n)&&(t=be,t!==null))switch(t.tag){case 3:go(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=e,e.stateNode=r}return ve(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&Le!==null&&e.mode&1&&!(e.flags&128))rp(),yr(),e.flags|=98560,o=!1;else if(o=vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(I(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[it]=e}else yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),o=!1}else Qe!==null&&(Kl(Qe),Qe=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?oe===0&&(oe=3):ec())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return _r(),Fl(t,e),t===null&&Si(e.stateNode.containerInfo),ve(e),null;case 10:return Uu(e.type._context),ve(e),null;case 17:return Pe(e.type)&&ts(),ve(e),null;case 19:if(H(K),o=e.memoizedState,o===null)return ve(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Wr(o,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ls(t),s!==null){for(e.flags|=128,Wr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(K,K.current&1|2),e.child}t=t.sibling}o.tail!==null&&Q()>Ir&&(e.flags|=128,r=!0,Wr(o,!1),e.lanes=4194304)}else{if(!r)if(t=ls(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return ve(e),null}else 2*Q()-o.renderingStartTime>Ir&&n!==1073741824&&(e.flags|=128,r=!0,Wr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Q(),e.sibling=null,n=K.current,B(K,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return Zu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Oe&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function a0(t,e){switch(Lu(e),e.tag){case 1:return Pe(e.type)&&ts(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _r(),H(Re),H(we),$u(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bu(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return _r(),null;case 10:return Uu(e.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var _o=!1,ye=!1,l0=typeof WeakSet=="function"?WeakSet:Set,C=null;function rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(t,e,r)}else n.current=null}function jl(t,e,n){try{n()}catch(r){J(t,e,r)}}var zd=!1;function u0(t,e){if(Il=Qo,t=Hh(),Ou(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sl={focusedElem:t,selectionRange:n},Qo=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,P=g.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Je(e.type,v),P);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){J(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return g=zd,zd=!1,g}function ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&jl(e,n,o)}i=i.next}while(i!==r)}}function Ms(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bp(t){var e=t.alternate;e!==null&&(t.alternate=null,Bp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[it],delete e[Ti],delete e[Cl],delete e[Wy],delete e[Ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $p(t){return t.tag===5||t.tag===3||t.tag===4}function Bd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$p(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=es));else if(r!==4&&(t=t.child,t!==null))for(Bl(t,e,n),t=t.sibling;t!==null;)Bl(t,e,n),t=t.sibling}function $l(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($l(t,e,n),t=t.sibling;t!==null;)$l(t,e,n),t=t.sibling}var de=null,Ye=!1;function Lt(t,e,n){for(n=n.child;n!==null;)Vp(t,e,n),n=n.sibling}function Vp(t,e,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ps,n)}catch{}switch(n.tag){case 5:ye||rr(n,e);case 6:var r=de,i=Ye;de=null,Lt(t,e,n),de=r,Ye=i,de!==null&&(Ye?(t=de,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ye?(t=de,n=n.stateNode,t.nodeType===8?Ca(t.parentNode,n):t.nodeType===1&&Ca(t,n),_i(t)):Ca(de,n.stateNode));break;case 4:r=de,i=Ye,de=n.stateNode.containerInfo,Ye=!0,Lt(t,e,n),de=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&jl(n,e,s),i=i.next}while(i!==r)}Lt(t,e,n);break;case 1:if(!ye&&(rr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,e,a)}Lt(t,e,n);break;case 21:Lt(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Lt(t,e,n),ye=r):Lt(t,e,n);break;default:Lt(t,e,n)}}function $d(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l0),e.forEach(function(r){var i=y0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ye=!1;break e;case 3:de=a.stateNode.containerInfo,Ye=!0;break e;case 4:de=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(de===null)throw Error(I(160));Vp(o,s,i),de=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hp(e,t),e=e.sibling}function Hp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ge(e,t),nt(t),r&4){try{ui(3,t,t.return),Ms(3,t)}catch(v){J(t,t.return,v)}try{ui(5,t,t.return)}catch(v){J(t,t.return,v)}}break;case 1:Ge(e,t),nt(t),r&512&&n!==null&&rr(n,n.return);break;case 5:if(Ge(e,t),nt(t),r&512&&n!==null&&rr(n,n.return),t.flags&32){var i=t.stateNode;try{gi(i,"")}catch(v){J(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dh(i,o),fl(a,s);var u=fl(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?gh(i,d):c==="dangerouslySetInnerHTML"?ph(i,d):c==="children"?gi(i,d):yu(i,c,d,u)}switch(a){case"input":al(i,o);break;case"textarea":fh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?sr(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ti]=o}catch(v){J(t,t.return,v)}}break;case 6:if(Ge(e,t),nt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){J(t,t.return,v)}}break;case 3:if(Ge(e,t),nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(e.containerInfo)}catch(v){J(t,t.return,v)}break;case 4:Ge(e,t),nt(t);break;case 13:Ge(e,t),nt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qu=Q())),r&4&&$d(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(u=ye)||c,Ge(e,t),ye=u):Ge(e,t),nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(C=t,c=t.child;c!==null;){for(d=C=c;C!==null;){switch(p=C,y=p.child,p.tag){case 0:case 11:case 14:case 15:ui(4,p,p.return);break;case 1:rr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:rr(p,p.return);break;case 22:if(p.memoizedState!==null){Hd(d);continue}}y!==null?(y.return=p,C=y):Hd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mh("display",s))}catch(v){J(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){J(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ge(e,t),nt(t),r&4&&$d(t);break;case 21:break;default:Ge(e,t),nt(t)}}function nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=Bd(t);$l(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Bd(t);Bl(t,a,s);break;default:throw Error(I(161))}}catch(l){J(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c0(t,e,n){C=t,Wp(t)}function Wp(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_o;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=_o;var u=ye;if(_o=s,(ye=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?Wd(i):l!==null?(l.return=s,C=l):Wd(i);for(;o!==null;)C=o,Wp(o),o=o.sibling;C=i,_o=a,ye=u}Vd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Vd(t)}}function Vd(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||Ms(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Je(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Cd(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ye||e.flags&512&&zl(e)}catch(p){J(e,e.return,p)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Hd(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Wd(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ms(4,e)}catch(l){J(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){J(e,i,l)}}var o=e.return;try{zl(e)}catch(l){J(e,o,l)}break;case 5:var s=e.return;try{zl(e)}catch(l){J(e,s,l)}}}catch(l){J(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var d0=Math.ceil,ds=At.ReactCurrentDispatcher,Ju=At.ReactCurrentOwner,$e=At.ReactCurrentBatchConfig,U=0,ce=null,ee=null,fe=0,Oe=0,ir=dn(0),oe=0,Oi=null,On=0,Us=0,Yu=0,ci=null,Te=null,Qu=0,Ir=1/0,mt=null,fs=!1,Vl=null,Yt=null,Eo=!1,Bt=null,hs=0,di=0,Hl=null,Lo=-1,Do=0;function Ee(){return U&6?Q():Lo!==-1?Lo:Lo=Q()}function Qt(t){return t.mode&1?U&2&&fe!==0?fe&-fe:Gy.transition!==null?(Do===0&&(Do=Ph()),Do):(t=j,t!==0||(t=window.event,t=t===void 0?16:bh(t.type)),t):1}function Ze(t,e,n,r){if(50<di)throw di=0,Hl=null,Error(I(185));Hi(t,n,r),(!(U&2)||t!==ce)&&(t===ce&&(!(U&2)&&(Us|=n),oe===4&&jt(t,fe)),Ne(t,r),n===1&&U===0&&!(e.mode&1)&&(Ir=Q()+500,Ls&&fn()))}function Ne(t,e){var n=t.callbackNode;Gv(t,e);var r=Yo(t,t===ce?fe:0);if(r===0)n!==null&&ed(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ed(n),e===1)t.tag===0?qy(Kd.bind(null,t)):ep(Kd.bind(null,t)),Vy(function(){!(U&6)&&fn()}),n=null;else{switch(Nh(r)){case 1:n=Su;break;case 4:n=Ch;break;case 16:n=Jo;break;case 536870912:n=Rh;break;default:n=Jo}n=Zp(n,Kp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kp(t,e){if(Lo=-1,Do=0,U&6)throw Error(I(327));var n=t.callbackNode;if(dr()&&t.callbackNode!==n)return null;var r=Yo(t,t===ce?fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ps(t,r);else{e=r;var i=U;U|=2;var o=Gp();(ce!==t||fe!==e)&&(mt=null,Ir=Q()+500,Sn(t,e));do try{p0();break}catch(a){qp(t,a)}while(1);Mu(),ds.current=o,U=i,ee!==null?e=0:(ce=null,fe=0,e=oe)}if(e!==0){if(e===2&&(i=vl(t),i!==0&&(r=i,e=Wl(t,i))),e===1)throw n=Oi,Sn(t,0),jt(t,r),Ne(t,Q()),n;if(e===6)jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!f0(i)&&(e=ps(t,r),e===2&&(o=vl(t),o!==0&&(r=o,e=Wl(t,o))),e===1))throw n=Oi,Sn(t,0),jt(t,r),Ne(t,Q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:vn(t,Te,mt);break;case 3:if(jt(t,r),(r&130023424)===r&&(e=Qu+500-Q(),10<e)){if(Yo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ee(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tl(vn.bind(null,t,Te,mt),e);break}vn(t,Te,mt);break;case 4:if(jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Xe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d0(r/1960))-r,10<r){t.timeoutHandle=Tl(vn.bind(null,t,Te,mt),r);break}vn(t,Te,mt);break;case 5:vn(t,Te,mt);break;default:throw Error(I(329))}}}return Ne(t,Q()),t.callbackNode===n?Kp.bind(null,t):null}function Wl(t,e){var n=ci;return t.current.memoizedState.isDehydrated&&(Sn(t,e).flags|=256),t=ps(t,e),t!==2&&(e=Te,Te=n,e!==null&&Kl(e)),t}function Kl(t){Te===null?Te=t:Te.push.apply(Te,t)}function f0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!et(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jt(t,e){for(e&=~Yu,e&=~Us,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xe(e),r=1<<n;t[n]=-1,e&=~r}}function Kd(t){if(U&6)throw Error(I(327));dr();var e=Yo(t,0);if(!(e&1))return Ne(t,Q()),null;var n=ps(t,e);if(t.tag!==0&&n===2){var r=vl(t);r!==0&&(e=r,n=Wl(t,r))}if(n===1)throw n=Oi,Sn(t,0),jt(t,e),Ne(t,Q()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vn(t,Te,mt),Ne(t,Q()),null}function Xu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Ir=Q()+500,Ls&&fn())}}function xn(t){Bt!==null&&Bt.tag===0&&!(U&6)&&dr();var e=U;U|=1;var n=$e.transition,r=j;try{if($e.transition=null,j=1,t)return t()}finally{j=r,$e.transition=n,U=e,!(U&6)&&fn()}}function Zu(){Oe=ir.current,H(ir)}function Sn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$y(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ts();break;case 3:_r(),H(Re),H(we),$u();break;case 5:Bu(r);break;case 4:_r();break;case 13:H(K);break;case 19:H(K);break;case 10:Uu(r.type._context);break;case 22:case 23:Zu()}n=n.return}if(ce=t,ee=t=Xt(t.current,null),fe=Oe=e,oe=0,Oi=null,Yu=Us=On=0,Te=ci=null,_n!==null){for(e=0;e<_n.length;e++)if(n=_n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_n=null}return t}function qp(t,e){do{var n=ee;try{if(Mu(),Ao.current=cs,us){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}us=!1}if(An=0,ue=ie=q=null,li=!1,Pi=0,Ju.current=null,n===null||n.return===null){oe=1,Oi=e,ee=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Ld(s);if(y!==null){y.flags&=-257,Dd(y,s,a,o,e),y.mode&1&&xd(o,u,e),e=y,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){xd(o,u,e),ec();break e}l=Error(I(426))}}else if(W&&a.mode&1){var P=Ld(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Dd(P,s,a,o,e),Du(Er(l,a));break e}}o=l=Er(l,a),oe!==4&&(oe=2),ci===null?ci=[o]:ci.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Ap(o,l,e);Td(o,h);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Yt===null||!Yt.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=Op(o,a,e);Td(o,_);break e}}o=o.return}while(o!==null)}Yp(n)}catch(T){e=T,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Gp(){var t=ds.current;return ds.current=cs,t===null?cs:t}function ec(){(oe===0||oe===3||oe===2)&&(oe=4),ce===null||!(On&268435455)&&!(Us&268435455)||jt(ce,fe)}function ps(t,e){var n=U;U|=2;var r=Gp();(ce!==t||fe!==e)&&(mt=null,Sn(t,e));do try{h0();break}catch(i){qp(t,i)}while(1);if(Mu(),U=n,ds.current=r,ee!==null)throw Error(I(261));return ce=null,fe=0,oe}function h0(){for(;ee!==null;)Jp(ee)}function p0(){for(;ee!==null&&!jv();)Jp(ee)}function Jp(t){var e=Xp(t.alternate,t,Oe);t.memoizedProps=t.pendingProps,e===null?Yp(t):ee=e,Ju.current=null}function Yp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a0(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,ee=null;return}}else if(n=s0(n,e,Oe),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);oe===0&&(oe=5)}function vn(t,e,n){var r=j,i=$e.transition;try{$e.transition=null,j=1,m0(t,e,n,r)}finally{$e.transition=i,j=r}return null}function m0(t,e,n,r){do dr();while(Bt!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jv(t,o),t===ce&&(ee=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,Zp(Jo,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var s=j;j=1;var a=U;U|=4,Ju.current=null,u0(t,n),Hp(n,t),by(Sl),Qo=!!Il,Sl=Il=null,t.current=n,c0(n),zv(),U=a,j=s,$e.transition=o}else t.current=n;if(Eo&&(Eo=!1,Bt=t,hs=i),o=t.pendingLanes,o===0&&(Yt=null),Vv(n.stateNode),Ne(t,Q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fs)throw fs=!1,t=Vl,Vl=null,t;return hs&1&&t.tag!==0&&dr(),o=t.pendingLanes,o&1?t===Hl?di++:(di=0,Hl=t):di=0,fn(),null}function dr(){if(Bt!==null){var t=Nh(hs),e=$e.transition,n=j;try{if($e.transition=null,j=16>t?16:t,Bt===null)var r=!1;else{if(t=Bt,Bt=null,hs=0,U&6)throw Error(I(331));var i=U;for(U|=4,C=t.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:ui(8,c,o)}var d=c.child;if(d!==null)d.return=c,C=d;else for(;C!==null;){c=C;var p=c.sibling,y=c.return;if(Bp(c),c===u){C=null;break}if(p!==null){p.return=y,C=p;break}C=y}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ui(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,C=h;break e}C=o.return}}var f=t.current;for(C=f;C!==null;){s=C;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,C=m;else e:for(s=f;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ms(9,a)}}catch(T){J(a,a.return,T)}if(a===s){C=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,C=_;break e}C=a.return}}if(U=i,fn(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ps,t)}catch{}r=!0}return r}finally{j=n,$e.transition=e}}return!1}function qd(t,e,n){e=Er(n,e),e=Ap(t,e,1),t=Jt(t,e,1),e=Ee(),t!==null&&(Hi(t,1,e),Ne(t,e))}function J(t,e,n){if(t.tag===3)qd(t,t,n);else for(;e!==null;){if(e.tag===3){qd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){t=Er(n,t),t=Op(e,t,1),e=Jt(e,t,1),t=Ee(),e!==null&&(Hi(e,1,t),Ne(e,t));break}}e=e.return}}function g0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ee(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(fe&n)===n&&(oe===4||oe===3&&(fe&130023424)===fe&&500>Q()-Qu?Sn(t,0):Yu|=n),Ne(t,e)}function Qp(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=Ee();t=Rt(t,e),t!==null&&(Hi(t,e,n),Ne(t,n))}function v0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qp(t,n)}function y0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Qp(t,n)}var Xp;Xp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Re.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,o0(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,W&&e.flags&1048576&&tp(e,is,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xo(t,e),t=e.pendingProps;var i=vr(e,we.current);cr(e,n),i=Hu(null,e,r,t,i,n);var o=Wu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pe(r)?(o=!0,ns(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ju(e),i.updater=Ds,e.stateNode=i,i._reactInternals=e,xl(e,r,t,n),e=bl(null,e,r,!0,o,n)):(e.tag=0,W&&o&&xu(e),_e(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_0(r),t=Je(r,t),i){case 0:e=Dl(null,e,r,t,n);break e;case 1:e=Ud(null,e,r,t,n);break e;case 11:e=bd(null,e,r,t,n);break e;case 14:e=Md(null,e,r,Je(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),Dl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),Ud(t,e,r,i,n);case 3:e:{if(bp(e),t===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,i=o.element,op(t,e),as(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Er(Error(I(423)),e),e=Fd(t,e,r,n,i);break e}else if(r!==i){i=Er(Error(I(424)),e),e=Fd(t,e,r,n,i);break e}else for(Le=Gt(e.stateNode.containerInfo.firstChild),be=e,W=!0,Qe=null,n=up(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yr(),r===i){e=Pt(t,e,n);break e}_e(t,e,r,n)}e=e.child}return e;case 5:return cp(e),t===null&&Nl(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,kl(r,i)?s=null:o!==null&&kl(r,o)&&(e.flags|=32),Dp(t,e),_e(t,e,s,n),e.child;case 6:return t===null&&Nl(e),null;case 13:return Mp(t,e,n);case 4:return zu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wr(e,null,r,n):_e(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),bd(t,e,r,i,n);case 7:return _e(t,e,e.pendingProps,n),e.child;case 8:return _e(t,e,e.pendingProps.children,n),e.child;case 12:return _e(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,B(os,r._currentValue),r._currentValue=s,o!==null)if(et(o.value,s)){if(o.children===i.children&&!Re.current){e=Pt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Et(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Al(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Al(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}_e(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,cr(e,n),i=He(i),r=r(i),e.flags|=1,_e(t,e,r,n),e.child;case 14:return r=e.type,i=Je(r,e.pendingProps),i=Je(r.type,i),Md(t,e,r,i,n);case 15:return xp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),xo(t,e),e.tag=1,Pe(r)?(t=!0,ns(e)):t=!1,cr(e,n),ap(e,r,i),xl(e,r,i,n),bl(null,e,r,!0,t,n);case 19:return Up(t,e,n);case 22:return Lp(t,e,n)}throw Error(I(156,e.tag))};function Zp(t,e){return Th(t,e)}function w0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,e,n,r){return new w0(t,e,n,r)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _0(t){if(typeof t=="function")return tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_u)return 11;if(t===Eu)return 14}return 2}function Xt(t,e){var n=t.alternate;return n===null?(n=Be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")tc(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Gn:return kn(n.children,i,o,e);case wu:s=8,i|=8;break;case nl:return t=Be(12,n,e,i|2),t.elementType=nl,t.lanes=o,t;case rl:return t=Be(13,n,e,i),t.elementType=rl,t.lanes=o,t;case il:return t=Be(19,n,e,i),t.elementType=il,t.lanes=o,t;case lh:return Fs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sh:s=10;break e;case ah:s=9;break e;case _u:s=11;break e;case Eu:s=14;break e;case Mt:s=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Be(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function kn(t,e,n,r){return t=Be(7,t,r,e),t.lanes=n,t}function Fs(t,e,n,r){return t=Be(22,t,r,e),t.elementType=lh,t.lanes=n,t.stateNode={isHidden:!1},t}function Da(t,e,n){return t=Be(6,t,null,e),t.lanes=n,t}function ba(t,e,n){return e=Be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function E0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nc(t,e,n,r,i,o,s,a,l){return t=new E0(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Be(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(o),t}function I0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function em(t){if(!t)return on;t=t._reactInternals;e:{if(jn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Pe(n))return Zh(t,n,e)}return e}function tm(t,e,n,r,i,o,s,a,l){return t=nc(n,r,!0,t,i,o,s,a,l),t.context=em(null),n=t.current,r=Ee(),i=Qt(n),o=Et(r,i),o.callback=e??null,Jt(n,o,i),t.current.lanes=i,Hi(t,i,r),Ne(t,r),t}function js(t,e,n,r){var i=e.current,o=Ee(),s=Qt(i);return n=em(n),e.context===null?e.context=n:e.pendingContext=n,e=Et(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jt(i,e,s),t!==null&&(Ze(t,i,s,o),No(t,i,s)),s}function ms(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rc(t,e){Gd(t,e),(t=t.alternate)&&Gd(t,e)}function S0(){return null}var nm=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}zs.prototype.render=ic.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));js(t,e,null,null)};zs.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xn(function(){js(null,t,null,null)}),e[Ct]=null}};function zs(t){this._internalRoot=t}zs.prototype.unstable_scheduleHydration=function(t){if(t){var e=xh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&Dh(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jd(){}function k0(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ms(s);o.call(u)}}var s=tm(e,r,t,0,null,!1,!1,"",Jd);return t._reactRootContainer=s,t[Ct]=s.current,Si(t.nodeType===8?t.parentNode:t),xn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ms(l);a.call(u)}}var l=nc(t,0,!1,null,null,!1,!1,"",Jd);return t._reactRootContainer=l,t[Ct]=l.current,Si(t.nodeType===8?t.parentNode:t),xn(function(){js(e,l,n,r)}),l}function $s(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ms(s);a.call(l)}}js(e,s,t,i)}else s=k0(n,e,t,i,r);return ms(s)}Ah=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zr(e.pendingLanes);n!==0&&(ku(e,n|1),Ne(e,Q()),!(U&6)&&(Ir=Q()+500,fn()))}break;case 13:xn(function(){var r=Rt(t,1);if(r!==null){var i=Ee();Ze(r,t,1,i)}}),rc(t,1)}};Tu=function(t){if(t.tag===13){var e=Rt(t,134217728);if(e!==null){var n=Ee();Ze(e,t,134217728,n)}rc(t,134217728)}};Oh=function(t){if(t.tag===13){var e=Qt(t),n=Rt(t,e);if(n!==null){var r=Ee();Ze(n,t,e,r)}rc(t,e)}};xh=function(){return j};Lh=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};pl=function(t,e,n){switch(e){case"input":if(al(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xs(r);if(!i)throw Error(I(90));ch(r),al(r,i)}}}break;case"textarea":fh(t,n);break;case"select":e=n.value,e!=null&&sr(t,!!n.multiple,e,!1)}};wh=Xu;_h=xn;var T0={usingClientEntryPoint:!1,Events:[Ki,Xn,xs,vh,yh,Xu]},Kr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sh(t),t===null?null:t.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Ps=Io.inject(C0),dt=Io}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0;Ue.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(e))throw Error(I(200));return I0(t,e,null,n)};Ue.createRoot=function(t,e){if(!oc(t))throw Error(I(299));var n=!1,r="",i=nm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=nc(t,1,!1,null,null,n,!1,r,i),t[Ct]=e.current,Si(t.nodeType===8?t.parentNode:t),new ic(e)};Ue.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Sh(e),t=t===null?null:t.stateNode,t};Ue.flushSync=function(t){return xn(t)};Ue.hydrate=function(t,e,n){if(!Bs(e))throw Error(I(200));return $s(null,t,e,!0,n)};Ue.hydrateRoot=function(t,e,n){if(!oc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=nm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=tm(e,null,t,1,n??null,i,!1,o,s),t[Ct]=e.current,Si(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zs(e)};Ue.render=function(t,e,n){if(!Bs(e))throw Error(I(200));return $s(null,t,e,!1,n)};Ue.unmountComponentAtNode=function(t){if(!Bs(t))throw Error(I(40));return t._reactRootContainer?(xn(function(){$s(null,null,t,!1,function(){t._reactRootContainer=null,t[Ct]=null})}),!0):!1};Ue.unstable_batchedUpdates=Xu;Ue.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bs(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return $s(t,e,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(t){console.error(t)}}rm(),th.exports=Ue;var R0=th.exports,Yd=R0;el.createRoot=Yd.createRoot,el.hydrateRoot=Yd.hydrateRoot;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xi.apply(this,arguments)}var $t;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($t||($t={}));const Qd="popstate";function P0(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return ql("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gs(i)}return A0(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function N0(){return Math.random().toString(36).substr(2,8)}function Xd(t,e){return{usr:t.state,key:t.key,idx:e}}function ql(t,e,n,r){return n===void 0&&(n=null),xi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Nr(e):e,{state:n,key:e&&e.key||r||N0()})}function gs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Nr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function A0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=$t.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(xi({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=$t.Pop;let P=c(),h=P==null?null:P-u;u=P,l&&l({action:a,location:v.location,delta:h})}function p(P,h){a=$t.Push;let f=ql(v.location,P,h);n&&n(f,P),u=c()+1;let m=Xd(f,u),_=v.createHref(f);try{s.pushState(m,"",_)}catch{i.location.assign(_)}o&&l&&l({action:a,location:v.location,delta:1})}function y(P,h){a=$t.Replace;let f=ql(v.location,P,h);n&&n(f,P),u=c();let m=Xd(f,u),_=v.createHref(f);s.replaceState(m,"",_),o&&l&&l({action:a,location:v.location,delta:0})}function g(P){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof P=="string"?P:gs(P);return te(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let v={get action(){return a},get location(){return t(i,s)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qd,d),l=P,()=>{i.removeEventListener(Qd,d),l=null}},createHref(P){return e(i,P)},createURL:g,encodeLocation(P){let h=g(P);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:y,go(P){return s.go(P)}};return v}var Zd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zd||(Zd={}));function O0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Nr(e):e,i=ac(r.pathname||"/",n);if(i==null)return null;let o=im(t);x0(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=B0(o[a],H0(i));return s}function im(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zt([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),im(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:j0(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of om(o.path))i(o,s,l)}),e}function om(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=om(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function x0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L0=/^:\w+$/,D0=3,b0=2,M0=1,U0=10,F0=-2,ef=t=>t==="*";function j0(t,e){let n=t.split("/"),r=n.length;return n.some(ef)&&(r+=F0),e&&(r+=b0),n.filter(i=>!ef(i)).reduce((i,o)=>i+(L0.test(o)?D0:o===""?M0:U0),r)}function z0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function B0(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:Zt([i,c.pathname]),pathnameBase:G0(Zt([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Zt([i,c.pathnameBase]))}return o}function $0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=V0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=a[d]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=W0(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function V0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function H0(t){try{return decodeURI(t)}catch(e){return sc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function W0(t,e){try{return decodeURIComponent(t)}catch(n){return sc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ac(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function K0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Nr(t):t;return{pathname:n?n.startsWith("/")?n:q0(n,e):e,search:J0(r),hash:Y0(i)}}function q0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ma(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function am(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Nr(t):(i=xi({},t),te(!i.pathname||!i.pathname.includes("?"),Ma("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),Ma("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),Ma("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=K0(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Zt=t=>t.join("/").replace(/\/\/+/g,"/"),G0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Y0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Q0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lm=["post","put","patch","delete"];new Set(lm);const X0=["get",...lm];new Set(X0);/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vs(){return vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vs.apply(this,arguments)}const um=k.createContext(null),Z0=k.createContext(null),Ar=k.createContext(null),Vs=k.createContext(null),zn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),cm=k.createContext(null);function ew(t,e){let{relative:n}=e===void 0?{}:e;Gi()||te(!1);let{basename:r,navigator:i}=k.useContext(Ar),{hash:o,pathname:s,search:a}=fm(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Zt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Gi(){return k.useContext(Vs)!=null}function Hs(){return Gi()||te(!1),k.useContext(Vs).location}function dm(t){k.useContext(Ar).static||k.useLayoutEffect(t)}function tw(){let{isDataRoute:t}=k.useContext(zn);return t?pw():nw()}function nw(){Gi()||te(!1);let{basename:t,navigator:e}=k.useContext(Ar),{matches:n}=k.useContext(zn),{pathname:r}=Hs(),i=JSON.stringify(sm(n).map(a=>a.pathnameBase)),o=k.useRef(!1);return dm(()=>{o.current=!0}),k.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=am(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Zt([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function fm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(zn),{pathname:i}=Hs(),o=JSON.stringify(sm(r).map(s=>s.pathnameBase));return k.useMemo(()=>am(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function rw(t,e){return iw(t,e)}function iw(t,e,n){Gi()||te(!1);let{navigator:r}=k.useContext(Ar),{matches:i}=k.useContext(zn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Hs(),u;if(e){var c;let v=typeof e=="string"?Nr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||te(!1),u=v}else u=l;let d=u.pathname||"/",p=a==="/"?d:d.slice(a.length)||"/",y=O0(t,{pathname:p}),g=uw(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Zt([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Zt([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?k.createElement(Vs.Provider,{value:{location:vs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$t.Pop}},g):g}function ow(){let t=hw(),e=Q0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,o)}const sw=k.createElement(ow,null);class aw extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(zn.Provider,{value:this.props.routeContext},k.createElement(cm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lw(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(um);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(zn.Provider,{value:e},r)}function uw(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||te(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||sw);let p=e.concat(o.slice(0,u+1)),y=()=>{let g;return c?g=d:l.route.Component?g=k.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,k.createElement(lw,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(aw,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:y(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):y()},null)}var Gl;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Gl||(Gl={}));var Li;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Li||(Li={}));function cw(t){let e=k.useContext(um);return e||te(!1),e}function dw(t){let e=k.useContext(Z0);return e||te(!1),e}function fw(t){let e=k.useContext(zn);return e||te(!1),e}function hm(t){let e=fw(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function hw(){var t;let e=k.useContext(cm),n=dw(Li.UseRouteError),r=hm(Li.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function pw(){let{router:t}=cw(Gl.UseNavigateStable),e=hm(Li.UseNavigateStable),n=k.useRef(!1);return dm(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,vs({fromRouteId:e},o)))},[t,e])}function Mo(t){te(!1)}function mw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:s=!1}=t;Gi()&&te(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Nr(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:y="default"}=r,g=k.useMemo(()=>{let v=ac(u,a);return v==null?null:{location:{pathname:v,search:c,hash:d,state:p,key:y},navigationType:i}},[a,u,c,d,p,y,i]);return g==null?null:k.createElement(Ar.Provider,{value:l},k.createElement(Vs.Provider,{children:n,value:g}))}function gw(t){let{children:e,location:n}=t;return rw(Jl(e),n)}var tf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(tf||(tf={}));new Promise(()=>{});function Jl(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Jl(r.props.children,o));return}r.type!==Mo&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Jl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yl.apply(this,arguments)}function vw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ww(t,e){return t.button===0&&(!e||e==="_self")&&!yw(t)}const _w=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Ew(t){let{basename:e,children:n,window:r}=t,i=k.useRef();i.current==null&&(i.current=P0({window:r,v5Compat:!0}));let o=i.current,[s,a]=k.useState({action:o.action,location:o.location});return k.useLayoutEffect(()=>o.listen(a),[o]),k.createElement(mw,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const Iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Di=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=vw(e,_w),{basename:p}=k.useContext(Ar),y,g=!1;if(typeof u=="string"&&Sw.test(u)&&(y=u,Iw))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=ac(m.pathname,p);m.origin===f.origin&&_!=null?u=_+m.search+m.hash:g=!0}catch{}let v=ew(u,{relative:i}),P=kw(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function h(f){r&&r(f),f.defaultPrevented||P(f)}return k.createElement("a",Yl({},d,{href:y||v,onClick:g||o?r:h,ref:n,target:l}))});var nf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(nf||(nf={}));var rf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rf||(rf={}));function kw(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=tw(),l=Hs(),u=fm(t,{relative:s});return k.useCallback(c=>{if(ww(c,n)){c.preventDefault();let d=r!==void 0?r:gs(l)===gs(u);a(t,{replace:d,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}function pm(t,e){return function(){return t.apply(e,arguments)}}const{toString:Tw}=Object.prototype,{getPrototypeOf:lc}=Object,Ws=(t=>e=>{const n=Tw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pt=t=>(t=t.toLowerCase(),e=>Ws(e)===t),Ks=t=>e=>typeof e===t,{isArray:Or}=Array,bi=Ks("undefined");function Cw(t){return t!==null&&!bi(t)&&t.constructor!==null&&!bi(t.constructor)&&Ve(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mm=pt("ArrayBuffer");function Rw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mm(t.buffer),e}const Pw=Ks("string"),Ve=Ks("function"),gm=Ks("number"),qs=t=>t!==null&&typeof t=="object",Nw=t=>t===!0||t===!1,Uo=t=>{if(Ws(t)!=="object")return!1;const e=lc(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Aw=pt("Date"),Ow=pt("File"),xw=pt("Blob"),Lw=pt("FileList"),Dw=t=>qs(t)&&Ve(t.pipe),bw=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ve(t.append)&&((e=Ws(t))==="formdata"||e==="object"&&Ve(t.toString)&&t.toString()==="[object FormData]"))},Mw=pt("URLSearchParams"),Uw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ji(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Or(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let a;for(r=0;r<s;r++)a=o[r],e.call(null,t[a],a,t)}}function vm(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ym=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),wm=t=>!bi(t)&&t!==ym;function Ql(){const{caseless:t}=wm(this)&&this||{},e={},n=(r,i)=>{const o=t&&vm(e,i)||i;Uo(e[o])&&Uo(r)?e[o]=Ql(e[o],r):Uo(r)?e[o]=Ql({},r):Or(r)?e[o]=r.slice():e[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ji(arguments[r],n);return e}const Fw=(t,e,n,{allOwnKeys:r}={})=>(Ji(e,(i,o)=>{n&&Ve(i)?t[o]=pm(i,n):t[o]=i},{allOwnKeys:r}),t),jw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),zw=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Bw=(t,e,n,r)=>{let i,o,s;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)s=i[o],(!r||r(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=n!==!1&&lc(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},$w=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Vw=t=>{if(!t)return null;if(Or(t))return t;let e=t.length;if(!gm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Hw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lc(Uint8Array)),Ww=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const o=i.value;e.call(t,o[0],o[1])}},Kw=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},qw=pt("HTMLFormElement"),Gw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),of=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Jw=pt("RegExp"),_m=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ji(n,(i,o)=>{e(i,o,t)!==!1&&(r[o]=i)}),Object.defineProperties(t,r)},Yw=t=>{_m(t,(e,n)=>{if(Ve(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ve(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qw=(t,e)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Or(t)?r(t):r(String(t).split(e)),n},Xw=()=>{},Zw=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ua="abcdefghijklmnopqrstuvwxyz",sf="0123456789",Em={DIGIT:sf,ALPHA:Ua,ALPHA_DIGIT:Ua+Ua.toUpperCase()+sf},e_=(t=16,e=Em.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function t_(t){return!!(t&&Ve(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const n_=t=>{const e=new Array(10),n=(r,i)=>{if(qs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const o=Or(r)?[]:{};return Ji(r,(s,a)=>{const l=n(s,i+1);!bi(l)&&(o[a]=l)}),e[i]=void 0,o}}return r};return n(t,0)},r_=pt("AsyncFunction"),i_=t=>t&&(qs(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),w={isArray:Or,isArrayBuffer:mm,isBuffer:Cw,isFormData:bw,isArrayBufferView:Rw,isString:Pw,isNumber:gm,isBoolean:Nw,isObject:qs,isPlainObject:Uo,isUndefined:bi,isDate:Aw,isFile:Ow,isBlob:xw,isRegExp:Jw,isFunction:Ve,isStream:Dw,isURLSearchParams:Mw,isTypedArray:Hw,isFileList:Lw,forEach:Ji,merge:Ql,extend:Fw,trim:Uw,stripBOM:jw,inherits:zw,toFlatObject:Bw,kindOf:Ws,kindOfTest:pt,endsWith:$w,toArray:Vw,forEachEntry:Ww,matchAll:Kw,isHTMLForm:qw,hasOwnProperty:of,hasOwnProp:of,reduceDescriptors:_m,freezeMethods:Yw,toObjectSet:Qw,toCamelCase:Gw,noop:Xw,toFiniteNumber:Zw,findKey:vm,global:ym,isContextDefined:wm,ALPHABET:Em,generateString:e_,isSpecCompliantForm:t_,toJSONObject:n_,isAsyncFn:r_,isThenable:i_};function M(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Im=M.prototype,Sm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Sm[t]={value:t}});Object.defineProperties(M,Sm);Object.defineProperty(Im,"isAxiosError",{value:!0});M.from=(t,e,n,r,i,o)=>{const s=Object.create(Im);return w.toFlatObject(t,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),M.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};const o_=null;function Xl(t){return w.isPlainObject(t)||w.isArray(t)}function km(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function af(t,e,n){return t?t.concat(e).map(function(i,o){return i=km(i),!n&&o?"["+i+"]":i}).join(n?".":""):e}function s_(t){return w.isArray(t)&&!t.some(Xl)}const a_=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function Gs(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,P){return!w.isUndefined(P[v])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(e);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!l&&w.isBlob(g))throw new M("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,P){let h=g;if(g&&!P&&typeof g=="object"){if(w.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&s_(g)||(w.isFileList(g)||w.endsWith(v,"[]"))&&(h=w.toArray(g)))return v=km(v),h.forEach(function(m,_){!(w.isUndefined(m)||m===null)&&e.append(s===!0?af([v],_,o):s===null?v:v+"[]",u(m))}),!1}return Xl(g)?!0:(e.append(af(P,v,o),u(g)),!1)}const d=[],p=Object.assign(a_,{defaultVisitor:c,convertValue:u,isVisitable:Xl});function y(g,v){if(!w.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),w.forEach(g,function(h,f){(!(w.isUndefined(h)||h===null)&&i.call(e,h,w.isString(f)?f.trim():f,v,p))===!0&&y(h,v?v.concat(f):[f])}),d.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return y(t),e}function lf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function uc(t,e){this._pairs=[],t&&Gs(t,this,e)}const Tm=uc.prototype;Tm.append=function(e,n){this._pairs.push([e,n])};Tm.toString=function(e){const n=e?function(r){return e.call(this,r,lf)}:lf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function l_(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Cm(t,e,n){if(!e)return t;const r=n&&n.encode||l_,i=n&&n.serialize;let o;if(i?o=i(e,n):o=w.isURLSearchParams(e)?e.toString():new uc(e,n).toString(r),o){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class u_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(r){r!==null&&e(r)})}}const uf=u_,Rm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},c_=typeof URLSearchParams<"u"?URLSearchParams:uc,d_=typeof FormData<"u"?FormData:null,f_=typeof Blob<"u"?Blob:null,h_=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),p_=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ut={isBrowser:!0,classes:{URLSearchParams:c_,FormData:d_,Blob:f_},isStandardBrowserEnv:h_,isStandardBrowserWebWorkerEnv:p_,protocols:["http","https","file","blob","url","data"]};function m_(t,e){return Gs(t,new ut.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ut.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function g_(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function v_(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}function Pm(t){function e(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&w.isArray(i)?i.length:s,l?(w.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!w.isObject(i[s]))&&(i[s]=[]),e(n,r,i[s],o)&&w.isArray(i[s])&&(i[s]=v_(i[s])),!a)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(r,i)=>{e(g_(r),i,n,0)}),n}return null}const y_={"Content-Type":void 0};function w_(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Js={transitional:Rm,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=w.isObject(e);if(o&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return i&&i?JSON.stringify(Pm(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return m_(e,this.formSerializer).toString();if((a=w.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Gs(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),w_(e)):e}],transformResponse:[function(e){const n=this.transitional||Js.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&w.isString(e)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?M.from(a,M.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};w.forEach(["delete","get","head"],function(e){Js.headers[e]={}});w.forEach(["post","put","patch"],function(e){Js.headers[e]=w.merge(y_)});const cc=Js,__=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),E_=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||e[n]&&__[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},cf=Symbol("internals");function qr(t){return t&&String(t).trim().toLowerCase()}function Fo(t){return t===!1||t==null?t:w.isArray(t)?t.map(Fo):String(t)}function I_(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const S_=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Fa(t,e,n,r,i){if(w.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!w.isString(e)){if(w.isString(r))return e.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(e)}}function k_(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function T_(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,o,s){return this[r].call(this,e,i,o,s)},configurable:!0})})}class Ys{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function o(a,l,u){const c=qr(l);if(!c)throw new Error("header name must be a non-empty string");const d=w.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=Fo(a))}const s=(a,l)=>w.forEach(a,(u,c)=>o(u,c,l));return w.isPlainObject(e)||e instanceof this.constructor?s(e,n):w.isString(e)&&(e=e.trim())&&!S_(e)?s(E_(e),n):e!=null&&o(n,e,r),this}get(e,n){if(e=qr(e),e){const r=w.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return I_(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=qr(e),e){const r=w.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Fa(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function o(s){if(s=qr(s),s){const a=w.findKey(r,s);a&&(!n||Fa(r,r[a],a,n))&&(delete r[a],i=!0)}}return w.isArray(e)?e.forEach(o):o(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!e||Fa(this,this[o],o,e,!0))&&(delete this[o],i=!0)}return i}normalize(e){const n=this,r={};return w.forEach(this,(i,o)=>{const s=w.findKey(r,o);if(s){n[s]=Fo(i),delete n[o];return}const a=e?k_(o):String(o).trim();a!==o&&delete n[o],n[a]=Fo(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[cf]=this[cf]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=qr(s);r[a]||(T_(i,s),r[a]=!0)}return w.isArray(e)?e.forEach(o):o(e),this}}Ys.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.freezeMethods(Ys.prototype);w.freezeMethods(Ys);const It=Ys;function ja(t,e){const n=this||cc,r=e||n,i=It.from(r.headers);let o=r.data;return w.forEach(t,function(a){o=a.call(n,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function Nm(t){return!!(t&&t.__CANCEL__)}function Yi(t,e,n){M.call(this,t??"canceled",M.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(Yi,M,{__CANCEL__:!0});function C_(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const R_=ut.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const l=[];l.push(n+"="+encodeURIComponent(r)),w.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),w.isString(o)&&l.push("path="+o),w.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function P_(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function N_(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Am(t,e){return t&&!P_(e)?N_(t,e):e}const A_=ut.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return e&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=w.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function O_(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function x_(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,o=0,s;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let d=o,p=0;for(;d!==i;)p+=n[d++],d=d%t;if(i=(i+1)%t,i===o&&(o=(o+1)%t),u-s<e)return;const y=c&&u-c;return y?Math.round(p*1e3/y):void 0}}function df(t,e){let n=0;const r=x_(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),u=o<=s;n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-o)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const L_=typeof XMLHttpRequest<"u",D_=L_&&function(t){return new Promise(function(n,r){let i=t.data;const o=It.from(t.headers).normalize(),s=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}w.isFormData(i)&&(ut.isStandardBrowserEnv||ut.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+g))}const c=Am(t.baseURL,t.url);u.open(t.method.toUpperCase(),Cm(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function d(){if(!u)return;const y=It.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:t,request:u};C_(function(h){n(h),l()},function(h){r(h),l()},v),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new M("Request aborted",M.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Rm;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new M(g,v.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,t,u)),u=null},ut.isStandardBrowserEnv){const y=(t.withCredentials||A_(c))&&t.xsrfCookieName&&R_.read(t.xsrfCookieName);y&&o.set(t.xsrfHeaderName,y)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&w.forEach(o.toJSON(),function(g,v){u.setRequestHeader(v,g)}),w.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),s&&s!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",df(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",df(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=y=>{u&&(r(!y||y.type?new Yi(null,t,u):y),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const p=O_(c);if(p&&ut.protocols.indexOf(p)===-1){r(new M("Unsupported protocol "+p+":",M.ERR_BAD_REQUEST,t));return}u.send(i||null)})},jo={http:o_,xhr:D_};w.forEach(jo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const b_={getAdapter:t=>{t=w.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=w.isString(n)?jo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new M(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(w.hasOwnProp(jo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!w.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:jo};function za(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Yi(null,t)}function ff(t){return za(t),t.headers=It.from(t.headers),t.data=ja.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),b_.getAdapter(t.adapter||cc.adapter)(t).then(function(r){return za(t),r.data=ja.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return Nm(r)||(za(t),r&&r.response&&(r.response.data=ja.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const hf=t=>t instanceof It?t.toJSON():t;function Sr(t,e){e=e||{};const n={};function r(u,c,d){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge.call({caseless:d},u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(u,c,d){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function o(u,c){if(!w.isUndefined(c))return r(void 0,c)}function s(u,c){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>i(hf(u),hf(c),!0)};return w.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||i,p=d(t[c],e[c],c);w.isUndefined(p)&&d!==a||(n[c]=p)}),n}const Om="1.4.0",dc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{dc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const pf={};dc.transitional=function(e,n,r){function i(o,s){return"[Axios v"+Om+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(e===!1)throw new M(i(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!pf[s]&&(pf[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,s,a):!0}};function M_(t,e,n){if(typeof t!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const o=r[i],s=e[o];if(s){const a=t[o],l=a===void 0||s(a,o,t);if(l!==!0)throw new M("option "+o+" must be "+l,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const Zl={assertOptions:M_,validators:dc},Dt=Zl.validators;class ys{constructor(e){this.defaults=e,this.interceptors={request:new uf,response:new uf}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Zl.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:Zl.assertOptions(i,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&w.merge(o.common,o[n.method]),s&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=It.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,p;if(!l){const g=[ff.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),p=g.length,c=Promise.resolve(n);d<p;)c=c.then(g[d++],g[d++]);return c}p=a.length;let y=n;for(d=0;d<p;){const g=a[d++],v=a[d++];try{y=g(y)}catch(P){v.call(this,P);break}}try{c=ff.call(this,y)}catch(g){return Promise.reject(g)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=Sr(this.defaults,e);const n=Am(e.baseURL,e.url);return Cm(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){ys.prototype[e]=function(n,r){return this.request(Sr(r||{},{method:e,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(r){return function(o,s,a){return this.request(Sr(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}ys.prototype[e]=n(),ys.prototype[e+"Form"]=n(!0)});const zo=ys;class fc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},e(function(o,s,a){r.reason||(r.reason=new Yi(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new fc(function(i){e=i}),cancel:e}}}const U_=fc;function F_(t){return function(n){return t.apply(null,n)}}function j_(t){return w.isObject(t)&&t.isAxiosError===!0}const eu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eu).forEach(([t,e])=>{eu[e]=t});const z_=eu;function xm(t){const e=new zo(t),n=pm(zo.prototype.request,e);return w.extend(n,zo.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return xm(Sr(t,i))},n}const se=xm(cc);se.Axios=zo;se.CanceledError=Yi;se.CancelToken=U_;se.isCancel=Nm;se.VERSION=Om;se.toFormData=Gs;se.AxiosError=M;se.Cancel=se.CanceledError;se.all=function(e){return Promise.all(e)};se.spread=F_;se.isAxiosError=j_;se.mergeConfig=Sr;se.AxiosHeaders=It;se.formToJSON=t=>Pm(w.isHTMLForm(t)?new FormData(t):t);se.HttpStatusCode=z_;se.default=se;const Lm=se;var Dm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mf=Ht.createContext&&Ht.createContext(Dm),en=globalThis&&globalThis.__assign||function(){return en=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},en.apply(this,arguments)},B_=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function bm(t){return t&&t.map(function(e,n){return Ht.createElement(e.tag,en({key:n},e.attr),bm(e.child))})}function Bn(t){return function(e){return Ht.createElement($_,en({attr:en({},t.attr)},e),bm(t.child))}}function $_(t){var e=function(n){var r=t.attr,i=t.size,o=t.title,s=B_(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ht.createElement("svg",en({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:en(en({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ht.createElement("title",null,o),t.children)};return mf!==void 0?Ht.createElement(mf.Consumer,null,function(n){return e(n)}):e(Dm)}function V_(t){return Bn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"}}]})(t)}function hc(t){return Bn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}}]})(t)}const Qs=k.createContext(),H_=({children:t})=>{const[e,n]=k.useState(!0),r=()=>{n(!e)};return console.log(e),E.jsx(Qs.Provider,{value:{dark:e,handleMod:r},children:t})};function W_(){const{dark:t,handleMod:e}=k.useContext(Qs),[n,r]=k.useState([]),i=async()=>{const o={method:"GET",url:"https://twitter154.p.rapidapi.com/hashtag/hashtag",params:{hashtag:"#python",limit:"20",section:"top"},headers:{"X-RapidAPI-Key":"143ebcc77dmshb98cd9977d5cb1dp1c1113jsnc99a16194f43","X-RapidAPI-Host":"twitter154.p.rapidapi.com"}};try{const s=await Lm.request(o);console.log(s.data.results),s.data&&r(s.data.results),console.log(n)}catch(s){console.error(s)}};return k.useEffect(()=>{i()},[]),E.jsxs("div",{className:"houm",children:[E.jsxs("div",{className:"houm__nav",children:[E.jsx("h2",{className:"houm__nav-h2",children:"houm"}),E.jsx(V_,{className:"houm__nav-star",onClick:e})]}),E.jsx("div",{className:`block  ${t?"dark-body white-text":"light-body black-text"}`,children:n.map(o=>E.jsxs("div",{className:"user",children:[E.jsx("div",{className:"user__profilimg",children:E.jsx("img",{className:"user__profilimg-img",src:o.user.profile_pic_url,alt:o.user.name})}),E.jsxs("div",{className:"user__text",children:[E.jsx("h3",{className:"user__text-h3",children:o.user.name}),E.jsxs("span",{className:"user__text-span",children:["@",o.user.username]}),E.jsx("p",{children:o.text})]})]},o.conversation_id))})]})}function K_(t){return Bn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"}}]})(t)}function q_(t){return Bn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:"currentColor"}}]})(t)}function G_(t){return Bn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"}}]})(t)}function J_(t){return Bn({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 10h16M4 14h16M4 18h16"}}]})(t)}function Y_(){const{dark:t}=k.useContext(Qs);return E.jsx("div",{className:"left",children:E.jsxs("ul",{className:t?"white-text":"black-text",children:[E.jsx("li",{className:"li",children:E.jsx(hc,{className:"li__logo"})}),E.jsxs("li",{className:"li",children:[E.jsx("div",{children:E.jsx(K_,{})}),E.jsx("div",{className:"li__text",children:"home"})]}),E.jsx("li",{className:"li",children:E.jsxs(Di,{to:"/register",className:`li__link ${t?"white-text":"black-text"}`,children:[E.jsx("div",{children:E.jsx(G_,{})}),E.jsx("div",{className:"li__text",children:"register"})]})}),E.jsxs("li",{className:"li",children:[E.jsx("div",{children:E.jsx(q_,{})}),E.jsx("div",{className:"li__text",children:"more"})]}),E.jsxs("li",{className:"li",children:[E.jsx("div",{children:E.jsx(J_,{})}),E.jsx("div",{className:"li__text",children:"list"})]}),E.jsx("li",{className:"li",children:E.jsx("button",{className:"li__btn",children:"Tweet"})})]})})}function Q_(t){return Bn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(t)}function X_(){return E.jsx("div",{className:"loader-box",children:E.jsxs("div",{className:"lds-spinner",children:[E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{})]})})}function Z_(){const[t,e]=k.useState([]),[n,r]=k.useState(!0),i=k.useRef(""),o=async()=>{const u={method:"GET",url:"https://twitter154.p.rapidapi.com/hashtag/hashtag",params:{hashtag:"#python",limit:"20",section:"top"},headers:{"X-RapidAPI-Key":"ba543beb6cmsh53468101855d482p1c46c7jsn65cb1da67182","X-RapidAPI-Host":"twitter154.p.rapidapi.com"}};try{const c=await Lm.request(u);console.log(c.data.results),e(c.data.results),r(!1)}catch(c){console.error(c)}};t&&k.useEffect(()=>{r(!0),o()},[]);const s=()=>{if(console.log(i.current.value),i.current.value.trim())return o()};console.log(i);let a=t.slice(2,5).map(u=>E.jsxs("div",{className:"userSearch",children:[console.log(u),E.jsxs("div",{className:"userSearch__text",children:[E.jsx("h6",{className:"userSearch__text-h3",children:u.user.name}),E.jsxs("span",{className:"userSearch__text-span",children:["@",u.user.username]})]})]},u.conversation_id));const l=t.filter(u=>u.user.name===i.current.value).map(u=>E.jsxs("div",{className:"userSearch",children:[console.log(u),E.jsxs("div",{className:"userSearch__text",children:[E.jsx("h6",{className:"userSearch__text-h3",children:u.user.name}),E.jsxs("span",{className:"userSearch__text-span",children:["@",u.user.username]})]})]},u.conversation_id));return n?E.jsx(X_,{}):E.jsx("div",{className:"right",children:E.jsxs("div",{className:"rightitem",children:[E.jsxs("div",{className:"rightitem__input-box",children:[E.jsx(Q_,{className:"search-logo",onClick:s}),E.jsx("input",{ref:i,type:"search",className:"input-search",placeholder:"Search twitter"})]}),E.jsxs("div",{className:"blockRight",children:[E.jsx("h2",{children:"Trends for you"}),i.current.value?l:a]})]})})}function e1(){return E.jsxs("div",{children:[E.jsx(W_,{}),E.jsx(Y_,{}),E.jsx(Z_,{})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},t1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(p=64)),r.push(n[c],n[d],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new n1;const p=o<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r1=function(t){const e=Mm(t);return Um.encodeByteArray(e,!0)},Fm=function(t){return r1(t).replace(/\./g,"")},jm=function(t){try{return Um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ws(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i1(n)||(t[n]=ws(t[n],e[n]));return t}function i1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=()=>o1().__FIREBASE_DEFAULTS__,a1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jm(t[1]);return e&&JSON.parse(e)},pc=()=>{try{return s1()||a1()||l1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zm=()=>{var t;return(t=pc())===null||t===void 0?void 0:t.config},u1=t=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Bm(){var t;const e=(t=pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function f1(){return typeof self=="object"&&self.self===self}function $m(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vm(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _s(){try{return typeof indexedDB=="object"}catch{return!1}}function h1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="FirebaseError";class Ae extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p1,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?m1(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ae(i,a,r)}}function m1(t,e){return t.replace(g1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function v1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(vf(o)&&vf(s)){if(!tu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hm(t,e){const n=new y1(t,e);return n.subscribe.bind(n)}class y1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");w1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I1(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E1(t){return t===yn?void 0:t}function I1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=[];var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Wm={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},k1=z.INFO,T1={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},C1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=T1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=k1,this._logHandler=C1,this._userLogHandler=null,gc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}function R1(t){gc.forEach(e=>{e.setLogLevel(t)})}function P1(t,e){for(const n of gc){let r=null;e&&e.level&&(r=Wm[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:z[o].toLowerCase(),message:a,args:s,type:i.name})}}}const N1=(t,e)=>e.some(n=>t instanceof n);let yf,wf;function A1(){return yf||(yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O1(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Km=new WeakMap,nu=new WeakMap,qm=new WeakMap,$a=new WeakMap,yc=new WeakMap;function x1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(tn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Km.set(n,t)}).catch(()=>{}),yc.set(e,t),e}function L1(t){if(nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});nu.set(t,e)}let ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function D1(t){ru=t(ru)}function b1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Va(this),e,...n);return qm.set(r,e.sort?e.sort():[e]),tn(r)}:O1().includes(t)?function(...e){return t.apply(Va(this),e),tn(Km.get(this))}:function(...e){return tn(t.apply(Va(this),e))}}function M1(t){return typeof t=="function"?b1(t):(t instanceof IDBTransaction&&L1(t),N1(t,A1())?new Proxy(t,ru):t)}function tn(t){if(t instanceof IDBRequest)return x1(t);if($a.has(t))return $a.get(t);const e=M1(t);return e!==t&&($a.set(t,e),yc.set(e,t)),e}const Va=t=>yc.get(t);function U1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=tn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(tn(s.result),l.oldVersion,l.newVersion,tn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const F1=["get","getKey","getAll","getAllKeys","count"],j1=["put","add","delete","clear"],Ha=new Map;function _f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ha.get(e))return Ha.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=j1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F1.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ha.set(e,o),o}D1(t=>({...t,get:(e,n,r)=>_f(e,n)||t.get(e,n,r),has:(e,n)=>!!_f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(B1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function B1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",Ef="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new vc("@firebase/app"),$1="@firebase/app-compat",V1="@firebase/analytics-compat",H1="@firebase/analytics",W1="@firebase/app-check-compat",K1="@firebase/app-check",q1="@firebase/auth",G1="@firebase/auth-compat",J1="@firebase/database",Y1="@firebase/database-compat",Q1="@firebase/functions",X1="@firebase/functions-compat",Z1="@firebase/installations",eE="@firebase/installations-compat",tE="@firebase/messaging",nE="@firebase/messaging-compat",rE="@firebase/performance",iE="@firebase/performance-compat",oE="@firebase/remote-config",sE="@firebase/remote-config-compat",aE="@firebase/storage",lE="@firebase/storage-compat",uE="@firebase/firestore",cE="@firebase/firestore-compat",dE="firebase",fE="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]",hE={[iu]:"fire-core",[$1]:"fire-core-compat",[H1]:"fire-analytics",[V1]:"fire-analytics-compat",[K1]:"fire-app-check",[W1]:"fire-app-check-compat",[q1]:"fire-auth",[G1]:"fire-auth-compat",[J1]:"fire-rtdb",[Y1]:"fire-rtdb-compat",[Q1]:"fire-fn",[X1]:"fire-fn-compat",[Z1]:"fire-iid",[eE]:"fire-iid-compat",[tE]:"fire-fcm",[nE]:"fire-fcm-compat",[rE]:"fire-perf",[iE]:"fire-perf-compat",[oE]:"fire-rc",[sE]:"fire-rc-compat",[aE]:"fire-gcs",[lE]:"fire-gcs-compat",[uE]:"fire-fst",[cE]:"fire-fst-compat","fire-js":"fire-js",[dE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map,Mi=new Map;function Es(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gm(t,e){t.container.addOrOverwriteComponent(e)}function Dn(t){const e=t.name;if(Mi.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Mi.set(e,t);for(const n of ln.values())Es(n,t);return!0}function Jm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pE(t,e,n=an){Jm(t,e).clearInstance(n)}function mE(){Mi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new $n("app","Firebase",gE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vE=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=fE;function wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:an,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=zm()),!n)throw St.create("no-options");const o=ln.get(i);if(o){if(tu(n,o.options)&&tu(r,o.config))return o;throw St.create("duplicate-app",{appName:i})}const s=new S1(i);for(const l of Mi.values())s.addComponent(l);const a=new vE(n,r,s);return ln.set(i,a),a}function yE(t=an){const e=ln.get(t);if(!e&&t===an&&zm())return wc();if(!e)throw St.create("no-app",{appName:t});return e}function wE(){return Array.from(ln.values())}async function Ym(t){const e=t.name;ln.has(e)&&(ln.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function nn(t,e,n){var r;let i=(r=hE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}Dn(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Qm(t,e){if(t!==null&&typeof t!="function")throw St.create("invalid-log-argument");P1(t,e)}function Xm(t){R1(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firebase-heartbeat-database",EE=1,Ui="firebase-heartbeat-store";let Wa=null;function Zm(){return Wa||(Wa=U1(_E,EE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),Wa}async function IE(t){try{return await(await Zm()).transaction(Ui).objectStore(Ui).get(eg(t))}catch(e){if(e instanceof Ae)Ln.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function If(t,e){try{const r=(await Zm()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(e,eg(t)),await r.done}catch(n){if(n instanceof Ae)Ln.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function eg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=1024,kE=30*24*60*60*1e3;class TE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=kE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sf(),{heartbeatsToSend:n,unsentEntries:r}=CE(this._heartbeatsCache.heartbeats),i=Fm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sf(){return new Date().toISOString().substring(0,10)}function CE(t,e=SE){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),kf(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _s()?h1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await IE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kf(t){return Fm(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){Dn(new sn("platform-logger",e=>new z1(e),"PRIVATE")),Dn(new sn("heartbeat",e=>new TE(e),"PRIVATE")),nn(iu,Ef,t),nn(iu,Ef,"esm2017"),nn("fire-js","")}PE("");const NE=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ae,SDK_VERSION:Vn,_DEFAULT_ENTRY_NAME:an,_addComponent:Es,_addOrOverwriteComponent:Gm,_apps:ln,_clearComponents:mE,_components:Mi,_getProvider:Jm,_registerComponent:Dn,_removeServiceInstance:pE,deleteApp:Ym,getApp:yE,getApps:wE,initializeApp:wc,onLog:Qm,registerVersion:nn,setLogLevel:Xm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this._delegate=e,this.firebase=n,Es(e,new sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ym(this._delegate)))}_getService(e,n=an){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=an){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Es(this._delegate,e)}_addOrOverwriteComponent(e){Gm(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tf=new $n("app-compat","Firebase",OE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:nn,setLogLevel:Xm,onLog:Qm,apps:null,SDK_VERSION:Vn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:NE}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||an,!gf(e,u))throw Tf.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c={}){const d=wc(u,c);if(gf(e,d.name))return e[d.name];const p=new t(d,n);return e[d.name]=p,p}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Dn(u)&&u.type==="PUBLIC"){const p=(y=i())=>{if(typeof y[d]!="function")throw Tf.create("invalid-app-argument",{appName:c});return y[d]()};u.serviceProps!==void 0&&ws(p,u.serviceProps),n[d]=p,t.prototype[d]=function(...y){return this._getService.bind(this,c).apply(this,u.multipleInstances?y:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){const t=xE(AE);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:tg,extendNamespace:e,createSubscribe:Hm,ErrorFactory:$n,deepExtend:ws});function e(n){ws(t,n)}return t}const LE=tg();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new vc("@firebase/app-compat"),DE="@firebase/app-compat",bE="0.2.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){nn(DE,bE,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(f1()&&self.firebase!==void 0){Cf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Cf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Qi=LE;ME();var UE="firebase",FE="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi.registerVersion(UE,FE,"app-compat");function _c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Gr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Kn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function ng(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zE=jE,BE=ng,rg=new $n("auth","Firebase",ng());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new vc("@firebase/auth");function $E(t,...e){Is.logLevel<=z.WARN&&Is.warn(`Auth (${Vn}): ${t}`,...e)}function Bo(t,...e){Is.logLevel<=z.ERROR&&Is.error(`Auth (${Vn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,...e){throw Ec(t,...e)}function he(t,...e){return Ec(t,...e)}function ig(t,e,n){const r=Object.assign(Object.assign({},BE()),{[e]:n});return new $n("auth","Firebase",r).create(e,{appName:t.name})}function Lr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&me(t,"argument-error"),ig(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ec(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function S(t,e,...n){if(!t)throw Ec(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function tt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ic(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ic()||$m()||"connection"in navigator)?navigator.onLine:!0}function HE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=d1()||mc()}get(){return VE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new Xi(3e4,6e4);function re(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ae(t,e,n,r,i={}){return sg(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=xr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),og.fetch()(ag(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function sg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WE),e);try{const i=new qE(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ni(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ni(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw ni(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ig(t,c,u);me(t,c)}}catch(i){if(i instanceof Ae)throw i;me(t,"network-request-failed",{message:String(i)})}}async function Ot(t,e,n,r,i={}){const o=await ae(t,e,n,r,i);return"mfaPendingCredential"in o&&me(t,"multi-factor-auth-required",{_serverResponse:o}),o}function ag(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sc(t.config,i):`${t.config.apiScheme}://${i}`}class qE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),KE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ni(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=he(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t,e){return ae(t,"POST","/v1/accounts:delete",e)}async function JE(t,e){return ae(t,"POST","/v1/accounts:update",e)}async function YE(t,e){return ae(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QE(t,e=!1){const n=F(t),r=await n.getIdToken(e),i=Xs(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fi(Ka(i.auth_time)),issuedAtTime:fi(Ka(i.iat)),expirationTime:fi(Ka(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function Xs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=jm(n);return i?JSON.parse(i):(Bo("Failed to decode base64 JWT payload"),null)}catch(i){return Bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XE(t){const e=Xs(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ae&&ZE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Nt(t,YE(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?rI(o.providerUserInfo):[],a=nI(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new lg(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function tI(t){const e=F(t);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rI(t){return t.map(e=>{var{providerId:n}=e,r=_c(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){const n=await sg(t,{},async()=>{const r=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=ag(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",og.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await iI(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new zi;return r&&(S(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(S(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=_c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Nt(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QE(this,e)}reload(){return tI(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nt(this,GE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:T,providerData:N,stsTokenManager:A}=n;S(m&&A,e,"internal-error");const O=zi.fromJSON(this.name,A);S(typeof m=="string",e,"internal-error"),bt(d,e.name),bt(p,e.name),S(typeof _=="boolean",e,"internal-error"),S(typeof T=="boolean",e,"internal-error"),bt(y,e.name),bt(g,e.name),bt(v,e.name),bt(P,e.name),bt(h,e.name),bt(f,e.name);const $=new Tn({uid:m,auth:e,email:p,emailVerified:_,displayName:d,isAnonymous:T,photoURL:g,phoneNumber:y,tenantId:v,stsTokenManager:O,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&($.providerData=N.map(D=>Object.assign({},D))),P&&($._redirectEventId=P),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new zi;i.updateFromServerResponse(n);const o=new Tn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ji(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function De(t){tt(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ug.type="NONE";const kr=ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e,n){return`firebase:${t}:${e}:${n}`}class fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Cn(this.userKey,i.apiKey,o),this.fullPersistenceKey=Cn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fr(De(kr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||De(kr);const s=Cn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=Tn._fromJSON(e,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new fr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new fr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(pg(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(Zi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cg(t=ne()){return/firefox\//i.test(t)}function kc(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(t=ne()){return/crios\//i.test(t)}function fg(t=ne()){return/iemobile/i.test(t)}function Zi(t=ne()){return/android/i.test(t)}function hg(t=ne()){return/blackberry/i.test(t)}function pg(t=ne()){return/webos/i.test(t)}function Dr(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oI(t=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function sI(t=ne()){var e;return Dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aI(){return Vm()&&document.documentMode===10}function mg(t=ne()){return Dr(t)||Zi(t)||pg(t)||hg(t)||/windows phone/i.test(t)||fg(t)}function lI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e=[]){let n;switch(t){case"Browser":n=Nf(ne());break;case"Worker":n=`${Nf(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t){return(await ae(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function vg(t,e){return ae(t,"GET","/v2/recaptchaConfig",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){return t!==void 0&&t.getResponse!==void 0}function Of(t){return t!==void 0&&t.enterprise!==void 0}class yg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Tc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=he("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})}function wg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const dI="https://www.google.com/recaptcha/enterprise.js?render=",fI="recaptcha-enterprise",hI="NO_RECAPTCHA";class _g{constructor(e){this.type=fI,this.auth=X(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{vg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yg(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Of(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(hI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Of(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Tc(dI+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function un(t,e,n,r=!1){const i=new _g(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new pI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=De(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?F(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}async initializeRecaptchaConfig(){const e=await vg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new yg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new _g(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&De(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[De(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$E(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function X(t){return F(t)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hm(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(De);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vI(t,e,n){const r=X(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Eg(e),{host:s,port:a}=yI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||wI()}function Eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=Eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Lf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Lf(s)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e){return ae(t,"POST","/v1/accounts:resetPassword",re(t,e))}async function Sg(t,e){return ae(t,"POST","/v1/accounts:update",e)}async function _I(t,e){return ae(t,"POST","/v1/accounts:update",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t,e){return Ot(t,"POST","/v1/accounts:signInWithPassword",re(t,e))}async function Zs(t,e){return ae(t,"POST","/v1/accounts:sendOobCode",re(t,e))}async function EI(t,e){return Zs(t,e)}async function Ga(t,e){return Zs(t,e)}async function Ja(t,e){return Zs(t,e)}async function II(t,e){return Zs(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e){return Ot(t,"POST","/v1/accounts:signInWithEmailLink",re(t,e))}async function kI(t,e){return Ot(t,"POST","/v1/accounts:signInWithEmailLink",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends br{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await un(e,r,"signInWithPassword");return qa(e,i)}else return qa(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await un(e,r,"signInWithPassword");return qa(e,o)}else return Promise.reject(i)});case"emailLink":return SI(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return kI(e,{idToken:n,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return Ot(t,"POST","/v1/accounts:signInWithIdp",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="http://localhost";class ht extends br{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=_c(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ht(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kt(e,n)}buildRequest(){const e={requestUri:TI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return ae(t,"POST","/v1/accounts:sendVerificationCode",re(t,e))}async function RI(t,e){return Ot(t,"POST","/v1/accounts:signInWithPhoneNumber",re(t,e))}async function PI(t,e){const n=await Ot(t,"POST","/v1/accounts:signInWithPhoneNumber",re(t,e));if(n.temporaryProof)throw ni(t,"account-exists-with-different-credential",n);return n}const NI={USER_NOT_FOUND:"user-not-found"};async function AI(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ot(t,"POST","/v1/accounts:signInWithPhoneNumber",re(t,n),NI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends br{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Rn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Rn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return RI(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return PI(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return AI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new Rn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xI(t){const e=or(ti(t)).link,n=e?or(ti(e)).deep_link_id:null,r=or(ti(t)).deep_link_id;return(r?or(ti(r)).link:null)||r||n||e||t}class ea{constructor(e){var n,r,i,o,s,a;const l=or(ti(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=OI((i=l.mode)!==null&&i!==void 0?i:null);S(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xI(e);try{return new ea(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ea.parseLink(n);return S(r,"argument-error"),Bi._fromEmailAndCode(e,r.code,r.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends xt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class hr extends Mr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),ht._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),ht._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return hr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return hr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new hr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Mr{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ht._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return st.credential(n,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Mr{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="http://localhost";class Tr extends br{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new Tr(r,o)}static _create(e,n){return new Tr(e,n)}buildRequest(){return{requestUri:LI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="saml.";class Ss extends xt{constructor(e){S(e.startsWith(DI),"argument-error"),super(e)}static credentialFromResult(e){return Ss.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ss.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Tr.fromJSON(e);return S(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Tr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Mr{constructor(){super("twitter.com")}static credential(e,n){return ht._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t,e){return Ot(t,"POST","/v1/accounts:signUp",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Tn._fromIdTokenResponse(e,r,i),s=Df(r);return new Ke({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Df(r);return new Ke({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t){var e;const n=X(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ke({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await $o(n,{returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ae{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ks(e,n,r,i)}}function kg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){const n=F(t);await ta(!0,n,e);const{providerUserInfo:r}=await JE(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Tg(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Cc(t,e,n=!1){const r=await Nt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ke._forOperation(t,"link",r)}async function ta(t,e,n){await ji(e);const r=Tg(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Nt(t,kg(r,i,e,t),n);S(o.idToken,r,"internal-error");const s=Xs(o.idToken);S(s,r,"internal-error");const{sub:a}=s;return S(t.uid===a,r,"user-mismatch"),Ke._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&me(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(t,e,n=!1){const r="signIn",i=await kg(t,r,e),o=await Ke._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function na(t,e){return Rg(X(t),e)}async function Pg(t,e){const n=F(t);return await ta(!1,n,e.providerId),Cc(n,e)}async function Ng(t,e){return Cg(F(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e){return Ot(t,"POST","/v1/accounts:signInWithCustomToken",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){const n=X(t),r=await UI(n,{token:e,returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Rc._fromServerResponse(e,n):"totpInfo"in n?Pc._fromServerResponse(e,n):me(e,"internal-error")}}class Rc extends eo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Rc(n)}}class Pc extends eo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Pc(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e,n){var r;const i=X(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const s=await un(i,o,"getOobCode",!0);n&&pr(i,s,n),await Ga(i,s)}else n&&pr(i,o,n),await Ga(i,o).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await un(i,o,"getOobCode",!0);n&&pr(i,a,n),await Ga(i,a)}else return Promise.reject(s)})}async function zI(t,e,n){await Ig(F(t),{oobCode:e,newPassword:n})}async function BI(t,e){await _I(F(t),{oobCode:e})}async function Ag(t,e){const n=F(t),r=await Ig(n,{oobCode:e}),i=r.requestType;switch(S(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=eo._fromServerResponse(X(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function $I(t,e){const{data:n}=await Ag(F(t),e);return n.email}async function VI(t,e,n){var r;const i=X(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await un(i,o,"signUpPassword");s=$o(i,u)}else s=$o(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await un(i,o,"signUpPassword");return $o(i,c)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await Ke._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function HI(t,e,n){return na(F(t),hn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t,e,n){var r;const i=X(t),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,l){S(l.handleCodeInApp,i,"argument-error"),l&&pr(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await un(i,o,"getOobCode",!0);s(a,n),await Ja(i,a)}else s(o,n),await Ja(i,o).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await un(i,o,"getOobCode",!0);s(l,n),await Ja(i,l)}else return Promise.reject(a)})}function KI(t,e){const n=ea.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function qI(t,e,n){const r=F(t),i=hn.credentialWithLink(e,n||Fi());return S(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),na(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e){return ae(t,"POST","/v1/accounts:createAuthUri",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e){const n=Ic()?Fi():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await GI(F(t),r);return i||[]}async function YI(t,e){const n=F(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&pr(n.auth,i,e);const{email:o}=await EI(n.auth,i);o!==t.email&&await t.reload()}async function QI(t,e,n){const r=F(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&pr(r.auth,o,n);const{email:s}=await II(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){return ae(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=F(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Nt(r,XI(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function eS(t,e){return Og(F(t),e,null)}function tS(t,e){return Og(F(t),null,e)}async function Og(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await Nt(t,Sg(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Xs(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new mr(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new rS(o,i);case"github.com":return new iS(o,i);case"google.com":return new oS(o,i);case"twitter.com":return new sS(o,i,t.screenName||null);case"custom":case"anonymous":return new mr(o,null);default:return new mr(o,r,i)}}class mr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class xg extends mr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class rS extends mr{constructor(e,n){super(e,"facebook.com",n)}}class iS extends xg{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class oS extends mr{constructor(e,n){super(e,"google.com",n)}}class sS extends xg{constructor(e,n,r){super(e,"twitter.com",n,r)}}function aS(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:nS(n)}class In{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new In("enroll",e,n)}static _fromMfaPendingCredential(e){return new In("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return In._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return In._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=X(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>eo._fromServerResponse(r,a));S(i.mfaPendingCredential,r,"internal-error");const s=In._fromMfaPendingCredential(i.mfaPendingCredential);return new Nc(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Ke._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return S(n.user,r,"internal-error"),Ke._forOperation(n.user,n.operationType,u);default:me(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function lS(t,e){var n;const r=F(t),i=e;return S(e.customData.operationType,r,"argument-error"),S((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Nc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t,e){return ae(t,"POST","/v2/accounts/mfaEnrollment:start",re(t,e))}function cS(t,e){return ae(t,"POST","/v2/accounts/mfaEnrollment:finalize",re(t,e))}function dS(t,e){return ae(t,"POST","/v2/accounts/mfaEnrollment:withdraw",re(t,e))}class Ac{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>eo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ac(e)}async getSession(){return In._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),o=await Nt(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Nt(this.user,dS(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ya=new WeakMap;function fS(t){const e=F(t);return Ya.has(e)||Ya.set(e,Ac._fromUser(e)),Ya.get(e)}const Ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){const t=ne();return kc(t)||Dr(t)}const pS=1e3,mS=10;class Dg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hS()&&lI(),this.fallbackToPolling=mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);aI()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dg.type="LOCAL";const Oc=Dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bg.type="SESSION";const bn=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await gS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=to("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function yS(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function wS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _S(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ES(){return xc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="firebaseLocalStorageDb",IS=1,Cs="firebaseLocalStorage",Ug="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ia(t,e){return t.transaction([Cs],e?"readwrite":"readonly").objectStore(Cs)}function SS(){const t=indexedDB.deleteDatabase(Mg);return new no(t).toPromise()}function ou(){const t=indexedDB.open(Mg,IS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cs,{keyPath:Ug})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cs)?e(r):(r.close(),await SS(),e(await ou()))})})}async function bf(t,e,n){const r=ia(t,!0).put({[Ug]:e,value:n});return new no(r).toPromise()}async function kS(t,e){const n=ia(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Mf(t,e){const n=ia(t,!0).delete(e);return new no(n).toPromise()}const TS=800,CS=3;class Fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ou(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(ES()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ou();return await bf(e,Ts,"1"),await Mf(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ia(i,!1).getAll();return new no(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fg.type="LOCAL";const $i=Fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){return ae(t,"POST","/v2/accounts/mfaSignIn:start",re(t,e))}function PS(t,e){return ae(t,"POST","/v2/accounts/mfaSignIn:finalize",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=500,AS=6e4,So=1e12;class OS{constructor(e){this.auth=e,this.counter=So,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new xS(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||So;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||So;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||So;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class xS{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=LS(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},AS)},NS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function LS(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=wg("rcb"),DS=new Xi(3e4,6e4),bS="https://www.google.com/recaptcha/api.js?";class MS{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Z().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return S(US(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Af(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const o=Z().setTimeout(()=>{i(he(e,"network-request-failed"))},DS.get());Z()[Qa]=()=>{Z().clearTimeout(o),delete Z()[Qa];const a=Z().grecaptcha;if(!a||!Af(a)){i(he(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const s=`${bS}?${xr({onload:Qa,render:"explicit",hl:n})}`;Tc(s).catch(()=>{clearTimeout(o),i(he(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function US(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class FS{async load(e){return new OS(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="recaptcha",jS={theme:"light",type:"image"};let zS=class{constructor(e,n=Object.assign({},jS),r){this.parameters=n,this.type=jg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=X(r),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new FS:new MS,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Z()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(Ic()&&!xc(),this.auth,"internal-error"),await BS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await uI(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function BS(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Rn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function $S(t,e,n){const r=X(t),i=await oa(r,e,F(n));return new Lc(i,o=>na(r,o))}async function VS(t,e,n){const r=F(t);await ta(!1,r,"phone");const i=await oa(r.auth,e,F(n));return new Lc(i,o=>Pg(r,o))}async function HS(t,e,n){const r=F(t),i=await oa(r.auth,e,F(n));return new Lc(i,o=>Ng(r,o))}async function oa(t,e,n){var r;const i=await n.verify();try{S(typeof i=="string",t,"argument-error"),S(n.type===jg,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return S(s.type==="enroll",t,"internal-error"),(await uS(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{S(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await RS(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await CI(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function WS(t,e){await Cc(F(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class Vo{constructor(e){this.providerId=Vo.PROVIDER_ID,this.auth=X(e)}verifyPhoneNumber(e,n){return oa(this.auth,e,F(n))}static credential(e,n){return Rn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Vo.credentialFromTaggedObject(n)}static credentialFromError(e){return Vo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Rn._fromTokenResponse(n,r):null}};Mn.PROVIDER_ID="phone";Mn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){return e?De(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends br{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KS(t){return Rg(t.auth,new Dc(t),t.bypassAuthState)}function qS(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Cg(n,new Dc(t),t.bypassAuthState)}async function GS(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Cc(n,new Dc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KS;case"linkViaPopup":case"linkViaRedirect":return GS;case"reauthViaPopup":case"reauthViaRedirect":return qS;default:me(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Xi(2e3,1e4);async function YS(t,e,n){const r=X(t);Lr(t,e,xt);const i=Hn(r,n);return new wt(r,"signInViaPopup",e,i).executeNotNull()}async function QS(t,e,n){const r=F(t);Lr(r.auth,e,xt);const i=Hn(r.auth,n);return new wt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function XS(t,e,n){const r=F(t);Lr(r.auth,e,xt);const i=Hn(r.auth,n);return new wt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class wt extends zg{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JS.get())};e()}}wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="pendingRedirect",hi=new Map;class ek extends zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const r=await tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tk(t,e){const n=$g(e),r=Bg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function bc(t,e){return Bg(t)._set($g(e),"true")}function nk(){hi.clear()}function Mc(t,e){hi.set(t._key(),e)}function Bg(t){return De(t._redirectPersistence)}function $g(t){return Cn(ZS,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t,e,n){return ik(t,e,n)}async function ik(t,e,n){const r=X(t);Lr(t,e,xt),await r._initializationPromise;const i=Hn(r,n);return await bc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ok(t,e,n){return sk(t,e,n)}async function sk(t,e,n){const r=F(t);Lr(r.auth,e,xt),await r.auth._initializationPromise;const i=Hn(r.auth,n);await bc(i,r.auth);const o=await Vg(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function ak(t,e,n){return lk(t,e,n)}async function lk(t,e,n){const r=F(t);Lr(r.auth,e,xt),await r.auth._initializationPromise;const i=Hn(r.auth,n);await ta(!1,r,e.providerId),await bc(i,r.auth);const o=await Vg(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function uk(t,e){return await X(t)._initializationPromise,sa(t,e,!1)}async function sa(t,e,n=!1){const r=X(t),i=Hn(r,e),s=await new ek(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Vg(t){const e=to(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=10*60*1e3;class Hg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(he(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ck&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e={}){return ae(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hk=/^https?/;async function pk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kg(t);for(const n of e)try{if(mk(n))return}catch{}me(t,"unauthorized-domain")}function mk(t){const e=Fi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!hk.test(n))return!1;if(fk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new Xi(3e4,6e4);function Ff(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vk(t){return new Promise((e,n)=>{var r,i,o;function s(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(he(t,"network-request-failed"))},timeout:gk.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Z().gapi)===null||o===void 0)&&o.load)s();else{const a=wg("iframefcb");return Z()[a]=()=>{gapi.load?s():n(he(t,"network-request-failed"))},Tc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function yk(t){return Ho=Ho||vk(t),Ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new Xi(5e3,15e3),_k="__/auth/iframe",Ek="emulator/auth/iframe",Ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kk(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sc(e,Ek):`https://${t.config.authDomain}/${_k}`,r={apiKey:e.apiKey,appName:t.name,v:Vn},i=Sk.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${xr(r).slice(1)}`}async function Tk(t){const e=await yk(t),n=Z().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ik,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=he(t,"network-request-failed"),a=Z().setTimeout(()=>{o(s)},wk.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rk=500,Pk=600,Nk="_blank",Ak="http://localhost";class jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(t,e,n,r=Rk,i=Pk){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ck),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ne().toLowerCase();n&&(a=dg(u)?Nk:n),cg(u)&&(e=e||Ak,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[y,g])=>`${p}${y}=${g},`,"");if(sI(u)&&a!=="_self")return xk(e||"",a),new jf(null);const d=window.open(e||"",a,c);S(d,t,"popup-blocked");try{d.focus()}catch{}return new jf(d)}function xk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="__/auth/handler",Dk="emulator/auth/handler",bk=encodeURIComponent("fac");async function su(t,e,n,r,i,o){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vn,eventId:i};if(e instanceof xt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",v1(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(o||{}))s[c]=d}if(e instanceof Mr){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${bk}=${encodeURIComponent(l)}`:"";return`${Mk(t)}?${xr(a).slice(1)}${u}`}function Mk({config:t}){return t.emulator?Sc(t,Dk):`https://${t.authDomain}/${Lk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class Uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bn,this._completeRedirectFn=sa,this._overrideRedirectResult=Mc}async _openPopup(e,n,r,i){var o;tt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await su(e,n,r,Fi(),i);return Ok(e,s,to())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await su(e,n,r,Fi(),i);return yS(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(tt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tk(e),r=new Hg(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Xa];s!==void 0&&n(!!s),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mg()||kc()||Dr()}}const Fk=Uk;class jk{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ct("unexpected MultiFactorSessionType")}}}class Uc extends jk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Uc(e)}_finalizeEnroll(e,n,r){return cS(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return PS(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qg{constructor(){}static assertion(e){return Uc._fromCredential(e)}}qg.FACTOR_ID="phone";var zf="@firebase/auth",Bf="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $k(t){Dn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;S(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gg(t)},u=new mI(r,i,o,l);return gI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new sn("auth-internal",e=>{const n=X(e.getProvider("auth").getImmediate());return(r=>new zk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(zf,Bf,Bk(t)),nn(zf,Bf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=5*60;u1("authIdTokenMaxAge");$k("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=2e3;async function Wk(t,e,n){var r;const{BuildInfo:i}=Un();tt(e.sessionId,"AuthEvent did not contain a session ID");const o=await Yk(e.sessionId),s={};return Dr()?s.ibi=i.packageName:Zi()?s.apn=i.packageName:me(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,su(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function Kk(t){const{BuildInfo:e}=Un(),n={};Dr()?n.iosBundleId=e.packageName:Zi()?n.androidPackageName=e.packageName:me(t,"operation-not-supported-in-this-environment"),await Kg(t,n)}function qk(t){const{cordova:e}=Un();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,oI()?"_blank":"_system","location=yes"),n(i)})})}async function Gk(t,e,n){const{cordova:r}=Un();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var d;o();const p=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(he(t,"redirect-cancelled-by-user"))},Hk))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Zi()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Jk(t){var e,n,r,i,o,s,a,l,u,c;const d=Un();S(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((o=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((l=(a=(s=d==null?void 0:d.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Yk(t){const e=Qk(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Qk(t){if(tt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=20;class Zk extends Hg{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function eT(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:rT(),postBody:null,tenantId:t.tenantId,error:he(t,"no-auth-event")}}function tT(t,e){return au()._set(lu(t),e)}async function $f(t){const e=await au()._get(lu(t));return e&&await au()._remove(lu(t)),e}function nT(t,e){var n,r;const i=oT(e);if(i.includes("/__/auth/callback")){const o=Wo(i),s=o.firebaseError?iT(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?he(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function rT(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Xk;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function au(){return De(Oc)}function lu(t){return Cn("authEvent",t.config.apiKey,t.name)}function iT(t){try{return JSON.parse(t)}catch{return null}}function oT(t){const e=Wo(t),n=e.link?decodeURIComponent(e.link):void 0,r=Wo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Wo(i).link||i||r||n||t}function Wo(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return or(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=500;class aT{constructor(){this._redirectPersistence=bn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sa,this._overrideRedirectResult=Mc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Zk(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){me(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){Jk(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),nk(),await this._originValidation(e);const s=eT(e,r,i);await tT(e,s);const a=await Wk(e,s,n),l=await qk(a);return Gk(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kk(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Un(),s=setTimeout(async()=>{await $f(e),n.onEvent(Vf())},sT),a=async c=>{clearTimeout(s);const d=await $f(e);let p=null;d&&(c!=null&&c.url)&&(p=nT(d,c.url)),n.onEvent(p||Vf())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Un().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const lT=aT;function Vf(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:he("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e){X(t)._logFramework(e)}var cT="@firebase/auth-compat",dT="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=1e3;function pi(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function hT(){return pi()==="http:"||pi()==="https:"}function Gg(t=ne()){return!!((pi()==="file:"||pi()==="ionic:"||pi()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function pT(){return mc()||Bm()}function mT(){return Vm()&&(document==null?void 0:document.documentMode)===11}function gT(t=ne()){return/Edge\/\d+/.test(t)}function vT(t=ne()){return mT()||gT(t)}function Jg(){try{const t=self.localStorage,e=to();if(t)return t.setItem(e,"1"),t.removeItem(e),vT()?_s():!0}catch{return Fc()&&_s()}return!1}function Fc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Za(){return(hT()||$m()||Gg())&&!pT()&&Jg()&&!Fc()}function Yg(){return Gg()&&typeof document<"u"}async function yT(){return Yg()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},fT);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function wT(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={LOCAL:"local",NONE:"none",SESSION:"session"},Jr=S,Qg="persistence";function _T(t,e){if(Jr(Object.values(xe).includes(e),t,"invalid-persistence-type"),mc()){Jr(e!==xe.SESSION,t,"unsupported-persistence-type");return}if(Bm()){Jr(e===xe.NONE,t,"unsupported-persistence-type");return}if(Fc()){Jr(e===xe.NONE||e===xe.LOCAL&&_s(),t,"unsupported-persistence-type");return}Jr(e===xe.NONE||Jg(),t,"unsupported-persistence-type")}async function uu(t){await t._initializationPromise;const e=Xg(),n=Cn(Qg,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function ET(t,e){const n=Xg();if(!n)return[];const r=Cn(Qg,t,e);switch(n.getItem(r)){case xe.NONE:return[kr];case xe.LOCAL:return[$i,bn];case xe.SESSION:return[bn];default:return[]}}function Xg(){var t;try{return((t=wT())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=S;class Vt{constructor(){this.browserResolver=De(Fk),this.cordovaResolver=De(lT),this.underlyingResolver=null,this._redirectPersistence=bn,this._completeRedirectFn=sa,this._overrideRedirectResult=Mc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Yg()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return IT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await yT();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){return t.unwrap()}function ST(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){return ev(t)}function TT(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new CT(t,lS(t,e))}else if(r){const i=ev(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function ev(t){const{_tokenResponse:e}=t instanceof Ae?t.customData:t;if(!e)return null;if(!(t instanceof Ae)&&"temporaryProof"in e&&"phoneNumber"in e)return Mn.credentialFromResult(t);const n=e.providerId;if(!n||n===Gr.PASSWORD)return null;let r;switch(n){case Gr.GOOGLE:r=st;break;case Gr.FACEBOOK:r=ot;break;case Gr.GITHUB:r=at;break;case Gr.TWITTER:r=lt;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?Tr._create(n,a):ht._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new hr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Ae?r.credentialFromError(t):r.credentialFromResult(t)}function ke(t,e){return e.catch(n=>{throw n instanceof Ae&&TT(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:kT(n),additionalUserInfo:aS(n),user:_t.getOrCreate(i)}})}async function cu(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>ke(t,n.confirm(r))}}class CT{constructor(e,n){this.resolver=n,this.auth=ST(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ke(Zg(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._delegate=e,this.multiFactor=fS(e)}static getOrCreate(e){return _t.USER_MAP.has(e)||_t.USER_MAP.set(e,new _t(e)),_t.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ke(this.auth,Pg(this._delegate,e))}async linkWithPhoneNumber(e,n){return cu(this.auth,VS(this._delegate,e,n))}async linkWithPopup(e){return ke(this.auth,XS(this._delegate,e,Vt))}async linkWithRedirect(e){return await uu(X(this.auth)),ak(this._delegate,e,Vt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ke(this.auth,Ng(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return cu(this.auth,HS(this._delegate,e,n))}reauthenticateWithPopup(e){return ke(this.auth,QS(this._delegate,e,Vt))}async reauthenticateWithRedirect(e){return await uu(X(this.auth)),ok(this._delegate,e,Vt)}sendEmailVerification(e){return YI(this._delegate,e)}async unlink(e){return await MI(this._delegate,e),this}updateEmail(e){return eS(this._delegate,e)}updatePassword(e){return tS(this._delegate,e)}updatePhoneNumber(e){return WS(this._delegate,e)}updateProfile(e){return ZI(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return QI(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_t.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=S;class du{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Yr(r,"invalid-api-key",{appName:e.name}),Yr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Vt:void 0;this._delegate=n.initialize({options:{persistence:RT(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(zE),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_t.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){vI(this._delegate,e,n)}applyActionCode(e){return BI(this._delegate,e)}checkActionCode(e){return Ag(this._delegate,e)}confirmPasswordReset(e,n){return zI(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return ke(this._delegate,VI(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return JI(this._delegate,e)}isSignInWithEmailLink(e){return KI(this._delegate,e)}async getRedirectResult(){Yr(Za(),this._delegate,"operation-not-supported-in-this-environment");const e=await uk(this._delegate,Vt);return e?ke(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){uT(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=Hf(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=Hf(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return WI(this._delegate,e,n)}sendPasswordResetEmail(e,n){return jI(this._delegate,e,n||void 0)}async setPersistence(e){_T(this._delegate,e);let n;switch(e){case xe.SESSION:n=bn;break;case xe.LOCAL:n=await De($i)._isAvailable()?$i:Oc;break;case xe.NONE:n=kr;break;default:return me("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ke(this._delegate,bI(this._delegate))}signInWithCredential(e){return ke(this._delegate,na(this._delegate,e))}signInWithCustomToken(e){return ke(this._delegate,FI(this._delegate,e))}signInWithEmailAndPassword(e,n){return ke(this._delegate,HI(this._delegate,e,n))}signInWithEmailLink(e,n){return ke(this._delegate,qI(this._delegate,e,n))}signInWithPhoneNumber(e,n){return cu(this._delegate,$S(this._delegate,e,n))}async signInWithPopup(e){return Yr(Za(),this._delegate,"operation-not-supported-in-this-environment"),ke(this._delegate,YS(this._delegate,e,Vt))}async signInWithRedirect(e){return Yr(Za(),this._delegate,"operation-not-supported-in-this-environment"),await uu(this._delegate),rk(this._delegate,e,Vt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $I(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}du.Persistence=xe;function Hf(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&_t.getOrCreate(s)),error:e,complete:n}}function RT(t,e){const n=ET(t,e);if(typeof self<"u"&&!n.includes($i)&&n.push($i),typeof window<"u")for(const r of[Oc,bn])n.includes(r)||n.push(r);return n.includes(kr)||n.push(kr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.providerId="phone",this._delegate=new Mn(Zg(Qi.auth()))}static credential(e,n){return Mn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}jc.PHONE_SIGN_IN_METHOD=Mn.PHONE_SIGN_IN_METHOD;jc.PROVIDER_ID=Mn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=S;class NT{constructor(e,n,r=Qi.app()){var i;PT((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new zS(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="auth-compat";function OT(t){t.INTERNAL.registerComponent(new sn(AT,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new du(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Kn.EMAIL_SIGNIN,PASSWORD_RESET:Kn.PASSWORD_RESET,RECOVER_EMAIL:Kn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Kn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Kn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Kn.VERIFY_EMAIL}},EmailAuthProvider:hn,FacebookAuthProvider:ot,GithubAuthProvider:at,GoogleAuthProvider:st,OAuthProvider:hr,SAMLAuthProvider:Ss,PhoneAuthProvider:jc,PhoneMultiFactorGenerator:qg,RecaptchaVerifier:NT,TwitterAuthProvider:lt,Auth:du,AuthCredential:br,Error:Ae}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(cT,dT)}OT(Qi);const zc=Qi.initializeApp({apiKey:"AIzaSyB4U6J4pNRQJldPAtwvOmnrjhqyDo3tXBk",authDomain:"twit-auth.firebaseapp.com",projectId:"twit-auth",storageBucket:"twit-auth.appspot.com",messagingSenderId:"525128838351",appId:"1:525128838351:web:4cdfe743af1f77f7711bba",measurementId:"G-4XCXKV6BRJ"});zc.auth();function xT(){const[t,e]=k.useState(""),[n,r]=k.useState(""),[i,o]=k.useState(""),[s,a]=k.useState(""),l=async u=>{if(console.log(t,i,n),u.preventDefault(),!t||!n||!i){a("malumot to'liq emas");return}if(n!==i){a("confirm va password moskelmadi!!!");return}console.log(t,i,n);try{await zc.auth().createUserWithEmailAndPassword(t,n),console.log(t,i,n),a("")}catch(c){a(c),console.log(t,i,n)}e(""),r(""),o(""),console.log(t,i,n)};return E.jsxs("div",{className:"register-block",children:[E.jsxs("div",{className:"forms",children:[E.jsx(Di,{to:"/",children:E.jsx(hc,{className:"forms__logo"})}),E.jsx("h3",{children:"register"}),E.jsxs("form",{onSubmit:l,children:[E.jsx("input",{value:t,onChange:u=>e(u.target.value),className:"email",placeholder:"Enter your email.",type:"email"}),E.jsx("input",{value:n,onChange:u=>r(u.target.value),className:"password",placeholder:"Enter your password.",type:"password"}),E.jsx("input",{value:i,onChange:u=>o(u.target.value),className:"confirm",placeholder:"confirm password.",type:"password"}),E.jsx("button",{type:"submit",children:"submit"})]}),s]}),E.jsx(Di,{to:"/login",children:"Accountingiz bormi..."})]})}function LT(){const[t,e]=k.useState(""),[n,r]=k.useState(""),[i,o]=k.useState(""),s=async a=>{if(a.preventDefault(),!t||!n){o("Malumot kiriting !");return}else try{await zc.auth().signInWithEmailAndPassword(n,t),alert("Login.")}catch(l){l.code==="auth/user-not-faund"?o("User topilmadi !"):l.code==="auth/wrong-password"?o("Parol xato !"):o(l.message),o(l)}r(""),e("")};return E.jsxs("div",{className:"register-block",children:[E.jsxs("div",{className:"forms",children:[E.jsx(Di,{to:"/",children:E.jsx(hc,{className:"forms__logo"})}),E.jsx("h3",{children:"log in"}),E.jsxs("form",{onSubmit:s,children:[E.jsx("input",{value:n,onChange:a=>r(a.target.value),className:"email",placeholder:"Enter your email.",type:"email"}),E.jsx("input",{value:t,onChange:a=>e(a.target.value),className:"password",placeholder:"Enter your password.",type:"password"}),E.jsx("button",{type:"submit",children:"submit"})]}),i]}),E.jsx(Di,{to:"/register",children:"Register..."})]})}function DT(){return E.jsx("div",{children:E.jsxs(gw,{children:[E.jsx(Mo,{path:"/",element:E.jsx(e1,{})}),E.jsx(Mo,{path:"/register",element:E.jsx(xT,{})}),E.jsx(Mo,{path:"/login",element:E.jsx(LT,{})})]})})}function bT(){const{dark:t}=k.useContext(Qs);return E.jsx("div",{className:t?"dark-body":"light-body",children:E.jsx(DT,{})})}el.createRoot(document.getElementById("root")).render(E.jsx(Ht.StrictMode,{children:E.jsx(Ew,{children:E.jsx(H_,{children:E.jsx(bT,{})})})}));
