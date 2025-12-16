import { chromium, test, Browser, Page } from "@playwright/test";

//IIFE
(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome', });
    let page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await page.getByRole('textbox', { name: 'First Name' }).fill("Nancy");
    await page.getByRole('textbox', { name: 'Last Name' }).fill("Testing");
    //To use a getbyRole locator, there must be <label> tag and <arai-label> attribue , and if both are availabe , 
    // you can use either of them.
    await page.getByRole('radio', { name: 'yes' }).click();
    await page.locator(`input[name="agree"]`).click();
    // await page.getByRole('link', {name:'Forgotten Password'}).click();
    //For headers, <h1> to <h6>, role will be heading, 
    let header: string = await page.getByRole('heading', { name: 'Register Account' }).innerText();
    console.log(header);
}
)();

