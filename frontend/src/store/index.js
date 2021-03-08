import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/backend-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: false,
    loginError: false,
    userName: null,
    userPass: null
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
              commit('loginSuccess', {
                userName: user,
                userPass: password
              })
            }
            resolve(response)
          })
          .catch(error => {
            console.log('Error: ' + error)
            // place the loginError state into our vuex store
            commit('loginError', {
              userName: user
            })
            reject(new Error('Invalid credentials!'))
          })
      })
    }
  },
  mutations: {
    loginSuccess (state, payload) {
      state.loginSuccess = true
      state.username = payload.userName
    },
    loginError (state, payload) {
      state.loginError = true
      state.userName = payload.userName
    }
  },
  getters: {
    isLoggedIn: state => state.loginSuccess,
    hasLoginErrored: state => state.loginError
  }
})
