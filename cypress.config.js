module.exports = {
  "reporter": "cypress-mochawesome-reporter",
  "defaultCommandTimeout": 30000,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
 
  "video": true,
  "scrollBehavior": "nearest",
  "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};