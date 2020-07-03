(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),i=(n(0),n(209)),l={id:"grpc",title:"gRPC & Protobuf",sidebar_label:"gRPC"},c={id:"handlers/grpc",isDocsHomePage:!1,title:"gRPC & Protobuf",description:"image",source:"@site/docs/handlers/grpc.md",permalink:"/docs/handlers/grpc",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/grpc.md",sidebar_label:"gRPC",sidebar:"sidebar",previous:{title:"OpenAPI / Swagger",permalink:"/docs/handlers/openapi"},next:{title:"JSON Schema",permalink:"/docs/handlers/json-schema"}},o=[{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79218793-b27dcf00-7e59-11ea-8f0f-df97503f5494.png",alt:"image"}))),Object(i.b)("p",null,"This handler allows you to load ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/"}),"gRPC")," definition files (",Object(i.b)("inlineCode",{parentName:"p"},".proto"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/grpc\n")),Object(i.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: MyGrpcApi\n    handler:\n      grpc:\n        endpoint: localhost:50051\n        protoFilePath: grpc/proto/Example.proto\n        serviceName: Example\n        packageName: io.xtech.example\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can check out our example that uses gRPC Handler.\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/grpc-example"}),"Click here to open the example on GitHub"))),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"endpoint")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - gRPC Endpoint"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"protoFilePath")," -  - gRPC Proto file that contains your protobuf schema (required) One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"file")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"load")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"includeDirs")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"serviceName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Your base service name\nUsed for naming only"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"packageName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Your base package name\nUsed for naming only"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestTimeout")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),") - Request timeout in milliseconds\nDefault: 200000"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"credentialsSsl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),") - SSL Credentials: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rootCA")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"certChain")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"privateKey")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metaData")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),") - MetaData"))))}b.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=b(n),d=r,O=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.a.createElement(O,c({ref:t},p,{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);