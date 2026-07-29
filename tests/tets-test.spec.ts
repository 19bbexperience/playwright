import { test } from "@playwright/test";

test("register flow clicks", async ({ page }) => {
  const navSignIn = page.locator('[data-test="nav-sign-in"]');
  const registerLink = page.locator('[data-test="register-link"]');
  const firstName = page.locator('[data-test="first-name"]');
  const heading = page.getByRole("heading", { name: "Customer registration" });
  const lastName = page.locator('[data-test="last-name"]');
  const dob = page.locator('[data-test="dob"]');
  const postalCode = page.locator('[data-test="postal_code"]');
  const houseNumber = page.locator('[data-test="house_number"]');

  await navSignIn.click();
  await registerLink.click();
  await firstName.click();
  await heading.click();
  await lastName.click();
  await dob.click();
  await postalCode.click();
  await houseNumber.click();
});
