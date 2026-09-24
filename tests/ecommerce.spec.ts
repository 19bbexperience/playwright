import { test, expect } from '@playwright/test';
import { FormPage } from '../Pages/FormPage';

test.describe('Form Submission Validation Tests', () => {
  let formPage: FormPage;

  test.beforeEach(async ({ page }) => {
    formPage = new FormPage(page);
    await formPage.navigate();
  });

  test('should successfully validate submission when fields are populated', async ({ page }) => {
    // Calls the exact method defined in our page object file
    await formPage.submitContactForm('John Doe', '1234567890');

    // Asserts that the navigation was successful
    await expect(page).toHaveURL(/.*form-validation.*/);
  });
});
