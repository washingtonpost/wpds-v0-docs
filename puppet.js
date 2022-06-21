const puppeteer = require("puppeteer");

let componentName = `checkbox`;

async function getScreenShot() {
  const browser = await puppeteer.launch({
    browserWSEndpoint: `ws://0.0.0.0:8080`, // <-- connect to a server running somewhere
    ignoreHTTPSErrors: true,
    defaultViewport: {
      width: 50,
      height: 50,
    },
  });
  const page = await browser.newPage();
  await page.goto(
    `https://build.washingtonpost.com/components/${componentName}`
  );

  const componentElem = await page.$("#__next > div > main > article > pre ");
  await componentElem.screenshot({ path: "public/img/social.png" });

  await browser.close();

  return {
    fp: "file:///Users/helmsc/Desktop/respositories/wpds-docs/public/img/social.png",
  };
}

getScreenShot();
