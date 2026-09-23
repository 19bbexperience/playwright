import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.describe('Authentication Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should successfully log in with valid credentials', async ({ page }) => {
    await loginPage.login('practice', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/\/secure$/);

    const alertText = await loginPage.getErrorMessageText();
    expect(alertText).toContain('You logged into a secure area!');
  });

  test('should display an error message with invalid credentials', async () => {
    await loginPage.login('invalidUser', 'wrongPassword!');

    const alertText = await loginPage.getErrorMessageText();
    expect(alertText).toContain('Your password is invalid!');
  });
});
