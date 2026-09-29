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
    
   // 1. Navigate directly to the login page
  async navigateToForgotPassword() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/'); 
  }

  // 2. Click submit without typing anything to trigger the validation check
  async triggerBlankValidationError() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  // 3. Define the locator for the specific error link asked for in the ticket
  getPasswordErrorLink() {
    return this.page.locator('#error'); 
  
  }
}

