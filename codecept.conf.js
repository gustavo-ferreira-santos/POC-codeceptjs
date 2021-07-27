const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  name: 'codecept',
  tests: './tests/*/*_test.js',
  output: './output',
  helpers: {
    //config do helper para execução na farm
    // Appium: {
    // app: "bs://7e789f9a1516e1f4bd47520405140198887dc98d",
    // host: "hub-cloud.browserstack.com",
    // port: 4444,
    // platform: "Android",
    // user: "gustavoferreiras_UAPXRs",
    // key: "fFzPwosCBVFsPrssqvRp",
    // device: "Google Pixel 3",
    // os_version: '9.0'
    // }
    
    //config do helper para execução local
    Appium: {
      platform: process.env.PLATFORM,
      app:  `/Users/gustavosantos/Downloads/appsget/${process.env.APP}`,
      host: '192.168.15.8',
      port: 4728,
      desiredCapabilities: {
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/search_servic_page.js'
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
