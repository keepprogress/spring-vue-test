<template>
  <div class="bootstrap">
    <h1>{{ msg }}</h1>
    <h5>
      REST service call are easy to do with Vue.js, if you know how to do it.
    </h5>
    <p></p>
    <h6>
      <b-badge variant="primary"> Let´s go!</b-badge> Call a Spring Boot REST
      backend service, by clicking a button:
    </h6>
    <p></p>
    <b-btn variant="success" @click="callHelloApi()" id="btnCallHello"
      >/hello (GET)</b-btn
    >
    <p></p>
    <h4>
      Backend response:
      <b-alert
        :show="showResponse"
        dismissible
        @dismissed="showResponse = false"
        >{{ backendResponse }}</b-alert
      >
    </h4>

    <b-btn v-b-toggle.collapse1>Show Response details</b-btn>
    <p></p>
    <b-collapse id="collapse1" class="mt-2">
      <b-card>
        <p class="card-text">The Response hat this details</p>
        <b-btn v-b-toggle.collapse1_inner size="sm" variant="primary"
          >HTTP Status</b-btn
        >
        <b-collapse id="collapse1_inner" class="mt-2">
          <b-card>Status: {{ httpStatusCode }}</b-card>
          <b-card>Statustext: {{ httpStatusText }}</b-card>
        </b-collapse>

        <b-btn
          v-b-toggle.collapse2_inner
          size="sm"
          id="btnHttpHeaders"
          variant="warning"
          >HTTP Headers</b-btn
        >
        <b-collapse id="collapse2_inner" class="mt-2">
          <ul v-if="headers && headers.length">
            <li v-for="header of headers" :key="header.id">
              <b-card>Header: {{ header.msg }}</b-card>
            </li>
          </ul>
        </b-collapse>

        <b-btn v-b-toggle.collapse3_inner size="sm" variant="danger"
          >Full Request configuration</b-btn
        >
        <b-collapse id="collapse3_inner" class="mt-2">
          <p class="card-text">Config: {{ fullResponse.config }}</p>
        </b-collapse>
      </b-card>
    </b-collapse>

    <b-tooltip
      target="btnHttpHeaders"
      title="You should always know your HTTP Headers!"
    ></b-tooltip>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  </div>
</template>

<script>
import api from '../utils/backend-api'

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
      headers: [
        {
          msg: 'Noting here atm. Did you call the Service?',
          id: 1
        }
      ],
      errors: []
    }
  },
  methods: {
    callHelloApi () {
      api.hello().then((response) => {
        this.backendResponse = response.data
        this.httpStatusCode = response.status
        this.httpStatusText = response.statusText
        this.headers = response.headers
        this.fullResponse = response
        this.showResponse = true
      })
        .catch((e) => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 20px;
}

h1,
h2 {
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
