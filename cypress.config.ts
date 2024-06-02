import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'bjtoju',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});