module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['tests/e2e/specs'],
    out_folders: 'tests/e2e/reports',
    globals_path: 'tests/e2e/globals.js',
    
    selenium: {
        start_process: true,
        port: 4444,
        server_path: require('selenium-server').path,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path,
            'webdriver.gecko.driver': require('geckodriver').path
        }
    },
  
    webdriver: {
      start_process: false,
    },

    'selenium.chrome': {
        extends: 'selenium',
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                w3c: false
            }
        }
    },

    'selenium.firefox': {
        extends: 'selenium',
        desiredCapabilities: {
            browserName: 'firefox'
        }
    },
  
    test_settings: {
      default: {
        launch_url: 'https://nightwatchjs.org',
      }
    }
  };