export const config = {
    runner: 'local',
    specs: ['./test/wikipedia.test.js'], //
    maxInstances: 1,
  
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'Pixel 4 API 30',
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': 'org.wikipedia',
      'appium:appWaitActivity': 'org.wikipedia.*',
      'appium:noReset': true,
      'appium:newCommandTimeout': 240,
    }],
  
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
  
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
  
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
  };