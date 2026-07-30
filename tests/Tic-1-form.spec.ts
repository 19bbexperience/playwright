import { test, expect } from "@playwright/test";

test("should validate contact form fields and toggle errors dynamically", async ({
  page,
}) => {
  // 1. Go to the live practice software testing contact page
  await page.goto("https://practicesoftwaretesting.com");

  // Locate the form elements
  const firstNameInput = page.locator("#first_name");
  const lastNameInput = page.locator("#last_name");
  const emailInput = page.locator("#email");
  const subjectSelect = page.locator("#subject");
  const messageInput = page.locator("#message");

  // make the submit locator resilient: prefer data-test, fall back to button[type=submit] or button text
  const submitBtn = page.locator('[data-test="contact-submit"], button[type="submit"], text=Submit');

  // wait for the form/submit to be attached/visible to avoid "element(s) not found"
  await submitBtn.waitFor({ state: "attached", timeout: 10_000 });

  // 2. Verify the submit button is initially disabled
  await expect(submitBtn).toBeDisabled();

  // 3. TODO: Click into the First Name field, clear it, and blur (click outside)
  // to trigger the validation error.
  await firstNameInput.focus();
  await firstNameInput.fill("");
  await page.click("h3");
  // clicks the header to remove focus / blur

  // 4. TODO: Assert that the error alert text appears and says 'First name is required'
  const firstNameError = page.locator("#first_name_alert");
  await expect(firstNameError).toBeVisible();
  await expect(firstNameError).toHaveText("First name is required");

  // 5. Fill out all the form fields correctly to make the form valid
  await firstNameInput.fill("John");
  await lastNameInput.fill("Doe");
  await emailInput.fill("john.doe@example.com");
  await subjectSelect.selectOption({ label: "Customer service" });
  await messageInput.fill(
    "This is a realistic automated test message over twenty characters long.",
  );

  // 6. TODO: Assert that the first name error alert is now hidden/detached
  // YOUR CODE HERE
  await expect(firstNameError).toBeHidden();

  // 7. TODO: Assert that the submit button is now enabled
  // YOUR CODE HERE
  await expect(submitBtn).toBeEnabled();
});
