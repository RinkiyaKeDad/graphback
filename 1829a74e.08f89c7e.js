(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1082:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1083:function(e,t,n){"use strict";e.exports=n(1084)},1084:function(e,t,n){"use strict";var a=n(1085),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.forward_ref"):60112,b=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,f=r?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=N.prototype=new v;w.constructor=N,a(w,g.prototype),w.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var a,r={},i=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,a)&&!k.hasOwnProperty(a)&&(r[a]=t[a]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];r.children=s}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===r[a]&&(r[a]=l[a]);return{$$typeof:o,type:e,key:i,ref:c,props:r,_owner:C.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var D=/\/+/g,q=[];function T(e,t,n,a){if(q.length){var r=q.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>q.length&&q.push(e)}function I(e,t,n,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var c=!1;if(null===e)c=!0;else switch(r){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(a,e,""===t?"."+A(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+A(r=e[l],l);c+=I(r,s,n,a)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=h&&e[h]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),l=0;!(r=e.next()).done;)c+=I(r=r.value,s=t+A(r,l++),n,a);else if("object"===r)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function E(e,t,n){return null==e?0:I(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,a,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),a.push(e))}function $(e,t,n,a,r){var o="";null!=n&&(o=(""+n).replace(D,"$&/")+"/"),E(e,R,t=T(t,o,a,r)),P(t)}var G={current:null};function U(){var e=G.current;if(null===e)throw Error(y(321));return e}var z={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,n){if(null==e)return e;var a=[];return $(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;E(e,M,t=T(null,null,t,n)),P(t)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(y(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=s,t.PureComponent=N,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var r=a({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(p in t)S.call(t,p)&&!k.hasOwnProperty(p)&&(r[p]=void 0===t[p]&&void 0!==s?s[p]:t[p])}var p=arguments.length-2;if(1===p)r.children=n;else if(1<p){s=Array(p);for(var u=0;u<p;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:o,type:e.type,key:i,ref:c,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1085:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),s=1;s<arguments.length;s++){for(var p in n=Object(arguments[s]))r.call(n,p)&&(l[p]=n[p]);if(a){c=a(n);for(var u=0;u<c.length;u++)o.call(n,c[u])&&(l[c[u]]=n[c[u]])}}return l}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(1083),n(1082)),i={id:"delta-queries",title:"Setting up Delta Queries",sidebar_label:"Setting up Delta Queries"},c={unversionedId:"datasync/delta-queries",id:"datasync/delta-queries",isDocsHomePage:!1,title:"Setting up Delta Queries",description:"It is quite straightforward to setup Delta Queries with an existing Graphback template, by following the steps outlined below:",source:"@site/../docs/datasync/delta-queries.md",slug:"/datasync/delta-queries",permalink:"/docs/next/datasync/delta-queries",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/datasync/delta-queries.md",version:"current",sidebar_label:"Setting up Delta Queries",sidebar:"docs",previous:{title:"Introduction to Data Synchronization",permalink:"/docs/next/datasync/intro"},next:{title:"Setting up Conflict Resolution",permalink:"/docs/next/datasync/conflict-resolution-intro"}},l=[{value:"Setup",id:"setup",children:[{value:"Annotate the required models",id:"annotate-the-required-models",children:[]},{value:"Modify the template to use <code>createDataSyncAPI</code>",id:"modify-the-template-to-use-createdatasyncapi",children:[]}]},{value:"Issuing Delta/Sync queries from client",id:"issuing-deltasync-queries-from-client",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is quite straightforward to setup Delta Queries with an existing Graphback template, by following the steps outlined below:"),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"Create a new Graphback project using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ npx create-graphback datasync-project\n")),Object(o.b)("p",null,"When asked, choose the ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-mongo-server-ts")," template and proceed to the next step when the CLI has finished bootstrapping the project."),Object(o.b)("h3",{id:"annotate-the-required-models"},"Annotate the required models"),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation to your model(s) in your GraphQL SDL found in the ",Object(o.b)("inlineCode",{parentName:"p"},"model")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{3}","{3}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation is used infer if a given model requires Delta Queries. If your business logic requires delete mutations, ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," also ensures that deleted objects are maintained in the database for a given amount of time. This can either be specified by the ",Object(o.b)("em",{parentName:"p"},"optional")," ",Object(o.b)("inlineCode",{parentName:"p"},"ttl")," argument (given in seconds) otherwise defaults to a duration of 2 days (or 172800 seconds) This is done so clients can be informed about deletions in a delta query. The items are eventually deleted using a MongoDB TTL Index."),Object(o.b)("p",null,"In the default configuration, ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," transforms your model by adding a ",Object(o.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," field to it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{9}","{9}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n}\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," field is automatically indexed by Graphback for faster delta queries."))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation adds a ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query or the delta query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  syncComments(lastSync: GraphbackTimestamp!, filter: CommentFilter, limit: Int): CommentDeltaList!\n}\n")),Object(o.b)("p",null,"This allows you to get all the changed documents (updated and deleted) in a collection since the ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp. Internally this uses the ",Object(o.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," database field to check if any documents in the database have been modified, by comparing client provided ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp value."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query also accepts a filter argument for filtering as well as a limit argument for limiting the number of items retrieved."))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation also adds a ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type and a ",Object(o.b)("inlineCode",{parentName:"p"},"DeltaList")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type CommentDelta {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _deleted: Boolean\n}\n\ntype CommentDeltaList {\n  items: [CommentDelta]!\n  lastSync: GraphbackTimestamp!\n  limit: Int\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type for a model consists of all of the model's transformed properties, as well as a ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted")," field which is used internally to mark documents as deleted in the database. Thus ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutations only mark documents with ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted: true")," instead of actually removing them."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DeltaList")," is a container for ",Object(o.b)("inlineCode",{parentName:"p"},"Delta")," type, which also returns a ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp, that can be used in a subsequent ",Object(o.b)("inlineCode",{parentName:"p"},"sync")," query."),Object(o.b)("h3",{id:"modify-the-template-to-use-createdatasyncapi"},"Modify the template to use ",Object(o.b)("inlineCode",{parentName:"h3"},"createDataSyncAPI")),Object(o.b)("p",null,"In the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/templates-release/templates/ts-apollo-mongodb-backend/src/index.ts"}),Object(o.b)("inlineCode",{parentName:"a"},"src/index.ts"))," file of the template, use  ",Object(o.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createDataSyncAPI } from '@graphback/datasync'\n\n\nconst { typeDefs, resolvers, contextCreator } = createDataSyncAPI(modelDefs, { db });;\n")),Object(o.b)("p",null,"The data sources provided by ",Object(o.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," ensure that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The documents are always soft deleted"),Object(o.b)("li",{parentName:"ul"},"In the current configuration, provides out of the box delta queries for models that are annotated with ",Object(o.b)("inlineCode",{parentName:"li"},"@datasync"))),Object(o.b)("h2",{id:"issuing-deltasync-queries-from-client"},"Issuing Delta/Sync queries from client"),Object(o.b)("p",null,"As an example consider the usecase when your application has stayed offline for a while. You can then use the ",Object(o.b)("inlineCode",{parentName:"p"},"sync<Type>s")," query to retrieve only the changed documents rather than having to re-fetch all of the documents."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  syncComments(lastSync: 1590679886048) {\n      items {\n        _id\n        text\n        description\n        _lastUpdatedAt\n        _deleted\n      },\n      lastSync,\n      limit\n  }\n}\n")),Object(o.b)("p",null,"As an example response you might get:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "syncComments": {\n      "items": [\n        {\n          "id": "5ee0a1da7f1f39313744185a",\n          "text": "First!",\n          "description": null,\n          "_lastUpdatedAt": 1591852693075,\n          "_deleted": true\n        },\n        {\n          "id": "5ee0a67345beff3862220be4",\n          "text": "Second!",\n          "description": null,\n          "_lastUpdatedAt": 1591780979988,\n          "_deleted": false\n        }\n      ],\n      "lastSync": "1591852700920",\n      "limit": null\n    }\n  }\n}\n')),Object(o.b)("p",null,"The response is a list of the latest versions of the changed  documents along with a ",Object(o.b)("inlineCode",{parentName:"p"},"_deleted")," flag that is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the document has been deleted since ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise. The response also contains a ",Object(o.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp which can be used in the next ",Object(o.b)("inlineCode",{parentName:"p"},"syncX")," query."),Object(o.b)("p",null,'In the example response, we get that the "First!" comment has been deleted, while another comment "Second!" has been updated.'),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is no support for querying relationships through a delta query, all relationship fields are removed when constructing a delta Type."))),Object(o.b)("p",null,"Taking an example model definition with a ",Object(o.b)("inlineCode",{parentName:"p"},"oneToMany")," relationship from the ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type to the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" \n@model\n@datasync\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n}\n')),Object(o.b)("p",null,"Since the ",Object(o.b)("inlineCode",{parentName:"p"},"Comment")," type has a ",Object(o.b)("inlineCode",{parentName:"p"},"@datasync")," annotation, Graphback will construct a ",Object(o.b)("inlineCode",{parentName:"p"},"CommentDelta")," type as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type CommentDelta {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _deleted: Boolean\n}\n")),Object(o.b)("p",null,"Notice that there are is no relationship field in the ",Object(o.b)("inlineCode",{parentName:"p"},"CommentDelta")," type."))}p.isMDXComponent=!0}}]);