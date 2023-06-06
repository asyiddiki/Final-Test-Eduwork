const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    BASE_URL: "https://gorest.co.in/public/v2",
    API_KEY: "129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e",
  },
});
