(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-232a9e84"],{"2ab8":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loginSuccess?s("div",{staticClass:"protected"},[s("h1",[s("b-badge",{attrs:{variant:"success"}},[t._v("Access to protected site granted!")])],1),s("h5",[t._v("If you're able to read this, you've successfully logged in.")])]):t.loginError?s("div",{staticClass:"unprotected"},[s("h1",[s("b-badge",{attrs:{variant:"danger"}},[t._v("You don't have rights here, mate :D")])],1),s("h5",[t._v("Seams that you don't have access rights...")])]):s("div",{staticClass:"unprotected form-signin"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.callLogin()}}},[s("h1",{staticClass:"h3 mb-3 fw-normal"},[t._v("請登入")]),s("label",{staticClass:"visually-hidden",attrs:{for:"inputUser"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control",attrs:{type:"username",id:"inputUser",placeholder:"Username",required:"",autofocus:""},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),s("label",{staticClass:"visually-hidden",attrs:{for:"inputPassword"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(0),s("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"}},[t._v("Sign in")]),s("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017–2021")])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me ")])])}],o={name:"login",data:function(){return{loginSuccess:!1,loginError:!1,user:"",password:"",error:!1}},methods:{callLogin:function(){var t=this;this.$store.dispatch("login",{user:this.user,password:this.password}).then((function(){return t.$router.push("/admin/protected")})).catch((function(e){console.log("Vuex store state.loginSuccess: "+t.$store.state.loginSuccess+" Vuex store state.loginError "+t.$store.state.loginError),console.log("Error: "+e)}))}}},n=o,i=(s("4597"),s("2877")),u=Object(i["a"])(n,r,a,!1,null,"ebb206c4",null);e["default"]=u.exports},"421b":function(t,e,s){},4597:function(t,e,s){"use strict";s("421b")}}]);
//# sourceMappingURL=chunk-232a9e84.74547930.js.map