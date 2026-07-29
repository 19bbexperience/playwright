import { test } from '@playwright/test';
import RegistrationPage from '../Pages/RegistrationPage';

test('register flow submits registration', async ({ page }) => {
  const registration = new RegistrationPage(page);

  await registration.openRegistration();
  await registration.assertRegistrationVisible();

  await registration.fillName('Alice', 'Smith');
  await registration.fillDob('1985-05-15');
  await registration.fillAddress('90210', '42');
  await page.locator('[data-test="register-submit"]').click();
});