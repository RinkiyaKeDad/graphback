(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=o.a.createContext({}),l=function(e){var r=o.a.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(f.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=l(t),y=n,m=s["".concat(u,".").concat(y)]||s[y]||p[y]||c;return t?o.a.createElement(m,a(a({ref:r},f),{},{components:t})):o.a.createElement(m,a({ref:r},f))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,u=new Array(c);u[0]=y;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var f=2;f<c;f++)u[f]=t[f];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||v}function w(){}function _(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=O.prototype;var j=_.prototype=new w;j.constructor=_,n(j,O.prototype),j.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,o={},u=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)k.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var f=Array(i),l=0;l<i;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:u,ref:a,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g,$=[];function R(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function T(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case c:case u:a=!0}}if(a)return t(n,e,""===r?"."+F(e,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=r+F(o=e[i],i);a+=T(o,f,t,n)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=b&&e[b]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),i=0;!(o=e.next()).done;)a+=T(o=o.value,f=r+F(o,i++),t,n);else if("object"===o)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return a}function D(e,r,t){return null==e?0:T(e,"",r,t)}function F(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function A(e,r){e.func.call(e.context,r,e.count++)}function N(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var c="";null!=t&&(c=(""+t).replace(C,"$&/")+"/"),D(e,N,r=R(r,c,n,o)),I(r)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,A,r=R(null,null,r,t)),I(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(h(143));return e}},r.Component=O,r.Fragment=a,r.Profiler=f,r.PureComponent=_,r.StrictMode=i,r.Suspense=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var o=n({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=S.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in r)k.call(r,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==f?f[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:c,type:e.type,key:u,ref:a,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:m,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,a,i=u(e),f=1;f<arguments.length;f++){for(var l in t=Object(arguments[f]))o.call(t,l)&&(i[l]=t[l]);if(n){a=n(t);for(var s=0;s<a.length;s++)c.call(t,a[s])&&(i[a[s]]=t[a[s]])}}return i}},261:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(6),c=(t(1083),t(1082)),u={id:"_writer_schemaformatter_",title:"writer/SchemaFormatter",sidebar_label:"writer/SchemaFormatter"},a={unversionedId:"api/graphback-codegen-schema/modules/_writer_schemaformatter_",id:"api/graphback-codegen-schema/modules/_writer_schemaformatter_",isDocsHomePage:!1,title:"writer/SchemaFormatter",description:"Index",source:"@site/../docs/api/graphback-codegen-schema/modules/_writer_schemaformatter_.md",slug:"/api/graphback-codegen-schema/modules/_writer_schemaformatter_",permalink:"/docs/next/api/graphback-codegen-schema/modules/_writer_schemaformatter_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-schema/modules/_writer_schemaformatter_.md",version:"current",sidebar_label:"writer/SchemaFormatter"},i=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]}]}],f={rightToc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},f,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-schema/interfaces/_writer_schemaformatter_.schemaformatter"}),"SchemaFormatter"))))}l.isMDXComponent=!0}}]);