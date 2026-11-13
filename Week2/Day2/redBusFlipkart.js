const { chromium, webkit } = require("@playwright/test");

async function runAssignment() {

    // Open Microsoft Edge
    const edgeBrowser = await chromium.launch({
        channel: "msedge",
        headless: false
    });

    // Open a new page
    const redBusPage = await edgeBrowser.newPage();

    // Navigate to RedBus
    await redBusPage.goto("https://www.redbus.in");

    // Print title and URL
    console.log("RedBus Title:", await redBusPage.title());
    console.log("RedBus URL:", redBusPage.url());

    // Close Edge
    await edgeBrowser.close();
const webkitBrowser = await webkit.launch({
    headless: false
});
const flipkartPage = await webkitBrowser.newPage();
await flipkartPage.goto("https://www.flipkart.com");
console.log("Flipkart Title:", await flipkartPage.title());
console.log("Flipkart URL:", flipkartPage.url());

await webkitBrowser.close();
}

runAssignment();

