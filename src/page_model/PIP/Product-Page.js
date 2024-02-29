const {expect} = require('@playwright/test');
exports.PWProdutPage = class PWProdutPage{
  /**
   * @param {import('@playwright/test').Page} page
   */
   constructor(page)
   {
    this.page = page;
    //this.addtocartBtn = page.locator('[data-test-id="pip-river-container"] [data-test-id="btn-addtobasket"]');
    
    this.addtoCart2 = page.locator('(data-test-id="btn-addtobasket")[1]')
    this.addtocartBtn = page.locator('.btn-conversion')
    this.inStockToggle = page.getByLabel('In Stock & Ready to Ship');
    this.quantityinput =  page.locator('[data-test-id="qty-input"]'); 
    this.quantitydecrease = page.locator('[data-test-id="decrease-count"]');
    this.quantityincrease = page.locator('[data-test-id="increase-count"]')
    this
   }
   async goto(url)
   {
    console.log("in productPage .goto URL is " + url)
    await this.page.goto(url);
   }

   async selectquantity(num)
   {
    await this.page.quantityinput.fill(num);
   }

   async addtocart()
   {
    this.page.addtocartBtn.click();
   }
    
   async dismissemailCampaing()
   {
    //await this.page.locator('#join-email-campaign').getByRole('img', { name: 'Pottery Barn' }).click();
    //await this.page.getByRole('link', { name: 'No, Thanks' }).click();
    await this.page.getByRole('link', { name: 'Minimize' }).click();
   }

}
/**
 * test('test', async ({ page }) => {
    await page.getByRole('link', { name: 'Minimize' }).click();
    await page.getByLabel('In Stock & Ready to Ship').check();
    await page.locator('[data-test-id="qty-input"]').click();
    await page.locator('[data-test-id="qty-input"]').fill('9');
    await page.locator('[data-test-id="vertical-rvi-carousel-container"]').click();
    await page.locator('[data-test-id="decrease-count"]').click();
    await page.locator('[data-test-id="increase-count"]').click();
    await page.locator('[data-test-id="full-attribute-value-faded-navy"] [data-test-id="swatch-image"]').click();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('link', { name: 'Request a Free Design Appointment' }).click()
    ]);
    await page.locator('[data-test-id="btn-addtobasket"]').click();
  });
  import { test, expect } from '@playwright/test';
  test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Minimize' }).click();
});

test('test', async ({ page }) => {
  await page.locator('#join-email-campaign').getByRole('img', { name: 'Pottery Barn' }).click();
  await page.getByRole('link', { name: 'No, Thanks' }).click();
  await page.locator('[data-test-id="no-swatch-label-lights-\\+-standing-posts"]').click();
  await page.locator('[data-test-id="price-qty-ful-fillment"] [data-test-id="qty-input"]').click();
  await page.locator('[data-test-id="price-qty-ful-fillment"] [data-test-id="qty-input"]').fill('19');
  await page.locator('[data-test-id="pip-river-container"] [data-test-id="btn-addtobasket"]').click();
});
  */
  

