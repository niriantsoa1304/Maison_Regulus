import { chromium } from '/home/cipolin/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto('http://127.0.0.1:8765/index.html', {waitUntil:'networkidle'});
const r = await p.evaluate(() => {
  const q = s => { const e=document.querySelector(s); if(!e) return null; const r=e.getBoundingClientRect(); return [s, Math.round(r.left), Math.round(r.top+scrollY), Math.round(r.width), Math.round(r.height)]; };
  return ['#services','.services__head','.services__grid','#portfolios','#site-vitrine','#realisations','#contact','.letter','#cf-name','#cf-company','#cf-email','.chips','.chip:nth-child(2)','#cf-message','.letter__submit','.nav','.fab','.cursor','.to-top'].map(q);
});
console.log(r.map(x=>JSON.stringify(x)).join('\n'));
await b.close();
