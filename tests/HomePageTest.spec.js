// const {test, expect} = require('@playwright/test');

import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  const pageTitle = await page.title();
  console.log('Page Title: ', pageTitle);

  const pageURL = page.url();
  console.log('Page URL: ', pageURL);

  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  await page.close();
});

