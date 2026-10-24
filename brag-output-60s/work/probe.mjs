import { chromium } from '/home/cipolin/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const out = process.argv[2];
const b = await chromium.launch();
for (const [name, vp, mobile] of [['desk', { width: 1440, height: 900 }, false], ['mob', { width: 390, height: 844 }, true]]) {
  const p = await b.newPage({ viewport: vp, deviceScaleFactor: 2, isMobile: mobile, hasTouch: mobile });
  await p.goto('https://niriantsoa.me', { waitUntil: 'networkidle', timeout: 45000 });
  await p.waitForTimeout(6000);
  try { await p.getByText('FR', { exact: true }).first().click({ timeout: 3000 }); } catch (e) {}
  await p.waitForTimeout(1200);
  const h = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 300) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(250); }
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(1500);
  // keep personal contact details out of the video
  const n = await p.evaluate(() => {
    let n = 0;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const s = w.currentNode.textContent; if (/@|\+261|github\.com/i.test(s)) { w.currentNode.parentElement.style.filter = 'blur(7px)'; n++; } }
    document.querySelectorAll('a[href^="mailto"],a[href^="tel"],a[href*="github"]').forEach(a => { a.style.filter = 'blur(7px)'; n++; });
    return n;
  });
  const cut = await p.evaluate(() => Math.round(document.querySelector('#contact').getBoundingClientRect().top + scrollY));
  await p.screenshot({ path: `${out}/${name}-full.png`, fullPage: true, clip: { x: 0, y: 0, width: vp.width, height: cut } });
  const secs = await p.evaluate(() => [...document.querySelectorAll('section[id]')].map(s => [s.id, Math.round(s.getBoundingClientRect().top + scrollY)]));
  console.log(name, 'blurred', n, 'cut', cut, JSON.stringify(secs));
}
await b.close();
