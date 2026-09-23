import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  // Define explicit types for Playwright locators
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Zero CSS: Locating elements strictly via user-centric accessibility roles and text
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('#flash'); // Custom status/alert box wrapper container text validation
  }

  /**
   * Navigates to the practice login page endpoint
   */
  async navigate(): Promise<void> {
    // Uses the baseURL configured earlier and appends the path
    await this.page.goto('/login');
  }

  /**
   * Encapsulates the entire login action sequence
   */
  async login(username: string, stringPassword: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(stringPassword);
    await this.loginButton.click();
  }

  /**
   * Retrieves any visible warning error banner message text string
   */
  async getErrorMessageText(): Promise<string | null> {
    return await this.errorMessage.textContent();
  }
}
