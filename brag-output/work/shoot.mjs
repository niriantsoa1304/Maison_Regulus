import { chromium } from '/home/cipolin/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto('file://' + process.argv[2]);
await p.waitForTimeout(3500);
await p.screenshot({ path: process.argv[3] + '/site-hero.png' });
const ids = ['a-propos','services','realisations','contact'];
for (const id of ids) { await p.evaluate(i => document.getElementById(i).scrollIntoView(), id); await p.waitForTimeout(2500); await p.screenshot({ path: `${process.argv[3]}/site-${id}.png` }); }
await b.close();
