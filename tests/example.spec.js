import { test, expect } from '@playwright/test';

test.describe('Swag Labs Login Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('Should login successfully with valid user credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('input[data-test=login-button]').click();

    const productsHeader = page.locator('.title');
    await expect(productsHeader).toBeVisible();
    const headerText = await productsHeader.textContent();
    console.log("Header Text: " + headerText);

    expect(headerText).toContain('Products');
  });

  test('Should show error message for locked out user', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('input[data-test=login-button]').click();

    const errorLocator = page.locator('.error-message-container.error > h3[data-test=error]');
    await expect(errorLocator).toBeVisible();

    const messageError = await errorLocator.textContent();
    console.log("Message Error: " + messageError);

    expect(messageError).toContain('Epic sadface: Sorry, this user has been locked out.');
  });

});