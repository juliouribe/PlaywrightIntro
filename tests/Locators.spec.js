import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Click on login button
  // await page.locator('id=login2').click();
  await page.click('id=login2');

  // provide username - CSS
  // await page.locator('#loginusername').fill('pavanol');
  await page.fill('#loginusername', 'pavanol');
  // await page.type('#loginusername', 'pavanol');

  // provide password - CSS
  await page.fill("input[id='loginpassword']", 'test@123');

  // Click on login button
  await page.click("//button[normalize-space(.)='Log in']");

  // Verify logout link presence
  const logoutLink = await page.locator("//a[normalize-space(.)='Log out']");

  await expect(logoutLink).toBeVisible();

  await page.close();
});
