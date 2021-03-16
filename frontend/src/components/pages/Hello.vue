<template>
  <div class="hello">
    <img src="./../../assets/spring-boot-vuejs-logo.png" />
    <h1>{{ hellomsg }}</h1>
    <h2>詳細Readme請至專案github:</h2>
    <ul>
      <li>
        <a
          href="https://github.com/keepprogress/spring-vue-test"
          target="_blank"
          >github.com/keepprogress/spring-vue-test</a
        >
      </li>
    </ul>
    <h3>請選擇欲跳轉頁面</h3>
    <div class="col">
      <div>
        <button type="button" class="btn btn-info" @click="$router.push('/admin/about')">About this application</button>
        <br />
        <button type="button" class="btn btn-warning" @click="$router.push('/login')">Click to login</button>
        <br />
        <button type="button" class="btn btn-success" @click="$router.push('/admin/products')">Go to products page (no password)</button>
      </div>
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
