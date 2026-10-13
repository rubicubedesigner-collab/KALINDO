// Optional automation: npm install --no-save --package-lock=false playwright
// Uses system Chromium when available; otherwise install a Playwright browser.
import {chromium} from 'playwright';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
const executablePath=process.env.CHROMIUM_PATH || (existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
const browser=await chromium.launch({executablePath,args:['--no-sandbox']});
try{const page=await browser.newPage({viewport:{width:1640,height:1004}});await page.goto(process.env.DECK_URL||'http://127.0.0.1:3000/');await page.waitForFunction(()=>window.kalindo?.slides.length===24);await page.evaluate(()=>document.fonts.ready);await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));await page.emulateMedia({media:'print'});await page.pdf({path:resolve('KALINDO-Destination-Identity.pdf'),preferCSSPageSize:true,printBackground:true});console.log('Exported KALINDO-Destination-Identity.pdf (24 slides).')}finally{await browser.close()}
