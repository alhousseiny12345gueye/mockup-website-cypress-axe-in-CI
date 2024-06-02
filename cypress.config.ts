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

// Define the setupNodeEvents function to handle plugin tasks
setupNodeEvents(on, config) {
  // Define a new task using the 'task' event
  on('task', {
    // Define a 'sitemapLocations' task
    sitemapLocations() {
      // Define the paths of your application that you want to test
      // For example, if your page is at 'http://localhost:3000/', the path is '/'
      const paths = ["/", "/contact"]; // Add your paths here
      // Map over each path and prepend the baseUrl to create the full URL
      const locs = paths.map(path => `${config.e2e.baseUrl}${path}`);
      // Return the array of URLs
      return locs;
    },
  });
  // Return the config object to allow further chaining in Cypress
  return config;
  },
});