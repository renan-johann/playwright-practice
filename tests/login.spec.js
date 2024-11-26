import { test, expect } from '@playwright/test';

test.describe('Swag Labs Login Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('Should login successfully with valid user credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(process.env.USERNAME_STANDARD);
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD_STANDARD);
    await page.locator('input[data-test=login-button]').click();

    const productsHeader = page.locator('.title');
    await expect(productsHeader).toBeVisible();
    const headerText = await productsHeader.textContent();

    expect(headerText).toContain('Products');
  });

  test('Should show error message for locked out user', async ({ page }) => {
    await page.getByPlaceholder('Username').fill(process.env.USERNAME_LOCKED);
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD_LOCKED);
    await page.locator('input[data-test=login-button]').click();

    const errorLocator = page.locator('.error-message-container.error > h3[data-test=error]');
    await expect(errorLocator).toBeVisible();

    const messageError = await errorLocator.textContent();

    expect(messageError).toContain('Epic sadface: Sorry, this user has been locked out.');
  });

});