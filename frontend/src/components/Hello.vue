<template>
  <div class="hello">
    <img src="./../assets/spring-boot-vuejs-logo.png" />
    <h1>{{ hellomsg }}</h1>
    <h2>See the sources here:</h2>
    <ul>
      <li>
        <a
          href="https://github.com/keepprogress/spring-vue-test"
          target="_blank"
          >github.com/keepprogress/spring-vue-test</a
        >
      </li>
    </ul>
    <h3>This site contains more stuff :)</h3>
    <div class="col">
      <div>
        <button type="button" class="btn btn-danger">
          <router-link to="login">Administrater or Authorized User click here</router-link>
        </button>
      </div>
      <div>

      </div>
        <button type="button" class="btn btn-info">
          <router-link to="admin/products">Operation staff click here(doesn't require password)</router-link>
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    hellomsg: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1
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
