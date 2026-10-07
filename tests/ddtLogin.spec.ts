import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/FormPage';
import * as fs from 'fs';
import * as path from 'path';

// Safely reads your wallet file directly from your hard drive

const badLoginData = JSON.parse(fs.readFileSync(path.resolve('tests/loginData.json'), 'utf8'));

test.describe('Data-Driven Authentication Tests', () => {

  // This special loop tells Playwright to repeat the test block below
  // for every single bad credential pair in our JSON file!
  for (const credential of badLoginData) {

    test(`should reject invalid login for user: ${credential.username}`, async ({ page }) => {
      const formPage = new FormPage(page);

      // 1. Go to the practice login page
      await formPage.navigateToForgotPassword();

      // 2. Type in the bad username from our list
      await page.locator('#username').fill(credential.username);

      // 3. Type in the bad password from our list
      await page.locator('#password').fill(credential.password);

      // 4. Click Submit
      await formPage.triggerBlankValidationError();

      // 5. Assert that the site successfully blocks the entry and shows the error box
      const errorBox = formPage.getPasswordErrorLink();
      await expect(errorBox).toBeVisible();
    });
  }
});