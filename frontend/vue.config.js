// vue.config.js
module.exports = {
  // options...
  outputDir: 'target/dist',
  assetsDir: 'static',
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8098) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    proxy: {
      '/api': {
        target: 'https://spring-vue-heroku-demo.herokuapp.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
