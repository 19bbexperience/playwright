import { 
  test, 
  expect 
} from '@playwright/test';

test('Invalid Login Check', 
async ({ page }) => {

  // 1. Open a practice site
  await page.goto(
    'https://the-internet.herokuapp.com/login'
  );

  // 2. Type test data
  await page.getByLabel('Username')
    .fill('wrong_user');

  await page.getByLabel('Password')
    .fill('wrong_password');

  // 3. Click Login
  await page.locator('button', { 
    hasText: 'Login' 
  }).click();

  // 4. Assert error message
  let errorFlash = page
    .locator('#flash');

  await expect(errorFlash)
    .toBeVisible();

});

