<template>
  <div class="bootstrap">
      <h1>{{ msg }}</h1>
    <h5>REST service call are easy to do with Vue.js, if you know how to do it.</h5>
    <p></p>
    <h6><b-badge variant="primary"> Let´s go!</b-badge> Call a Spring Boot REST backend service, by clicking a button:</h6>
    <p></p>
      <b-btn variant="success" @click="callHelloApi()" id="btnCallHello">/hello (GET)</b-btn>
      <p></p>
    <h4>Backend response: <b-alert :show="showResponse" dismissible @dismissed="showResponse=false">{{ backendResponse }}</b-alert></h4>

    <b-btn v-b-toggle.collapse1>Show Response details</b-btn>
    <p></p>

  </div>
</template>

<script>
import api from './backend-api'

export default {
    name: 'bootstrap',

    data () {
        return {
             msg: 'Nice Bootstrap candy!',
      showResponse: false,
      backendResponse: '',
      fullResponse: {
        config: {
          foo: '',
          bar: ''
        }
      },
      httpStatusCode: '',
      httpStatusText: '',
      headers: ['Noting here atm. Did you call the Service?'],
      errors: []
    }
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 20px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>