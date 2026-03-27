import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('deve finalizar checkout com sucesso', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Luiz');
  await page.locator('[data-test="lastName"]').fill('Carvalho');
  await page.locator('[data-test="postalCode"]').fill('36420-000');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});

test('deve exibir erro ao tentar continuar checkout sem preencher os dados obrigatorios', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Error');
});