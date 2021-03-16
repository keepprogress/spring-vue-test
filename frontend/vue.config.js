// vue.config.js
module.exports = {
  // options...

  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8098) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8098',
        ws: true,
        changeOrigin: true
      },
      '/magic-api': {
        target: 'http://localhost:8098', // this configuration must corespond to  spring-boot's application-properties server.port
        ws: true,
        changeOrigin: true
      }
    }
  },
  // for maven compatible
  // see https://cli.vuejs.org/config/
  outputDir: 'target/dist',
  assetsDir: 'static'
}

// module.exports = {
//   configureWebpack: {
//     devServer: {
//       headers: { "Access-Control-Allow-Origin": "*" }
//     }
//   }
// };
