import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Click on login button
  // await page.locator('id=login2').click();
  await page.click('id=login2');

  // 
});
