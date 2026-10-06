/**
 * Bundle size per platform. For each platform there is a minimal core entry (connect, send, receive)
 * and, where a React UI kit exists, a kit entry that mounts the kit's chat view. Both are built with the
 * same Vite production config, React externalised, and reported minified and gzipped.
 *
 *   npm run bundle -- [platform ...]
 */
import { build, type InlineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { gzipSync } from 'node:zlib';
import { REPO_ROOT } from '../lib/env.ts';
import { packageVersion } from '../lib/meta.ts';
import { PLATFORM_FACTS } from '../lib/platforms.ts';
import { csvEscape } from '../lib/results.ts';

const entriesDir = resolve(REPO_ROOT, 'harness/bundle/entries');
const outRoot = resolve(REPO_ROOT, 'harness/bundle/.out');
const only = process.argv.slice(2);

interface Row {
  platform: string;
  entry: 'core' | 'kit';
  package: string;
  version: string;
  minified_bytes: number | 'not run';
  gzip_bytes: number | 'not run';
  note: string;
}

async function buildEntry(platform: string, kind: 'core' | 'kit', file: string): Promise<{ min: number; gz: number }> {
  const outDir = resolve(outRoot, `${platform}-${kind}`);
  rmSync(outDir, { recursive: true, force: true });
  const cfg: InlineConfig = {
    root: REPO_ROOT,
    configFile: false,
    logLevel: 'warn',
    plugins: [react()],
    define: { 'process.env.NODE_ENV': '"production"' },
    build: {
      outDir,
      emptyOutDir: true,
      minify: 'esbuild',
      sourcemap: false,
      target: 'es2022',
      cssCodeSplit: false,
      lib: { entry: file, formats: ['es'], fileName: () => 'entry.js' },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client'],
        output: { codeSplitting: false } as Record<string, unknown>,
      },
    },
  };
  await build(cfg);
  let min = 0;
  let gz = 0;
  for (const f of readdirSync(outDir)) {
    if (!/\.(js|css)$/.test(f)) continue;
    const buf = readFileSync(resolve(outDir, f));
    min += buf.length;
    gz += gzipSync(buf, { level: 9 }).length;
  }
  return { min, gz };
}

async function main() {
  const rows: Row[] = [];
  const platforms = Object.keys(PLATFORM_FACTS).filter((p) => !only.length || only.includes(p));
  for (const platform of platforms) {
    const facts = PLATFORM_FACTS[platform];
    for (const kind of ['core', 'kit'] as const) {
      const candidates = [resolve(entriesDir, `${platform}.${kind}.ts`), resolve(entriesDir, `${platform}.${kind}.tsx`)];
      const file = candidates.find((c) => existsSync(c));
      const pkg = kind === 'core' ? facts.sdkPackage : (facts.kitPackage ?? '');
      if (!file) {
        rows.push({ platform, entry: kind, package: pkg, version: pkg ? packageVersion(pkg) : '', minified_bytes: 'not run', gzip_bytes: 'not run', note: kind === 'kit' && !facts.kitPackage ? 'no React UI kit for this platform' : 'no entry file written yet' });
        continue;
      }
      try {
        const { min, gz } = await buildEntry(platform, kind, file);
        rows.push({ platform, entry: kind, package: pkg, version: pkg ? packageVersion(pkg) : '', minified_bytes: min, gzip_bytes: gz, note: readNote(file) });
        console.log(`[bundle] ${platform} ${kind}: ${(min / 1024).toFixed(1)} KB min, ${(gz / 1024).toFixed(1)} KB gzip`);
      } catch (e) {
        rows.push({ platform, entry: kind, package: pkg, version: pkg ? packageVersion(pkg) : '', minified_bytes: 'not run', gzip_bytes: 'not run', note: `build failed: ${String((e as Error).message).split('\n')[0].slice(0, 200)}` });
        console.log(`[bundle] ${platform} ${kind}: FAILED ${(e as Error).message}`);
      }
    }
  }
  const file = resolve(REPO_ROOT, 'results/bundle-size.csv');
  const header = 'platform,entry,package,version,minified_bytes,gzip_bytes,built_at,note';
  const existing = existsSync(file) ? readFileSync(file, 'utf8').trim().split('\n').slice(1) : [];
  const kept = existing.filter((ln) => !platforms.some((p) => ln.startsWith(`${p},`)));
  const now = new Date().toISOString();
  const lines = [header, ...kept, ...rows.map((r) => [r.platform, r.entry, r.package, r.version, r.minified_bytes, r.gzip_bytes, now, r.note].map(csvEscape).join(','))];
  writeFileSync(file, lines.join('\n') + '\n');
  console.log(`[bundle] wrote ${file}`);
  void statSync;
}

/** First line comment of the entry file is the note. */
function readNote(file: string): string {
  const first = readFileSync(file, 'utf8').split('\n')[0];
  return first.startsWith('//') ? first.replace(/^\/\/\s*/, '') : '';
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
