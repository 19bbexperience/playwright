import { Page } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly languageDropdown: any;

  constructor(page: Page) {
    this.page = page;
    // 🛠️ TASK 1: Extract the locator from the raw codegen line here
    this.languageDropdown = page.getByLabel("Select Language");
  }
}
