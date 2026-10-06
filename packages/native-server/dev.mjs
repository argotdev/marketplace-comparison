// Runs two instances of the native server locally (ports 4101 and 4102) without extra dependencies.
import { spawn } from 'node:child_process';
const kids = [1, 2].map((i) =>
  spawn('npx', ['tsx', process.argv.includes('--watch') ? 'watch' : 'src/index.ts', ...(process.argv.includes('--watch') ? ['src/index.ts'] : [])], {
    stdio: 'inherit',
    env: { ...process.env, INSTANCE_ID: String(i), PORT: String(4100 + i) },
  }),
);
for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, () => kids.forEach((k) => k.kill(sig)));
