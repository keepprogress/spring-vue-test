import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/components/backend-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: false,
    loginError: false,
    userName: null
  },
  actions: {
    login ({ commit }, { user, password }) {
      return new Promise((resolve, reject) => {
        console.log("Accessing backend with user: '" + user)
        api.getSecured(user, password)
          .then(response => {
            console.log("Response: '" + response.data + "' with Statuscode " + response.status)
            if (response.status === 200) {
              console.log('Login successful')
              // place the loginSuccess state into our vuex store
              commit('login_success', {
                userName: user,
                userPass: password
              })
            }
            resolve(response)
          })
          .catch(error => {
            console.log('Error: ' + error)
            // place the loginError state into our vuex store
            commit('login_error', {
              userName: user
            })
            reject(new Error('Invalid credentials!'))
          })
      })
    }
  },
  mutations: {
    loginSuccess (state, name) {
      state.loginSuccess = true
      state.username = name
    },
    loginError (state) {
      state.loginError = true
      state.userName = name
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.loginSuccess
    },
    hasLoginErrored (state) {
      return state.loginError
    }
  }
})
