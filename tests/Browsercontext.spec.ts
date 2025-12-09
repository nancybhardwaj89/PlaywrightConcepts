
import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';

test ('check brwoser context', async() =>
{

    let browser:Browser = await chromium.launch({headless: false, channel: "chrome"});
    let context1:BrowserContext = await browser.newContext();
    let context2:BrowserContext = await browser.newContext();
    let page1:Page = await context1.newPage();
     let page2:Page = await context2.newPage();
   await page1.goto("https://www.saucedemo.com/");
   await page1.locator('#user-name').fill("standard_user");
   await page1.locator('#password').fill("secret_sauce");
   await page1.locator('#login-button').click();

   //User 2
    await page2.goto("https://www.saucedemo.com/");
   await page2.locator('#user-name').fill("problem_user");
   await page2.locator('#password').fill("secret_sauce");
   await page2.locator('#login-button').click();

   context1.close();
   context2.close();


 await page1.waitForTimeout(5000);

 await page2.waitForTimeout(5000);





}
)