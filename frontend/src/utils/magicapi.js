import axios2 from 'axios'

const magicapi = axios2.create({
  baseUrl: '/magic-api',
  timeout: 1000
})

export default {
  getProducts () {
    return magicapi.get()
  }

}
