import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login();
});

test('deve finalizar checkout com sucesso', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.goToCheckout();
  await checkoutPage.fillCheckoutForm();
  await checkoutPage.continue();
  await checkoutPage.finish();

  await expect(checkoutPage.getSuccessMessage()).toHaveText('Thank you for your order!');
});

test('deve exibir erro ao tentar continuar checkout sem preencher os dados obrigatórios', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.goToCheckout();
  await checkoutPage.continue();

  await expect(checkoutPage.getErrorMessage()).toBeVisible();
  await expect(checkoutPage.getErrorMessage()).toContainText('Error');
});