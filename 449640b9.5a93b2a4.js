(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{184:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(322)),i={id:"overview",title:"Plugins Overview",sidebar_label:"Overview"},c={id:"plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries.",source:"@site/../docs/plugins/overview.md",permalink:"/docs/next/plugins/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/overview.md",version:"next",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Running an API without code",permalink:"/docs/next/graphqlserve/graphqlserve"},next:{title:"SchemaCRUD Plugin",permalink:"/docs/next/plugins/crud-schema"},latestVersionMainDocPermalink:"/docs/introduction"},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries."),Object(o.b)("p",null,"Plugins are executed in the order that are defined in the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," array. Each plugin passes its modified version of the GraphQL schema to the next, making incremental changes to the schema and outputs the final schema once the plugin chain is complete."),Object(o.b)("p",null,"Graphback offers a standard suite of plugins you can use to generate a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," compliant schema, resolvers and client documents."))}l.isMDXComponent=!0},322:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);