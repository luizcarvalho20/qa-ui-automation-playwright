import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('deve realizar login com credenciais válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login();

  await expect(page).toHaveURL(/inventory/);
});