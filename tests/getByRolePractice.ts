import { chromium, test, Browser, Page } from "@playwright/test";

//IIFE
(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome', });
    let page: Page = await browser.newPage();
    await page.goto("https://www.freshworks.com/");
    let header1: string = await page.getByRole('heading', { name: 'Uncomplicate' }).innerText();
    console.log(header1);
    //span, div and <p> getByRole is not applicable, better to use page.locator(css or xpath) or you can use getByText
    let header2: string = await page.getByText('Freshworks provides').innerText();
    console.log(header2);
    //Suppose there is another h2 tag which starts with same text "Uncomplicate", 
    // then you need to proivde level in getByRole locator, levelling will work in case of headers only and range of level is 1 to 6

    //page.getByRole('heading', {name: 'Uncomplicate', level:2});
}
)();