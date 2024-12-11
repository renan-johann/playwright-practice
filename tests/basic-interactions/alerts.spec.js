import { test, expect } from "@playwright/test";

test.describe('Alert Handling Tests', () => {
  test('Should handle and validate a basic alert', async ({ page }) => {
    await test.step("Navigate to the alerts page", async () => {
      await page.goto('https://demoqa.com/alerts');
    });

    await test.step("Set up a listener and validate the alert message", async () => {
      page.once("dialog", async (dialog) => {
        const alertMessage = dialog.message();
        console.log(`Captured Alert Message: ${alertMessage}`);
        expect(alertMessage).toBe("You clicked a button");
        await dialog.accept(); // Close the alert by clicking "OK"
      });
    });

    await test.step("Trigger the alert by clicking the button", async () => {
      await page.locator('#alertButton').click({ timeout: 5000 });
    });
  });
});