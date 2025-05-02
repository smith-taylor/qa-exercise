import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://www.delta.com',
    specPattern: 'cypress/e2e/tests/**/*.cy.ts',
    supportFile: 'cypress/support/index.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});