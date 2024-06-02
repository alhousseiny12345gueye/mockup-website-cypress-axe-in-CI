// Import the defineConfig function from Cypress
const { defineConfig } = require("cypress");

// Export the Cypress configuration
module.exports = defineConfig({
  // Define configuration for end-to-end (e2e) tests
  e2e: {
    // Set the base URL of your application
    "baseUrl": "http://localhost:3000",
    // Set the default viewport height for your tests
    "viewportHeight": 1000,
    // Set the default viewport width for your tests
    "viewportWidth": 1280,
    // Set the project ID for your Cypress Dashboard Service
    projectId: "bjtoju",
  },
});