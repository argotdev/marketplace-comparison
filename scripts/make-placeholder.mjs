// Renders public/listing-bike.svg to a PNG so the listing image is a real raster file.
import { chromium } from 'playwright';
import { resolve } from 'node:path';
const svg = resolve('packages/web/public/listing-bike.svg');
const out = resolve('packages/web/public/listing-bike.png');
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 640, height: 480 } });
await p.goto(`file://${svg}`);
await p.screenshot({ path: out, clip: { x: 0, y: 0, width: 640, height: 480 } });
await b.close();
console.log('wrote', out);
