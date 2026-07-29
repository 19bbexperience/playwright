import { Page, Locator, expect } from "@playwright/test";

export default class RegistrationPage {
  readonly page: Page;
  readonly navSignIn: Locator;
  readonly registerLink: Locator;
  readonly heading: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly dob: Locator;
  readonly postalCode: Locator;
  readonly houseNumber: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navSignIn = page.locator('[data-test="nav-sign-in"]');
    this.registerLink = page.locator('[data-test="register-link"]');
    this.heading = page.getByRole("heading", { name: "Customer registration" });
    this.firstName = page.locator('[data-test="first-name"]');
    this.lastName = page.locator('[data-test="last-name"]');
    this.dob = page.locator('[data-test="dob"]');
    this.postalCode = page.locator('[data-test="postal_code"]');
    this.houseNumber = page.locator('[data-test="house_number"]');
  }

  async openRegistration() {
    await this.navSignIn.click();
    await this.registerLink.click();
    await this.heading.waitFor();
  }

  async fillName(first: string, last: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
  }

  async fillDob(value: string) {
    await this.dob.fill(value);
  }

  async fillAddress(postal: string, house: string) {
    await this.postalCode.fill(postal);
    await this.houseNumber.fill(house);
  }

  async assertRegistrationVisible() {
    await expect(this.heading).toBeVisible();
  }
}
