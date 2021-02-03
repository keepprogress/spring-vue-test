const chrome = require('chromedriver')

module.exports = {

  src_folders: ['tests/e2e/youtubee2e'],

  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9515
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
