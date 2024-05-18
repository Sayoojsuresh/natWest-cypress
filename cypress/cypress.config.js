const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder:"fixtures",
    setupNodeEvents(on, config) {
      return  require('./plugins/index.js')(on,config)
    },
    specPattern:"e2e/**/*.feature",
    supportFile:"support/e2e.js",
    defaultCommandTimeout: 30000
  },
});

