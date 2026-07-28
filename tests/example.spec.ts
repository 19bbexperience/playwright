import { test, expect, Page } from "@playwright/test";

// Inline minimal LoginPage to avoid external module import error
class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  get flashMessage() {
    return this.page.locator('.flash, .flash-message, #flash');
  }
}

test("Invalid Login Check", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("wrong_user", "wrong_password");

  await expect(loginPage.flashMessage).toBeVisible();
});
