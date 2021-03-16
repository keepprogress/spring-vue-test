<template>
  <div class="form-signin">
    <form @submit.prevent="callLogin()">
    <h1 class="h3 mb-3 fw-normal">請登入</h1>
    <label for="inputUser" class="visually-hidden">Username</label>
    <input type="username" id="inputUser" class="form-control" placeholder="Username" v-model="user" required autofocus>
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      loginSuccess: false,
      loginError: false,
      user: '',
      password: '',
      error: false
    }
  },
  methods: {
    callLogin () {
      this.$store.dispatch('login', { user: this.user, password: this.password })
        .then(() => this.$router.push('/admin/protected'))
        .catch(error => {
          console.log('Vuex store state.loginSuccess: ' + this.$store.state.loginSuccess + ' Vuex store state.loginError ' + this.$store.state.loginError)
          console.log('Error: ' + error)
        })
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
