import { Builder } from 'selenium-webdriver';

class Base {
    constructor() {
        this.driverPromise = new Builder()
            .forBrowser('chrome')
            .build();
    }

    async openBrowser(url) {
         console.log("Browser Opened Successfully");
         await this.driver.get(url);
    }

    async closeBrowser() {
        console.log("Closing Browser");
        await this.driver.quit();
    }
}

const result = new Base();

await result.openBrowser('https://www.npmjs.com/');
await result.closeBrowser();