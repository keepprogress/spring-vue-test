(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},s={app:0},a=[];function i(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-0c56d5e3":"ac6ebbdd","chunk-2d0a386c":"1eec41de","chunk-2d0c8e41":"5e6d2cc2"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-0c56d5e3":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+"."+{"chunk-0c56d5e3":"18d2da83","chunk-2d0a386c":"31d6cfe0","chunk-2d0c8e41":"31d6cfe0"}[e]+".css",s=c.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],p.parentNode.removeChild(p),r(a)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Hello")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("router-link",{attrs:{to:"/bootstrap"}},[e._v("Bootstrap")]),e._v(" | "),r("router-link",{attrs:{to:"/user"}},[e._v("User")]),e._v("| "),r("router-link",{attrs:{to:"/protected"}},[e._v("Protected")]),e._v("| "),r("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),r("router-view",{attrs:{hellomsg:e.msg}})],1)},s=[],a={name:"app",data:function(){return{msg:"Welcome to your Vue.js powered Spring Boot App"}}},i=a,c=(r("5c0b"),r("2877")),u=Object(c["a"])(i,o,s,!1,null,null,null),l=u.exports,d=(r("45fc"),r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("img",{attrs:{src:r("ad5f")}}),n("h1",[e._v(e._s(e.hellomsg))]),n("h2",[e._v("See the sources here:")]),e._m(0),n("h3",[e._v("This site contains more stuff :)")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/bootstrap"}},[e._v("/bootstrap")])],1),n("li",[e._v("HowTo to interact with the Spring Boot database backend:")])])])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/keepprogress/spring-vue-test",target:"_blank"}},[e._v("github.com/keepprogress/spring-vue-test")])])])}],h={name:"hello",props:{hellomsg:{type:String,required:!0}}},g=h,m=(r("9e64"),Object(c["a"])(g,p,f,!1,null,"932c2a20",null)),v=m.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bootstrap"},[r("h1",[e._v(e._s(e.msg))]),r("h5",[e._v(" REST service call are easy to do with Vue.js, if you know how to do it. ")]),r("p"),r("h6",[r("b-badge",{attrs:{variant:"primary"}},[e._v(" Let´s go!")]),e._v(" Call a Spring Boot REST backend service, by clicking a button: ")],1),r("p"),r("b-btn",{attrs:{variant:"success",id:"btnCallHello"},on:{click:function(t){return e.callHelloApi()}}},[e._v("/hello (GET)")]),r("p"),r("h4",[e._v(" Backend response: "),r("b-alert",{attrs:{show:e.showResponse,dismissible:""},on:{dismissed:function(t){e.showResponse=!1}}},[e._v(e._s(e.backendResponse))])],1),r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}]},[e._v("Show Response details")]),r("p"),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1"}},[r("b-card",[r("p",{staticClass:"card-text"},[e._v("The Response hat this details")]),r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1_inner",modifiers:{collapse1_inner:!0}}],attrs:{size:"sm",variant:"primary"}},[e._v("HTTP Status")]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1_inner"}},[r("b-card",[e._v("Status: "+e._s(e.httpStatusCode))]),r("b-card",[e._v("Statustext: "+e._s(e.httpStatusText))])],1),r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2_inner",modifiers:{collapse2_inner:!0}}],attrs:{size:"sm",id:"btnHttpHeaders",variant:"warning"}},[e._v("HTTP Headers")]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse2_inner"}},[e.headers&&e.headers.length?r("ul",e._l(e.headers,(function(t){return r("li",{key:t.id},[r("b-card",[e._v("Header: "+e._s(t.msg))])],1)})),0):e._e()]),r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse3_inner",modifiers:{collapse3_inner:!0}}],attrs:{size:"sm",variant:"danger"}},[e._v("Full Request configuration")]),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse3_inner"}},[r("p",{staticClass:"card-text"},[e._v("Config: "+e._s(e.fullResponse.config))])])],1)],1),r("b-tooltip",{attrs:{target:"btnHttpHeaders",title:"You should always know your HTTP Headers!"}})],1)},_=[],w=r("be71"),y={name:"bootstrap",data:function(){return{msg:"Nice Bootstrap candy!",showResponse:!1,backendResponse:"",fullResponse:{config:{foo:"",bar:""}},httpStatusCode:"",httpStatusText:"",headers:[{msg:"Noting here atm. Did you call the Service?",id:1}],errors:[]}},methods:{callHelloApi:function(){var e=this;w["a"].hello().then((function(t){e.backendResponse=t.data,e.httpStatusCode=t.status,e.httpStatusText=t.statusText,e.headers=t.headers,e.fullResponse=t,e.showResponse=!0})).catch((function(t){e.errors.push(t)}))}}},k=y,S=(r("7ede"),Object(c["a"])(k,b,_,!1,null,"1648a530",null)),E=S.exports,T=r("2f62");n["default"].use(T["a"]);var C=new T["a"].Store({state:{loginSuccess:!1,loginError:!1,userName:null},actions:{login:function(e,t){var r=e.commit,n=t.user,o=t.password;return new Promise((function(e,t){console.log("Accessing backend with user: '"+n),w["a"].getSecured(n,o).then((function(t){console.log("Response: '"+t.data+"' with Statuscode "+t.status),200===t.status&&(console.log("Login successful"),r("login_success",{userName:n,userPass:o})),e(t)})).catch((function(e){console.log("Error: "+e),r("login_error",{userName:n}),t(new Error("Invalid credentials!"))}))}))}},mutations:{loginSuccess:function(e,t){e.loginSuccess=!0,e.username=t},loginError:function(e){e.loginError=!0,e.userName=name}},getters:{isLoggedin:function(e){return e.loginSuccess},hasLoginErrored:function(e){return e.loginError}}});n["default"].use(d["a"]);var x=new d["a"]({mode:"history",routes:[{path:"/",component:v},{path:"/bootstrap",component:E},{path:"/user",component:function(){return r.e("chunk-0c56d5e3").then(r.bind(null,"7088"))}},{path:"/login",component:function(){return r.e("chunk-2d0c8e41").then(r.bind(null,"578a"))}},{path:"/protected",component:function(){return r.e("chunk-2d0a386c").then(r.bind(null,"030c"))},meta:{requiresAuth:!0}},{path:"*",redirect:"/"}]});x.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?C.getters.isLoggedIn?r():r({path:"/login"}):r()}));var j=x,R=r("5f5b");r("f9e3"),r("2dd8");n["default"].config.productionTip=!1,n["default"].use(R["a"]),new n["default"]({router:j,store:C,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"7ede":function(e,t,r){"use strict";r("990c")},"990c":function(e,t,r){},"9b99":function(e,t,r){},"9c0c":function(e,t,r){},"9e64":function(e,t,r){"use strict";r("9b99")},ad5f:function(e,t,r){e.exports=r.p+"static/img/spring-boot-vuejs-logo.00da5c74.png"},be71:function(e,t,r){"use strict";var n=r("bc3a"),o=r.n(n),s=o.a.create({baseURL:"/api",timeout:1e3});t["a"]={hello:function(){return s.get("/hello")},getUser:function(e){return s.get("/user/"+e)},createUser:function(e,t){return s.post("/user/"+e+"/"+t)},getSecured:function(e,t){return s.get("/secured/",{auth:{username:e,password:t}})}}}});
//# sourceMappingURL=app.c0f89056.js.map