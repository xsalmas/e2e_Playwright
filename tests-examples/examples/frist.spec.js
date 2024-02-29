//import { After } from '@cucumber/cucumber';
import { TestCaseHookDefinition } from '@cucumber/cucumber';
import {expect, test} from '@playwright/test';
import config from '../../src/enviroment_configs/playwright.config';
{import('@playwright/test').PlaywrightTestConfig};

let brand = config.use.brand
console.log(config.use.brand);
//test('PIPPage has a Add to Cart Buttn', async({page}) => {

//await page.goto('https://www.pbteen.com/products/favorite-tee-comforter-sham/');


test('test', async ({ page }) => {
    await page.goto('https://www.pbteen.com/');
    await page.getByRole('link', { name: 'minimize' }).click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('backpack');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByRole('link', { name: 'Gear-Up Aurora Recycled Backpacks' }).first().click();
    await page.locator('[data-test-id="pip-river-container"] [data-test-id="btn-addtobasket"]').click();
    await page.locator('[data-test-id="pip-river-container"] [data-test-id="btn-addtobasket"]').click();
  });

//})