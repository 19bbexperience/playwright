import { test, expect } from '@playwright/test';

test.describe('Visual Regression Layout Assurances', () => {

  test('should verify the login page looks pixel-perfect without layout shifts', async ({ page }) => {
    // 1. Walk onto the page
    await page.goto('https://practicetestautomation.com');

    // 2. Playwright checks if a previous baseline photo exists.
    // If it doesn't, it will automatically snap its first baseline photo right now!
    await expect(page).toHaveScreenshot('login-page-baseline.png');
  });

});