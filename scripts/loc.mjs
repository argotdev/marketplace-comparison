// Lines of code (non-blank, non-comment) for each adapter, each kit view and each server vendor module.
// Writes results/loc.json; the integration-effort CSV reads it.
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve(import.meta.dirname, '..');

function countFile(file) {
  const src = readFileSync(file, 'utf8');
  let inBlock = false;
  let n = 0;
  for (const raw of src.split('\n')) {
    const l = raw.trim();
    if (!l) continue;
    if (inBlock) {
      if (l.includes('*/')) inBlock = false;
      continue;
    }
    if (l.startsWith('/*')) {
      if (!l.includes('*/')) inBlock = true;
      continue;
    }
    if (l.startsWith('//')) continue;
    n++;
  }
  return n;
}
function countDir(dir) {
  if (!existsSync(dir)) return 0;
  let n = 0;
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) n += countDir(p);
    else if (/\.(ts|tsx)$/.test(f)) n += countFile(p);
  }
  return n;
}

const out = {};
for (const platform of readdirSync(resolve(root, 'packages/adapters')).sort()) {
  const srcDir = resolve(root, 'packages/adapters', platform, 'src');
  // Adapter = everything under src/ except the kit view, which lives in src/kit/.
  const adapter = countDir(srcDir) - countDir(join(srcDir, 'kit'));
  const server = existsSync(resolve(root, 'packages/server/src/vendors', `${platform}.ts`)) ? countFile(resolve(root, 'packages/server/src/vendors', `${platform}.ts`)) : 0;
  const kitDir = join(srcDir, 'kit');
  const kit = countDir(kitDir);
  const cardFile = ['OrderCard.tsx', 'OrderCardMessage.tsx'].map((f) => join(kitDir, f)).find((f) => existsSync(f));
  const kitCard = cardFile ? countFile(cardFile) : 0;
  const extra = platform === 'native' ? { nativeServer: countDir(resolve(root, 'packages/native-server/src')) } : {};
  out[platform] = { adapter, serverVendor: server, kitView: kit, kitOrderCardRenderer: kitCard, ...extra };
  console.log(platform, JSON.stringify(out[platform]));
}
writeFileSync(resolve(root, 'results/loc.json'), JSON.stringify(out, null, 2) + '\n');
