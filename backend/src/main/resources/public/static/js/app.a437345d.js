(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"a925ab5a","chunk-2d0d5c8f":"41dc62b0"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3d86":function(t,e,n){"use strict";n("cbdd")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Hello")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/bootstrap"}},[t._v("Bootstrap")]),t._v(" | "),n("router-link",{attrs:{to:"/user"}},[t._v("User")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},l=Object(s["a"])(i,o,a,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("img",{attrs:{src:n("ad5f")}}),r("h1",[t._v(t._s(t.hellomsg))]),r("h2",[t._v("See the sources here:")]),t._m(0),r("h3",[t._v("This site contains more stuff :)")]),r("ul",[r("li",[r("router-link",{attrs:{to:"/bootstrap"}},[t._v("/bootstrap")])],1),r("li",[t._v("HowTo to interact with the Spring Boot database backend:")])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/nick800103/spring-vue-test",target:"_blank"}},[t._v("github.com/jonashackt/spring-boot-vuejs")])])])}],f={name:"hello",props:{hellomsg:{type:String,required:!0}}},b=f,h=(n("3d86"),Object(s["a"])(b,p,d,!1,null,"b501d684",null)),v=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bootstrap"},[n("h1",[t._v(t._s(t.msg))]),n("h5",[t._v(" REST service call are easy to do with Vue.js, if you know how to do it. ")]),n("p"),n("h6",[n("b-badge",{attrs:{variant:"primary"}},[t._v(" Let´s go!")]),t._v(" Call a Spring Boot REST backend service, by clicking a button: ")],1),n("p"),n("b-btn",{attrs:{variant:"success",id:"btnCallHello"},on:{click:function(e){return t.callHelloApi()}}},[t._v("/hello (GET)")]),n("p"),n("h4",[t._v(" Backend response: "),n("b-alert",{attrs:{show:t.showResponse,dismissible:""},on:{dismissed:function(e){t.showResponse=!1}}},[t._v(t._s(t.backendResponse))])],1),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}]},[t._v("Show Response details")]),n("p"),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1"}},[n("b-card",[n("p",{staticClass:"card-text"},[t._v("The Response hat this details")]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1_inner",modifiers:{collapse1_inner:!0}}],attrs:{size:"sm",variant:"primary"}},[t._v("HTTP Status")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1_inner"}},[n("b-card",[t._v("Status: "+t._s(t.httpStatusCode))]),n("b-card",[t._v("Statustext: "+t._s(t.httpStatusText))])],1),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2_inner",modifiers:{collapse2_inner:!0}}],attrs:{size:"sm",id:"btnHttpHeaders",variant:"warning"}},[t._v("HTTP Headers")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse2_inner"}},[t.headers&&t.headers.length?n("ul",t._l(t.headers,(function(e){return n("li",{key:e.id},[n("b-card",[t._v("Header: "+t._s(e.msg))])],1)})),0):t._e()]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse3_inner",modifiers:{collapse3_inner:!0}}],attrs:{size:"sm",variant:"danger"}},[t._v("Full Request configuration")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse3_inner"}},[n("p",{staticClass:"card-text"},[t._v("Config: "+t._s(t.fullResponse.config))])])],1)],1),n("b-tooltip",{attrs:{target:"btnHttpHeaders",title:"You should always know your HTTP Headers!"}})],1)},g=[],_=n("bc3a"),w=n.n(_),y=w.a.create({baseURL:"/api",timeout:1e3}),k={hello:function(){return y.get("/hello")},getUser:function(t){return y.get("/user/"+t)},createUser:function(t,e){return y.post("/user/"+t+"/"+e)}},S={name:"bootstrap",data:function(){return{msg:"Nice Bootstrap candy!",showResponse:!1,backendResponse:"",fullResponse:{config:{foo:"",bar:""}},httpStatusCode:"",httpStatusText:"",headers:[{msg:"Noting here atm. Did you call the Service?",id:1}],errors:[]}},methods:{callHelloApi:function(){var t=this;k.hello().then((function(e){t.backendResponse=e.data,t.httpStatusCode=e.status,t.httpStatusText=e.statusText,t.headers=e.headers,t.fullResponse=e,t.showResponse=!0})).catch((function(e){t.errors.push(e)}))}}},T=S,j=(n("7ede"),Object(s["a"])(T,m,g,!1,null,"1648a530",null)),x=j.exports;r["default"].use(u["a"]);var C=[{path:"/",name:"Hello",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/bootstrap",name:"Bootstrap",component:x},{path:"/user",name:"User",component:function(){return n.e("chunk-2d0d5c8f").then(n.bind(null,"7088"))}}],H=new u["a"]({mode:"history",base:"/",routes:C}),R=H,O=n("5f5b");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(O["a"]),new r["default"]({router:R,render:function(t){return t(c)}}).$mount("#app")},"7ede":function(t,e,n){"use strict";n("990c")},"85ec":function(t,e,n){},"990c":function(t,e,n){},ad5f:function(t,e,n){t.exports=n.p+"static/img/spring-boot-vuejs-logo.00da5c74.png"},cbdd:function(t,e,n){}});
//# sourceMappingURL=app.a437345d.js.map