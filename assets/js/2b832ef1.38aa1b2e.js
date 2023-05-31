"use strict";(self.webpackChunk_mondrian_framework_docs=self.webpackChunk_mondrian_framework_docs||[]).push([[376],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,u=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return r?n.createElement(u,a(a({ref:t},p),{},{components:r})):n.createElement(u,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7896),o=(r(2784),r(876));const i={},a="Projections",c={unversionedId:"docs/model/projection",id:"docs/model/projection",title:"Projections",description:"Project",source:"@site/docs/docs/model/05-projection.md",sourceDirName:"docs/model",slug:"/docs/model/projection",permalink:"/mondrian-framework/docs/docs/model/projection",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Decode",permalink:"/mondrian-framework/docs/docs/model/decode"},next:{title:"Typing",permalink:"/mondrian-framework/docs/docs/model/typing"}},s={},l=[{value:"Project",id:"project",level:2},{value:"Merge Projection",id:"merge-projection",level:2},{value:"Sub Projection",id:"sub-projection",level:2},{value:"Reference",id:"reference",level:2}],p={toc:l},d="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projections"},"Projections"),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("h2",{id:"merge-projection"},"Merge Projection"),(0,o.kt)("h2",{id:"sub-projection"},"Sub Projection"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"#objects"},"objects")," chapter, we showed how to compose different schemas into complex objects, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Address"),"."),(0,o.kt)("p",null,"There are situations where, when defining a domain model, it is useful to specify that the included type does not represent an attribute but a reference to another type. The semantic difference lies in the fact that a reference is not meant to be a primary characteristic of the entity, but rather a link to another entity."),(0,o.kt)("p",null,"From a practical point of view, the decorator that identifies a reference has no effect on the generated type and its validation. It is only considered in the definition of type projection, specifically references are not included in the default projection to avoid loading a too large or infinite graph in case of recursions."),(0,o.kt)("p",null,"A reference is defined using a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"reference")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"const Post = m.object({\n  id: m.integer(),\n  title: m.string(),\n})\n\nconst User = m.object({\n  id: m.integer(),\n  name: m.string(),\n  surname: m.string(),\n  // highlight-start\n  posts: m.reference(Post.array().optional()),\n  // highlight-end\n})\n")))}f.isMDXComponent=!0}}]);