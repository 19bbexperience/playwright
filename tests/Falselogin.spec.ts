import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/FirstTestMaster";

test.describe("Login", () => {
  test("user can log in with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Given: the user is on the login page
    await loginPage.goto();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    // When: the user submits valid credentials
    await loginPage.login("tomsmith", "SuperSecretPassword!");

    // Then: verify the post-login state (intentionally failing assertion)
    await expect(
      page.getByText("You logged into a secure area!"),
    ).toBeVisible();
  });
});
