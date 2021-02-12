const chrome = require('chromedriver')

module.exports = {

  src_folders: ['tests/e2e/youtubee2e'],
  page_objects_path: ['tests/e2e/youtubee2e/pageobj'],

  webdriver: {
    start_process: true,
    server_path: chrome.path,
    port: 9500
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
