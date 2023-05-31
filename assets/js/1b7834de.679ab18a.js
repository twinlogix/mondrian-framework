"use strict";(self.webpackChunk_mondrian_framework_docs=self.webpackChunk_mondrian_framework_docs||[]).push([[192],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7896),i=(n(2784),n(876));const a={sidebar_position:1},o="Introduction",l={unversionedId:"docs/introduction",id:"docs/introduction",title:"Introduction",description:"Mondrian is a framework for building modular server-side applications ready to evolve. It is primarily a conceptual framework that encompasses a set of well-defined abstractions for designing a modern, feature-rich backend application with characteristics such as modularity, cohesion, separation of concerns, information hiding and loose coupling. It also combines elements of FP (Functional Programming) and FRP (Functional Reactive Programming) with mainstream PP (Procedural Programmin) to minimize errors resulting from improper state management and unwanted side effects.",source:"@site/docs/docs/introduction.md",sourceDirName:"docs",slug:"/docs/introduction",permalink:"/mondrian-framework/docs/docs/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Conceptual framework",permalink:"/mondrian-framework/docs/docs/conceptual-framework"}},s={},c=[{value:"Mission",id:"mission",level:2},{value:"Foundations",id:"foundations",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Features",id:"features",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Mondrian is a framework for building modular server-side applications ready to evolve. It is primarily a ",(0,i.kt)("a",{parentName:"p",href:"/mondrian-framework/docs/docs/conceptual-framework"},"conceptual framework")," that encompasses a set of well-defined abstractions for designing a modern, feature-rich backend application with characteristics such as modularity, cohesion, separation of concerns, information hiding and loose coupling. It also combines elements of FP (Functional Programming) and FRP (Functional Reactive Programming) with mainstream PP (Procedural Programmin) to minimize errors resulting from improper state management and unwanted side effects."),(0,i.kt)("p",null,"Its current implementation is written in ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," for ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," (",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno")," and ",(0,i.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," compatibility is still in progress). While it is fully interoperable with any JavaScript package, it heavily relies on Typescript dynamic typing to leverage its full potential and provide developers with user-friendly constructs."),(0,i.kt)("h2",{id:"mission"},"Mission"),(0,i.kt)("p",null,"Mondrian Framework mission is to enable developers to build ",(0,i.kt)("strong",null,"better software ready to evolve"),"."),(0,i.kt)("p",null,"To accomplish this ambitious goal we believe software needs to be splitted in small, cohesive and decoupled parts, with well defined boundaries built on solid abstractions. Such parts are commonly named modules."),(0,i.kt)("h2",{id:"foundations"},"Foundations"),(0,i.kt)("p",null,"Mondrian Framework is designed on rock solid design principles heavily inspired by the following books:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"Clean Architecture")," by Robert C. Martin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://martinfowler.com/bliki/DomainDrivenDesign.html"},"Domain-Driven Design")," by Eric Evans and Martin Fowler"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.davefarley.net/?p=352"},"Modern Software Engineering")," by David Farley")),(0,i.kt)("p",null,"It also naturally stems from a decade-long experience in software development and draws inspiration from various other frameworks and libraries already existing in the modern development landscape."),(0,i.kt)("h2",{id:"design-principles"},"Design principles"),(0,i.kt)("p",null,"There are various well known best practices in software engineering, many of which are extensively discussed in reference texts. Although they are accepted and teached by most organizations, they often go unapplied in practice for various reasons, typically unjustifiable. "),(0,i.kt)("p",null,"One of the goals of Mondrian Framework is to guide developers towards the systematic and almost automatic application of these practices to produce software with the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",null,"Modularity"),": the degree to which a system\u2019s components may be separated and recombined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",null,"Cohesion"),": the degree to which the elements inside a module belong together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",null,"Separation of concerns"),": design principle that manages complexity by partitioning the software system so that each partition is responsible for a separate concern, minimizing the overlap of concerns as much as possible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",null,"Information hiding"),": the process of removing details or attributes in the study of a system to focus attention on details of greater importance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",null,"Loose coupling"),": the degree to which components are weakly associated (have breakable relationships) with each other.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Following a list of the main features of Mondrian Framework:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model schema definition"),(0,i.kt)("li",{parentName:"ul"},"Validation using given or custom validators"),(0,i.kt)("li",{parentName:"ul"},"Custom scalars definition"),(0,i.kt)("li",{parentName:"ul"},"Model projection types and utilities"),(0,i.kt)("li",{parentName:"ul"},"Function definition"),(0,i.kt)("li",{parentName:"ul"},"Multiple API server generation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"REST, with OpenAPI specification "),(0,i.kt)("li",{parentName:"ul"},"GraphQL, both schema and resolvers"),(0,i.kt)("li",{parentName:"ul"},"gRPC, including Protobuf definition"),(0,i.kt)("li",{parentName:"ul"},"others from the community"))),(0,i.kt)("li",{parentName:"ul"},"Multiple non-API runners",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Running from messages (AWS SQS, ...)"),(0,i.kt)("li",{parentName:"ul"},"Running from notifications (AWS SNS, ...)"),(0,i.kt)("li",{parentName:"ul"},"Scheduled cron-like execution"),(0,i.kt)("li",{parentName:"ul"},"others from the community"))),(0,i.kt)("li",{parentName:"ul"},"Multiple runtimes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Container based"),(0,i.kt)("li",{parentName:"ul"},"AWS Lambda"),(0,i.kt)("li",{parentName:"ul"},"others from the community\n","[//]",": #- Basic RBAC security framework\n","[//]",": #- Advanced resource based security framework"))),(0,i.kt)("li",{parentName:"ul"},"Automatic client SDK generation"),(0,i.kt)("li",{parentName:"ul"},"Dependency Injection"),(0,i.kt)("li",{parentName:"ul"},"Exception management "),(0,i.kt)("li",{parentName:"ul"},"Built-in mocking"),(0,i.kt)("li",{parentName:"ul"},"Built-in logging"),(0,i.kt)("li",{parentName:"ul"},"Built-in metrics"),(0,i.kt)("li",{parentName:"ul"},"Built-in tracing "),(0,i.kt)("li",{parentName:"ul"},"100% TypeScript")))}m.isMDXComponent=!0}}]);