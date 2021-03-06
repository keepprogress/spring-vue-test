import axios2 from 'axios'

const magicapi = axios2.create({
  baseURL: '/magic-api',
  timeout: 3500
})

export default {
  getProducts () {
    return magicapi.get('/products')
  }

}
