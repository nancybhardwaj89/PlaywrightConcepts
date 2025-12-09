import { test, Page } from '@playwright/test'

test('store login session', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await page.context().storageState({path: 'auth/session.json'});


}

)
