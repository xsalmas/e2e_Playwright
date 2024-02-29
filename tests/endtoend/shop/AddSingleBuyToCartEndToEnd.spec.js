import {expect,test} from '@playwright/test';
import { PWProdutPage } from '../../../src/page_model/PIP/Product-Page'
import config from '../../../src/enviroment_configs/playwright.config';
//import {getURL} from '../../../src/Utility/commonfunctions';
import Utils from '../../../src/Utility/commonfunctions';
{import('@playwright/test').PlaywrightTestConfig};

//const {AddSingleBuyToCartEndToEnd} = require(`../../../fixtures/${config.use.brand}/AddSingleBuyToCartEndToEnd/group_single_organic_bath_towel`);


test('Add SingleBuyToCartInPIP', async({page}) => {
 
 const ProductPage = new PWProdutPage(page);
 let brand = config.use.brand;
 let env = config.use.env;
 let brandurl = config.use.brandurl;
 let utils = new Utils(brand);
 
 utils.getURL(env,brand,"flower-velvet-pillow");

console.log ("in test,  URL is " + utils.url)

  
  await ProductPage.goto(utils.url);
  await ProductPage.dismissemailCampaing();
 // await ProductPage.selectquantity(5);
  //await expect(page).toHaveTitle(/Bulb/);
  await expect(ProductPage.addtocartBtn).toBeVisible();
  await ProductPage.addtocartBtn.click();
  
}

)