(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var qh={exports:{}},Sa={},Wh={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function tw(){if(Lm)return Ne;Lm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,Z={};function H(V,W,B){this.props=V,this.context=W,this.refs=Z,this.updater=B||z}H.prototype.isReactComponent={},H.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},H.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ye(){}ye.prototype=H.prototype;function we(V,W,B){this.props=V,this.context=W,this.refs=Z,this.updater=B||z}var Ae=we.prototype=new ye;Ae.constructor=we,ee(Ae,H.prototype),Ae.isPureReactComponent=!0;var Te=Array.isArray,He=Object.prototype.hasOwnProperty,xe={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(V,W,B){var q,X={},ne=null,oe=null;if(W!=null)for(q in W.ref!==void 0&&(oe=W.ref),W.key!==void 0&&(ne=""+W.key),W)He.call(W,q)&&!k.hasOwnProperty(q)&&(X[q]=W[q]);var le=arguments.length-2;if(le===1)X.children=B;else if(1<le){for(var pe=Array(le),Ce=0;Ce<le;Ce++)pe[Ce]=arguments[Ce+2];X.children=pe}if(V&&V.defaultProps)for(q in le=V.defaultProps,le)X[q]===void 0&&(X[q]=le[q]);return{$$typeof:i,type:V,key:ne,ref:oe,props:X,_owner:xe.current}}function C(V,W){return{$$typeof:i,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function P(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(B){return W[B]})}var O=/\/+/g;function A(V,W){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):W.toString(36)}function $e(V,W,B,q,X){var ne=typeof V;(ne==="undefined"||ne==="boolean")&&(V=null);var oe=!1;if(V===null)oe=!0;else switch(ne){case"string":case"number":oe=!0;break;case"object":switch(V.$$typeof){case i:case e:oe=!0}}if(oe)return oe=V,X=X(oe),V=q===""?"."+A(oe,0):q,Te(X)?(B="",V!=null&&(B=V.replace(O,"$&/")+"/"),$e(X,W,B,"",function(Ce){return Ce})):X!=null&&(D(X)&&(X=C(X,B+(!X.key||oe&&oe.key===X.key?"":(""+X.key).replace(O,"$&/")+"/")+V)),W.push(X)),1;if(oe=0,q=q===""?".":q+":",Te(V))for(var le=0;le<V.length;le++){ne=V[le];var pe=q+A(ne,le);oe+=$e(ne,W,B,pe,X)}else if(pe=x(V),typeof pe=="function")for(V=pe.call(V),le=0;!(ne=V.next()).done;)ne=ne.value,pe=q+A(ne,le++),oe+=$e(ne,W,B,pe,X);else if(ne==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return oe}function dt(V,W,B){if(V==null)return V;var q=[],X=0;return $e(V,q,"","",function(ne){return W.call(B,ne,X++)}),q}function Tt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(B){(V._status===0||V._status===-1)&&(V._status=1,V._result=B)},function(B){(V._status===0||V._status===-1)&&(V._status=2,V._result=B)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var qe={current:null},re={transition:null},me={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:re,ReactCurrentOwner:xe};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:dt,forEach:function(V,W,B){dt(V,function(){W.apply(this,arguments)},B)},count:function(V){var W=0;return dt(V,function(){W++}),W},toArray:function(V){return dt(V,function(W){return W})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ne.Component=H,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=we,Ne.StrictMode=s,Ne.Suspense=y,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ne.act=ie,Ne.cloneElement=function(V,W,B){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var q=ee({},V.props),X=V.key,ne=V.ref,oe=V._owner;if(W!=null){if(W.ref!==void 0&&(ne=W.ref,oe=xe.current),W.key!==void 0&&(X=""+W.key),V.type&&V.type.defaultProps)var le=V.type.defaultProps;for(pe in W)He.call(W,pe)&&!k.hasOwnProperty(pe)&&(q[pe]=W[pe]===void 0&&le!==void 0?le[pe]:W[pe])}var pe=arguments.length-2;if(pe===1)q.children=B;else if(1<pe){le=Array(pe);for(var Ce=0;Ce<pe;Ce++)le[Ce]=arguments[Ce+2];q.children=le}return{$$typeof:i,type:V.type,key:X,ref:ne,props:q,_owner:oe}},Ne.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ne.createElement=I,Ne.createFactory=function(V){var W=I.bind(null,V);return W.type=V,W},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(V){return{$$typeof:m,render:V}},Ne.isValidElement=D,Ne.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Tt}},Ne.memo=function(V,W){return{$$typeof:v,type:V,compare:W===void 0?null:W}},Ne.startTransition=function(V){var W=re.transition;re.transition={};try{V()}finally{re.transition=W}},Ne.unstable_act=ie,Ne.useCallback=function(V,W){return qe.current.useCallback(V,W)},Ne.useContext=function(V){return qe.current.useContext(V)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(V){return qe.current.useDeferredValue(V)},Ne.useEffect=function(V,W){return qe.current.useEffect(V,W)},Ne.useId=function(){return qe.current.useId()},Ne.useImperativeHandle=function(V,W,B){return qe.current.useImperativeHandle(V,W,B)},Ne.useInsertionEffect=function(V,W){return qe.current.useInsertionEffect(V,W)},Ne.useLayoutEffect=function(V,W){return qe.current.useLayoutEffect(V,W)},Ne.useMemo=function(V,W){return qe.current.useMemo(V,W)},Ne.useReducer=function(V,W,B){return qe.current.useReducer(V,W,B)},Ne.useRef=function(V){return qe.current.useRef(V)},Ne.useState=function(V){return qe.current.useState(V)},Ne.useSyncExternalStore=function(V,W,B){return qe.current.useSyncExternalStore(V,W,B)},Ne.useTransition=function(){return qe.current.useTransition()},Ne.version="18.3.1",Ne}var Fm;function Ld(){return Fm||(Fm=1,Wh.exports=tw()),Wh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function nw(){if(Um)return Sa;Um=1;var i=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var E,S={},x=null,z=null;v!==void 0&&(x=""+v),y.key!==void 0&&(x=""+y.key),y.ref!==void 0&&(z=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(S[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)S[E]===void 0&&(S[E]=y[E]);return{$$typeof:e,type:m,key:x,ref:z,props:S,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var jm;function rw(){return jm||(jm=1,qh.exports=nw()),qh.exports}var F=rw(),at=Ld(),vu={},Kh={exports:{}},nn={},Gh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function iw(){return zm||(zm=1,(function(i){function e(re,me){var ie=re.length;re.push(me);e:for(;0<ie;){var V=ie-1>>>1,W=re[V];if(0<o(W,me))re[V]=me,re[ie]=W,ie=V;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var me=re[0],ie=re.pop();if(ie!==me){re[0]=ie;e:for(var V=0,W=re.length,B=W>>>1;V<B;){var q=2*(V+1)-1,X=re[q],ne=q+1,oe=re[ne];if(0>o(X,ie))ne<W&&0>o(oe,X)?(re[V]=oe,re[ne]=ie,V=ne):(re[V]=X,re[q]=ie,V=q);else if(ne<W&&0>o(oe,ie))re[V]=oe,re[ne]=ie,V=ne;else break e}}return me}function o(re,me){var ie=re.sortIndex-me.sortIndex;return ie!==0?ie:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],E=1,S=null,x=3,z=!1,ee=!1,Z=!1,H=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(re){for(var me=t(v);me!==null;){if(me.callback===null)s(v);else if(me.startTime<=re)s(v),me.sortIndex=me.expirationTime,e(y,me);else break;me=t(v)}}function Te(re){if(Z=!1,Ae(re),!ee)if(t(y)!==null)ee=!0,Tt(He);else{var me=t(v);me!==null&&qe(Te,me.startTime-re)}}function He(re,me){ee=!1,Z&&(Z=!1,ye(I),I=-1),z=!0;var ie=x;try{for(Ae(me),S=t(y);S!==null&&(!(S.expirationTime>me)||re&&!P());){var V=S.callback;if(typeof V=="function"){S.callback=null,x=S.priorityLevel;var W=V(S.expirationTime<=me);me=i.unstable_now(),typeof W=="function"?S.callback=W:S===t(y)&&s(y),Ae(me)}else s(y);S=t(y)}if(S!==null)var B=!0;else{var q=t(v);q!==null&&qe(Te,q.startTime-me),B=!1}return B}finally{S=null,x=ie,z=!1}}var xe=!1,k=null,I=-1,C=5,D=-1;function P(){return!(i.unstable_now()-D<C)}function O(){if(k!==null){var re=i.unstable_now();D=re;var me=!0;try{me=k(!0,re)}finally{me?A():(xe=!1,k=null)}}else xe=!1}var A;if(typeof we=="function")A=function(){we(O)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,dt=$e.port2;$e.port1.onmessage=O,A=function(){dt.postMessage(null)}}else A=function(){H(O,0)};function Tt(re){k=re,xe||(xe=!0,A())}function qe(re,me){I=H(function(){re(i.unstable_now())},me)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(re){re.callback=null},i.unstable_continueExecution=function(){ee||z||(ee=!0,Tt(He))},i.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<re?Math.floor(1e3/re):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(re){switch(x){case 1:case 2:case 3:var me=3;break;default:me=x}var ie=x;x=me;try{return re()}finally{x=ie}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ie=x;x=re;try{return me()}finally{x=ie}},i.unstable_scheduleCallback=function(re,me,ie){var V=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,re){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ie+W,re={id:E++,callback:me,priorityLevel:re,startTime:ie,expirationTime:W,sortIndex:-1},ie>V?(re.sortIndex=ie,e(v,re),t(y)===null&&re===t(v)&&(Z?(ye(I),I=-1):Z=!0,qe(Te,ie-V))):(re.sortIndex=W,e(y,re),ee||z||(ee=!0,Tt(He))),re},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(re){var me=x;return function(){var ie=x;x=me;try{return re.apply(this,arguments)}finally{x=ie}}}})(Qh)),Qh}var Bm;function sw(){return Bm||(Bm=1,Gh.exports=iw()),Gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function ow(){if($m)return nn;$m=1;var i=Ld(),e=sw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function x(n){return y.call(S,n)?!0:y.call(E,n)?!1:v.test(n)?S[n]=!0:(E[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ee(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Z(n,r,a,c,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Z(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new Z(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Z(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Z(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Z(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Z(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Z(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Z(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Z(n,5,!1,n.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function we(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ye,we);H[r]=new Z(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ye,we);H[r]=new Z(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ye,we);H[r]=new Z(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Z(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Z(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ae(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ee(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),xe=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),qe=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var B=!1;function q(n,r){if(!n||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),_=d.length-1,T=f.length-1;1<=_&&0<=T&&d[_]!==f[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==f[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==f[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{B=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function X(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case xe:return"Portal";case C:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case dt:return r=n.displayName||null,r!==null?r:ne(n.type)||"Memo";case Tt:r=n._payload,n=n._init;try{return ne(n(r))}catch{}}return null}function oe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ce(n){var r=pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function lt(n){n._valueTracker||(n._valueTracker=Ce(n))}function Ot(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=pe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Ke(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gn(n,r){var a=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function zr(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Un(n,r){r=r.checked,r!=null&&Ae(n,"checked",r,!1)}function qt(n,r){Un(n,r);var a=le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?et(n,r.type,a):r.hasOwnProperty("defaultValue")&&et(n,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Rn(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function et(n,r,a){(r!=="number"||Ke(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var je=Array.isArray;function Yt(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:le(a)}}function sl(n,r){var a=le(r.value),c=le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Br(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $r,ol=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=$r.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ui(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(n){al.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Hr[r]=Hr[n]})});function qr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Hr.hasOwnProperty(n)&&Hr[n]?(""+r).trim():r+"px"}function Is(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=qr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var bo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,r){if(r){if(bo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ss(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wr=null;function As(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fr=null,pr=null,st=null;function Mo(n){if(n=ua(n)){if(typeof fr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ol(r),fr(n.stateNode,n.type,r))}}function Kr(n){pr?st?st.push(n):st=[n]:pr=n}function Gr(){if(pr){var n=pr,r=st;if(st=pr=null,Mo(n),r)for(n=0;n<r.length;n++)Mo(r[n])}}function ll(n,r){return n(r)}function ul(){}var jn=!1;function cl(n,r,a){if(jn)return n(r,a);jn=!0;try{return ll(n,r,a)}finally{jn=!1,(pr!==null||st!==null)&&(ul(),Gr())}}function ji(n,r){var a=n.stateNode;if(a===null)return null;var c=Ol(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Qr=!1;if(m)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Qr=!1}function hl(n,r,a,c,d,f,_,T,R){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(Q){this.onError(Q)}}var mr=!1,zn=null,Cs=!1,yn=null,dl={onError:function(n){mr=!0,zn=n}};function fl(n,r,a,c,d,f,_,T,R){mr=!1,zn=null,hl.apply(dl,arguments)}function Lo(n,r,a,c,d,f,_,T,R){if(fl.apply(this,arguments),mr){if(mr){var U=zn;mr=!1,zn=null}else throw Error(t(198));Cs||(Cs=!0,yn=U)}}function Pn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function pl(n){if(Pn(n)!==n)throw Error(t(188))}function ml(n){var r=n.alternate;if(!r){if(r=Pn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return pl(d),n;if(f===c)return pl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=f;break}if(T===c){_=!0,c=d,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,c=d;break}if(T===c){_=!0,c=f,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function gl(n){return n=ml(n),n!==null?zi(n):null}function zi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=zi(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,Rs=e.unstable_cancelCallback,Bi=e.unstable_shouldYield,gr=e.unstable_requestPaint,Qe=e.unstable_now,Tc=e.unstable_getCurrentPriorityLevel,ks=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,$i=e.unstable_NormalPriority,zo=e.unstable_LowPriority,Ps=e.unstable_IdlePriority,Hi=null,on=null;function yl(n){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Hi,n,void 0,(n.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:qi,Bn=Math.log,_n=Math.LN2;function qi(n){return n>>>=0,n===0?32:31-(Bn(n)/_n|0)|0}var $n=64,Xr=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Ue(T):(f&=_,f!==0&&(c=Ue(f)))}else _=a&~d,_!==0?c=Ue(_):f!==0&&(c=Ue(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-an(r),d=1<<a,c|=n[a],r&=~d;return c}function Wi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-an(f),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Wi(T,r)):R<=r&&(n.expiredLanes|=T),f&=~T}}function Bo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=$n;return $n<<=1,($n&4194240)===0&&($n=64),n}function Ho(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Gi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-an(r),n[r]=a}function Ic(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-an(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function qo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-an(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var be=0;function Hn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wo,xs,Ko,Go,Qo,qn=!1,Ns=[],Wn=null,Kn=null,Rt=null,Qi=new Map,_r=new Map,ln=[],_l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jr(n,r){switch(n){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Qi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(r.pointerId)}}function xn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&xs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function vl(n,r,a,c,d){switch(r){case"focusin":return Wn=xn(Wn,n,r,a,c,d),!0;case"dragenter":return Kn=xn(Kn,n,r,a,c,d),!0;case"mouseover":return Rt=xn(Rt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return Qi.set(f,xn(Qi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,_r.set(f,xn(_r.get(f)||null,n,r,a,c,d)),!0}return!1}function Ds(n){var r=Zi(n.target);if(r!==null){var a=Pn(r);if(a!==null){if(r=a.tag,r===13){if(r=Fo(a),r!==null){n.blockedOn=r,Qo(n.priority,function(){Ko(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Vs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Wr=c,a.target.dispatchEvent(c),Wr=null}else return r=ua(a),r!==null&&xs(r),n.blockedOn=a,!1;r.shift()}return!0}function wl(n,r,a){We(n)&&a.delete(r)}function Sc(){qn=!1,Wn!==null&&We(Wn)&&(Wn=null),Kn!==null&&We(Kn)&&(Kn=null),Rt!==null&&We(Rt)&&(Rt=null),Qi.forEach(wl),_r.forEach(wl)}function Zr(n,r){n.blockedOn===r&&(n.blockedOn=null,qn||(qn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sc)))}function ei(n){function r(d){return Zr(d,n)}if(0<Ns.length){Zr(Ns[0],n);for(var a=1;a<Ns.length;a++){var c=Ns[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Wn!==null&&Zr(Wn,n),Kn!==null&&Zr(Kn,n),Rt!==null&&Zr(Rt,n),Qi.forEach(r),_r.forEach(r),a=0;a<ln.length;a++)c=ln[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<ln.length&&(a=ln[0],a.blockedOn===null);)Ds(a),a.blockedOn===null&&ln.shift()}var vr=Te.ReactCurrentBatchConfig,wr=!0;function Gn(n,r,a,c){var d=be,f=vr.transition;vr.transition=null;try{be=1,Yo(n,r,a,c)}finally{be=d,vr.transition=f}}function El(n,r,a,c){var d=be,f=vr.transition;vr.transition=null;try{be=4,Yo(n,r,a,c)}finally{be=d,vr.transition=f}}function Yo(n,r,a,c){if(wr){var d=Vs(n,r,a,c);if(d===null)bc(n,r,c,Qn,a),Jr(n,c);else if(vl(d,n,r,a,c))c.stopPropagation();else if(Jr(n,c),r&4&&-1<_l.indexOf(n)){for(;d!==null;){var f=ua(d);if(f!==null&&Wo(f),f=Vs(n,r,a,c),f===null&&bc(n,r,c,Qn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else bc(n,r,c,null,a)}}var Qn=null;function Vs(n,r,a,c){if(Qn=null,n=As(c),n=Zi(n),n!==null)if(r=Pn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qn=n,null}function Os(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tc()){case ks:return 1;case jo:return 4;case $i:case zo:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var un=null,bs=null,Er=null;function Tl(){if(Er)return Er;var n,r=bs,a=r.length,c,d="value"in un?un.value:un.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[f-c];c++);return Er=d.slice(n,1<c?1-c:void 0)}function Yi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Yn(){return!0}function Xo(){return!1}function bt(n){function r(a,c,d,f,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yn:Xo,this.isPropagationStopped=Xo,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),r}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=bt(Xn),ti=ie({},Xn,{view:0,detail:0}),Ms=bt(ti),Ls,Fs,cn,Ji=ie({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ke,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==cn&&(cn&&n.type==="mousemove"?(Ls=n.screenX-cn.screenX,Fs=n.screenY-cn.screenY):Fs=Ls=0,cn=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:Fs}}),Jo=bt(Ji),Il=ie({},Ji,{dataTransfer:0}),Sl=bt(Il),Us=ie({},ti,{relatedTarget:0}),kt=bt(Us),Al=ie({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cl=bt(Al),ni=ie({},Xn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=bt(ni),p=ie({},Xn,{data:0}),g=bt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function ke(){return te}var ut=ie({},ti,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Yi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ke,charCode:function(n){return n.type==="keypress"?Yi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=bt(ut),ft=ie({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hn=bt(ft),Tr=ie({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ke}),Jn=bt(Tr),Zn=ie({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),js=bt(Zn),Zo=ie({},Ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=bt(Zo),Yv=[9,13,27,32],Ac=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var Xv=m&&"TextEvent"in window&&!ea,Pf=m&&(!Ac||ea&&8<ea&&11>=ea),xf=" ",Nf=!1;function Df(n,r){switch(n){case"keyup":return Yv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zs=!1;function Jv(n,r){switch(n){case"compositionend":return Vf(r);case"keypress":return r.which!==32?null:(Nf=!0,xf);case"textInput":return n=r.data,n===xf&&Nf?null:n;default:return null}}function Zv(n,r){if(zs)return n==="compositionend"||!Ac&&Df(n,r)?(n=Tl(),Er=bs=un=null,zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pf&&r.locale!=="ko"?null:r.data;default:return null}}var e0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!e0[n.type]:r==="textarea"}function bf(n,r,a,c){Kr(c),r=Nl(r,"onChange"),0<r.length&&(a=new Xi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function t0(n){Zf(n,0)}function Rl(n){var r=Ws(n);if(Ot(r))return n}function n0(n,r){if(n==="change")return r}var Mf=!1;if(m){var Cc;if(m){var Rc="oninput"in document;if(!Rc){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),Rc=typeof Lf.oninput=="function"}Cc=Rc}else Cc=!1;Mf=Cc&&(!document.documentMode||9<document.documentMode)}function Ff(){ta&&(ta.detachEvent("onpropertychange",Uf),na=ta=null)}function Uf(n){if(n.propertyName==="value"&&Rl(na)){var r=[];bf(r,na,n,As(n)),cl(t0,r)}}function r0(n,r,a){n==="focusin"?(Ff(),ta=r,na=a,ta.attachEvent("onpropertychange",Uf)):n==="focusout"&&Ff()}function i0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(na)}function s0(n,r){if(n==="click")return Rl(r)}function o0(n,r){if(n==="input"||n==="change")return Rl(r)}function a0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:a0;function ra(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zf(n,r){var a=jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function Bf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $f(){for(var n=window,r=Ke();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Ke(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function l0(n){var r=$f(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Bf(a.ownerDocument.documentElement,a)){if(c!==null&&kc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=zf(a,f);var _=zf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u0=m&&"documentMode"in document&&11>=document.documentMode,Bs=null,Pc=null,ia=null,xc=!1;function Hf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||Bs==null||Bs!==Ke(c)||(c=Bs,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Nl(Pc,"onSelect"),0<c.length&&(r=new Xi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Bs)))}function kl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var $s={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Nc={},qf={};m&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Pl(n){if(Nc[n])return Nc[n];if(!$s[n])return n;var r=$s[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in qf)return Nc[n]=r[a];return n}var Wf=Pl("animationend"),Kf=Pl("animationiteration"),Gf=Pl("animationstart"),Qf=Pl("transitionend"),Yf=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ri(n,r){Yf.set(n,r),u(r,[n])}for(var Dc=0;Dc<Xf.length;Dc++){var Vc=Xf[Dc],c0=Vc.toLowerCase(),h0=Vc[0].toUpperCase()+Vc.slice(1);ri(c0,"on"+h0)}ri(Wf,"onAnimationEnd"),ri(Kf,"onAnimationIteration"),ri(Gf,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(Qf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Jf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Lo(c,r,void 0,n),n.currentTarget=null}function Zf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,U=T.currentTarget;if(T=T.listener,R!==f&&d.isPropagationStopped())break e;Jf(d,T,U),f=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,U=T.currentTarget,T=T.listener,R!==f&&d.isPropagationStopped())break e;Jf(d,T,U),f=R}}}if(Cs)throw n=yn,Cs=!1,yn=null,n}function Ye(n,r){var a=r[zc];a===void 0&&(a=r[zc]=new Set);var c=n+"__bubble";a.has(c)||(ep(r,n,2,!1),a.add(c))}function Oc(n,r,a){var c=0;r&&(c|=4),ep(a,n,c,r)}var xl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[xl]){n[xl]=!0,s.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||Oc(a,!1,n),Oc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[xl]||(r[xl]=!0,Oc("selectionchange",!1,r))}}function ep(n,r,a,c){switch(Os(r)){case 1:var d=Gn;break;case 4:d=El;break;default:d=Yo}a=d.bind(null,r,a,n),d=void 0,!Qr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function bc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Zi(T),_===null)return;if(R=_.tag,R===5||R===6){c=f=_;continue e}T=T.parentNode}}c=c.return}cl(function(){var U=f,Q=As(a),Y=[];e:{var K=Yf.get(n);if(K!==void 0){var se=Xi,ce=n;switch(n){case"keypress":if(Yi(a)===0)break e;case"keydown":case"keyup":se=Be;break;case"focusin":ce="focus",se=kt;break;case"focusout":ce="blur",se=kt;break;case"beforeblur":case"afterblur":se=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Jn;break;case Wf:case Kf:case Gf:se=Cl;break;case Qf:se=js;break;case"scroll":se=Ms;break;case"wheel":se=Qv;break;case"copy":case"cut":case"paste":se=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=hn}var he=(r&4)!==0,ct=!he&&n==="scroll",b=he?K!==null?K+"Capture":null:K;he=[];for(var N=U,L;N!==null;){L=N;var J=L.stateNode;if(L.tag===5&&J!==null&&(L=J,b!==null&&(J=ji(N,b),J!=null&&he.push(aa(N,J,L)))),ct)break;N=N.return}0<he.length&&(K=new se(K,ce,null,a,Q),Y.push({event:K,listeners:he}))}}if((r&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",K&&a!==Wr&&(ce=a.relatedTarget||a.fromElement)&&(Zi(ce)||ce[Ir]))break e;if((se||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,se?(ce=a.relatedTarget||a.toElement,se=U,ce=ce?Zi(ce):null,ce!==null&&(ct=Pn(ce),ce!==ct||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=U),se!==ce)){if(he=Jo,J="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(he=hn,J="onPointerLeave",b="onPointerEnter",N="pointer"),ct=se==null?K:Ws(se),L=ce==null?K:Ws(ce),K=new he(J,N+"leave",se,a,Q),K.target=ct,K.relatedTarget=L,J=null,Zi(Q)===U&&(he=new he(b,N+"enter",ce,a,Q),he.target=L,he.relatedTarget=ct,J=he),ct=J,se&&ce)t:{for(he=se,b=ce,N=0,L=he;L;L=Hs(L))N++;for(L=0,J=b;J;J=Hs(J))L++;for(;0<N-L;)he=Hs(he),N--;for(;0<L-N;)b=Hs(b),L--;for(;N--;){if(he===b||b!==null&&he===b.alternate)break t;he=Hs(he),b=Hs(b)}he=null}else he=null;se!==null&&tp(Y,K,se,he,!1),ce!==null&&ct!==null&&tp(Y,ct,ce,he,!0)}}e:{if(K=U?Ws(U):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var de=n0;else if(Of(K))if(Mf)de=o0;else{de=i0;var _e=r0}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(de=s0);if(de&&(de=de(n,U))){bf(Y,de,a,Q);break e}_e&&_e(n,K,U),n==="focusout"&&(_e=K._wrapperState)&&_e.controlled&&K.type==="number"&&et(K,"number",K.value)}switch(_e=U?Ws(U):window,n){case"focusin":(Of(_e)||_e.contentEditable==="true")&&(Bs=_e,Pc=U,ia=null);break;case"focusout":ia=Pc=Bs=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,Hf(Y,a,Q);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":Hf(Y,a,Q)}var ve;if(Ac)e:{switch(n){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else zs?Df(n,a)&&(Ie="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Pf&&a.locale!=="ko"&&(zs||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&zs&&(ve=Tl()):(un=Q,bs="value"in un?un.value:un.textContent,zs=!0)),_e=Nl(U,Ie),0<_e.length&&(Ie=new g(Ie,n,null,a,Q),Y.push({event:Ie,listeners:_e}),ve?Ie.data=ve:(ve=Vf(a),ve!==null&&(Ie.data=ve)))),(ve=Xv?Jv(n,a):Zv(n,a))&&(U=Nl(U,"onBeforeInput"),0<U.length&&(Q=new g("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:U}),Q.data=ve))}Zf(Y,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Nl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=ji(n,a),f!=null&&c.unshift(aa(n,f,d)),f=ji(n,r),f!=null&&c.push(aa(n,f,d))),n=n.return}return c}function Hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tp(n,r,a,c,d){for(var f=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,U=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&U!==null&&(T=U,d?(R=ji(a,f),R!=null&&_.unshift(aa(a,R,T))):d||(R=ji(a,f),R!=null&&_.push(aa(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var f0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function np(n){return(typeof n=="string"?n:""+n).replace(f0,`
`).replace(p0,"")}function Dl(n,r,a){if(r=np(r),np(n)!==r&&a)throw Error(t(425))}function Vl(){}var Mc=null,Lc=null;function Fc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,m0=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,g0=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(y0)}:Uc;function y0(n){setTimeout(function(){throw n})}function jc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ei(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ei(r)}function ii(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ip(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var qs=Math.random().toString(36).slice(2),er="__reactFiber$"+qs,la="__reactProps$"+qs,Ir="__reactContainer$"+qs,zc="__reactEvents$"+qs,_0="__reactListeners$"+qs,v0="__reactHandles$"+qs;function Zi(n){var r=n[er];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ir]||a[er]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ip(n);n!==null;){if(a=n[er])return a;n=ip(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ol(n){return n[la]||null}var Bc=[],Ks=-1;function si(n){return{current:n}}function Xe(n){0>Ks||(n.current=Bc[Ks],Bc[Ks]=null,Ks--)}function Ge(n,r){Ks++,Bc[Ks]=n.current,n.current=r}var oi={},Mt=si(oi),Xt=si(!1),es=oi;function Gs(n,r){var a=n.type.contextTypes;if(!a)return oi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(n){return n=n.childContextTypes,n!=null}function bl(){Xe(Xt),Xe(Mt)}function sp(n,r,a){if(Mt.current!==oi)throw Error(t(168));Ge(Mt,r),Ge(Xt,a)}function op(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,oe(n)||"Unknown",d));return ie({},a,c)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||oi,es=Mt.current,Ge(Mt,n),Ge(Xt,Xt.current),!0}function ap(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=op(n,r,es),c.__reactInternalMemoizedMergedChildContext=n,Xe(Xt),Xe(Mt),Ge(Mt,n)):Xe(Xt),Ge(Xt,a)}var Sr=null,Ll=!1,$c=!1;function lp(n){Sr===null?Sr=[n]:Sr.push(n)}function w0(n){Ll=!0,lp(n)}function ai(){if(!$c&&Sr!==null){$c=!0;var n=0,r=be;try{var a=Sr;for(be=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,Ll=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Uo(ks,ai),d}finally{be=r,$c=!1}}return null}var Qs=[],Ys=0,Fl=null,Ul=0,vn=[],wn=0,ts=null,Ar=1,Cr="";function ns(n,r){Qs[Ys++]=Ul,Qs[Ys++]=Fl,Fl=n,Ul=r}function up(n,r,a){vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=ts,ts=n;var c=Ar;n=Cr;var d=32-an(c)-1;c&=~(1<<d),a+=1;var f=32-an(r)+d;if(30<f){var _=d-d%5;f=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Ar=1<<32-an(r)+d|a<<d|c,Cr=f+n}else Ar=1<<f|a<<d|c,Cr=n}function Hc(n){n.return!==null&&(ns(n,1),up(n,1,0))}function qc(n){for(;n===Fl;)Fl=Qs[--Ys],Qs[Ys]=null,Ul=Qs[--Ys],Qs[Ys]=null;for(;n===ts;)ts=vn[--wn],vn[wn]=null,Cr=vn[--wn],vn[wn]=null,Ar=vn[--wn],vn[wn]=null}var dn=null,fn=null,tt=!1,Dn=null;function cp(n,r){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function hp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,dn=n,fn=ii(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,dn=n,fn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ts!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,dn=n,fn=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kc(n){if(tt){var r=fn;if(r){var a=r;if(!hp(n,r)){if(Wc(n))throw Error(t(418));r=ii(a.nextSibling);var c=dn;r&&hp(n,r)?cp(c,a):(n.flags=n.flags&-4097|2,tt=!1,dn=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,tt=!1,dn=n}}}function dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function jl(n){if(n!==dn)return!1;if(!tt)return dp(n),tt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Fc(n.type,n.memoizedProps)),r&&(r=fn)){if(Wc(n))throw fp(),Error(t(418));for(;r;)cp(n,r),r=ii(r.nextSibling)}if(dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){fn=ii(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}fn=null}}else fn=dn?ii(n.stateNode.nextSibling):null;return!0}function fp(){for(var n=fn;n;)n=ii(n.nextSibling)}function Xs(){fn=dn=null,tt=!1}function Gc(n){Dn===null?Dn=[n]:Dn.push(n)}var E0=Te.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var T=d.refs;_===null?delete T[f]:T[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function pp(n){var r=n._init;return r(n._payload)}function mp(n){function r(b,N){if(n){var L=b.deletions;L===null?(b.deletions=[N],b.flags|=16):L.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)r(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=mi(b,N),b.index=0,b.sibling=null,b}function f(b,N,L){return b.index=L,n?(L=b.alternate,L!==null?(L=L.index,L<N?(b.flags|=2,N):L):(b.flags|=2,N)):(b.flags|=1048576,N)}function _(b){return n&&b.alternate===null&&(b.flags|=2),b}function T(b,N,L,J){return N===null||N.tag!==6?(N=Uh(L,b.mode,J),N.return=b,N):(N=d(N,L),N.return=b,N)}function R(b,N,L,J){var de=L.type;return de===k?Q(b,N,L.props.children,J,L.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Tt&&pp(de)===N.type)?(J=d(N,L.props),J.ref=ca(b,N,L),J.return=b,J):(J=hu(L.type,L.key,L.props,null,b.mode,J),J.ref=ca(b,N,L),J.return=b,J)}function U(b,N,L,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=jh(L,b.mode,J),N.return=b,N):(N=d(N,L.children||[]),N.return=b,N)}function Q(b,N,L,J,de){return N===null||N.tag!==7?(N=cs(L,b.mode,J,de),N.return=b,N):(N=d(N,L),N.return=b,N)}function Y(b,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Uh(""+N,b.mode,L),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case He:return L=hu(N.type,N.key,N.props,null,b.mode,L),L.ref=ca(b,null,N),L.return=b,L;case xe:return N=jh(N,b.mode,L),N.return=b,N;case Tt:var J=N._init;return Y(b,J(N._payload),L)}if(je(N)||me(N))return N=cs(N,b.mode,L,null),N.return=b,N;zl(b,N)}return null}function K(b,N,L,J){var de=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return de!==null?null:T(b,N,""+L,J);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case He:return L.key===de?R(b,N,L,J):null;case xe:return L.key===de?U(b,N,L,J):null;case Tt:return de=L._init,K(b,N,de(L._payload),J)}if(je(L)||me(L))return de!==null?null:Q(b,N,L,J,null);zl(b,L)}return null}function se(b,N,L,J,de){if(typeof J=="string"&&J!==""||typeof J=="number")return b=b.get(L)||null,T(N,b,""+J,de);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case He:return b=b.get(J.key===null?L:J.key)||null,R(N,b,J,de);case xe:return b=b.get(J.key===null?L:J.key)||null,U(N,b,J,de);case Tt:var _e=J._init;return se(b,N,L,_e(J._payload),de)}if(je(J)||me(J))return b=b.get(L)||null,Q(N,b,J,de,null);zl(N,J)}return null}function ce(b,N,L,J){for(var de=null,_e=null,ve=N,Ie=N=0,At=null;ve!==null&&Ie<L.length;Ie++){ve.index>Ie?(At=ve,ve=null):At=ve.sibling;var Fe=K(b,ve,L[Ie],J);if(Fe===null){ve===null&&(ve=At);break}n&&ve&&Fe.alternate===null&&r(b,ve),N=f(Fe,N,Ie),_e===null?de=Fe:_e.sibling=Fe,_e=Fe,ve=At}if(Ie===L.length)return a(b,ve),tt&&ns(b,Ie),de;if(ve===null){for(;Ie<L.length;Ie++)ve=Y(b,L[Ie],J),ve!==null&&(N=f(ve,N,Ie),_e===null?de=ve:_e.sibling=ve,_e=ve);return tt&&ns(b,Ie),de}for(ve=c(b,ve);Ie<L.length;Ie++)At=se(ve,b,Ie,L[Ie],J),At!==null&&(n&&At.alternate!==null&&ve.delete(At.key===null?Ie:At.key),N=f(At,N,Ie),_e===null?de=At:_e.sibling=At,_e=At);return n&&ve.forEach(function(gi){return r(b,gi)}),tt&&ns(b,Ie),de}function he(b,N,L,J){var de=me(L);if(typeof de!="function")throw Error(t(150));if(L=de.call(L),L==null)throw Error(t(151));for(var _e=de=null,ve=N,Ie=N=0,At=null,Fe=L.next();ve!==null&&!Fe.done;Ie++,Fe=L.next()){ve.index>Ie?(At=ve,ve=null):At=ve.sibling;var gi=K(b,ve,Fe.value,J);if(gi===null){ve===null&&(ve=At);break}n&&ve&&gi.alternate===null&&r(b,ve),N=f(gi,N,Ie),_e===null?de=gi:_e.sibling=gi,_e=gi,ve=At}if(Fe.done)return a(b,ve),tt&&ns(b,Ie),de;if(ve===null){for(;!Fe.done;Ie++,Fe=L.next())Fe=Y(b,Fe.value,J),Fe!==null&&(N=f(Fe,N,Ie),_e===null?de=Fe:_e.sibling=Fe,_e=Fe);return tt&&ns(b,Ie),de}for(ve=c(b,ve);!Fe.done;Ie++,Fe=L.next())Fe=se(ve,b,Ie,Fe.value,J),Fe!==null&&(n&&Fe.alternate!==null&&ve.delete(Fe.key===null?Ie:Fe.key),N=f(Fe,N,Ie),_e===null?de=Fe:_e.sibling=Fe,_e=Fe);return n&&ve.forEach(function(ew){return r(b,ew)}),tt&&ns(b,Ie),de}function ct(b,N,L,J){if(typeof L=="object"&&L!==null&&L.type===k&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case He:e:{for(var de=L.key,_e=N;_e!==null;){if(_e.key===de){if(de=L.type,de===k){if(_e.tag===7){a(b,_e.sibling),N=d(_e,L.props.children),N.return=b,b=N;break e}}else if(_e.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Tt&&pp(de)===_e.type){a(b,_e.sibling),N=d(_e,L.props),N.ref=ca(b,_e,L),N.return=b,b=N;break e}a(b,_e);break}else r(b,_e);_e=_e.sibling}L.type===k?(N=cs(L.props.children,b.mode,J,L.key),N.return=b,b=N):(J=hu(L.type,L.key,L.props,null,b.mode,J),J.ref=ca(b,N,L),J.return=b,b=J)}return _(b);case xe:e:{for(_e=L.key;N!==null;){if(N.key===_e)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){a(b,N.sibling),N=d(N,L.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else r(b,N);N=N.sibling}N=jh(L,b.mode,J),N.return=b,b=N}return _(b);case Tt:return _e=L._init,ct(b,N,_e(L._payload),J)}if(je(L))return ce(b,N,L,J);if(me(L))return he(b,N,L,J);zl(b,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,L),N.return=b,b=N):(a(b,N),N=Uh(L,b.mode,J),N.return=b,b=N),_(b)):a(b,N)}return ct}var Js=mp(!0),gp=mp(!1),Bl=si(null),$l=null,Zs=null,Qc=null;function Yc(){Qc=Zs=$l=null}function Xc(n){var r=Bl.current;Xe(Bl),n._currentValue=r}function Jc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function eo(n,r){$l=n,Qc=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Zt=!0),n.firstContext=null)}function En(n){var r=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:r,next:null},Zs===null){if($l===null)throw Error(t(308));Zs=n,$l.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return r}var rs=null;function Zc(n){rs===null?rs=[n]:rs.push(n)}function yp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Zc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Rr(n,c)}function Rr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var li=!1;function eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ui(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Rr(n,a)}return d=c.interleaved,d===null?(r.next=r,Zc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Rr(n,a)}function Hl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,qo(n,a)}}function vp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function ql(n,r,a,c){var d=n.updateQueue;li=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,U=R.next;R.next=null,_===null?f=U:_.next=U,_=R;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==_&&(T===null?Q.firstBaseUpdate=U:T.next=U,Q.lastBaseUpdate=R))}if(f!==null){var Y=d.baseState;_=0,Q=U=R=null,T=f;do{var K=T.lane,se=T.eventTime;if((c&K)===K){Q!==null&&(Q=Q.next={eventTime:se,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ce=n,he=T;switch(K=r,se=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Y=ce.call(se,Y,K);break e}Y=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,K=typeof ce=="function"?ce.call(se,Y,K):ce,K==null)break e;Y=ie({},Y,K);break e;case 2:li=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,K=d.effects,K===null?d.effects=[T]:K.push(T))}else se={eventTime:se,lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(U=Q=se,R=Y):Q=Q.next=se,_|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;K=T,T=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(Q===null&&(R=Y),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=Q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);os|=_,n.lanes=_,n.memoizedState=Y}}function wp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},tr=si(ha),da=si(ha),fa=si(ha);function is(n){if(n===ha)throw Error(t(174));return n}function th(n,r){switch(Ge(fa,r),Ge(da,n),Ge(tr,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ts(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ts(r,n)}Xe(tr),Ge(tr,r)}function to(){Xe(tr),Xe(da),Xe(fa)}function Ep(n){is(fa.current);var r=is(tr.current),a=Ts(r,n.type);r!==a&&(Ge(da,n),Ge(tr,a))}function nh(n){da.current===n&&(Xe(tr),Xe(da))}var nt=si(0);function Wl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var rh=[];function ih(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var Kl=Te.ReactCurrentDispatcher,sh=Te.ReactCurrentBatchConfig,ss=0,rt=null,yt=null,It=null,Gl=!1,pa=!1,ma=0,T0=0;function Lt(){throw Error(t(321))}function oh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function ah(n,r,a,c,d,f){if(ss=f,rt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Kl.current=n===null||n.memoizedState===null?C0:R0,n=a(c,d),pa){f=0;do{if(pa=!1,ma=0,25<=f)throw Error(t(301));f+=1,It=yt=null,r.updateQueue=null,Kl.current=k0,n=a(c,d)}while(pa)}if(Kl.current=Xl,r=yt!==null&&yt.next!==null,ss=0,It=yt=rt=null,Gl=!1,r)throw Error(t(300));return n}function lh(){var n=ma!==0;return ma=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?rt.memoizedState=It=n:It=It.next=n,It}function Tn(){if(yt===null){var n=rt.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var r=It===null?rt.memoizedState:It.next;if(r!==null)It=r,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},It===null?rt.memoizedState=It=n:It=It.next=n}return It}function ga(n,r){return typeof r=="function"?r(n):r}function uh(n){var r=Tn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=_=null,R=null,U=f;do{var Q=U.lane;if((ss&Q)===Q)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Y={lane:Q,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(T=R=Y,_=c):R=R.next=Y,rt.lanes|=Q,os|=Q}U=U.next}while(U!==null&&U!==f);R===null?_=c:R.next=T,Nn(c,r.memoizedState)||(Zt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,rt.lanes|=f,os|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ch(n){var r=Tn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);Nn(f,r.memoizedState)||(Zt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Tp(){}function Ip(n,r){var a=rt,c=Tn(),d=r(),f=!Nn(c.memoizedState,d);if(f&&(c.memoizedState=d,Zt=!0),c=c.queue,hh(Cp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,ya(9,Ap.bind(null,a,c,d,r),void 0,null),St===null)throw Error(t(349));(ss&30)!==0||Sp(a,r,d)}return d}function Sp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=rt.updateQueue,r===null?(r={lastEffect:null,stores:null},rt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ap(n,r,a,c){r.value=a,r.getSnapshot=c,Rp(r)&&kp(n)}function Cp(n,r,a){return a(function(){Rp(r)&&kp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function kp(n){var r=Rr(n,1);r!==null&&Mn(r,n,1,-1)}function Pp(n){var r=nr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=A0.bind(null,rt,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=rt.updateQueue,r===null?(r={lastEffect:null,stores:null},rt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function xp(){return Tn().memoizedState}function Ql(n,r,a,c){var d=nr();rt.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Yl(n,r,a,c){var d=Tn();c=c===void 0?null:c;var f=void 0;if(yt!==null){var _=yt.memoizedState;if(f=_.destroy,c!==null&&oh(c,_.deps)){d.memoizedState=ya(r,a,f,c);return}}rt.flags|=n,d.memoizedState=ya(1|r,a,f,c)}function Np(n,r){return Ql(8390656,8,n,r)}function hh(n,r){return Yl(2048,8,n,r)}function Dp(n,r){return Yl(4,2,n,r)}function Vp(n,r){return Yl(4,4,n,r)}function Op(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function bp(n,r,a){return a=a!=null?a.concat([n]):null,Yl(4,4,Op.bind(null,r,n),a)}function dh(){}function Mp(n,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&oh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Lp(n,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&oh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Fp(n,r,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Zt=!0),n.memoizedState=a):(Nn(a,r)||(a=$o(),rt.lanes|=a,os|=a,n.baseState=!0),r)}function I0(n,r){var a=be;be=a!==0&&4>a?a:4,n(!0);var c=sh.transition;sh.transition={};try{n(!1),r()}finally{be=a,sh.transition=c}}function Up(){return Tn().memoizedState}function S0(n,r,a){var c=fi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jp(n))zp(r,a);else if(a=yp(n,r,a,c),a!==null){var d=Gt();Mn(a,n,c,d),Bp(a,r,c)}}function A0(n,r,a){var c=fi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(n))zp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,T=f(_,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,_)){var R=r.interleaved;R===null?(d.next=d,Zc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=yp(n,r,d,c),a!==null&&(d=Gt(),Mn(a,n,c,d),Bp(a,r,c))}}function jp(n){var r=n.alternate;return n===rt||r!==null&&r===rt}function zp(n,r){pa=Gl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Bp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,qo(n,a)}}var Xl={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},C0={readContext:En,useCallback:function(n,r){return nr().memoizedState=[n,r===void 0?null:r],n},useContext:En,useEffect:Np,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4194308,4,Op.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ql(4,2,n,r)},useMemo:function(n,r){var a=nr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=nr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=S0.bind(null,rt,n),[c.memoizedState,n]},useRef:function(n){var r=nr();return n={current:n},r.memoizedState=n},useState:Pp,useDebugValue:dh,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=Pp(!1),r=n[0];return n=I0.bind(null,n[1]),nr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=rt,d=nr();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),St===null)throw Error(t(349));(ss&30)!==0||Sp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Np(Cp.bind(null,c,f,n),[n]),c.flags|=2048,ya(9,Ap.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=nr(),r=St.identifierPrefix;if(tt){var a=Cr,c=Ar;a=(c&~(1<<32-an(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=T0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},R0={readContext:En,useCallback:Mp,useContext:En,useEffect:hh,useImperativeHandle:bp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Lp,useReducer:uh,useRef:xp,useState:function(){return uh(ga)},useDebugValue:dh,useDeferredValue:function(n){var r=Tn();return Fp(r,yt.memoizedState,n)},useTransition:function(){var n=uh(ga)[0],r=Tn().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1},k0={readContext:En,useCallback:Mp,useContext:En,useEffect:hh,useImperativeHandle:bp,useInsertionEffect:Dp,useLayoutEffect:Vp,useMemo:Lp,useReducer:ch,useRef:xp,useState:function(){return ch(ga)},useDebugValue:dh,useDeferredValue:function(n){var r=Tn();return yt===null?r.memoizedState=n:Fp(r,yt.memoizedState,n)},useTransition:function(){var n=ch(ga)[0],r=Tn().memoizedState;return[n,r]},useMutableSource:Tp,useSyncExternalStore:Ip,useId:Up,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function fh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ie({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jl={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Gt(),d=fi(n),f=kr(c,d);f.payload=r,a!=null&&(f.callback=a),r=ui(n,f,d),r!==null&&(Mn(r,n,d,c),Hl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Gt(),d=fi(n),f=kr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ui(n,f,d),r!==null&&(Mn(r,n,d,c),Hl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Gt(),c=fi(n),d=kr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ui(n,d,c),r!==null&&(Mn(r,n,c,a),Hl(r,n,c))}};function $p(n,r,a,c,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,_):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,f):!0}function Hp(n,r,a){var c=!1,d=oi,f=r.contextType;return typeof f=="object"&&f!==null?f=En(f):(d=Jt(r)?es:Mt.current,c=r.contextTypes,f=(c=c!=null)?Gs(n,d):oi),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function qp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Jl.enqueueReplaceState(r,r.state,null)}function ph(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},eh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=En(f):(f=Jt(r)?es:Mt.current,d.context=Gs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(fh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Jl.enqueueReplaceState(d,d.state,null),ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function no(n,r){try{var a="",c=r;do a+=X(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function mh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function gh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,r,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){su||(su=!0,Nh=c),gh(n,r)},a}function Kp(n,r,a){a=kr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){gh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){gh(n,r),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Gp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new P0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=$0.bind(null,n,r,a),r.then(n,n))}function Qp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Yp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=kr(-1,1),r.tag=2,ui(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var x0=Te.ReactCurrentOwner,Zt=!1;function Kt(n,r,a,c){r.child=n===null?gp(r,null,a,c):Js(r,n.child,a,c)}function Xp(n,r,a,c,d){a=a.render;var f=r.ref;return eo(r,d),c=ah(n,r,a,c,f,d),a=lh(),n!==null&&!Zt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Pr(n,r,d)):(tt&&a&&Hc(r),r.flags|=1,Kt(n,r,c,d),r.child)}function Jp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Fh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,Zp(n,r,f,c,d)):(n=hu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(_,c)&&n.ref===r.ref)return Pr(n,r,d)}return r.flags|=1,n=mi(f,c),n.ref=r.ref,n.return=r,r.child=n}function Zp(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ra(f,c)&&n.ref===r.ref)if(Zt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Zt=!0);else return r.lanes=n.lanes,Pr(n,r,d)}return yh(n,r,a,c,d)}function em(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(io,pn),pn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ge(io,pn),pn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Ge(io,pn),pn|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,Ge(io,pn),pn|=c;return Kt(n,r,d,a),r.child}function tm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function yh(n,r,a,c,d){var f=Jt(a)?es:Mt.current;return f=Gs(r,f),eo(r,d),a=ah(n,r,a,c,f,d),c=lh(),n!==null&&!Zt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Pr(n,r,d)):(tt&&c&&Hc(r),r.flags|=1,Kt(n,r,a,d),r.child)}function nm(n,r,a,c,d){if(Jt(a)){var f=!0;Ml(r)}else f=!1;if(eo(r,d),r.stateNode===null)eu(n,r),Hp(r,a,c),ph(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=En(U):(U=Jt(a)?es:Mt.current,U=Gs(r,U));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof _.getSnapshotBeforeUpdate=="function";Y||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==U)&&qp(r,_,c,U),li=!1;var K=r.memoizedState;_.state=K,ql(r,c,_,d),R=r.memoizedState,T!==c||K!==R||Xt.current||li?(typeof Q=="function"&&(fh(r,a,Q,c),R=r.memoizedState),(T=li||$p(r,a,T,c,K,R,U))?(Y||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,_p(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Vn(r.type,T),_.props=U,Y=r.pendingProps,K=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=En(R):(R=Jt(a)?es:Mt.current,R=Gs(r,R));var se=a.getDerivedStateFromProps;(Q=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Y||K!==R)&&qp(r,_,c,R),li=!1,K=r.memoizedState,_.state=K,ql(r,c,_,d);var ce=r.memoizedState;T!==Y||K!==ce||Xt.current||li?(typeof se=="function"&&(fh(r,a,se,c),ce=r.memoizedState),(U=li||$p(r,a,U,c,K,ce,R)||!1)?(Q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ce,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ce,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ce),_.props=c,_.state=ce,_.context=R,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),c=!1)}return _h(n,r,a,c,f,d)}function _h(n,r,a,c,d,f){tm(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&ap(r,a,!1),Pr(n,r,f);c=r.stateNode,x0.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Js(r,n.child,null,f),r.child=Js(r,null,T,f)):Kt(n,r,T,f),r.memoizedState=c.state,d&&ap(r,a,!0),r.child}function rm(n){var r=n.stateNode;r.pendingContext?sp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&sp(n,r.context,!1),th(n,r.containerInfo)}function im(n,r,a,c,d){return Xs(),Gc(d),r.flags|=256,Kt(n,r,a,c),r.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function wh(n){return{baseLanes:n,cachePool:null,transitions:null}}function sm(n,r,a){var c=r.pendingProps,d=nt.current,f=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(nt,d&1),n===null)return Kc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,f?(c=r.mode,f=r.child,_={mode:"hidden",children:_},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=du(_,c,0,null),n=cs(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=wh(a),r.memoizedState=vh,n):Eh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return N0(n,r,_,c,T,d,a);if(f){f=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=mi(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=mi(T,f):(f=cs(f,_,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,_=n.child.memoizedState,_=_===null?wh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~a,r.memoizedState=vh,c}return f=n.child,n=f.sibling,c=mi(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Eh(n,r){return r=du({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Zl(n,r,a,c){return c!==null&&Gc(c),Js(r,n.child,null,a),n=Eh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function N0(n,r,a,c,d,f,_){if(a)return r.flags&256?(r.flags&=-257,c=mh(Error(t(422))),Zl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=du({mode:"visible",children:c.children},d,0,null),f=cs(f,d,_,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Js(r,n.child,null,_),r.child.memoizedState=wh(_),r.memoizedState=vh,f);if((r.mode&1)===0)return Zl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=mh(f,c,void 0),Zl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Zt||T){if(c=St,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Rr(n,d),Mn(c,n,d,-1))}return Lh(),c=mh(Error(t(421))),Zl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=H0.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,fn=ii(d.nextSibling),dn=r,tt=!0,Dn=null,n!==null&&(vn[wn++]=Ar,vn[wn++]=Cr,vn[wn++]=ts,Ar=n.id,Cr=n.overflow,ts=r),r=Eh(r,c.children),r.flags|=4096,r)}function om(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Jc(n.return,r,a)}function Th(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function am(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(Kt(n,r,c.children,a),c=nt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&om(n,a,r);else if(n.tag===19)om(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(nt,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Wl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Th(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Wl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Th(r,!0,a,null,f);break;case"together":Th(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function eu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=mi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=mi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function D0(n,r,a){switch(r.tag){case 3:rm(r),Xs();break;case 5:Ep(r);break;case 1:Jt(r.type)&&Ml(r);break;case 4:th(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ge(Bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ge(nt,nt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?sm(n,r,a):(Ge(nt,nt.current&1),n=Pr(n,r,a),n!==null?n.sibling:null);Ge(nt,nt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return am(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(nt,nt.current),c)break;return null;case 22:case 23:return r.lanes=0,em(n,r,a)}return Pr(n,r,a)}var lm,Ih,um,cm;lm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ih=function(){},um=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,is(tr.current);var f=null;switch(a){case"input":d=gn(n,d),c=gn(n,c),f=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),f=[];break;case"textarea":d=Wt(n,d),c=Wt(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vl)}kn(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var R=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&R!==T&&(R!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(f||(f=[]),f.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(f=f||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(f=f||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&Ye("scroll",n),f||T===R||(f=[])):(f=f||[]).push(U,R))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},cm=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!tt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function V0(n,r,a){var c=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(r),null;case 1:return Jt(r.type)&&bl(),Ft(r),null;case 3:return c=r.stateNode,to(),Xe(Xt),Xe(Mt),ih(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Oh(Dn),Dn=null))),Ih(n,r),Ft(r),null;case 5:nh(r);var d=is(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)um(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ft(r),null}if(n=is(tr.current),jl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[er]=r,c[la]=f,n=(r.mode&1)!==0,a){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)Ye(sa[d],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":zr(c,f),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ye("invalid",c);break;case"textarea":Vo(c,f),Ye("invalid",c)}kn(a,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var T=f[_];_==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Dl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&Ye("scroll",c)}switch(a){case"input":lt(c),Rn(c,f,!0);break;case"textarea":lt(c),Br(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Vl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[er]=r,n[la]=c,lm(n,r,!1,!1),r.stateNode=n;e:{switch(_=Ss(a,c),a){case"dialog":Ye("cancel",n),Ye("close",n),d=c;break;case"iframe":case"object":case"embed":Ye("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)Ye(sa[d],n);d=c;break;case"source":Ye("error",n),d=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),d=c;break;case"details":Ye("toggle",n),d=c;break;case"input":zr(n,c),d=gn(n,c),Ye("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":Vo(n,c),d=Wt(n,c),Ye("invalid",n);break;default:d=c}kn(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var R=T[f];f==="style"?Is(n,R):f==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ol(n,R)):f==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Ui(n,R):typeof R=="number"&&Ui(n,""+R):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?R!=null&&f==="onScroll"&&Ye("scroll",n):R!=null&&Ae(n,f,R,_))}switch(a){case"input":lt(n),Rn(n,c,!1);break;case"textarea":lt(n),Br(n);break;case"option":c.value!=null&&n.setAttribute("value",""+le(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?Yt(n,!!c.multiple,f,!1):c.defaultValue!=null&&Yt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Vl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ft(r),null;case 6:if(n&&r.stateNode!=null)cm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=is(fa.current),is(tr.current),jl(r)){if(c=r.stateNode,a=r.memoizedProps,c[er]=r,(f=c.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:Dl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Dl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=r,r.stateNode=c}return Ft(r),null;case 13:if(Xe(nt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tt&&fn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)fp(),Xs(),r.flags|=98560,f=!1;else if(f=jl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[er]=r}else Xs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ft(r),f=!1}else Dn!==null&&(Oh(Dn),Dn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(nt.current&1)!==0?_t===0&&(_t=3):Lh())),r.updateQueue!==null&&(r.flags|=4),Ft(r),null);case 4:return to(),Ih(n,r),n===null&&oa(r.stateNode.containerInfo),Ft(r),null;case 10:return Xc(r.type._context),Ft(r),null;case 17:return Jt(r.type)&&bl(),Ft(r),null;case 19:if(Xe(nt),f=r.memoizedState,f===null)return Ft(r),null;if(c=(r.flags&128)!==0,_=f.rendering,_===null)if(c)_a(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Wl(n),_!==null){for(r.flags|=128,_a(f,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(nt,nt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Qe()>so&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304)}else{if(!c)if(n=Wl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!tt)return Ft(r),null}else 2*Qe()-f.renderingStartTime>so&&a!==1073741824&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(a=f.last,a!==null?a.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Qe(),r.sibling=null,a=nt.current,Ge(nt,c?a&1|2:a&1),r):(Ft(r),null);case 22:case 23:return Mh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(pn&1073741824)!==0&&(Ft(r),r.subtreeFlags&6&&(r.flags|=8192)):Ft(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function O0(n,r){switch(qc(r),r.tag){case 1:return Jt(r.type)&&bl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return to(),Xe(Xt),Xe(Mt),ih(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return nh(r),null;case 13:if(Xe(nt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Xs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Xe(nt),null;case 4:return to(),null;case 10:return Xc(r.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var tu=!1,Ut=!1,b0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ro(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ot(n,r,c)}else a.current=null}function Sh(n,r,a){try{a()}catch(c){ot(n,r,c)}}var hm=!1;function M0(n,r){if(Mc=wr,n=$f(),kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,U=0,Q=0,Y=n,K=null;t:for(;;){for(var se;Y!==a||d!==0&&Y.nodeType!==3||(T=_+d),Y!==f||c!==0&&Y.nodeType!==3||(R=_+c),Y.nodeType===3&&(_+=Y.nodeValue.length),(se=Y.firstChild)!==null;)K=Y,Y=se;for(;;){if(Y===n)break t;if(K===a&&++U===d&&(T=_),K===f&&++Q===c&&(R=_),(se=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=se}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:n,selectionRange:a},wr=!1,ue=r;ue!==null;)if(r=ue,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ue=n;else for(;ue!==null;){r=ue;try{var ce=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ct=ce.memoizedState,b=r.stateNode,N=b.getSnapshotBeforeUpdate(r.elementType===r.type?he:Vn(r.type,he),ct);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var L=r.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){ot(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,ue=n;break}ue=r.return}return ce=hm,hm=!1,ce}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Sh(r,a,f)}d=d.next}while(d!==c)}}function nu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ah(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function dm(n){var r=n.alternate;r!==null&&(n.alternate=null,dm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[er],delete r[la],delete r[zc],delete r[_0],delete r[v0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fm(n){return n.tag===5||n.tag===3||n.tag===4}function pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Vl));else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}function Rh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rh(n,r,a),n=n.sibling;n!==null;)Rh(n,r,a),n=n.sibling}var Pt=null,On=!1;function ci(n,r,a){for(a=a.child;a!==null;)mm(n,r,a),a=a.sibling}function mm(n,r,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Ut||ro(a,r);case 6:var c=Pt,d=On;Pt=null,ci(n,r,a),Pt=c,On=d,Pt!==null&&(On?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(On?(n=Pt,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),ei(n)):jc(Pt,a.stateNode));break;case 4:c=Pt,d=On,Pt=a.stateNode.containerInfo,On=!0,ci(n,r,a),Pt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&Sh(a,r,_),d=d.next}while(d!==c)}ci(n,r,a);break;case 1:if(!Ut&&(ro(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){ot(a,r,T)}ci(n,r,a);break;case 21:ci(n,r,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ci(n,r,a),Ut=c):ci(n,r,a);break;default:ci(n,r,a)}}function gm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new b0),r.forEach(function(c){var d=q0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function bn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Pt=T.stateNode,On=!1;break e;case 3:Pt=T.stateNode.containerInfo,On=!0;break e;case 4:Pt=T.stateNode.containerInfo,On=!0;break e}T=T.return}if(Pt===null)throw Error(t(160));mm(f,_,d),Pt=null,On=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){ot(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ym(r,n),r=r.sibling}function ym(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bn(r,n),rr(n),c&4){try{va(3,n,n.return),nu(3,n)}catch(he){ot(n,n.return,he)}try{va(5,n,n.return)}catch(he){ot(n,n.return,he)}}break;case 1:bn(r,n),rr(n),c&512&&a!==null&&ro(a,a.return);break;case 5:if(bn(r,n),rr(n),c&512&&a!==null&&ro(a,a.return),n.flags&32){var d=n.stateNode;try{Ui(d,"")}catch(he){ot(n,n.return,he)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=a!==null?a.memoizedProps:f,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&Un(d,f),Ss(T,_);var U=Ss(T,f);for(_=0;_<R.length;_+=2){var Q=R[_],Y=R[_+1];Q==="style"?Is(d,Y):Q==="dangerouslySetInnerHTML"?ol(d,Y):Q==="children"?Ui(d,Y):Ae(d,Q,Y,U)}switch(T){case"input":qt(d,f);break;case"textarea":sl(d,f);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var se=f.value;se!=null?Yt(d,!!f.multiple,se,!1):K!==!!f.multiple&&(f.defaultValue!=null?Yt(d,!!f.multiple,f.defaultValue,!0):Yt(d,!!f.multiple,f.multiple?[]:"",!1))}d[la]=f}catch(he){ot(n,n.return,he)}}break;case 6:if(bn(r,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(he){ot(n,n.return,he)}}break;case 3:if(bn(r,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ei(r.containerInfo)}catch(he){ot(n,n.return,he)}break;case 4:bn(r,n),rr(n);break;case 13:bn(r,n),rr(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(xh=Qe())),c&4&&gm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(U=Ut)||Q,bn(r,n),Ut=U):bn(r,n),rr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Q&&(n.mode&1)!==0)for(ue=n,Q=n.child;Q!==null;){for(Y=ue=Q;ue!==null;){switch(K=ue,se=K.child,K.tag){case 0:case 11:case 14:case 15:va(4,K,K.return);break;case 1:ro(K,K.return);var ce=K.stateNode;if(typeof ce.componentWillUnmount=="function"){c=K,a=K.return;try{r=c,ce.props=r.memoizedProps,ce.state=r.memoizedState,ce.componentWillUnmount()}catch(he){ot(c,a,he)}}break;case 5:ro(K,K.return);break;case 22:if(K.memoizedState!==null){wm(Y);continue}}se!==null?(se.return=K,ue=se):wm(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=Y.stateNode,R=Y.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=qr("display",_))}catch(he){ot(n,n.return,he)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=U?"":Y.memoizedProps}catch(he){ot(n,n.return,he)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:bn(r,n),rr(n),c&4&&gm(n);break;case 21:break;default:bn(r,n),rr(n)}}function rr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(fm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ui(d,""),c.flags&=-33);var f=pm(n);Rh(n,f,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=pm(n);Ch(n,T,_);break;default:throw Error(t(161))}}catch(R){ot(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function L0(n,r,a){ue=n,_m(n)}function _m(n,r,a){for(var c=(n.mode&1)!==0;ue!==null;){var d=ue,f=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||tu;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ut;T=tu;var U=Ut;if(tu=_,(Ut=R)&&!U)for(ue=d;ue!==null;)_=ue,R=_.child,_.tag===22&&_.memoizedState!==null?Em(d):R!==null?(R.return=_,ue=R):Em(d);for(;f!==null;)ue=f,_m(f),f=f.sibling;ue=d,tu=T,Ut=U}vm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ue=f):vm(n)}}function vm(n){for(;ue!==null;){var r=ue;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ut||nu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&wp(r,f,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}wp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var Q=U.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&ei(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||r.flags&512&&Ah(r)}catch(K){ot(r,r.return,K)}}if(r===n){ue=null;break}if(a=r.sibling,a!==null){a.return=r.return,ue=a;break}ue=r.return}}function wm(n){for(;ue!==null;){var r=ue;if(r===n){ue=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ue=a;break}ue=r.return}}function Em(n){for(;ue!==null;){var r=ue;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{nu(4,r)}catch(R){ot(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){ot(r,d,R)}}var f=r.return;try{Ah(r)}catch(R){ot(r,f,R)}break;case 5:var _=r.return;try{Ah(r)}catch(R){ot(r,_,R)}}}catch(R){ot(r,r.return,R)}if(r===n){ue=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ue=T;break}ue=r.return}}var F0=Math.ceil,ru=Te.ReactCurrentDispatcher,kh=Te.ReactCurrentOwner,In=Te.ReactCurrentBatchConfig,Le=0,St=null,pt=null,xt=0,pn=0,io=si(0),_t=0,wa=null,os=0,iu=0,Ph=0,Ea=null,en=null,xh=0,so=1/0,xr=null,su=!1,Nh=null,hi=null,ou=!1,di=null,au=0,Ta=0,Dh=null,lu=-1,uu=0;function Gt(){return(Le&6)!==0?Qe():lu!==-1?lu:lu=Qe()}function fi(n){return(n.mode&1)===0?1:(Le&2)!==0&&xt!==0?xt&-xt:E0.transition!==null?(uu===0&&(uu=$o()),uu):(n=be,n!==0||(n=window.event,n=n===void 0?16:Os(n.type)),n)}function Mn(n,r,a,c){if(50<Ta)throw Ta=0,Dh=null,Error(t(185));Gi(n,a,c),((Le&2)===0||n!==St)&&(n===St&&((Le&2)===0&&(iu|=a),_t===4&&pi(n,xt)),tn(n,c),a===1&&Le===0&&(r.mode&1)===0&&(so=Qe()+500,Ll&&ai()))}function tn(n,r){var a=n.callbackNode;Ki(n,r);var c=yr(n,n===St?xt:0);if(c===0)a!==null&&Rs(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Rs(a),r===1)n.tag===0?w0(Im.bind(null,n)):lp(Im.bind(null,n)),g0(function(){(Le&6)===0&&ai()}),a=null;else{switch(Hn(c)){case 1:a=ks;break;case 4:a=jo;break;case 16:a=$i;break;case 536870912:a=Ps;break;default:a=$i}a=Nm(a,Tm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Tm(n,r){if(lu=-1,uu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(oo()&&n.callbackNode!==a)return null;var c=yr(n,n===St?xt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=cu(n,c);else{r=c;var d=Le;Le|=2;var f=Am();(St!==n||xt!==r)&&(xr=null,so=Qe()+500,ls(n,r));do try{z0();break}catch(T){Sm(n,T)}while(!0);Yc(),ru.current=f,Le=d,pt!==null?r=0:(St=null,xt=0,r=_t)}if(r!==0){if(r===2&&(d=Bo(n),d!==0&&(c=d,r=Vh(n,d))),r===1)throw a=wa,ls(n,0),pi(n,c),tn(n,Qe()),a;if(r===6)pi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!U0(d)&&(r=cu(n,c),r===2&&(f=Bo(n),f!==0&&(c=f,r=Vh(n,f))),r===1))throw a=wa,ls(n,0),pi(n,c),tn(n,Qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:us(n,en,xr);break;case 3:if(pi(n,c),(c&130023424)===c&&(r=xh+500-Qe(),10<r)){if(yr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(us.bind(null,n,en,xr),r);break}us(n,en,xr);break;case 4:if(pi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-an(c);f=1<<_,_=r[_],_>d&&(d=_),c&=~f}if(c=d,c=Qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*F0(c/1960))-c,10<c){n.timeoutHandle=Uc(us.bind(null,n,en,xr),c);break}us(n,en,xr);break;case 5:us(n,en,xr);break;default:throw Error(t(329))}}}return tn(n,Qe()),n.callbackNode===a?Tm.bind(null,n):null}function Vh(n,r){var a=Ea;return n.current.memoizedState.isDehydrated&&(ls(n,r).flags|=256),n=cu(n,r),n!==2&&(r=en,en=a,r!==null&&Oh(r)),n}function Oh(n){en===null?en=n:en.push.apply(en,n)}function U0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Nn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pi(n,r){for(r&=~Ph,r&=~iu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-an(r),c=1<<a;n[a]=-1,r&=~c}}function Im(n){if((Le&6)!==0)throw Error(t(327));oo();var r=yr(n,0);if((r&1)===0)return tn(n,Qe()),null;var a=cu(n,r);if(n.tag!==0&&a===2){var c=Bo(n);c!==0&&(r=c,a=Vh(n,c))}if(a===1)throw a=wa,ls(n,0),pi(n,r),tn(n,Qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,us(n,en,xr),tn(n,Qe()),null}function bh(n,r){var a=Le;Le|=1;try{return n(r)}finally{Le=a,Le===0&&(so=Qe()+500,Ll&&ai())}}function as(n){di!==null&&di.tag===0&&(Le&6)===0&&oo();var r=Le;Le|=1;var a=In.transition,c=be;try{if(In.transition=null,be=1,n)return n()}finally{be=c,In.transition=a,Le=r,(Le&6)===0&&ai()}}function Mh(){pn=io.current,Xe(io)}function ls(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,m0(a)),pt!==null)for(a=pt.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bl();break;case 3:to(),Xe(Xt),Xe(Mt),ih();break;case 5:nh(c);break;case 4:to();break;case 13:Xe(nt);break;case 19:Xe(nt);break;case 10:Xc(c.type._context);break;case 22:case 23:Mh()}a=a.return}if(St=n,pt=n=mi(n.current,null),xt=pn=r,_t=0,wa=null,Ph=iu=os=0,en=Ea=null,rs!==null){for(r=0;r<rs.length;r++)if(a=rs[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var _=f.next;f.next=d,c.next=_}a.pending=c}rs=null}return n}function Sm(n,r){do{var a=pt;try{if(Yc(),Kl.current=Xl,Gl){for(var c=rt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Gl=!1}if(ss=0,It=yt=rt=null,pa=!1,ma=0,kh.current=null,a===null||a.return===null){_t=1,wa=r,pt=null;break}e:{var f=n,_=a.return,T=a,R=r;if(r=xt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,Q=T,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var se=Qp(_);if(se!==null){se.flags&=-257,Yp(se,_,T,f,r),se.mode&1&&Gp(f,U,r),r=se,R=U;var ce=r.updateQueue;if(ce===null){var he=new Set;he.add(R),r.updateQueue=he}else ce.add(R);break e}else{if((r&1)===0){Gp(f,U,r),Lh();break e}R=Error(t(426))}}else if(tt&&T.mode&1){var ct=Qp(_);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Yp(ct,_,T,f,r),Gc(no(R,T));break e}}f=R=no(R,T),_t!==4&&(_t=2),Ea===null?Ea=[f]:Ea.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var b=Wp(f,R,r);vp(f,b);break e;case 1:T=R;var N=f.type,L=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(hi===null||!hi.has(L)))){f.flags|=65536,r&=-r,f.lanes|=r;var J=Kp(f,T,r);vp(f,J);break e}}f=f.return}while(f!==null)}Rm(a)}catch(de){r=de,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Am(){var n=ru.current;return ru.current=Xl,n===null?Xl:n}function Lh(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||(os&268435455)===0&&(iu&268435455)===0||pi(St,xt)}function cu(n,r){var a=Le;Le|=2;var c=Am();(St!==n||xt!==r)&&(xr=null,ls(n,r));do try{j0();break}catch(d){Sm(n,d)}while(!0);if(Yc(),Le=a,ru.current=c,pt!==null)throw Error(t(261));return St=null,xt=0,_t}function j0(){for(;pt!==null;)Cm(pt)}function z0(){for(;pt!==null&&!Bi();)Cm(pt)}function Cm(n){var r=xm(n.alternate,n,pn);n.memoizedProps=n.pendingProps,r===null?Rm(n):pt=r,kh.current=null}function Rm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=V0(a,r,pn),a!==null){pt=a;return}}else{if(a=O0(a,r),a!==null){a.flags&=32767,pt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,pt=null;return}}if(r=r.sibling,r!==null){pt=r;return}pt=r=n}while(r!==null);_t===0&&(_t=5)}function us(n,r,a){var c=be,d=In.transition;try{In.transition=null,be=1,B0(n,r,a,c)}finally{In.transition=d,be=c}return null}function B0(n,r,a,c){do oo();while(di!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Ic(n,f),n===St&&(pt=St=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ou||(ou=!0,Nm($i,function(){return oo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=In.transition,In.transition=null;var _=be;be=1;var T=Le;Le|=4,kh.current=null,M0(n,a),ym(a,n),l0(Lc),wr=!!Mc,Lc=Mc=null,n.current=a,L0(a),gr(),Le=T,be=_,In.transition=f}else n.current=a;if(ou&&(ou=!1,di=n,au=d),f=n.pendingLanes,f===0&&(hi=null),yl(a.stateNode),tn(n,Qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(su)throw su=!1,n=Nh,Nh=null,n;return(au&1)!==0&&n.tag!==0&&oo(),f=n.pendingLanes,(f&1)!==0?n===Dh?Ta++:(Ta=0,Dh=n):Ta=0,ai(),null}function oo(){if(di!==null){var n=Hn(au),r=In.transition,a=be;try{if(In.transition=null,be=16>n?16:n,di===null)var c=!1;else{if(n=di,di=null,au=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ue=n.current;ue!==null;){var f=ue,_=f.child;if((ue.flags&16)!==0){var T=f.deletions;if(T!==null){for(var R=0;R<T.length;R++){var U=T[R];for(ue=U;ue!==null;){var Q=ue;switch(Q.tag){case 0:case 11:case 15:va(8,Q,f)}var Y=Q.child;if(Y!==null)Y.return=Q,ue=Y;else for(;ue!==null;){Q=ue;var K=Q.sibling,se=Q.return;if(dm(Q),Q===U){ue=null;break}if(K!==null){K.return=se,ue=K;break}ue=se}}}var ce=f.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ct=he.sibling;he.sibling=null,he=ct}while(he!==null)}}ue=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,ue=_;else e:for(;ue!==null;){if(f=ue,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:va(9,f,f.return)}var b=f.sibling;if(b!==null){b.return=f.return,ue=b;break e}ue=f.return}}var N=n.current;for(ue=N;ue!==null;){_=ue;var L=_.child;if((_.subtreeFlags&2064)!==0&&L!==null)L.return=_,ue=L;else e:for(_=N;ue!==null;){if(T=ue,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:nu(9,T)}}catch(de){ot(T,T.return,de)}if(T===_){ue=null;break e}var J=T.sibling;if(J!==null){J.return=T.return,ue=J;break e}ue=T.return}}if(Le=d,ai(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Hi,n)}catch{}c=!0}return c}finally{be=a,In.transition=r}}return!1}function km(n,r,a){r=no(a,r),r=Wp(n,r,1),n=ui(n,r,1),r=Gt(),n!==null&&(Gi(n,1,r),tn(n,r))}function ot(n,r,a){if(n.tag===3)km(n,n,a);else for(;r!==null;){if(r.tag===3){km(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hi===null||!hi.has(c))){n=no(a,n),n=Kp(r,n,1),r=ui(r,n,1),n=Gt(),r!==null&&(Gi(r,1,n),tn(r,n));break}}r=r.return}}function $0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Gt(),n.pingedLanes|=n.suspendedLanes&a,St===n&&(xt&a)===a&&(_t===4||_t===3&&(xt&130023424)===xt&&500>Qe()-xh?ls(n,0):Ph|=a),tn(n,r)}function Pm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var a=Gt();n=Rr(n,r),n!==null&&(Gi(n,r,a),tn(n,a))}function H0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Pm(n,a)}function q0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Pm(n,a)}var xm;xm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Xt.current)Zt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Zt=!1,D0(n,r,a);Zt=(n.flags&131072)!==0}else Zt=!1,tt&&(r.flags&1048576)!==0&&up(r,Ul,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;eu(n,r),n=r.pendingProps;var d=Gs(r,Mt.current);eo(r,a),d=ah(null,r,c,n,d,a);var f=lh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Jt(c)?(f=!0,Ml(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,eh(r),d.updater=Jl,r.stateNode=d,d._reactInternals=r,ph(r,c,n,a),r=_h(null,r,c,!0,f,a)):(r.tag=0,tt&&f&&Hc(r),Kt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(eu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=K0(c),n=Vn(c,n),d){case 0:r=yh(null,r,c,n,a);break e;case 1:r=nm(null,r,c,n,a);break e;case 11:r=Xp(null,r,c,n,a);break e;case 14:r=Jp(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),yh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),nm(n,r,c,d,a);case 3:e:{if(rm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,_p(n,r),ql(r,c,null,a);var _=r.memoizedState;if(c=_.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=no(Error(t(423)),r),r=im(n,r,c,a,d);break e}else if(c!==d){d=no(Error(t(424)),r),r=im(n,r,c,a,d);break e}else for(fn=ii(r.stateNode.containerInfo.firstChild),dn=r,tt=!0,Dn=null,a=gp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),c===d){r=Pr(n,r,a);break e}Kt(n,r,c,a)}r=r.child}return r;case 5:return Ep(r),n===null&&Kc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Fc(c,d)?_=null:f!==null&&Fc(c,f)&&(r.flags|=32),tm(n,r),Kt(n,r,_,a),r.child;case 6:return n===null&&Kc(r),null;case 13:return sm(n,r,a);case 4:return th(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Js(r,null,c,a):Kt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Xp(n,r,c,d,a);case 7:return Kt(n,r,r.pendingProps,a),r.child;case 8:return Kt(n,r,r.pendingProps.children,a),r.child;case 12:return Kt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,Ge(Bl,c._currentValue),c._currentValue=_,f!==null)if(Nn(f.value,_)){if(f.children===d.children&&!Xt.current){r=Pr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){_=f.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(f.tag===1){R=kr(-1,a&-a),R.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var Q=U.pending;Q===null?R.next=R:(R.next=Q.next,Q.next=R),U.pending=R}}f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Jc(f.return,a,r),T.lanes|=a;break}R=R.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Jc(_,a,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}Kt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,eo(r,a),d=En(d),c=c(d),r.flags|=1,Kt(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),Jp(n,r,c,d,a);case 15:return Zp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),eu(n,r),r.tag=1,Jt(c)?(n=!0,Ml(r)):n=!1,eo(r,a),Hp(r,c,d),ph(r,c,d,a),_h(null,r,c,!0,n,a);case 19:return am(n,r,a);case 22:return em(n,r,a)}throw Error(t(156,r.tag))};function Nm(n,r){return Uo(n,r)}function W0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,r,a,c){return new W0(n,r,a,c)}function Fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function K0(n){if(typeof n=="function")return Fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===dt)return 14}return 2}function mi(n,r){var a=n.alternate;return a===null?(a=Sn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hu(n,r,a,c,d,f){var _=2;if(c=n,typeof n=="function")Fh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return cs(a.children,d,f,r);case I:_=8,d|=8;break;case C:return n=Sn(12,a,r,d|2),n.elementType=C,n.lanes=f,n;case A:return n=Sn(13,a,r,d),n.elementType=A,n.lanes=f,n;case $e:return n=Sn(19,a,r,d),n.elementType=$e,n.lanes=f,n;case qe:return du(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:_=10;break e;case P:_=9;break e;case O:_=11;break e;case dt:_=14;break e;case Tt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Sn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function cs(n,r,a,c){return n=Sn(7,n,c,r),n.lanes=a,n}function du(n,r,a,c){return n=Sn(22,n,c,r),n.elementType=qe,n.lanes=a,n.stateNode={isHidden:!1},n}function Uh(n,r,a){return n=Sn(6,n,null,r),n.lanes=a,n}function jh(n,r,a){return r=Sn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function G0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zh(n,r,a,c,d,f,_,T,R){return n=new G0(n,r,a,T,R),r===1?(r=1,f===!0&&(r|=8)):r=0,f=Sn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(f),n}function Q0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xe,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Dm(n){if(!n)return oi;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Jt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Jt(a))return op(n,a,r)}return r}function Vm(n,r,a,c,d,f,_,T,R){return n=zh(a,c,!0,n,d,f,_,T,R),n.context=Dm(null),a=n.current,c=Gt(),d=fi(a),f=kr(c,d),f.callback=r??null,ui(a,f,d),n.current.lanes=d,Gi(n,d,c),tn(n,c),n}function fu(n,r,a,c){var d=r.current,f=Gt(),_=fi(d);return a=Dm(a),r.context===null?r.context=a:r.pendingContext=a,r=kr(f,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ui(d,r,_),n!==null&&(Mn(n,d,_,f),Hl(n,d,_)),_}function pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Bh(n,r){Om(n,r),(n=n.alternate)&&Om(n,r)}function Y0(){return null}var bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $h(n){this._internalRoot=n}mu.prototype.render=$h.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));fu(n,r,null,null)},mu.prototype.unmount=$h.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;as(function(){fu(null,n,null,null)}),r[Ir]=null}};function mu(n){this._internalRoot=n}mu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Go();n={blockedOn:null,target:n,priority:r};for(var a=0;a<ln.length&&r!==0&&r<ln[a].priority;a++);ln.splice(a,0,n),a===0&&Ds(n)}};function Hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function X0(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=pu(_);f.call(U)}}var _=Vm(r,c,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=_,n[Ir]=_.current,oa(n.nodeType===8?n.parentNode:n),as(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=pu(R);T.call(U)}}var R=zh(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=R,n[Ir]=R.current,oa(n.nodeType===8?n.parentNode:n),as(function(){fu(r,R,a,c)}),R}function yu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var T=d;d=function(){var R=pu(_);T.call(R)}}fu(r,_,n,d)}else _=X0(a,r,n,d,c);return pu(_)}Wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ue(r.pendingLanes);a!==0&&(qo(r,a|1),tn(r,Qe()),(Le&6)===0&&(so=Qe()+500,ai()))}break;case 13:as(function(){var c=Rr(n,1);if(c!==null){var d=Gt();Mn(c,n,1,d)}}),Bh(n,1)}},xs=function(n){if(n.tag===13){var r=Rr(n,134217728);if(r!==null){var a=Gt();Mn(r,n,134217728,a)}Bh(n,134217728)}},Ko=function(n){if(n.tag===13){var r=fi(n),a=Rr(n,r);if(a!==null){var c=Gt();Mn(a,n,r,c)}Bh(n,r)}},Go=function(){return be},Qo=function(n,r){var a=be;try{return be=n,r()}finally{be=a}},fr=function(n,r,a){switch(r){case"input":if(qt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ol(c);if(!d)throw Error(t(90));Ot(c),qt(c,d)}}}break;case"textarea":sl(n,a);break;case"select":r=a.value,r!=null&&Yt(n,!!a.multiple,r,!1)}},ll=bh,ul=as;var J0={usingClientEntryPoint:!1,Events:[ua,Ws,Ol,Kr,Gr,bh]},Ia={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||Y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Hi=_u.inject(Z0),on=_u}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J0,nn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(r))throw Error(t(200));return Q0(n,r,null,a)},nn.createRoot=function(n,r){if(!Hh(n))throw Error(t(299));var a=!1,c="",d=bm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=zh(n,1,!1,null,null,a,!1,c,d),n[Ir]=r.current,oa(n.nodeType===8?n.parentNode:n),new $h(r)},nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=gl(r),n=n===null?null:n.stateNode,n},nn.flushSync=function(n){return as(n)},nn.hydrate=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!0,a)},nn.hydrateRoot=function(n,r,a){if(!Hh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",_=bm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Vm(r,null,n,1,a??null,d,!1,f,_),n[Ir]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new mu(r)},nn.render=function(n,r,a){if(!gu(r))throw Error(t(200));return yu(null,n,r,!1,a)},nn.unmountComponentAtNode=function(n){if(!gu(n))throw Error(t(40));return n._reactRootContainer?(as(function(){yu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},nn.unstable_batchedUpdates=bh,nn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!gu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yu(n,r,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var Hm;function aw(){if(Hm)return Kh.exports;Hm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Kh.exports=ow(),Kh.exports}var qm;function lw(){if(qm)return vu;qm=1;var i=aw();return vu.createRoot=i.createRoot,vu.hydrateRoot=i.hydrateRoot,vu}var uw=lw();const cw=()=>{};var Wm={};/**
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
 */const Ry=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},hw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ky={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let x=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(x=64)),s.push(t[E],t[S],t[x],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ry(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):hw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||S==null)throw new dw;const x=u<<2|m>>4;if(s.push(x),v!==64){const z=m<<4&240|v>>2;if(s.push(z),S!==64){const ee=v<<6&192|S;s.push(ee)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fw=function(i){const e=Ry(i);return ky.encodeByteArray(e,!0)},Fu=function(i){return fw(i).replace(/\./g,"")},Py=function(i){try{return ky.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Co(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function ww(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Fu(JSON.stringify(t)),Fu(JSON.stringify(h)),""].join(".")}const xa={};function Ew(){const i={prod:[],emulator:[]};for(const e of Object.keys(xa))xa[e]?i.emulator.push(e):i.prod.push(e);return i}function Tw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Km=!1;function Oy(i,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||xa[i]===e||xa[i]||Km)return;xa[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=Ew().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function y(x,z){x.setAttribute("width","24"),x.setAttribute("id",z),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function v(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Km=!0,h()},x}function E(x,z){x.setAttribute("id",z),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function S(){const x=Tw(s),z=t("text"),ee=document.getElementById(z)||document.createElement("span"),Z=t("learnmore"),H=document.getElementById(Z)||document.createElement("a"),ye=t("preprendIcon"),we=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Ae=x.element;m(Ae),E(H,Z);const Te=v();y(we,ye),Ae.append(we,ee,H,Te),document.body.appendChild(Ae)}u?(ee.innerText="Preview backend disconnected.",we.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,ee.innerText="Preview backend running in this workspace."),ee.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */const Dw="FirebaseError";class jr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Dw,Object.setPrototypeOf(this,jr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Vw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new jr(o,m,s)}}function Vw(i,e){return i.replace(Ow,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Ow=/\{\$([^}]+)}/g;function bw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ms(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Gm(u)&&Gm(h)){if(!ms(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Gm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Mw(i,e){const t=new Lw(i,e);return t.subscribe.bind(t)}class Lw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Fw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Yh),o.error===void 0&&(o.error=Yh),o.complete===void 0&&(o.complete=Yh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Yh(){}/**
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
 */function Ht(i){return i&&i._delegate?i._delegate:i}class gs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class Uw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zw(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(i){return i===hs?void 0:i}function zw(i){return i.instantiationMode==="EAGER"}/**
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
 */var De;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(De||(De={}));const $w={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Hw=De.INFO,qw={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},Ww=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=qw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=Hw,this._logHandler=Ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const Kw=(i,e)=>e.some(t=>i instanceof t);let Qm,Ym;function Gw(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qw(){return Ym||(Ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const by=new WeakMap,dd=new WeakMap,My=new WeakMap,Xh=new WeakMap,Ud=new WeakMap;function Yw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Ai(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&by.set(t,i)}).catch(()=>{}),Ud.set(e,i),e}function Xw(i){if(dd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});dd.set(i,e)}let fd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return dd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||My.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Jw(i){fd=i(fd)}function Zw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Jh(this),e,...t);return My.set(s,e.sort?e.sort():[e]),Ai(s)}:Qw().includes(i)?function(...e){return i.apply(Jh(this),e),Ai(by.get(this))}:function(...e){return Ai(i.apply(Jh(this),e))}}function eE(i){return typeof i=="function"?Zw(i):(i instanceof IDBTransaction&&Xw(i),Kw(i,Gw())?new Proxy(i,fd):i)}function Ai(i){if(i instanceof IDBRequest)return Yw(i);if(Xh.has(i))return Xh.get(i);const e=eE(i);return e!==i&&(Xh.set(i,e),Ud.set(e,i)),e}const Jh=i=>Ud.get(i);function tE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Ai(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Ai(h.result),y.oldVersion,y.newVersion,Ai(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const nE=["get","getKey","getAll","getAllKeys","count"],rE=["put","add","delete","clear"],Zh=new Map;function Xm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=rE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||nE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Zh.set(e,u),u}Jw(i=>({...i,get:(e,t,s)=>Xm(e,t)||i.get(e,t,s),has:(e,t)=>!!Xm(e,t)||i.has(e,t)}));/**
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
 */const Uu=new Map,OE=new Map,gd=new Map;function Zm(i,e){try{i.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function _o(i){const e=i.name;if(gd.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,i);for(const t of Uu.values())Zm(t,i);for(const t of OE.values())Zm(t,i);return!0}function jd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function An(i){return i==null?!1:i.settings!==void 0}/**
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
 */class ME{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
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
 */const Ro=DE;function Ly(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:md,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=Ny()),!t)throw Ci.create("no-options");const u=Uu.get(o);if(u){if(ms(t,u.options)&&ms(s,u.config))return u;throw Ci.create("duplicate-app",{appName:o})}const h=new Bw(o);for(const y of gd.values())h.addComponent(y);const m=new ME(t,s,h);return Uu.set(o,m),m}function Fy(i=md){const e=Uu.get(i);if(!e&&i===md&&Ny())return Ly();if(!e)throw Ci.create("no-app",{appName:i});return e}function Ri(i,e,t){let s=VE[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(h.join(" "));return}_o(new gs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function WE(i){_o(new gs("platform-logger",e=>new iE(e),"PRIVATE")),_o(new gs("heartbeat",e=>new BE(e),"PRIVATE")),Ri(pd,Jm,i),Ri(pd,Jm,"esm2020"),Ri("fire-js","")}WE("");var KE="firebase",GE="12.6.0";/**
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
 */Ri(KE,GE,"app");function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QE=zy,By=new Wa("auth","Firebase",zy());/**
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
 */const ju=new Fd("@firebase/auth");function YE(i,...e){ju.logLevel<=De.WARN&&ju.warn(`Auth (${Ro}): ${i}`,...e)}function ku(i,...e){ju.logLevel<=De.ERROR&&ju.error(`Auth (${Ro}): ${i}`,...e)}/**
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
 */class Ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=Iw()||Rw()}get(){return JE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const tT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nT=new Ga(3e4,6e4);function Qa(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ko(i,e,t,s,o={}){return qy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return Aw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Co(i.emulatorConfig.host)&&(v.credentials="include"),Hy.fetch()(await Wy(i,i.config.apiHost,t,m),v)})}async function qy(i,e,t){i._canInitEmulator=!1;const s={...eT,...e};try{const o=new rT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw wu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw wu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw wu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw $y(i,E,v);br(i,E)}}catch(o){if(o instanceof jr)throw o;br(i,"network-request-failed",{message:String(o)})}}async function $d(i,e,t,s,o={}){const u=await ko(i,e,t,s,o);return"mfaPendingCredential"in u&&br(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Wy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Bd(i.config,o):`${i.config.apiScheme}://${o}`;return tT.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class rT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),nT.get())})}}function wu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function iT(i,e){return ko(i,"POST","/v1/accounts:delete",e)}async function zu(i,e){return ko(i,"POST","/v1/accounts:lookup",e)}/**
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
 */async function Bu(i){var S;const e=i.auth,t=await i.getIdToken(),s=await La(i,zu(e,{idToken:t}));Se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?Ky(o.providerUserInfo):[],h=uT(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function lT(i){const e=Ht(i);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ky(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function cT(i,e){const t=await qy(i,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Wy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Co(i.emulatorConfig.host)&&(y.credentials="include"),Hy.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hT(i,e){return ko(i,"POST","/v2/accounts:revokeToken",Qa(i,e))}/**
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
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=ig(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await cT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new fo;return s&&(Se(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Se(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Se(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
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
 */function yi(i,e){Se(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _d(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await La(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sT(this,e)}reload(){return lT(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await La(this,iT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:S,emailVerified:x,isAnonymous:z,providerData:ee,stsTokenManager:Z}=t;Se(S&&Z,e,"internal-error");const H=fo.fromJSON(this.name,Z);Se(typeof S=="string",e,"internal-error"),yi(s,e.name),yi(o,e.name),Se(typeof x=="boolean",e,"internal-error"),Se(typeof z=="boolean",e,"internal-error"),yi(u,e.name),yi(h,e.name),yi(m,e.name),yi(y,e.name),yi(v,e.name),yi(E,e.name);const ye=new Ln({uid:S,auth:e,email:o,emailVerified:x,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:H,createdAt:v,lastLoginAt:E});return ee&&Array.isArray(ee)&&(ye.providerData=ee.map(we=>({...we}))),y&&(ye._redirectEventId=y),ye}static async _fromIdTokenResponse(e,t,s=!1){const o=new fo;o.updateFromServerResponse(t);const u=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Se(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ky(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new fo;m.updateFromIdToken(s);const y=new Ln({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _d(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */class Gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gy.type="NONE";const og=Gy;/**
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
 */function Pu(i,e,t){return`firebase:${i}:${e}:${t}`}class po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Pu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Pu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zu(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new po(Dr(og),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Dr(og);const h=Pu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){let S;if(typeof E=="string"){const x=await zu(e,{idToken:E}).catch(()=>{});if(!x)break;S=await Ln._fromGetAccountInfoResponse(e,x,E)}else S=Ln._fromJSON(e,E);v!==u&&(m=S),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new po(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new po(u,e,s))}}/**
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
 */function r_(i,e=[]){let t;switch(i){case"Browser":t=ag($t());break;case"Worker":t=`${ag($t())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ro}/${s}`}/**
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
 */async function mT(i,e={}){return ko(i,"GET","/v2/passwordPolicy",Qa(i,e))}/**
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
 */class _T{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.beforeStateQueue=new pT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zu(this,{idToken:e}),s=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(An(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Vr(this));const t=e?Ht(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mT(this),t=new yT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&YE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ya(i){return Ht(i)}class lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mw(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function IT(i,e){const t=jd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ms(u,e??{}))return o;br(o,"already-initialized")}return t.initialize({options:e})}function ST(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AT(i,e,t){const s=Ya(i);Se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=i_(e),{host:h,port:m}=CT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Se(ms(v,s.config.emulator)&&ms(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Co(h)?(Vy(`${u}//${h}${y}`),Oy("Auth",!0)):RT()}function i_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function CT(i){const e=i_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ug(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ug(h)}}}function ug(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function RT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */async function mo(i,e){return $d(i,"POST","/v1/accounts:signInWithIdp",Qa(i,e))}/**
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
 */const kT="http://localhost";class ys extends s_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ys(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:kT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */class wi extends Xa{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
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
 */class Ei extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ys._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ei.credential(t,s)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
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
 */class Ti extends Xa{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends Xa{constructor(){super("twitter.com")}static credential(e,t){return ys._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */function Kd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class $T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Kd("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const x=S;if(x.data.eventId===v)switch(x.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function d_(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function qT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function KT(){return d_()?self:null}/**
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
 */const f_="firebaseLocalStorageDb",GT=1,qu="firebaseLocalStorage",p_="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function QT(){const i=indexedDB.deleteDatabase(f_);return new Ja(i).toPromise()}function vd(){const i=indexedDB.open(f_,GT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:p_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await QT(),e(await vd()))})})}async function hg(i,e,t){const s=ic(i,!0).put({[p_]:e,value:t});return new Ja(s).toPromise()}async function YT(i,e){const t=ic(i,!1).get(e),s=await new Ja(t).toPromise();return s===void 0?null:s.value}function dg(i,e){const t=ic(i,!0).delete(e);return new Ja(t).toPromise()}const XT=800,JT=3;class m_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>JT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(KT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await qT(),!this.activeServiceWorker)return;this.sender=new $T(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await hg(e,Hu,"1"),await dg(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>hg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>YT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ic(o,!1).getAll();return new Ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m_.type="LOCAL";const ZT=m_;new Ga(3e4,6e4);/**
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
 */class Gd extends s_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function t1(i){return VT(i.auth,new Gd(i),i.bypassAuthState)}function n1(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),DT(t,new Gd(i),i.bypassAuthState)}async function r1(i){const{auth:e,user:t}=i;return Se(t,e,"internal-error"),NT(t,new Gd(i),i.bypassAuthState)}/**
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
 */const i1=new Ga(2e3,1e4);class ho extends g_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ho.currentPopupAction&&ho.currentPopupAction.cancel(),ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}ho.currentPopupAction=null;/**
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
 */async function m1(i,e={}){return ko(i,"GET","/v1/projects",e)}/**
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
 */const w1=new Ga(3e4,6e4);function pg(){const i=or().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function E1(i){return new Promise((e,t)=>{var o,u,h;function s(){pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pg(),t(sr(i,"network-request-failed"))},timeout:w1.get()})}if((u=(o=or().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=or().gapi)!=null&&h.load)s();else{const m=TT("iframefcb");return or()[m]=()=>{gapi.load?s():t(sr(i,"network-request-failed"))},wT(`${ET()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Nu=null,e})}let Nu=null;function T1(i){return Nu=Nu||E1(i),Nu}/**
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
 */const I1=new Ga(5e3,15e3),S1="__/auth/iframe",A1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(i){const e=i.config;Se(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Bd(e,A1):`https://${i.config.authDomain}/${S1}`,s={apiKey:e.apiKey,appName:i.name,v:Ro},o=R1.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function P1(i){const e=await T1(i),t=or().gapi;return Se(t,i,"internal-error"),e.open({where:document.body,url:k1(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=sr(i,"network-request-failed"),m=or().setTimeout(()=>{u(h)},I1.get());function y(){or().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const x1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N1=500,D1=600,V1="_blank",O1="http://localhost";class mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b1(i,e,t,s=N1,o=D1){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...x1,width:s.toString(),height:o.toString(),top:u,left:h},v=$t().toLowerCase();t&&(m=Xy(v)?V1:t),Qy(v)&&(e=e||O1,y.scrollbars="yes");const E=Object.entries(y).reduce((x,[z,ee])=>`${x}${z}=${ee},`,"");if(dT(v)&&m!=="_self")return M1(e||"",m),new mg(null);const S=window.open(e||"",m,E);Se(S,i,"popup-blocked");try{S.focus()}catch{}return new mg(S)}function M1(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const L1="__/auth/handler",F1="emulator/auth/handler",U1=encodeURIComponent("fac");async function gg(i,e,t,s,o,u){Se(i.config.authDomain,i,"auth-domain-config-required"),Se(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ro,eventId:o};if(e instanceof o_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",bw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof Xa){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),v=y?`#${U1}=${encodeURIComponent(y)}`:"";return`${j1(i)}?${Ka(m).slice(1)}${v}`}function j1({config:i}){return i.emulator?Bd(i,F1):`https://${i.authDomain}/${L1}`}/**
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
 */const nd="webStorageSupport";class z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h_,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,t,s,o){var h;Mr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await gg(e,t,s,yd(),o);return b1(e,u,Kd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await gg(e,t,s,yd(),o);return HT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await P1(e),s=new f1(e);return t.register("authEvent",o=>(Se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nd,{type:nd},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[nd];u!==void 0&&t(!!u),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return n_()||Yy()||qd()}}const B1=z1;var yg="@firebase/auth",_g="1.11.1";/**
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
 */function H1(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q1(i){_o(new gs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Se(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r_(i)},v=new _T(s,o,u,y);return ST(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_o(new gs("auth-internal",e=>{const t=Ya(e.getProvider("auth").getImmediate());return(s=>new $1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ri(yg,_g,H1(i)),Ri(yg,_g,"esm2020")}/**
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
 */const W1=300,K1=Dy("authIdTokenMaxAge")||W1;let vg=null;const G1=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>K1)return;const o=t==null?void 0:t.token;vg!==o&&(vg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Q1(i=Fy()){const e=jd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=IT(i,{popupRedirectResolver:B1,persistence:[ZT,zT,h_]}),s=Dy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=G1(u.toString());LT(t,h,()=>h(t.currentUser)),MT(t,m=>h(m))}}const o=xy("auth");return o&&AT(t,`http://${o}`),t}function Y1(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}vT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=sr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",Y1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q1("Browser");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki,__;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function C(){}C.prototype=I.prototype,k.F=I.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(D,P,O){for(var A=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)A[$e-2]=arguments[$e];return I.prototype[P].apply(D,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,C){C||(C=0);const D=Array(16);if(typeof I=="string")for(var P=0;P<16;++P)D[P]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(P=0;P<16;++P)D[P]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=k.g[0],C=k.g[1],P=k.g[2];let O=k.g[3],A;A=I+(O^C&(P^O))+D[0]+3614090360&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[1]+3905402710&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[2]+606105819&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[3]+3250441966&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(O^C&(P^O))+D[4]+4118548399&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[5]+1200080426&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[6]+2821735955&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[7]+4249261313&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(O^C&(P^O))+D[8]+1770035416&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[9]+2336552879&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[10]+4294925233&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[11]+2304563134&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(O^C&(P^O))+D[12]+1804603682&4294967295,I=C+(A<<7&4294967295|A>>>25),A=O+(P^I&(C^P))+D[13]+4254626195&4294967295,O=I+(A<<12&4294967295|A>>>20),A=P+(C^O&(I^C))+D[14]+2792965006&4294967295,P=O+(A<<17&4294967295|A>>>15),A=C+(I^P&(O^I))+D[15]+1236535329&4294967295,C=P+(A<<22&4294967295|A>>>10),A=I+(P^O&(C^P))+D[1]+4129170786&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[6]+3225465664&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[11]+643717713&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[0]+3921069994&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(P^O&(C^P))+D[5]+3593408605&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[10]+38016083&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[15]+3634488961&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[4]+3889429448&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(P^O&(C^P))+D[9]+568446438&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[14]+3275163606&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[3]+4107603335&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[8]+1163531501&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(P^O&(C^P))+D[13]+2850285829&4294967295,I=C+(A<<5&4294967295|A>>>27),A=O+(C^P&(I^C))+D[2]+4243563512&4294967295,O=I+(A<<9&4294967295|A>>>23),A=P+(I^C&(O^I))+D[7]+1735328473&4294967295,P=O+(A<<14&4294967295|A>>>18),A=C+(O^I&(P^O))+D[12]+2368359562&4294967295,C=P+(A<<20&4294967295|A>>>12),A=I+(C^P^O)+D[5]+4294588738&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[8]+2272392833&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[11]+1839030562&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[14]+4259657740&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(C^P^O)+D[1]+2763975236&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[4]+1272893353&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[7]+4139469664&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[10]+3200236656&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(C^P^O)+D[13]+681279174&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[0]+3936430074&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[3]+3572445317&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[6]+76029189&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(C^P^O)+D[9]+3654602809&4294967295,I=C+(A<<4&4294967295|A>>>28),A=O+(I^C^P)+D[12]+3873151461&4294967295,O=I+(A<<11&4294967295|A>>>21),A=P+(O^I^C)+D[15]+530742520&4294967295,P=O+(A<<16&4294967295|A>>>16),A=C+(P^O^I)+D[2]+3299628645&4294967295,C=P+(A<<23&4294967295|A>>>9),A=I+(P^(C|~O))+D[0]+4096336452&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[7]+1126891415&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[14]+2878612391&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[5]+4237533241&4294967295,C=P+(A<<21&4294967295|A>>>11),A=I+(P^(C|~O))+D[12]+1700485571&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[3]+2399980690&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[10]+4293915773&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[1]+2240044497&4294967295,C=P+(A<<21&4294967295|A>>>11),A=I+(P^(C|~O))+D[8]+1873313359&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[15]+4264355552&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[6]+2734768916&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[13]+1309151649&4294967295,C=P+(A<<21&4294967295|A>>>11),A=I+(P^(C|~O))+D[4]+4149444226&4294967295,I=C+(A<<6&4294967295|A>>>26),A=O+(C^(I|~P))+D[11]+3174756917&4294967295,O=I+(A<<10&4294967295|A>>>22),A=P+(I^(O|~C))+D[2]+718787259&4294967295,P=O+(A<<15&4294967295|A>>>17),A=C+(O^(P|~I))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+O&4294967295}s.prototype.v=function(k,I){I===void 0&&(I=k.length);const C=I-this.blockSize,D=this.C;let P=this.h,O=0;for(;O<I;){if(P==0)for(;O<=C;)o(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<I;)if(D[P++]=k.charCodeAt(O++),P==this.blockSize){o(this,D),P=0;break}}else for(;O<I;)if(D[P++]=k[O++],P==this.blockSize){o(this,D),P=0;break}}this.h=P,this.o+=I},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;I=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=I&255,I/=256;for(this.v(k),k=Array(16),I=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)k[I++]=this.g[C]>>>D&255;return k};function u(k,I){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=I(k)}function h(k,I){this.h=I;const C=[];let D=!0;for(let P=k.length-1;P>=0;P--){const O=k[P]|0;D&&O==I||(C[P]=O,D=!1)}this.g=C}var m={};function y(k){return-128<=k&&k<128?u(k,function(I){return new h([I|0],I<0?-1:0)}):new h([k|0],k<0?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return S;if(k<0)return H(v(-k));const I=[];let C=1;for(let D=0;k>=C;D++)I[D]=k/C|0,C*=4294967296;return new h(I,0)}function E(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return H(E(k.substring(1),I));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=v(Math.pow(I,8));let D=S;for(let O=0;O<k.length;O+=8){var P=Math.min(8,k.length-O);const A=parseInt(k.substring(O,O+P),I);P<8?(P=v(Math.pow(I,P)),D=D.j(P).add(v(A))):(D=D.j(C),D=D.add(v(A)))}return D}var S=y(0),x=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Z(this))return-H(this).m();let k=0,I=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);k+=(D>=0?D:4294967296+D)*I,I*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(ee(this))return"0";if(Z(this))return"-"+H(this).toString(k);const I=v(Math.pow(k,6));var C=this;let D="";for(;;){const P=Te(C,I).g;C=ye(C,P.j(I));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=P,ee(C))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function ee(k){if(k.h!=0)return!1;for(let I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function Z(k){return k.h==-1}i.l=function(k){return k=ye(this,k),Z(k)?-1:ee(k)?0:1};function H(k){const I=k.g.length,C=[];for(let D=0;D<I;D++)C[D]=~k.g[D];return new h(C,~k.h).add(x)}i.abs=function(){return Z(this)?H(this):this},i.add=function(k){const I=Math.max(this.g.length,k.g.length),C=[];let D=0;for(let P=0;P<=I;P++){let O=D+(this.i(P)&65535)+(k.i(P)&65535),A=(O>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);D=A>>>16,O&=65535,A&=65535,C[P]=A<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ye(k,I){return k.add(H(I))}i.j=function(k){if(ee(this)||ee(k))return S;if(Z(this))return Z(k)?H(this).j(H(k)):H(H(this).j(k));if(Z(k))return H(this.j(H(k)));if(this.l(z)<0&&k.l(z)<0)return v(this.m()*k.m());const I=this.g.length+k.g.length,C=[];for(var D=0;D<2*I;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let P=0;P<k.g.length;P++){const O=this.i(D)>>>16,A=this.i(D)&65535,$e=k.i(P)>>>16,dt=k.i(P)&65535;C[2*D+2*P]+=A*dt,we(C,2*D+2*P),C[2*D+2*P+1]+=O*dt,we(C,2*D+2*P+1),C[2*D+2*P+1]+=A*$e,we(C,2*D+2*P+1),C[2*D+2*P+2]+=O*$e,we(C,2*D+2*P+2)}for(k=0;k<I;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=I;k<2*I;k++)C[k]=0;return new h(C,0)};function we(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function Ae(k,I){this.g=k,this.h=I}function Te(k,I){if(ee(I))throw Error("division by zero");if(ee(k))return new Ae(S,S);if(Z(k))return I=Te(H(k),I),new Ae(H(I.g),H(I.h));if(Z(I))return I=Te(k,H(I)),new Ae(H(I.g),I.h);if(k.g.length>30){if(Z(k)||Z(I))throw Error("slowDivide_ only works with positive integers.");for(var C=x,D=I;D.l(k)<=0;)C=He(C),D=He(D);var P=xe(C,1),O=xe(D,1);for(D=xe(D,2),C=xe(C,2);!ee(D);){var A=O.add(D);A.l(k)<=0&&(P=P.add(C),O=A),D=xe(D,1),C=xe(C,1)}return I=ye(k,P.j(I)),new Ae(P,I)}for(P=S;k.l(I)>=0;){for(C=Math.max(1,Math.floor(k.m()/I.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=v(C),A=O.j(I);Z(A)||A.l(k)>0;)C-=D,O=v(C),A=O.j(I);ee(O)&&(O=x),P=P.add(O),k=ye(k,A)}return new Ae(P,k)}i.B=function(k){return Te(this,k).h},i.and=function(k){const I=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<I;D++)C[D]=this.i(D)&k.i(D);return new h(C,this.h&k.h)},i.or=function(k){const I=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<I;D++)C[D]=this.i(D)|k.i(D);return new h(C,this.h|k.h)},i.xor=function(k){const I=Math.max(this.g.length,k.g.length),C=[];for(let D=0;D<I;D++)C[D]=this.i(D)^k.i(D);return new h(C,this.h^k.h)};function He(k){const I=k.g.length+1,C=[];for(let D=0;D<I;D++)C[D]=k.i(D)<<1|k.i(D-1)>>>31;return new h(C,k.h)}function xe(k,I){const C=I>>5;I%=32;const D=k.g.length-C,P=[];for(let O=0;O<D;O++)P[O]=I>0?k.i(O+C)>>>I|k.i(O+C+1)<<32-I:k.i(O+C);return new h(P,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,__=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,ki=h}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v_,Aa,w_,Du,wd,E_,T_,I_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in g))break e;g=g[M]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function E(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function S(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,M,j){for(var te=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)te[ke-2]=arguments[ke];return p.prototype[M].apply(w,te)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function ee(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const j=M.length||0;l.length=g+j;for(let te=0;te<j;te++)l[g+te]=M[te]}else l.push(M)}}class Z{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function H(l){h.setTimeout(()=>{throw l},0)}function ye(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class we{constructor(){this.h=this.g=null}add(p,g){const w=Ae.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ae=new Z(()=>new Te,l=>l.reset());class Te{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let He,xe=!1,k=new we,I=()=>{const l=Promise.resolve(void 0);He=()=>{l.then(C)}};function C(){for(var l;l=ye();){try{l.h.call(l.g)}catch(g){H(g)}var p=Ae;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}xe=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function $e(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}S($e,P),$e.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),Tt=0;function qe(l,p,g,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=M,this.key=++Tt,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function me(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function ie(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function V(l){const p={};for(const g in l)p[g]=l[g];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(l,p){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)l[g]=w[g];for(let j=0;j<W.length;j++)g=W[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function q(l){this.src=l,this.g={},this.h=0}q.prototype.add=function(l,p,g,w,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const te=ne(l,p,w,M);return te>-1?(p=l[te],g||(p.fa=!1)):(p=new qe(p,this.src,j,!!w,M),p.fa=g,l.push(p)),p};function X(l,p){const g=p.type;if(g in l.g){var w=l.g[g],M=Array.prototype.indexOf.call(w,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(w,M,1),j&&(re(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ne(l,p,g,w){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==w)return M}return-1}var oe="closure_lm_"+(Math.random()*1e6|0),le={};function pe(l,p,g,w,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)pe(l,p[j],g,w,M);return null}return g=Rn(g),l&&l[dt]?l.J(p,g,m(w)?!!w.capture:!1,M):Ce(l,p,g,!1,w,M)}function Ce(l,p,g,w,M,j){if(!p)throw Error("Invalid event type");const te=m(M)?!!M.capture:!!M;let ke=Un(l);if(ke||(l[oe]=ke=new q(l)),g=ke.add(p,g,w,te,j),g.proxy)return g;if(w=lt(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)O||(M=te),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(gn(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function lt(){function l(g){return p.call(l.src,l.listener,g)}const p=zr;return l}function Ot(l,p,g,w,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)Ot(l,p[j],g,w,M);else w=m(w)?!!w.capture:!!w,g=Rn(g),l&&l[dt]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=ne(p,g,w,M),g>-1&&(re(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=Un(l))&&(p=l.g[p.toString()],l=-1,p&&(l=ne(p,g,w,M)),(g=l>-1?p[l]:null)&&Ke(g))}function Ke(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[dt])X(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(gn(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=Un(p))?(X(g,l),g.h==0&&(g.src=null,p[oe]=null)):re(l)}}}function gn(l){return l in le?le[l]:le[l]="on"+l}function zr(l,p){if(l.da)l=!0;else{p=new $e(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&Ke(l),l=g.call(w,p)}return l}function Un(l){return l=l[oe],l instanceof q?l:null}var qt="__closure_events_fn_"+(Math.random()*1e9>>>0);function Rn(l){return typeof l=="function"?l:(l[qt]||(l[qt]=function(p){return l.handleEvent(p)}),l[qt])}function et(){D.call(this),this.i=new q(this),this.M=this,this.G=null}S(et,D),et.prototype[dt]=!0,et.prototype.removeEventListener=function(l,p,g,w){Ot(this,l,p,g,w)};function je(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var M=p;p=new P(w,l),B(p,M)}M=!0;let j,te;if(g)for(te=g.length-1;te>=0;te--)j=p.g=g[te],M=Yt(j,w,!0,p)&&M;if(j=p.g=l,M=Yt(j,w,!0,p)&&M,M=Yt(j,w,!1,p)&&M,g)for(te=0;te<g.length;te++)j=p.g=g[te],M=Yt(j,w,!1,p)&&M}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)re(g[w]);delete l.g[p],l.h--}}this.G=null},et.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},et.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function Yt(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const te=p[j];if(te&&!te.da&&te.capture==g){const ke=te.listener,ut=te.ha||te.src;te.fa&&X(l.i,te),M=ke.call(ut,w)!==!1&&M}}return M&&!w.defaultPrevented}function Wt(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Wt(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class sl extends D{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(l){D.call(this),this.h=l,this.g={}}S(Br,D);var Oo=[];function Ts(l){me(l.g,function(p,g){this.g.hasOwnProperty(g)&&Ke(p)},l),l.g={}}Br.prototype.N=function(){Br.Z.N.call(this),Ts(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=h.JSON.stringify,ol=h.JSON.parse,Ui=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Hr(){}function al(){}var qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Is(){P.call(this,"d")}S(Is,P);function bo(){P.call(this,"c")}S(bo,P);var kn={},Ss=null;function Wr(){return Ss=Ss||new et}kn.Ia="serverreachability";function As(l){P.call(this,kn.Ia,l)}S(As,P);function fr(l){const p=Wr();je(p,new As(p))}kn.STAT_EVENT="statevent";function pr(l,p){P.call(this,kn.STAT_EVENT,l),this.stat=p}S(pr,P);function st(l){const p=Wr();je(p,new pr(p,l))}kn.Ja="timingevent";function Mo(l,p){P.call(this,kn.Ja,l),this.size=p}S(Mo,P);function Kr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Gr(){this.g=!0}Gr.prototype.ua=function(){this.g=!1};function ll(l,p,g,w,M,j){l.info(function(){if(l.g)if(j){var te="",ke=j.split("&");for(let Be=0;Be<ke.length;Be++){var ut=ke[Be].split("=");if(ut.length>1){const ft=ut[0];ut=ut[1];const hn=ft.split("_");te=hn.length>=2&&hn[1]=="type"?te+(ft+"="+ut+"&"):te+(ft+"=redacted&")}}}else te=null;else te=j;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+g+`
`+te})}function ul(l,p,g,w,M,j,te){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+g+`
`+j+" "+te})}function jn(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+ji(l,g)+(w?" "+w:"")})}function cl(l,p){l.info(function(){return"TIMEOUT: "+p})}Gr.prototype.info=function(){};function ji(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let te=1;te<w.length;te++)w[te]=""}}}}return $r(j)}catch{return p}}var Qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hl;function mr(){}S(mr,Hr),mr.prototype.g=function(){return new XMLHttpRequest},hl=new mr;function zn(l){return encodeURIComponent(String(l))}function Cs(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function yn(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new Br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var fl={},Lo={};function Pn(l,p,g){l.M=1,l.A=yr(_n(p)),l.u=g,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),zi(l),l.B=_n(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Go(g.i,"t",w),l.C=0,g=l.j.L,l.h=new dl,l.g=Il(l.j,g?p:null,!l.u),l.P>0&&(l.O=new sl(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Oo[0]=M.toString()),M=Oo);for(let j=0;j<M.length;j++){const te=pe(g,M[j],w||p.handleEvent,!1,p.h||p);if(!te)break;p.g[te.key]=te}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),fr(),ll(l.i,l.v,l.B,l.l,l.S,l.u)}yn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Gn(l)==3?p.j():this.Y(l)},yn.prototype.Y=function(l){try{if(l==this.g)e:{const ke=Gn(this.g),ut=this.g.ya(),Be=this.g.ca();if(!(ke<3)&&(ke!=3||this.g&&(this.h.h||this.g.la()||El(this.g)))){this.K||ke!=4||ut==7||(ut==8||Be<=0?fr(3):fr(2)),Rs(this);var p=this.g.ca();this.X=p;var g=pl(this);if(this.o=p==200,ul(this.i,this.v,this.B,this.l,this.S,ke,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var j=w;break t}}j=null}if(l=j)jn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qe(this,l);else{this.o=!1,this.m=3,st(12),gr(this),Bi(this);break e}}if(this.R){l=!0;let ft;for(;!this.K&&this.C<g.length;)if(ft=gl(this,g),ft==Lo){ke==4&&(this.m=4,st(14),l=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==fl){this.m=4,st(15),jn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else jn(this.i,this.l,ft,null),Qe(this,ft);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||g.length!=0||this.h.h||(this.m=1,st(16),l=!1),this.o=this.o&&l,!l)jn(this.i,this.l,g,"[Invalid Chunked Response]"),gr(this),Bi(this);else if(g.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Xi(te),te.P=!0,st(11))}}else jn(this.i,this.l,g,null),Qe(this,g);ke==4&&gr(this),this.o&&!this.K&&(ke==4?Ls(this.j,this):(this.o=!1,zi(this)))}else Yo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),gr(this),Bi(this)}}}catch{}finally{}};function pl(l){if(!ml(l))return l.g.la();const p=El(l.g);if(p==="")return"";let g="";const w=p.length,M=Gn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return gr(l),Bi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<w;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(M&&j==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function ml(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function gl(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?Lo:(g=Number(p.substring(g,w)),isNaN(g)?fl:(w+=1,w+g>p.length?Lo:(p=p.slice(w,w+g),l.C=w+g,p)))}yn.prototype.cancel=function(){this.K=!0,gr(this)};function zi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Kr(v(l.aa,l),p)}function Rs(l){l.D&&(h.clearTimeout(l.D),l.D=null)}yn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(cl(this.i,this.B),this.M!=2&&(fr(),st(17)),gr(this),this.m=2,Bi(this)):Uo(this,this.T-l)};function Bi(l){l.j.I==0||l.K||Ls(l.j,l)}function gr(l){Rs(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Ts(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Qe(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||zo(g.h,l))){if(!l.L&&zo(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Ms(g),un(g);else break e;Xn(g),st(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Kr(v(g.Va,g),6e3));$i(g.h)<=1&&g.ta&&(g.ta=void 0)}else cn(g,11)}else if((l.L||g.g==l)&&Ms(g),!A(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Be=M[p];const ft=Be[0];if(!(ft<=g.K))if(g.K=ft,Be=Be[1],g.I==2)if(Be[0]=="c"){g.M=Be[1],g.ba=Be[2];const hn=Be[3];hn!=null&&(g.ka=hn,g.j.info("VER="+g.ka));const Tr=Be[4];Tr!=null&&(g.za=Tr,g.j.info("SVER="+g.za));const Jn=Be[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(w=1.5*Jn,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Zn=l.g;if(Zn){const js=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var j=w.h;j.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ps(j,j.h),j.h=null))}if(w.G){const Zo=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(w.wa=Zo,Ue(w.J,w.G,Zo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var te=l;if(w.na=Jo(w,w.L?w.ba:null,w.W),te.L){Hi(w.h,te);var ke=te,ut=w.O;ut&&(ke.H=ut),ke.D&&(Rs(ke),zi(ke)),w.g=te}else bt(w);g.i.length>0&&Er(g)}else Be[0]!="stop"&&Be[0]!="close"||cn(g,7);else g.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?cn(g,7):Os(g):Be[0]!="noop"&&g.l&&g.l.qa(Be),g.A=0)}}fr(4)}catch{}}var Tc=class{constructor(l,p){this.g=l,this.map=p}};function ks(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $i(l){return l.h?1:l.g?l.g.size:0}function zo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ps(l,p){l.g?l.g.add(p):l.h=p}function Hi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}ks.prototype.cancel=function(){if(this.i=on(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function on(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function an(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let M,j=null;w>=0?(M=l[g].substring(0,w),j=l[g].substring(w+1)):M=l[g],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Bn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Bn?(this.l=l.l,qi(this,l.j),this.o=l.o,this.g=l.g,$n(this,l.u),this.h=l.h,Xr(this,Qo(l.i)),this.m=l.m):l&&(p=String(l).match(yl))?(this.l=!1,qi(this,p[1]||"",!0),this.o=Wi(p[2]||""),this.g=Wi(p[3]||"",!0),$n(this,p[4]),this.h=Wi(p[5]||"",!0),Xr(this,p[6]||"",!0),this.m=Wi(p[7]||"")):(this.l=!1,this.i=new be(null,this.l))}Bn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Ki(p,$o,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ki(p,$o,!0),"@"),l.push(zn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Ki(g,g.charAt(0)=="/"?Gi:Ho,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Ki(g,qo)),l.join("")},Bn.prototype.resolve=function(l){const p=_n(this);let g=!!l.j;g?qi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)$n(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let te=0;te<M.length;){const ke=M[te++];ke=="."?w&&te==M.length&&j.push(""):ke==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),w&&te==M.length&&j.push("")):(j.push(ke),w=!0)}w=j.join("/")}else w=M}return g?p.h=w:g=l.i.toString()!=="",g?Xr(p,Qo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function _n(l){return new Bn(l)}function qi(l,p,g){l.j=g?Wi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function $n(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Xr(l,p,g){p instanceof be?(l.i=p,Ns(l.i,l.l)):(g||(p=Ki(p,Ic)),l.i=new be(p,l.l))}function Ue(l,p,g){l.i.set(p,g)}function yr(l){return Ue(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Wi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ki(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Bo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $o=/[#\/\?@]/g,Ho=/[#\?:]/g,Gi=/[#\?]/g,Ic=/[#\?@]/g,qo=/#/g;function be(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Hn(l){l.g||(l.g=new Map,l.h=0,l.i&&an(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=be.prototype,i.add=function(l,p){Hn(this),this.i=null,l=qn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Wo(l,p){Hn(l),p=qn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function xs(l,p){return Hn(l),p=qn(l,p),l.g.has(p)}i.forEach=function(l,p){Hn(this),this.g.forEach(function(g,w){g.forEach(function(M){l.call(p,M,w,this)},this)},this)};function Ko(l,p){Hn(l);let g=[];if(typeof p=="string")xs(l,p)&&(g=g.concat(l.g.get(qn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Hn(this),this.i=null,l=qn(this,l),xs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Ko(this,l),l.length>0?String(l[0]):p):p};function Go(l,p,g){Wo(l,p),g.length>0&&(l.i=null,l.g.set(qn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const M=zn(g);g=Ko(this,g);for(let j=0;j<g.length;j++){let te=M;g[j]!==""&&(te+="="+zn(g[j])),l.push(te)}}return this.i=l.join("&")};function Qo(l){const p=new be;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function qn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ns(l,p){p&&!l.j&&(Hn(l),l.i=null,l.g.forEach(function(g,w){const M=w.toLowerCase();w!=M&&(Wo(this,w),Go(this,M,g))},l)),l.j=p}function Wn(l,p){const g=new Gr;if(h.Image){const w=new Image;w.onload=E(Rt,g,"TestLoadImage: loaded",!0,p,w),w.onerror=E(Rt,g,"TestLoadImage: error",!1,p,w),w.onabort=E(Rt,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(Rt,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function Kn(l,p){const g=new Gr,w=new AbortController,M=setTimeout(()=>{w.abort(),Rt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(M),j.ok?Rt(g,"TestPingServer: ok",!0,p):Rt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rt(g,"TestPingServer: error",!1,p)})}function Rt(l,p,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function Qi(){this.g=new Ui}function _r(l){this.i=l.Sb||null,this.h=l.ab||!1}S(_r,Hr),_r.prototype.g=function(){return new ln(this.i,this.h)};function ln(l,p){et.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(ln,et),i=ln.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,xn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_l(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function _l(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Jr(this):xn(this),this.readyState==3&&_l(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Jr(this))},i.Na=function(l){this.g&&(this.response=l,Jr(this))},i.ga=function(){this.g&&Jr(this)};function Jr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,xn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function xn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vl(l){let p="";return me(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Ds(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=vl(g),typeof l=="string"?g!=null&&zn(g):Ue(l,p,g))}function We(l){et.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(We,et);var wl=/^https?$/i,Sc=["POST","PUT"];i=We.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hl.g(),this.g.onreadystatechange=x(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Zr(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Sc,p,void 0)>=0)||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,te]of g)this.g.setRequestHeader(j,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Zr(this,j)}};function Zr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,ei(l),wr(l)}function ei(l){l.A||(l.A=!0,je(l,"complete"),je(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,je(this,"complete"),je(this,"abort"),wr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),We.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?vr(this):this.Xa())},i.Xa=function(){vr(this)};function vr(l){if(l.h&&typeof u<"u"){if(l.v&&Gn(l)==4)setTimeout(l.Ca.bind(l),0);else if(je(l,"readystatechange"),Gn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=j===0){let te=String(l.D).match(yl)[1]||null;!te&&h.self&&h.self.location&&(te=h.self.location.protocol.slice(0,-1)),w=!wl.test(te?te.toLowerCase():"")}g=w}if(g)je(l,"complete"),je(l,"success");else{l.o=6;try{var M=Gn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",ei(l)}}finally{wr(l)}}}}function wr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||je(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Gn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Gn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ol(p)}};function El(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Yo(l){const p={};l=(l.g&&Gn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var g=Cs(l[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[M]||[];p[M]=j,j.push(g)}ie(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Vs(l){this.za=0,this.i=[],this.j=new Gr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qn("baseRetryDelayMs",5e3,l),this.Za=Qn("retryDelaySeedMs",1e4,l),this.Ta=Qn("forwardChannelMaxRetries",2,l),this.va=Qn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new ks(l&&l.concurrentRequestLimit),this.Ba=new Qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Vs.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){st(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=Jo(this,null,this.W),Er(this)};function Os(l){if(bs(l),l.I==3){var p=l.V++,g=_n(l.J);if(Ue(g,"SID",l.M),Ue(g,"RID",p),Ue(g,"TYPE","terminate"),Yn(l,g),p=new yn(l,l.j,p),p.M=2,p.A=yr(_n(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Il(p.j,null),p.g.ea(p.A)),p.F=Date.now(),zi(p)}Ji(l)}function un(l){l.g&&(Xi(l),l.g.cancel(),l.g=null)}function bs(l){un(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ms(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function Er(l){if(!jo(l.h)&&!l.m){l.m=!0;var p=l.Ea;He||I(),xe||(He(),xe=!0),k.add(p,l),l.D=0}}function Tl(l,p){return $i(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Kr(v(l.Ea,l,p),Fs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new yn(this,this.j,l);let j=this.o;if(this.U&&(j?(j=V(j),B(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Xo(this,M,p),g=_n(this.J),Ue(g,"RID",l),Ue(g,"CVER",22),this.G&&Ue(g,"X-HTTP-Session-Id",this.G),Yn(this,g),j&&(this.R?p="headers="+zn(vl(j))+"&"+p:this.u&&Ds(g,this.u,j)),Ps(this.h,M),this.Ra&&Ue(g,"TYPE","init"),this.S?(Ue(g,"$req",p),Ue(g,"SID","null"),M.U=!0,Pn(M,g,null)):Pn(M,g,p),this.I=2}}else this.I==3&&(l?Yi(this,l):this.i.length==0||jo(this.h)||Yi(this))};function Yi(l,p){var g;p?g=p.l:g=l.V++;const w=_n(l.J);Ue(w,"SID",l.M),Ue(w,"RID",g),Ue(w,"AID",l.K),Yn(l,w),l.u&&l.o&&Ds(w,l.u,l.o),g=new yn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Xo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ps(l.h,g),Pn(g,w,p)}function Yn(l,p){l.H&&me(l.H,function(g,w){Ue(p,w,g)}),l.l&&me({},function(g,w){Ue(p,w,g)})}function Xo(l,p,g){g=Math.min(l.i.length,g);const w=l.l?v(l.l.Ka,l.l,l):null;e:{var M=l.i;let ke=-1;for(;;){const ut=["count="+g];ke==-1?g>0?(ke=M[0].g,ut.push("ofs="+ke)):ke=0:ut.push("ofs="+ke);let Be=!0;for(let ft=0;ft<g;ft++){var j=M[ft].g;const hn=M[ft].map;if(j-=ke,j<0)ke=Math.max(0,M[ft].g-100),Be=!1;else try{j="req"+j+"_"||"";try{var te=hn instanceof Map?hn:Object.entries(hn);for(const[Tr,Jn]of te){let Zn=Jn;m(Jn)&&(Zn=$r(Jn)),ut.push(j+Tr+"="+encodeURIComponent(Zn))}}catch(Tr){throw ut.push(j+"type="+encodeURIComponent("_badmap")),Tr}}catch{w&&w(hn)}}if(Be){te=ut.join("&");break e}}te=void 0}return l=l.i.splice(0,g),p.G=l,te}function bt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;He||I(),xe||(He(),xe=!0),k.add(p,l),l.A=0}}function Xn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Kr(v(l.Da,l),Fs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,ti(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Kr(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),un(this),ti(this))};function Xi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function ti(l){l.g=new yn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=_n(l.na);Ue(p,"RID","rpc"),Ue(p,"SID",l.M),Ue(p,"AID",l.K),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ue(p,"TO",l.ia),Ue(p,"TYPE","xmlhttp"),Yn(l,p),l.u&&l.o&&Ds(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=yr(_n(p)),g.u=null,g.R=!0,Fo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,un(this),Xn(this),st(19))};function Ms(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ls(l,p){var g=null;if(l.g==p){Ms(l),Xi(l),l.g=null;var w=2}else if(zo(l.h,p))g=p.G,Hi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=Wr(),je(w,new Mo(w,g)),Er(l)}else bt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&Tl(l,p)||w==2&&Xn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:cn(l,5);break;case 4:cn(l,10);break;case 3:cn(l,6);break;default:cn(l,2)}}}function Fs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function cn(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),w=l.Ua;const M=!w;w=new Bn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||qi(w,"https"),yr(w),M?Wn(w.toString(),g):Kn(w.toString(),g)}else st(2);l.I=0,l.l&&l.l.pa(p),Ji(l),bs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Ji(l){if(l.I=0,l.ja=[],l.l){const p=on(l.h);(p.length!=0||l.i.length!=0)&&(ee(l.ja,p),ee(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Jo(l,p,g){var w=g instanceof Bn?_n(g):new Bn(g);if(w.g!="")p&&(w.g=p+"."+w.g),$n(w,w.u);else{var M=h.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Bn(null);w&&qi(j,w),p&&(j.g=p),M&&$n(j,M),g&&(j.h=g),w=j}return g=l.G,p=l.wa,g&&p&&Ue(w,g,p),Ue(w,"VER",l.ka),Yn(l,w),w}function Il(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new We(new _r({ab:g})):new We(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sl(){}i=Sl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Us(){}Us.prototype.g=function(l,p){return new kt(l,p)};function kt(l,p){et.call(this),this.g=new Vs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new ni(this)}S(kt,et),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Os(this.g)},kt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=$r(l),l=g);p.i.push(new Tc(p.Ya++,l)),p.I==3&&Er(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,Os(this.g),delete this.g,kt.Z.N.call(this)};function Al(l){Is.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}S(Al,Is);function Cl(){bo.call(this),this.status=1}S(Cl,bo);function ni(l){this.g=l}S(ni,Sl),ni.prototype.ra=function(){je(this.g,"a")},ni.prototype.qa=function(l){je(this.g,new Al(l))},ni.prototype.pa=function(l){je(this.g,new Cl)},ni.prototype.oa=function(){je(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,I_=function(){return new Us},T_=function(){return Wr()},E_=kn,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,Du=Qr,Yr.COMPLETE="complete",w_=Yr,al.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",et.prototype.listen=et.prototype.J,Aa=al,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,v_=We}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore",Tg="4.9.2";/**
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
 */let Po="12.3.0";/**
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
 */const _s=new Fd("@firebase/firestore");function ao(){return _s.logLevel}function ae(i,...e){if(_s.logLevel<=De.DEBUG){const t=e.map(Qd);_s.debug(`Firestore (${Po}): ${i}`,...t)}}function Fr(i,...e){if(_s.logLevel<=De.ERROR){const t=e.map(Qd);_s.error(`Firestore (${Po}): ${i}`,...t)}}function vo(i,...e){if(_s.logLevel<=De.WARN){const t=e.map(Qd);_s.warn(`Firestore (${Po}): ${i}`,...t)}}function Qd(i){if(typeof i=="string")return i;try{/**
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
 */function Ee(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,S_(i,s,t)}function S_(i,e,t){let s=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||S_(e,o,s)}function Pe(i,e){return i}/**
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
 */class fs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class A_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class J1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Z1{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new fs,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new fs)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new A_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class eI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new eI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ig(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ig(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=rI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ve(i,e){return i<e?-1:i>e?1:0}function Ed(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return rd(o)===rd(u)?Ve(o,u):rd(o)?1:-1}return Ve(i.length,e.length)}const iI=55296,sI=57343;function rd(i){const e=i.charCodeAt(0);return e>=iI&&e<=sI}function wo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Sg="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=ir.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ve(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Ed(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ki.fromString(e.substring(4,e.length-2))}}class Je extends ir{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ir{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sg}static keyField(){return new Dt([Sg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new fe(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new fe(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new fe(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new fe(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */function gt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Za(i,e){if(!R_(i))throw new fe(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new fe(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rg=-62135596800,kg=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kg);return new Ze(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rg)throw new fe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kg}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Za(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:gt("string",Ze._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ze(0,0))}static max(){return new Re(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fa=-1;function lI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(s===1e9?new Ze(t+1,0):new Ze(t,s));return new Ni(o,ge.empty(),e)}function uI(i){return new Ni(i.readTime,i.key,Fa)}class Ni{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ni(Re.min(),ge.empty(),Fa)}static max(){return new Ni(Re.max(),ge.empty(),Fa)}}function cI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(i.documentKey,e.documentKey),t!==0?t:Ve(i.largestBatchId,e.largestBatchId))}/**
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
 */async function xo(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==hI)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((E=>{h[v]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function fI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function No(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class it{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new mn([])}unionWith(e){let t=new Et(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new x_("Invalid base64 string: "+u):u}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=yI.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(i.seconds),nanos:ht(i.nanos)}}function ht(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Vi(i){return typeof i=="string"?Vt.fromBase64String(i):Vt.fromUint8Array(i)}/**
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
 */class _I{constructor(e,t,s,o,u,h,m,y,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=E}}const Ku="(default)";class ja{constructor(e,t){this.projectId=e,this.database=t||Ku}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const b_="__type__",vI="__max__",Iu={mapValue:{}},M_="__vector__",Gu="value";function Oi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Zd(i)?4:EI(i)?9007199254740991:wI(i)?10:11:Ee(28295,{value:i})}function hr(i,e){if(i===e)return!0;const t=Oi(i);if(t!==Oi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ua(i).isEqual(Ua(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Di(o.timestampValue),m=Di(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Vi(o.bytesValue).isEqual(Vi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return ht(o.geoPointValue.latitude)===ht(u.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ht(o.integerValue)===ht(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ht(o.doubleValue),m=ht(u.doubleValue);return h===m?Wu(h)===Wu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return wo(i.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(xg(h)!==xg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!hr(h[y],m[y])))return!1;return!0})(i,e);default:return Ee(52216,{left:i})}}function za(i,e){return(i.values||[]).find((t=>hr(t,e)))!==void 0}function Eo(i,e){if(i===e)return 0;const t=Oi(i),s=Oi(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ht(u.integerValue||u.doubleValue),y=ht(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Dg(i.timestampValue,e.timestampValue);case 4:return Dg(Ua(i),Ua(e));case 5:return Ed(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Vi(u),y=Vi(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const E=Ve(m[v],y[v]);if(E!==0)return E}return Ve(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ve(ht(u.latitude),ht(h.latitude));return m!==0?m:Ve(ht(u.longitude),ht(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Vg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var x,z,ee,Z;const m=u.fields||{},y=h.fields||{},v=(x=m[Gu])==null?void 0:x.arrayValue,E=(z=y[Gu])==null?void 0:z.arrayValue,S=Ve(((ee=v==null?void 0:v.values)==null?void 0:ee.length)||0,((Z=E==null?void 0:E.values)==null?void 0:Z.length)||0);return S!==0?S:Vg(v,E)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Iu.mapValue&&h===Iu.mapValue)return 0;if(u===Iu.mapValue)return 1;if(h===Iu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},E=Object.keys(v);y.sort(),E.sort();for(let S=0;S<y.length&&S<E.length;++S){const x=Ed(y[S],E[S]);if(x!==0)return x;const z=Eo(m[y[S]],v[E[S]]);if(z!==0)return z}return Ve(y.length,E.length)})(i.mapValue,e.mapValue);default:throw Ee(23264,{he:t})}}function Dg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ve(i,e);const t=Di(i),s=Di(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function Vg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Eo(t[o],s[o]);if(u)return u}return Ve(t.length,s.length)}function To(i){return Td(i)}function Td(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Di(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Vi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ge.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Td(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Td(t.fields[h])}`;return o+"}"})(i.mapValue):Ee(61005,{value:i})}function Vu(i){switch(Oi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(i);return e?16+Vu(e):16;case 5:return 2*i.stringValue.length;case 6:return Vi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Vu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Li(s.fields,((u,h)=>{o+=u.length+Vu(h)})),o})(i.mapValue);default:throw Ee(13486,{value:i})}}function Id(i){return!!i&&"integerValue"in i}function ef(i){return!!i&&"arrayValue"in i}function Og(i){return!!i&&"nullValue"in i}function bg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ou(i){return!!i&&"mapValue"in i}function wI(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[b_])==null?void 0:s.stringValue)===M_}function Da(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Li(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Da(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(i.arrayValue.values[t]);return e}return{...i}}function EI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===vI}/**
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
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ou(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Da(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ou(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Li(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new sn(Da(this.value))}}function L_(i){const e=[];return Li(i.fields,((t,s)=>{const o=new Dt([t]);if(Ou(s)){const u=L_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new mn(e)}/**
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
 */class Bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Bt(e,0,Re.min(),Re.min(),Re.min(),sn.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Re.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Re.min(),Re.min(),sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Re.min(),Re.min(),sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function Mg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!hr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class F_{}class vt extends F_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new SI(e,t,s):t==="array-contains"?new RI(e,s):t==="in"?new kI(e,s):t==="not-in"?new PI(e,s):t==="array-contains-any"?new xI(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new AI(e,s):new CI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Eo(t,this.value)):t!==null&&Oi(this.value)===Oi(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends F_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new dr(e,t)}matches(e){return U_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U_(i){return i.op==="and"}function j_(i){return II(i)&&U_(i)}function II(i){for(const e of i.filters)if(e instanceof dr)return!1;return!0}function Sd(i){if(i instanceof vt)return i.field.canonicalString()+i.op.toString()+To(i.value);if(j_(i))return i.filters.map((e=>Sd(e))).join(",");{const e=i.filters.map((t=>Sd(t))).join(",");return`${i.op}(${e})`}}function z_(i,e){return i instanceof vt?(function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(i,e):i instanceof dr?(function(s,o){return o instanceof dr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&z_(h,o.filters[m])),!0):!1})(i,e):void Ee(19439)}function B_(i){return i instanceof vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${To(t.value)}`})(i):i instanceof dr?(function(t){return t.op.toString()+" {"+t.getFilters().map(B_).join(" ,")+"}"})(i):"Filter"}class SI extends vt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class AI extends vt{constructor(e,t){super(e,"in",t),this.keys=$_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class CI extends vt{constructor(e,t){super(e,"not-in",t),this.keys=$_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ge.fromName(s.referenceValue)))}class RI extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ef(t)&&za(t.arrayValue,this.value)}}class kI extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&za(this.value.arrayValue,t)}}class PI extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!za(this.value.arrayValue,t)}}class xI extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>za(this.value.arrayValue,s)))}}/**
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
 */class NI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Fg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new NI(i,e,t,s,o,u,h)}function tf(i){const e=Pe(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Sd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>To(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>To(s))).join(",")),e.Te=t}return e.Te}function nf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!TI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!z_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Lg(i.startAt,e.startAt)&&Lg(i.endAt,e.endAt)}function Ad(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class lc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DI(i,e,t,s,o,u,h,m){return new lc(i,e,t,s,o,u,h,m)}function rf(i){return new lc(i)}function Ug(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function VI(i){return i.collectionGroup!==null}function Va(i){const e=Pe(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Et(Dt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Yu(u,s))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new Yu(Dt.keyField(),s))}return e.Ie}function ar(i){const e=Pe(i);return e.Ee||(e.Ee=OI(e,Va(i))),e.Ee}function OI(i,e){if(i.limitType==="F")return Fg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Yu(o.field,u)}));const t=i.endAt?new Qu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Qu(i.startAt.position,i.startAt.inclusive):null;return Fg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Cd(i,e,t){return new lc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function uc(i,e){return nf(ar(i),ar(e))&&i.limitType===e.limitType}function H_(i){return`${tf(ar(i))}|lt:${i.limitType}`}function lo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>B_(o))).join(", ")}]`),oc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>To(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>To(o))).join(",")),`Target(${s})`})(ar(i))}; limitType=${i.limitType})`}function cc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Va(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Mg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Va(s),o)||s.endAt&&!(function(h,m,y){const v=Mg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Va(s),o))})(i,e)}function bI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function q_(i){return(e,t)=>{let s=!1;for(const o of Va(i)){const u=MI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function MI(i,e,t){const s=i.field.isKeyField()?ge.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?Eo(y,v):Ee(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:i.dir})}}/**
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
 */class ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return P_(this.inner)}size(){return this.innerSize}}/**
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
 */const LI=new it(ge.comparator);function Ur(){return LI}const W_=new it(ge.comparator);function Ca(...i){let e=W_;for(const t of i)e=e.insert(t.key,t);return e}function K_(i){let e=W_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ds(){return Oa()}function G_(){return Oa()}function Oa(){return new ws((i=>i.toString()),((i,e)=>i.isEqual(e)))}const FI=new it(ge.comparator),UI=new Et(ge.comparator);function Oe(...i){let e=UI;for(const t of i)e=e.add(t);return e}const jI=new Et(Ve);function zI(){return jI}/**
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
 */class hc{constructor(){this._=void 0}}function BI(i,e,t){return i instanceof Ba?(function(o,u){const h={fields:{[D_]:{stringValue:N_},[O_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Zd(u)&&(u=ac(u)),u&&(h.fields[V_]=u),{mapValue:h}})(t,e):i instanceof $a?J_(i,e):i instanceof Ha?Z_(i,e):(function(o,u){const h=X_(o,u),m=jg(h)+jg(o.Ae);return Id(h)&&Id(o.Ae)?Q_(m):sf(o.serializer,m)})(i,e)}function $I(i,e,t){return i instanceof $a?J_(i,e):i instanceof Ha?Z_(i,e):t}function X_(i,e){return i instanceof qa?(function(s){return Id(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ba extends hc{}class $a extends hc{constructor(e){super(),this.elements=e}}function J_(i,e){const t=ev(e);for(const s of i.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends hc{constructor(e){super(),this.elements=e}}function Z_(i,e){let t=ev(e);for(const s of i.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class qa extends hc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function jg(i){return ht(i.integerValue||i.doubleValue)}function ev(i){return ef(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class tv{constructor(e,t){this.field=e,this.transform=t}}function HI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof $a&&o instanceof $a||s instanceof Ha&&o instanceof Ha?wo(s.elements,o.elements,hr):s instanceof qa&&o instanceof qa?hr(s.Ae,o.Ae):s instanceof Ba&&o instanceof Ba})(i.transform,e.transform)}class qI{constructor(e,t){this.version=e,this.transformResults=t}}class Fn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class dc{}function nv(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new of(i.key,Fn.none()):new el(i.key,i.data,Fn.none());{const t=i.data,s=sn.empty();let o=new Et(Dt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Fi(i.key,s,new mn(o.toArray()),Fn.none())}}function WI(i,e,t){i instanceof el?(function(o,u,h){const m=o.value.clone(),y=Bg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Fi?(function(o,u,h){if(!bu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Bg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(rv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ba(i,e,t,s){return i instanceof el?(function(u,h,m,y){if(!bu(u.precondition,h))return m;const v=u.value.clone(),E=$g(u.fieldTransforms,y,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Fi?(function(u,h,m,y){if(!bu(u.precondition,h))return m;const v=$g(u.fieldTransforms,y,h),E=h.data;return E.setAll(rv(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(i,e,t,s):(function(u,h,m){return bu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function KI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=X_(s.transform,o||null);u!=null&&(t===null&&(t=sn.empty()),t.set(s.field,u))}return t||null}function zg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((u,h)=>HI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class el extends dc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fi extends dc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function rv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Bg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,$I(h,m,t[o]))}return s}function $g(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,BI(u,h,e))}return s}class of extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends dc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&WI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=G_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=nv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Re.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>zg(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>zg(t,s)))}}class af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return FI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new af(e,t,s,o)}}/**
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
 */var mt,Me;function JI(i){switch(i){case G.OK:return Ee(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return Ee(15467,{code:i})}}function iv(i){if(i===void 0)return Fr("GRPC error has no .code"),G.UNKNOWN;switch(i){case mt.OK:return G.OK;case mt.CANCELLED:return G.CANCELLED;case mt.UNKNOWN:return G.UNKNOWN;case mt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case mt.INTERNAL:return G.INTERNAL;case mt.UNAVAILABLE:return G.UNAVAILABLE;case mt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case mt.NOT_FOUND:return G.NOT_FOUND;case mt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case mt.ABORTED:return G.ABORTED;case mt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case mt.DATA_LOSS:return G.DATA_LOSS;default:return Ee(39323,{code:i})}}(Me=mt||(mt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class fc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new fc(Re.min(),o,new it(Ve),Ur(),Oe())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,Oe(),Oe(),Oe())}}/**
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
 */class Mu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class sv{constructor(e,t){this.targetId=e,this.Ce=t}}class ov{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Wg{constructor(){this.ve=0,this.Fe=Kg(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),s=Oe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:u})}})),new tl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Kg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.Je=Su(),this.He=Su(),this.Ye=new it(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Ad(u))if(s===0){const h=new ge(u.path);this.et(t,h,Bt.newNoDocument(h,Re.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Vi(s).toUint8Array()}catch(y){if(y instanceof x_)return vo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new lf(h,o,u)}catch(y){return vo(y instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Ad(m.target)){const y=new ge(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Bt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Oe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new fc(e,t,this.Ye,this.je,s);return this.je=Ur(),this.Je=Su(),this.He=Su(),this.Ye=new it(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Wg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Et(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Et(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Su(){return new it(ge.comparator)}function Kg(){return new it(ge.comparator)}const nS={asc:"ASCENDING",desc:"DESCENDING"},rS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iS={and:"AND",or:"OR"};class sS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rd(i,e){return i.useProto3Json||oc(e)?e:{value:e}}function Xu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function av(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function oS(i,e){return Xu(i,e.toTimestamp())}function lr(i){return ze(!!i,49232),Re.fromTimestamp((function(t){const s=Di(t);return new Ze(s.seconds,s.nanos)})(i))}function uf(i,e){return kd(i,e).canonicalString()}function kd(i,e){const t=(function(o){return new Je(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function lv(i){const e=Je.fromString(i);return ze(fv(e),10190,{key:e.toString()}),e}function Pd(i,e){return uf(i.databaseId,e.path)}function id(i,e){const t=lv(e);if(t.get(1)!==i.databaseId.projectId)throw new fe(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new fe(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ge(cv(t))}function uv(i,e){return uf(i.databaseId,e)}function aS(i){const e=lv(i);return e.length===4?Je.emptyPath():cv(e)}function xd(i){return new Je(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function cv(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Gg(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function lS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Ee(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,E){return v.useProto3Json?(ze(E===void 0||typeof E=="string",58123),Vt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Vt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const E=v.code===void 0?G.UNKNOWN:iv(v.code);return new fe(E,v.message||"")})(h);t=new ov(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=id(i,s.document.name),u=lr(s.document.updateTime),h=s.document.createTime?lr(s.document.createTime):Re.min(),m=new sn({mapValue:{fields:s.document.fields}}),y=Bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Mu(v,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=id(i,s.document),u=s.readTime?lr(s.readTime):Re.min(),h=Bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=id(i,s.document),u=s.removedTargetIds||[];t=new Mu([],u,o,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new XI(o,u),m=s.targetId;t=new sv(m,h)}}return t}function uS(i,e){let t;if(e instanceof el)t={update:Gg(i,e.key,e.value)};else if(e instanceof of)t={delete:Pd(i,e.key)};else if(e instanceof Fi)t={update:Gg(i,e.key,e.data),updateMask:_S(e.fieldMask)};else{if(!(e instanceof GI))return Ee(16599,{Vt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $a)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw Ee(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:oS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee(27497)})(i,e.precondition)),t}function cS(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?lr(o.updateTime):lr(u);return h.isEqual(Re.min())&&(h=lr(u)),new qI(h,o.transformResults||[])})(t,e)))):[]}function hS(i,e){return{documents:[uv(i,e.path)]}}function dS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=uv(i,o);const u=(function(v){if(v.length!==0)return dv(dr.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((E=>(function(x){return{field:uo(x.field),direction:mS(x.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Rd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function fS(i){let e=aS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(S){const x=hv(S);return x instanceof dr&&j_(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((x=>(function(ee){return new Yu(co(ee.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(ee.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(S){let x;return x=typeof S=="object"?S.value:S,oc(x)?null:x})(t.limit));let y=null;t.startAt&&(y=(function(S){const x=!!S.before,z=S.values||[];return new Qu(z,x)})(t.startAt));let v=null;return t.endAt&&(v=(function(S){const x=!S.before,z=S.values||[];return new Qu(z,x)})(t.endAt)),DI(e,o,h,u,m,"F",y,v)}function pS(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=co(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=co(t.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=co(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(i):i.fieldFilter!==void 0?(function(t){return vt.create(co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return dr.create(t.compositeFilter.filters.map((s=>hv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(i):Ee(30097,{filter:i})}function mS(i){return nS[i]}function gS(i){return rS[i]}function yS(i){return iS[i]}function uo(i){return{fieldPath:i.canonicalString()}}function co(i){return Dt.fromServerFormat(i.fieldPath)}function dv(i){return i instanceof vt?(function(t){if(t.op==="=="){if(bg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(Og(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bg(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(Og(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:gS(t.op),value:t.value}}})(i):i instanceof dr?(function(t){const s=t.getFilters().map((o=>dv(o)));return s.length===1?s[0]:{compositeFilter:{op:yS(t.op),filters:s}}})(i):Ee(54877,{filter:i})}function _S(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Si{constructor(e,t,s,o,u=Re.min(),h=Re.min(),m=Vt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */const Qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pv=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(pv,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class Io{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Io(0)}static cr(){return new Io(-1)}}/**
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
 */const Yg="LruGarbageCollector",IS=1048576;function Xg([i,e],[t,s]){const o=Ve(i,t);return o===0?Ve(e,s):o}class SS{constructor(e){this.Ir=e,this.buffer=new Et(Xg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(Yg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){No(t)?ae(Yg,"Ignoring IndexedDB error during garbage collection: ",t):await xo(t)}await this.Vr(3e5)}))}}class CS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(sc.ce);const s=new SS(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Qg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(e,s,t)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(v=Date.now(),ao()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
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
 */class kS{constructor(){this.changes=new ws((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ba(s.mutation,o,mn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Oe()){const o=ds();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ds();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Oe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ur();const h=Oa(),m=(function(){return Oa()})();return t.forEach(((y,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof Fi)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),ba(E.mutation,v,E.mutation.getFieldMask(),Ze.now())):h.set(v.key,mn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>m.set(v,new PS(E,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Oa();let o=new it(((h,m)=>h-m)),u=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let E=s.get(y)||mn.empty();E=m.applyToLocalView(v,E),s.set(y,E);const S=(o.get(m.batchId)||Oe()).add(y);o=o.insert(m.batchId,S)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,E=y.value,S=G_();E.forEach((x=>{if(!u.has(x)){const z=nv(t.get(x),s.get(x));z!==null&&S.set(x,z),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,S))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):VI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ds());let m=Fa,y=u;return h.next((v=>$.forEach(v,((E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next((x=>{y=y.insert(E,x)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Oe()))).next((E=>({batchId:m,changes:K_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(y=>{const v=(function(S,x){return new lc(x,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((E=>{E.forEach(((S,x)=>{h=h.insert(S,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Bt.newInvalidDocument(E)))}));let m=Ca();return h.forEach(((y,v)=>{const E=u.get(y);E!==void 0&&ba(E.mutation,v,mn.empty(),Ze.now()),cc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class DS{constructor(){this.overlays=new it(ge.comparator),this.qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ds();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ds(),u=t.length+1,h=new ge(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new it(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=ds(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=ds(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,E)=>m.set(v,E))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new YI(t,s));let u=this.qr.get(t);u===void 0&&(u=Oe(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class VS{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class cf{constructor(){this.Qr=new Et(Ct.$r),this.Ur=new Et(Ct.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Ct(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Ct(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ge(new Je([])),s=new Ct(t,e),o=new Ct(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ge(new Je([])),s=new Ct(t,e),o=new Ct(t,e+1);let u=Oe();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Ct(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ge.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||ge.comparator(e.key,t.key)}}/**
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
 */class OS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Et(Ct.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new QI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Ct(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Jd:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Et(Ve);return t.forEach((o=>{const u=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new Ct(new ge(u),0);let m=new Et(Ve);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Yr)),!0)}),h),$.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(t.mutations,(o=>{const u=new Ct(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Ct(t,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class bS{constructor(e){this.ri=e,this.docs=(function(){return new it(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=Ur();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Bt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ur();const h=t.path,m=new ge(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:E}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||cI(uI(E),s)<=0||(o.has(E.key)||cc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ee(9500)}ii(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new MS(this)}getSize(e){return $.resolve(this.size)}}class MS extends kS{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class LS{constructor(e){this.persistence=e,this.si=new ws((t=>tf(t)),nf),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new cf,this.targetCount=0,this.ai=Io.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),$.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Pr(t),$.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this._i.containsKey(t))}}/**
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
 */class mv{constructor(e,t){this.ui={},this.overlays={},this.ci=new sc(0),this.li=!1,this.li=!0,this.hi=new VS,this.referenceDelegate=e(this),this.Pi=new LS(this),this.indexManager=new ES,this.remoteDocumentCache=(function(o){return new bS(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new vS(t),this.Ii=new NS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new OS(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new FS(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class FS extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Vi=null}static mi(e){return new hf(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const o=ge.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Re.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ju{constructor(e,t){this.persistence=e,this.pi=new ws((s=>mI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=RS(this,t)}static mi(e,t){return new Ju(e,t)}Ei(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return $.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Re.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}br(e,t,s){return $.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class df{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Oe(),o=Oe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new df(e,t.fromCache,s,o)}}/**
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
 */class jS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Pw()?8:fI($t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new US;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(ao()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(ao()<=De.DEBUG&&ae("QueryEngine","Query:",lo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(ao()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):$.resolve())}ys(e,t){if(Ug(t))return $.resolve(null);let s=ar(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Cd(t,null,"F"),s=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Oe(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,Cd(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,o){return Ug(t)||o.isEqual(Re.min())?$.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(ao()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.vs(e,h,t,lI(o,Fa)).next((m=>m)))}))}Ds(e,t){let s=new Et(q_(e));return t.forEach(((o,u)=>{cc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return ao()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",lo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ni.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const ff="LocalStore",zS=3e8;class BS{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new it(Ve),this.xs=new ws((u=>tf(u)),nf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function $S(i,e,t,s){return new BS(i,e,t,s)}async function gv(i,e){const t=Pe(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Oe();for(const v of o){h.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}for(const v of u){m.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function HS(i,e){const t=Pe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,E){const S=v.batch,x=S.keys();let z=$.resolve();return x.forEach((ee=>{z=z.next((()=>E.getEntry(y,ee))).next((Z=>{const H=v.docVersions.get(ee);ze(H!==null,48541),Z.version.compareTo(H)<0&&(S.applyToRemoteDocument(Z,v),Z.isValidDocument()&&(Z.setReadTime(v.commitVersion),E.addEntry(Z)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,S)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Oe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function yv(i){const e=Pe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function qS(i,e){const t=Pe(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((E,S)=>{const x=o.get(S);if(!x)return;m.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,S).next((()=>t.Pi.addMatchingKeys(u,E.addedDocuments,S))));let z=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?z=z.withResumeToken(Vt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(S,z),(function(Z,H,ye){return Z.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=zS?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(x,z,E)&&m.push(t.Pi.updateTargetData(u,z))}));let y=Ur(),v=Oe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(WS(u,h,e.documentUpdates).next((E=>{y=E.ks,v=E.qs}))),!s.isEqual(Re.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next((S=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function WS(i,e,t){let s=Oe(),o=Oe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ur();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Re.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ae(ff,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function KS(i,e){const t=Pe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Jd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function GS(i,e){const t=Pe(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new Si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Nd(i,e,t){const s=Pe(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!No(h))throw h;ae(ff,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Jg(i,e,t){const s=Pe(i);let o=Re.min(),u=Oe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,E){const S=Pe(y),x=S.xs.get(E);return x!==void 0?$.resolve(S.Ms.get(x)):S.Pi.getTargetData(v,E)})(s,h,ar(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Re.min(),t?u:Oe()))).next((m=>(QS(s,bI(e),m),{documents:m,Qs:u})))))}function QS(i,e,t){let s=i.Os.get(e)||Re.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Zg{constructor(){this.activeTargetIds=zI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YS{constructor(){this.Mo=new Zg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Zg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const ey="ConnectivityMonitor";class ty{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(ey,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(ey,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const sd="RestConnection",JS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ku?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Dd(),m=this.zo(e,t.toUriEncodedString());ae(sd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:v}=new URL(m),E=Co(v);return this.Jo(e,m,y,s,E).then((S=>(ae(sd,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw vo(sd,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Po})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=JS[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */const jt="WebChannelConnection";class tA extends ZS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Dd();return new Promise(((m,y)=>{const v=new v_;v.setWithCredentials(!0),v.listenOnce(w_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Du.NO_ERROR:const S=v.getResponseJson();ae(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case Du.TIMEOUT:ae(jt,`RPC '${e}' ${h} timed out`),y(new fe(G.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const x=v.getStatus();if(ae(jt,`RPC '${e}' ${h} failed with status:`,x,"response text:",v.getResponseText()),x>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const ee=z==null?void 0:z.error;if(ee&&ee.status&&ee.message){const Z=(function(ye){const we=ye.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(we)>=0?we:G.UNKNOWN})(ee.status);y(new fe(Z,ee.message))}else y(new fe(G.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new fe(G.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ae(jt,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ae(jt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=Dd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=I_(),m=T_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");ae(jt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const S=h.createWebChannel(E,y);this.I_(S);let x=!1,z=!1;const ee=new eA({Yo:H=>{z?ae(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(x||(ae(jt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),x=!0),ae(jt,`RPC '${e}' stream ${o} sending:`,H),S.send(H))},Zo:()=>S.close()}),Z=(H,ye,we)=>{H.listen(ye,(Ae=>{try{we(Ae)}catch(Te){setTimeout((()=>{throw Te}),0)}}))};return Z(S,Aa.EventType.OPEN,(()=>{z||(ae(jt,`RPC '${e}' stream ${o} transport opened.`),ee.o_())})),Z(S,Aa.EventType.CLOSE,(()=>{z||(z=!0,ae(jt,`RPC '${e}' stream ${o} transport closed`),ee.a_(),this.E_(S))})),Z(S,Aa.EventType.ERROR,(H=>{z||(z=!0,vo(jt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),ee.a_(new fe(G.UNAVAILABLE,"The operation could not be completed")))})),Z(S,Aa.EventType.MESSAGE,(H=>{var ye;if(!z){const we=H.data[0];ze(!!we,16349);const Ae=we,Te=(Ae==null?void 0:Ae.error)||((ye=Ae[0])==null?void 0:ye.error);if(Te){ae(jt,`RPC '${e}' stream ${o} received error:`,Te);const He=Te.status;let xe=(function(C){const D=mt[C];if(D!==void 0)return iv(D)})(He),k=Te.message;xe===void 0&&(xe=G.INTERNAL,k="Unknown error status: "+He+" with message "+Te.message),z=!0,ee.a_(new fe(xe,k)),S.close()}else ae(jt,`RPC '${e}' stream ${o} received:`,we),ee.u_(we)}})),Z(m,E_.STAT_EVENT,(H=>{H.stat===wd.PROXY?ae(jt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===wd.NOPROXY&&ae(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{ee.__()}),0),ee}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function od(){return typeof document<"u"?document:null}/**
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
 */class _v{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ny="PersistentStream";class vv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _v(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new fe(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class nA extends vv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=lS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Re.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Re.min():h.readTime?lr(h.readTime):Re.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=xd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Ad(y)?{documents:hS(u,y)}:{query:dS(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=av(u,h.resumeToken);const v=Rd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Re.min())>0){m.readTime=Xu(u,h.snapshotVersion.toTimestamp());const v=Rd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=pS(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=xd(this.serializer),t.removeTarget=e,this.q_(t)}}class rA extends vv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cS(e.writeResults,e.commitTime),s=lr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=xd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>uS(this.serializer,s)))};this.q_(t)}}/**
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const vs="RemoteStore";class aA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Es(this)&&(ae(vs,"Restarting streams for network reachability change."),await(async function(y){const v=Pe(y);v.Ea.add(4),await nl(v),v.Ra.set("Unknown"),v.Ea.delete(4),await mc(v)})(this))}))})),this.Ra=new oA(s,o)}}async function mc(i){if(Es(i))for(const e of i.da)await e(!0)}async function nl(i){for(const e of i.da)await e(!1)}function wv(i,e){const t=Pe(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),yf(t)?gf(t):Do(t).O_()&&mf(t,e))}function pf(i,e){const t=Pe(i),s=Do(t);t.Ia.delete(e),s.O_()&&Ev(t,e),t.Ia.size===0&&(s.O_()?s.L_():Es(t)&&t.Ra.set("Unknown"))}function mf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(i).Y_(e)}function Ev(i,e){i.Va.Ue(e),Do(i).Z_(e)}function gf(i){i.Va=new tS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Do(i).start(),i.Ra.ua()}function yf(i){return Es(i)&&!Do(i).x_()&&i.Ia.size>0}function Es(i){return Pe(i).Ea.size===0}function Tv(i){i.Va=void 0}async function lA(i){i.Ra.set("Online")}async function uA(i){i.Ia.forEach(((e,t)=>{mf(i,e)}))}async function cA(i,e){Tv(i),yf(i)?(i.Ra.ha(e),gf(i)):i.Ra.set("Unknown")}async function hA(i,e,t){if(i.Ra.set("Online"),e instanceof ov&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){ae(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Zu(i,s)}else if(e instanceof Mu?i.Va.Ze(e):e instanceof sv?i.Va.st(e):i.Va.tt(e),!t.isEqual(Re.min()))try{const s=await yv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(v);E&&u.Ia.set(v,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),Ev(u,y);const S=new Si(E.target,y,v,E.sequenceNumber);mf(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ae(vs,"Failed to raise snapshot:",s),await Zu(i,s)}}async function Zu(i,e,t){if(!No(e))throw e;i.Ea.add(1),await nl(i),i.Ra.set("Offline"),t||(t=()=>yv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ae(vs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await mc(i)}))}function Iv(i,e){return e().catch((t=>Zu(i,t,e)))}async function gc(i){const e=Pe(i),t=bi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jd;for(;dA(e);)try{const o=await KS(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,fA(e,o)}catch(o){await Zu(e,o)}Sv(e)&&Av(e)}function dA(i){return Es(i)&&i.Ta.length<10}function fA(i,e){i.Ta.push(e);const t=bi(i);t.O_()&&t.X_&&t.ea(e.mutations)}function Sv(i){return Es(i)&&!bi(i).x_()&&i.Ta.length>0}function Av(i){bi(i).start()}async function pA(i){bi(i).ra()}async function mA(i){const e=bi(i);for(const t of i.Ta)e.ea(t.mutations)}async function gA(i,e,t){const s=i.Ta.shift(),o=af.from(s,e,t);await Iv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await gc(i)}async function yA(i,e){e&&bi(i).X_&&await(async function(s,o){if((function(h){return JI(h)&&h!==G.ABORTED})(o.code)){const u=s.Ta.shift();bi(s).B_(),await Iv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await gc(s)}})(i,e),Sv(i)&&Av(i)}async function ry(i,e){const t=Pe(i);t.asyncQueue.verifyOperationInProgress(),ae(vs,"RemoteStore received new credentials");const s=Es(t);t.Ea.add(3),await nl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await mc(t)}async function _A(i,e){const t=Pe(i);e?(t.Ea.delete(2),await mc(t)):e||(t.Ea.add(2),await nl(t),t.Ra.set("Unknown"))}function Do(i){return i.ma||(i.ma=(function(t,s,o){const u=Pe(t);return u.sa(),new nA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:lA.bind(null,i),t_:uA.bind(null,i),r_:cA.bind(null,i),H_:hA.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),yf(i)?gf(i):i.Ra.set("Unknown")):(await i.ma.stop(),Tv(i))}))),i.ma}function bi(i){return i.fa||(i.fa=(function(t,s,o){const u=Pe(t);return u.sa(),new rA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:pA.bind(null,i),r_:yA.bind(null,i),ta:mA.bind(null,i),na:gA.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await gc(i)):(await i.fa.stop(),i.Ta.length>0&&(ae(vs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class _f{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new _f(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(i,e){if(Fr("AsyncQueue",`${e}: ${i}`),No(i))return new fe(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class go{static emptySet(e){return new go(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new go;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class iy{constructor(){this.ga=new it(ge.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class So{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new So(e,t,go.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class vA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class wA{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Pe(t),u=o.queries;o.queries=sy(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new fe(G.ABORTED,"Firestore shutting down"))}}function sy(){return new ws((i=>H_(i)),uc)}async function EA(i,e){const t=Pe(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new vA,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=vf(h,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&wf(t)}async function TA(i,e){const t=Pe(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function IA(i,e){const t=Pe(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&wf(t)}function SA(i,e,t){const s=Pe(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function wf(i){i.Ca.forEach((e=>{e.next()}))}var Vd,oy;(oy=Vd||(Vd={})).Ma="default",oy.Cache="cache";class AA{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new So(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=So.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vd.Cache}}/**
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
 */class Cv{constructor(e){this.key=e}}class Rv{constructor(e){this.key=e}}class CA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Oe(),this.mutatedKeys=Oe(),this.eu=q_(e),this.tu=new go(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new iy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,S)=>{const x=o.get(E),z=cc(this.query,S)?S:null,ee=!!x&&this.mutatedKeys.has(x.key),Z=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;x&&z?x.data.isEqual(z.data)?ee!==Z&&(s.track({type:3,doc:z}),H=!0):this.su(x,z)||(s.track({type:2,doc:z}),H=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!x&&z?(s.track({type:0,doc:z}),H=!0):x&&!z&&(s.track({type:1,doc:x}),H=!0,(y||v)&&(m=!0)),H&&(z?(h=h.add(z),u=Z?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,S)=>(function(z,ee){const Z=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:H})}};return Z(z)-Z(ee)})(E.type,S.type)||this.eu(E.doc,S.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new So(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Oe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new Rv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Cv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return So.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ef="SyncEngine";class RA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class kA{constructor(e){this.key=e,this.hu=!1}}class PA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ws((m=>H_(m)),uc),this.Iu=new Map,this.Eu=new Set,this.du=new it(ge.comparator),this.Au=new Map,this.Ru=new cf,this.Vu={},this.mu=new Map,this.fu=Io.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xA(i,e,t=!0){const s=Vv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await kv(s,e,t,!0),o}async function NA(i,e){const t=Vv(i);await kv(t,e,!0,!1)}async function kv(i,e,t,s){const o=await GS(i.localStore,ar(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await DA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&wv(i.remoteStore,o),m}async function DA(i,e,t,s,o){i.pu=(S,x,z)=>(async function(Z,H,ye,we){let Ae=H.view.ru(ye);Ae.Cs&&(Ae=await Jg(Z.localStore,H.query,!1).then((({documents:k})=>H.view.ru(k,Ae))));const Te=we&&we.targetChanges.get(H.targetId),He=we&&we.targetMismatches.get(H.targetId)!=null,xe=H.view.applyChanges(Ae,Z.isPrimaryClient,Te,He);return ly(Z,H.targetId,xe.au),xe.snapshot})(i,S,x,z);const u=await Jg(i.localStore,e,!0),h=new CA(e,u.Qs),m=h.ru(u.documents),y=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);ly(i,t,v.au);const E=new RA(e,t,h);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function VA(i,e,t){const s=Pe(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!uc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Nd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&pf(s.remoteStore,o.targetId),Od(s,o.targetId)})).catch(xo)):(Od(s,o.targetId),await Nd(s.localStore,o.targetId,!0))}async function OA(i,e){const t=Pe(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pf(t.remoteStore,s.targetId))}async function bA(i,e,t){const s=BA(i);try{const o=await(function(h,m){const y=Pe(h),v=Ze.now(),E=m.reduce(((z,ee)=>z.add(ee.key)),Oe());let S,x;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let ee=Ur(),Z=Oe();return y.Ns.getEntries(z,E).next((H=>{ee=H,ee.forEach(((ye,we)=>{we.isValidDocument()||(Z=Z.add(ye))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,ee))).next((H=>{S=H;const ye=[];for(const we of m){const Ae=KI(we,S.get(we.key).overlayedDocument);Ae!=null&&ye.push(new Fi(we.key,Ae,L_(Ae.value.mapValue),Fn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,ye,m)})).next((H=>{x=H;const ye=H.applyToLocalDocumentSet(S,Z);return y.documentOverlayCache.saveOverlays(z,H.batchId,ye)}))})).then((()=>({batchId:x.batchId,changes:K_(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new it(Ve)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v})(s,o.batchId,t),await rl(s,o.changes),await gc(s.remoteStore)}catch(o){const u=vf(o,"Failed to persist write");t.reject(u)}}async function Pv(i,e){const t=Pe(i);try{const s=await qS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await rl(t,s,e)}catch(s){await xo(s)}}function ay(i,e,t){const s=Pe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Pe(h);y.onlineState=m;let v=!1;y.queries.forEach(((E,S)=>{for(const x of S.Sa)x.va(m)&&(v=!0)})),v&&wf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function MA(i,e,t){const s=Pe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new it(ge.comparator);h=h.insert(u,Bt.newNoDocument(u,Re.min()));const m=Oe().add(u),y=new fc(Re.min(),new Map,new it(Ve),h,m);await Pv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Tf(s)}else await Nd(s.localStore,e,!1).then((()=>Od(s,e,t))).catch(xo)}async function LA(i,e){const t=Pe(i),s=e.batch.batchId;try{const o=await HS(t.localStore,e);Nv(t,s,null),xv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await xo(o)}}async function FA(i,e,t){const s=Pe(i);try{const o=await(function(h,m){const y=Pe(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return y.mutationQueue.lookupMutationBatch(v,m).next((S=>(ze(S!==null,37113),E=S.keys(),y.mutationQueue.removeMutationBatch(v,S)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>y.localDocuments.getDocuments(v,E)))}))})(s.localStore,e);Nv(s,e,t),xv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await xo(o)}}function xv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Nv(i,e,t){const s=Pe(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Od(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||Dv(i,s)}))}function Dv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(pf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Tf(i))}function ly(i,e,t){for(const s of t)s instanceof Cv?(i.Ru.addReference(s.key,e),UA(i,s)):s instanceof Rv?(ae(Ef,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Dv(i,s.key)):Ee(19791,{wu:s})}function UA(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ae(Ef,"New document in limbo: "+t),i.Eu.add(s),Tf(i))}function Tf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new ge(Je.fromString(e)),s=i.fu.next();i.Au.set(s,new kA(t)),i.du=i.du.insert(t,s),wv(i.remoteStore,new Si(ar(rf(t.path)),s,"TargetPurposeLimboResolution",sc.ce))}}async function rl(i,e,t){const s=Pe(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{var E;if((v||t)&&s.isPrimaryClient){const S=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(v){o.push(v);const S=df.As(y.targetId,v);u.push(S)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,v){const E=Pe(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>$.forEach(v,(x=>$.forEach(x.Es,(z=>E.persistence.referenceDelegate.addReference(S,x.targetId,z))).next((()=>$.forEach(x.ds,(z=>E.persistence.referenceDelegate.removeReference(S,x.targetId,z)))))))))}catch(S){if(!No(S))throw S;ae(ff,"Failed to update sequence numbers: "+S)}for(const S of v){const x=S.targetId;if(!S.fromCache){const z=E.Ms.get(x),ee=z.snapshotVersion,Z=z.withLastLimboFreeSnapshotVersion(ee);E.Ms=E.Ms.insert(x,Z)}}})(s.localStore,u))}async function jA(i,e){const t=Pe(i);if(!t.currentUser.isEqual(e)){ae(Ef,"User change. New user:",e.toKey());const s=await gv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new fe(G.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Ls)}}function zA(i,e){const t=Pe(i),s=t.Au.get(e);if(s&&s.hu)return Oe().add(s.key);{let o=Oe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Vv(i){const e=Pe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MA.bind(null,e),e.Pu.H_=IA.bind(null,e.eventManager),e.Pu.yu=SA.bind(null,e.eventManager),e}function BA(i){const e=Pe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FA.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return $S(this.persistence,new jS,e.initialUser,this.serializer)}Cu(e){return new mv(hf.mi,this.serializer)}Du(e){return new YS}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class $A extends ec{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof Ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new AS(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new mv((s=>Ju.mi(s,t)),this.serializer)}}class bd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jA.bind(null,this.syncEngine),await _A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wA})()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=(function(u){return new tA(u)})(e.databaseInfo);return(function(u,h,m,y){return new sA(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new aA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ay(this.syncEngine,t,0)),(function(){return ty.v()?new ty:new XS})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,E){const S=new PA(o,u,h,m,y,v);return E&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Pe(o);ae(vs,"RemoteStore shutting down."),u.Ea.add(5),await nl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}bd.provider={build:()=>new bd};/**
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
 */const Mi="FirestoreClient";class qA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Yd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ae(Mi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ae(Mi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ad(i,e){i.asyncQueue.verifyOperationInProgress(),ae(Mi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await gv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function uy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await WA(i);ae(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ry(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ry(e.remoteStore,o))),i._onlineComponents=e}async function WA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae(Mi,"Using user provided OfflineComponentProvider");try{await ad(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;vo("Error using user provided cache. Falling back to memory cache: "+t),await ad(i,new ec)}}else ae(Mi,"Using default OfflineComponentProvider"),await ad(i,new $A(void 0));return i._offlineComponents}async function Ov(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae(Mi,"Using user provided OnlineComponentProvider"),await uy(i,i._uninitializedComponentsProvider._online)):(ae(Mi,"Using default OnlineComponentProvider"),await uy(i,new bd))),i._onlineComponents}function KA(i){return Ov(i).then((e=>e.syncEngine))}async function cy(i){const e=await Ov(i),t=e.eventManager;return t.onListen=xA.bind(null,e.syncEngine),t.onUnlisten=VA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OA.bind(null,e.syncEngine),t}/**
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
 */const Mv="firestore.googleapis.com",dy=!0;class fy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mv,this.ssl=dy}else this.host=e.host,this.ssl=e.ssl??dy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IS)throw new fe(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new X1;switch(s.type){case"firstParty":return new tI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=hy.get(t);s&&(ae("ComponentProvider","Removing Datastore"),hy.delete(t),s.terminate())})(this),Promise.resolve()}}function GA(i,e,t,s={}){var v;i=Pi(i,yc);const o=Co(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Vy(`https://${m}`),Oy("Firestore",!0)),u.host!==Mv&&u.host!==m&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!ms(y,h)&&(i._setSettings(y),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=zt.MOCK_USER;else{E=ww(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new fe(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new zt(x)}i._authCredentials=new J1(new A_(E,S))}}/**
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
 */class _c{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _c(this.firestore,e,this._query)}}class wt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Za(t,wt._jsonSchema))return new wt(e,s||null,new ge(Je.fromString(t.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:gt("string",wt._jsonSchemaVersion),referencePath:gt("string")};class xi extends _c{constructor(e,t,s){super(e,t,rf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new ge(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function Cu(i,e,...t){if(i=Ht(i),C_("collection","path",e),i instanceof yc){const s=Je.fromString(e,...t);return Cg(s),new xi(i,null,s)}{if(!(i instanceof wt||i instanceof xi))throw new fe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return Cg(s),new xi(i.firestore,null,s)}}function ka(i,e,...t){if(i=Ht(i),arguments.length===1&&(e=Yd.newId()),C_("doc","path",e),i instanceof yc){const s=Je.fromString(e,...t);return Ag(s),new wt(i,null,new ge(s))}{if(!(i instanceof wt||i instanceof xi))throw new fe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return Ag(s),new wt(i.firestore,i instanceof xi?i.converter:null,new ge(s))}}/**
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
 */const py="AsyncQueue";class my{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _v(this,"async_queue_retry"),this._c=()=>{const s=od();s&&ae(py,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=od();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=od();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new fs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!No(e))throw e;ae(py,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",gy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=_f.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&Ee(47125,{Pc:gy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function yy(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Ao extends yc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new my,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new my(e),this._firestoreClient=void 0,await e}}}function QA(i,e){const t=typeof i=="object"?i:Fy(),s=typeof i=="string"?i:Ku,o=jd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=_w("firestore");u&&GA(o,...u)}return o}function Lv(i){if(i._terminated)throw new fe(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||YA(i),i._firestoreClient}function YA(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,v,E){return new _I(m,y,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,bv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new qA(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Vt.fromBase64String(e))}catch(t){throw new fe(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Za(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:gt("string",Cn._jsonSchemaVersion),bytes:gt("string")};/**
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
 */class vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(Za(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:gt("string",ur._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
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
 */class cr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Za(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cr(e.vectorValues);throw new fe(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:gt("string",cr._jsonSchemaVersion),vectorValues:gt("object")};/**
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
 */const XA=/^__.*__$/;class JA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}class Fv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Uv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:i})}}class If{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new If({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return tc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Uv(this.Ac)&&XA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ZA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}Cc(e,t,s,o=!1){return new If({Ac:e,methodName:t,Dc:s,path:Dt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jv(i){const e=i._freezeSettings(),t=pc(i._databaseId);return new ZA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function eC(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Cf("Data must be an object, but it was:",h,s);const m=zv(s,h);let y,v;if(u.merge)y=new mn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const x=Md(e,S,t);if(!h.contains(x))throw new fe(G.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);$v(E,x)||E.push(x)}y=new mn(E),v=h.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,v=h.fieldTransforms;return new JA(new sn(m),y,v)}class wc extends il{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wc}}class Sf extends il{_toFieldTransform(e){return new tv(e.path,new Ba)}isEqual(e){return e instanceof Sf}}class Af extends il{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new qa(e.serializer,Y_(e.serializer,this.Fc));return new tv(e.path,t)}isEqual(e){return e instanceof Af&&this.Fc===e.Fc}}function tC(i,e,t,s){const o=i.Cc(1,e,t);Cf("Data must be an object, but it was:",o,s);const u=[],h=sn.empty();Li(s,((y,v)=>{const E=Rf(e,y,t);v=Ht(v);const S=o.yc(E);if(v instanceof wc)u.push(E);else{const x=Ec(v,S);x!=null&&(u.push(E),h.set(E,x))}}));const m=new mn(u);return new Fv(h,m,o.fieldTransforms)}function nC(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[Md(e,s,t)],y=[o];if(u.length%2!=0)throw new fe(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<u.length;x+=2)m.push(Md(e,u[x])),y.push(u[x+1]);const v=[],E=sn.empty();for(let x=m.length-1;x>=0;--x)if(!$v(v,m[x])){const z=m[x];let ee=y[x];ee=Ht(ee);const Z=h.yc(z);if(ee instanceof wc)v.push(z);else{const H=Ec(ee,Z);H!=null&&(v.push(z),E.set(z,H))}}const S=new mn(v);return new Fv(E,S,h.fieldTransforms)}function Ec(i,e){if(Bv(i=Ht(i)))return Cf("Unsupported field value:",e,i),zv(i,e);if(i instanceof il)return(function(s,o){if(!Uv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Ec(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Ht(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Y_(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ze.fromDate(s);return{timestampValue:Xu(o.serializer,u)}}if(s instanceof Ze){const u=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Xu(o.serializer,u)}}if(s instanceof ur)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Cn)return{bytesValue:av(o.serializer,s._byteString)};if(s instanceof wt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:uf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof cr)return(function(h,m){return{mapValue:{fields:{[b_]:{stringValue:M_},[Gu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return sf(m.serializer,v)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Xd(s)}`)})(i,e)}function zv(i,e){const t={};return P_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(i,((s,o)=>{const u=Ec(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Bv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ze||i instanceof ur||i instanceof Cn||i instanceof wt||i instanceof il||i instanceof cr)}function Cf(i,e,t){if(!Bv(t)||!R_(t)){const s=Xd(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Md(i,e,t){if((e=Ht(e))instanceof vc)return e._internalPath;if(typeof e=="string")return Rf(i,e);throw tc("Field path arguments must be of type string or ",i,!1,void 0,t)}const rC=new RegExp("[~\\*/\\[\\]]");function Rf(i,e,t){if(e.search(rC)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new vc(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function tc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new fe(G.INVALID_ARGUMENT,m+i+y)}function $v(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */function sC(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new fe(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oC{convertValue(e,t="none"){switch(Oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Li(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Gu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ht(h.doubleValue)));return new cr(t)}convertGeoPoint(e){return new ur(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ac(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const t=Di(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);ze(fv(s),9688,{name:e});const o=new ja(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function aC(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends Hv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:gt("string",ps._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Lu extends ps{data(e={}){return super.data(e)}}class yo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Lu(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Lu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:lC(m.type),doc:y,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:i})}}yo._jsonSchemaVersion="firestore/querySnapshot/1.0",yo._jsonSchema={type:gt("string",yo._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class Wv extends oC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,t)}}function _y(i,e,t,...s){i=Pi(i,wt);const o=Pi(i.firestore,Ao),u=jv(o);let h;return h=typeof(e=Ht(e))=="string"||e instanceof vc?nC(u,"updateDoc",i._key,e,t,s):tC(u,"updateDoc",i._key,e),kf(o,[h.toMutation(i._key,Fn.exists(!0))])}function ld(i){return kf(Pi(i.firestore,Ao),[new of(i._key,Fn.none())])}function vy(i,e){const t=Pi(i.firestore,Ao),s=ka(i),o=aC(i.converter,e);return kf(t,[eC(jv(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Fn.exists(!1))]).then((()=>s))}function wy(i,...e){var y,v,E;i=Ht(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||yy(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yy(e[s])){const S=e[s];e[s]=(y=S.next)==null?void 0:y.bind(S),e[s+1]=(v=S.error)==null?void 0:v.bind(S),e[s+2]=(E=S.complete)==null?void 0:E.bind(S)}let u,h,m;if(i instanceof wt)h=Pi(i.firestore,Ao),m=rf(i._key.path),u={next:S=>{e[s]&&e[s](uC(h,i,S))},error:e[s+1],complete:e[s+2]};else{const S=Pi(i,_c);h=Pi(S.firestore,Ao),m=S._query;const x=new Wv(h);u={next:z=>{e[s]&&e[s](new yo(h,x,S,z))},error:e[s+1],complete:e[s+2]},sC(i._query)}return(function(x,z,ee,Z){const H=new HA(Z),ye=new AA(z,H,ee);return x.asyncQueue.enqueueAndForget((async()=>EA(await cy(x),ye))),()=>{H.Nu(),x.asyncQueue.enqueueAndForget((async()=>TA(await cy(x),ye)))}})(Lv(h),m,o,u)}function kf(i,e){return(function(s,o){const u=new fs;return s.asyncQueue.enqueueAndForget((async()=>bA(await KA(s),o,u))),u.promise})(Lv(i),e)}function uC(i,e,t){const s=t.docs.get(e._key),o=new Wv(i);return new ps(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}function cC(){return new Sf("serverTimestamp")}function Ey(i){return new Af("increment",i)}(function(e,t=!0){(function(o){Po=o})(Ro),_o(new gs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ao(new Z1(s.getProvider("auth-internal")),new nI(h,s.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new fe(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(v.options.projectId,E)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Ri(Eg,Tg,e),Ri(Eg,Tg,"esm2020")})();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=at.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>at.createElement("svg",{ref:y,...dC,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Kv("lucide",o),...m},[...h.map(([v,E])=>at.createElement(v,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(i,e)=>{const t=at.forwardRef(({className:s,...o},u)=>at.createElement(fC,{ref:u,iconNode:e,className:Kv(`lucide-${hC(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Qt("BookMarked",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=Qt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=Qt("ChefHat",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Qt("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Qt("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=Qt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Qt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Qt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=Qt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=Qt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=Qt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Qt("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=Qt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=Qt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Qt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),EC=JSON.parse(__firebase_config),Gv=Ly(EC),Ru=Q1(Gv),_i=QA(Gv),vi=typeof __app_id<"u"?__app_id:"default-app-id",TC="sk-dyjwptqdinqigbhkinwhlofflvoidtvidcuhmidgobxnaqvd",IC="https://api.siliconflow.cn/v1/chat/completions",SC="Qwen/Qwen3-VL-32B-Instruct",AC=i=>{if(!i)return"¥";const e=i.toUpperCase().trim();return["YEN","JP¥","JPY","JAPANESE YEN","Y"].includes(e)?"¥":["USD","US$"].includes(e)?"$":["EUR","EURO"].includes(e)?"€":i},CC=i=>{if(!i)return null;const e=/(.*?)\s*\((.*?)\)/,t=i.match(e);let s=i,o=null;t&&t.length===3&&(s=t[1].trim(),o=t[2].trim());let u=null;return o&&(u=o.split(/\s+/).filter(m=>m.length>0).join(" ")),{kana:s,formattedRomaji:u}},RC=i=>i?i.replace(/\s*\([^)]*\)/g,"").trim():"";function kC(){const[i,e]=at.useState(null),[t,s]=at.useState([]),[o,u]=at.useState([]),[h,m]=at.useState(!1),[y,v]=at.useState(""),[E,S]=at.useState(!1),[x,z]=at.useState(!0),ee=at.useRef(null),[Z,H]=at.useState(!1),[ye,we]=at.useState(null),[Ae,Te]=at.useState(""),[He,xe]=at.useState(!1);at.useEffect(()=>{(async()=>{typeof __initial_auth_token<"u"&&__initial_auth_token?await bT(Ru,__initial_auth_token):await xT(Ru)})();const q=FT(Ru,X=>{e(X),z(!1)});return()=>q()},[Ru]),at.useEffect(()=>{if(Ae){const B=setTimeout(()=>Te(""),5e3);return()=>clearTimeout(B)}},[Ae]),at.useEffect(()=>{if(!i)return;const B=Cu(_i,"artifacts",vi,"users",i.uid,"menu_items"),q=wy(B,X=>{const ne=X.docs.map(oe=>({id:oe.id,...oe.data()}));ne.sort((oe,le)=>{var pe,Ce;return(((pe=le.timestamp)==null?void 0:pe.toMillis())||0)-(((Ce=oe.timestamp)==null?void 0:Ce.toMillis())||0)}),s(ne)},X=>console.error("Menu fetch error:",X));return()=>q()},[i]),at.useEffect(()=>{if(!i)return;const B=Cu(_i,"artifacts",vi,"users",i.uid,"cart_items"),q=wy(B,X=>{u(X.docs.map(ne=>({id:ne.id,...ne.data()})))},X=>console.error("Cart fetch error:",X));return()=>q()},[i]);const k=B=>{const q=B.reduce((ne,oe)=>{const le=oe.category&&oe.category.trim()!==""?oe.category:"未分类";return ne[le]||(ne[le]=[]),ne[le].push(oe),ne},{});return Object.keys(q).sort((ne,oe)=>{const le=ne.includes("主菜")||ne.includes("烧鸟")||ne.includes("寿司"),pe=oe.includes("主菜")||oe.includes("烧鸟")||oe.includes("寿司");return le&&!pe?-1:!le&&pe||ne.includes("甜品")&&!oe.includes("甜品")?1:!ne.includes("甜品")&&oe.includes("甜品")?-1:ne.localeCompare(oe)}).map(ne=>({category:ne,items:q[ne]}))},I=B=>{if(!B||B.length===0)return[];const q=[...B].sort((le,pe)=>{var Ce,lt;return(((Ce=pe.timestamp)==null?void 0:Ce.toMillis())||0)-(((lt=le.timestamp)==null?void 0:lt.toMillis())||0)}),X=[],ne=300*1e3,oe=new Set;return q.forEach(le=>{var lt,Ot;if(oe.has(le.id))return;const pe=(lt=le.timestamp)==null?void 0:lt.toMillis();if(!pe)return;const Ce={id:le.id,name:new Date(pe).toLocaleString("zh-CN",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),timestamp:pe,items:[],count:0};Ce.items.push(le),Ce.count++,oe.add(le.id);for(const Ke of q){if(oe.has(Ke.id))continue;const gn=(Ot=Ke.timestamp)==null?void 0:Ot.toMillis();gn&&Math.abs(pe-gn)<ne&&(Ce.items.push(Ke),Ce.count++,oe.add(Ke.id))}X.push(Ce)}),X.sort((le,pe)=>pe.timestamp-le.timestamp)},C=B=>new Promise(q=>{const X=new FileReader;X.readAsDataURL(B),X.onload=ne=>{const oe=new Image;oe.src=ne.target.result,oe.onload=()=>{const le=document.createElement("canvas"),pe=1024;let Ce=oe.width,lt=oe.height;Ce>pe&&(lt*=pe/Ce,Ce=pe),le.width=Ce,le.height=lt,le.getContext("2d").drawImage(oe,0,0,Ce,lt),q(le.toDataURL("image/jpeg",.7))}}}),D=async B=>{var le,pe,Ce,lt;const q=B.split(",")[1],X=`
			You are an expert menu translator and food critic. Your task is to analyze the menu image and extract dish details, including an estimated calorie count.
			
			Identify ALL distinct dishes and their corresponding details. For each dish, return a JSON object with these fields. 
			If a field is not explicitly present or can't be reliably inferred, use an empty string "" for its value.

            IMPORTANT: Do NOT include menu section headers (like "Appetizers", "Main Course", "A la carte", "单点菜单", "Drink Menu") as distinct dish items unless they are actual purchasable items with a specific price.

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
		`,ne=3;let oe=null;for(let Ot=0;Ot<ne;Ot++){if(Ot>0){const Ke=Math.pow(2,Ot)*1e3;await new Promise(gn=>setTimeout(gn,Ke)),console.log(`Retrying AI call... Attempt ${Ot+1}`)}try{const Ke=await fetch(IC,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${TC}`},body:JSON.stringify({model:SC,messages:[{role:"user",content:[{type:"text",text:X},{type:"image_url",image_url:{url:`data:image/jpeg;base64,${q}`}}]}],temperature:.2,max_tokens:2048})});if(!Ke.ok){const qt=await Ke.json();if(console.error("API Error Data:",qt),oe=new Error(`AI API Error: ${Ke.status} - ${((le=qt.error)==null?void 0:le.message)||Ke.statusText}`),Ke.status===429||Ke.status>=500)continue;throw oe}const zr=(lt=(Ce=(pe=(await Ke.json()).choices)==null?void 0:pe[0])==null?void 0:Ce.message)==null?void 0:lt.content;let Un;try{Un=JSON.parse(zr)}catch(qt){console.warn("Initial JSON parse failed. Attempting robust extraction...",qt);let Rn=zr.trim();Rn=Rn.replace(/^```json\s*|```\s*$/g,"").trim();const et=Rn.indexOf("[");if(et===-1)throw console.error("Qwen Raw Text (no valid array found):",zr),new Error("Failed to parse AI response: no valid JSON array structure found.");let je=Rn.substring(et),Yt=je.lastIndexOf("]");if(Yt===-1){let Wt=je.trim();Wt.endsWith(",")&&(Wt=Wt.substring(0,Wt.length-1),console.warn("Repaired JSON: Removed trailing comma.")),Wt.endsWith("]")?je=Wt:(je=Wt+"]",console.warn("Repaired JSON: Added missing closing bracket."))}else je=Rn.substring(et,Yt+1);if(je.length<5)throw new Error("Extracted JSON string is too short or empty.");try{Un=JSON.parse(je)}catch(Wt){throw oe=Wt,console.error("Qwen Raw Text (Final Parse Failed):",je),new Error("Failed to parse AI response: extracted content is invalid.")}}return Un.filter(qt=>qt.price>0&&qt.translation)}catch(Ke){if(oe=Ke,Ot===ne-1)throw Ke}}throw oe||new Error("Maximum retries reached without a successful AI response.")},P=async B=>{const q=Array.from(B.target.files);if(!(q.length===0||!i)){m(!0),v(`准备处理 ${q.length} 张图片...`);try{for(let X=0;X<q.length;X++){const ne=q[X];if(v(`[${X+1}/${q.length}] 正在压缩图片...`),ne.size>10*1024*1024){Te(`文件太大 (${(ne.size/1024/1024).toFixed(1)}MB)，请选择小于 10MB 的图片。`);continue}const oe=await C(ne);v(`[${X+1}/${q.length}] 小 Qirl 正在识别和翻译 (Qwen)...`);const le=await D(oe);v(`[${X+1}/${q.length}] 找到 ${le.length} 道菜品，正在存储...`);const pe=le.map(async Ce=>{const lt=AC(Ce.currency);return vy(Cu(_i,"artifacts",vi,"users",i.uid,"menu_items"),{...Ce,currency:lt,timestamp:cC(),lang_code:Ce.lang_code||"",category:Ce.category||"",calories:typeof Ce.calories=="number"?Ce.calories:parseInt(Ce.calories)||""})});await Promise.all(pe),Te(`[${X+1}/${q.length}] 处理完毕，新菜单已自动更新。`)}v(`所有 ${q.length} 张图片处理完毕。`)}catch(X){console.error("Scan failed",X),Te(`识别失败: ${X.message||"请检查网络或密钥"}`)}finally{m(!1),v(""),ee.current&&(ee.current.value="")}}},O=()=>{var B;(B=ee.current)==null||B.click()},A=async B=>{if(!i)return;const q=o.find(X=>X.menuItemId===B.id);if(q){const X=ka(_i,"artifacts",vi,"users",i.uid,"cart_items",q.id);await _y(X,{quantity:Ey(1)})}else await vy(Cu(_i,"artifacts",vi,"users",i.uid,"cart_items"),{menuItemId:B.id,name:B.translation,originalName:B.original,pronunciation:B.pronunciation,price:B.price,currency:B.currency,quantity:1})},$e=async B=>{if(!i)return;const q=ka(_i,"artifacts",vi,"users",i.uid,"cart_items",B),X=o.find(ne=>ne.id===B);X&&X.quantity>1?await _y(q,{quantity:Ey(-1)}):await ld(q)},dt=async()=>{if(!i)return;const B=t.map(X=>ld(ka(_i,"artifacts",vi,"users",i.uid,"menu_items",X.id))),q=o.map(X=>ld(ka(_i,"artifacts",vi,"users",i.uid,"cart_items",X.id)));await Promise.all([...B,...q]),H(!1),Te("菜单和订单已全部清空。")},Tt=(B,q)=>{if(!("speechSynthesis"in window)){Te("您的浏览器不支持 Web Speech API。");return}if(!B||B.trim().length<2){Te("发音内容为空或无法识别。");return}const X=new SpeechSynthesisUtterance(B);X.rate=.7;let ne="en-US";q&&q.toLowerCase().includes("ja")?ne="ja-JP":q&&q.toLowerCase().includes("ko")?ne="ko-KR":q&&q.toLowerCase().includes("fr")&&(ne="fr-FR"),X.lang=ne;const oe=window.speechSynthesis.getVoices(),le=oe.find(pe=>pe.lang===X.lang);if(le)X.voice=le;else{const pe=oe.find(Ce=>Ce.default);pe&&(X.voice=pe)}window.speechSynthesis.speaking&&window.speechSynthesis.cancel();try{window.speechSynthesis.speak(X)}catch(pe){console.error("Speech Synthesis Error:",pe),Te("发音失败。浏览器可能阻止了自动播放，请点击屏幕后重试。")}},qe=t.filter(B=>{const q=["单点菜单","菜单目录","Menu","A la carte","アラカルト","À la carte"];return!(q.some(X=>{var ne;return(ne=B.translation)==null?void 0:ne.includes(X)})||q.some(X=>{var ne;return(ne=B.original)==null?void 0:ne.trim().toLowerCase().includes(X.toLowerCase())}))}),re=k(qe),me=I(qe),ie=o.reduce((B,q)=>B+q.quantity,0),V=o.length>0?o[0].currency:"¥",W=o.reduce((B,q)=>B+q.price*q.quantity,0);return x?F.jsxs("div",{className:"flex items-center justify-center h-screen bg-amber-50 text-gray-800",children:[F.jsx(Iy,{className:"animate-spin mr-2"})," 初始化 食神 Qirl..."]}):F.jsxs("div",{className:"min-h-screen bg-amber-50 text-gray-800 font-sans pb-28 relative overflow-hidden",children:[F.jsx("input",{type:"file",ref:ee,onChange:P,accept:"image/*",multiple:!0,className:"hidden"}),F.jsx("div",{className:"fixed top-[-10%] right-[-10%] w-64 h-64 bg-red-200/50 rounded-full blur-3xl pointer-events-none"}),F.jsx("div",{className:"fixed bottom-[-10%] left-[-10%] w-80 h-80 bg-orange-200/50 rounded-full blur-3xl pointer-events-none"}),F.jsxs("div",{className:"sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b-2 border-gray-900 px-4 py-3 flex justify-between items-center shadow-lg",children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("div",{className:"bg-gradient-to-tr from-rose-500 to-orange-500 p-2 rounded-lg shadow-md border-2 border-gray-900 shadow-[2px_2px_0_0_#444]",children:F.jsx(Ty,{size:20,className:"text-white"})}),F.jsx("h1",{className:"text-xl font-extrabold text-gray-900 tracking-wider",children:"食神 Qirl"})]}),F.jsxs("div",{className:"flex items-center gap-3",children:[t.length>0&&F.jsxs("button",{onClick:()=>xe(!0),className:"text-xs text-gray-700 hover:text-blue-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5",children:[F.jsx(ud,{size:14})," 历史"]}),t.length>0&&F.jsxs("button",{onClick:()=>H(!0),className:"text-xs text-gray-700 hover:text-red-600 transition-colors px-2 py-1 flex items-center gap-1 border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_#444] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5",children:[F.jsx(gC,{size:14})," 清空"]})]})]}),F.jsxs("div",{className:"p-4 max-w-3xl mx-auto min-h-[60vh]",children:[t.length===0&&!h&&F.jsxs("div",{className:"flex flex-col items-center justify-center mt-24 text-center space-y-6 opacity-90 animate-fade-in",children:[F.jsx("div",{onClick:O,className:"w-24 h-24 bg-white rounded-xl flex items-center justify-center border-2 border-gray-900 shadow-[6px_6px_0_0_#A1A1AA] cursor-pointer hover:shadow-[8px_8px_0_0_#71717A] transition-all group",children:F.jsx(mC,{size:32,className:"text-gray-600 group-hover:text-orange-500 transition-colors"})}),F.jsxs("div",{children:[F.jsx("h3",{className:"text-2xl font-bold text-gray-900",children:"拍摄或上传菜单"}),F.jsx("p",{className:"text-sm text-gray-600 mt-2 max-w-[250px] mx-auto leading-relaxed",children:"点击上方按钮或下方相机按钮，小 Qirl 为您翻译。"})]})]}),t.length>0&&!h&&F.jsxs("div",{onClick:()=>Te("请点击菜品卡片上的 '查看菜品' 按钮进行搜索"),className:"mb-8 p-3 bg-white rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 cursor-pointer hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all",children:[F.jsx(cd,{size:18,className:"text-gray-500"}),F.jsx("span",{className:"text-gray-500 text-sm",children:"搜索已翻译的菜品... (点击菜品卡片查看详情)"})]}),F.jsx("div",{className:"space-y-10 pb-4",children:re.map(B=>F.jsxs("div",{className:"animate-fade-in",children:[F.jsxs("div",{className:"mb-6 pb-3 border-b-4 border-red-500/80",children:[F.jsxs("h2",{className:"text-3xl font-black text-gray-900 tracking-tight flex items-center gap-2",children:[F.jsx(Ty,{size:28,className:"text-red-500"}),RC(B.category)]}),F.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["共 ",B.items.length," 道菜品"]})]}),F.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:B.items.map(q=>{const X=CC(q.pronunciation);return F.jsxs("div",{className:"group relative bg-white border-2 border-gray-900 rounded-xl overflow-hidden transition-all duration-100 shadow-[8px_8px_0_0_#A1A1AA] hover:shadow-[10px_10px_0_0_#71717A]",children:[F.jsxs("div",{className:"bg-gradient-to-br from-amber-100 to-yellow-100 p-4 border-b-2 border-gray-900",children:[F.jsx("h3",{className:"text-xl font-extrabold text-gray-900 leading-tight mb-1",children:q.translation}),F.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1",children:[F.jsx("span",{className:"italic font-medium text-gray-700",children:q.original}),X&&F.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-sm font-semibold uppercase tracking-tight bg-white px-2 py-0.5 rounded-full border border-indigo-200 shadow-sm",children:[F.jsx("span",{className:"text-xs font-medium text-indigo-800",children:X.kana}),X.formattedRomaji&&F.jsxs("span",{className:"text-[11px] font-semibold text-indigo-600",children:["(",X.formattedRomaji,")"]})]})]})]}),F.jsxs("div",{className:"p-4 pt-3 space-y-3 bg-amber-50/70",children:[F.jsx("p",{className:"text-xs text-gray-700 line-clamp-3 leading-relaxed border-l-2 border-orange-400 pl-2",children:q.desc}),F.jsxs("div",{className:"flex justify-between items-center font-mono font-bold pt-2 border-t border-dashed border-gray-300",children:[F.jsxs("div",{className:"flex flex-col items-start",children:[F.jsxs("span",{className:"text-2xl tracking-tight text-red-600",children:[q.currency,q.price," "]}),q.calories&&F.jsxs("span",{className:"text-xs text-gray-600 mt-1 flex items-center gap-1",children:[F.jsx(Cy,{size:12,className:"text-yellow-600 fill-yellow-600"}),"约 ",q.calories," **千卡**"]})]}),F.jsxs("button",{onClick:()=>we(q),className:"px-3 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900 shadow-[3px_3px_0_0_#444] leading-none",children:[F.jsx(cd,{size:16}),"查看菜品"]})]}),F.jsxs("div",{className:"flex items-center justify-between pt-3 mt-1 border-t border-gray-200",children:[F.jsx("button",{onClick:()=>Tt(q.original,q.lang_code),className:"w-10 h-10 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center text-xs font-medium border-2 border-gray-900 shadow-[2px_2px_0_0_#444]",children:F.jsx(wC,{size:18})}),F.jsxs("button",{onClick:()=>A(q),className:"px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900 shadow-[3px_3px_0_0_#444] flex items-center gap-2 leading-none",children:[F.jsx(Sy,{size:16,className:"stroke-[3px]"}),"加入订单"]})]})]})]},q.id)})})]},B.category))})]}),F.jsxs("div",{className:"fixed inset-0 z-50 bg-amber-50/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-fade-in",style:{display:h?"flex":"none"},children:[F.jsxs("div",{className:"relative w-40 h-40 mb-8 flex items-center justify-center",children:[F.jsx("div",{className:"absolute w-full h-full bg-red-200 rounded-full blur-2xl opacity-60 animate-pulse-slow"}),F.jsx("div",{className:"relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-gray-900 shadow-[6px_6px_0_0_#444] transform transition-transform animate-breathe",children:F.jsx(ud,{size:48,className:"text-orange-500 animate-jump-and-spin"})})]}),F.jsx("h2",{className:"text-2xl font-extrabold text-gray-900 mb-3",children:"小 Qirl 正在识别"}),F.jsxs("div",{className:"flex items-center gap-2 text-orange-600 font-mono text-sm bg-orange-100 px-3 py-1 rounded-full border border-orange-300",children:[F.jsx(Iy,{size:14,className:"animate-spin"}),y]})]}),F.jsx("div",{className:"fixed bottom-8 left-0 right-0 flex justify-center z-40 pointer-events-none",children:F.jsxs("button",{onClick:O,disabled:h,className:"pointer-events-auto group relative flex items-center justify-center",children:[F.jsx("div",{className:"absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"}),F.jsx("div",{className:"relative w-20 h-20 bg-gradient-to-tr from-orange-500 to-red-500 text-white rounded-full shadow-[6px_6px_0_0_#444] flex items-center justify-center transform transition-all hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-4 border-gray-900",children:F.jsx(pC,{size:32,className:"drop-shadow-lg"})})]})}),ie>0&&F.jsxs("button",{onClick:()=>S(!0),className:"fixed bottom-10 right-6 z-40 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-[4px_4px_0_0_#444] flex items-center gap-3 hover:bg-gray-100 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900",children:[F.jsxs("div",{className:"relative",children:[F.jsx(Ay,{size:22,className:"text-gray-800"}),F.jsx("span",{className:"absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full font-bold ring-2 ring-white",children:ie})]}),F.jsxs("div",{className:"flex flex-col items-start leading-none",children:[F.jsx("span",{className:"text-[10px] text-gray-500 font-bold uppercase tracking-wider",children:"Total"}),F.jsxs("span",{className:"font-black text-base",children:[F.jsx("span",{className:"text-lg text-gray-500 font-normal mr-1",children:"~"}),V,W]})]})]}),E&&F.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fade-in",children:[F.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>S(!1)}),F.jsxs("div",{className:"bg-white w-full max-w-md rounded-xl p-4 sm:p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] animate-slide-up max-h-[95vh] flex flex-col",children:[F.jsx("div",{className:"w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6 sm:hidden"}),F.jsxs("div",{className:"flex justify-between items-center mb-4 pb-3 border-b-2 border-gray-200",children:[F.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2",children:[F.jsx("div",{className:"p-1 sm:p-2 bg-orange-500/10 rounded-lg text-orange-500 border-2 border-gray-900 shadow-[1px_1px_0_0_#444]",children:F.jsx(vC,{size:18})}),"当前订单"]}),F.jsx("button",{onClick:()=>S(!1),className:"p-1 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors",children:F.jsx(hd,{size:18})})]}),F.jsx("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1",children:o.length===0?F.jsxs("div",{className:"text-center py-8 text-gray-500",children:[F.jsx(Ay,{size:40,className:"mx-auto text-gray-300 mb-3"}),F.jsx("p",{children:"您的餐盘还在等待美食..."})]}):o.map(B=>F.jsxs("div",{className:"flex justify-between items-start bg-gray-50 p-2 rounded-lg border-2 border-gray-900 shadow-[2px_2px_0_0_#444]",children:[F.jsxs("div",{className:"max-w-[65%] leading-tight",children:[F.jsx("div",{className:"font-extrabold text-gray-900 text-base",children:B.originalName}),F.jsx("div",{className:"text-sm font-medium text-gray-800",children:B.name}),B.pronunciation&&F.jsx("div",{className:"text-xs text-indigo-600 font-mono leading-tight mt-0.5",children:B.pronunciation}),F.jsxs("div",{className:"text-red-600 font-mono font-bold text-sm mt-0.5",children:[B.currency,B.price*B.quantity]})]}),F.jsxs("div",{className:"flex items-center gap-2 bg-white rounded-md px-1 py-0.5 border-2 border-gray-900 shadow-[1px_1px_0_0_#444] flex-shrink-0",children:[F.jsx("button",{onClick:()=>$e(B.id),className:"w-6 h-6 rounded-sm bg-gray-200 hover:bg-red-500/20 text-gray-700 hover:text-red-600 flex items-center justify-center transition-colors border-2 border-gray-900 shadow-[0.5px_0.5px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:B.quantity===1?F.jsx(_C,{size:12}):F.jsx(yC,{size:12})}),F.jsx("span",{className:"text-sm font-bold w-3 text-center",children:B.quantity}),F.jsx("button",{onClick:()=>A(t.find(q=>q.id===B.menuItemId)),className:"w-6 h-6 rounded-sm bg-gray-200 hover:bg-green-500/20 text-gray-700 hover:text-green-600 flex items-center justify-center transition-colors border-2 border-gray-900 shadow-[0.5px_0.5px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:F.jsx(Sy,{size:12})})]})]},B.id))}),F.jsxs("div",{className:"mt-4 pt-3 border-t-2 border-gray-200",children:[F.jsxs("div",{className:"flex justify-between items-center mb-4",children:[F.jsx("span",{className:"text-sm text-gray-500",children:"预计总额"}),F.jsxs("span",{className:"text-2xl font-black text-gray-900 tracking-tight",children:[F.jsx("span",{className:"text-sm text-gray-500 font-normal mr-0.5",children:"~"}),V,W]})]}),F.jsx("button",{className:"w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold text-base shadow-[3px_3px_0_0_#444] hover:shadow-[4px_4px_0_0_#444] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none border-2 border-gray-900",onClick:()=>{S(!1),Te("订单已生成！服务员将很快为您服务。")},children:"确认下单"})]})]})]}),He&&F.jsxs("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 animate-fade-in",children:[F.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>xe(!1)}),F.jsxs("div",{className:"bg-white w-full max-w-md rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] animate-slide-up max-h-[85vh] flex flex-col",children:[F.jsx("div",{className:"w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 sm:hidden"}),F.jsxs("div",{className:"flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-4",children:[F.jsxs("h2",{className:"text-xl font-bold text-gray-900 flex items-center gap-3",children:[F.jsx(ud,{size:20,className:"text-blue-500"}),"扫描历史"]}),F.jsx("button",{onClick:()=>xe(!1),className:"p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors",children:F.jsx(hd,{size:20})})]}),F.jsx("div",{className:"flex-1 overflow-y-auto space-y-4 pr-2",children:me.length>0?me.map((B,q)=>F.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_#444]",children:[F.jsx("h3",{className:"font-bold text-gray-900 text-lg mb-1",children:B.name}),F.jsxs("p",{className:"text-sm text-gray-600",children:["共识别 ",B.count," 道菜品。"]}),F.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:["预览: ",B.items.slice(0,3).map(X=>X.translation).join("、"),B.items.length>3?"...":""]}),F.jsx("button",{onClick:()=>Te("点击菜品卡片即可查看或点餐！"),className:"mt-3 text-xs text-blue-500 font-medium hover:text-blue-700",children:"[当前已显示在主菜单]"})]},q)):F.jsx("div",{className:"text-center py-12 text-gray-500",children:"暂无扫描历史。快去拍摄一张菜单吧！"})})]})]}),Z&&F.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[F.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>H(!1)}),F.jsxs("div",{className:"bg-white rounded-xl p-8 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-sm w-full text-center",children:[F.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-4",children:"确认清空菜单？"}),F.jsx("p",{className:"text-gray-600 mb-6",children:"您确定要删除所有扫描的菜单项和购物车内容吗？此操作不可撤销。"}),F.jsxs("div",{className:"flex justify-center gap-4",children:[F.jsx("button",{onClick:()=>H(!1),className:"px-6 py-2 border-2 border-gray-900 rounded-lg text-gray-900 bg-gray-200 hover:bg-gray-300 transition-all shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:"取消"}),F.jsx("button",{onClick:dt,className:"px-6 py-2 border-2 border-gray-900 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-all shadow-[2px_2px_0_0_#444] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",children:"清空全部"})]})]})]}),ye&&F.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[F.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>we(null)}),F.jsxs("div",{className:"bg-white rounded-xl p-6 relative z-50 border-2 border-gray-900 shadow-[6px_6px_0_0_#71717A] max-w-xl w-full flex flex-col h-[80vh]",children:[F.jsxs("div",{className:"flex justify-between items-center border-b-2 border-gray-200 pb-3 mb-4",children:[F.jsxs("h3",{className:"text-xl font-bold text-gray-900 flex items-center gap-2",children:[F.jsx(cd,{size:20,className:"text-blue-500"}),"查看菜品详情"]}),F.jsx("button",{onClick:()=>we(null),className:"p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors",children:F.jsx(hd,{size:20})})]}),F.jsxs("div",{className:"flex flex-col mb-4",children:[F.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"正在搜索的关键词:"}),F.jsxs("div",{className:"font-extrabold text-xl text-gray-900",children:[ye.original," (",ye.translation,")"]})]}),F.jsx("div",{className:"flex-1 border-2 border-gray-900 rounded-lg overflow-hidden shadow-inner bg-gray-100",children:F.jsx("iframe",{src:`https://www.bing.com/images/search?q=${encodeURIComponent(ye.original)}&FORM=RESTAB`,title:`Image Search for ${ye.original}`,className:"w-full h-full border-0",style:{maskImage:"linear-gradient(to bottom, transparent 40px, black 60px)",WebkitMaskImage:"linear-gradient(to bottom, transparent 40px, black 60px)"}})}),F.jsx("p",{className:"text-xs text-gray-500 mt-3 text-center",children:"* 图片搜索结果由外部搜索引擎提供，可能存在偏差。"})]})]}),Ae&&F.jsx("div",{className:"fixed top-20 left-1/2 -translate-x-1/2 z-[60] p-4 bg-white rounded-xl shadow-[4px_4px_0_0_#444] border-2 border-gray-900 animate-slide-down pointer-events-auto max-w-xs sm:max-w-sm",children:F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsx(Cy,{size:20,className:"text-orange-500 fill-orange-500"}),F.jsx("p",{className:"text-sm font-medium text-gray-800",children:Ae})]})}),F.jsx("style",{children:`
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
			`})]})}uw.createRoot(document.getElementById("root")).render(F.jsx(at.StrictMode,{children:F.jsx(kC,{})}));
