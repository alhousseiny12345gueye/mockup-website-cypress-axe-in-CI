import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      projectId: "bjtoju"
      // implement node event listeners here
    },
  },
});
