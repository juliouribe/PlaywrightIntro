import { test, expect } from '@playwright/test';

test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.waitForSelector("#tbodyid");

  // const links = await page.$$('a');

  // for (const link of links) {
  //   const linkText = await link.textContent();
  //   console.log(linkText);
  // }
  // page.waitForSelector("//div[@id='tbodyid']//h4/a");
  const products = await page.$$eval("#tbodyid h4 > a ", (links) => {
    return links.map((link) => {
      return {
        text: link.textContent,
        url: link.href,
      };
    });
  });
  console.log(products);
  // const products = await page.locator("//div[@id='tbodyid']//h4/a").all();
  // await products();
});
