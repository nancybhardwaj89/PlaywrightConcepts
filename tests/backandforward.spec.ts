import { test } from '@playwright/test';

test('Broswer Back & Forward Test', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    let title: string = await page.title();
    console.log('Amazon Title is:' + title);
    await page.goto("https://www.saucedemo.com/");
    let titleSwagLabs: String = await page.title();
    console.log("SWag Labs Title is:" + titleSwagLabs);
    await page.goBack();
    console.log(await page.title());
    await page.goForward();
    console.log(await page.title());
    await page.goBack();
    await page.waitForTimeout(5000);
    //To Refresh the page
    await page.reload();
}
)