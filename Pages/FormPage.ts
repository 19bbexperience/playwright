import { type Locator, type Page } from '@playwright/test';

export class FormPage {
  private readonly page: Page;
  private readonly contactNameInput: Locator;
  private readonly contactNumberInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Pure Zero CSS: Finding elements strictly by their user-visible labels
    this.contactNameInput = page.getByLabel('Contact Name');
    this.contactNumberInput = page.getByLabel('Contact number');
    this.submitButton = page.getByRole('button', { name: 'Register' });
  }

  /**
   * Navigates directly to the live form validation sandbox view
   */
  async navigate(): Promise<void> {
    await this.page.goto('/form-validation');
  }

  /**
   * Fills and registers the contact form details
   */
  async submitContactForm(name: string, phoneNumber: string): Promise<void> {
    await this.contactNameInput.fill(name);
    await this.contactNumberInput.fill(phoneNumber);
    await this.submitButton.click();
  }
}

