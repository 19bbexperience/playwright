import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where your test files are located
  testDir: './tests',

  // Maximum time one test can run for (60 seconds)
  timeout: 60000,

  // Run tests in files in parallel to maximize performance
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI to handle environmental flakiness
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI to preserve resources if needed
  workers: process.env.CI ? 1 : undefined,

  // Modern reporting structure perfect for portfolio visibility
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  // Shared settings for all test executions
  use: {
    // Base URL explicitly pointing to the practice sub-domain platform
    baseURL: 'https://practice.expandtesting.com',

    // Action timeout for individual interactions like click() or fill()
    actionTimeout: 15000,

    // Capture visual context on failures for easier debugging
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers using zero CSS/Modern layouts */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

