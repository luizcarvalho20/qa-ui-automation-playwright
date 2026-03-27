import { Page } from '@playwright/test';
import { checkoutData } from '../fixtures/testData';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillFirstName(firstName: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page.locator('[data-test="lastName"]').fill(lastName);
  }

  async fillPostalCode(postalCode: string) {
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  }

  async fillCheckoutForm(
    firstName = checkoutData.firstName,
    lastName = checkoutData.lastName,
    postalCode = checkoutData.postalCode
  ) {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillPostalCode(postalCode);
  }

  async continue() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click();
  }

  getSuccessMessage() {
    return this.page.locator('[data-test="complete-header"]');
  }

  getErrorMessage() {
    return this.page.locator('[data-test="error"]');
  }
}