(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},o={app:0},a=[];function c(t){return i.p+"static/js/"+({}[t]||t)+"."+{"chunk-2d0a386c":"bb18d5f9","chunk-2d0aed75":"7d23ce35","chunk-2d22d746":"e2ca7be8","chunk-5c7d6157":"fe56c181","chunk-62daf80f":"6e8460fc","chunk-749b7af4":"6ca2adf9"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-5c7d6157":1,"chunk-749b7af4":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var r="static/css/"+({}[t]||t)+"."+{"chunk-2d0a386c":"31d6cfe0","chunk-2d0aed75":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-5c7d6157":"7cc01b03","chunk-62daf80f":"31d6cfe0","chunk-749b7af4":"0eba1540"}[t]+".css",o=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[t],p.parentNode.removeChild(p),n(a)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"086f":function(t,e,n){},5389:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"app",data:function(){return{msg:"Welcome to your Vue.js powered Spring Boot App"}}},c=a,i=(n("5c0b"),n("2877")),u=Object(i["a"])(c,s,o,!1,null,null,null),l=u.exports,d=(n("45fc"),n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("img",{attrs:{src:n("ad5f")}}),r("h1",[t._v(t._s(t.hellomsg))]),r("h2",[t._v("See the sources here:")]),t._m(0),r("h3",[t._v("This site contains more stuff :)")]),r("div",{staticClass:"row"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[r("router-link",{attrs:{to:"login"}},[t._v("Administrater or Authorized User click here")])],1),r("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[r("router-link",{attrs:{to:"admin/products"}},[t._v("Operation staff click here(doesn't require password)")])],1)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/keepprogress/spring-vue-test",target:"_blank"}},[t._v("github.com/keepprogress/spring-vue-test")])])])}],h={name:"hello",props:{hellomsg:{type:String,required:!0}}},b=h,g=(n("9ab3"),Object(i["a"])(b,p,f,!1,null,"3ec45e91",null)),m=g.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bootstrap"},[n("h1",[t._v(t._s(t.msg))]),n("h5",[t._v(" REST service call are easy to do with Vue.js, if you know how to do it. ")]),n("p"),n("h6",[n("b-badge",{attrs:{variant:"primary"}},[t._v(" Let´s go!")]),t._v(" Call a Spring Boot REST backend service, by clicking a button: ")],1),n("p"),n("b-btn",{attrs:{variant:"success",id:"btnCallHello"},on:{click:function(e){return t.callHelloApi()}}},[t._v("/hello (GET)")]),n("p"),n("h4",[t._v(" Backend response: "),n("b-alert",{attrs:{show:t.showResponse,dismissible:""},on:{dismissed:function(e){t.showResponse=!1}}},[t._v(t._s(t.backendResponse))])],1),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}]},[t._v("Show Response details")]),n("p"),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1"}},[n("b-card",[n("p",{staticClass:"card-text"},[t._v("The Response hat this details")]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1_inner",modifiers:{collapse1_inner:!0}}],attrs:{size:"sm",variant:"primary"}},[t._v("HTTP Status")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1_inner"}},[n("b-card",[t._v("Status: "+t._s(t.httpStatusCode))]),n("b-card",[t._v("Statustext: "+t._s(t.httpStatusText))])],1),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2_inner",modifiers:{collapse2_inner:!0}}],attrs:{size:"sm",id:"btnHttpHeaders",variant:"warning"}},[t._v("HTTP Headers")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse2_inner"}},[t.headers&&t.headers.length?n("ul",t._l(t.headers,(function(e){return n("li",{key:e.id},[n("b-card",[t._v("Header: "+t._s(e.msg))])],1)})),0):t._e()]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse3_inner",modifiers:{collapse3_inner:!0}}],attrs:{size:"sm",variant:"danger"}},[t._v("Full Request configuration")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse3_inner"}},[n("p",{staticClass:"card-text"},[t._v("Config: "+t._s(t.fullResponse.config))])])],1)],1),n("b-tooltip",{attrs:{target:"btnHttpHeaders",title:"You should always know your HTTP Headers!"}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Primary")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("Secondary")]),n("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Success")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("Danger")]),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"}},[t._v("Warning")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v("Info")]),n("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v("Light")]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Dark")]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"}},[t._v("Link")])],1)},_=[],y=n("6770"),k={name:"bootstrap",data:function(){return{msg:"Nice Bootstrap candy!",showResponse:!1,backendResponse:"",fullResponse:{config:{foo:"",bar:""}},httpStatusCode:"",httpStatusText:"",headers:[{msg:"Noting here atm. Did you call the Service?",id:1}],errors:[]}},methods:{callHelloApi:function(){var t=this;y["a"].hello().then((function(e){t.backendResponse=e.data,t.httpStatusCode=e.status,t.httpStatusText=e.statusText,t.headers=e.headers,t.fullResponse=e,t.showResponse=!0})).catch((function(e){t.errors.push(e)}))}}},w=k,S=(n("d826"),Object(i["a"])(w,v,_,!1,null,"cb46cee8",null)),C=S.exports,E=n("2f62");r["default"].use(E["a"]);var T=new E["a"].Store({state:{loginSuccess:!1,loginError:!1,userName:null,userPass:null},actions:{login:function(t,e){var n=t.commit,r=e.user,s=e.password;return new Promise((function(t,e){console.log("Accessing backend with user: '"+r),y["a"].getSecured(r,s).then((function(e){console.log("Response: '"+e.data+"' with Statuscode "+e.status),200===e.status&&(console.log("Login successful"),n("loginSuccess",{userName:r,userPass:s})),t(e)})).catch((function(t){console.log("Error: "+t),n("loginError",{userName:r}),e(new Error("Invalid credentials!"))}))}))}},mutations:{loginSuccess:function(t,e){t.loginSuccess=!0,t.username=e.userName},loginError:function(t,e){t.loginError=!0,t.userName=e.userName}},getters:{isLoggedIn:function(t){return t.loginSuccess},hasLoginErrored:function(t){return t.loginError}}});r["default"].use(d["a"]);var x=new d["a"]({mode:"history",routes:[{path:"/",component:m},{path:"/login",component:function(){return n.e("chunk-749b7af4").then(n.bind(null,"2ab8"))}},{path:"/admin",component:function(){return n.e("chunk-2d0aed75").then(n.bind(null,"0c7c"))},children:[{path:"products",name:"Products",component:function(){return n.e("chunk-62daf80f").then(n.bind(null,"2b21"))}},{path:"bootstrap",component:C},{path:"user",component:function(){return n.e("chunk-5c7d6157").then(n.bind(null,"7088"))}},{path:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"protected",component:function(){return n.e("chunk-2d0a386c").then(n.bind(null,"030c"))},meta:{requiresAuth:!0}}]},{path:"*",redirect:"/"}]});x.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))?(console.log("Needs Authorization Here!"),T.getters.isLoggedIn?n():n({path:"/login"})):n()}));var N=x,P=n("5f5b");n("f9e3"),n("2dd8"),n("68df");r["default"].config.productionTip=!1,r["default"].use(P["a"]),new r["default"]({router:N,store:T,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6770:function(t,e,n){"use strict";var r=n("bc3a"),s=n.n(r),o=s.a.create({baseURL:"/api",timeout:1e3});e["a"]={hello:function(){return o.get("/hello")},getUser:function(t){return o.get("/user/"+t)},createUser:function(t,e){return o.post("/user/"+t+"/"+e)},getSecured:function(t,e){return o.get("/secured/",{auth:{username:t,password:e}})}}},"68df":function(t,e,n){},"9ab3":function(t,e,n){"use strict";n("5389")},"9c0c":function(t,e,n){},ad5f:function(t,e,n){t.exports=n.p+"static/img/spring-boot-vuejs-logo.00da5c74.png"},d826:function(t,e,n){"use strict";n("086f")}});
//# sourceMappingURL=app.d62ca60c.js.map