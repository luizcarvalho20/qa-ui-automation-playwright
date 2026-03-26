import { test, expect } from '@playwright/test';

test('deve finalizar checkout com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/cart.html/);

  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one.html/);

  await page.locator('[data-test="firstName"]').fill('Luiz');
  await page.locator('[data-test="lastName"]').fill('Carvalho');
  await page.locator('[data-test="postalCode"]').fill('36420-000');

  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL(/checkout-step-two.html/);

  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');

  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});