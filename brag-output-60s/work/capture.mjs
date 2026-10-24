import { chromium } from '/home/cipolin/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import fs from 'fs';
const [mode, out, ...rest] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
p.on('pageerror', e => console.error('PAGEERR', e.message));
p.on('console', m => m.type() === 'error' && console.error('CONSOLE', m.text()));
await p.goto('http://127.0.0.1:8765/brag-output-60s/work/comp/index.html', { waitUntil: 'networkidle' });
await p.evaluate(() => window.ready);
fs.mkdirSync(out, { recursive: true });
const shot = async (t, file, type='png') => { await p.evaluate(t => window.render(t), t); await p.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))); await p.screenshot({ path: file, type, ...(type==='jpeg'?{quality:95}:{}) }); };
if (mode === 'stills') { for (const t of rest.map(Number)) await shot(t, `${out}/t${t.toFixed(2)}.png`); }
else { const fps = 30, n = Math.round(+rest[0] * fps); const from = +(rest[1]||0);
  for (let i = from; i < n; i++) { await shot(i / fps, `${out}/f${String(i).padStart(4,'0')}.jpg`, 'jpeg'); if (i % 60 === 0) console.log('frame', i); } }
await b.close();
