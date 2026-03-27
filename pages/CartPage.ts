import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  getCartItems() {
    return this.page.locator('.cart_item');
  }

  getInventoryItemName() {
    return this.page.locator('.inventory_item_name');
  }

  async goToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}