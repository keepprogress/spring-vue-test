(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8e41"],{"578a":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.loginSuccess?s("div",{staticClass:"protected"},[s("h1",[s("b-badge",{attrs:{variant:"success"}},[e._v("Access to protected site granted!")])],1),s("h5",[e._v("If you're able to read this, you've successfully logged in.")])]):e.loginError?s("div",{staticClass:"unprotected"},[s("h1",[s("b-badge",{attrs:{variant:"danger"}},[e._v("You don't have rights here, mate :D")])],1),s("h5",[e._v("Seams that you don't have access rights...")])]):s("div",{staticClass:"unprotected"},[s("h1",[s("b-badge",{attrs:{variant:"info"}},[e._v("Please login to get access!")])],1),s("h5",[e._v("You're not logged in - so you don't see much here. Try to log in:")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.callLogin()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"text",placeholder:"username"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("b-btn",{attrs:{variant:"success",type:"submit"}},[e._v("Login")]),e.error?s("p",{staticClass:"error"},[e._v("Bad login information")]):e._e()],1)])},r=[],a=s("be71"),n={name:"login",data:function(){return{loginSuccess:!1,loginError:!1,user:"",password:"",error:!1}},methods:{callLogin:function(){var e=this;a["a"].getSecured(this.user,this.password).then((function(t){console.log("Response: '"+t.data+"' with Statuscode "+t.status),200===t.status&&(e.loginSuccess=!0)})).catch((function(t){console.log("Error: "+t),e.loginError=!0}))}}},i=n,u=s("2877"),c=Object(u["a"])(i,o,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c8e41.3c29174a.js.map