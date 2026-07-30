import { test, expect } from "@playwright/test";

test("should interact with the contact form fields reliably", async ({
  page,
}) => {
  await page.goto("https://practicesoftwaretesting.com/contact");

  const firstNameInput = page.locator("#first_name");
  const lastNameInput = page.locator("#last_name");
  const emailInput = page.locator("#email");
  const subjectSelect = page.locator("#subject");
  const messageInput = page.locator("#message");
  const submitBtn = page.locator('[data-test="contact-submit"], button[type="submit"], text=Submit');

  await submitBtn.waitFor({ state: "attached", timeout: 10_000 });

  await expect(firstNameInput).toBeVisible();
  await expect(lastNameInput).toBeVisible();
  await expect(emailInput).toBeVisible();
  await expect(subjectSelect).toBeVisible();
  await expect(messageInput).toBeVisible();
  await expect(submitBtn).toBeEnabled();

  await firstNameInput.fill("John");
  await lastNameInput.fill("Doe");
  await emailInput.fill("john.doe@example.com");
  await subjectSelect.selectOption({ label: "Customer service" });
  await messageInput.fill(
    "This is a realistic automated test message over twenty characters long.",
  );

  await expect(firstNameInput).toHaveValue("John");
  await expect(lastNameInput).toHaveValue("Doe");
  await expect(emailInput).toHaveValue("john.doe@example.com");
  await expect(messageInput).toHaveValue(
    "This is a realistic automated test message over twenty characters long.",
  );
  await expect(submitBtn).toBeEnabled();
});
