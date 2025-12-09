import {test, Page } from '@playwright/test'

test.use({storageState: 'auth/session.json'});
test('test cart page without login', async ({page}) => 
{
    await page.goto('https://www.saucedemo.com/cart.html');
    await page.waitForTimeout(8000);



}






)