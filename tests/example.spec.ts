import { test, expect, Page, Locator } from "@playwright/test";

// 1. Clean, Modernized Page Object Model
class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // ✅ Replaced raw IDs with modern, user-facing accessibility methods
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'submit', exact: true });
    
    // For status alerts/flash messages, targeting by role or text is standard
    this.flashMessage = page.getByText(/alert|error|success/i);
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

// 2. Active Test Block
test('successful login flow example', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('myUsername', 'myPassword');

  // Verify the final element using our clean locator strategy
  await expect(loginPage.flashMessage).toBeVisible();
});

