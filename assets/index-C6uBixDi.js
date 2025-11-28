(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var qh={exports:{}},Sa={},Wh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function tw(){if(Lm)return xe;Lm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,J={};function H(V,b,q){this.props=V,this.context=b,this.refs=J,this.updater=q||B}H.prototype.isReactComponent={},H.prototype.setState=function(V,b){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,b,"setState")},H.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ye(){}ye.prototype=H.prototype;function we(V,b,q){this.props=V,this.context=b,this.refs=J,this.updater=q||B}var Ae=we.prototype=new ye;Ae.constructor=we,Z(Ae,H.prototype),Ae.isPureReactComponent=!0;var Te=Array.isArray,$e=Object.prototype.hasOwnProperty,Pe={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(V,b,q){var Q,ne={},re=null,ce=null;if(b!=null)for(Q in b.ref!==void 0&&(ce=b.ref),b.key!==void 0&&(re=""+b.key),b)$e.call(b,Q)&&!k.hasOwnProperty(Q)&&(ne[Q]=b[Q]);var le=arguments.length-2;if(le===1)ne.children=q;else if(1<le){for(var pe=Array(le),Ue=0;Ue<le;Ue++)pe[Ue]=arguments[Ue+2];ne.children=pe}if(V&&V.defaultProps)for(Q in le=V.defaultProps,le)ne[Q]===void 0&&(ne[Q]=le[Q]);return{$$typeof:i,type:V,key:re,ref:ce,props:ne,_owner:Pe.current}}function C(V,b){return{$$typeof:i,type:V.type,key:b,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function P(V){var b={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(q){return b[q]})}var O=/\/+/g;function A(V,b){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):b.toString(36)}function Be(V,b,q,Q,ne){var re=typeof V;(re==="undefined"||re==="boolean")&&(V=null);var ce=!1;if(V===null)ce=!0;else switch(re){case"string":case"number":ce=!0;break;case"object":switch(V.$$typeof){case i:case e:ce=!0}}if(ce)return ce=V,ne=ne(ce),V=Q===""?"."+A(ce,0):Q,Te(ne)?(q="",V!=null&&(q=V.replace(O,"$&/")+"/"),Be(ne,b,q,"",function(Ue){return Ue})):ne!=null&&(D(ne)&&(ne=C(ne,q+(!ne.key||ce&&ce.key===ne.key?"":(""+ne.key).replace(O,"$&/")+"/")+V)),b.push(ne)),1;if(ce=0,Q=Q===""?".":Q+":",Te(V))for(var le=0;le<V.length;le++){re=V[le];var pe=Q+A(re,le);ce+=Be(re,b,q,pe,ne)}else if(pe=x(V),typeof pe=="function")for(V=pe.call(V),le=0;!(re=V.next()).done;)re=re.value,pe=Q+A(re,le++),ce+=Be(re,b,q,pe,ne);else if(re==="object")throw b=String(V),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ce}function ct(V,b,q){if(V==null)return V;var Q=[],ne=0;return Be(V,Q,"","",function(re){return b.call(q,re,ne++)}),Q}function Tt(V){if(V._status===-1){var b=V._result;b=b(),b.then(function(q){(V._status===0||V._status===-1)&&(V._status=1,V._result=q)},function(q){(V._status===0||V._status===-1)&&(V._status=2,V._result=q)}),V._status===-1&&(V._status=0,V._result=b)}if(V._status===1)return V._result.default;throw V._result}var qe={current:null},te={transition:null},me={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:te,ReactCurrentOwner:Pe};function ie(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:ct,forEach:function(V,b,q){ct(V,function(){b.apply(this,arguments)},q)},count:function(V){var b=0;return ct(V,function(){b++}),b},toArray:function(V){return ct(V,function(b){return b})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},xe.Component=H,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=we,xe.StrictMode=s,xe.Suspense=y,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,xe.act=ie,xe.cloneElement=function(V,b,q){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Q=Z({},V.props),ne=V.key,re=V.ref,ce=V._owner;if(b!=null){if(b.ref!==void 0&&(re=b.ref,ce=Pe.current),b.key!==void 0&&(ne=""+b.key),V.type&&V.type.defaultProps)var le=V.type.defaultProps;for(pe in b)$e.call(b,pe)&&!k.hasOwnProperty(pe)&&(Q[pe]=b[pe]===void 0&&le!==void 0?le[pe]:b[pe])}var pe=arguments.length-2;if(pe===1)Q.children=q;else if(1<pe){le=Array(pe);for(var Ue=0;Ue<pe;Ue++)le[Ue]=arguments[Ue+2];Q.children=le}return{$$typeof:i,type:V.type,key:ne,ref:re,props:Q,_owner:ce}},xe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},xe.createElement=I,xe.createFactory=function(V){var b=I.bind(null,V);return b.type=V,b},xe.createRef=function(){return{current:null}},xe.forwardRef=function(V){return{$$typeof:m,render:V}},xe.isValidElement=D,xe.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Tt}},xe.memo=function(V,b){return{$$typeof:v,type:V,compare:b===void 0?null:b}},xe.startTransition=function(V){var b=te.transition;te.transition={};try{V()}finally{te.transition=b}},xe.unstable_act=ie,xe.useCallback=function(V,b){return qe.current.useCallback(V,b)},xe.useContext=function(V){return qe.current.useContext(V)},xe.useDebugValue=function(){},xe.useDeferredValue=function(V){return qe.current.useDeferredValue(V)},xe.useEffect=function(V,b){return qe.current.useEffect(V,b)},xe.useId=function(){return qe.current.useId()},xe.useImperativeHandle=function(V,b,q){return qe.current.useImperativeHandle(V,b,q)},xe.useInsertionEffect=function(V,b){return qe.current.useInsertionEffect(V,b)},xe.useLayoutEffect=function(V,b){return qe.current.useLayoutEffect(V,b)},xe.useMemo=function(V,b){return qe.current.useMemo(V,b)},xe.useReducer=function(V,b,q){return qe.current.useReducer(V,b,q)},xe.useRef=function(V){return qe.current.useRef(V)},xe.useState=function(V){return qe.current.useState(V)},xe.useSyncExternalStore=function(V,b,q){return qe.current.useSyncExternalStore(V,b,q)},xe.useTransition=function(){return qe.current.useTransition()},xe.version="18.3.1",xe}var Fm;function Ld(){return Fm||(Fm=1,Wh.exports=tw()),Wh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function nw(){if(Um)return Sa;Um=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var E,S={},x=null,B=null;v!==void 0&&(x=""+v),y.key!==void 0&&(x=""+y.key),y.ref!==void 0&&(B=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(S[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)S[E]===void 0&&(S[E]=y[E]);return{$$typeof:e,type:m,key:x,ref:B,props:S,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var jm;function rw(){return jm||(jm=1,qh.exports=nw()),qh.exports}var U=rw(),ot=Ld(),vu={},Gh={exports:{}},en={},Kh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function iw(){return zm||(zm=1,(function(i){function e(te,me){var ie=te.length;te.push(me);e:for(;0<ie;){var V=ie-1>>>1,b=te[V];if(0<o(b,me))te[V]=me,te[ie]=b,ie=V;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var me=te[0],ie=te.pop();if(ie!==me){te[0]=ie;e:for(var V=0,b=te.length,q=b>>>1;V<q;){var Q=2*(V+1)-1,ne=te[Q],re=Q+1,ce=te[re];if(0>o(ne,ie))re<b&&0>o(ce,ne)?(te[V]=ce,te[re]=ie,V=re):(te[V]=ne,te[Q]=ie,V=Q);else if(re<b&&0>o(ce,ie))te[V]=ce,te[re]=ie,V=re;else break e}}return me}function o(te,me){var ie=te.sortIndex-me.sortIndex;return ie!==0?ie:te.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],E=1,S=null,x=3,B=!1,Z=!1,J=!1,H=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(te){for(var me=t(v);me!==null;){if(me.callback===null)s(v);else if(me.startTime<=te)s(v),me.sortIndex=me.expirationTime,e(y,me);else break;me=t(v)}}function Te(te){if(J=!1,Ae(te),!Z)if(t(y)!==null)Z=!0,Tt($e);else{var me=t(v);me!==null&&qe(Te,me.startTime-te)}}function $e(te,me){Z=!1,J&&(J=!1,ye(I),I=-1),B=!0;var ie=x;try{for(Ae(me),S=t(y);S!==null&&(!(S.expirationTime>me)||te&&!P());){var V=S.callback;if(typeof V=="function"){S.callback=null,x=S.priorityLevel;var b=V(S.expirationTime<=me);me=i.unstable_now(),typeof b=="function"?S.callback=b:S===t(y)&&s(y),Ae(me)}else s(y);S=t(y)}if(S!==null)var q=!0;else{var Q=t(v);Q!==null&&qe(Te,Q.startTime-me),q=!1}return q}finally{S=null,x=ie,B=!1}}var Pe=!1,k=null,I=-1,C=5,D=-1;function P(){return!(i.unstable_now()-D<C)}function O(){if(k!==null){var te=i.unstable_now();D=te;var me=!0;try{me=k(!0,te)}finally{me?A():(Pe=!1,k=null)}}else Pe=!1}var A;if(typeof we=="function")A=function(){we(O)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,ct=Be.port2;Be.port1.onmessage=O,A=function(){ct.postMessage(null)}}else A=function(){H(O,0)};function Tt(te){k=te,Pe||(Pe=!0,A())}function qe(te,me){I=H(function(){te(i.unstable_now())},me)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(te){te.callback=null},i.unstable_continueExecution=function(){Z||B||(Z=!0,Tt($e))},i.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<te?Math.floor(1e3/te):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(te){switch(x){case 1:case 2:case 3:var me=3;break;default:me=x}var ie=x;x=me;try{return te()}finally{x=ie}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(te,me){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ie=x;x=te;try{return me()}finally{x=ie}},i.unstable_scheduleCallback=function(te,me,ie){var V=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,te){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=ie+b,te={id:E++,callback:me,priorityLevel:te,startTime:ie,expirationTime:b,sortIndex:-1},ie>V?(te.sortIndex=ie,e(v,te),t(y)===null&&te===t(v)&&(J?(ye(I),I=-1):J=!0,qe(Te,ie-V))):(te.sortIndex=b,e(y,te),Z||B||(Z=!0,Tt($e))),te},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(te){var me=x;return function(){var ie=x;x=me;try{return te.apply(this,arguments)}finally{x=ie}}}})(Qh)),Qh}var Bm;function sw(){return Bm||(Bm=1,Kh.exports=iw()),Kh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function ow(){if($m)return en;$m=1;var i=Ld(),e=sw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function x(n){return y.call(S,n)?!0:y.call(E,n)?!1:v.test(n)?S[n]=!0:(E[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Z(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function we(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ye,we);H[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ye,we);H[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ye,we);H[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ae(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Z(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),qe=Symbol.for("react.offscreen"),te=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,V;function b(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var q=!1;function Q(n,r){if(!n||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var c=j}Reflect.construct(n,[],r)}else{try{r.call()}catch(j){c=j}n.call(r.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),f=c.stack.split(`
`),_=d.length-1,T=f.length-1;1<=_&&0<=T&&d[_]!==f[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==f[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==f[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{q=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?b(n):""}function ne(n){switch(n.tag){case 5:return b(n.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Pe:return"Portal";case C:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case Be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ct:return r=n.displayName||null,r!==null?r:re(n.type)||"Memo";case Tt:r=n._payload,n=n._init;try{return re(n(r))}catch{}}return null}function ce(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ue(n){var r=pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rn(n){n._valueTracker||(n._valueTracker=Ue(n))}function sn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=pe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gt(n,r){var a=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ui(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Un(n,r){r=r.checked,r!=null&&Ae(n,"checked",r,!1)}function Rn(n,r){Un(n,r);var a=le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?We(n,r.type,a):r.hasOwnProperty("defaultValue")&&We(n,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function gn(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function We(n,r,a){(r!=="number"||It(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ke=Array.isArray;function ht(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function zr(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qt(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Ke(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:le(a)}}function sl(n,r){var a=le(r.value),c=le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Br(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $r,ol=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ji(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(n){al.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Hr[r]=Hr[n]})});function qr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Hr.hasOwnProperty(n)&&Hr[n]?(""+r).trim():r+"px"}function Ss(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=qr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var bo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,r){if(r){if(bo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function As(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wr=null;function Cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fr=null,pr=null,it=null;function Mo(n){if(n=ua(n)){if(typeof fr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ol(r),fr(n.stateNode,n.type,r))}}function Gr(n){pr?it?it.push(n):it=[n]:pr=n}function Kr(){if(pr){var n=pr,r=it;if(it=pr=null,Mo(n),r)for(n=0;n<r.length;n++)Mo(r[n])}}function ll(n,r){return n(r)}function ul(){}var jn=!1;function cl(n,r,a){if(jn)return n(r,a);jn=!0;try{return ll(n,r,a)}finally{jn=!1,(pr!==null||it!==null)&&(ul(),Kr())}}function zi(n,r){var a=n.stateNode;if(a===null)return null;var c=Ol(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Qr=!1;if(m)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Qr=!1}function hl(n,r,a,c,d,f,_,T,R){var j=Array.prototype.slice.call(arguments,3);try{r.apply(a,j)}catch(K){this.onError(K)}}var mr=!1,zn=null,Rs=!1,yn=null,dl={onError:function(n){mr=!0,zn=n}};function fl(n,r,a,c,d,f,_,T,R){mr=!1,zn=null,hl.apply(dl,arguments)}function Lo(n,r,a,c,d,f,_,T,R){if(fl.apply(this,arguments),mr){if(mr){var j=zn;mr=!1,zn=null}else throw Error(t(198));Rs||(Rs=!0,yn=j)}}function Pn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function pl(n){if(Pn(n)!==n)throw Error(t(188))}function ml(n){var r=n.alternate;if(!r){if(r=Pn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return pl(d),n;if(f===c)return pl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=f;break}if(T===c){_=!0,c=d,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,c=d;break}if(T===c){_=!0,c=f,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function gl(n){return n=ml(n),n!==null?Bi(n):null}function Bi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Bi(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,ks=e.unstable_cancelCallback,$i=e.unstable_shouldYield,gr=e.unstable_requestPaint,Qe=e.unstable_now,Tc=e.unstable_getCurrentPriorityLevel,Ps=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,Hi=e.unstable_NormalPriority,zo=e.unstable_LowPriority,xs=e.unstable_IdlePriority,qi=null,on=null;function yl(n){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(qi,n,void 0,(n.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:Wi,Bn=Math.log,_n=Math.LN2;function Wi(n){return n>>>=0,n===0?32:31-(Bn(n)/_n|0)|0}var $n=64,Xr=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Fe(T):(f&=_,f!==0&&(c=Fe(f)))}else _=a&~d,_!==0?c=Fe(_):f!==0&&(c=Fe(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-an(r),d=1<<a,c|=n[a],r&=~d;return c}function Gi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-an(f),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Gi(T,r)):R<=r&&(n.expiredLanes|=T),f&=~T}}function Bo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=$n;return $n<<=1,($n&4194240)===0&&($n=64),n}function Ho(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Qi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-an(r),n[r]=a}function Ic(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-an(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function qo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-an(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Oe=0;function Hn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wo,Ns,Go,Ko,Qo,qn=!1,Ds=[],Wn=null,Gn=null,kt=null,Yi=new Map,_r=new Map,ln=[],_l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jr(n,r){switch(n){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Yi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(r.pointerId)}}function xn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&Ns(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function vl(n,r,a,c,d){switch(r){case"focusin":return Wn=xn(Wn,n,r,a,c,d),!0;case"dragenter":return Gn=xn(Gn,n,r,a,c,d),!0;case"mouseover":return kt=xn(kt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return Yi.set(f,xn(Yi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,_r.set(f,xn(_r.get(f)||null,n,r,a,c,d)),!0}return!1}function Vs(n){var r=es(n.target);if(r!==null){var a=Pn(r);if(a!==null){if(r=a.tag,r===13){if(r=Fo(a),r!==null){n.blockedOn=r,Qo(n.priority,function(){Go(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function He(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Os(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Wr=c,a.target.dispatchEvent(c),Wr=null}else return r=ua(a),r!==null&&Ns(r),n.blockedOn=a,!1;r.shift()}return!0}function wl(n,r,a){He(n)&&a.delete(r)}function Sc(){qn=!1,Wn!==null&&He(Wn)&&(Wn=null),Gn!==null&&He(Gn)&&(Gn=null),kt!==null&&He(kt)&&(kt=null),Yi.forEach(wl),_r.forEach(wl)}function Zr(n,r){n.blockedOn===r&&(n.blockedOn=null,qn||(qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sc)))}function ei(n){function r(d){return Zr(d,n)}if(0<Ds.length){Zr(Ds[0],n);for(var a=1;a<Ds.length;a++){var c=Ds[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Wn!==null&&Zr(Wn,n),Gn!==null&&Zr(Gn,n),kt!==null&&Zr(kt,n),Yi.forEach(r),_r.forEach(r),a=0;a<ln.length;a++)c=ln[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)Vs(a),a.blockedOn===null&&ln.shift()}var vr=Te.ReactCurrentBatchConfig,wr=!0;function Kn(n,r,a,c){var d=Oe,f=vr.transition;vr.transition=null;try{Oe=1,Yo(n,r,a,c)}finally{Oe=d,vr.transition=f}}function El(n,r,a,c){var d=Oe,f=vr.transition;vr.transition=null;try{Oe=4,Yo(n,r,a,c)}finally{Oe=d,vr.transition=f}}function Yo(n,r,a,c){if(wr){var d=Os(n,r,a,c);if(d===null)bc(n,r,c,Qn,a),Jr(n,c);else if(vl(d,n,r,a,c))c.stopPropagation();else if(Jr(n,c),r&4&&-1<_l.indexOf(n)){for(;d!==null;){var f=ua(d);if(f!==null&&Wo(f),f=Os(n,r,a,c),f===null&&bc(n,r,c,Qn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var Qn=null;function Os(n,r,a,c){if(Qn=null,n=Cs(c),n=es(n),n!==null)if(r=Pn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qn=n,null}function bs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tc()){case Ps:return 1;case jo:return 4;case Hi:case zo:return 16;case xs:return 536870912;default:return 16}default:return 16}}var un=null,Ms=null,Er=null;function Tl(){if(Er)return Er;var n,r=Ms,a=r.length,c,d="value"in un?un.value:un.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[f-c];c++);return Er=d.slice(n,1<c?1-c:void 0)}function Xi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Yn(){return!0}function Xo(){return!1}function bt(n){function r(a,c,d,f,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yn:Xo,this.isPropagationStopped=Xo,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),r}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=bt(Xn),ti=ie({},Xn,{view:0,detail:0}),Ls=bt(ti),Fs,Us,cn,Zi=ie({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Re,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==cn&&(cn&&n.type==="mousemove"?(Fs=n.screenX-cn.screenX,Us=n.screenY-cn.screenY):Us=Fs=0,cn=n),Fs)},movementY:function(n){return"movementY"in n?n.movementY:Us}}),Jo=bt(Zi),Il=ie({},Zi,{dataTransfer:0}),Sl=bt(Il),js=ie({},ti,{relatedTarget:0}),Pt=bt(js),Al=ie({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cl=bt(Al),ni=ie({},Xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=bt(ni),p=ie({},Xn,{data:0}),g=bt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=z[n])?!!r[n]:!1}function Re(){return ee}var at=ie({},ti,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Xi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Re,charCode:function(n){return n.type==="keypress"?Xi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=bt(at),dt=ie({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hn=bt(dt),Tr=ie({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Re}),Jn=bt(Tr),Zn=ie({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zs=bt(Zn),Zo=ie({},Zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=bt(Zo),Yv=[9,13,27,32],Ac=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var Xv=m&&"TextEvent"in window&&!ea,Pf=m&&(!Ac||ea&&8<ea&&11>=ea),xf=" ",Nf=!1;function Df(n,r){switch(n){case"keyup":return Yv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function Jv(n,r){switch(n){case"compositionend":return Vf(r);case"keypress":return r.which!==32?null:(Nf=!0,xf);case"textInput":return n=r.data,n===xf&&Nf?null:n;default:return null}}function Zv(n,r){if(Bs)return n==="compositionend"||!Ac&&Df(n,r)?(n=Tl(),Er=Ms=un=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pf&&r.locale!=="ko"?null:r.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!e0[n.type]:r==="textarea"}function bf(n,r,a,c){Gr(c),r=Nl(r,"onChange"),0<r.length&&(a=new Ji("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function t0(n){Zf(n,0)}function Rl(n){var r=Gs(n);if(sn(r))return n}function n0(n,r){if(n==="change")return r}var Mf=!1;if(m){var Cc;if(m){var Rc="oninput"in document;if(!Rc){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),Rc=typeof Lf.oninput=="function"}Cc=Rc}else Cc=!1;Mf=Cc&&(!document.documentMode||9<document.documentMode)}function Ff(){ta&&(ta.detachEvent("onpropertychange",Uf),na=ta=null)}function Uf(n){if(n.propertyName==="value"&&Rl(na)){var r=[];bf(r,na,n,Cs(n)),cl(t0,r)}}function r0(n,r,a){n==="focusin"?(Ff(),ta=r,na=a,ta.attachEvent("onpropertychange",Uf)):n==="focusout"&&Ff()}function i0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(na)}function s0(n,r){if(n==="click")return Rl(r)}function o0(n,r){if(n==="input"||n==="change")return Rl(r)}function a0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:a0;function ra(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zf(n,r){var a=jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function Bf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $f(){for(var n=window,r=It();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=It(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function l0(n){var r=$f(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Bf(a.ownerDocument.documentElement,a)){if(c!==null&&kc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=zf(a,f);var _=zf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u0=m&&"documentMode"in document&&11>=document.documentMode,$s=null,Pc=null,ia=null,xc=!1;function Hf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||$s==null||$s!==It(c)||(c=$s,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Nl(Pc,"onSelect"),0<c.length&&(r=new Ji("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=$s)))}function kl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Hs={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Nc={},qf={};m&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Pl(n){if(Nc[n])return Nc[n];if(!Hs[n])return n;var r=Hs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in qf)return Nc[n]=r[a];return n}var Wf=Pl("animationend"),Gf=Pl("animationiteration"),Kf=Pl("animationstart"),Qf=Pl("transitionend"),Yf=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(n,r){Yf.set(n,r),u(r,[n])}for(var Dc=0;Dc<Xf.length;Dc++){var Vc=Xf[Dc],c0=Vc.toLowerCase(),h0=Vc[0].toUpperCase()+Vc.slice(1);ri(c0,"on"+h0)}ri(Wf,"onAnimationEnd"),ri(Gf,"onAnimationIteration"),ri(Kf,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(Qf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Jf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Lo(c,r,void 0,n),n.currentTarget=null}function Zf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,j=T.currentTarget;if(T=T.listener,R!==f&&d.isPropagationStopped())break e;Jf(d,T,j),f=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,j=T.currentTarget,T=T.listener,R!==f&&d.isPropagationStopped())break e;Jf(d,T,j),f=R}}}if(Rs)throw n=yn,Rs=!1,yn=null,n}function Ye(n,r){var a=r[zc];a===void 0&&(a=r[zc]=new Set);var c=n+"__bubble";a.has(c)||(ep(r,n,2,!1),a.add(c))}function Oc(n,r,a){var c=0;r&&(c|=4),ep(a,n,c,r)}var xl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[xl]){n[xl]=!0,s.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||Oc(a,!1,n),Oc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[xl]||(r[xl]=!0,Oc("selectionchange",!1,r))}}function ep(n,r,a,c){switch(bs(r)){case 1:var d=Kn;break;case 4:d=El;break;default:d=Yo}a=d.bind(null,r,a,n),d=void 0,!Qr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=es(T),_===null)return;if(R=_.tag,R===5||R===6){c=f=_;continue e}T=T.parentNode}}c=c.return}cl(function(){var j=f,K=Cs(a),Y=[];e:{var W=Yf.get(n);if(W!==void 0){var se=Ji,ue=n;switch(n){case"keypress":if(Xi(a)===0)break e;case"keydown":case"keyup":se=ze;break;case"focusin":ue="focus",se=Pt;break;case"focusout":ue="blur",se=Pt;break;case"beforeblur":case"afterblur":se=Pt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Jn;break;case Wf:case Gf:case Kf:se=Cl;break;case Qf:se=zs;break;case"scroll":se=Ls;break;case"wheel":se=Qv;break;case"copy":case"cut":case"paste":se=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=hn}var he=(r&4)!==0,lt=!he&&n==="scroll",M=he?W!==null?W+"Capture":null:W;he=[];for(var N=j,F;N!==null;){F=N;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,M!==null&&(X=zi(N,M),X!=null&&he.push(aa(N,X,F)))),lt)break;N=N.return}0<he.length&&(W=new se(W,ue,null,a,K),Y.push({event:W,listeners:he}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",W&&a!==Wr&&(ue=a.relatedTarget||a.fromElement)&&(es(ue)||ue[Ir]))break e;if((se||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=j,ue=ue?es(ue):null,ue!==null&&(lt=Pn(ue),ue!==lt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=j),se!==ue)){if(he=Jo,X="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(he=hn,X="onPointerLeave",M="onPointerEnter",N="pointer"),lt=se==null?W:Gs(se),F=ue==null?W:Gs(ue),W=new he(X,N+"leave",se,a,K),W.target=lt,W.relatedTarget=F,X=null,es(K)===j&&(he=new he(M,N+"enter",ue,a,K),he.target=F,he.relatedTarget=lt,X=he),lt=X,se&&ue)t:{for(he=se,M=ue,N=0,F=he;F;F=qs(F))N++;for(F=0,X=M;X;X=qs(X))F++;for(;0<N-F;)he=qs(he),N--;for(;0<F-N;)M=qs(M),F--;for(;N--;){if(he===M||M!==null&&he===M.alternate)break t;he=qs(he),M=qs(M)}he=null}else he=null;se!==null&&tp(Y,W,se,he,!1),ue!==null&&lt!==null&&tp(Y,lt,ue,he,!0)}}e:{if(W=j?Gs(j):window,se=W.nodeName&&W.nodeName.toLowerCase(),se==="select"||se==="input"&&W.type==="file")var de=n0;else if(Of(W))if(Mf)de=o0;else{de=i0;var _e=r0}else(se=W.nodeName)&&se.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(de=s0);if(de&&(de=de(n,j))){bf(Y,de,a,K);break e}_e&&_e(n,W,j),n==="focusout"&&(_e=W._wrapperState)&&_e.controlled&&W.type==="number"&&We(W,"number",W.value)}switch(_e=j?Gs(j):window,n){case"focusin":(Of(_e)||_e.contentEditable==="true")&&($s=_e,Pc=j,ia=null);break;case"focusout":ia=Pc=$s=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Hf(Y,a,K);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Hf(Y,a,K)}var ve;if(Ac)e:{switch(n){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Bs?Df(n,a)&&(Ie="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Pf&&a.locale!=="ko"&&(Bs||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Bs&&(ve=Tl()):(un=K,Ms="value"in un?un.value:un.textContent,Bs=!0)),_e=Nl(j,Ie),0<_e.length&&(Ie=new g(Ie,n,null,a,K),Y.push({event:Ie,listeners:_e}),ve?Ie.data=ve:(ve=Vf(a),ve!==null&&(Ie.data=ve)))),(ve=Xv?Jv(n,a):Zv(n,a))&&(j=Nl(j,"onBeforeInput"),0<j.length&&(K=new g("onBeforeInput","beforeinput",null,a,K),Y.push({event:K,listeners:j}),K.data=ve))}Zf(Y,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Nl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=zi(n,a),f!=null&&c.unshift(aa(n,f,d)),f=zi(n,r),f!=null&&c.push(aa(n,f,d))),n=n.return}return c}function qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tp(n,r,a,c,d){for(var f=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,j=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&j!==null&&(T=j,d?(R=zi(a,f),R!=null&&_.unshift(aa(a,R,T))):d||(R=zi(a,f),R!=null&&_.push(aa(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var f0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function np(n){return(typeof n=="string"?n:""+n).replace(f0,`
`).replace(p0,"")}function Dl(n,r,a){if(r=np(r),np(n)!==r&&a)throw Error(t(425))}function Vl(){}var Mc=null,Lc=null;function Fc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(y0)}:Uc;function y0(n){setTimeout(function(){throw n})}function jc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ei(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ei(r)}function ii(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ip(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),er="__reactFiber$"+Ws,la="__reactProps$"+Ws,Ir="__reactContainer$"+Ws,zc="__reactEvents$"+Ws,_0="__reactListeners$"+Ws,v0="__reactHandles$"+Ws;function es(n){var r=n[er];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ir]||a[er]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ip(n);n!==null;){if(a=n[er])return a;n=ip(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ol(n){return n[la]||null}var Bc=[],Ks=-1;function si(n){return{current:n}}function Xe(n){0>Ks||(n.current=Bc[Ks],Bc[Ks]=null,Ks--)}function Ge(n,r){Ks++,Bc[Ks]=n.current,n.current=r}var oi={},Mt=si(oi),Qt=si(!1),ts=oi;function Qs(n,r){var a=n.type.contextTypes;if(!a)return oi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yt(n){return n=n.childContextTypes,n!=null}function bl(){Xe(Qt),Xe(Mt)}function sp(n,r,a){if(Mt.current!==oi)throw Error(t(168));Ge(Mt,r),Ge(Qt,a)}function op(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,ce(n)||"Unknown",d));return ie({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||oi,ts=Mt.current,Ge(Mt,n),Ge(Qt,Qt.current),!0}function ap(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=op(n,r,ts),c.__reactInternalMemoizedMergedChildContext=n,Xe(Qt),Xe(Mt),Ge(Mt,n)):Xe(Qt),Ge(Qt,a)}var Sr=null,Ll=!1,$c=!1;function lp(n){Sr===null?Sr=[n]:Sr.push(n)}function w0(n){Ll=!0,lp(n)}function ai(){if(!$c&&Sr!==null){$c=!0;var n=0,r=Oe;try{var a=Sr;for(Oe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,Ll=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Uo(Ps,ai),d}finally{Oe=r,$c=!1}}return null}var Ys=[],Xs=0,Fl=null,Ul=0,vn=[],wn=0,ns=null,Ar=1,Cr="";function rs(n,r){Ys[Xs++]=Ul,Ys[Xs++]=Fl,Fl=n,Ul=r}function up(n,r,a){vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=ns,ns=n;var c=Ar;n=Cr;var d=32-an(c)-1;c&=~(1<<d),a+=1;var f=32-an(r)+d;if(30<f){var _=d-d%5;f=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Ar=1<<32-an(r)+d|a<<d|c,Cr=f+n}else Ar=1<<f|a<<d|c,Cr=n}function Hc(n){n.return!==null&&(rs(n,1),up(n,1,0))}function qc(n){for(;n===Fl;)Fl=Ys[--Xs],Ys[Xs]=null,Ul=Ys[--Xs],Ys[Xs]=null;for(;n===ns;)ns=vn[--wn],vn[wn]=null,Cr=vn[--wn],vn[wn]=null,Ar=vn[--wn],vn[wn]=null}var dn=null,fn=null,et=!1,Dn=null;function cp(n,r){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function hp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,dn=n,fn=ii(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,dn=n,fn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ns!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,dn=n,fn=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(et){var r=fn;if(r){var a=r;if(!hp(n,r)){if(Wc(n))throw Error(t(418));r=ii(a.nextSibling);var c=dn;r&&hp(n,r)?cp(c,a):(n.flags=n.flags&-4097|2,et=!1,dn=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,et=!1,dn=n}}}function dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function jl(n){if(n!==dn)return!1;if(!et)return dp(n),et=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Fc(n.type,n.memoizedProps)),r&&(r=fn)){if(Wc(n))throw fp(),Error(t(418));for(;r;)cp(n,r),r=ii(r.nextSibling)}if(dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){fn=ii(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}fn=null}}else fn=dn?ii(n.stateNode.nextSibling):null;return!0}function fp(){for(var n=fn;n;)n=ii(n.nextSibling)}function Js(){fn=dn=null,et=!1}function Kc(n){Dn===null?Dn=[n]:Dn.push(n)}var E0=Te.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var T=d.refs;_===null?delete T[f]:T[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function pp(n){var r=n._init;return r(n._payload)}function mp(n){function r(M,N){if(n){var F=M.deletions;F===null?(M.deletions=[N],M.flags|=16):F.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=mi(M,N),M.index=0,M.sibling=null,M}function f(M,N,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<N?(M.flags|=2,N):F):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,F,X){return N===null||N.tag!==6?(N=Uh(F,M.mode,X),N.return=M,N):(N=d(N,F),N.return=M,N)}function R(M,N,F,X){var de=F.type;return de===k?K(M,N,F.props.children,X,F.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Tt&&pp(de)===N.type)?(X=d(N,F.props),X.ref=ca(M,N,F),X.return=M,X):(X=hu(F.type,F.key,F.props,null,M.mode,X),X.ref=ca(M,N,F),X.return=M,X)}function j(M,N,F,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=jh(F,M.mode,X),N.return=M,N):(N=d(N,F.children||[]),N.return=M,N)}function K(M,N,F,X,de){return N===null||N.tag!==7?(N=hs(F,M.mode,X,de),N.return=M,N):(N=d(N,F),N.return=M,N)}function Y(M,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Uh(""+N,M.mode,F),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $e:return F=hu(N.type,N.key,N.props,null,M.mode,F),F.ref=ca(M,null,N),F.return=M,F;case Pe:return N=jh(N,M.mode,F),N.return=M,N;case Tt:var X=N._init;return Y(M,X(N._payload),F)}if(Ke(N)||me(N))return N=hs(N,M.mode,F,null),N.return=M,N;zl(M,N)}return null}function W(M,N,F,X){var de=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return de!==null?null:T(M,N,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case $e:return F.key===de?R(M,N,F,X):null;case Pe:return F.key===de?j(M,N,F,X):null;case Tt:return de=F._init,W(M,N,de(F._payload),X)}if(Ke(F)||me(F))return de!==null?null:K(M,N,F,X,null);zl(M,F)}return null}function se(M,N,F,X,de){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(F)||null,T(N,M,""+X,de);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $e:return M=M.get(X.key===null?F:X.key)||null,R(N,M,X,de);case Pe:return M=M.get(X.key===null?F:X.key)||null,j(N,M,X,de);case Tt:var _e=X._init;return se(M,N,F,_e(X._payload),de)}if(Ke(X)||me(X))return M=M.get(F)||null,K(N,M,X,de,null);zl(N,X)}return null}function ue(M,N,F,X){for(var de=null,_e=null,ve=N,Ie=N=0,Ct=null;ve!==null&&Ie<F.length;Ie++){ve.index>Ie?(Ct=ve,ve=null):Ct=ve.sibling;var Le=W(M,ve,F[Ie],X);if(Le===null){ve===null&&(ve=Ct);break}n&&ve&&Le.alternate===null&&r(M,ve),N=f(Le,N,Ie),_e===null?de=Le:_e.sibling=Le,_e=Le,ve=Ct}if(Ie===F.length)return a(M,ve),et&&rs(M,Ie),de;if(ve===null){for(;Ie<F.length;Ie++)ve=Y(M,F[Ie],X),ve!==null&&(N=f(ve,N,Ie),_e===null?de=ve:_e.sibling=ve,_e=ve);return et&&rs(M,Ie),de}for(ve=c(M,ve);Ie<F.length;Ie++)Ct=se(ve,M,Ie,F[Ie],X),Ct!==null&&(n&&Ct.alternate!==null&&ve.delete(Ct.key===null?Ie:Ct.key),N=f(Ct,N,Ie),_e===null?de=Ct:_e.sibling=Ct,_e=Ct);return n&&ve.forEach(function(gi){return r(M,gi)}),et&&rs(M,Ie),de}function he(M,N,F,X){var de=me(F);if(typeof de!="function")throw Error(t(150));if(F=de.call(F),F==null)throw Error(t(151));for(var _e=de=null,ve=N,Ie=N=0,Ct=null,Le=F.next();ve!==null&&!Le.done;Ie++,Le=F.next()){ve.index>Ie?(Ct=ve,ve=null):Ct=ve.sibling;var gi=W(M,ve,Le.value,X);if(gi===null){ve===null&&(ve=Ct);break}n&&ve&&gi.alternate===null&&r(M,ve),N=f(gi,N,Ie),_e===null?de=gi:_e.sibling=gi,_e=gi,ve=Ct}if(Le.done)return a(M,ve),et&&rs(M,Ie),de;if(ve===null){for(;!Le.done;Ie++,Le=F.next())Le=Y(M,Le.value,X),Le!==null&&(N=f(Le,N,Ie),_e===null?de=Le:_e.sibling=Le,_e=Le);return et&&rs(M,Ie),de}for(ve=c(M,ve);!Le.done;Ie++,Le=F.next())Le=se(ve,M,Ie,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&ve.delete(Le.key===null?Ie:Le.key),N=f(Le,N,Ie),_e===null?de=Le:_e.sibling=Le,_e=Le);return n&&ve.forEach(function(ew){return r(M,ew)}),et&&rs(M,Ie),de}function lt(M,N,F,X){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case $e:e:{for(var de=F.key,_e=N;_e!==null;){if(_e.key===de){if(de=F.type,de===k){if(_e.tag===7){a(M,_e.sibling),N=d(_e,F.props.children),N.return=M,M=N;break e}}else if(_e.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Tt&&pp(de)===_e.type){a(M,_e.sibling),N=d(_e,F.props),N.ref=ca(M,_e,F),N.return=M,M=N;break e}a(M,_e);break}else r(M,_e);_e=_e.sibling}F.type===k?(N=hs(F.props.children,M.mode,X,F.key),N.return=M,M=N):(X=hu(F.type,F.key,F.props,null,M.mode,X),X.ref=ca(M,N,F),X.return=M,M=X)}return _(M);case Pe:e:{for(_e=F.key;N!==null;){if(N.key===_e)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(M,N.sibling),N=d(N,F.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=jh(F,M.mode,X),N.return=M,M=N}return _(M);case Tt:return _e=F._init,lt(M,N,_e(F._payload),X)}if(Ke(F))return ue(M,N,F,X);if(me(F))return he(M,N,F,X);zl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,F),N.return=M,M=N):(a(M,N),N=Uh(F,M.mode,X),N.return=M,M=N),_(M)):a(M,N)}return lt}var Zs=mp(!0),gp=mp(!1),Bl=si(null),$l=null,eo=null,Qc=null;function Yc(){Qc=eo=$l=null}function Xc(n){var r=Bl.current;Xe(Bl),n._currentValue=r}function Jc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function to(n,r){$l=n,Qc=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Xt=!0),n.firstContext=null)}function En(n){var r=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:r,next:null},eo===null){if($l===null)throw Error(t(308));eo=n,$l.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return r}var is=null;function Zc(n){is===null?is=[n]:is.push(n)}function yp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Zc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Rr(n,c)}function Rr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var li=!1;function eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ui(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Me&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Rr(n,a)}return d=c.interleaved,d===null?(r.next=r,Zc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Rr(n,a)}function Hl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,qo(n,a)}}function vp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function ql(n,r,a,c){var d=n.updateQueue;li=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,j=R.next;R.next=null,_===null?f=j:_.next=j,_=R;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=j:T.next=j,K.lastBaseUpdate=R))}if(f!==null){var Y=d.baseState;_=0,K=j=R=null,T=f;do{var W=T.lane,se=T.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:se,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ue=n,he=T;switch(W=r,se=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){Y=ue.call(se,Y,W);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,W=typeof ue=="function"?ue.call(se,Y,W):ue,W==null)break e;Y=ie({},Y,W);break e;case 2:li=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else se={eventTime:se,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(j=K=se,R=Y):K=K.next=se,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(R=Y),d.baseState=R,d.firstBaseUpdate=j,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);as|=_,n.lanes=_,n.memoizedState=Y}}function wp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},tr=si(ha),da=si(ha),fa=si(ha);function ss(n){if(n===ha)throw Error(t(174));return n}function th(n,r){switch(Ge(fa,r),Ge(da,n),Ge(tr,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Is(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Is(r,n)}Xe(tr),Ge(tr,r)}function no(){Xe(tr),Xe(da),Xe(fa)}function Ep(n){ss(fa.current);var r=ss(tr.current),a=Is(r,n.type);r!==a&&(Ge(da,n),Ge(tr,a))}function nh(n){da.current===n&&(Xe(tr),Xe(da))}var tt=si(0);function Wl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var rh=[];function ih(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var Gl=Te.ReactCurrentDispatcher,sh=Te.ReactCurrentBatchConfig,os=0,nt=null,yt=null,St=null,Kl=!1,pa=!1,ma=0,T0=0;function Lt(){throw Error(t(321))}function oh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function ah(n,r,a,c,d,f){if(os=f,nt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Gl.current=n===null||n.memoizedState===null?C0:R0,n=a(c,d),pa){f=0;do{if(pa=!1,ma=0,25<=f)throw Error(t(301));f+=1,St=yt=null,r.updateQueue=null,Gl.current=k0,n=a(c,d)}while(pa)}if(Gl.current=Xl,r=yt!==null&&yt.next!==null,os=0,St=yt=nt=null,Kl=!1,r)throw Error(t(300));return n}function lh(){var n=ma!==0;return ma=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=n:St=St.next=n,St}function Tn(){if(yt===null){var n=nt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var r=St===null?nt.memoizedState:St.next;if(r!==null)St=r,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},St===null?nt.memoizedState=St=n:St=St.next=n}return St}function ga(n,r){return typeof r=="function"?r(n):r}function uh(n){var r=Tn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=_=null,R=null,j=f;do{var K=j.lane;if((os&K)===K)R!==null&&(R=R.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};R===null?(T=R=Y,_=c):R=R.next=Y,nt.lanes|=K,as|=K}j=j.next}while(j!==null&&j!==f);R===null?_=c:R.next=T,Nn(c,r.memoizedState)||(Xt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,nt.lanes|=f,as|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ch(n){var r=Tn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);Nn(f,r.memoizedState)||(Xt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Tp(){}function Ip(n,r){var a=nt,c=Tn(),d=r(),f=!Nn(c.memoizedState,d);if(f&&(c.memoizedState=d,Xt=!0),c=c.queue,hh(Cp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,ya(9,Ap.bind(null,a,c,d,r),void 0,null),At===null)throw Error(t(349));(os&30)!==0||Sp(a,r,d)}return d}function Sp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=nt.updateQueue,r===null?(r={lastEffect:null,stores:null},nt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ap(n,r,a,c){r.value=a,r.getSnapshot=c,Rp(r)&&kp(n)}function Cp(n,r,a){return a(function(){Rp(r)&&kp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function kp(n){var r=Rr(n,1);r!==null&&Mn(r,n,1,-1)}function Pp(n){var r=nr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=A0.bind(null,nt,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=nt.updateQueue,r===null?(r={lastEffect:null,stores:null},nt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function xp(){return Tn().memoizedState}function Ql(n,r,a,c){var d=nr();nt.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=Tn();c=c===void 0?null:c;var f=void 0;if(yt!==null){var _=yt.memoizedState;if(f=_.destroy,c!==null&&oh(c,_.deps)){d.memoizedState=ya(r,a,f,c);return}}nt.flags|=n,d.memoizedState=ya(1|r,a,f,c)}function Np(n,r){return Ql(8390656,8,n,r)}function hh(n,r){return Yl(2048,8,n,r)}function Dp(n,r){return Yl(4,2,n,r)}function Vp(n,r){return Yl(4,4,n,r)}function Op(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function bp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,Op.bind(null,r,n),a)}function dh(){}function Mp(n,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&oh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Lp(n,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&oh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Fp(n,r,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(Nn(a,r)||(a=$o(),nt.lanes|=a,as|=a,n.baseState=!0),r)}function I0(n,r){var a=Oe;Oe=a!==0&&4>a?a:4,n(!0);var c=sh.transition;sh.transition={};try{n(!1),r()}finally{Oe=a,sh.transition=c}}function Up(){return Tn().memoizedState}function S0(n,r,a){var c=fi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jp(n))zp(r,a);else if(a=yp(n,r,a,c),a!==null){var d=Gt();Mn(a,n,c,d),Bp(a,r,c)}}function A0(n,r,a){var c=fi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(n))zp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,T=f(_,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,_)){var R=r.interleaved;R===null?(d.next=d,Zc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=yp(n,r,d,c),a!==null&&(d=Gt(),Mn(a,n,c,d),Bp(a,r,c))}}function jp(n){var r=n.alternate;return n===nt||r!==null&&r===nt}function zp(n,r){pa=Kl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Bp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,qo(n,a)}}var Xl={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},C0={readContext:En,useCallback:function(n,r){return nr().memoizedState=[n,r===void 0?null:r],n},useContext:En,useEffect:Np,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,Op.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=nr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=nr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=S0.bind(null,nt,n),[c.memoizedState,n]},useRef:function(n){var r=nr();return n={current:n},r.memoizedState=n},useState:Pp,useDebugValue:dh,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=Pp(!1),r=n[0];return n=I0.bind(null,n[1]),nr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=nt,d=nr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),At===null)throw Error(t(349));(os&30)!==0||Sp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Np(Cp.bind(null,c,f,n),[n]),c.flags|=2048,ya(9,Ap.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=nr(),r=At.identifierPrefix;if(et){var a=Cr,c=Ar;a=(c&~(1<<32-an(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=T0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},R0={readContext:En,useCallback:Mp,useContext:En,useEffect:hh,useImperativeHandle:bp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Lp,useReducer:uh,useRef:xp,useState:function(){return uh(ga)},useDebugValue:dh,useDeferredValue:function(n){var r=Tn();return Fp(r,yt.memoizedState,n)},useTransition:function(){var n=uh(ga)[0],r=Tn().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1},k0={readContext:En,useCallback:Mp,useContext:En,useEffect:hh,useImperativeHandle:bp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Lp,useReducer:ch,useRef:xp,useState:function(){return ch(ga)},useDebugValue:dh,useDeferredValue:function(n){var r=Tn();return yt===null?r.memoizedState=n:Fp(r,yt.memoizedState,n)},useTransition:function(){var n=ch(ga)[0],r=Tn().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function fh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ie({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Gt(),d=fi(n),f=kr(c,d);f.payload=r,a!=null&&(f.callback=a),r=ui(n,f,d),r!==null&&(Mn(r,n,d,c),Hl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Gt(),d=fi(n),f=kr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ui(n,f,d),r!==null&&(Mn(r,n,d,c),Hl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Gt(),c=fi(n),d=kr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ui(n,d,c),r!==null&&(Mn(r,n,c,a),Hl(r,n,c))}};function $p(n,r,a,c,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,_):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,f):!0}function Hp(n,r,a){var c=!1,d=oi,f=r.contextType;return typeof f=="object"&&f!==null?f=En(f):(d=Yt(r)?ts:Mt.current,c=r.contextTypes,f=(c=c!=null)?Qs(n,d):oi),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function qp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Jl.enqueueReplaceState(r,r.state,null)}function ph(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},eh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=En(f):(f=Yt(r)?ts:Mt.current,d.context=Qs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(fh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Jl.enqueueReplaceState(d,d.state,null),ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,r){try{var a="",c=r;do a+=ne(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function mh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function gh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,r,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Nh=c),gh(n,r)},a}function Gp(n,r,a){a=kr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){gh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){gh(n,r),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Kp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new P0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=$0.bind(null,n,r,a),r.then(n,n))}function Qp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Yp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=kr(-1,1),r.tag=2,ui(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var x0=Te.ReactCurrentOwner,Xt=!1;function Wt(n,r,a,c){r.child=n===null?gp(r,null,a,c):Zs(r,n.child,a,c)}function Xp(n,r,a,c,d){a=a.render;var f=r.ref;return to(r,d),c=ah(n,r,a,c,f,d),a=lh(),n!==null&&!Xt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Pr(n,r,d)):(et&&a&&Hc(r),r.flags|=1,Wt(n,r,c,d),r.child)}function Jp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Fh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,Zp(n,r,f,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(_,c)&&n.ref===r.ref)return Pr(n,r,d)}return r.flags|=1,n=mi(f,c),n.ref=r.ref,n.return=r,r.child=n}function Zp(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ra(f,c)&&n.ref===r.ref)if(Xt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return r.lanes=n.lanes,Pr(n,r,d)}return yh(n,r,a,c,d)}function em(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(so,pn),pn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ge(so,pn),pn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ge(so,pn),pn|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,Ge(so,pn),pn|=c;return Wt(n,r,d,a),r.child}function tm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function yh(n,r,a,c,d){var f=Yt(a)?ts:Mt.current;return f=Qs(r,f),to(r,d),a=ah(n,r,a,c,f,d),c=lh(),n!==null&&!Xt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Pr(n,r,d)):(et&&c&&Hc(r),r.flags|=1,Wt(n,r,a,d),r.child)}function nm(n,r,a,c,d){if(Yt(a)){var f=!0;Ml(r)}else f=!1;if(to(r,d),r.stateNode===null)eu(n,r),Hp(r,a,c),ph(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,j=a.contextType;typeof j=="object"&&j!==null?j=En(j):(j=Yt(a)?ts:Mt.current,j=Qs(r,j));var K=a.getDerivedStateFromProps,Y=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Y||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==j)&&qp(r,_,c,j),li=!1;var W=r.memoizedState;_.state=W,ql(r,c,_,d),R=r.memoizedState,T!==c||W!==R||Qt.current||li?(typeof K=="function"&&(fh(r,a,K,c),R=r.memoizedState),(T=li||$p(r,a,T,c,W,R,j))?(Y||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=j,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,_p(n,r),T=r.memoizedProps,j=r.type===r.elementType?T:Vn(r.type,T),_.props=j,Y=r.pendingProps,W=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=En(R):(R=Yt(a)?ts:Mt.current,R=Qs(r,R));var se=a.getDerivedStateFromProps;(K=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Y||W!==R)&&qp(r,_,c,R),li=!1,W=r.memoizedState,_.state=W,ql(r,c,_,d);var ue=r.memoizedState;T!==Y||W!==ue||Qt.current||li?(typeof se=="function"&&(fh(r,a,se,c),ue=r.memoizedState),(j=li||$p(r,a,j,c,W,ue,R)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ue,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ue,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ue),_.props=c,_.state=ue,_.context=R,c=j):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return _h(n,r,a,c,f,d)}function _h(n,r,a,c,d,f){tm(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&ap(r,a,!1),Pr(n,r,f);c=r.stateNode,x0.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Zs(r,n.child,null,f),r.child=Zs(r,null,T,f)):Wt(n,r,T,f),r.memoizedState=c.state,d&&ap(r,a,!0),r.child}function rm(n){var r=n.stateNode;r.pendingContext?sp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&sp(n,r.context,!1),th(n,r.containerInfo)}function im(n,r,a,c,d){return Js(),Kc(d),r.flags|=256,Wt(n,r,a,c),r.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function wh(n){return{baseLanes:n,cachePool:null,transitions:null}}function sm(n,r,a){var c=r.pendingProps,d=tt.current,f=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(tt,d&1),n===null)return Gc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,f?(c=r.mode,f=r.child,_={mode:"hidden",children:_},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=du(_,c,0,null),n=hs(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=wh(a),r.memoizedState=vh,n):Eh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return N0(n,r,_,c,T,d,a);if(f){f=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=mi(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=mi(T,f):(f=hs(f,_,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,_=n.child.memoizedState,_=_===null?wh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~a,r.memoizedState=vh,c}return f=n.child,n=f.sibling,c=mi(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Eh(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Kc(c),Zs(r,n.child,null,a),n=Eh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function N0(n,r,a,c,d,f,_){if(a)return r.flags&256?(r.flags&=-257,c=mh(Error(t(422))),Zl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),f=hs(f,d,_,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Zs(r,n.child,null,_),r.child.memoizedState=wh(_),r.memoizedState=vh,f);if((r.mode&1)===0)return Zl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=mh(f,c,void 0),Zl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Xt||T){if(c=At,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Rr(n,d),Mn(c,n,d,-1))}return Lh(),c=mh(Error(t(421))),Zl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=H0.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,fn=ii(d.nextSibling),dn=r,et=!0,Dn=null,n!==null&&(vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=ns,Ar=n.id,Cr=n.overflow,ns=r),r=Eh(r,c.children),r.flags|=4096,r)}function om(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Jc(n.return,r,a)}function Th(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function am(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(Wt(n,r,c.children,a),c=tt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&om(n,a,r);else if(n.tag===19)om(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(tt,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Th(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Th(r,!0,a,null,f);break;case"together":Th(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),as|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=mi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=mi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function D0(n,r,a){switch(r.tag){case 3:rm(r),Js();break;case 5:Ep(r);break;case 1:Yt(r.type)&&Ml(r);break;case 4:th(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ge(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ge(tt,tt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?sm(n,r,a):(Ge(tt,tt.current&1),n=Pr(n,r,a),n!==null?n.sibling:null);Ge(tt,tt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return am(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),c)break;return null;case 22:case 23:return r.lanes=0,em(n,r,a)}return Pr(n,r,a)}var lm,Ih,um,cm;lm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ih=function(){},um=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,ss(tr.current);var f=null;switch(a){case"input":d=gt(n,d),c=gt(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=zr(n,d),c=zr(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vl)}kn(a,c);var _;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var T=d[j];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?f||(f=[]):(f=f||[]).push(j,null));for(j in c){var R=c[j];if(T=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&R!==T&&(R!=null||T!=null))if(j==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(f||(f=[]),f.push(j,a)),a=R;else j==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(f=f||[]).push(j,R)):j==="children"?typeof R!="string"&&typeof R!="number"||(f=f||[]).push(j,""+R):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(R!=null&&j==="onScroll"&&Ye("scroll",n),f||T===R||(f=[])):(f=f||[]).push(j,R))}a&&(f=f||[]).push("style",a);var j=f;(r.updateQueue=j)&&(r.flags|=4)}},cm=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!et)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function V0(n,r,a){var c=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(r),null;case 1:return Yt(r.type)&&bl(),Ft(r),null;case 3:return c=r.stateNode,no(),Xe(Qt),Xe(Mt),ih(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Oh(Dn),Dn=null))),Ih(n,r),Ft(r),null;case 5:nh(r);var d=ss(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)um(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ft(r),null}if(n=ss(tr.current),jl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[er]=r,c[la]=f,n=(r.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)Ye(sa[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":Ui(c,f),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ye("invalid",c);break;case"textarea":qt(c,f),Ye("invalid",c)}kn(a,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var T=f[_];_==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Ye("scroll",c)}switch(a){case"input":rn(c),gn(c,f,!0);break;case"textarea":rn(c),Br(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Vl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[er]=r,n[la]=c,lm(n,r,!1,!1),r.stateNode=n;e:{switch(_=As(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)Ye(sa[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":Ui(n,c),d=gt(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":qt(n,c),d=zr(n,c),Ye("invalid",n);break;default:d=c}kn(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var R=T[f];f==="style"?Ss(n,R):f==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ol(n,R)):f==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&ji(n,R):typeof R=="number"&&ji(n,""+R):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?R!=null&&f==="onScroll"&&Ye("scroll",n):R!=null&&Ae(n,f,R,_))}switch(a){case"input":rn(n),gn(n,c,!1);break;case"textarea":rn(n),Br(n);break;case"option":c.value!=null&&n.setAttribute("value",""+le(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?ht(n,!!c.multiple,f,!1):c.defaultValue!=null&&ht(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ft(r),null;case 6:if(n&&r.stateNode!=null)cm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=ss(fa.current),ss(tr.current),jl(r)){if(c=r.stateNode,a=r.memoizedProps,c[er]=r,(f=c.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:Dl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Dl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=r,r.stateNode=c}return Ft(r),null;case 13:if(Xe(tt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(et&&fn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)fp(),Js(),r.flags|=98560,f=!1;else if(f=jl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[er]=r}else Js(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ft(r),f=!1}else Dn!==null&&(Oh(Dn),Dn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tt.current&1)!==0?_t===0&&(_t=3):Lh())),r.updateQueue!==null&&(r.flags|=4),Ft(r),null);case 4:return no(),Ih(n,r),n===null&&oa(r.stateNode.containerInfo),Ft(r),null;case 10:return Xc(r.type._context),Ft(r),null;case 17:return Yt(r.type)&&bl(),Ft(r),null;case 19:if(Xe(tt),f=r.memoizedState,f===null)return Ft(r),null;if(c=(r.flags&128)!==0,_=f.rendering,_===null)if(c)_a(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Wl(n),_!==null){for(r.flags|=128,_a(f,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(tt,tt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Qe()>oo&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304)}else{if(!c)if(n=Wl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!et)return Ft(r),null}else 2*Qe()-f.renderingStartTime>oo&&a!==1073741824&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(a=f.last,a!==null?a.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Qe(),r.sibling=null,a=tt.current,Ge(tt,c?a&1|2:a&1),r):(Ft(r),null);case 22:case 23:return Mh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(pn&1073741824)!==0&&(Ft(r),r.subtreeFlags&6&&(r.flags|=8192)):Ft(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function O0(n,r){switch(qc(r),r.tag){case 1:return Yt(r.type)&&bl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return no(),Xe(Qt),Xe(Mt),ih(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return nh(r),null;case 13:if(Xe(tt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Js()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Xe(tt),null;case 4:return no(),null;case 10:return Xc(r.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var tu=!1,Ut=!1,b0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function io(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){st(n,r,c)}else a.current=null}function Sh(n,r,a){try{a()}catch(c){st(n,r,c)}}var hm=!1;function M0(n,r){if(Mc=wr,n=$f(),kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,j=0,K=0,Y=n,W=null;t:for(;;){for(var se;Y!==a||d!==0&&Y.nodeType!==3||(T=_+d),Y!==f||c!==0&&Y.nodeType!==3||(R=_+c),Y.nodeType===3&&(_+=Y.nodeValue.length),(se=Y.firstChild)!==null;)W=Y,Y=se;for(;;){if(Y===n)break t;if(W===a&&++j===d&&(T=_),W===f&&++K===c&&(R=_),(se=Y.nextSibling)!==null)break;Y=W,W=Y.parentNode}Y=se}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:n,selectionRange:a},wr=!1,ae=r;ae!==null;)if(r=ae,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ae=n;else for(;ae!==null;){r=ae;try{var ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,lt=ue.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?he:Vn(r.type,he),lt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){st(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ae=n;break}ae=r.return}return ue=hm,hm=!1,ue}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Sh(r,a,f)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ah(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function dm(n){var r=n.alternate;r!==null&&(n.alternate=null,dm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[er],delete r[la],delete r[zc],delete r[_0],delete r[v0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fm(n){return n.tag===5||n.tag===3||n.tag===4}function pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Vl));else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}function Rh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rh(n,r,a),n=n.sibling;n!==null;)Rh(n,r,a),n=n.sibling}var xt=null,On=!1;function ci(n,r,a){for(a=a.child;a!==null;)mm(n,r,a),a=a.sibling}function mm(n,r,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 5:Ut||io(a,r);case 6:var c=xt,d=On;xt=null,ci(n,r,a),xt=c,On=d,xt!==null&&(On?(n=xt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xt.removeChild(a.stateNode));break;case 18:xt!==null&&(On?(n=xt,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),ei(n)):jc(xt,a.stateNode));break;case 4:c=xt,d=On,xt=a.stateNode.containerInfo,On=!0,ci(n,r,a),xt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&Sh(a,r,_),d=d.next}while(d!==c)}ci(n,r,a);break;case 1:if(!Ut&&(io(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){st(a,r,T)}ci(n,r,a);break;case 21:ci(n,r,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ci(n,r,a),Ut=c):ci(n,r,a);break;default:ci(n,r,a)}}function gm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new b0),r.forEach(function(c){var d=q0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function bn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:xt=T.stateNode,On=!1;break e;case 3:xt=T.stateNode.containerInfo,On=!0;break e;case 4:xt=T.stateNode.containerInfo,On=!0;break e}T=T.return}if(xt===null)throw Error(t(160));mm(f,_,d),xt=null,On=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(j){st(d,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ym(r,n),r=r.sibling}function ym(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(r,n),rr(n),c&4){try{va(3,n,n.return),nu(3,n)}catch(he){st(n,n.return,he)}try{va(5,n,n.return)}catch(he){st(n,n.return,he)}}break;case 1:bn(r,n),rr(n),c&512&&a!==null&&io(a,a.return);break;case 5:if(bn(r,n),rr(n),c&512&&a!==null&&io(a,a.return),n.flags&32){var d=n.stateNode;try{ji(d,"")}catch(he){st(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=a!==null?a.memoizedProps:f,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&Un(d,f),As(T,_);var j=As(T,f);for(_=0;_<R.length;_+=2){var K=R[_],Y=R[_+1];K==="style"?Ss(d,Y):K==="dangerouslySetInnerHTML"?ol(d,Y):K==="children"?ji(d,Y):Ae(d,K,Y,j)}switch(T){case"input":Rn(d,f);break;case"textarea":sl(d,f);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var se=f.value;se!=null?ht(d,!!f.multiple,se,!1):W!==!!f.multiple&&(f.defaultValue!=null?ht(d,!!f.multiple,f.defaultValue,!0):ht(d,!!f.multiple,f.multiple?[]:"",!1))}d[la]=f}catch(he){st(n,n.return,he)}}break;case 6:if(bn(r,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(he){st(n,n.return,he)}}break;case 3:if(bn(r,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ei(r.containerInfo)}catch(he){st(n,n.return,he)}break;case 4:bn(r,n),rr(n);break;case 13:bn(r,n),rr(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(xh=Qe())),c&4&&gm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(j=Ut)||K,bn(r,n),Ut=j):bn(r,n),rr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!K&&(n.mode&1)!==0)for(ae=n,K=n.child;K!==null;){for(Y=ae=K;ae!==null;){switch(W=ae,se=W.child,W.tag){case 0:case 11:case 14:case 15:va(4,W,W.return);break;case 1:io(W,W.return);var ue=W.stateNode;if(typeof ue.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ue.props=r.memoizedProps,ue.state=r.memoizedState,ue.componentWillUnmount()}catch(he){st(c,a,he)}}break;case 5:io(W,W.return);break;case 22:if(W.memoizedState!==null){wm(Y);continue}}se!==null?(se.return=W,ae=se):wm(Y)}K=K.sibling}e:for(K=null,Y=n;;){if(Y.tag===5){if(K===null){K=Y;try{d=Y.stateNode,j?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=Y.stateNode,R=Y.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=qr("display",_))}catch(he){st(n,n.return,he)}}}else if(Y.tag===6){if(K===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(he){st(n,n.return,he)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;K===Y&&(K=null),Y=Y.return}K===Y&&(K=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:bn(r,n),rr(n),c&4&&gm(n);break;case 21:break;default:bn(r,n),rr(n)}}function rr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(fm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ji(d,""),c.flags&=-33);var f=pm(n);Rh(n,f,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=pm(n);Ch(n,T,_);break;default:throw Error(t(161))}}catch(R){st(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function L0(n,r,a){ae=n,_m(n)}function _m(n,r,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,f=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||tu;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ut;T=tu;var j=Ut;if(tu=_,(Ut=R)&&!j)for(ae=d;ae!==null;)_=ae,R=_.child,_.tag===22&&_.memoizedState!==null?Em(d):R!==null?(R.return=_,ae=R):Em(d);for(;f!==null;)ae=f,_m(f),f=f.sibling;ae=d,tu=T,Ut=j}vm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ae=f):vm(n)}}function vm(n){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ut||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&wp(r,f,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}wp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Y=K.dehydrated;Y!==null&&ei(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||r.flags&512&&Ah(r)}catch(W){st(r,r.return,W)}}if(r===n){ae=null;break}if(a=r.sibling,a!==null){a.return=r.return,ae=a;break}ae=r.return}}function wm(n){for(;ae!==null;){var r=ae;if(r===n){ae=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ae=a;break}ae=r.return}}function Em(n){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(R){st(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){st(r,d,R)}}var f=r.return;try{Ah(r)}catch(R){st(r,f,R)}break;case 5:var _=r.return;try{Ah(r)}catch(R){st(r,_,R)}}}catch(R){st(r,r.return,R)}if(r===n){ae=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ae=T;break}ae=r.return}}var F0=Math.ceil,ru=Te.ReactCurrentDispatcher,kh=Te.ReactCurrentOwner,In=Te.ReactCurrentBatchConfig,Me=0,At=null,ft=null,Nt=0,pn=0,so=si(0),_t=0,wa=null,as=0,iu=0,Ph=0,Ea=null,Jt=null,xh=0,oo=1/0,xr=null,su=!1,Nh=null,hi=null,ou=!1,di=null,au=0,Ta=0,Dh=null,lu=-1,uu=0;function Gt(){return(Me&6)!==0?Qe():lu!==-1?lu:lu=Qe()}function fi(n){return(n.mode&1)===0?1:(Me&2)!==0&&Nt!==0?Nt&-Nt:E0.transition!==null?(uu===0&&(uu=$o()),uu):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:bs(n.type)),n)}function Mn(n,r,a,c){if(50<Ta)throw Ta=0,Dh=null,Error(t(185));Qi(n,a,c),((Me&2)===0||n!==At)&&(n===At&&((Me&2)===0&&(iu|=a),_t===4&&pi(n,Nt)),Zt(n,c),a===1&&Me===0&&(r.mode&1)===0&&(oo=Qe()+500,Ll&&ai()))}function Zt(n,r){var a=n.callbackNode;Ki(n,r);var c=yr(n,n===At?Nt:0);if(c===0)a!==null&&ks(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&ks(a),r===1)n.tag===0?w0(Im.bind(null,n)):lp(Im.bind(null,n)),g0(function(){(Me&6)===0&&ai()}),a=null;else{switch(Hn(c)){case 1:a=Ps;break;case 4:a=jo;break;case 16:a=Hi;break;case 536870912:a=xs;break;default:a=Hi}a=Nm(a,Tm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Tm(n,r){if(lu=-1,uu=0,(Me&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ao()&&n.callbackNode!==a)return null;var c=yr(n,n===At?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=Me;Me|=2;var f=Am();(At!==n||Nt!==r)&&(xr=null,oo=Qe()+500,us(n,r));do try{z0();break}catch(T){Sm(n,T)}while(!0);Yc(),ru.current=f,Me=d,ft!==null?r=0:(At=null,Nt=0,r=_t)}if(r!==0){if(r===2&&(d=Bo(n),d!==0&&(c=d,r=Vh(n,d))),r===1)throw a=wa,us(n,0),pi(n,c),Zt(n,Qe()),a;if(r===6)pi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!U0(d)&&(r=cu(n,c),r===2&&(f=Bo(n),f!==0&&(c=f,r=Vh(n,f))),r===1))throw a=wa,us(n,0),pi(n,c),Zt(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:cs(n,Jt,xr);break;case 3:if(pi(n,c),(c&130023424)===c&&(r=xh+500-Qe(),10<r)){if(yr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(cs.bind(null,n,Jt,xr),r);break}cs(n,Jt,xr);break;case 4:if(pi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-an(c);f=1<<_,_=r[_],_>d&&(d=_),c&=~f}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*F0(c/1960))-c,10<c){n.timeoutHandle=Uc(cs.bind(null,n,Jt,xr),c);break}cs(n,Jt,xr);break;case 5:cs(n,Jt,xr);break;default:throw Error(t(329))}}}return Zt(n,Qe()),n.callbackNode===a?Tm.bind(null,n):null}function Vh(n,r){var a=Ea;return n.current.memoizedState.isDehydrated&&(us(n,r).flags|=256),n=cu(n,r),n!==2&&(r=Jt,Jt=a,r!==null&&Oh(r)),n}function Oh(n){Jt===null?Jt=n:Jt.push.apply(Jt,n)}function U0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Nn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pi(n,r){for(r&=~Ph,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-an(r),c=1<<a;n[a]=-1,r&=~c}}function Im(n){if((Me&6)!==0)throw Error(t(327));ao();var r=yr(n,0);if((r&1)===0)return Zt(n,Qe()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=Bo(n);c!==0&&(r=c,a=Vh(n,c))}if(a===1)throw a=wa,us(n,0),pi(n,r),Zt(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,cs(n,Jt,xr),Zt(n,Qe()),null}function bh(n,r){var a=Me;Me|=1;try{return n(r)}finally{Me=a,Me===0&&(oo=Qe()+500,Ll&&ai())}}function ls(n){di!==null&&di.tag===0&&(Me&6)===0&&ao();var r=Me;Me|=1;var a=In.transition,c=Oe;try{if(In.transition=null,Oe=1,n)return n()}finally{Oe=c,In.transition=a,Me=r,(Me&6)===0&&ai()}}function Mh(){pn=so.current,Xe(so)}function us(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,m0(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bl();break;case 3:no(),Xe(Qt),Xe(Mt),ih();break;case 5:nh(c);break;case 4:no();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:Xc(c.type._context);break;case 22:case 23:Mh()}a=a.return}if(At=n,ft=n=mi(n.current,null),Nt=pn=r,_t=0,wa=null,Ph=iu=as=0,Jt=Ea=null,is!==null){for(r=0;r<is.length;r++)if(a=is[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var _=f.next;f.next=d,c.next=_}a.pending=c}is=null}return n}function Sm(n,r){do{var a=ft;try{if(Yc(),Gl.current=Xl,Kl){for(var c=nt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Kl=!1}if(os=0,St=yt=nt=null,pa=!1,ma=0,kh.current=null,a===null||a.return===null){_t=1,wa=r,ft=null;break}e:{var f=n,_=a.return,T=a,R=r;if(r=Nt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var j=R,K=T,Y=K.tag;if((K.mode&1)===0&&(Y===0||Y===11||Y===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var se=Qp(_);if(se!==null){se.flags&=-257,Yp(se,_,T,f,r),se.mode&1&&Kp(f,j,r),r=se,R=j;var ue=r.updateQueue;if(ue===null){var he=new Set;he.add(R),r.updateQueue=he}else ue.add(R);break e}else{if((r&1)===0){Kp(f,j,r),Lh();break e}R=Error(t(426))}}else if(et&&T.mode&1){var lt=Qp(_);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),Yp(lt,_,T,f,r),Kc(ro(R,T));break e}}f=R=ro(R,T),_t!==4&&(_t=2),Ea===null?Ea=[f]:Ea.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var M=Wp(f,R,r);vp(f,M);break e;case 1:T=R;var N=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(hi===null||!hi.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=Gp(f,T,r);vp(f,X);break e}}f=f.return}while(f!==null)}Rm(a)}catch(de){r=de,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function Am(){var n=ru.current;return ru.current=Xl,n===null?Xl:n}function Lh(){(_t===0||_t===3||_t===2)&&(_t=4),At===null||(as&268435455)===0&&(iu&268435455)===0||pi(At,Nt)}function cu(n,r){var a=Me;Me|=2;var c=Am();(At!==n||Nt!==r)&&(xr=null,us(n,r));do try{j0();break}catch(d){Sm(n,d)}while(!0);if(Yc(),Me=a,ru.current=c,ft!==null)throw Error(t(261));return At=null,Nt=0,_t}function j0(){for(;ft!==null;)Cm(ft)}function z0(){for(;ft!==null&&!$i();)Cm(ft)}function Cm(n){var r=xm(n.alternate,n,pn);n.memoizedProps=n.pendingProps,r===null?Rm(n):ft=r,kh.current=null}function Rm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=V0(a,r,pn),a!==null){ft=a;return}}else{if(a=O0(a,r),a!==null){a.flags&=32767,ft=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ft=null;return}}if(r=r.sibling,r!==null){ft=r;return}ft=r=n}while(r!==null);_t===0&&(_t=5)}function cs(n,r,a){var c=Oe,d=In.transition;try{In.transition=null,Oe=1,B0(n,r,a,c)}finally{In.transition=d,Oe=c}return null}function B0(n,r,a,c){do ao();while(di!==null);if((Me&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Ic(n,f),n===At&&(ft=At=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,Nm(Hi,function(){return ao(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=In.transition,In.transition=null;var _=Oe;Oe=1;var T=Me;Me|=4,kh.current=null,M0(n,a),ym(a,n),l0(Lc),wr=!!Mc,Lc=Mc=null,n.current=a,L0(a),gr(),Me=T,Oe=_,In.transition=f}else n.current=a;if(ou&&(ou=!1,di=n,au=d),f=n.pendingLanes,f===0&&(hi=null),yl(a.stateNode),Zt(n,Qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Nh,Nh=null,n;return(au&1)!==0&&n.tag!==0&&ao(),f=n.pendingLanes,(f&1)!==0?n===Dh?Ta++:(Ta=0,Dh=n):Ta=0,ai(),null}function ao(){if(di!==null){var n=Hn(au),r=In.transition,a=Oe;try{if(In.transition=null,Oe=16>n?16:n,di===null)var c=!1;else{if(n=di,di=null,au=0,(Me&6)!==0)throw Error(t(331));var d=Me;for(Me|=4,ae=n.current;ae!==null;){var f=ae,_=f.child;if((ae.flags&16)!==0){var T=f.deletions;if(T!==null){for(var R=0;R<T.length;R++){var j=T[R];for(ae=j;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:va(8,K,f)}var Y=K.child;if(Y!==null)Y.return=K,ae=Y;else for(;ae!==null;){K=ae;var W=K.sibling,se=K.return;if(dm(K),K===j){ae=null;break}if(W!==null){W.return=se,ae=W;break}ae=se}}}var ue=f.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var lt=he.sibling;he.sibling=null,he=lt}while(he!==null)}}ae=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,ae=_;else e:for(;ae!==null;){if(f=ae,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:va(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,ae=M;break e}ae=f.return}}var N=n.current;for(ae=N;ae!==null;){_=ae;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ae=F;else e:for(_=N;ae!==null;){if(T=ae,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:nu(9,T)}}catch(de){st(T,T.return,de)}if(T===_){ae=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,ae=X;break e}ae=T.return}}if(Me=d,ai(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(qi,n)}catch{}c=!0}return c}finally{Oe=a,In.transition=r}}return!1}function km(n,r,a){r=ro(a,r),r=Wp(n,r,1),n=ui(n,r,1),r=Gt(),n!==null&&(Qi(n,1,r),Zt(n,r))}function st(n,r,a){if(n.tag===3)km(n,n,a);else for(;r!==null;){if(r.tag===3){km(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hi===null||!hi.has(c))){n=ro(a,n),n=Gp(r,n,1),r=ui(r,n,1),n=Gt(),r!==null&&(Qi(r,1,n),Zt(r,n));break}}r=r.return}}function $0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Gt(),n.pingedLanes|=n.suspendedLanes&a,At===n&&(Nt&a)===a&&(_t===4||_t===3&&(Nt&130023424)===Nt&&500>Qe()-xh?us(n,0):Ph|=a),Zt(n,r)}function Pm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var a=Gt();n=Rr(n,r),n!==null&&(Qi(n,r,a),Zt(n,a))}function H0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Pm(n,a)}function q0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Pm(n,a)}var xm;xm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Qt.current)Xt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Xt=!1,D0(n,r,a);Xt=(n.flags&131072)!==0}else Xt=!1,et&&(r.flags&1048576)!==0&&up(r,Ul,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=Qs(r,Mt.current);to(r,a),d=ah(null,r,c,n,d,a);var f=lh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yt(c)?(f=!0,Ml(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,eh(r),d.updater=Jl,r.stateNode=d,d._reactInternals=r,ph(r,c,n,a),r=_h(null,r,c,!0,f,a)):(r.tag=0,et&&f&&Hc(r),Wt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=G0(c),n=Vn(c,n),d){case 0:r=yh(null,r,c,n,a);break e;case 1:r=nm(null,r,c,n,a);break e;case 11:r=Xp(null,r,c,n,a);break e;case 14:r=Jp(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),yh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),nm(n,r,c,d,a);case 3:e:{if(rm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,_p(n,r),ql(r,c,null,a);var _=r.memoizedState;if(c=_.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=ro(Error(t(423)),r),r=im(n,r,c,a,d);break e}else if(c!==d){d=ro(Error(t(424)),r),r=im(n,r,c,a,d);break e}else for(fn=ii(r.stateNode.containerInfo.firstChild),dn=r,et=!0,Dn=null,a=gp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),c===d){r=Pr(n,r,a);break e}Wt(n,r,c,a)}r=r.child}return r;case 5:return Ep(r),n===null&&Gc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Fc(c,d)?_=null:f!==null&&Fc(c,f)&&(r.flags|=32),tm(n,r),Wt(n,r,_,a),r.child;case 6:return n===null&&Gc(r),null;case 13:return sm(n,r,a);case 4:return th(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Zs(r,null,c,a):Wt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Xp(n,r,c,d,a);case 7:return Wt(n,r,r.pendingProps,a),r.child;case 8:return Wt(n,r,r.pendingProps.children,a),r.child;case 12:return Wt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,Ge(Bl,c._currentValue),c._currentValue=_,f!==null)if(Nn(f.value,_)){if(f.children===d.children&&!Qt.current){r=Pr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){_=f.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(f.tag===1){R=kr(-1,a&-a),R.tag=2;var j=f.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?R.next=R:(R.next=K.next,K.next=R),j.pending=R}}f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Jc(f.return,a,r),T.lanes|=a;break}R=R.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Jc(_,a,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}Wt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,to(r,a),d=En(d),c=c(d),r.flags|=1,Wt(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),Jp(n,r,c,d,a);case 15:return Zp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),eu(n,r),r.tag=1,Yt(c)?(n=!0,Ml(r)):n=!1,to(r,a),Hp(r,c,d),ph(r,c,d,a),_h(null,r,c,!0,n,a);case 19:return am(n,r,a);case 22:return em(n,r,a)}throw Error(t(156,r.tag))};function Nm(n,r){return Uo(n,r)}function W0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,r,a,c){return new W0(n,r,a,c)}function Fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G0(n){if(typeof n=="function")return Fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===ct)return 14}return 2}function mi(n,r){var a=n.alternate;return a===null?(a=Sn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,f){var _=2;if(c=n,typeof n=="function")Fh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return hs(a.children,d,f,r);case I:_=8,d|=8;break;case C:return n=Sn(12,a,r,d|2),n.elementType=C,n.lanes=f,n;case A:return n=Sn(13,a,r,d),n.elementType=A,n.lanes=f,n;case Be:return n=Sn(19,a,r,d),n.elementType=Be,n.lanes=f,n;case qe:return du(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:_=10;break e;case P:_=9;break e;case O:_=11;break e;case ct:_=14;break e;case Tt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Sn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function hs(n,r,a,c){return n=Sn(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=Sn(22,n,c,r),n.elementType=qe,n.lanes=a,n.stateNode={isHidden:!1},n}function Uh(n,r,a){return n=Sn(6,n,null,r),n.lanes=a,n}function jh(n,r,a){return r=Sn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function K0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zh(n,r,a,c,d,f,_,T,R){return n=new K0(n,r,a,T,R),r===1?(r=1,f===!0&&(r|=8)):r=0,f=Sn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(f),n}function Q0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Dm(n){if(!n)return oi;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yt(a))return op(n,a,r)}return r}function Vm(n,r,a,c,d,f,_,T,R){return n=zh(a,c,!0,n,d,f,_,T,R),n.context=Dm(null),a=n.current,c=Gt(),d=fi(a),f=kr(c,d),f.callback=r??null,ui(a,f,d),n.current.lanes=d,Qi(n,d,c),Zt(n,c),n}function fu(n,r,a,c){var d=r.current,f=Gt(),_=fi(d);return a=Dm(a),r.context===null?r.context=a:r.pendingContext=a,r=kr(f,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ui(d,r,_),n!==null&&(Mn(n,d,_,f),Hl(n,d,_)),_}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Bh(n,r){Om(n,r),(n=n.alternate)&&Om(n,r)}function Y0(){return null}var bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $h(n){this._internalRoot=n}mu.prototype.render=$h.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=$h.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ls(function(){fu(null,n,null,null)}),r[Ir]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ko();n={blockedOn:null,target:n,priority:r};for(var a=0;a<ln.length&&r!==0&&r<ln[a].priority;a++);ln.splice(a,0,n),a===0&&Vs(n)}};function Hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function X0(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var j=pu(_);f.call(j)}}var _=Vm(r,c,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=_,n[Ir]=_.current,oa(n.nodeType===8?n.parentNode:n),ls(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var j=pu(R);T.call(j)}}var R=zh(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=R,n[Ir]=R.current,oa(n.nodeType===8?n.parentNode:n),ls(function(){fu(r,R,a,c)}),R}function yu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var T=d;d=function(){var R=pu(_);T.call(R)}}fu(r,_,n,d)}else _=X0(a,r,n,d,c);return pu(_)}Wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fe(r.pendingLanes);a!==0&&(qo(r,a|1),Zt(r,Qe()),(Me&6)===0&&(oo=Qe()+500,ai()))}break;case 13:ls(function(){var c=Rr(n,1);if(c!==null){var d=Gt();Mn(c,n,1,d)}}),Bh(n,1)}},Ns=function(n){if(n.tag===13){var r=Rr(n,134217728);if(r!==null){var a=Gt();Mn(r,n,134217728,a)}Bh(n,134217728)}},Go=function(n){if(n.tag===13){var r=fi(n),a=Rr(n,r);if(a!==null){var c=Gt();Mn(a,n,r,c)}Bh(n,r)}},Ko=function(){return Oe},Qo=function(n,r){var a=Oe;try{return Oe=n,r()}finally{Oe=a}},fr=function(n,r,a){switch(r){case"input":if(Rn(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ol(c);if(!d)throw Error(t(90));sn(c),Rn(c,d)}}}break;case"textarea":sl(n,a);break;case"select":r=a.value,r!=null&&ht(n,!!a.multiple,r,!1)}},ll=bh,ul=ls;var J0={usingClientEntryPoint:!1,Events:[ua,Gs,Ol,Gr,Kr,bh]},Ia={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{qi=_u.inject(Z0),on=_u}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0,en.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(r))throw Error(t(200));return Q0(n,r,null,a)},en.createRoot=function(n,r){if(!Hh(n))throw Error(t(299));var a=!1,c="",d=bm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=zh(n,1,!1,null,null,a,!1,c,d),n[Ir]=r.current,oa(n.nodeType===8?n.parentNode:n),new $h(r)},en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gl(r),n=n===null?null:n.stateNode,n},en.flushSync=function(n){return ls(n)},en.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},en.hydrateRoot=function(n,r,a){if(!Hh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",_=bm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Vm(r,null,n,1,a??null,d,!1,f,_),n[Ir]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},en.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},en.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},en.unstable_batchedUpdates=bh,en.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Hm;function aw(){if(Hm)return Gh.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Gh.exports=ow(),Gh.exports}var qm;function lw(){if(qm)return vu;qm=1;var i=aw();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var uw=lw();const cw=()=>{};var Wm={};/**
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
 */const Ry=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},hw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ky={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let x=(m&15)<<2|v>>6,B=v&63;y||(B=64,h||(x=64)),s.push(t[E],t[S],t[x],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ry(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):hw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||S==null)throw new dw;const x=u<<2|m>>4;if(s.push(x),v!==64){const B=m<<4&240|v>>2;if(s.push(B),S!==64){const Z=v<<6&192|S;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fw=function(i){const e=Ry(i);return ky.encodeByteArray(e,!0)},Fu=function(i){return fw(i).replace(/\./g,"")},Py=function(i){try{return ky.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mw=()=>pw().__FIREBASE_DEFAULTS__,gw=()=>{if(typeof process>"u"||typeof Wm>"u")return;const i=Wm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},yw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Py(i[1]);return e&&JSON.parse(e)},nc=()=>{try{return cw()||mw()||gw()||yw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},xy=i=>{var e,t;return(t=(e=nc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},_w=i=>{const e=xy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ny=()=>{var i;return(i=nc())==null?void 0:i.config},Dy=i=>{var e;return(e=nc())==null?void 0:e[`_${i}`]};/**
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
 */class vw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ro(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function ww(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Fu(JSON.stringify(t)),Fu(JSON.stringify(h)),""].join(".")}const xa={};function Ew(){const i={prod:[],emulator:[]};for(const e of Object.keys(xa))xa[e]?i.emulator.push(e):i.prod.push(e);return i}function Tw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Gm=!1;function Oy(i,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||xa[i]===e||xa[i]||Gm)return;xa[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=Ew().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function y(x,B){x.setAttribute("width","24"),x.setAttribute("id",B),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function v(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Gm=!0,h()},x}function E(x,B){x.setAttribute("id",B),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function S(){const x=Tw(s),B=t("text"),Z=document.getElementById(B)||document.createElement("span"),J=t("learnmore"),H=document.getElementById(J)||document.createElement("a"),ye=t("preprendIcon"),we=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Ae=x.element;m(Ae),E(H,J);const Te=v();y(we,ye),Ae.append(we,Z,H,Te),document.body.appendChild(Ae)}u?(Z.innerText="Preview backend disconnected.",we.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(we.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Sw(){var e;const i=(e=nc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Aw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Rw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kw(){const i=$t();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Pw(){return!Sw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Dw="FirebaseError";class jr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Dw,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Vw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new jr(o,m,s)}}function Vw(i,e){return i.replace(Ow,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Ow=/\{\$([^}]+)}/g;function bw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function gs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Km(u)&&Km(h)){if(!gs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Km(i){return i!==null&&typeof i=="object"}/**
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
 */function Ga(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mw(i,e){const t=new Lw(i,e);return t.subscribe.bind(t)}class Lw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Fw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Yh),o.error===void 0&&(o.error=Yh),o.complete===void 0&&(o.complete=Yh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Yh(){}/**
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
 */function Ht(i){return i&&i._delegate?i._delegate:i}class ys{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class Uw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zw(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(i){return i===ds?void 0:i}function zw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Bw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const $w={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},Hw=Ne.INFO,qw={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},Ww=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=qw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=Hw,this._logHandler=Ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const Gw=(i,e)=>e.some(t=>i instanceof t);let Qm,Ym;function Kw(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qw(){return Ym||(Ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const by=new WeakMap,dd=new WeakMap,My=new WeakMap,Xh=new WeakMap,Ud=new WeakMap;function Yw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Ai(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&by.set(t,i)}).catch(()=>{}),Ud.set(e,i),e}function Xw(i){if(dd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});dd.set(i,e)}let fd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return dd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||My.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Jw(i){fd=i(fd)}function Zw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Jh(this),e,...t);return My.set(s,e.sort?e.sort():[e]),Ai(s)}:Qw().includes(i)?function(...e){return i.apply(Jh(this),e),Ai(by.get(this))}:function(...e){return Ai(i.apply(Jh(this),e))}}function eE(i){return typeof i=="function"?Zw(i):(i instanceof IDBTransaction&&Xw(i),Gw(i,Kw())?new Proxy(i,fd):i)}function Ai(i){if(i instanceof IDBRequest)return Yw(i);if(Xh.has(i))return Xh.get(i);const e=eE(i);return e!==i&&(Xh.set(i,e),Ud.set(e,i)),e}const Jh=i=>Ud.get(i);function tE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Ai(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Ai(h.result),y.oldVersion,y.newVersion,Ai(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const nE=["get","getKey","getAll","getAllKeys","count"],rE=["put","add","delete","clear"],Zh=new Map;function Xm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=rE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||nE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Zh.set(e,u),u}Jw(i=>({...i,get:(e,t,s)=>Xm(e,t)||i.get(e,t,s),has:(e,t)=>!!Xm(e,t)||i.has(e,t)}));/**
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
 */class iE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function sE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",Jm="0.14.6";/**
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
 */const Or=new Fd("@firebase/app"),oE="@firebase/app-compat",aE="@firebase/analytics-compat",lE="@firebase/analytics",uE="@firebase/app-check-compat",cE="@firebase/app-check",hE="@firebase/auth",dE="@firebase/auth-compat",fE="@firebase/database",pE="@firebase/data-connect",mE="@firebase/database-compat",gE="@firebase/functions",yE="@firebase/functions-compat",_E="@firebase/installations",vE="@firebase/installations-compat",wE="@firebase/messaging",EE="@firebase/messaging-compat",TE="@firebase/performance",IE="@firebase/performance-compat",SE="@firebase/remote-config",AE="@firebase/remote-config-compat",CE="@firebase/storage",RE="@firebase/storage-compat",kE="@firebase/firestore",PE="@firebase/ai",xE="@firebase/firestore-compat",NE="firebase",DE="12.6.0";/**
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
 */const md="[DEFAULT]",VE={[pd]:"fire-core",[oE]:"fire-core-compat",[lE]:"fire-analytics",[aE]:"fire-analytics-compat",[cE]:"fire-app-check",[uE]:"fire-app-check-compat",[hE]:"fire-auth",[dE]:"fire-auth-compat",[fE]:"fire-rtdb",[pE]:"fire-data-connect",[mE]:"fire-rtdb-compat",[gE]:"fire-fn",[yE]:"fire-fn-compat",[_E]:"fire-iid",[vE]:"fire-iid-compat",[wE]:"fire-fcm",[EE]:"fire-fcm-compat",[TE]:"fire-perf",[IE]:"fire-perf-compat",[SE]:"fire-rc",[AE]:"fire-rc-compat",[CE]:"fire-gcs",[RE]:"fire-gcs-compat",[kE]:"fire-fst",[xE]:"fire-fst-compat",[PE]:"fire-vertex","fire-js":"fire-js",[NE]:"fire-js-all"};/**
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
 */const Uu=new Map,OE=new Map,gd=new Map;function Zm(i,e){try{i.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function vo(i){const e=i.name;if(gd.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,i);for(const t of Uu.values())Zm(t,i);for(const t of OE.values())Zm(t,i);return!0}function jd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function An(i){return i==null?!1:i.settings!==void 0}/**
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
 */const bE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new Wa("app","Firebase",bE);/**
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
 */class ME{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
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
 */const ko=DE;function Ly(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:md,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=Ny()),!t)throw Ci.create("no-options");const u=Uu.get(o);if(u){if(gs(t,u.options)&&gs(s,u.config))return u;throw Ci.create("duplicate-app",{appName:o})}const h=new Bw(o);for(const y of gd.values())h.addComponent(y);const m=new ME(t,s,h);return Uu.set(o,m),m}function Fy(i=md){const e=Uu.get(i);if(!e&&i===md&&Ny())return Ly();if(!e)throw Ci.create("no-app",{appName:i});return e}function Ri(i,e,t){let s=VE[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(h.join(" "));return}vo(new ys(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const LE="firebase-heartbeat-database",FE=1,Ma="firebase-heartbeat-store";let ed=null;function Uy(){return ed||(ed=tE(LE,FE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ma)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ci.create("idb-open",{originalErrorMessage:i.message})})),ed}async function UE(i){try{const t=(await Uy()).transaction(Ma),s=await t.objectStore(Ma).get(jy(i));return await t.done,s}catch(e){if(e instanceof jr)Or.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(t.message)}}}async function eg(i,e){try{const s=(await Uy()).transaction(Ma,"readwrite");await s.objectStore(Ma).put(e,jy(i)),await s.done}catch(t){if(t instanceof jr)Or.warn(t.message);else{const s=Ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Or.warn(s.message)}}}function jy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const jE=1024,zE=30;class BE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new HE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=tg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>zE){const h=qE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Or.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tg(),{heartbeatsToSend:s,unsentEntries:o}=$E(this._heartbeatsCache.heartbeats),u=Fu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Or.warn(t),""}}}function tg(){return new Date().toISOString().substring(0,10)}function $E(i,e=jE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ng(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ng(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class HE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await UE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ng(i){return Fu(JSON.stringify({version:2,heartbeats:i})).length}function qE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function WE(i){vo(new ys("platform-logger",e=>new iE(e),"PRIVATE")),vo(new ys("heartbeat",e=>new BE(e),"PRIVATE")),Ri(pd,Jm,i),Ri(pd,Jm,"esm2020"),Ri("fire-js","")}WE("");var GE="firebase",KE="12.6.0";/**
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
 */Ri(GE,KE,"app");function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QE=zy,By=new Wa("auth","Firebase",zy());/**
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
 */const ju=new Fd("@firebase/auth");function YE(i,...e){ju.logLevel<=Ne.WARN&&ju.warn(`Auth (${ko}): ${i}`,...e)}function ku(i,...e){ju.logLevel<=Ne.ERROR&&ju.error(`Auth (${ko}): ${i}`,...e)}/**
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
 */function br(i,...e){throw zd(i,...e)}function sr(i,...e){return zd(i,...e)}function $y(i,e,t){const s={...QE(),[e]:t};return new Wa("auth","Firebase",s).create(e,{appName:i.name})}function Vr(i){return $y(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return By.create(i,...e)}function Se(i,e,...t){if(!i)throw zd(e,...t)}function Nr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ku(e),new Error(e)}function Mr(i,e){i||Nr(e)}/**
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
 */function yd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function XE(){return rg()==="http:"||rg()==="https:"}function rg(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function JE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XE()||Cw()||"connection"in navigator)?navigator.onLine:!0}function ZE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ka{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=Iw()||Rw()}get(){return JE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bd(i,e){Mr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Hy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nT=new Ka(3e4,6e4);function Qa(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Po(i,e,t,s,o={}){return qy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ga({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return Aw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Ro(i.emulatorConfig.host)&&(v.credentials="include"),Hy.fetch()(await Wy(i,i.config.apiHost,t,m),v)})}async function qy(i,e,t){i._canInitEmulator=!1;const s={...eT,...e};try{const o=new rT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw wu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw wu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw wu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw $y(i,E,v);br(i,E)}}catch(o){if(o instanceof jr)throw o;br(i,"network-request-failed",{message:String(o)})}}async function $d(i,e,t,s,o={}){const u=await Po(i,e,t,s,o);return"mfaPendingCredential"in u&&br(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Wy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Bd(i.config,o):`${i.config.apiScheme}://${o}`;return tT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class rT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),nT.get())})}}function wu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function iT(i,e){return Po(i,"POST","/v1/accounts:delete",e)}async function zu(i,e){return Po(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Na(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sT(i,e=!1){const t=Ht(i),s=await t.getIdToken(e),o=Hd(s);Se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Na(td(o.auth_time)),issuedAtTime:Na(td(o.iat)),expirationTime:Na(td(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function td(i){return Number(i)*1e3}function Hd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=Py(t);return o?JSON.parse(o):(ku("Failed to decode base64 JWT payload"),null)}catch(o){return ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ig(i){const e=Hd(i);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function La(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof jr&&oT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function oT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class aT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(i){var S;const e=i.auth,t=await i.getIdToken(),s=await La(i,zu(e,{idToken:t}));Se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?Gy(o.providerUserInfo):[],h=uT(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function lT(i){const e=Ht(i);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Gy(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function cT(i,e){const t=await qy(i,{},async()=>{const s=Ga({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Wy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ro(i.emulatorConfig.host)&&(y.credentials="include"),Hy.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hT(i,e){return Po(i,"POST","/v2/accounts:revokeToken",Qa(i,e))}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=ig(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await cT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(Se(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Se(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Se(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
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
 */function yi(i,e){Se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _d(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await La(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sT(this,e)}reload(){return lT(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await La(this,iT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:S,emailVerified:x,isAnonymous:B,providerData:Z,stsTokenManager:J}=t;Se(S&&J,e,"internal-error");const H=po.fromJSON(this.name,J);Se(typeof S=="string",e,"internal-error"),yi(s,e.name),yi(o,e.name),Se(typeof x=="boolean",e,"internal-error"),Se(typeof B=="boolean",e,"internal-error"),yi(u,e.name),yi(h,e.name),yi(m,e.name),yi(y,e.name),yi(v,e.name),yi(E,e.name);const ye=new Ln({uid:S,auth:e,email:o,emailVerified:x,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:H,createdAt:v,lastLoginAt:E});return Z&&Array.isArray(Z)&&(ye.providerData=Z.map(we=>({...we}))),y&&(ye._redirectEventId=y),ye}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Se(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Gy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const y=new Ln({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const sg=new Map;function Dr(i){Mr(i instanceof Function,"Expected a class definition");let e=sg.get(i);return e?(Mr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,sg.set(i,e),e)}/**
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
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ky.type="NONE";const og=Ky;/**
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
 */function Pu(i,e,t){return`firebase:${i}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Pu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Pu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zu(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Dr(og),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Dr(og);const h=Pu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){let S;if(typeof E=="string"){const x=await zu(e,{idToken:E}).catch(()=>{});if(!x)break;S=await Ln._fromGetAccountInfoResponse(e,x,E)}else S=Ln._fromJSON(e,E);v!==u&&(m=S),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new mo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new mo(u,e,s))}}/**
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
 */function ag(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e_(e))return"Blackberry";if(t_(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(Zy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qy(i=$t()){return/firefox\//i.test(i)}function Yy(i=$t()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(i=$t()){return/crios\//i.test(i)}function Jy(i=$t()){return/iemobile/i.test(i)}function Zy(i=$t()){return/android/i.test(i)}function e_(i=$t()){return/blackberry/i.test(i)}function t_(i=$t()){return/webos/i.test(i)}function qd(i=$t()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function dT(i=$t()){var e;return qd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function fT(){return kw()&&document.documentMode===10}function n_(i=$t()){return qd(i)||Zy(i)||t_(i)||e_(i)||/windows phone/i.test(i)||Jy(i)}/**
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
 */function r_(i,e=[]){let t;switch(i){case"Browser":t=ag($t());break;case"Worker":t=`${ag($t())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ko}/${s}`}/**
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
 */class pT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function mT(i,e={}){return Po(i,"GET","/v2/passwordPolicy",Qa(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const gT=6;class yT{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??gT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class _T{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.beforeStateQueue=new pT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zu(this,{idToken:e}),s=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(An(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Vr(this));const t=e?Ht(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mT(this),t=new yT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&YE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ya(i){return Ht(i)}class lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mw(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vT(i){Wd=i}function wT(i){return Wd.loadJS(i)}function ET(){return Wd.gapiScript}function TT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function IT(i,e){const t=jd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(gs(u,e??{}))return o;br(o,"already-initialized")}return t.initialize({options:e})}function ST(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AT(i,e,t){const s=Ya(i);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=i_(e),{host:h,port:m}=CT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(gs(v,s.config.emulator)&&gs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ro(h)?(Vy(`${u}//${h}${y}`),Oy("Auth",!0)):RT()}function i_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function CT(i){const e=i_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ug(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ug(h)}}}function ug(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function RT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class s_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}/**
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
 */async function go(i,e){return $d(i,"POST","/v1/accounts:signInWithIdp",Qa(i,e))}/**
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
 */const kT="http://localhost";class _s extends s_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new _s(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:kT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ga(t)}return e}}/**
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
 */class o_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xa extends o_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wi extends Xa{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
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
 */class Ei extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ei.credential(t,s)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
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
 */class Ti extends Xa{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends Xa{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */async function PT(i,e){return $d(i,"POST","/v1/accounts:signUp",Qa(i,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ln._fromIdTokenResponse(e,s,o),h=cg(s);return new Lr({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=cg(s);return new Lr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function cg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function xT(i){var o;if(An(i.app))return Promise.reject(Vr(i));const e=Ya(i);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Lr({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await PT(e,{returnSecureToken:!0}),s=await Lr._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class $u extends jr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new $u(e,t,s,o)}}function a_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(i,u,e,s):u})}async function NT(i,e,t=!1){const s=await La(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Lr._forOperation(i,"link",s)}/**
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
 */async function DT(i,e,t=!1){const{auth:s}=i;if(An(s.app))return Promise.reject(Vr(s));const o="reauthenticate";try{const u=await La(i,a_(s,o,e,i),t);Se(u.idToken,s,"internal-error");const h=Hd(u.idToken);Se(h,s,"internal-error");const{sub:m}=h;return Se(i.uid===m,s,"user-mismatch"),Lr._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&br(s,"user-mismatch"),u}}/**
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
 */async function VT(i,e,t=!1){if(An(i.app))return Promise.reject(Vr(i));const s="signIn",o=await a_(i,s,e),u=await Lr._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
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
 */async function OT(i,e){return $d(i,"POST","/v1/accounts:signInWithCustomToken",Qa(i,e))}/**
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
 */async function bT(i,e){if(An(i.app))return Promise.reject(Vr(i));const t=Ya(i),s=await OT(t,{token:e,returnSecureToken:!0}),o=await Lr._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}function MT(i,e,t,s){return Ht(i).onIdTokenChanged(e,t,s)}function LT(i,e,t){return Ht(i).beforeAuthStateChanged(e,t)}function FT(i,e,t,s){return Ht(i).onAuthStateChanged(e,t,s)}const Hu="__sak";/**
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
 */class l_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UT=1e3,jT=10;class u_ extends l_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=n_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);fT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,jT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},UT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}u_.type="LOCAL";const zT=u_;/**
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
 */class c_ extends l_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}c_.type="SESSION";const h_=c_;/**
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
 */function BT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await BT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function Gd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class $T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Gd("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const x=S;if(x.data.eventId===v)switch(x.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function or(){return window}function HT(i){or().location.href=i}/**
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
 */function d_(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function qT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function GT(){return d_()?self:null}/**
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
 */const f_="firebaseLocalStorageDb",KT=1,qu="firebaseLocalStorage",p_="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function QT(){const i=indexedDB.deleteDatabase(f_);return new Ja(i).toPromise()}function vd(){const i=indexedDB.open(f_,KT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:p_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await QT(),e(await vd()))})})}async function hg(i,e,t){const s=ic(i,!0).put({[p_]:e,value:t});return new Ja(s).toPromise()}async function YT(i,e){const t=ic(i,!1).get(e),s=await new Ja(t).toPromise();return s===void 0?null:s.value}function dg(i,e){const t=ic(i,!0).delete(e);return new Ja(t).toPromise()}const XT=800,JT=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>JT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(GT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await qT(),!this.activeServiceWorker)return;this.sender=new $T(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await hg(e,Hu,"1"),await dg(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>hg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>YT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ic(o,!1).getAll();return new Ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const ZT=m_;new Ka(3e4,6e4);/**
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
 */function e1(i,e){return e?Dr(e):(Se(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Kd extends s_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t1(i){return VT(i.auth,new Kd(i),i.bypassAuthState)}function n1(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),DT(t,new Kd(i),i.bypassAuthState)}async function r1(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),NT(t,new Kd(i),i.bypassAuthState)}/**
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
 */class g_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return n1;default:br(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i1=new Ka(2e3,1e4);class fo extends g_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}fo.currentPopupAction=null;/**
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
 */const s1="pendingRedirect",xu=new Map;class o1 extends g_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const s=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(i,e){const t=c1(e),s=u1(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function l1(i,e){xu.set(i._key(),e)}function u1(i){return Dr(i._redirectPersistence)}function c1(i){return Pu(s1,i.config.apiKey,i.name)}async function h1(i,e,t=!1){if(An(i.app))return Promise.reject(Vr(i));const s=Ya(i),o=e1(s,e),h=await new o1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const d1=600*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!y_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(fg(e))}saveEventToCache(e){this.cachedEventUids.add(fg(e)),this.lastProcessedEventTime=Date.now()}}function fg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function y_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(i);default:return!1}}/**
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
 */async function m1(i,e={}){return Po(i,"GET","/v1/projects",e)}/**
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
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function _1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await m1(i);for(const t of e)try{if(v1(t))return}catch{}br(i,"unauthorized-domain")}function v1(i){const e=yd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!y1.test(t))return!1;if(g1.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const w1=new Ka(3e4,6e4);function pg(){const i=or().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function E1(i){return new Promise((e,t)=>{var o,u,h;function s(){pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pg(),t(sr(i,"network-request-failed"))},timeout:w1.get()})}if((u=(o=or().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=or().gapi)!=null&&h.load)s();else{const m=TT("iframefcb");return or()[m]=()=>{gapi.load?s():t(sr(i,"network-request-failed"))},wT(`${ET()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Nu=null,e})}let Nu=null;function T1(i){return Nu=Nu||E1(i),Nu}/**
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
 */const I1=new Ka(5e3,15e3),S1="__/auth/iframe",A1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(i){const e=i.config;Se(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Bd(e,A1):`https://${i.config.authDomain}/${S1}`,s={apiKey:e.apiKey,appName:i.name,v:ko},o=R1.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ga(s).slice(1)}`}async function P1(i){const e=await T1(i),t=or().gapi;return Se(t,i,"internal-error"),e.open({where:document.body,url:k1(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=sr(i,"network-request-failed"),m=or().setTimeout(()=>{u(h)},I1.get());function y(){or().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const x1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N1=500,D1=600,V1="_blank",O1="http://localhost";class mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b1(i,e,t,s=N1,o=D1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...x1,width:s.toString(),height:o.toString(),top:u,left:h},v=$t().toLowerCase();t&&(m=Xy(v)?V1:t),Qy(v)&&(e=e||O1,y.scrollbars="yes");const E=Object.entries(y).reduce((x,[B,Z])=>`${x}${B}=${Z},`,"");if(dT(v)&&m!=="_self")return M1(e||"",m),new mg(null);const S=window.open(e||"",m,E);Se(S,i,"popup-blocked");try{S.focus()}catch{}return new mg(S)}function M1(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const L1="__/auth/handler",F1="emulator/auth/handler",U1=encodeURIComponent("fac");async function gg(i,e,t,s,o,u){Se(i.config.authDomain,i,"auth-domain-config-required"),Se(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ko,eventId:o};if(e instanceof o_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",bw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof Xa){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),v=y?`#${U1}=${encodeURIComponent(y)}`:"";return`${j1(i)}?${Ga(m).slice(1)}${v}`}function j1({config:i}){return i.emulator?Bd(i,F1):`https://${i.authDomain}/${L1}`}/**
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
 */const nd="webStorageSupport";class z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h_,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,t,s,o){var h;Mr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await gg(e,t,s,yd(),o);return b1(e,u,Gd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await gg(e,t,s,yd(),o);return HT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await P1(e),s=new f1(e);return t.register("authEvent",o=>(Se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nd,{type:nd},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[nd];u!==void 0&&t(!!u),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return n_()||Yy()||qd()}}const B1=z1;var yg="@firebase/auth",_g="1.11.1";/**
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
 */class $1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function H1(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q1(i){vo(new ys("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Se(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r_(i)},v=new _T(s,o,u,y);return ST(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),vo(new ys("auth-internal",e=>{const t=Ya(e.getProvider("auth").getImmediate());return(s=>new $1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri(yg,_g,H1(i)),Ri(yg,_g,"esm2020")}/**
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
 */const W1=300,G1=Dy("authIdTokenMaxAge")||W1;let vg=null;const K1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>G1)return;const o=t==null?void 0:t.token;vg!==o&&(vg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Q1(i=Fy()){const e=jd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=IT(i,{popupRedirectResolver:B1,persistence:[ZT,zT,h_]}),s=Dy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=K1(u.toString());LT(t,h,()=>h(t.currentUser)),MT(t,m=>h(m))}}const o=xy("auth");return o&&AT(t,`http://${o}`),t}function Y1(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}vT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=sr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",Y1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q1("Browser");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,__;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function C(){}C.prototype=I.prototype,k.F=I.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(D,P,O){for(var A=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)A[Be-2]=arguments[Be];return I.prototype[P].apply(D,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,C){C||(C=0);const D=Array(16);if(typeof I=="string")for(var P=0;P<16;++P)D[P]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(P=0;P<16;++P)D[P]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=k.g[0],C=k.g[1],P=k.g[2];let O=k.g[3],A;A=I+(O^C&(P^O))+D[0]+3614090360&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[1]+3905402710&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[2]+606105819&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[3]+3250441966&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(O^C&(P^O))+D[4]+4118548399&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[5]+1200080426&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[6]+2821735955&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[7]+4249261313&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(O^C&(P^O))+D[8]+1770035416&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[9]+2336552879&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[10]+4294925233&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[11]+2304563134&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(O^C&(P^O))+D[12]+1804603682&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[13]+4254626195&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[14]+2792965006&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[15]+1236535329&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(P^O&(C^P))+D[1]+4129170786&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[6]+3225465664&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[11]+643717713&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[0]+3921069994&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(P^O&(C^P))+D[5]+3593408605&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[10]+38016083&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[15]+3634488961&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[4]+3889429448&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(P^O&(C^P))+D[9]+568446438&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[14]+3275163606&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[3]+4107603335&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[8]+1163531501&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(P^O&(C^P))+D[13]+2850285829&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[2]+4243563512&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[7]+1735328473&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[12]+2368359562&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(C^P^O)+D[5]+4294588738&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[8]+2272392833&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[11]+1839030562&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[14]+4259657740&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(C^P^O)+D[1]+2763975236&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[4]+1272893353&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[7]+4139469664&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[10]+3200236656&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(C^P^O)+D[13]+681279174&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[0]+3936430074&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[3]+3572445317&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[6]+76029189&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(C^P^O)+D[9]+3654602809&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[12]+3873151461&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[15]+530742520&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[2]+3299628645&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(P^(C|~O))+D[0]+4096336452&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[7]+1126891415&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[14]+2878612391&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[5]+4237533241&4294967295,C=P+(A<<21&4294967295|A>>>11),A=I+(P^(C|~O))+D[12]+1700485571&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[3]+2399980690&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[10]+4293915773&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[1]+2240044497&4294967295,C=P+(A<<21&4294967295|A>>>11),A=I+(P^(C|~O))+D[8]+1873313359&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[15]+4264355552&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[6]+2734768916&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[13]+1309151649&4294967295,C=P+(A<<21&4294967295|A>>>11),A=I+(P^(C|~O))+D[4]+4149444226&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[11]+3174756917&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[2]+718787259&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,I){I===void 0&&(I=k.length);const C=I-this.blockSize,D=this.C;let P=this.h,O=0;for(;O<I;){if(P==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<I;)if(D[P++]=k.charCodeAt(O++),P==this.blockSize){o(this,D),P=0;break}}else for(;O<I;)if(D[P++]=k[O++],P==this.blockSize){o(this,D),P=0;break}}this.h=P,this.o+=I},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;I=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=I&255,I/=256;for(this.v(k),k=Array(16),I=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)k[I++]=this.g[C]>>>D&255;return k};function u(k,I){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=I(k)}function h(k,I){this.h=I;const C=[];let D=!0;for(let P=k.length-1;P>=0;P--){const O=k[P]|0;D&&O==I||(C[P]=O,D=!1)}this.g=C}var m={};function y(k){return-128<=k&&k<128?u(k,function(I){return new h([I|0],I<0?-1:0)}):new h([k|0],k<0?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return S;if(k<0)return H(v(-k));const I=[];let C=1;for(let D=0;k>=C;D++)I[D]=k/C|0,C*=4294967296;return new h(I,0)}function E(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return H(E(k.substring(1),I));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=v(Math.pow(I,8));let D=S;for(let O=0;O<k.length;O+=8){var P=Math.min(8,k.length-O);const A=parseInt(k.substring(O,O+P),I);P<8?(P=v(Math.pow(I,P)),D=D.j(P).add(v(A))):(D=D.j(C),D=D.add(v(A)))}return D}var S=y(0),x=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-H(this).m();let k=0,I=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);k+=(D>=0?D:4294967296+D)*I,I*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(Z(this))return"0";if(J(this))return"-"+H(this).toString(k);const I=v(Math.pow(k,6));var C=this;let D="";for(;;){const P=Te(C,I).g;C=ye(C,P.j(I));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=P,Z(C))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function Z(k){if(k.h!=0)return!1;for(let I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function J(k){return k.h==-1}i.l=function(k){return k=ye(this,k),J(k)?-1:Z(k)?0:1};function H(k){const I=k.g.length,C=[];for(let D=0;D<I;D++)C[D]=~k.g[D];return new h(C,~k.h).add(x)}i.abs=function(){return J(this)?H(this):this},i.add=function(k){const I=Math.max(this.g.length,k.g.length),C=[];let D=0;for(let P=0;P<=I;P++){let O=D+(this.i(P)&65535)+(k.i(P)&65535),A=(O>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);D=A>>>16,O&=65535,A&=65535,C[P]=A<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ye(k,I){return k.add(H(I))}i.j=function(k){if(Z(this)||Z(k))return S;if(J(this))return J(k)?H(this).j(H(k)):H(H(this).j(k));if(J(k))return H(this.j(H(k)));if(this.l(B)<0&&k.l(B)<0)return v(this.m()*k.m());const I=this.g.length+k.g.length,C=[];for(var D=0;D<2*I;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let P=0;P<k.g.length;P++){const O=this.i(D)>>>16,A=this.i(D)&65535,Be=k.i(P)>>>16,ct=k.i(P)&65535;C[2*D+2*P]+=A*ct,we(C,2*D+2*P),C[2*D+2*P+1]+=O*ct,we(C,2*D+2*P+1),C[2*D+2*P+1]+=A*Be,we(C,2*D+2*P+1),C[2*D+2*P+2]+=O*Be,we(C,2*D+2*P+2)}for(k=0;k<I;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=I;k<2*I;k++)C[k]=0;return new h(C,0)};function we(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function Ae(k,I){this.g=k,this.h=I}function Te(k,I){if(Z(I))throw Error("division by zero");if(Z(k))return new Ae(S,S);if(J(k))return I=Te(H(k),I),new Ae(H(I.g),H(I.h));if(J(I))return I=Te(k,H(I)),new Ae(H(I.g),I.h);if(k.g.length>30){if(J(k)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var C=x,D=I;D.l(k)<=0;)C=$e(C),D=$e(D);var P=Pe(C,1),O=Pe(D,1);for(D=Pe(D,2),C=Pe(C,2);!Z(D);){var A=O.add(D);A.l(k)<=0&&(P=P.add(C),O=A),D=Pe(D,1),C=Pe(C,1)}return I=ye(k,P.j(I)),new Ae(P,I)}for(P=S;k.l(I)>=0;){for(C=Math.max(1,Math.floor(k.m()/I.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=v(C),A=O.j(I);J(A)||A.l(k)>0;)C-=D,O=v(C),A=O.j(I);Z(O)&&(O=x),P=P.add(O),k=ye(k,A)}return new Ae(P,k)}i.B=function(k){return Te(this,k).h},i.and=function(k){const I=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<I;D++)C[D]=this.i(D)&k.i(D);return new h(C,this.h&k.h)},i.or=function(k){const I=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<I;D++)C[D]=this.i(D)|k.i(D);return new h(C,this.h|k.h)},i.xor=function(k){const I=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<I;D++)C[D]=this.i(D)^k.i(D);return new h(C,this.h^k.h)};function $e(k){const I=k.g.length+1,C=[];for(let D=0;D<I;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new h(C,k.h)}function Pe(k,I){const C=I>>5;I%=32;const D=k.g.length-C,P=[];for(let O=0;O<D;O++)P[O]=I>0?k.i(O+C)>>>I|k.i(O+C+1)<<32-I:k.i(O+C);return new h(P,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,__=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,ki=h}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v_,Aa,w_,Du,wd,E_,T_,I_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function E(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function S(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,L,z){for(var ee=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ee[Re-2]=arguments[Re];return p.prototype[L].apply(w,ee)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function Z(l,p){for(let w=1;w<arguments.length;w++){const L=arguments[w];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=l.length||0;const z=L.length||0;l.length=g+z;for(let ee=0;ee<z;ee++)l[g+ee]=L[ee]}else l.push(L)}}class J{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function H(l){h.setTimeout(()=>{throw l},0)}function ye(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class we{constructor(){this.h=this.g=null}add(p,g){const w=Ae.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ae=new J(()=>new Te,l=>l.reset());class Te{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,Pe=!1,k=new we,I=()=>{const l=Promise.resolve(void 0);$e=()=>{l.then(C)}};function C(){for(var l;l=ye();){try{l.h.call(l.g)}catch(g){H(g)}var p=Ae;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Pe=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function Be(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}S(Be,P),Be.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ct="closure_listenable_"+(Math.random()*1e6|0),Tt=0;function qe(l,p,g,w,L){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=L,this.key=++Tt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function me(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function ie(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function V(l){const p={};for(const g in l)p[g]=l[g];return p}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(l,p){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let z=0;z<b.length;z++)g=b[z],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function Q(l){this.src=l,this.g={},this.h=0}Q.prototype.add=function(l,p,g,w,L){const z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);const ee=re(l,p,w,L);return ee>-1?(p=l[ee],g||(p.fa=!1)):(p=new qe(p,this.src,z,!!w,L),p.fa=g,l.push(p)),p};function ne(l,p){const g=p.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,p,void 0),z;(z=L>=0)&&Array.prototype.splice.call(w,L,1),z&&(te(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function re(l,p,g,w){for(let L=0;L<l.length;++L){const z=l[L];if(!z.da&&z.listener==p&&z.capture==!!g&&z.ha==w)return L}return-1}var ce="closure_lm_"+(Math.random()*1e6|0),le={};function pe(l,p,g,w,L){if(Array.isArray(p)){for(let z=0;z<p.length;z++)pe(l,p[z],g,w,L);return null}return g=gn(g),l&&l[ct]?l.J(p,g,m(w)?!!w.capture:!1,L):Ue(l,p,g,!1,w,L)}function Ue(l,p,g,w,L,z){if(!p)throw Error("Invalid event type");const ee=m(L)?!!L.capture:!!L;let Re=Un(l);if(Re||(l[ce]=Re=new Q(l)),g=Re.add(p,g,w,ee,z),g.proxy)return g;if(w=rn(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)O||(L=ee),L===void 0&&(L=!1),l.addEventListener(p.toString(),w,L);else if(l.attachEvent)l.attachEvent(gt(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function rn(){function l(g){return p.call(l.src,l.listener,g)}const p=Ui;return l}function sn(l,p,g,w,L){if(Array.isArray(p))for(var z=0;z<p.length;z++)sn(l,p[z],g,w,L);else w=m(w)?!!w.capture:!!w,g=gn(g),l&&l[ct]?(l=l.i,z=String(p).toString(),z in l.g&&(p=l.g[z],g=re(p,g,w,L),g>-1&&(te(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[z],l.h--)))):l&&(l=Un(l))&&(p=l.g[p.toString()],l=-1,p&&(l=re(p,g,w,L)),(g=l>-1?p[l]:null)&&It(g))}function It(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[ct])ne(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(gt(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=Un(p))?(ne(g,l),g.h==0&&(g.src=null,p[ce]=null)):te(l)}}}function gt(l){return l in le?le[l]:le[l]="on"+l}function Ui(l,p){if(l.da)l=!0;else{p=new Be(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&It(l),l=g.call(w,p)}return l}function Un(l){return l=l[ce],l instanceof Q?l:null}var Rn="__closure_events_fn_"+(Math.random()*1e9>>>0);function gn(l){return typeof l=="function"?l:(l[Rn]||(l[Rn]=function(p){return l.handleEvent(p)}),l[Rn])}function We(){D.call(this),this.i=new Q(this),this.M=this,this.G=null}S(We,D),We.prototype[ct]=!0,We.prototype.removeEventListener=function(l,p,g,w){sn(this,l,p,g,w)};function Ke(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var L=p;p=new P(w,l),q(p,L)}L=!0;let z,ee;if(g)for(ee=g.length-1;ee>=0;ee--)z=p.g=g[ee],L=ht(z,w,!0,p)&&L;if(z=p.g=l,L=ht(z,w,!0,p)&&L,L=ht(z,w,!1,p)&&L,g)for(ee=0;ee<g.length;ee++)z=p.g=g[ee],L=ht(z,w,!1,p)&&L}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)te(g[w]);delete l.g[p],l.h--}}this.G=null},We.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},We.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function ht(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let L=!0;for(let z=0;z<p.length;++z){const ee=p[z];if(ee&&!ee.da&&ee.capture==g){const Re=ee.listener,at=ee.ha||ee.src;ee.fa&&ne(l.i,ee),L=Re.call(at,w)!==!1&&L}}return L&&!w.defaultPrevented}function zr(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function qt(l){l.g=zr(()=>{l.g=null,l.i&&(l.i=!1,qt(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class sl extends D{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:qt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(l){D.call(this),this.h=l,this.g={}}S(Br,D);var Oo=[];function Is(l){me(l.g,function(p,g){this.g.hasOwnProperty(g)&&It(p)},l),l.g={}}Br.prototype.N=function(){Br.Z.N.call(this),Is(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=h.JSON.stringify,ol=h.JSON.parse,ji=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Hr(){}function al(){}var qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ss(){P.call(this,"d")}S(Ss,P);function bo(){P.call(this,"c")}S(bo,P);var kn={},As=null;function Wr(){return As=As||new We}kn.Ia="serverreachability";function Cs(l){P.call(this,kn.Ia,l)}S(Cs,P);function fr(l){const p=Wr();Ke(p,new Cs(p))}kn.STAT_EVENT="statevent";function pr(l,p){P.call(this,kn.STAT_EVENT,l),this.stat=p}S(pr,P);function it(l){const p=Wr();Ke(p,new pr(p,l))}kn.Ja="timingevent";function Mo(l,p){P.call(this,kn.Ja,l),this.size=p}S(Mo,P);function Gr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Kr(){this.g=!0}Kr.prototype.ua=function(){this.g=!1};function ll(l,p,g,w,L,z){l.info(function(){if(l.g)if(z){var ee="",Re=z.split("&");for(let ze=0;ze<Re.length;ze++){var at=Re[ze].split("=");if(at.length>1){const dt=at[0];at=at[1];const hn=dt.split("_");ee=hn.length>=2&&hn[1]=="type"?ee+(dt+"="+at+"&"):ee+(dt+"=redacted&")}}}else ee=null;else ee=z;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+g+`
`+ee})}function ul(l,p,g,w,L,z,ee){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+g+`
`+z+" "+ee})}function jn(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+zi(l,g)+(w?" "+w:"")})}function cl(l,p){l.info(function(){return"TIMEOUT: "+p})}Kr.prototype.info=function(){};function zi(l,p){if(!l.g)return p;if(!p)return null;try{const z=JSON.parse(p);if(z){for(l=0;l<z.length;l++)if(Array.isArray(z[l])){var g=z[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var L=w[0];if(L!="noop"&&L!="stop"&&L!="close")for(let ee=1;ee<w.length;ee++)w[ee]=""}}}}return $r(z)}catch{return p}}var Qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hl;function mr(){}S(mr,Hr),mr.prototype.g=function(){return new XMLHttpRequest},hl=new mr;function zn(l){return encodeURIComponent(String(l))}function Rs(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function yn(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new Br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var fl={},Lo={};function Pn(l,p,g){l.M=1,l.A=yr(_n(p)),l.u=g,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),Bi(l),l.B=_n(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Ko(g.i,"t",w),l.C=0,g=l.j.L,l.h=new dl,l.g=Il(l.j,g?p:null,!l.u),l.P>0&&(l.O=new sl(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var L="readystatechange";Array.isArray(L)||(L&&(Oo[0]=L.toString()),L=Oo);for(let z=0;z<L.length;z++){const ee=pe(g,L[z],w||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),fr(),ll(l.i,l.v,l.B,l.l,l.S,l.u)}yn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Kn(l)==3?p.j():this.Y(l)},yn.prototype.Y=function(l){try{if(l==this.g)e:{const Re=Kn(this.g),at=this.g.ya(),ze=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||El(this.g)))){this.K||Re!=4||at==7||(at==8||ze<=0?fr(3):fr(2)),ks(this);var p=this.g.ca();this.X=p;var g=pl(this);if(this.o=p==200,ul(this.i,this.v,this.B,this.l,this.S,Re,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,L=this.g;if((w=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var z=w;break t}}z=null}if(l=z)jn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,l);else{this.o=!1,this.m=3,it(12),gr(this),$i(this);break e}}if(this.R){l=!0;let dt;for(;!this.K&&this.C<g.length;)if(dt=gl(this,g),dt==Lo){Re==4&&(this.m=4,it(14),l=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==fl){this.m=4,it(15),jn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else jn(this.i,this.l,dt,null),Qe(this,dt);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||g.length!=0||this.h.h||(this.m=1,it(16),l=!1),this.o=this.o&&l,!l)jn(this.i,this.l,g,"[Invalid Chunked Response]"),gr(this),$i(this);else if(g.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ji(ee),ee.P=!0,it(11))}}else jn(this.i,this.l,g,null),Qe(this,g);Re==4&&gr(this),this.o&&!this.K&&(Re==4?Fs(this.j,this):(this.o=!1,Bi(this)))}else Yo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),gr(this),$i(this)}}}catch{}finally{}};function pl(l){if(!ml(l))return l.g.la();const p=El(l.g);if(p==="")return"";let g="";const w=p.length,L=Kn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return gr(l),$i(l),"";l.h.i=new h.TextDecoder}for(let z=0;z<w;z++)l.h.h=!0,g+=l.h.i.decode(p[z],{stream:!(L&&z==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function ml(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function gl(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?Lo:(g=Number(p.substring(g,w)),isNaN(g)?fl:(w+=1,w+g>p.length?Lo:(p=p.slice(w,w+g),l.C=w+g,p)))}yn.prototype.cancel=function(){this.K=!0,gr(this)};function Bi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Gr(v(l.aa,l),p)}function ks(l){l.D&&(h.clearTimeout(l.D),l.D=null)}yn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(cl(this.i,this.B),this.M!=2&&(fr(),it(17)),gr(this),this.m=2,$i(this)):Uo(this,this.T-l)};function $i(l){l.j.I==0||l.K||Fs(l.j,l)}function gr(l){ks(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Is(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Qe(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||zo(g.h,l))){if(!l.L&&zo(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Ls(g),un(g);else break e;Xn(g),it(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Gr(v(g.Va,g),6e3));Hi(g.h)<=1&&g.ta&&(g.ta=void 0)}else cn(g,11)}else if((l.L||g.g==l)&&Ls(g),!A(p))for(L=g.Ba.g.parse(p),p=0;p<L.length;p++){let ze=L[p];const dt=ze[0];if(!(dt<=g.K))if(g.K=dt,ze=ze[1],g.I==2)if(ze[0]=="c"){g.M=ze[1],g.ba=ze[2];const hn=ze[3];hn!=null&&(g.ka=hn,g.j.info("VER="+g.ka));const Tr=ze[4];Tr!=null&&(g.za=Tr,g.j.info("SVER="+g.za));const Jn=ze[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(w=1.5*Jn,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Zn=l.g;if(Zn){const zs=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var z=w.h;z.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(xs(z,z.h),z.h=null))}if(w.G){const Zo=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(w.wa=Zo,Fe(w.J,w.G,Zo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var ee=l;if(w.na=Jo(w,w.L?w.ba:null,w.W),ee.L){qi(w.h,ee);var Re=ee,at=w.O;at&&(Re.H=at),Re.D&&(ks(Re),Bi(Re)),w.g=ee}else bt(w);g.i.length>0&&Er(g)}else ze[0]!="stop"&&ze[0]!="close"||cn(g,7);else g.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?cn(g,7):bs(g):ze[0]!="noop"&&g.l&&g.l.qa(ze),g.A=0)}}fr(4)}catch{}}var Tc=class{constructor(l,p){this.g=l,this.map=p}};function Ps(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Hi(l){return l.h?1:l.g?l.g.size:0}function zo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function xs(l,p){l.g?l.g.add(p):l.h=p}function qi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ps.prototype.cancel=function(){if(this.i=on(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function on(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return B(l.i)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function an(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let L,z=null;w>=0?(L=l[g].substring(0,w),z=l[g].substring(w+1)):L=l[g],p(L,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Bn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Bn?(this.l=l.l,Wi(this,l.j),this.o=l.o,this.g=l.g,$n(this,l.u),this.h=l.h,Xr(this,Qo(l.i)),this.m=l.m):l&&(p=String(l).match(yl))?(this.l=!1,Wi(this,p[1]||"",!0),this.o=Gi(p[2]||""),this.g=Gi(p[3]||"",!0),$n(this,p[4]),this.h=Gi(p[5]||"",!0),Xr(this,p[6]||"",!0),this.m=Gi(p[7]||"")):(this.l=!1,this.i=new Oe(null,this.l))}Bn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Ki(p,$o,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ki(p,$o,!0),"@"),l.push(zn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Ki(g,g.charAt(0)=="/"?Qi:Ho,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Ki(g,qo)),l.join("")},Bn.prototype.resolve=function(l){const p=_n(this);let g=!!l.j;g?Wi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)$n(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var L=p.h.lastIndexOf("/");L!=-1&&(w=p.h.slice(0,L+1)+w)}if(L=w,L==".."||L==".")w="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){w=L.lastIndexOf("/",0)==0,L=L.split("/");const z=[];for(let ee=0;ee<L.length;){const Re=L[ee++];Re=="."?w&&ee==L.length&&z.push(""):Re==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),w&&ee==L.length&&z.push("")):(z.push(Re),w=!0)}w=z.join("/")}else w=L}return g?p.h=w:g=l.i.toString()!=="",g?Xr(p,Qo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function _n(l){return new Bn(l)}function Wi(l,p,g){l.j=g?Gi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function $n(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Xr(l,p,g){p instanceof Oe?(l.i=p,Ds(l.i,l.l)):(g||(p=Ki(p,Ic)),l.i=new Oe(p,l.l))}function Fe(l,p,g){l.i.set(p,g)}function yr(l){return Fe(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Gi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ki(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Bo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $o=/[#\/\?@]/g,Ho=/[#\?:]/g,Qi=/[#\?]/g,Ic=/[#\?@]/g,qo=/#/g;function Oe(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Hn(l){l.g||(l.g=new Map,l.h=0,l.i&&an(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Oe.prototype,i.add=function(l,p){Hn(this),this.i=null,l=qn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Wo(l,p){Hn(l),p=qn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ns(l,p){return Hn(l),p=qn(l,p),l.g.has(p)}i.forEach=function(l,p){Hn(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(p,L,w,this)},this)},this)};function Go(l,p){Hn(l);let g=[];if(typeof p=="string")Ns(l,p)&&(g=g.concat(l.g.get(qn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Hn(this),this.i=null,l=qn(this,l),Ns(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Go(this,l),l.length>0?String(l[0]):p):p};function Ko(l,p,g){Wo(l,p),g.length>0&&(l.i=null,l.g.set(qn(l,p),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const L=zn(g);g=Go(this,g);for(let z=0;z<g.length;z++){let ee=L;g[z]!==""&&(ee+="="+zn(g[z])),l.push(ee)}}return this.i=l.join("&")};function Qo(l){const p=new Oe;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function qn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ds(l,p){p&&!l.j&&(Hn(l),l.i=null,l.g.forEach(function(g,w){const L=w.toLowerCase();w!=L&&(Wo(this,w),Ko(this,L,g))},l)),l.j=p}function Wn(l,p){const g=new Kr;if(h.Image){const w=new Image;w.onload=E(kt,g,"TestLoadImage: loaded",!0,p,w),w.onerror=E(kt,g,"TestLoadImage: error",!1,p,w),w.onabort=E(kt,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(kt,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function Gn(l,p){const g=new Kr,w=new AbortController,L=setTimeout(()=>{w.abort(),kt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(z=>{clearTimeout(L),z.ok?kt(g,"TestPingServer: ok",!0,p):kt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),kt(g,"TestPingServer: error",!1,p)})}function kt(l,p,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function Yi(){this.g=new ji}function _r(l){this.i=l.Sb||null,this.h=l.ab||!1}S(_r,Hr),_r.prototype.g=function(){return new ln(this.i,this.h)};function ln(l,p){We.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(ln,We),i=ln.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,xn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_l(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function _l(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Jr(this):xn(this),this.readyState==3&&_l(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Jr(this))},i.Na=function(l){this.g&&(this.response=l,Jr(this))},i.ga=function(){this.g&&Jr(this)};function Jr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,xn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function xn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vl(l){let p="";return me(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Vs(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=vl(g),typeof l=="string"?g!=null&&zn(g):Fe(l,p,g))}function He(l){We.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(He,We);var wl=/^https?$/i,Sc=["POST","PUT"];i=He.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hl.g(),this.g.onreadystatechange=x(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(z){Zr(this,z);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())g.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),L=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Sc,p,void 0)>=0)||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ee]of g)this.g.setRequestHeader(z,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(z){Zr(this,z)}};function Zr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,ei(l),wr(l)}function ei(l){l.A||(l.A=!0,Ke(l,"complete"),Ke(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,Ke(this,"complete"),Ke(this,"abort"),wr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),He.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?vr(this):this.Xa())},i.Xa=function(){vr(this)};function vr(l){if(l.h&&typeof u<"u"){if(l.v&&Kn(l)==4)setTimeout(l.Ca.bind(l),0);else if(Ke(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const z=l.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=z===0){let ee=String(l.D).match(yl)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),w=!wl.test(ee?ee.toLowerCase():"")}g=w}if(g)Ke(l,"complete"),Ke(l,"success");else{l.o=6;try{var L=Kn(l)>2?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.ca()+"]",ei(l)}}finally{wr(l)}}}}function wr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||Ke(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ol(p)}};function El(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Yo(l){const p={};l=(l.g&&Kn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var g=Rs(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=p[L]||[];p[L]=z,z.push(g)}ie(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Os(l){this.za=0,this.i=[],this.j=new Kr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qn("baseRetryDelayMs",5e3,l),this.Za=Qn("retryDelaySeedMs",1e4,l),this.Ta=Qn("forwardChannelMaxRetries",2,l),this.va=Qn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ps(l&&l.concurrentRequestLimit),this.Ba=new Yi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Os.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){it(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=Jo(this,null,this.W),Er(this)};function bs(l){if(Ms(l),l.I==3){var p=l.V++,g=_n(l.J);if(Fe(g,"SID",l.M),Fe(g,"RID",p),Fe(g,"TYPE","terminate"),Yn(l,g),p=new yn(l,l.j,p),p.M=2,p.A=yr(_n(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Il(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Bi(p)}Zi(l)}function un(l){l.g&&(Ji(l),l.g.cancel(),l.g=null)}function Ms(l){un(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ls(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function Er(l){if(!jo(l.h)&&!l.m){l.m=!0;var p=l.Ea;$e||I(),Pe||($e(),Pe=!0),k.add(p,l),l.D=0}}function Tl(l,p){return Hi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Gr(v(l.Ea,l,p),Us(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const L=new yn(this,this.j,l);let z=this.o;if(this.U&&(z?(z=V(z),q(z,this.U)):z=this.U),this.u!==null||this.R||(L.J=z,z=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Xo(this,L,p),g=_n(this.J),Fe(g,"RID",l),Fe(g,"CVER",22),this.G&&Fe(g,"X-HTTP-Session-Id",this.G),Yn(this,g),z&&(this.R?p="headers="+zn(vl(z))+"&"+p:this.u&&Vs(g,this.u,z)),xs(this.h,L),this.Ra&&Fe(g,"TYPE","init"),this.S?(Fe(g,"$req",p),Fe(g,"SID","null"),L.U=!0,Pn(L,g,null)):Pn(L,g,p),this.I=2}}else this.I==3&&(l?Xi(this,l):this.i.length==0||jo(this.h)||Xi(this))};function Xi(l,p){var g;p?g=p.l:g=l.V++;const w=_n(l.J);Fe(w,"SID",l.M),Fe(w,"RID",g),Fe(w,"AID",l.K),Yn(l,w),l.u&&l.o&&Vs(w,l.u,l.o),g=new yn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Xo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),xs(l.h,g),Pn(g,w,p)}function Yn(l,p){l.H&&me(l.H,function(g,w){Fe(p,w,g)}),l.l&&me({},function(g,w){Fe(p,w,g)})}function Xo(l,p,g){g=Math.min(l.i.length,g);const w=l.l?v(l.l.Ka,l.l,l):null;e:{var L=l.i;let Re=-1;for(;;){const at=["count="+g];Re==-1?g>0?(Re=L[0].g,at.push("ofs="+Re)):Re=0:at.push("ofs="+Re);let ze=!0;for(let dt=0;dt<g;dt++){var z=L[dt].g;const hn=L[dt].map;if(z-=Re,z<0)Re=Math.max(0,L[dt].g-100),ze=!1;else try{z="req"+z+"_"||"";try{var ee=hn instanceof Map?hn:Object.entries(hn);for(const[Tr,Jn]of ee){let Zn=Jn;m(Jn)&&(Zn=$r(Jn)),at.push(z+Tr+"="+encodeURIComponent(Zn))}}catch(Tr){throw at.push(z+"type="+encodeURIComponent("_badmap")),Tr}}catch{w&&w(hn)}}if(ze){ee=at.join("&");break e}}ee=void 0}return l=l.i.splice(0,g),p.G=l,ee}function bt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;$e||I(),Pe||($e(),Pe=!0),k.add(p,l),l.A=0}}function Xn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Gr(v(l.Da,l),Us(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,ti(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Gr(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),un(this),ti(this))};function Ji(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function ti(l){l.g=new yn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=_n(l.na);Fe(p,"RID","rpc"),Fe(p,"SID",l.M),Fe(p,"AID",l.K),Fe(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Fe(p,"TO",l.ia),Fe(p,"TYPE","xmlhttp"),Yn(l,p),l.u&&l.o&&Vs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=yr(_n(p)),g.u=null,g.R=!0,Fo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,un(this),Xn(this),it(19))};function Ls(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Fs(l,p){var g=null;if(l.g==p){Ls(l),Ji(l),l.g=null;var w=2}else if(zo(l.h,p))g=p.G,qi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var L=l.D;w=Wr(),Ke(w,new Mo(w,g)),Er(l)}else bt(l);else if(L=p.m,L==3||L==0&&p.X>0||!(w==1&&Tl(l,p)||w==2&&Xn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),L){case 1:cn(l,5);break;case 4:cn(l,10);break;case 3:cn(l,6);break;default:cn(l,2)}}}function Us(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function cn(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),w=l.Ua;const L=!w;w=new Bn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Wi(w,"https"),yr(w),L?Wn(w.toString(),g):Gn(w.toString(),g)}else it(2);l.I=0,l.l&&l.l.pa(p),Zi(l),Ms(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Zi(l){if(l.I=0,l.ja=[],l.l){const p=on(l.h);(p.length!=0||l.i.length!=0)&&(Z(l.ja,p),Z(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function Jo(l,p,g){var w=g instanceof Bn?_n(g):new Bn(g);if(w.g!="")p&&(w.g=p+"."+w.g),$n(w,w.u);else{var L=h.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;const z=new Bn(null);w&&Wi(z,w),p&&(z.g=p),L&&$n(z,L),g&&(z.h=g),w=z}return g=l.G,p=l.wa,g&&p&&Fe(w,g,p),Fe(w,"VER",l.ka),Yn(l,w),w}function Il(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new He(new _r({ab:g})):new He(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}i=Sl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function js(){}js.prototype.g=function(l,p){return new Pt(l,p)};function Pt(l,p){We.call(this),this.g=new Os(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new ni(this)}S(Pt,We),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){bs(this.g)},Pt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=$r(l),l=g);p.i.push(new Tc(p.Ya++,l)),p.I==3&&Er(p)},Pt.prototype.N=function(){this.g.l=null,delete this.j,bs(this.g),delete this.g,Pt.Z.N.call(this)};function Al(l){Ss.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}S(Al,Ss);function Cl(){bo.call(this),this.status=1}S(Cl,bo);function ni(l){this.g=l}S(ni,Sl),ni.prototype.ra=function(){Ke(this.g,"a")},ni.prototype.qa=function(l){Ke(this.g,new Al(l))},ni.prototype.pa=function(l){Ke(this.g,new Cl)},ni.prototype.oa=function(){Ke(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,I_=function(){return new js},T_=function(){return Wr()},E_=kn,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,Du=Qr,Yr.COMPLETE="complete",w_=Yr,al.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",We.prototype.listen=We.prototype.J,Aa=al,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,v_=He}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore",Tg="4.9.2";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let xo="12.3.0";/**
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
 */const vs=new Fd("@firebase/firestore");function lo(){return vs.logLevel}function oe(i,...e){if(vs.logLevel<=Ne.DEBUG){const t=e.map(Qd);vs.debug(`Firestore (${xo}): ${i}`,...t)}}function Fr(i,...e){if(vs.logLevel<=Ne.ERROR){const t=e.map(Qd);vs.error(`Firestore (${xo}): ${i}`,...t)}}function wo(i,...e){if(vs.logLevel<=Ne.WARN){const t=e.map(Qd);vs.warn(`Firestore (${xo}): ${i}`,...t)}}function Qd(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function Ee(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,S_(i,s,t)}function S_(i,e,t){let s=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function je(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||S_(e,o,s)}function ke(i,e){return i}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends jr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ps{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class A_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class J1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Z1{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ps;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ps,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ps)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new A_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class eI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new eI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ig(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ig(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=rI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function De(i,e){return i<e?-1:i>e?1:0}function Ed(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return rd(o)===rd(u)?De(o,u):rd(o)?1:-1}return De(i.length,e.length)}const iI=55296,sI=57343;function rd(i){const e=i.charCodeAt(0);return e>=iI&&e<=sI}function Eo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Sg="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=ir.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return De(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Ed(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ki.fromString(e.substring(4,e.length-2))}}class Je extends ir{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends ir{construct(e,t,s){return new Vt(e,t,s)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sg}static keyField(){return new Vt([Sg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new fe(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new fe(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new fe(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new fe(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Je.fromString(e))}static fromName(e){return new ge(Je.fromString(e).popFirst(5))}static empty(){return new ge(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Je(e.slice()))}}/**
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
 */function C_(i,e,t){if(!t)throw new fe(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function aI(i,e,t,s){if(e===!0&&s===!0)throw new fe(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ag(i){if(!ge.isDocumentKey(i))throw new fe(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Cg(i){if(ge.isDocumentKey(i))throw new fe(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function R_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Xd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ee(12329,{type:typeof i})}function Pi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new fe(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xd(i);throw new fe(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function mt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Za(i,e){if(!R_(i))throw new fe(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new fe(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rg=-62135596800,kg=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kg);return new Ze(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rg)throw new fe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kg}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Za(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:mt("string",Ze._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Ze(0,0))}static max(){return new Ce(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fa=-1;function lI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(s===1e9?new Ze(t+1,0):new Ze(t,s));return new Ni(o,ge.empty(),e)}function uI(i){return new Ni(i.readTime,i.key,Fa)}class Ni{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ni(Ce.min(),ge.empty(),Fa)}static max(){return new Ni(Ce.max(),ge.empty(),Fa)}}function cI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(i.documentKey,e.documentKey),t!==0?t:De(i.largestBatchId,e.largestBatchId))}/**
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
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function No(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==hI)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((E=>{h[v]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function fI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sc.ce=-1;/**
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
 */const Jd=-1;function oc(i){return i==null}function Wu(i){return i===0&&1/i==-1/0}function pI(i){return typeof i=="number"&&Number.isInteger(i)&&!Wu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const k_="";function mI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Pg(e)),e=gI(i.get(t),e);return Pg(e)}function gI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case k_:t+="";break;default:t+=u}}return t}function Pg(i){return i+k_+""}/**
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
 */function xg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Li(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function P_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new mn([])}unionWith(e){let t=new Et(Vt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class x_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new x_("Invalid base64 string: "+u):u}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(i){if(je(!!i,39018),typeof i=="string"){let e=0;const t=yI.exec(i);if(je(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ut(i.seconds),nanos:ut(i.nanos)}}function ut(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Vi(i){return typeof i=="string"?Ot.fromBase64String(i):Ot.fromUint8Array(i)}/**
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
 */const N_="server_timestamp",D_="__type__",V_="__previous_value__",O_="__local_write_time__";function Zd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[D_])==null?void 0:s.stringValue)===N_}function ac(i){const e=i.mapValue.fields[V_];return Zd(e)?ac(e):e}function Ua(i){const e=Di(i.mapValue.fields[O_].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class _I{constructor(e,t,s,o,u,h,m,y,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=E}}const Gu="(default)";class ja{constructor(e,t){this.projectId=e,this.database=t||Gu}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===Gu}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const b_="__type__",vI="__max__",Iu={mapValue:{}},M_="__vector__",Ku="value";function Oi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Zd(i)?4:EI(i)?9007199254740991:wI(i)?10:11:Ee(28295,{value:i})}function hr(i,e){if(i===e)return!0;const t=Oi(i);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ua(i).isEqual(Ua(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Di(o.timestampValue),m=Di(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Vi(o.bytesValue).isEqual(Vi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return ut(o.geoPointValue.latitude)===ut(u.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ut(o.integerValue)===ut(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ut(o.doubleValue),m=ut(u.doubleValue);return h===m?Wu(h)===Wu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return Eo(i.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(xg(h)!==xg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!hr(h[y],m[y])))return!1;return!0})(i,e);default:return Ee(52216,{left:i})}}function za(i,e){return(i.values||[]).find((t=>hr(t,e)))!==void 0}function To(i,e){if(i===e)return 0;const t=Oi(i),s=Oi(e);if(t!==s)return De(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ut(u.integerValue||u.doubleValue),y=ut(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Dg(i.timestampValue,e.timestampValue);case 4:return Dg(Ua(i),Ua(e));case 5:return Ed(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Vi(u),y=Vi(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const E=De(m[v],y[v]);if(E!==0)return E}return De(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=De(ut(u.latitude),ut(h.latitude));return m!==0?m:De(ut(u.longitude),ut(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Vg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var x,B,Z,J;const m=u.fields||{},y=h.fields||{},v=(x=m[Ku])==null?void 0:x.arrayValue,E=(B=y[Ku])==null?void 0:B.arrayValue,S=De(((Z=v==null?void 0:v.values)==null?void 0:Z.length)||0,((J=E==null?void 0:E.values)==null?void 0:J.length)||0);return S!==0?S:Vg(v,E)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},E=Object.keys(v);y.sort(),E.sort();for(let S=0;S<y.length&&S<E.length;++S){const x=Ed(y[S],E[S]);if(x!==0)return x;const B=To(m[y[S]],v[E[S]]);if(B!==0)return B}return De(y.length,E.length)})(i.mapValue,e.mapValue);default:throw Ee(23264,{he:t})}}function Dg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return De(i,e);const t=Di(i),s=Di(e),o=De(t.seconds,s.seconds);return o!==0?o:De(t.nanos,s.nanos)}function Vg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=To(t[o],s[o]);if(u)return u}return De(t.length,s.length)}function Io(i){return Td(i)}function Td(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Di(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Vi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ge.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Td(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Td(t.fields[h])}`;return o+"}"})(i.mapValue):Ee(61005,{value:i})}function Vu(i){switch(Oi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(i);return e?16+Vu(e):16;case 5:return 2*i.stringValue.length;case 6:return Vi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Vu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Li(s.fields,((u,h)=>{o+=u.length+Vu(h)})),o})(i.mapValue);default:throw Ee(13486,{value:i})}}function Id(i){return!!i&&"integerValue"in i}function ef(i){return!!i&&"arrayValue"in i}function Og(i){return!!i&&"nullValue"in i}function bg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ou(i){return!!i&&"mapValue"in i}function wI(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[b_])==null?void 0:s.stringValue)===M_}function Da(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Li(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Da(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(i.arrayValue.values[t]);return e}return{...i}}function EI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===vI}/**
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
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ou(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Vt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Da(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ou(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Li(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new nn(Da(this.value))}}function L_(i){const e=[];return Li(i.fields,((t,s)=>{const o=new Vt([t]);if(Ou(s)){const u=L_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new mn(e)}/**
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
 */class Bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Bt(e,0,Ce.min(),Ce.min(),Ce.min(),nn.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Ce.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ce.min(),Ce.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ce.min(),Ce.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function Mg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=To(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!hr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yu{constructor(e,t="asc"){this.field=e,this.dir=t}}function TI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class F_{}class vt extends F_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new SI(e,t,s):t==="array-contains"?new RI(e,s):t==="in"?new kI(e,s):t==="not-in"?new PI(e,s):t==="array-contains-any"?new xI(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new AI(e,s):new CI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(To(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends F_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new dr(e,t)}matches(e){return U_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U_(i){return i.op==="and"}function j_(i){return II(i)&&U_(i)}function II(i){for(const e of i.filters)if(e instanceof dr)return!1;return!0}function Sd(i){if(i instanceof vt)return i.field.canonicalString()+i.op.toString()+Io(i.value);if(j_(i))return i.filters.map((e=>Sd(e))).join(",");{const e=i.filters.map((t=>Sd(t))).join(",");return`${i.op}(${e})`}}function z_(i,e){return i instanceof vt?(function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(i,e):i instanceof dr?(function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&z_(h,o.filters[m])),!0):!1})(i,e):void Ee(19439)}function B_(i){return i instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Io(t.value)}`})(i):i instanceof dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(B_).join(" ,")+"}"})(i):"Filter"}class SI extends vt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class AI extends vt{constructor(e,t){super(e,"in",t),this.keys=$_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class CI extends vt{constructor(e,t){super(e,"not-in",t),this.keys=$_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class RI extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ef(t)&&za(t.arrayValue,this.value)}}class kI extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&za(this.value.arrayValue,t)}}class PI extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!za(this.value.arrayValue,t)}}class xI extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>za(this.value.arrayValue,s)))}}/**
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
 */class NI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Fg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new NI(i,e,t,s,o,u,h)}function tf(i){const e=ke(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Sd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Io(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Io(s))).join(",")),e.Te=t}return e.Te}function nf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!TI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!z_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Lg(i.startAt,e.startAt)&&Lg(i.endAt,e.endAt)}function Ad(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class lc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DI(i,e,t,s,o,u,h,m){return new lc(i,e,t,s,o,u,h,m)}function rf(i){return new lc(i)}function Ug(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function VI(i){return i.collectionGroup!==null}function Va(i){const e=ke(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Et(Vt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Yu(u,s))})),t.has(Vt.keyField().canonicalString())||e.Ie.push(new Yu(Vt.keyField(),s))}return e.Ie}function ar(i){const e=ke(i);return e.Ee||(e.Ee=OI(e,Va(i))),e.Ee}function OI(i,e){if(i.limitType==="F")return Fg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Yu(o.field,u)}));const t=i.endAt?new Qu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Qu(i.startAt.position,i.startAt.inclusive):null;return Fg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Cd(i,e,t){return new lc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function uc(i,e){return nf(ar(i),ar(e))&&i.limitType===e.limitType}function H_(i){return`${tf(ar(i))}|lt:${i.limitType}`}function uo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>B_(o))).join(", ")}]`),oc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Io(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Io(o))).join(",")),`Target(${s})`})(ar(i))}; limitType=${i.limitType})`}function cc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Va(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Mg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Va(s),o)||s.endAt&&!(function(h,m,y){const v=Mg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Va(s),o))})(i,e)}function bI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function q_(i){return(e,t)=>{let s=!1;for(const o of Va(i)){const u=MI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function MI(i,e,t){const s=i.field.isKeyField()?ge.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?To(y,v):Ee(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:i.dir})}}/**
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
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return P_(this.inner)}size(){return this.innerSize}}/**
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
 */const LI=new rt(ge.comparator);function Ur(){return LI}const W_=new rt(ge.comparator);function Ca(...i){let e=W_;for(const t of i)e=e.insert(t.key,t);return e}function G_(i){let e=W_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function fs(){return Oa()}function K_(){return Oa()}function Oa(){return new Es((i=>i.toString()),((i,e)=>i.isEqual(e)))}const FI=new rt(ge.comparator),UI=new Et(ge.comparator);function Ve(...i){let e=UI;for(const t of i)e=e.add(t);return e}const jI=new Et(De);function zI(){return jI}/**
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
 */function sf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function Q_(i){return{integerValue:""+i}}function Y_(i,e){return pI(e)?Q_(e):sf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hc{constructor(){this._=void 0}}function BI(i,e,t){return i instanceof Ba?(function(o,u){const h={fields:{[D_]:{stringValue:N_},[O_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Zd(u)&&(u=ac(u)),u&&(h.fields[V_]=u),{mapValue:h}})(t,e):i instanceof $a?J_(i,e):i instanceof Ha?Z_(i,e):(function(o,u){const h=X_(o,u),m=jg(h)+jg(o.Ae);return Id(h)&&Id(o.Ae)?Q_(m):sf(o.serializer,m)})(i,e)}function $I(i,e,t){return i instanceof $a?J_(i,e):i instanceof Ha?Z_(i,e):t}function X_(i,e){return i instanceof qa?(function(s){return Id(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ba extends hc{}class $a extends hc{constructor(e){super(),this.elements=e}}function J_(i,e){const t=ev(e);for(const s of i.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends hc{constructor(e){super(),this.elements=e}}function Z_(i,e){let t=ev(e);for(const s of i.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class qa extends hc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function jg(i){return ut(i.integerValue||i.doubleValue)}function ev(i){return ef(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class tv{constructor(e,t){this.field=e,this.transform=t}}function HI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof $a&&o instanceof $a||s instanceof Ha&&o instanceof Ha?Eo(s.elements,o.elements,hr):s instanceof qa&&o instanceof qa?hr(s.Ae,o.Ae):s instanceof Ba&&o instanceof Ba})(i.transform,e.transform)}class qI{constructor(e,t){this.version=e,this.transformResults=t}}class Fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class dc{}function nv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new of(i.key,Fn.none()):new el(i.key,i.data,Fn.none());{const t=i.data,s=nn.empty();let o=new Et(Vt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Fi(i.key,s,new mn(o.toArray()),Fn.none())}}function WI(i,e,t){i instanceof el?(function(o,u,h){const m=o.value.clone(),y=Bg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Fi?(function(o,u,h){if(!bu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Bg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(rv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ba(i,e,t,s){return i instanceof el?(function(u,h,m,y){if(!bu(u.precondition,h))return m;const v=u.value.clone(),E=$g(u.fieldTransforms,y,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Fi?(function(u,h,m,y){if(!bu(u.precondition,h))return m;const v=$g(u.fieldTransforms,y,h),E=h.data;return E.setAll(rv(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(i,e,t,s):(function(u,h,m){return bu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function GI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=X_(s.transform,o||null);u!=null&&(t===null&&(t=nn.empty()),t.set(s.field,u))}return t||null}function zg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,((u,h)=>HI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class el extends dc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fi extends dc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function rv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Bg(i,e,t){const s=new Map;je(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,$I(h,m,t[o]))}return s}function $g(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,BI(u,h,e))}return s}class of extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KI extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&WI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=K_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=nv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ce.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,((t,s)=>zg(t,s)))&&Eo(this.baseMutations,e.baseMutations,((t,s)=>zg(t,s)))}}class af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return FI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new af(e,t,s,o)}}/**
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
 */class YI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class XI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pt,be;function JI(i){switch(i){case G.OK:return Ee(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return Ee(15467,{code:i})}}function iv(i){if(i===void 0)return Fr("GRPC error has no .code"),G.UNKNOWN;switch(i){case pt.OK:return G.OK;case pt.CANCELLED:return G.CANCELLED;case pt.UNKNOWN:return G.UNKNOWN;case pt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case pt.INTERNAL:return G.INTERNAL;case pt.UNAVAILABLE:return G.UNAVAILABLE;case pt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case pt.NOT_FOUND:return G.NOT_FOUND;case pt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case pt.ABORTED:return G.ABORTED;case pt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case pt.DATA_LOSS:return G.DATA_LOSS;default:return Ee(39323,{code:i})}}(be=pt||(pt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ZI(){return new TextEncoder}/**
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
 */const eS=new ki([4294967295,4294967295],0);function Hg(i){const e=ZI().encode(i),t=new __;return t.update(e),new Uint8Array(t.digest())}function qg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ki([t,s],0),new ki([o,u],0)]}class lf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ki.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ki.fromNumber(s)));return o.compare(eS)===1&&(o=new ki([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Hg(e),[s,o]=qg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new lf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Hg(e),[s,o]=qg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fc(Ce.min(),o,new rt(De),Ur(),Ve())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,Ve(),Ve(),Ve())}}/**
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
 */class Mu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class sv{constructor(e,t){this.targetId=e,this.Ce=t}}class ov{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Wg{constructor(){this.ve=0,this.Fe=Gg(),this.Me=Ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:u})}})),new tl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Gg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.Je=Su(),this.He=Su(),this.Ye=new rt(De)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Ad(u))if(s===0){const h=new ge(u.path);this.et(t,h,Bt.newNoDocument(h,Ce.min()))}else je(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Vi(s).toUint8Array()}catch(y){if(y instanceof x_)return wo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new lf(h,o,u)}catch(y){return wo(y instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Ad(m.target)){const y=new ge(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Bt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Ve();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new fc(e,t,this.Ye,this.je,s);return this.je=Ur(),this.Je=Su(),this.He=Su(),this.Ye=new rt(De),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Wg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Et(De),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Et(De),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Su(){return new rt(ge.comparator)}function Gg(){return new rt(ge.comparator)}const nS={asc:"ASCENDING",desc:"DESCENDING"},rS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iS={and:"AND",or:"OR"};class sS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rd(i,e){return i.useProto3Json||oc(e)?e:{value:e}}function Xu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function oS(i,e){return Xu(i,e.toTimestamp())}function lr(i){return je(!!i,49232),Ce.fromTimestamp((function(t){const s=Di(t);return new Ze(s.seconds,s.nanos)})(i))}function uf(i,e){return kd(i,e).canonicalString()}function kd(i,e){const t=(function(o){return new Je(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function lv(i){const e=Je.fromString(i);return je(fv(e),10190,{key:e.toString()}),e}function Pd(i,e){return uf(i.databaseId,e.path)}function id(i,e){const t=lv(e);if(t.get(1)!==i.databaseId.projectId)throw new fe(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new fe(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ge(cv(t))}function uv(i,e){return uf(i.databaseId,e)}function aS(i){const e=lv(i);return e.length===4?Je.emptyPath():cv(e)}function xd(i){return new Je(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function cv(i){return je(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Kg(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function lS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ee(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,E){return v.useProto3Json?(je(E===void 0||typeof E=="string",58123),Ot.fromBase64String(E||"")):(je(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ot.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const E=v.code===void 0?G.UNKNOWN:iv(v.code);return new fe(E,v.message||"")})(h);t=new ov(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=id(i,s.document.name),u=lr(s.document.updateTime),h=s.document.createTime?lr(s.document.createTime):Ce.min(),m=new nn({mapValue:{fields:s.document.fields}}),y=Bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Mu(v,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=id(i,s.document),u=s.readTime?lr(s.readTime):Ce.min(),h=Bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=id(i,s.document),u=s.removedTargetIds||[];t=new Mu([],u,o,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new XI(o,u),m=s.targetId;t=new sv(m,h)}}return t}function uS(i,e){let t;if(e instanceof el)t={update:Kg(i,e.key,e.value)};else if(e instanceof of)t={delete:Pd(i,e.key)};else if(e instanceof Fi)t={update:Kg(i,e.key,e.data),updateMask:_S(e.fieldMask)};else{if(!(e instanceof KI))return Ee(16599,{Vt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $a)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw Ee(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:oS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee(27497)})(i,e.precondition)),t}function cS(i,e){return i&&i.length>0?(je(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?lr(o.updateTime):lr(u);return h.isEqual(Ce.min())&&(h=lr(u)),new qI(h,o.transformResults||[])})(t,e)))):[]}function hS(i,e){return{documents:[uv(i,e.path)]}}function dS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=uv(i,o);const u=(function(v){if(v.length!==0)return dv(dr.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((E=>(function(x){return{field:co(x.field),direction:mS(x.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Rd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function fS(i){let e=aS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(S){const x=hv(S);return x instanceof dr&&j_(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((x=>(function(Z){return new Yu(ho(Z.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(S){let x;return x=typeof S=="object"?S.value:S,oc(x)?null:x})(t.limit));let y=null;t.startAt&&(y=(function(S){const x=!!S.before,B=S.values||[];return new Qu(B,x)})(t.startAt));let v=null;return t.endAt&&(v=(function(S){const x=!S.before,B=S.values||[];return new Qu(B,x)})(t.endAt)),DI(e,o,h,u,m,"F",y,v)}function pS(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ho(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ho(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ho(t.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ho(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(i):i.fieldFilter!==void 0?(function(t){return vt.create(ho(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return dr.create(t.compositeFilter.filters.map((s=>hv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(i):Ee(30097,{filter:i})}function mS(i){return nS[i]}function gS(i){return rS[i]}function yS(i){return iS[i]}function co(i){return{fieldPath:i.canonicalString()}}function ho(i){return Vt.fromServerFormat(i.fieldPath)}function dv(i){return i instanceof vt?(function(t){if(t.op==="=="){if(bg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NAN"}};if(Og(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bg(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NAN"}};if(Og(t.value))return{unaryFilter:{field:co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:co(t.field),op:gS(t.op),value:t.value}}})(i):i instanceof dr?(function(t){const s=t.getFilters().map((o=>dv(o)));return s.length===1?s[0]:{compositeFilter:{op:yS(t.op),filters:s}}})(i):Ee(54877,{filter:i})}function _S(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Si{constructor(e,t,s,o,u=Ce.min(),h=Ce.min(),m=Ot.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vS{constructor(e){this.yt=e}}function wS(i){const e=fS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Cd(e,e.limit,"L"):e}/**
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
 */class ES{constructor(){this.Cn=new TS}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ni.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class TS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Et(Je.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Et(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pv=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(pv,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class So{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new So(0)}static cr(){return new So(-1)}}/**
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
 */const Yg="LruGarbageCollector",IS=1048576;function Xg([i,e],[t,s]){const o=De(i,t);return o===0?De(e,s):o}class SS{constructor(e){this.Ir=e,this.buffer=new Et(Xg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(Yg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?oe(Yg,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Vr(3e5)}))}}class CS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(sc.ce);const s=new SS(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Qg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(e,s,t)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(v=Date.now(),lo()<=Ne.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${S} documents in `+(v-y)+`ms
Total Duration: ${v-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function RS(i,e){return new CS(i,e)}/**
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
 */class kS{constructor(){this.changes=new Es((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class xS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ba(s.mutation,o,mn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const o=fs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=fs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ur();const h=Oa(),m=(function(){return Oa()})();return t.forEach(((y,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof Fi)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),ba(E.mutation,v,E.mutation.getFieldMask(),Ze.now())):h.set(v.key,mn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>m.set(v,new PS(E,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Oa();let o=new rt(((h,m)=>h-m)),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let E=s.get(y)||mn.empty();E=m.applyToLocalView(v,E),s.set(y,E);const S=(o.get(m.batchId)||Ve()).add(y);o=o.insert(m.batchId,S)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,E=y.value,S=K_();E.forEach((x=>{if(!u.has(x)){const B=nv(t.get(x),s.get(x));B!==null&&S.set(x,B),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,S))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):VI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(fs());let m=Fa,y=u;return h.next((v=>$.forEach(v,((E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next((x=>{y=y.insert(E,x)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Ve()))).next((E=>({batchId:m,changes:G_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(y=>{const v=(function(S,x){return new lc(x,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((E=>{E.forEach(((S,x)=>{h=h.insert(S,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let m=Ca();return h.forEach(((y,v)=>{const E=u.get(y);E!==void 0&&ba(E.mutation,v,mn.empty(),Ze.now()),cc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class NS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return $.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:wS(o.bundledQuery),readTime:lr(o.readTime)}})(t)),$.resolve()}}/**
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
 */class DS{constructor(){this.overlays=new rt(ge.comparator),this.qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fs();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=fs(),u=t.length+1,h=new ge(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new rt(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=fs(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=fs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,E)=>m.set(v,E))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new YI(t,s));let u=this.qr.get(t);u===void 0&&(u=Ve(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class VS{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class cf{constructor(){this.Qr=new Et(Rt.$r),this.Ur=new Et(Rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Rt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Rt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ge(new Je([])),s=new Rt(t,e),o=new Rt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ge(new Je([])),s=new Rt(t,e),o=new Rt(t,e+1);let u=Ve();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Rt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Rt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ge.comparator(e.key,t.key)||De(e.Yr,t.Yr)}static Kr(e,t){return De(e.Yr,t.Yr)||ge.comparator(e.key,t.key)}}/**
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
 */class OS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Et(Rt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new QI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Rt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Jd:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Et(De);return t.forEach((o=>{const u=new Rt(o,0),h=new Rt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new Rt(new ge(u),0);let m=new Et(De);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Yr)),!0)}),h),$.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(t.mutations,(o=>{const u=new Rt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Rt(t,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bS{constructor(e){this.ri=e,this.docs=(function(){return new rt(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=Ur();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Bt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ur();const h=t.path,m=new ge(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:E}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||cI(uI(E),s)<=0||(o.has(E.key)||cc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ee(9500)}ii(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new MS(this)}getSize(e){return $.resolve(this.size)}}class MS extends kS{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class LS{constructor(e){this.persistence=e,this.si=new Es((t=>tf(t)),nf),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.oi=0,this._i=new cf,this.targetCount=0,this.ai=So.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),$.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new So(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Pr(t),$.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this._i.containsKey(t))}}/**
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
 */class mv{constructor(e,t){this.ui={},this.overlays={},this.ci=new sc(0),this.li=!1,this.li=!0,this.hi=new VS,this.referenceDelegate=e(this),this.Pi=new LS(this),this.indexManager=new ES,this.remoteDocumentCache=(function(o){return new bS(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new vS(t),this.Ii=new NS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new OS(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new FS(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class FS extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Vi=null}static mi(e){return new hf(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const o=ge.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Ce.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ju{constructor(e,t){this.persistence=e,this.pi=new Es((s=>mI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=RS(this,t)}static mi(e,t){return new Ju(e,t)}Ei(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return $.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ce.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}br(e,t,s){return $.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class df{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ve(),o=Ve();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new df(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class US{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Pw()?8:fI($t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new US;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(lo()<=Ne.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(lo()<=Ne.DEBUG&&oe("QueryEngine","Query:",uo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(lo()<=Ne.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):$.resolve())}ys(e,t){if(Ug(t))return $.resolve(null);let s=ar(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Cd(t,null,"F"),s=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ve(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,Cd(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,o){return Ug(t)||o.isEqual(Ce.min())?$.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(lo()<=Ne.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),uo(t)),this.vs(e,h,t,lI(o,Fa)).next((m=>m)))}))}Ds(e,t){let s=new Et(q_(e));return t.forEach(((o,u)=>{cc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return lo()<=Ne.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",uo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ni.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const ff="LocalStore",zS=3e8;class BS{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new rt(De),this.xs=new Es((u=>tf(u)),nf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function $S(i,e,t,s){return new BS(i,e,t,s)}async function gv(i,e){const t=ke(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ve();for(const v of o){h.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}for(const v of u){m.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function HS(i,e){const t=ke(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,E){const S=v.batch,x=S.keys();let B=$.resolve();return x.forEach((Z=>{B=B.next((()=>E.getEntry(y,Z))).next((J=>{const H=v.docVersions.get(Z);je(H!==null,48541),J.version.compareTo(H)<0&&(S.applyToRemoteDocument(J,v),J.isValidDocument()&&(J.setReadTime(v.commitVersion),E.addEntry(J)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,S)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ve();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function yv(i){const e=ke(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function qS(i,e){const t=ke(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((E,S)=>{const x=o.get(S);if(!x)return;m.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,S).next((()=>t.Pi.addMatchingKeys(u,E.addedDocuments,S))));let B=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?B=B.withResumeToken(Ot.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(S,B),(function(J,H,ye){return J.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=zS?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(x,B,E)&&m.push(t.Pi.updateTargetData(u,B))}));let y=Ur(),v=Ve();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(WS(u,h,e.documentUpdates).next((E=>{y=E.ks,v=E.qs}))),!s.isEqual(Ce.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next((S=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function WS(i,e,t){let s=Ve(),o=Ve();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ur();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ce.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):oe(ff,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function GS(i,e){const t=ke(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Jd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function KS(i,e){const t=ke(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new Si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Nd(i,e,t){const s=ke(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Do(h))throw h;oe(ff,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Jg(i,e,t){const s=ke(i);let o=Ce.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,E){const S=ke(y),x=S.xs.get(E);return x!==void 0?$.resolve(S.Ms.get(x)):S.Pi.getTargetData(v,E)})(s,h,ar(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ce.min(),t?u:Ve()))).next((m=>(QS(s,bI(e),m),{documents:m,Qs:u})))))}function QS(i,e,t){let s=i.Os.get(e)||Ce.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Zg{constructor(){this.activeTargetIds=zI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YS{constructor(){this.Mo=new Zg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Zg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XS{Oo(e){}shutdown(){}}/**
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
 */const ey="ConnectivityMonitor";class ty{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(ey,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(ey,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Au=null;function Dd(){return Au===null?Au=(function(){return 268435456+Math.round(2147483648*Math.random())})():Au++,"0x"+Au.toString(16)}/**
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
 */const sd="RestConnection",JS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Gu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Dd(),m=this.zo(e,t.toUriEncodedString());oe(sd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:v}=new URL(m),E=Ro(v);return this.Jo(e,m,y,s,E).then((S=>(oe(sd,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw wo(sd,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=JS[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class eA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const jt="WebChannelConnection";class tA extends ZS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Dd();return new Promise(((m,y)=>{const v=new v_;v.setWithCredentials(!0),v.listenOnce(w_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Du.NO_ERROR:const S=v.getResponseJson();oe(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case Du.TIMEOUT:oe(jt,`RPC '${e}' ${h} timed out`),y(new fe(G.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const x=v.getStatus();if(oe(jt,`RPC '${e}' ${h} failed with status:`,x,"response text:",v.getResponseText()),x>0){let B=v.getResponseJson();Array.isArray(B)&&(B=B[0]);const Z=B==null?void 0:B.error;if(Z&&Z.status&&Z.message){const J=(function(ye){const we=ye.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(we)>=0?we:G.UNKNOWN})(Z.status);y(new fe(J,Z.message))}else y(new fe(G.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new fe(G.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{oe(jt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);oe(jt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=Dd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=I_(),m=T_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");oe(jt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const S=h.createWebChannel(E,y);this.I_(S);let x=!1,B=!1;const Z=new eA({Yo:H=>{B?oe(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(x||(oe(jt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),x=!0),oe(jt,`RPC '${e}' stream ${o} sending:`,H),S.send(H))},Zo:()=>S.close()}),J=(H,ye,we)=>{H.listen(ye,(Ae=>{try{we(Ae)}catch(Te){setTimeout((()=>{throw Te}),0)}}))};return J(S,Aa.EventType.OPEN,(()=>{B||(oe(jt,`RPC '${e}' stream ${o} transport opened.`),Z.o_())})),J(S,Aa.EventType.CLOSE,(()=>{B||(B=!0,oe(jt,`RPC '${e}' stream ${o} transport closed`),Z.a_(),this.E_(S))})),J(S,Aa.EventType.ERROR,(H=>{B||(B=!0,wo(jt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),Z.a_(new fe(G.UNAVAILABLE,"The operation could not be completed")))})),J(S,Aa.EventType.MESSAGE,(H=>{var ye;if(!B){const we=H.data[0];je(!!we,16349);const Ae=we,Te=(Ae==null?void 0:Ae.error)||((ye=Ae[0])==null?void 0:ye.error);if(Te){oe(jt,`RPC '${e}' stream ${o} received error:`,Te);const $e=Te.status;let Pe=(function(C){const D=pt[C];if(D!==void 0)return iv(D)})($e),k=Te.message;Pe===void 0&&(Pe=G.INTERNAL,k="Unknown error status: "+$e+" with message "+Te.message),B=!0,Z.a_(new fe(Pe,k)),S.close()}else oe(jt,`RPC '${e}' stream ${o} received:`,we),Z.u_(we)}})),J(m,E_.STAT_EVENT,(H=>{H.stat===wd.PROXY?oe(jt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===wd.NOPROXY&&oe(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Z.__()}),0),Z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function od(){return typeof document<"u"?document:null}/**
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
 */function pc(i){return new sS(i,!0)}/**
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
 */class _v{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ny="PersistentStream";class vv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _v(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new fe(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(oe(ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nA extends vv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=lS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ce.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ce.min():h.readTime?lr(h.readTime):Ce.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=xd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Ad(y)?{documents:hS(u,y)}:{query:dS(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=av(u,h.resumeToken);const v=Rd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ce.min())>0){m.readTime=Xu(u,h.snapshotVersion.toTimestamp());const v=Rd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=pS(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=xd(this.serializer),t.removeTarget=e,this.q_(t)}}class rA extends vv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cS(e.writeResults,e.commitTime),s=lr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=xd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>uS(this.serializer,s)))};this.q_(t)}}/**
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
 */class iA{}class sA extends iA{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new fe(G.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,kd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(G.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,kd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new fe(G.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class oA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ws="RemoteStore";class aA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Ts(this)&&(oe(ws,"Restarting streams for network reachability change."),await(async function(y){const v=ke(y);v.Ea.add(4),await nl(v),v.Ra.set("Unknown"),v.Ea.delete(4),await mc(v)})(this))}))})),this.Ra=new oA(s,o)}}async function mc(i){if(Ts(i))for(const e of i.da)await e(!0)}async function nl(i){for(const e of i.da)await e(!1)}function wv(i,e){const t=ke(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),yf(t)?gf(t):Vo(t).O_()&&mf(t,e))}function pf(i,e){const t=ke(i),s=Vo(t);t.Ia.delete(e),s.O_()&&Ev(t,e),t.Ia.size===0&&(s.O_()?s.L_():Ts(t)&&t.Ra.set("Unknown"))}function mf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(i).Y_(e)}function Ev(i,e){i.Va.Ue(e),Vo(i).Z_(e)}function gf(i){i.Va=new tS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Vo(i).start(),i.Ra.ua()}function yf(i){return Ts(i)&&!Vo(i).x_()&&i.Ia.size>0}function Ts(i){return ke(i).Ea.size===0}function Tv(i){i.Va=void 0}async function lA(i){i.Ra.set("Online")}async function uA(i){i.Ia.forEach(((e,t)=>{mf(i,e)}))}async function cA(i,e){Tv(i),yf(i)?(i.Ra.ha(e),gf(i)):i.Ra.set("Unknown")}async function hA(i,e,t){if(i.Ra.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){oe(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zu(i,s)}else if(e instanceof Mu?i.Va.Ze(e):e instanceof sv?i.Va.st(e):i.Va.tt(e),!t.isEqual(Ce.min()))try{const s=await yv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(v);E&&u.Ia.set(v,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),Ev(u,y);const S=new Si(E.target,y,v,E.sequenceNumber);mf(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){oe(ws,"Failed to raise snapshot:",s),await Zu(i,s)}}async function Zu(i,e,t){if(!Do(e))throw e;i.Ea.add(1),await nl(i),i.Ra.set("Offline"),t||(t=()=>yv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{oe(ws,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await mc(i)}))}function Iv(i,e){return e().catch((t=>Zu(i,t,e)))}async function gc(i){const e=ke(i),t=bi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jd;for(;dA(e);)try{const o=await GS(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,fA(e,o)}catch(o){await Zu(e,o)}Sv(e)&&Av(e)}function dA(i){return Ts(i)&&i.Ta.length<10}function fA(i,e){i.Ta.push(e);const t=bi(i);t.O_()&&t.X_&&t.ea(e.mutations)}function Sv(i){return Ts(i)&&!bi(i).x_()&&i.Ta.length>0}function Av(i){bi(i).start()}async function pA(i){bi(i).ra()}async function mA(i){const e=bi(i);for(const t of i.Ta)e.ea(t.mutations)}async function gA(i,e,t){const s=i.Ta.shift(),o=af.from(s,e,t);await Iv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await gc(i)}async function yA(i,e){e&&bi(i).X_&&await(async function(s,o){if((function(h){return JI(h)&&h!==G.ABORTED})(o.code)){const u=s.Ta.shift();bi(s).B_(),await Iv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await gc(s)}})(i,e),Sv(i)&&Av(i)}async function ry(i,e){const t=ke(i);t.asyncQueue.verifyOperationInProgress(),oe(ws,"RemoteStore received new credentials");const s=Ts(t);t.Ea.add(3),await nl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await mc(t)}async function _A(i,e){const t=ke(i);e?(t.Ea.delete(2),await mc(t)):e||(t.Ea.add(2),await nl(t),t.Ra.set("Unknown"))}function Vo(i){return i.ma||(i.ma=(function(t,s,o){const u=ke(t);return u.sa(),new nA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:lA.bind(null,i),t_:uA.bind(null,i),r_:cA.bind(null,i),H_:hA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),yf(i)?gf(i):i.Ra.set("Unknown")):(await i.ma.stop(),Tv(i))}))),i.ma}function bi(i){return i.fa||(i.fa=(function(t,s,o){const u=ke(t);return u.sa(),new rA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:pA.bind(null,i),r_:yA.bind(null,i),ta:mA.bind(null,i),na:gA.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await gc(i)):(await i.fa.stop(),i.Ta.length>0&&(oe(ws,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class _f{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new _f(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(i,e){if(Fr("AsyncQueue",`${e}: ${i}`),Do(i))return new fe(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class iy{constructor(){this.ga=new rt(ge.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Ao{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Ao(e,t,yo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class vA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class wA{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ke(t),u=o.queries;o.queries=sy(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new fe(G.ABORTED,"Firestore shutting down"))}}function sy(){return new Es((i=>H_(i)),uc)}async function EA(i,e){const t=ke(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new vA,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=vf(h,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&wf(t)}async function TA(i,e){const t=ke(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function IA(i,e){const t=ke(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&wf(t)}function SA(i,e,t){const s=ke(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function wf(i){i.Ca.forEach((e=>{e.next()}))}var Vd,oy;(oy=Vd||(Vd={})).Ma="default",oy.Cache="cache";class AA{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vd.Cache}}/**
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
 */class Cv{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class CA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ve(),this.mutatedKeys=Ve(),this.eu=q_(e),this.tu=new yo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new iy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,S)=>{const x=o.get(E),B=cc(this.query,S)?S:null,Z=!!x&&this.mutatedKeys.has(x.key),J=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let H=!1;x&&B?x.data.isEqual(B.data)?Z!==J&&(s.track({type:3,doc:B}),H=!0):this.su(x,B)||(s.track({type:2,doc:B}),H=!0,(y&&this.eu(B,y)>0||v&&this.eu(B,v)<0)&&(m=!0)):!x&&B?(s.track({type:0,doc:B}),H=!0):x&&!B&&(s.track({type:1,doc:x}),H=!0,(y||v)&&(m=!0)),H&&(B?(h=h.add(B),u=J?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,S)=>(function(B,Z){const J=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:H})}};return J(B)-J(Z)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new Ao(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Rv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Cv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ef="SyncEngine";class RA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class kA{constructor(e){this.key=e,this.hu=!1}}class PA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Es((m=>H_(m)),uc),this.Iu=new Map,this.Eu=new Set,this.du=new rt(ge.comparator),this.Au=new Map,this.Ru=new cf,this.Vu={},this.mu=new Map,this.fu=So.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xA(i,e,t=!0){const s=Vv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await kv(s,e,t,!0),o}async function NA(i,e){const t=Vv(i);await kv(t,e,!0,!1)}async function kv(i,e,t,s){const o=await KS(i.localStore,ar(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await DA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&wv(i.remoteStore,o),m}async function DA(i,e,t,s,o){i.pu=(S,x,B)=>(async function(J,H,ye,we){let Ae=H.view.ru(ye);Ae.Cs&&(Ae=await Jg(J.localStore,H.query,!1).then((({documents:k})=>H.view.ru(k,Ae))));const Te=we&&we.targetChanges.get(H.targetId),$e=we&&we.targetMismatches.get(H.targetId)!=null,Pe=H.view.applyChanges(Ae,J.isPrimaryClient,Te,$e);return ly(J,H.targetId,Pe.au),Pe.snapshot})(i,S,x,B);const u=await Jg(i.localStore,e,!0),h=new CA(e,u.Qs),m=h.ru(u.documents),y=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);ly(i,t,v.au);const E=new RA(e,t,h);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function VA(i,e,t){const s=ke(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!uc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Nd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&pf(s.remoteStore,o.targetId),Od(s,o.targetId)})).catch(No)):(Od(s,o.targetId),await Nd(s.localStore,o.targetId,!0))}async function OA(i,e){const t=ke(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pf(t.remoteStore,s.targetId))}async function bA(i,e,t){const s=BA(i);try{const o=await(function(h,m){const y=ke(h),v=Ze.now(),E=m.reduce(((B,Z)=>B.add(Z.key)),Ve());let S,x;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Z=Ur(),J=Ve();return y.Ns.getEntries(B,E).next((H=>{Z=H,Z.forEach(((ye,we)=>{we.isValidDocument()||(J=J.add(ye))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,Z))).next((H=>{S=H;const ye=[];for(const we of m){const Ae=GI(we,S.get(we.key).overlayedDocument);Ae!=null&&ye.push(new Fi(we.key,Ae,L_(Ae.value.mapValue),Fn.exists(!0)))}return y.mutationQueue.addMutationBatch(B,v,ye,m)})).next((H=>{x=H;const ye=H.applyToLocalDocumentSet(S,J);return y.documentOverlayCache.saveOverlays(B,H.batchId,ye)}))})).then((()=>({batchId:x.batchId,changes:G_(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new rt(De)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v})(s,o.batchId,t),await rl(s,o.changes),await gc(s.remoteStore)}catch(o){const u=vf(o,"Failed to persist write");t.reject(u)}}async function Pv(i,e){const t=ke(i);try{const s=await qS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await rl(t,s,e)}catch(s){await No(s)}}function ay(i,e,t){const s=ke(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=ke(h);y.onlineState=m;let v=!1;y.queries.forEach(((E,S)=>{for(const x of S.Sa)x.va(m)&&(v=!0)})),v&&wf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function MA(i,e,t){const s=ke(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new rt(ge.comparator);h=h.insert(u,Bt.newNoDocument(u,Ce.min()));const m=Ve().add(u),y=new fc(Ce.min(),new Map,new rt(De),h,m);await Pv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Tf(s)}else await Nd(s.localStore,e,!1).then((()=>Od(s,e,t))).catch(No)}async function LA(i,e){const t=ke(i),s=e.batch.batchId;try{const o=await HS(t.localStore,e);Nv(t,s,null),xv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await No(o)}}async function FA(i,e,t){const s=ke(i);try{const o=await(function(h,m){const y=ke(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return y.mutationQueue.lookupMutationBatch(v,m).next((S=>(je(S!==null,37113),E=S.keys(),y.mutationQueue.removeMutationBatch(v,S)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>y.localDocuments.getDocuments(v,E)))}))})(s.localStore,e);Nv(s,e,t),xv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await No(o)}}function xv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Nv(i,e,t){const s=ke(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Od(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||Dv(i,s)}))}function Dv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(pf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Tf(i))}function ly(i,e,t){for(const s of t)s instanceof Cv?(i.Ru.addReference(s.key,e),UA(i,s)):s instanceof Rv?(oe(Ef,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Dv(i,s.key)):Ee(19791,{wu:s})}function UA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(oe(Ef,"New document in limbo: "+t),i.Eu.add(s),Tf(i))}function Tf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new ge(Je.fromString(e)),s=i.fu.next();i.Au.set(s,new kA(t)),i.du=i.du.insert(t,s),wv(i.remoteStore,new Si(ar(rf(t.path)),s,"TargetPurposeLimboResolution",sc.ce))}}async function rl(i,e,t){const s=ke(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{var E;if((v||t)&&s.isPrimaryClient){const S=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(v){o.push(v);const S=df.As(y.targetId,v);u.push(S)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,v){const E=ke(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>$.forEach(v,(x=>$.forEach(x.Es,(B=>E.persistence.referenceDelegate.addReference(S,x.targetId,B))).next((()=>$.forEach(x.ds,(B=>E.persistence.referenceDelegate.removeReference(S,x.targetId,B)))))))))}catch(S){if(!Do(S))throw S;oe(ff,"Failed to update sequence numbers: "+S)}for(const S of v){const x=S.targetId;if(!S.fromCache){const B=E.Ms.get(x),Z=B.snapshotVersion,J=B.withLastLimboFreeSnapshotVersion(Z);E.Ms=E.Ms.insert(x,J)}}})(s.localStore,u))}async function jA(i,e){const t=ke(i);if(!t.currentUser.isEqual(e)){oe(Ef,"User change. New user:",e.toKey());const s=await gv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new fe(G.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Ls)}}function zA(i,e){const t=ke(i),s=t.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Vv(i){const e=ke(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MA.bind(null,e),e.Pu.H_=IA.bind(null,e.eventManager),e.Pu.yu=SA.bind(null,e.eventManager),e}function BA(i){const e=ke(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FA.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return $S(this.persistence,new jS,e.initialUser,this.serializer)}Cu(e){return new mv(hf.mi,this.serializer)}Du(e){return new YS}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class $A extends ec{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new AS(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new mv((s=>Ju.mi(s,t)),this.serializer)}}class bd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jA.bind(null,this.syncEngine),await _A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wA})()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=(function(u){return new tA(u)})(e.databaseInfo);return(function(u,h,m,y){return new sA(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new aA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ay(this.syncEngine,t,0)),(function(){return ty.v()?new ty:new XS})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,E){const S=new PA(o,u,h,m,y,v);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ke(o);oe(ws,"RemoteStore shutting down."),u.Ea.add(5),await nl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}bd.provider={build:()=>new bd};/**
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
 */class HA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Mi="FirestoreClient";class qA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{oe(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ad(i,e){i.asyncQueue.verifyOperationInProgress(),oe(Mi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await gv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function uy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await WA(i);oe(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ry(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ry(e.remoteStore,o))),i._onlineComponents=e}async function WA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(Mi,"Using user provided OfflineComponentProvider");try{await ad(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await ad(i,new ec)}}else oe(Mi,"Using default OfflineComponentProvider"),await ad(i,new $A(void 0));return i._offlineComponents}async function Ov(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(Mi,"Using user provided OnlineComponentProvider"),await uy(i,i._uninitializedComponentsProvider._online)):(oe(Mi,"Using default OnlineComponentProvider"),await uy(i,new bd))),i._onlineComponents}function GA(i){return Ov(i).then((e=>e.syncEngine))}async function cy(i){const e=await Ov(i),t=e.eventManager;return t.onListen=xA.bind(null,e.syncEngine),t.onUnlisten=VA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function bv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const hy=new Map;/**
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
 */const Mv="firestore.googleapis.com",dy=!0;class fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mv,this.ssl=dy}else this.host=e.host,this.ssl=e.ssl??dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IS)throw new fe(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new X1;switch(s.type){case"firstParty":return new tI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=hy.get(t);s&&(oe("ComponentProvider","Removing Datastore"),hy.delete(t),s.terminate())})(this),Promise.resolve()}}function KA(i,e,t,s={}){var v;i=Pi(i,yc);const o=Ro(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Vy(`https://${m}`),Oy("Firestore",!0)),u.host!==Mv&&u.host!==m&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!gs(y,h)&&(i._setSettings(y),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=zt.MOCK_USER;else{E=ww(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new fe(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new zt(x)}i._authCredentials=new J1(new A_(E,S))}}/**
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
 */class _c{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _c(this.firestore,e,this._query)}}class wt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Za(t,wt._jsonSchema))return new wt(e,s||null,new ge(Je.fromString(t.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:mt("string",wt._jsonSchemaVersion),referencePath:mt("string")};class xi extends _c{constructor(e,t,s){super(e,t,rf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new ge(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function Cu(i,e,...t){if(i=Ht(i),C_("collection","path",e),i instanceof yc){const s=Je.fromString(e,...t);return Cg(s),new xi(i,null,s)}{if(!(i instanceof wt||i instanceof xi))throw new fe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return Cg(s),new xi(i.firestore,null,s)}}function ka(i,e,...t){if(i=Ht(i),arguments.length===1&&(e=Yd.newId()),C_("doc","path",e),i instanceof yc){const s=Je.fromString(e,...t);return Ag(s),new wt(i,null,new ge(s))}{if(!(i instanceof wt||i instanceof xi))throw new fe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return Ag(s),new wt(i.firestore,i instanceof xi?i.converter:null,new ge(s))}}/**
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
 */const py="AsyncQueue";class my{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _v(this,"async_queue_retry"),this._c=()=>{const s=od();s&&oe(py,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ps;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Do(e))throw e;oe(py,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",gy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=_f.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ee(47125,{Pc:gy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function yy(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Co extends yc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new my,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new my(e),this._firestoreClient=void 0,await e}}}function QA(i,e){const t=typeof i=="object"?i:Fy(),s=typeof i=="string"?i:Gu,o=jd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=_w("firestore");u&&KA(o,...u)}return o}function Lv(i){if(i._terminated)throw new fe(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||YA(i),i._firestoreClient}function YA(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,v,E){return new _I(m,y,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,bv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new qA(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Ot.fromBase64String(e))}catch(t){throw new fe(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Za(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:mt("string",Cn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class il{constructor(e){this._methodName=e}}/**
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
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(Za(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:mt("string",ur._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Za(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cr(e.vectorValues);throw new fe(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:mt("string",cr._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const XA=/^__.*__$/;class JA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}class Fv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Uv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:i})}}class If{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new If({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return tc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Uv(this.Ac)&&XA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ZA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}Cc(e,t,s,o=!1){return new If({Ac:e,methodName:t,Dc:s,path:Vt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jv(i){const e=i._freezeSettings(),t=pc(i._databaseId);return new ZA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function eC(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Cf("Data must be an object, but it was:",h,s);const m=zv(s,h);let y,v;if(u.merge)y=new mn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const x=Md(e,S,t);if(!h.contains(x))throw new fe(G.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);$v(E,x)||E.push(x)}y=new mn(E),v=h.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,v=h.fieldTransforms;return new JA(new nn(m),y,v)}class wc extends il{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wc}}class Sf extends il{_toFieldTransform(e){return new tv(e.path,new Ba)}isEqual(e){return e instanceof Sf}}class Af extends il{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new qa(e.serializer,Y_(e.serializer,this.Fc));return new tv(e.path,t)}isEqual(e){return e instanceof Af&&this.Fc===e.Fc}}function tC(i,e,t,s){const o=i.Cc(1,e,t);Cf("Data must be an object, but it was:",o,s);const u=[],h=nn.empty();Li(s,((y,v)=>{const E=Rf(e,y,t);v=Ht(v);const S=o.yc(E);if(v instanceof wc)u.push(E);else{const x=Ec(v,S);x!=null&&(u.push(E),h.set(E,x))}}));const m=new mn(u);return new Fv(h,m,o.fieldTransforms)}function nC(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[Md(e,s,t)],y=[o];if(u.length%2!=0)throw new fe(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<u.length;x+=2)m.push(Md(e,u[x])),y.push(u[x+1]);const v=[],E=nn.empty();for(let x=m.length-1;x>=0;--x)if(!$v(v,m[x])){const B=m[x];let Z=y[x];Z=Ht(Z);const J=h.yc(B);if(Z instanceof wc)v.push(B);else{const H=Ec(Z,J);H!=null&&(v.push(B),E.set(B,H))}}const S=new mn(v);return new Fv(E,S,h.fieldTransforms)}function Ec(i,e){if(Bv(i=Ht(i)))return Cf("Unsupported field value:",e,i),zv(i,e);if(i instanceof il)return(function(s,o){if(!Uv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Ec(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Ht(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Y_(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ze.fromDate(s);return{timestampValue:Xu(o.serializer,u)}}if(s instanceof Ze){const u=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xu(o.serializer,u)}}if(s instanceof ur)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Cn)return{bytesValue:av(o.serializer,s._byteString)};if(s instanceof wt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:uf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof cr)return(function(h,m){return{mapValue:{fields:{[b_]:{stringValue:M_},[Ku]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return sf(m.serializer,v)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Xd(s)}`)})(i,e)}function zv(i,e){const t={};return P_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(i,((s,o)=>{const u=Ec(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Bv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ze||i instanceof ur||i instanceof Cn||i instanceof wt||i instanceof il||i instanceof cr)}function Cf(i,e,t){if(!Bv(t)||!R_(t)){const s=Xd(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Md(i,e,t){if((e=Ht(e))instanceof vc)return e._internalPath;if(typeof e=="string")return Rf(i,e);throw tc("Field path arguments must be of type string or ",i,!1,void 0,t)}const rC=new RegExp("[~\\*/\\[\\]]");function Rf(i,e,t){if(e.search(rC)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new vc(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function tc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new fe(G.INVALID_ARGUMENT,m+i+y)}function $v(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class Hv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iC extends Hv{data(){return super.data()}}function qv(i,e){return typeof e=="string"?Rf(i,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
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
 */function sC(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new fe(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oC{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Li(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Ku].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ut(h.doubleValue)));return new cr(t)}convertGeoPoint(e){return new ur(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ac(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const t=Di(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);je(fv(s),9688,{name:e});const o=new ja(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function aC(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends Hv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ms._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:mt("string",ms._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class Lu extends ms{data(e={}){return super.data(e)}}class _o{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Lu(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:lC(m.type),doc:y,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:i})}}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:mt("string",_o._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class Wv extends oC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function _y(i,e,t,...s){i=Pi(i,wt);const o=Pi(i.firestore,Co),u=jv(o);let h;return h=typeof(e=Ht(e))=="string"||e instanceof vc?nC(u,"updateDoc",i._key,e,t,s):tC(u,"updateDoc",i._key,e),kf(o,[h.toMutation(i._key,Fn.exists(!0))])}function ld(i){return kf(Pi(i.firestore,Co),[new of(i._key,Fn.none())])}function vy(i,e){const t=Pi(i.firestore,Co),s=ka(i),o=aC(i.converter,e);return kf(t,[eC(jv(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Fn.exists(!1))]).then((()=>s))}function wy(i,...e){var y,v,E;i=Ht(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||yy(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yy(e[s])){const S=e[s];e[s]=(y=S.next)==null?void 0:y.bind(S),e[s+1]=(v=S.error)==null?void 0:v.bind(S),e[s+2]=(E=S.complete)==null?void 0:E.bind(S)}let u,h,m;if(i instanceof wt)h=Pi(i.firestore,Co),m=rf(i._key.path),u={next:S=>{e[s]&&e[s](uC(h,i,S))},error:e[s+1],complete:e[s+2]};else{const S=Pi(i,_c);h=Pi(S.firestore,Co),m=S._query;const x=new Wv(h);u={next:B=>{e[s]&&e[s](new _o(h,x,S,B))},error:e[s+1],complete:e[s+2]},sC(i._query)}return(function(x,B,Z,J){const H=new HA(J),ye=new AA(B,H,Z);return x.asyncQueue.enqueueAndForget((async()=>EA(await cy(x),ye))),()=>{H.Nu(),x.asyncQueue.enqueueAndForget((async()=>TA(await cy(x),ye)))}})(Lv(h),m,o,u)}function kf(i,e){return(function(s,o){const u=new ps;return s.asyncQueue.enqueueAndForget((async()=>bA(await GA(s),o,u))),u.promise})(Lv(i),e)}function uC(i,e,t){const s=t.docs.get(e._key),o=new Wv(i);return new ms(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}function cC(){return new Sf("serverTimestamp")}function Ey(i){return new Af("increment",i)}(function(e,t=!0){(function(o){xo=o})(ko),vo(new ys("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Co(new Z1(s.getProvider("auth-internal")),new nI(h,s.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new fe(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(v.options.projectId,E)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Ri(Eg,Tg,e),Ri(Eg,Tg,"esm2020")})();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=ot.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>ot.createElement("svg",{ref:y,...dC,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Gv("lucide",o),...m},[...h.map(([v,E])=>ot.createElement(v,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=(i,e)=>{const t=ot.forwardRef(({className:s,...o},u)=>ot.createElement(fC,{ref:u,iconNode:e,className:Gv(`lucide-${hC(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Kt("BookMarked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=Kt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=Kt("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Kt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Kt("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=Kt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Kt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Kt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=Kt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=Kt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=Kt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Kt("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=Kt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Kt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Kt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),EC=JSON.parse(__firebase_config),Kv=Ly(EC),Ru=Q1(Kv),_i=QA(Kv),vi=typeof __app_id<"u"?__app_id:"default-app-id",TC="",IC=i=>{if(!i)return"¥";const e=i.toUpperCase().trim();return["YEN","JP¥","JPY","JAPANESE YEN","Y"].includes(e)?"¥":["USD","US$"].includes(e)?"$":["EUR","EURO"].includes(e)?"€":i},SC=i=>{if(!i)return null;const e=/(.*?)\s*\((.*?)\)/,t=i.match(e);let s=i,o=null;t&&t.length===3&&(s=t[1].trim(),o=t[2].trim());let u=null;return o&&(u=o.split(/\s+/).filter(m=>m.length>0).join(" ")),{kana:s,formattedRomaji:u}},AC=i=>i?i.replace(/\s*\([^)]*\)/g,"").trim():"";function CC(){const[i,e]=ot.useState(null),[t,s]=ot.useState([]),[o,u]=ot.useState([]),[h,m]=ot.useState(!1),[y,v]=ot.useState(""),[E,S]=ot.useState(!1),[x,B]=ot.useState(!0),Z=ot.useRef(null),[J,H]=ot.useState(!1),[ye,we]=ot.useState(null),[Ae,Te]=ot.useState(""),[$e,Pe]=ot.useState(!1);ot.useEffect(()=>{(async()=>{typeof __initial_auth_token<"u"&&__initial_auth_token?await bT(Ru,__initial_auth_token):await xT(Ru)})();const q=FT(Ru,Q=>{e(Q),B(!1)});return()=>q()},[Ru]),ot.useEffect(()=>{if(Ae){const b=setTimeout(()=>Te(""),5e3);return()=>clearTimeout(b)}},[Ae]),ot.useEffect(()=>{if(!i)return;const b=Cu(_i,"artifacts",vi,"users",i.uid,"menu_items"),q=wy(b,Q=>{const ne=Q.docs.map(re=>({id:re.id,...re.data()}));ne.sort((re,ce)=>{var le,pe;return(((le=ce.timestamp)==null?void 0:le.toMillis())||0)-(((pe=re.timestamp)==null?void 0:pe.toMillis())||0)}),s(ne)},Q=>console.error("Menu fetch error:",Q));return()=>q()},[i]),ot.useEffect(()=>{if(!i)return;const b=Cu(_i,"artifacts",vi,"users",i.uid,"cart_items"),q=wy(b,Q=>{u(Q.docs.map(ne=>({id:ne.id,...ne.data()})))},Q=>console.error("Cart fetch error:",Q));return()=>q()},[i]);const k=b=>{const q=b.reduce((ne,re)=>{const ce=re.category&&re.category.trim()!==""?re.category:"未分类";return ne[ce]||(ne[ce]=[]),ne[ce].push(re),ne},{});return Object.keys(q).sort((ne,re)=>{const ce=ne.includes("主菜")||ne.includes("烧鸟")||ne.includes("寿司"),le=re.includes("主菜")||re.includes("烧鸟")||re.includes("寿司");return ce&&!le?-1:!ce&&le||ne.includes("甜品")&&!re.includes("甜品")?1:!ne.includes("甜品")&&re.includes("甜品")?-1:ne.localeCompare(re)}).map(ne=>({category:ne,items:q[ne]}))},I=b=>{if(!b||b.length===0)return[];const q=[...b].sort((ce,le)=>{var pe,Ue;return(((pe=le.timestamp)==null?void 0:pe.toMillis())||0)-(((Ue=ce.timestamp)==null?void 0:Ue.toMillis())||0)}),Q=[],ne=300*1e3,re=new Set;return q.forEach(ce=>{var Ue,rn;if(re.has(ce.id))return;const le=(Ue=ce.timestamp)==null?void 0:Ue.toMillis();if(!le)return;const pe={id:ce.id,name:new Date(le).toLocaleString("zh-CN",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),timestamp:le,items:[],count:0};pe.items.push(ce),pe.count++,re.add(ce.id);for(const sn of q){if(re.has(sn.id))continue;const It=(rn=sn.timestamp)==null?void 0:rn.toMillis();It&&Math.abs(le-It)<ne&&(pe.items.push(sn),pe.count++,re.add(sn.id))}Q.push(pe)}),Q.sort((ce,le)=>le.timestamp-ce.timestamp)},C=b=>new Promise(q=>{const Q=new FileReader;Q.readAsDataURL(b),Q.onload=ne=>{const re=new Image;re.src=ne.target.result,re.onload=()=>{const ce=document.createElement("canvas"),le=1024;let pe=re.width,Ue=re.height;pe>le&&(Ue*=le/pe,pe=le),ce.width=pe,ce.height=Ue,ce.getContext("2d").drawImage(re,0,0,pe,Ue),q(ce.toDataURL("image/jpeg",.7))}}}),D=async b=>{var ce,le,pe,Ue,rn,sn;const q=b.split(",")[1],Q=`
			You are an expert menu translator and food critic. Your task is to analyze the menu image and extract dish details, including an estimated calorie count.
			
			Identify ALL distinct dishes and their corresponding details. For each dish, return a JSON object with these fields. 
			If a field is not explicitly present or can't be reliably inferred, use an empty string "" for its value.

			- "original": Original name of the dish (e.g. in Japanese, French, etc.)
			- "translation": High-quality, appetizing Chinese translation for a restaurant setting.
			- "pronunciation": Pronunciation guide. If Japanese, provide both the Hiragana/Katakana reading and the Romaji (Latinized spelling like "kurogewagyu") in parentheses, e.g., "くろげわぎゅう (KUROGEWAGYU)". For other languages, use phonetic spelling or Pinyin.
			- "lang_code": The ISO 639-1 language code for the "original" text (e.g., 'ja-JP', 'fr-FR').
			- "price": Numeric price (extract only the number).
			- "currency": Currency symbol (e.g. ¥, $, €, ₩, ฿) or code (e.g., YEN, USD).
			- "desc": A short, enticing description in Chinese (max 25 words).
			- "calories": An estimated number of calories for a typical serving of this dish (numeric).
            - "category": The dish's general category (e.g., 主菜 (Main Course), 烧鸟 (Yakitori), 甜品 (Dessert), 寿司 (Sushi), 饮品 (Drink)) in Chinese.

			Return ONLY a raw JSON array of dish objects. Do not include any other text or formatting outside the JSON array. Ensure the output is a valid JSON array.
		`,ne=3;let re=null;for(let It=0;It<ne;It++){if(It>0){const gt=Math.pow(2,It)*1e3;await new Promise(Ui=>setTimeout(Ui,gt)),console.log(`Retrying AI call... Attempt ${It+1}`)}try{const gt=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${TC}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:Q},{inlineData:{mimeType:"image/jpeg",data:q}}]}],generationConfig:{temperature:.2}})});if(!gt.ok){const gn=await gt.json();if(re=new Error(`AI API Error: ${gt.status} - ${((ce=gn.error)==null?void 0:ce.message)||gt.statusText}`),gt.status===429||gt.status>=500)continue;throw re}const Un=(sn=(rn=(Ue=(pe=(le=(await gt.json()).candidates)==null?void 0:le[0])==null?void 0:pe.content)==null?void 0:Ue.parts)==null?void 0:rn[0])==null?void 0:sn.text;let Rn;try{Rn=JSON.parse(Un)}catch(gn){console.warn("Initial JSON parse failed. Attempting robust extraction...",gn);let We=Un.trim();We=We.replace(/^```json\s*|```\s*$/g,"").trim();const Ke=We.indexOf("[");if(Ke===-1)throw console.error("Gemini Raw Text (no valid array found):",Un),new Error("Failed to parse AI response: no valid JSON array structure found.");let ht=We.substring(Ke),zr=ht.lastIndexOf("]");if(zr===-1){let qt=ht.trim();qt.endsWith(",")&&(qt=qt.substring(0,qt.length-1),console.warn("Repaired JSON: Removed trailing comma.")),qt.endsWith("]")?ht=qt:(ht=qt+"]",console.warn("Repaired JSON: Added missing closing bracket."))}else ht=We.substring(Ke,zr+1);if(ht.length<5)throw new Error("Extracted JSON string is too short or empty.");try{Rn=JSON.parse(ht)}catch(qt){throw re=qt,console.error("Gemini Raw Text (Final Parse Failed):",ht),new Error("Failed to parse AI response: extracted content is invalid.")}}return Rn.filter(gn=>gn.price>0&&gn.translation)}catch(gt){if(re=gt,It===ne-1)throw gt}}throw re||new Error("Maximum retries reached without a successful AI response.")},P=async b=>{const q=Array.from(b.target.files);if(!(q.length===0||!i)){m(!0),v(`准备处理 ${q.length} 张图片...`);try{for(let Q=0;Q<q.length;Q++){const ne=q[Q];if(v(`[${Q+1}/${q.length}] 正在压缩图片...`),ne.size>10*1024*1024){Te(`文件太大 (${(ne.size/1024/1024).toFixed(1)}MB)，请选择小于 10MB 的图片。`);continue}const re=await C(ne);v(`[${Q+1}/${q.length}] 小 Qirl 正在识别和翻译...`);const ce=await D(re);v(`[${Q+1}/${q.length}] 找到 ${ce.length} 道菜品，正在存储...`);const le=ce.map(async pe=>{const Ue=IC(pe.currency);return vy(Cu(_i,"artifacts",vi,"users",i.uid,"menu_items"),{...pe,currency:Ue,timestamp:cC(),lang_code:pe.lang_code||"",category:pe.category||"",calories:typeof pe.calories=="number"?pe.calories:parseInt(pe.calories)||""})});await Promise.all(le),Te(`[${Q+1}/${q.length}] 处理完毕，新菜单已自动更新。`)}v(`所有 ${q.length} 张图片处理完毕。`)}catch(Q){console.error("Scan failed",Q),Te("识别失败，请确保图片清晰，网络畅通。")}finally{m(!1),v(""),Z.current&&(Z.current.value="")}}},O=()=>{var b;(b=Z.current)==null||b.click()},A=async b=>{if(!i)return;const q=o.find(Q=>Q.menuItemId===b.id);if(q){const Q=ka(_i,"artifacts",vi,"users",i.uid,"cart_items",q.id);await _y(Q,{quantity:Ey(1)})}else await vy(Cu(_i,"artifacts",vi,"users",i.uid,"cart_items"),{menuItemId:b.id,name:b.translation,originalName:b.original,pronunciation:b.pronunciation,price:b.price,currency:b.currency,quantity:1})},Be=async b=>{if(!i)return;const q=ka(_i,"artifacts",vi,"users",i.uid,"cart_items",b),Q=o.find(ne=>ne.id===b);Q&&Q.quantity>1?await _y(q,{quantity:Ey(-1)}):await ld(q)},ct=async()=>{if(!i)return;const b=t.map(Q=>ld(ka(_i,"artifacts",vi,"users",i.uid,"menu_items",Q.id))),q=o.map(Q=>ld(ka(_i,"artifacts",vi,"users",i.uid,"cart_items",Q.id)));await Promise.all([...b,...q]),H(!1),Te("菜单和订单已全部清空。")},Tt=(b,q)=>{if(!("speechSynthesis"in window)){Te("您的浏览器不支持 Web Speech API。");return}if(!b||b.trim().length<2){Te("发音内容为空或无法识别。");return}const Q=new SpeechSynthesisUtterance(b);Q.rate=.7;let ne="en-US";q&&q.toLowerCase().includes("ja")?ne="ja-JP":q&&q.toLowerCase().includes("ko")?ne="ko-KR":q&&q.toLowerCase().includes("fr")&&(ne="fr-FR"),Q.lang=ne;const re=window.speechSynthesis.getVoices(),ce=re.find(le=>le.lang===Q.lang);if(ce)Q.voice=ce;else{const le=re.find(pe=>pe.default);le&&(Q.voice=le)}window.speechSynthesis.speaking&&window.speechSynthesis.cancel();try{window.speechSynthesis.speak(Q)}catch(le){console.error("Speech Synthesis Error:",le),Te("发音失败。浏览器可能阻止了自动播放，请点击屏幕后重试。")}},qe=k(t),te=I(t),me=o.reduce((b,q)=>b+q.quantity,0),ie=o.length>0?o[0].currency:"¥",V=o.reduce((b,q)=>b+q.price*q.quantity,0);return x?U.jsxs("div",{className:"flex items-center justify-center h-screen bg-amber-50 text-gray-800",children:[U.jsx(Iy,{className:"animate-spin mr-2"})," 初始化 食神 Qirl..."]}):U.jsxs("div",{className:"min-h-screen bg-amber-50 text-gray-800 font-sans pb-28 relative overflow-hidden",children:[U.jsx("input",{type:"file",ref:Z,onChange:P,accept:"image/*",multiple:!0,className:"hidden"}),U.jsx("div",{className:"fixed top-[-10%] right-[-10%] w-64 h-64 bg-red-200/50 rounded-full blur-3xl pointer-events-none"}),U.jsx("div",{className:"fixed bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-200/50 rounded-full blur-3xl pointer-events-none"}),U.jsxs("div",{className:"sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-lg",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("div",{className:"bg-gradient-to-tr from-rose-500 to-orange-500 p-2 rounded-lg shadow-md border-2 border-gray-900 shadow-[2px_2px_0_0_#444]",children:U.jsx(Ty,{size:20,className:"text-white"})}),U.jsx("h1",{className:"text-xl font-extrabold text-gray-900 tracking-wider",children:"食神 Qirl"})]}),U.jsxs("div",{className:"flex items-center gap-3",children:[t.length>0&&U.jsxs("button",{onClick:()=>Pe(!0),className:"text-xs text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5",children:[U.jsx(ud,{size:14})," 历史"]}),t.length>0&&U.jsxs("button",{onClick:()=>H(!0),className:"text-xs text-gray-700 hover:text-red-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5",children:[U.jsx(gC,{size:14})," 清空"]})]})]}),U.jsxs("div",{className:"p-4 max-w-3xl mx-auto min-h-[60vh]",children:[t.length===0&&!h&&U.jsxs("div",{className:"flex flex-col items-center justify-center mt-24 text-center space-y-6 opacity-90 animate-fade-in",children:[U.jsx("div",{onClick:O,className:"w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-900 shadow-[6px_6px_0_0_#A1A1AA] cursor-pointer hover:shadow-[8px_8px_0_0_#71717A] transition-all group",children:U.jsx(mC,{size:32,className:"text-gray-600 group-hover:text-orange-500 transition-colors"})}),U.jsxs("div",{children:[U.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"拍摄或上传菜单"}),U.jsx("p",{className:"text-sm text-gray-600 mt-2 max-w-[250px] mx-auto leading-relaxed",children:"点击上方按钮或下方相机按钮，小 Qirl 为您翻译。"})]})]}),t.length>0&&!h&&U.jsxs("div",{onClick:()=>Te("请点击菜品卡片上的 '查看菜品' 按钮进行搜索"),className:"mb-8 p-3 bg-white rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 cursor-pointer hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all",children:[U.jsx(cd,{size:18,className:"text-gray-500"}),U.jsx("span",{className:"text-gray-500 text-sm",children:"搜索已翻译的菜品... (点击菜品卡片查看详情)"})]}),U.jsx("div",{className:"space-y-10 pb-4",children:qe.map(b=>U.jsxs("div",{className:"animate-fade-in",children:[U.jsxs("div",{className:"mb-6 pb-3 border-b-4 border-red-500/80",children:[U.jsxs("h2",{className:"text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2",children:[U.jsx(Ty,{size:28,className:"text-red-500"}),AC(b.category)]}),U.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["共 ",b.items.length," 道菜品"]})]}),U.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:b.items.map(q=>{const Q=SC(q.pronunciation);return U.jsxs("div",{className:"group relative bg-white border-2 border-gray-900 rounded-xl overflow-hidden transition-all duration-100 shadow-[8px_8px_0_0_#A1A1AA] hover:shadow-[10px_10px_0_0_#71717A]",children:[U.jsxs("div",{className:"bg-gradient-to-br from-amber-100 to-yellow-100 p-4 border-b-2 border-gray-900",children:[U.jsx("h3",{className:"text-xl font-extrabold text-gray-900 leading-tight mb-1",children:q.translation}),U.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1",children:[U.jsx("span",{className:"italic font-medium text-gray-700",children:q.original}),Q&&U.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-sm font-semibold uppercase tracking-tight bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-sm",children:[U.jsx("span",{className:"text-xs font-medium text-indigo-800",children:Q.kana}),Q.formattedRomaji&&U.jsxs("span",{className:"text-[11px] font-semibold text-indigo-600",children:["(",Q.formattedRomaji,")"]})]})]})]}),U.jsxs("div",{className:"p-4 pt-3 space-y-3 bg-amber-50/70",children:[U.jsx("p",{className:"text-xs text-gray-700 line-clamp-3 leading-relaxed border-l-2 border-orange-400 pl-2",children:q.desc}),U.jsxs("div",{className:"flex justify-between items-center font-mono font-bold pt-2 border-t border-dashed border-gray-300",children:[U.jsxs("div",{className:"flex flex-col items-start",children:[U.jsxs("span",{className:"text-2xl tracking-tight text-red-600",children:[q.currency,q.price," "]}),q.calories&&U.jsxs("span",{className:"text-xs text-gray-600 mt-1 flex items-center gap-1",children:[U.jsx(Cy,{size:12,className:"text-yellow-600 fill-yellow-600"}),"约 ",q.calories," **千卡**"]})]}),U.jsxs("button",{onClick:()=>we(q),className:"px-3 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900 shadow-[3px_3px_0_0_#444] leading-none",children:[U.jsx(cd,{size:16}),"查看菜品"]})]}),U.jsxs("div",{className:"flex items-center justify-between pt-3 mt-1 border-t border-gray-200",children:[U.jsx("button",{onClick:()=>Tt(q.original,q.lang_code),className:"w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center text-xs font-medium border-2 border-gray-900 shadow-[2px_2px_0_0_#444]",children:U.jsx(wC,{size:18})}),U.jsxs("button",{onClick:()=>A(q),className:"px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 leading-none",children:[U.jsx(Sy,{size:16,className:"stroke-[3px]"}),"加入订单"]})]})]})]},q.id)})})]},b.category))})]}),U.jsxs("div",{className:"fixed inset-0 z-50 bg-amber-50/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-fade-in",style:{display:h?"flex":"none"},children:[U.jsxs("div",{className:"relative w-40 h-40 mb-8 flex items-center justify-center",children:[U.jsx("div",{className:"absolute w-full h-full bg-red-200 rounded-full blur-2xl opacity-60 animate-pulse-slow"}),U.jsx("div",{className:"relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-gray-900 shadow-[6px_6px_0_0_#444] transform transition-transform animate-breathe",children:U.jsx(ud,{size:48,className:"text-orange-500 animate-jump-and-spin"})})]}),U.jsx("h2",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:"小 Qirl 正在识别"}),U.jsxs("div",{className:"flex items-center gap-2 text-orange-600 font-mono text-sm bg-orange-100 px-3 py-1 rounded-full border border-orange-300",children:[U.jsx(Iy,{size:14,className:"animate-spin"}),y]})]}),U.jsx("div",{className:"fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none",children:U.jsxs("button",{onClick:O,disabled:h,className:"pointer-events-auto group relative flex items-center justify-center",children:[U.jsx("div",{className:"absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"}),U.jsx("div",{className:"relative w-20 h-20 bg-gradient-to-tr from-orange-500 to-red-500 text-white rounded-full shadow-[6px_6px_0_0_#444] flex items-center justify-center transform transition-all hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-4 border-gray-900",children:U.jsx(pC,{size:32,className:"drop-shadow-lg"})})]})}),me>0&&U.jsxs("button",{onClick:()=>S(!0),className:"fixed bottom-10 right-6 z-40 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-[4px_4px_0_0_#444] flex items-center gap-3 hover:bg-gray-100 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900",children:[U.jsxs("div",{className:"relative",children:[U.jsx(Ay,{size:22,className:"text-gray-800"}),U.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full font-bold ring-2 ring-white",children:me})]}),U.jsxs("div",{className:"flex flex-col items-start leading-none",children:[U.jsx("span",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-wider",children:"Total"}),U.jsxs("span",{className:"font-black text-base",children:[U.jsx("span",{className:"text-lg text-gray-500 font-normal mr-1",children:"~"}),ie,V]})]})]}),E&&U.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fade-in",children:[U.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>S(!1)}),U.jsxs("div",{className:"bg-white w-full max-w-md rounded-xl p-4 sm:p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] animate-slide-up max-h-[95vh] flex flex-col",children:[U.jsx("div",{className:"w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6 sm:hidden"}),U.jsxs("div",{className:"flex justify-between items-center mb-4 pb-3 border-b-2 border-gray-200",children:[U.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2",children:[U.jsx("div",{className:"p-1 sm:p-2 bg-orange-500/10 rounded-lg text-orange-500 border-2 border-gray-900 shadow-[1px_1px_0_0_#444]",children:U.jsx(vC,{size:18})}),"当前订单"]}),U.jsx("button",{onClick:()=>S(!1),className:"p-1 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors",children:U.jsx(hd,{size:18})})]}),U.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:o.length===0?U.jsxs("div",{className:"text-center py-8 text-gray-500",children:[U.jsx(Ay,{size:40,className:"mx-auto text-gray-300 mb-3"}),U.jsx("p",{children:"您的餐盘还在等待美食..."})]}):o.map(b=>U.jsxs("div",{className:"flex justify-between items-start bg-gray-50 p-2 rounded-lg border-2 border-gray-900 shadow-[2px_2px_0_0_#444]",children:[U.jsxs("div",{className:"max-w-[65%] leading-tight",children:[U.jsx("div",{className:"font-extrabold text-gray-900 text-base",children:b.originalName}),U.jsx("div",{className:"text-sm font-medium text-gray-800",children:b.name}),b.pronunciation&&U.jsx("div",{className:"text-xs text-indigo-600 font-mono leading-tight mt-0.5",children:b.pronunciation}),U.jsxs("div",{className:"text-red-600 font-mono font-bold text-sm mt-0.5",children:[b.currency,b.price*b.quantity]})]}),U.jsxs("div",{className:"flex items-center gap-2 bg-white rounded-md px-1 py-0.5 border-2 border-gray-900 shadow-[1px_1px_0_0_#444] flex-shrink-0",children:[U.jsx("button",{onClick:()=>Be(b.id),className:"w-6 h-6 rounded-sm bg-gray-200 hover:bg-red-500/20 text-gray-700 hover:text-red-600 flex items-center justify-center transition-colors border-2 border-gray-900 shadow-[0.5px_0.5px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:b.quantity===1?U.jsx(_C,{size:12}):U.jsx(yC,{size:12})}),U.jsx("span",{className:"text-sm font-bold w-3 text-center",children:b.quantity}),U.jsx("button",{onClick:()=>A(t.find(q=>q.id===b.menuItemId)),className:"w-6 h-6 rounded-sm bg-gray-200 hover:bg-green-500/20 text-gray-700 hover:text-green-600 flex items-center justify-center transition-colors border-2 border-gray-900 shadow-[0.5px_0.5px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:U.jsx(Sy,{size:12})})]})]},b.id))}),U.jsxs("div",{className:"mt-4 pt-3 border-t-2 border-gray-200",children:[U.jsxs("div",{className:"flex justify-between items-center mb-4",children:[U.jsx("span",{className:"text-sm text-gray-500",children:"预计总额"}),U.jsxs("span",{className:"text-2xl font-black text-gray-900 tracking-tight",children:[U.jsx("span",{className:"text-sm text-gray-500 font-normal mr-0.5",children:"~"}),ie,V]})]}),U.jsx("button",{className:"w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-base shadow-[3px_3px_0_0_#444] hover:shadow-[4px_4px_0_0_#444] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900",onClick:()=>{S(!1),Te("订单已生成！服务员将很快为您服务。")},children:"确认下单"})]})]})]}),$e&&U.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fade-in",children:[U.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>Pe(!1)}),U.jsxs("div",{className:"bg-white w-full max-w-md rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] animate-slide-up max-h-[85vh] flex flex-col",children:[U.jsx("div",{className:"w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden"}),U.jsxs("div",{className:"flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4",children:[U.jsxs("h2",{className:"text-xl font-bold text-gray-900 flex items-center gap-3",children:[U.jsx(ud,{size:20,className:"text-blue-500"}),"扫描历史"]}),U.jsx("button",{onClick:()=>Pe(!1),className:"p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors",children:U.jsx(hd,{size:20})})]}),U.jsx("div",{className:"flex-1 overflow-y-auto space-y-4 pr-2",children:te.length>0?te.map((b,q)=>U.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_#444]",children:[U.jsx("h3",{className:"font-bold text-gray-900 text-lg mb-1",children:b.name}),U.jsxs("p",{className:"text-sm text-gray-600",children:["共识别 ",b.count," 道菜品。"]}),U.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:["预览: ",b.items.slice(0,3).map(Q=>Q.translation).join("、"),b.items.length>3?"...":""]}),U.jsx("button",{onClick:()=>Te("点击菜品卡片即可查看或点餐！"),className:"mt-3 text-xs text-blue-500 font-medium hover:text-blue-700",children:"[当前已显示在主菜单]"})]},q)):U.jsx("div",{className:"text-center py-12 text-gray-500",children:"暂无扫描历史。快去拍摄一张菜单吧！"})})]})]}),J&&U.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[U.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>H(!1)}),U.jsxs("div",{className:"bg-white rounded-xl p-8 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-sm w-full text-center",children:[U.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"确认清空菜单？"}),U.jsx("p",{className:"text-gray-600 mb-6",children:"您确定要删除所有扫描的菜单项和购物车内容吗？此操作不可撤销。"}),U.jsxs("div",{className:"flex justify-center gap-4",children:[U.jsx("button",{onClick:()=>H(!1),className:"px-6 py-2 border-2 border-gray-900 rounded-lg text-gray-900 bg-gray-200 hover:bg-gray-300 transition-all shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:"取消"}),U.jsx("button",{onClick:ct,className:"px-6 py-2 border-2 border-gray-900 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-all shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:"清空全部"})]})]})]}),ye&&U.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[U.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>we(null)}),U.jsxs("div",{className:"bg-white rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-xl w-full flex flex-col h-[80vh]",children:[U.jsxs("div",{className:"flex justify-between items-center border-b-2 border-gray-200 pb-3 mb-4",children:[U.jsxs("h3",{className:"text-xl font-bold text-gray-900 flex items-center gap-2",children:[U.jsx(cd,{size:20,className:"text-blue-500"}),"查看菜品详情"]}),U.jsx("button",{onClick:()=>we(null),className:"p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors",children:U.jsx(hd,{size:20})})]}),U.jsxs("div",{className:"flex flex-col mb-4",children:[U.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"正在搜索的关键词:"}),U.jsxs("div",{className:"font-extrabold text-xl text-gray-900",children:[ye.original," (",ye.translation,")"]})]}),U.jsx("div",{className:"flex-1 border-2 border-gray-900 rounded-lg overflow-hidden shadow-inner bg-gray-100",children:U.jsx("iframe",{src:`https://www.bing.com/images/search?q=${encodeURIComponent(ye.original)}&FORM=RESTAB`,title:`Image Search for ${ye.original}`,className:"w-full h-full border-0",style:{maskImage:"linear-gradient(to bottom, transparent 40px, black 60px)",WebkitMaskImage:"linear-gradient(to bottom, transparent 40px, black 60px)"}})}),U.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"* 图片搜索结果由外部搜索引擎提供，可能存在偏差。"})]})]}),Ae&&U.jsx("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-[60] p-4 bg-white rounded-xl shadow-[4px_4px_0_0_#444] border-2 border-gray-900 animate-slide-down pointer-events-auto max-w-xs sm:max-w-sm",children:U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx(Cy,{size:20,className:"text-orange-500 fill-orange-500"}),U.jsx("p",{className:"text-sm font-medium text-gray-800",children:Ae})]})}),U.jsx("style",{children:`
				/* 1. Hand-Drawn Shadow/Line Animations */
				@keyframes pulse-slow {
					0%, 100% { opacity: 0.6; transform: scale(1); }
					50% { opacity: 0.9; transform: scale(1.05); }
				}

				/* 2. Chef Hat/BookMarked Icon Animation (跳动和旋转) */
				@keyframes jump-and-spin {
						0%, 100% { 
								transform: translateY(0) scale(1) rotate(0deg); 
						}
						25% { 
								transform: translateY(-5px) scale(1.02) rotate(3deg); /* 更小的跳动 */
						}
						75% { 
								transform: translateY(-2px) scale(0.99) rotate(-3deg); /* 更小的下沉 */
						}
				}
				
				/* 3. Quick Flash Scan Line (用于扫描时的小光线) */
				@keyframes flash-quick {
						0% { transform: translateY(0%) scaleX(0.1); opacity: 0; }
						10% { opacity: 1; }
						50% { transform: translateY(100%) scaleX(0.8); opacity: 0.5; }
						90% { opacity: 1; }
						100% { transform: translateY(0%) scaleX(0.1); opacity: 0; }
				}
				
				/* 4. Breathe Animation (Subtle scale change for 3D effect) */
				@keyframes breathe {
						0%, 100% { transform: scale(1); box-shadow: 6px 6px 0 0 #444; }
						50% { transform: scale(1.02); box-shadow: 8px 8px 0 0 #444; }
				}

				/* 5. Custom Toast Slide Down Animation */
				@keyframes slide-down {
					from { transform: translate(-50%, -100%); opacity: 0; }
					to { transform: translate(-50%, 0); opacity: 1; }
				}

				/* Apply custom animation classes */
				.animate-pulse-slow {
						animation: pulse-slow 5s infinite ease-in-out; /* 调整为 5s，更慢 */
				}
				.animate-jump-and-spin {
						animation: jump-and-spin 2s infinite ease-in-out; /* 调整为 2s，更慢 */
				}
				.animate-flash-quick {
						animation: flash-quick 3s infinite ease-out; /* 调整为 3s，更慢更柔和 */
				}
				.animate-breathe {
						animation: breathe 2s infinite ease-in-out;
				}
				.animate-slide-down {
					animation: slide-down 0.3s ease-out forwards;
				}
				
				/* Transition for active button state (手绘按钮点击效果) */
				.active\\:translate-x-0\\.5:active {
						transform: translate(0.5px, 0.5px);
				}
				.active\\:translate-y-0\\.5:active {
						transform: translate(0.5px, 0.5px);
				}
				.active\\:shadow-none:active {
						box-shadow: none !important;
				}
			`})]})}uw.createRoot(document.getElementById("root")).render(U.jsx(ot.StrictMode,{children:U.jsx(CC,{})}));
