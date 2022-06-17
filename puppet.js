const puppeteer = require('puppeteer');

let componentName = `alert-banner`;

async function getScreenShot() {
  const browser = await puppeteer.launch({
    defaultViewport: {
        width: 300,
        height: 1000,
    }
  });
  const page = await browser.newPage();
  await page.goto(`https://build.washingtonpost.com/components/${componentName}`);

  const componentElem = await page.$("#__next > div > main > article > div.wpds-c-liwveV");
  await componentElem.screenshot({ path: 'xample.png' });

  await browser.close();

  return {
    fp: 'file:///Users/helmsc/Desktop/respositories/wpds-docs/xample.png'
  };
};

getScreenShot();