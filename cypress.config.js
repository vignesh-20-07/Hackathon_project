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
    testIsolation: false,    
    async setupNodeEvents(on, config) {
      const { default: mochawesomePlugin } = await import('cypress-mochawesome-reporter/plugin.js');
      mochawesomePlugin(on);
      config = cypressBrowserPermissionsPlugin(on, config);
      const { default: grepPlugin } = await import('@cypress/grep/src/plugin.js');
      grepPlugin(config);
 
      return config;
    },
    env: {
      browserPermissions: {
        geolocation: 'allow',
      },
      grepFilterSpecs: true
    },
  },
});
 
 