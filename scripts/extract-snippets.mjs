// Extracts the `// snippet:start send-order-card` ... `// snippet:end` block from every adapter into
// docs/snippets/<platform>.md. The article prints these one after another.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const adaptersDir = resolve(root, 'packages/adapters');
mkdirSync(resolve(root, 'docs/snippets'), { recursive: true });
const index = ['# Send-the-order-card snippets', '', 'One per platform, extracted verbatim from each adapter by `npm run snippets`. Every vendor file starts with the Sendbird baseline so the pair reads on its own.', ''];
function extract(platform) {
  const file = resolve(adaptersDir, platform, 'src/index.ts');
  if (!existsSync(file)) return null;
  const src = readFileSync(file, 'utf8');
  const m = /\/\/ snippet:start send-order-card\n([\s\S]*?)\n\s*\/\/ snippet:end/.exec(src);
  if (!m) return null;
  const lines = m[1].split('\n');
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  const body = lines.map((l) => l.slice(indent)).join('\n');
  const loc = lines.filter((l) => l.trim() && !l.trim().startsWith('//')).length;
  const pkg = JSON.parse(readFileSync(resolve(adaptersDir, platform, 'package.json'), 'utf8'));
  const deps = Object.entries(pkg.dependencies ?? {}).filter(([k]) => !k.startsWith('@mkt/')).map(([k, v]) => `${k}@${v}`);
  return { body, loc, deps };
}
const baseline = extract('sendbird');
for (const platform of readdirSync(adaptersDir).sort()) {
  const file = resolve(adaptersDir, platform, 'src/index.ts');
  if (!existsSync(file)) continue;
  const src = readFileSync(file, 'utf8');
  const m = /\/\/ snippet:start send-order-card\n([\s\S]*?)\n\s*\/\/ snippet:end/.exec(src);
  if (!m) {
    console.warn(`[snippets] ${platform}: no snippet markers`);
    continue;
  }
  // Dedent to the shallowest indentation in the block.
  const lines = m[1].split('\n');
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  const body = lines.map((l) => l.slice(indent)).join('\n');
  const loc = lines.filter((l) => l.trim() && !l.trim().startsWith('//')).length;
  const pkg = JSON.parse(readFileSync(resolve(adaptersDir, platform, 'package.json'), 'utf8'));
  const deps = Object.entries(pkg.dependencies ?? {}).filter(([k]) => !k.startsWith('@mkt/')).map(([k, v]) => `${k}@${v}`);
  const out = [`# ${platform}: send the order card`, ''];
  if (platform !== 'sendbird' && baseline) {
    out.push(`## Sendbird (baseline): ${baseline.deps.join(', ')}, ${baseline.loc} lines`, '', '```ts', baseline.body, '```', '', `## ${platform}: ${deps.join(', ') || 'no SDK (native build)'}, ${loc} lines`, '');
  } else {
    out.push(`Source: \`packages/adapters/${platform}/src/index.ts\`. SDK: ${deps.join(', ') || 'none (native build)'}. ${loc} lines excluding comments.`, '');
  }
  out.push('```ts', body, '```', '');
  out.splice(0, out.length, out.join('\n'));
  writeFileSync(resolve(root, 'docs/snippets', `${platform}.md`), out[0]);
  index.push(`- [${platform}](./${platform}.md): ${loc} lines, ${deps.join(', ') || 'no SDK'}`);
  console.log(`[snippets] ${platform}: ${loc} lines`);
}
writeFileSync(resolve(root, 'docs/snippets/README.md'), index.join('\n') + '\n');
