import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/FormPage';

test.describe('Authentication Security Edge Cases', () => {

  test('should display the validation error link when submitting a blank password reset form', async ({ page }) => {
    const formPage = new FormPage(page);

    // 1. Go to the password reset view
    await formPage.navigateToForgotPassword();

    // 2. Click submit blank to kick off the validation checks
    await formPage.triggerBlankValidationError();

    // 3. Grab the error locator defined in our POM class
    const errorLink = formPage.getPasswordErrorLink();

    // 4. Run the core assertion to verify the ticket requirements!
    await expect(errorLink).toBeVisible();
  });

});