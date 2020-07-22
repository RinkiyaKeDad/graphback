(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{183:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return p})),n.d(e,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(322)),i={id:"intro",title:"Authentication and authorization for Graphback",sidebar_label:"Introduction"},c={id:"authentication/intro",isDocsHomePage:!1,title:"Authentication and authorization for Graphback",description:"Graphback integration allows developers to use their own authentication and autorization solution.",source:"@site/../docs/authentication/authentication.md",permalink:"/docs/next/authentication/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/authentication/authentication.md",version:"next",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Subscriptions",permalink:"/docs/next/subscriptions/intro"},next:{title:"Authentication with Keycloak",permalink:"/docs/next/authentication/keycloak"},latestVersionMainDocPermalink:"/docs/introduction"},p=[{value:"Out of the box Authorization on top of the Graphback",id:"out-of-the-box-authorization-on-top-of-the-graphback",children:[]}],u={rightToc:p};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback integration allows developers to use their own authentication and autorization solution.\nGraphback will work with any existing Node.js library like Express or Fastify thus any authentication library\nthat works on top of those framework will be supported. "),Object(a.b)("p",null,"For authorization developers can write their own class that extends ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackProxyService")," abstraction.\n",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackProxyService")," allows developers to wrap any other services by giving ability to execute\npre and post crud operation handlers. Pre and post operations can be used to provide autorization rules\nand prevent from unautorized access."),Object(a.b)("h2",{id:"out-of-the-box-authorization-on-top-of-the-graphback"},"Out of the box Authorization on top of the Graphback"),Object(a.b)("p",null,"Graphback recomends using following authorization libraries"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.passportjs.org/"}),"Passport.js")," if you looking for in application authorization and authentication mechanisms."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.keycloak.org/"}),"Keycloak")," SSO - Standalone SSO server offering integration with various social OAuth logins and federating users.")),Object(a.b)("p",null,"Graphback provides out of the box support for Keycloak SSO thanks to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/keycloak-authz"}),"@graphback/keycloak-authz")," that utilizes\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/keycloak-connect-graphql"}),"https://github.com/aerogear/keycloak-connect-graphql")," library"))}l.isMDXComponent=!0},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),l=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},h=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=l(n),h=r,d=s["".concat(i,".").concat(h)]||s[h]||b[h]||a;return n?o.a.createElement(d,c(c({ref:e},u),{},{components:n})):o.a.createElement(d,c({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);