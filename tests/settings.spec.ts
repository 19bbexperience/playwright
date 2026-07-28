import { test, expect, type Page, type Locator } from "@playwright/test";

class SettingsPage {
  readonly page: Page;
  readonly languageDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    // try common selectors for a language dropdown
    this.languageDropdown = this.page.locator(
      'select#language, select[name="language"], select',
    );
  }

  async changeLanguage() {
    await this.page.click("text=Change language");
  }
}

test("User can change language", async ({ page }) => {
  const settingsPage = new SettingsPage(page);

  await page.goto("https://company.com");

  // 🛠️ TASK 2: Extract the action from the raw codegen line here
  // Remember your prefix: settingsPage.
  await settingsPage.languageDropdown.selectOption("Spanish");
});
