import { defineConfig } from 'cypress';
import { cypressBrowserPermissionsPlugin } from 'cypress-browser-permissions';
 
export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  video: true,
  scrollBehavior: 'nearest',
  chromeWebSecurity: false,
  e2e: {
<<<<<<< HEAD
    testIsolation:false,
=======
    testIsolation: false,    
>>>>>>> b31774a5db89aa0097373cf6ccfc4663c74c6332
    async setupNodeEvents(on, config) {
      // Use dynamic import with the .js extension as suggested by the error
      const mochawesomePlugin = await import('cypress-mochawesome-reporter/plugin.js');
      mochawesomePlugin.default(on);
 
      // Configure the Cypress browser permissions plugin
      config = cypressBrowserPermissionsPlugin(on, config);
 
      // Return the updated config so Cypress uses these settings
      return config;
    },
    env: {
      browserPermissions: {
        geolocation: 'allow', // Allow geolocation for your tests
      },
    },
  },
});
 
 