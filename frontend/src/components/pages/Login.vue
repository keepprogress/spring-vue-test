<template>
  <div class="protected" v-if="loginSuccess">
    <h1>
      <b-badge variant="success">Access to protected site granted!</b-badge>
    </h1>
    <h5>If you're able to read this, you've successfully logged in.</h5>
  </div>
  <div class="unprotected" v-else-if="loginError">
    <h1>
      <b-badge variant="danger">You don't have rights here, mate :D</b-badge>
    </h1>
    <h5>Seams that you don't have access rights...</h5>
  </div>
  <div class="unprotected form-signin" v-else>
    <!-- <h1><b-badge variant="info">Please login to get access!</b-badge></h1>
    <h5>You're not logged in - so you don't see much here. Try to log in:</h5> -->

    <!-- <form @submit.prevent="callLogin()">
      <input type="text" placeholder="username" v-model="user" />
      <input type="password" placeholder="password" v-model="password" />
      <b-btn variant="success" type="submit">Login</b-btn>
      <p v-if="error" class="error">Bad login information</p>
    </form> -->
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
