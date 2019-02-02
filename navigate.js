const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800});  
  await page.goto('https://www.google.com' , {waitUntil: 'networkidle2'});
  

  await browser.close();
})();